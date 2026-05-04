<?php

/*
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

declare(strict_types=1);

namespace OCP\Sharing\Permission;

use OCP\AppFramework\Attribute\Consumable;
use OCP\Server;
use OCP\Sharing\Exception\ShareInvalidException;
use OCP\Sharing\ISharingRegistry;
use OCP\Sharing\Share;

/**
 * @psalm-import-type SharingPermission from Share
 * @since 35.0.0
 */
#[Consumable(since: '35.0.0')]
final readonly class SharePermission {
	/**
	 * @since 35.0.0
	 */
	public function __construct(
		/** @var class-string<ISharePermissionType> $class */
		public string $class,
		public bool $enabled,
	) {
	}

	/**
	 * @return SharingPermission
	 * @since 35.0.0
	 */
	public function format(): array {
		$registry = Server::get(ISharingRegistry::class);
		if (($permissionType = ($registry->getPermissionTypes()[$this->class] ?? null)) === null) {
			throw new ShareInvalidException('The permission type is not registered: ' . $this->class);
		}

		return [
			'class' => $this->class,
			'source_class' => $registry->getPermissionTypeSourceTypeClass()[$this->class],
			'display_name' => $permissionType->getDisplayName(),
			'hint' => $permissionType->getHint(),
			'presets' => array_map(static fn (SharePermissionPreset $preset) => $preset->value, $permissionType->getPresets()),
			'enabled' => $this->enabled,
		];
	}
}
