<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OCA\DAV\Listener;

use OCA\DAV\CardDAV\Activity\Backend as ActivityBackend;
use OCA\DAV\CardDAV\CardDavBackend;
use OCA\DAV\Events\AddressBookCreatedEvent;
use OCA\DAV\Events\AddressBookDeletedEvent;
use OCA\DAV\Events\AddressBookShareUpdatedEvent;
use OCA\DAV\Events\AddressBookUpdatedEvent;
use OCP\App\IAppManager;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Files\AppData\IAppDataFactory;
use Psr\Log\LoggerInterface;
use Symfony\Component\Uid\Factory\UlidFactory;
use Throwable;
use function sprintf;

/** @template-implements IEventListener<AddressBookCreatedEvent|AddressBookUpdatedEvent|AddressBookDeletedEvent|AddressBookShareUpdatedEvent> */
class AddressbookListener implements IEventListener {
	public function __construct(
		private ActivityBackend $activityBackend,
		private LoggerInterface $logger,
		private CardDavBackend $cardDav,
		private IAppManager $appManager,
		private UlidFactory $Uidfactory,
		private IAppDataFactory $appDataFactory,
	) {
	}

	public function handle(Event $event): void {
		if ($event instanceof AddressBookCreatedEvent) {
			try {
				$this->activityBackend->onAddressbookCreate(
					$event->getAddressBookData()
				);
				$this->logger->error('omek zabour: ', ['ab' => $event->getAddressBookData()]);
				if ($event->getAddressBookData()['uri'] === 'contacts') {
					$appData = $this->appDataFactory->get('contacts');
					try {
						$folder = $appData->getFolder('defaultContact');
						$defaultContactFile = $folder->getFile('defaultContact.vcf');
						$vcard = $defaultContactFile->getContent();
					} catch (\Exception $e) {
						$this->logger->error('Couldn\'t get default contact file', ['exception' => $e]);
						return;
					}
					$newUid = $this->Uidfactory->create()->toRfc4122();
					$newRev = date('Ymd\THis\Z');


					$vcard = (strpos($vcard, 'UID:') !== false) ? preg_replace(
						'/UID:.*?(\r\n|\n)/',
						"UID:$newUid\n",
						$vcard
					) : str_replace(
						'END:VCARD',
						"UID:$newUid\nEND:VCARD",
						$vcard
					);


					// Add or update REV
					$vcard = (strpos($vcard, 'REV:') !== false) ? preg_replace(
						'/REV:.*?(\r\n|\n)/',
						"REV:$newRev\n",
						$vcard
					) : str_replace(
						'END:VCARD:',
						"REV:$newRev\END:VCARD:",
						$vcard
					);
					try {
						$this->cardDav->createCard($event->getAddressBookData()['id'], 'default', $vcard, false);
					} catch (\Exception $e) {
						\OC::$server->get(LoggerInterface::class)->error($e->getMessage(), ['exception' => $e]);
					}
				}

				$this->logger->debug(
					sprintf('Activity generated for new addressbook %d', $event->getAddressBookId())
				);
			} catch (Throwable $e) {
				// Any error with activities shouldn't abort the addressbook creation, so we just log it
				$this->logger->error('Error generating activities for a new addressbook: ' . $e->getMessage(), [
					'exception' => $e,
				]);
			}
		} elseif ($event instanceof AddressBookUpdatedEvent) {
			try {
				$this->activityBackend->onAddressbookUpdate(
					$event->getAddressBookData(),
					$event->getShares(),
					$event->getMutations()
				);

				$this->logger->debug(
					sprintf('Activity generated for changed addressbook %d', $event->getAddressBookId())
				);
			} catch (Throwable $e) {
				// Any error with activities shouldn't abort the addressbook update, so we just log it
				$this->logger->error('Error generating activities for a changed addressbook: ' . $e->getMessage(), [
					'exception' => $e,
				]);
			}
		} elseif ($event instanceof AddressBookDeletedEvent) {
			try {
				$this->activityBackend->onAddressbookDelete(
					$event->getAddressBookData(),
					$event->getShares()
				);

				$this->logger->debug(
					sprintf('Activity generated for deleted addressbook %d', $event->getAddressBookId())
				);
			} catch (Throwable $e) {
				// Any error with activities shouldn't abort the addressbook deletion, so we just log it
				$this->logger->error('Error generating activities for a deleted addressbook: ' . $e->getMessage(), [
					'exception' => $e,
				]);
			}
		} elseif ($event instanceof AddressBookShareUpdatedEvent) {
			try {
				$this->activityBackend->onAddressbookUpdateShares(
					$event->getAddressBookData(),
					$event->getOldShares(),
					$event->getAdded(),
					$event->getRemoved()
				);

				$this->logger->debug(
					sprintf('Activity generated for (un)sharing addressbook %d', $event->getAddressBookId())
				);
			} catch (Throwable $e) {
				// Any error with activities shouldn't abort the addressbook creation, so we just log it
				$this->logger->error('Error generating activities for (un)sharing addressbook: ' . $e->getMessage(), [
					'exception' => $e,
				]);
			}
		}
	}
}
