<?php

/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files\Controller;

use OCP\AppFramework\Http;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\OCS\OCSException;
use OCP\AppFramework\OCS\OCSNotFoundException;
use OCP\Files\Conversion\IConversionManager;
use OCP\Files\File;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use OCP\IRequest;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

/**
 * Class ConversionApiController
 *
 * @package OCA\Files\Controller
 */
class ConversionApiControllerTest extends TestCase {
	/** @var ConversionApiController */
	private $conversionApiController;

	/** @var string */
	private $appName = 'files';

	/** @var IRequest|MockObject */
	private $request;

	/** @var IConversionManager|MockObject */
	private $fileConversionManager;

	/** @var IRootFolder|MockObject */
	private $rootFolder;

	/** @var File|MockObject */
	private $file;

	/** @var Folder|MockObject */
	private $userFolder;

	/** @var string */
	private $user;

	protected function setUp(): void {
		parent::setUp();

		$this->request = $this->createMock(IRequest::class);
		$this->fileConversionManager = $this->createMock(IConversionManager::class);
		$this->file = $this->createMock(File::class);
		$this->user = 'userid';

		$this->userFolder = $this->createMock(Folder::class);
		$this->rootFolder = $this->createMock(IRootFolder::class);
		$this->rootFolder->method('getUserFolder')->with($this->user)->willReturn($this->userFolder);

		$this->conversionApiController = new ConversionApiController(
			$this->appName,
			$this->request,
			$this->fileConversionManager,
			$this->rootFolder,
			$this->user,
		);
	}

	public function testThrowsNotFoundException() {
		$this->expectException(OCSNotFoundException::class);
		$this->conversionApiController->convert(42, 'image/png');
	}

	public function testThrowsOcsException() {
		$this->userFolder->method('getFirstNodeById')->with(42)->willReturn($this->file);
		$this->fileConversionManager->method('convert')->willThrowException(new \Exception());

		$this->expectException(OCSException::class);
		$this->conversionApiController->convert(42, 'image/png');
	}

	public function testConvert() {
		$this->userFolder->method('getFirstNodeById')->with(42)->willReturn($this->file);
		$this->fileConversionManager->method('convert')->with($this->file, 'image/png')->willReturn('files/test.png');

		$actual = $this->conversionApiController->convert(42, 'image/png');
		$expected = new DataResponse([
			'path' => 'files/test.png',
		], Http::STATUS_CREATED);

		$this->assertEquals($expected, $actual);
	}
}
