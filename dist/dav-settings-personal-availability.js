/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/dav/src/dav/client.js":
/*!************************************!*\
  !*** ./apps/dav/src/dav/client.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getClient: () => (/* binding */ getClient)
/* harmony export */ });
/* harmony import */ var webdav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webdav */ "./node_modules/webdav/dist/web/index.js");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.es.mjs");
/* harmony import */ var lodash_fp_memoize_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/fp/memoize.js */ "./node_modules/lodash/fp/memoize.js");
/* harmony import */ var lodash_fp_memoize_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_memoize_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
/**
 * @copyright 2021 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2021 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */






const getClient = lodash_fp_memoize_js__WEBPACK_IMPORTED_MODULE_2___default()(service => {
  // Add this so the server knows it is an request from the browser
  _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].defaults.headers['X-Requested-With'] = 'XMLHttpRequest';

  // force our axios
  const patcher = webdav__WEBPACK_IMPORTED_MODULE_0__.getPatcher();
  patcher.patch('request', _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return webdav__WEBPACK_IMPORTED_MODULE_0__.createClient((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_3__.generateRemoteUrl)(`dav/${service}/${(0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_4__.getCurrentUser)().uid}`));
});

/***/ }),

/***/ "./apps/dav/src/service/CalendarService.js":
/*!*************************************************!*\
  !*** ./apps/dav/src/service/CalendarService.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findScheduleInboxAvailability: () => (/* binding */ findScheduleInboxAvailability),
/* harmony export */   getEmptySlots: () => (/* binding */ getEmptySlots),
/* harmony export */   saveScheduleInboxAvailability: () => (/* binding */ saveScheduleInboxAvailability)
/* harmony export */ });
/* harmony import */ var _dav_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dav/client.js */ "./apps/dav/src/dav/client.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.js */ "./apps/dav/src/service/logger.js");
/* harmony import */ var webdav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webdav */ "./node_modules/webdav/dist/web/index.js");
/* harmony import */ var _nextcloud_calendar_availability_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/calendar-availability-vue */ "./node_modules/@nextcloud/calendar-availability-vue/dist/index.js");
/**
 * @copyright 2021 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2021 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */





/**
 *
 */
function getEmptySlots() {
  return {
    MO: [],
    TU: [],
    WE: [],
    TH: [],
    FR: [],
    SA: [],
    SU: []
  };
}

/**
 *
 */
async function findScheduleInboxAvailability() {
  const client = (0,_dav_client_js__WEBPACK_IMPORTED_MODULE_0__.getClient)('calendars');
  const response = await client.customRequest('inbox', {
    method: 'PROPFIND',
    data: `<?xml version="1.0"?>
			<x0:propfind xmlns:x0="DAV:">
			  <x0:prop>
				<x1:calendar-availability xmlns:x1="urn:ietf:params:xml:ns:caldav"/>
			  </x0:prop>
			</x0:propfind>`
  });
  const xml = await (0,webdav__WEBPACK_IMPORTED_MODULE_2__.parseXML)(response.data);
  if (!xml) {
    return undefined;
  }
  const availability = xml?.multistatus?.response[0]?.propstat?.prop['calendar-availability'];
  if (!availability) {
    return undefined;
  }
  return (0,_nextcloud_calendar_availability_vue__WEBPACK_IMPORTED_MODULE_3__.vavailabilityToSlots)(availability);
}

/**
 * @param {any} slots -
 * @param {any} timezoneId -
 */
async function saveScheduleInboxAvailability(slots, timezoneId) {
  const all = [...Object.keys(slots).flatMap(dayId => slots[dayId].map(slot => ({
    ...slot,
    day: dayId
  })))];
  const vavailability = (0,_nextcloud_calendar_availability_vue__WEBPACK_IMPORTED_MODULE_3__.slotsToVavailability)(all, timezoneId);
  _logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].debug('New availability ical created', {
    vavailability
  });
  const client = (0,_dav_client_js__WEBPACK_IMPORTED_MODULE_0__.getClient)('calendars');
  await client.customRequest('inbox', {
    method: 'PROPPATCH',
    data: `<?xml version="1.0"?>
			<x0:propertyupdate xmlns:x0="DAV:">
			  <x0:set>
				<x0:prop>
				  <x1:calendar-availability xmlns:x1="urn:ietf:params:xml:ns:caldav">${vavailability}</x1:calendar-availability>
				</x0:prop>
			  </x0:set>
			</x0:propertyupdate>`
  });
}

/***/ }),

/***/ "./apps/dav/src/service/PreferenceService.js":
/*!***************************************************!*\
  !*** ./apps/dav/src/service/PreferenceService.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableUserStatusAutomation: () => (/* binding */ disableUserStatusAutomation),
/* harmony export */   enableUserStatusAutomation: () => (/* binding */ enableUserStatusAutomation)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.es.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/**
 * @copyright 2022 Joas Schilling <coding@schilljs.com>
 *
 * @author Joas Schilling <coding@schilljs.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */




/**
 * Enable user status automation based on availability
 */
async function enableUserStatusAutomation() {
  return await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('/apps/provisioning_api/api/v1/config/users/{appId}/{configKey}', {
    appId: 'dav',
    configKey: 'user_status_automation'
  }), {
    configValue: 'yes'
  });
}

/**
 * Disable user status automation based on availability
 */
async function disableUserStatusAutomation() {
  return await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].delete((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('/apps/provisioning_api/api/v1/config/users/{appId}/{configKey}', {
    appId: 'dav',
    configKey: 'user_status_automation'
  }));
}

/***/ }),

/***/ "./apps/dav/src/service/logger.js":
/*!****************************************!*\
  !*** ./apps/dav/src/service/logger.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.js");
/*
 * @copyright 2021 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2021 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const logger = (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__.getLoggerBuilder)().setApp('dav').detectUser().build();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);

/***/ }),

/***/ "./apps/dav/src/settings-personal-availability.js":
/*!********************************************************!*\
  !*** ./apps/dav/src/settings-personal-availability.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _views_Availability_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/Availability.vue */ "./apps/dav/src/views/Availability.vue");



vue__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.$t = _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate;
const View = vue__WEBPACK_IMPORTED_MODULE_2__["default"].extend(_views_Availability_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
new View({}).$mount('#settings-personal-availability');

/***/ }),

/***/ "./apps/dav/src/utils/date.js":
/*!************************************!*\
  !*** ./apps/dav/src/utils/date.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDateAsYMD: () => (/* binding */ formatDateAsYMD)
/* harmony export */ });
/**
 * @copyright Copyright (c) 2023 Richard Steinmetz <richard@steinmetz.cloud>
 *
 * @author Richard Steinmetz <richard@steinmetz.cloud>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

/**
 * Format a date as 'YYYY-MM-DD'.
 *
 * @param {Date} date A date instance to format.
 * @return {string} 'YYYY-MM-DD'
 */
function formatDateAsYMD(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AbsenceForm.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AbsenceForm.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcTextField.js */ "./node_modules/@nextcloud/vue/dist/Components/NcTextField.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcTextArea_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcTextArea.js */ "./node_modules/@nextcloud/vue/dist/Components/NcTextArea.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcDateTimePickerNative_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcDateTimePickerNative.js */ "./node_modules/@nextcloud/vue/dist/Components/NcDateTimePickerNative.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.es.mjs");
/* harmony import */ var _utils_date_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/date.js */ "./apps/dav/src/utils/date.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.es.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _service_logger_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/logger.js */ "./apps/dav/src/service/logger.js");











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AbsenceForm',
  components: {
    NcButton: _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    NcTextField: _nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    NcTextArea: _nextcloud_vue_dist_Components_NcTextArea_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    NcDateTimePickerNative: _nextcloud_vue_dist_Components_NcDateTimePickerNative_js__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data() {
    const {
      firstDay,
      lastDay,
      status,
      message
    } = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_8__.loadState)('dav', 'absence', {});
    return {
      loading: false,
      status: status ?? '',
      message: message ?? '',
      firstDay: firstDay ? new Date(firstDay) : new Date(),
      lastDay: lastDay ? new Date(lastDay) : null
    };
  },
  computed: {
    /**
     * @return {boolean}
     */
    valid() {
      // Translate the two date objects to midnight for an accurate comparison
      const firstDay = new Date(this.firstDay?.getTime());
      const lastDay = new Date(this.lastDay?.getTime());
      firstDay?.setHours(0, 0, 0, 0);
      lastDay?.setHours(0, 0, 0, 0);
      return !!this.firstDay && !!this.lastDay && !!this.status && !!this.message && lastDay >= firstDay;
    }
  },
  methods: {
    resetForm() {
      this.status = '';
      this.message = '';
      this.firstDay = new Date();
      this.lastDay = null;
    },
    async saveForm() {
      if (!this.valid) {
        return;
      }
      this.loading = true;
      try {
        await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_6__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_4__.generateOcsUrl)('/apps/dav/api/v1/outOfOffice/{userId}', {
          userId: (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_5__.getCurrentUser)().uid
        }), {
          firstDay: (0,_utils_date_js__WEBPACK_IMPORTED_MODULE_7__.formatDateAsYMD)(this.firstDay),
          lastDay: (0,_utils_date_js__WEBPACK_IMPORTED_MODULE_7__.formatDateAsYMD)(this.lastDay),
          status: this.status,
          message: this.message
        });
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_9__.showSuccess)(this.$t('dav', 'Absence saved'));
      } catch (error) {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_9__.showError)(this.$t('dav', 'Failed to save your absence settings'));
        _service_logger_js__WEBPACK_IMPORTED_MODULE_10__["default"].error('Could not save absence', {
          error
        });
      } finally {
        this.loading = false;
      }
    },
    async clearAbsence() {
      this.loading = true;
      try {
        await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_6__["default"].delete((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_4__.generateOcsUrl)('/apps/dav/api/v1/outOfOffice/{userId}', {
          userId: (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_5__.getCurrentUser)().uid
        }));
        this.resetForm();
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_9__.showSuccess)(this.$t('dav', 'Absence cleared'));
      } catch (error) {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_9__.showError)(this.$t('dav', 'Failed to clear your absence settings'));
        _service_logger_js__WEBPACK_IMPORTED_MODULE_10__["default"].error('Could not clear absence', {
          error
        });
      } finally {
        this.loading = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AvailabilityForm.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AvailabilityForm.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_calendar_availability_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/calendar-availability-vue */ "./node_modules/@nextcloud/calendar-availability-vue/dist/index.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.es.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _service_CalendarService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/CalendarService.js */ "./apps/dav/src/service/CalendarService.js");
/* harmony import */ var _service_PreferenceService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/PreferenceService.js */ "./apps/dav/src/service/PreferenceService.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js */ "./node_modules/@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcTimezonePicker_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcTimezonePicker.js */ "./node_modules/@nextcloud/vue/dist/Components/NcTimezonePicker.mjs");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AvailabilityForm',
  components: {
    NcButton: _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    NcCheckboxRadioSwitch: _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_6__["default"],
    CalendarAvailability: _nextcloud_calendar_availability_vue__WEBPACK_IMPORTED_MODULE_0__.CalendarAvailability,
    NcTimezonePicker: _nextcloud_vue_dist_Components_NcTimezonePicker_js__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data() {
    // Try to determine the current timezone, and fall back to UTC otherwise
    const defaultTimezoneId = new Intl.DateTimeFormat()?.resolvedOptions()?.timeZone ?? 'UTC';
    return {
      loading: true,
      saving: false,
      timezone: defaultTimezoneId,
      slots: (0,_service_CalendarService_js__WEBPACK_IMPORTED_MODULE_3__.getEmptySlots)(),
      automated: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('dav', 'user_status_automation') === 'yes'
    };
  },
  computed: {
    timeZonePickerId() {
      return `tz-${(Math.random() + 1).toString(36).substring(7)}`;
    }
  },
  async mounted() {
    try {
      const slotData = await (0,_service_CalendarService_js__WEBPACK_IMPORTED_MODULE_3__.findScheduleInboxAvailability)();
      if (!slotData) {
        console.info('no availability is set');
        this.slots = (0,_service_CalendarService_js__WEBPACK_IMPORTED_MODULE_3__.getEmptySlots)();
      } else {
        const {
          slots,
          timezoneId
        } = slotData;
        this.slots = slots;
        if (timezoneId) {
          this.timezone = timezoneId;
        }
        console.info('availability loaded', this.slots, this.timezoneId);
      }
    } catch (e) {
      console.error('could not load existing availability', e);
      (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)(t('dav', 'Failed to load availability'));
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async save() {
      try {
        this.saving = true;
        await (0,_service_CalendarService_js__WEBPACK_IMPORTED_MODULE_3__.saveScheduleInboxAvailability)(this.slots, this.timezone);
        if (this.automated) {
          await (0,_service_PreferenceService_js__WEBPACK_IMPORTED_MODULE_4__.enableUserStatusAutomation)();
        } else {
          await (0,_service_PreferenceService_js__WEBPACK_IMPORTED_MODULE_4__.disableUserStatusAutomation)();
        }
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showSuccess)(t('dav', 'Saved availability'));
      } catch (e) {
        console.error('could not save availability', e);
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)(t('dav', 'Failed to save availability'));
      } finally {
        this.saving = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/Availability.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/Availability.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcSettingsSection.js */ "./node_modules/@nextcloud/vue/dist/Components/NcSettingsSection.mjs");
/* harmony import */ var _components_AbsenceForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AbsenceForm.vue */ "./apps/dav/src/components/AbsenceForm.vue");
/* harmony import */ var _components_AvailabilityForm_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AvailabilityForm.vue */ "./apps/dav/src/components/AvailabilityForm.vue");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.es.mjs");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Availability',
  components: {
    NcSettingsSection: _nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    AbsenceForm: _components_AbsenceForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AvailabilityForm: _components_AvailabilityForm_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data() {
    return {
      hideAbsenceSettings: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_3__.loadState)('dav', 'hide_absence_settings', true)
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AbsenceForm.vue?vue&type=template&id=e2547430&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AbsenceForm.vue?vue&type=template&id=e2547430&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("form", {
    staticClass: "absence",
    on: {
      submit: function ($event) {
        $event.preventDefault();
        return _vm.saveForm.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "absence__dates"
  }, [_c("NcDateTimePickerNative", {
    staticClass: "absence__dates__picker",
    attrs: {
      id: "absence-first-day",
      label: _vm.$t("dav", "First day"),
      required: true
    },
    model: {
      value: _vm.firstDay,
      callback: function ($$v) {
        _vm.firstDay = $$v;
      },
      expression: "firstDay"
    }
  }), _vm._v(" "), _c("NcDateTimePickerNative", {
    staticClass: "absence__dates__picker",
    attrs: {
      id: "absence-last-day",
      label: _vm.$t("dav", "Last day (inclusive)"),
      required: true
    },
    model: {
      value: _vm.lastDay,
      callback: function ($$v) {
        _vm.lastDay = $$v;
      },
      expression: "lastDay"
    }
  })], 1), _vm._v(" "), _c("NcTextField", {
    attrs: {
      value: _vm.status,
      label: _vm.$t("dav", "Short absence status"),
      required: true
    },
    on: {
      "update:value": function ($event) {
        _vm.status = $event;
      }
    }
  }), _vm._v(" "), _c("NcTextArea", {
    attrs: {
      value: _vm.message,
      label: _vm.$t("dav", "Long absence Message"),
      required: true
    },
    on: {
      "update:value": function ($event) {
        _vm.message = $event;
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "absence__buttons"
  }, [_c("NcButton", {
    attrs: {
      disabled: _vm.loading || !_vm.valid,
      type: "primary",
      "native-type": "submit"
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.$t("dav", "Save")) + "\n\t\t")]), _vm._v(" "), _c("NcButton", {
    attrs: {
      disabled: _vm.loading || !_vm.valid,
      type: "error"
    },
    on: {
      click: _vm.clearAbsence
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.$t("dav", "Disable absence")) + "\n\t\t")])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AvailabilityForm.vue?vue&type=template&id=55a42208&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AvailabilityForm.vue?vue&type=template&id=55a42208&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "time-zone"
  }, [_c("label", {
    staticClass: "time-zone__heading",
    attrs: {
      for: `vs${_vm.timeZonePickerId}__combobox`
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.$t("dav", "Time zone:")) + "\n\t\t")]), _vm._v(" "), _c("span", {
    staticClass: "time-zone-text"
  }, [_c("NcTimezonePicker", {
    attrs: {
      uid: _vm.timeZonePickerId
    },
    model: {
      value: _vm.timezone,
      callback: function ($$v) {
        _vm.timezone = $$v;
      },
      expression: "timezone"
    }
  })], 1)]), _vm._v(" "), _c("CalendarAvailability", {
    attrs: {
      slots: _vm.slots,
      loading: _vm.loading,
      "l10n-to": _vm.$t("dav", "to"),
      "l10n-delete-slot": _vm.$t("dav", "Delete slot"),
      "l10n-empty-day": _vm.$t("dav", "No working hours set"),
      "l10n-add-slot": _vm.$t("dav", "Add slot"),
      "l10n-monday": _vm.$t("dav", "Monday"),
      "l10n-tuesday": _vm.$t("dav", "Tuesday"),
      "l10n-wednesday": _vm.$t("dav", "Wednesday"),
      "l10n-thursday": _vm.$t("dav", "Thursday"),
      "l10n-friday": _vm.$t("dav", "Friday"),
      "l10n-saturday": _vm.$t("dav", "Saturday"),
      "l10n-sunday": _vm.$t("dav", "Sunday"),
      "l10n-start-picker-label": dayName => _vm.$t("dav", "Pick a start time for {dayName}", {
        dayName
      }),
      "l10n-end-picker-label": dayName => _vm.$t("dav", "Pick a end time for {dayName}", {
        dayName
      })
    },
    on: {
      "update:slots": function ($event) {
        _vm.slots = $event;
      }
    }
  }), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    attrs: {
      checked: _vm.automated
    },
    on: {
      "update:checked": function ($event) {
        _vm.automated = $event;
      }
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.$t("dav", 'Automatically set user status to "Do not disturb" outside of availability to mute all notifications.')) + "\n\t")]), _vm._v(" "), _c("NcButton", {
    attrs: {
      disabled: _vm.loading || _vm.saving,
      type: "primary"
    },
    on: {
      click: _vm.save
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.$t("dav", "Save")) + "\n\t")])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/Availability.vue?vue&type=template&id=aad5ff48":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/Availability.vue?vue&type=template&id=aad5ff48 ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("NcSettingsSection", {
    attrs: {
      name: _vm.$t("dav", "Availability"),
      description: _vm.$t("dav", "If you configure your working hours, other users will see when you are out of office when they book a meeting.")
    }
  }, [_c("AvailabilityForm")], 1), _vm._v(" "), !_vm.hideAbsenceSettings ? _c("NcSettingsSection", {
    attrs: {
      name: _vm.$t("dav", "Absence"),
      description: _vm.$t("dav", "Configure your next absence period.")
    }
  }, [_c("AbsenceForm")], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AbsenceForm.vue?vue&type=style&index=0&id=e2547430&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AbsenceForm.vue?vue&type=style&index=0&id=e2547430&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.absence[data-v-e2547430] {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.absence__dates[data-v-e2547430] {
  display: flex;
  gap: 10px;
  width: 100%;
}
.absence__dates__picker[data-v-e2547430] {
  flex: 1 auto;
}
.absence__dates__picker[data-v-e2547430] .native-datetime-picker--input {
  margin-bottom: 0;
}
.absence__buttons[data-v-e2547430] {
  display: flex;
  gap: 5px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AvailabilityForm.vue?vue&type=style&index=0&id=55a42208&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AvailabilityForm.vue?vue&type=style&index=0&id=55a42208&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `[data-v-55a42208] .availability-day {
  padding: 0 10px 0 10px;
  position: absolute;
}
[data-v-55a42208] .availability-slots {
  display: flex;
  white-space: normal;
}
[data-v-55a42208] .availability-slot {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}
[data-v-55a42208] .availability-slot-group {
  display: flex;
  flex-direction: column;
}
[data-v-55a42208] .mx-input-wrapper {
  width: 85px;
}
[data-v-55a42208] .mx-datepicker {
  width: 97px;
}
[data-v-55a42208] .multiselect {
  border: 1px solid var(--color-border-dark);
  width: 120px;
}
.time-zone[data-v-55a42208] {
  padding: 32px 12px 12px 0;
  display: flex;
  flex-wrap: wrap;
}
.time-zone__heading[data-v-55a42208] {
  margin-right: calc(var(--default-grid-baseline) * 2);
  line-height: var(--default-clickable-area);
  font-weight: bold;
}
.grid-table[data-v-55a42208] {
  display: grid;
  margin-bottom: 32px;
  grid-column-gap: 24px;
  grid-row-gap: 6px;
  grid-template-columns: min-content auto min-content;
  max-width: 500px;
}
.button[data-v-55a42208] {
  align-self: flex-end;
}
[data-v-55a42208] .label-weekday {
  position: relative;
  display: inline-flex;
  padding-top: 4px;
  align-self: center;
}
[data-v-55a42208] .delete-slot {
  padding-bottom: unset;
}
[data-v-55a42208] .add-another {
  align-self: center;
}
.to-text[data-v-55a42208] {
  padding-right: 12px;
}
.empty-content[data-v-55a42208] {
  color: var(--color-text-lighter);
  margin-top: 4px;
  align-self: center;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/lodash/_LazyWrapper.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_LazyWrapper.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    baseLodash = __webpack_require__(/*! ./_baseLodash */ "./node_modules/lodash/_baseLodash.js");

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

module.exports = LazyWrapper;


/***/ }),

/***/ "./node_modules/lodash/_LodashWrapper.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_LodashWrapper.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    baseLodash = __webpack_require__(/*! ./_baseLodash */ "./node_modules/lodash/_baseLodash.js");

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

module.exports = LodashWrapper;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseLodash.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseLodash.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

module.exports = baseLodash;


/***/ }),

/***/ "./node_modules/lodash/_baseSetData.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseSetData.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    metaMap = __webpack_require__(/*! ./_metaMap */ "./node_modules/lodash/_metaMap.js");

/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var baseSetData = !metaMap ? identity : function(func, data) {
  metaMap.set(func, data);
  return func;
};

module.exports = baseSetData;


/***/ }),

/***/ "./node_modules/lodash/_composeArgs.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_composeArgs.js ***!
  \*********************************************/
/***/ ((module) => {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

module.exports = composeArgs;


/***/ }),

/***/ "./node_modules/lodash/_composeArgsRight.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_composeArgsRight.js ***!
  \**************************************************/
/***/ ((module) => {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

module.exports = composeArgsRight;


/***/ }),

/***/ "./node_modules/lodash/_countHolders.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_countHolders.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }
  return result;
}

module.exports = countHolders;


/***/ }),

/***/ "./node_modules/lodash/_createBind.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createBind.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createCtor = __webpack_require__(/*! ./_createCtor */ "./node_modules/lodash/_createCtor.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

module.exports = createBind;


/***/ }),

/***/ "./node_modules/lodash/_createCtor.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createCtor.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

module.exports = createCtor;


/***/ }),

/***/ "./node_modules/lodash/_createCurry.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_createCurry.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js"),
    createCtor = __webpack_require__(/*! ./_createCtor */ "./node_modules/lodash/_createCtor.js"),
    createHybrid = __webpack_require__(/*! ./_createHybrid */ "./node_modules/lodash/_createHybrid.js"),
    createRecurry = __webpack_require__(/*! ./_createRecurry */ "./node_modules/lodash/_createRecurry.js"),
    getHolder = __webpack_require__(/*! ./_getHolder */ "./node_modules/lodash/_getHolder.js"),
    replaceHolders = __webpack_require__(/*! ./_replaceHolders */ "./node_modules/lodash/_replaceHolders.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

module.exports = createCurry;


/***/ }),

/***/ "./node_modules/lodash/_createHybrid.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_createHybrid.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var composeArgs = __webpack_require__(/*! ./_composeArgs */ "./node_modules/lodash/_composeArgs.js"),
    composeArgsRight = __webpack_require__(/*! ./_composeArgsRight */ "./node_modules/lodash/_composeArgsRight.js"),
    countHolders = __webpack_require__(/*! ./_countHolders */ "./node_modules/lodash/_countHolders.js"),
    createCtor = __webpack_require__(/*! ./_createCtor */ "./node_modules/lodash/_createCtor.js"),
    createRecurry = __webpack_require__(/*! ./_createRecurry */ "./node_modules/lodash/_createRecurry.js"),
    getHolder = __webpack_require__(/*! ./_getHolder */ "./node_modules/lodash/_getHolder.js"),
    reorder = __webpack_require__(/*! ./_reorder */ "./node_modules/lodash/_reorder.js"),
    replaceHolders = __webpack_require__(/*! ./_replaceHolders */ "./node_modules/lodash/_replaceHolders.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_ARY_FLAG = 128,
    WRAP_FLIP_FLAG = 512;

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG,
      isBind = bitmask & WRAP_BIND_FLAG,
      isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
      isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
      isFlip = bitmask & WRAP_FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

module.exports = createHybrid;


/***/ }),

/***/ "./node_modules/lodash/_createPartial.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createPartial.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js"),
    createCtor = __webpack_require__(/*! ./_createCtor */ "./node_modules/lodash/_createCtor.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

module.exports = createPartial;


/***/ }),

/***/ "./node_modules/lodash/_createRecurry.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createRecurry.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isLaziable = __webpack_require__(/*! ./_isLaziable */ "./node_modules/lodash/_isLaziable.js"),
    setData = __webpack_require__(/*! ./_setData */ "./node_modules/lodash/_setData.js"),
    setWrapToString = __webpack_require__(/*! ./_setWrapToString */ "./node_modules/lodash/_setWrapToString.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
    bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
  }
  var newData = [
    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
    newHoldersRight, argPos, ary, arity
  ];

  var result = wrapFunc.apply(undefined, newData);
  if (isLaziable(func)) {
    setData(result, newData);
  }
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

module.exports = createRecurry;


/***/ }),

/***/ "./node_modules/lodash/_createWrap.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createWrap.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetData = __webpack_require__(/*! ./_baseSetData */ "./node_modules/lodash/_baseSetData.js"),
    createBind = __webpack_require__(/*! ./_createBind */ "./node_modules/lodash/_createBind.js"),
    createCurry = __webpack_require__(/*! ./_createCurry */ "./node_modules/lodash/_createCurry.js"),
    createHybrid = __webpack_require__(/*! ./_createHybrid */ "./node_modules/lodash/_createHybrid.js"),
    createPartial = __webpack_require__(/*! ./_createPartial */ "./node_modules/lodash/_createPartial.js"),
    getData = __webpack_require__(/*! ./_getData */ "./node_modules/lodash/_getData.js"),
    mergeData = __webpack_require__(/*! ./_mergeData */ "./node_modules/lodash/_mergeData.js"),
    setData = __webpack_require__(/*! ./_setData */ "./node_modules/lodash/_setData.js"),
    setWrapToString = __webpack_require__(/*! ./_setWrapToString */ "./node_modules/lodash/_setWrapToString.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *    1 - `_.bind`
 *    2 - `_.bindKey`
 *    4 - `_.curry` or `_.curryRight` of a bound function
 *    8 - `_.curry`
 *   16 - `_.curryRight`
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 *  128 - `_.rearg`
 *  256 - `_.ary`
 *  512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : getData(func);

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  if (data) {
    mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === undefined
    ? (isBindKey ? 0 : func.length)
    : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
    bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  var setter = data ? baseSetData : setData;
  return setWrapToString(setter(result, newData), func, bitmask);
}

module.exports = createWrap;


/***/ }),

/***/ "./node_modules/lodash/_flatRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_flatRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var flatten = __webpack_require__(/*! ./flatten */ "./node_modules/lodash/flatten.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ "./node_modules/lodash/_getData.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_getData.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var metaMap = __webpack_require__(/*! ./_metaMap */ "./node_modules/lodash/_metaMap.js"),
    noop = __webpack_require__(/*! ./noop */ "./node_modules/lodash/noop.js");

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};

module.exports = getData;


/***/ }),

/***/ "./node_modules/lodash/_getFuncName.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_getFuncName.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var realNames = __webpack_require__(/*! ./_realNames */ "./node_modules/lodash/_realNames.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

module.exports = getFuncName;


/***/ }),

/***/ "./node_modules/lodash/_getHolder.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getHolder.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

module.exports = getHolder;


/***/ }),

/***/ "./node_modules/lodash/_getWrapDetails.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_getWrapDetails.js ***!
  \************************************************/
/***/ ((module) => {

/** Used to match wrap detail comments. */
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

module.exports = getWrapDetails;


/***/ }),

/***/ "./node_modules/lodash/_insertWrapDetails.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash/_insertWrapDetails.js ***!
  \***************************************************/
/***/ ((module) => {

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

module.exports = insertWrapDetails;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_isLaziable.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_isLaziable.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var LazyWrapper = __webpack_require__(/*! ./_LazyWrapper */ "./node_modules/lodash/_LazyWrapper.js"),
    getData = __webpack_require__(/*! ./_getData */ "./node_modules/lodash/_getData.js"),
    getFuncName = __webpack_require__(/*! ./_getFuncName */ "./node_modules/lodash/_getFuncName.js"),
    lodash = __webpack_require__(/*! ./wrapperLodash */ "./node_modules/lodash/wrapperLodash.js");

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

module.exports = isLaziable;


/***/ }),

/***/ "./node_modules/lodash/_mergeData.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_mergeData.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var composeArgs = __webpack_require__(/*! ./_composeArgs */ "./node_modules/lodash/_composeArgs.js"),
    composeArgsRight = __webpack_require__(/*! ./_composeArgsRight */ "./node_modules/lodash/_composeArgsRight.js"),
    replaceHolders = __webpack_require__(/*! ./_replaceHolders */ "./node_modules/lodash/_replaceHolders.js");

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */
function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

  var isCombo =
    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
    ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & WRAP_BIND_FLAG) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = value;
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & WRAP_ARY_FLAG) {
    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
  }
  // Use source `arity` if one is not provided.
  if (data[9] == null) {
    data[9] = source[9];
  }
  // Use source `func` and merge bitmasks.
  data[0] = source[0];
  data[1] = newBitmask;

  return data;
}

module.exports = mergeData;


/***/ }),

/***/ "./node_modules/lodash/_metaMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_metaMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js");

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

module.exports = metaMap;


/***/ }),

/***/ "./node_modules/lodash/_realNames.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_realNames.js ***!
  \*******************************************/
/***/ ((module) => {

/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;


/***/ }),

/***/ "./node_modules/lodash/_reorder.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_reorder.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

module.exports = reorder;


/***/ }),

/***/ "./node_modules/lodash/_replaceHolders.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_replaceHolders.js ***!
  \************************************************/
/***/ ((module) => {

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

module.exports = replaceHolders;


/***/ }),

/***/ "./node_modules/lodash/_setData.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_setData.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetData = __webpack_require__(/*! ./_baseSetData */ "./node_modules/lodash/_baseSetData.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var setData = shortOut(baseSetData);

module.exports = setData;


/***/ }),

/***/ "./node_modules/lodash/_setWrapToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_setWrapToString.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getWrapDetails = __webpack_require__(/*! ./_getWrapDetails */ "./node_modules/lodash/_getWrapDetails.js"),
    insertWrapDetails = __webpack_require__(/*! ./_insertWrapDetails */ "./node_modules/lodash/_insertWrapDetails.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js"),
    updateWrapDetails = __webpack_require__(/*! ./_updateWrapDetails */ "./node_modules/lodash/_updateWrapDetails.js");

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
function setWrapToString(wrapper, reference, bitmask) {
  var source = (reference + '');
  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
}

module.exports = setWrapToString;


/***/ }),

/***/ "./node_modules/lodash/_updateWrapDetails.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash/_updateWrapDetails.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/lodash/_arrayIncludes.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256,
    WRAP_FLIP_FLAG = 512;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', WRAP_ARY_FLAG],
  ['bind', WRAP_BIND_FLAG],
  ['bindKey', WRAP_BIND_KEY_FLAG],
  ['curry', WRAP_CURRY_FLAG],
  ['curryRight', WRAP_CURRY_RIGHT_FLAG],
  ['flip', WRAP_FLIP_FLAG],
  ['partial', WRAP_PARTIAL_FLAG],
  ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
  ['rearg', WRAP_REARG_FLAG]
];

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

module.exports = updateWrapDetails;


/***/ }),

/***/ "./node_modules/lodash/_wrapperClone.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_wrapperClone.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var LazyWrapper = __webpack_require__(/*! ./_LazyWrapper */ "./node_modules/lodash/_LazyWrapper.js"),
    LodashWrapper = __webpack_require__(/*! ./_LodashWrapper */ "./node_modules/lodash/_LodashWrapper.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js");

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper) {
    return wrapper.clone();
  }
  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

module.exports = wrapperClone;


/***/ }),

/***/ "./node_modules/lodash/ary.js":
/*!************************************!*\
  !*** ./node_modules/lodash/ary.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createWrap = __webpack_require__(/*! ./_createWrap */ "./node_modules/lodash/_createWrap.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_ARY_FLAG = 128;

/**
 * Creates a function that invokes `func`, with up to `n` arguments,
 * ignoring any additional arguments.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to cap arguments for.
 * @param {number} [n=func.length] The arity cap.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new capped function.
 * @example
 *
 * _.map(['6', '8', '10'], _.ary(parseInt, 1));
 * // => [6, 8, 10]
 */
function ary(func, n, guard) {
  n = guard ? undefined : n;
  n = (func && n == null) ? func.length : n;
  return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
}

module.exports = ary;


/***/ }),

/***/ "./node_modules/lodash/curry.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/curry.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createWrap = __webpack_require__(/*! ./_createWrap */ "./node_modules/lodash/_createWrap.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_CURRY_FLAG = 8;

/**
 * Creates a function that accepts arguments of `func` and either invokes
 * `func` returning its result, if at least `arity` number of arguments have
 * been provided, or returns a function that accepts the remaining `func`
 * arguments, and so on. The arity of `func` may be specified if `func.length`
 * is not sufficient.
 *
 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for provided arguments.
 *
 * **Note:** This method doesn't set the "length" property of curried functions.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Function
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new curried function.
 * @example
 *
 * var abc = function(a, b, c) {
 *   return [a, b, c];
 * };
 *
 * var curried = _.curry(abc);
 *
 * curried(1)(2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2, 3);
 * // => [1, 2, 3]
 *
 * // Curried with placeholders.
 * curried(1)(_, 3)(2);
 * // => [1, 2, 3]
 */
function curry(func, arity, guard) {
  arity = guard ? undefined : arity;
  var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
  result.placeholder = curry.placeholder;
  return result;
}

// Assign default placeholders.
curry.placeholder = {};

module.exports = curry;


/***/ }),

/***/ "./node_modules/lodash/flatten.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatten.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ "./node_modules/lodash/fp/_baseConvert.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/fp/_baseConvert.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapping = __webpack_require__(/*! ./_mapping */ "./node_modules/lodash/fp/_mapping.js"),
    fallbackHolder = __webpack_require__(/*! ./placeholder */ "./node_modules/lodash/fp/placeholder.js");

/** Built-in value reference. */
var push = Array.prototype.push;

/**
 * Creates a function, with an arity of `n`, that invokes `func` with the
 * arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} n The arity of the new function.
 * @returns {Function} Returns the new function.
 */
function baseArity(func, n) {
  return n == 2
    ? function(a, b) { return func.apply(undefined, arguments); }
    : function(a) { return func.apply(undefined, arguments); };
}

/**
 * Creates a function that invokes `func`, with up to `n` arguments, ignoring
 * any additional arguments.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @param {number} n The arity cap.
 * @returns {Function} Returns the new function.
 */
function baseAry(func, n) {
  return n == 2
    ? function(a, b) { return func(a, b); }
    : function(a) { return func(a); };
}

/**
 * Creates a clone of `array`.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the cloned array.
 */
function cloneArray(array) {
  var length = array ? array.length : 0,
      result = Array(length);

  while (length--) {
    result[length] = array[length];
  }
  return result;
}

/**
 * Creates a function that clones a given object using the assignment `func`.
 *
 * @private
 * @param {Function} func The assignment function.
 * @returns {Function} Returns the new cloner function.
 */
function createCloner(func) {
  return function(object) {
    return func({}, object);
  };
}

/**
 * A specialized version of `_.spread` which flattens the spread array into
 * the arguments of the invoked `func`.
 *
 * @private
 * @param {Function} func The function to spread arguments over.
 * @param {number} start The start position of the spread.
 * @returns {Function} Returns the new function.
 */
function flatSpread(func, start) {
  return function() {
    var length = arguments.length,
        lastIndex = length - 1,
        args = Array(length);

    while (length--) {
      args[length] = arguments[length];
    }
    var array = args[start],
        otherArgs = args.slice(0, start);

    if (array) {
      push.apply(otherArgs, array);
    }
    if (start != lastIndex) {
      push.apply(otherArgs, args.slice(start + 1));
    }
    return func.apply(this, otherArgs);
  };
}

/**
 * Creates a function that wraps `func` and uses `cloner` to clone the first
 * argument it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} cloner The function to clone arguments.
 * @returns {Function} Returns the new immutable function.
 */
function wrapImmutable(func, cloner) {
  return function() {
    var length = arguments.length;
    if (!length) {
      return;
    }
    var args = Array(length);
    while (length--) {
      args[length] = arguments[length];
    }
    var result = args[0] = cloner.apply(undefined, args);
    func.apply(undefined, args);
    return result;
  };
}

/**
 * The base implementation of `convert` which accepts a `util` object of methods
 * required to perform conversions.
 *
 * @param {Object} util The util object.
 * @param {string} name The name of the function to convert.
 * @param {Function} func The function to convert.
 * @param {Object} [options] The options object.
 * @param {boolean} [options.cap=true] Specify capping iteratee arguments.
 * @param {boolean} [options.curry=true] Specify currying.
 * @param {boolean} [options.fixed=true] Specify fixed arity.
 * @param {boolean} [options.immutable=true] Specify immutable operations.
 * @param {boolean} [options.rearg=true] Specify rearranging arguments.
 * @returns {Function|Object} Returns the converted function or object.
 */
function baseConvert(util, name, func, options) {
  var isLib = typeof name == 'function',
      isObj = name === Object(name);

  if (isObj) {
    options = func;
    func = name;
    name = undefined;
  }
  if (func == null) {
    throw new TypeError;
  }
  options || (options = {});

  var config = {
    'cap': 'cap' in options ? options.cap : true,
    'curry': 'curry' in options ? options.curry : true,
    'fixed': 'fixed' in options ? options.fixed : true,
    'immutable': 'immutable' in options ? options.immutable : true,
    'rearg': 'rearg' in options ? options.rearg : true
  };

  var defaultHolder = isLib ? func : fallbackHolder,
      forceCurry = ('curry' in options) && options.curry,
      forceFixed = ('fixed' in options) && options.fixed,
      forceRearg = ('rearg' in options) && options.rearg,
      pristine = isLib ? func.runInContext() : undefined;

  var helpers = isLib ? func : {
    'ary': util.ary,
    'assign': util.assign,
    'clone': util.clone,
    'curry': util.curry,
    'forEach': util.forEach,
    'isArray': util.isArray,
    'isError': util.isError,
    'isFunction': util.isFunction,
    'isWeakMap': util.isWeakMap,
    'iteratee': util.iteratee,
    'keys': util.keys,
    'rearg': util.rearg,
    'toInteger': util.toInteger,
    'toPath': util.toPath
  };

  var ary = helpers.ary,
      assign = helpers.assign,
      clone = helpers.clone,
      curry = helpers.curry,
      each = helpers.forEach,
      isArray = helpers.isArray,
      isError = helpers.isError,
      isFunction = helpers.isFunction,
      isWeakMap = helpers.isWeakMap,
      keys = helpers.keys,
      rearg = helpers.rearg,
      toInteger = helpers.toInteger,
      toPath = helpers.toPath;

  var aryMethodKeys = keys(mapping.aryMethod);

  var wrappers = {
    'castArray': function(castArray) {
      return function() {
        var value = arguments[0];
        return isArray(value)
          ? castArray(cloneArray(value))
          : castArray.apply(undefined, arguments);
      };
    },
    'iteratee': function(iteratee) {
      return function() {
        var func = arguments[0],
            arity = arguments[1],
            result = iteratee(func, arity),
            length = result.length;

        if (config.cap && typeof arity == 'number') {
          arity = arity > 2 ? (arity - 2) : 1;
          return (length && length <= arity) ? result : baseAry(result, arity);
        }
        return result;
      };
    },
    'mixin': function(mixin) {
      return function(source) {
        var func = this;
        if (!isFunction(func)) {
          return mixin(func, Object(source));
        }
        var pairs = [];
        each(keys(source), function(key) {
          if (isFunction(source[key])) {
            pairs.push([key, func.prototype[key]]);
          }
        });

        mixin(func, Object(source));

        each(pairs, function(pair) {
          var value = pair[1];
          if (isFunction(value)) {
            func.prototype[pair[0]] = value;
          } else {
            delete func.prototype[pair[0]];
          }
        });
        return func;
      };
    },
    'nthArg': function(nthArg) {
      return function(n) {
        var arity = n < 0 ? 1 : (toInteger(n) + 1);
        return curry(nthArg(n), arity);
      };
    },
    'rearg': function(rearg) {
      return function(func, indexes) {
        var arity = indexes ? indexes.length : 0;
        return curry(rearg(func, indexes), arity);
      };
    },
    'runInContext': function(runInContext) {
      return function(context) {
        return baseConvert(util, runInContext(context), options);
      };
    }
  };

  /*--------------------------------------------------------------------------*/

  /**
   * Casts `func` to a function with an arity capped iteratee if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @returns {Function} Returns the cast function.
   */
  function castCap(name, func) {
    if (config.cap) {
      var indexes = mapping.iterateeRearg[name];
      if (indexes) {
        return iterateeRearg(func, indexes);
      }
      var n = !isLib && mapping.iterateeAry[name];
      if (n) {
        return iterateeAry(func, n);
      }
    }
    return func;
  }

  /**
   * Casts `func` to a curried function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity of `func`.
   * @returns {Function} Returns the cast function.
   */
  function castCurry(name, func, n) {
    return (forceCurry || (config.curry && n > 1))
      ? curry(func, n)
      : func;
  }

  /**
   * Casts `func` to a fixed arity function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity cap.
   * @returns {Function} Returns the cast function.
   */
  function castFixed(name, func, n) {
    if (config.fixed && (forceFixed || !mapping.skipFixed[name])) {
      var data = mapping.methodSpread[name],
          start = data && data.start;

      return start  === undefined ? ary(func, n) : flatSpread(func, start);
    }
    return func;
  }

  /**
   * Casts `func` to an rearged function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity of `func`.
   * @returns {Function} Returns the cast function.
   */
  function castRearg(name, func, n) {
    return (config.rearg && n > 1 && (forceRearg || !mapping.skipRearg[name]))
      ? rearg(func, mapping.methodRearg[name] || mapping.aryRearg[n])
      : func;
  }

  /**
   * Creates a clone of `object` by `path`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {Array|string} path The path to clone by.
   * @returns {Object} Returns the cloned object.
   */
  function cloneByPath(object, path) {
    path = toPath(path);

    var index = -1,
        length = path.length,
        lastIndex = length - 1,
        result = clone(Object(object)),
        nested = result;

    while (nested != null && ++index < length) {
      var key = path[index],
          value = nested[key];

      if (value != null &&
          !(isFunction(value) || isError(value) || isWeakMap(value))) {
        nested[key] = clone(index == lastIndex ? value : Object(value));
      }
      nested = nested[key];
    }
    return result;
  }

  /**
   * Converts `lodash` to an immutable auto-curried iteratee-first data-last
   * version with conversion `options` applied.
   *
   * @param {Object} [options] The options object. See `baseConvert` for more details.
   * @returns {Function} Returns the converted `lodash`.
   */
  function convertLib(options) {
    return _.runInContext.convert(options)(undefined);
  }

  /**
   * Create a converter function for `func` of `name`.
   *
   * @param {string} name The name of the function to convert.
   * @param {Function} func The function to convert.
   * @returns {Function} Returns the new converter function.
   */
  function createConverter(name, func) {
    var realName = mapping.aliasToReal[name] || name,
        methodName = mapping.remap[realName] || realName,
        oldOptions = options;

    return function(options) {
      var newUtil = isLib ? pristine : helpers,
          newFunc = isLib ? pristine[methodName] : func,
          newOptions = assign(assign({}, oldOptions), options);

      return baseConvert(newUtil, realName, newFunc, newOptions);
    };
  }

  /**
   * Creates a function that wraps `func` to invoke its iteratee, with up to `n`
   * arguments, ignoring any additional arguments.
   *
   * @private
   * @param {Function} func The function to cap iteratee arguments for.
   * @param {number} n The arity cap.
   * @returns {Function} Returns the new function.
   */
  function iterateeAry(func, n) {
    return overArg(func, function(func) {
      return typeof func == 'function' ? baseAry(func, n) : func;
    });
  }

  /**
   * Creates a function that wraps `func` to invoke its iteratee with arguments
   * arranged according to the specified `indexes` where the argument value at
   * the first index is provided as the first argument, the argument value at
   * the second index is provided as the second argument, and so on.
   *
   * @private
   * @param {Function} func The function to rearrange iteratee arguments for.
   * @param {number[]} indexes The arranged argument indexes.
   * @returns {Function} Returns the new function.
   */
  function iterateeRearg(func, indexes) {
    return overArg(func, function(func) {
      var n = indexes.length;
      return baseArity(rearg(baseAry(func, n), indexes), n);
    });
  }

  /**
   * Creates a function that invokes `func` with its first argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function() {
      var length = arguments.length;
      if (!length) {
        return func();
      }
      var args = Array(length);
      while (length--) {
        args[length] = arguments[length];
      }
      var index = config.rearg ? 0 : (length - 1);
      args[index] = transform(args[index]);
      return func.apply(undefined, args);
    };
  }

  /**
   * Creates a function that wraps `func` and applys the conversions
   * rules by `name`.
   *
   * @private
   * @param {string} name The name of the function to wrap.
   * @param {Function} func The function to wrap.
   * @returns {Function} Returns the converted function.
   */
  function wrap(name, func, placeholder) {
    var result,
        realName = mapping.aliasToReal[name] || name,
        wrapped = func,
        wrapper = wrappers[realName];

    if (wrapper) {
      wrapped = wrapper(func);
    }
    else if (config.immutable) {
      if (mapping.mutate.array[realName]) {
        wrapped = wrapImmutable(func, cloneArray);
      }
      else if (mapping.mutate.object[realName]) {
        wrapped = wrapImmutable(func, createCloner(func));
      }
      else if (mapping.mutate.set[realName]) {
        wrapped = wrapImmutable(func, cloneByPath);
      }
    }
    each(aryMethodKeys, function(aryKey) {
      each(mapping.aryMethod[aryKey], function(otherName) {
        if (realName == otherName) {
          var data = mapping.methodSpread[realName],
              afterRearg = data && data.afterRearg;

          result = afterRearg
            ? castFixed(realName, castRearg(realName, wrapped, aryKey), aryKey)
            : castRearg(realName, castFixed(realName, wrapped, aryKey), aryKey);

          result = castCap(realName, result);
          result = castCurry(realName, result, aryKey);
          return false;
        }
      });
      return !result;
    });

    result || (result = wrapped);
    if (result == func) {
      result = forceCurry ? curry(result, 1) : function() {
        return func.apply(this, arguments);
      };
    }
    result.convert = createConverter(realName, func);
    result.placeholder = func.placeholder = placeholder;

    return result;
  }

  /*--------------------------------------------------------------------------*/

  if (!isObj) {
    return wrap(name, func, defaultHolder);
  }
  var _ = func;

  // Convert methods by ary cap.
  var pairs = [];
  each(aryMethodKeys, function(aryKey) {
    each(mapping.aryMethod[aryKey], function(key) {
      var func = _[mapping.remap[key] || key];
      if (func) {
        pairs.push([key, wrap(key, func, _)]);
      }
    });
  });

  // Convert remaining methods.
  each(keys(_), function(key) {
    var func = _[key];
    if (typeof func == 'function') {
      var length = pairs.length;
      while (length--) {
        if (pairs[length][0] == key) {
          return;
        }
      }
      func.convert = createConverter(key, func);
      pairs.push([key, func]);
    }
  });

  // Assign to `_` leaving `_.prototype` unchanged to allow chaining.
  each(pairs, function(pair) {
    _[pair[0]] = pair[1];
  });

  _.convert = convertLib;
  _.placeholder = _;

  // Assign aliases.
  each(keys(_), function(key) {
    each(mapping.realToAlias[key] || [], function(alias) {
      _[alias] = _[key];
    });
  });

  return _;
}

module.exports = baseConvert;


/***/ }),

/***/ "./node_modules/lodash/fp/_mapping.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/fp/_mapping.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

/** Used to map aliases to their real names. */
exports.aliasToReal = {

  // Lodash aliases.
  'each': 'forEach',
  'eachRight': 'forEachRight',
  'entries': 'toPairs',
  'entriesIn': 'toPairsIn',
  'extend': 'assignIn',
  'extendAll': 'assignInAll',
  'extendAllWith': 'assignInAllWith',
  'extendWith': 'assignInWith',
  'first': 'head',

  // Methods that are curried variants of others.
  'conforms': 'conformsTo',
  'matches': 'isMatch',
  'property': 'get',

  // Ramda aliases.
  '__': 'placeholder',
  'F': 'stubFalse',
  'T': 'stubTrue',
  'all': 'every',
  'allPass': 'overEvery',
  'always': 'constant',
  'any': 'some',
  'anyPass': 'overSome',
  'apply': 'spread',
  'assoc': 'set',
  'assocPath': 'set',
  'complement': 'negate',
  'compose': 'flowRight',
  'contains': 'includes',
  'dissoc': 'unset',
  'dissocPath': 'unset',
  'dropLast': 'dropRight',
  'dropLastWhile': 'dropRightWhile',
  'equals': 'isEqual',
  'identical': 'eq',
  'indexBy': 'keyBy',
  'init': 'initial',
  'invertObj': 'invert',
  'juxt': 'over',
  'omitAll': 'omit',
  'nAry': 'ary',
  'path': 'get',
  'pathEq': 'matchesProperty',
  'pathOr': 'getOr',
  'paths': 'at',
  'pickAll': 'pick',
  'pipe': 'flow',
  'pluck': 'map',
  'prop': 'get',
  'propEq': 'matchesProperty',
  'propOr': 'getOr',
  'props': 'at',
  'symmetricDifference': 'xor',
  'symmetricDifferenceBy': 'xorBy',
  'symmetricDifferenceWith': 'xorWith',
  'takeLast': 'takeRight',
  'takeLastWhile': 'takeRightWhile',
  'unapply': 'rest',
  'unnest': 'flatten',
  'useWith': 'overArgs',
  'where': 'conformsTo',
  'whereEq': 'isMatch',
  'zipObj': 'zipObject'
};

/** Used to map ary to method names. */
exports.aryMethod = {
  '1': [
    'assignAll', 'assignInAll', 'attempt', 'castArray', 'ceil', 'create',
    'curry', 'curryRight', 'defaultsAll', 'defaultsDeepAll', 'floor', 'flow',
    'flowRight', 'fromPairs', 'invert', 'iteratee', 'memoize', 'method', 'mergeAll',
    'methodOf', 'mixin', 'nthArg', 'over', 'overEvery', 'overSome','rest', 'reverse',
    'round', 'runInContext', 'spread', 'template', 'trim', 'trimEnd', 'trimStart',
    'uniqueId', 'words', 'zipAll'
  ],
  '2': [
    'add', 'after', 'ary', 'assign', 'assignAllWith', 'assignIn', 'assignInAllWith',
    'at', 'before', 'bind', 'bindAll', 'bindKey', 'chunk', 'cloneDeepWith',
    'cloneWith', 'concat', 'conformsTo', 'countBy', 'curryN', 'curryRightN',
    'debounce', 'defaults', 'defaultsDeep', 'defaultTo', 'delay', 'difference',
    'divide', 'drop', 'dropRight', 'dropRightWhile', 'dropWhile', 'endsWith', 'eq',
    'every', 'filter', 'find', 'findIndex', 'findKey', 'findLast', 'findLastIndex',
    'findLastKey', 'flatMap', 'flatMapDeep', 'flattenDepth', 'forEach',
    'forEachRight', 'forIn', 'forInRight', 'forOwn', 'forOwnRight', 'get',
    'groupBy', 'gt', 'gte', 'has', 'hasIn', 'includes', 'indexOf', 'intersection',
    'invertBy', 'invoke', 'invokeMap', 'isEqual', 'isMatch', 'join', 'keyBy',
    'lastIndexOf', 'lt', 'lte', 'map', 'mapKeys', 'mapValues', 'matchesProperty',
    'maxBy', 'meanBy', 'merge', 'mergeAllWith', 'minBy', 'multiply', 'nth', 'omit',
    'omitBy', 'overArgs', 'pad', 'padEnd', 'padStart', 'parseInt', 'partial',
    'partialRight', 'partition', 'pick', 'pickBy', 'propertyOf', 'pull', 'pullAll',
    'pullAt', 'random', 'range', 'rangeRight', 'rearg', 'reject', 'remove',
    'repeat', 'restFrom', 'result', 'sampleSize', 'some', 'sortBy', 'sortedIndex',
    'sortedIndexOf', 'sortedLastIndex', 'sortedLastIndexOf', 'sortedUniqBy',
    'split', 'spreadFrom', 'startsWith', 'subtract', 'sumBy', 'take', 'takeRight',
    'takeRightWhile', 'takeWhile', 'tap', 'throttle', 'thru', 'times', 'trimChars',
    'trimCharsEnd', 'trimCharsStart', 'truncate', 'union', 'uniqBy', 'uniqWith',
    'unset', 'unzipWith', 'without', 'wrap', 'xor', 'zip', 'zipObject',
    'zipObjectDeep'
  ],
  '3': [
    'assignInWith', 'assignWith', 'clamp', 'differenceBy', 'differenceWith',
    'findFrom', 'findIndexFrom', 'findLastFrom', 'findLastIndexFrom', 'getOr',
    'includesFrom', 'indexOfFrom', 'inRange', 'intersectionBy', 'intersectionWith',
    'invokeArgs', 'invokeArgsMap', 'isEqualWith', 'isMatchWith', 'flatMapDepth',
    'lastIndexOfFrom', 'mergeWith', 'orderBy', 'padChars', 'padCharsEnd',
    'padCharsStart', 'pullAllBy', 'pullAllWith', 'rangeStep', 'rangeStepRight',
    'reduce', 'reduceRight', 'replace', 'set', 'slice', 'sortedIndexBy',
    'sortedLastIndexBy', 'transform', 'unionBy', 'unionWith', 'update', 'xorBy',
    'xorWith', 'zipWith'
  ],
  '4': [
    'fill', 'setWith', 'updateWith'
  ]
};

/** Used to map ary to rearg configs. */
exports.aryRearg = {
  '2': [1, 0],
  '3': [2, 0, 1],
  '4': [3, 2, 0, 1]
};

/** Used to map method names to their iteratee ary. */
exports.iterateeAry = {
  'dropRightWhile': 1,
  'dropWhile': 1,
  'every': 1,
  'filter': 1,
  'find': 1,
  'findFrom': 1,
  'findIndex': 1,
  'findIndexFrom': 1,
  'findKey': 1,
  'findLast': 1,
  'findLastFrom': 1,
  'findLastIndex': 1,
  'findLastIndexFrom': 1,
  'findLastKey': 1,
  'flatMap': 1,
  'flatMapDeep': 1,
  'flatMapDepth': 1,
  'forEach': 1,
  'forEachRight': 1,
  'forIn': 1,
  'forInRight': 1,
  'forOwn': 1,
  'forOwnRight': 1,
  'map': 1,
  'mapKeys': 1,
  'mapValues': 1,
  'partition': 1,
  'reduce': 2,
  'reduceRight': 2,
  'reject': 1,
  'remove': 1,
  'some': 1,
  'takeRightWhile': 1,
  'takeWhile': 1,
  'times': 1,
  'transform': 2
};

/** Used to map method names to iteratee rearg configs. */
exports.iterateeRearg = {
  'mapKeys': [1],
  'reduceRight': [1, 0]
};

/** Used to map method names to rearg configs. */
exports.methodRearg = {
  'assignInAllWith': [1, 0],
  'assignInWith': [1, 2, 0],
  'assignAllWith': [1, 0],
  'assignWith': [1, 2, 0],
  'differenceBy': [1, 2, 0],
  'differenceWith': [1, 2, 0],
  'getOr': [2, 1, 0],
  'intersectionBy': [1, 2, 0],
  'intersectionWith': [1, 2, 0],
  'isEqualWith': [1, 2, 0],
  'isMatchWith': [2, 1, 0],
  'mergeAllWith': [1, 0],
  'mergeWith': [1, 2, 0],
  'padChars': [2, 1, 0],
  'padCharsEnd': [2, 1, 0],
  'padCharsStart': [2, 1, 0],
  'pullAllBy': [2, 1, 0],
  'pullAllWith': [2, 1, 0],
  'rangeStep': [1, 2, 0],
  'rangeStepRight': [1, 2, 0],
  'setWith': [3, 1, 2, 0],
  'sortedIndexBy': [2, 1, 0],
  'sortedLastIndexBy': [2, 1, 0],
  'unionBy': [1, 2, 0],
  'unionWith': [1, 2, 0],
  'updateWith': [3, 1, 2, 0],
  'xorBy': [1, 2, 0],
  'xorWith': [1, 2, 0],
  'zipWith': [1, 2, 0]
};

/** Used to map method names to spread configs. */
exports.methodSpread = {
  'assignAll': { 'start': 0 },
  'assignAllWith': { 'start': 0 },
  'assignInAll': { 'start': 0 },
  'assignInAllWith': { 'start': 0 },
  'defaultsAll': { 'start': 0 },
  'defaultsDeepAll': { 'start': 0 },
  'invokeArgs': { 'start': 2 },
  'invokeArgsMap': { 'start': 2 },
  'mergeAll': { 'start': 0 },
  'mergeAllWith': { 'start': 0 },
  'partial': { 'start': 1 },
  'partialRight': { 'start': 1 },
  'without': { 'start': 1 },
  'zipAll': { 'start': 0 }
};

/** Used to identify methods which mutate arrays or objects. */
exports.mutate = {
  'array': {
    'fill': true,
    'pull': true,
    'pullAll': true,
    'pullAllBy': true,
    'pullAllWith': true,
    'pullAt': true,
    'remove': true,
    'reverse': true
  },
  'object': {
    'assign': true,
    'assignAll': true,
    'assignAllWith': true,
    'assignIn': true,
    'assignInAll': true,
    'assignInAllWith': true,
    'assignInWith': true,
    'assignWith': true,
    'defaults': true,
    'defaultsAll': true,
    'defaultsDeep': true,
    'defaultsDeepAll': true,
    'merge': true,
    'mergeAll': true,
    'mergeAllWith': true,
    'mergeWith': true,
  },
  'set': {
    'set': true,
    'setWith': true,
    'unset': true,
    'update': true,
    'updateWith': true
  }
};

/** Used to map real names to their aliases. */
exports.realToAlias = (function() {
  var hasOwnProperty = Object.prototype.hasOwnProperty,
      object = exports.aliasToReal,
      result = {};

  for (var key in object) {
    var value = object[key];
    if (hasOwnProperty.call(result, value)) {
      result[value].push(key);
    } else {
      result[value] = [key];
    }
  }
  return result;
}());

/** Used to map method names to other names. */
exports.remap = {
  'assignAll': 'assign',
  'assignAllWith': 'assignWith',
  'assignInAll': 'assignIn',
  'assignInAllWith': 'assignInWith',
  'curryN': 'curry',
  'curryRightN': 'curryRight',
  'defaultsAll': 'defaults',
  'defaultsDeepAll': 'defaultsDeep',
  'findFrom': 'find',
  'findIndexFrom': 'findIndex',
  'findLastFrom': 'findLast',
  'findLastIndexFrom': 'findLastIndex',
  'getOr': 'get',
  'includesFrom': 'includes',
  'indexOfFrom': 'indexOf',
  'invokeArgs': 'invoke',
  'invokeArgsMap': 'invokeMap',
  'lastIndexOfFrom': 'lastIndexOf',
  'mergeAll': 'merge',
  'mergeAllWith': 'mergeWith',
  'padChars': 'pad',
  'padCharsEnd': 'padEnd',
  'padCharsStart': 'padStart',
  'propertyOf': 'get',
  'rangeStep': 'range',
  'rangeStepRight': 'rangeRight',
  'restFrom': 'rest',
  'spreadFrom': 'spread',
  'trimChars': 'trim',
  'trimCharsEnd': 'trimEnd',
  'trimCharsStart': 'trimStart',
  'zipAll': 'zip'
};

/** Used to track methods that skip fixing their arity. */
exports.skipFixed = {
  'castArray': true,
  'flow': true,
  'flowRight': true,
  'iteratee': true,
  'mixin': true,
  'rearg': true,
  'runInContext': true
};

/** Used to track methods that skip rearranging arguments. */
exports.skipRearg = {
  'add': true,
  'assign': true,
  'assignIn': true,
  'bind': true,
  'bindKey': true,
  'concat': true,
  'difference': true,
  'divide': true,
  'eq': true,
  'gt': true,
  'gte': true,
  'isEqual': true,
  'lt': true,
  'lte': true,
  'matchesProperty': true,
  'merge': true,
  'multiply': true,
  'overArgs': true,
  'partial': true,
  'partialRight': true,
  'propertyOf': true,
  'random': true,
  'range': true,
  'rangeRight': true,
  'subtract': true,
  'zip': true,
  'zipObject': true,
  'zipObjectDeep': true
};


/***/ }),

/***/ "./node_modules/lodash/fp/_util.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/fp/_util.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
  'ary': __webpack_require__(/*! ../ary */ "./node_modules/lodash/ary.js"),
  'assign': __webpack_require__(/*! ../_baseAssign */ "./node_modules/lodash/_baseAssign.js"),
  'clone': __webpack_require__(/*! ../clone */ "./node_modules/lodash/clone.js"),
  'curry': __webpack_require__(/*! ../curry */ "./node_modules/lodash/curry.js"),
  'forEach': __webpack_require__(/*! ../_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
  'isArray': __webpack_require__(/*! ../isArray */ "./node_modules/lodash/isArray.js"),
  'isError': __webpack_require__(/*! ../isError */ "./node_modules/lodash/isError.js"),
  'isFunction': __webpack_require__(/*! ../isFunction */ "./node_modules/lodash/isFunction.js"),
  'isWeakMap': __webpack_require__(/*! ../isWeakMap */ "./node_modules/lodash/isWeakMap.js"),
  'iteratee': __webpack_require__(/*! ../iteratee */ "./node_modules/lodash/iteratee.js"),
  'keys': __webpack_require__(/*! ../_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
  'rearg': __webpack_require__(/*! ../rearg */ "./node_modules/lodash/rearg.js"),
  'toInteger': __webpack_require__(/*! ../toInteger */ "./node_modules/lodash/toInteger.js"),
  'toPath': __webpack_require__(/*! ../toPath */ "./node_modules/lodash/toPath.js")
};


/***/ }),

/***/ "./node_modules/lodash/fp/convert.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/fp/convert.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseConvert = __webpack_require__(/*! ./_baseConvert */ "./node_modules/lodash/fp/_baseConvert.js"),
    util = __webpack_require__(/*! ./_util */ "./node_modules/lodash/fp/_util.js");

/**
 * Converts `func` of `name` to an immutable auto-curried iteratee-first data-last
 * version with conversion `options` applied. If `name` is an object its methods
 * will be converted.
 *
 * @param {string} name The name of the function to wrap.
 * @param {Function} [func] The function to wrap.
 * @param {Object} [options] The options object. See `baseConvert` for more details.
 * @returns {Function|Object} Returns the converted function or object.
 */
function convert(name, func, options) {
  return baseConvert(util, name, func, options);
}

module.exports = convert;


/***/ }),

/***/ "./node_modules/lodash/fp/memoize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/fp/memoize.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var convert = __webpack_require__(/*! ./convert */ "./node_modules/lodash/fp/convert.js"),
    func = convert('memoize', __webpack_require__(/*! ../memoize */ "./node_modules/lodash/memoize.js"));

func.placeholder = __webpack_require__(/*! ./placeholder */ "./node_modules/lodash/fp/placeholder.js");
module.exports = func;


/***/ }),

/***/ "./node_modules/lodash/fp/placeholder.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/fp/placeholder.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * The default argument placeholder value for methods.
 *
 * @type {Object}
 */
module.exports = {};


/***/ }),

/***/ "./node_modules/lodash/isError.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isError.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js");

/** `Object#toString` result references. */
var domExcTag = '[object DOMException]',
    errorTag = '[object Error]';

/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * _.isError(new Error);
 * // => true
 *
 * _.isError(Error);
 * // => false
 */
function isError(value) {
  if (!isObjectLike(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == errorTag || tag == domExcTag ||
    (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
}

module.exports = isError;


/***/ }),

/***/ "./node_modules/lodash/isWeakMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/isWeakMap.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var weakMapTag = '[object WeakMap]';

/**
 * Checks if `value` is classified as a `WeakMap` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
 * @example
 *
 * _.isWeakMap(new WeakMap);
 * // => true
 *
 * _.isWeakMap(new Map);
 * // => false
 */
function isWeakMap(value) {
  return isObjectLike(value) && getTag(value) == weakMapTag;
}

module.exports = isWeakMap;


/***/ }),

/***/ "./node_modules/lodash/iteratee.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/iteratee.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a function that invokes `func` with the arguments of the created
 * function. If `func` is a property name, the created function returns the
 * property value for a given element. If `func` is an array or object, the
 * created function returns `true` for elements that contain the equivalent
 * source properties, otherwise it returns `false`.
 *
 * @static
 * @since 4.0.0
 * @memberOf _
 * @category Util
 * @param {*} [func=_.identity] The value to convert to a callback.
 * @returns {Function} Returns the callback.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
 * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, _.iteratee(['user', 'fred']));
 * // => [{ 'user': 'fred', 'age': 40 }]
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, _.iteratee('user'));
 * // => ['barney', 'fred']
 *
 * // Create custom iteratee shorthands.
 * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
 *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
 *     return func.test(string);
 *   };
 * });
 *
 * _.filter(['abc', 'def'], /ef/);
 * // => ['def']
 */
function iteratee(func) {
  return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
}

module.exports = iteratee;


/***/ }),

/***/ "./node_modules/lodash/rearg.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/rearg.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createWrap = __webpack_require__(/*! ./_createWrap */ "./node_modules/lodash/_createWrap.js"),
    flatRest = __webpack_require__(/*! ./_flatRest */ "./node_modules/lodash/_flatRest.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_REARG_FLAG = 256;

/**
 * Creates a function that invokes `func` with arguments arranged according
 * to the specified `indexes` where the argument value at the first index is
 * provided as the first argument, the argument value at the second index is
 * provided as the second argument, and so on.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to rearrange arguments for.
 * @param {...(number|number[])} indexes The arranged argument indexes.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var rearged = _.rearg(function(a, b, c) {
 *   return [a, b, c];
 * }, [2, 0, 1]);
 *
 * rearged('b', 'c', 'a')
 * // => ['a', 'b', 'c']
 */
var rearg = flatRest(function(func, indexes) {
  return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
});

module.exports = rearg;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toPath.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/toPath.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (isArray(value)) {
    return arrayMap(value, toKey);
  }
  return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
}

module.exports = toPath;


/***/ }),

/***/ "./node_modules/lodash/wrapperLodash.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/wrapperLodash.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var LazyWrapper = __webpack_require__(/*! ./_LazyWrapper */ "./node_modules/lodash/_LazyWrapper.js"),
    LodashWrapper = __webpack_require__(/*! ./_LodashWrapper */ "./node_modules/lodash/_LodashWrapper.js"),
    baseLodash = __webpack_require__(/*! ./_baseLodash */ "./node_modules/lodash/_baseLodash.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js"),
    wrapperClone = __webpack_require__(/*! ./_wrapperClone */ "./node_modules/lodash/_wrapperClone.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;

module.exports = lodash;


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AbsenceForm.vue?vue&type=style&index=0&id=e2547430&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AbsenceForm.vue?vue&type=style&index=0&id=e2547430&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AbsenceForm_vue_vue_type_style_index_0_id_e2547430_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AbsenceForm.vue?vue&type=style&index=0&id=e2547430&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AbsenceForm.vue?vue&type=style&index=0&id=e2547430&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AbsenceForm_vue_vue_type_style_index_0_id_e2547430_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AbsenceForm_vue_vue_type_style_index_0_id_e2547430_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AbsenceForm_vue_vue_type_style_index_0_id_e2547430_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AbsenceForm_vue_vue_type_style_index_0_id_e2547430_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AvailabilityForm.vue?vue&type=style&index=0&id=55a42208&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AvailabilityForm.vue?vue&type=style&index=0&id=55a42208&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AvailabilityForm_vue_vue_type_style_index_0_id_55a42208_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AvailabilityForm.vue?vue&type=style&index=0&id=55a42208&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AvailabilityForm.vue?vue&type=style&index=0&id=55a42208&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AvailabilityForm_vue_vue_type_style_index_0_id_55a42208_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AvailabilityForm_vue_vue_type_style_index_0_id_55a42208_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AvailabilityForm_vue_vue_type_style_index_0_id_55a42208_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AvailabilityForm_vue_vue_type_style_index_0_id_55a42208_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./apps/dav/src/components/AbsenceForm.vue":
/*!*************************************************!*\
  !*** ./apps/dav/src/components/AbsenceForm.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AbsenceForm_vue_vue_type_template_id_e2547430_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbsenceForm.vue?vue&type=template&id=e2547430&scoped=true */ "./apps/dav/src/components/AbsenceForm.vue?vue&type=template&id=e2547430&scoped=true");
/* harmony import */ var _AbsenceForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbsenceForm.vue?vue&type=script&lang=js */ "./apps/dav/src/components/AbsenceForm.vue?vue&type=script&lang=js");
/* harmony import */ var _AbsenceForm_vue_vue_type_style_index_0_id_e2547430_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AbsenceForm.vue?vue&type=style&index=0&id=e2547430&lang=scss&scoped=true */ "./apps/dav/src/components/AbsenceForm.vue?vue&type=style&index=0&id=e2547430&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AbsenceForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AbsenceForm_vue_vue_type_template_id_e2547430_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _AbsenceForm_vue_vue_type_template_id_e2547430_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e2547430",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/dav/src/components/AbsenceForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/dav/src/components/AvailabilityForm.vue":
/*!******************************************************!*\
  !*** ./apps/dav/src/components/AvailabilityForm.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AvailabilityForm_vue_vue_type_template_id_55a42208_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvailabilityForm.vue?vue&type=template&id=55a42208&scoped=true */ "./apps/dav/src/components/AvailabilityForm.vue?vue&type=template&id=55a42208&scoped=true");
/* harmony import */ var _AvailabilityForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AvailabilityForm.vue?vue&type=script&lang=js */ "./apps/dav/src/components/AvailabilityForm.vue?vue&type=script&lang=js");
/* harmony import */ var _AvailabilityForm_vue_vue_type_style_index_0_id_55a42208_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AvailabilityForm.vue?vue&type=style&index=0&id=55a42208&lang=scss&scoped=true */ "./apps/dav/src/components/AvailabilityForm.vue?vue&type=style&index=0&id=55a42208&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AvailabilityForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AvailabilityForm_vue_vue_type_template_id_55a42208_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _AvailabilityForm_vue_vue_type_template_id_55a42208_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "55a42208",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/dav/src/components/AvailabilityForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/dav/src/views/Availability.vue":
/*!*********************************************!*\
  !*** ./apps/dav/src/views/Availability.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Availability_vue_vue_type_template_id_aad5ff48__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Availability.vue?vue&type=template&id=aad5ff48 */ "./apps/dav/src/views/Availability.vue?vue&type=template&id=aad5ff48");
/* harmony import */ var _Availability_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Availability.vue?vue&type=script&lang=js */ "./apps/dav/src/views/Availability.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Availability_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Availability_vue_vue_type_template_id_aad5ff48__WEBPACK_IMPORTED_MODULE_0__.render,
  _Availability_vue_vue_type_template_id_aad5ff48__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/dav/src/views/Availability.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/dav/src/components/AbsenceForm.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./apps/dav/src/components/AbsenceForm.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AbsenceForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AbsenceForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AbsenceForm.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AbsenceForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/dav/src/components/AvailabilityForm.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./apps/dav/src/components/AvailabilityForm.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AvailabilityForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AvailabilityForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AvailabilityForm.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AvailabilityForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/dav/src/views/Availability.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./apps/dav/src/views/Availability.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Availability.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/Availability.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/dav/src/components/AbsenceForm.vue?vue&type=template&id=e2547430&scoped=true":
/*!*******************************************************************************************!*\
  !*** ./apps/dav/src/components/AbsenceForm.vue?vue&type=template&id=e2547430&scoped=true ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AbsenceForm_vue_vue_type_template_id_e2547430_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AbsenceForm_vue_vue_type_template_id_e2547430_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AbsenceForm_vue_vue_type_template_id_e2547430_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AbsenceForm.vue?vue&type=template&id=e2547430&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AbsenceForm.vue?vue&type=template&id=e2547430&scoped=true");


/***/ }),

/***/ "./apps/dav/src/components/AvailabilityForm.vue?vue&type=template&id=55a42208&scoped=true":
/*!************************************************************************************************!*\
  !*** ./apps/dav/src/components/AvailabilityForm.vue?vue&type=template&id=55a42208&scoped=true ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AvailabilityForm_vue_vue_type_template_id_55a42208_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AvailabilityForm_vue_vue_type_template_id_55a42208_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AvailabilityForm_vue_vue_type_template_id_55a42208_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AvailabilityForm.vue?vue&type=template&id=55a42208&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AvailabilityForm.vue?vue&type=template&id=55a42208&scoped=true");


/***/ }),

/***/ "./apps/dav/src/views/Availability.vue?vue&type=template&id=aad5ff48":
/*!***************************************************************************!*\
  !*** ./apps/dav/src/views/Availability.vue?vue&type=template&id=aad5ff48 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_template_id_aad5ff48__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_template_id_aad5ff48__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_template_id_aad5ff48__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Availability.vue?vue&type=template&id=aad5ff48 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/Availability.vue?vue&type=template&id=aad5ff48");


/***/ }),

/***/ "./apps/dav/src/components/AbsenceForm.vue?vue&type=style&index=0&id=e2547430&lang=scss&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./apps/dav/src/components/AbsenceForm.vue?vue&type=style&index=0&id=e2547430&lang=scss&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AbsenceForm_vue_vue_type_style_index_0_id_e2547430_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AbsenceForm.vue?vue&type=style&index=0&id=e2547430&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AbsenceForm.vue?vue&type=style&index=0&id=e2547430&lang=scss&scoped=true");


/***/ }),

/***/ "./apps/dav/src/components/AvailabilityForm.vue?vue&type=style&index=0&id=55a42208&lang=scss&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./apps/dav/src/components/AvailabilityForm.vue?vue&type=style&index=0&id=55a42208&lang=scss&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AvailabilityForm_vue_vue_type_style_index_0_id_55a42208_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AvailabilityForm.vue?vue&type=style&index=0&id=55a42208&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/components/AvailabilityForm.vue?vue&type=style&index=0&id=55a42208&lang=scss&scoped=true");


/***/ }),

/***/ "data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTS00LTRoMjR2MjRILTRWLTR6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTggMEMzLjYgMCAwIDMuNiAwIDhzMy42IDggOCA4IDgtMy42IDgtOC0zLjYtOC04LTh6IiBmaWxsPSIjZWQ0ODRjIi8+PHBhdGggZD0iTTUgNi41aDZjLjggMCAxLjUuNyAxLjUgMS41cy0uNyAxLjUtMS41IDEuNUg1Yy0uOCAwLTEuNS0uNy0xLjUtMS41UzQuMiA2LjUgNSA2LjV6IiBmaWxsPSIjZmRmZmZmIi8+PC9zdmc+Cg==":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTS00LTRoMjR2MjRILTRWLTR6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTggMEMzLjYgMCAwIDMuNiAwIDhzMy42IDggOCA4IDgtMy42IDgtOC0zLjYtOC04LTh6IiBmaWxsPSIjZWQ0ODRjIi8+PHBhdGggZD0iTTUgNi41aDZjLjggMCAxLjUuNyAxLjUgMS41cy0uNyAxLjUtMS41IDEuNUg1Yy0uOCAwLTEuNS0uNy0xLjUtMS41UzQuMiA2LjUgNSA2LjV6IiBmaWxsPSIjZmRmZmZmIi8+PC9zdmc+Cg== ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTS00LTRoMjR2MjRILTRWLTR6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTggMEMzLjYgMCAwIDMuNiAwIDhzMy42IDggOCA4IDgtMy42IDgtOC0zLjYtOC04LTh6IiBmaWxsPSIjZWQ0ODRjIi8+PHBhdGggZD0iTTUgNi41aDZjLjggMCAxLjUuNyAxLjUgMS41cy0uNyAxLjUtMS41IDEuNUg1Yy0uOCAwLTEuNS0uNy0xLjUtMS41UzQuMiA2LjUgNSA2LjV6IiBmaWxsPSIjZmRmZmZmIi8+PC9zdmc+Cg==";

/***/ }),

/***/ "data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTQuOCAxMS4yaDYuNFY0LjhINC44djYuNHpNOCAwQzMuNiAwIDAgMy42IDAgOHMzLjYgOCA4IDggOC0zLjYgOC04LTMuNi04LTgtOHoiIGZpbGw9IiM0OWIzODIiLz48L3N2Zz4K":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTQuOCAxMS4yaDYuNFY0LjhINC44djYuNHpNOCAwQzMuNiAwIDAgMy42IDAgOHMzLjYgOCA4IDggOC0zLjYgOC04LTMuNi04LTgtOHoiIGZpbGw9IiM0OWIzODIiLz48L3N2Zz4K ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTQuOCAxMS4yaDYuNFY0LjhINC44djYuNHpNOCAwQzMuNiAwIDAgMy42IDAgOHMzLjYgOCA4IDggOC0zLjYgOC04LTMuNi04LTgtOHoiIGZpbGw9IiM0OWIzODIiLz48L3N2Zz4K";

/***/ }),

/***/ "data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS00LTRoMjR2MjRILTR6Ii8+PHBhdGggZD0iTTYuOS4xQzMgLjYtLjEgNC0uMSA4YzAgNC40IDMuNiA4IDggOCA0IDAgNy40LTMgOC02LjktMS4yIDEuMy0yLjkgMi4xLTQuNyAyLjEtMy41IDAtNi40LTIuOS02LjQtNi40IDAtMS45LjgtMy42IDIuMS00Ljd6IiBmaWxsPSIjZjRhMzMxIi8+PC9zdmc+Cg==":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS00LTRoMjR2MjRILTR6Ii8+PHBhdGggZD0iTTYuOS4xQzMgLjYtLjEgNC0uMSA4YzAgNC40IDMuNiA4IDggOCA0IDAgNy40LTMgOC02LjktMS4yIDEuMy0yLjkgMi4xLTQuNyAyLjEtMy41IDAtNi40LTIuOS02LjQtNi40IDAtMS45LjgtMy42IDIuMS00Ljd6IiBmaWxsPSIjZjRhMzMxIi8+PC9zdmc+Cg== ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS00LTRoMjR2MjRILTR6Ii8+PHBhdGggZD0iTTYuOS4xQzMgLjYtLjEgNC0uMSA4YzAgNC40IDMuNiA4IDggOCA0IDAgNy40LTMgOC02LjktMS4yIDEuMy0yLjkgMi4xLTQuNyAyLjEtMy41IDAtNi40LTIuOS02LjQtNi40IDAtMS45LjgtMy42IDIuMS00Ljd6IiBmaWxsPSIjZjRhMzMxIi8+PC9zdmc+Cg==";

/***/ }),

/***/ "./node_modules/@nextcloud/calendar-availability-vue/dist/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@nextcloud/calendar-availability-vue/dist/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarAvailability: () => (/* binding */ e1),
/* harmony export */   getEmptySlots: () => (/* binding */ Zv),
/* harmony export */   slotsToVavailability: () => (/* binding */ r1),
/* harmony export */   vavailabilityToSlots: () => (/* binding */ t1)
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");
/* provided dependency */ var ICAL = __webpack_require__(/*! ical.js */ "./node_modules/ical.js/build/ical.js");
(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(`@charset "UTF-8";.material-design-icon[data-v-22982259]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.native-datetime-picker[data-v-22982259]{display:flex;flex-direction:column}.native-datetime-picker .native-datetime-picker--input[data-v-22982259]{width:100%;flex:0 0 auto;padding-right:4px}/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */.material-design-icon[data-v-f507b497]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.button-vue[data-v-f507b497]{position:relative;width:fit-content;overflow:hidden;border:0;padding:0;font-size:var(--default-font-size);font-weight:700;min-height:44px;min-width:44px;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:22px;transition-property:color,border-color,background-color;transition-duration:.1s;transition-timing-function:linear;color:var(--color-primary-element-light-text);background-color:var(--color-primary-element-light)}.button-vue *[data-v-f507b497],.button-vue span[data-v-f507b497]{cursor:pointer}.button-vue[data-v-f507b497]:focus{outline:none}.button-vue[data-v-f507b497]:disabled{cursor:default;opacity:.5;filter:saturate(.7)}.button-vue:disabled *[data-v-f507b497]{cursor:default}.button-vue[data-v-f507b497]:hover:not(:disabled){background-color:var(--color-primary-element-light-hover)}.button-vue[data-v-f507b497]:active{background-color:var(--color-primary-element-light)}.button-vue__wrapper[data-v-f507b497]{display:inline-flex;align-items:center;justify-content:center;width:100%}.button-vue--end .button-vue__wrapper[data-v-f507b497]{justify-content:end}.button-vue--start .button-vue__wrapper[data-v-f507b497]{justify-content:start}.button-vue--reverse .button-vue__wrapper[data-v-f507b497]{flex-direction:row-reverse}.button-vue--reverse.button-vue--icon-and-text[data-v-f507b497]{padding-inline:calc(var(--default-grid-baseline) * 4) var(--default-grid-baseline)}.button-vue__icon[data-v-f507b497]{height:44px;width:44px;min-height:44px;min-width:44px;display:flex;justify-content:center;align-items:center}.button-vue__text[data-v-f507b497]{font-weight:700;margin-bottom:1px;padding:2px 0;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.button-vue--icon-only[data-v-f507b497]{width:44px!important}.button-vue--text-only[data-v-f507b497]{padding:0 12px}.button-vue--text-only .button-vue__text[data-v-f507b497]{margin-left:4px;margin-right:4px}.button-vue--icon-and-text[data-v-f507b497]{padding-block:0;padding-inline:var(--default-grid-baseline) calc(var(--default-grid-baseline) * 4)}.button-vue--wide[data-v-f507b497]{width:100%}.button-vue[data-v-f507b497]:focus-visible{outline:2px solid var(--color-main-text)!important;box-shadow:0 0 0 4px var(--color-main-background)!important}.button-vue:focus-visible.button-vue--vue-tertiary-on-primary[data-v-f507b497]{outline:2px solid var(--color-primary-element-text);border-radius:var(--border-radius);background-color:transparent}.button-vue--vue-primary[data-v-f507b497]{background-color:var(--color-primary-element);color:var(--color-primary-element-text)}.button-vue--vue-primary[data-v-f507b497]:hover:not(:disabled){background-color:var(--color-primary-element-hover)}.button-vue--vue-primary[data-v-f507b497]:active{background-color:var(--color-primary-element)}.button-vue--vue-secondary[data-v-f507b497]{color:var(--color-primary-element-light-text);background-color:var(--color-primary-element-light)}.button-vue--vue-secondary[data-v-f507b497]:hover:not(:disabled){color:var(--color-primary-element-light-text);background-color:var(--color-primary-element-light-hover)}.button-vue--vue-tertiary[data-v-f507b497]{color:var(--color-main-text);background-color:transparent}.button-vue--vue-tertiary[data-v-f507b497]:hover:not(:disabled){background-color:var(--color-background-hover)}.button-vue--vue-tertiary-no-background[data-v-f507b497]{color:var(--color-main-text);background-color:transparent}.button-vue--vue-tertiary-no-background[data-v-f507b497]:hover:not(:disabled){background-color:transparent}.button-vue--vue-tertiary-on-primary[data-v-f507b497]{color:var(--color-primary-element-text);background-color:transparent}.button-vue--vue-tertiary-on-primary[data-v-f507b497]:hover:not(:disabled){background-color:transparent}.button-vue--vue-success[data-v-f507b497]{background-color:var(--color-success);color:#fff}.button-vue--vue-success[data-v-f507b497]:hover:not(:disabled){background-color:var(--color-success-hover)}.button-vue--vue-success[data-v-f507b497]:active{background-color:var(--color-success)}.button-vue--vue-warning[data-v-f507b497]{background-color:var(--color-warning);color:#fff}.button-vue--vue-warning[data-v-f507b497]:hover:not(:disabled){background-color:var(--color-warning-hover)}.button-vue--vue-warning[data-v-f507b497]:active{background-color:var(--color-warning)}.button-vue--vue-error[data-v-f507b497]{background-color:var(--color-error);color:#fff}.button-vue--vue-error[data-v-f507b497]:hover:not(:disabled){background-color:var(--color-error-hover)}.button-vue--vue-error[data-v-f507b497]:active{background-color:var(--color-error)}.availability-day[data-v-31358f1f]{padding:0 10px;position:absolute}.availability-slots[data-v-31358f1f]{display:flex;white-space:nowrap}.availability-slot[data-v-31358f1f]{display:flex;flex-direction:row;align-items:center}.availability-slot-group[data-v-31358f1f]{display:flex;flex-direction:column}[data-v-31358f1f] .mx-input-wrapper{width:85px}[data-v-31358f1f] .mx-datepicker{width:97px}[data-v-31358f1f] .multiselect{border:1px solid var(--color-border-dark);width:120px}.time-zone[data-v-31358f1f]{padding:32px 12px 12px 0}.grid-table[data-v-31358f1f]{display:grid;margin-bottom:32px;grid-column-gap:24px;grid-row-gap:6px;grid-template-columns:min-content min-content min-content}.button[data-v-31358f1f]{align-self:flex-end}.label-weekday[data-v-31358f1f]{position:relative;display:flex;align-items:flex-start}.label-weekday>span[data-v-31358f1f]{height:50px;display:flex;align-items:center}.add-another[data-v-31358f1f]{background-color:transparent;border:none;opacity:.5;display:inline-flex;padding:0;margin:0 0 3px}.add-another[data-v-31358f1f]:hover{opacity:1}.to-text[data-v-31358f1f]{padding-right:12px}.time-zone-text[data-v-31358f1f]{padding-left:22px}.empty-content[data-v-31358f1f]{color:var(--color-text-lighter);display:inline-flex;align-items:center}.start-date[data-v-31358f1f]{padding-right:12px}`)),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();

function Ji(n, e, i, t, r, a, s, u) {
  var o = typeof n == "function" ? n.options : n;
  e && (o.render = e, o.staticRenderFns = i, o._compiled = !0), t && (o.functional = !0), a && (o._scopeId = "data-v-" + a);
  var f;
  if (s ? (f = function(v) {
    v = v || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !v && typeof __VUE_SSR_CONTEXT__ < "u" && (v = __VUE_SSR_CONTEXT__), r && r.call(this, v), v && v._registeredComponents && v._registeredComponents.add(s);
  }, o._ssrRegister = f) : r && (f = u ? function() {
    r.call(
      this,
      (o.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : r), f)
    if (o.functional) {
      o._injectStyles = f;
      var m = o.render;
      o.render = function(v, h) {
        return f.call(h), m(v, h);
      };
    } else {
      var l = o.beforeCreate;
      o.beforeCreate = l ? [].concat(l, f) : [f];
    }
  return {
    exports: n,
    options: o
  };
}
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
const Zs = (n) => {
  n.mounted ? Array.isArray(n.mounted) || (n.mounted = [n.mounted]) : n.mounted = [], n.mounted.push(function() {
    this.$el.setAttribute("data-v-cfad8df", "");
  });
}, Qs = ["date", "datetime-local", "month", "time", "week"], e0 = {
  name: "NcDateTimePickerNative",
  inheritAttrs: !1,
  props: {
    /**
     * The date is – like the `Date` object in JavaScript – tied to UTC.
     * The selected time zone does not have an influence of the selected time and date value.
     * You have to translate the time yourself when you want to factor in time zones.
     * Pass null to clear the input field.
     */
    value: {
      type: Date,
      default: null
    },
    /**
     * id attribute of the input field
     */
    id: {
      type: String,
      required: !0
    },
    /**
     * type attribute of the input field
     * default type: String
     * The type of the input element, it can be `date`, `datetime-local`, `month`, `time`, `week`
     */
    type: {
      type: String,
      default: "date",
      validate: (n) => Qs.includes(n)
    },
    /**
     * text inside the label element
     * default type: String
     */
    label: {
      type: String,
      default: "Please choose a date"
    },
    /**
     * min attribute of the input field
     * default type: null
     */
    min: {
      type: [Date, Boolean],
      default: null
    },
    /**
     * max attribute of the input field
     * default type: null
     */
    max: {
      type: [Date, Boolean],
      default: null
    },
    /**
     * Flag to hide the label
     * default type: String
     * The hidden input label for accessibility purposes.
     */
    hideLabel: {
      type: Boolean,
      default: !1
    },
    /**
     * Class to add to the input field.
     * Necessary to use NcDateTimePickerNative in the NcActionInput component.
     */
    inputClass: {
      type: [Object, String],
      default: ""
    }
  },
  emits: [
    "input"
  ],
  computed: {
    formattedValue() {
      return this.formatValue(this.value);
    },
    formattedMin() {
      return this.min ? this.formatValue(this.min) : !1;
    },
    formattedMax() {
      return this.max ? this.formatValue(this.max) : !1;
    },
    listeners() {
      return {
        ...this.$listeners,
        /**
         * Handle the input event
         *
         * @param {InputEvent} $event input event payload
         * @return {Date|string} new chosen Date() or an empty string
         */
        input: (n) => {
          if (isNaN(n.target.valueAsNumber))
            return this.$emit("input", null);
          if (this.type === "time") {
            const t = n.target.value;
            if (this.value === "") {
              const { yyyy: u, MM: o, dd: f } = this.getReadableDate(/* @__PURE__ */ new Date());
              return this.$emit("input", /* @__PURE__ */ new Date(`${u}-${o}-${f}T${t}`));
            }
            const { yyyy: r, MM: a, dd: s } = this.getReadableDate(this.value);
            return this.$emit("input", /* @__PURE__ */ new Date(`${r}-${a}-${s}T${t}`));
          } else if (this.type === "month") {
            const t = (new Date(n.target.value).getMonth() + 1).toString().padStart(2, "0");
            if (this.value === "") {
              const { yyyy: o, dd: f, hh: m, mm: l } = this.getReadableDate(/* @__PURE__ */ new Date());
              return this.$emit("input", /* @__PURE__ */ new Date(`${o}-${t}-${f}T${m}:${l}`));
            }
            const { yyyy: r, dd: a, hh: s, mm: u } = this.getReadableDate(this.value);
            return this.$emit("input", /* @__PURE__ */ new Date(`${r}-${t}-${a}T${s}:${u}`));
          }
          const e = new Date(n.target.valueAsNumber).getTimezoneOffset() * 1e3 * 60, i = n.target.valueAsNumber + e;
          return this.$emit("input", new Date(i));
        }
      };
    }
  },
  methods: {
    /**
     * Returns Object with string values of a Date
     *
     * @param {Date} value The selected value
     * @return {object|undefined}
     */
    getReadableDate(n) {
      if (n instanceof Date) {
        const e = n.getFullYear().toString().padStart(4, "0"), i = (n.getMonth() + 1).toString().padStart(2, "0"), t = n.getDate().toString().padStart(2, "0"), r = n.getHours().toString().padStart(2, "0"), a = n.getMinutes().toString().padStart(2, "0");
        return { yyyy: e, MM: i, dd: t, hh: r, mm: a };
      }
    },
    /**
     * Returns preformatted value for the input field
     *
     * @param {Date} value The selected value
     * @return {string|undefined}
     */
    formatValue(n) {
      if (n instanceof Date) {
        const { yyyy: e, MM: i, dd: t, hh: r, mm: a } = this.getReadableDate(n);
        if (this.type === "datetime-local")
          return `${e}-${i}-${t}T${r}:${a}`;
        if (this.type === "date")
          return `${e}-${i}-${t}`;
        if (this.type === "month")
          return `${e}-${i}`;
        if (this.type === "time")
          return `${r}:${a}`;
        if (this.type === "week") {
          const s = new Date(e, 0, 1), u = Math.floor((n - s) / (24 * 60 * 60 * 1e3)), o = Math.ceil(u / 7);
          return `${e}-W${o}`;
        }
      } else
        return "";
    }
  }
};
var t0 = function() {
  var n = this, e = n._self._c;
  return e("div", { staticClass: "native-datetime-picker" }, [e("label", { class: { "hidden-visually": n.hideLabel }, attrs: { for: n.id } }, [n._v(n._s(n.label))]), e("input", n._g(n._b({ staticClass: "native-datetime-picker--input", class: n.inputClass, attrs: { id: n.id, type: n.type, min: n.formattedMin, max: n.formattedMax }, domProps: { value: n.formattedValue } }, "input", n.$attrs, !1), n.listeners))]);
}, r0 = [], n0 = /* @__PURE__ */ Ji(
  e0,
  t0,
  r0,
  !1,
  null,
  "22982259",
  null,
  null
);
const Zi = n0.exports;
/**
 * @copyright Copyright (c) 2022 Julia Kirschenheuter <julia.kirschenheuter@nextcloud.com>
 *
 * @author Julia Kirschenheuter <julia.kirschenheuter@nextcloud.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
Zs(Zi);
const i0 = {
  name: "NcButton",
  props: {
    /**
     * Set the text and icon alignment
     *
     * @default 'center'
     */
    alignment: {
      type: String,
      default: "center",
      validator: (n) => ["start", "start-reverse", "center", "center-reverse", "end", "end-reverse"].includes(n)
    },
    /**
     * Toggles the disabled state of the button on and off.
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Specifies the button type
     * Accepted values: primary, secondary, tertiary, tertiary-no-background, tertiary-on-primary, error, warning, success. If left empty,
     * the default button style will be applied.
     */
    type: {
      type: String,
      validator(n) {
        return ["primary", "secondary", "tertiary", "tertiary-no-background", "tertiary-on-primary", "error", "warning", "success"].indexOf(n) !== -1;
      },
      default: "secondary"
    },
    /**
     * Specifies the button native type
     * Accepted values: submit, reset, button. If left empty,
     * the default "button" type will be used.
     */
    nativeType: {
      type: String,
      validator(n) {
        return ["submit", "reset", "button"].indexOf(n) !== -1;
      },
      default: "button"
    },
    /**
     * Specifies whether the button should span all the available width.
     * By default, buttons span the whole width of the container.
     */
    wide: {
      type: Boolean,
      default: !1
    },
    /**
     * Always try to provide an aria-label to your button. Make it more
     * specific than the button's name by provide some more context. E.g. if
     * the name of the button is "send" in the Mail app, the aria label could
     * be "Send email".
     */
    ariaLabel: {
      type: String,
      default: null
    },
    /**
     * Providing the href attribute turns the button component into an `a`
     * element.
     */
    href: {
      type: String,
      default: null
    },
    /**
     * Providing the download attribute with href downloads file when clicking.
     */
    download: {
      type: String,
      default: null
    },
    /**
     * Providing the to attribute turns the button component into a `router-link`
     * element. Takes precedence over the href attribute.
     */
    to: {
      type: [String, Object],
      default: null
    },
    /**
     * Pass in `true` if you want the matching behaviour of `router-link` to
     * be non-inclusive: https://router.vuejs.org/api/#exact
     */
    exact: {
      type: Boolean,
      default: !1
    },
    /**
     * aria-hidden attribute for the icon slot
     */
    ariaHidden: {
      type: Boolean,
      default: null
    },
    /**
     * The pressed state of the button if it has a checked state
     * This will add the `aria-pressed` attribute and for the button to have the primary style in checked state.
     */
    pressed: {
      type: Boolean,
      default: null
    }
  },
  emits: ["update:pressed", "click"],
  computed: {
    /**
     * The real type to be used for the button, enforces `primary` for pressed state and, if stateful button, any other type for not pressed state
     * Otherwise the type property is used.
     */
    realType() {
      return this.pressed ? "primary" : this.pressed === !1 && this.type === "primary" ? "secondary" : this.type;
    },
    /**
     * The flexbox alignment of the button content
     */
    flexAlignment() {
      return this.alignment.split("-")[0];
    },
    /**
     * If the button content should be reversed (icon on the end)
     */
    isReverseAligned() {
      return this.alignment.includes("-");
    }
  },
  /**
   * The render function to display the component
   *
   * @param {Function} h The function to create VNodes
   * @return {object|undefined} The created VNode
   */
  render(n) {
    var e, i, t;
    const r = !!this.$slots.default, a = (e = this.$slots) == null ? void 0 : e.icon;
    !r && !this.ariaLabel && console.warn(
      "You need to fill either the text or the ariaLabel props in the button component.",
      {
        text: (t = (i = this.$slots.default) == null ? void 0 : i[0]) == null ? void 0 : t.text,
        ariaLabel: this.ariaLabel
      },
      this
    );
    const s = ({ navigate: u, isActive: o, isExactActive: f } = {}) => n(
      this.to || !this.href ? "button" : "a",
      {
        class: [
          "button-vue",
          {
            "button-vue--icon-only": a && !r,
            "button-vue--text-only": r && !a,
            "button-vue--icon-and-text": a && r,
            [`button-vue--vue-${this.realType}`]: this.realType,
            "button-vue--wide": this.wide,
            [`button-vue--${this.flexAlignment}`]: this.flexAlignment !== "center",
            "button-vue--reverse": this.isReverseAligned,
            active: o,
            "router-link-exact-active": f
          }
        ],
        attrs: {
          "aria-label": this.ariaLabel,
          "aria-pressed": this.pressed,
          disabled: this.disabled,
          type: this.href ? null : this.nativeType,
          role: this.href ? "button" : null,
          href: !this.to && this.href ? this.href : null,
          target: !this.to && this.href ? "_self" : null,
          rel: !this.to && this.href ? "nofollow noreferrer noopener" : null,
          download: !this.to && this.href && this.download ? this.download : null,
          ...this.$attrs
        },
        on: {
          ...this.$listeners,
          click: (m) => {
            typeof this.pressed == "boolean" && this.$emit("update:pressed", !this.pressed), this.$emit("click", m), u == null || u(m);
          }
        }
      },
      [
        n("span", { class: "button-vue__wrapper" }, [
          a ? n(
            "span",
            {
              class: "button-vue__icon",
              attrs: {
                "aria-hidden": this.ariaHidden
              }
            },
            [this.$slots.icon]
          ) : null,
          r ? n("span", { class: "button-vue__text" }, [this.$slots.default]) : null
        ])
      ]
    );
    return this.to ? n("router-link", {
      props: {
        custom: !0,
        to: this.to,
        exact: this.exact
      },
      scopedSlots: {
        default: s
      }
    }) : s();
  }
}, a0 = null, s0 = null;
var o0 = /* @__PURE__ */ Ji(
  i0,
  a0,
  s0,
  !1,
  null,
  "f507b497",
  null,
  null
);
const u0 = o0.exports;
function Br(n, e, i, t, r, a, s, u) {
  var o = typeof n == "function" ? n.options : n;
  e && (o.render = e, o.staticRenderFns = i, o._compiled = !0), t && (o.functional = !0), a && (o._scopeId = "data-v-" + a);
  var f;
  if (s ? (f = function(v) {
    v = v || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !v && typeof __VUE_SSR_CONTEXT__ < "u" && (v = __VUE_SSR_CONTEXT__), r && r.call(this, v), v && v._registeredComponents && v._registeredComponents.add(s);
  }, o._ssrRegister = f) : r && (f = u ? function() {
    r.call(
      this,
      (o.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : r), f)
    if (o.functional) {
      o._injectStyles = f;
      var m = o.render;
      o.render = function(h, c) {
        return f.call(c), m(h, c);
      };
    } else {
      var l = o.beforeCreate;
      o.beforeCreate = l ? [].concat(l, f) : [f];
    }
  return {
    exports: n,
    options: o
  };
}
const f0 = {
  name: "DeleteIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var l0 = function() {
  var e = this, i = e._self._c;
  return i("span", e._b({ staticClass: "material-design-icon delete-icon", attrs: { "aria-hidden": !e.title, "aria-label": e.title, role: "img" }, on: { click: function(t) {
    return e.$emit("click", t);
  } } }, "span", e.$attrs, !1), [i("svg", { staticClass: "material-design-icon__svg", attrs: { fill: e.fillColor, width: e.size, height: e.size, viewBox: "0 0 24 24" } }, [i("path", { attrs: { d: "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" } }, [e.title ? i("title", [e._v(e._s(e.title))]) : e._e()])])]);
}, c0 = [], d0 = /* @__PURE__ */ Br(
  f0,
  l0,
  c0,
  !1,
  null,
  null,
  null,
  null
);
const h0 = d0.exports, m0 = {
  name: "PlusIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var v0 = function() {
  var e = this, i = e._self._c;
  return i("span", e._b({ staticClass: "material-design-icon plus-icon", attrs: { "aria-hidden": !e.title, "aria-label": e.title, role: "img" }, on: { click: function(t) {
    return e.$emit("click", t);
  } } }, "span", e.$attrs, !1), [i("svg", { staticClass: "material-design-icon__svg", attrs: { fill: e.fillColor, width: e.size, height: e.size, viewBox: "0 0 24 24" } }, [i("path", { attrs: { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" } }, [e.title ? i("title", [e._v(e._s(e.title))]) : e._e()])])]);
}, p0 = [], T0 = /* @__PURE__ */ Br(
  m0,
  v0,
  p0,
  !1,
  null,
  null,
  null,
  null
);
const y0 = T0.exports;
const S0 = {
  name: "CalendarAvailability",
  components: {
    NcDateTimePickerNative: Zi,
    NcButton: u0,
    IconAdd: y0,
    IconDelete: h0
  },
  props: {
    slots: {
      type: Object,
      required: !0
    },
    loading: {
      type: Boolean,
      default: !1
    },
    l10nTo: {
      type: String,
      required: !0
    },
    l10nDeleteSlot: {
      type: String,
      required: !0
    },
    l10nEmptyDay: {
      type: String,
      required: !0
    },
    l10nAddSlot: {
      type: String,
      required: !0
    },
    l10nMonday: {
      type: String,
      required: !0
    },
    l10nTuesday: {
      type: String,
      required: !0
    },
    l10nWednesday: {
      type: String,
      required: !0
    },
    l10nThursday: {
      type: String,
      required: !0
    },
    l10nFriday: {
      type: String,
      required: !0
    },
    l10nSaturday: {
      type: String,
      required: !0
    },
    l10nSunday: {
      type: String,
      required: !0
    },
    l10nStartPickerLabel: {
      type: Function,
      default: (n) => `Pick a start time for ${n}`
    },
    l10nEndPickerLabel: {
      type: Function,
      default: (n) => `Pick a end time for ${n}`
    }
  },
  data() {
    return {
      internalSlots: this.slotsToInternalData(this.slots)
    };
  },
  watch: {
    slots() {
      this.internalSlots = this.slotsToInternalData(this.slots);
    }
  },
  methods: {
    timeStampSlotsToDateObjectSlots(n) {
      return n.map((e) => ({
        start: new Date(e.start * 1e3),
        end: new Date(e.end * 1e3)
      }));
    },
    slotsToInternalData() {
      const n = [
        {
          id: "MO",
          displayName: this.l10nMonday,
          slots: this.timeStampSlotsToDateObjectSlots(this.slots.MO)
        },
        {
          id: "TU",
          displayName: this.l10nTuesday,
          slots: this.timeStampSlotsToDateObjectSlots(this.slots.TU)
        },
        {
          id: "WE",
          displayName: this.l10nWednesday,
          slots: this.timeStampSlotsToDateObjectSlots(this.slots.WE)
        },
        {
          id: "TH",
          displayName: this.l10nThursday,
          slots: this.timeStampSlotsToDateObjectSlots(this.slots.TH)
        },
        {
          id: "FR",
          displayName: this.l10nFriday,
          slots: this.timeStampSlotsToDateObjectSlots(this.slots.FR)
        },
        {
          id: "SA",
          displayName: this.l10nSaturday,
          slots: this.timeStampSlotsToDateObjectSlots(this.slots.SA)
        }
      ], e = {
        id: "SU",
        displayName: this.l10nSunday,
        slots: this.timeStampSlotsToDateObjectSlots(this.slots.SU)
      };
      return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.getFirstDay)() === 1 ? [...n, e] : [e, ...n];
    },
    internalDataToSlots() {
      const n = {};
      return this.internalSlots.forEach(({ id: e, slots: i }) => {
        n[e] = i.map((t) => ({
          start: Math.round(t.start.getTime() / 1e3),
          end: Math.round(t.end.getTime() / 1e3)
        }));
      }), n;
    },
    addSlot(n) {
      const e = /* @__PURE__ */ new Date();
      e.setHours(9, 0, 0, 0);
      const i = /* @__PURE__ */ new Date();
      i.setHours(17, 0, 0, 0), n.slots.push({
        start: e,
        end: i
      }), this.onChangeSlots();
    },
    removeSlot(n, e) {
      n.slots.splice(e, 1), this.onChangeSlots();
    },
    onChangeSlots() {
      this.$emit("update:slots", this.internalDataToSlots());
    }
  }
};
var g0 = function() {
  var e = this, i = e._self._c;
  return i("div", { staticClass: "grid-table" }, [e._l(e.internalSlots, function(t) {
    return [i("div", { key: `day-label-${t.id}`, staticClass: "label-weekday" }, [i("span", [e._v(e._s(t.displayName))])]), i("div", { key: `day-slots-${t.id}`, staticClass: "availability-slots" }, [i("div", { staticClass: "availability-slot-group" }, [e._l(t.slots, function(r, a) {
      var s, u;
      return [i("div", { key: `slot-${t.id}-${a}`, staticClass: "availability-slot" }, [i("NcDateTimePickerNative", { staticClass: "start-date", attrs: { id: `start-${t.id}-${a}`, type: "time", label: (s = e.l10nStartPickerLabel) == null ? void 0 : s.call(e, t.displayName), "hide-label": !0 }, on: { change: e.onChangeSlots }, model: { value: r.start, callback: function(o) {
        e.$set(r, "start", o);
      }, expression: "slot.start" } }), i("span", { staticClass: "to-text" }, [e._v(" " + e._s(e.l10nTo) + " ")]), i("NcDateTimePickerNative", { staticClass: "end-date", attrs: { id: `end-${t.id}-${a}`, type: "time", label: (u = e.l10nEndPickerLabel) == null ? void 0 : u.call(e, t.displayName), "hide-label": !0 }, on: { change: e.onChangeSlots }, model: { value: r.end, callback: function(o) {
        e.$set(r, "end", o);
      }, expression: "slot.end" } }), i("NcButton", { key: `slot-${t.id}-${a}-btn`, staticClass: "button", attrs: { type: "tertiary", "aria-label": e.l10nDeleteSlot, title: e.l10nDeleteSlot }, on: { click: function(o) {
        return e.removeSlot(t, a);
      } }, scopedSlots: e._u([{ key: "icon", fn: function() {
        return [i("IconDelete", { attrs: { size: 20 } })];
      }, proxy: !0 }], null, !0) })], 1)];
    })], 2), t.slots.length === 0 ? i("span", { staticClass: "empty-content" }, [e._v(" " + e._s(e.l10nEmptyDay) + " ")]) : e._e()]), i("NcButton", { key: `add-slot-${t.id}`, staticClass: "add-another button", attrs: { disabled: e.loading, title: e.l10nAddSlot, "aria-label": e.l10nAddSlot }, on: { click: function(r) {
      return e.addSlot(t);
    } }, scopedSlots: e._u([{ key: "icon", fn: function() {
      return [i("IconAdd", { attrs: { size: 20 } })];
    }, proxy: !0 }], null, !0) })];
  })], 2);
}, E0 = [], A0 = /* @__PURE__ */ Br(
  S0,
  g0,
  E0,
  !1,
  null,
  "31358f1f",
  null,
  null
);
const e1 = A0.exports;
var jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ke = {}, $e = {};
Object.defineProperty($e, "__esModule", { value: !0 });
$e.zonesMap = $e.defaultStart = void 0;
$e.defaultStart = "19700101T000000";
$e.zonesMap = /* @__PURE__ */ new Map([
  [
    "Africa/Abidjan",
    {
      s: {
        f: "+0000",
        n: "GMT"
      }
    }
  ],
  [
    "Africa/Accra",
    {
      s: {
        f: "+0000",
        n: "GMT"
      }
    }
  ],
  [
    "Africa/Addis_Ababa",
    {
      s: {
        f: "+0300",
        n: "EAT"
      }
    }
  ],
  [
    "Africa/Algiers",
    {
      s: {
        f: "+0100",
        n: "CET"
      }
    }
  ],
  [
    "Africa/Asmara",
    {
      s: {
        f: "+0300",
        n: "EAT"
      }
    }
  ],
  [
    "Africa/Bamako",
    {
      s: {
        f: "+0000",
        n: "GMT"
      }
    }
  ],
  [
    "Africa/Bangui",
    {
      s: {
        f: "+0100",
        n: "WAT"
      }
    }
  ],
  [
    "Africa/Banjul",
    {
      s: {
        f: "+0000",
        n: "GMT"
      }
    }
  ],
  [
    "Africa/Bissau",
    {
      s: {
        f: "+0000",
        n: "GMT"
      }
    }
  ],
  [
    "Africa/Blantyre",
    {
      s: {
        f: "+0200",
        n: "CAT"
      }
    }
  ],
  [
    "Africa/Brazzaville",
    {
      s: {
        f: "+0100",
        n: "WAT"
      }
    }
  ],
  [
    "Africa/Bujumbura",
    {
      s: {
        f: "+0200",
        n: "CAT"
      }
    }
  ],
  [
    "Africa/Cairo",
    {
      s: {
        f: "+0200",
        n: "EET"
      }
    }
  ],
  [
    "Africa/Casablanca",
    {
      s: {
        f: "+0100",
        n: "+01"
      }
    }
  ],
  [
    "Africa/Ceuta",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Africa/Conakry",
    {
      s: {
        f: "+0000",
        n: "GMT"
      }
    }
  ],
  [
    "Africa/Dakar",
    {
      s: {
        f: "+0000",
        n: "GMT"
      }
    }
  ],
  [
    "Africa/Dar_es_Salaam",
    {
      s: {
        f: "+0300",
        n: "EAT"
      }
    }
  ],
  [
    "Africa/Djibouti",
    {
      s: {
        f: "+0300",
        n: "EAT"
      }
    }
  ],
  [
    "Africa/Douala",
    {
      s: {
        f: "+0100",
        n: "WAT"
      }
    }
  ],
  [
    "Africa/El_Aaiun",
    {
      s: {
        f: "+0100",
        n: "+01"
      }
    }
  ],
  [
    "Africa/Freetown",
    {
      s: {
        f: "+0000",
        n: "GMT"
      }
    }
  ],
  [
    "Africa/Gaborone",
    {
      s: {
        f: "+0200",
        n: "CAT"
      }
    }
  ],
  [
    "Africa/Harare",
    {
      s: {
        f: "+0200",
        n: "CAT"
      }
    }
  ],
  [
    "Africa/Johannesburg",
    {
      s: {
        f: "+0200",
        n: "SAST"
      }
    }
  ],
  [
    "Africa/Juba",
    {
      s: {
        f: "+0300",
        n: "EAT"
      }
    }
  ],
  [
    "Africa/Kampala",
    {
      s: {
        f: "+0300",
        n: "EAT"
      }
    }
  ],
  [
    "Africa/Khartoum",
    {
      s: {
        f: "+0200",
        n: "CAT"
      }
    }
  ],
  [
    "Africa/Kigali",
    {
      s: {
        f: "+0200",
        n: "CAT"
      }
    }
  ],
  [
    "Africa/Kinshasa",
    {
      s: {
        f: "+0100",
        n: "WAT"
      }
    }
  ],
  [
    "Africa/Lagos",
    {
      s: {
        f: "+0100",
        n: "WAT"
      }
    }
  ],
  [
    "Africa/Libreville",
    {
      s: {
        f: "+0100",
        n: "WAT"
      }
    }
  ],
  [
    "Africa/Lome",
    {
      s: {
        f: "+0000",
        n: "GMT"
      }
    }
  ],
  [
    "Africa/Luanda",
    {
      s: {
        f: "+0100",
        n: "WAT"
      }
    }
  ],
  [
    "Africa/Lubumbashi",
    {
      s: {
        f: "+0200",
        n: "CAT"
      }
    }
  ],
  [
    "Africa/Lusaka",
    {
      s: {
        f: "+0200",
        n: "CAT"
      }
    }
  ],
  [
    "Africa/Malabo",
    {
      s: {
        f: "+0100",
        n: "WAT"
      }
    }
  ],
  [
    "Africa/Maputo",
    {
      s: {
        f: "+0200",
        n: "CAT"
      }
    }
  ],
  [
    "Africa/Maseru",
    {
      s: {
        f: "+0200",
        n: "SAST"
      }
    }
  ],
  [
    "Africa/Mbabane",
    {
      s: {
        f: "+0200",
        n: "SAST"
      }
    }
  ],
  [
    "Africa/Mogadishu",
    {
      s: {
        f: "+0300",
        n: "EAT"
      }
    }
  ],
  [
    "Africa/Monrovia",
    {
      s: {
        f: "+0000",
        n: "GMT"
      }
    }
  ],
  [
    "Africa/Nairobi",
    {
      s: {
        f: "+0300",
        n: "EAT"
      }
    }
  ],
  [
    "Africa/Ndjamena",
    {
      s: {
        f: "+0100",
        n: "WAT"
      }
    }
  ],
  [
    "Africa/Niamey",
    {
      s: {
        f: "+0100",
        n: "WAT"
      }
    }
  ],
  [
    "Africa/Nouakchott",
    {
      s: {
        f: "+0000",
        n: "GMT"
      }
    }
  ],
  [
    "Africa/Ouagadougou",
    {
      s: {
        f: "+0000",
        n: "GMT"
      }
    }
  ],
  [
    "Africa/Porto-Novo",
    {
      s: {
        f: "+0100",
        n: "WAT"
      }
    }
  ],
  [
    "Africa/Sao_Tome",
    {
      s: {
        f: "+0100",
        n: "WAT"
      }
    }
  ],
  [
    "Africa/Tripoli",
    {
      s: {
        f: "+0200",
        n: "EET"
      }
    }
  ],
  [
    "Africa/Tunis",
    {
      s: {
        f: "+0100",
        n: "CET"
      }
    }
  ],
  [
    "Africa/Windhoek",
    {
      s: {
        f: "+0200",
        n: "CAT"
      }
    }
  ],
  [
    "America/Adak",
    {
      s: {
        f: "-0900",
        t: "-1000",
        n: "HST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-1000",
        t: "-0900",
        n: "HDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Anchorage",
    {
      s: {
        f: "-0800",
        t: "-0900",
        n: "AKST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0900",
        t: "-0800",
        n: "AKDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Anguilla",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/Antigua",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/Araguaina",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Argentina/Buenos_Aires",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Argentina/Catamarca",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Argentina/Cordoba",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Argentina/Jujuy",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Argentina/La_Rioja",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Argentina/Mendoza",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Argentina/Rio_Gallegos",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Argentina/Salta",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Argentina/San_Juan",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Argentina/San_Luis",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Argentina/Tucuman",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Argentina/Ushuaia",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Aruba",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/Asuncion",
    {
      s: {
        f: "-0300",
        t: "-0400",
        n: "-04",
        s: "19700322T000000",
        r: {
          m: 3,
          d: "4SU"
        }
      },
      d: {
        f: "-0400",
        t: "-0300",
        n: "-03",
        s: "19701004T000000",
        r: {
          m: 10,
          d: "1SU"
        }
      }
    }
  ],
  [
    "America/Atikokan",
    {
      s: {
        f: "-0500",
        n: "EST"
      }
    }
  ],
  [
    "America/Bahia_Banderas",
    {
      s: {
        f: "-0500",
        t: "-0600",
        n: "CST",
        s: "19701025T020000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "-0600",
        t: "-0500",
        n: "CDT",
        s: "19700405T020000",
        r: {
          m: 4,
          d: "1SU"
        }
      }
    }
  ],
  [
    "America/Bahia",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Barbados",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/Belem",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Belize",
    {
      s: {
        f: "-0600",
        n: "CST"
      }
    }
  ],
  [
    "America/Blanc-Sablon",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/Boa_Vista",
    {
      s: {
        f: "-0400",
        n: "-04"
      }
    }
  ],
  [
    "America/Bogota",
    {
      s: {
        f: "-0500",
        n: "-05"
      }
    }
  ],
  [
    "America/Boise",
    {
      s: {
        f: "-0600",
        t: "-0700",
        n: "MST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0700",
        t: "-0600",
        n: "MDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Cambridge_Bay",
    {
      s: {
        f: "-0600",
        t: "-0700",
        n: "MST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0700",
        t: "-0600",
        n: "MDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Campo_Grande",
    {
      s: {
        f: "-0400",
        n: "-04",
        s: "19700215T000000",
        r: {
          m: 2,
          d: "3SU"
        }
      },
      d: {
        f: "-0400",
        t: "-0300",
        n: "-03",
        s: "19701101T000000",
        r: {
          m: 11,
          d: "1SU"
        }
      }
    }
  ],
  [
    "America/Cancun",
    {
      s: {
        f: "-0500",
        n: "EST"
      }
    }
  ],
  [
    "America/Caracas",
    {
      s: {
        f: "-0400",
        n: "-04"
      }
    }
  ],
  [
    "America/Cayenne",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Cayman",
    {
      s: {
        f: "-0500",
        n: "EST"
      }
    }
  ],
  [
    "America/Chicago",
    {
      s: {
        f: "-0500",
        t: "-0600",
        n: "CST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0600",
        t: "-0500",
        n: "CDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Chihuahua",
    {
      s: {
        f: "-0600",
        t: "-0700",
        n: "MST",
        s: "19701025T020000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "-0700",
        t: "-0600",
        n: "MDT",
        s: "19700405T020000",
        r: {
          m: 4,
          d: "1SU"
        }
      }
    }
  ],
  [
    "America/Costa_Rica",
    {
      s: {
        f: "-0600",
        n: "CST"
      }
    }
  ],
  [
    "America/Creston",
    {
      s: {
        f: "-0700",
        n: "MST"
      }
    }
  ],
  [
    "America/Cuiaba",
    {
      s: {
        f: "-0400",
        n: "-04",
        s: "19700215T000000",
        r: {
          m: 2,
          d: "3SU"
        }
      },
      d: {
        f: "-0400",
        t: "-0300",
        n: "-03",
        s: "19701101T000000",
        r: {
          m: 11,
          d: "1SU"
        }
      }
    }
  ],
  [
    "America/Curacao",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/Danmarkshavn",
    {
      s: {
        f: "+0000",
        n: "GMT"
      }
    }
  ],
  [
    "America/Dawson_Creek",
    {
      s: {
        f: "-0700",
        n: "MST"
      }
    }
  ],
  [
    "America/Dawson",
    {
      s: {
        f: "-0700",
        t: "-0800",
        n: "PST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0800",
        t: "-0700",
        n: "PDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Denver",
    {
      s: {
        f: "-0600",
        t: "-0700",
        n: "MST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0700",
        t: "-0600",
        n: "MDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Detroit",
    {
      s: {
        f: "-0400",
        t: "-0500",
        n: "EST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0500",
        t: "-0400",
        n: "EDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Dominica",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/Edmonton",
    {
      s: {
        f: "-0600",
        t: "-0700",
        n: "MST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0700",
        t: "-0600",
        n: "MDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Eirunepe",
    {
      s: {
        f: "-0500",
        n: "-05"
      }
    }
  ],
  [
    "America/El_Salvador",
    {
      s: {
        f: "-0600",
        n: "CST"
      }
    }
  ],
  [
    "America/Fort_Nelson",
    {
      s: {
        f: "-0700",
        n: "MST"
      }
    }
  ],
  [
    "America/Fortaleza",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Glace_Bay",
    {
      s: {
        f: "-0300",
        t: "-0400",
        n: "AST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0400",
        t: "-0300",
        n: "ADT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Godthab",
    {
      s: {
        f: "-0200",
        t: "-0300",
        n: "-03",
        s: "19701024T230000",
        r: {
          m: 10,
          d: "-1SA"
        }
      },
      d: {
        f: "-0300",
        t: "-0200",
        n: "-02",
        s: "19700328T220000",
        r: {
          m: 3,
          d: "-1SA"
        }
      }
    }
  ],
  [
    "America/Goose_Bay",
    {
      s: {
        f: "-0300",
        t: "-0400",
        n: "AST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0400",
        t: "-0300",
        n: "ADT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Grand_Turk",
    {
      s: {
        f: "-0400",
        t: "-0500",
        n: "EST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0500",
        t: "-0400",
        n: "EDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Grenada",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/Guadeloupe",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/Guatemala",
    {
      s: {
        f: "-0600",
        n: "CST"
      }
    }
  ],
  [
    "America/Guayaquil",
    {
      s: {
        f: "-0500",
        n: "-05"
      }
    }
  ],
  [
    "America/Guyana",
    {
      s: {
        f: "-0400",
        n: "-04"
      }
    }
  ],
  [
    "America/Halifax",
    {
      s: {
        f: "-0300",
        t: "-0400",
        n: "AST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0400",
        t: "-0300",
        n: "ADT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Havana",
    {
      s: {
        f: "-0400",
        t: "-0500",
        n: "CST",
        s: "19701101T010000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0500",
        t: "-0400",
        n: "CDT",
        s: "19700308T000000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Hermosillo",
    {
      s: {
        f: "-0700",
        n: "MST"
      }
    }
  ],
  [
    "America/Indiana/Indianapolis",
    {
      s: {
        f: "-0400",
        t: "-0500",
        n: "EST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0500",
        t: "-0400",
        n: "EDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Indiana/Knox",
    {
      s: {
        f: "-0500",
        t: "-0600",
        n: "CST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0600",
        t: "-0500",
        n: "CDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Indiana/Marengo",
    {
      s: {
        f: "-0400",
        t: "-0500",
        n: "EST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0500",
        t: "-0400",
        n: "EDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Indiana/Petersburg",
    {
      s: {
        f: "-0400",
        t: "-0500",
        n: "EST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0500",
        t: "-0400",
        n: "EDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Indiana/Tell_City",
    {
      s: {
        f: "-0500",
        t: "-0600",
        n: "CST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0600",
        t: "-0500",
        n: "CDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Indiana/Vevay",
    {
      s: {
        f: "-0400",
        t: "-0500",
        n: "EST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0500",
        t: "-0400",
        n: "EDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Indiana/Vincennes",
    {
      s: {
        f: "-0400",
        t: "-0500",
        n: "EST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0500",
        t: "-0400",
        n: "EDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Indiana/Winamac",
    {
      s: {
        f: "-0400",
        t: "-0500",
        n: "EST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0500",
        t: "-0400",
        n: "EDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Inuvik",
    {
      s: {
        f: "-0600",
        t: "-0700",
        n: "MST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0700",
        t: "-0600",
        n: "MDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Iqaluit",
    {
      s: {
        f: "-0400",
        t: "-0500",
        n: "EST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0500",
        t: "-0400",
        n: "EDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Jamaica",
    {
      s: {
        f: "-0500",
        n: "EST"
      }
    }
  ],
  [
    "America/Juneau",
    {
      s: {
        f: "-0800",
        t: "-0900",
        n: "AKST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0900",
        t: "-0800",
        n: "AKDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Kentucky/Louisville",
    {
      s: {
        f: "-0400",
        t: "-0500",
        n: "EST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0500",
        t: "-0400",
        n: "EDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Kentucky/Monticello",
    {
      s: {
        f: "-0400",
        t: "-0500",
        n: "EST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0500",
        t: "-0400",
        n: "EDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Kralendijk",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/La_Paz",
    {
      s: {
        f: "-0400",
        n: "-04"
      }
    }
  ],
  [
    "America/Lima",
    {
      s: {
        f: "-0500",
        n: "-05"
      }
    }
  ],
  [
    "America/Los_Angeles",
    {
      s: {
        f: "-0700",
        t: "-0800",
        n: "PST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0800",
        t: "-0700",
        n: "PDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Lower_Princes",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/Maceio",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Managua",
    {
      s: {
        f: "-0600",
        n: "CST"
      }
    }
  ],
  [
    "America/Manaus",
    {
      s: {
        f: "-0400",
        n: "-04"
      }
    }
  ],
  [
    "America/Marigot",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/Martinique",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/Matamoros",
    {
      s: {
        f: "-0500",
        t: "-0600",
        n: "CST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0600",
        t: "-0500",
        n: "CDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Mazatlan",
    {
      s: {
        f: "-0600",
        t: "-0700",
        n: "MST",
        s: "19701025T020000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "-0700",
        t: "-0600",
        n: "MDT",
        s: "19700405T020000",
        r: {
          m: 4,
          d: "1SU"
        }
      }
    }
  ],
  [
    "America/Menominee",
    {
      s: {
        f: "-0500",
        t: "-0600",
        n: "CST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0600",
        t: "-0500",
        n: "CDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Merida",
    {
      s: {
        f: "-0500",
        t: "-0600",
        n: "CST",
        s: "19701025T020000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "-0600",
        t: "-0500",
        n: "CDT",
        s: "19700405T020000",
        r: {
          m: 4,
          d: "1SU"
        }
      }
    }
  ],
  [
    "America/Metlakatla",
    {
      s: {
        f: "-0800",
        t: "-0900",
        n: "AKST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0900",
        t: "-0800",
        n: "AKDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Mexico_City",
    {
      s: {
        f: "-0500",
        t: "-0600",
        n: "CST",
        s: "19701025T020000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "-0600",
        t: "-0500",
        n: "CDT",
        s: "19700405T020000",
        r: {
          m: 4,
          d: "1SU"
        }
      }
    }
  ],
  [
    "America/Miquelon",
    {
      s: {
        f: "-0200",
        t: "-0300",
        n: "-03",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0300",
        t: "-0200",
        n: "-02",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Moncton",
    {
      s: {
        f: "-0300",
        t: "-0400",
        n: "AST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0400",
        t: "-0300",
        n: "ADT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Monterrey",
    {
      s: {
        f: "-0500",
        t: "-0600",
        n: "CST",
        s: "19701025T020000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "-0600",
        t: "-0500",
        n: "CDT",
        s: "19700405T020000",
        r: {
          m: 4,
          d: "1SU"
        }
      }
    }
  ],
  [
    "America/Montevideo",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Montserrat",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/Nassau",
    {
      s: {
        f: "-0400",
        t: "-0500",
        n: "EST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0500",
        t: "-0400",
        n: "EDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/New_York",
    {
      s: {
        f: "-0400",
        t: "-0500",
        n: "EST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0500",
        t: "-0400",
        n: "EDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Nipigon",
    {
      s: {
        f: "-0400",
        t: "-0500",
        n: "EST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0500",
        t: "-0400",
        n: "EDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Nome",
    {
      s: {
        f: "-0800",
        t: "-0900",
        n: "AKST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0900",
        t: "-0800",
        n: "AKDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Noronha",
    {
      s: {
        f: "-0200",
        n: "-02"
      }
    }
  ],
  [
    "America/North_Dakota/Beulah",
    {
      s: {
        f: "-0500",
        t: "-0600",
        n: "CST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0600",
        t: "-0500",
        n: "CDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/North_Dakota/Center",
    {
      s: {
        f: "-0500",
        t: "-0600",
        n: "CST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0600",
        t: "-0500",
        n: "CDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/North_Dakota/New_Salem",
    {
      s: {
        f: "-0500",
        t: "-0600",
        n: "CST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0600",
        t: "-0500",
        n: "CDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Ojinaga",
    {
      s: {
        f: "-0600",
        t: "-0700",
        n: "MST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0700",
        t: "-0600",
        n: "MDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Panama",
    {
      s: {
        f: "-0500",
        n: "EST"
      }
    }
  ],
  [
    "America/Pangnirtung",
    {
      s: {
        f: "-0400",
        t: "-0500",
        n: "EST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0500",
        t: "-0400",
        n: "EDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Paramaribo",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Phoenix",
    {
      s: {
        f: "-0700",
        n: "MST"
      }
    }
  ],
  [
    "America/Port_of_Spain",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/Port-au-Prince",
    {
      s: {
        f: "-0400",
        t: "-0500",
        n: "EST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0500",
        t: "-0400",
        n: "EDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Porto_Velho",
    {
      s: {
        f: "-0400",
        n: "-04"
      }
    }
  ],
  [
    "America/Puerto_Rico",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/Punta_Arenas",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Rainy_River",
    {
      s: {
        f: "-0500",
        t: "-0600",
        n: "CST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0600",
        t: "-0500",
        n: "CDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Rankin_Inlet",
    {
      s: {
        f: "-0500",
        t: "-0600",
        n: "CST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0600",
        t: "-0500",
        n: "CDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Recife",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Regina",
    {
      s: {
        f: "-0600",
        n: "CST"
      }
    }
  ],
  [
    "America/Resolute",
    {
      s: {
        f: "-0500",
        t: "-0600",
        n: "CST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0600",
        t: "-0500",
        n: "CDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Rio_Branco",
    {
      s: {
        f: "-0500",
        n: "-05"
      }
    }
  ],
  [
    "America/Santarem",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "America/Santiago",
    {
      s: {
        f: "-0300",
        t: "-0400",
        n: "-04",
        s: "19700405T000000",
        r: {
          m: 4,
          d: "1SU"
        }
      },
      d: {
        f: "-0400",
        t: "-0300",
        n: "-03",
        s: "19700906T000000",
        r: {
          m: 9,
          d: "1SU"
        }
      }
    }
  ],
  [
    "America/Santo_Domingo",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/Sao_Paulo",
    {
      s: {
        f: "-0300",
        n: "-03",
        s: "19700215T000000",
        r: {
          m: 2,
          d: "3SU"
        }
      },
      d: {
        f: "-0300",
        t: "-0200",
        n: "-02",
        s: "19701101T000000",
        r: {
          m: 11,
          d: "1SU"
        }
      }
    }
  ],
  [
    "America/Scoresbysund",
    {
      s: {
        f: "+0000",
        t: "-0100",
        n: "-01",
        s: "19701025T010000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "-0100",
        t: "+0000",
        n: "+00",
        s: "19700329T000000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "America/Sitka",
    {
      s: {
        f: "-0800",
        t: "-0900",
        n: "AKST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0900",
        t: "-0800",
        n: "AKDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/St_Barthelemy",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/St_Johns",
    {
      s: {
        f: "-0230",
        t: "-0330",
        n: "NST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0330",
        t: "-0230",
        n: "NDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/St_Kitts",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/St_Lucia",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/St_Thomas",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/St_Vincent",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/Swift_Current",
    {
      s: {
        f: "-0600",
        n: "CST"
      }
    }
  ],
  [
    "America/Tegucigalpa",
    {
      s: {
        f: "-0600",
        n: "CST"
      }
    }
  ],
  [
    "America/Thule",
    {
      s: {
        f: "-0300",
        t: "-0400",
        n: "AST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0400",
        t: "-0300",
        n: "ADT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Thunder_Bay",
    {
      s: {
        f: "-0400",
        t: "-0500",
        n: "EST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0500",
        t: "-0400",
        n: "EDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Tijuana",
    {
      s: {
        f: "-0700",
        t: "-0800",
        n: "PST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0800",
        t: "-0700",
        n: "PDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Toronto",
    {
      s: {
        f: "-0400",
        t: "-0500",
        n: "EST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0500",
        t: "-0400",
        n: "EDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Tortola",
    {
      s: {
        f: "-0400",
        n: "AST"
      }
    }
  ],
  [
    "America/Vancouver",
    {
      s: {
        f: "-0700",
        t: "-0800",
        n: "PST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0800",
        t: "-0700",
        n: "PDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Whitehorse",
    {
      s: {
        f: "-0700",
        t: "-0800",
        n: "PST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0800",
        t: "-0700",
        n: "PDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Winnipeg",
    {
      s: {
        f: "-0500",
        t: "-0600",
        n: "CST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0600",
        t: "-0500",
        n: "CDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Yakutat",
    {
      s: {
        f: "-0800",
        t: "-0900",
        n: "AKST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0900",
        t: "-0800",
        n: "AKDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "America/Yellowknife",
    {
      s: {
        f: "-0600",
        t: "-0700",
        n: "MST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0700",
        t: "-0600",
        n: "MDT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "Antarctica/Casey",
    {
      s: {
        f: "+0800",
        n: "+08"
      }
    }
  ],
  [
    "Antarctica/Davis",
    {
      s: {
        f: "+0700",
        n: "+07"
      }
    }
  ],
  [
    "Antarctica/DumontDUrville",
    {
      s: {
        f: "+1000",
        n: "+10"
      }
    }
  ],
  [
    "Antarctica/Macquarie",
    {
      s: {
        f: "+1100",
        n: "+11"
      }
    }
  ],
  [
    "Antarctica/Mawson",
    {
      s: {
        f: "+0500",
        n: "+05"
      }
    }
  ],
  [
    "Antarctica/McMurdo",
    {
      s: {
        f: "+1300",
        t: "+1200",
        n: "NZST",
        s: "19700405T030000",
        r: {
          m: 4,
          d: "1SU"
        }
      },
      d: {
        f: "+1200",
        t: "+1300",
        n: "NZDT",
        s: "19700927T020000",
        r: {
          m: 9,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Antarctica/Palmer",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "Antarctica/Rothera",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "Antarctica/Syowa",
    {
      s: {
        f: "+0300",
        n: "+03"
      }
    }
  ],
  [
    "Antarctica/Troll",
    {
      s: {
        f: "+0200",
        t: "+0000",
        n: "+00",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0000",
        t: "+0200",
        n: "+02",
        s: "19700329T010000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Antarctica/Vostok",
    {
      s: {
        f: "+0600",
        n: "+06"
      }
    }
  ],
  [
    "Arctic/Longyearbyen",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Asia/Aden",
    {
      s: {
        f: "+0300",
        n: "+03"
      }
    }
  ],
  [
    "Asia/Almaty",
    {
      s: {
        f: "+0600",
        n: "+06"
      }
    }
  ],
  [
    "Asia/Amman",
    {
      s: {
        f: "+0300",
        t: "+0200",
        n: "EET",
        s: "19701030T010000",
        r: {
          m: 10,
          d: "-1FR"
        }
      },
      d: {
        f: "+0200",
        t: "+0300",
        n: "EEST",
        s: "19700326T235959",
        r: {
          m: 3,
          d: "-1TH"
        }
      }
    }
  ],
  [
    "Asia/Anadyr",
    {
      s: {
        f: "+1200",
        n: "+12"
      }
    }
  ],
  [
    "Asia/Aqtau",
    {
      s: {
        f: "+0500",
        n: "+05"
      }
    }
  ],
  [
    "Asia/Aqtobe",
    {
      s: {
        f: "+0500",
        n: "+05"
      }
    }
  ],
  [
    "Asia/Ashgabat",
    {
      s: {
        f: "+0500",
        n: "+05"
      }
    }
  ],
  [
    "Asia/Atyrau",
    {
      s: {
        f: "+0500",
        n: "+05"
      }
    }
  ],
  [
    "Asia/Baghdad",
    {
      s: {
        f: "+0300",
        n: "+03"
      }
    }
  ],
  [
    "Asia/Bahrain",
    {
      s: {
        f: "+0300",
        n: "+03"
      }
    }
  ],
  [
    "Asia/Baku",
    {
      s: {
        f: "+0400",
        n: "+04"
      }
    }
  ],
  [
    "Asia/Bangkok",
    {
      s: {
        f: "+0700",
        n: "+07"
      }
    }
  ],
  [
    "Asia/Barnaul",
    {
      s: {
        f: "+0700",
        n: "+07"
      }
    }
  ],
  [
    "Asia/Beirut",
    {
      s: {
        f: "+0300",
        t: "+0200",
        n: "EET",
        s: "19701025T000000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0200",
        t: "+0300",
        n: "EEST",
        s: "19700329T000000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Asia/Bishkek",
    {
      s: {
        f: "+0600",
        n: "+06"
      }
    }
  ],
  [
    "Asia/Brunei",
    {
      s: {
        f: "+0800",
        n: "+08"
      }
    }
  ],
  [
    "Asia/Chita",
    {
      s: {
        f: "+0900",
        n: "+09"
      }
    }
  ],
  [
    "Asia/Choibalsan",
    {
      s: {
        f: "+0800",
        n: "+08"
      }
    }
  ],
  [
    "Asia/Colombo",
    {
      s: {
        f: "+0530",
        n: "+0530"
      }
    }
  ],
  [
    "Asia/Damascus",
    {
      s: {
        f: "+0300",
        t: "+0200",
        n: "EET",
        s: "19701030T000000",
        r: {
          m: 10,
          d: "-1FR"
        }
      },
      d: {
        f: "+0200",
        t: "+0300",
        n: "EEST",
        s: "19700327T000000",
        r: {
          m: 3,
          d: "-1FR"
        }
      }
    }
  ],
  [
    "Asia/Dhaka",
    {
      s: {
        f: "+0600",
        n: "+06"
      }
    }
  ],
  [
    "Asia/Dili",
    {
      s: {
        f: "+0900",
        n: "+09"
      }
    }
  ],
  [
    "Asia/Dubai",
    {
      s: {
        f: "+0400",
        n: "+04"
      }
    }
  ],
  [
    "Asia/Dushanbe",
    {
      s: {
        f: "+0500",
        n: "+05"
      }
    }
  ],
  [
    "Asia/Famagusta",
    {
      s: {
        f: "+0300",
        t: "+0200",
        n: "EET",
        s: "19701025T040000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0200",
        t: "+0300",
        n: "EEST",
        s: "19700329T030000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Asia/Gaza",
    {
      s: {
        f: "+0300",
        t: "+0200",
        n: "EET",
        s: "19701031T010000",
        r: {
          m: 10,
          d: "-1SA"
        }
      },
      d: {
        f: "+0200",
        t: "+0300",
        n: "EEST",
        s: "19700328T010000",
        r: {
          m: 3,
          d: "4SA"
        }
      }
    }
  ],
  [
    "Asia/Hebron",
    {
      s: {
        f: "+0300",
        t: "+0200",
        n: "EET",
        s: "19701031T010000",
        r: {
          m: 10,
          d: "-1SA"
        }
      },
      d: {
        f: "+0200",
        t: "+0300",
        n: "EEST",
        s: "19700328T010000",
        r: {
          m: 3,
          d: "4SA"
        }
      }
    }
  ],
  [
    "Asia/Ho_Chi_Minh",
    {
      s: {
        f: "+0700",
        n: "+07"
      }
    }
  ],
  [
    "Asia/Hong_Kong",
    {
      s: {
        f: "+0800",
        n: "HKT"
      }
    }
  ],
  [
    "Asia/Hovd",
    {
      s: {
        f: "+0700",
        n: "+07"
      }
    }
  ],
  [
    "Asia/Irkutsk",
    {
      s: {
        f: "+0800",
        n: "+08"
      }
    }
  ],
  [
    "Asia/Istanbul",
    {
      s: {
        f: "+0300",
        n: "+03"
      }
    }
  ],
  [
    "Asia/Jakarta",
    {
      s: {
        f: "+0700",
        n: "WIB"
      }
    }
  ],
  [
    "Asia/Jayapura",
    {
      s: {
        f: "+0900",
        n: "WIT"
      }
    }
  ],
  [
    "Asia/Jerusalem",
    {
      s: {
        f: "+0300",
        t: "+0200",
        n: "IST",
        s: "19701025T020000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0200",
        t: "+0300",
        n: "IDT",
        s: "19700327T020000",
        r: {
          m: 3,
          d: "-1FR"
        }
      }
    }
  ],
  [
    "Asia/Kabul",
    {
      s: {
        f: "+0430",
        n: "+0430"
      }
    }
  ],
  [
    "Asia/Kamchatka",
    {
      s: {
        f: "+1200",
        n: "+12"
      }
    }
  ],
  [
    "Asia/Karachi",
    {
      s: {
        f: "+0500",
        n: "PKT"
      }
    }
  ],
  [
    "Asia/Kathmandu",
    {
      s: {
        f: "+0545",
        n: "+0545"
      }
    }
  ],
  [
    "Asia/Khandyga",
    {
      s: {
        f: "+0900",
        n: "+09"
      }
    }
  ],
  [
    "Asia/Kolkata",
    {
      s: {
        f: "+0530",
        n: "IST"
      }
    }
  ],
  [
    "Asia/Krasnoyarsk",
    {
      s: {
        f: "+0700",
        n: "+07"
      }
    }
  ],
  [
    "Asia/Kuala_Lumpur",
    {
      s: {
        f: "+0800",
        n: "+08"
      }
    }
  ],
  [
    "Asia/Kuching",
    {
      s: {
        f: "+0800",
        n: "+08"
      }
    }
  ],
  [
    "Asia/Kuwait",
    {
      s: {
        f: "+0300",
        n: "+03"
      }
    }
  ],
  [
    "Asia/Macau",
    {
      s: {
        f: "+0800",
        n: "CST"
      }
    }
  ],
  [
    "Asia/Magadan",
    {
      s: {
        f: "+1100",
        n: "+11"
      }
    }
  ],
  [
    "Asia/Makassar",
    {
      s: {
        f: "+0800",
        n: "WITA"
      }
    }
  ],
  [
    "Asia/Manila",
    {
      s: {
        f: "+0800",
        n: "PST"
      }
    }
  ],
  [
    "Asia/Muscat",
    {
      s: {
        f: "+0400",
        n: "+04"
      }
    }
  ],
  [
    "Asia/Nicosia",
    {
      s: {
        f: "+0300",
        t: "+0200",
        n: "EET",
        s: "19701025T040000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0200",
        t: "+0300",
        n: "EEST",
        s: "19700329T030000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Asia/Novokuznetsk",
    {
      s: {
        f: "+0700",
        n: "+07"
      }
    }
  ],
  [
    "Asia/Novosibirsk",
    {
      s: {
        f: "+0700",
        n: "+07"
      }
    }
  ],
  [
    "Asia/Omsk",
    {
      s: {
        f: "+0600",
        n: "+06"
      }
    }
  ],
  [
    "Asia/Oral",
    {
      s: {
        f: "+0500",
        n: "+05"
      }
    }
  ],
  [
    "Asia/Phnom_Penh",
    {
      s: {
        f: "+0700",
        n: "+07"
      }
    }
  ],
  [
    "Asia/Pontianak",
    {
      s: {
        f: "+0700",
        n: "WIB"
      }
    }
  ],
  [
    "Asia/Pyongyang",
    {
      s: {
        f: "+0900",
        n: "KST"
      }
    }
  ],
  [
    "Asia/Qatar",
    {
      s: {
        f: "+0300",
        n: "+03"
      }
    }
  ],
  [
    "Asia/Qyzylorda",
    {
      s: {
        f: "+0600",
        n: "+06"
      }
    }
  ],
  [
    "Asia/Riyadh",
    {
      s: {
        f: "+0300",
        n: "+03"
      }
    }
  ],
  [
    "Asia/Sakhalin",
    {
      s: {
        f: "+1100",
        n: "+11"
      }
    }
  ],
  [
    "Asia/Samarkand",
    {
      s: {
        f: "+0500",
        n: "+05"
      }
    }
  ],
  [
    "Asia/Seoul",
    {
      s: {
        f: "+0900",
        n: "KST"
      }
    }
  ],
  [
    "Asia/Shanghai",
    {
      s: {
        f: "+0800",
        n: "CST"
      }
    }
  ],
  [
    "Asia/Singapore",
    {
      s: {
        f: "+0800",
        n: "+08"
      }
    }
  ],
  [
    "Asia/Srednekolymsk",
    {
      s: {
        f: "+1100",
        n: "+11"
      }
    }
  ],
  [
    "Asia/Taipei",
    {
      s: {
        f: "+0800",
        n: "CST"
      }
    }
  ],
  [
    "Asia/Tashkent",
    {
      s: {
        f: "+0500",
        n: "+05"
      }
    }
  ],
  [
    "Asia/Tbilisi",
    {
      s: {
        f: "+0400",
        n: "+04"
      }
    }
  ],
  [
    "Asia/Tehran",
    {
      s: {
        f: "+0430",
        t: "+0330",
        n: "+0330",
        s: "19700921T000000",
        r: {
          m: 9,
          d: "3SU"
        }
      },
      d: {
        f: "+0330",
        t: "+0430",
        n: "+0430",
        s: "19700321T000000",
        r: {
          m: 3,
          d: "3SU"
        }
      }
    }
  ],
  [
    "Asia/Thimphu",
    {
      s: {
        f: "+0600",
        n: "+06"
      }
    }
  ],
  [
    "Asia/Tokyo",
    {
      s: {
        f: "+0900",
        n: "JST"
      }
    }
  ],
  [
    "Asia/Tomsk",
    {
      s: {
        f: "+0700",
        n: "+07"
      }
    }
  ],
  [
    "Asia/Ulaanbaatar",
    {
      s: {
        f: "+0800",
        n: "+08"
      }
    }
  ],
  [
    "Asia/Urumqi",
    {
      s: {
        f: "+0600",
        n: "+06"
      }
    }
  ],
  [
    "Asia/Ust-Nera",
    {
      s: {
        f: "+1000",
        n: "+10"
      }
    }
  ],
  [
    "Asia/Vientiane",
    {
      s: {
        f: "+0700",
        n: "+07"
      }
    }
  ],
  [
    "Asia/Vladivostok",
    {
      s: {
        f: "+1000",
        n: "+10"
      }
    }
  ],
  [
    "Asia/Yakutsk",
    {
      s: {
        f: "+0900",
        n: "+09"
      }
    }
  ],
  [
    "Asia/Yangon",
    {
      s: {
        f: "+0630",
        n: "+0630"
      }
    }
  ],
  [
    "Asia/Yekaterinburg",
    {
      s: {
        f: "+0500",
        n: "+05"
      }
    }
  ],
  [
    "Asia/Yerevan",
    {
      s: {
        f: "+0400",
        n: "+04"
      }
    }
  ],
  [
    "Atlantic/Azores",
    {
      s: {
        f: "+0000",
        t: "-0100",
        n: "-01",
        s: "19701025T010000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "-0100",
        t: "+0000",
        n: "+00",
        s: "19700329T000000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Atlantic/Bermuda",
    {
      s: {
        f: "-0300",
        t: "-0400",
        n: "AST",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      },
      d: {
        f: "-0400",
        t: "-0300",
        n: "ADT",
        s: "19700308T020000",
        r: {
          m: 3,
          d: "2SU"
        }
      }
    }
  ],
  [
    "Atlantic/Canary",
    {
      s: {
        f: "+0100",
        t: "+0000",
        n: "WET",
        s: "19701025T020000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0000",
        t: "+0100",
        n: "WEST",
        s: "19700329T010000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Atlantic/Cape_Verde",
    {
      s: {
        f: "-0100",
        n: "-01"
      }
    }
  ],
  [
    "Atlantic/Faroe",
    {
      s: {
        f: "+0100",
        t: "+0000",
        n: "WET",
        s: "19701025T020000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0000",
        t: "+0100",
        n: "WEST",
        s: "19700329T010000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Atlantic/Madeira",
    {
      s: {
        f: "+0100",
        t: "+0000",
        n: "WET",
        s: "19701025T020000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0000",
        t: "+0100",
        n: "WEST",
        s: "19700329T010000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Atlantic/Reykjavik",
    {
      s: {
        f: "+0000",
        n: "GMT"
      }
    }
  ],
  [
    "Atlantic/South_Georgia",
    {
      s: {
        f: "-0200",
        n: "-02"
      }
    }
  ],
  [
    "Atlantic/St_Helena",
    {
      s: {
        f: "+0000",
        n: "GMT"
      }
    }
  ],
  [
    "Atlantic/Stanley",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "Australia/Adelaide",
    {
      s: {
        f: "+1030",
        t: "+0930",
        n: "ACST",
        s: "19700405T030000",
        r: {
          m: 4,
          d: "1SU"
        }
      },
      d: {
        f: "+0930",
        t: "+1030",
        n: "ACDT",
        s: "19701004T020000",
        r: {
          m: 10,
          d: "1SU"
        }
      }
    }
  ],
  [
    "Australia/Brisbane",
    {
      s: {
        f: "+1000",
        n: "AEST"
      }
    }
  ],
  [
    "Australia/Broken_Hill",
    {
      s: {
        f: "+1030",
        t: "+0930",
        n: "ACST",
        s: "19700405T030000",
        r: {
          m: 4,
          d: "1SU"
        }
      },
      d: {
        f: "+0930",
        t: "+1030",
        n: "ACDT",
        s: "19701004T020000",
        r: {
          m: 10,
          d: "1SU"
        }
      }
    }
  ],
  [
    "Australia/Currie",
    {
      s: {
        f: "+1100",
        t: "+1000",
        n: "AEST",
        s: "19700405T030000",
        r: {
          m: 4,
          d: "1SU"
        }
      },
      d: {
        f: "+1000",
        t: "+1100",
        n: "AEDT",
        s: "19701004T020000",
        r: {
          m: 10,
          d: "1SU"
        }
      }
    }
  ],
  [
    "Australia/Darwin",
    {
      s: {
        f: "+0930",
        n: "ACST"
      }
    }
  ],
  [
    "Australia/Eucla",
    {
      s: {
        f: "+0845",
        n: "+0845"
      }
    }
  ],
  [
    "Australia/Hobart",
    {
      s: {
        f: "+1100",
        t: "+1000",
        n: "AEST",
        s: "19700405T030000",
        r: {
          m: 4,
          d: "1SU"
        }
      },
      d: {
        f: "+1000",
        t: "+1100",
        n: "AEDT",
        s: "19701004T020000",
        r: {
          m: 10,
          d: "1SU"
        }
      }
    }
  ],
  [
    "Australia/Lindeman",
    {
      s: {
        f: "+1000",
        n: "AEST"
      }
    }
  ],
  [
    "Australia/Lord_Howe",
    {
      s: {
        f: "+1100",
        t: "+1030",
        n: "+1030",
        s: "19700405T020000",
        r: {
          m: 4,
          d: "1SU"
        }
      },
      d: {
        f: "+1030",
        t: "+1100",
        n: "+11",
        s: "19701004T020000",
        r: {
          m: 10,
          d: "1SU"
        }
      }
    }
  ],
  [
    "Australia/Melbourne",
    {
      s: {
        f: "+1100",
        t: "+1000",
        n: "AEST",
        s: "19700405T030000",
        r: {
          m: 4,
          d: "1SU"
        }
      },
      d: {
        f: "+1000",
        t: "+1100",
        n: "AEDT",
        s: "19701004T020000",
        r: {
          m: 10,
          d: "1SU"
        }
      }
    }
  ],
  [
    "Australia/Perth",
    {
      s: {
        f: "+0800",
        n: "AWST"
      }
    }
  ],
  [
    "Australia/Sydney",
    {
      s: {
        f: "+1100",
        t: "+1000",
        n: "AEST",
        s: "19700405T030000",
        r: {
          m: 4,
          d: "1SU"
        }
      },
      d: {
        f: "+1000",
        t: "+1100",
        n: "AEDT",
        s: "19701004T020000",
        r: {
          m: 10,
          d: "1SU"
        }
      }
    }
  ],
  [
    "Etc/GMT-0",
    {
      s: {
        f: "+0000",
        n: "GMT"
      }
    }
  ],
  [
    "Etc/GMT-1",
    {
      s: {
        f: "-0100",
        n: "-01"
      }
    }
  ],
  [
    "Etc/GMT-10",
    {
      s: {
        f: "-1000",
        n: "-10"
      }
    }
  ],
  [
    "Etc/GMT-11",
    {
      s: {
        f: "-1100",
        n: "-11"
      }
    }
  ],
  [
    "Etc/GMT-12",
    {
      s: {
        f: "-1200",
        n: "-12"
      }
    }
  ],
  [
    "Etc/GMT-2",
    {
      s: {
        f: "-0200",
        n: "-02"
      }
    }
  ],
  [
    "Etc/GMT-3",
    {
      s: {
        f: "-0300",
        n: "-03"
      }
    }
  ],
  [
    "Etc/GMT-4",
    {
      s: {
        f: "-0400",
        n: "-04"
      }
    }
  ],
  [
    "Etc/GMT-5",
    {
      s: {
        f: "-0500",
        n: "-05"
      }
    }
  ],
  [
    "Etc/GMT-6",
    {
      s: {
        f: "-0600",
        n: "-06"
      }
    }
  ],
  [
    "Etc/GMT-7",
    {
      s: {
        f: "-0700",
        n: "-07"
      }
    }
  ],
  [
    "Etc/GMT-8",
    {
      s: {
        f: "-0800",
        n: "-08"
      }
    }
  ],
  [
    "Etc/GMT-9",
    {
      s: {
        f: "-0900",
        n: "-09"
      }
    }
  ],
  [
    "Etc/GMT",
    {
      s: {
        f: "+0000",
        n: "GMT"
      }
    }
  ],
  [
    "Etc/GMT+0",
    {
      s: {
        f: "+0000",
        n: "GMT"
      }
    }
  ],
  [
    "Etc/GMT+1",
    {
      s: {
        f: "+0100",
        n: "+01"
      }
    }
  ],
  [
    "Etc/GMT+10",
    {
      s: {
        f: "+1000",
        n: "+10"
      }
    }
  ],
  [
    "Etc/GMT+11",
    {
      s: {
        f: "+1100",
        n: "+11"
      }
    }
  ],
  [
    "Etc/GMT+12",
    {
      s: {
        f: "+1200",
        n: "+12"
      }
    }
  ],
  [
    "Etc/GMT+13",
    {
      s: {
        f: "+1300",
        n: "+13"
      }
    }
  ],
  [
    "Etc/GMT+14",
    {
      s: {
        f: "+1400",
        n: "+14"
      }
    }
  ],
  [
    "Etc/GMT+2",
    {
      s: {
        f: "+0200",
        n: "+02"
      }
    }
  ],
  [
    "Etc/GMT+3",
    {
      s: {
        f: "+0300",
        n: "+03"
      }
    }
  ],
  [
    "Etc/GMT+4",
    {
      s: {
        f: "+0400",
        n: "+04"
      }
    }
  ],
  [
    "Etc/GMT+5",
    {
      s: {
        f: "+0500",
        n: "+05"
      }
    }
  ],
  [
    "Etc/GMT+6",
    {
      s: {
        f: "+0600",
        n: "+06"
      }
    }
  ],
  [
    "Etc/GMT+7",
    {
      s: {
        f: "+0700",
        n: "+07"
      }
    }
  ],
  [
    "Etc/GMT+8",
    {
      s: {
        f: "+0800",
        n: "+08"
      }
    }
  ],
  [
    "Etc/GMT+9",
    {
      s: {
        f: "+0900",
        n: "+09"
      }
    }
  ],
  [
    "Etc/GMT0",
    {
      s: {
        f: "+0000",
        n: "GMT"
      }
    }
  ],
  [
    "Etc/Greenwich",
    {
      s: {
        f: "+0000",
        n: "GMT"
      }
    }
  ],
  [
    "Etc/UCT",
    {
      s: {
        f: "+0000",
        n: "UCT"
      }
    }
  ],
  [
    "Etc/Universal",
    {
      s: {
        f: "+0000",
        n: "UTC"
      }
    }
  ],
  [
    "Etc/UTC",
    {
      s: {
        f: "+0000",
        n: "UTC"
      }
    }
  ],
  [
    "Etc/Zulu",
    {
      s: {
        f: "+0000",
        n: "UTC"
      }
    }
  ],
  [
    "Europe/Amsterdam",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Andorra",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Astrakhan",
    {
      s: {
        f: "+0400",
        n: "+04"
      }
    }
  ],
  [
    "Europe/Athens",
    {
      s: {
        f: "+0300",
        t: "+0200",
        n: "EET",
        s: "19701025T040000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0200",
        t: "+0300",
        n: "EEST",
        s: "19700329T030000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Belgrade",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Berlin",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Bratislava",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Brussels",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Bucharest",
    {
      s: {
        f: "+0300",
        t: "+0200",
        n: "EET",
        s: "19701025T040000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0200",
        t: "+0300",
        n: "EEST",
        s: "19700329T030000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Budapest",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Busingen",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Chisinau",
    {
      s: {
        f: "+0300",
        t: "+0200",
        n: "EET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0200",
        t: "+0300",
        n: "EEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Copenhagen",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Dublin",
    {
      s: {
        f: "+0100",
        t: "+0000",
        n: "GMT",
        s: "19701025T020000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0000",
        t: "+0100",
        n: "IST",
        s: "19700329T010000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Gibraltar",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Guernsey",
    {
      s: {
        f: "+0100",
        t: "+0000",
        n: "GMT",
        s: "19701025T020000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0000",
        t: "+0100",
        n: "BST",
        s: "19700329T010000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Helsinki",
    {
      s: {
        f: "+0300",
        t: "+0200",
        n: "EET",
        s: "19701025T040000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0200",
        t: "+0300",
        n: "EEST",
        s: "19700329T030000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Isle_of_Man",
    {
      s: {
        f: "+0100",
        t: "+0000",
        n: "GMT",
        s: "19701025T020000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0000",
        t: "+0100",
        n: "BST",
        s: "19700329T010000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Istanbul",
    {
      s: {
        f: "+0300",
        n: "+03"
      }
    }
  ],
  [
    "Europe/Jersey",
    {
      s: {
        f: "+0100",
        t: "+0000",
        n: "GMT",
        s: "19701025T020000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0000",
        t: "+0100",
        n: "BST",
        s: "19700329T010000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Kaliningrad",
    {
      s: {
        f: "+0200",
        n: "EET"
      }
    }
  ],
  [
    "Europe/Kiev",
    {
      s: {
        f: "+0300",
        t: "+0200",
        n: "EET",
        s: "19701025T040000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0200",
        t: "+0300",
        n: "EEST",
        s: "19700329T030000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Kirov",
    {
      s: {
        f: "+0300",
        n: "+03"
      }
    }
  ],
  [
    "Europe/Lisbon",
    {
      s: {
        f: "+0100",
        t: "+0000",
        n: "WET",
        s: "19701025T020000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0000",
        t: "+0100",
        n: "WEST",
        s: "19700329T010000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Ljubljana",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/London",
    {
      s: {
        f: "+0100",
        t: "+0000",
        n: "GMT",
        s: "19701025T020000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0000",
        t: "+0100",
        n: "BST",
        s: "19700329T010000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Luxembourg",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Madrid",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Malta",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Mariehamn",
    {
      s: {
        f: "+0300",
        t: "+0200",
        n: "EET",
        s: "19701025T040000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0200",
        t: "+0300",
        n: "EEST",
        s: "19700329T030000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Minsk",
    {
      s: {
        f: "+0300",
        n: "+03"
      }
    }
  ],
  [
    "Europe/Monaco",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Moscow",
    {
      s: {
        f: "+0300",
        n: "MSK"
      }
    }
  ],
  [
    "Europe/Nicosia",
    {
      s: {
        f: "+0300",
        t: "+0200",
        n: "EET",
        s: "19701025T040000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0200",
        t: "+0300",
        n: "EEST",
        s: "19700329T030000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Oslo",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Paris",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Podgorica",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Prague",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Riga",
    {
      s: {
        f: "+0300",
        t: "+0200",
        n: "EET",
        s: "19701025T040000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0200",
        t: "+0300",
        n: "EEST",
        s: "19700329T030000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Rome",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Samara",
    {
      s: {
        f: "+0400",
        n: "+04"
      }
    }
  ],
  [
    "Europe/San_Marino",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Sarajevo",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Saratov",
    {
      s: {
        f: "+0400",
        n: "+04"
      }
    }
  ],
  [
    "Europe/Simferopol",
    {
      s: {
        f: "+0300",
        n: "MSK"
      }
    }
  ],
  [
    "Europe/Skopje",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Sofia",
    {
      s: {
        f: "+0300",
        t: "+0200",
        n: "EET",
        s: "19701025T040000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0200",
        t: "+0300",
        n: "EEST",
        s: "19700329T030000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Stockholm",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Tallinn",
    {
      s: {
        f: "+0300",
        t: "+0200",
        n: "EET",
        s: "19701025T040000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0200",
        t: "+0300",
        n: "EEST",
        s: "19700329T030000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Tirane",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Ulyanovsk",
    {
      s: {
        f: "+0400",
        n: "+04"
      }
    }
  ],
  [
    "Europe/Uzhgorod",
    {
      s: {
        f: "+0300",
        t: "+0200",
        n: "EET",
        s: "19701025T040000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0200",
        t: "+0300",
        n: "EEST",
        s: "19700329T030000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Vaduz",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Vatican",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Vienna",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Vilnius",
    {
      s: {
        f: "+0300",
        t: "+0200",
        n: "EET",
        s: "19701025T040000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0200",
        t: "+0300",
        n: "EEST",
        s: "19700329T030000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Volgograd",
    {
      s: {
        f: "+0400",
        n: "+04"
      }
    }
  ],
  [
    "Europe/Warsaw",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Zagreb",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Zaporozhye",
    {
      s: {
        f: "+0300",
        t: "+0200",
        n: "EET",
        s: "19701025T040000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0200",
        t: "+0300",
        n: "EEST",
        s: "19700329T030000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Europe/Zurich",
    {
      s: {
        f: "+0200",
        t: "+0100",
        n: "CET",
        s: "19701025T030000",
        r: {
          m: 10,
          d: "-1SU"
        }
      },
      d: {
        f: "+0100",
        t: "+0200",
        n: "CEST",
        s: "19700329T020000",
        r: {
          m: 3,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Indian/Antananarivo",
    {
      s: {
        f: "+0300",
        n: "EAT"
      }
    }
  ],
  [
    "Indian/Chagos",
    {
      s: {
        f: "+0600",
        n: "+06"
      }
    }
  ],
  [
    "Indian/Christmas",
    {
      s: {
        f: "+0700",
        n: "+07"
      }
    }
  ],
  [
    "Indian/Cocos",
    {
      s: {
        f: "+0630",
        n: "+0630"
      }
    }
  ],
  [
    "Indian/Comoro",
    {
      s: {
        f: "+0300",
        n: "EAT"
      }
    }
  ],
  [
    "Indian/Kerguelen",
    {
      s: {
        f: "+0500",
        n: "+05"
      }
    }
  ],
  [
    "Indian/Mahe",
    {
      s: {
        f: "+0400",
        n: "+04"
      }
    }
  ],
  [
    "Indian/Maldives",
    {
      s: {
        f: "+0500",
        n: "+05"
      }
    }
  ],
  [
    "Indian/Mauritius",
    {
      s: {
        f: "+0400",
        n: "+04"
      }
    }
  ],
  [
    "Indian/Mayotte",
    {
      s: {
        f: "+0300",
        n: "EAT"
      }
    }
  ],
  [
    "Indian/Reunion",
    {
      s: {
        f: "+0400",
        n: "+04"
      }
    }
  ],
  [
    "Pacific/Apia",
    {
      s: {
        f: "+1400",
        t: "+1300",
        n: "+13",
        s: "19700405T040000",
        r: {
          m: 4,
          d: "1SU"
        }
      },
      d: {
        f: "+1300",
        t: "+1400",
        n: "+14",
        s: "19700927T030000",
        r: {
          m: 9,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Pacific/Auckland",
    {
      s: {
        f: "+1300",
        t: "+1200",
        n: "NZST",
        s: "19700405T030000",
        r: {
          m: 4,
          d: "1SU"
        }
      },
      d: {
        f: "+1200",
        t: "+1300",
        n: "NZDT",
        s: "19700927T020000",
        r: {
          m: 9,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Pacific/Bougainville",
    {
      s: {
        f: "+1100",
        n: "+11"
      }
    }
  ],
  [
    "Pacific/Chatham",
    {
      s: {
        f: "+1345",
        t: "+1245",
        n: "+1245",
        s: "19700405T034500",
        r: {
          m: 4,
          d: "1SU"
        }
      },
      d: {
        f: "+1245",
        t: "+1345",
        n: "+1345",
        s: "19700927T024500",
        r: {
          m: 9,
          d: "-1SU"
        }
      }
    }
  ],
  [
    "Pacific/Chuuk",
    {
      s: {
        f: "+1000",
        n: "+10"
      }
    }
  ],
  [
    "Pacific/Easter",
    {
      s: {
        f: "-0500",
        t: "-0600",
        n: "-06",
        s: "19700404T220000",
        r: {
          m: 4,
          d: "1SA"
        }
      },
      d: {
        f: "-0600",
        t: "-0500",
        n: "-05",
        s: "19700905T220000",
        r: {
          m: 9,
          d: "1SA"
        }
      }
    }
  ],
  [
    "Pacific/Efate",
    {
      s: {
        f: "+1100",
        n: "+11"
      }
    }
  ],
  [
    "Pacific/Enderbury",
    {
      s: {
        f: "+1300",
        n: "+13"
      }
    }
  ],
  [
    "Pacific/Fakaofo",
    {
      s: {
        f: "+1300",
        n: "+13"
      }
    }
  ],
  [
    "Pacific/Fiji",
    {
      s: {
        f: "+1300",
        t: "+1200",
        n: "+12",
        s: "19700118T030000",
        r: {
          m: 1,
          d: "-2SU"
        }
      },
      d: {
        f: "+1200",
        t: "+1300",
        n: "+13",
        s: "19701101T020000",
        r: {
          m: 11,
          d: "1SU"
        }
      }
    }
  ],
  [
    "Pacific/Funafuti",
    {
      s: {
        f: "+1200",
        n: "+12"
      }
    }
  ],
  [
    "Pacific/Galapagos",
    {
      s: {
        f: "-0600",
        n: "-06"
      }
    }
  ],
  [
    "Pacific/Gambier",
    {
      s: {
        f: "-0900",
        n: "-09"
      }
    }
  ],
  [
    "Pacific/Guadalcanal",
    {
      s: {
        f: "+1100",
        n: "+11"
      }
    }
  ],
  [
    "Pacific/Guam",
    {
      s: {
        f: "+1000",
        n: "ChST"
      }
    }
  ],
  [
    "Pacific/Honolulu",
    {
      s: {
        f: "-1000",
        n: "HST"
      }
    }
  ],
  [
    "Pacific/Kiritimati",
    {
      s: {
        f: "+1400",
        n: "+14"
      }
    }
  ],
  [
    "Pacific/Kosrae",
    {
      s: {
        f: "+1100",
        n: "+11"
      }
    }
  ],
  [
    "Pacific/Kwajalein",
    {
      s: {
        f: "+1200",
        n: "+12"
      }
    }
  ],
  [
    "Pacific/Majuro",
    {
      s: {
        f: "+1200",
        n: "+12"
      }
    }
  ],
  [
    "Pacific/Marquesas",
    {
      s: {
        f: "-0930",
        n: "-0930"
      }
    }
  ],
  [
    "Pacific/Midway",
    {
      s: {
        f: "-1100",
        n: "SST"
      }
    }
  ],
  [
    "Pacific/Nauru",
    {
      s: {
        f: "+1200",
        n: "+12"
      }
    }
  ],
  [
    "Pacific/Niue",
    {
      s: {
        f: "-1100",
        n: "-11"
      }
    }
  ],
  [
    "Pacific/Norfolk",
    {
      s: {
        f: "+1100",
        n: "+11"
      }
    }
  ],
  [
    "Pacific/Noumea",
    {
      s: {
        f: "+1100",
        n: "+11"
      }
    }
  ],
  [
    "Pacific/Pago_Pago",
    {
      s: {
        f: "-1100",
        n: "SST"
      }
    }
  ],
  [
    "Pacific/Palau",
    {
      s: {
        f: "+0900",
        n: "+09"
      }
    }
  ],
  [
    "Pacific/Pitcairn",
    {
      s: {
        f: "-0800",
        n: "-08"
      }
    }
  ],
  [
    "Pacific/Pohnpei",
    {
      s: {
        f: "+1100",
        n: "+11"
      }
    }
  ],
  [
    "Pacific/Port_Moresby",
    {
      s: {
        f: "+1000",
        n: "+10"
      }
    }
  ],
  [
    "Pacific/Rarotonga",
    {
      s: {
        f: "-1000",
        n: "-10"
      }
    }
  ],
  [
    "Pacific/Saipan",
    {
      s: {
        f: "+1000",
        n: "ChST"
      }
    }
  ],
  [
    "Pacific/Tahiti",
    {
      s: {
        f: "-1000",
        n: "-10"
      }
    }
  ],
  [
    "Pacific/Tarawa",
    {
      s: {
        f: "+1200",
        n: "+12"
      }
    }
  ],
  [
    "Pacific/Tongatapu",
    {
      s: {
        f: "+1300",
        n: "+13"
      }
    }
  ],
  [
    "Pacific/Wake",
    {
      s: {
        f: "+1200",
        n: "+12"
      }
    }
  ],
  [
    "Pacific/Wallis",
    {
      s: {
        f: "+1200",
        n: "+12"
      }
    }
  ]
]);
Object.defineProperty(ke, "__esModule", { value: !0 });
var Qi = ke.getZoneString = ke.getZoneLines = void 0;
const ea = $e;
function pn(n) {
  const { n: e, f: i, t, r, s: a } = n;
  return [
    `TZNAME:${e}`,
    `TZOFFSETFROM:${i}`,
    `TZOFFSETTO:${t || i}`,
    `DTSTART:${a || ea.defaultStart}`,
    ...r ? [`RRULE:FREQ=${r.f || "YEARLY"};BYMONTH=${r.m};BYDAY=${r.d}`] : []
  ];
}
function ta(n, e = !0) {
  const i = ea.zonesMap.get(n);
  if (i) {
    const { s: t, d: r } = i;
    return [
      ...e ? ["BEGIN:VTIMEZONE"] : [],
      `TZID:${n}`,
      // `X-LIC-LOCATION:${zoneName}`, // Who uses this?
      "BEGIN:STANDARD",
      ...pn(t),
      "END:STANDARD",
      ...r ? [
        "BEGIN:DAYLIGHT",
        ...pn(r),
        "END:DAYLIGHT"
      ] : [],
      ...e ? ["END:VTIMEZONE"] : []
    ];
  }
}
ke.getZoneLines = ta;
function b0(n, e = !0) {
  const i = ta(n, e);
  return i == null ? void 0 : i.join(`\r
`);
}
Qi = ke.getZoneString = b0;
var ra = { exports: {} };
(function(n) {
  var e;
  (function() {
    e = n.exports;
  })(), e.foldLength = 75, e.newLineChar = `\r
`, e.helpers = {
    /**
     * Compiles a list of all referenced TZIDs in all subcomponents and
     * removes any extra VTIMEZONE subcomponents. In addition, if any TZIDs
     * are referenced by a component, but a VTIMEZONE does not exist,
     * an attempt will be made to generate a VTIMEZONE using ICAL.TimezoneService.
     *
     * @param {ICAL.Component} vcal     The top-level VCALENDAR component.
     * @return {ICAL.Component}         The ICAL.Component that was passed in.
     */
    updateTimezones: function(i) {
      var t, r, a, s, u, o;
      if (!i || i.name !== "vcalendar")
        return i;
      for (t = i.getAllSubcomponents(), r = [], a = {}, u = 0; u < t.length; u++)
        t[u].name === "vtimezone" ? (o = t[u].getFirstProperty("tzid").getFirstValue(), a[o] = t[u]) : r = r.concat(t[u].getAllProperties());
      for (s = {}, u = 0; u < r.length; u++)
        (o = r[u].getParameter("tzid")) && (s[o] = !0);
      for (u in a)
        a.hasOwnProperty(u) && !s[u] && i.removeSubcomponent(a[u]);
      for (u in s)
        s.hasOwnProperty(u) && !a[u] && e.TimezoneService.has(u) && i.addSubcomponent(e.TimezoneService.get(u).component);
      return i;
    },
    /**
     * Checks if the given type is of the number type and also NaN.
     *
     * @param {Number} number     The number to check
     * @return {Boolean}          True, if the number is strictly NaN
     */
    isStrictlyNaN: function(i) {
      return typeof i == "number" && isNaN(i);
    },
    /**
     * Parses a string value that is expected to be an integer, when the valid is
     * not an integer throws a decoration error.
     *
     * @param {String} string     Raw string input
     * @return {Number}           Parsed integer
     */
    strictParseInt: function(i) {
      var t = parseInt(i, 10);
      if (e.helpers.isStrictlyNaN(t))
        throw new Error(
          'Could not extract integer from "' + i + '"'
        );
      return t;
    },
    /**
     * Creates or returns a class instance of a given type with the initialization
     * data if the data is not already an instance of the given type.
     *
     * @example
     * var time = new ICAL.Time(...);
     * var result = ICAL.helpers.formatClassType(time, ICAL.Time);
     *
     * (result instanceof ICAL.Time)
     * // => true
     *
     * result = ICAL.helpers.formatClassType({}, ICAL.Time);
     * (result isntanceof ICAL.Time)
     * // => true
     *
     *
     * @param {Object} data       object initialization data
     * @param {Object} type       object type (like ICAL.Time)
     * @return {?}                An instance of the found type.
     */
    formatClassType: function(t, r) {
      if (!(typeof t > "u"))
        return t instanceof r ? t : new r(t);
    },
    /**
     * Identical to indexOf but will only match values when they are not preceded
     * by a backslash character.
     *
     * @param {String} buffer         String to search
     * @param {String} search         Value to look for
     * @param {Number} pos            Start position
     * @return {Number}               The position, or -1 if not found
     */
    unescapedIndexOf: function(i, t, r) {
      for (; (r = i.indexOf(t, r)) !== -1; )
        if (r > 0 && i[r - 1] === "\\")
          r += 1;
        else
          return r;
      return -1;
    },
    /**
     * Find the index for insertion using binary search.
     *
     * @param {Array} list            The list to search
     * @param {?} seekVal             The value to insert
     * @param {function(?,?)} cmpfunc The comparison func, that can
     *                                  compare two seekVals
     * @return {Number}               The insert position
     */
    binsearchInsert: function(i, t, r) {
      if (!i.length)
        return 0;
      for (var a = 0, s = i.length - 1, u, o; a <= s; )
        if (u = a + Math.floor((s - a) / 2), o = r(t, i[u]), o < 0)
          s = u - 1;
        else if (o > 0)
          a = u + 1;
        else
          break;
      return o < 0 ? u : o > 0 ? u + 1 : u;
    },
    /**
     * Convenience function for debug output
     * @private
     */
    dumpn: (
      /* istanbul ignore next */
      function() {
        e.debug && (typeof console < "u" && "log" in console ? e.helpers.dumpn = function(t) {
          console.log(t);
        } : e.helpers.dumpn = function(t) {
          dump(t + `
`);
        }, e.helpers.dumpn(arguments[0]));
      }
    ),
    /**
     * Clone the passed object or primitive. By default a shallow clone will be
     * executed.
     *
     * @param {*} aSrc            The thing to clone
     * @param {Boolean=} aDeep    If true, a deep clone will be performed
     * @return {*}                The copy of the thing
     */
    clone: function(i, t) {
      if (!i || typeof i != "object")
        return i;
      if (i instanceof Date)
        return new Date(i.getTime());
      if ("clone" in i)
        return i.clone();
      if (Array.isArray(i)) {
        for (var r = [], a = 0; a < i.length; a++)
          r.push(t ? e.helpers.clone(i[a], !0) : i[a]);
        return r;
      } else {
        var s = {};
        for (var u in i)
          Object.prototype.hasOwnProperty.call(i, u) && (t ? s[u] = e.helpers.clone(i[u], !0) : s[u] = i[u]);
        return s;
      }
    },
    /**
     * Performs iCalendar line folding. A line ending character is inserted and
     * the next line begins with a whitespace.
     *
     * @example
     * SUMMARY:This line will be fold
     *  ed right in the middle of a word.
     *
     * @param {String} aLine      The line to fold
     * @return {String}           The folded line
     */
    foldline: function(t) {
      for (var r = "", a = t || "", s = 0, u = 0; a.length; ) {
        var o = a.codePointAt(s);
        o < 128 ? ++u : o < 2048 ? u += 2 : o < 65536 ? u += 3 : u += 4, u < e.foldLength + 1 ? s += o > 65535 ? 2 : 1 : (r += e.newLineChar + " " + a.substring(0, s), a = a.substring(s), s = u = 0);
      }
      return r.substr(e.newLineChar.length + 1);
    },
    /**
     * Pads the given string or number with zeros so it will have at least two
     * characters.
     *
     * @param {String|Number} data    The string or number to pad
     * @return {String}               The number padded as a string
     */
    pad2: function(t) {
      typeof t != "string" && (typeof t == "number" && (t = parseInt(t)), t = String(t));
      var r = t.length;
      switch (r) {
        case 0:
          return "00";
        case 1:
          return "0" + t;
        default:
          return t;
      }
    },
    /**
     * Truncates the given number, correctly handling negative numbers.
     *
     * @param {Number} number     The number to truncate
     * @return {Number}           The truncated number
     */
    trunc: function(t) {
      return t < 0 ? Math.ceil(t) : Math.floor(t);
    },
    /**
     * Poor-man's cross-browser inheritance for JavaScript. Doesn't support all
     * the features, but enough for our usage.
     *
     * @param {Function} base     The base class constructor function.
     * @param {Function} child    The child class constructor function.
     * @param {Object} extra      Extends the prototype with extra properties
     *                              and methods
     */
    inherits: function(i, t, r) {
      function a() {
      }
      a.prototype = i.prototype, t.prototype = new a(), r && e.helpers.extend(r, t.prototype);
    },
    /**
     * Poor-man's cross-browser object extension. Doesn't support all the
     * features, but enough for our usage. Note that the target's properties are
     * not overwritten with the source properties.
     *
     * @example
     * var child = ICAL.helpers.extend(parent, {
     *   "bar": 123
     * });
     *
     * @param {Object} source     The object to extend
     * @param {Object} target     The object to extend with
     * @return {Object}           Returns the target.
     */
    extend: function(i, t) {
      for (var r in i) {
        var a = Object.getOwnPropertyDescriptor(i, r);
        a && !Object.getOwnPropertyDescriptor(t, r) && Object.defineProperty(t, r, a);
      }
      return t;
    }
  }, e.design = function() {
    var i = /\\\\|\\;|\\,|\\[Nn]/g, t = /\\|;|,|\n/g, r = /\\\\|\\,|\\[Nn]/g, a = /\\|,|\n/g;
    function s(d, g) {
      var I = {
        matches: /.*/,
        fromICAL: function(_, G) {
          return S(_, d, G);
        },
        toICAL: function(_, G) {
          var J = g;
          return G && (J = new RegExp(J.source + "|" + G)), _.replace(J, function(ne) {
            switch (ne) {
              case "\\":
                return "\\\\";
              case ";":
                return "\\;";
              case ",":
                return "\\,";
              case `
`:
                return "\\n";
              default:
                return ne;
            }
          });
        }
      };
      return I;
    }
    var u = { defaultType: "text" }, o = { defaultType: "text", multiValue: "," }, f = { defaultType: "text", structuredValue: ";" }, m = { defaultType: "integer" }, l = { defaultType: "date-time", allowedTypes: ["date-time", "date"] }, v = { defaultType: "date-time" }, h = { defaultType: "uri" }, c = { defaultType: "utc-offset" }, T = { defaultType: "recur" }, y = { defaultType: "date-and-or-time", allowedTypes: ["date-time", "date", "text"] };
    function p(d) {
      switch (d) {
        case "\\\\":
          return "\\";
        case "\\;":
          return ";";
        case "\\,":
          return ",";
        case "\\n":
        case "\\N":
          return `
`;
        default:
          return d;
      }
    }
    function S(d, g, I) {
      return d.indexOf("\\") === -1 ? d : (I && (g = new RegExp(g.source + "|\\\\" + I)), d.replace(g, p));
    }
    var E = {
      categories: o,
      url: h,
      version: u,
      uid: u
    }, b = {
      boolean: {
        values: ["TRUE", "FALSE"],
        fromICAL: function(d) {
          switch (d) {
            case "TRUE":
              return !0;
            case "FALSE":
              return !1;
            default:
              return !1;
          }
        },
        toICAL: function(d) {
          return d ? "TRUE" : "FALSE";
        }
      },
      float: {
        matches: /^[+-]?\d+\.\d+$/,
        fromICAL: function(d) {
          var g = parseFloat(d);
          return e.helpers.isStrictlyNaN(g) ? 0 : g;
        },
        toICAL: function(d) {
          return String(d);
        }
      },
      integer: {
        fromICAL: function(d) {
          var g = parseInt(d);
          return e.helpers.isStrictlyNaN(g) ? 0 : g;
        },
        toICAL: function(d) {
          return String(d);
        }
      },
      "utc-offset": {
        toICAL: function(d) {
          return d.length < 7 ? d.substr(0, 3) + d.substr(4, 2) : d.substr(0, 3) + d.substr(4, 2) + d.substr(7, 2);
        },
        fromICAL: function(d) {
          return d.length < 6 ? d.substr(0, 3) + ":" + d.substr(3, 2) : d.substr(0, 3) + ":" + d.substr(3, 2) + ":" + d.substr(5, 2);
        },
        decorate: function(d) {
          return e.UtcOffset.fromString(d);
        },
        undecorate: function(d) {
          return d.toString();
        }
      }
    }, O = {
      // Although the syntax is DQUOTE uri DQUOTE, I don't think we should
      // enfoce anything aside from it being a valid content line.
      //
      // At least some params require - if multi values are used - DQUOTEs
      // for each of its values - e.g. delegated-from="uri1","uri2"
      // To indicate this, I introduced the new k/v pair
      // multiValueSeparateDQuote: true
      //
      // "ALTREP": { ... },
      // CN just wants a param-value
      // "CN": { ... }
      cutype: {
        values: ["INDIVIDUAL", "GROUP", "RESOURCE", "ROOM", "UNKNOWN"],
        allowXName: !0,
        allowIanaToken: !0
      },
      "delegated-from": {
        valueType: "cal-address",
        multiValue: ",",
        multiValueSeparateDQuote: !0
      },
      "delegated-to": {
        valueType: "cal-address",
        multiValue: ",",
        multiValueSeparateDQuote: !0
      },
      // "DIR": { ... }, // See ALTREP
      encoding: {
        values: ["8BIT", "BASE64"]
      },
      // "FMTTYPE": { ... }, // See ALTREP
      fbtype: {
        values: ["FREE", "BUSY", "BUSY-UNAVAILABLE", "BUSY-TENTATIVE"],
        allowXName: !0,
        allowIanaToken: !0
      },
      // "LANGUAGE": { ... }, // See ALTREP
      member: {
        valueType: "cal-address",
        multiValue: ",",
        multiValueSeparateDQuote: !0
      },
      partstat: {
        // TODO These values are actually different per-component
        values: [
          "NEEDS-ACTION",
          "ACCEPTED",
          "DECLINED",
          "TENTATIVE",
          "DELEGATED",
          "COMPLETED",
          "IN-PROCESS"
        ],
        allowXName: !0,
        allowIanaToken: !0
      },
      range: {
        values: ["THISANDFUTURE"]
      },
      related: {
        values: ["START", "END"]
      },
      reltype: {
        values: ["PARENT", "CHILD", "SIBLING"],
        allowXName: !0,
        allowIanaToken: !0
      },
      role: {
        values: [
          "REQ-PARTICIPANT",
          "CHAIR",
          "OPT-PARTICIPANT",
          "NON-PARTICIPANT"
        ],
        allowXName: !0,
        allowIanaToken: !0
      },
      rsvp: {
        values: ["TRUE", "FALSE"]
      },
      "sent-by": {
        valueType: "cal-address"
      },
      tzid: {
        matches: /^\//
      },
      value: {
        // since the value here is a 'type' lowercase is used.
        values: [
          "binary",
          "boolean",
          "cal-address",
          "date",
          "date-time",
          "duration",
          "float",
          "integer",
          "period",
          "recur",
          "text",
          "time",
          "uri",
          "utc-offset"
        ],
        allowXName: !0,
        allowIanaToken: !0
      }
    }, A = e.helpers.extend(b, {
      text: s(i, t),
      uri: {
        // TODO
        /* ... */
      },
      binary: {
        decorate: function(d) {
          return e.Binary.fromString(d);
        },
        undecorate: function(d) {
          return d.toString();
        }
      },
      "cal-address": {
        // needs to be an uri
      },
      date: {
        decorate: function(d, g) {
          return z.strict ? e.Time.fromDateString(d, g) : e.Time.fromString(d, g);
        },
        /**
         * undecorates a time object.
         */
        undecorate: function(d) {
          return d.toString();
        },
        fromICAL: function(d) {
          return !z.strict && d.length >= 15 ? A["date-time"].fromICAL(d) : d.substr(0, 4) + "-" + d.substr(4, 2) + "-" + d.substr(6, 2);
        },
        toICAL: function(d) {
          var g = d.length;
          return g == 10 ? d.substr(0, 4) + d.substr(5, 2) + d.substr(8, 2) : g >= 19 ? A["date-time"].toICAL(d) : d;
        }
      },
      "date-time": {
        fromICAL: function(d) {
          if (!z.strict && d.length == 8)
            return A.date.fromICAL(d);
          var g = d.substr(0, 4) + "-" + d.substr(4, 2) + "-" + d.substr(6, 2) + "T" + d.substr(9, 2) + ":" + d.substr(11, 2) + ":" + d.substr(13, 2);
          return d[15] && d[15] === "Z" && (g += "Z"), g;
        },
        toICAL: function(d) {
          var g = d.length;
          if (g == 10 && !z.strict)
            return A.date.toICAL(d);
          if (g >= 19) {
            var I = d.substr(0, 4) + d.substr(5, 2) + // grab the (DDTHH) segment
            d.substr(8, 5) + // MM
            d.substr(14, 2) + // SS
            d.substr(17, 2);
            return d[19] && d[19] === "Z" && (I += "Z"), I;
          } else
            return d;
        },
        decorate: function(d, g) {
          return z.strict ? e.Time.fromDateTimeString(d, g) : e.Time.fromString(d, g);
        },
        undecorate: function(d) {
          return d.toString();
        }
      },
      duration: {
        decorate: function(d) {
          return e.Duration.fromString(d);
        },
        undecorate: function(d) {
          return d.toString();
        }
      },
      period: {
        fromICAL: function(d) {
          var g = d.split("/");
          return g[0] = A["date-time"].fromICAL(g[0]), e.Duration.isValueString(g[1]) || (g[1] = A["date-time"].fromICAL(g[1])), g;
        },
        toICAL: function(d) {
          return !z.strict && d[0].length == 10 ? d[0] = A.date.toICAL(d[0]) : d[0] = A["date-time"].toICAL(d[0]), e.Duration.isValueString(d[1]) || (!z.strict && d[1].length == 10 ? d[1] = A.date.toICAL(d[1]) : d[1] = A["date-time"].toICAL(d[1])), d.join("/");
        },
        decorate: function(d, g) {
          return e.Period.fromJSON(d, g, !z.strict);
        },
        undecorate: function(d) {
          return d.toJSON();
        }
      },
      recur: {
        fromICAL: function(d) {
          return e.Recur._stringToData(d, !0);
        },
        toICAL: function(d) {
          var g = "";
          for (var I in d)
            if (Object.prototype.hasOwnProperty.call(d, I)) {
              var _ = d[I];
              I == "until" ? _.length > 10 ? _ = A["date-time"].toICAL(_) : _ = A.date.toICAL(_) : I == "wkst" ? typeof _ == "number" && (_ = e.Recur.numericDayToIcalDay(_)) : Array.isArray(_) && (_ = _.join(",")), g += I.toUpperCase() + "=" + _ + ";";
            }
          return g.substr(0, g.length - 1);
        },
        decorate: function(g) {
          return e.Recur.fromData(g);
        },
        undecorate: function(d) {
          return d.toJSON();
        }
      },
      time: {
        fromICAL: function(d) {
          if (d.length < 6)
            return d;
          var g = d.substr(0, 2) + ":" + d.substr(2, 2) + ":" + d.substr(4, 2);
          return d[6] === "Z" && (g += "Z"), g;
        },
        toICAL: function(d) {
          if (d.length < 8)
            return d;
          var g = d.substr(0, 2) + d.substr(3, 2) + d.substr(6, 2);
          return d[8] === "Z" && (g += "Z"), g;
        }
      }
    }), $ = e.helpers.extend(E, {
      action: u,
      attach: { defaultType: "uri" },
      attendee: { defaultType: "cal-address" },
      calscale: u,
      class: u,
      comment: u,
      completed: v,
      contact: u,
      created: v,
      description: u,
      dtend: l,
      dtstamp: v,
      dtstart: l,
      due: l,
      duration: { defaultType: "duration" },
      exdate: {
        defaultType: "date-time",
        allowedTypes: ["date-time", "date"],
        multiValue: ","
      },
      exrule: T,
      freebusy: { defaultType: "period", multiValue: "," },
      geo: { defaultType: "float", structuredValue: ";" },
      "last-modified": v,
      location: u,
      method: u,
      organizer: { defaultType: "cal-address" },
      "percent-complete": m,
      priority: m,
      prodid: u,
      "related-to": u,
      repeat: m,
      rdate: {
        defaultType: "date-time",
        allowedTypes: ["date-time", "date", "period"],
        multiValue: ",",
        detectType: function(d) {
          return d.indexOf("/") !== -1 ? "period" : d.indexOf("T") === -1 ? "date" : "date-time";
        }
      },
      "recurrence-id": l,
      resources: o,
      "request-status": f,
      rrule: T,
      sequence: m,
      status: u,
      summary: u,
      transp: u,
      trigger: { defaultType: "duration", allowedTypes: ["duration", "date-time"] },
      tzoffsetfrom: c,
      tzoffsetto: c,
      tzurl: h,
      tzid: u,
      tzname: u
    }), D = e.helpers.extend(b, {
      text: s(r, a),
      uri: s(r, a),
      date: {
        decorate: function(d) {
          return e.VCardTime.fromDateAndOrTimeString(d, "date");
        },
        undecorate: function(d) {
          return d.toString();
        },
        fromICAL: function(d) {
          return d.length == 8 ? A.date.fromICAL(d) : d[0] == "-" && d.length == 6 ? d.substr(0, 4) + "-" + d.substr(4) : d;
        },
        toICAL: function(d) {
          return d.length == 10 ? A.date.toICAL(d) : d[0] == "-" && d.length == 7 ? d.substr(0, 4) + d.substr(5) : d;
        }
      },
      time: {
        decorate: function(d) {
          return e.VCardTime.fromDateAndOrTimeString("T" + d, "time");
        },
        undecorate: function(d) {
          return d.toString();
        },
        fromICAL: function(d) {
          var g = D.time._splitZone(d, !0), I = g[0], _ = g[1];
          return _.length == 6 ? _ = _.substr(0, 2) + ":" + _.substr(2, 2) + ":" + _.substr(4, 2) : _.length == 4 && _[0] != "-" ? _ = _.substr(0, 2) + ":" + _.substr(2, 2) : _.length == 5 && (_ = _.substr(0, 3) + ":" + _.substr(3, 2)), I.length == 5 && (I[0] == "-" || I[0] == "+") && (I = I.substr(0, 3) + ":" + I.substr(3)), _ + I;
        },
        toICAL: function(d) {
          var g = D.time._splitZone(d), I = g[0], _ = g[1];
          return _.length == 8 ? _ = _.substr(0, 2) + _.substr(3, 2) + _.substr(6, 2) : _.length == 5 && _[0] != "-" ? _ = _.substr(0, 2) + _.substr(3, 2) : _.length == 6 && (_ = _.substr(0, 3) + _.substr(4, 2)), I.length == 6 && (I[0] == "-" || I[0] == "+") && (I = I.substr(0, 3) + I.substr(4)), _ + I;
        },
        _splitZone: function(d, g) {
          var I = d.length - 1, _ = d.length - (g ? 5 : 6), G = d[_], J, ne;
          return d[I] == "Z" ? (J = d[I], ne = d.substr(0, I)) : d.length > 6 && (G == "-" || G == "+") ? (J = d.substr(_), ne = d.substr(0, _)) : (J = "", ne = d), [J, ne];
        }
      },
      "date-time": {
        decorate: function(d) {
          return e.VCardTime.fromDateAndOrTimeString(d, "date-time");
        },
        undecorate: function(d) {
          return d.toString();
        },
        fromICAL: function(d) {
          return D["date-and-or-time"].fromICAL(d);
        },
        toICAL: function(d) {
          return D["date-and-or-time"].toICAL(d);
        }
      },
      "date-and-or-time": {
        decorate: function(d) {
          return e.VCardTime.fromDateAndOrTimeString(d, "date-and-or-time");
        },
        undecorate: function(d) {
          return d.toString();
        },
        fromICAL: function(d) {
          var g = d.split("T");
          return (g[0] ? D.date.fromICAL(g[0]) : "") + (g[1] ? "T" + D.time.fromICAL(g[1]) : "");
        },
        toICAL: function(d) {
          var g = d.split("T");
          return D.date.toICAL(g[0]) + (g[1] ? "T" + D.time.toICAL(g[1]) : "");
        }
      },
      timestamp: A["date-time"],
      "language-tag": {
        matches: /^[a-zA-Z0-9-]+$/
        // Could go with a more strict regex here
      }
    }), C = {
      type: {
        valueType: "text",
        multiValue: ","
      },
      value: {
        // since the value here is a 'type' lowercase is used.
        values: [
          "text",
          "uri",
          "date",
          "time",
          "date-time",
          "date-and-or-time",
          "timestamp",
          "boolean",
          "integer",
          "float",
          "utc-offset",
          "language-tag"
        ],
        allowXName: !0,
        allowIanaToken: !0
      }
    }, Y = e.helpers.extend(E, {
      adr: { defaultType: "text", structuredValue: ";", multiValue: "," },
      anniversary: y,
      bday: y,
      caladruri: h,
      caluri: h,
      clientpidmap: f,
      email: u,
      fburl: h,
      fn: u,
      gender: f,
      geo: h,
      impp: h,
      key: h,
      kind: u,
      lang: { defaultType: "language-tag" },
      logo: h,
      member: h,
      n: { defaultType: "text", structuredValue: ";", multiValue: "," },
      nickname: o,
      note: u,
      org: { defaultType: "text", structuredValue: ";" },
      photo: h,
      related: h,
      rev: { defaultType: "timestamp" },
      role: u,
      sound: h,
      source: h,
      tel: { defaultType: "uri", allowedTypes: ["uri", "text"] },
      title: u,
      tz: { defaultType: "text", allowedTypes: ["text", "utc-offset", "uri"] },
      xml: u
    }), j = e.helpers.extend(b, {
      binary: A.binary,
      date: D.date,
      "date-time": D["date-time"],
      "phone-number": {
        // TODO
        /* ... */
      },
      uri: A.uri,
      text: A.text,
      time: A.time,
      vcard: A.text,
      "utc-offset": {
        toICAL: function(d) {
          return d.substr(0, 7);
        },
        fromICAL: function(d) {
          return d.substr(0, 7);
        },
        decorate: function(d) {
          return e.UtcOffset.fromString(d);
        },
        undecorate: function(d) {
          return d.toString();
        }
      }
    }), B = {
      type: {
        valueType: "text",
        multiValue: ","
      },
      value: {
        // since the value here is a 'type' lowercase is used.
        values: [
          "text",
          "uri",
          "date",
          "date-time",
          "phone-number",
          "time",
          "boolean",
          "integer",
          "float",
          "utc-offset",
          "vcard",
          "binary"
        ],
        allowXName: !0,
        allowIanaToken: !0
      }
    }, q = e.helpers.extend(E, {
      fn: u,
      n: { defaultType: "text", structuredValue: ";", multiValue: "," },
      nickname: o,
      photo: { defaultType: "binary", allowedTypes: ["binary", "uri"] },
      bday: {
        defaultType: "date-time",
        allowedTypes: ["date-time", "date"],
        detectType: function(d) {
          return d.indexOf("T") === -1 ? "date" : "date-time";
        }
      },
      adr: { defaultType: "text", structuredValue: ";", multiValue: "," },
      label: u,
      tel: { defaultType: "phone-number" },
      email: u,
      mailer: u,
      tz: { defaultType: "utc-offset", allowedTypes: ["utc-offset", "text"] },
      geo: { defaultType: "float", structuredValue: ";" },
      title: u,
      role: u,
      logo: { defaultType: "binary", allowedTypes: ["binary", "uri"] },
      agent: { defaultType: "vcard", allowedTypes: ["vcard", "text", "uri"] },
      org: f,
      note: o,
      prodid: u,
      rev: {
        defaultType: "date-time",
        allowedTypes: ["date-time", "date"],
        detectType: function(d) {
          return d.indexOf("T") === -1 ? "date" : "date-time";
        }
      },
      "sort-string": u,
      sound: { defaultType: "binary", allowedTypes: ["binary", "uri"] },
      class: u,
      key: { defaultType: "binary", allowedTypes: ["binary", "text"] }
    }), N = {
      value: A,
      param: O,
      property: $
    }, P = {
      value: D,
      param: C,
      property: Y
    }, se = {
      value: j,
      param: B,
      property: q
    }, z = {
      /**
       * A designSet describes value, parameter and property data. It is used by
       * ther parser and stringifier in components and properties to determine they
       * should be represented.
       *
       * @typedef {Object} designSet
       * @memberOf ICAL.design
       * @property {Object} value       Definitions for value types, keys are type names
       * @property {Object} param       Definitions for params, keys are param names
       * @property {Object} property    Defintions for properties, keys are property names
       */
      /**
       * Can be set to false to make the parser more lenient.
       */
      strict: !0,
      /**
       * The default set for new properties and components if none is specified.
       * @type {ICAL.design.designSet}
       */
      defaultSet: N,
      /**
       * The default type for unknown properties
       * @type {String}
       */
      defaultType: "unknown",
      /**
       * Holds the design set for known top-level components
       *
       * @type {Object}
       * @property {ICAL.design.designSet} vcard       vCard VCARD
       * @property {ICAL.design.designSet} vevent      iCalendar VEVENT
       * @property {ICAL.design.designSet} vtodo       iCalendar VTODO
       * @property {ICAL.design.designSet} vjournal    iCalendar VJOURNAL
       * @property {ICAL.design.designSet} valarm      iCalendar VALARM
       * @property {ICAL.design.designSet} vtimezone   iCalendar VTIMEZONE
       * @property {ICAL.design.designSet} daylight    iCalendar DAYLIGHT
       * @property {ICAL.design.designSet} standard    iCalendar STANDARD
       *
       * @example
       * var propertyName = 'fn';
       * var componentDesign = ICAL.design.components.vcard;
       * var propertyDetails = componentDesign.property[propertyName];
       * if (propertyDetails.defaultType == 'text') {
       *   // Yep, sure is...
       * }
       */
      components: {
        vcard: P,
        vcard3: se,
        vevent: N,
        vtodo: N,
        vjournal: N,
        valarm: N,
        vtimezone: N,
        daylight: N,
        standard: N
      },
      /**
       * The design set for iCalendar (rfc5545/rfc7265) components.
       * @type {ICAL.design.designSet}
       */
      icalendar: N,
      /**
       * The design set for vCard (rfc6350/rfc7095) components.
       * @type {ICAL.design.designSet}
       */
      vcard: P,
      /**
       * The design set for vCard (rfc2425/rfc2426/rfc7095) components.
       * @type {ICAL.design.designSet}
       */
      vcard3: se,
      /**
       * Gets the design set for the given component name.
       *
       * @param {String} componentName        The name of the component
       * @return {ICAL.design.designSet}      The design set for the component
       */
      getDesignSet: function(d) {
        var g = d && d in z.components;
        return g ? z.components[d] : z.defaultSet;
      }
    };
    return z;
  }(), e.stringify = function() {
    var i = `\r
`, t = "unknown", r = e.design, a = e.helpers;
    function s(o) {
      typeof o[0] == "string" && (o = [o]);
      for (var f = 0, m = o.length, l = ""; f < m; f++)
        l += s.component(o[f]) + i;
      return l;
    }
    s.component = function(o, f) {
      var m = o[0].toUpperCase(), l = "BEGIN:" + m + i, v = o[1], h = 0, c = v.length, T = o[0];
      for (T === "vcard" && o[1].length > 0 && !(o[1][0][0] === "version" && o[1][0][3] === "4.0") && (T = "vcard3"), f = f || r.getDesignSet(T); h < c; h++)
        l += s.property(v[h], f) + i;
      for (var y = o[2] || [], p = 0, S = y.length; p < S; p++)
        l += s.component(y[p], f) + i;
      return l += "END:" + m, l;
    }, s.property = function(o, f, m) {
      var l = o[0].toUpperCase(), v = o[0], h = o[1], c = l, T;
      for (T in h) {
        var y = h[T];
        if (h.hasOwnProperty(T)) {
          var E = T in f.param && f.param[T].multiValue;
          E && Array.isArray(y) ? (f.param[T].multiValueSeparateDQuote && (E = '"' + E + '"'), y = y.map(s._rfc6868Unescape), y = s.multiValue(y, E, "unknown", null, f)) : y = s._rfc6868Unescape(y), c += ";" + T.toUpperCase(), c += "=" + s.propertyValue(y);
        }
      }
      if (o.length === 3)
        return c + ":";
      var p = o[2];
      f || (f = r.defaultSet);
      var S, E = !1, b = !1, O = !1;
      return v in f.property ? (S = f.property[v], "multiValue" in S && (E = S.multiValue), "structuredValue" in S && Array.isArray(o[3]) && (b = S.structuredValue), "defaultType" in S ? p === S.defaultType && (O = !0) : p === t && (O = !0)) : p === t && (O = !0), O || (c += ";VALUE=" + p.toUpperCase()), c += ":", E && b ? c += s.multiValue(
        o[3],
        b,
        p,
        E,
        f,
        b
      ) : E ? c += s.multiValue(
        o.slice(3),
        E,
        p,
        null,
        f,
        !1
      ) : b ? c += s.multiValue(
        o[3],
        b,
        p,
        null,
        f,
        b
      ) : c += s.value(o[3], p, f, !1), m ? c : e.helpers.foldline(c);
    }, s.propertyValue = function(o) {
      return a.unescapedIndexOf(o, ",") === -1 && a.unescapedIndexOf(o, ":") === -1 && a.unescapedIndexOf(o, ";") === -1 ? o : '"' + o + '"';
    }, s.multiValue = function(o, f, m, l, v, h) {
      for (var c = "", T = o.length, y = 0; y < T; y++)
        l && Array.isArray(o[y]) ? c += s.multiValue(o[y], l, m, null, v, h) : c += s.value(o[y], m, v, h), y !== T - 1 && (c += f);
      return c;
    }, s.value = function(o, f, m, l) {
      return f in m.value && "toICAL" in m.value[f] ? m.value[f].toICAL(o, l) : o;
    }, s._rfc6868Unescape = function(o) {
      return o.replace(/[\n^"]/g, function(f) {
        return u[f];
      });
    };
    var u = { '"': "^'", "\n": "^n", "^": "^^" };
    return s;
  }(), e.parse = function() {
    var i = /[^ \t]/, t = ":", r = ";", a = "=", s = "unknown", u = "text", o = e.design, f = e.helpers;
    function m(h) {
      this.message = h, this.name = "ParserError";
      try {
        throw new Error();
      } catch (T) {
        if (T.stack) {
          var c = T.stack.split(`
`);
          c.shift(), this.stack = c.join(`
`);
        }
      }
    }
    m.prototype = Error.prototype;
    function l(h) {
      var c = {}, T = c.component = [];
      if (c.stack = [T], l._eachLine(h, function(y, p) {
        l._handleContentLine(p, c);
      }), c.stack.length > 1)
        throw new m(
          "invalid ical body. component began but did not end"
        );
      return c = null, T.length == 1 ? T[0] : T;
    }
    l.property = function(h, c) {
      var T = {
        component: [[], []],
        designSet: c || o.defaultSet
      };
      return l._handleContentLine(h, T), T.component[1][0];
    }, l.component = function(h) {
      return l(h);
    }, l.ParserError = m, l._handleContentLine = function(h, c) {
      var T = h.indexOf(t), y = h.indexOf(r), p, S, E, b, O = {};
      y !== -1 && T !== -1 && y > T && (y = -1);
      var A;
      if (y !== -1) {
        if (E = h.substring(0, y).toLowerCase(), A = l._parseParameters(h.substring(y), 0, c.designSet), A[2] == -1)
          throw new m("Invalid parameters in '" + h + "'");
        if (O = A[0], p = A[1].length + A[2] + y, (S = h.substring(p).indexOf(t)) !== -1)
          b = h.substring(p + S + 1);
        else
          throw new m("Missing parameter value in '" + h + "'");
      } else if (T !== -1) {
        if (E = h.substring(0, T).toLowerCase(), b = h.substring(T + 1), E === "begin") {
          var $ = [b.toLowerCase(), [], []];
          c.stack.length === 1 ? c.component.push($) : c.component[2].push($), c.stack.push(c.component), c.component = $, c.designSet || (c.designSet = o.getDesignSet(c.component[0]));
          return;
        } else if (E === "end") {
          c.component = c.stack.pop();
          return;
        }
      } else
        throw new m(
          'invalid line (no token ";" or ":") "' + h + '"'
        );
      var D, C = !1, Y = !1, j;
      E in c.designSet.property && (j = c.designSet.property[E], "multiValue" in j && (C = j.multiValue), "structuredValue" in j && (Y = j.structuredValue), b && "detectType" in j && (D = j.detectType(b))), D || ("value" in O ? D = O.value.toLowerCase() : j ? D = j.defaultType : D = s), delete O.value;
      var B;
      C && Y ? (b = l._parseMultiValue(b, Y, D, [], C, c.designSet, Y), B = [E, O, D, b]) : C ? (B = [E, O, D], l._parseMultiValue(b, C, D, B, null, c.designSet, !1)) : Y ? (b = l._parseMultiValue(b, Y, D, [], null, c.designSet, Y), B = [E, O, D, b]) : (b = l._parseValue(b, D, c.designSet, !1), B = [E, O, D, b]), c.component[0] === "vcard" && c.component[1].length === 0 && !(E === "version" && b === "4.0") && (c.designSet = o.getDesignSet("vcard3")), c.component[1].push(B);
    }, l._parseValue = function(h, c, T, y) {
      return c in T.value && "fromICAL" in T.value[c] ? T.value[c].fromICAL(h, y) : h;
    }, l._parseParameters = function(h, c, T) {
      for (var y = c, p = 0, S = a, E = {}, b, O, A, $ = -1, D, C, Y; p !== !1 && (p = f.unescapedIndexOf(h, S, p + 1)) !== -1; ) {
        if (b = h.substr(y + 1, p - y - 1), b.length == 0)
          throw new m("Empty parameter name in '" + h + "'");
        O = b.toLowerCase(), Y = !1, C = !1, O in T.param && T.param[O].valueType ? D = T.param[O].valueType : D = u, O in T.param && (C = T.param[O].multiValue, T.param[O].multiValueSeparateDQuote && (Y = l._rfc6868Escape('"' + C + '"')));
        var j = h[p + 1];
        if (j === '"') {
          if ($ = p + 2, p = f.unescapedIndexOf(h, '"', $), C && p != -1)
            for (var B = !0; B; )
              h[p + 1] == C && h[p + 2] == '"' ? p = f.unescapedIndexOf(h, '"', p + 3) : B = !1;
          if (p === -1)
            throw new m(
              'invalid line (no matching double quote) "' + h + '"'
            );
          A = h.substr($, p - $), y = f.unescapedIndexOf(h, r, p), y === -1 && (p = !1);
        } else {
          $ = p + 1;
          var q = f.unescapedIndexOf(h, r, $), N = f.unescapedIndexOf(h, t, $);
          N !== -1 && q > N ? (q = N, p = !1) : q === -1 ? (N === -1 ? q = h.length : q = N, p = !1) : (y = q, p = q), A = h.substr($, q - $);
        }
        if (A = l._rfc6868Escape(A), C) {
          var P = Y || C;
          A = l._parseMultiValue(A, P, D, [], null, T);
        } else
          A = l._parseValue(A, D, T);
        C && O in E ? Array.isArray(E[O]) ? E[O].push(A) : E[O] = [
          E[O],
          A
        ] : E[O] = A;
      }
      return [E, A, $];
    }, l._rfc6868Escape = function(h) {
      return h.replace(/\^['n^]/g, function(c) {
        return v[c];
      });
    };
    var v = { "^'": '"', "^n": `
`, "^^": "^" };
    return l._parseMultiValue = function(h, c, T, y, p, S, E) {
      var b = 0, O = 0, A;
      if (c.length === 0)
        return h;
      for (; (b = f.unescapedIndexOf(h, c, O)) !== -1; )
        A = h.substr(O, b - O), p ? A = l._parseMultiValue(A, p, T, [], null, S, E) : A = l._parseValue(A, T, S, E), y.push(A), O = b + c.length;
      return A = h.substr(O), p ? A = l._parseMultiValue(A, p, T, [], null, S, E) : A = l._parseValue(A, T, S, E), y.push(A), y.length == 1 ? y[0] : y;
    }, l._eachLine = function(h, c) {
      var T = h.length, y = h.search(i), p = y, S, E, b;
      do
        p = h.indexOf(`
`, y) + 1, p > 1 && h[p - 2] === "\r" ? b = 2 : b = 1, p === 0 && (p = T, b = 0), E = h[y], E === " " || E === "	" ? S += h.substr(
          y + 1,
          p - y - (b + 1)
        ) : (S && c(null, S), S = h.substr(
          y,
          p - y - b
        )), y = p;
      while (p !== T);
      S = S.trim(), S.length && c(null, S);
    }, l;
  }(), e.Component = function() {
    var i = 1, t = 2, r = 0;
    function a(s, u) {
      typeof s == "string" && (s = [s, [], []]), this.jCal = s, this.parent = u || null;
    }
    return a.prototype = {
      /**
       * Hydrated properties are inserted into the _properties array at the same
       * position as in the jCal array, so it is possible that the array contains
       * undefined values for unhydrdated properties. To avoid iterating the
       * array when checking if all properties have been hydrated, we save the
       * count here.
       *
       * @type {Number}
       * @private
       */
      _hydratedPropertyCount: 0,
      /**
       * The same count as for _hydratedPropertyCount, but for subcomponents
       *
       * @type {Number}
       * @private
       */
      _hydratedComponentCount: 0,
      /**
       * The name of this component
       * @readonly
       */
      get name() {
        return this.jCal[r];
      },
      /**
       * The design set for this component, e.g. icalendar vs vcard
       *
       * @type {ICAL.design.designSet}
       * @private
       */
      get _designSet() {
        var s = this.parent && this.parent._designSet;
        return s || e.design.getDesignSet(this.name);
      },
      _hydrateComponent: function(s) {
        if (this._components || (this._components = [], this._hydratedComponentCount = 0), this._components[s])
          return this._components[s];
        var u = new a(
          this.jCal[t][s],
          this
        );
        return this._hydratedComponentCount++, this._components[s] = u;
      },
      _hydrateProperty: function(s) {
        if (this._properties || (this._properties = [], this._hydratedPropertyCount = 0), this._properties[s])
          return this._properties[s];
        var u = new e.Property(
          this.jCal[i][s],
          this
        );
        return this._hydratedPropertyCount++, this._properties[s] = u;
      },
      /**
       * Finds first sub component, optionally filtered by name.
       *
       * @param {String=} name        Optional name to filter by
       * @return {?ICAL.Component}     The found subcomponent
       */
      getFirstSubcomponent: function(s) {
        if (s) {
          for (var u = 0, o = this.jCal[t], f = o.length; u < f; u++)
            if (o[u][r] === s) {
              var m = this._hydrateComponent(u);
              return m;
            }
        } else if (this.jCal[t].length)
          return this._hydrateComponent(0);
        return null;
      },
      /**
       * Finds all sub components, optionally filtering by name.
       *
       * @param {String=} name            Optional name to filter by
       * @return {ICAL.Component[]}       The found sub components
       */
      getAllSubcomponents: function(s) {
        var u = this.jCal[t].length, o = 0;
        if (s) {
          for (var f = this.jCal[t], m = []; o < u; o++)
            s === f[o][r] && m.push(
              this._hydrateComponent(o)
            );
          return m;
        } else {
          if (!this._components || this._hydratedComponentCount !== u)
            for (; o < u; o++)
              this._hydrateComponent(o);
          return this._components || [];
        }
      },
      /**
       * Returns true when a named property exists.
       *
       * @param {String} name     The property name
       * @return {Boolean}        True, when property is found
       */
      hasProperty: function(s) {
        for (var u = this.jCal[i], o = u.length, f = 0; f < o; f++)
          if (u[f][r] === s)
            return !0;
        return !1;
      },
      /**
       * Finds the first property, optionally with the given name.
       *
       * @param {String=} name        Lowercase property name
       * @return {?ICAL.Property}     The found property
       */
      getFirstProperty: function(s) {
        if (s) {
          for (var u = 0, o = this.jCal[i], f = o.length; u < f; u++)
            if (o[u][r] === s) {
              var m = this._hydrateProperty(u);
              return m;
            }
        } else if (this.jCal[i].length)
          return this._hydrateProperty(0);
        return null;
      },
      /**
       * Returns first property's value, if available.
       *
       * @param {String=} name    Lowercase property name
       * @return {?String}        The found property value.
       */
      getFirstPropertyValue: function(s) {
        var u = this.getFirstProperty(s);
        return u ? u.getFirstValue() : null;
      },
      /**
       * Get all properties in the component, optionally filtered by name.
       *
       * @param {String=} name        Lowercase property name
       * @return {ICAL.Property[]}    List of properties
       */
      getAllProperties: function(s) {
        var u = this.jCal[i].length, o = 0;
        if (s) {
          for (var f = this.jCal[i], m = []; o < u; o++)
            s === f[o][r] && m.push(
              this._hydrateProperty(o)
            );
          return m;
        } else {
          if (!this._properties || this._hydratedPropertyCount !== u)
            for (; o < u; o++)
              this._hydrateProperty(o);
          return this._properties || [];
        }
      },
      _removeObjectByIndex: function(s, u, o) {
        if (u = u || [], u[o]) {
          var f = u[o];
          "parent" in f && (f.parent = null);
        }
        u.splice(o, 1), this.jCal[s].splice(o, 1);
      },
      _removeObject: function(s, u, o) {
        var f = 0, m = this.jCal[s], l = m.length, v = this[u];
        if (typeof o == "string") {
          for (; f < l; f++)
            if (m[f][r] === o)
              return this._removeObjectByIndex(s, v, f), !0;
        } else if (v) {
          for (; f < l; f++)
            if (v[f] && v[f] === o)
              return this._removeObjectByIndex(s, v, f), !0;
        }
        return !1;
      },
      _removeAllObjects: function(s, u, o) {
        for (var f = this[u], m = this.jCal[s], l = m.length - 1; l >= 0; l--)
          (!o || m[l][r] === o) && this._removeObjectByIndex(s, f, l);
      },
      /**
       * Adds a single sub component.
       *
       * @param {ICAL.Component} component        The component to add
       * @return {ICAL.Component}                 The passed in component
       */
      addSubcomponent: function(s) {
        this._components || (this._components = [], this._hydratedComponentCount = 0), s.parent && s.parent.removeSubcomponent(s);
        var u = this.jCal[t].push(s.jCal);
        return this._components[u - 1] = s, this._hydratedComponentCount++, s.parent = this, s;
      },
      /**
       * Removes a single component by name or the instance of a specific
       * component.
       *
       * @param {ICAL.Component|String} nameOrComp    Name of component, or component
       * @return {Boolean}                            True when comp is removed
       */
      removeSubcomponent: function(s) {
        var u = this._removeObject(t, "_components", s);
        return u && this._hydratedComponentCount--, u;
      },
      /**
       * Removes all components or (if given) all components by a particular
       * name.
       *
       * @param {String=} name            Lowercase component name
       */
      removeAllSubcomponents: function(s) {
        var u = this._removeAllObjects(t, "_components", s);
        return this._hydratedComponentCount = 0, u;
      },
      /**
       * Adds an {@link ICAL.Property} to the component.
       *
       * @param {ICAL.Property} property      The property to add
       * @return {ICAL.Property}              The passed in property
       */
      addProperty: function(s) {
        if (!(s instanceof e.Property))
          throw new TypeError("must instance of ICAL.Property");
        this._properties || (this._properties = [], this._hydratedPropertyCount = 0), s.parent && s.parent.removeProperty(s);
        var u = this.jCal[i].push(s.jCal);
        return this._properties[u - 1] = s, this._hydratedPropertyCount++, s.parent = this, s;
      },
      /**
       * Helper method to add a property with a value to the component.
       *
       * @param {String}               name         Property name to add
       * @param {String|Number|Object} value        Property value
       * @return {ICAL.Property}                    The created property
       */
      addPropertyWithValue: function(s, u) {
        var o = new e.Property(s);
        return o.setValue(u), this.addProperty(o), o;
      },
      /**
       * Helper method that will update or create a property of the given name
       * and sets its value. If multiple properties with the given name exist,
       * only the first is updated.
       *
       * @param {String}               name         Property name to update
       * @param {String|Number|Object} value        Property value
       * @return {ICAL.Property}                    The created property
       */
      updatePropertyWithValue: function(s, u) {
        var o = this.getFirstProperty(s);
        return o ? o.setValue(u) : o = this.addPropertyWithValue(s, u), o;
      },
      /**
       * Removes a single property by name or the instance of the specific
       * property.
       *
       * @param {String|ICAL.Property} nameOrProp     Property name or instance to remove
       * @return {Boolean}                            True, when deleted
       */
      removeProperty: function(s) {
        var u = this._removeObject(i, "_properties", s);
        return u && this._hydratedPropertyCount--, u;
      },
      /**
       * Removes all properties associated with this component, optionally
       * filtered by name.
       *
       * @param {String=} name        Lowercase property name
       * @return {Boolean}            True, when deleted
       */
      removeAllProperties: function(s) {
        var u = this._removeAllObjects(i, "_properties", s);
        return this._hydratedPropertyCount = 0, u;
      },
      /**
       * Returns the Object representation of this component. The returned object
       * is a live jCal object and should be cloned if modified.
       * @return {Object}
       */
      toJSON: function() {
        return this.jCal;
      },
      /**
       * The string representation of this component.
       * @return {String}
       */
      toString: function() {
        return e.stringify.component(
          this.jCal,
          this._designSet
        );
      }
    }, a.fromString = function(s) {
      return new a(e.parse.component(s));
    }, a;
  }(), e.Property = function() {
    var i = 0, t = 1, r = 2, a = 3, s = e.design;
    function u(o, f) {
      this._parent = f || null, typeof o == "string" ? (this.jCal = [o, {}, s.defaultType], this.jCal[r] = this.getDefaultType()) : this.jCal = o, this._updateType();
    }
    return u.prototype = {
      /**
       * The value type for this property
       * @readonly
       * @type {String}
       */
      get type() {
        return this.jCal[r];
      },
      /**
       * The name of this property, in lowercase.
       * @readonly
       * @type {String}
       */
      get name() {
        return this.jCal[i];
      },
      /**
       * The parent component for this property.
       * @type {ICAL.Component}
       */
      get parent() {
        return this._parent;
      },
      set parent(o) {
        var f = !this._parent || o && o._designSet != this._parent._designSet;
        return this._parent = o, this.type == s.defaultType && f && (this.jCal[r] = this.getDefaultType(), this._updateType()), o;
      },
      /**
       * The design set for this property, e.g. icalendar vs vcard
       *
       * @type {ICAL.design.designSet}
       * @private
       */
      get _designSet() {
        return this.parent ? this.parent._designSet : s.defaultSet;
      },
      /**
       * Updates the type metadata from the current jCal type and design set.
       *
       * @private
       */
      _updateType: function() {
        var o = this._designSet;
        this.type in o.value && (o.value[this.type], "decorate" in o.value[this.type] ? this.isDecorated = !0 : this.isDecorated = !1, this.name in o.property && (this.isMultiValue = "multiValue" in o.property[this.name], this.isStructuredValue = "structuredValue" in o.property[this.name]));
      },
      /**
       * Hydrate a single value. The act of hydrating means turning the raw jCal
       * value into a potentially wrapped object, for example {@link ICAL.Time}.
       *
       * @private
       * @param {Number} index        The index of the value to hydrate
       * @return {Object}             The decorated value.
       */
      _hydrateValue: function(o) {
        return this._values && this._values[o] ? this._values[o] : this.jCal.length <= a + o ? null : this.isDecorated ? (this._values || (this._values = []), this._values[o] = this._decorate(
          this.jCal[a + o]
        )) : this.jCal[a + o];
      },
      /**
       * Decorate a single value, returning its wrapped object. This is used by
       * the hydrate function to actually wrap the value.
       *
       * @private
       * @param {?} value         The value to decorate
       * @return {Object}         The decorated value
       */
      _decorate: function(o) {
        return this._designSet.value[this.type].decorate(o, this);
      },
      /**
       * Undecorate a single value, returning its raw jCal data.
       *
       * @private
       * @param {Object} value         The value to undecorate
       * @return {?}                   The undecorated value
       */
      _undecorate: function(o) {
        return this._designSet.value[this.type].undecorate(o, this);
      },
      /**
       * Sets the value at the given index while also hydrating it. The passed
       * value can either be a decorated or undecorated value.
       *
       * @private
       * @param {?} value             The value to set
       * @param {Number} index        The index to set it at
       */
      _setDecoratedValue: function(o, f) {
        this._values || (this._values = []), typeof o == "object" && "icaltype" in o ? (this.jCal[a + f] = this._undecorate(o), this._values[f] = o) : (this.jCal[a + f] = o, this._values[f] = this._decorate(o));
      },
      /**
       * Gets a parameter on the property.
       *
       * @param {String}        name   Parameter name (lowercase)
       * @return {Array|String}        Parameter value
       */
      getParameter: function(o) {
        if (o in this.jCal[t])
          return this.jCal[t][o];
      },
      /**
       * Gets first parameter on the property.
       *
       * @param {String}        name   Parameter name (lowercase)
       * @return {String}        Parameter value
       */
      getFirstParameter: function(o) {
        var f = this.getParameter(o);
        return Array.isArray(f) ? f[0] : f;
      },
      /**
       * Sets a parameter on the property.
       *
       * @param {String}       name     The parameter name
       * @param {Array|String} value    The parameter value
       */
      setParameter: function(o, f) {
        var m = o.toLowerCase();
        typeof f == "string" && m in this._designSet.param && "multiValue" in this._designSet.param[m] && (f = [f]), this.jCal[t][o] = f;
      },
      /**
       * Removes a parameter
       *
       * @param {String} name     The parameter name
       */
      removeParameter: function(o) {
        delete this.jCal[t][o];
      },
      /**
       * Get the default type based on this property's name.
       *
       * @return {String}     The default type for this property
       */
      getDefaultType: function() {
        var o = this.jCal[i], f = this._designSet;
        if (o in f.property) {
          var m = f.property[o];
          if ("defaultType" in m)
            return m.defaultType;
        }
        return s.defaultType;
      },
      /**
       * Sets type of property and clears out any existing values of the current
       * type.
       *
       * @param {String} type     New iCAL type (see design.*.values)
       */
      resetType: function(o) {
        this.removeAllValues(), this.jCal[r] = o, this._updateType();
      },
      /**
       * Finds the first property value.
       *
       * @return {String}         First property value
       */
      getFirstValue: function() {
        return this._hydrateValue(0);
      },
      /**
       * Gets all values on the property.
       *
       * NOTE: this creates an array during each call.
       *
       * @return {Array}          List of values
       */
      getValues: function() {
        var o = this.jCal.length - a;
        if (o < 1)
          return [];
        for (var f = 0, m = []; f < o; f++)
          m[f] = this._hydrateValue(f);
        return m;
      },
      /**
       * Removes all values from this property
       */
      removeAllValues: function() {
        this._values && (this._values.length = 0), this.jCal.length = 3;
      },
      /**
       * Sets the values of the property.  Will overwrite the existing values.
       * This can only be used for multi-value properties.
       *
       * @param {Array} values    An array of values
       */
      setValues: function(o) {
        if (!this.isMultiValue)
          throw new Error(
            this.name + `: does not not support mulitValue.
override isMultiValue`
          );
        var f = o.length, m = 0;
        if (this.removeAllValues(), f > 0 && typeof o[0] == "object" && "icaltype" in o[0] && this.resetType(o[0].icaltype), this.isDecorated)
          for (; m < f; m++)
            this._setDecoratedValue(o[m], m);
        else
          for (; m < f; m++)
            this.jCal[a + m] = o[m];
      },
      /**
       * Sets the current value of the property. If this is a multi-value
       * property, all other values will be removed.
       *
       * @param {String|Object} value     New property value.
       */
      setValue: function(o) {
        this.removeAllValues(), typeof o == "object" && "icaltype" in o && this.resetType(o.icaltype), this.isDecorated ? this._setDecoratedValue(o, 0) : this.jCal[a] = o;
      },
      /**
       * Returns the Object representation of this component. The returned object
       * is a live jCal object and should be cloned if modified.
       * @return {Object}
       */
      toJSON: function() {
        return this.jCal;
      },
      /**
       * The string representation of this component.
       * @return {String}
       */
      toICALString: function() {
        return e.stringify.property(
          this.jCal,
          this._designSet,
          !0
        );
      }
    }, u.fromString = function(o, f) {
      return new u(e.parse.property(o, f));
    }, u;
  }(), e.UtcOffset = function() {
    function i(t) {
      this.fromData(t);
    }
    return i.prototype = {
      /**
       * The hours in the utc-offset
       * @type {Number}
       */
      hours: 0,
      /**
       * The minutes in the utc-offset
       * @type {Number}
       */
      minutes: 0,
      /**
       * The sign of the utc offset, 1 for positive offset, -1 for negative
       * offsets.
       * @type {Number}
       */
      factor: 1,
      /**
       * The type name, to be used in the jCal object.
       * @constant
       * @type {String}
       * @default "utc-offset"
       */
      icaltype: "utc-offset",
      /**
       * Returns a clone of the utc offset object.
       *
       * @return {ICAL.UtcOffset}     The cloned object
       */
      clone: function() {
        return e.UtcOffset.fromSeconds(this.toSeconds());
      },
      /**
       * Sets up the current instance using members from the passed data object.
       *
       * @param {Object} aData          An object with members of the utc offset
       * @param {Number=} aData.hours   The hours for the utc offset
       * @param {Number=} aData.minutes The minutes in the utc offset
       * @param {Number=} aData.factor  The factor for the utc-offset, either -1 or 1
       */
      fromData: function(t) {
        if (t)
          for (var r in t)
            t.hasOwnProperty(r) && (this[r] = t[r]);
        this._normalize();
      },
      /**
       * Sets up the current instance from the given seconds value. The seconds
       * value is truncated to the minute. Offsets are wrapped when the world
       * ends, the hour after UTC+14:00 is UTC-12:00.
       *
       * @param {Number} aSeconds         The seconds to convert into an offset
       */
      fromSeconds: function(t) {
        var r = Math.abs(t);
        return this.factor = t < 0 ? -1 : 1, this.hours = e.helpers.trunc(r / 3600), r -= this.hours * 3600, this.minutes = e.helpers.trunc(r / 60), this;
      },
      /**
       * Convert the current offset to a value in seconds
       *
       * @return {Number}                 The offset in seconds
       */
      toSeconds: function() {
        return this.factor * (60 * this.minutes + 3600 * this.hours);
      },
      /**
       * Compare this utc offset with another one.
       *
       * @param {ICAL.UtcOffset} other        The other offset to compare with
       * @return {Number}                     -1, 0 or 1 for less/equal/greater
       */
      compare: function(r) {
        var a = this.toSeconds(), s = r.toSeconds();
        return (a > s) - (s > a);
      },
      _normalize: function() {
        for (var t = this.toSeconds(), r = this.factor; t < -43200; )
          t += 97200;
        for (; t > 50400; )
          t -= 97200;
        this.fromSeconds(t), t == 0 && (this.factor = r);
      },
      /**
       * The iCalendar string representation of this utc-offset.
       * @return {String}
       */
      toICALString: function() {
        return e.design.icalendar.value["utc-offset"].toICAL(this.toString());
      },
      /**
       * The string representation of this utc-offset.
       * @return {String}
       */
      toString: function() {
        return (this.factor == 1 ? "+" : "-") + e.helpers.pad2(this.hours) + ":" + e.helpers.pad2(this.minutes);
      }
    }, i.fromString = function(t) {
      var r = {};
      return r.factor = t[0] === "+" ? 1 : -1, r.hours = e.helpers.strictParseInt(t.substr(1, 2)), r.minutes = e.helpers.strictParseInt(t.substr(4, 2)), new e.UtcOffset(r);
    }, i.fromSeconds = function(t) {
      var r = new i();
      return r.fromSeconds(t), r;
    }, i;
  }(), e.Binary = function() {
    function i(t) {
      this.value = t;
    }
    return i.prototype = {
      /**
       * The type name, to be used in the jCal object.
       * @default "binary"
       * @constant
       */
      icaltype: "binary",
      /**
       * Base64 decode the current value
       *
       * @return {String}         The base64-decoded value
       */
      decodeValue: function() {
        return this._b64_decode(this.value);
      },
      /**
       * Encodes the passed parameter with base64 and sets the internal
       * value to the result.
       *
       * @param {String} aValue      The raw binary value to encode
       */
      setEncodedValue: function(r) {
        this.value = this._b64_encode(r);
      },
      _b64_encode: function(r) {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s, u, o, f, m, l, v, h, c = 0, T = 0, y = "", p = [];
        if (!r)
          return r;
        do
          s = r.charCodeAt(c++), u = r.charCodeAt(c++), o = r.charCodeAt(c++), h = s << 16 | u << 8 | o, f = h >> 18 & 63, m = h >> 12 & 63, l = h >> 6 & 63, v = h & 63, p[T++] = a.charAt(f) + a.charAt(m) + a.charAt(l) + a.charAt(v);
        while (c < r.length);
        y = p.join("");
        var S = r.length % 3;
        return (S ? y.slice(0, S - 3) : y) + "===".slice(S || 3);
      },
      _b64_decode: function(r) {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s, u, o, f, m, l, v, h, c = 0, T = 0, y = "", p = [];
        if (!r)
          return r;
        r += "";
        do
          f = a.indexOf(r.charAt(c++)), m = a.indexOf(r.charAt(c++)), l = a.indexOf(r.charAt(c++)), v = a.indexOf(r.charAt(c++)), h = f << 18 | m << 12 | l << 6 | v, s = h >> 16 & 255, u = h >> 8 & 255, o = h & 255, l == 64 ? p[T++] = String.fromCharCode(s) : v == 64 ? p[T++] = String.fromCharCode(s, u) : p[T++] = String.fromCharCode(s, u, o);
        while (c < r.length);
        return y = p.join(""), y;
      },
      /**
       * The string representation of this value
       * @return {String}
       */
      toString: function() {
        return this.value;
      }
    }, i.fromString = function(t) {
      return new i(t);
    }, i;
  }(), function() {
    e.Period = function(t) {
      if (this.wrappedJSObject = this, t && "start" in t) {
        if (t.start && !(t.start instanceof e.Time))
          throw new TypeError(".start must be an instance of ICAL.Time");
        this.start = t.start;
      }
      if (t && t.end && t.duration)
        throw new Error("cannot accept both end and duration");
      if (t && "end" in t) {
        if (t.end && !(t.end instanceof e.Time))
          throw new TypeError(".end must be an instance of ICAL.Time");
        this.end = t.end;
      }
      if (t && "duration" in t) {
        if (t.duration && !(t.duration instanceof e.Duration))
          throw new TypeError(".duration must be an instance of ICAL.Duration");
        this.duration = t.duration;
      }
    }, e.Period.prototype = {
      /**
       * The start of the period
       * @type {ICAL.Time}
       */
      start: null,
      /**
       * The end of the period
       * @type {ICAL.Time}
       */
      end: null,
      /**
       * The duration of the period
       * @type {ICAL.Duration}
       */
      duration: null,
      /**
       * The class identifier.
       * @constant
       * @type {String}
       * @default "icalperiod"
       */
      icalclass: "icalperiod",
      /**
       * The type name, to be used in the jCal object.
       * @constant
       * @type {String}
       * @default "period"
       */
      icaltype: "period",
      /**
       * Returns a clone of the duration object.
       *
       * @return {ICAL.Period}      The cloned object
       */
      clone: function() {
        return e.Period.fromData({
          start: this.start ? this.start.clone() : null,
          end: this.end ? this.end.clone() : null,
          duration: this.duration ? this.duration.clone() : null
        });
      },
      /**
       * Calculates the duration of the period, either directly or by subtracting
       * start from end date.
       *
       * @return {ICAL.Duration}      The calculated duration
       */
      getDuration: function() {
        return this.duration ? this.duration : this.end.subtractDate(this.start);
      },
      /**
       * Calculates the end date of the period, either directly or by adding
       * duration to start date.
       *
       * @return {ICAL.Time}          The calculated end date
       */
      getEnd: function() {
        if (this.end)
          return this.end;
        var i = this.start.clone();
        return i.addDuration(this.duration), i;
      },
      /**
       * The string representation of this period.
       * @return {String}
       */
      toString: function() {
        return this.start + "/" + (this.end || this.duration);
      },
      /**
       * The jCal representation of this period type.
       * @return {Object}
       */
      toJSON: function() {
        return [this.start.toString(), (this.end || this.duration).toString()];
      },
      /**
       * The iCalendar string representation of this period.
       * @return {String}
       */
      toICALString: function() {
        return this.start.toICALString() + "/" + (this.end || this.duration).toICALString();
      }
    }, e.Period.fromString = function(t, r) {
      var a = t.split("/");
      if (a.length !== 2)
        throw new Error(
          'Invalid string value: "' + t + '" must contain a "/" char.'
        );
      var s = {
        start: e.Time.fromDateTimeString(a[0], r)
      }, u = a[1];
      return e.Duration.isValueString(u) ? s.duration = e.Duration.fromString(u) : s.end = e.Time.fromDateTimeString(u, r), new e.Period(s);
    }, e.Period.fromData = function(t) {
      return new e.Period(t);
    }, e.Period.fromJSON = function(i, t, r) {
      function a(s, u) {
        return r ? e.Time.fromString(s, u) : e.Time.fromDateTimeString(s, u);
      }
      return e.Duration.isValueString(i[1]) ? e.Period.fromData({
        start: a(i[0], t),
        duration: e.Duration.fromString(i[1])
      }) : e.Period.fromData({
        start: a(i[0], t),
        end: a(i[1], t)
      });
    };
  }(), function() {
    var i = /([PDWHMTS]{1,1})/;
    e.Duration = function(a) {
      this.wrappedJSObject = this, this.fromData(a);
    }, e.Duration.prototype = {
      /**
       * The weeks in this duration
       * @type {Number}
       * @default 0
       */
      weeks: 0,
      /**
       * The days in this duration
       * @type {Number}
       * @default 0
       */
      days: 0,
      /**
       * The days in this duration
       * @type {Number}
       * @default 0
       */
      hours: 0,
      /**
       * The minutes in this duration
       * @type {Number}
       * @default 0
       */
      minutes: 0,
      /**
       * The seconds in this duration
       * @type {Number}
       * @default 0
       */
      seconds: 0,
      /**
       * The seconds in this duration
       * @type {Boolean}
       * @default false
       */
      isNegative: !1,
      /**
       * The class identifier.
       * @constant
       * @type {String}
       * @default "icalduration"
       */
      icalclass: "icalduration",
      /**
       * The type name, to be used in the jCal object.
       * @constant
       * @type {String}
       * @default "duration"
       */
      icaltype: "duration",
      /**
       * Returns a clone of the duration object.
       *
       * @return {ICAL.Duration}      The cloned object
       */
      clone: function() {
        return e.Duration.fromData(this);
      },
      /**
       * The duration value expressed as a number of seconds.
       *
       * @return {Number}             The duration value in seconds
       */
      toSeconds: function() {
        var a = this.seconds + 60 * this.minutes + 3600 * this.hours + 86400 * this.days + 604800 * this.weeks;
        return this.isNegative ? -a : a;
      },
      /**
       * Reads the passed seconds value into this duration object. Afterwards,
       * members like {@link ICAL.Duration#days days} and {@link ICAL.Duration#weeks weeks} will be set up
       * accordingly.
       *
       * @param {Number} aSeconds     The duration value in seconds
       * @return {ICAL.Duration}      Returns this instance
       */
      fromSeconds: function(a) {
        var s = Math.abs(a);
        return this.isNegative = a < 0, this.days = e.helpers.trunc(s / 86400), this.days % 7 == 0 ? (this.weeks = this.days / 7, this.days = 0) : this.weeks = 0, s -= (this.days + 7 * this.weeks) * 86400, this.hours = e.helpers.trunc(s / 3600), s -= this.hours * 3600, this.minutes = e.helpers.trunc(s / 60), s -= this.minutes * 60, this.seconds = s, this;
      },
      /**
       * Sets up the current instance using members from the passed data object.
       *
       * @param {Object} aData               An object with members of the duration
       * @param {Number} aData.weeks         Duration in weeks
       * @param {Number} aData.days          Duration in days
       * @param {Number} aData.hours         Duration in hours
       * @param {Number} aData.minutes       Duration in minutes
       * @param {Number} aData.seconds       Duration in seconds
       * @param {Boolean} aData.isNegative   If true, the duration is negative
       */
      fromData: function(a) {
        var s = [
          "weeks",
          "days",
          "hours",
          "minutes",
          "seconds",
          "isNegative"
        ];
        for (var u in s)
          if (s.hasOwnProperty(u)) {
            var o = s[u];
            a && o in a ? this[o] = a[o] : this[o] = 0;
          }
      },
      /**
       * Resets the duration instance to the default values, i.e. PT0S
       */
      reset: function() {
        this.isNegative = !1, this.weeks = 0, this.days = 0, this.hours = 0, this.minutes = 0, this.seconds = 0;
      },
      /**
       * Compares the duration instance with another one.
       *
       * @param {ICAL.Duration} aOther        The instance to compare with
       * @return {Number}                     -1, 0 or 1 for less/equal/greater
       */
      compare: function(a) {
        var s = this.toSeconds(), u = a.toSeconds();
        return (s > u) - (s < u);
      },
      /**
       * Normalizes the duration instance. For example, a duration with a value
       * of 61 seconds will be normalized to 1 minute and 1 second.
       */
      normalize: function() {
        this.fromSeconds(this.toSeconds());
      },
      /**
       * The string representation of this duration.
       * @return {String}
       */
      toString: function() {
        if (this.toSeconds() == 0)
          return "PT0S";
        var a = "";
        return this.isNegative && (a += "-"), a += "P", this.weeks && (a += this.weeks + "W"), this.days && (a += this.days + "D"), (this.hours || this.minutes || this.seconds) && (a += "T", this.hours && (a += this.hours + "H"), this.minutes && (a += this.minutes + "M"), this.seconds && (a += this.seconds + "S")), a;
      },
      /**
       * The iCalendar string representation of this duration.
       * @return {String}
       */
      toICALString: function() {
        return this.toString();
      }
    }, e.Duration.fromSeconds = function(a) {
      return new e.Duration().fromSeconds(a);
    };
    function t(r, a, s) {
      var u;
      switch (r) {
        case "P":
          a && a === "-" ? s.isNegative = !0 : s.isNegative = !1;
          break;
        case "D":
          u = "days";
          break;
        case "W":
          u = "weeks";
          break;
        case "H":
          u = "hours";
          break;
        case "M":
          u = "minutes";
          break;
        case "S":
          u = "seconds";
          break;
        default:
          return 0;
      }
      if (u) {
        if (!a && a !== 0)
          throw new Error(
            'invalid duration value: Missing number before "' + r + '"'
          );
        var o = parseInt(a, 10);
        if (e.helpers.isStrictlyNaN(o))
          throw new Error(
            'invalid duration value: Invalid number "' + a + '" before "' + r + '"'
          );
        s[u] = o;
      }
      return 1;
    }
    e.Duration.isValueString = function(r) {
      return r[0] === "P" || r[1] === "P";
    }, e.Duration.fromString = function(a) {
      for (var s = 0, u = /* @__PURE__ */ Object.create(null), o = 0; (s = a.search(i)) !== -1; ) {
        var f = a[s], m = a.substr(0, s);
        a = a.substr(s + 1), o += t(f, m, u);
      }
      if (o < 2)
        throw new Error(
          'invalid duration value: Not enough duration components in "' + a + '"'
        );
      return new e.Duration(u);
    }, e.Duration.fromData = function(a) {
      return new e.Duration(a);
    };
  }(), function() {
    var i = [
      "tzid",
      "location",
      "tznames",
      "latitude",
      "longitude"
    ];
    e.Timezone = function(r) {
      this.wrappedJSObject = this, this.fromData(r);
    }, e.Timezone.prototype = {
      /**
       * Timezone identifier
       * @type {String}
       */
      tzid: "",
      /**
       * Timezone location
       * @type {String}
       */
      location: "",
      /**
       * Alternative timezone name, for the string representation
       * @type {String}
       */
      tznames: "",
      /**
       * The primary latitude for the timezone.
       * @type {Number}
       */
      latitude: 0,
      /**
       * The primary longitude for the timezone.
       * @type {Number}
       */
      longitude: 0,
      /**
       * The vtimezone component for this timezone.
       * @type {ICAL.Component}
       */
      component: null,
      /**
       * The year this timezone has been expanded to. All timezone transition
       * dates until this year are known and can be used for calculation
       *
       * @private
       * @type {Number}
       */
      expandedUntilYear: 0,
      /**
       * The class identifier.
       * @constant
       * @type {String}
       * @default "icaltimezone"
       */
      icalclass: "icaltimezone",
      /**
       * Sets up the current instance using members from the passed data object.
       *
       * @param {ICAL.Component|Object} aData options for class
       * @param {String|ICAL.Component} aData.component
       *        If aData is a simple object, then this member can be set to either a
       *        string containing the component data, or an already parsed
       *        ICAL.Component
       * @param {String} aData.tzid      The timezone identifier
       * @param {String} aData.location  The timezone locationw
       * @param {String} aData.tznames   An alternative string representation of the
       *                                  timezone
       * @param {Number} aData.latitude  The latitude of the timezone
       * @param {Number} aData.longitude The longitude of the timezone
       */
      fromData: function(r) {
        if (this.expandedUntilYear = 0, this.changes = [], r instanceof e.Component)
          this.component = r;
        else {
          if (r && "component" in r)
            if (typeof r.component == "string") {
              var a = e.parse(r.component);
              this.component = new e.Component(a);
            } else
              r.component instanceof e.Component ? this.component = r.component : this.component = null;
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var u = i[s];
              r && u in r && (this[u] = r[u]);
            }
        }
        return this.component instanceof e.Component && !this.tzid && (this.tzid = this.component.getFirstPropertyValue("tzid")), this;
      },
      /**
       * Finds the utcOffset the given time would occur in this timezone.
       *
       * @param {ICAL.Time} tt        The time to check for
       * @return {Number} utc offset in seconds
       */
      utcOffset: function(r) {
        if (this == e.Timezone.utcTimezone || this == e.Timezone.localTimezone || (this._ensureCoverage(r.year), !this.changes.length))
          return 0;
        for (var a = {
          year: r.year,
          month: r.month,
          day: r.day,
          hour: r.hour,
          minute: r.minute,
          second: r.second
        }, s = this._findNearbyChange(a), u = -1, o = 1; ; ) {
          var f = e.helpers.clone(this.changes[s], !0);
          f.utcOffset < f.prevUtcOffset ? e.Timezone.adjust_change(f, 0, 0, 0, f.utcOffset) : e.Timezone.adjust_change(
            f,
            0,
            0,
            0,
            f.prevUtcOffset
          );
          var m = e.Timezone._compare_change_fn(a, f);
          if (m >= 0 ? u = s : o = -1, o == -1 && u != -1)
            break;
          if (s += o, s < 0)
            return 0;
          if (s >= this.changes.length)
            break;
        }
        var l = this.changes[u], v = l.utcOffset - l.prevUtcOffset;
        if (v < 0 && u > 0) {
          var h = e.helpers.clone(l, !0);
          if (e.Timezone.adjust_change(
            h,
            0,
            0,
            0,
            h.prevUtcOffset
          ), e.Timezone._compare_change_fn(a, h) < 0) {
            var c = this.changes[u - 1], T = !1;
            l.is_daylight != T && c.is_daylight == T && (l = c);
          }
        }
        return l.utcOffset;
      },
      _findNearbyChange: function(r) {
        var a = e.helpers.binsearchInsert(
          this.changes,
          r,
          e.Timezone._compare_change_fn
        );
        return a >= this.changes.length ? this.changes.length - 1 : a;
      },
      _ensureCoverage: function(t) {
        if (e.Timezone._minimumExpansionYear == -1) {
          var r = e.Time.now();
          e.Timezone._minimumExpansionYear = r.year;
        }
        var a = t;
        if (a < e.Timezone._minimumExpansionYear && (a = e.Timezone._minimumExpansionYear), a += e.Timezone.EXTRA_COVERAGE, a > e.Timezone.MAX_YEAR && (a = e.Timezone.MAX_YEAR), !this.changes.length || this.expandedUntilYear < t) {
          for (var s = this.component.getAllSubcomponents(), u = s.length, o = 0; o < u; o++)
            this._expandComponent(
              s[o],
              a,
              this.changes
            );
          this.changes.sort(e.Timezone._compare_change_fn), this.expandedUntilYear = a;
        }
      },
      _expandComponent: function(t, r, a) {
        if (!t.hasProperty("dtstart") || !t.hasProperty("tzoffsetto") || !t.hasProperty("tzoffsetfrom"))
          return null;
        var s = t.getFirstProperty("dtstart").getFirstValue(), u;
        function o(p) {
          return p.factor * (p.hours * 3600 + p.minutes * 60);
        }
        function f() {
          var p = {};
          return p.is_daylight = t.name == "daylight", p.utcOffset = o(
            t.getFirstProperty("tzoffsetto").getFirstValue()
          ), p.prevUtcOffset = o(
            t.getFirstProperty("tzoffsetfrom").getFirstValue()
          ), p;
        }
        if (!t.hasProperty("rrule") && !t.hasProperty("rdate"))
          u = f(), u.year = s.year, u.month = s.month, u.day = s.day, u.hour = s.hour, u.minute = s.minute, u.second = s.second, e.Timezone.adjust_change(
            u,
            0,
            0,
            0,
            -u.prevUtcOffset
          ), a.push(u);
        else {
          var m = t.getAllProperties("rdate");
          for (var l in m)
            if (m.hasOwnProperty(l)) {
              var v = m[l], h = v.getFirstValue();
              u = f(), u.year = h.year, u.month = h.month, u.day = h.day, h.isDate ? (u.hour = s.hour, u.minute = s.minute, u.second = s.second, s.zone != e.Timezone.utcTimezone && e.Timezone.adjust_change(
                u,
                0,
                0,
                0,
                -u.prevUtcOffset
              )) : (u.hour = h.hour, u.minute = h.minute, u.second = h.second, h.zone != e.Timezone.utcTimezone && e.Timezone.adjust_change(
                u,
                0,
                0,
                0,
                -u.prevUtcOffset
              )), a.push(u);
            }
          var c = t.getFirstProperty("rrule");
          if (c) {
            c = c.getFirstValue(), u = f(), c.until && c.until.zone == e.Timezone.utcTimezone && (c.until.adjust(0, 0, 0, u.prevUtcOffset), c.until.zone = e.Timezone.localTimezone);
            for (var T = c.iterator(s), y; (y = T.next()) && (u = f(), !(y.year > r || !y)); )
              u.year = y.year, u.month = y.month, u.day = y.day, u.hour = y.hour, u.minute = y.minute, u.second = y.second, u.isDate = y.isDate, e.Timezone.adjust_change(
                u,
                0,
                0,
                0,
                -u.prevUtcOffset
              ), a.push(u);
          }
        }
        return a;
      },
      /**
       * The string representation of this timezone.
       * @return {String}
       */
      toString: function() {
        return this.tznames ? this.tznames : this.tzid;
      }
    }, e.Timezone._compare_change_fn = function(r, a) {
      return r.year < a.year ? -1 : r.year > a.year ? 1 : r.month < a.month ? -1 : r.month > a.month ? 1 : r.day < a.day ? -1 : r.day > a.day ? 1 : r.hour < a.hour ? -1 : r.hour > a.hour ? 1 : r.minute < a.minute ? -1 : r.minute > a.minute ? 1 : r.second < a.second ? -1 : r.second > a.second ? 1 : 0;
    }, e.Timezone.convert_time = function(r, a, s) {
      if (r.isDate || a.tzid == s.tzid || a == e.Timezone.localTimezone || s == e.Timezone.localTimezone)
        return r.zone = s, r;
      var u = a.utcOffset(r);
      return r.adjust(0, 0, 0, -u), u = s.utcOffset(r), r.adjust(0, 0, 0, u), null;
    }, e.Timezone.fromData = function(r) {
      var a = new e.Timezone();
      return a.fromData(r);
    }, e.Timezone.utcTimezone = e.Timezone.fromData({
      tzid: "UTC"
    }), e.Timezone.localTimezone = e.Timezone.fromData({
      tzid: "floating"
    }), e.Timezone.adjust_change = function(r, a, s, u, o) {
      return e.Time.prototype.adjust.call(
        r,
        a,
        s,
        u,
        o,
        r
      );
    }, e.Timezone._minimumExpansionYear = -1, e.Timezone.MAX_YEAR = 2035, e.Timezone.EXTRA_COVERAGE = 5;
  }(), e.TimezoneService = function() {
    var i, t = {
      get count() {
        return Object.keys(i).length;
      },
      reset: function() {
        i = /* @__PURE__ */ Object.create(null);
        var r = e.Timezone.utcTimezone;
        i.Z = r, i.UTC = r, i.GMT = r;
      },
      /**
       * Checks if timezone id has been registered.
       *
       * @param {String} tzid     Timezone identifier (e.g. America/Los_Angeles)
       * @return {Boolean}        False, when not present
       */
      has: function(r) {
        return !!i[r];
      },
      /**
       * Returns a timezone by its tzid if present.
       *
       * @param {String} tzid     Timezone identifier (e.g. America/Los_Angeles)
       * @return {?ICAL.Timezone} The timezone, or null if not found
       */
      get: function(r) {
        return i[r];
      },
      /**
       * Registers a timezone object or component.
       *
       * @param {String=} name
       *        The name of the timezone. Defaults to the component's TZID if not
       *        passed.
       * @param {ICAL.Component|ICAL.Timezone} zone
       *        The initialized zone or vtimezone.
       */
      register: function(r, a) {
        if (r instanceof e.Component && r.name === "vtimezone" && (a = new e.Timezone(r), r = a.tzid), a instanceof e.Timezone)
          i[r] = a;
        else
          throw new TypeError("timezone must be ICAL.Timezone or ICAL.Component");
      },
      /**
       * Removes a timezone by its tzid from the list.
       *
       * @param {String} tzid     Timezone identifier (e.g. America/Los_Angeles)
       * @return {?ICAL.Timezone} The removed timezone, or null if not registered
       */
      remove: function(r) {
        return delete i[r];
      }
    };
    return t.reset(), t;
  }(), function() {
    e.Time = function(t, r) {
      this.wrappedJSObject = this;
      var a = this._time = /* @__PURE__ */ Object.create(null);
      a.year = 0, a.month = 1, a.day = 1, a.hour = 0, a.minute = 0, a.second = 0, a.isDate = !1, this.fromData(t, r);
    }, e.Time._dowCache = {}, e.Time._wnCache = {}, e.Time.prototype = {
      /**
       * The class identifier.
       * @constant
       * @type {String}
       * @default "icaltime"
       */
      icalclass: "icaltime",
      _cachedUnixTime: null,
      /**
       * The type name, to be used in the jCal object. This value may change and
       * is strictly defined by the {@link ICAL.Time#isDate isDate} member.
       * @readonly
       * @type {String}
       * @default "date-time"
       */
      get icaltype() {
        return this.isDate ? "date" : "date-time";
      },
      /**
       * The timezone for this time.
       * @type {ICAL.Timezone}
       */
      zone: null,
      /**
       * Internal uses to indicate that a change has been made and the next read
       * operation must attempt to normalize the value (for example changing the
       * day to 33).
       *
       * @type {Boolean}
       * @private
       */
      _pendingNormalization: !1,
      /**
       * Returns a clone of the time object.
       *
       * @return {ICAL.Time}              The cloned object
       */
      clone: function() {
        return new e.Time(this._time, this.zone);
      },
      /**
       * Reset the time instance to epoch time
       */
      reset: function() {
        this.fromData(e.Time.epochTime), this.zone = e.Timezone.utcTimezone;
      },
      /**
       * Reset the time instance to the given date/time values.
       *
       * @param {Number} year             The year to set
       * @param {Number} month            The month to set
       * @param {Number} day              The day to set
       * @param {Number} hour             The hour to set
       * @param {Number} minute           The minute to set
       * @param {Number} second           The second to set
       * @param {ICAL.Timezone} timezone  The timezone to set
       */
      resetTo: function(t, r, a, s, u, o, f) {
        this.fromData({
          year: t,
          month: r,
          day: a,
          hour: s,
          minute: u,
          second: o,
          zone: f
        });
      },
      /**
       * Set up the current instance from the Javascript date value.
       *
       * @param {?Date} aDate     The Javascript Date to read, or null to reset
       * @param {Boolean} useUTC  If true, the UTC values of the date will be used
       */
      fromJSDate: function(t, r) {
        return t ? r ? (this.zone = e.Timezone.utcTimezone, this.year = t.getUTCFullYear(), this.month = t.getUTCMonth() + 1, this.day = t.getUTCDate(), this.hour = t.getUTCHours(), this.minute = t.getUTCMinutes(), this.second = t.getUTCSeconds()) : (this.zone = e.Timezone.localTimezone, this.year = t.getFullYear(), this.month = t.getMonth() + 1, this.day = t.getDate(), this.hour = t.getHours(), this.minute = t.getMinutes(), this.second = t.getSeconds()) : this.reset(), this._cachedUnixTime = null, this;
      },
      /**
       * Sets up the current instance using members from the passed data object.
       *
       * @param {Object} aData            Time initialization
       * @param {Number=} aData.year      The year for this date
       * @param {Number=} aData.month     The month for this date
       * @param {Number=} aData.day       The day for this date
       * @param {Number=} aData.hour      The hour for this date
       * @param {Number=} aData.minute    The minute for this date
       * @param {Number=} aData.second    The second for this date
       * @param {Boolean=} aData.isDate   If true, the instance represents a date
       *                                    (as opposed to a date-time)
       * @param {ICAL.Timezone=} aZone    Timezone this position occurs in
       */
      fromData: function(t, r) {
        if (t) {
          for (var a in t)
            if (Object.prototype.hasOwnProperty.call(t, a)) {
              if (a === "icaltype")
                continue;
              this[a] = t[a];
            }
        }
        if (r && (this.zone = r), t && !("isDate" in t) ? this.isDate = !("hour" in t) : t && "isDate" in t && (this.isDate = t.isDate), t && "timezone" in t) {
          var s = e.TimezoneService.get(
            t.timezone
          );
          this.zone = s || e.Timezone.localTimezone;
        }
        return t && "zone" in t && (this.zone = t.zone), this.zone || (this.zone = e.Timezone.localTimezone), this._cachedUnixTime = null, this;
      },
      /**
       * Calculate the day of week.
       * @param {ICAL.Time.weekDay=} aWeekStart
       *        The week start weekday, defaults to SUNDAY
       * @return {ICAL.Time.weekDay}
       */
      dayOfWeek: function(t) {
        var r = t || e.Time.SUNDAY, a = (this.year << 12) + (this.month << 8) + (this.day << 3) + r;
        if (a in e.Time._dowCache)
          return e.Time._dowCache[a];
        var s = this.day, u = this.month + (this.month < 3 ? 12 : 0), o = this.year - (this.month < 3 ? 1 : 0), f = s + o + e.helpers.trunc((u + 1) * 26 / 10) + e.helpers.trunc(o / 4);
        return f += e.helpers.trunc(o / 100) * 6 + e.helpers.trunc(o / 400), f = (f + 7 - r) % 7 + 1, e.Time._dowCache[a] = f, f;
      },
      /**
       * Calculate the day of year.
       * @return {Number}
       */
      dayOfYear: function() {
        var t = e.Time.isLeapYear(this.year) ? 1 : 0, r = e.Time.daysInYearPassedMonth;
        return r[t][this.month - 1] + this.day;
      },
      /**
       * Returns a copy of the current date/time, rewound to the start of the
       * week. The resulting ICAL.Time instance is of icaltype date, even if this
       * is a date-time.
       *
       * @param {ICAL.Time.weekDay=} aWeekStart
       *        The week start weekday, defaults to SUNDAY
       * @return {ICAL.Time}      The start of the week (cloned)
       */
      startOfWeek: function(t) {
        var r = t || e.Time.SUNDAY, a = this.clone();
        return a.day -= (this.dayOfWeek() + 7 - r) % 7, a.isDate = !0, a.hour = 0, a.minute = 0, a.second = 0, a;
      },
      /**
       * Returns a copy of the current date/time, shifted to the end of the week.
       * The resulting ICAL.Time instance is of icaltype date, even if this is a
       * date-time.
       *
       * @param {ICAL.Time.weekDay=} aWeekStart
       *        The week start weekday, defaults to SUNDAY
       * @return {ICAL.Time}      The end of the week (cloned)
       */
      endOfWeek: function(t) {
        var r = t || e.Time.SUNDAY, a = this.clone();
        return a.day += (7 - this.dayOfWeek() + r - e.Time.SUNDAY) % 7, a.isDate = !0, a.hour = 0, a.minute = 0, a.second = 0, a;
      },
      /**
       * Returns a copy of the current date/time, rewound to the start of the
       * month. The resulting ICAL.Time instance is of icaltype date, even if
       * this is a date-time.
       *
       * @return {ICAL.Time}      The start of the month (cloned)
       */
      startOfMonth: function() {
        var t = this.clone();
        return t.day = 1, t.isDate = !0, t.hour = 0, t.minute = 0, t.second = 0, t;
      },
      /**
       * Returns a copy of the current date/time, shifted to the end of the
       * month.  The resulting ICAL.Time instance is of icaltype date, even if
       * this is a date-time.
       *
       * @return {ICAL.Time}      The end of the month (cloned)
       */
      endOfMonth: function() {
        var t = this.clone();
        return t.day = e.Time.daysInMonth(t.month, t.year), t.isDate = !0, t.hour = 0, t.minute = 0, t.second = 0, t;
      },
      /**
       * Returns a copy of the current date/time, rewound to the start of the
       * year. The resulting ICAL.Time instance is of icaltype date, even if
       * this is a date-time.
       *
       * @return {ICAL.Time}      The start of the year (cloned)
       */
      startOfYear: function() {
        var t = this.clone();
        return t.day = 1, t.month = 1, t.isDate = !0, t.hour = 0, t.minute = 0, t.second = 0, t;
      },
      /**
       * Returns a copy of the current date/time, shifted to the end of the
       * year.  The resulting ICAL.Time instance is of icaltype date, even if
       * this is a date-time.
       *
       * @return {ICAL.Time}      The end of the year (cloned)
       */
      endOfYear: function() {
        var t = this.clone();
        return t.day = 31, t.month = 12, t.isDate = !0, t.hour = 0, t.minute = 0, t.second = 0, t;
      },
      /**
       * First calculates the start of the week, then returns the day of year for
       * this date. If the day falls into the previous year, the day is zero or negative.
       *
       * @param {ICAL.Time.weekDay=} aFirstDayOfWeek
       *        The week start weekday, defaults to SUNDAY
       * @return {Number}     The calculated day of year
       */
      startDoyWeek: function(t) {
        var r = t || e.Time.SUNDAY, a = this.dayOfWeek() - r;
        return a < 0 && (a += 7), this.dayOfYear() - a;
      },
      /**
       * Get the dominical letter for the current year. Letters range from A - G
       * for common years, and AG to GF for leap years.
       *
       * @param {Number} yr           The year to retrieve the letter for
       * @return {String}             The dominical letter.
       */
      getDominicalLetter: function() {
        return e.Time.getDominicalLetter(this.year);
      },
      /**
       * Finds the nthWeekDay relative to the current month (not day).  The
       * returned value is a day relative the month that this month belongs to so
       * 1 would indicate the first of the month and 40 would indicate a day in
       * the following month.
       *
       * @param {Number} aDayOfWeek   Day of the week see the day name constants
       * @param {Number} aPos         Nth occurrence of a given week day values
       *        of 1 and 0 both indicate the first weekday of that type. aPos may
       *        be either positive or negative
       *
       * @return {Number} numeric value indicating a day relative
       *                   to the current month of this time object
       */
      nthWeekDay: function(t, r) {
        var a = e.Time.daysInMonth(this.month, this.year), s, u = r, o = 0, f = this.clone();
        if (u >= 0) {
          f.day = 1, u != 0 && u--, o = f.day;
          var m = f.dayOfWeek(), l = t - m;
          l < 0 && (l += 7), o += l, o -= t, s = t;
        } else {
          f.day = a;
          var v = f.dayOfWeek();
          u++, s = v - t, s < 0 && (s += 7), s = a - s;
        }
        return s += u * 7, o + s;
      },
      /**
       * Checks if current time is the nth weekday, relative to the current
       * month.  Will always return false when rule resolves outside of current
       * month.
       *
       * @param {ICAL.Time.weekDay} aDayOfWeek       Day of week to check
       * @param {Number} aPos                        Relative position
       * @return {Boolean}                           True, if it is the nth weekday
       */
      isNthWeekDay: function(i, t) {
        var r = this.dayOfWeek();
        if (t === 0 && r === i)
          return !0;
        var a = this.nthWeekDay(i, t);
        return a === this.day;
      },
      /**
       * Calculates the ISO 8601 week number. The first week of a year is the
       * week that contains the first Thursday. The year can have 53 weeks, if
       * January 1st is a Friday.
       *
       * Note there are regions where the first week of the year is the one that
       * starts on January 1st, which may offset the week number. Also, if a
       * different week start is specified, this will also affect the week
       * number.
       *
       * @see ICAL.Time.weekOneStarts
       * @param {ICAL.Time.weekDay} aWeekStart        The weekday the week starts with
       * @return {Number}                             The ISO week number
       */
      weekNumber: function(t) {
        var r = (this.year << 12) + (this.month << 8) + (this.day << 3) + t;
        if (r in e.Time._wnCache)
          return e.Time._wnCache[r];
        var a, s = this.clone();
        s.isDate = !0;
        var u = this.year;
        s.month == 12 && s.day > 25 ? (a = e.Time.weekOneStarts(u + 1, t), s.compare(a) < 0 ? a = e.Time.weekOneStarts(u, t) : u++) : (a = e.Time.weekOneStarts(u, t), s.compare(a) < 0 && (a = e.Time.weekOneStarts(--u, t)));
        var o = s.subtractDate(a).toSeconds() / 86400, f = e.helpers.trunc(o / 7) + 1;
        return e.Time._wnCache[r] = f, f;
      },
      /**
       * Adds the duration to the current time. The instance is modified in
       * place.
       *
       * @param {ICAL.Duration} aDuration         The duration to add
       */
      addDuration: function(t) {
        var r = t.isNegative ? -1 : 1, a = this.second, s = this.minute, u = this.hour, o = this.day;
        a += r * t.seconds, s += r * t.minutes, u += r * t.hours, o += r * t.days, o += r * 7 * t.weeks, this.second = a, this.minute = s, this.hour = u, this.day = o, this._cachedUnixTime = null;
      },
      /**
       * Subtract the date details (_excluding_ timezone).  Useful for finding
       * the relative difference between two time objects excluding their
       * timezone differences.
       *
       * @param {ICAL.Time} aDate     The date to substract
       * @return {ICAL.Duration}      The difference as a duration
       */
      subtractDate: function(t) {
        var r = this.toUnixTime() + this.utcOffset(), a = t.toUnixTime() + t.utcOffset();
        return e.Duration.fromSeconds(r - a);
      },
      /**
       * Subtract the date details, taking timezones into account.
       *
       * @param {ICAL.Time} aDate  The date to subtract
       * @return {ICAL.Duration}  The difference in duration
       */
      subtractDateTz: function(t) {
        var r = this.toUnixTime(), a = t.toUnixTime();
        return e.Duration.fromSeconds(r - a);
      },
      /**
       * Compares the ICAL.Time instance with another one.
       *
       * @param {ICAL.Duration} aOther        The instance to compare with
       * @return {Number}                     -1, 0 or 1 for less/equal/greater
       */
      compare: function(t) {
        var r = this.toUnixTime(), a = t.toUnixTime();
        return r > a ? 1 : a > r ? -1 : 0;
      },
      /**
       * Compares only the date part of this instance with another one.
       *
       * @param {ICAL.Duration} other         The instance to compare with
       * @param {ICAL.Timezone} tz            The timezone to compare in
       * @return {Number}                     -1, 0 or 1 for less/equal/greater
       */
      compareDateOnlyTz: function(t, r) {
        function a(f) {
          return e.Time._cmp_attr(s, u, f);
        }
        var s = this.convertToZone(r), u = t.convertToZone(r), o = 0;
        return (o = a("year")) != 0 || (o = a("month")) != 0 || (o = a("day")) != 0, o;
      },
      /**
       * Convert the instance into another timezone. The returned ICAL.Time
       * instance is always a copy.
       *
       * @param {ICAL.Timezone} zone      The zone to convert to
       * @return {ICAL.Time}              The copy, converted to the zone
       */
      convertToZone: function(t) {
        var r = this.clone(), a = this.zone.tzid == t.tzid;
        return !this.isDate && !a && e.Timezone.convert_time(r, this.zone, t), r.zone = t, r;
      },
      /**
       * Calculates the UTC offset of the current date/time in the timezone it is
       * in.
       *
       * @return {Number}     UTC offset in seconds
       */
      utcOffset: function() {
        return this.zone == e.Timezone.localTimezone || this.zone == e.Timezone.utcTimezone ? 0 : this.zone.utcOffset(this);
      },
      /**
       * Returns an RFC 5545 compliant ical representation of this object.
       *
       * @return {String} ical date/date-time
       */
      toICALString: function() {
        var i = this.toString();
        return i.length > 10 ? e.design.icalendar.value["date-time"].toICAL(i) : e.design.icalendar.value.date.toICAL(i);
      },
      /**
       * The string representation of this date/time, in jCal form
       * (including : and - separators).
       * @return {String}
       */
      toString: function() {
        var t = this.year + "-" + e.helpers.pad2(this.month) + "-" + e.helpers.pad2(this.day);
        return this.isDate || (t += "T" + e.helpers.pad2(this.hour) + ":" + e.helpers.pad2(this.minute) + ":" + e.helpers.pad2(this.second), this.zone === e.Timezone.utcTimezone && (t += "Z")), t;
      },
      /**
       * Converts the current instance to a Javascript date
       * @return {Date}
       */
      toJSDate: function() {
        return this.zone == e.Timezone.localTimezone ? this.isDate ? new Date(this.year, this.month - 1, this.day) : new Date(
          this.year,
          this.month - 1,
          this.day,
          this.hour,
          this.minute,
          this.second,
          0
        ) : new Date(this.toUnixTime() * 1e3);
      },
      _normalize: function() {
        return this._time.isDate, this._time.isDate && (this._time.hour = 0, this._time.minute = 0, this._time.second = 0), this.adjust(0, 0, 0, 0), this;
      },
      /**
       * Adjust the date/time by the given offset
       *
       * @param {Number} aExtraDays       The extra amount of days
       * @param {Number} aExtraHours      The extra amount of hours
       * @param {Number} aExtraMinutes    The extra amount of minutes
       * @param {Number} aExtraSeconds    The extra amount of seconds
       * @param {Number=} aTime           The time to adjust, defaults to the
       *                                    current instance.
       */
      adjust: function(t, r, a, s, u) {
        var o, f, m = 0, l = 0, v, h, c, T, y, p = u || this._time;
        if (p.isDate || (v = p.second + s, p.second = v % 60, o = e.helpers.trunc(v / 60), p.second < 0 && (p.second += 60, o--), h = p.minute + a + o, p.minute = h % 60, f = e.helpers.trunc(h / 60), p.minute < 0 && (p.minute += 60, f--), c = p.hour + r + f, p.hour = c % 24, m = e.helpers.trunc(c / 24), p.hour < 0 && (p.hour += 24, m--)), p.month > 12 ? l = e.helpers.trunc((p.month - 1) / 12) : p.month < 1 && (l = e.helpers.trunc(p.month / 12) - 1), p.year += l, p.month -= 12 * l, T = p.day + t + m, T > 0)
          for (; y = e.Time.daysInMonth(p.month, p.year), !(T <= y); )
            p.month++, p.month > 12 && (p.year++, p.month = 1), T -= y;
        else
          for (; T <= 0; )
            p.month == 1 ? (p.year--, p.month = 12) : p.month--, T += e.Time.daysInMonth(p.month, p.year);
        return p.day = T, this._cachedUnixTime = null, this;
      },
      /**
       * Sets up the current instance from unix time, the number of seconds since
       * January 1st, 1970.
       *
       * @param {Number} seconds      The seconds to set up with
       */
      fromUnixTime: function(t) {
        this.zone = e.Timezone.utcTimezone;
        var r = e.Time.epochTime.clone();
        r.adjust(0, 0, 0, t), this.year = r.year, this.month = r.month, this.day = r.day, this.hour = r.hour, this.minute = r.minute, this.second = Math.floor(r.second), this._cachedUnixTime = null;
      },
      /**
       * Converts the current instance to seconds since January 1st 1970.
       *
       * @return {Number}         Seconds since 1970
       */
      toUnixTime: function() {
        if (this._cachedUnixTime !== null)
          return this._cachedUnixTime;
        var t = this.utcOffset(), r = Date.UTC(
          this.year,
          this.month - 1,
          this.day,
          this.hour,
          this.minute,
          this.second - t
        );
        return this._cachedUnixTime = r / 1e3, this._cachedUnixTime;
      },
      /**
       * Converts time to into Object which can be serialized then re-created
       * using the constructor.
       *
       * @example
       * // toJSON will automatically be called
       * var json = JSON.stringify(mytime);
       *
       * var deserialized = JSON.parse(json);
       *
       * var time = new ICAL.Time(deserialized);
       *
       * @return {Object}
       */
      toJSON: function() {
        for (var i = [
          "year",
          "month",
          "day",
          "hour",
          "minute",
          "second",
          "isDate"
        ], t = /* @__PURE__ */ Object.create(null), r = 0, a = i.length, s; r < a; r++)
          s = i[r], t[s] = this[s];
        return this.zone && (t.timezone = this.zone.tzid), t;
      }
    }, function() {
      function t(r) {
        Object.defineProperty(e.Time.prototype, r, {
          get: function() {
            return this._pendingNormalization && (this._normalize(), this._pendingNormalization = !1), this._time[r];
          },
          set: function(s) {
            return r === "isDate" && s && !this._time.isDate && this.adjust(0, 0, 0, 0), this._cachedUnixTime = null, this._pendingNormalization = !0, this._time[r] = s, s;
          }
        });
      }
      "defineProperty" in Object && (t("year"), t("month"), t("day"), t("hour"), t("minute"), t("second"), t("isDate"));
    }(), e.Time.daysInMonth = function(t, r) {
      var a = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], s = 30;
      return t < 1 || t > 12 || (s = a[t], t == 2 && (s += e.Time.isLeapYear(r))), s;
    }, e.Time.isLeapYear = function(t) {
      return t <= 1752 ? t % 4 == 0 : t % 4 == 0 && t % 100 != 0 || t % 400 == 0;
    }, e.Time.fromDayOfYear = function(t, r) {
      var a = r, s = t, u = new e.Time();
      u.auto_normalize = !1;
      var o = e.Time.isLeapYear(a) ? 1 : 0;
      if (s < 1)
        return a--, o = e.Time.isLeapYear(a) ? 1 : 0, s += e.Time.daysInYearPassedMonth[o][12], e.Time.fromDayOfYear(s, a);
      if (s > e.Time.daysInYearPassedMonth[o][12])
        return o = e.Time.isLeapYear(a) ? 1 : 0, s -= e.Time.daysInYearPassedMonth[o][12], a++, e.Time.fromDayOfYear(s, a);
      u.year = a, u.isDate = !0;
      for (var f = 11; f >= 0; f--)
        if (s > e.Time.daysInYearPassedMonth[o][f]) {
          u.month = f + 1, u.day = s - e.Time.daysInYearPassedMonth[o][f];
          break;
        }
      return u.auto_normalize = !0, u;
    }, e.Time.fromStringv2 = function(t) {
      return new e.Time({
        year: parseInt(t.substr(0, 4), 10),
        month: parseInt(t.substr(5, 2), 10),
        day: parseInt(t.substr(8, 2), 10),
        isDate: !0
      });
    }, e.Time.fromDateString = function(i) {
      return new e.Time({
        year: e.helpers.strictParseInt(i.substr(0, 4)),
        month: e.helpers.strictParseInt(i.substr(5, 2)),
        day: e.helpers.strictParseInt(i.substr(8, 2)),
        isDate: !0
      });
    }, e.Time.fromDateTimeString = function(i, t) {
      if (i.length < 19)
        throw new Error(
          'invalid date-time value: "' + i + '"'
        );
      var r;
      i[19] && i[19] === "Z" ? r = "Z" : t && (r = t.getParameter("tzid"));
      var a = new e.Time({
        year: e.helpers.strictParseInt(i.substr(0, 4)),
        month: e.helpers.strictParseInt(i.substr(5, 2)),
        day: e.helpers.strictParseInt(i.substr(8, 2)),
        hour: e.helpers.strictParseInt(i.substr(11, 2)),
        minute: e.helpers.strictParseInt(i.substr(14, 2)),
        second: e.helpers.strictParseInt(i.substr(17, 2)),
        timezone: r
      });
      return a;
    }, e.Time.fromString = function(t, r) {
      return t.length > 10 ? e.Time.fromDateTimeString(t, r) : e.Time.fromDateString(t);
    }, e.Time.fromJSDate = function(t, r) {
      var a = new e.Time();
      return a.fromJSDate(t, r);
    }, e.Time.fromData = function(t, r) {
      var a = new e.Time();
      return a.fromData(t, r);
    }, e.Time.now = function() {
      return e.Time.fromJSDate(/* @__PURE__ */ new Date(), !1);
    }, e.Time.weekOneStarts = function(t, r) {
      var a = e.Time.fromData({
        year: t,
        month: 1,
        day: 1,
        isDate: !0
      }), s = a.dayOfWeek(), u = r || e.Time.DEFAULT_WEEK_START;
      return s > e.Time.THURSDAY && (a.day += 7), u > e.Time.THURSDAY && (a.day -= 7), a.day -= s - u, a;
    }, e.Time.getDominicalLetter = function(i) {
      var t = "GFEDCBA", r = (i + (i / 4 | 0) + (i / 400 | 0) - (i / 100 | 0) - 1) % 7, a = e.Time.isLeapYear(i);
      return a ? t[(r + 6) % 7] + t[r] : t[r];
    }, e.Time.epochTime = e.Time.fromData({
      year: 1970,
      month: 1,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0,
      isDate: !1,
      timezone: "Z"
    }), e.Time._cmp_attr = function(t, r, a) {
      return t[a] > r[a] ? 1 : t[a] < r[a] ? -1 : 0;
    }, e.Time.daysInYearPassedMonth = [
      [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365],
      [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366]
    ], e.Time.SUNDAY = 1, e.Time.MONDAY = 2, e.Time.TUESDAY = 3, e.Time.WEDNESDAY = 4, e.Time.THURSDAY = 5, e.Time.FRIDAY = 6, e.Time.SATURDAY = 7, e.Time.DEFAULT_WEEK_START = e.Time.MONDAY;
  }(), function() {
    e.VCardTime = function(i, t, r) {
      this.wrappedJSObject = this;
      var a = this._time = /* @__PURE__ */ Object.create(null);
      a.year = null, a.month = null, a.day = null, a.hour = null, a.minute = null, a.second = null, this.icaltype = r || "date-and-or-time", this.fromData(i, t);
    }, e.helpers.inherits(
      e.Time,
      e.VCardTime,
      /** @lends ICAL.VCardTime */
      {
        /**
         * The class identifier.
         * @constant
         * @type {String}
         * @default "vcardtime"
         */
        icalclass: "vcardtime",
        /**
         * The type name, to be used in the jCal object.
         * @type {String}
         * @default "date-and-or-time"
         */
        icaltype: "date-and-or-time",
        /**
         * The timezone. This can either be floating, UTC, or an instance of
         * ICAL.UtcOffset.
         * @type {ICAL.Timezone|ICAL.UtcOFfset}
         */
        zone: null,
        /**
         * Returns a clone of the vcard date/time object.
         *
         * @return {ICAL.VCardTime}     The cloned object
         */
        clone: function() {
          return new e.VCardTime(this._time, this.zone, this.icaltype);
        },
        _normalize: function() {
          return this;
        },
        /**
         * @inheritdoc
         */
        utcOffset: function() {
          return this.zone instanceof e.UtcOffset ? this.zone.toSeconds() : e.Time.prototype.utcOffset.apply(this, arguments);
        },
        /**
         * Returns an RFC 6350 compliant representation of this object.
         *
         * @return {String}         vcard date/time string
         */
        toICALString: function() {
          return e.design.vcard.value[this.icaltype].toICAL(this.toString());
        },
        /**
         * The string representation of this date/time, in jCard form
         * (including : and - separators).
         * @return {String}
         */
        toString: function() {
          var t = e.helpers.pad2, r = this.year, a = this.month, s = this.day, u = this.hour, o = this.minute, f = this.second, m = r !== null, l = a !== null, v = s !== null, h = u !== null, c = o !== null, T = f !== null, y = (m ? t(r) + (l || v ? "-" : "") : l || v ? "--" : "") + (l ? t(a) : "") + (v ? "-" + t(s) : ""), p = (h ? t(u) : "-") + (h && c ? ":" : "") + (c ? t(o) : "") + (!h && !c ? "-" : "") + (c && T ? ":" : "") + (T ? t(f) : ""), S;
          if (this.zone === e.Timezone.utcTimezone)
            S = "Z";
          else if (this.zone instanceof e.UtcOffset)
            S = this.zone.toString();
          else if (this.zone === e.Timezone.localTimezone)
            S = "";
          else if (this.zone instanceof e.Timezone) {
            var E = e.UtcOffset.fromSeconds(this.zone.utcOffset(this));
            S = E.toString();
          } else
            S = "";
          switch (this.icaltype) {
            case "time":
              return p + S;
            case "date-and-or-time":
            case "date-time":
              return y + (p == "--" ? "" : "T" + p + S);
            case "date":
              return y;
          }
          return null;
        }
      }
    ), e.VCardTime.fromDateAndOrTimeString = function(i, t) {
      function r(y, p, S) {
        return y ? e.helpers.strictParseInt(y.substr(p, S)) : null;
      }
      var a = i.split("T"), s = a[0], u = a[1], o = u ? e.design.vcard.value.time._splitZone(u) : [], f = o[0], m = o[1];
      e.helpers.strictParseInt;
      var l = s ? s.length : 0, v = m ? m.length : 0, h = s && s[0] == "-" && s[1] == "-", c = m && m[0] == "-", T = {
        year: h ? null : r(s, 0, 4),
        month: h && (l == 4 || l == 7) ? r(s, 2, 2) : l == 7 || l == 10 ? r(s, 5, 2) : null,
        day: l == 5 ? r(s, 3, 2) : l == 7 && h ? r(s, 5, 2) : l == 10 ? r(s, 8, 2) : null,
        hour: c ? null : r(m, 0, 2),
        minute: c && v == 3 ? r(m, 1, 2) : v > 4 ? c ? r(m, 1, 2) : r(m, 3, 2) : null,
        second: v == 4 ? r(m, 2, 2) : v == 6 ? r(m, 4, 2) : v == 8 ? r(m, 6, 2) : null
      };
      return f == "Z" ? f = e.Timezone.utcTimezone : f && f[3] == ":" ? f = e.UtcOffset.fromString(f) : f = null, new e.VCardTime(T, f, t);
    };
  }(), function() {
    var i = {
      SU: e.Time.SUNDAY,
      MO: e.Time.MONDAY,
      TU: e.Time.TUESDAY,
      WE: e.Time.WEDNESDAY,
      TH: e.Time.THURSDAY,
      FR: e.Time.FRIDAY,
      SA: e.Time.SATURDAY
    }, t = {};
    for (var r in i)
      i.hasOwnProperty(r) && (t[i[r]] = r);
    e.Recur = function(v) {
      this.wrappedJSObject = this, this.parts = {}, v && typeof v == "object" && this.fromData(v);
    }, e.Recur.prototype = {
      /**
       * An object holding the BY-parts of the recurrence rule
       * @type {Object}
       */
      parts: null,
      /**
       * The interval value for the recurrence rule.
       * @type {Number}
       */
      interval: 1,
      /**
       * The week start day
       *
       * @type {ICAL.Time.weekDay}
       * @default ICAL.Time.MONDAY
       */
      wkst: e.Time.MONDAY,
      /**
       * The end of the recurrence
       * @type {?ICAL.Time}
       */
      until: null,
      /**
       * The maximum number of occurrences
       * @type {?Number}
       */
      count: null,
      /**
       * The frequency value.
       * @type {ICAL.Recur.frequencyValues}
       */
      freq: null,
      /**
       * The class identifier.
       * @constant
       * @type {String}
       * @default "icalrecur"
       */
      icalclass: "icalrecur",
      /**
       * The type name, to be used in the jCal object.
       * @constant
       * @type {String}
       * @default "recur"
       */
      icaltype: "recur",
      /**
       * Create a new iterator for this recurrence rule. The passed start date
       * must be the start date of the event, not the start of the range to
       * search in.
       *
       * @example
       * var recur = comp.getFirstPropertyValue('rrule');
       * var dtstart = comp.getFirstPropertyValue('dtstart');
       * var iter = recur.iterator(dtstart);
       * for (var next = iter.next(); next; next = iter.next()) {
       *   if (next.compare(rangeStart) < 0) {
       *     continue;
       *   }
       *   console.log(next.toString());
       * }
       *
       * @param {ICAL.Time} aStart        The item's start date
       * @return {ICAL.RecurIterator}     The recurrence iterator
       */
      iterator: function(l) {
        return new e.RecurIterator({
          rule: this,
          dtstart: l
        });
      },
      /**
       * Returns a clone of the recurrence object.
       *
       * @return {ICAL.Recur}      The cloned object
       */
      clone: function() {
        return new e.Recur(this.toJSON());
      },
      /**
       * Checks if the current rule is finite, i.e. has a count or until part.
       *
       * @return {Boolean}        True, if the rule is finite
       */
      isFinite: function() {
        return !!(this.count || this.until);
      },
      /**
       * Checks if the current rule has a count part, and not limited by an until
       * part.
       *
       * @return {Boolean}        True, if the rule is by count
       */
      isByCount: function() {
        return !!(this.count && !this.until);
      },
      /**
       * Adds a component (part) to the recurrence rule. This is not a component
       * in the sense of {@link ICAL.Component}, but a part of the recurrence
       * rule, i.e. BYMONTH.
       *
       * @param {String} aType            The name of the component part
       * @param {Array|String} aValue     The component value
       */
      addComponent: function(v, h) {
        var c = v.toUpperCase();
        c in this.parts ? this.parts[c].push(h) : this.parts[c] = [h];
      },
      /**
       * Sets the component value for the given by-part.
       *
       * @param {String} aType        The component part name
       * @param {Array} aValues       The component values
       */
      setComponent: function(v, h) {
        this.parts[v.toUpperCase()] = h.slice();
      },
      /**
       * Gets (a copy) of the requested component value.
       *
       * @param {String} aType        The component part name
       * @return {Array}              The component part value
       */
      getComponent: function(v) {
        var h = v.toUpperCase();
        return h in this.parts ? this.parts[h].slice() : [];
      },
      /**
       * Retrieves the next occurrence after the given recurrence id. See the
       * guide on {@tutorial terminology} for more details.
       *
       * NOTE: Currently, this method iterates all occurrences from the start
       * date. It should not be called in a loop for performance reasons. If you
       * would like to get more than one occurrence, you can iterate the
       * occurrences manually, see the example on the
       * {@link ICAL.Recur#iterator iterator} method.
       *
       * @param {ICAL.Time} aStartTime        The start of the event series
       * @param {ICAL.Time} aRecurrenceId     The date of the last occurrence
       * @return {ICAL.Time}                  The next occurrence after
       */
      getNextOccurrence: function(v, h) {
        var c = this.iterator(v), T;
        do
          T = c.next();
        while (T && T.compare(h) <= 0);
        return T && h.zone && (T.zone = h.zone), T;
      },
      /**
       * Sets up the current instance using members from the passed data object.
       *
       * @param {Object} data                               An object with members of the recurrence
       * @param {ICAL.Recur.frequencyValues=} data.freq     The frequency value
       * @param {Number=} data.interval                     The INTERVAL value
       * @param {ICAL.Time.weekDay=} data.wkst              The week start value
       * @param {ICAL.Time=} data.until                     The end of the recurrence set
       * @param {Number=} data.count                        The number of occurrences
       * @param {Array.<Number>=} data.bysecond             The seconds for the BYSECOND part
       * @param {Array.<Number>=} data.byminute             The minutes for the BYMINUTE part
       * @param {Array.<Number>=} data.byhour               The hours for the BYHOUR part
       * @param {Array.<String>=} data.byday                The BYDAY values
       * @param {Array.<Number>=} data.bymonthday           The days for the BYMONTHDAY part
       * @param {Array.<Number>=} data.byyearday            The days for the BYYEARDAY part
       * @param {Array.<Number>=} data.byweekno             The weeks for the BYWEEKNO part
       * @param {Array.<Number>=} data.bymonth              The month for the BYMONTH part
       * @param {Array.<Number>=} data.bysetpos             The positionals for the BYSETPOS part
       */
      fromData: function(l) {
        for (var v in l) {
          var h = v.toUpperCase();
          h in m ? Array.isArray(l[v]) ? this.parts[h] = l[v] : this.parts[h] = [l[v]] : this[v] = l[v];
        }
        this.interval && typeof this.interval != "number" && f.INTERVAL(this.interval, this), this.wkst && typeof this.wkst != "number" && (this.wkst = e.Recur.icalDayToNumericDay(this.wkst)), this.until && !(this.until instanceof e.Time) && (this.until = e.Time.fromString(this.until));
      },
      /**
       * The jCal representation of this recurrence type.
       * @return {Object}
       */
      toJSON: function() {
        var l = /* @__PURE__ */ Object.create(null);
        l.freq = this.freq, this.count && (l.count = this.count), this.interval > 1 && (l.interval = this.interval);
        for (var v in this.parts)
          if (this.parts.hasOwnProperty(v)) {
            var h = this.parts[v];
            Array.isArray(h) && h.length == 1 ? l[v.toLowerCase()] = h[0] : l[v.toLowerCase()] = e.helpers.clone(this.parts[v]);
          }
        return this.until && (l.until = this.until.toString()), "wkst" in this && this.wkst !== e.Time.DEFAULT_WEEK_START && (l.wkst = e.Recur.numericDayToIcalDay(this.wkst)), l;
      },
      /**
       * The string representation of this recurrence rule.
       * @return {String}
       */
      toString: function() {
        var v = "FREQ=" + this.freq;
        this.count && (v += ";COUNT=" + this.count), this.interval > 1 && (v += ";INTERVAL=" + this.interval);
        for (var h in this.parts)
          this.parts.hasOwnProperty(h) && (v += ";" + h + "=" + this.parts[h]);
        return this.until && (v += ";UNTIL=" + this.until.toICALString()), "wkst" in this && this.wkst !== e.Time.DEFAULT_WEEK_START && (v += ";WKST=" + e.Recur.numericDayToIcalDay(this.wkst)), v;
      }
    };
    function a(l, v, h, c) {
      var T = c;
      if (c[0] === "+" && (T = c.substr(1)), T = e.helpers.strictParseInt(T), v !== void 0 && c < v)
        throw new Error(
          l + ': invalid value "' + c + '" must be > ' + v
        );
      if (h !== void 0 && c > h)
        throw new Error(
          l + ': invalid value "' + c + '" must be < ' + v
        );
      return T;
    }
    e.Recur.icalDayToNumericDay = function(v, h) {
      var c = h || e.Time.SUNDAY;
      return (i[v] - c + 7) % 7 + 1;
    }, e.Recur.numericDayToIcalDay = function(v, h) {
      var c = h || e.Time.SUNDAY, T = v + c - e.Time.SUNDAY;
      return T > 7 && (T -= 7), t[T];
    };
    var s = /^(SU|MO|TU|WE|TH|FR|SA)$/, u = /^([+-])?(5[0-3]|[1-4][0-9]|[1-9])?(SU|MO|TU|WE|TH|FR|SA)$/, o = [
      "SECONDLY",
      "MINUTELY",
      "HOURLY",
      "DAILY",
      "WEEKLY",
      "MONTHLY",
      "YEARLY"
    ], f = {
      FREQ: function(l, v, h) {
        if (o.indexOf(l) !== -1)
          v.freq = l;
        else
          throw new Error(
            'invalid frequency "' + l + '" expected: "' + o.join(", ") + '"'
          );
      },
      COUNT: function(l, v, h) {
        v.count = e.helpers.strictParseInt(l);
      },
      INTERVAL: function(l, v, h) {
        v.interval = e.helpers.strictParseInt(l), v.interval < 1 && (v.interval = 1);
      },
      UNTIL: function(l, v, h) {
        l.length > 10 ? v.until = e.design.icalendar.value["date-time"].fromICAL(l) : v.until = e.design.icalendar.value.date.fromICAL(l), h || (v.until = e.Time.fromString(v.until));
      },
      WKST: function(l, v, h) {
        if (s.test(l))
          v.wkst = e.Recur.icalDayToNumericDay(l);
        else
          throw new Error('invalid WKST value "' + l + '"');
      }
    }, m = {
      BYSECOND: a.bind(this, "BYSECOND", 0, 60),
      BYMINUTE: a.bind(this, "BYMINUTE", 0, 59),
      BYHOUR: a.bind(this, "BYHOUR", 0, 23),
      BYDAY: function(l) {
        if (u.test(l))
          return l;
        throw new Error('invalid BYDAY value "' + l + '"');
      },
      BYMONTHDAY: a.bind(this, "BYMONTHDAY", -31, 31),
      BYYEARDAY: a.bind(this, "BYYEARDAY", -366, 366),
      BYWEEKNO: a.bind(this, "BYWEEKNO", -53, 53),
      BYMONTH: a.bind(this, "BYMONTH", 1, 12),
      BYSETPOS: a.bind(this, "BYSETPOS", -366, 366)
    };
    e.Recur.fromString = function(l) {
      var v = e.Recur._stringToData(l, !1);
      return new e.Recur(v);
    }, e.Recur.fromData = function(l) {
      return new e.Recur(l);
    }, e.Recur._stringToData = function(l, v) {
      for (var h = /* @__PURE__ */ Object.create(null), c = l.split(";"), T = c.length, y = 0; y < T; y++) {
        var p = c[y].split("="), S = p[0].toUpperCase(), E = p[0].toLowerCase(), b = v ? E : S, O = p[1];
        if (S in m) {
          for (var A = O.split(","), $ = 0, D = A.length; $ < D; $++)
            A[$] = m[S](A[$]);
          h[b] = A.length == 1 ? A[0] : A;
        } else
          S in f ? f[S](O, h, v) : h[E] = O;
      }
      return h;
    };
  }(), e.RecurIterator = function() {
    function i(t) {
      this.fromData(t);
    }
    return i.prototype = {
      /**
       * True when iteration is finished.
       * @type {Boolean}
       */
      completed: !1,
      /**
       * The rule that is being iterated
       * @type {ICAL.Recur}
       */
      rule: null,
      /**
       * The start date of the event being iterated.
       * @type {ICAL.Time}
       */
      dtstart: null,
      /**
       * The last occurrence that was returned from the
       * {@link ICAL.RecurIterator#next} method.
       * @type {ICAL.Time}
       */
      last: null,
      /**
       * The sequence number from the occurrence
       * @type {Number}
       */
      occurrence_number: 0,
      /**
       * The indices used for the {@link ICAL.RecurIterator#by_data} object.
       * @type {Object}
       * @private
       */
      by_indices: null,
      /**
       * If true, the iterator has already been initialized
       * @type {Boolean}
       * @private
       */
      initialized: !1,
      /**
       * The initializd by-data.
       * @type {Object}
       * @private
       */
      by_data: null,
      /**
       * The expanded yeardays
       * @type {Array}
       * @private
       */
      days: null,
      /**
       * The index in the {@link ICAL.RecurIterator#days} array.
       * @type {Number}
       * @private
       */
      days_index: 0,
      /**
       * Initialize the recurrence iterator from the passed data object. This
       * method is usually not called directly, you can initialize the iterator
       * through the constructor.
       *
       * @param {Object} options                The iterator options
       * @param {ICAL.Recur} options.rule       The rule to iterate.
       * @param {ICAL.Time} options.dtstart     The start date of the event.
       * @param {Boolean=} options.initialized  When true, assume that options are
       *        from a previously constructed iterator. Initialization will not be
       *        repeated.
       */
      fromData: function(t) {
        if (this.rule = e.helpers.formatClassType(t.rule, e.Recur), !this.rule)
          throw new Error("iterator requires a (ICAL.Recur) rule");
        if (this.dtstart = e.helpers.formatClassType(t.dtstart, e.Time), !this.dtstart)
          throw new Error("iterator requires a (ICAL.Time) dtstart");
        t.by_data ? this.by_data = t.by_data : this.by_data = e.helpers.clone(this.rule.parts, !0), t.occurrence_number && (this.occurrence_number = t.occurrence_number), this.days = t.days || [], t.last && (this.last = e.helpers.formatClassType(t.last, e.Time)), this.by_indices = t.by_indices, this.by_indices || (this.by_indices = {
          BYSECOND: 0,
          BYMINUTE: 0,
          BYHOUR: 0,
          BYDAY: 0,
          BYMONTH: 0,
          BYWEEKNO: 0,
          BYMONTHDAY: 0
        }), this.initialized = t.initialized || !1, this.initialized || this.init();
      },
      /**
       * Intialize the iterator
       * @private
       */
      init: function() {
        this.initialized = !0, this.last = this.dtstart.clone();
        var r = this.by_data;
        if ("BYDAY" in r && this.sort_byday_rules(r.BYDAY), "BYYEARDAY" in r && ("BYMONTH" in r || "BYWEEKNO" in r || "BYMONTHDAY" in r || "BYDAY" in r))
          throw new Error("Invalid BYYEARDAY rule");
        if ("BYWEEKNO" in r && "BYMONTHDAY" in r)
          throw new Error("BYWEEKNO does not fit to BYMONTHDAY");
        if (this.rule.freq == "MONTHLY" && ("BYYEARDAY" in r || "BYWEEKNO" in r))
          throw new Error("For MONTHLY recurrences neither BYYEARDAY nor BYWEEKNO may appear");
        if (this.rule.freq == "WEEKLY" && ("BYYEARDAY" in r || "BYMONTHDAY" in r))
          throw new Error("For WEEKLY recurrences neither BYMONTHDAY nor BYYEARDAY may appear");
        if (this.rule.freq != "YEARLY" && "BYYEARDAY" in r)
          throw new Error("BYYEARDAY may only appear in YEARLY rules");
        if (this.last.second = this.setup_defaults("BYSECOND", "SECONDLY", this.dtstart.second), this.last.minute = this.setup_defaults("BYMINUTE", "MINUTELY", this.dtstart.minute), this.last.hour = this.setup_defaults("BYHOUR", "HOURLY", this.dtstart.hour), this.last.day = this.setup_defaults("BYMONTHDAY", "DAILY", this.dtstart.day), this.last.month = this.setup_defaults("BYMONTH", "MONTHLY", this.dtstart.month), this.rule.freq == "WEEKLY")
          if ("BYDAY" in r) {
            var a = this.ruleDayOfWeek(r.BYDAY[0], this.rule.wkst), s = a[0], u = a[1], o = u - this.last.dayOfWeek(this.rule.wkst);
            (this.last.dayOfWeek(this.rule.wkst) < u && o >= 0 || o < 0) && (this.last.day += o);
          } else {
            var f = e.Recur.numericDayToIcalDay(this.dtstart.dayOfWeek());
            r.BYDAY = [f];
          }
        if (this.rule.freq == "YEARLY") {
          for (; this.expand_year_days(this.last.year), !(this.days.length > 0); )
            this.increment_year(this.rule.interval);
          this._nextByYearDay();
        }
        if (this.rule.freq == "MONTHLY" && this.has_by_data("BYDAY")) {
          var m = null, l = this.last.clone(), v = e.Time.daysInMonth(this.last.month, this.last.year);
          for (var h in this.by_data.BYDAY)
            if (this.by_data.BYDAY.hasOwnProperty(h)) {
              this.last = l.clone();
              var a = this.ruleDayOfWeek(this.by_data.BYDAY[h]), s = a[0], u = a[1], c = this.last.nthWeekDay(u, s);
              if (s >= 6 || s <= -6)
                throw new Error("Malformed values in BYDAY part");
              if (c > v || c <= 0) {
                if (m && m.month == l.month)
                  continue;
                for (; c > v || c <= 0; )
                  this.increment_month(), v = e.Time.daysInMonth(this.last.month, this.last.year), c = this.last.nthWeekDay(u, s);
              }
              this.last.day = c, (!m || this.last.compare(m) < 0) && (m = this.last.clone());
            }
          if (this.last = m.clone(), this.has_by_data("BYMONTHDAY") && this._byDayAndMonthDay(!0), this.last.day > v || this.last.day == 0)
            throw new Error("Malformed values in BYDAY part");
        } else if (this.has_by_data("BYMONTHDAY") && this.last.day < 0) {
          var v = e.Time.daysInMonth(this.last.month, this.last.year);
          this.last.day = v + this.last.day + 1;
        }
      },
      /**
       * Retrieve the next occurrence from the iterator.
       * @return {ICAL.Time}
       */
      next: function() {
        var r = this.last ? this.last.clone() : null;
        if (this.rule.count && this.occurrence_number >= this.rule.count || this.rule.until && this.last.compare(this.rule.until) > 0)
          return this.completed = !0, null;
        if (this.occurrence_number == 0 && this.last.compare(this.dtstart) >= 0)
          return this.occurrence_number++, this.last;
        var a;
        do
          switch (a = 1, this.rule.freq) {
            case "SECONDLY":
              this.next_second();
              break;
            case "MINUTELY":
              this.next_minute();
              break;
            case "HOURLY":
              this.next_hour();
              break;
            case "DAILY":
              this.next_day();
              break;
            case "WEEKLY":
              this.next_week();
              break;
            case "MONTHLY":
              a = this.next_month();
              break;
            case "YEARLY":
              this.next_year();
              break;
            default:
              return null;
          }
        while (!this.check_contracting_rules() || this.last.compare(this.dtstart) < 0 || !a);
        if (this.last.compare(r) == 0)
          throw new Error("Same occurrence found twice, protecting you from death by recursion");
        return this.rule.until && this.last.compare(this.rule.until) > 0 ? (this.completed = !0, null) : (this.occurrence_number++, this.last);
      },
      next_second: function() {
        return this.next_generic("BYSECOND", "SECONDLY", "second", "minute");
      },
      increment_second: function(r) {
        return this.increment_generic(r, "second", 60, "minute");
      },
      next_minute: function() {
        return this.next_generic(
          "BYMINUTE",
          "MINUTELY",
          "minute",
          "hour",
          "next_second"
        );
      },
      increment_minute: function(r) {
        return this.increment_generic(r, "minute", 60, "hour");
      },
      next_hour: function() {
        return this.next_generic(
          "BYHOUR",
          "HOURLY",
          "hour",
          "monthday",
          "next_minute"
        );
      },
      increment_hour: function(r) {
        this.increment_generic(r, "hour", 24, "monthday");
      },
      next_day: function() {
        "BYDAY" in this.by_data;
        var r = this.rule.freq == "DAILY";
        return this.next_hour() == 0 || (r ? this.increment_monthday(this.rule.interval) : this.increment_monthday(1)), 0;
      },
      next_week: function() {
        var r = 0;
        if (this.next_weekday_by_week() == 0)
          return r;
        if (this.has_by_data("BYWEEKNO")) {
          ++this.by_indices.BYWEEKNO, this.by_indices.BYWEEKNO == this.by_data.BYWEEKNO.length && (this.by_indices.BYWEEKNO = 0, r = 1), this.last.month = 1, this.last.day = 1;
          var a = this.by_data.BYWEEKNO[this.by_indices.BYWEEKNO];
          this.last.day += 7 * a, r && this.increment_year(1);
        } else
          this.increment_monthday(7 * this.rule.interval);
        return r;
      },
      /**
       * Normalize each by day rule for a given year/month.
       * Takes into account ordering and negative rules
       *
       * @private
       * @param {Number} year         Current year.
       * @param {Number} month        Current month.
       * @param {Array}  rules        Array of rules.
       *
       * @return {Array} sorted and normalized rules.
       *                 Negative rules will be expanded to their
       *                 correct positive values for easier processing.
       */
      normalizeByMonthDayRules: function(t, r, a) {
        for (var s = e.Time.daysInMonth(r, t), u = [], o = 0, f = a.length, m; o < f; o++)
          if (m = a[o], !(Math.abs(m) > s)) {
            if (m < 0)
              m = s + (m + 1);
            else if (m === 0)
              continue;
            u.indexOf(m) === -1 && u.push(m);
          }
        return u.sort(function(l, v) {
          return l - v;
        });
      },
      /**
       * NOTES:
       * We are given a list of dates in the month (BYMONTHDAY) (23, etc..)
       * Also we are given a list of days (BYDAY) (MO, 2SU, etc..) when
       * both conditions match a given date (this.last.day) iteration stops.
       *
       * @private
       * @param {Boolean=} isInit     When given true will not increment the
       *                                current day (this.last).
       */
      _byDayAndMonthDay: function(t) {
        var r, a = this.by_data.BYDAY, s, u = 0, o, f = a.length, m = 0, l, v = this, h = this.last.day;
        function c() {
          for (l = e.Time.daysInMonth(
            v.last.month,
            v.last.year
          ), r = v.normalizeByMonthDayRules(
            v.last.year,
            v.last.month,
            v.by_data.BYMONTHDAY
          ), o = r.length; r[u] <= h && !(t && r[u] == h) && u < o - 1; )
            u++;
        }
        function T() {
          h = 0, v.increment_month(), u = 0, c();
        }
        c(), t && (h -= 1);
        for (var y = 48; !m && y; ) {
          if (y--, s = h + 1, s > l) {
            T();
            continue;
          }
          var p = r[u++];
          if (p >= s)
            h = p;
          else {
            T();
            continue;
          }
          for (var S = 0; S < f; S++) {
            var E = this.ruleDayOfWeek(a[S]), b = E[0], O = E[1];
            if (this.last.day = h, this.last.isNthWeekDay(O, b)) {
              m = 1;
              break;
            }
          }
          if (!m && u === o) {
            T();
            continue;
          }
        }
        if (y <= 0)
          throw new Error("Malformed values in BYDAY combined with BYMONTHDAY parts");
        return m;
      },
      next_month: function() {
        this.rule.freq == "MONTHLY";
        var r = 1;
        if (this.next_hour() == 0)
          return r;
        if (this.has_by_data("BYDAY") && this.has_by_data("BYMONTHDAY"))
          r = this._byDayAndMonthDay();
        else if (this.has_by_data("BYDAY")) {
          var a = e.Time.daysInMonth(this.last.month, this.last.year), s = 0, u = 0;
          if (this.has_by_data("BYSETPOS")) {
            for (var o = this.last.day, f = 1; f <= a; f++)
              this.last.day = f, this.is_day_in_byday(this.last) && (u++, f <= o && s++);
            this.last.day = o;
          }
          r = 0;
          for (var f = this.last.day + 1; f <= a; f++)
            if (this.last.day = f, this.is_day_in_byday(this.last) && (!this.has_by_data("BYSETPOS") || this.check_set_position(++s) || this.check_set_position(s - u - 1))) {
              r = 1;
              break;
            }
          f > a && (this.last.day = 1, this.increment_month(), this.is_day_in_byday(this.last) ? (!this.has_by_data("BYSETPOS") || this.check_set_position(1)) && (r = 1) : r = 0);
        } else if (this.has_by_data("BYMONTHDAY")) {
          this.by_indices.BYMONTHDAY++, this.by_indices.BYMONTHDAY >= this.by_data.BYMONTHDAY.length && (this.by_indices.BYMONTHDAY = 0, this.increment_month());
          var a = e.Time.daysInMonth(this.last.month, this.last.year), f = this.by_data.BYMONTHDAY[this.by_indices.BYMONTHDAY];
          f < 0 && (f = a + f + 1), f > a ? (this.last.day = 1, r = this.is_day_in_byday(this.last)) : this.last.day = f;
        } else {
          this.increment_month();
          var a = e.Time.daysInMonth(this.last.month, this.last.year);
          this.by_data.BYMONTHDAY[0] > a ? r = 0 : this.last.day = this.by_data.BYMONTHDAY[0];
        }
        return r;
      },
      next_weekday_by_week: function() {
        var r = 0;
        if (this.next_hour() == 0)
          return r;
        if (!this.has_by_data("BYDAY"))
          return 1;
        for (; ; ) {
          var a = new e.Time();
          this.by_indices.BYDAY++, this.by_indices.BYDAY == Object.keys(this.by_data.BYDAY).length && (this.by_indices.BYDAY = 0, r = 1);
          var s = this.by_data.BYDAY[this.by_indices.BYDAY], u = this.ruleDayOfWeek(s), o = u[1];
          o -= this.rule.wkst, o < 0 && (o += 7), a.year = this.last.year, a.month = this.last.month, a.day = this.last.day;
          var f = a.startDoyWeek(this.rule.wkst);
          if (!(o + f < 1 && !r)) {
            var m = e.Time.fromDayOfYear(
              f + o,
              this.last.year
            );
            return this.last.year = m.year, this.last.month = m.month, this.last.day = m.day, r;
          }
        }
      },
      next_year: function() {
        if (this.next_hour() == 0)
          return 0;
        if (++this.days_index == this.days.length) {
          this.days_index = 0;
          do
            this.increment_year(this.rule.interval), this.expand_year_days(this.last.year);
          while (this.days.length == 0);
        }
        return this._nextByYearDay(), 1;
      },
      _nextByYearDay: function() {
        var r = this.days[this.days_index], a = this.last.year;
        r < 1 && (r += 1, a += 1);
        var s = e.Time.fromDayOfYear(r, a);
        this.last.day = s.day, this.last.month = s.month;
      },
      /**
       * @param dow (eg: '1TU', '-1MO')
       * @param {ICAL.Time.weekDay=} aWeekStart The week start weekday
       * @return [pos, numericDow] (eg: [1, 3]) numericDow is relative to aWeekStart
       */
      ruleDayOfWeek: function(r, a) {
        var s = r.match(/([+-]?[0-9])?(MO|TU|WE|TH|FR|SA|SU)/);
        if (s) {
          var u = parseInt(s[1] || 0, 10);
          return r = e.Recur.icalDayToNumericDay(s[2], a), [u, r];
        } else
          return [0, 0];
      },
      next_generic: function(r, a, s, u, o) {
        var f = r in this.by_data, m = this.rule.freq == a, l = 0;
        if (o && this[o]() == 0)
          return l;
        if (f) {
          this.by_indices[r]++, this.by_indices[r];
          var v = this.by_data[r];
          this.by_indices[r] == v.length && (this.by_indices[r] = 0, l = 1), this.last[s] = v[this.by_indices[r]];
        } else
          m && this["increment_" + s](this.rule.interval);
        return f && l && m && this["increment_" + u](1), l;
      },
      increment_monthday: function(r) {
        for (var a = 0; a < r; a++) {
          var s = e.Time.daysInMonth(this.last.month, this.last.year);
          this.last.day++, this.last.day > s && (this.last.day -= s, this.increment_month());
        }
      },
      increment_month: function() {
        if (this.last.day = 1, this.has_by_data("BYMONTH"))
          this.by_indices.BYMONTH++, this.by_indices.BYMONTH == this.by_data.BYMONTH.length && (this.by_indices.BYMONTH = 0, this.increment_year(1)), this.last.month = this.by_data.BYMONTH[this.by_indices.BYMONTH];
        else {
          this.rule.freq == "MONTHLY" ? this.last.month += this.rule.interval : this.last.month++, this.last.month--;
          var r = e.helpers.trunc(this.last.month / 12);
          this.last.month %= 12, this.last.month++, r != 0 && this.increment_year(r);
        }
      },
      increment_year: function(r) {
        this.last.year += r;
      },
      increment_generic: function(r, a, s, u) {
        this.last[a] += r;
        var o = e.helpers.trunc(this.last[a] / s);
        this.last[a] %= s, o != 0 && this["increment_" + u](o);
      },
      has_by_data: function(r) {
        return r in this.rule.parts;
      },
      expand_year_days: function(r) {
        var a = new e.Time();
        this.days = [];
        var s = {}, u = ["BYDAY", "BYWEEKNO", "BYMONTHDAY", "BYMONTH", "BYYEARDAY"];
        for (var o in u)
          if (u.hasOwnProperty(o)) {
            var f = u[o];
            f in this.rule.parts && (s[f] = this.rule.parts[f]);
          }
        if ("BYMONTH" in s && "BYWEEKNO" in s) {
          var m = 1, l = {};
          a.year = r, a.isDate = !0;
          for (var v = 0; v < this.by_data.BYMONTH.length; v++) {
            var h = this.by_data.BYMONTH[v];
            a.month = h, a.day = 1;
            var c = a.weekNumber(this.rule.wkst);
            a.day = e.Time.daysInMonth(h, r);
            var T = a.weekNumber(this.rule.wkst);
            for (v = c; v < T; v++)
              l[v] = 1;
          }
          for (var y = 0; y < this.by_data.BYWEEKNO.length && m; y++) {
            var p = this.by_data.BYWEEKNO[y];
            p < 52 ? m &= l[y] : m = 0;
          }
          m ? delete s.BYMONTH : delete s.BYWEEKNO;
        }
        var S = Object.keys(s).length;
        if (S == 0) {
          var E = this.dtstart.clone();
          E.year = this.last.year, this.days.push(E.dayOfYear());
        } else if (S == 1 && "BYMONTH" in s) {
          for (var b in this.by_data.BYMONTH)
            if (this.by_data.BYMONTH.hasOwnProperty(b)) {
              var O = this.dtstart.clone();
              O.year = r, O.month = this.by_data.BYMONTH[b], O.isDate = !0, this.days.push(O.dayOfYear());
            }
        } else if (S == 1 && "BYMONTHDAY" in s) {
          for (var A in this.by_data.BYMONTHDAY)
            if (this.by_data.BYMONTHDAY.hasOwnProperty(A)) {
              var $ = this.dtstart.clone(), D = this.by_data.BYMONTHDAY[A];
              if (D < 0) {
                var C = e.Time.daysInMonth($.month, r);
                D = D + C + 1;
              }
              $.day = D, $.year = r, $.isDate = !0, this.days.push($.dayOfYear());
            }
        } else if (S == 2 && "BYMONTHDAY" in s && "BYMONTH" in s) {
          for (var b in this.by_data.BYMONTH)
            if (this.by_data.BYMONTH.hasOwnProperty(b)) {
              var Y = this.by_data.BYMONTH[b], C = e.Time.daysInMonth(Y, r);
              for (var A in this.by_data.BYMONTHDAY)
                if (this.by_data.BYMONTHDAY.hasOwnProperty(A)) {
                  var D = this.by_data.BYMONTHDAY[A];
                  D < 0 && (D = D + C + 1), a.day = D, a.month = Y, a.year = r, a.isDate = !0, this.days.push(a.dayOfYear());
                }
            }
        } else if (!(S == 1 && "BYWEEKNO" in s)) {
          if (!(S == 2 && "BYWEEKNO" in s && "BYMONTHDAY" in s))
            if (S == 1 && "BYDAY" in s)
              this.days = this.days.concat(this.expand_by_day(r));
            else if (S == 2 && "BYDAY" in s && "BYMONTH" in s) {
              for (var b in this.by_data.BYMONTH)
                if (this.by_data.BYMONTH.hasOwnProperty(b)) {
                  var h = this.by_data.BYMONTH[b], C = e.Time.daysInMonth(h, r);
                  a.year = r, a.month = this.by_data.BYMONTH[b], a.day = 1, a.isDate = !0;
                  var j = a.dayOfWeek(), B = a.dayOfYear() - 1;
                  a.day = C;
                  var q = a.dayOfWeek();
                  if (this.has_by_data("BYSETPOS")) {
                    for (var N = [], P = 1; P <= C; P++)
                      a.day = P, this.is_day_in_byday(a) && N.push(P);
                    for (var se = 0; se < N.length; se++)
                      (this.check_set_position(se + 1) || this.check_set_position(se - N.length)) && this.days.push(B + N[se]);
                  } else
                    for (var z in this.by_data.BYDAY)
                      if (this.by_data.BYDAY.hasOwnProperty(z)) {
                        var d = this.by_data.BYDAY[z], g = this.ruleDayOfWeek(d), I = g[0], _ = g[1], G, J = (_ + 7 - j) % 7 + 1, ne = C - (q + 7 - _) % 7;
                        if (I == 0)
                          for (var P = J; P <= C; P += 7)
                            this.days.push(B + P);
                        else
                          I > 0 ? (G = J + (I - 1) * 7, G <= C && this.days.push(B + G)) : (G = ne + (I + 1) * 7, G > 0 && this.days.push(B + G));
                      }
                }
              this.days.sort(function(qs, Xs) {
                return qs - Xs;
              });
            } else if (S == 2 && "BYDAY" in s && "BYMONTHDAY" in s) {
              var Z = this.expand_by_day(r);
              for (var oe in Z)
                if (Z.hasOwnProperty(oe)) {
                  var P = Z[oe], Ae = e.Time.fromDayOfYear(P, r);
                  this.by_data.BYMONTHDAY.indexOf(Ae.day) >= 0 && this.days.push(P);
                }
            } else if (S == 3 && "BYDAY" in s && "BYMONTHDAY" in s && "BYMONTH" in s) {
              var Z = this.expand_by_day(r);
              for (var oe in Z)
                if (Z.hasOwnProperty(oe)) {
                  var P = Z[oe], Ae = e.Time.fromDayOfYear(P, r);
                  this.by_data.BYMONTH.indexOf(Ae.month) >= 0 && this.by_data.BYMONTHDAY.indexOf(Ae.day) >= 0 && this.days.push(P);
                }
            } else if (S == 2 && "BYDAY" in s && "BYWEEKNO" in s) {
              var Z = this.expand_by_day(r);
              for (var oe in Z)
                if (Z.hasOwnProperty(oe)) {
                  var P = Z[oe], Ae = e.Time.fromDayOfYear(P, r), p = Ae.weekNumber(this.rule.wkst);
                  this.by_data.BYWEEKNO.indexOf(p) && this.days.push(P);
                }
            } else
              S == 3 && "BYDAY" in s && "BYWEEKNO" in s && "BYMONTHDAY" in s || (S == 1 && "BYYEARDAY" in s ? this.days = this.days.concat(this.by_data.BYYEARDAY) : this.days = []);
        }
        return 0;
      },
      expand_by_day: function(r) {
        var a = [], s = this.last.clone();
        s.year = r, s.month = 1, s.day = 1, s.isDate = !0;
        var u = s.dayOfWeek();
        s.month = 12, s.day = 31, s.isDate = !0;
        var o = s.dayOfWeek(), f = s.dayOfYear();
        for (var m in this.by_data.BYDAY)
          if (this.by_data.BYDAY.hasOwnProperty(m)) {
            var l = this.by_data.BYDAY[m], v = this.ruleDayOfWeek(l), h = v[0], c = v[1];
            if (h == 0)
              for (var T = (c + 7 - u) % 7 + 1, y = T; y <= f; y += 7)
                a.push(y);
            else if (h > 0) {
              var p;
              c >= u ? p = c - u + 1 : p = c - u + 8, a.push(p + (h - 1) * 7);
            } else {
              var S;
              h = -h, c <= o ? S = f - o + c : S = f - o + c - 7, a.push(S - (h - 1) * 7);
            }
          }
        return a;
      },
      is_day_in_byday: function(r) {
        for (var a in this.by_data.BYDAY)
          if (this.by_data.BYDAY.hasOwnProperty(a)) {
            var s = this.by_data.BYDAY[a], u = this.ruleDayOfWeek(s), o = u[0], f = u[1], m = r.dayOfWeek();
            if (o == 0 && f == m || r.nthWeekDay(f, o) == r.day)
              return 1;
          }
        return 0;
      },
      /**
       * Checks if given value is in BYSETPOS.
       *
       * @private
       * @param {Numeric} aPos position to check for.
       * @return {Boolean} false unless BYSETPOS rules exist
       *                   and the given value is present in rules.
       */
      check_set_position: function(r) {
        if (this.has_by_data("BYSETPOS")) {
          var a = this.by_data.BYSETPOS.indexOf(r);
          return a !== -1;
        }
        return !1;
      },
      sort_byday_rules: function(r) {
        for (var a = 0; a < r.length; a++)
          for (var s = 0; s < a; s++) {
            var u = this.ruleDayOfWeek(r[s], this.rule.wkst)[1], o = this.ruleDayOfWeek(r[a], this.rule.wkst)[1];
            if (u > o) {
              var f = r[a];
              r[a] = r[s], r[s] = f;
            }
          }
      },
      check_contract_restriction: function(r, a) {
        var s = i._indexMap[r], u = i._expandMap[this.rule.freq][s], o = !1;
        if (r in this.by_data && u == i.CONTRACT) {
          var f = this.by_data[r];
          for (var m in f)
            if (f.hasOwnProperty(m) && f[m] == a) {
              o = !0;
              break;
            }
        } else
          o = !0;
        return o;
      },
      check_contracting_rules: function() {
        var r = this.last.dayOfWeek(), a = this.last.weekNumber(this.rule.wkst), s = this.last.dayOfYear();
        return this.check_contract_restriction("BYSECOND", this.last.second) && this.check_contract_restriction("BYMINUTE", this.last.minute) && this.check_contract_restriction("BYHOUR", this.last.hour) && this.check_contract_restriction("BYDAY", e.Recur.numericDayToIcalDay(r)) && this.check_contract_restriction("BYWEEKNO", a) && this.check_contract_restriction("BYMONTHDAY", this.last.day) && this.check_contract_restriction("BYMONTH", this.last.month) && this.check_contract_restriction("BYYEARDAY", s);
      },
      setup_defaults: function(r, a, s) {
        var u = i._indexMap[r], o = i._expandMap[this.rule.freq][u];
        return o != i.CONTRACT && (r in this.by_data || (this.by_data[r] = [s]), this.rule.freq != a) ? this.by_data[r][0] : s;
      },
      /**
       * Convert iterator into a serialize-able object.  Will preserve current
       * iteration sequence to ensure the seamless continuation of the recurrence
       * rule.
       * @return {Object}
       */
      toJSON: function() {
        var t = /* @__PURE__ */ Object.create(null);
        return t.initialized = this.initialized, t.rule = this.rule.toJSON(), t.dtstart = this.dtstart.toJSON(), t.by_data = this.by_data, t.days = this.days, t.last = this.last.toJSON(), t.by_indices = this.by_indices, t.occurrence_number = this.occurrence_number, t;
      }
    }, i._indexMap = {
      BYSECOND: 0,
      BYMINUTE: 1,
      BYHOUR: 2,
      BYDAY: 3,
      BYMONTHDAY: 4,
      BYYEARDAY: 5,
      BYWEEKNO: 6,
      BYMONTH: 7,
      BYSETPOS: 8
    }, i._expandMap = {
      SECONDLY: [1, 1, 1, 1, 1, 1, 1, 1],
      MINUTELY: [2, 1, 1, 1, 1, 1, 1, 1],
      HOURLY: [2, 2, 1, 1, 1, 1, 1, 1],
      DAILY: [2, 2, 2, 1, 1, 1, 1, 1],
      WEEKLY: [2, 2, 2, 2, 3, 3, 1, 1],
      MONTHLY: [2, 2, 2, 2, 2, 3, 3, 1],
      YEARLY: [2, 2, 2, 2, 2, 2, 2, 2]
    }, i.UNKNOWN = 0, i.CONTRACT = 1, i.EXPAND = 2, i.ILLEGAL = 3, i;
  }(), e.RecurExpansion = function() {
    function i(s) {
      return e.helpers.formatClassType(s, e.Time);
    }
    function t(s, u) {
      return s.compare(u);
    }
    function r(s) {
      return s.hasProperty("rdate") || s.hasProperty("rrule") || s.hasProperty("recurrence-id");
    }
    function a(s) {
      this.ruleDates = [], this.exDates = [], this.fromData(s);
    }
    return a.prototype = {
      /**
       * True when iteration is fully completed.
       * @type {Boolean}
       */
      complete: !1,
      /**
       * Array of rrule iterators.
       *
       * @type {ICAL.RecurIterator[]}
       * @private
       */
      ruleIterators: null,
      /**
       * Array of rdate instances.
       *
       * @type {ICAL.Time[]}
       * @private
       */
      ruleDates: null,
      /**
       * Array of exdate instances.
       *
       * @type {ICAL.Time[]}
       * @private
       */
      exDates: null,
      /**
       * Current position in ruleDates array.
       * @type {Number}
       * @private
       */
      ruleDateInc: 0,
      /**
       * Current position in exDates array
       * @type {Number}
       * @private
       */
      exDateInc: 0,
      /**
       * Current negative date.
       *
       * @type {ICAL.Time}
       * @private
       */
      exDate: null,
      /**
       * Current additional date.
       *
       * @type {ICAL.Time}
       * @private
       */
      ruleDate: null,
      /**
       * Start date of recurring rules.
       *
       * @type {ICAL.Time}
       */
      dtstart: null,
      /**
       * Last expanded time
       *
       * @type {ICAL.Time}
       */
      last: null,
      /**
       * Initialize the recurrence expansion from the data object. The options
       * object may also contain additional members, see the
       * {@link ICAL.RecurExpansion constructor} for more details.
       *
       * @param {Object} options
       *        Recurrence expansion options
       * @param {ICAL.Time} options.dtstart
       *        Start time of the event
       * @param {ICAL.Component=} options.component
       *        Component for expansion, required if not resuming.
       */
      fromData: function(s) {
        var u = e.helpers.formatClassType(s.dtstart, e.Time);
        if (u)
          this.dtstart = u;
        else
          throw new Error(".dtstart (ICAL.Time) must be given");
        if (s.component)
          this._init(s.component);
        else {
          if (this.last = i(s.last) || u.clone(), !s.ruleIterators)
            throw new Error(".ruleIterators or .component must be given");
          this.ruleIterators = s.ruleIterators.map(function(o) {
            return e.helpers.formatClassType(o, e.RecurIterator);
          }), this.ruleDateInc = s.ruleDateInc, this.exDateInc = s.exDateInc, s.ruleDates && (this.ruleDates = s.ruleDates.map(i), this.ruleDate = this.ruleDates[this.ruleDateInc]), s.exDates && (this.exDates = s.exDates.map(i), this.exDate = this.exDates[this.exDateInc]), typeof s.complete < "u" && (this.complete = s.complete);
        }
      },
      /**
       * Retrieve the next occurrence in the series.
       * @return {ICAL.Time}
       */
      next: function() {
        for (var s, u, o, f = 500, m = 0; ; ) {
          if (m++ > f)
            throw new Error(
              "max tries have occured, rule may be impossible to forfill."
            );
          if (u = this.ruleDate, s = this._nextRecurrenceIter(this.last), !u && !s) {
            this.complete = !0;
            break;
          }
          if ((!u || s && u.compare(s.last) > 0) && (u = s.last.clone(), s.next()), this.ruleDate === u && this._nextRuleDay(), this.last = u, this.exDate && (o = this.exDate.compare(this.last), o < 0 && this._nextExDay(), o === 0)) {
            this._nextExDay();
            continue;
          }
          return this.last;
        }
      },
      /**
       * Converts object into a serialize-able format. This format can be passed
       * back into the expansion to resume iteration.
       * @return {Object}
       */
      toJSON: function() {
        function s(o) {
          return o.toJSON();
        }
        var u = /* @__PURE__ */ Object.create(null);
        return u.ruleIterators = this.ruleIterators.map(s), this.ruleDates && (u.ruleDates = this.ruleDates.map(s)), this.exDates && (u.exDates = this.exDates.map(s)), u.ruleDateInc = this.ruleDateInc, u.exDateInc = this.exDateInc, u.last = this.last.toJSON(), u.dtstart = this.dtstart.toJSON(), u.complete = this.complete, u;
      },
      /**
       * Extract all dates from the properties in the given component. The
       * properties will be filtered by the property name.
       *
       * @private
       * @param {ICAL.Component} component        The component to search in
       * @param {String} propertyName             The property name to search for
       * @return {ICAL.Time[]}                    The extracted dates.
       */
      _extractDates: function(s, u) {
        function o(c) {
          h = e.helpers.binsearchInsert(
            f,
            c,
            t
          ), f.splice(h, 0, c);
        }
        for (var f = [], m = s.getAllProperties(u), l = m.length, v = 0, h; v < l; v++)
          m[v].getValues().forEach(o);
        return f;
      },
      /**
       * Initialize the recurrence expansion.
       *
       * @private
       * @param {ICAL.Component} component    The component to initialize from.
       */
      _init: function(s) {
        if (this.ruleIterators = [], this.last = this.dtstart.clone(), !r(s)) {
          this.ruleDate = this.last.clone(), this.complete = !0;
          return;
        }
        if (s.hasProperty("rdate") && (this.ruleDates = this._extractDates(s, "rdate"), this.ruleDates[0] && this.ruleDates[0].compare(this.dtstart) < 0 ? (this.ruleDateInc = 0, this.last = this.ruleDates[0].clone()) : this.ruleDateInc = e.helpers.binsearchInsert(
          this.ruleDates,
          this.last,
          t
        ), this.ruleDate = this.ruleDates[this.ruleDateInc]), s.hasProperty("rrule"))
          for (var u = s.getAllProperties("rrule"), o = 0, f = u.length, m, l; o < f; o++)
            m = u[o].getFirstValue(), l = m.iterator(this.dtstart), this.ruleIterators.push(l), l.next();
        s.hasProperty("exdate") && (this.exDates = this._extractDates(s, "exdate"), this.exDateInc = e.helpers.binsearchInsert(
          this.exDates,
          this.last,
          t
        ), this.exDate = this.exDates[this.exDateInc]);
      },
      /**
       * Advance to the next exdate
       * @private
       */
      _nextExDay: function() {
        this.exDate = this.exDates[++this.exDateInc];
      },
      /**
       * Advance to the next rule date
       * @private
       */
      _nextRuleDay: function() {
        this.ruleDate = this.ruleDates[++this.ruleDateInc];
      },
      /**
       * Find and return the recurrence rule with the most recent event and
       * return it.
       *
       * @private
       * @return {?ICAL.RecurIterator}    Found iterator.
       */
      _nextRecurrenceIter: function() {
        var s = this.ruleIterators;
        if (s.length === 0)
          return null;
        for (var u = s.length, o, f, m = 0, l; m < u; m++) {
          if (o = s[m], f = o.last, o.completed) {
            u--, m !== 0 && m--, s.splice(m, 1);
            continue;
          }
          (!l || l.last.compare(f) > 0) && (l = o);
        }
        return l;
      }
    }, a;
  }(), e.Event = function() {
    function i(r, a) {
      r instanceof e.Component || (a = r, r = null), r ? this.component = r : this.component = new e.Component("vevent"), this._rangeExceptionCache = /* @__PURE__ */ Object.create(null), this.exceptions = /* @__PURE__ */ Object.create(null), this.rangeExceptions = [], a && a.strictExceptions && (this.strictExceptions = a.strictExceptions), a && a.exceptions ? a.exceptions.forEach(this.relateException, this) : this.component.parent && !this.isRecurrenceException() && this.component.parent.getAllSubcomponents("vevent").forEach(function(s) {
        s.hasProperty("recurrence-id") && this.relateException(s);
      }, this);
    }
    i.prototype = {
      THISANDFUTURE: "THISANDFUTURE",
      /**
       * List of related event exceptions.
       *
       * @type {ICAL.Event[]}
       */
      exceptions: null,
      /**
       * When true, will verify exceptions are related by their UUID.
       *
       * @type {Boolean}
       */
      strictExceptions: !1,
      /**
       * Relates a given event exception to this object.  If the given component
       * does not share the UID of this event it cannot be related and will throw
       * an exception.
       *
       * If this component is an exception it cannot have other exceptions
       * related to it.
       *
       * @param {ICAL.Component|ICAL.Event} obj       Component or event
       */
      relateException: function(r) {
        if (this.isRecurrenceException())
          throw new Error("cannot relate exception to exceptions");
        if (r instanceof e.Component && (r = new e.Event(r)), this.strictExceptions && r.uid !== this.uid)
          throw new Error("attempted to relate unrelated exception");
        var a = r.recurrenceId.toString();
        if (this.exceptions[a] = r, r.modifiesFuture()) {
          var s = [
            r.recurrenceId.toUnixTime(),
            a
          ], u = e.helpers.binsearchInsert(
            this.rangeExceptions,
            s,
            t
          );
          this.rangeExceptions.splice(u, 0, s);
        }
      },
      /**
       * Checks if this record is an exception and has the RANGE=THISANDFUTURE
       * value.
       *
       * @return {Boolean}        True, when exception is within range
       */
      modifiesFuture: function() {
        if (!this.component.hasProperty("recurrence-id"))
          return !1;
        var r = this.component.getFirstProperty("recurrence-id").getParameter("range");
        return r === this.THISANDFUTURE;
      },
      /**
       * Finds the range exception nearest to the given date.
       *
       * @param {ICAL.Time} time usually an occurrence time of an event
       * @return {?ICAL.Event} the related event/exception or null
       */
      findRangeException: function(r) {
        if (!this.rangeExceptions.length)
          return null;
        var a = r.toUnixTime(), s = e.helpers.binsearchInsert(
          this.rangeExceptions,
          [a],
          t
        );
        if (s -= 1, s < 0)
          return null;
        var u = this.rangeExceptions[s];
        return a < u[0] ? null : u[1];
      },
      /**
       * This object is returned by {@link ICAL.Event#getOccurrenceDetails getOccurrenceDetails}
       *
       * @typedef {Object} occurrenceDetails
       * @memberof ICAL.Event
       * @property {ICAL.Time} recurrenceId       The passed in recurrence id
       * @property {ICAL.Event} item              The occurrence
       * @property {ICAL.Time} startDate          The start of the occurrence
       * @property {ICAL.Time} endDate            The end of the occurrence
       */
      /**
       * Returns the occurrence details based on its start time.  If the
       * occurrence has an exception will return the details for that exception.
       *
       * NOTE: this method is intend to be used in conjunction
       *       with the {@link ICAL.Event#iterator iterator} method.
       *
       * @param {ICAL.Time} occurrence time occurrence
       * @return {ICAL.Event.occurrenceDetails} Information about the occurrence
       */
      getOccurrenceDetails: function(r) {
        var a = r.toString(), s = r.convertToZone(e.Timezone.utcTimezone).toString(), u, o = {
          //XXX: Clone?
          recurrenceId: r
        };
        if (a in this.exceptions)
          u = o.item = this.exceptions[a], o.startDate = u.startDate, o.endDate = u.endDate, o.item = u;
        else if (s in this.exceptions)
          u = this.exceptions[s], o.startDate = u.startDate, o.endDate = u.endDate, o.item = u;
        else {
          var f = this.findRangeException(
            r
          ), m;
          if (f) {
            var l = this.exceptions[f];
            o.item = l;
            var v = this._rangeExceptionCache[f];
            if (!v) {
              var h = l.recurrenceId.clone(), c = l.startDate.clone();
              h.zone = c.zone, v = c.subtractDate(h), this._rangeExceptionCache[f] = v;
            }
            var T = r.clone();
            T.zone = l.startDate.zone, T.addDuration(v), m = T.clone(), m.addDuration(l.duration), o.startDate = T, o.endDate = m;
          } else
            m = r.clone(), m.addDuration(this.duration), o.endDate = m, o.startDate = r, o.item = this;
        }
        return o;
      },
      /**
       * Builds a recur expansion instance for a specific point in time (defaults
       * to startDate).
       *
       * @param {ICAL.Time} startTime     Starting point for expansion
       * @return {ICAL.RecurExpansion}    Expansion object
       */
      iterator: function(r) {
        return new e.RecurExpansion({
          component: this.component,
          dtstart: r || this.startDate
        });
      },
      /**
       * Checks if the event is recurring
       *
       * @return {Boolean}        True, if event is recurring
       */
      isRecurring: function() {
        var r = this.component;
        return r.hasProperty("rrule") || r.hasProperty("rdate");
      },
      /**
       * Checks if the event describes a recurrence exception. See
       * {@tutorial terminology} for details.
       *
       * @return {Boolean}    True, if the event describes a recurrence exception
       */
      isRecurrenceException: function() {
        return this.component.hasProperty("recurrence-id");
      },
      /**
       * Returns the types of recurrences this event may have.
       *
       * Returned as an object with the following possible keys:
       *
       *    - YEARLY
       *    - MONTHLY
       *    - WEEKLY
       *    - DAILY
       *    - MINUTELY
       *    - SECONDLY
       *
       * @return {Object.<ICAL.Recur.frequencyValues, Boolean>}
       *          Object of recurrence flags
       */
      getRecurrenceTypes: function() {
        for (var r = this.component.getAllProperties("rrule"), a = 0, s = r.length, u = /* @__PURE__ */ Object.create(null); a < s; a++) {
          var o = r[a].getFirstValue();
          u[o.freq] = !0;
        }
        return u;
      },
      /**
       * The uid of this event
       * @type {String}
       */
      get uid() {
        return this._firstProp("uid");
      },
      set uid(r) {
        this._setProp("uid", r);
      },
      /**
       * The start date
       * @type {ICAL.Time}
       */
      get startDate() {
        return this._firstProp("dtstart");
      },
      set startDate(r) {
        this._setTime("dtstart", r);
      },
      /**
       * The end date. This can be the result directly from the property, or the
       * end date calculated from start date and duration. Setting the property
       * will remove any duration properties.
       * @type {ICAL.Time}
       */
      get endDate() {
        var r = this._firstProp("dtend");
        if (!r) {
          var a = this._firstProp("duration");
          r = this.startDate.clone(), a ? r.addDuration(a) : r.isDate && (r.day += 1);
        }
        return r;
      },
      set endDate(r) {
        this.component.hasProperty("duration") && this.component.removeProperty("duration"), this._setTime("dtend", r);
      },
      /**
       * The duration. This can be the result directly from the property, or the
       * duration calculated from start date and end date. Setting the property
       * will remove any `dtend` properties.
       * @type {ICAL.Duration}
       */
      get duration() {
        var r = this._firstProp("duration");
        return r || this.endDate.subtractDateTz(this.startDate);
      },
      set duration(r) {
        this.component.hasProperty("dtend") && this.component.removeProperty("dtend"), this._setProp("duration", r);
      },
      /**
       * The location of the event.
       * @type {String}
       */
      get location() {
        return this._firstProp("location");
      },
      set location(r) {
        return this._setProp("location", r);
      },
      /**
       * The attendees in the event
       * @type {ICAL.Property[]}
       * @readonly
       */
      get attendees() {
        return this.component.getAllProperties("attendee");
      },
      /**
       * The event summary
       * @type {String}
       */
      get summary() {
        return this._firstProp("summary");
      },
      set summary(r) {
        this._setProp("summary", r);
      },
      /**
       * The event description.
       * @type {String}
       */
      get description() {
        return this._firstProp("description");
      },
      set description(r) {
        this._setProp("description", r);
      },
      /**
       * The event color from [rfc7986](https://datatracker.ietf.org/doc/html/rfc7986)
       * @type {String}
       */
      get color() {
        return this._firstProp("color");
      },
      set color(r) {
        this._setProp("color", r);
      },
      /**
       * The organizer value as an uri. In most cases this is a mailto: uri, but
       * it can also be something else, like urn:uuid:...
       * @type {String}
       */
      get organizer() {
        return this._firstProp("organizer");
      },
      set organizer(r) {
        this._setProp("organizer", r);
      },
      /**
       * The sequence value for this event. Used for scheduling
       * see {@tutorial terminology}.
       * @type {Number}
       */
      get sequence() {
        return this._firstProp("sequence");
      },
      set sequence(r) {
        this._setProp("sequence", r);
      },
      /**
       * The recurrence id for this event. See {@tutorial terminology} for details.
       * @type {ICAL.Time}
       */
      get recurrenceId() {
        return this._firstProp("recurrence-id");
      },
      set recurrenceId(r) {
        this._setTime("recurrence-id", r);
      },
      /**
       * Set/update a time property's value.
       * This will also update the TZID of the property.
       *
       * TODO: this method handles the case where we are switching
       * from a known timezone to an implied timezone (one without TZID).
       * This does _not_ handle the case of moving between a known
       *  (by TimezoneService) timezone to an unknown timezone...
       *
       * We will not add/remove/update the VTIMEZONE subcomponents
       *  leading to invalid ICAL data...
       * @private
       * @param {String} propName     The property name
       * @param {ICAL.Time} time      The time to set
       */
      _setTime: function(r, a) {
        var s = this.component.getFirstProperty(r);
        s || (s = new e.Property(r), this.component.addProperty(s)), a.zone === e.Timezone.localTimezone || a.zone === e.Timezone.utcTimezone ? s.removeParameter("tzid") : s.setParameter("tzid", a.zone.tzid), s.setValue(a);
      },
      _setProp: function(r, a) {
        this.component.updatePropertyWithValue(r, a);
      },
      _firstProp: function(r) {
        return this.component.getFirstPropertyValue(r);
      },
      /**
       * The string representation of this event.
       * @return {String}
       */
      toString: function() {
        return this.component.toString();
      }
    };
    function t(r, a) {
      return r[0] > a[0] ? 1 : a[0] > r[0] ? -1 : 0;
    }
    return i;
  }(), e.ComponentParser = function() {
    function i(t) {
      typeof t > "u" && (t = {});
      var r;
      for (r in t)
        t.hasOwnProperty(r) && (this[r] = t[r]);
    }
    return i.prototype = {
      /**
       * When true, parse events
       *
       * @type {Boolean}
       */
      parseEvent: !0,
      /**
       * When true, parse timezones
       *
       * @type {Boolean}
       */
      parseTimezone: !0,
      /* SAX like events here for reference */
      /**
       * Fired when parsing is complete
       * @callback
       */
      oncomplete: (
        /* istanbul ignore next */
        function() {
        }
      ),
      /**
       * Fired if an error occurs during parsing.
       *
       * @callback
       * @param {Error} err details of error
       */
      onerror: (
        /* istanbul ignore next */
        function(t) {
        }
      ),
      /**
       * Fired when a top level component (VTIMEZONE) is found
       *
       * @callback
       * @param {ICAL.Timezone} component     Timezone object
       */
      ontimezone: (
        /* istanbul ignore next */
        function(t) {
        }
      ),
      /**
       * Fired when a top level component (VEVENT) is found.
       *
       * @callback
       * @param {ICAL.Event} component    Top level component
       */
      onevent: (
        /* istanbul ignore next */
        function(t) {
        }
      ),
      /**
       * Process a string or parse ical object.  This function itself will return
       * nothing but will start the parsing process.
       *
       * Events must be registered prior to calling this method.
       *
       * @param {ICAL.Component|String|Object} ical      The component to process,
       *        either in its final form, as a jCal Object, or string representation
       */
      process: function(t) {
        typeof t == "string" && (t = e.parse(t)), t instanceof e.Component || (t = new e.Component(t));
        for (var r = t.getAllSubcomponents(), a = 0, s = r.length, u; a < s; a++)
          switch (u = r[a], u.name) {
            case "vtimezone":
              if (this.parseTimezone) {
                var o = u.getFirstPropertyValue("tzid");
                o && this.ontimezone(new e.Timezone({
                  tzid: o,
                  component: u
                }));
              }
              break;
            case "vevent":
              this.parseEvent && this.onevent(new e.Event(u));
              break;
            default:
              continue;
          }
        this.oncomplete();
      }
    }, i;
  }();
})(ra);
var Tn = ra.exports;
let nt;
const _0 = new Uint8Array(16);
function O0() {
  if (!nt && (nt = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !nt))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return nt(_0);
}
const R = [];
for (let n = 0; n < 256; ++n)
  R.push((n + 256).toString(16).slice(1));
function D0(n, e = 0) {
  return R[n[e + 0]] + R[n[e + 1]] + R[n[e + 2]] + R[n[e + 3]] + "-" + R[n[e + 4]] + R[n[e + 5]] + "-" + R[n[e + 6]] + R[n[e + 7]] + "-" + R[n[e + 8]] + R[n[e + 9]] + "-" + R[n[e + 10]] + R[n[e + 11]] + R[n[e + 12]] + R[n[e + 13]] + R[n[e + 14]] + R[n[e + 15]];
}
const I0 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), yn = {
  randomUUID: I0
};
function $0(n, e, i) {
  if (yn.randomUUID && !e && !n)
    return yn.randomUUID();
  n = n || {};
  const t = n.random || (n.rng || O0)();
  if (t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128, e) {
    i = i || 0;
    for (let r = 0; r < 16; ++r)
      e[i + r] = t[r];
    return e;
  }
  return D0(t);
}
var na = {}, it = function(n) {
  return n && n.Math === Math && n;
}, F = (
  // eslint-disable-next-line es/no-global-this -- safe
  it(typeof globalThis == "object" && globalThis) || it(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  it(typeof self == "object" && self) || it(typeof jt == "object" && jt) || // eslint-disable-next-line no-new-func -- fallback
  function() {
    return this;
  }() || jt || Function("return this")()
), He = {}, x = function(n) {
  try {
    return !!n();
  } catch {
    return !0;
  }
}, C0 = x, V = !C0(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), w0 = x, bt = !w0(function() {
  var n = (function() {
  }).bind();
  return typeof n != "function" || n.hasOwnProperty("prototype");
}), P0 = bt, at = Function.prototype.call, le = P0 ? at.bind(at) : function() {
  return at.apply(at, arguments);
}, _t = {}, ia = {}.propertyIsEnumerable, aa = Object.getOwnPropertyDescriptor, N0 = aa && !ia.call({ 1: 2 }, 1);
_t.f = N0 ? function(e) {
  var i = aa(this, e);
  return !!i && i.enumerable;
} : ia;
var Ve = function(n, e) {
  return {
    enumerable: !(n & 1),
    configurable: !(n & 2),
    writable: !(n & 4),
    value: e
  };
}, sa = bt, oa = Function.prototype, yr = oa.call, U0 = sa && oa.bind.bind(yr, yr), w = sa ? U0 : function(n) {
  return function() {
    return yr.apply(n, arguments);
  };
}, ua = w, L0 = ua({}.toString), M0 = ua("".slice), Ne = function(n) {
  return M0(L0(n), 8, -1);
}, R0 = w, Y0 = x, B0 = Ne, zt = Object, x0 = R0("".split), xr = Y0(function() {
  return !zt("z").propertyIsEnumerable(0);
}) ? function(n) {
  return B0(n) === "String" ? x0(n, "") : zt(n);
} : zt, fa = function(n) {
  return n == null;
}, k0 = fa, j0 = TypeError, Ot = function(n) {
  if (k0(n))
    throw new j0("Can't call method on " + n);
  return n;
}, z0 = xr, F0 = Ot, pe = function(n) {
  return z0(F0(n));
}, Sr = typeof document == "object" && document.all, G0 = typeof Sr > "u" && Sr !== void 0, la = {
  all: Sr,
  IS_HTMLDDA: G0
}, ca = la, H0 = ca.all, U = ca.IS_HTMLDDA ? function(n) {
  return typeof n == "function" || n === H0;
} : function(n) {
  return typeof n == "function";
}, Sn = U, da = la, V0 = da.all, ce = da.IS_HTMLDDA ? function(n) {
  return typeof n == "object" ? n !== null : Sn(n) || n === V0;
} : function(n) {
  return typeof n == "object" ? n !== null : Sn(n);
}, Ft = F, W0 = U, K0 = function(n) {
  return W0(n) ? n : void 0;
}, Te = function(n, e) {
  return arguments.length < 2 ? K0(Ft[n]) : Ft[n] && Ft[n][e];
}, q0 = w, Dt = q0({}.isPrototypeOf), X0 = typeof navigator < "u" && String(navigator.userAgent) || "", ha = F, Gt = X0, gn = ha.process, En = ha.Deno, An = gn && gn.versions || En && En.version, bn = An && An.v8, Q, gt;
bn && (Q = bn.split("."), gt = Q[0] > 0 && Q[0] < 4 ? 1 : +(Q[0] + Q[1]));
!gt && Gt && (Q = Gt.match(/Edge\/(\d+)/), (!Q || Q[1] >= 74) && (Q = Gt.match(/Chrome\/(\d+)/), Q && (gt = +Q[1])));
var J0 = gt, _n = J0, Z0 = x, Q0 = F, eo = Q0.String, Ue = !!Object.getOwnPropertySymbols && !Z0(function() {
  var n = Symbol("symbol detection");
  return !eo(n) || !(Object(n) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && _n && _n < 41;
}), to = Ue, ma = to && !Symbol.sham && typeof Symbol.iterator == "symbol", ro = Te, no = U, io = Dt, ao = ma, so = Object, We = ao ? function(n) {
  return typeof n == "symbol";
} : function(n) {
  var e = ro("Symbol");
  return no(e) && io(e.prototype, so(n));
}, oo = String, va = function(n) {
  try {
    return oo(n);
  } catch {
    return "Object";
  }
}, uo = U, fo = va, lo = TypeError, kr = function(n) {
  if (uo(n))
    return n;
  throw new lo(fo(n) + " is not a function");
}, co = kr, ho = fa, mo = function(n, e) {
  var i = n[e];
  return ho(i) ? void 0 : co(i);
}, Ht = le, Vt = U, Wt = ce, vo = TypeError, pa = function(n, e) {
  var i, t;
  if (e === "string" && Vt(i = n.toString) && !Wt(t = Ht(i, n)) || Vt(i = n.valueOf) && !Wt(t = Ht(i, n)) || e !== "string" && Vt(i = n.toString) && !Wt(t = Ht(i, n)))
    return t;
  throw new vo("Can't convert object to primitive value");
}, Ta = { exports: {} }, po = !1, On = F, To = Object.defineProperty, jr = function(n, e) {
  try {
    To(On, n, { value: e, configurable: !0, writable: !0 });
  } catch {
    On[n] = e;
  }
  return e;
}, yo = F, So = jr, Dn = "__core-js_shared__", go = yo[Dn] || So(Dn, {}), zr = go, In = zr;
(Ta.exports = function(n, e) {
  return In[n] || (In[n] = e !== void 0 ? e : {});
})("versions", []).push({
  version: "3.33.0",
  mode: "global",
  copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var Ke = Ta.exports, Eo = Ot, Ao = Object, qe = function(n) {
  return Ao(Eo(n));
}, bo = w, _o = qe, Oo = bo({}.hasOwnProperty), k = Object.hasOwn || function(e, i) {
  return Oo(_o(e), i);
}, Do = w, Io = 0, $o = Math.random(), Co = Do(1 .toString), Fr = function(n) {
  return "Symbol(" + (n === void 0 ? "" : n) + ")_" + Co(++Io + $o, 36);
}, wo = F, Po = Ke, $n = k, No = Fr, Uo = Ue, Lo = ma, De = wo.Symbol, Kt = Po("wks"), Mo = Lo ? De.for || De : De && De.withoutSetter || No, K = function(n) {
  return $n(Kt, n) || (Kt[n] = Uo && $n(De, n) ? De[n] : Mo("Symbol." + n)), Kt[n];
}, Ro = le, Cn = ce, wn = We, Yo = mo, Bo = pa, xo = K, ko = TypeError, jo = xo("toPrimitive"), ya = function(n, e) {
  if (!Cn(n) || wn(n))
    return n;
  var i = Yo(n, jo), t;
  if (i) {
    if (e === void 0 && (e = "default"), t = Ro(i, n, e), !Cn(t) || wn(t))
      return t;
    throw new ko("Can't convert object to primitive value");
  }
  return e === void 0 && (e = "number"), Bo(n, e);
}, zo = ya, Fo = We, It = function(n) {
  var e = zo(n, "string");
  return Fo(e) ? e : e + "";
}, Go = F, Pn = ce, gr = Go.document, Ho = Pn(gr) && Pn(gr.createElement), Gr = function(n) {
  return Ho ? gr.createElement(n) : {};
}, Vo = V, Wo = x, Ko = Gr, Sa = !Vo && !Wo(function() {
  return Object.defineProperty(Ko("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), qo = V, Xo = le, Jo = _t, Zo = Ve, Qo = pe, eu = It, tu = k, ru = Sa, Nn = Object.getOwnPropertyDescriptor;
He.f = qo ? Nn : function(e, i) {
  if (e = Qo(e), i = eu(i), ru)
    try {
      return Nn(e, i);
    } catch {
    }
  if (tu(e, i))
    return Zo(!Xo(Jo.f, e, i), e[i]);
};
var W = {}, nu = V, iu = x, ga = nu && iu(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), au = ce, su = String, ou = TypeError, ye = function(n) {
  if (au(n))
    return n;
  throw new ou(su(n) + " is not an object");
}, uu = V, fu = Sa, lu = ga, st = ye, Un = It, cu = TypeError, qt = Object.defineProperty, du = Object.getOwnPropertyDescriptor, Xt = "enumerable", Jt = "configurable", Zt = "writable";
W.f = uu ? lu ? function(e, i, t) {
  if (st(e), i = Un(i), st(t), typeof e == "function" && i === "prototype" && "value" in t && Zt in t && !t[Zt]) {
    var r = du(e, i);
    r && r[Zt] && (e[i] = t.value, t = {
      configurable: Jt in t ? t[Jt] : r[Jt],
      enumerable: Xt in t ? t[Xt] : r[Xt],
      writable: !1
    });
  }
  return qt(e, i, t);
} : qt : function(e, i, t) {
  if (st(e), i = Un(i), st(t), fu)
    try {
      return qt(e, i, t);
    } catch {
    }
  if ("get" in t || "set" in t)
    throw new cu("Accessors not supported");
  return "value" in t && (e[i] = t.value), e;
};
var hu = V, mu = W, vu = Ve, $t = hu ? function(n, e, i) {
  return mu.f(n, e, vu(1, i));
} : function(n, e, i) {
  return n[e] = i, n;
}, Ea = { exports: {} }, Er = V, pu = k, Aa = Function.prototype, Tu = Er && Object.getOwnPropertyDescriptor, Hr = pu(Aa, "name"), yu = Hr && (function() {
}).name === "something", Su = Hr && (!Er || Er && Tu(Aa, "name").configurable), ba = {
  EXISTS: Hr,
  PROPER: yu,
  CONFIGURABLE: Su
}, gu = w, Eu = U, Ar = zr, Au = gu(Function.toString);
Eu(Ar.inspectSource) || (Ar.inspectSource = function(n) {
  return Au(n);
});
var _a = Ar.inspectSource, bu = F, _u = U, Ln = bu.WeakMap, Ou = _u(Ln) && /native code/.test(String(Ln)), Du = Ke, Iu = Fr, Mn = Du("keys"), Ct = function(n) {
  return Mn[n] || (Mn[n] = Iu(n));
}, wt = {}, $u = Ou, Oa = F, Cu = ce, wu = $t, Qt = k, er = zr, Pu = Ct, Nu = wt, Rn = "Object already initialized", br = Oa.TypeError, Uu = Oa.WeakMap, Et, je, At, Lu = function(n) {
  return At(n) ? je(n) : Et(n, {});
}, Mu = function(n) {
  return function(e) {
    var i;
    if (!Cu(e) || (i = je(e)).type !== n)
      throw new br("Incompatible receiver, " + n + " required");
    return i;
  };
};
if ($u || er.state) {
  var ee = er.state || (er.state = new Uu());
  ee.get = ee.get, ee.has = ee.has, ee.set = ee.set, Et = function(n, e) {
    if (ee.has(n))
      throw new br(Rn);
    return e.facade = n, ee.set(n, e), e;
  }, je = function(n) {
    return ee.get(n) || {};
  }, At = function(n) {
    return ee.has(n);
  };
} else {
  var be = Pu("state");
  Nu[be] = !0, Et = function(n, e) {
    if (Qt(n, be))
      throw new br(Rn);
    return e.facade = n, wu(n, be, e), e;
  }, je = function(n) {
    return Qt(n, be) ? n[be] : {};
  }, At = function(n) {
    return Qt(n, be);
  };
}
var Pt = {
  set: Et,
  get: je,
  has: At,
  enforce: Lu,
  getterFor: Mu
}, Vr = w, Ru = x, Yu = U, ot = k, _r = V, Bu = ba.CONFIGURABLE, xu = _a, Da = Pt, ku = Da.enforce, ju = Da.get, Yn = String, Tt = Object.defineProperty, zu = Vr("".slice), Fu = Vr("".replace), Gu = Vr([].join), Hu = _r && !Ru(function() {
  return Tt(function() {
  }, "length", { value: 8 }).length !== 8;
}), Vu = String(String).split("String"), Wu = Ea.exports = function(n, e, i) {
  zu(Yn(e), 0, 7) === "Symbol(" && (e = "[" + Fu(Yn(e), /^Symbol\(([^)]*)\)/, "$1") + "]"), i && i.getter && (e = "get " + e), i && i.setter && (e = "set " + e), (!ot(n, "name") || Bu && n.name !== e) && (_r ? Tt(n, "name", { value: e, configurable: !0 }) : n.name = e), Hu && i && ot(i, "arity") && n.length !== i.arity && Tt(n, "length", { value: i.arity });
  try {
    i && ot(i, "constructor") && i.constructor ? _r && Tt(n, "prototype", { writable: !1 }) : n.prototype && (n.prototype = void 0);
  } catch {
  }
  var t = ku(n);
  return ot(t, "source") || (t.source = Gu(Vu, typeof e == "string" ? e : "")), n;
};
Function.prototype.toString = Wu(function() {
  return Yu(this) && ju(this).source || xu(this);
}, "toString");
var Ia = Ea.exports, Ku = U, qu = W, Xu = Ia, Ju = jr, Se = function(n, e, i, t) {
  t || (t = {});
  var r = t.enumerable, a = t.name !== void 0 ? t.name : e;
  if (Ku(i) && Xu(i, a, t), t.global)
    r ? n[e] = i : Ju(e, i);
  else {
    try {
      t.unsafe ? n[e] && (r = !0) : delete n[e];
    } catch {
    }
    r ? n[e] = i : qu.f(n, e, {
      value: i,
      enumerable: !1,
      configurable: !t.nonConfigurable,
      writable: !t.nonWritable
    });
  }
  return n;
}, Xe = {}, Zu = Math.ceil, Qu = Math.floor, ef = Math.trunc || function(e) {
  var i = +e;
  return (i > 0 ? Qu : Zu)(i);
}, tf = ef, Wr = function(n) {
  var e = +n;
  return e !== e || e === 0 ? 0 : tf(e);
}, rf = Wr, nf = Math.max, af = Math.min, $a = function(n, e) {
  var i = rf(n);
  return i < 0 ? nf(i + e, 0) : af(i, e);
}, sf = Wr, of = Math.min, uf = function(n) {
  return n > 0 ? of(sf(n), 9007199254740991) : 0;
}, ff = uf, Kr = function(n) {
  return ff(n.length);
}, lf = pe, cf = $a, df = Kr, Bn = function(n) {
  return function(e, i, t) {
    var r = lf(e), a = df(r), s = cf(t, a), u;
    if (n && i !== i) {
      for (; a > s; )
        if (u = r[s++], u !== u)
          return !0;
    } else
      for (; a > s; s++)
        if ((n || s in r) && r[s] === i)
          return n || s || 0;
    return !n && -1;
  };
}, hf = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: Bn(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: Bn(!1)
}, mf = w, tr = k, vf = pe, pf = hf.indexOf, Tf = wt, xn = mf([].push), Ca = function(n, e) {
  var i = vf(n), t = 0, r = [], a;
  for (a in i)
    !tr(Tf, a) && tr(i, a) && xn(r, a);
  for (; e.length > t; )
    tr(i, a = e[t++]) && (~pf(r, a) || xn(r, a));
  return r;
}, qr = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], yf = Ca, Sf = qr, gf = Sf.concat("length", "prototype");
Xe.f = Object.getOwnPropertyNames || function(e) {
  return yf(e, gf);
};
var Je = {};
Je.f = Object.getOwnPropertySymbols;
var Ef = Te, Af = w, bf = Xe, _f = Je, Of = ye, Df = Af([].concat), If = Ef("Reflect", "ownKeys") || function(e) {
  var i = bf.f(Of(e)), t = _f.f;
  return t ? Df(i, t(e)) : i;
}, kn = k, $f = If, Cf = He, wf = W, wa = function(n, e, i) {
  for (var t = $f(e), r = wf.f, a = Cf.f, s = 0; s < t.length; s++) {
    var u = t[s];
    !kn(n, u) && !(i && kn(i, u)) && r(n, u, a(e, u));
  }
}, Pf = x, Nf = U, Uf = /#|\.prototype\./, Ze = function(n, e) {
  var i = Mf[Lf(n)];
  return i === Yf ? !0 : i === Rf ? !1 : Nf(e) ? Pf(e) : !!e;
}, Lf = Ze.normalize = function(n) {
  return String(n).replace(Uf, ".").toLowerCase();
}, Mf = Ze.data = {}, Rf = Ze.NATIVE = "N", Yf = Ze.POLYFILL = "P", Pa = Ze, rr = F, Bf = He.f, xf = $t, kf = Se, jf = jr, zf = wa, Ff = Pa, re = function(n, e) {
  var i = n.target, t = n.global, r = n.stat, a, s, u, o, f, m;
  if (t ? s = rr : r ? s = rr[i] || jf(i, {}) : s = (rr[i] || {}).prototype, s)
    for (u in e) {
      if (f = e[u], n.dontCallGetSet ? (m = Bf(s, u), o = m && m.value) : o = s[u], a = Ff(t ? u : i + (r ? "." : "#") + u, n.forced), !a && o !== void 0) {
        if (typeof f == typeof o)
          continue;
        zf(f, o);
      }
      (n.sham || o && o.sham) && xf(f, "sham", !0), kf(s, u, f, n);
    }
}, Gf = re, Hf = V, jn = W.f;
Gf({ target: "Object", stat: !0, forced: Object.defineProperty !== jn, sham: !Hf }, {
  defineProperty: jn
});
var Qe = {}, Vf = F, Na = Vf, Xr = {}, Wf = K;
Xr.f = Wf;
var zn = Na, Kf = k, qf = Xr, Xf = W.f, Jr = function(n) {
  var e = zn.Symbol || (zn.Symbol = {});
  Kf(e, n) || Xf(e, n, {
    value: qf.f(n)
  });
}, Jf = Jr;
Jf("iterator");
var Zr = {}, Zf = Ca, Qf = qr, Qr = Object.keys || function(e) {
  return Zf(e, Qf);
}, el = V, tl = ga, rl = W, nl = ye, il = pe, al = Qr;
Zr.f = el && !tl ? Object.defineProperties : function(e, i) {
  nl(e);
  for (var t = il(i), r = al(i), a = r.length, s = 0, u; a > s; )
    rl.f(e, u = r[s++], t[u]);
  return e;
};
var sl = Te, ol = sl("document", "documentElement"), ul = ye, fl = Zr, Fn = qr, ll = wt, cl = ol, dl = Gr, hl = Ct, Gn = ">", Hn = "<", Or = "prototype", Dr = "script", Ua = hl("IE_PROTO"), nr = function() {
}, La = function(n) {
  return Hn + Dr + Gn + n + Hn + "/" + Dr + Gn;
}, Vn = function(n) {
  n.write(La("")), n.close();
  var e = n.parentWindow.Object;
  return n = null, e;
}, ml = function() {
  var n = dl("iframe"), e = "java" + Dr + ":", i;
  return n.style.display = "none", cl.appendChild(n), n.src = String(e), i = n.contentWindow.document, i.open(), i.write(La("document.F=Object")), i.close(), i.F;
}, ut, yt = function() {
  try {
    ut = new ActiveXObject("htmlfile");
  } catch {
  }
  yt = typeof document < "u" ? document.domain && ut ? Vn(ut) : ml() : Vn(ut);
  for (var n = Fn.length; n--; )
    delete yt[Or][Fn[n]];
  return yt();
};
ll[Ua] = !0;
var en = Object.create || function(e, i) {
  var t;
  return e !== null ? (nr[Or] = ul(e), t = new nr(), nr[Or] = null, t[Ua] = e) : t = yt(), i === void 0 ? t : fl.f(t, i);
}, vl = K, pl = en, Tl = W.f, Ir = vl("unscopables"), $r = Array.prototype;
$r[Ir] === void 0 && Tl($r, Ir, {
  configurable: !0,
  value: pl(null)
});
var yl = function(n) {
  $r[Ir][n] = !0;
}, tn = {}, Sl = x, gl = !Sl(function() {
  function n() {
  }
  return n.prototype.constructor = null, Object.getPrototypeOf(new n()) !== n.prototype;
}), El = k, Al = U, bl = qe, _l = Ct, Ol = gl, Wn = _l("IE_PROTO"), Cr = Object, Dl = Cr.prototype, Ma = Ol ? Cr.getPrototypeOf : function(n) {
  var e = bl(n);
  if (El(e, Wn))
    return e[Wn];
  var i = e.constructor;
  return Al(i) && e instanceof i ? i.prototype : e instanceof Cr ? Dl : null;
}, Il = x, $l = U, Cl = ce, Kn = Ma, wl = Se, Pl = K, wr = Pl("iterator"), Ra = !1, ve, ir, ar;
[].keys && (ar = [].keys(), "next" in ar ? (ir = Kn(Kn(ar)), ir !== Object.prototype && (ve = ir)) : Ra = !0);
var Nl = !Cl(ve) || Il(function() {
  var n = {};
  return ve[wr].call(n) !== n;
});
Nl && (ve = {});
$l(ve[wr]) || wl(ve, wr, function() {
  return this;
});
var Ya = {
  IteratorPrototype: ve,
  BUGGY_SAFARI_ITERATORS: Ra
}, Ul = W.f, Ll = k, Ml = K, qn = Ml("toStringTag"), rn = function(n, e, i) {
  n && !i && (n = n.prototype), n && !Ll(n, qn) && Ul(n, qn, { configurable: !0, value: e });
}, Rl = Ya.IteratorPrototype, Yl = en, Bl = Ve, xl = rn, kl = tn, jl = function() {
  return this;
}, zl = function(n, e, i, t) {
  var r = e + " Iterator";
  return n.prototype = Yl(Rl, { next: Bl(+!t, i) }), xl(n, r, !1), kl[r] = jl, n;
}, Fl = w, Gl = kr, Hl = function(n, e, i) {
  try {
    return Fl(Gl(Object.getOwnPropertyDescriptor(n, e)[i]));
  } catch {
  }
}, Vl = U, Wl = String, Kl = TypeError, ql = function(n) {
  if (typeof n == "object" || Vl(n))
    return n;
  throw new Kl("Can't set " + Wl(n) + " as a prototype");
}, Xl = Hl, Jl = ye, Zl = ql, Ba = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var n = !1, e = {}, i;
  try {
    i = Xl(Object.prototype, "__proto__", "set"), i(e, []), n = e instanceof Array;
  } catch {
  }
  return function(r, a) {
    return Jl(r), Zl(a), n ? i(r, a) : r.__proto__ = a, r;
  };
}() : void 0), Ql = re, ec = le, xa = ba, tc = U, rc = zl, Xn = Ma, Jn = Ba, nc = rn, ic = $t, sr = Se, ac = K, sc = tn, ka = Ya, oc = xa.PROPER, uc = xa.CONFIGURABLE, Zn = ka.IteratorPrototype, ft = ka.BUGGY_SAFARI_ITERATORS, Me = ac("iterator"), Qn = "keys", Re = "values", ei = "entries", fc = function() {
  return this;
}, ja = function(n, e, i, t, r, a, s) {
  rc(i, e, t);
  var u = function(p) {
    if (p === r && v)
      return v;
    if (!ft && p && p in m)
      return m[p];
    switch (p) {
      case Qn:
        return function() {
          return new i(this, p);
        };
      case Re:
        return function() {
          return new i(this, p);
        };
      case ei:
        return function() {
          return new i(this, p);
        };
    }
    return function() {
      return new i(this);
    };
  }, o = e + " Iterator", f = !1, m = n.prototype, l = m[Me] || m["@@iterator"] || r && m[r], v = !ft && l || u(r), h = e === "Array" && m.entries || l, c, T, y;
  if (h && (c = Xn(h.call(new n())), c !== Object.prototype && c.next && (Xn(c) !== Zn && (Jn ? Jn(c, Zn) : tc(c[Me]) || sr(c, Me, fc)), nc(c, o, !0))), oc && r === Re && l && l.name !== Re && (uc ? ic(m, "name", Re) : (f = !0, v = function() {
    return ec(l, this);
  })), r)
    if (T = {
      values: u(Re),
      keys: a ? v : u(Qn),
      entries: u(ei)
    }, s)
      for (y in T)
        (ft || f || !(y in m)) && sr(m, y, T[y]);
    else
      Ql({ target: e, proto: !0, forced: ft || f }, T);
  return m[Me] !== v && sr(m, Me, v, { name: r }), sc[e] = v, T;
}, za = function(n, e) {
  return { value: n, done: e };
}, lc = pe, nn = yl, ti = tn, Fa = Pt, cc = W.f, dc = ja, lt = za, hc = V, Ga = "Array Iterator", mc = Fa.set, vc = Fa.getterFor(Ga), pc = dc(Array, "Array", function(n, e) {
  mc(this, {
    type: Ga,
    target: lc(n),
    // target
    index: 0,
    // next index
    kind: e
    // kind
  });
}, function() {
  var n = vc(this), e = n.target, i = n.kind, t = n.index++;
  if (!e || t >= e.length)
    return n.target = void 0, lt(void 0, !0);
  switch (i) {
    case "keys":
      return lt(t, !1);
    case "values":
      return lt(e[t], !1);
  }
  return lt([t, e[t]], !1);
}, "values"), ri = ti.Arguments = ti.Array;
nn("keys");
nn("values");
nn("entries");
if (hc && ri.name !== "values")
  try {
    cc(ri, "name", { value: "values" });
  } catch {
  }
var Tc = K, yc = Tc("toStringTag"), Ha = {};
Ha[yc] = "z";
var an = String(Ha) === "[object z]", Sc = an, gc = U, St = Ne, Ec = K, Ac = Ec("toStringTag"), bc = Object, _c = St(function() {
  return arguments;
}()) === "Arguments", Oc = function(n, e) {
  try {
    return n[e];
  } catch {
  }
}, sn = Sc ? St : function(n) {
  var e, i, t;
  return n === void 0 ? "Undefined" : n === null ? "Null" : typeof (i = Oc(e = bc(n), Ac)) == "string" ? i : _c ? St(e) : (t = St(e)) === "Object" && gc(e.callee) ? "Arguments" : t;
}, Dc = sn, Ic = String, ge = function(n) {
  if (Dc(n) === "Symbol")
    throw new TypeError("Cannot convert a Symbol value to a string");
  return Ic(n);
}, on = w, $c = Wr, Cc = ge, wc = Ot, Pc = on("".charAt), ni = on("".charCodeAt), Nc = on("".slice), ii = function(n) {
  return function(e, i) {
    var t = Cc(wc(e)), r = $c(i), a = t.length, s, u;
    return r < 0 || r >= a ? n ? "" : void 0 : (s = ni(t, r), s < 55296 || s > 56319 || r + 1 === a || (u = ni(t, r + 1)) < 56320 || u > 57343 ? n ? Pc(t, r) : s : n ? Nc(t, r, r + 2) : (s - 55296 << 10) + (u - 56320) + 65536);
  };
}, Uc = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: ii(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: ii(!0)
}, Lc = Uc.charAt, Mc = ge, Va = Pt, Rc = ja, ai = za, Wa = "String Iterator", Yc = Va.set, Bc = Va.getterFor(Wa);
Rc(String, "String", function(n) {
  Yc(this, {
    type: Wa,
    string: Mc(n),
    index: 0
  });
}, function() {
  var e = Bc(this), i = e.string, t = e.index, r;
  return t >= i.length ? ai(void 0, !0) : (r = Lc(i, t), e.index += r.length, ai(r, !1));
});
var xc = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
}, kc = Gr, or = kc("span").classList, si = or && or.constructor && or.constructor.prototype, jc = si === Object.prototype ? void 0 : si, oi = F, Ka = xc, zc = jc, Be = pc, ur = $t, qa = K, fr = qa("iterator"), ui = qa("toStringTag"), lr = Be.values, Xa = function(n, e) {
  if (n) {
    if (n[fr] !== lr)
      try {
        ur(n, fr, lr);
      } catch {
        n[fr] = lr;
      }
    if (n[ui] || ur(n, ui, e), Ka[e]) {
      for (var i in Be)
        if (n[i] !== Be[i])
          try {
            ur(n, i, Be[i]);
          } catch {
            n[i] = Be[i];
          }
    }
  }
};
for (var cr in Ka)
  Xa(oi[cr] && oi[cr].prototype, cr);
Xa(zc, "DOMTokenList");
var fi = V, Fc = w, Gc = le, Hc = x, dr = Qr, Vc = Je, Wc = _t, Kc = qe, qc = xr, _e = Object.assign, li = Object.defineProperty, Xc = Fc([].concat), Jc = !_e || Hc(function() {
  if (fi && _e({ b: 1 }, _e(li({}, "a", {
    enumerable: !0,
    get: function() {
      li(this, "b", {
        value: 3,
        enumerable: !1
      });
    }
  }), { b: 2 })).b !== 1)
    return !0;
  var n = {}, e = {}, i = Symbol("assign detection"), t = "abcdefghijklmnopqrst";
  return n[i] = 7, t.split("").forEach(function(r) {
    e[r] = r;
  }), _e({}, n)[i] !== 7 || dr(_e({}, e)).join("") !== t;
}) ? function(e, i) {
  for (var t = Kc(e), r = arguments.length, a = 1, s = Vc.f, u = Wc.f; r > a; )
    for (var o = qc(arguments[a++]), f = s ? Xc(dr(o), s(o)) : dr(o), m = f.length, l = 0, v; m > l; )
      v = f[l++], (!fi || Gc(u, o, v)) && (t[v] = o[v]);
  return t;
} : _e, Zc = re, ci = Jc;
Zc({ target: "Object", stat: !0, arity: 2, forced: Object.assign !== ci }, {
  assign: ci
});
var Qc = le, ed = Te, td = K, rd = Se, Ja = function() {
  var n = ed("Symbol"), e = n && n.prototype, i = e && e.valueOf, t = td("toPrimitive");
  e && !e[t] && rd(e, t, function(r) {
    return Qc(i, this);
  }, { arity: 1 });
}, nd = Jr, id = Ja;
nd("toPrimitive");
id();
var ad = ye, sd = pa, od = TypeError, ud = function(n) {
  if (ad(this), n === "string" || n === "default")
    n = "string";
  else if (n !== "number")
    throw new od("Incorrect hint");
  return sd(this, n);
}, fd = k, ld = Se, cd = ud, dd = K, di = dd("toPrimitive"), hi = Date.prototype;
fd(hi, di) || ld(hi, di, cd);
var Za = {}, hd = It, md = W, vd = Ve, pd = function(n, e, i) {
  var t = hd(e);
  t in n ? md.f(n, t, vd(0, i)) : n[t] = i;
}, mi = $a, Td = Kr, yd = pd, Sd = Array, gd = Math.max, Ed = function(n, e, i) {
  for (var t = Td(n), r = mi(e, t), a = mi(i === void 0 ? t : i, t), s = Sd(gd(a - r, 0)), u = 0; r < a; r++, u++)
    yd(s, u, n[r]);
  return s.length = u, s;
}, Ad = Ne, bd = pe, Qa = Xe.f, _d = Ed, es = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], Od = function(n) {
  try {
    return Qa(n);
  } catch {
    return _d(es);
  }
};
Za.f = function(e) {
  return es && Ad(e) === "Window" ? Od(e) : Qa(bd(e));
};
var vi = Ia, Dd = W, ts = function(n, e, i) {
  return i.get && vi(i.get, e, { getter: !0 }), i.set && vi(i.set, e, { setter: !0 }), Dd.f(n, e, i);
}, Id = Ne, $d = w, Cd = function(n) {
  if (Id(n) === "Function")
    return $d(n);
}, pi = Cd, wd = kr, Pd = bt, Nd = pi(pi.bind), Ud = function(n, e) {
  return wd(n), e === void 0 ? n : Pd ? Nd(n, e) : function() {
    return n.apply(e, arguments);
  };
}, Ld = Ne, rs = Array.isArray || function(e) {
  return Ld(e) === "Array";
}, Md = w, Rd = x, ns = U, Yd = sn, Bd = Te, xd = _a, is = function() {
}, kd = [], as = Bd("Reflect", "construct"), un = /^\s*(?:class|function)\b/, jd = Md(un.exec), zd = !un.test(is), Ye = function(e) {
  if (!ns(e))
    return !1;
  try {
    return as(is, kd, e), !0;
  } catch {
    return !1;
  }
}, ss = function(e) {
  if (!ns(e))
    return !1;
  switch (Yd(e)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return zd || !!jd(un, xd(e));
  } catch {
    return !0;
  }
};
ss.sham = !0;
var Fd = !as || Rd(function() {
  var n;
  return Ye(Ye.call) || !Ye(Object) || !Ye(function() {
    n = !0;
  }) || n;
}) ? ss : Ye, Ti = rs, Gd = Fd, Hd = ce, Vd = K, Wd = Vd("species"), yi = Array, Kd = function(n) {
  var e;
  return Ti(n) && (e = n.constructor, Gd(e) && (e === yi || Ti(e.prototype)) ? e = void 0 : Hd(e) && (e = e[Wd], e === null && (e = void 0))), e === void 0 ? yi : e;
}, qd = Kd, Xd = function(n, e) {
  return new (qd(n))(e === 0 ? 0 : e);
}, Jd = Ud, Zd = w, Qd = xr, eh = qe, th = Kr, rh = Xd, Si = Zd([].push), ue = function(n) {
  var e = n === 1, i = n === 2, t = n === 3, r = n === 4, a = n === 6, s = n === 7, u = n === 5 || a;
  return function(o, f, m, l) {
    for (var v = eh(o), h = Qd(v), c = Jd(f, m), T = th(h), y = 0, p = l || rh, S = e ? p(o, T) : i || s ? p(o, 0) : void 0, E, b; T > y; y++)
      if ((u || y in h) && (E = h[y], b = c(E, y, v), n))
        if (e)
          S[y] = b;
        else if (b)
          switch (n) {
            case 3:
              return !0;
            case 5:
              return E;
            case 6:
              return y;
            case 2:
              Si(S, E);
          }
        else
          switch (n) {
            case 4:
              return !1;
            case 7:
              Si(S, E);
          }
    return a ? -1 : t || r ? r : S;
  };
}, nh = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: ue(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: ue(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: ue(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: ue(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: ue(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: ue(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: ue(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: ue(7)
}, Nt = re, Ut = F, fn = le, ih = w, Ce = V, we = Ue, ah = x, L = k, sh = Dt, Pr = ye, Lt = pe, ln = It, oh = ge, Nr = Ve, ze = en, os = Qr, uh = Xe, us = Za, fh = Je, fs = He, ls = W, lh = Zr, cs = _t, hr = Se, ch = ts, cn = Ke, dh = Ct, ds = wt, gi = Fr, hh = K, mh = Xr, vh = Jr, ph = Ja, Th = rn, hs = Pt, Mt = nh.forEach, H = dh("hidden"), Rt = "Symbol", Fe = "prototype", yh = hs.set, Ei = hs.getterFor(Rt), X = Object[Fe], he = Ut.Symbol, xe = he && he[Fe], Sh = Ut.RangeError, gh = Ut.TypeError, mr = Ut.QObject, ms = fs.f, me = ls.f, vs = us.f, Eh = cs.f, ps = ih([].push), ae = cn("symbols"), et = cn("op-symbols"), Ah = cn("wks"), Ur = !mr || !mr[Fe] || !mr[Fe].findChild, Ts = function(n, e, i) {
  var t = ms(X, e);
  t && delete X[e], me(n, e, i), t && n !== X && me(X, e, t);
}, Lr = Ce && ah(function() {
  return ze(me({}, "a", {
    get: function() {
      return me(this, "a", { value: 7 }).a;
    }
  })).a !== 7;
}) ? Ts : me, vr = function(n, e) {
  var i = ae[n] = ze(xe);
  return yh(i, {
    type: Rt,
    tag: n,
    description: e
  }), Ce || (i.description = e), i;
}, Yt = function(e, i, t) {
  e === X && Yt(et, i, t), Pr(e);
  var r = ln(i);
  return Pr(t), L(ae, r) ? (t.enumerable ? (L(e, H) && e[H][r] && (e[H][r] = !1), t = ze(t, { enumerable: Nr(0, !1) })) : (L(e, H) || me(e, H, Nr(1, {})), e[H][r] = !0), Lr(e, r, t)) : me(e, r, t);
}, dn = function(e, i) {
  Pr(e);
  var t = Lt(i), r = os(t).concat(gs(t));
  return Mt(r, function(a) {
    (!Ce || fn(Mr, t, a)) && Yt(e, a, t[a]);
  }), e;
}, bh = function(e, i) {
  return i === void 0 ? ze(e) : dn(ze(e), i);
}, Mr = function(e) {
  var i = ln(e), t = fn(Eh, this, i);
  return this === X && L(ae, i) && !L(et, i) ? !1 : t || !L(this, i) || !L(ae, i) || L(this, H) && this[H][i] ? t : !0;
}, ys = function(e, i) {
  var t = Lt(e), r = ln(i);
  if (!(t === X && L(ae, r) && !L(et, r))) {
    var a = ms(t, r);
    return a && L(ae, r) && !(L(t, H) && t[H][r]) && (a.enumerable = !0), a;
  }
}, Ss = function(e) {
  var i = vs(Lt(e)), t = [];
  return Mt(i, function(r) {
    !L(ae, r) && !L(ds, r) && ps(t, r);
  }), t;
}, gs = function(n) {
  var e = n === X, i = vs(e ? et : Lt(n)), t = [];
  return Mt(i, function(r) {
    L(ae, r) && (!e || L(X, r)) && ps(t, ae[r]);
  }), t;
};
we || (he = function() {
  if (sh(xe, this))
    throw new gh("Symbol is not a constructor");
  var e = !arguments.length || arguments[0] === void 0 ? void 0 : oh(arguments[0]), i = gi(e), t = function(r) {
    this === X && fn(t, et, r), L(this, H) && L(this[H], i) && (this[H][i] = !1);
    var a = Nr(1, r);
    try {
      Lr(this, i, a);
    } catch (s) {
      if (!(s instanceof Sh))
        throw s;
      Ts(this, i, a);
    }
  };
  return Ce && Ur && Lr(X, i, { configurable: !0, set: t }), vr(i, e);
}, xe = he[Fe], hr(xe, "toString", function() {
  return Ei(this).tag;
}), hr(he, "withoutSetter", function(n) {
  return vr(gi(n), n);
}), cs.f = Mr, ls.f = Yt, lh.f = dn, fs.f = ys, uh.f = us.f = Ss, fh.f = gs, mh.f = function(n) {
  return vr(hh(n), n);
}, Ce && (ch(xe, "description", {
  configurable: !0,
  get: function() {
    return Ei(this).description;
  }
}), hr(X, "propertyIsEnumerable", Mr, { unsafe: !0 })));
Nt({ global: !0, constructor: !0, wrap: !0, forced: !we, sham: !we }, {
  Symbol: he
});
Mt(os(Ah), function(n) {
  vh(n);
});
Nt({ target: Rt, stat: !0, forced: !we }, {
  useSetter: function() {
    Ur = !0;
  },
  useSimple: function() {
    Ur = !1;
  }
});
Nt({ target: "Object", stat: !0, forced: !we, sham: !Ce }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: bh,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: Yt,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: dn,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: ys
});
Nt({ target: "Object", stat: !0, forced: !we }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: Ss
});
ph();
Th(he, Rt);
ds[H] = !0;
var _h = Ue, Es = _h && !!Symbol.for && !!Symbol.keyFor, Oh = re, Dh = Te, Ih = k, $h = ge, As = Ke, Ch = Es, pr = As("string-to-symbol-registry"), wh = As("symbol-to-string-registry");
Oh({ target: "Symbol", stat: !0, forced: !Ch }, {
  for: function(n) {
    var e = $h(n);
    if (Ih(pr, e))
      return pr[e];
    var i = Dh("Symbol")(e);
    return pr[e] = i, wh[i] = e, i;
  }
});
var Ph = re, Nh = k, Uh = We, Lh = va, Mh = Ke, Rh = Es, Ai = Mh("symbol-to-string-registry");
Ph({ target: "Symbol", stat: !0, forced: !Rh }, {
  keyFor: function(e) {
    if (!Uh(e))
      throw new TypeError(Lh(e) + " is not a symbol");
    if (Nh(Ai, e))
      return Ai[e];
  }
});
var Yh = bt, bs = Function.prototype, bi = bs.apply, _i = bs.call, Bh = typeof Reflect == "object" && Reflect.apply || (Yh ? _i.bind(bi) : function() {
  return _i.apply(bi, arguments);
}), xh = w, kh = xh([].slice), jh = w, Oi = rs, zh = U, Di = Ne, Fh = ge, Ii = jh([].push), Gh = function(n) {
  if (zh(n))
    return n;
  if (Oi(n)) {
    for (var e = n.length, i = [], t = 0; t < e; t++) {
      var r = n[t];
      typeof r == "string" ? Ii(i, r) : (typeof r == "number" || Di(r) === "Number" || Di(r) === "String") && Ii(i, Fh(r));
    }
    var a = i.length, s = !0;
    return function(u, o) {
      if (s)
        return s = !1, o;
      if (Oi(this))
        return o;
      for (var f = 0; f < a; f++)
        if (i[f] === u)
          return o;
    };
  }
}, Hh = re, _s = Te, Os = Bh, Vh = le, tt = w, Ds = x, $i = U, Ci = We, Is = kh, Wh = Gh, Kh = Ue, qh = String, fe = _s("JSON", "stringify"), ct = tt(/./.exec), wi = tt("".charAt), Xh = tt("".charCodeAt), Jh = tt("".replace), Zh = tt(1 .toString), Qh = /[\uD800-\uDFFF]/g, Pi = /^[\uD800-\uDBFF]$/, Ni = /^[\uDC00-\uDFFF]$/, Ui = !Kh || Ds(function() {
  var n = _s("Symbol")("stringify detection");
  return fe([n]) !== "[null]" || fe({ a: n }) !== "{}" || fe(Object(n)) !== "{}";
}), Li = Ds(function() {
  return fe("\uDF06\uD834") !== '"\\udf06\\ud834"' || fe("\uDEAD") !== '"\\udead"';
}), em = function(n, e) {
  var i = Is(arguments), t = Wh(e);
  if (!(!$i(t) && (n === void 0 || Ci(n))))
    return i[1] = function(r, a) {
      if ($i(t) && (a = Vh(t, this, qh(r), a)), !Ci(a))
        return a;
    }, Os(fe, null, i);
}, tm = function(n, e, i) {
  var t = wi(i, e - 1), r = wi(i, e + 1);
  return ct(Pi, n) && !ct(Ni, r) || ct(Ni, n) && !ct(Pi, t) ? "\\u" + Zh(Xh(n, 0), 16) : n;
};
fe && Hh({ target: "JSON", stat: !0, arity: 3, forced: Ui || Li }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  stringify: function(e, i, t) {
    var r = Is(arguments), a = Os(Ui ? em : fe, null, r);
    return Li && typeof a == "string" ? Jh(a, Qh, tm) : a;
  }
});
var rm = re, nm = Ue, im = x, $s = Je, am = qe, sm = !nm || im(function() {
  $s.f(1);
});
rm({ target: "Object", stat: !0, forced: sm }, {
  getOwnPropertySymbols: function(e) {
    var i = $s.f;
    return i ? i(am(e)) : [];
  }
});
var om = re, um = V, fm = F, dt = w, lm = k, cm = U, dm = Dt, hm = ge, mm = ts, vm = wa, ie = fm.Symbol, de = ie && ie.prototype;
if (um && cm(ie) && (!("description" in de) || // Safari 12 bug
ie().description !== void 0)) {
  var Mi = {}, ht = function() {
    var e = arguments.length < 1 || arguments[0] === void 0 ? void 0 : hm(arguments[0]), i = dm(de, this) ? new ie(e) : e === void 0 ? ie() : ie(e);
    return e === "" && (Mi[i] = !0), i;
  };
  vm(ht, ie), ht.prototype = de, de.constructor = ht;
  var pm = String(ie("description detection")) === "Symbol(description detection)", Tm = dt(de.valueOf), ym = dt(de.toString), Sm = /^Symbol\((.*)\)[^)]+$/, gm = dt("".replace), Em = dt("".slice);
  mm(de, "description", {
    configurable: !0,
    get: function() {
      var e = Tm(this);
      if (lm(Mi, e))
        return "";
      var i = ym(e), t = pm ? Em(i, 7, -1) : gm(i, Sm, "$1");
      return t === "" ? void 0 : t;
    }
  }), om({ global: !0, constructor: !0, forced: !0 }, {
    Symbol: ht
  });
}
var Am = an, bm = sn, _m = Am ? {}.toString : function() {
  return "[object " + bm(this) + "]";
}, Om = an, Dm = Se, Im = _m;
Om || Dm(Object.prototype, "toString", Im, { unsafe: !0 });
var $m = U, Cm = ce, Ri = Ba, wm = function(n, e, i) {
  var t, r;
  return (
    // it can work only with native `setPrototypeOf`
    Ri && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    $m(t = e.constructor) && t !== i && Cm(r = t.prototype) && r !== i.prototype && Ri(n, r), n
  );
}, Pm = w, Nm = Pm(1 .valueOf), Um = `	
\v\f\r                　\u2028\u2029\uFEFF`, Lm = w, Mm = Ot, Rm = ge, Rr = Um, Yi = Lm("".replace), Ym = RegExp("^[" + Rr + "]+"), Bm = RegExp("(^|[^" + Rr + "])[" + Rr + "]+$"), Tr = function(n) {
  return function(e) {
    var i = Rm(Mm(e));
    return n & 1 && (i = Yi(i, Ym, "")), n & 2 && (i = Yi(i, Bm, "$1")), i;
  };
}, xm = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: Tr(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: Tr(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: Tr(3)
}, km = re, Cs = po, jm = V, ws = F, Ps = Na, Ns = w, zm = Pa, Bi = k, Fm = wm, Gm = Dt, Hm = We, Us = ya, Vm = x, Wm = Xe.f, Km = He.f, qm = W.f, Xm = Nm, Jm = xm.trim, Bt = "Number", Ie = ws[Bt];
Ps[Bt];
var hn = Ie.prototype, Zm = ws.TypeError, Qm = Ns("".slice), mt = Ns("".charCodeAt), ev = function(n) {
  var e = Us(n, "number");
  return typeof e == "bigint" ? e : tv(e);
}, tv = function(n) {
  var e = Us(n, "number"), i, t, r, a, s, u, o, f;
  if (Hm(e))
    throw new Zm("Cannot convert a Symbol value to a number");
  if (typeof e == "string" && e.length > 2) {
    if (e = Jm(e), i = mt(e, 0), i === 43 || i === 45) {
      if (t = mt(e, 2), t === 88 || t === 120)
        return NaN;
    } else if (i === 48) {
      switch (mt(e, 1)) {
        case 66:
        case 98:
          r = 2, a = 49;
          break;
        case 79:
        case 111:
          r = 8, a = 55;
          break;
        default:
          return +e;
      }
      for (s = Qm(e, 2), u = s.length, o = 0; o < u; o++)
        if (f = mt(s, o), f < 48 || f > a)
          return NaN;
      return parseInt(s, r);
    }
  }
  return +e;
}, mn = zm(Bt, !Ie(" 0o1") || !Ie("0b1") || Ie("+0x1")), rv = function(n) {
  return Gm(hn, n) && Vm(function() {
    Xm(n);
  });
}, xt = function(e) {
  var i = arguments.length < 1 ? 0 : Ie(ev(e));
  return rv(this) ? Fm(Object(i), this, xt) : i;
};
xt.prototype = hn;
mn && !Cs && (hn.constructor = xt);
km({ global: !0, constructor: !0, wrap: !0, forced: mn }, {
  Number: xt
});
var nv = function(n, e) {
  for (var i = jm ? Wm(e) : (
    // ES3:
    "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(",")
  ), t = 0, r; i.length > t; t++)
    Bi(e, r = i[t]) && !Bi(n, r) && qm(n, r, Km(e, r));
};
(mn || Cs) && nv(Ps[Bt], Ie);
var Le = {};
Object.defineProperty(Le, "__esModule", {
  value: !0
});
Le.LogLevel = void 0;
var iv = /* @__PURE__ */ function(n) {
  return n[n.Debug = 0] = "Debug", n[n.Info = 1] = "Info", n[n.Warn = 2] = "Warn", n[n.Error = 3] = "Error", n[n.Fatal = 4] = "Fatal", n;
}({});
Le.LogLevel = iv;
Object.defineProperty(Qe, "__esModule", {
  value: !0
});
Qe.ConsoleLogger = void 0;
Qe.buildConsoleLogger = fv;
var M = Le;
function Pe(n) {
  "@babel/helpers - typeof";
  return Pe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Pe(n);
}
function av(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function xi(n, e) {
  for (var i = 0; i < e.length; i++) {
    var t = e[i];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(n, Ls(t.key), t);
  }
}
function sv(n, e, i) {
  return e && xi(n.prototype, e), i && xi(n, i), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function ov(n, e, i) {
  return e = Ls(e), e in n ? Object.defineProperty(n, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = i, n;
}
function Ls(n) {
  var e = uv(n, "string");
  return Pe(e) === "symbol" ? e : String(e);
}
function uv(n, e) {
  if (Pe(n) !== "object" || n === null)
    return n;
  var i = n[Symbol.toPrimitive];
  if (i !== void 0) {
    var t = i.call(n, e || "default");
    if (Pe(t) !== "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
var Ms = /* @__PURE__ */ function() {
  function n(e) {
    av(this, n), ov(this, "context", void 0), this.context = e || {};
  }
  return sv(n, [{
    key: "formatMessage",
    value: function(i, t, r) {
      var a = "[" + M.LogLevel[t].toUpperCase() + "] ";
      return r && r.app && (a += r.app + ": "), typeof i == "string" ? a + i : (a += "Unexpected ".concat(i.name), i.message && (a += ' "'.concat(i.message, '"')), t === M.LogLevel.Debug && i.stack && (a += `

Stack trace:
`.concat(i.stack)), a);
    }
  }, {
    key: "log",
    value: function(i, t, r) {
      var a, s;
      if (!(typeof ((a = this.context) === null || a === void 0 ? void 0 : a.level) == "number" && i < ((s = this.context) === null || s === void 0 ? void 0 : s.level)))
        switch (Pe(t) === "object" && (r == null ? void 0 : r.error) === void 0 && (r.error = t), i) {
          case M.LogLevel.Debug:
            console.debug(this.formatMessage(t, M.LogLevel.Debug, r), r);
            break;
          case M.LogLevel.Info:
            console.info(this.formatMessage(t, M.LogLevel.Info, r), r);
            break;
          case M.LogLevel.Warn:
            console.warn(this.formatMessage(t, M.LogLevel.Warn, r), r);
            break;
          case M.LogLevel.Error:
            console.error(this.formatMessage(t, M.LogLevel.Error, r), r);
            break;
          case M.LogLevel.Fatal:
          default:
            console.error(this.formatMessage(t, M.LogLevel.Fatal, r), r);
            break;
        }
    }
  }, {
    key: "debug",
    value: function(i, t) {
      this.log(M.LogLevel.Debug, i, Object.assign({}, this.context, t));
    }
  }, {
    key: "info",
    value: function(i, t) {
      this.log(M.LogLevel.Info, i, Object.assign({}, this.context, t));
    }
  }, {
    key: "warn",
    value: function(i, t) {
      this.log(M.LogLevel.Warn, i, Object.assign({}, this.context, t));
    }
  }, {
    key: "error",
    value: function(i, t) {
      this.log(M.LogLevel.Error, i, Object.assign({}, this.context, t));
    }
  }, {
    key: "fatal",
    value: function(i, t) {
      this.log(M.LogLevel.Fatal, i, Object.assign({}, this.context, t));
    }
  }]), n;
}();
Qe.ConsoleLogger = Ms;
function fv(n) {
  return new Ms(n);
}
var kt = {}, rt = {}, Ee = {};
const lv = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
};
var Rs = lv;
const cv = "2.0.0", Ys = 256, dv = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, hv = 16, mv = Ys - 6, vv = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var Bs = {
  MAX_LENGTH: Ys,
  MAX_SAFE_COMPONENT_LENGTH: hv,
  MAX_SAFE_BUILD_LENGTH: mv,
  MAX_SAFE_INTEGER: dv,
  RELEASE_TYPES: vv,
  SEMVER_SPEC_VERSION: cv,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
}, Yr = { exports: {} };
(function(n, e) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: i,
    MAX_SAFE_BUILD_LENGTH: t,
    MAX_LENGTH: r
  } = Bs, a = Rs;
  e = n.exports = {};
  const s = e.re = [], u = e.safeRe = [], o = e.src = [], f = e.t = {};
  let m = 0;
  const l = "[a-zA-Z0-9-]", v = [
    ["\\s", 1],
    ["\\d", r],
    [l, t]
  ], h = (T) => {
    for (const [y, p] of v)
      T = T.split(`${y}*`).join(`${y}{0,${p}}`).split(`${y}+`).join(`${y}{1,${p}}`);
    return T;
  }, c = (T, y, p) => {
    const S = h(y), E = m++;
    a(T, E, y), f[T] = E, o[E] = y, s[E] = new RegExp(y, p ? "g" : void 0), u[E] = new RegExp(S, p ? "g" : void 0);
  };
  c("NUMERICIDENTIFIER", "0|[1-9]\\d*"), c("NUMERICIDENTIFIERLOOSE", "\\d+"), c("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${l}*`), c("MAINVERSION", `(${o[f.NUMERICIDENTIFIER]})\\.(${o[f.NUMERICIDENTIFIER]})\\.(${o[f.NUMERICIDENTIFIER]})`), c("MAINVERSIONLOOSE", `(${o[f.NUMERICIDENTIFIERLOOSE]})\\.(${o[f.NUMERICIDENTIFIERLOOSE]})\\.(${o[f.NUMERICIDENTIFIERLOOSE]})`), c("PRERELEASEIDENTIFIER", `(?:${o[f.NUMERICIDENTIFIER]}|${o[f.NONNUMERICIDENTIFIER]})`), c("PRERELEASEIDENTIFIERLOOSE", `(?:${o[f.NUMERICIDENTIFIERLOOSE]}|${o[f.NONNUMERICIDENTIFIER]})`), c("PRERELEASE", `(?:-(${o[f.PRERELEASEIDENTIFIER]}(?:\\.${o[f.PRERELEASEIDENTIFIER]})*))`), c("PRERELEASELOOSE", `(?:-?(${o[f.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${o[f.PRERELEASEIDENTIFIERLOOSE]})*))`), c("BUILDIDENTIFIER", `${l}+`), c("BUILD", `(?:\\+(${o[f.BUILDIDENTIFIER]}(?:\\.${o[f.BUILDIDENTIFIER]})*))`), c("FULLPLAIN", `v?${o[f.MAINVERSION]}${o[f.PRERELEASE]}?${o[f.BUILD]}?`), c("FULL", `^${o[f.FULLPLAIN]}$`), c("LOOSEPLAIN", `[v=\\s]*${o[f.MAINVERSIONLOOSE]}${o[f.PRERELEASELOOSE]}?${o[f.BUILD]}?`), c("LOOSE", `^${o[f.LOOSEPLAIN]}$`), c("GTLT", "((?:<|>)?=?)"), c("XRANGEIDENTIFIERLOOSE", `${o[f.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), c("XRANGEIDENTIFIER", `${o[f.NUMERICIDENTIFIER]}|x|X|\\*`), c("XRANGEPLAIN", `[v=\\s]*(${o[f.XRANGEIDENTIFIER]})(?:\\.(${o[f.XRANGEIDENTIFIER]})(?:\\.(${o[f.XRANGEIDENTIFIER]})(?:${o[f.PRERELEASE]})?${o[f.BUILD]}?)?)?`), c("XRANGEPLAINLOOSE", `[v=\\s]*(${o[f.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[f.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[f.XRANGEIDENTIFIERLOOSE]})(?:${o[f.PRERELEASELOOSE]})?${o[f.BUILD]}?)?)?`), c("XRANGE", `^${o[f.GTLT]}\\s*${o[f.XRANGEPLAIN]}$`), c("XRANGELOOSE", `^${o[f.GTLT]}\\s*${o[f.XRANGEPLAINLOOSE]}$`), c("COERCE", `(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?(?:$|[^\\d])`), c("COERCERTL", o[f.COERCE], !0), c("LONETILDE", "(?:~>?)"), c("TILDETRIM", `(\\s*)${o[f.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", c("TILDE", `^${o[f.LONETILDE]}${o[f.XRANGEPLAIN]}$`), c("TILDELOOSE", `^${o[f.LONETILDE]}${o[f.XRANGEPLAINLOOSE]}$`), c("LONECARET", "(?:\\^)"), c("CARETTRIM", `(\\s*)${o[f.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", c("CARET", `^${o[f.LONECARET]}${o[f.XRANGEPLAIN]}$`), c("CARETLOOSE", `^${o[f.LONECARET]}${o[f.XRANGEPLAINLOOSE]}$`), c("COMPARATORLOOSE", `^${o[f.GTLT]}\\s*(${o[f.LOOSEPLAIN]})$|^$`), c("COMPARATOR", `^${o[f.GTLT]}\\s*(${o[f.FULLPLAIN]})$|^$`), c("COMPARATORTRIM", `(\\s*)${o[f.GTLT]}\\s*(${o[f.LOOSEPLAIN]}|${o[f.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", c("HYPHENRANGE", `^\\s*(${o[f.XRANGEPLAIN]})\\s+-\\s+(${o[f.XRANGEPLAIN]})\\s*$`), c("HYPHENRANGELOOSE", `^\\s*(${o[f.XRANGEPLAINLOOSE]})\\s+-\\s+(${o[f.XRANGEPLAINLOOSE]})\\s*$`), c("STAR", "(<|>)?=?\\s*\\*"), c("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), c("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(Yr, Yr.exports);
var pv = Yr.exports;
const Tv = Object.freeze({ loose: !0 }), yv = Object.freeze({}), Sv = (n) => n ? typeof n != "object" ? Tv : n : yv;
var gv = Sv;
const ki = /^[0-9]+$/, xs = (n, e) => {
  const i = ki.test(n), t = ki.test(e);
  return i && t && (n = +n, e = +e), n === e ? 0 : i && !t ? -1 : t && !i ? 1 : n < e ? -1 : 1;
}, Ev = (n, e) => xs(e, n);
var Av = {
  compareIdentifiers: xs,
  rcompareIdentifiers: Ev
};
const vt = Rs, { MAX_LENGTH: ji, MAX_SAFE_INTEGER: pt } = Bs, { safeRe: zi, t: Fi } = pv, bv = gv, { compareIdentifiers: Oe } = Av;
let _v = class te {
  constructor(e, i) {
    if (i = bv(i), e instanceof te) {
      if (e.loose === !!i.loose && e.includePrerelease === !!i.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
    if (e.length > ji)
      throw new TypeError(
        `version is longer than ${ji} characters`
      );
    vt("SemVer", e, i), this.options = i, this.loose = !!i.loose, this.includePrerelease = !!i.includePrerelease;
    const t = e.trim().match(i.loose ? zi[Fi.LOOSE] : zi[Fi.FULL]);
    if (!t)
      throw new TypeError(`Invalid Version: ${e}`);
    if (this.raw = e, this.major = +t[1], this.minor = +t[2], this.patch = +t[3], this.major > pt || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > pt || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > pt || this.patch < 0)
      throw new TypeError("Invalid patch version");
    t[4] ? this.prerelease = t[4].split(".").map((r) => {
      if (/^[0-9]+$/.test(r)) {
        const a = +r;
        if (a >= 0 && a < pt)
          return a;
      }
      return r;
    }) : this.prerelease = [], this.build = t[5] ? t[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(e) {
    if (vt("SemVer.compare", this.version, this.options, e), !(e instanceof te)) {
      if (typeof e == "string" && e === this.version)
        return 0;
      e = new te(e, this.options);
    }
    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
  }
  compareMain(e) {
    return e instanceof te || (e = new te(e, this.options)), Oe(this.major, e.major) || Oe(this.minor, e.minor) || Oe(this.patch, e.patch);
  }
  comparePre(e) {
    if (e instanceof te || (e = new te(e, this.options)), this.prerelease.length && !e.prerelease.length)
      return -1;
    if (!this.prerelease.length && e.prerelease.length)
      return 1;
    if (!this.prerelease.length && !e.prerelease.length)
      return 0;
    let i = 0;
    do {
      const t = this.prerelease[i], r = e.prerelease[i];
      if (vt("prerelease compare", i, t, r), t === void 0 && r === void 0)
        return 0;
      if (r === void 0)
        return 1;
      if (t === void 0)
        return -1;
      if (t === r)
        continue;
      return Oe(t, r);
    } while (++i);
  }
  compareBuild(e) {
    e instanceof te || (e = new te(e, this.options));
    let i = 0;
    do {
      const t = this.build[i], r = e.build[i];
      if (vt("prerelease compare", i, t, r), t === void 0 && r === void 0)
        return 0;
      if (r === void 0)
        return 1;
      if (t === void 0)
        return -1;
      if (t === r)
        continue;
      return Oe(t, r);
    } while (++i);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(e, i, t) {
    switch (e) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", i, t);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", i, t);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", i, t), this.inc("pre", i, t);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", i, t), this.inc("pre", i, t);
        break;
      case "major":
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      case "pre": {
        const r = Number(t) ? 1 : 0;
        if (!i && t === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (this.prerelease.length === 0)
          this.prerelease = [r];
        else {
          let a = this.prerelease.length;
          for (; --a >= 0; )
            typeof this.prerelease[a] == "number" && (this.prerelease[a]++, a = -2);
          if (a === -1) {
            if (i === this.prerelease.join(".") && t === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(r);
          }
        }
        if (i) {
          let a = [i, r];
          t === !1 && (a = [i]), Oe(this.prerelease[0], i) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = a) : this.prerelease = a;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${e}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var ks = _v;
const Gi = ks, Ov = (n, e, i = !1) => {
  if (n instanceof Gi)
    return n;
  try {
    return new Gi(n, e);
  } catch (t) {
    if (!i)
      return null;
    throw t;
  }
};
var Dv = Ov;
const Iv = Dv, $v = (n, e) => {
  const i = Iv(n, e);
  return i ? i.version : null;
};
var Cv = $v;
const wv = ks, Pv = (n, e) => new wv(n, e).major;
var Nv = Pv;
Object.defineProperty(Ee, "__esModule", { value: !0 });
var Uv = Cv, Lv = Nv;
function js(n) {
  return n && typeof n == "object" && "default" in n ? n : { default: n };
}
var Mv = /* @__PURE__ */ js(Uv), Hi = /* @__PURE__ */ js(Lv), zs = (
  /** @class */
  function() {
    function n(e) {
      typeof e.getVersion != "function" || !Mv.default(e.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Hi.default(e.getVersion()) !== Hi.default(this.getVersion()) && console.warn("Proxying an event bus of version " + e.getVersion() + " with " + this.getVersion()), this.bus = e;
    }
    return n.prototype.getVersion = function() {
      return "3.0.2";
    }, n.prototype.subscribe = function(e, i) {
      this.bus.subscribe(e, i);
    }, n.prototype.unsubscribe = function(e, i) {
      this.bus.unsubscribe(e, i);
    }, n.prototype.emit = function(e, i) {
      this.bus.emit(e, i);
    }, n;
  }()
), Fs = (
  /** @class */
  function() {
    function n() {
      this.handlers = /* @__PURE__ */ new Map();
    }
    return n.prototype.getVersion = function() {
      return "3.0.2";
    }, n.prototype.subscribe = function(e, i) {
      this.handlers.set(e, (this.handlers.get(e) || []).concat(i));
    }, n.prototype.unsubscribe = function(e, i) {
      this.handlers.set(e, (this.handlers.get(e) || []).filter(function(t) {
        return t != i;
      }));
    }, n.prototype.emit = function(e, i) {
      (this.handlers.get(e) || []).forEach(function(t) {
        try {
          t(i);
        } catch (r) {
          console.error("could not invoke event listener", r);
        }
      });
    }, n;
  }()
);
function Rv() {
  return typeof window.OC < "u" && window.OC._eventBus && typeof window._nc_event_bus > "u" && (console.warn("found old event bus instance at OC._eventBus. Update your version!"), window._nc_event_bus = window.OC._eventBus), typeof window._nc_event_bus < "u" ? new zs(window._nc_event_bus) : window._nc_event_bus = new Fs();
}
var vn = Rv();
function Yv(n, e) {
  vn.subscribe(n, e);
}
function Bv(n, e) {
  vn.unsubscribe(n, e);
}
function xv(n, e) {
  vn.emit(n, e);
}
Ee.ProxyBus = zs;
Ee.SimpleBus = Fs;
Ee.emit = xv;
Ee.subscribe = Yv;
Ee.unsubscribe = Bv;
Object.defineProperty(rt, "__esModule", { value: !0 });
var kv = Ee, Vi = document.getElementsByTagName("head")[0], Gs = Vi ? Vi.getAttribute("data-requesttoken") : null, Hs = [];
function jv() {
  return Gs;
}
function zv(n) {
  Hs.push(n);
}
kv.subscribe("csrf-token-update", function(n) {
  Gs = n.token, Hs.forEach(function(e) {
    try {
      e(n.token);
    } catch (i) {
      console.error("error updating CSRF token observer", i);
    }
  });
});
var Vs = function(n, e) {
  return n ? n.getAttribute(e) : null;
}, Ws = document.getElementsByTagName("head")[0], Wi = Vs(Ws, "data-user"), Fv = Vs(Ws, "data-user-displayname"), Gv = typeof OC > "u" ? !1 : OC.isUserAdmin();
function Hv() {
  return Wi === null ? null : {
    uid: Wi,
    displayName: Fv,
    isAdmin: Gv
  };
}
rt.getCurrentUser = Hv;
rt.getRequestToken = jv;
rt.onRequestTokenUpdate = zv;
Object.defineProperty(kt, "__esModule", {
  value: !0
});
kt.LoggerBuilder = void 0;
var Vv = rt, Ki = Le;
function Ge(n) {
  "@babel/helpers - typeof";
  return Ge = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ge(n);
}
function Wv(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function qi(n, e) {
  for (var i = 0; i < e.length; i++) {
    var t = e[i];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(n, Ks(t.key), t);
  }
}
function Kv(n, e, i) {
  return e && qi(n.prototype, e), i && qi(n, i), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function Xi(n, e, i) {
  return e = Ks(e), e in n ? Object.defineProperty(n, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = i, n;
}
function Ks(n) {
  var e = qv(n, "string");
  return Ge(e) === "symbol" ? e : String(e);
}
function qv(n, e) {
  if (Ge(n) !== "object" || n === null)
    return n;
  var i = n[Symbol.toPrimitive];
  if (i !== void 0) {
    var t = i.call(n, e || "default");
    if (Ge(t) !== "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
var Xv = /* @__PURE__ */ function() {
  function n(e) {
    Wv(this, n), Xi(this, "context", void 0), Xi(this, "factory", void 0), this.context = {}, this.factory = e;
  }
  return Kv(n, [{
    key: "setApp",
    value: function(i) {
      return this.context.app = i, this;
    }
    /**
     * Set the logging level within the logging context
     *
     * @param level Logging level
     */
  }, {
    key: "setLogLevel",
    value: function(i) {
      return this.context.level = i, this;
    }
    /* eslint-disable jsdoc/no-undefined-types */
    /**
     * Set the user id within the logging context
     * @param uid User ID
     * @see {@link detectUser}
     */
    /* eslint-enable jsdoc/no-undefined-types */
  }, {
    key: "setUid",
    value: function(i) {
      return this.context.uid = i, this;
    }
    /**
     * Detect the currently logged in user and set the user id within the logging context
     */
  }, {
    key: "detectUser",
    value: function() {
      var i = (0, Vv.getCurrentUser)();
      return i !== null && (this.context.uid = i.uid), this;
    }
    /**
     * Detect and use logging level configured in nextcloud config
     */
  }, {
    key: "detectLogLevel",
    value: function() {
      var i = this, t = function r() {
        if (document.readyState === "complete" || document.readyState === "interactive") {
          var a, s;
          i.context.level = (a = (s = window._oc_config) === null || s === void 0 ? void 0 : s.loglevel) !== null && a !== void 0 ? a : Ki.LogLevel.Warn, window._oc_debug && (i.context.level = Ki.LogLevel.Debug), document.removeEventListener("readystatechange", r);
        } else
          document.addEventListener("readystatechange", r);
      };
      return t(), this;
    }
    /** Build a logger using the logging context and factory */
  }, {
    key: "build",
    value: function() {
      return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
    }
  }]), n;
}();
kt.LoggerBuilder = Xv;
(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "LogLevel", {
    enumerable: !0,
    get: function() {
      return t.LogLevel;
    }
  }), n.getLogger = a, n.getLoggerBuilder = r;
  var e = Qe, i = kt, t = Le;
  function r() {
    return new i.LoggerBuilder(e.buildConsoleLogger);
  }
  function a() {
    return r().build();
  }
})(na);
/*
 * @copyright Copyright (c) 2022 Richard Steinmetz <richard@steinmetz.cloud>
 *
 * @author Richard Steinmetz <richard@steinmetz.cloud>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
const Jv = na.getLoggerBuilder().detectUser().setApp("@nextcloud/calendar-availability-vue").build();
function Zv() {
  return {
    MO: [],
    TU: [],
    WE: [],
    TH: [],
    FR: [],
    SA: [],
    SU: []
  };
}
function t1(n) {
  const e = Tn.parse(n), i = new Tn.Component(e), t = i.getFirstSubcomponent("vavailability");
  let r;
  const a = i.getFirstSubcomponent("vtimezone");
  a && (r = a.getFirstProperty("tzid").getFirstValue());
  const s = t.getAllSubcomponents("available"), u = Zv();
  return s.forEach((o) => {
    const f = o.getFirstProperty("dtstart").getFirstValue().toJSDate(), m = o.getFirstProperty("dtend").getFirstValue().toJSDate(), l = o.getFirstProperty("rrule");
    if (l.getFirstValue().freq !== "WEEKLY") {
      Jv.warn("rrule not supported", {
        rrule: l.toICALString()
      });
      return;
    }
    l.getFirstValue().getComponent("BYDAY").forEach((v) => {
      u[v].push({
        start: f.getTime() / 1e3,
        end: m.getTime() / 1e3
      });
    });
  }), {
    slots: u,
    timezoneId: r
  };
}
function r1(n, e) {
  const i = new ICAL.Component("vcalendar");
  i.addPropertyWithValue("prodid", "Nextcloud DAV app");
  const t = Qi(e);
  if (t) {
    const s = new ICAL.Component(ICAL.parse(t));
    i.addSubcomponent(s);
  } else {
    const s = new ICAL.Component("vtimezone");
    s.addPropertyWithValue("tzid", e), i.addSubcomponent(s);
  }
  const r = new ICAL.Component("vavailability"), a = n.reduce((s, u) => {
    var l;
    const o = new Date(u.start * 1e3), f = new Date(u.end * 1e3), m = [
      o.getHours(),
      o.getMinutes(),
      f.getHours(),
      f.getMinutes()
    ].join("-");
    return {
      ...s,
      [m]: [...(l = s[m]) != null ? l : [], u]
    };
  }, {});
  return Object.keys(a).map((s) => {
    const u = a[s], o = u[0].start, f = u[0].end, m = u.map((c) => c.day).filter((c, T, y) => y.indexOf(c) === T), l = new ICAL.Component("available");
    return l.addPropertyWithValue("dtstart", ICAL.Time.fromJSDate(new Date(o * 1e3), !1)).setParameter("tzid", e), l.addPropertyWithValue("dtend", ICAL.Time.fromJSDate(new Date(f * 1e3), !1)).setParameter("tzid", e), l.addPropertyWithValue("uid", $0()), l.addPropertyWithValue("rrule", {
      freq: "WEEKLY",
      byday: m
    }), l;
  }).map(r.addSubcomponent.bind(r)), i.addSubcomponent(r), i.toString();
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "-" + chunkId + ".js?v=" + {"node_modules_nextcloud_dialogs_dist_chunks_index-27e9ea0a_mjs":"f098494fd65ef942c7b1","data_image_svg_xml_base64_PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJ-a6b278":"a48550cd83d7aad22499"}[chunkId] + "";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "nextcloud:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"dav-settings-personal-availability": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/dav/src/settings-personal-availability.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=dav-settings-personal-availability.js.map?v=e48c53736f4e275aadc4