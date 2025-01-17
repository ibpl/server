<?php

/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace OCA\DAV;

use OCA\DAV\CalDAV\CalDavBackend;
use OCA\DAV\CardDAV\CardDavBackend;
use OCA\DAV\CardDAV\SyncService;
use OCP\App\IAppManager;
use OCP\Defaults;
use OCP\IUser;
use OCP\IUserManager;
use Symfony\Component\Uid\Factory\UlidFactory;
use OCP\Util;
use Psr\Log\LoggerInterface;

class HookManager {

	/** @var IUser[] */
	private $usersToDelete = [];

	/** @var array */
	private $calendarsToDelete = [];

	/** @var array */
	private $subscriptionsToDelete = [];

	/** @var array */
	private $addressBooksToDelete = [];

	public function __construct(
		private IUserManager $userManager,
		private SyncService $syncService,
		private CalDavBackend $calDav,
		private CardDavBackend $cardDav,
		private Defaults $themingDefaults,
		private IAppManager $appManager,
		private UlidFactory $Uidfactory
	) {
	}

	public function setup() {
		Util::connectHook('OC_User',
			'post_createUser',
			$this,
			'postCreateUser');
		\OC::$server->getUserManager()->listen('\OC\User', 'assignedUserId', function ($uid): void {
			$this->postCreateUser(['uid' => $uid]);
		});
		Util::connectHook('OC_User',
			'pre_deleteUser',
			$this,
			'preDeleteUser');
		\OC::$server->getUserManager()->listen('\OC\User', 'preUnassignedUserId', [$this, 'preUnassignedUserId']);
		Util::connectHook('OC_User',
			'post_deleteUser',
			$this,
			'postDeleteUser');
		\OC::$server->getUserManager()->listen('\OC\User', 'postUnassignedUserId', function ($uid): void {
			$this->postDeleteUser(['uid' => $uid]);
		});
		\OC::$server->getUserManager()->listen('\OC\User', 'postUnassignedUserId', [$this, 'postUnassignedUserId']);
		Util::connectHook('OC_User', 'changeUser', $this, 'changeUser');
	}

	public function postCreateUser($params) {
		$user = $this->userManager->get($params['uid']);
		if ($user instanceof IUser) {
			$this->syncService->updateUser($user);
		}
	}

	public function preDeleteUser($params) {
		$uid = $params['uid'];
		$userPrincipalUri = 'principals/users/' . $uid;
		$this->usersToDelete[$uid] = $this->userManager->get($uid);
		$this->calendarsToDelete = $this->calDav->getUsersOwnCalendars($userPrincipalUri);
		$this->subscriptionsToDelete = $this->calDav->getSubscriptionsForUser($userPrincipalUri);
		$this->addressBooksToDelete = $this->cardDav->getUsersOwnAddressBooks($userPrincipalUri);
	}

	public function preUnassignedUserId($uid) {
		$this->usersToDelete[$uid] = $this->userManager->get($uid);
	}

	public function postDeleteUser($params) {
		$uid = $params['uid'];
		if (isset($this->usersToDelete[$uid])) {
			$this->syncService->deleteUser($this->usersToDelete[$uid]);
		}

		foreach ($this->calendarsToDelete as $calendar) {
			$this->calDav->deleteCalendar(
				$calendar['id'],
				true // Make sure the data doesn't go into the trashbin, a new user with the same UID would later see it otherwise
			);
		}

		foreach ($this->subscriptionsToDelete as $subscription) {
			$this->calDav->deleteSubscription(
				$subscription['id'],
			);
		}
		$this->calDav->deleteAllSharesByUser('principals/users/' . $uid);

		foreach ($this->addressBooksToDelete as $addressBook) {
			$this->cardDav->deleteAddressBook($addressBook['id']);
		}
	}

	public function postUnassignedUserId($uid) {
		if (isset($this->usersToDelete[$uid])) {
			$this->syncService->deleteUser($this->usersToDelete[$uid]);
		}
	}

	public function changeUser($params) {
		$user = $params['user'];
		$feature = $params['feature'];
		// This case is already covered by the account manager firing up a signal
		// later on
		if ($feature !== 'eMailAddress' && $feature !== 'displayName') {
			$this->syncService->updateUser($user);
		}
	}

	/**
	 * @return void
	 */
	public function firstLogin(?IUser $user = null) {
		\OC::$server->get(LoggerInterface::class)->error("First login"); 
		if (!is_null($user)) {
			$principal = 'principals/users/' . $user->getUID();
			if ($this->calDav->getCalendarsForUserCount($principal) === 0) {
				try {
					$this->calDav->createCalendar($principal, CalDavBackend::PERSONAL_CALENDAR_URI, [
						'{DAV:}displayname' => CalDavBackend::PERSONAL_CALENDAR_NAME,
						'{http://apple.com/ns/ical/}calendar-color' => $this->themingDefaults->getColorPrimary(),
						'components' => 'VEVENT'
					]);
				} catch (\Exception $e) {
					\OC::$server->get(LoggerInterface::class)->error($e->getMessage(), ['exception' => $e]);
				}
			}
			if ($this->cardDav->getAddressBooksForUserCount($principal) === 0) {
				try {
					$this->cardDav->createAddressBook($principal, CardDavBackend::PERSONAL_ADDRESSBOOK_URI, [
						'{DAV:}displayname' => CardDavBackend::PERSONAL_ADDRESSBOOK_NAME,
					]);
				} catch (\Exception $e) {
					\OC::$server->get(LoggerInterface::class)->error($e->getMessage(), ['exception' => $e]);
				}
			}
			$defaultAddressBook = $this->cardDav->getAddressBooksByUri($principal, CardDavBackend::PERSONAL_ADDRESSBOOK_URI);
			\OC::$server->get(LoggerInterface::class)->error("default ab",[ 'defaultAddressBook' => $defaultAddressBook]);

			if($defaultAddressBook != null) {
				\OC::$server->get(LoggerInterface::class)->error("I'm here"); 
				$cardData = 'BEGIN:VCARD' . PHP_EOL .
				'VERSION:3.0' . PHP_EOL .
				'PRODID:-//Nextcloud Contacts v' . $this->appManager->getAppVersion('contacts') . PHP_EOL .
				'UID:'. $this->Uidfactory->create() . PHP_EOL .
				'ADR;TYPE=HOME:;;123 Street Street;City;State;;Country' . PHP_EOL .
				'EMAIL;TYPE=WORK:example@example.com' . PHP_EOL .
				'TEL;TYPE=HOME,VOICE:+999999999999' . PHP_EOL .
				'TITLE:Manager' . PHP_EOL .
				'ORG:Company' . PHP_EOL .
				'BDAY;VALUE=DATE:20000101' . PHP_EOL .
				'URL;VALUE=URI:https://example.com/' . PHP_EOL .
				'REV;VALUE=DATE-AND-OR-TIME:20241227T144820Z' . PHP_EOL .
				'END:VCARD';
				try{
					$this->cardDav->createCard($defaultAddressBook['id'], 'Jane', $cardData,false);
				}
				catch(Exception $e){
					\OC::$server->get(LoggerInterface::class)->error($e->getMessage(), ['exception' => $e]);
				}
			}
		}
	}
}
