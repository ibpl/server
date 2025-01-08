<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCP\Calendar;

interface IAvailabilityResult {
	public function getAttendeeEmail(): string;
	public function isAvailable(): bool;
}
