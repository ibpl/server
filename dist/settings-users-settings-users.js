(self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || []).push([["settings-users"],{

/***/ "./apps/settings/src/mixins/UserRowMixin.js":
/*!**************************************************!*\
  !*** ./apps/settings/src/mixins/UserRowMixin.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author Greta Doci <gretadoci@gmail.com>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    user: {
      type: Object,
      required: true
    },
    settings: {
      type: Object,
      default: () => ({})
    },
    groups: {
      type: Array,
      default: () => []
    },
    subAdminsGroups: {
      type: Array,
      default: () => []
    },
    quotaOptions: {
      type: Array,
      default: () => []
    },
    languages: {
      type: Array,
      required: true
    },
    externalActions: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    showConfig() {
      return this.$store.getters.getShowConfig;
    },
    /* GROUPS MANAGEMENT */
    userGroups() {
      const userGroups = this.groups.filter(group => this.user.groups.includes(group.id));
      return userGroups;
    },
    userSubAdminsGroups() {
      const userSubAdminsGroups = this.subAdminsGroups.filter(group => this.user.subadmin.includes(group.id));
      return userSubAdminsGroups;
    },
    availableGroups() {
      return this.groups.map(group => {
        // clone object because we don't want
        // to edit the original groups
        const groupClone = Object.assign({}, group);

        // two settings here:
        // 1. user NOT in group but no permission to add
        // 2. user is in group but no permission to remove
        groupClone.$isDisabled = group.canAdd === false && !this.user.groups.includes(group.id) || group.canRemove === false && this.user.groups.includes(group.id);
        return groupClone;
      });
    },
    /* QUOTA MANAGEMENT */
    usedSpace() {
      if (this.user.quota.used) {
        return t('settings', '{size} used', {
          size: OC.Util.humanFileSize(this.user.quota.used)
        });
      }
      return t('settings', '{size} used', {
        size: OC.Util.humanFileSize(0)
      });
    },
    usedQuota() {
      let quota = this.user.quota.quota;
      if (quota > 0) {
        quota = Math.min(100, Math.round(this.user.quota.used / quota * 100));
      } else {
        const usedInGB = this.user.quota.used / (10 * Math.pow(2, 30));
        // asymptotic curve approaching 50% at 10GB to visualize used stace with infinite quota
        quota = 95 * (1 - 1 / (usedInGB + 1));
      }
      return isNaN(quota) ? 0 : quota;
    },
    // Mapping saved values to objects
    userQuota() {
      if (this.user.quota.quota >= 0) {
        // if value is valid, let's map the quotaOptions or return custom quota
        const humanQuota = OC.Util.humanFileSize(this.user.quota.quota);
        const userQuota = this.quotaOptions.find(quota => quota.id === humanQuota);
        return userQuota || {
          id: humanQuota,
          label: humanQuota
        };
      } else if (this.user.quota.quota === 'default') {
        // default quota is replaced by the proper value on load
        return this.quotaOptions[0];
      }
      return this.quotaOptions[1]; // unlimited
    },

    /* PASSWORD POLICY? */
    minPasswordLength() {
      return this.$store.getters.getPasswordPolicyMinLength;
    },
    /* LANGUAGE */
    userLanguage() {
      const availableLanguages = this.languages[0].languages.concat(this.languages[1].languages);
      const userLang = availableLanguages.find(lang => lang.code === this.user.language);
      if (typeof userLang !== 'object' && this.user.language !== '') {
        return {
          code: this.user.language,
          name: this.user.language
        };
      } else if (this.user.language === '') {
        return false;
      }
      return userLang;
    },
    /* LAST LOGIN */
    userLastLoginTooltip() {
      if (this.user.lastLogin > 0) {
        return OC.Util.formatDate(this.user.lastLogin);
      }
      return '';
    },
    userLastLogin() {
      if (this.user.lastLogin > 0) {
        return OC.Util.relativeModifiedDate(this.user.lastLogin);
      }
      return t('settings', 'Never');
    }
  }
});

/***/ }),

/***/ "./apps/settings/src/utils/userUtils.ts":
/*!**********************************************!*\
  !*** ./apps/settings/src/utils/userUtils.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultQuota: () => (/* binding */ defaultQuota),
/* harmony export */   isObfuscated: () => (/* binding */ isObfuscated),
/* harmony export */   unlimitedQuota: () => (/* binding */ unlimitedQuota)
/* harmony export */ });
/**
 * @copyright 2023 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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
const unlimitedQuota = {
  id: 'none',
  label: t('settings', 'Unlimited')
};
const defaultQuota = {
  id: 'default',
  label: t('settings', 'Default quota')
};
/**
 * Return `true` if the logged in user does not have permissions to view the
 * data of `user`
 * @param user
 * @param user.id
 */
const isObfuscated = user => {
  const keys = Object.keys(user);
  return keys.length === 1 && keys.at(0) === 'id';
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=script&lang=ts":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=script&lang=ts ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcLoadingIcon.js */ "./node_modules/@nextcloud/vue/dist/Components/NcLoadingIcon.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_2__["default"].extend({
  name: 'UserListFooter',
  components: {
    NcLoadingIcon: _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    loading: {
      type: Boolean,
      required: true
    },
    filteredUsers: {
      type: Array,
      required: true
    }
  },
  computed: {
    userCount() {
      if (this.loading) {
        return this.n('settings', '{userCount} user …', '{userCount} users …', this.filteredUsers.length, {
          userCount: this.filteredUsers.length
        });
      }
      return this.n('settings', '{userCount} user', '{userCount} users', this.filteredUsers.length, {
        userCount: this.filteredUsers.length
      });
    }
  },
  methods: {
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate,
    n: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translatePlural
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=script&lang=ts":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=script&lang=ts ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_1__["default"].extend({
  name: 'UserListHeader',
  props: {
    hasObfuscated: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    showConfig() {
      // @ts-expect-error: allow untyped $store
      return this.$store.getters.getShowConfig;
    },
    settings() {
      // @ts-expect-error: allow untyped $store
      return this.$store.getters.getServerData;
    },
    subAdminsGroups() {
      // @ts-expect-error: allow untyped $store
      return this.$store.getters.getSubadminGroups;
    },
    passwordLabel() {
      if (this.hasObfuscated) {
        // TRANSLATORS This string is for a column header labelling either a password or a message that the current user has insufficient permissions
        return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Password or insufficient permissions message');
      }
      return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Password');
    }
  },
  methods: {
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRowActions.vue?vue&type=script&lang=ts":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRowActions.vue?vue&type=script&lang=ts ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActionButton.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActions.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActions.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcIconSvgWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcIconSvgWrapper.js */ "./node_modules/@nextcloud/vue/dist/Components/NcIconSvgWrapper.mjs");
/* harmony import */ var _mdi_svg_svg_check_svg_raw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdi/svg/svg/check.svg?raw */ "./node_modules/@mdi/svg/svg/check.svg?raw");
/* harmony import */ var _mdi_svg_svg_pencil_svg_raw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/svg/svg/pencil.svg?raw */ "./node_modules/@mdi/svg/svg/pencil.svg?raw");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_5__.defineComponent)({
  components: {
    NcActionButton: _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    NcActions: _nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    NcIconSvgWrapper: _nextcloud_vue_dist_Components_NcIconSvgWrapper_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    /**
     * Array of user actions
     */
    actions: {
      type: Array,
      required: true
    },
    /**
     * The state whether the row is currently disabled
     */
    disabled: {
      type: Boolean,
      required: true
    },
    /**
     * The state whether the row is currently edited
     */
    edit: {
      type: Boolean,
      required: true
    },
    /**
     * Target of this actions
     */
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    /**
     * Current MDI logo to show for edit toggle
     */
    editSvg() {
      return this.edit ? _mdi_svg_svg_check_svg_raw__WEBPACK_IMPORTED_MODULE_3__ : _mdi_svg_svg_pencil_svg_raw__WEBPACK_IMPORTED_MODULE_4__;
    }
  },
  methods: {
    /**
     * Toggle edit mode by emitting the update event
     */
    toggleEdit() {
      this.$emit('update:edit', !this.edit);
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=script&lang=ts":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=script&lang=ts ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _vueuse_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vueuse/components */ "./node_modules/@vueuse/components/index.mjs");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../logger.js */ "./apps/settings/src/logger.js");




vue__WEBPACK_IMPORTED_MODULE_2__["default"].directive('elementVisibility', _vueuse_components__WEBPACK_IMPORTED_MODULE_3__.vElementVisibility);
// Items to render before and after the visible area
const bufferItems = 3;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_2__["default"].extend({
  name: 'VirtualList',
  props: {
    dataComponent: {
      type: [Object, Function],
      required: true
    },
    dataKey: {
      type: String,
      required: true
    },
    dataSources: {
      type: Array,
      required: true
    },
    itemHeight: {
      type: Number,
      required: true
    },
    extraProps: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      bufferItems,
      index: 0,
      headerHeight: 0,
      tableHeight: 0,
      resizeObserver: null
    };
  },
  computed: {
    startIndex() {
      return Math.max(0, this.index - bufferItems);
    },
    shownItems() {
      return Math.ceil((this.tableHeight - this.headerHeight) / this.itemHeight) + bufferItems * 2;
    },
    renderedItems() {
      return this.dataSources.slice(this.startIndex, this.startIndex + this.shownItems);
    },
    tbodyStyle() {
      const isOverScrolled = this.startIndex + this.shownItems > this.dataSources.length;
      const lastIndex = this.dataSources.length - this.startIndex - this.shownItems;
      const hiddenAfterItems = Math.min(this.dataSources.length - this.startIndex, lastIndex);
      return {
        paddingTop: `${this.startIndex * this.itemHeight}px`,
        paddingBottom: isOverScrolled ? 0 : `${hiddenAfterItems * this.itemHeight}px`
      };
    }
  },
  mounted() {
    const root = this.$el;
    const tfoot = this.$refs?.tfoot;
    const thead = this.$refs?.thead;
    this.resizeObserver = new ResizeObserver((0,debounce__WEBPACK_IMPORTED_MODULE_0__.debounce)(() => {
      this.headerHeight = thead?.clientHeight ?? 0;
      this.tableHeight = root?.clientHeight ?? 0;
      _logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].debug('VirtualList resizeObserver updated');
      this.onScroll();
    }, 100, false));
    this.resizeObserver.observe(root);
    this.resizeObserver.observe(tfoot);
    this.resizeObserver.observe(thead);
    this.$el.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  },
  methods: {
    handleFooterVisibility(visible) {
      if (visible) {
        this.$emit('scroll-end');
      }
    },
    onScroll() {
      // Max 0 to prevent negative index
      this.index = Math.max(0, Math.round(this.$el.scrollTop / this.itemHeight));
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_frag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-frag */ "./node_modules/vue-frag/dist/frag.esm.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActionButton.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionInput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionInput.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActionInput.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppNavigationItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAppNavigationItem.js */ "./node_modules/@nextcloud/vue/dist/Components/NcAppNavigationItem.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCounterBubble_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcCounterBubble.js */ "./node_modules/@nextcloud/vue/dist/Components/NcCounterBubble.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcModal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcModal.js */ "./node_modules/@nextcloud/vue/dist/Components/NcModal.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcNoteCard.js */ "./node_modules/@nextcloud/vue/dist/Components/NcNoteCard.mjs");
/* harmony import */ var vue_material_design_icons_AccountGroup_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-material-design-icons/AccountGroup.vue */ "./node_modules/vue-material-design-icons/AccountGroup.vue");
/* harmony import */ var vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-material-design-icons/Delete.vue */ "./node_modules/vue-material-design-icons/Delete.vue");
/* harmony import */ var vue_material_design_icons_Pencil_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-material-design-icons/Pencil.vue */ "./node_modules/vue-material-design-icons/Pencil.vue");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'GroupListItem',
  components: {
    AccountGroup: vue_material_design_icons_AccountGroup_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    Delete: vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    Fragment: vue_frag__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    NcActionButton: _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    NcActionInput: _nextcloud_vue_dist_Components_NcActionInput_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    NcAppNavigationItem: _nextcloud_vue_dist_Components_NcAppNavigationItem_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    NcButton: _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    NcCounterBubble: _nextcloud_vue_dist_Components_NcCounterBubble_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    NcModal: _nextcloud_vue_dist_Components_NcModal_js__WEBPACK_IMPORTED_MODULE_6__["default"],
    NcNoteCard: _nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_7__["default"],
    Pencil: vue_material_design_icons_Pencil_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  props: {
    /**
     * If this group is currently selected
     */
    active: {
      type: Boolean,
      required: true
    },
    /**
     * Number of members within this group
     */
    count: {
      type: Number,
      default: null
    },
    /**
     * Identifier of this group
     */
    id: {
      type: String,
      required: true
    },
    /**
     * Name of this group
     */
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loadingRenameGroup: false,
      openGroupMenu: false,
      showRemoveGroupModal: false
    };
  },
  computed: {
    settings() {
      return this.$store.getters.getServerData;
    }
  },
  methods: {
    handleGroupMenuOpen() {
      this.openGroupMenu = true;
    },
    async renameGroup(gid) {
      // check if group id is valid
      if (gid.trim() === '') {
        return;
      }
      const displayName = this.$refs.displayNameInput.$el.querySelector('input[type="text"]').value;

      // check if group name is valid
      if (displayName.trim() === '') {
        return;
      }
      try {
        this.openGroupMenu = false;
        this.loadingRenameGroup = true;
        await this.$store.dispatch('renameGroup', {
          groupid: gid.trim(),
          displayName: displayName.trim()
        });
        this.loadingRenameGroup = false;
      } catch {
        this.openGroupMenu = true;
        this.loadingRenameGroup = false;
      }
    },
    async removeGroup() {
      try {
        await this.$store.dispatch('removeGroup', this.id);
        this.showRemoveGroupModal = false;
      } catch (error) {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_11__.showError)(t('settings', 'Failed to remove group "{group}"', {
          group: this.name
        }));
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_frag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-frag */ "./node_modules/vue-frag/dist/frag.esm.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcEmptyContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcEmptyContent.js */ "./node_modules/@nextcloud/vue/dist/Components/NcEmptyContent.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcIconSvgWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcIconSvgWrapper.js */ "./node_modules/@nextcloud/vue/dist/Components/NcIconSvgWrapper.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcLoadingIcon.js */ "./node_modules/@nextcloud/vue/dist/Components/NcLoadingIcon.mjs");
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _Users_VirtualList_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Users/VirtualList.vue */ "./apps/settings/src/components/Users/VirtualList.vue");
/* harmony import */ var _Users_NewUserModal_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Users/NewUserModal.vue */ "./apps/settings/src/components/Users/NewUserModal.vue");
/* harmony import */ var _Users_UserListFooter_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Users/UserListFooter.vue */ "./apps/settings/src/components/Users/UserListFooter.vue");
/* harmony import */ var _Users_UserListHeader_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Users/UserListHeader.vue */ "./apps/settings/src/components/Users/UserListHeader.vue");
/* harmony import */ var _Users_UserRow_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Users/UserRow.vue */ "./apps/settings/src/components/Users/UserRow.vue");
/* harmony import */ var _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/userUtils.ts */ "./apps/settings/src/utils/userUtils.ts");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../logger.js */ "./apps/settings/src/logger.js");
/* harmony import */ var _img_users_svg_raw__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../img/users.svg?raw */ "./apps/settings/img/users.svg?raw");















const newUser = {
  id: '',
  displayName: '',
  password: '',
  mailAddress: '',
  groups: [],
  manager: '',
  subAdminsGroups: [],
  quota: _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_11__.defaultQuota,
  language: {
    code: 'en',
    name: t('settings', 'Default language')
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UserList',
  components: {
    Fragment: vue_frag__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    NcEmptyContent: _nextcloud_vue_dist_Components_NcEmptyContent_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    NcIconSvgWrapper: _nextcloud_vue_dist_Components_NcIconSvgWrapper_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    NcLoadingIcon: _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    NewUserModal: _Users_NewUserModal_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    UserListFooter: _Users_UserListFooter_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    UserListHeader: _Users_UserListHeader_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    VirtualList: _Users_VirtualList_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    selectedGroup: {
      type: String,
      default: null
    },
    externalActions: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      UserRow: _Users_UserRow_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
      loading: {
        all: false,
        groups: false,
        users: false
      },
      isInitialLoad: true,
      rowHeight: 55,
      usersSvg: _img_users_svg_raw__WEBPACK_IMPORTED_MODULE_13__,
      searchQuery: '',
      newUser: Object.assign({}, newUser)
    };
  },
  computed: {
    showConfig() {
      return this.$store.getters.getShowConfig;
    },
    settings() {
      return this.$store.getters.getServerData;
    },
    style() {
      return {
        '--row-height': `${this.rowHeight}px`
      };
    },
    hasObfuscated() {
      return this.filteredUsers.some(user => (0,_utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_11__.isObfuscated)(user));
    },
    users() {
      return this.$store.getters.getUsers;
    },
    filteredUsers() {
      if (this.selectedGroup === 'disabled') {
        return this.users.filter(user => user.enabled === false);
      }
      if (!this.settings.isAdmin) {
        // we don't want subadmins to edit themselves
        return this.users.filter(user => user.enabled !== false);
      }
      return this.users.filter(user => user.enabled !== false);
    },
    groups() {
      // data provided php side + remove the disabled group
      return this.$store.getters.getGroups.filter(group => group.id !== 'disabled').sort((a, b) => a.name.localeCompare(b.name));
    },
    subAdminsGroups() {
      // data provided php side
      return this.$store.getters.getSubadminGroups;
    },
    quotaOptions() {
      // convert the preset array into objects
      const quotaPreset = this.settings.quotaPreset.reduce((acc, cur) => acc.concat({
        id: cur,
        label: cur
      }), []);
      // add default presets
      if (this.settings.allowUnlimitedQuota) {
        quotaPreset.unshift(_utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_11__.unlimitedQuota);
      }
      quotaPreset.unshift(_utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_11__.defaultQuota);
      return quotaPreset;
    },
    usersOffset() {
      return this.$store.getters.getUsersOffset;
    },
    usersLimit() {
      return this.$store.getters.getUsersLimit;
    },
    usersCount() {
      return this.users.length;
    },
    /* LANGUAGES */
    languages() {
      return [{
        label: t('settings', 'Common languages'),
        languages: this.settings.languages.commonLanguages
      }, {
        label: t('settings', 'Other languages'),
        languages: this.settings.languages.otherLanguages
      }];
    }
  },
  watch: {
    // watch url change and group select
    async selectedGroup(val, old) {
      this.isInitialLoad = true;
      // if selected is the disabled group but it's empty
      await this.redirectIfDisabled();
      this.$store.commit('resetUsers');
      await this.loadUsers();
      this.setNewUserDefaultGroup(val);
    },
    filteredUsers(filteredUsers) {
      _logger_js__WEBPACK_IMPORTED_MODULE_12__["default"].debug(`${filteredUsers.length} filtered user(s)`);
    }
  },
  async created() {
    await this.loadUsers();
  },
  async mounted() {
    if (!this.settings.canChangePassword) {
      OC.Notification.showTemporary(t('settings', 'Password change is disabled because the master key is disabled'));
    }

    /**
     * Reset and init new user form
     */
    this.resetForm();

    /**
     * Register search
     */
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_4__.subscribe)('nextcloud:unified-search.search', this.search);
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_4__.subscribe)('nextcloud:unified-search.reset', this.resetSearch);

    /**
     * If disabled group but empty, redirect
     */
    await this.redirectIfDisabled();
  },
  beforeDestroy() {
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_4__.unsubscribe)('nextcloud:unified-search.search', this.search);
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_4__.unsubscribe)('nextcloud:unified-search.reset', this.resetSearch);
  },
  methods: {
    async handleScrollEnd() {
      await this.loadUsers();
    },
    async loadUsers() {
      this.loading.users = true;
      try {
        await this.$store.dispatch('getUsers', {
          offset: this.usersOffset,
          limit: this.usersLimit,
          group: this.selectedGroup !== 'disabled' ? this.selectedGroup : '',
          search: this.searchQuery
        });
        _logger_js__WEBPACK_IMPORTED_MODULE_12__["default"].debug(`${this.users.length} total user(s) loaded`);
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_12__["default"].error('Failed to load users', {
          error
        });
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_5__.showError)('Failed to load users');
      }
      this.loading.users = false;
      this.isInitialLoad = false;
    },
    closeModal() {
      this.$store.commit('setShowConfig', {
        key: 'showNewUserForm',
        value: false
      });
    },
    async search(_ref) {
      let {
        query
      } = _ref;
      this.searchQuery = query;
      this.$store.commit('resetUsers');
      await this.loadUsers();
    },
    resetSearch() {
      this.search({
        query: ''
      });
    },
    resetForm() {
      // revert form to original state
      this.newUser = Object.assign({}, newUser);

      /**
       * Init default language from server data. The use of this.settings
       * requires a computed variable, which break the v-model binding of the form,
       * this is a much easier solution than getter and setter on a computed var
       */
      if (this.settings.defaultLanguage) {
        vue__WEBPACK_IMPORTED_MODULE_14__["default"].set(this.newUser.language, 'code', this.settings.defaultLanguage);
      }

      /**
       * In case the user directly loaded the user list within a group
       * the watch won't be triggered. We need to initialize it.
       */
      this.setNewUserDefaultGroup(this.selectedGroup);
      this.loading.all = false;
    },
    setNewUserDefaultGroup(value) {
      if (value && value.length > 0) {
        // setting new user default group to the current selected one
        const currentGroup = this.groups.find(group => group.id === value);
        if (currentGroup) {
          this.newUser.groups = [currentGroup];
          return;
        }
      }
      // fallback, empty selected group
      this.newUser.groups = [];
    },
    /**
     * If the selected group is the disabled group but the count is 0
     * redirect to the all users page.
     * we only check for 0 because we don't have the count on ldap
     * and we therefore set the usercount to -1 in this specific case
     */
    async redirectIfDisabled() {
      const allGroups = this.$store.getters.getGroups;
      if (this.selectedGroup === 'disabled' && allGroups.findIndex(group => group.id === 'disabled' && group.usercount === 0) > -1) {
        // disabled group is empty, redirection to all users
        this.$router.push({
          name: 'users'
        });
        await this.loadUsers();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcModal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcModal.js */ "./node_modules/@nextcloud/vue/dist/Components/NcModal.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcPasswordField_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcPasswordField.js */ "./node_modules/@nextcloud/vue/dist/Components/NcPasswordField.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcSelect.js */ "./node_modules/@nextcloud/vue/dist/Components/NcSelect.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcTextField.js */ "./node_modules/@nextcloud/vue/dist/Components/NcTextField.mjs");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'NewUserModal',
  components: {
    NcButton: _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    NcModal: _nextcloud_vue_dist_Components_NcModal_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    NcPasswordField: _nextcloud_vue_dist_Components_NcPasswordField_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    NcSelect: _nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    NcTextField: _nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    loading: {
      type: Object,
      required: true
    },
    newUser: {
      type: Object,
      required: true
    },
    quotaOptions: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      possibleManagers: [],
      // TRANSLATORS This string describes a manager in the context of an organization
      managerLabel: t('settings', 'Set user manager')
    };
  },
  computed: {
    showConfig() {
      return this.$store.getters.getShowConfig;
    },
    settings() {
      return this.$store.getters.getServerData;
    },
    usernameLabel() {
      if (this.settings.newUserGenerateUserID) {
        return t('settings', 'Username will be autogenerated');
      }
      return t('settings', 'Username (required)');
    },
    minPasswordLength() {
      return this.$store.getters.getPasswordPolicyMinLength;
    },
    groups() {
      // data provided php side + remove the disabled group
      return this.$store.getters.getGroups.filter(group => group.id !== 'disabled').sort((a, b) => a.name.localeCompare(b.name));
    },
    subAdminsGroups() {
      // data provided php side
      return this.$store.getters.getSubadminGroups;
    },
    canAddGroups() {
      // disabled if no permission to add new users to group
      return this.groups.map(group => {
        // clone object because we don't want
        // to edit the original groups
        group = Object.assign({}, group);
        group.$isDisabled = group.canAdd === false;
        return group;
      });
    },
    languages() {
      return [{
        name: t('settings', 'Common languages'),
        languages: this.settings.languages.commonLanguages
      }, ...this.settings.languages.commonLanguages, {
        name: t('settings', 'Other languages'),
        languages: this.settings.languages.otherLanguages
      }, ...this.settings.languages.otherLanguages];
    }
  },
  async beforeMount() {
    await this.searchUserManager();
  },
  methods: {
    async createUser() {
      this.loading.all = true;
      try {
        await this.$store.dispatch('addUser', {
          userid: this.newUser.id,
          password: this.newUser.password,
          displayName: this.newUser.displayName,
          email: this.newUser.mailAddress,
          groups: this.newUser.groups.map(group => group.id),
          subadmin: this.newUser.subAdminsGroups.map(group => group.id),
          quota: this.newUser.quota.id,
          language: this.newUser.language.code,
          manager: this.newUser.manager.id
        });
        this.$emit('reset');
        this.$refs.username?.$refs?.inputField?.$refs?.input?.focus?.();
        this.$emit('close');
      } catch (error) {
        this.loading.all = false;
        if (error.response && error.response.data && error.response.data.ocs && error.response.data.ocs.meta) {
          const statuscode = error.response.data.ocs.meta.statuscode;
          if (statuscode === 102) {
            // wrong username
            this.$refs.username?.$refs?.inputField?.$refs?.input?.focus?.();
          } else if (statuscode === 107) {
            // wrong password
            this.$refs.password?.$refs?.inputField?.$refs?.input?.focus?.();
          }
        }
      }
    },
    handleGroupInput(groups) {
      /**
       * Filter out groups with no id to prevent duplicate selected options
       *
       * Created groups are added programmatically by `createGroup()`
       */
      this.newUser.groups = groups.filter(group => Boolean(group.id));
    },
    /**
     * Create a new group
     *
     * @param {any} group Group
     * @param {string} group.name Group id
     */
    async createGroup(_ref) {
      let {
        name: gid
      } = _ref;
      this.loading.groups = true;
      try {
        await this.$store.dispatch('addGroup', gid);
        this.newUser.groups.push(this.groups.find(group => group.id === gid));
        this.loading.groups = false;
      } catch (error) {
        this.loading.groups = false;
      }
    },
    /**
     * Validate quota string to make sure it's a valid human file size
     *
     * @param {string} quota Quota in readable format '5 GB'
     * @return {object}
     */
    validateQuota(quota) {
      // only used for new presets sent through @Tag
      const validQuota = OC.Util.computerFileSize(quota);
      if (validQuota !== null && validQuota >= 0) {
        // unify format output
        quota = OC.Util.humanFileSize(OC.Util.computerFileSize(quota));
        this.newUser.quota = {
          id: quota,
          label: quota
        };
        return this.newUser.quota;
      }
      // Default is unlimited
      this.newUser.quota = this.quotaOptions[0];
      return this.quotaOptions[0];
    },
    languageFilterBy(option, label, search) {
      // Show group header of the language
      if (option.languages) {
        return option.languages.some(_ref2 => {
          let {
            name
          } = _ref2;
          return name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
        });
      }
      return (label || '').toLocaleLowerCase().includes(search.toLocaleLowerCase());
    },
    async searchUserManager(query) {
      await this.$store.dispatch('searchUsers', {
        offset: 0,
        limit: 10,
        search: query
      }).then(response => {
        const users = response?.data ? Object.values(response?.data.ocs.data.users) : [];
        if (users.length > 0) {
          this.possibleManagers = users;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAvatar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAvatar.js */ "./node_modules/@nextcloud/vue/dist/Components/NcAvatar.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcLoadingIcon.js */ "./node_modules/@nextcloud/vue/dist/Components/NcLoadingIcon.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcProgressBar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcProgressBar.js */ "./node_modules/@nextcloud/vue/dist/Components/NcProgressBar.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcSelect.js */ "./node_modules/@nextcloud/vue/dist/Components/NcSelect.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcTextField.js */ "./node_modules/@nextcloud/vue/dist/Components/NcTextField.mjs");
/* harmony import */ var _UserRowActions_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UserRowActions.vue */ "./apps/settings/src/components/Users/UserRowActions.vue");
/* harmony import */ var _mixins_UserRowMixin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mixins/UserRowMixin.js */ "./apps/settings/src/mixins/UserRowMixin.js");
/* harmony import */ var _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/userUtils.ts */ "./apps/settings/src/utils/userUtils.ts");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UserRow',
  components: {
    NcAvatar: _nextcloud_vue_dist_Components_NcAvatar_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    NcLoadingIcon: _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    NcProgressBar: _nextcloud_vue_dist_Components_NcProgressBar_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    NcSelect: _nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    NcTextField: _nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_6__["default"],
    UserRowActions: _UserRowActions_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  mixins: [_mixins_UserRowMixin_js__WEBPACK_IMPORTED_MODULE_8__["default"]],
  props: {
    user: {
      type: Object,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    },
    users: {
      type: Array,
      required: true
    },
    hasObfuscated: {
      type: Boolean,
      required: true
    },
    groups: {
      type: Array,
      default: () => []
    },
    subAdminsGroups: {
      type: Array,
      required: true
    },
    quotaOptions: {
      type: Array,
      required: true
    },
    languages: {
      type: Array,
      required: true
    },
    settings: {
      type: Object,
      required: true
    },
    externalActions: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedQuota: false,
      rand: Math.random().toString(36).substring(2),
      loadingPossibleManagers: false,
      possibleManagers: [],
      currentManager: '',
      editing: false,
      loading: {
        all: false,
        displayName: false,
        password: false,
        mailAddress: false,
        groups: false,
        subadmins: false,
        quota: false,
        delete: false,
        disable: false,
        languages: false,
        wipe: false,
        manager: false
      },
      editedDisplayName: this.user.displayname,
      editedPassword: '',
      editedMail: this.user.email ?? ''
    };
  },
  computed: {
    managerLabel() {
      // TRANSLATORS This string describes a manager in the context of an organization
      return t('settings', 'Set user manager');
    },
    isObfuscated() {
      return (0,_utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_9__.isObfuscated)(this.user);
    },
    showConfig() {
      return this.$store.getters.getShowConfig;
    },
    isLoadingUser() {
      return this.loading.delete || this.loading.disable || this.loading.wipe;
    },
    isLoadingField() {
      return this.loading.delete || this.loading.disable || this.loading.all;
    },
    uniqueId() {
      return encodeURIComponent(this.user.id + this.rand);
    },
    userGroupsLabels() {
      return this.userGroups.map(group => group.name).join(', ');
    },
    userSubAdminsGroupsLabels() {
      return this.userSubAdminsGroups.map(group => group.name).join(', ');
    },
    usedSpace() {
      if (this.user.quota?.used) {
        return t('settings', '{size} used', {
          size: OC.Util.humanFileSize(this.user.quota?.used)
        });
      }
      return t('settings', '{size} used', {
        size: OC.Util.humanFileSize(0)
      });
    },
    canEdit() {
      return (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)().uid !== this.user.id || this.settings.isAdmin;
    },
    userQuota() {
      let quota = this.user.quota?.quota;
      if (quota === 'default') {
        quota = this.settings.defaultQuota;
        if (quota !== 'none') {
          // convert to numeric value to match what the server would usually return
          quota = OC.Util.computerFileSize(quota);
        }
      }

      // when the default quota is unlimited, the server returns -3 here, map it to "none"
      if (quota === 'none' || quota === -3) {
        return t('settings', 'Unlimited');
      } else if (quota >= 0) {
        return OC.Util.humanFileSize(quota);
      }
      return OC.Util.humanFileSize(0);
    },
    userActions() {
      const actions = [{
        icon: 'icon-delete',
        text: t('settings', 'Delete user'),
        action: this.deleteUser
      }, {
        icon: 'icon-delete',
        text: t('settings', 'Wipe all devices'),
        action: this.wipeUserDevices
      }, {
        icon: this.user.enabled ? 'icon-close' : 'icon-add',
        text: this.user.enabled ? t('settings', 'Disable user') : t('settings', 'Enable user'),
        action: this.enableDisableUser
      }];
      if (this.user.email !== null && this.user.email !== '') {
        actions.push({
          icon: 'icon-mail',
          text: t('settings', 'Resend welcome email'),
          action: this.sendWelcomeMail
        });
      }
      return actions.concat(this.externalActions);
    },
    // mapping saved values to objects
    editedUserQuota: {
      get() {
        if (this.selectedQuota !== false) {
          return this.selectedQuota;
        }
        if (this.settings.defaultQuota !== _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_9__.unlimitedQuota.id && OC.Util.computerFileSize(this.settings.defaultQuota) >= 0) {
          // if value is valid, let's map the quotaOptions or return custom quota
          return {
            id: this.settings.defaultQuota,
            label: this.settings.defaultQuota
          };
        }
        return _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_9__.unlimitedQuota; // unlimited
      },

      set(quota) {
        this.selectedQuota = quota;
      }
    },
    availableLanguages() {
      return this.languages[0].languages.concat(this.languages[1].languages);
    }
  },
  async beforeMount() {
    if (this.user.manager) {
      await this.initManager(this.user.manager);
    }
  },
  methods: {
    wipeUserDevices() {
      const userid = this.user.id;
      OC.dialogs.confirmDestructive(t('settings', 'In case of lost device or exiting the organization, this can remotely wipe the Nextcloud data from all devices associated with {userid}. Only works if the devices are connected to the internet.', {
        userid
      }), t('settings', 'Remote wipe of devices'), {
        type: OC.dialogs.YES_NO_BUTTONS,
        confirm: t('settings', 'Wipe {userid}\'s devices', {
          userid
        }),
        confirmClasses: 'error',
        cancel: t('settings', 'Cancel')
      }, result => {
        if (result) {
          this.loading.wipe = true;
          this.loading.all = true;
          this.$store.dispatch('wipeUserDevices', userid).then(() => (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showSuccess)(t('settings', 'Wiped {userid}\'s devices', {
            userid
          })), {
            timeout: 2000
          }).finally(() => {
            this.loading.wipe = false;
            this.loading.all = false;
          });
        }
      }, true);
    },
    filterManagers(managers) {
      return managers.filter(manager => manager.id !== this.user.id);
    },
    async initManager(userId) {
      await this.$store.dispatch('getUser', userId).then(response => {
        this.currentManager = response?.data.ocs.data;
      });
    },
    async searchInitialUserManager() {
      this.loadingPossibleManagers = true;
      await this.searchUserManager();
      this.loadingPossibleManagers = false;
    },
    async searchUserManager(query) {
      await this.$store.dispatch('searchUsers', {
        offset: 0,
        limit: 10,
        search: query
      }).then(response => {
        const users = response?.data ? this.filterManagers(Object.values(response?.data.ocs.data.users)) : [];
        if (users.length > 0) {
          this.possibleManagers = users;
        }
      });
    },
    async updateUserManager(manager) {
      if (manager === null) {
        this.currentManager = '';
      }
      this.loading.manager = true;
      try {
        await this.$store.dispatch('setUserData', {
          userid: this.user.id,
          key: 'manager',
          value: this.currentManager ? this.currentManager.id : ''
        });
      } catch (error) {
        // TRANSLATORS This string describes a manager in the context of an organization
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(t('setting', 'Failed to update user manager'));
        console.error(error);
      } finally {
        this.loading.manager = false;
      }
    },
    deleteUser() {
      const userid = this.user.id;
      OC.dialogs.confirmDestructive(t('settings', 'Fully delete {userid}\'s account including all their personal files, app data, etc.', {
        userid
      }), t('settings', 'Account deletion'), {
        type: OC.dialogs.YES_NO_BUTTONS,
        confirm: t('settings', 'Delete {userid}\'s account', {
          userid
        }),
        confirmClasses: 'error',
        cancel: t('settings', 'Cancel')
      }, result => {
        if (result) {
          this.loading.delete = true;
          this.loading.all = true;
          return this.$store.dispatch('deleteUser', userid).then(() => {
            this.loading.delete = false;
            this.loading.all = false;
          });
        }
      }, true);
    },
    enableDisableUser() {
      this.loading.delete = true;
      this.loading.all = true;
      const userid = this.user.id;
      const enabled = !this.user.enabled;
      return this.$store.dispatch('enableDisableUser', {
        userid,
        enabled
      }).then(() => {
        this.loading.delete = false;
        this.loading.all = false;
      });
    },
    /**
     * Set user displayName
     *
     * @param {string} displayName The display name
     */
    updateDisplayName() {
      this.loading.displayName = true;
      this.$store.dispatch('setUserData', {
        userid: this.user.id,
        key: 'displayname',
        value: this.editedDisplayName
      }).then(() => {
        this.loading.displayName = false;
        if (this.editedDisplayName === this.user.displayname) {
          (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showSuccess)(t('setting', 'Display name was successfully changed'));
        }
      });
    },
    /**
     * Set user password
     *
     * @param {string} password The email address
     */
    updatePassword() {
      this.loading.password = true;
      if (this.editedPassword.length === 0) {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(t('setting', "Password can't be empty"));
        this.loading.password = false;
      } else {
        this.$store.dispatch('setUserData', {
          userid: this.user.id,
          key: 'password',
          value: this.editedPassword
        }).then(() => {
          this.loading.password = false;
          this.editedPassword = '';
          (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showSuccess)(t('setting', 'Password was successfully changed'));
        });
      }
    },
    /**
     * Set user mailAddress
     *
     * @param {string} mailAddress The email address
     */
    updateEmail() {
      this.loading.mailAddress = true;
      if (this.editedMail === '') {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(t('setting', "Email can't be empty"));
        this.loading.mailAddress = false;
        this.editedMail = this.user.email;
      } else {
        this.$store.dispatch('setUserData', {
          userid: this.user.id,
          key: 'email',
          value: this.editedMail
        }).then(() => {
          this.loading.mailAddress = false;
          if (this.editedMail === this.user.email) {
            (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showSuccess)(t('setting', 'Email was successfully changed'));
          }
        });
      }
    },
    /**
     * Create a new group and add user to it
     *
     * @param {string} gid Group id
     */
    async createGroup(_ref) {
      let {
        name: gid
      } = _ref;
      this.loading = {
        groups: true,
        subadmins: true
      };
      try {
        await this.$store.dispatch('addGroup', gid);
        const userid = this.user.id;
        await this.$store.dispatch('addUserGroup', {
          userid,
          gid
        });
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = {
          groups: false,
          subadmins: false
        };
      }
      return this.$store.getters.getGroups[this.groups.length];
    },
    /**
     * Add user to group
     *
     * @param {object} group Group object
     */
    async addUserGroup(group) {
      if (group.isCreating) {
        // This is NcSelect's internal value for a new inputted group name
        // Ignore
        return;
      }
      this.loading.groups = true;
      const userid = this.user.id;
      const gid = group.id;
      if (group.canAdd === false) {
        return false;
      }
      try {
        await this.$store.dispatch('addUserGroup', {
          userid,
          gid
        });
      } catch (error) {
        console.error(error);
      } finally {
        this.loading.groups = false;
      }
    },
    /**
     * Remove user from group
     *
     * @param {object} group Group object
     */
    async removeUserGroup(group) {
      if (group.canRemove === false) {
        return false;
      }
      this.loading.groups = true;
      const userid = this.user.id;
      const gid = group.id;
      try {
        await this.$store.dispatch('removeUserGroup', {
          userid,
          gid
        });
        this.loading.groups = false;
        // remove user from current list if current list is the removed group
        if (this.$route.params.selectedGroup === gid) {
          this.$store.commit('deleteUser', userid);
        }
      } catch {
        this.loading.groups = false;
      }
    },
    /**
     * Add user to group
     *
     * @param {object} group Group object
     */
    async addUserSubAdmin(group) {
      this.loading.subadmins = true;
      const userid = this.user.id;
      const gid = group.id;
      try {
        await this.$store.dispatch('addUserSubAdmin', {
          userid,
          gid
        });
        this.loading.subadmins = false;
      } catch (error) {
        console.error(error);
      }
    },
    /**
     * Remove user from group
     *
     * @param {object} group Group object
     */
    async removeUserSubAdmin(group) {
      this.loading.subadmins = true;
      const userid = this.user.id;
      const gid = group.id;
      try {
        await this.$store.dispatch('removeUserSubAdmin', {
          userid,
          gid
        });
      } catch (error) {
        console.error(error);
      } finally {
        this.loading.subadmins = false;
      }
    },
    /**
     * Dispatch quota set request
     *
     * @param {string | object} quota Quota in readable format '5 GB' or Object {id: '5 GB', label: '5GB'}
     * @return {string}
     */
    async setUserQuota() {
      let quota = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'none';
      // Make sure correct label is set for unlimited quota
      if (quota === 'none') {
        quota = _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_9__.unlimitedQuota;
      }
      this.loading.quota = true;
      // ensure we only send the preset id
      quota = quota.id ? quota.id : quota;
      try {
        await this.$store.dispatch('setUserData', {
          userid: this.user.id,
          key: 'quota',
          value: quota
        });
      } catch (error) {
        console.error(error);
      } finally {
        this.loading.quota = false;
      }
      return quota;
    },
    /**
     * Validate quota string to make sure it's a valid human file size
     *
     * @param {string | object} quota Quota in readable format '5 GB' or Object {id: '5 GB', label: '5GB'}
     * @return {object} The validated quota object or unlimited quota if input is invalid
     */
    validateQuota(quota) {
      if (typeof quota === 'object') {
        quota = quota?.id || quota.label;
      }
      // only used for new presets sent through @Tag
      const validQuota = OC.Util.computerFileSize(quota);
      if (validQuota === null) {
        return _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_9__.unlimitedQuota;
      } else {
        // unify format output
        quota = OC.Util.humanFileSize(OC.Util.computerFileSize(quota));
        return {
          id: quota,
          label: quota
        };
      }
    },
    /**
     * Dispatch language set request
     *
     * @param {object} lang language object {code:'en', name:'English'}
     * @return {object}
     */
    async setUserLanguage(lang) {
      this.loading.languages = true;
      // ensure we only send the preset id
      try {
        await this.$store.dispatch('setUserData', {
          userid: this.user.id,
          key: 'language',
          value: lang.code
        });
        this.loading.languages = false;
      } catch (error) {
        console.error(error);
      }
      return lang;
    },
    /**
     * Dispatch new welcome mail request
     */
    sendWelcomeMail() {
      this.loading.all = true;
      this.$store.dispatch('sendWelcomeMail', this.user.id).then(() => (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showSuccess)(t('setting', 'Welcome mail sent!'), {
        timeout: 2000
      })).finally(() => {
        this.loading.all = false;
      });
    },
    async toggleEdit() {
      this.editing = !this.editing;
      if (this.editing) {
        await this.$nextTick();
        this.$refs.displayNameField?.$refs?.inputField?.$refs?.input?.focus();
      }
      if (this.editedDisplayName !== this.user.displayname) {
        this.editedDisplayName = this.user.displayname;
      } else if (this.editedMail !== this.user.email) {
        this.editedMail = this.user.email ?? '';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.es.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppSettingsDialog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAppSettingsDialog.js */ "./node_modules/@nextcloud/vue/dist/Components/NcAppSettingsDialog.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppSettingsSection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAppSettingsSection.js */ "./node_modules/@nextcloud/vue/dist/Components/NcAppSettingsSection.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js */ "./node_modules/@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcSelect.js */ "./node_modules/@nextcloud/vue/dist/Components/NcSelect.mjs");
/* harmony import */ var _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/userUtils.ts */ "./apps/settings/src/utils/userUtils.ts");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UserSettingsDialog',
  components: {
    NcAppSettingsDialog: _nextcloud_vue_dist_Components_NcAppSettingsDialog_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    NcAppSettingsSection: _nextcloud_vue_dist_Components_NcAppSettingsSection_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    NcCheckboxRadioSwitch: _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    NcSelect: _nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    open: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      selectedQuota: false,
      loadingSendMail: false
    };
  },
  computed: {
    isModalOpen: {
      get() {
        return this.open;
      },
      set(open) {
        this.$emit('update:open', open);
      }
    },
    showConfig() {
      return this.$store.getters.getShowConfig;
    },
    settings() {
      return this.$store.getters.getServerData;
    },
    showLanguages: {
      get() {
        return this.getLocalstorage('showLanguages');
      },
      set(status) {
        this.setLocalStorage('showLanguages', status);
      }
    },
    showLastLogin: {
      get() {
        return this.getLocalstorage('showLastLogin');
      },
      set(status) {
        this.setLocalStorage('showLastLogin', status);
      }
    },
    showUserBackend: {
      get() {
        return this.getLocalstorage('showUserBackend');
      },
      set(status) {
        this.setLocalStorage('showUserBackend', status);
      }
    },
    showStoragePath: {
      get() {
        return this.getLocalstorage('showStoragePath');
      },
      set(status) {
        this.setLocalStorage('showStoragePath', status);
      }
    },
    quotaOptions() {
      // convert the preset array into objects
      const quotaPreset = this.settings.quotaPreset.reduce((acc, cur) => acc.concat({
        id: cur,
        label: cur
      }), []);
      // add default presets
      if (this.settings.allowUnlimitedQuota) {
        quotaPreset.unshift(_utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_6__.unlimitedQuota);
      }
      return quotaPreset;
    },
    defaultQuota: {
      get() {
        if (this.selectedQuota !== false) {
          return this.selectedQuota;
        }
        if (this.settings.defaultQuota !== _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_6__.unlimitedQuota.id && OC.Util.computerFileSize(this.settings.defaultQuota) >= 0) {
          // if value is valid, let's map the quotaOptions or return custom quota
          return {
            id: this.settings.defaultQuota,
            label: this.settings.defaultQuota
          };
        }
        return _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_6__.unlimitedQuota; // unlimited
      },

      set(quota) {
        this.selectedQuota = quota;
      }
    },
    sendWelcomeMail: {
      get() {
        return this.settings.newUserSendEmail;
      },
      async set(value) {
        try {
          this.loadingSendMail = true;
          this.$store.commit('setServerData', {
            ...this.settings,
            newUserSendEmail: value
          });
          await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/settings/users/preferences/newUser.sendEmail'), {
            value: value ? 'yes' : 'no'
          });
        } catch (e) {
          console.error('could not update newUser.sendEmail preference: ' + e.message, e);
        } finally {
          this.loadingSendMail = false;
        }
      }
    }
  },
  methods: {
    getLocalstorage(key) {
      // force initialization
      const localConfig = this.$localStorage.get(key);
      // if localstorage is null, fallback to original values
      this.$store.commit('setShowConfig', {
        key,
        value: localConfig !== null ? localConfig === 'true' : this.showConfig[key]
      });
      return this.showConfig[key];
    },
    setLocalStorage(key, status) {
      this.$store.commit('setShowConfig', {
        key,
        value: status
      });
      this.$localStorage.set(key, status);
      return status;
    },
    /**
     * Validate quota string to make sure it's a valid human file size
     *
     * @param {string | object} quota Quota in readable format '5 GB' or Object {id: '5 GB', label: '5GB'}
     * @return {object} The validated quota object or unlimited quota if input is invalid
     */
    validateQuota(quota) {
      if (typeof quota === 'object') {
        quota = quota?.id || quota.label;
      }
      // only used for new presets sent through @Tag
      const validQuota = OC.Util.computerFileSize(quota);
      if (validQuota === null) {
        return _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_6__.unlimitedQuota;
      } else {
        // unify format output
        quota = OC.Util.humanFileSize(OC.Util.computerFileSize(quota));
        return {
          id: quota,
          label: quota
        };
      }
    },
    /**
     * Dispatch default quota set request
     *
     * @param {string | object} quota Quota in readable format '5 GB' or Object {id: '5 GB', label: '5GB'}
     */
    setDefaultQuota() {
      let quota = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'none';
      // Make sure correct label is set for unlimited quota
      if (quota === 'none') {
        quota = _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_6__.unlimitedQuota;
      }
      this.$store.dispatch('setAppConfig', {
        app: 'files',
        key: 'default_quota',
        // ensure we only send the preset id
        value: quota.id ? quota.id : quota
      }).then(() => {
        if (typeof quota !== 'object') {
          quota = {
            id: quota,
            label: quota
          };
        }
        this.defaultQuota = quota;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-localstorage */ "./node_modules/vue-localstorage/dist/vue-local-storage.js");
/* harmony import */ var vue_localstorage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_localstorage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_frag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-frag */ "./node_modules/vue-frag/dist/frag.esm.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionInput_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionInput.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActionInput.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionText_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionText.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActionText.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppContent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAppContent.js */ "./node_modules/@nextcloud/vue/dist/Components/NcAppContent.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppNavigation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAppNavigation.js */ "./node_modules/@nextcloud/vue/dist/Components/NcAppNavigation.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppNavigationCaption_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAppNavigationCaption.js */ "./node_modules/@nextcloud/vue/dist/Components/NcAppNavigationCaption.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppNavigationItem_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAppNavigationItem.js */ "./node_modules/@nextcloud/vue/dist/Components/NcAppNavigationItem.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppNavigationNew_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAppNavigationNew.js */ "./node_modules/@nextcloud/vue/dist/Components/NcAppNavigationNew.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcContent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcContent.js */ "./node_modules/@nextcloud/vue/dist/Components/NcContent.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCounterBubble_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcCounterBubble.js */ "./node_modules/@nextcloud/vue/dist/Components/NcCounterBubble.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcLoadingIcon.js */ "./node_modules/@nextcloud/vue/dist/Components/NcLoadingIcon.mjs");
/* harmony import */ var vue_material_design_icons_AccountGroup_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-material-design-icons/AccountGroup.vue */ "./node_modules/vue-material-design-icons/AccountGroup.vue");
/* harmony import */ var vue_material_design_icons_AccountOff_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue-material-design-icons/AccountOff.vue */ "./node_modules/vue-material-design-icons/AccountOff.vue");
/* harmony import */ var vue_material_design_icons_Cog_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vue-material-design-icons/Cog.vue */ "./node_modules/vue-material-design-icons/Cog.vue");
/* harmony import */ var vue_material_design_icons_Plus_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vue-material-design-icons/Plus.vue */ "./node_modules/vue-material-design-icons/Plus.vue");
/* harmony import */ var vue_material_design_icons_ShieldAccount_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vue-material-design-icons/ShieldAccount.vue */ "./node_modules/vue-material-design-icons/ShieldAccount.vue");
/* harmony import */ var _components_GroupListItem_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/GroupListItem.vue */ "./apps/settings/src/components/GroupListItem.vue");
/* harmony import */ var _components_UserList_vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/UserList.vue */ "./apps/settings/src/components/UserList.vue");
/* harmony import */ var _components_Users_UserSettingsDialog_vue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/Users/UserSettingsDialog.vue */ "./apps/settings/src/components/Users/UserSettingsDialog.vue");























vue__WEBPACK_IMPORTED_MODULE_22__["default"].use((vue_localstorage__WEBPACK_IMPORTED_MODULE_0___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Users',
  components: {
    AccountGroup: vue_material_design_icons_AccountGroup_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    AccountOff: vue_material_design_icons_AccountOff_vue__WEBPACK_IMPORTED_MODULE_15__["default"],
    Cog: vue_material_design_icons_Cog_vue__WEBPACK_IMPORTED_MODULE_16__["default"],
    Fragment: vue_frag__WEBPACK_IMPORTED_MODULE_1__.Fragment,
    GroupListItem: _components_GroupListItem_vue__WEBPACK_IMPORTED_MODULE_19__["default"],
    NcActionInput: _nextcloud_vue_dist_Components_NcActionInput_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    NcActionText: _nextcloud_vue_dist_Components_NcActionText_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    NcAppContent: _nextcloud_vue_dist_Components_NcAppContent_js__WEBPACK_IMPORTED_MODULE_6__["default"],
    NcAppNavigation: _nextcloud_vue_dist_Components_NcAppNavigation_js__WEBPACK_IMPORTED_MODULE_7__["default"],
    NcAppNavigationCaption: _nextcloud_vue_dist_Components_NcAppNavigationCaption_js__WEBPACK_IMPORTED_MODULE_8__["default"],
    NcAppNavigationItem: _nextcloud_vue_dist_Components_NcAppNavigationItem_js__WEBPACK_IMPORTED_MODULE_9__["default"],
    NcAppNavigationNew: _nextcloud_vue_dist_Components_NcAppNavigationNew_js__WEBPACK_IMPORTED_MODULE_10__["default"],
    NcContent: _nextcloud_vue_dist_Components_NcContent_js__WEBPACK_IMPORTED_MODULE_11__["default"],
    NcCounterBubble: _nextcloud_vue_dist_Components_NcCounterBubble_js__WEBPACK_IMPORTED_MODULE_12__["default"],
    NcLoadingIcon: _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_13__["default"],
    Plus: vue_material_design_icons_Plus_vue__WEBPACK_IMPORTED_MODULE_17__["default"],
    ShieldAccount: vue_material_design_icons_ShieldAccount_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
    UserList: _components_UserList_vue__WEBPACK_IMPORTED_MODULE_20__["default"],
    UserSettingsDialog: _components_Users_UserSettingsDialog_vue__WEBPACK_IMPORTED_MODULE_21__["default"]
  },
  props: {
    selectedGroup: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      // temporary value used for multiselect change
      externalActions: [],
      newGroupName: '',
      isAddGroupOpen: false,
      loadingAddGroup: false,
      hasAddGroupError: false,
      isDialogOpen: false
    };
  },
  computed: {
    showConfig() {
      return this.$store.getters.getShowConfig;
    },
    selectedGroupDecoded() {
      return this.selectedGroup ? decodeURIComponent(this.selectedGroup) : null;
    },
    users() {
      return this.$store.getters.getUsers;
    },
    groups() {
      return this.$store.getters.getGroups;
    },
    usersOffset() {
      return this.$store.getters.getUsersOffset;
    },
    usersLimit() {
      return this.$store.getters.getUsersLimit;
    },
    userCount() {
      return this.$store.getters.getUserCount;
    },
    settings() {
      return this.$store.getters.getServerData;
    },
    groupList() {
      const groups = Array.isArray(this.groups) ? this.groups : [];
      return groups
      // filter out disabled and admin
      .filter(group => group.id !== 'disabled' && group.id !== 'admin').map(group => this.formatGroupMenu(group));
    },
    adminGroupMenu() {
      return this.formatGroupMenu(this.groups.find(group => group.id === 'admin'));
    },
    disabledGroupMenu() {
      return this.formatGroupMenu(this.groups.find(group => group.id === 'disabled'));
    }
  },
  beforeMount() {
    this.$store.commit('initGroups', {
      groups: this.$store.getters.getServerData.groups,
      orderBy: this.$store.getters.getServerData.sortGroups,
      userCount: this.$store.getters.getServerData.userCount
    });
    this.$store.dispatch('getPasswordPolicyMinLength');
  },
  created() {
    // init the OCA.Settings.UserList object
    // and add the registerAction method
    Object.assign(OCA, {
      Settings: {
        UserList: {
          registerAction: this.registerAction
        }
      }
    });
  },
  methods: {
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate,
    showNewUserMenu() {
      this.$store.commit('setShowConfig', {
        key: 'showNewUserForm',
        value: true
      });
    },
    /**
     * Register a new action for the user menu
     *
     * @param {string} icon the icon class
     * @param {string} text the text to display
     * @param {Function} action the function to run
     * @return {Array}
     */
    registerAction(icon, text, action) {
      this.externalActions.push({
        icon,
        text,
        action
      });
      return this.externalActions;
    },
    /**
     * Create a new group
     */
    async createGroup() {
      this.hasAddGroupError = false;
      const groupId = this.newGroupName.trim();
      if (groupId === '') {
        this.hasAddGroupError = true;
        return;
      }
      this.isAddGroupOpen = false;
      this.loadingAddGroup = true;
      try {
        await this.$store.dispatch('addGroup', groupId);
        await this.$router.push({
          name: 'group',
          params: {
            selectedGroup: encodeURIComponent(groupId)
          }
        });
        this.newGroupName = '';
      } catch {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_3__.showError)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('settings', 'Failed to create group'));
      }
      this.loadingAddGroup = false;
    },
    /**
     * Format a group to a menu entry
     *
     * @param {object} group the group
     * @return {object}
     */
    formatGroupMenu(group) {
      const item = {};
      if (typeof group === 'undefined') {
        return {};
      }
      item.id = group.id;
      item.title = group.name;
      item.usercount = group.usercount;

      // users count for all groups
      if (group.usercount - group.disabled > 0) {
        item.count = group.usercount - group.disabled;
      }
      return item;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=template&id=b3f9b202&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=template&id=b3f9b202&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("Fragment", [_vm.showRemoveGroupModal ? _c("NcModal", {
    on: {
      close: function ($event) {
        _vm.showRemoveGroupModal = false;
      }
    }
  }, [_c("div", {
    staticClass: "modal__content"
  }, [_c("h2", {
    staticClass: "modal__header"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "Please confirm the group removal")) + "\n\t\t\t")]), _vm._v(" "), _c("NcNoteCard", {
    attrs: {
      type: "warning",
      "show-alert": ""
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", 'You are about to remove the group "{group}". The users will NOT be deleted.', {
    group: _vm.name
  })) + "\n\t\t\t")]), _vm._v(" "), _c("div", {
    staticClass: "modal__button-row"
  }, [_c("NcButton", {
    attrs: {
      type: "secondary"
    },
    on: {
      click: function ($event) {
        _vm.showRemoveGroupModal = false;
      }
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("settings", "Cancel")) + "\n\t\t\t\t")]), _vm._v(" "), _c("NcButton", {
    attrs: {
      type: "primary"
    },
    on: {
      click: _vm.removeGroup
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("settings", "Confirm")) + "\n\t\t\t\t")])], 1)], 1)]) : _vm._e(), _vm._v(" "), _c("NcAppNavigationItem", {
    key: _vm.id,
    attrs: {
      exact: true,
      name: _vm.name,
      to: {
        name: "group",
        params: {
          selectedGroup: encodeURIComponent(_vm.id)
        }
      },
      loading: _vm.loadingRenameGroup,
      "menu-open": _vm.openGroupMenu
    },
    on: {
      "update:menuOpen": _vm.handleGroupMenuOpen
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("AccountGroup", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }, {
      key: "counter",
      fn: function () {
        return [_vm.count ? _c("NcCounterBubble", {
          attrs: {
            type: _vm.active ? "highlighted" : undefined
          }
        }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.count) + "\n\t\t\t")]) : _vm._e()];
      },
      proxy: true
    }, {
      key: "actions",
      fn: function () {
        return [_vm.id !== "admin" && _vm.id !== "disabled" && _vm.settings.isAdmin ? _c("NcActionInput", {
          ref: "displayNameInput",
          attrs: {
            "trailing-button-label": _vm.t("settings", "Submit"),
            type: "text",
            value: _vm.name,
            label: _vm.t("settings", "Rename group")
          },
          on: {
            submit: function ($event) {
              return _vm.renameGroup(_vm.id);
            }
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("Pencil", {
                attrs: {
                  size: 20
                }
              })];
            },
            proxy: true
          }], null, false, 580569589)
        }) : _vm._e(), _vm._v(" "), _vm.id !== "admin" && _vm.id !== "disabled" && _vm.settings.isAdmin ? _c("NcActionButton", {
          on: {
            click: function ($event) {
              _vm.showRemoveGroupModal = true;
            }
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("Delete", {
                attrs: {
                  size: 20
                }
              })];
            },
            proxy: true
          }], null, false, 2705356561)
        }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "Remove group")) + "\n\t\t\t")]) : _vm._e()];
      },
      proxy: true
    }])
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=template&id=6cba3aca&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=template&id=6cba3aca&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("Fragment", [_vm.showConfig.showNewUserForm ? _c("NewUserModal", {
    attrs: {
      loading: _vm.loading,
      "new-user": _vm.newUser,
      "quota-options": _vm.quotaOptions
    },
    on: {
      reset: _vm.resetForm,
      close: _vm.closeModal
    }
  }) : _vm._e(), _vm._v(" "), _vm.filteredUsers.length === 0 ? _c("NcEmptyContent", {
    staticClass: "empty",
    attrs: {
      name: _vm.isInitialLoad && _vm.loading.users ? null : _vm.t("settings", "No users")
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_vm.isInitialLoad && _vm.loading.users ? _c("NcLoadingIcon", {
          attrs: {
            name: _vm.t("settings", "Loading users …"),
            size: 64
          }
        }) : _c("NcIconSvgWrapper", {
          attrs: {
            svg: _vm.usersSvg
          }
        })];
      },
      proxy: true
    }], null, false, 934871631)
  }) : _c("VirtualList", {
    style: _vm.style,
    attrs: {
      "data-component": _vm.UserRow,
      "data-sources": _vm.filteredUsers,
      "data-key": "id",
      "data-cy-user-list": "",
      "item-height": _vm.rowHeight,
      "extra-props": {
        users: _vm.users,
        settings: _vm.settings,
        hasObfuscated: _vm.hasObfuscated,
        groups: _vm.groups,
        subAdminsGroups: _vm.subAdminsGroups,
        quotaOptions: _vm.quotaOptions,
        languages: _vm.languages,
        externalActions: _vm.externalActions
      }
    },
    on: {
      "scroll-end": _vm.handleScrollEnd
    },
    scopedSlots: _vm._u([{
      key: "before",
      fn: function () {
        return [_c("caption", {
          staticClass: "hidden-visually"
        }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "List of users. This list is not fully rendered for performance reasons. The users will be rendered as you navigate through the list.")) + "\n\t\t\t")])];
      },
      proxy: true
    }, {
      key: "header",
      fn: function () {
        return [_c("UserListHeader", {
          attrs: {
            "has-obfuscated": _vm.hasObfuscated
          }
        })];
      },
      proxy: true
    }, {
      key: "footer",
      fn: function () {
        return [_c("UserListFooter", {
          attrs: {
            loading: _vm.loading.users,
            "filtered-users": _vm.filteredUsers
          }
        })];
      },
      proxy: true
    }])
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=template&id=7b45e5ac&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=template&id=7b45e5ac&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("NcModal", _vm._g({
    staticClass: "modal",
    attrs: {
      size: "small"
    }
  }, _vm.$listeners), [_c("form", {
    staticClass: "modal__form",
    attrs: {
      "data-test": "form",
      disabled: _vm.loading.all
    },
    on: {
      submit: function ($event) {
        $event.preventDefault();
        return _vm.createUser.apply(null, arguments);
      }
    }
  }, [_c("h2", [_vm._v(_vm._s(_vm.t("settings", "New user")))]), _vm._v(" "), _c("NcTextField", {
    ref: "username",
    staticClass: "modal__item",
    attrs: {
      "data-test": "username",
      value: _vm.newUser.id,
      disabled: _vm.settings.newUserGenerateUserID,
      label: _vm.usernameLabel,
      autocapitalize: "none",
      autocomplete: "off",
      spellcheck: "false",
      pattern: "[a-zA-Z0-9 _\\.@\\-']+",
      required: ""
    },
    on: {
      "update:value": function ($event) {
        return _vm.$set(_vm.newUser, "id", $event);
      }
    }
  }), _vm._v(" "), _c("NcTextField", {
    staticClass: "modal__item",
    attrs: {
      "data-test": "displayName",
      value: _vm.newUser.displayName,
      label: _vm.t("settings", "Display name"),
      autocapitalize: "none",
      autocomplete: "off",
      spellcheck: "false"
    },
    on: {
      "update:value": function ($event) {
        return _vm.$set(_vm.newUser, "displayName", $event);
      }
    }
  }), _vm._v(" "), !_vm.settings.newUserRequireEmail ? _c("span", {
    staticClass: "modal__hint",
    attrs: {
      id: "password-email-hint"
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Either password or email is required")) + "\n\t\t")]) : _vm._e(), _vm._v(" "), _c("NcPasswordField", {
    ref: "password",
    staticClass: "modal__item",
    attrs: {
      "data-test": "password",
      value: _vm.newUser.password,
      minlength: _vm.minPasswordLength,
      maxlength: 469,
      "aria-describedby": "password-email-hint",
      label: _vm.newUser.mailAddress === "" ? _vm.t("settings", "Password (required)") : _vm.t("settings", "Password"),
      autocapitalize: "none",
      autocomplete: "new-password",
      spellcheck: "false",
      required: _vm.newUser.mailAddress === ""
    },
    on: {
      "update:value": function ($event) {
        return _vm.$set(_vm.newUser, "password", $event);
      }
    }
  }), _vm._v(" "), _c("NcTextField", {
    staticClass: "modal__item",
    attrs: {
      "data-test": "email",
      type: "email",
      value: _vm.newUser.mailAddress,
      "aria-describedby": "password-email-hint",
      label: _vm.newUser.password === "" || _vm.settings.newUserRequireEmail ? _vm.t("settings", "Email (required)") : _vm.t("settings", "Email"),
      autocapitalize: "none",
      autocomplete: "off",
      spellcheck: "false",
      required: _vm.newUser.password === "" || _vm.settings.newUserRequireEmail
    },
    on: {
      "update:value": function ($event) {
        return _vm.$set(_vm.newUser, "mailAddress", $event);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "modal__item"
  }, [!_vm.settings.isAdmin ? _c("NcTextField", {
    class: {
      "icon-loading-small": _vm.loading.groups
    },
    attrs: {
      id: "new-user-groups-input",
      tabindex: "-1",
      value: _vm.newUser.groups,
      required: !_vm.settings.isAdmin
    }
  }) : _vm._e(), _vm._v(" "), _c("label", {
    staticClass: "modal__label",
    attrs: {
      for: "new-user-groups"
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(!_vm.settings.isAdmin ? _vm.t("settings", "Groups (required)") : _vm.t("settings", "Groups")) + "\n\t\t\t")]), _vm._v(" "), _c("NcSelect", {
    staticClass: "modal__select",
    attrs: {
      "input-id": "new-user-groups",
      placeholder: _vm.t("settings", "Set user groups"),
      disabled: _vm.loading.groups || _vm.loading.all,
      options: _vm.canAddGroups,
      value: _vm.newUser.groups,
      label: "name",
      "close-on-select": false,
      multiple: true,
      taggable: true
    },
    on: {
      input: _vm.handleGroupInput,
      "option:created": _vm.createGroup
    }
  })], 1), _vm._v(" "), _vm.subAdminsGroups.length > 0 && _vm.settings.isAdmin ? _c("div", {
    staticClass: "modal__item"
  }, [_c("label", {
    staticClass: "modal__label",
    attrs: {
      for: "new-user-sub-admin"
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "Administered groups")) + "\n\t\t\t")]), _vm._v(" "), _c("NcSelect", {
    staticClass: "modal__select",
    attrs: {
      "input-id": "new-user-sub-admin",
      placeholder: _vm.t("settings", "Set user as admin for …"),
      options: _vm.subAdminsGroups,
      "close-on-select": false,
      multiple: true,
      label: "name"
    },
    model: {
      value: _vm.newUser.subAdminsGroups,
      callback: function ($$v) {
        _vm.$set(_vm.newUser, "subAdminsGroups", $$v);
      },
      expression: "newUser.subAdminsGroups"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "modal__item"
  }, [_c("label", {
    staticClass: "modal__label",
    attrs: {
      for: "new-user-quota"
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "Quota")) + "\n\t\t\t")]), _vm._v(" "), _c("NcSelect", {
    staticClass: "modal__select",
    attrs: {
      "input-id": "new-user-quota",
      placeholder: _vm.t("settings", "Set user quota"),
      options: _vm.quotaOptions,
      clearable: false,
      taggable: true,
      "create-option": _vm.validateQuota
    },
    model: {
      value: _vm.newUser.quota,
      callback: function ($$v) {
        _vm.$set(_vm.newUser, "quota", $$v);
      },
      expression: "newUser.quota"
    }
  })], 1), _vm._v(" "), _vm.showConfig.showLanguages ? _c("div", {
    staticClass: "modal__item"
  }, [_c("label", {
    staticClass: "modal__label",
    attrs: {
      for: "new-user-language"
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "Language")) + "\n\t\t\t")]), _vm._v(" "), _c("NcSelect", {
    staticClass: "modal__select",
    attrs: {
      "input-id": "new-user-language",
      placeholder: _vm.t("settings", "Set default language"),
      clearable: false,
      selectable: option => !option.languages,
      "filter-by": _vm.languageFilterBy,
      options: _vm.languages,
      label: "name"
    },
    model: {
      value: _vm.newUser.language,
      callback: function ($$v) {
        _vm.$set(_vm.newUser, "language", $$v);
      },
      expression: "newUser.language"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    class: ["modal__item managers", {
      "icon-loading-small": _vm.loading.manager
    }]
  }, [_c("label", {
    staticClass: "modal__label",
    attrs: {
      for: "new-user-manager"
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "Manager")) + "\n\t\t\t")]), _vm._v(" "), _c("NcSelect", {
    staticClass: "modal__select",
    attrs: {
      "input-id": "new-user-manager",
      placeholder: _vm.managerLabel,
      options: _vm.possibleManagers,
      "user-select": true,
      label: "displayname"
    },
    on: {
      search: _vm.searchUserManager
    },
    model: {
      value: _vm.newUser.manager,
      callback: function ($$v) {
        _vm.$set(_vm.newUser, "manager", $$v);
      },
      expression: "newUser.manager"
    }
  })], 1), _vm._v(" "), _c("NcButton", {
    staticClass: "modal__submit",
    attrs: {
      "data-test": "submit",
      type: "primary",
      "native-type": "submit"
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Add new user")) + "\n\t\t")])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=template&id=97a6cb68&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=template&id=97a6cb68&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("tr", {
    staticClass: "footer"
  }, [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_c("span", {
    staticClass: "hidden-visually"
  }, [_vm._v(_vm._s(_vm.t("settings", "Total rows summary")))])]), _vm._v(" "), _c("td", {
    staticClass: "footer__cell footer__cell--loading"
  }, [_vm.loading ? _c("NcLoadingIcon", {
    attrs: {
      title: _vm.t("settings", "Loading users …"),
      size: 32
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("td", {
    staticClass: "footer__cell footer__cell--count footer__cell--multiline"
  }, [_c("span", {
    attrs: {
      "aria-describedby": "user-count-desc"
    }
  }, [_vm._v(_vm._s(_vm.userCount))]), _vm._v(" "), _c("span", {
    staticClass: "hidden-visually",
    attrs: {
      id: "user-count-desc"
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Scroll to load more rows")) + "\n\t\t")])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=template&id=55420384&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=template&id=55420384&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("tr", {
    staticClass: "header"
  }, [_c("th", {
    staticClass: "header__cell header__cell--avatar",
    attrs: {
      "data-cy-user-list-header-avatar": "",
      scope: "col"
    }
  }, [_c("span", {
    staticClass: "hidden-visually"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Avatar")) + "\n\t\t")])]), _vm._v(" "), _c("th", {
    staticClass: "header__cell header__cell--displayname",
    attrs: {
      "data-cy-user-list-header-displayname": "",
      scope: "col"
    }
  }, [_c("strong", [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Display name")) + "\n\t\t")]), _vm._v(" "), _c("span", {
    staticClass: "header__subtitle"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Username")) + "\n\t\t")])]), _vm._v(" "), _c("th", {
    staticClass: "header__cell",
    class: {
      "header__cell--obfuscated": _vm.hasObfuscated
    },
    attrs: {
      "data-cy-user-list-header-password": "",
      scope: "col"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.passwordLabel))])]), _vm._v(" "), _c("th", {
    staticClass: "header__cell",
    attrs: {
      "data-cy-user-list-header-email": "",
      scope: "col"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.t("settings", "Email")))])]), _vm._v(" "), _c("th", {
    staticClass: "header__cell header__cell--large",
    attrs: {
      "data-cy-user-list-header-groups": "",
      scope: "col"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.t("settings", "Groups")))])]), _vm._v(" "), _vm.subAdminsGroups.length > 0 && _vm.settings.isAdmin ? _c("th", {
    staticClass: "header__cell header__cell--large",
    attrs: {
      "data-cy-user-list-header-subadmins": "",
      scope: "col"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.t("settings", "Group admin for")))])]) : _vm._e(), _vm._v(" "), _c("th", {
    staticClass: "header__cell",
    attrs: {
      "data-cy-user-list-header-quota": "",
      scope: "col"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.t("settings", "Quota")))])]), _vm._v(" "), _vm.showConfig.showLanguages ? _c("th", {
    staticClass: "header__cell header__cell--large",
    attrs: {
      "data-cy-user-list-header-languages": "",
      scope: "col"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.t("settings", "Language")))])]) : _vm._e(), _vm._v(" "), _vm.showConfig.showUserBackend || _vm.showConfig.showStoragePath ? _c("th", {
    staticClass: "header__cell header__cell--large",
    attrs: {
      "data-cy-user-list-header-storage-location": "",
      scope: "col"
    }
  }, [_vm.showConfig.showUserBackend ? _c("span", [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "User backend")) + "\n\t\t")]) : _vm._e(), _vm._v(" "), _vm.showConfig.showStoragePath ? _c("span", {
    staticClass: "header__subtitle"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Storage location")) + "\n\t\t")]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.showConfig.showLastLogin ? _c("th", {
    staticClass: "header__cell",
    attrs: {
      "data-cy-user-list-header-last-login": "",
      scope: "col"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.t("settings", "Last login")))])]) : _vm._e(), _vm._v(" "), _c("th", {
    staticClass: "header__cell header__cell--large header__cell--fill",
    attrs: {
      "data-cy-user-list-header-manager": "",
      scope: "col"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.t("settings", "Manager")))])]), _vm._v(" "), _c("th", {
    staticClass: "header__cell header__cell--actions",
    attrs: {
      "data-cy-user-list-header-actions": "",
      scope: "col"
    }
  }, [_c("span", {
    staticClass: "hidden-visually"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "User actions")) + "\n\t\t")])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=template&id=11563777&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=template&id=11563777&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("tr", {
    staticClass: "user-list__row",
    attrs: {
      "data-cy-user-row": _vm.user.id
    }
  }, [_c("td", {
    staticClass: "row__cell row__cell--avatar",
    attrs: {
      "data-cy-user-list-cell-avatar": ""
    }
  }, [_vm.isLoadingUser ? _c("NcLoadingIcon", {
    attrs: {
      name: _vm.t("settings", "Loading user …"),
      size: 32
    }
  }) : _vm.visible ? _c("NcAvatar", {
    attrs: {
      "disable-menu": "",
      "show-user-status": false,
      user: _vm.user.id
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("td", {
    staticClass: "row__cell row__cell--displayname",
    attrs: {
      "data-cy-user-list-cell-displayname": ""
    }
  }, [_vm.editing && _vm.user.backendCapabilities.setDisplayName ? [_c("NcTextField", {
    ref: "displayNameField",
    staticClass: "user-row-text-field",
    class: {
      "icon-loading-small": _vm.loading.displayName
    },
    attrs: {
      "data-cy-user-list-input-displayname": "",
      "data-loading": _vm.loading.displayName || undefined,
      "trailing-button-label": _vm.t("settings", "Submit"),
      "show-trailing-button": true,
      disabled: _vm.loading.displayName || _vm.isLoadingField,
      label: _vm.t("settings", "Change display name"),
      "trailing-button-icon": "arrowRight",
      value: _vm.editedDisplayName,
      autocapitalize: "off",
      autocomplete: "off",
      spellcheck: "false"
    },
    on: {
      "update:value": function ($event) {
        _vm.editedDisplayName = $event;
      },
      "trailing-button-click": _vm.updateDisplayName
    }
  })] : [!_vm.isObfuscated ? _c("strong", {
    attrs: {
      title: _vm.user.displayname?.length > 20 ? _vm.user.displayname : null
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.user.displayname) + "\n\t\t\t")]) : _vm._e(), _vm._v(" "), _c("span", {
    staticClass: "row__subtitle"
  }, [_vm._v(_vm._s(_vm.user.id))])]], 2), _vm._v(" "), _c("td", {
    staticClass: "row__cell",
    class: {
      "row__cell--obfuscated": _vm.hasObfuscated
    },
    attrs: {
      "data-cy-user-list-cell-password": ""
    }
  }, [_vm.editing && _vm.settings.canChangePassword && _vm.user.backendCapabilities.setPassword ? [_c("NcTextField", {
    staticClass: "user-row-text-field",
    class: {
      "icon-loading-small": _vm.loading.password
    },
    attrs: {
      "data-cy-user-list-input-password": "",
      "data-loading": _vm.loading.password || undefined,
      "trailing-button-label": _vm.t("settings", "Submit"),
      "show-trailing-button": true,
      disabled: _vm.loading.password || _vm.isLoadingField,
      minlength: _vm.minPasswordLength,
      maxlength: "469",
      label: _vm.t("settings", "Set new password"),
      "trailing-button-icon": "arrowRight",
      value: _vm.editedPassword,
      autocapitalize: "off",
      autocomplete: "new-password",
      required: "",
      spellcheck: "false",
      type: "password"
    },
    on: {
      "update:value": function ($event) {
        _vm.editedPassword = $event;
      },
      "trailing-button-click": _vm.updatePassword
    }
  })] : _vm.isObfuscated ? _c("span", [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "You do not have permissions to see the details of this user")) + "\n\t\t")]) : _vm._e()], 2), _vm._v(" "), _c("td", {
    staticClass: "row__cell",
    attrs: {
      "data-cy-user-list-cell-email": ""
    }
  }, [_vm.editing ? [_c("NcTextField", {
    staticClass: "user-row-text-field",
    class: {
      "icon-loading-small": _vm.loading.mailAddress
    },
    attrs: {
      "data-cy-user-list-input-email": "",
      "data-loading": _vm.loading.mailAddress || undefined,
      "show-trailing-button": true,
      "trailing-button-label": _vm.t("settings", "Submit"),
      label: _vm.t("settings", "Set new email address"),
      disabled: _vm.loading.mailAddress || _vm.isLoadingField,
      "trailing-button-icon": "arrowRight",
      value: _vm.editedMail,
      autocapitalize: "off",
      autocomplete: "email",
      spellcheck: "false",
      type: "email"
    },
    on: {
      "update:value": function ($event) {
        _vm.editedMail = $event;
      },
      "trailing-button-click": _vm.updateEmail
    }
  })] : !_vm.isObfuscated ? _c("span", {
    attrs: {
      title: _vm.user.email?.length > 20 ? _vm.user.email : null
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.user.email) + "\n\t\t")]) : _vm._e()], 2), _vm._v(" "), _c("td", {
    staticClass: "row__cell row__cell--large row__cell--multiline",
    attrs: {
      "data-cy-user-list-cell-groups": ""
    }
  }, [_vm.editing ? [_c("label", {
    staticClass: "hidden-visually",
    attrs: {
      for: "groups" + _vm.uniqueId
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "Add user to group")) + "\n\t\t\t")]), _vm._v(" "), _c("NcSelect", {
    attrs: {
      "data-cy-user-list-input-groups": "",
      "data-loading": _vm.loading.groups || undefined,
      "input-id": "groups" + _vm.uniqueId,
      "close-on-select": false,
      disabled: _vm.isLoadingField,
      loading: _vm.loading.groups,
      multiple: true,
      "append-to-body": false,
      options: _vm.availableGroups,
      placeholder: _vm.t("settings", "Add user to group"),
      taggable: _vm.settings.isAdmin,
      value: _vm.userGroups,
      label: "name",
      "no-wrap": true,
      "create-option": value => ({
        name: value,
        isCreating: true
      })
    },
    on: {
      "option:created": _vm.createGroup,
      "option:selected": options => _vm.addUserGroup(options.at(-1)),
      "option:deselected": _vm.removeUserGroup
    }
  })] : !_vm.isObfuscated ? _c("span", {
    attrs: {
      title: _vm.userGroupsLabels?.length > 40 ? _vm.userGroupsLabels : null
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.userGroupsLabels) + "\n\t\t")]) : _vm._e()], 2), _vm._v(" "), _vm.subAdminsGroups.length > 0 && _vm.settings.isAdmin ? _c("td", {
    staticClass: "row__cell row__cell--large row__cell--multiline",
    attrs: {
      "data-cy-user-list-cell-subadmins": ""
    }
  }, [_vm.editing && _vm.settings.isAdmin && _vm.subAdminsGroups.length > 0 ? [_c("label", {
    staticClass: "hidden-visually",
    attrs: {
      for: "subadmins" + _vm.uniqueId
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "Set user as admin for")) + "\n\t\t\t")]), _vm._v(" "), _c("NcSelect", {
    attrs: {
      "data-cy-user-list-input-subadmins": "",
      "data-loading": _vm.loading.subadmins || undefined,
      "input-id": "subadmins" + _vm.uniqueId,
      "close-on-select": false,
      disabled: _vm.isLoadingField,
      loading: _vm.loading.subadmins,
      label: "name",
      "append-to-body": false,
      multiple: true,
      "no-wrap": true,
      options: _vm.subAdminsGroups,
      placeholder: _vm.t("settings", "Set user as admin for"),
      value: _vm.userSubAdminsGroups
    },
    on: {
      "option:deselected": _vm.removeUserSubAdmin,
      "option:selected": options => _vm.addUserSubAdmin(options.at(-1))
    }
  })] : !_vm.isObfuscated ? _c("span", {
    attrs: {
      title: _vm.userSubAdminsGroupsLabels?.length > 40 ? _vm.userSubAdminsGroupsLabels : null
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.userSubAdminsGroupsLabels) + "\n\t\t")]) : _vm._e()], 2) : _vm._e(), _vm._v(" "), _c("td", {
    staticClass: "row__cell",
    attrs: {
      "data-cy-user-list-cell-quota": ""
    }
  }, [_vm.editing ? [_c("label", {
    staticClass: "hidden-visually",
    attrs: {
      for: "quota" + _vm.uniqueId
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "Select user quota")) + "\n\t\t\t")]), _vm._v(" "), _c("NcSelect", {
    attrs: {
      "close-on-select": true,
      "create-option": _vm.validateQuota,
      "data-cy-user-list-input-quota": "",
      "data-loading": _vm.loading.quota || undefined,
      disabled: _vm.isLoadingField,
      loading: _vm.loading.quota,
      "append-to-body": false,
      clearable: false,
      "input-id": "quota" + _vm.uniqueId,
      options: _vm.quotaOptions,
      placeholder: _vm.t("settings", "Select user quota"),
      taggable: true
    },
    on: {
      "option:selected": _vm.setUserQuota
    },
    model: {
      value: _vm.editedUserQuota,
      callback: function ($$v) {
        _vm.editedUserQuota = $$v;
      },
      expression: "editedUserQuota"
    }
  })] : !_vm.isObfuscated ? [_c("span", {
    attrs: {
      id: "quota-progress" + _vm.uniqueId
    }
  }, [_vm._v(_vm._s(_vm.userQuota) + " (" + _vm._s(_vm.usedSpace) + ")")]), _vm._v(" "), _c("NcProgressBar", {
    staticClass: "row__progress",
    class: {
      "row__progress--warn": _vm.usedQuota > 80
    },
    attrs: {
      "aria-labelledby": "quota-progress" + _vm.uniqueId,
      value: _vm.usedQuota
    }
  })] : _vm._e()], 2), _vm._v(" "), _vm.showConfig.showLanguages ? _c("td", {
    staticClass: "row__cell row__cell--large",
    attrs: {
      "data-cy-user-list-cell-language": ""
    }
  }, [_vm.editing ? [_c("label", {
    staticClass: "hidden-visually",
    attrs: {
      for: "language" + _vm.uniqueId
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "Set the language")) + "\n\t\t\t")]), _vm._v(" "), _c("NcSelect", {
    attrs: {
      id: "language" + _vm.uniqueId,
      "data-cy-user-list-input-language": "",
      "data-loading": _vm.loading.languages || undefined,
      "allow-empty": false,
      disabled: _vm.isLoadingField,
      loading: _vm.loading.languages,
      clearable: false,
      "append-to-body": false,
      options: _vm.availableLanguages,
      placeholder: _vm.t("settings", "No language set"),
      value: _vm.userLanguage,
      label: "name"
    },
    on: {
      input: _vm.setUserLanguage
    }
  })] : !_vm.isObfuscated ? _c("span", [_vm._v("\n\t\t\t" + _vm._s(_vm.userLanguage.name) + "\n\t\t")]) : _vm._e()], 2) : _vm._e(), _vm._v(" "), _vm.showConfig.showUserBackend || _vm.showConfig.showStoragePath ? _c("td", {
    staticClass: "row__cell row__cell--large",
    attrs: {
      "data-cy-user-list-cell-storage-location": ""
    }
  }, [!_vm.isObfuscated ? [_vm.showConfig.showUserBackend ? _c("span", [_vm._v(_vm._s(_vm.user.backend))]) : _vm._e(), _vm._v(" "), _vm.showConfig.showStoragePath ? _c("span", {
    staticClass: "row__subtitle",
    attrs: {
      title: _vm.user.storageLocation
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.user.storageLocation) + "\n\t\t\t")]) : _vm._e()] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _vm.showConfig.showLastLogin ? _c("td", {
    staticClass: "row__cell",
    attrs: {
      title: _vm.userLastLoginTooltip,
      "data-cy-user-list-cell-last-login": ""
    }
  }, [!_vm.isObfuscated ? _c("span", [_vm._v(_vm._s(_vm.userLastLogin))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("td", {
    staticClass: "row__cell row__cell--large row__cell--fill",
    attrs: {
      "data-cy-user-list-cell-manager": ""
    }
  }, [_vm.editing ? [_c("label", {
    staticClass: "hidden-visually",
    attrs: {
      for: "manager" + _vm.uniqueId
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.managerLabel) + "\n\t\t\t")]), _vm._v(" "), _c("NcSelect", {
    staticClass: "select--fill",
    attrs: {
      "data-cy-user-list-input-manager": "",
      "data-loading": _vm.loading.manager || undefined,
      "input-id": "manager" + _vm.uniqueId,
      "close-on-select": true,
      disabled: _vm.isLoadingField,
      "append-to-body": false,
      loading: _vm.loadingPossibleManagers || _vm.loading.manager,
      label: "displayname",
      options: _vm.possibleManagers,
      placeholder: _vm.managerLabel
    },
    on: {
      open: _vm.searchInitialUserManager,
      search: _vm.searchUserManager,
      "option:selected": _vm.updateUserManager
    },
    model: {
      value: _vm.currentManager,
      callback: function ($$v) {
        _vm.currentManager = $$v;
      },
      expression: "currentManager"
    }
  })] : !_vm.isObfuscated ? _c("span", [_vm._v("\n\t\t\t" + _vm._s(_vm.user.manager) + "\n\t\t")]) : _vm._e()], 2), _vm._v(" "), _c("td", {
    staticClass: "row__cell row__cell--actions",
    attrs: {
      "data-cy-user-list-cell-actions": ""
    }
  }, [_vm.visible && !_vm.isObfuscated && _vm.canEdit && !_vm.loading.all ? _c("UserRowActions", {
    attrs: {
      actions: _vm.userActions,
      disabled: _vm.isLoadingField,
      edit: _vm.editing,
      user: _vm.user
    },
    on: {
      "update:edit": _vm.toggleEdit
    }
  }) : _vm._e()], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRowActions.vue?vue&type=template&id=34f3ef36":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRowActions.vue?vue&type=template&id=34f3ef36 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("NcActions", {
    attrs: {
      "aria-label": _vm.t("settings", "Toggle user actions menu"),
      disabled: _vm.disabled,
      inline: 1
    }
  }, [_c("NcActionButton", {
    attrs: {
      "data-cy-user-list-action-toggle-edit": `${_vm.edit}`,
      disabled: _vm.disabled
    },
    on: {
      click: _vm.toggleEdit
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("NcIconSvgWrapper", {
          key: _vm.editSvg,
          attrs: {
            svg: _vm.editSvg,
            "aria-hidden": "true"
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v("\n\t\t" + _vm._s(_vm.edit ? _vm.t("settings", "Done") : _vm.t("settings", "Edit")) + "\n\t\t")]), _vm._v(" "), _vm._l(_vm.actions, function (_ref, index) {
    let {
      action,
      icon,
      text
    } = _ref;
    return _c("NcActionButton", {
      key: index,
      attrs: {
        disabled: _vm.disabled,
        "aria-label": text,
        icon: icon
      },
      on: {
        click: event => action(event, {
          ..._vm.user
        })
      }
    }, [_vm._v("\n\t\t" + _vm._s(text) + "\n\t")]);
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=template&id=3eb7c73e&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=template&id=3eb7c73e&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("NcAppSettingsDialog", {
    attrs: {
      open: _vm.isModalOpen,
      "show-navigation": true,
      name: _vm.t("settings", "User management settings")
    },
    on: {
      "update:open": function ($event) {
        _vm.isModalOpen = $event;
      }
    }
  }, [_c("NcAppSettingsSection", {
    attrs: {
      id: "visibility-settings",
      name: _vm.t("settings", "Visibility")
    }
  }, [_c("NcCheckboxRadioSwitch", {
    attrs: {
      type: "switch",
      "data-test": "showLanguages",
      checked: _vm.showLanguages
    },
    on: {
      "update:checked": function ($event) {
        _vm.showLanguages = $event;
      }
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Show language")) + "\n\t\t")]), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    attrs: {
      type: "switch",
      "data-test": "showUserBackend",
      checked: _vm.showUserBackend
    },
    on: {
      "update:checked": function ($event) {
        _vm.showUserBackend = $event;
      }
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Show user backend")) + "\n\t\t")]), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    attrs: {
      type: "switch",
      "data-test": "showStoragePath",
      checked: _vm.showStoragePath
    },
    on: {
      "update:checked": function ($event) {
        _vm.showStoragePath = $event;
      }
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Show storage path")) + "\n\t\t")]), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    attrs: {
      type: "switch",
      "data-test": "showLastLogin",
      checked: _vm.showLastLogin
    },
    on: {
      "update:checked": function ($event) {
        _vm.showLastLogin = $event;
      }
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Show last login")) + "\n\t\t")])], 1), _vm._v(" "), _c("NcAppSettingsSection", {
    attrs: {
      id: "email-settings",
      name: _vm.t("settings", "Send email")
    }
  }, [_c("NcCheckboxRadioSwitch", {
    attrs: {
      type: "switch",
      "data-test": "sendWelcomeMail",
      checked: _vm.sendWelcomeMail,
      disabled: _vm.loadingSendMail
    },
    on: {
      "update:checked": function ($event) {
        _vm.sendWelcomeMail = $event;
      }
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Send welcome email to new users")) + "\n\t\t")])], 1), _vm._v(" "), _c("NcAppSettingsSection", {
    attrs: {
      id: "default-settings",
      name: _vm.t("settings", "Defaults")
    }
  }, [_c("label", {
    attrs: {
      for: "default-quota-select"
    }
  }, [_vm._v(_vm._s(_vm.t("settings", "Default quota")))]), _vm._v(" "), _c("NcSelect", {
    attrs: {
      "input-id": "default-quota-select",
      placement: "top",
      taggable: true,
      options: _vm.quotaOptions,
      "create-option": _vm.validateQuota,
      placeholder: _vm.t("settings", "Select default quota"),
      clearable: false
    },
    on: {
      "option:selected": _vm.setDefaultQuota
    },
    model: {
      value: _vm.defaultQuota,
      callback: function ($$v) {
        _vm.defaultQuota = $$v;
      },
      expression: "defaultQuota"
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=template&id=51adeab1&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=template&id=51adeab1&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("table", {
    staticClass: "user-list"
  }, [_vm._t("before"), _vm._v(" "), _c("thead", {
    ref: "thead",
    staticClass: "user-list__header",
    attrs: {
      role: "rowgroup"
    }
  }, [_vm._t("header")], 2), _vm._v(" "), _c("tbody", {
    staticClass: "user-list__body",
    style: _vm.tbodyStyle
  }, _vm._l(_vm.renderedItems, function (item, i) {
    return _c(_vm.dataComponent, _vm._b({
      key: item[_vm.dataKey],
      tag: "component",
      attrs: {
        user: item,
        visible: (i >= _vm.bufferItems || _vm.index <= _vm.bufferItems) && i < _vm.shownItems - _vm.bufferItems
      }
    }, "component", _vm.extraProps, false));
  }), 1), _vm._v(" "), _c("tfoot", {
    directives: [{
      name: "element-visibility",
      rawName: "v-element-visibility",
      value: _vm.handleFooterVisibility,
      expression: "handleFooterVisibility"
    }],
    ref: "tfoot",
    staticClass: "user-list__footer",
    attrs: {
      role: "rowgroup"
    }
  }, [_vm._t("footer")], 2)], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=template&id=889b7562&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=template&id=889b7562&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("Fragment", [_c("NcContent", {
    attrs: {
      "app-name": "settings"
    }
  }, [_c("NcAppNavigation", {
    scopedSlots: _vm._u([{
      key: "list",
      fn: function () {
        return [_c("NcAppNavigationItem", {
          attrs: {
            id: "everyone",
            exact: true,
            name: _vm.t("settings", "Active users"),
            to: {
              name: "users"
            }
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("AccountGroup", {
                attrs: {
                  size: 20
                }
              })];
            },
            proxy: true
          }, {
            key: "counter",
            fn: function () {
              return [_vm.userCount ? _c("NcCounterBubble", {
                attrs: {
                  type: !_vm.selectedGroupDecoded ? "highlighted" : undefined
                }
              }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.userCount) + "\n\t\t\t\t\t\t")]) : _vm._e()];
            },
            proxy: true
          }])
        }), _vm._v(" "), _vm.settings.isAdmin ? _c("NcAppNavigationItem", {
          attrs: {
            id: "admin",
            exact: true,
            name: _vm.t("settings", "Admins"),
            to: {
              name: "group",
              params: {
                selectedGroup: "admin"
              }
            }
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("ShieldAccount", {
                attrs: {
                  size: 20
                }
              })];
            },
            proxy: true
          }, _vm.adminGroupMenu.count > 0 ? {
            key: "counter",
            fn: function () {
              return [_c("NcCounterBubble", {
                attrs: {
                  type: _vm.selectedGroupDecoded === "admin" ? "highlighted" : undefined
                }
              }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.adminGroupMenu.count) + "\n\t\t\t\t\t\t")])];
            },
            proxy: true
          } : null], null, true)
        }) : _vm._e(), _vm._v(" "), _vm.disabledGroupMenu.usercount > 0 || _vm.disabledGroupMenu.usercount === -1 ? _c("NcAppNavigationItem", {
          attrs: {
            id: "disabled",
            exact: true,
            name: _vm.t("settings", "Disabled users"),
            to: {
              name: "group",
              params: {
                selectedGroup: "disabled"
              }
            }
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("AccountOff", {
                attrs: {
                  size: 20
                }
              })];
            },
            proxy: true
          }, _vm.disabledGroupMenu.usercount > 0 ? {
            key: "counter",
            fn: function () {
              return [_c("NcCounterBubble", {
                attrs: {
                  type: _vm.selectedGroupDecoded === "disabled" ? "highlighted" : undefined
                }
              }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.disabledGroupMenu.usercount) + "\n\t\t\t\t\t\t")])];
            },
            proxy: true
          } : null], null, true)
        }) : _vm._e(), _vm._v(" "), _c("NcAppNavigationCaption", {
          attrs: {
            name: _vm.t("settings", "Groups"),
            disabled: _vm.loadingAddGroup,
            "aria-label": _vm.loadingAddGroup ? _vm.t("settings", "Creating group …") : _vm.t("settings", "Create group"),
            "force-menu": "",
            open: _vm.isAddGroupOpen
          },
          on: {
            "update:open": function ($event) {
              _vm.isAddGroupOpen = $event;
            }
          },
          scopedSlots: _vm._u([{
            key: "actionsTriggerIcon",
            fn: function () {
              return [_vm.loadingAddGroup ? _c("NcLoadingIcon") : _c("Plus", {
                attrs: {
                  size: 20
                }
              })];
            },
            proxy: true
          }, {
            key: "actions",
            fn: function () {
              return [_c("NcActionText", {
                scopedSlots: _vm._u([{
                  key: "icon",
                  fn: function () {
                    return [_c("AccountGroup", {
                      attrs: {
                        size: 20
                      }
                    })];
                  },
                  proxy: true
                }])
              }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.t("settings", "Create group")) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c("NcActionInput", {
                attrs: {
                  label: _vm.t("settings", "Group name"),
                  "data-cy-settings-new-group-name": "",
                  "label-outside": false,
                  disabled: _vm.loadingAddGroup,
                  value: _vm.newGroupName,
                  error: _vm.hasAddGroupError,
                  "helper-text": _vm.hasAddGroupError ? _vm.t("settings", "Please enter a valid group name") : ""
                },
                on: {
                  "update:value": function ($event) {
                    _vm.newGroupName = $event;
                  },
                  submit: _vm.createGroup
                }
              })];
            },
            proxy: true
          }])
        }), _vm._v(" "), _vm._l(_vm.groupList, function (group) {
          return _c("GroupListItem", {
            key: group.id,
            attrs: {
              id: group.id,
              active: _vm.selectedGroupDecoded === group.id,
              name: group.title,
              count: group.count
            }
          });
        })];
      },
      proxy: true
    }, {
      key: "footer",
      fn: function () {
        return [_c("ul", {
          staticClass: "app-navigation-entry__settings"
        }, [_c("NcAppNavigationItem", {
          attrs: {
            name: _vm.t("settings", "User management settings")
          },
          on: {
            click: function ($event) {
              _vm.isDialogOpen = true;
            }
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("Cog", {
                attrs: {
                  size: 20
                }
              })];
            },
            proxy: true
          }])
        })], 1)];
      },
      proxy: true
    }])
  }, [_c("NcAppNavigationNew", {
    attrs: {
      "button-id": "new-user-button",
      text: _vm.t("settings", "New user")
    },
    on: {
      click: _vm.showNewUserMenu,
      keyup: [function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.showNewUserMenu.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) return null;
        return _vm.showNewUserMenu.apply(null, arguments);
      }]
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("Plus", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }])
  })], 1), _vm._v(" "), _c("NcAppContent", [_c("UserList", {
    attrs: {
      "selected-group": _vm.selectedGroupDecoded,
      "external-actions": _vm.externalActions
    }
  })], 1)], 1), _vm._v(" "), _c("UserSettingsDialog", {
    attrs: {
      open: _vm.isDialogOpen
    },
    on: {
      "update:open": function ($event) {
        _vm.isDialogOpen = $event;
      }
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.modal__header[data-v-b3f9b202] {
  margin: 0;
}
.modal__content[data-v-b3f9b202] {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 4px 0;
}
.modal__button-row[data-v-b3f9b202] {
  display: flex;
  width: 100%;
  justify-content: space-between;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * @copyright 2023 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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
.empty[data-v-6cba3aca] .icon-vue {
  width: 64px;
  height: 64px;
}
.empty[data-v-6cba3aca] .icon-vue svg {
  max-width: 64px;
  max-height: 64px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.modal__form[data-v-7b45e5ac] {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 4px 0;
  /* fake input for groups validation */
}
.modal__form #new-user-groups-input[data-v-7b45e5ac] {
  position: absolute;
  opacity: 0;
  /* The "hidden" input is behind the NcSelect, so in general it does
  * not receives clicks. However, with Firefox, after the validation
  * fails, it will receive the first click done on it, so its width needs
  * to be set to 0 to prevent that ("pointer-events: none" does not
  * prevent it). */
  width: 0;
}
.modal__item[data-v-7b45e5ac] {
  width: 100%;
}
.modal__item[data-v-7b45e5ac]:not(:focus):not(:active) {
  border-color: var(--color-border-dark);
}
.modal__hint[data-v-7b45e5ac] {
  color: var(--color-text-maxcontrast);
  margin-top: 8px;
  align-self: flex-start;
}
.modal__label[data-v-7b45e5ac] {
  display: block;
  padding: 4px 0;
}
.modal__select[data-v-7b45e5ac] {
  width: 100%;
}
.modal__submit[data-v-7b45e5ac] {
  margin-top: 20px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * @copyright 2023 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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
.footer[data-v-97a6cb68] {
  position: relative;
  display: flex;
  min-width: 100%;
  width: fit-content;
  height: var(--row-height);
  background-color: var(--color-main-background);
}
.footer__cell[data-v-97a6cb68] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 var(--cell-padding);
  min-width: var(--cell-width);
  width: var(--cell-width);
  color: var(--color-main-text);
}
.footer__cell strong[data-v-97a6cb68],
.footer__cell span[data-v-97a6cb68],
.footer__cell label[data-v-97a6cb68] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-wrap: anywhere;
}
@media (min-width: 670px) {
.footer__cell[data-v-97a6cb68] { /* Show one &--large column between stickied columns */
}
.footer__cell--avatar[data-v-97a6cb68], .footer__cell--displayname[data-v-97a6cb68] {
    position: sticky;
    z-index: var(--sticky-column-z-index);
    background-color: var(--color-main-background);
}
.footer__cell--avatar[data-v-97a6cb68] {
    left: 0;
}
.footer__cell--displayname[data-v-97a6cb68] {
    left: var(--avatar-cell-width);
    border-right: 1px solid var(--color-border);
}
}
.footer__cell--avatar[data-v-97a6cb68] {
  min-width: var(--avatar-cell-width);
  width: var(--avatar-cell-width);
  align-items: center;
  padding: 0;
  user-select: none;
}
.footer__cell--multiline span[data-v-97a6cb68] {
  line-height: 1.3em;
  white-space: unset;
}
@supports (-webkit-line-clamp: 2) {
.footer__cell--multiline span[data-v-97a6cb68] {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
}
.footer__cell--large[data-v-97a6cb68] {
  min-width: var(--cell-width-large);
  width: var(--cell-width-large);
}
.footer__cell--obfuscated[data-v-97a6cb68] {
  min-width: 400px;
  width: 400px;
}
.footer__cell--fill[data-v-97a6cb68] {
  min-width: var(--cell-width-large);
  width: 100%;
}
.footer__cell--actions[data-v-97a6cb68] {
  position: sticky;
  right: 0;
  z-index: var(--sticky-column-z-index);
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 110px;
  width: 110px;
  background-color: var(--color-main-background);
  border-left: 1px solid var(--color-border);
}
.footer__subtitle[data-v-97a6cb68] {
  color: var(--color-text-maxcontrast);
}
.footer__cell[data-v-97a6cb68] {
  position: sticky;
  color: var(--color-text-maxcontrast);
}
.footer__cell--loading[data-v-97a6cb68] {
  left: 0;
  min-width: var(--avatar-cell-width);
  width: var(--avatar-cell-width);
  align-items: center;
  padding: 0;
}
.footer__cell--count[data-v-97a6cb68] {
  left: var(--avatar-cell-width);
  min-width: var(--cell-width);
  width: var(--cell-width);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * @copyright 2023 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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
.header[data-v-55420384] {
  position: relative;
  display: flex;
  min-width: 100%;
  width: fit-content;
  height: var(--row-height);
  background-color: var(--color-main-background);
  border-bottom: 1px solid var(--color-border);
}
.header__cell[data-v-55420384] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 var(--cell-padding);
  min-width: var(--cell-width);
  width: var(--cell-width);
  color: var(--color-main-text);
}
.header__cell strong[data-v-55420384],
.header__cell span[data-v-55420384],
.header__cell label[data-v-55420384] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-wrap: anywhere;
}
@media (min-width: 670px) {
.header__cell[data-v-55420384] { /* Show one &--large column between stickied columns */
}
.header__cell--avatar[data-v-55420384], .header__cell--displayname[data-v-55420384] {
    position: sticky;
    z-index: var(--sticky-column-z-index);
    background-color: var(--color-main-background);
}
.header__cell--avatar[data-v-55420384] {
    left: 0;
}
.header__cell--displayname[data-v-55420384] {
    left: var(--avatar-cell-width);
    border-right: 1px solid var(--color-border);
}
}
.header__cell--avatar[data-v-55420384] {
  min-width: var(--avatar-cell-width);
  width: var(--avatar-cell-width);
  align-items: center;
  padding: 0;
  user-select: none;
}
.header__cell--multiline span[data-v-55420384] {
  line-height: 1.3em;
  white-space: unset;
}
@supports (-webkit-line-clamp: 2) {
.header__cell--multiline span[data-v-55420384] {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
}
.header__cell--large[data-v-55420384] {
  min-width: var(--cell-width-large);
  width: var(--cell-width-large);
}
.header__cell--obfuscated[data-v-55420384] {
  min-width: 400px;
  width: 400px;
}
.header__cell--fill[data-v-55420384] {
  min-width: var(--cell-width-large);
  width: 100%;
}
.header__cell--actions[data-v-55420384] {
  position: sticky;
  right: 0;
  z-index: var(--sticky-column-z-index);
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 110px;
  width: 110px;
  background-color: var(--color-main-background);
  border-left: 1px solid var(--color-border);
}
.header__subtitle[data-v-55420384] {
  color: var(--color-text-maxcontrast);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * @copyright 2023 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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
.user-list__row[data-v-11563777] {
  position: relative;
  display: flex;
  min-width: 100%;
  width: fit-content;
  height: var(--row-height);
  background-color: var(--color-main-background);
}
.user-list__row[data-v-11563777]:hover {
  background-color: var(--color-background-hover);
}
.user-list__row:hover .row__cell[data-v-11563777]:not(.row__cell--actions) {
  background-color: var(--color-background-hover);
}
.user-list__row .select--fill[data-v-11563777] {
  max-width: calc(var(--cell-width-large) - 2 * var(--cell-padding));
}
.row__cell[data-v-11563777] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 var(--cell-padding);
  min-width: var(--cell-width);
  width: var(--cell-width);
  color: var(--color-main-text);
}
.row__cell strong[data-v-11563777],
.row__cell span[data-v-11563777],
.row__cell label[data-v-11563777] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-wrap: anywhere;
}
@media (min-width: 670px) {
.row__cell[data-v-11563777] { /* Show one &--large column between stickied columns */
}
.row__cell--avatar[data-v-11563777], .row__cell--displayname[data-v-11563777] {
    position: sticky;
    z-index: var(--sticky-column-z-index);
    background-color: var(--color-main-background);
}
.row__cell--avatar[data-v-11563777] {
    left: 0;
}
.row__cell--displayname[data-v-11563777] {
    left: var(--avatar-cell-width);
    border-right: 1px solid var(--color-border);
}
}
.row__cell--avatar[data-v-11563777] {
  min-width: var(--avatar-cell-width);
  width: var(--avatar-cell-width);
  align-items: center;
  padding: 0;
  user-select: none;
}
.row__cell--multiline span[data-v-11563777] {
  line-height: 1.3em;
  white-space: unset;
}
@supports (-webkit-line-clamp: 2) {
.row__cell--multiline span[data-v-11563777] {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
}
.row__cell--large[data-v-11563777] {
  min-width: var(--cell-width-large);
  width: var(--cell-width-large);
}
.row__cell--obfuscated[data-v-11563777] {
  min-width: 400px;
  width: 400px;
}
.row__cell--fill[data-v-11563777] {
  min-width: var(--cell-width-large);
  width: 100%;
}
.row__cell--actions[data-v-11563777] {
  position: sticky;
  right: 0;
  z-index: var(--sticky-column-z-index);
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 110px;
  width: 110px;
  background-color: var(--color-main-background);
  border-left: 1px solid var(--color-border);
}
.row__subtitle[data-v-11563777] {
  color: var(--color-text-maxcontrast);
}
.row__cell[data-v-11563777] {
  border-bottom: 1px solid var(--color-border);
}
.row__cell[data-v-11563777] .v-select.select {
  min-width: var(--cell-min-width);
}
.row__progress[data-v-11563777] {
  margin-top: 4px;
}
.row__progress--warn[data-v-11563777]::-moz-progress-bar {
  background: var(--color-warning) !important;
}
.row__progress--warn[data-v-11563777]::-webkit-progress-value {
  background: var(--color-warning) !important;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `label[for=default-quota-select][data-v-3eb7c73e] {
  display: block;
  padding: 4px 0;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.user-list[data-v-51adeab1] {
  --avatar-cell-width: 48px;
  --cell-padding: 7px;
  --cell-width: 200px;
  --cell-width-large: 300px;
  --cell-min-width: calc(var(--cell-width) - (2 * var(--cell-padding)));
  --sticky-column-z-index: calc(var(--vs-dropdown-z-index) + 1);
  display: block;
  overflow: auto;
  height: 100%;
}
.user-list__header[data-v-51adeab1], .user-list__footer[data-v-51adeab1] {
  position: sticky;
  display: block;
}
.user-list__header[data-v-51adeab1] {
  top: 0;
  z-index: calc(var(--sticky-column-z-index) + 1);
}
.user-list__footer[data-v-51adeab1] {
  left: 0;
}
.user-list__body[data-v-51adeab1] {
  display: flex;
  flex-direction: column;
  width: 100%;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.app-content[data-v-889b7562] {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  max-height: 100%;
}
.app-navigation-entry__settings[data-v-889b7562] {
  height: auto !important;
  flex: 0 0 auto;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupListItem_vue_vue_type_style_index_0_id_b3f9b202_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupListItem_vue_vue_type_style_index_0_id_b3f9b202_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupListItem_vue_vue_type_style_index_0_id_b3f9b202_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupListItem_vue_vue_type_style_index_0_id_b3f9b202_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupListItem_vue_vue_type_style_index_0_id_b3f9b202_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_6cba3aca_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_6cba3aca_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_6cba3aca_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_6cba3aca_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_6cba3aca_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUserModal_vue_vue_type_style_index_0_id_7b45e5ac_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUserModal_vue_vue_type_style_index_0_id_7b45e5ac_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUserModal_vue_vue_type_style_index_0_id_7b45e5ac_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUserModal_vue_vue_type_style_index_0_id_7b45e5ac_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUserModal_vue_vue_type_style_index_0_id_7b45e5ac_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListFooter_vue_vue_type_style_index_0_id_97a6cb68_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListFooter_vue_vue_type_style_index_0_id_97a6cb68_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListFooter_vue_vue_type_style_index_0_id_97a6cb68_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListFooter_vue_vue_type_style_index_0_id_97a6cb68_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListFooter_vue_vue_type_style_index_0_id_97a6cb68_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListHeader_vue_vue_type_style_index_0_id_55420384_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListHeader_vue_vue_type_style_index_0_id_55420384_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListHeader_vue_vue_type_style_index_0_id_55420384_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListHeader_vue_vue_type_style_index_0_id_55420384_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListHeader_vue_vue_type_style_index_0_id_55420384_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRow_vue_vue_type_style_index_0_id_11563777_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRow_vue_vue_type_style_index_0_id_11563777_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRow_vue_vue_type_style_index_0_id_11563777_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRow_vue_vue_type_style_index_0_id_11563777_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRow_vue_vue_type_style_index_0_id_11563777_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsDialog_vue_vue_type_style_index_0_id_3eb7c73e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsDialog_vue_vue_type_style_index_0_id_3eb7c73e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsDialog_vue_vue_type_style_index_0_id_3eb7c73e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsDialog_vue_vue_type_style_index_0_id_3eb7c73e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsDialog_vue_vue_type_style_index_0_id_3eb7c73e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VirtualList_vue_vue_type_style_index_0_id_51adeab1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VirtualList_vue_vue_type_style_index_0_id_51adeab1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VirtualList_vue_vue_type_style_index_0_id_51adeab1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VirtualList_vue_vue_type_style_index_0_id_51adeab1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VirtualList_vue_vue_type_style_index_0_id_51adeab1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_889b7562_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_889b7562_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_889b7562_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_889b7562_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_889b7562_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./apps/settings/src/components/GroupListItem.vue":
/*!********************************************************!*\
  !*** ./apps/settings/src/components/GroupListItem.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GroupListItem_vue_vue_type_template_id_b3f9b202_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupListItem.vue?vue&type=template&id=b3f9b202&scoped=true */ "./apps/settings/src/components/GroupListItem.vue?vue&type=template&id=b3f9b202&scoped=true");
/* harmony import */ var _GroupListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupListItem.vue?vue&type=script&lang=js */ "./apps/settings/src/components/GroupListItem.vue?vue&type=script&lang=js");
/* harmony import */ var _GroupListItem_vue_vue_type_style_index_0_id_b3f9b202_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true */ "./apps/settings/src/components/GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GroupListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GroupListItem_vue_vue_type_template_id_b3f9b202_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _GroupListItem_vue_vue_type_template_id_b3f9b202_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b3f9b202",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/GroupListItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/UserList.vue":
/*!***************************************************!*\
  !*** ./apps/settings/src/components/UserList.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserList_vue_vue_type_template_id_6cba3aca_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserList.vue?vue&type=template&id=6cba3aca&scoped=true */ "./apps/settings/src/components/UserList.vue?vue&type=template&id=6cba3aca&scoped=true");
/* harmony import */ var _UserList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserList.vue?vue&type=script&lang=js */ "./apps/settings/src/components/UserList.vue?vue&type=script&lang=js");
/* harmony import */ var _UserList_vue_vue_type_style_index_0_id_6cba3aca_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true */ "./apps/settings/src/components/UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserList_vue_vue_type_template_id_6cba3aca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _UserList_vue_vue_type_template_id_6cba3aca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6cba3aca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/UserList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/Users/NewUserModal.vue":
/*!*************************************************************!*\
  !*** ./apps/settings/src/components/Users/NewUserModal.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewUserModal_vue_vue_type_template_id_7b45e5ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewUserModal.vue?vue&type=template&id=7b45e5ac&scoped=true */ "./apps/settings/src/components/Users/NewUserModal.vue?vue&type=template&id=7b45e5ac&scoped=true");
/* harmony import */ var _NewUserModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewUserModal.vue?vue&type=script&lang=js */ "./apps/settings/src/components/Users/NewUserModal.vue?vue&type=script&lang=js");
/* harmony import */ var _NewUserModal_vue_vue_type_style_index_0_id_7b45e5ac_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true */ "./apps/settings/src/components/Users/NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NewUserModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewUserModal_vue_vue_type_template_id_7b45e5ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NewUserModal_vue_vue_type_template_id_7b45e5ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7b45e5ac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/Users/NewUserModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/Users/UserListFooter.vue":
/*!***************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserListFooter.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserListFooter_vue_vue_type_template_id_97a6cb68_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserListFooter.vue?vue&type=template&id=97a6cb68&scoped=true */ "./apps/settings/src/components/Users/UserListFooter.vue?vue&type=template&id=97a6cb68&scoped=true");
/* harmony import */ var _UserListFooter_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserListFooter.vue?vue&type=script&lang=ts */ "./apps/settings/src/components/Users/UserListFooter.vue?vue&type=script&lang=ts");
/* harmony import */ var _UserListFooter_vue_vue_type_style_index_0_id_97a6cb68_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true */ "./apps/settings/src/components/Users/UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserListFooter_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserListFooter_vue_vue_type_template_id_97a6cb68_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _UserListFooter_vue_vue_type_template_id_97a6cb68_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "97a6cb68",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/Users/UserListFooter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/Users/UserListHeader.vue":
/*!***************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserListHeader.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserListHeader_vue_vue_type_template_id_55420384_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserListHeader.vue?vue&type=template&id=55420384&scoped=true */ "./apps/settings/src/components/Users/UserListHeader.vue?vue&type=template&id=55420384&scoped=true");
/* harmony import */ var _UserListHeader_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserListHeader.vue?vue&type=script&lang=ts */ "./apps/settings/src/components/Users/UserListHeader.vue?vue&type=script&lang=ts");
/* harmony import */ var _UserListHeader_vue_vue_type_style_index_0_id_55420384_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true */ "./apps/settings/src/components/Users/UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserListHeader_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserListHeader_vue_vue_type_template_id_55420384_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _UserListHeader_vue_vue_type_template_id_55420384_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "55420384",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/Users/UserListHeader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/Users/UserRow.vue":
/*!********************************************************!*\
  !*** ./apps/settings/src/components/Users/UserRow.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserRow_vue_vue_type_template_id_11563777_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserRow.vue?vue&type=template&id=11563777&scoped=true */ "./apps/settings/src/components/Users/UserRow.vue?vue&type=template&id=11563777&scoped=true");
/* harmony import */ var _UserRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserRow.vue?vue&type=script&lang=js */ "./apps/settings/src/components/Users/UserRow.vue?vue&type=script&lang=js");
/* harmony import */ var _UserRow_vue_vue_type_style_index_0_id_11563777_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true */ "./apps/settings/src/components/Users/UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserRow_vue_vue_type_template_id_11563777_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _UserRow_vue_vue_type_template_id_11563777_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "11563777",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/Users/UserRow.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/Users/UserRowActions.vue":
/*!***************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserRowActions.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserRowActions_vue_vue_type_template_id_34f3ef36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserRowActions.vue?vue&type=template&id=34f3ef36 */ "./apps/settings/src/components/Users/UserRowActions.vue?vue&type=template&id=34f3ef36");
/* harmony import */ var _UserRowActions_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserRowActions.vue?vue&type=script&lang=ts */ "./apps/settings/src/components/Users/UserRowActions.vue?vue&type=script&lang=ts");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserRowActions_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserRowActions_vue_vue_type_template_id_34f3ef36__WEBPACK_IMPORTED_MODULE_0__.render,
  _UserRowActions_vue_vue_type_template_id_34f3ef36__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/Users/UserRowActions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/Users/UserSettingsDialog.vue":
/*!*******************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserSettingsDialog.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserSettingsDialog_vue_vue_type_template_id_3eb7c73e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsDialog.vue?vue&type=template&id=3eb7c73e&scoped=true */ "./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=template&id=3eb7c73e&scoped=true");
/* harmony import */ var _UserSettingsDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettingsDialog.vue?vue&type=script&lang=js */ "./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=script&lang=js");
/* harmony import */ var _UserSettingsDialog_vue_vue_type_style_index_0_id_3eb7c73e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true */ "./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserSettingsDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSettingsDialog_vue_vue_type_template_id_3eb7c73e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _UserSettingsDialog_vue_vue_type_template_id_3eb7c73e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3eb7c73e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/Users/UserSettingsDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/Users/VirtualList.vue":
/*!************************************************************!*\
  !*** ./apps/settings/src/components/Users/VirtualList.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VirtualList_vue_vue_type_template_id_51adeab1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VirtualList.vue?vue&type=template&id=51adeab1&scoped=true */ "./apps/settings/src/components/Users/VirtualList.vue?vue&type=template&id=51adeab1&scoped=true");
/* harmony import */ var _VirtualList_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VirtualList.vue?vue&type=script&lang=ts */ "./apps/settings/src/components/Users/VirtualList.vue?vue&type=script&lang=ts");
/* harmony import */ var _VirtualList_vue_vue_type_style_index_0_id_51adeab1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true */ "./apps/settings/src/components/Users/VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VirtualList_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"],
  _VirtualList_vue_vue_type_template_id_51adeab1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _VirtualList_vue_vue_type_template_id_51adeab1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "51adeab1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/Users/VirtualList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/views/Users.vue":
/*!*******************************************!*\
  !*** ./apps/settings/src/views/Users.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_vue_vue_type_template_id_889b7562_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=889b7562&scoped=true */ "./apps/settings/src/views/Users.vue?vue&type=template&id=889b7562&scoped=true");
/* harmony import */ var _Users_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js */ "./apps/settings/src/views/Users.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_vue_vue_type_style_index_0_id_889b7562_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true */ "./apps/settings/src/views/Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Users_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_889b7562_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Users_vue_vue_type_template_id_889b7562_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "889b7562",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/views/Users.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-material-design-icons/AccountOff.vue":
/*!***************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/AccountOff.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AccountOff_vue_vue_type_template_id_5a55962e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountOff.vue?vue&type=template&id=5a55962e */ "./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=template&id=5a55962e");
/* harmony import */ var _AccountOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountOff.vue?vue&type=script&lang=js */ "./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=script&lang=js");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountOff_vue_vue_type_template_id_5a55962e__WEBPACK_IMPORTED_MODULE_0__.render,
  _AccountOff_vue_vue_type_template_id_5a55962e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/AccountOff.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AccountOffIcon",
  emits: ['click'],
  props: {
    title: {
      type: String,
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
});


/***/ }),

/***/ "./node_modules/vue-material-design-icons/Plus.vue":
/*!*********************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Plus.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Plus_vue_vue_type_template_id_18bbb6c6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plus.vue?vue&type=template&id=18bbb6c6 */ "./node_modules/vue-material-design-icons/Plus.vue?vue&type=template&id=18bbb6c6");
/* harmony import */ var _Plus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Plus.vue?vue&type=script&lang=js */ "./node_modules/vue-material-design-icons/Plus.vue?vue&type=script&lang=js");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Plus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Plus_vue_vue_type_template_id_18bbb6c6__WEBPACK_IMPORTED_MODULE_0__.render,
  _Plus_vue_vue_type_template_id_18bbb6c6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/Plus.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Plus.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Plus.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PlusIcon",
  emits: ['click'],
  props: {
    title: {
      type: String,
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
});


/***/ }),

/***/ "./node_modules/vue-material-design-icons/ShieldAccount.vue":
/*!******************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/ShieldAccount.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShieldAccount_vue_vue_type_template_id_223b63f0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShieldAccount.vue?vue&type=template&id=223b63f0 */ "./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=template&id=223b63f0");
/* harmony import */ var _ShieldAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShieldAccount.vue?vue&type=script&lang=js */ "./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=script&lang=js");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShieldAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShieldAccount_vue_vue_type_template_id_223b63f0__WEBPACK_IMPORTED_MODULE_0__.render,
  _ShieldAccount_vue_vue_type_template_id_223b63f0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/ShieldAccount.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ShieldAccountIcon",
  emits: ['click'],
  props: {
    title: {
      type: String,
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
});


/***/ }),

/***/ "./apps/settings/src/components/Users/UserListFooter.vue?vue&type=script&lang=ts":
/*!***************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserListFooter.vue?vue&type=script&lang=ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListFooter_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserListFooter.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=script&lang=ts");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListFooter_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/Users/UserListHeader.vue?vue&type=script&lang=ts":
/*!***************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserListHeader.vue?vue&type=script&lang=ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListHeader_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserListHeader.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=script&lang=ts");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListHeader_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/Users/UserRowActions.vue?vue&type=script&lang=ts":
/*!***************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserRowActions.vue?vue&type=script&lang=ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRowActions_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserRowActions.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRowActions.vue?vue&type=script&lang=ts");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRowActions_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/Users/VirtualList.vue?vue&type=script&lang=ts":
/*!************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/VirtualList.vue?vue&type=script&lang=ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_VirtualList_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VirtualList.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=script&lang=ts");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_VirtualList_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/GroupListItem.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./apps/settings/src/components/GroupListItem.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupListItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/UserList.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./apps/settings/src/components/UserList.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/Users/NewUserModal.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/NewUserModal.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUserModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewUserModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUserModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/Users/UserRow.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserRow.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserRow.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserSettingsDialog.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/views/Users.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./apps/settings/src/views/Users.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/GroupListItem.vue?vue&type=template&id=b3f9b202&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./apps/settings/src/components/GroupListItem.vue?vue&type=template&id=b3f9b202&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupListItem_vue_vue_type_template_id_b3f9b202_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupListItem_vue_vue_type_template_id_b3f9b202_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupListItem_vue_vue_type_template_id_b3f9b202_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupListItem.vue?vue&type=template&id=b3f9b202&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=template&id=b3f9b202&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/UserList.vue?vue&type=template&id=6cba3aca&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./apps/settings/src/components/UserList.vue?vue&type=template&id=6cba3aca&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_6cba3aca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_6cba3aca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_6cba3aca_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserList.vue?vue&type=template&id=6cba3aca&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=template&id=6cba3aca&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/NewUserModal.vue?vue&type=template&id=7b45e5ac&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/NewUserModal.vue?vue&type=template&id=7b45e5ac&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUserModal_vue_vue_type_template_id_7b45e5ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUserModal_vue_vue_type_template_id_7b45e5ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUserModal_vue_vue_type_template_id_7b45e5ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewUserModal.vue?vue&type=template&id=7b45e5ac&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=template&id=7b45e5ac&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/UserListFooter.vue?vue&type=template&id=97a6cb68&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserListFooter.vue?vue&type=template&id=97a6cb68&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListFooter_vue_vue_type_template_id_97a6cb68_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListFooter_vue_vue_type_template_id_97a6cb68_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListFooter_vue_vue_type_template_id_97a6cb68_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserListFooter.vue?vue&type=template&id=97a6cb68&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=template&id=97a6cb68&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/UserListHeader.vue?vue&type=template&id=55420384&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserListHeader.vue?vue&type=template&id=55420384&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListHeader_vue_vue_type_template_id_55420384_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListHeader_vue_vue_type_template_id_55420384_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListHeader_vue_vue_type_template_id_55420384_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserListHeader.vue?vue&type=template&id=55420384&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=template&id=55420384&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/UserRow.vue?vue&type=template&id=11563777&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserRow.vue?vue&type=template&id=11563777&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRow_vue_vue_type_template_id_11563777_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRow_vue_vue_type_template_id_11563777_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRow_vue_vue_type_template_id_11563777_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserRow.vue?vue&type=template&id=11563777&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=template&id=11563777&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/UserRowActions.vue?vue&type=template&id=34f3ef36":
/*!*********************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserRowActions.vue?vue&type=template&id=34f3ef36 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRowActions_vue_vue_type_template_id_34f3ef36__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRowActions_vue_vue_type_template_id_34f3ef36__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRowActions_vue_vue_type_template_id_34f3ef36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserRowActions.vue?vue&type=template&id=34f3ef36 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRowActions.vue?vue&type=template&id=34f3ef36");


/***/ }),

/***/ "./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=template&id=3eb7c73e&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=template&id=3eb7c73e&scoped=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsDialog_vue_vue_type_template_id_3eb7c73e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsDialog_vue_vue_type_template_id_3eb7c73e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsDialog_vue_vue_type_template_id_3eb7c73e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserSettingsDialog.vue?vue&type=template&id=3eb7c73e&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=template&id=3eb7c73e&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/VirtualList.vue?vue&type=template&id=51adeab1&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/VirtualList.vue?vue&type=template&id=51adeab1&scoped=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VirtualList_vue_vue_type_template_id_51adeab1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VirtualList_vue_vue_type_template_id_51adeab1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VirtualList_vue_vue_type_template_id_51adeab1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VirtualList.vue?vue&type=template&id=51adeab1&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=template&id=51adeab1&scoped=true");


/***/ }),

/***/ "./apps/settings/src/views/Users.vue?vue&type=template&id=889b7562&scoped=true":
/*!*************************************************************************************!*\
  !*** ./apps/settings/src/views/Users.vue?vue&type=template&id=889b7562&scoped=true ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_889b7562_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_889b7562_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_889b7562_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=template&id=889b7562&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=template&id=889b7562&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./apps/settings/src/components/GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupListItem_vue_vue_type_style_index_0_id_b3f9b202_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./apps/settings/src/components/UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_6cba3aca_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUserModal_vue_vue_type_style_index_0_id_7b45e5ac_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListFooter_vue_vue_type_style_index_0_id_97a6cb68_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListHeader_vue_vue_type_style_index_0_id_55420384_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRow_vue_vue_type_style_index_0_id_11563777_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true":
/*!****************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsDialog_vue_vue_type_style_index_0_id_3eb7c73e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true":
/*!*********************************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VirtualList_vue_vue_type_style_index_0_id_51adeab1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true");


/***/ }),

/***/ "./apps/settings/src/views/Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./apps/settings/src/views/Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_889b7562_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true");


/***/ }),

/***/ "./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_AccountOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./AccountOff.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_AccountOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/Plus.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Plus.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_Plus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./Plus.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Plus.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_Plus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_ShieldAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./ShieldAccount.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_ShieldAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=template&id=5a55962e":
/*!*********************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=template&id=5a55962e ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_AccountOff_vue_vue_type_template_id_5a55962e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_AccountOff_vue_vue_type_template_id_5a55962e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_AccountOff_vue_vue_type_template_id_5a55962e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./AccountOff.vue?vue&type=template&id=5a55962e */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=template&id=5a55962e");


/***/ }),

/***/ "./node_modules/vue-material-design-icons/Plus.vue?vue&type=template&id=18bbb6c6":
/*!***************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Plus.vue?vue&type=template&id=18bbb6c6 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Plus_vue_vue_type_template_id_18bbb6c6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Plus_vue_vue_type_template_id_18bbb6c6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Plus_vue_vue_type_template_id_18bbb6c6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./Plus.vue?vue&type=template&id=18bbb6c6 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Plus.vue?vue&type=template&id=18bbb6c6");


/***/ }),

/***/ "./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=template&id=223b63f0":
/*!************************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=template&id=223b63f0 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_ShieldAccount_vue_vue_type_template_id_223b63f0__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_ShieldAccount_vue_vue_type_template_id_223b63f0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_ShieldAccount_vue_vue_type_template_id_223b63f0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./ShieldAccount.vue?vue&type=template&id=223b63f0 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=template&id=223b63f0");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=template&id=5a55962e":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=template&id=5a55962e ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "span",
    _vm._b(
      {
        staticClass: "material-design-icon account-off-icon",
        attrs: {
          "aria-hidden": !_vm.title,
          "aria-label": _vm.title,
          role: "img",
        },
        on: {
          click: function ($event) {
            return _vm.$emit("click", $event)
          },
        },
      },
      "span",
      _vm.$attrs,
      false
    ),
    [
      _c(
        "svg",
        {
          staticClass: "material-design-icon__svg",
          attrs: {
            fill: _vm.fillColor,
            width: _vm.size,
            height: _vm.size,
            viewBox: "0 0 24 24",
          },
        },
        [
          _c(
            "path",
            {
              attrs: {
                d: "M12,4A4,4 0 0,1 16,8C16,9.95 14.6,11.58 12.75,11.93L8.07,7.25C8.42,5.4 10.05,4 12,4M12.28,14L18.28,20L20,21.72L18.73,23L15.73,20H4V18C4,16.16 6.5,14.61 9.87,14.14L2.78,7.05L4.05,5.78L12.28,14M20,18V19.18L15.14,14.32C18,14.93 20,16.35 20,18Z",
              },
            },
            [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Plus.vue?vue&type=template&id=18bbb6c6":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Plus.vue?vue&type=template&id=18bbb6c6 ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "span",
    _vm._b(
      {
        staticClass: "material-design-icon plus-icon",
        attrs: {
          "aria-hidden": !_vm.title,
          "aria-label": _vm.title,
          role: "img",
        },
        on: {
          click: function ($event) {
            return _vm.$emit("click", $event)
          },
        },
      },
      "span",
      _vm.$attrs,
      false
    ),
    [
      _c(
        "svg",
        {
          staticClass: "material-design-icon__svg",
          attrs: {
            fill: _vm.fillColor,
            width: _vm.size,
            height: _vm.size,
            viewBox: "0 0 24 24",
          },
        },
        [
          _c(
            "path",
            { attrs: { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" } },
            [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=template&id=223b63f0":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=template&id=223b63f0 ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "span",
    _vm._b(
      {
        staticClass: "material-design-icon shield-account-icon",
        attrs: {
          "aria-hidden": !_vm.title,
          "aria-label": _vm.title,
          role: "img",
        },
        on: {
          click: function ($event) {
            return _vm.$emit("click", $event)
          },
        },
      },
      "span",
      _vm.$attrs,
      false
    ),
    [
      _c(
        "svg",
        {
          staticClass: "material-design-icon__svg",
          attrs: {
            fill: _vm.fillColor,
            width: _vm.size,
            height: _vm.size,
            viewBox: "0 0 24 24",
          },
        },
        [
          _c(
            "path",
            {
              attrs: {
                d: "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z",
              },
            },
            [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-localstorage/dist/vue-local-storage.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-localstorage/dist/vue-local-storage.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/**
 * vue-local-storage v0.6.0
 * (c) 2017 Alexander Avakov
 * @license MIT
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

var VueLocalStorage = function VueLocalStorage () {
  this._properties = {};
  this._namespace = '';
  this._isSupported = true;
};

var prototypeAccessors = { namespace: {} };

/**
 * Namespace getter.
 *
 * @returns {string}
 */
prototypeAccessors.namespace.get = function () {
  return this._namespace
};

/**
 * Namespace setter.
 *
 * @param {string} value
 */
prototypeAccessors.namespace.set = function (value) {
  this._namespace = value ? (value + ".") : '';
};

/**
 * Concatenates localStorage key with namespace prefix.
 *
 * @param {string} lsKey
 * @returns {string}
 * @private
 */
VueLocalStorage.prototype._getLsKey = function _getLsKey (lsKey) {
  return ("" + (this._namespace) + lsKey)
};

/**
 * Set a value to localStorage giving respect to the namespace.
 *
 * @param {string} lsKey
 * @param {*} rawValue
 * @param {*} type
 * @private
 */
VueLocalStorage.prototype._lsSet = function _lsSet (lsKey, rawValue, type) {
  var key = this._getLsKey(lsKey);
  var value = type && [Array, Object].includes(type)
    ? JSON.stringify(rawValue)
    : rawValue;

  window.localStorage.setItem(key, value);
};

/**
 * Get value from localStorage giving respect to the namespace.
 *
 * @param {string} lsKey
 * @returns {any}
 * @private
 */
VueLocalStorage.prototype._lsGet = function _lsGet (lsKey) {
  var key = this._getLsKey(lsKey);

  return window.localStorage[key]
};

/**
 * Get value from localStorage
 *
 * @param {String} lsKey
 * @param {*} defaultValue
 * @param {*} defaultType
 * @returns {*}
 */
VueLocalStorage.prototype.get = function get (lsKey, defaultValue, defaultType) {
    var this$1 = this;
    if ( defaultValue === void 0 ) defaultValue = null;
    if ( defaultType === void 0 ) defaultType = String;

  if (!this._isSupported) {
    return null
  }

  if (this._lsGet(lsKey)) {
    var type = defaultType;

    for (var key in this$1._properties) {
      if (key === lsKey) {
        type = this$1._properties[key].type;
        break
      }
    }

    return this._process(type, this._lsGet(lsKey))
  }

  return defaultValue !== null ? defaultValue : null
};

/**
 * Set localStorage value
 *
 * @param {String} lsKey
 * @param {*} value
 * @returns {*}
 */
VueLocalStorage.prototype.set = function set (lsKey, value) {
    var this$1 = this;

  if (!this._isSupported) {
    return null
  }

  for (var key in this$1._properties) {
    var type = this$1._properties[key].type;

    if ((key === lsKey)) {
      this$1._lsSet(lsKey, value, type);

      return value
    }
  }

  this._lsSet(lsKey, value);

  return value
};

/**
 * Remove value from localStorage
 *
 * @param {String} lsKey
 */
VueLocalStorage.prototype.remove = function remove (lsKey) {
  if (!this._isSupported) {
    return null
  }

  return window.localStorage.removeItem(lsKey)
};

/**
 * Add new property to localStorage
 *
 * @param {String} key
 * @param {function} type
 * @param {*} defaultValue
 */
VueLocalStorage.prototype.addProperty = function addProperty (key, type, defaultValue) {
    if ( defaultValue === void 0 ) defaultValue = undefined;

  type = type || String;

  this._properties[key] = { type: type };

  if (!this._lsGet(key) && defaultValue !== null) {
    this._lsSet(key, defaultValue, type);
  }
};

/**
 * Process the value before return it from localStorage
 *
 * @param {String} type
 * @param {*} value
 * @returns {*}
 * @private
 */
VueLocalStorage.prototype._process = function _process (type, value) {
  switch (type) {
    case Boolean:
      return value === 'true'
    case Number:
      return parseFloat(value)
    case Array:
      try {
        var array = JSON.parse(value);

        return Array.isArray(array) ? array : []
      } catch (e) {
        return []
      }
    case Object:
      try {
        return JSON.parse(value)
      } catch (e) {
        return {}
      }
    default:
      return value
  }
};

Object.defineProperties( VueLocalStorage.prototype, prototypeAccessors );

var vueLocalStorage = new VueLocalStorage();

var index = {
  /**
   * Install vue-local-storage plugin
   *
   * @param {Vue} Vue
   * @param {Object} options
   */
  install: function (Vue, options) {
    if ( options === void 0 ) options = {};

    if (typeof process !== 'undefined' &&
      (
        process.server ||
        process.SERVER_BUILD ||
        (process.env && process.env.VUE_ENV === 'server')
      )
    ) {
      return
    }

    var isSupported = true;

    try {
      var test = '__vue-localstorage-test__';

      window.localStorage.setItem(test, test);
      window.localStorage.removeItem(test);
    } catch (e) {
      isSupported = false;
      vueLocalStorage._isSupported = false;

      console.error('Local storage is not supported');
    }

    var name = options.name || 'localStorage';
    var bind = options.bind;

    if (options.namespace) {
      vueLocalStorage.namespace = options.namespace;
    }

    Vue.mixin({
      beforeCreate: function beforeCreate () {
        var this$1 = this;

        if (!isSupported) {
          return
        }

        if (this.$options[name]) {
          Object.keys(this.$options[name]).forEach(function (key) {
            var config = this$1.$options[name][key];
            var ref = [config.type, config.default];
            var type = ref[0];
            var defaultValue = ref[1];

            vueLocalStorage.addProperty(key, type, defaultValue);

            var existingProp = Object.getOwnPropertyDescriptor(vueLocalStorage, key);

            if (!existingProp) {
              var prop = {
                get: function () { return Vue.localStorage.get(key, defaultValue); },
                set: function (val) { return Vue.localStorage.set(key, val); },
                configurable: true
              };

              Object.defineProperty(vueLocalStorage, key, prop);
              Vue.util.defineReactive(vueLocalStorage, key, defaultValue);
            } else if (!Vue.config.silent) {
              console.log((key + ": is already defined and will be reused"));
            }

            if ((bind || config.bind) && config.bind !== false) {
              this$1.$options.computed = this$1.$options.computed || {};

              if (!this$1.$options.computed[key]) {
                this$1.$options.computed[key] = {
                  get: function () { return Vue.localStorage[key]; },
                  set: function (val) { Vue.localStorage[key] = val; }
                };
              }
            }
          });
        }
      }
    });

    Vue[name] = vueLocalStorage;
    Vue.prototype[("$" + name)] = vueLocalStorage;
  }
};

return index;

})));


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

/***/ "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzIyMiI+PHBhdGggZD0iTTE1LjQgMTYuNkwxMC44IDEybDQuNi00LjZMMTQgNmwtNiA2IDYgNiAxLjQtMS40eiIvPjwvc3ZnPg==":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzIyMiI+PHBhdGggZD0iTTE1LjQgMTYuNkwxMC44IDEybDQuNi00LjZMMTQgNmwtNiA2IDYgNiAxLjQtMS40eiIvPjwvc3ZnPg== ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzIyMiI+PHBhdGggZD0iTTE1LjQgMTYuNkwxMC44IDEybDQuNi00LjZMMTQgNmwtNiA2IDYgNiAxLjQtMS40eiIvPjwvc3ZnPg==";

/***/ }),

/***/ "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzIyMiI+PHBhdGggZD0iTTE4LjQgNy40TDE3IDZsLTYgNiA2IDYgMS40LTEuNC00LjYtNC42IDQuNi00LjZtLTYgMEwxMSA2bC02IDYgNiA2IDEuNC0xLjRMNy44IDEybDQuNi00LjZ6Ii8+PC9zdmc+":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzIyMiI+PHBhdGggZD0iTTE4LjQgNy40TDE3IDZsLTYgNiA2IDYgMS40LTEuNC00LjYtNC42IDQuNi00LjZtLTYgMEwxMSA2bC02IDYgNiA2IDEuNC0xLjRMNy44IDEybDQuNi00LjZ6Ii8+PC9zdmc+ ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzIyMiI+PHBhdGggZD0iTTE4LjQgNy40TDE3IDZsLTYgNiA2IDYgMS40LTEuNC00LjYtNC42IDQuNi00LjZtLTYgMEwxMSA2bC02IDYgNiA2IDEuNC0xLjRMNy44IDEybDQuNi00LjZ6Ii8+PC9zdmc+";

/***/ }),

/***/ "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzIyMiI+PHBhdGggZD0iTTUuNiA3LjRMNyA2bDYgNi02IDYtMS40LTEuNCA0LjYtNC42LTQuNi00LjZtNiAwTDEzIDZsNiA2LTYgNi0xLjQtMS40IDQuNi00LjYtNC42LTQuNnoiLz48L3N2Zz4=":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzIyMiI+PHBhdGggZD0iTTUuNiA3LjRMNyA2bDYgNi02IDYtMS40LTEuNCA0LjYtNC42LTQuNi00LjZtNiAwTDEzIDZsNiA2LTYgNi0xLjQtMS40IDQuNi00LjYtNC42LTQuNnoiLz48L3N2Zz4= ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzIyMiI+PHBhdGggZD0iTTUuNiA3LjRMNyA2bDYgNi02IDYtMS40LTEuNCA0LjYtNC42LTQuNi00LjZtNiAwTDEzIDZsNiA2LTYgNi0xLjQtMS40IDQuNi00LjYtNC42LTQuNnoiLz48L3N2Zz4=";

/***/ }),

/***/ "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzIyMiI+PHBhdGggZD0iTTguNiAxNi42bDQuNi00LjYtNC42LTQuNkwxMCA2bDYgNi02IDYtMS40LTEuNHoiLz48L3N2Zz4=":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzIyMiI+PHBhdGggZD0iTTguNiAxNi42bDQuNi00LjYtNC42LTQuNkwxMCA2bDYgNi02IDYtMS40LTEuNHoiLz48L3N2Zz4= ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzIyMiI+PHBhdGggZD0iTTguNiAxNi42bDQuNi00LjYtNC42LTQuNkwxMCA2bDYgNi02IDYtMS40LTEuNHoiLz48L3N2Zz4=";

/***/ }),

/***/ "./apps/settings/img/users.svg?raw":
/*!*****************************************!*\
  !*** ./apps/settings/img/users.svg?raw ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M10 1C8.25 1 7 2.43 7 3.8c0 1.4.1 2.4.8 3.5.2.29.5.35.7.6.135.5.24 1 .1 1.5-.28.1-.525.22-.8.33-.085-.15-.23-.2-.47-.4C6.6 8.89 5.77 8.58 5 8.29c-.1-.37-.1-.65 0-1 .156-.166.37-.27.5-.43.46-.6.5-1.654.5-2.37 0-1.06-.954-1.9-2-1.9-1.17 0-2 1-2 1.9 0 .93.034 1.64.5 2.37.13.2.367.26.5.43.1.33.1.654 0 1-.85.3-1.6.64-2.34 1.04-.57.4-.52.205-.66 1.53-.11 1.06 2.335 1.13 4 1.13h.17c-.054.274-.1.63-.17 1.3-.16 1.59 3.5 1.7 6 1.7s6.16-.1 6-1.7c-.215-2-.23-1.71-1-2.3-1.1-.654-2.45-1.17-3.6-1.6-.15-.56-.04-.97.1-1.5.235-.25.5-.36.7-.6.7-.885.8-2.425.8-3.5 0-1.6-1.43-2.8-3-2.8z\"/></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/check.svg?raw":
/*!*************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/check.svg?raw ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-check\" viewBox=\"0 0 24 24\"><path d=\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/pencil.svg?raw":
/*!**************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/pencil.svg?raw ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-pencil\" viewBox=\"0 0 24 24\"><path d=\"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z\" /></svg>";

/***/ })

}]);
//# sourceMappingURL=settings-users-settings-users.js.map?v=c08438b227f9dc772c5e