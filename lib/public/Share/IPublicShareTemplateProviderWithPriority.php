<?php

declare(strict_types=1);
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCP\Share;

/**
 * @since 33.0.0
 */
interface IPublicShareTemplateProviderWithPriority {
	/**
	 * Returns the priority of the provider. Lower values indicate higher priority.
	 *
	 * @since 33.0.0
	 */
	public function getPriority(): int;
}
