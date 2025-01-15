<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OCP\Calendar;

use OCP\Calendar\CalendarImportSettings;
use Sabre\VObject\Component\VCalendar;

/**
 * ICalendar Interface Extension to import data
 *
 * @since 31.0.0
 */
interface ICalendarImport {

	/**
	 * Import objects
	 *
	 * @since 31.0.0
	 * 
	 * @param VCalendar $vObjects
	 */
	public function import(CalendarImportSettings $settings, VCalendar ...$vObjects): void;

}
