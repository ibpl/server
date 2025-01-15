<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OCP\Calendar;

/**
 * Calendar Export Limit Range
 *
 * @since 31.0.0
 */
class CalendarImportSettings {

	public string $format = 'ical';
	public bool $supersede = false;
	public bool $emitEvent = false;
	public bool $emitITip = false;
	public int $bulk = 32;
	public int $validate = 1;	// 0 - no validation, 1 - validate and repair, 2 - validate and skip 

}
