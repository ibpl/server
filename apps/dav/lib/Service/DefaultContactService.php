<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\DAV\Service;

use OCA\DAV\CardDAV\CardDavBackend;
use OCP\App\IAppManager;
use OCP\Files\AppData\IAppDataFactory;
use Psr\Log\LoggerInterface;
use Symfony\Component\Uid\Uuid;

class DefaultContactService {
	public function __construct(
		private CardDavBackend $cardDav,
		private IAppManager $appManager,
		private IAppDataFactory $appDataFactory,
		private LoggerInterface $logger,
	) {
	}

	public function createDefaultContact(string $addressBookId): void {
		$appData = $this->appDataFactory->get('contacts');
		try {
			$folder = $appData->getFolder('defaultContact');
			$defaultContactFile = $folder->getFile('defaultContact.vcf');
			$vcard = $defaultContactFile->getContent();
		} catch (\Exception $e) {
			$this->logger->error('Couldn\'t get default contact file', ['exception' => $e]);
			return;
		}

		// Make sure the UId is unique
		$newUid = Uuid::v4()->toRfc4122();
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
			$this->cardDav->createCard($addressBookId, 'default', $vcard, false);
		} catch (\Exception $e) {
			$this->logger->error($e->getMessage(), ['exception' => $e]);
		}

	}
}
