/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../@nextcloud/nextcloud-vue/dist/Components/NcCheckboxRadioSwitch.js":
/*!****************************************************************************!*\
  !*** ../@nextcloud/nextcloud-vue/dist/Components/NcCheckboxRadioSwitch.js ***!
  \****************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(self, function () {
  return (
    /******/
    function () {
      // webpackBootstrap

      /******/
      var __webpack_modules__ = {
        /***/
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=script&lang=js&":
        /*!*****************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=script&lang=js& ***!
          \*****************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcCheckboxRadioSwitchNcCheckboxRadioSwitchVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_2155__) {
          "use strict";

          __nested_webpack_require_2155__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_2155__.d(__webpack_exports__, {
            /* harmony export */
            "TYPE_CHECKBOX": function TYPE_CHECKBOX() {
              return (
                /* binding */
                _TYPE_CHECKBOX
              );
            },

            /* harmony export */
            "TYPE_RADIO": function TYPE_RADIO() {
              return (
                /* binding */
                _TYPE_RADIO
              );
            },

            /* harmony export */
            "TYPE_SWITCH": function TYPE_SWITCH() {
              return (
                /* binding */
                _TYPE_SWITCH
              );
            }
            /* harmony export */

          });
          /* harmony import */


          var _NcLoadingIcon_index_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_2155__(
          /*! ../NcLoadingIcon/index.js */
          "./src/components/NcLoadingIcon/index.js");
          /* harmony import */


          var _utils_GenRandomId_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_2155__(
          /*! ../../utils/GenRandomId.js */
          "./src/utils/GenRandomId.js");
          /* harmony import */


          var _mixins_l10n_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_2155__(
          /*! ../../mixins/l10n.js */
          "./src/mixins/l10n.js");
          /* harmony import */


          var vue_material_design_icons_CheckboxBlankOutline_vue__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_2155__(
          /*! vue-material-design-icons/CheckboxBlankOutline.vue */
          "vue-material-design-icons/CheckboxBlankOutline.vue");
          /* harmony import */


          var vue_material_design_icons_CheckboxBlankOutline_vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_2155__.n(vue_material_design_icons_CheckboxBlankOutline_vue__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var vue_material_design_icons_MinusBox_vue__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_2155__(
          /*! vue-material-design-icons/MinusBox.vue */
          "vue-material-design-icons/MinusBox.vue");
          /* harmony import */


          var vue_material_design_icons_MinusBox_vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_2155__.n(vue_material_design_icons_MinusBox_vue__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var vue_material_design_icons_CheckboxMarked_vue__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_2155__(
          /*! vue-material-design-icons/CheckboxMarked.vue */
          "vue-material-design-icons/CheckboxMarked.vue");
          /* harmony import */


          var vue_material_design_icons_CheckboxMarked_vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_2155__.n(vue_material_design_icons_CheckboxMarked_vue__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var vue_material_design_icons_RadioboxMarked_vue__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_2155__(
          /*! vue-material-design-icons/RadioboxMarked.vue */
          "vue-material-design-icons/RadioboxMarked.vue");
          /* harmony import */


          var vue_material_design_icons_RadioboxMarked_vue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__nested_webpack_require_2155__.n(vue_material_design_icons_RadioboxMarked_vue__WEBPACK_IMPORTED_MODULE_6__);
          /* harmony import */


          var vue_material_design_icons_RadioboxBlank_vue__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_2155__(
          /*! vue-material-design-icons/RadioboxBlank.vue */
          "vue-material-design-icons/RadioboxBlank.vue");
          /* harmony import */


          var vue_material_design_icons_RadioboxBlank_vue__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__nested_webpack_require_2155__.n(vue_material_design_icons_RadioboxBlank_vue__WEBPACK_IMPORTED_MODULE_7__);
          /* harmony import */


          var vue_material_design_icons_ToggleSwitchOff_vue__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_2155__(
          /*! vue-material-design-icons/ToggleSwitchOff.vue */
          "vue-material-design-icons/ToggleSwitchOff.vue");
          /* harmony import */


          var vue_material_design_icons_ToggleSwitchOff_vue__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__nested_webpack_require_2155__.n(vue_material_design_icons_ToggleSwitchOff_vue__WEBPACK_IMPORTED_MODULE_8__);
          /* harmony import */


          var vue_material_design_icons_ToggleSwitch_vue__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_2155__(
          /*! vue-material-design-icons/ToggleSwitch.vue */
          "vue-material-design-icons/ToggleSwitch.vue");
          /* harmony import */


          var vue_material_design_icons_ToggleSwitch_vue__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__nested_webpack_require_2155__.n(vue_material_design_icons_ToggleSwitch_vue__WEBPACK_IMPORTED_MODULE_9__);

          function _toConsumableArray(arr) {
            return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
          }

          function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }

          function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
          }

          function _iterableToArray(iter) {
            if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
          }

          function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
          }

          function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;

            for (var i = 0, arr2 = new Array(len); i < len; i++) {
              arr2[i] = arr[i];
            }

            return arr2;
          }

          var _TYPE_CHECKBOX = 'checkbox';
          var _TYPE_RADIO = 'radio';
          var _TYPE_SWITCH = 'switch';
          /* harmony default export */

          __webpack_exports__["default"] = {
            name: 'NcCheckboxRadioSwitch',
            components: {
              NcLoadingIcon: _NcLoadingIcon_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]
            },
            mixins: [_mixins_l10n_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
            props: {
              /**
               * Unique id attribute of the input
               */
              id: {
                type: String,
                default: function _default() {
                  return 'checkbox-radio-switch-' + (0, _utils_GenRandomId_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
                },
                validator: function validator(id) {
                  return id.trim() !== '';
                }
              },

              /**
               * Input name. Required for radio, optional for checkbox
               */
              name: {
                type: String,
                default: null
              },

              /**
               * Type of the input. checkbox, radio or switch
               */
              type: {
                type: String,
                default: 'checkbox',
                validator: function validator(type) {
                  return type === _TYPE_CHECKBOX || type === _TYPE_RADIO || type === _TYPE_SWITCH;
                }
              },

              /**
               * Toggle the alternative button style
               */
              buttonVariant: {
                type: Boolean,
                default: false
              },

              /**
               * Are the elements are all direct siblings?
               * If so they will be grouped horizontally or vertically
               * Possible values are `no`, `horizontal`, `vertical`.
               */
              buttonVariantGrouped: {
                type: String,
                default: 'no',
                validator: function validator(v) {
                  return ['no', 'vertical', 'horizontal'].includes(v);
                }
              },

              /**
               * Checked state. To be used with `:value.sync`
               */
              checked: {
                type: [Boolean, Array, String],
                default: false
              },

              /**
               * Value to be synced on check
               */
              value: {
                type: String,
                default: null
              },

              /**
               * Disabled state
               */
              disabled: {
                type: Boolean,
                default: false
              },

              /**
               * Indeterminate state
               */
              indeterminate: {
                type: Boolean,
                default: false
              },

              /**
               * Loading state
               */
              loading: {
                type: Boolean,
                default: false
              },

              /**
               * Wrapping element tag
               */
              wrapperElement: {
                type: String,
                default: 'span'
              }
            },
            emits: ['update:checked'],
            computed: {
              /**
               * Icon size
               *
               @return {number}
               */
              size: function size() {
                return this.type === _TYPE_SWITCH ? 36 : 24;
              },

              /**
               * Css local variables for this component
               *
               * @return {object}
               */
              cssVars: function cssVars() {
                return {
                  '--icon-size': this.size + 'px'
                };
              },

              /**
               * Return the input type.
               * Switch is not an official type
               *
               * @return {string}
               */
              inputType: function inputType() {
                if (this.type === _TYPE_RADIO) {
                  return _TYPE_RADIO;
                }

                return _TYPE_CHECKBOX;
              },

              /**
               * Check if that entry is checked
               * If value is defined, we use that as the checked value
               * If not, we expect true/false in this.checked
               *
               * @return {boolean}
               */
              isChecked: function isChecked() {
                if (this.value !== null) {
                  if (Array.isArray(this.checked)) {
                    return _toConsumableArray(this.checked).indexOf(this.value) > -1;
                  }

                  return this.checked === this.value;
                }

                return this.checked === true;
              },

              /**
               * Returns the proper Material icon depending on the select case
               *
               * @return {Component}
               */
              checkboxRadioIconElement: function checkboxRadioIconElement() {
                if (this.type === _TYPE_RADIO) {
                  if (this.isChecked) {
                    return vue_material_design_icons_RadioboxMarked_vue__WEBPACK_IMPORTED_MODULE_6___default();
                  }

                  return vue_material_design_icons_RadioboxBlank_vue__WEBPACK_IMPORTED_MODULE_7___default();
                } // Switch


                if (this.type === _TYPE_SWITCH) {
                  if (this.isChecked) {
                    return vue_material_design_icons_ToggleSwitch_vue__WEBPACK_IMPORTED_MODULE_9___default();
                  }

                  return vue_material_design_icons_ToggleSwitchOff_vue__WEBPACK_IMPORTED_MODULE_8___default();
                } // Checkbox


                if (this.indeterminate) {
                  return vue_material_design_icons_MinusBox_vue__WEBPACK_IMPORTED_MODULE_4___default();
                }

                if (this.isChecked) {
                  return vue_material_design_icons_CheckboxMarked_vue__WEBPACK_IMPORTED_MODULE_5___default();
                }

                return vue_material_design_icons_CheckboxBlankOutline_vue__WEBPACK_IMPORTED_MODULE_3___default();
              }
            },
            mounted: function mounted() {
              if (this.name && this.type === _TYPE_CHECKBOX) {
                if (!Array.isArray(this.checked)) {
                  throw new Error('When using groups of checkboxes, the updated value will be an array.');
                }
              } // https://material.io/components/checkboxes#usage


              if (this.name && this.type === _TYPE_SWITCH) {
                throw new Error('Switches are not made to be used for data sets. Please use checkboxes instead.');
              } // https://material.io/components/checkboxes#usage


              if (typeof this.checked !== 'boolean' && this.type === _TYPE_SWITCH) {
                throw new Error('Switches can only be used with boolean as checked prop.');
              }
            },
            methods: {
              onToggle: function onToggle() {
                if (this.disabled) {
                  return;
                } // If this is a radio, there can only be one value


                if (this.type === _TYPE_RADIO) {
                  this.$emit('update:checked', this.value);
                  return;
                } // If this is a radio, there can only be one value


                if (this.type === _TYPE_SWITCH) {
                  this.$emit('update:checked', !this.isChecked);
                  return;
                } // If the initial value was a boolean, let's keep it that way


                if (typeof this.checked === 'boolean') {
                  this.$emit('update:checked', !this.isChecked);
                  return;
                } // Dispatch the checked values as an array if multiple, or single value otherwise


                var values = this.getInputsSet().filter(function (input) {
                  return input.checked;
                }).map(function (input) {
                  return input.value;
                });
                this.$emit('update:checked', values);
              },

              /**
               * Get the input set based on this name
               *
               * @return {Node[]}
               */
              getInputsSet: function getInputsSet() {
                return _toConsumableArray(document.getElementsByName(this.name));
              }
            }
          };
          /***/
        },

        /***/
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=script&lang=js&":
        /*!*************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=script&lang=js& ***!
          \*************************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcLoadingIconNcLoadingIconVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_18404__) {
          "use strict";

          __nested_webpack_require_18404__.r(__webpack_exports__);
          /* harmony default export */


          __webpack_exports__["default"] = {
            name: 'NcLoadingIcon',
            props: {
              /**
               * Specify the size of the loading icon.
               */
              size: {
                type: Number,
                default: 20
              },

              /**
               * The appearance of the loading icon.
               * 'auto' adjusts to the Nextcloud color scheme,
               * 'light' and 'dark' are static.
               */
              appearance: {
                type: String,
                validator: function validator(value) {
                  return ['auto', 'light', 'dark'].includes(value);
                },
                default: 'auto'
              },

              /**
               * Specify what is loading.
               */
              title: {
                type: String,
                default: ''
              }
            },
            computed: {
              colors: function colors() {
                var colors = ['#777', '#CCC'];

                if (this.appearance === 'light') {
                  return colors;
                } else if (this.appearance === 'dark') {
                  return colors.reverse();
                }

                return ['var(--color-loading-light)', 'var(--color-loading-dark)'];
              }
            }
          };
          /***/
        },

        /***/
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=template&id=99d12602&scoped=true&":
        /*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=template&id=99d12602&scoped=true& ***!
          \****************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibLoadersTemplateLoaderJsRuleSet1Rules2Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcCheckboxRadioSwitchNcCheckboxRadioSwitchVueVueTypeTemplateId99d12602ScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_21489__) {
          "use strict";

          __nested_webpack_require_21489__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_21489__.d(__webpack_exports__, {
            /* harmony export */
            "render": function render() {
              return (
                /* binding */
                _render
              );
            },

            /* harmony export */
            "staticRenderFns": function staticRenderFns() {
              return (
                /* binding */
                _staticRenderFns
              );
            }
            /* harmony export */

          });

          function _defineProperty(obj, key, value) {
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              obj[key] = value;
            }

            return obj;
          }

          var _render = function render() {
            var _class;

            var _vm = this,
                _c = _vm._self._c;

            return _c(_vm.wrapperElement, {
              tag: "element",
              staticClass: "checkbox-radio-switch",
              class: (_class = {}, _defineProperty(_class, "checkbox-radio-switch-" + _vm.type, _vm.type), _defineProperty(_class, "checkbox-radio-switch--checked", _vm.isChecked), _defineProperty(_class, "checkbox-radio-switch--disabled", _vm.disabled), _defineProperty(_class, "checkbox-radio-switch--indeterminate", _vm.indeterminate), _defineProperty(_class, "checkbox-radio-switch--button-variant", _vm.buttonVariant), _defineProperty(_class, "checkbox-radio-switch--button-variant-v-grouped", _vm.buttonVariant && _vm.buttonVariantGrouped === "vertical"), _defineProperty(_class, "checkbox-radio-switch--button-variant-h-grouped", _vm.buttonVariant && _vm.buttonVariantGrouped === "horizontal"), _class),
              style: _vm.cssVars
            }, [_c("label", {
              staticClass: "checkbox-radio-switch__label",
              attrs: {
                for: _vm.id
              }
            }, [_c("input", {
              staticClass: "checkbox-radio-switch__input",
              attrs: {
                id: _vm.id,
                disabled: _vm.disabled,
                indeterminate: _vm.indeterminate,
                name: _vm.name,
                type: _vm.inputType
              },
              domProps: {
                checked: _vm.isChecked,
                value: _vm.value
              },
              on: {
                change: _vm.onToggle
              }
            }), _vm._v(" "), _vm.loading ? _c("NcLoadingIcon", {
              staticClass: "checkbox-radio-switch__icon"
            }) : !_vm.buttonVariant ? _c(_vm.checkboxRadioIconElement, {
              tag: "icon",
              staticClass: "checkbox-radio-switch__icon",
              attrs: {
                size: _vm.size
              }
            }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)]);
          };

          var _staticRenderFns = [];
          _render._withStripped = true;
          /***/
        },

        /***/
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=template&id=fe92815e&scoped=true&":
        /*!************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=template&id=fe92815e&scoped=true& ***!
          \************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibLoadersTemplateLoaderJsRuleSet1Rules2Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcLoadingIconNcLoadingIconVueVueTypeTemplateIdFe92815eScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_26167__) {
          "use strict";

          __nested_webpack_require_26167__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_26167__.d(__webpack_exports__, {
            /* harmony export */
            "render": function render() {
              return (
                /* binding */
                _render2
              );
            },

            /* harmony export */
            "staticRenderFns": function staticRenderFns() {
              return (
                /* binding */
                _staticRenderFns2
              );
            }
            /* harmony export */

          });

          var _render2 = function render() {
            var _vm = this,
                _c = _vm._self._c;

            return _c("span", {
              staticClass: "material-design-icon loading-icon",
              attrs: {
                "aria-label": _vm.title,
                role: "img"
              }
            }, [_c("svg", {
              attrs: {
                width: _vm.size,
                height: _vm.size,
                viewBox: "0 0 24 24"
              }
            }, [_c("path", {
              attrs: {
                fill: _vm.colors[0],
                d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
              }
            }), _vm._v(" "), _c("path", {
              attrs: {
                fill: _vm.colors[1],
                d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
              }
            }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
          };

          var _staticRenderFns2 = [];
          _render2._withStripped = true;
          /***/
        },

        /***/
        "./src/components/NcLoadingIcon/index.js":
        /*!***********************************************!*\
          !*** ./src/components/NcLoadingIcon/index.js ***!
          \***********************************************/

        /***/
        function srcComponentsNcLoadingIconIndexJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_28209__) {
          "use strict";

          __nested_webpack_require_28209__.r(__webpack_exports__);
          /* harmony import */


          var _NcLoadingIcon_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_28209__(
          /*! ./NcLoadingIcon.vue */
          "./src/components/NcLoadingIcon/NcLoadingIcon.vue");
          /**
           * @copyright Copyright (c) 2022 Raimund Schlüßler <raimund.schluessler@mailbox.org>
           *
           * @author Raimund Schlüßler <raimund.schluessler@mailbox.org>
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

          /* harmony default export */


          __webpack_exports__["default"] = _NcLoadingIcon_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
          /***/
        },

        /***/
        "./src/l10n.js":
        /*!*********************!*\
          !*** ./src/l10n.js ***!
          \*********************/

        /***/
        function srcL10nJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_30007__) {
          "use strict";

          __nested_webpack_require_30007__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_30007__.d(__webpack_exports__, {
            /* harmony export */
            "n": function n() {
              return (
                /* binding */
                _n
              );
            },

            /* harmony export */
            "t": function t() {
              return (
                /* binding */
                _t
              );
            }
            /* harmony export */

          });
          /* harmony import */


          var _nextcloud_l10n_dist_gettext_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_30007__(
          /*! @nextcloud/l10n/dist/gettext.js */
          "@nextcloud/l10n/dist/gettext.js");
          /* harmony import */


          var _nextcloud_l10n_dist_gettext_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_30007__.n(_nextcloud_l10n_dist_gettext_js__WEBPACK_IMPORTED_MODULE_0__);

          var gtBuilder = (0, _nextcloud_l10n_dist_gettext_js__WEBPACK_IMPORTED_MODULE_0__.getGettextBuilder)().detectLocale(); // Decompress Translations to gettext format and add to gtBuilder

          [{
            "locale": "ar",
            "translations": {
              "{tag} (invisible)": "{tag} (غير مرئي)",
              "{tag} (restricted)": "{tag} (مقيد)",
              "Actions": "الإجراءات",
              "Activities": "النشاطات",
              "Animals & Nature": "الحيوانات والطبيعة",
              "Avatar of {displayName}": "صورة {displayName} الرمزية",
              "Avatar of {displayName}, {status}": "صورة {displayName} الرمزية، {status}",
              "Cancel changes": "إلغاء التغييرات",
              "Choose": "إختيار",
              "Close": "أغلق",
              "Close navigation": "إغلاق المتصفح",
              "Confirm changes": "تأكيد التغييرات",
              "Custom": "مخصص",
              "Edit item": "تعديل عنصر",
              "External documentation for {title}": "الوثائق الخارجية لـ{title}",
              "Flags": "الأعلام",
              "Food & Drink": "الطعام والشراب",
              "Frequently used": "كثيرا ما تستخدم",
              "Global": "عالمي",
              "Go back to the list": "العودة إلى القائمة",
              "Message limit of {count} characters reached": "تم الوصول إلى الحد الأقصى لعدد الأحرف في الرسالة: {count} حرف",
              "Next": "التالي",
              "No emoji found": "لم يتم العثور على أي رمز تعبيري",
              "No results": "ليس هناك أية نتيجة",
              "Objects": "الأشياء",
              "Open navigation": "فتح المتصفح",
              "Pause slideshow": "إيقاف العرض مؤقتًا",
              "People & Body": "الناس والجسم",
              "Pick an emoji": "اختر رمزًا تعبيريًا",
              "Please select a time zone:": "الرجاء تحديد المنطقة الزمنية:",
              "Previous": "السابق",
              "Search": "بحث",
              "Search results": "نتائج البحث",
              "Select a tag": "اختر علامة",
              "Settings": "الإعدادات",
              "Settings navigation": "إعدادات المتصفح",
              "Smileys & Emotion": "الوجوه و الرموز التعبيرية",
              "Start slideshow": "بدء العرض",
              "Submit": "إرسال",
              "Symbols": "الرموز",
              "Travel & Places": "السفر والأماكن",
              "Type to search time zone": "اكتب للبحث عن منطقة زمنية",
              "Unable to search the group": "تعذر البحث في المجموعة",
              "Undo changes": "التراجع عن التغييرات",
              "Write message, @ to mention someone, : for emoji autocompletion …": "اكتب رسالة، @ للإشارة إلى شخص ما، : للإكمال التلقائي للرموز التعبيرية ..."
            }
          }, {
            "locale": "br",
            "translations": {
              "{tag} (invisible)": "{tag} (diwelus)",
              "{tag} (restricted)": "{tag} (bevennet)",
              "Actions": "Oberioù",
              "Activities": "Oberiantizoù",
              "Animals & Nature": "Loened & Natur",
              "Choose": "Dibab",
              "Close": "Serriñ",
              "Custom": "Personelañ",
              "Flags": "Bannieloù",
              "Food & Drink": "Boued & Evajoù",
              "Frequently used": "Implijet alies",
              "Next": "Da heul",
              "No emoji found": "Emoji ebet kavet",
              "No results": "Disoc'h ebet",
              "Objects": "Traoù",
              "Pause slideshow": "Arsav an diaporama",
              "People & Body": "Tud & Korf",
              "Pick an emoji": "Choaz un emoji",
              "Previous": "A-raok",
              "Search": "Klask",
              "Search results": "Disoc'hoù an enklask",
              "Select a tag": "Choaz ur c'hlav",
              "Settings": "Arventennoù",
              "Smileys & Emotion": "Smileyioù & Fromoù",
              "Start slideshow": "Kregiñ an diaporama",
              "Symbols": "Arouezioù",
              "Travel & Places": "Beaj & Lec'hioù",
              "Unable to search the group": "Dibosupl eo klask ar strollad"
            }
          }, {
            "locale": "ca",
            "translations": {
              "{tag} (invisible)": "{tag} (invisible)",
              "{tag} (restricted)": "{tag} (restringit)",
              "Actions": "Accions",
              "Activities": "Activitats",
              "Animals & Nature": "Animals i natura",
              "Avatar of {displayName}": "Avatar de {displayName}",
              "Avatar of {displayName}, {status}": "Avatar de {displayName}, {status}",
              "Cancel changes": "Cancel·la els canvis",
              "Choose": "Tria",
              "Close": "Tanca",
              "Close navigation": "Tancar la navegació",
              "Confirm changes": "Confirmeu els canvis",
              "Custom": "Personalitzat",
              "Edit item": "Edita l'element",
              "External documentation for {title}": "Documentació externa per a {title}",
              "Flags": "Marques",
              "Food & Drink": "Menjar i begudes",
              "Frequently used": "Utilitzats recentment",
              "Global": "Global",
              "Go back to the list": "Torna a la llista",
              "Message limit of {count} characters reached": "S'ha arribat al límit de {count} caràcters per missatge",
              "Next": "Següent",
              "No emoji found": "No s'ha trobat cap emoji",
              "No results": "Sense resultats",
              "Objects": "Objectes",
              "Open navigation": "Obrir la navegació",
              "Pause slideshow": "Atura la presentació",
              "People & Body": "Persones i cos",
              "Pick an emoji": "Trieu un emoji",
              "Please select a time zone:": "Seleccioneu una zona horària:",
              "Previous": "Anterior",
              "Search": "Cerca",
              "Search results": "Resultats de cerca",
              "Select a tag": "Selecciona una etiqueta",
              "Settings": "Paràmetres",
              "Settings navigation": "Navegació d'opcions",
              "Smileys & Emotion": "Cares i emocions",
              "Start slideshow": "Inicia la presentació",
              "Submit": "Envia",
              "Symbols": "Símbols",
              "Travel & Places": "Viatges i llocs",
              "Type to search time zone": "Escriviu per cercar la zona horària",
              "Unable to search the group": "No es pot cercar el grup",
              "Undo changes": "Desfer canvis",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Escriu un missatge, @ per esmentar algú, : per a la compleció automàtica d'emojis..."
            }
          }, {
            "locale": "cs_CZ",
            "translations": {
              "{tag} (invisible)": "{tag} (neviditelné)",
              "{tag} (restricted)": "{tag} (omezené)",
              "Actions": "Akce",
              "Activities": "Aktivity",
              "Animals & Nature": "Zvířata a příroda",
              "Avatar of {displayName}": "Zástupný obrázek uživatele {displayName}",
              "Avatar of {displayName}, {status}": "Zástupný obrázek uživatele {displayName}, {status}",
              "Cancel changes": "Zrušit změny",
              "Change title": "Změnit nadpis",
              "Choose": "Zvolit",
              "Clear text": "Čitelný text",
              "Close": "Zavřít",
              "Close modal": "Zavřít dialogové okno",
              "Close navigation": "Zavřít navigaci",
              "Close sidebar": "Zavřít postranní panel",
              "Confirm changes": "Potvrdit změny",
              "Custom": "Uživatelsky určené",
              "Edit item": "Upravit položku",
              "External documentation for {title}": "Externí dokumentace k {title}",
              "Favorite": "Oblíbené",
              "Flags": "Příznaky",
              "Food & Drink": "Jídlo a pití",
              "Frequently used": "Často používané",
              "Global": "Globální",
              "Go back to the list": "Jít zpět na seznam",
              "Hide password": "Skrýt heslo",
              "items": "položky",
              "Message limit of {count} characters reached": "Dosaženo limitu počtu ({count}) znaků zprávy",
              "More {dashboardItemType} …": "Další {dashboardItemType} …",
              "Next": "Následující",
              "No emoji found": "Nenalezeno žádné emoji",
              "No results": "Nic nenalezeno",
              "Objects": "Objekty",
              "Open": "Otevřít",
              "Open navigation": "Otevřít navigaci",
              "Password is secure": "Heslo je bezpečné",
              "Pause slideshow": "Pozastavit prezentaci",
              "People & Body": "Lidé a tělo",
              "Pick an emoji": "Vybrat emoji",
              "Please select a time zone:": "Vyberte časovou zónu:",
              "Previous": "Předchozí",
              "Search": "Hledat",
              "Search results": "Výsledky hledání",
              "Select a tag": "Vybrat štítek",
              "Settings": "Nastavení",
              "Settings navigation": "Pohyb po nastavení",
              "Show password": "Zobrazit heslo",
              "Smileys & Emotion": "Úsměvy a emoce",
              "Start slideshow": "Spustit prezentaci",
              "Submit": "Odeslat",
              "Symbols": "Symboly",
              "Travel & Places": "Cestování a místa",
              "Type to search time zone": "Psaním vyhledejte časovou zónu",
              "Unable to search the group": "Nedaří se hledat skupinu",
              "Undo changes": "Vzít změny zpět",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Napište zprávu – pokud chcete někoho zmínit, napište před jeho uživatelským jménem @ (zavináč); automatické doplňování emotikonů zahájíte napsáním : (dvojtečky)…"
            }
          }, {
            "locale": "da",
            "translations": {
              "{tag} (invisible)": "{tag} (usynlig)",
              "{tag} (restricted)": "{tag} (begrænset)",
              "Actions": "Handlinger",
              "Activities": "Aktiviteter",
              "Animals & Nature": "Dyr & Natur",
              "Choose": "Vælg",
              "Close": "Luk",
              "Custom": "Brugerdefineret",
              "Flags": "Flag",
              "Food & Drink": "Mad & Drikke",
              "Frequently used": "Ofte brugt",
              "Message limit of {count} characters reached": "Begrænsning på {count} tegn er nået",
              "Next": "Videre",
              "No emoji found": "Ingen emoji fundet",
              "No results": "Ingen resultater",
              "Objects": "Objekter",
              "Pause slideshow": "Suspender fremvisning",
              "People & Body": "Mennesker & Menneskekroppen",
              "Pick an emoji": "Vælg en emoji",
              "Previous": "Forrige",
              "Search": "Søg",
              "Search results": "Søgeresultater",
              "Select a tag": "Vælg et mærke",
              "Settings": "Indstillinger",
              "Settings navigation": "Naviger i indstillinger",
              "Smileys & Emotion": "Smileys & Emotion",
              "Start slideshow": "Start fremvisning",
              "Symbols": "Symboler",
              "Travel & Places": "Rejser & Rejsemål",
              "Unable to search the group": "Kan ikke søge på denne gruppe",
              "Write message, @ to mention someone …": "Skriv i meddelelse, @ for at nævne nogen  …"
            }
          }, {
            "locale": "de",
            "translations": {
              "{tag} (invisible)": "{tag} (unsichtbar)",
              "{tag} (restricted)": "{tag} (eingeschränkt)",
              "Actions": "Aktionen",
              "Activities": "Aktivitäten",
              "Animals & Nature": "Tiere & Natur",
              "Avatar of {displayName}": "Avatar von {displayName}",
              "Avatar of {displayName}, {status}": "Avatar von {displayName}, {status}",
              "Cancel changes": "Änderungen verwerfen",
              "Change title": "Titel ändern",
              "Choose": "Auswählen",
              "Close": "Schließen",
              "Close modal": "Modal schließen",
              "Close navigation": "Navigation schließen",
              "Close sidebar": "Seitenleiste schließen",
              "Confirm changes": "Änderungen bestätigen",
              "Custom": "Benutzerdefiniert",
              "Edit item": "Objekt bearbeiten",
              "External documentation for {title}": "Externe Dokumentation für {title}",
              "Favorite": "Favorit",
              "Flags": "Flaggen",
              "Food & Drink": "Essen & Trinken",
              "Frequently used": "Häufig verwendet",
              "Global": "Global",
              "Go back to the list": "Zurück zur Liste",
              "items": "Elemente",
              "Message limit of {count} characters reached": "Nachrichtenlimit von {count} Zeichen erreicht",
              "More {dashboardItemType} …": "Mehr {dashboardItemType} …",
              "Next": "Weiter",
              "No emoji found": "Kein Emoji gefunden",
              "No results": "Keine Ergebnisse",
              "Objects": "Gegenstände",
              "Open": "Öffnen",
              "Open navigation": "Navigation öffnen",
              "Pause slideshow": "Diashow pausieren",
              "People & Body": "Menschen & Körper",
              "Pick an emoji": "Ein Emoji auswählen",
              "Please select a time zone:": "Bitte wählen Sie eine Zeitzone:",
              "Previous": "Vorherige",
              "Search": "Suche",
              "Search results": "Suchergebnisse",
              "Select a tag": "Schlagwort auswählen",
              "Settings": "Einstellungen",
              "Settings navigation": "Einstellungen für die Navigation",
              "Smileys & Emotion": "Smileys & Emotionen",
              "Start slideshow": "Diashow starten",
              "Submit": "Einreichen",
              "Symbols": "Symbole",
              "Travel & Places": "Reisen & Orte",
              "Type to search time zone": "Tippen, um Zeitzone zu suchen",
              "Unable to search the group": "Die Gruppe konnte nicht durchsucht werden",
              "Undo changes": "Änderungen rückgängig machen",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Nachricht schreiben, @, um jemanden zu erwähnen, : für die automatische Vervollständigung von Emojis … "
            }
          }, {
            "locale": "de_DE",
            "translations": {
              "{tag} (invisible)": "{tag} (unsichtbar)",
              "{tag} (restricted)": "{tag} (eingeschränkt)",
              "Actions": "Aktionen",
              "Activities": "Aktivitäten",
              "Animals & Nature": "Tiere & Natur",
              "Avatar of {displayName}": "Avatar von {displayName}",
              "Avatar of {displayName}, {status}": "Avatar von {displayName}, {status}",
              "Cancel changes": "Änderungen verwerfen",
              "Change title": "Titel ändern",
              "Choose": "Auswählen",
              "Clear text": "Klartext",
              "Close": "Schließen",
              "Close modal": "Modal schließen",
              "Close navigation": "Navigation schließen",
              "Close sidebar": "Seitenleiste schließen",
              "Confirm changes": "Änderungen bestätigen",
              "Custom": "Benutzerdefiniert",
              "Edit item": "Objekt bearbeiten",
              "External documentation for {title}": "Externe Dokumentation für {title}",
              "Favorite": "Favorit",
              "Flags": "Flaggen",
              "Food & Drink": "Essen & Trinken",
              "Frequently used": "Häufig verwendet",
              "Global": "Global",
              "Go back to the list": "Zurück zur Liste",
              "Hide password": "Passwort verbergen",
              "items": "Elemente",
              "Message limit of {count} characters reached": "Nachrichtenlimit von {count} Zeichen erreicht",
              "More {dashboardItemType} …": "Mehr {dashboardItemType} …",
              "Next": "Weiter",
              "No emoji found": "Kein Emoji gefunden",
              "No results": "Keine Ergebnisse",
              "Objects": "Objekte",
              "Open": "Öffnen",
              "Open navigation": "Navigation öffnen",
              "Password is secure": "Passwort ist sicher",
              "Pause slideshow": "Diashow pausieren",
              "People & Body": "Menschen & Körper",
              "Pick an emoji": "Ein Emoji auswählen",
              "Please select a time zone:": "Bitte eine Zeitzone auswählen:",
              "Previous": "Vorherige",
              "Search": "Suche",
              "Search results": "Suchergebnisse",
              "Select a tag": "Schlagwort auswählen",
              "Settings": "Einstellungen",
              "Settings navigation": "Einstellungen für die Navigation",
              "Show password": "Passwort anzeigen",
              "Smileys & Emotion": "Smileys & Emotionen",
              "Start slideshow": "Diashow starten",
              "Submit": "Einreichen",
              "Symbols": "Symbole",
              "Travel & Places": "Reisen & Orte",
              "Type to search time zone": "Tippen, um eine Zeitzone zu suchen",
              "Unable to search the group": "Die Gruppe kann nicht durchsucht werden",
              "Undo changes": "Änderungen rückgängig machen",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Nachricht schreiben, @, um jemanden zu erwähnen, : für die automatische Vervollständigung von Emojis …"
            }
          }, {
            "locale": "el",
            "translations": {
              "{tag} (invisible)": "{tag} (αόρατο)",
              "{tag} (restricted)": "{tag} (περιορισμένο)",
              "Actions": "Ενέργειες",
              "Activities": "Δραστηριότητες",
              "Animals & Nature": "Ζώα & Φύση",
              "Avatar of {displayName}": "Άβαταρ του {displayName}",
              "Cancel changes": "Ακύρωση αλλαγών",
              "Choose": "Επιλογή",
              "Close": "Κλείσιμο",
              "Close navigation": "Κλείσιμο πλοήγησης",
              "Confirm changes": "Επιβεβαίωση αλλαγών",
              "Custom": "Προσαρμογή",
              "Edit item": "Επεξεργασία",
              "External documentation for {title}": "Εξωτερική τεκμηρίωση για {title}",
              "Flags": "Σημαίες",
              "Food & Drink": "Φαγητό & Ποτό",
              "Frequently used": "Συχνά χρησιμοποιούμενο",
              "Global": "Καθολικό",
              "Go back to the list": "Επιστροφή στην αρχική λίστα ",
              "Message limit of {count} characters reached": "Συμπληρώθηκε το όριο των {count} χαρακτήρων του μηνύματος",
              "Next": "Επόμενο",
              "No emoji found": "Δεν βρέθηκε emoji",
              "No results": "Κανένα αποτέλεσμα",
              "Objects": "Αντικείμενα",
              "Open navigation": "Άνοιγμα πλοήγησης",
              "Pause slideshow": "Παύση προβολής διαφανειών",
              "People & Body": "Άνθρωποι & Σώμα",
              "Pick an emoji": "Επιλέξτε ένα emoji",
              "Please select a time zone:": "Παρακαλούμε επιλέξτε μια ζώνη ώρας:",
              "Previous": "Προηγούμενο",
              "Search": "Αναζήτηση",
              "Search results": "Αποτελέσματα αναζήτησης",
              "Select a tag": "Επιλογή ετικέτας",
              "Settings": "Ρυθμίσεις",
              "Settings navigation": "Πλοήγηση ρυθμίσεων",
              "Smileys & Emotion": "Φατσούλες & Συναίσθημα",
              "Start slideshow": "Έναρξη προβολής διαφανειών",
              "Submit": "Υποβολή",
              "Symbols": "Σύμβολα",
              "Travel & Places": "Ταξίδια & Τοποθεσίες",
              "Type to search time zone": "Πληκτρολογήστε για αναζήτηση ζώνης ώρας",
              "Unable to search the group": "Δεν είναι δυνατή η αναζήτηση της ομάδας",
              "Undo changes": "Αναίρεση Αλλαγών",
              "Write message, @ to mention someone …": "Γράψτε ένα μήνυμα, και με το σύμβολο @, μνημονεύστε κάποιον …"
            }
          }, {
            "locale": "en_GB",
            "translations": {
              "{tag} (invisible)": "{tag} (invisible)",
              "{tag} (restricted)": "{tag} (restricted)",
              "Actions": "Actions",
              "Activities": "Activities",
              "Animals & Nature": "Animals & Nature",
              "Avatar of {displayName}": "Avatar of {displayName}",
              "Avatar of {displayName}, {status}": "Avatar of {displayName}, {status}",
              "Cancel changes": "Cancel changes",
              "Change title": "Change title",
              "Choose": "Choose",
              "Close": "Close",
              "Close modal": "Close modal",
              "Close navigation": "Close navigation",
              "Close sidebar": "Close sidebar",
              "Confirm changes": "Confirm changes",
              "Custom": "Custom",
              "Edit item": "Edit item",
              "External documentation for {title}": "External documentation for {title}",
              "Favorite": "Favourite",
              "Flags": "Flags",
              "Food & Drink": "Food & Drink",
              "Frequently used": "Frequently used",
              "Global": "Global",
              "Go back to the list": "Go back to the list",
              "items": "items",
              "Message limit of {count} characters reached": "Message limit of {count} characters reached",
              "More {dashboardItemType} …": "More {dashboardItemType} …",
              "Next": "Next",
              "No emoji found": "No emoji found",
              "No results": "No results",
              "Objects": "Objects",
              "Open": "Open",
              "Open navigation": "Open navigation",
              "Pause slideshow": "Pause slideshow",
              "People & Body": "People & Body",
              "Pick an emoji": "Pick an emoji",
              "Please select a time zone:": "Please select a time zone:",
              "Previous": "Previous",
              "Search": "Search",
              "Search results": "Search results",
              "Select a tag": "Select a tag",
              "Settings": "Settings",
              "Settings navigation": "Settings navigation",
              "Smileys & Emotion": "Smileys & Emotion",
              "Start slideshow": "Start slideshow",
              "Submit": "Submit",
              "Symbols": "Symbols",
              "Travel & Places": "Travel & Places",
              "Type to search time zone": "Type to search time zone",
              "Unable to search the group": "Unable to search the group",
              "Undo changes": "Undo changes",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Write message, @ to mention someone, : for emoji autocompletion …"
            }
          }, {
            "locale": "eo",
            "translations": {
              "{tag} (invisible)": "{tag} (kaŝita)",
              "{tag} (restricted)": "{tag} (limigita)",
              "Actions": "Agoj",
              "Activities": "Aktiveco",
              "Animals & Nature": "Bestoj & Naturo",
              "Choose": "Elektu",
              "Close": "Fermu",
              "Custom": "Propra",
              "Flags": "Flagoj",
              "Food & Drink": "Manĝaĵo & Trinkaĵo",
              "Frequently used": "Ofte uzataj",
              "Message limit of {count} characters reached": "La limo je {count} da literoj atingita",
              "Next": "Sekva",
              "No emoji found": "La emoĝio forestas",
              "No results": "La rezulto forestas",
              "Objects": "Objektoj",
              "Pause slideshow": "Payzi bildprezenton",
              "People & Body": "Homoj & Korpo",
              "Pick an emoji": "Elekti emoĝion ",
              "Previous": "Antaŭa",
              "Search": "Serĉi",
              "Search results": "Serĉrezultoj",
              "Select a tag": "Elektu etikedon",
              "Settings": "Agordo",
              "Settings navigation": "Agorda navigado",
              "Smileys & Emotion": "Ridoj kaj Emocioj",
              "Start slideshow": "Komenci bildprezenton",
              "Symbols": "Signoj",
              "Travel & Places": "Vojaĵoj & Lokoj",
              "Unable to search the group": "Ne eblas serĉi en la grupo",
              "Write message, @ to mention someone …": "Mesaĝi, uzu @ por mencii iun ..."
            }
          }, {
            "locale": "es",
            "translations": {
              "{tag} (invisible)": "{tag} (invisible)",
              "{tag} (restricted)": "{tag} (restringido)",
              "Actions": "Acciones",
              "Activities": "Actividades",
              "Animals & Nature": "Animales y naturaleza",
              "Avatar of {displayName}": "Avatar de {displayName}",
              "Avatar of {displayName}, {status}": "Avatar de {displayName}, {status}",
              "Cancel changes": "Cancelar cambios",
              "Change title": "Cambiar título",
              "Choose": "Elegir",
              "Close": "Cerrar",
              "Close modal": "Cerrar modal",
              "Close navigation": "Cerrar navegación",
              "Confirm changes": "Confirmar cambios",
              "Custom": "Personalizado",
              "Edit item": "Editar elemento",
              "External documentation for {title}": "Documentacion externa de {title}",
              "Favorite": "Favorito",
              "Flags": "Banderas",
              "Food & Drink": "Comida y bebida",
              "Frequently used": "Usado con frecuenca",
              "Global": "Global",
              "Go back to the list": "Volver a la lista",
              "items": "elementos",
              "Message limit of {count} characters reached": "El mensaje ha alcanzado el límite de {count} caracteres",
              "More {dashboardItemType} …": "Más {dashboardItemType} ...",
              "Next": "Siguiente",
              "No emoji found": "No hay ningún emoji",
              "No results": " Ningún resultado",
              "Objects": "Objetos",
              "Open": "Abrir",
              "Open navigation": "Abrir navegación",
              "Pause slideshow": "Pausar la presentación ",
              "People & Body": "Personas y cuerpos",
              "Pick an emoji": "Elegir un emoji",
              "Please select a time zone:": "Por favor elige un huso de horario:",
              "Previous": "Anterior",
              "Search": "Buscar",
              "Search results": "Resultados de la búsqueda",
              "Select a tag": "Seleccione una etiqueta",
              "Settings": "Ajustes",
              "Settings navigation": "Navegación por ajustes",
              "Smileys & Emotion": "Smileys y emoticonos",
              "Start slideshow": "Iniciar la presentación",
              "Submit": "Enviar",
              "Symbols": "Símbolos",
              "Travel & Places": "Viajes y lugares",
              "Type to search time zone": "Escribe para buscar un huso de horario",
              "Unable to search the group": "No es posible buscar en el grupo",
              "Undo changes": "Deshacer cambios",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Escribe un mensaje, @ para mencionar a alguien, : para autocompletado de emoji ..."
            }
          }, {
            "locale": "eu",
            "translations": {
              "{tag} (invisible)": "{tag} (ikusezina)",
              "{tag} (restricted)": "{tag} (mugatua)",
              "Actions": "Ekintzak",
              "Activities": "Jarduerak",
              "Animals & Nature": "Animaliak eta Natura",
              "Avatar of {displayName}": "{displayName}-(e)n irudia",
              "Avatar of {displayName}, {status}": "{displayName} -(e)n irudia, {status}",
              "Cancel changes": "Ezeztatu aldaketak",
              "Change title": "Aldatu titulua",
              "Choose": "Aukeratu",
              "Close": "Itxi",
              "Close modal": "Itxi modala",
              "Close navigation": "Itxi nabigazioa",
              "Close sidebar": "Itxi albo-barra",
              "Confirm changes": "Baieztatu aldaketak",
              "Custom": "Pertsonalizatua",
              "Edit item": "Editatu elementua",
              "External documentation for {title}": "Kanpoko dokumentazioa {title}(r)entzat",
              "Favorite": "Gogokoa",
              "Flags": "Banderak",
              "Food & Drink": "Janaria eta edariak",
              "Frequently used": "Askotan erabilia",
              "Global": "Globala",
              "Go back to the list": "Bueltatu zerrendara",
              "items": "elementuak",
              "Message limit of {count} characters reached": "Mezuaren {count} karaketere-limitera heldu zara",
              "More {dashboardItemType} …": "{dashboardItemType} gehiago…",
              "Next": "Hurrengoa",
              "No emoji found": "Ez da emojirik aurkitu",
              "No results": "Emaitzarik ez",
              "Objects": "Objektuak",
              "Open": "Ireki",
              "Open navigation": "Ireki nabigazioa",
              "Pause slideshow": "Pausatu diaporama",
              "People & Body": "Jendea eta gorputza",
              "Pick an emoji": "Aukeratu emoji bat",
              "Please select a time zone:": "Mesedez hautatu ordu-zona bat:",
              "Previous": "Aurrekoa",
              "Search": "Bilatu",
              "Search results": "Bilaketa emaitzak",
              "Select a tag": "Hautatu etiketa bat",
              "Settings": "Ezarpenak",
              "Settings navigation": "Nabigazio ezarpenak",
              "Smileys & Emotion": "Smileyak eta emozioa",
              "Start slideshow": "Hasi diaporama",
              "Submit": "Bidali",
              "Symbols": "Sinboloak",
              "Travel & Places": "Bidaiak eta lekuak",
              "Type to search time zone": "Idatzi ordu-zona bat bilatzeko",
              "Unable to search the group": "Ezin izan da taldea bilatu",
              "Undo changes": "Aldaketak desegin",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Idatzi mezua, @ norbait aipatzeko, : emojia automatikoki idazteko"
            }
          }, {
            "locale": "fi_FI",
            "translations": {
              "{tag} (invisible)": "{tag} (näkymätön)",
              "{tag} (restricted)": "{tag} (rajoitettu)",
              "Actions": "Toiminnot",
              "Activities": "Aktiviteetit",
              "Animals & Nature": "Eläimet & luonto",
              "Avatar of {displayName}": "Käyttäjän {displayName} avatar",
              "Avatar of {displayName}, {status}": "Käyttäjän {displayName} avatar, {status}",
              "Cancel changes": "Peruuta muutokset",
              "Choose": "Valitse",
              "Close": "Sulje",
              "Close navigation": "Sulje navigaatio",
              "Confirm changes": "Vahvista muutokset",
              "Custom": "Mukautettu",
              "Edit item": "Muokkaa kohdetta",
              "External documentation for {title}": "Ulkoinen dokumentaatio kohteelle {title}",
              "Flags": "Liput",
              "Food & Drink": "Ruoka & juoma",
              "Frequently used": "Usein käytetyt",
              "Global": "Yleinen",
              "Go back to the list": "Siirry takaisin listaan",
              "Message limit of {count} characters reached": "Viestin merkken enimmäisimäärä {count} täynnä ",
              "Next": "Seuraava",
              "No emoji found": "Emojia ei löytynyt",
              "No results": "Ei tuloksia",
              "Objects": "Esineet & asiat",
              "Open navigation": "Avaa navigaatio",
              "Pause slideshow": "Keskeytä diaesitys",
              "People & Body": "Ihmiset & keho",
              "Pick an emoji": "Valitse emoji",
              "Please select a time zone:": "Valitse aikavyöhyke:",
              "Previous": "Edellinen",
              "Search": "Etsi",
              "Search results": "Hakutulokset",
              "Select a tag": "Valitse tagi",
              "Settings": "Asetukset",
              "Settings navigation": "Asetusnavigaatio",
              "Smileys & Emotion": "Hymiöt & tunteet",
              "Start slideshow": "Aloita diaesitys",
              "Submit": "Lähetä",
              "Symbols": "Symbolit",
              "Travel & Places": "Matkustus & kohteet",
              "Type to search time zone": "Kirjoita etsiäksesi aikavyöhyke",
              "Unable to search the group": "Ryhmää ei voi hakea",
              "Undo changes": "Kumoa muutokset",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Kirjoita viesti, @ mainitaksesi käyttäjän, : emojin automaattitäydennykseen…"
            }
          }, {
            "locale": "fr",
            "translations": {
              "{tag} (invisible)": "{tag} (invisible)",
              "{tag} (restricted)": "{tag} (restreint)",
              "Actions": "Actions",
              "Activities": "Activités",
              "Animals & Nature": "Animaux & Nature",
              "Avatar of {displayName}": "Avatar de {displayName}",
              "Avatar of {displayName}, {status}": "Avatar de {displayName}, {status}",
              "Cancel changes": "Annuler les modifications",
              "Choose": "Choisir",
              "Close": "Fermer",
              "Close modal": "Fermer la fenêtre",
              "Close navigation": "Fermer la navigation",
              "Confirm changes": "Confirmer les modifications",
              "Custom": "Personnalisé",
              "Edit item": "Éditer l'élément",
              "External documentation for {title}": "Documentation externe pour {title}",
              "Flags": "Drapeaux",
              "Food & Drink": "Nourriture & Boissons",
              "Frequently used": "Utilisés fréquemment",
              "Global": "Global",
              "Go back to the list": "Retourner à la liste",
              "items": "éléments",
              "Message limit of {count} characters reached": "Limite de messages de {count} caractères atteinte",
              "More {dashboardItemType} …": "Plus de {dashboardItemType} …",
              "Next": "Suivant",
              "No emoji found": "Pas d’émoji trouvé",
              "No results": "Aucun résultat",
              "Objects": "Objets",
              "Open": "Ouvrir",
              "Open navigation": "Ouvrir la navigation",
              "Pause slideshow": "Mettre le diaporama en pause",
              "People & Body": "Personnes & Corps",
              "Pick an emoji": "Choisissez un émoji",
              "Please select a time zone:": "Sélectionnez un fuseau horaire : ",
              "Previous": "Précédent",
              "Search": "Chercher",
              "Search results": "Résultats de recherche",
              "Select a tag": "Sélectionnez une balise",
              "Settings": "Paramètres",
              "Settings navigation": "Navigation dans les paramètres",
              "Smileys & Emotion": "Smileys & Émotions",
              "Start slideshow": "Démarrer le diaporama",
              "Submit": "Valider",
              "Symbols": "Symboles",
              "Travel & Places": "Voyage & Lieux",
              "Type to search time zone": "Saisissez les premiers lettres pour rechercher un fuseau horaire",
              "Unable to search the group": "Impossible de chercher le groupe",
              "Undo changes": "Annuler les changements",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Ecrire un message, @ pour mentionner quelqu'un, : pour l'auto-complétion des émoticônes"
            }
          }, {
            "locale": "gl",
            "translations": {
              "{tag} (invisible)": "{tag} (invisíbel)",
              "{tag} (restricted)": "{tag} (restrinxido)",
              "Actions": "Accións",
              "Activities": "Actividades",
              "Animals & Nature": "Animais e natureza",
              "Cancel changes": "Cancelar os cambios",
              "Choose": "Escoller",
              "Close": "Pechar",
              "Confirm changes": "Confirma os cambios",
              "Custom": "Personalizado",
              "External documentation for {title}": "Documentación externa para {title}",
              "Flags": "Bandeiras",
              "Food & Drink": "Comida e bebida",
              "Frequently used": "Usado con frecuencia",
              "Message limit of {count} characters reached": "Acadouse o límite de {count} caracteres por mensaxe",
              "Next": "Seguinte",
              "No emoji found": "Non se atopou ningún «emoji»",
              "No results": "Sen resultados",
              "Objects": "Obxectos",
              "Pause slideshow": "Pausar o diaporama",
              "People & Body": "Persoas e corpo",
              "Pick an emoji": "Escolla un «emoji»",
              "Previous": "Anterir",
              "Search": "Buscar",
              "Search results": "Resultados da busca",
              "Select a tag": "Seleccione unha etiqueta",
              "Settings": "Axustes",
              "Settings navigation": "Navegación polos axustes",
              "Smileys & Emotion": "Sorrisos e emocións",
              "Start slideshow": "Iniciar o diaporama",
              "Submit": "Enviar",
              "Symbols": "Símbolos",
              "Travel & Places": "Viaxes e lugares",
              "Unable to search the group": "Non foi posíbel buscar o grupo",
              "Write message, @ to mention someone …": "Escriba a mensaxe, @ para mencionar a alguén…"
            }
          }, {
            "locale": "he",
            "translations": {
              "{tag} (invisible)": "{tag} (נסתר)",
              "{tag} (restricted)": "{tag} (מוגבל)",
              "Actions": "פעולות",
              "Activities": "פעילויות",
              "Animals & Nature": "חיות וטבע",
              "Choose": "בחירה",
              "Close": "סגירה",
              "Custom": "בהתאמה אישית",
              "Flags": "דגלים",
              "Food & Drink": "מזון ומשקאות",
              "Frequently used": "בשימוש תדיר",
              "Next": "הבא",
              "No emoji found": "לא נמצא אמוג׳י",
              "No results": "אין תוצאות",
              "Objects": "חפצים",
              "Pause slideshow": "השהיית מצגת",
              "People & Body": "אנשים וגוף",
              "Pick an emoji": "נא לבחור אמוג׳י",
              "Previous": "הקודם",
              "Search": "חיפוש",
              "Search results": "תוצאות חיפוש",
              "Select a tag": "בחירת תגית",
              "Settings": "הגדרות",
              "Smileys & Emotion": "חייכנים ורגשונים",
              "Start slideshow": "התחלת המצגת",
              "Symbols": "סמלים",
              "Travel & Places": "טיולים ומקומות",
              "Unable to search the group": "לא ניתן לחפש בקבוצה"
            }
          }, {
            "locale": "hu_HU",
            "translations": {
              "{tag} (invisible)": "{tag} (láthatatlan)",
              "{tag} (restricted)": "{tag} (korlátozott)",
              "Actions": "Műveletek",
              "Activities": "Tevékenységek",
              "Animals & Nature": "Állatok és természet",
              "Avatar of {displayName}": "{displayName} profilképe",
              "Avatar of {displayName}, {status}": "{displayName} profilképe, {status}",
              "Cancel changes": "Változtatások elvetése",
              "Choose": "Válassszon",
              "Close": "Bezárás",
              "Close modal": "Ablak bezárása",
              "Close navigation": "Navigáció bezárása",
              "Confirm changes": "Változtatások megerősítése",
              "Custom": "Egyéni",
              "Edit item": "Elem szerkesztése",
              "External documentation for {title}": "Külső dokumentáció ehhez: {title}",
              "Flags": "Zászló",
              "Food & Drink": "Étel és ital",
              "Frequently used": "Gyakran használt",
              "Global": "Globális",
              "Go back to the list": "Ugrás vissza a listához",
              "items": "elemek",
              "Message limit of {count} characters reached": "{count} karakteres üzenetkorlát elérve",
              "More {dashboardItemType} …": "Több {dashboardItemType}…",
              "Next": "Következő",
              "No emoji found": "Nem található emodzsi",
              "No results": "Nincs találat",
              "Objects": "Tárgyak",
              "Open": "Megnyitás",
              "Open navigation": "Navigáció megnyitása",
              "Pause slideshow": "Diavetítés szüneteltetése",
              "People & Body": "Emberek és test",
              "Pick an emoji": "Válasszon egy emodzsit",
              "Please select a time zone:": "Válasszon időzónát:",
              "Previous": "Előző",
              "Search": "Keresés",
              "Search results": "Találatok",
              "Select a tag": "Válasszon címkét",
              "Settings": "Beállítások",
              "Settings navigation": "Navigáció a beállításokban",
              "Smileys & Emotion": "Mosolyok és érzelmek",
              "Start slideshow": "Diavetítés indítása",
              "Submit": "Beküldés",
              "Symbols": "Szimbólumok",
              "Travel & Places": "Utazás és helyek",
              "Type to search time zone": "Gépeljen az időzóna kereséséhez",
              "Unable to search the group": "A csoport nem kereshető",
              "Undo changes": "Változtatások visszavonása",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Írjon üzenetet, @ valaki megemlítéséhez, : az emodzsik automatikus kiegészítéséhez…"
            }
          }, {
            "locale": "is",
            "translations": {
              "{tag} (invisible)": "{tag} (ósýnilegt)",
              "{tag} (restricted)": "{tag} (takmarkað)",
              "Actions": "Aðgerðir",
              "Activities": "Aðgerðir",
              "Animals & Nature": "Dýr og náttúra",
              "Choose": "Velja",
              "Close": "Loka",
              "Custom": "Sérsniðið",
              "Flags": "Flögg",
              "Food & Drink": "Matur og drykkur",
              "Frequently used": "Oftast notað",
              "Next": "Næsta",
              "No emoji found": "Ekkert tjáningartákn fannst",
              "No results": "Engar niðurstöður",
              "Objects": "Hlutir",
              "Pause slideshow": "Gera hlé á skyggnusýningu",
              "People & Body": "Fólk og líkami",
              "Pick an emoji": "Veldu tjáningartákn",
              "Previous": "Fyrri",
              "Search": "Leita",
              "Search results": "Leitarniðurstöður",
              "Select a tag": "Veldu merki",
              "Settings": "Stillingar",
              "Smileys & Emotion": "Broskallar og tilfinningar",
              "Start slideshow": "Byrja skyggnusýningu",
              "Symbols": "Tákn",
              "Travel & Places": "Staðir og ferðalög",
              "Unable to search the group": "Get ekki leitað í hópnum"
            }
          }, {
            "locale": "it",
            "translations": {
              "{tag} (invisible)": "{tag} (invisibile)",
              "{tag} (restricted)": "{tag} (limitato)",
              "Actions": "Azioni",
              "Activities": "Attività",
              "Animals & Nature": "Animali e natura",
              "Avatar of {displayName}": "Avatar di {displayName}",
              "Avatar of {displayName}, {status}": "Avatar di {displayName}, {status}",
              "Cancel changes": "Annulla modifiche",
              "Choose": "Scegli",
              "Close": "Chiudi",
              "Close navigation": "Chiudi la navigazione",
              "Confirm changes": "Conferma modifiche",
              "Custom": "Personalizzato",
              "Edit item": "Modifica l'elemento",
              "External documentation for {title}": "Documentazione esterna per {title}",
              "Flags": "Bandiere",
              "Food & Drink": "Cibo e bevande",
              "Frequently used": "Usati di frequente",
              "Global": "Globale",
              "Go back to the list": "Torna all'elenco",
              "Message limit of {count} characters reached": "Limite dei messaggi di {count} caratteri raggiunto",
              "Next": "Successivo",
              "No emoji found": "Nessun emoji trovato",
              "No results": "Nessun risultato",
              "Objects": "Oggetti",
              "Open navigation": "Apri la navigazione",
              "Pause slideshow": "Presentazione in pausa",
              "People & Body": "Persone e corpo",
              "Pick an emoji": "Scegli un emoji",
              "Please select a time zone:": "Si prega di selezionare un fuso orario:",
              "Previous": "Precedente",
              "Search": "Cerca",
              "Search results": "Risultati di ricerca",
              "Select a tag": "Seleziona un'etichetta",
              "Settings": "Impostazioni",
              "Settings navigation": "Navigazione delle impostazioni",
              "Smileys & Emotion": "Faccine ed emozioni",
              "Start slideshow": "Avvia presentazione",
              "Submit": "Invia",
              "Symbols": "Simboli",
              "Travel & Places": "Viaggi e luoghi",
              "Type to search time zone": "Digita per cercare un fuso orario",
              "Unable to search the group": "Impossibile cercare il gruppo",
              "Undo changes": "Cancella i cambiamenti",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Scrivi un messaggio, @ per menzionare qualcuno, : per il completamento automatico delle emoji ..."
            }
          }, {
            "locale": "ja_JP",
            "translations": {
              "{tag} (invisible)": "{タグ} (不可視)",
              "{tag} (restricted)": "{タグ} (制限付)",
              "Actions": "操作",
              "Activities": "アクティビティ",
              "Animals & Nature": "動物と自然",
              "Avatar of {displayName}": "{displayName} のアバター",
              "Avatar of {displayName}, {status}": "{displayName}, {status} のアバター",
              "Cancel changes": "変更をキャンセル",
              "Change title": "タイトルを変更",
              "Choose": "選択",
              "Close": "閉じる",
              "Close modal": "モーダルを閉じる",
              "Close navigation": "ナビゲーションを閉じる",
              "Close sidebar": "サイドバーを閉じる",
              "Confirm changes": "変更を承認",
              "Custom": "カスタム",
              "Edit item": "編集",
              "External documentation for {title}": "{title} のための添付文書",
              "Favorite": "お気に入り",
              "Flags": "国旗",
              "Food & Drink": "食べ物と飲み物",
              "Frequently used": "よく使うもの",
              "Global": "全体",
              "Go back to the list": "リストに戻る",
              "items": "アイテム",
              "Message limit of {count} characters reached": "{count} 文字のメッセージ上限に達しています",
              "More {dashboardItemType} …": "{dashboardItemType} をさらに表示…",
              "Next": "次",
              "No emoji found": "絵文字が見つかりません",
              "No results": "なし",
              "Objects": "物",
              "Open": "開く",
              "Open navigation": "ナビゲーションを開く",
              "Pause slideshow": "スライドショーを一時停止",
              "People & Body": "様々な人と体の部位",
              "Pick an emoji": "絵文字を選択",
              "Please select a time zone:": "タイムゾーンを選んで下さい：",
              "Previous": "前",
              "Search": "検索",
              "Search results": "検索結果",
              "Select a tag": "タグを選択",
              "Settings": "設定",
              "Settings navigation": "ナビゲーション設定",
              "Smileys & Emotion": "感情表現",
              "Start slideshow": "スライドショーを開始",
              "Submit": "提出",
              "Symbols": "記号",
              "Travel & Places": "旅行と場所",
              "Type to search time zone": "タイムゾーン検索のため入力してください",
              "Unable to search the group": "グループを検索できません",
              "Undo changes": "変更を取り消し",
              "Write message, @ to mention someone, : for emoji autocompletion …": "メッセージを書く、@で誰かを紹介する、: で絵文字を自動補完する ..."
            }
          }, {
            "locale": "lt_LT",
            "translations": {
              "{tag} (invisible)": "{tag} (nematoma)",
              "{tag} (restricted)": "{tag} (apribota)",
              "Actions": "Veiksmai",
              "Activities": "Veiklos",
              "Animals & Nature": "Gyvūnai ir gamta",
              "Choose": "Pasirinkti",
              "Close": "Užverti",
              "Custom": "Tinkinti",
              "External documentation for {title}": "Išorinė {title} dokumentacija",
              "Flags": "Vėliavos",
              "Food & Drink": "Maistas ir gėrimai",
              "Frequently used": "Dažniausiai naudoti",
              "Message limit of {count} characters reached": "Pasiekta {count} simbolių žinutės riba",
              "Next": "Kitas",
              "No emoji found": "Nerasta jaustukų",
              "No results": "Nėra rezultatų",
              "Objects": "Objektai",
              "Pause slideshow": "Pristabdyti skaidrių rodymą",
              "People & Body": "Žmonės ir kūnas",
              "Pick an emoji": "Pasirinkti jaustuką",
              "Previous": "Ankstesnis",
              "Search": "Ieškoti",
              "Search results": "Paieškos rezultatai",
              "Select a tag": "Pasirinkti žymę",
              "Settings": "Nustatymai",
              "Settings navigation": "Naršymas nustatymuose",
              "Smileys & Emotion": "Šypsenos ir emocijos",
              "Start slideshow": "Pradėti skaidrių rodymą",
              "Submit": "Pateikti",
              "Symbols": "Simboliai",
              "Travel & Places": "Kelionės ir vietos",
              "Unable to search the group": "Nepavyko atlikti paiešką grupėje",
              "Write message, @ to mention someone …": "Rašykite žinutę, naudokite @ norėdami kažką paminėti…"
            }
          }, {
            "locale": "lv",
            "translations": {
              "{tag} (invisible)": "{tag} (neredzams)",
              "{tag} (restricted)": "{tag} (ierobežots)",
              "Choose": "Izvēlēties",
              "Close": "Aizvērt",
              "Next": "Nākamais",
              "No results": "Nav rezultātu",
              "Pause slideshow": "Pauzēt slaidrādi",
              "Previous": "Iepriekšējais",
              "Select a tag": "Izvēlēties birku",
              "Settings": "Iestatījumi",
              "Start slideshow": "Sākt slaidrādi"
            }
          }, {
            "locale": "mk",
            "translations": {
              "{tag} (invisible)": "{tag} (невидливо)",
              "{tag} (restricted)": "{tag} (ограничено)",
              "Actions": "Акции",
              "Activities": "Активности",
              "Animals & Nature": "Животни & Природа",
              "Avatar of {displayName}": "Аватар на {displayName}",
              "Avatar of {displayName}, {status}": "Аватар на {displayName}, {status}",
              "Cancel changes": "Откажи ги промените",
              "Change title": "Промени наслов",
              "Choose": "Избери",
              "Close": "Затвори",
              "Close modal": "Затвори модал",
              "Close navigation": "Затвори навигација",
              "Confirm changes": "Потврди ги промените",
              "Custom": "Прилагодени",
              "Edit item": "Уреди",
              "External documentation for {title}": "Надворешна документација за {title}",
              "Favorite": "Фаворити",
              "Flags": "Знамиња",
              "Food & Drink": "Храна & Пијалоци",
              "Frequently used": "Најчесто користени",
              "Global": "Глобално",
              "Go back to the list": "Врати се на листата",
              "items": "ставки",
              "Message limit of {count} characters reached": "Ограничувањето на должината на пораката од {count} карактери е надминато",
              "More {dashboardItemType} …": "Повеќе {dashboardItemType} …",
              "Next": "Следно",
              "No emoji found": "Не се пронајдени емотикони",
              "No results": "Нема резултати",
              "Objects": "Објекти",
              "Open": "Отвори",
              "Open navigation": "Отвори навигација",
              "Pause slideshow": "Пузирај слајдшоу",
              "People & Body": "Луѓе & Тело",
              "Pick an emoji": "Избери емотикон",
              "Please select a time zone:": "Изберете временска зона:",
              "Previous": "Предходно",
              "Search": "Барај",
              "Search results": "Резултати од барувањето",
              "Select a tag": "Избери ознака",
              "Settings": "Параметри",
              "Settings navigation": "Параметри за навигација",
              "Smileys & Emotion": "Смешковци & Емотикони",
              "Start slideshow": "Стартувај слајдшоу",
              "Submit": "Испрати",
              "Symbols": "Симболи",
              "Travel & Places": "Патувања & Места",
              "Type to search time zone": "Напишете за да пребарате временска зона",
              "Unable to search the group": "Неможе да се принајде групата",
              "Undo changes": "Врати ги промените",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Напиши порака, @ за да спомнете некого, : за емотинони автоатско комплетирање ..."
            }
          }, {
            "locale": "my",
            "translations": {
              "{tag} (invisible)": "{tag} (ကွယ်ဝှက်ထား)",
              "{tag} (restricted)": "{tag} (ကန့်သတ်)",
              "Actions": "လုပ်ဆောင်ချက်များ",
              "Activities": "ပြုလုပ်ဆောင်တာများ",
              "Animals & Nature": "တိရစ္ဆာန်များနှင့် သဘာဝ",
              "Avatar of {displayName}": "{displayName} ၏ ကိုယ်ပွား",
              "Cancel changes": "ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်",
              "Choose": "ရွေးချယ်ရန်",
              "Close": "ပိတ်ရန်",
              "Confirm changes": "ပြောင်းလဲမှုများ အတည်ပြုရန်",
              "Custom": "အလိုကျချိန်ညှိမှု",
              "External documentation for {title}": "{title} အတွက် ပြင်ပ စာရွက်စာတမ်း",
              "Flags": "အလံများ",
              "Food & Drink": "အစားအသောက်",
              "Frequently used": "မကြာခဏအသုံးပြုသော",
              "Global": "ကမ္ဘာလုံးဆိုင်ရာ",
              "Message limit of {count} characters reached": "ကန့်သတ် စာလုံးရေ {count} လုံး ပြည့်ပါပြီ",
              "Next": "နောက်သို့ဆက်ရန်",
              "No emoji found": "အီမိုဂျီ ရှာဖွေမတွေ့နိုင်ပါ",
              "No results": "ရလဒ်မရှိပါ",
              "Objects": "အရာဝတ္ထုများ",
              "Pause slideshow": "စလိုက်ရှိုး ခေတ္တရပ်ရန်",
              "People & Body": "လူပုဂ္ဂိုလ်များနှင့် ခန္ဓာကိုယ်",
              "Pick an emoji": "အီမိုဂျီရွေးရန်",
              "Please select a time zone:": "ဒေသစံတော်ချိန် ရွေးချယ်ပေးပါ",
              "Previous": "ယခင်",
              "Search": "ရှာဖွေရန်",
              "Search results": "ရှာဖွေမှု ရလဒ်များ",
              "Select a tag": "tag ရွေးချယ်ရန်",
              "Settings": "ချိန်ညှိချက်များ",
              "Settings navigation": "ချိန်ညှိချက်အညွှန်း",
              "Smileys & Emotion": "စမိုင်လီများနှင့် အီမိုရှင်း",
              "Start slideshow": "စလိုက်ရှိုးအား စတင်ရန်",
              "Submit": "တင်သွင်းရန်",
              "Symbols": "သင်္ကေတများ",
              "Travel & Places": "ခရီးသွားလာခြင်းနှင့် နေရာများ",
              "Type to search time zone": "ဒေသစံတော်ချိန်များ ရှာဖွေရန် စာရိုက်ပါ",
              "Unable to search the group": "အဖွဲ့အား ရှာဖွေ၍ မရနိုင်ပါ",
              "Write message, @ to mention someone …": "စာရေးသားရန်၊ တစ်စုံတစ်ဦးအား @ အသုံးပြု ရည်ညွှန်းရန်..."
            }
          }, {
            "locale": "nb_NO",
            "translations": {
              "{tag} (invisible)": "{tag} (usynlig)",
              "{tag} (restricted)": "{tag} (beskyttet)",
              "Actions": "Handlinger",
              "Activities": "Aktiviteter",
              "Animals & Nature": "Dyr og natur",
              "Avatar of {displayName}": "Avataren til {displayName}",
              "Avatar of {displayName}, {status}": "{displayName}'s avatar, {status}",
              "Cancel changes": "Avbryt endringer",
              "Change title": "Endre tittel",
              "Choose": "Velg",
              "Close": "Lukk",
              "Close modal": "Lukk modal",
              "Close navigation": "Lukk navigasjon",
              "Close sidebar": "Lukk sidepanel",
              "Confirm changes": "Bekreft endringer",
              "Custom": "Tilpasset",
              "Edit item": "Rediger",
              "External documentation for {title}": "Ekstern dokumentasjon for {title}",
              "Favorite": "Favoritt",
              "Flags": "Flagg",
              "Food & Drink": "Mat og drikke",
              "Frequently used": "Ofte brukt",
              "Global": "Global",
              "Go back to the list": "Gå tilbake til listen",
              "items": "enheter",
              "Message limit of {count} characters reached": "Karakter begrensing {count} nådd i melding",
              "More {dashboardItemType} …": "Mer {dashboardItemType} …",
              "Next": "Neste",
              "No emoji found": "Fant ingen emoji",
              "No results": "Ingen resultater",
              "Objects": "Objekter",
              "Open": "Åpne",
              "Open navigation": "Åpne navigasjon",
              "Pause slideshow": "Pause lysbildefremvisning",
              "People & Body": "Mennesker og kropp",
              "Pick an emoji": "Velg en emoji",
              "Please select a time zone:": "Vennligst velg tidssone",
              "Previous": "Forrige",
              "Search": "Søk",
              "Search results": "Søkeresultater",
              "Select a tag": "Velg en merkelapp",
              "Settings": "Innstillinger",
              "Settings navigation": "Navigasjonsinstillinger",
              "Smileys & Emotion": "Smilefjes og følelser",
              "Start slideshow": "Start lysbildefremvisning",
              "Submit": "Send",
              "Symbols": "Symboler",
              "Travel & Places": "Reise og steder",
              "Type to search time zone": "Tast for å søke etter tidssone",
              "Unable to search the group": "Kunne ikke søke i gruppen",
              "Undo changes": "Tilbakestill endringer",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Skriv melding, @ for å nevne noen, : for emoji-autofullføring…"
            }
          }, {
            "locale": "nl",
            "translations": {
              "{tag} (invisible)": "{tag} (onzichtbaar)",
              "{tag} (restricted)": "{tag} (beperkt)",
              "Actions": "Acties",
              "Activities": "Activiteiten",
              "Animals & Nature": "Dieren & Natuur",
              "Avatar of {displayName}": "Avatar van {displayName}",
              "Avatar of {displayName}, {status}": "Avatar van {displayName}, {status}",
              "Cancel changes": "Wijzigingen annuleren",
              "Choose": "Kies",
              "Close": "Sluiten",
              "Close navigation": "Navigatie sluiten",
              "Confirm changes": "Wijzigingen bevestigen",
              "Custom": "Aangepast",
              "Edit item": "Item bewerken",
              "External documentation for {title}": "Externe documentatie voor {title}",
              "Flags": "Vlaggen",
              "Food & Drink": "Eten & Drinken",
              "Frequently used": "Vaak gebruikt",
              "Global": "Globaal",
              "Go back to the list": "Ga terug naar de lijst",
              "Message limit of {count} characters reached": "Berichtlimiet van {count} karakters bereikt",
              "Next": "Volgende",
              "No emoji found": "Geen emoji gevonden",
              "No results": "Geen resultaten",
              "Objects": "Objecten",
              "Open navigation": "Navigatie openen",
              "Pause slideshow": "Pauzeer diavoorstelling",
              "People & Body": "Mensen & Lichaam",
              "Pick an emoji": "Kies een emoji",
              "Please select a time zone:": "Selecteer een tijdzone:",
              "Previous": "Vorige",
              "Search": "Zoeken",
              "Search results": "Zoekresultaten",
              "Select a tag": "Selecteer een label",
              "Settings": "Instellingen",
              "Settings navigation": "Instellingen navigatie",
              "Smileys & Emotion": "Smileys & Emotie",
              "Start slideshow": "Start diavoorstelling",
              "Submit": "Verwerken",
              "Symbols": "Symbolen",
              "Travel & Places": "Reizen & Plaatsen",
              "Type to search time zone": "Type om de tijdzone te zoeken",
              "Unable to search the group": "Kan niet in de groep zoeken",
              "Undo changes": "Wijzigingen ongedaan maken",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Schrijf bericht, @ om iemand te noemen, : voor emoji auto-aanvullen ..."
            }
          }, {
            "locale": "oc",
            "translations": {
              "{tag} (invisible)": "{tag} (invisible)",
              "{tag} (restricted)": "{tag} (limit)",
              "Actions": "Accions",
              "Choose": "Causir",
              "Close": "Tampar",
              "Next": "Seguent",
              "No results": "Cap de resultat",
              "Pause slideshow": "Metre en pausa lo diaporama",
              "Previous": "Precedent",
              "Select a tag": "Seleccionar una etiqueta",
              "Settings": "Paramètres",
              "Start slideshow": "Lançar lo diaporama"
            }
          }, {
            "locale": "pl",
            "translations": {
              "{tag} (invisible)": "{tag} (niewidoczna)",
              "{tag} (restricted)": "{tag} (ograniczona)",
              "Actions": "Działania",
              "Activities": "Aktywność",
              "Animals & Nature": "Zwierzęta i natura",
              "Avatar of {displayName}": "Awatar {displayName}",
              "Avatar of {displayName}, {status}": "Awatar {displayName}, {status}",
              "Cancel changes": "Anuluj zmiany",
              "Change title": "Zmień tytuł",
              "Choose": "Wybierz",
              "Clear text": "Wyczyść tekst",
              "Close": "Zamknij",
              "Close modal": "Zamknij modal",
              "Close navigation": "Zamknij nawigację",
              "Close sidebar": "Zamknij pasek boczny",
              "Confirm changes": "Potwierdź zmiany",
              "Custom": "Zwyczajne",
              "Edit item": "Edytuj element",
              "External documentation for {title}": "Dokumentacja zewnętrzna dla {title}",
              "Favorite": "Ulubiony",
              "Flags": "Flagi",
              "Food & Drink": "Jedzenie i picie",
              "Frequently used": "Często używane",
              "Global": "Globalnie",
              "Go back to the list": "Powrót do listy",
              "Hide password": "Ukryj hasło",
              "items": "elementy",
              "Message limit of {count} characters reached": "Przekroczono limit wiadomości wynoszący {count} znaków",
              "More {dashboardItemType} …": "Więcej {dashboardItemType}…",
              "Next": "Następny",
              "No emoji found": "Nie znaleziono emotikonów",
              "No results": "Brak wyników",
              "Objects": "Obiekty",
              "Open": "Otwórz",
              "Open navigation": "Otwórz nawigację",
              "Password is secure": "Hasło jest bezpieczne",
              "Pause slideshow": "Wstrzymaj pokaz slajdów",
              "People & Body": "Ludzie i ciało",
              "Pick an emoji": "Wybierz emoji",
              "Please select a time zone:": "Wybierz strefę czasową:",
              "Previous": "Poprzedni",
              "Search": "Szukaj",
              "Search results": "Wyniki wyszukiwania",
              "Select a tag": "Wybierz etykietę",
              "Settings": "Ustawienia",
              "Settings navigation": "Ustawienia nawigacji",
              "Show password": "Pokaż hasło",
              "Smileys & Emotion": "Buźki i emotikony",
              "Start slideshow": "Rozpocznij pokaz slajdów",
              "Submit": "Wyślij",
              "Symbols": "Symbole",
              "Travel & Places": "Podróże i miejsca",
              "Type to search time zone": "Wpisz, aby wyszukać strefę czasową",
              "Unable to search the group": "Nie można przeszukać grupy",
              "Undo changes": "Cofnij zmiany",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Napisz wiadomość, @ aby o kimś wspomnieć, : dla autouzupełniania emotikon…"
            }
          }, {
            "locale": "pt_BR",
            "translations": {
              "{tag} (invisible)": "{tag} (invisível)",
              "{tag} (restricted)": "{tag} (restrito) ",
              "Actions": "Ações",
              "Activities": "Atividades",
              "Animals & Nature": "Animais & Natureza",
              "Avatar of {displayName}": "Avatar de {displayName}",
              "Avatar of {displayName}, {status}": "Avatar de {displayName}, {status}",
              "Cancel changes": "Cancelar alterações",
              "Change title": "Alterar título",
              "Choose": "Escolher",
              "Close": "Fechar",
              "Close modal": "Fechar modal",
              "Close navigation": "Fechar navegação",
              "Close sidebar": "Fechar barra lateral",
              "Confirm changes": "Confirmar alterações",
              "Custom": "Personalizado",
              "Edit item": "Editar item",
              "External documentation for {title}": "Documentação externa para {title}",
              "Favorite": "Favorito",
              "Flags": "Bandeiras",
              "Food & Drink": "Comida & Bebida",
              "Frequently used": "Mais usados",
              "Global": "Global",
              "Go back to the list": "Volte para a lista",
              "items": "itens",
              "Message limit of {count} characters reached": "Limite de mensagem de {count} caracteres atingido",
              "More {dashboardItemType} …": "Mais {dashboardItemType} …",
              "Next": "Próximo",
              "No emoji found": "Nenhum emoji encontrado",
              "No results": "Sem resultados",
              "Objects": "Objetos",
              "Open": "Aberto",
              "Open navigation": "Abrir navegação",
              "Pause slideshow": "Pausar apresentação de slides",
              "People & Body": "Pessoas & Corpo",
              "Pick an emoji": "Escolha um emoji",
              "Please select a time zone:": "Selecione um fuso horário: ",
              "Previous": "Anterior",
              "Search": "Pesquisar",
              "Search results": "Resultados da pesquisa",
              "Select a tag": "Selecionar uma tag",
              "Settings": "Configurações",
              "Settings navigation": "Navegação de configurações",
              "Smileys & Emotion": "Smiles & Emoções",
              "Start slideshow": "Iniciar apresentação de slides",
              "Submit": "Enviar",
              "Symbols": "Símbolo",
              "Travel & Places": "Viagem & Lugares",
              "Type to search time zone": "Digite para pesquisar o fuso horário ",
              "Unable to search the group": "Não foi possível pesquisar o grupo",
              "Undo changes": "Desfazer modificações",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Escreva mensagem, @ para mencionar alguém, : para autocompleção emoji..."
            }
          }, {
            "locale": "pt_PT",
            "translations": {
              "{tag} (invisible)": "{tag} (invisivel)",
              "{tag} (restricted)": "{tag} (restrito)",
              "Actions": "Ações",
              "Choose": "Escolher",
              "Close": "Fechar",
              "Next": "Seguinte",
              "No results": "Sem resultados",
              "Pause slideshow": "Pausar diaporama",
              "Previous": "Anterior",
              "Select a tag": "Selecionar uma etiqueta",
              "Settings": "Definições",
              "Start slideshow": "Iniciar diaporama",
              "Unable to search the group": "Não é possível pesquisar o grupo"
            }
          }, {
            "locale": "ro",
            "translations": {
              "{tag} (invisible)": "{tag} (invizibil)",
              "{tag} (restricted)": "{tag} (restricționat)",
              "Actions": "Acțiuni",
              "Activities": "Activități",
              "Animals & Nature": "Animale și natură",
              "Avatar of {displayName}": "Avatarul lui {displayName}",
              "Avatar of {displayName}, {status}": "Avatarul lui {displayName}, {status}",
              "Cancel changes": "Anulează modificările",
              "Change title": "Modificați titlul",
              "Choose": "Alegeți",
              "Close": "Închideți",
              "Close modal": "Închideți modulul",
              "Close navigation": "Închideți navigarea",
              "Close sidebar": "Închide bara laterală",
              "Confirm changes": "Confirmați modificările",
              "Custom": "Personalizat",
              "Edit item": "Editați elementul",
              "External documentation for {title}": "Documentație externă pentru {title}",
              "Favorite": "Favorit",
              "Flags": "Marcaje",
              "Food & Drink": "Alimente și băuturi",
              "Frequently used": "Utilizate frecvent",
              "Global": "Global",
              "Go back to the list": "Întoarceți-vă la listă",
              "items": "articole",
              "Message limit of {count} characters reached": "Limita mesajului de {count} caractere a fost atinsă",
              "More {dashboardItemType} …": "Mai multe {dashboardItemType} …",
              "Next": "Următorul",
              "No emoji found": "Nu s-a găsit niciun emoji",
              "No results": "Nu există rezultate",
              "Objects": "Obiecte",
              "Open": "Deschideți",
              "Open navigation": "Deschideți navigația",
              "Pause slideshow": "Pauză prezentare de diapozitive",
              "People & Body": "Oameni și corp",
              "Pick an emoji": "Alege un emoji",
              "Please select a time zone:": "Vă rugăm să selectați un fus orar:",
              "Previous": "Anterior",
              "Search": "Căutare",
              "Search results": "Rezultatele căutării",
              "Select a tag": "Selectați o etichetă",
              "Settings": "Setări",
              "Settings navigation": "Navigare setări",
              "Smileys & Emotion": "Zâmbete și emoții",
              "Start slideshow": "Începeți prezentarea de diapozitive",
              "Submit": "Trimiteți",
              "Symbols": "Simboluri",
              "Travel & Places": "Călătorii și locuri",
              "Type to search time zone": "Tastați pentru a căuta fusul orar",
              "Unable to search the group": "Imposibilitatea de a căuta în grup",
              "Undo changes": "Anularea modificărilor",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Scrieți un mesaj, @ pentru a menționa pe cineva, : pentru autocompletare emoji ..."
            }
          }, {
            "locale": "ru",
            "translations": {
              "{tag} (invisible)": "{tag} (невидимое)",
              "{tag} (restricted)": "{tag} (ограниченное)",
              "Actions": "Действия ",
              "Activities": "События",
              "Animals & Nature": "Животные и природа ",
              "Avatar of {displayName}": "Аватар {displayName}",
              "Avatar of {displayName}, {status}": "Фотография {displayName}, {status}",
              "Cancel changes": "Отменить изменения",
              "Choose": "Выберите",
              "Close": "Закрыть",
              "Close modal": "Закрыть модальное окно",
              "Close navigation": "Закрыть навигацию",
              "Confirm changes": "Подтвердить изменения",
              "Custom": "Пользовательское",
              "Edit item": "Изменить элемент",
              "External documentation for {title}": "Внешняя документация для {title}",
              "Flags": "Флаги",
              "Food & Drink": "Еда, напиток",
              "Frequently used": "Часто используемый",
              "Global": "Глобальный",
              "Go back to the list": "Вернуться к списку",
              "items": "элементов",
              "Message limit of {count} characters reached": "Достигнуто ограничение на количество символов в {count}",
              "More {dashboardItemType} …": "Больше {dashboardItemType} …",
              "Next": "Следующее",
              "No emoji found": "Эмодзи не найдено",
              "No results": "Результаты отсуствуют",
              "Objects": "Объекты",
              "Open": "Открыть",
              "Open navigation": "Открыть навигацию",
              "Pause slideshow": "Приостановить показ слйдов",
              "People & Body": "Люди и тело",
              "Pick an emoji": "Выберите эмодзи",
              "Please select a time zone:": "Пожалуйста, выберите часовой пояс:",
              "Previous": "Предыдущее",
              "Search": "Поиск",
              "Search results": "Результаты поиска",
              "Select a tag": "Выберите метку",
              "Settings": "Параметры",
              "Settings navigation": "Навигация по настройкам",
              "Smileys & Emotion": "Смайлики и эмоции",
              "Start slideshow": "Начать показ слайдов",
              "Submit": "Утвердить",
              "Symbols": "Символы",
              "Travel & Places": "Путешествия и места",
              "Type to search time zone": "Введите для поиска часового пояса",
              "Unable to search the group": "Невозможно найти группу",
              "Undo changes": "Отменить изменения",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Напишите сообщение, @ - чтобы упомянуть кого-то, : - для автозаполнения эмодзи …"
            }
          }, {
            "locale": "sk_SK",
            "translations": {
              "{tag} (invisible)": "{tag} (neviditeľný)",
              "{tag} (restricted)": "{tag} (obmedzený)",
              "Actions": "Akcie",
              "Activities": "Aktivity",
              "Animals & Nature": "Zvieratá a príroda",
              "Avatar of {displayName}": "Avatar {displayName}",
              "Avatar of {displayName}, {status}": "Avatar {displayName}, {status}",
              "Cancel changes": "Zrušiť zmeny",
              "Choose": "Vybrať",
              "Close": "Zatvoriť",
              "Close navigation": "Zavrieť navigáciu",
              "Confirm changes": "Potvrdiť zmeny",
              "Custom": "Zvyk",
              "Edit item": "Upraviť položku",
              "External documentation for {title}": "Externá dokumentácia pre {title}",
              "Flags": "Vlajky",
              "Food & Drink": "Jedlo a nápoje",
              "Frequently used": "Často používané",
              "Global": "Globálne",
              "Go back to the list": "Naspäť na zoznam",
              "Message limit of {count} characters reached": "Limit správy na {count} znakov dosiahnutý",
              "Next": "Ďalší",
              "No emoji found": "Nenašli sa žiadne emodži",
              "No results": "Žiadne výsledky",
              "Objects": "Objekty",
              "Open navigation": "Otvoriť navigáciu",
              "Pause slideshow": "Pozastaviť prezentáciu",
              "People & Body": "Ľudia a telo",
              "Pick an emoji": "Vyberte si emodži",
              "Please select a time zone:": "Prosím vyberte časovú zónu:",
              "Previous": "Predchádzajúci",
              "Search": "Hľadať",
              "Search results": "Výsledky vyhľadávania",
              "Select a tag": "Vybrať štítok",
              "Settings": "Nastavenia",
              "Settings navigation": "Navigácia v nastaveniach",
              "Smileys & Emotion": "Smajlíky a emócie",
              "Start slideshow": "Začať prezentáciu",
              "Submit": "Odoslať",
              "Symbols": "Symboly",
              "Travel & Places": "Cestovanie a miesta",
              "Type to search time zone": "Začníte písať pre vyhľadávanie časovej zóny",
              "Unable to search the group": "Skupinu sa nepodarilo nájsť",
              "Undo changes": "Vrátiť zmeny",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Napíšte správu, @ ak chcete niekoho spomenúť, : pre automatické dopĺňanie emotikonov…"
            }
          }, {
            "locale": "sl",
            "translations": {
              "{tag} (invisible)": "{tag} (nevidno)",
              "{tag} (restricted)": "{tag} (omejeno)",
              "Actions": "Dejanja",
              "Activities": "Dejavnosti",
              "Animals & Nature": "Živali in Narava",
              "Avatar of {displayName}": "Podoba {displayName}",
              "Avatar of {displayName}, {status}": "Prikazna slika {displayName}, {status}",
              "Cancel changes": "Prekliči spremembe",
              "Change title": "Spremeni naziv",
              "Choose": "Izbor",
              "Close": "Zapri",
              "Close modal": "Zapri pojavno okno",
              "Close navigation": "Zapri krmarjenje",
              "Close sidebar": "Zapri stransko vrstico",
              "Confirm changes": "Potrdi spremembe",
              "Custom": "Po meri",
              "Edit item": "Uredi postavko",
              "External documentation for {title}": "Zunanja dokumentacija za {title}",
              "Favorite": "Priljubljeno",
              "Flags": "Zastavice",
              "Food & Drink": "Hrana in Pijača",
              "Frequently used": "Pogostost uporabe",
              "Global": "Splošno",
              "Go back to the list": "Vrni se na seznam",
              "items": "Postavke",
              "Message limit of {count} characters reached": "Dosežena omejitev {count} znakov na sporočilo.",
              "More {dashboardItemType} …": "Več {dashboardItemType} …",
              "Next": "Naslednji",
              "No emoji found": "Ni najdenih izraznih ikon",
              "No results": "Ni zadetkov",
              "Objects": "Predmeti",
              "Open": "Odpri",
              "Open navigation": "Odpri navigacijo",
              "Pause slideshow": "Ustavi predstavitev",
              "People & Body": "Ljudje in Telo",
              "Pick an emoji": "Izbor izrazne ikone",
              "Please select a time zone:": "Izbor časovnega pasu:",
              "Previous": "Predhodni",
              "Search": "Iskanje",
              "Search results": "Zadetki iskanja",
              "Select a tag": "Izbor oznake",
              "Settings": "Nastavitve",
              "Settings navigation": "Krmarjenje nastavitev",
              "Smileys & Emotion": "Izrazne ikone",
              "Start slideshow": "Začni predstavitev",
              "Submit": "Pošlji",
              "Symbols": "Simboli",
              "Travel & Places": "Potovanja in Kraji",
              "Type to search time zone": "Vpišite niz za iskanje časovnega pasu",
              "Unable to search the group": "Ni mogoče iskati po skupini",
              "Undo changes": "Razveljavi spremembe",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Napišite sporočilo, @ da nekoga omenite, : za samodejno ponudbo emotikonov …"
            }
          }, {
            "locale": "sr",
            "translations": {
              "{tag} (invisible)": "{tag} (nevidljivo)",
              "{tag} (restricted)": "{tag} (ograničeno)",
              "Actions": "Radnje",
              "Activities": "Aktivnosti",
              "Animals & Nature": "Životinje i Priroda",
              "Avatar of {displayName}": "Avatar za {displayName}",
              "Avatar of {displayName}, {status}": "Avatar za {displayName}, {status}",
              "Cancel changes": "Otkaži izmene",
              "Change title": "Izmeni naziv",
              "Choose": "Изаберите",
              "Close": "Затвори",
              "Close modal": "Zatvori modal",
              "Close navigation": "Zatvori navigaciju",
              "Close sidebar": "Zatvori bočnu traku",
              "Confirm changes": "Potvrdite promene",
              "Custom": "Po meri",
              "Edit item": "Uredi stavku",
              "External documentation for {title}": "Eksterna dokumentacija za {title}",
              "Favorite": "Omiljeni",
              "Flags": "Zastave",
              "Food & Drink": "Hrana i Piće",
              "Frequently used": "Često korišćeno",
              "Global": "Globalno",
              "Go back to the list": "Natrag na listu",
              "items": "stavke",
              "Message limit of {count} characters reached": "Dostignuto je ograničenje za poruke od {count} znakova",
              "More {dashboardItemType} …": "Više  {dashboardItemType} …",
              "Next": "Следеће",
              "No emoji found": "Nije pronađen nijedan emodži",
              "No results": "Нема резултата",
              "Objects": "Objekti",
              "Open": "Otvori",
              "Open navigation": "Otvori navigaciju",
              "Pause slideshow": "Паузирај слајд шоу",
              "People & Body": "Ljudi i Telo",
              "Pick an emoji": "Izaberi emodži",
              "Please select a time zone:": "Molimo izaberite vremensku zonu:",
              "Previous": "Претходно",
              "Search": "Pretraži",
              "Search results": "Rezultati pretrage",
              "Select a tag": "Изаберите ознаку",
              "Settings": "Поставке",
              "Settings navigation": "Navigacija u podešavanjima",
              "Smileys & Emotion": "Smajli i Emocije",
              "Start slideshow": "Покрени слајд шоу",
              "Submit": "Prihvati",
              "Symbols": "Simboli",
              "Travel & Places": "Putovanja i Mesta",
              "Type to search time zone": "Ukucaj da pretražiš vremenske zone",
              "Unable to search the group": "Nije moguće pretražiti grupu",
              "Undo changes": "Poništi promene",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Napišite poruku, @ da pomenete nekoga, : za automatsko dovršavanje emodžija…"
            }
          }, {
            "locale": "sv",
            "translations": {
              "{tag} (invisible)": "{tag} (osynlig)",
              "{tag} (restricted)": "{tag} (begränsad)",
              "Actions": "Åtgärder",
              "Activities": "Aktiviteter",
              "Animals & Nature": "Djur & Natur",
              "Avatar of {displayName}": "{displayName}s avatar",
              "Avatar of {displayName}, {status}": "{displayName}s avatar, {status}",
              "Cancel changes": "Avbryt ändringar",
              "Choose": "Välj",
              "Close": "Stäng",
              "Close navigation": "Stäng navigering",
              "Confirm changes": "Bekräfta ändringar",
              "Custom": "Anpassad",
              "Edit item": "Ändra",
              "External documentation for {title}": "Extern dokumentation för {title}",
              "Flags": "Flaggor",
              "Food & Drink": "Mat & Dryck",
              "Frequently used": "Används ofta",
              "Global": "Global",
              "Go back to the list": "Gå tillbaka till listan",
              "Message limit of {count} characters reached": "Meddelandegräns {count} tecken används",
              "Next": "Nästa",
              "No emoji found": "Hittade inga emojis",
              "No results": "Inga resultat",
              "Objects": "Objekt",
              "Open navigation": "Öppna navigering",
              "Pause slideshow": "Pausa bildspelet",
              "People & Body": "Kropp & Själ",
              "Pick an emoji": "Välj en emoji",
              "Please select a time zone:": "Välj tidszon:",
              "Previous": "Föregående",
              "Search": "Sök",
              "Search results": "Sökresultat",
              "Select a tag": "Välj en tag",
              "Settings": "Inställningar",
              "Settings navigation": "Inställningsmeny",
              "Smileys & Emotion": "Selfies & Känslor",
              "Start slideshow": "Starta bildspelet",
              "Submit": "Skicka",
              "Symbols": "Symboler",
              "Travel & Places": "Resor & Sevärdigheter",
              "Type to search time zone": "Skriv för att välja tidszon",
              "Unable to search the group": "Kunde inte söka i gruppen",
              "Undo changes": "Ångra ändringar",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Skriv meddelande, @ för att nämna någon, : för automatiska emojiförslag ..."
            }
          }, {
            "locale": "tr",
            "translations": {
              "{tag} (invisible)": "{tag} (görünmez)",
              "{tag} (restricted)": "{tag} (kısıtlı)",
              "Actions": "İşlemler",
              "Activities": "Etkinlikler",
              "Animals & Nature": "Hayvanlar ve Doğa",
              "Avatar of {displayName}": "{displayName} avatarı",
              "Avatar of {displayName}, {status}": "{displayName}, {status} avatarı",
              "Cancel changes": "Değişiklikleri iptal et",
              "Change title": "Başlığı değiştir",
              "Choose": "Seçin",
              "Clear text": "Metni temizle",
              "Close": "Kapat",
              "Close modal": "Üste açılan pencereyi kapat",
              "Close navigation": "Gezinmeyi kapat",
              "Close sidebar": "Yan çubuğu kapat",
              "Confirm changes": "Değişiklikleri onayla",
              "Custom": "Özel",
              "Edit item": "Ögeyi düzenle",
              "External documentation for {title}": "{title} için dış belgeler",
              "Favorite": "Sık kullanılanlara ekle",
              "Flags": "Bayraklar",
              "Food & Drink": "Yeme ve İçme",
              "Frequently used": "Sık kullanılanlar",
              "Global": "Evrensel",
              "Go back to the list": "Listeye dön",
              "Hide password": "Parolayı gizle",
              "items": "ögeler",
              "Message limit of {count} characters reached": "{count} karakter ileti sınırına ulaşıldı",
              "More {dashboardItemType} …": "Diğer {dashboardItemType} ögeleri…",
              "Next": "Sonraki",
              "No emoji found": "Herhangi bir emoji bulunamadı",
              "No results": "Herhangi bir sonuç bulunamadı",
              "Objects": "Nesneler",
              "Open": "Aç",
              "Open navigation": "Gezinmeyi aç",
              "Password is secure": "Parola güvenli",
              "Pause slideshow": "Slayt sunumunu duraklat",
              "People & Body": "İnsanlar ve Beden",
              "Pick an emoji": "Bir emoji seçin",
              "Please select a time zone:": "Lütfen bir saat dilimi seçin:",
              "Previous": "Önceki",
              "Search": "Arama",
              "Search results": "Arama sonuçları",
              "Select a tag": "Bir etiket seçin",
              "Settings": "Ayarlar",
              "Settings navigation": "Gezinme ayarları",
              "Show password": "Parolayı görüntüle",
              "Smileys & Emotion": "İfadeler ve Duygular",
              "Start slideshow": "Slayt sunumunu başlat",
              "Submit": "Gönder",
              "Symbols": "Simgeler",
              "Travel & Places": "Gezi ve Yerler",
              "Type to search time zone": "Saat dilimi aramak için yazmaya başlayın",
              "Unable to search the group": "Grupta arama yapılamadı",
              "Undo changes": "Değişiklikleri geri al",
              "Write message, @ to mention someone, : for emoji autocompletion …": "İleti yazın, birini anmak için @, otomatik emoji tamamlamak için : kullanın…"
            }
          }, {
            "locale": "uk",
            "translations": {
              "{tag} (invisible)": "{tag} (невидимий)",
              "{tag} (restricted)": "{tag} (обмежений)",
              "Actions": "Дії",
              "Activities": "Діяльність",
              "Animals & Nature": "Тварини та природа",
              "Avatar of {displayName}": "Аватар {displayName}",
              "Avatar of {displayName}, {status}": "Аватар {displayName}, {status}",
              "Cancel changes": "Скасувати зміни",
              "Change title": "Змінити назву",
              "Choose": "ВиберітьВиберіть",
              "Clear text": "Очистити текст",
              "Close": "Закрити",
              "Close modal": "Закрити модаль",
              "Close navigation": "Закрити навігацію",
              "Close sidebar": "Закрити бічну панель",
              "Confirm changes": "Підтвердити зміни",
              "Custom": "Власне",
              "Edit item": "Редагувати елемент",
              "External documentation for {title}": "Зовнішня документація для {title}",
              "Favorite": "Улюблений",
              "Flags": "Прапори",
              "Food & Drink": "Їжа та напої",
              "Frequently used": "Найчастіші",
              "Global": "Глобальний",
              "Go back to the list": "Повернутися до списку",
              "Hide password": "Приховати пароль",
              "items": "елементи",
              "Message limit of {count} characters reached": "Вичерпано ліміт у {count} символів для повідомлення",
              "More {dashboardItemType} …": "Більше {dashboardItemType}…",
              "Next": "Вперед",
              "No emoji found": "Емоційки відсутні",
              "No results": "Відсутні результати",
              "Objects": "Об'єкти",
              "Open": "Відкрити",
              "Open navigation": "Відкрити навігацію",
              "Password is secure": "Пароль безпечний",
              "Pause slideshow": "Пауза у показі слайдів",
              "People & Body": "Люди та жести",
              "Pick an emoji": "Виберіть емоційку",
              "Please select a time zone:": "Виберіть часовий пояс:",
              "Previous": "Назад",
              "Search": "Пошук",
              "Search results": "Результати пошуку",
              "Select a tag": "Виберіть позначку",
              "Settings": "Налаштування",
              "Settings navigation": "Навігація у налаштуваннях",
              "Show password": "Показати пароль",
              "Smileys & Emotion": "Смайли та емоції",
              "Start slideshow": "Почати показ слайдів",
              "Submit": "Надіслати",
              "Symbols": "Символи",
              "Travel & Places": "Поїздки та місця",
              "Type to search time zone": "Введіть для пошуку часовий пояс",
              "Unable to search the group": "Неможливо шукати в групі",
              "Undo changes": "Скасувати зміни",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Напишіть повідомлення, @, щоб згадати когось, : для автозаповнення емодзі…"
            }
          }, {
            "locale": "zh_CN",
            "translations": {
              "{tag} (invisible)": "{tag} （不可见）",
              "{tag} (restricted)": "{tag} （受限）",
              "Actions": "行为",
              "Activities": "活动",
              "Animals & Nature": "动物 & 自然",
              "Avatar of {displayName}": "{displayName}的头像",
              "Avatar of {displayName}, {status}": "{displayName}的头像，{status}",
              "Cancel changes": "取消更改",
              "Choose": "选择",
              "Close": "关闭",
              "Close navigation": "关闭导航",
              "Confirm changes": "确认更改",
              "Custom": "自定义",
              "Edit item": "编辑项目",
              "External documentation for {title}": "{title}的外部文档",
              "Flags": "旗帜",
              "Food & Drink": "食物 & 饮品",
              "Frequently used": "经常使用",
              "Global": "全局",
              "Go back to the list": "返回至列表",
              "Message limit of {count} characters reached": "已达到 {count} 个字符的消息限制",
              "Next": "下一个",
              "No emoji found": "表情未找到",
              "No results": "无结果",
              "Objects": "物体",
              "Open navigation": "开启导航",
              "Pause slideshow": "暂停幻灯片",
              "People & Body": "人 & 身体",
              "Pick an emoji": "选择一个表情",
              "Please select a time zone:": "请选择一个时区：",
              "Previous": "上一个",
              "Search": "搜索",
              "Search results": "搜索结果",
              "Select a tag": "选择一个标签",
              "Settings": "设置",
              "Settings navigation": "设置向导",
              "Smileys & Emotion": "笑脸 & 情感",
              "Start slideshow": "开始幻灯片",
              "Submit": "提交",
              "Symbols": "符号",
              "Travel & Places": "旅游 & 地点",
              "Type to search time zone": "打字以搜索时区",
              "Unable to search the group": "无法搜索分组",
              "Undo changes": "撤销更改",
              "Write message, @ to mention someone, : for emoji autocompletion …": "写信息，@ 提到某人，: 用于表情符号自动完成 ..."
            }
          }, {
            "locale": "zh_HK",
            "translations": {
              "{tag} (invisible)": "{tag} (隱藏)",
              "{tag} (restricted)": "{tag} (受限)",
              "Actions": "動作",
              "Activities": "活動",
              "Animals & Nature": "動物與自然",
              "Avatar of {displayName}": "{displayName} 的頭像",
              "Avatar of {displayName}, {status}": "{displayName} 的頭像，{status}",
              "Cancel changes": "取消更改",
              "Choose": "選擇",
              "Close": "關閉",
              "Close modal": "關閉模態",
              "Close navigation": "關閉導航",
              "Confirm changes": "確認更改",
              "Custom": "自定義",
              "Edit item": "編輯項目",
              "External documentation for {title}": "{title} 的外部文檔",
              "Flags": "旗幟",
              "Food & Drink": "食物與飲料",
              "Frequently used": "經常使用",
              "Global": "全球的",
              "Go back to the list": "返回清單",
              "items": "項目",
              "Message limit of {count} characters reached": "已達到訊息最多 {count} 字元限制",
              "More {dashboardItemType} …": "更多 {dashboardItemType} …",
              "Next": "下一個",
              "No emoji found": "未找到表情符號",
              "No results": "無結果",
              "Objects": "物件",
              "Open navigation": "開啟導航",
              "Pause slideshow": "暫停幻燈片",
              "People & Body": "人物",
              "Pick an emoji": "選擇表情符號",
              "Please select a time zone:": "請選擇時區：",
              "Previous": "上一個",
              "Search": "搜尋",
              "Search results": "搜尋結果",
              "Select a tag": "選擇標籤",
              "Settings": "設定",
              "Settings navigation": "設定值導覽",
              "Smileys & Emotion": "表情",
              "Start slideshow": "開始幻燈片",
              "Submit": "提交",
              "Symbols": "標誌",
              "Travel & Places": "旅遊與景點",
              "Type to search time zone": "鍵入以搜索時區",
              "Unable to search the group": "無法搜尋群組",
              "Undo changes": "取消更改",
              "Write message, @ to mention someone, : for emoji autocompletion …": "寫訊息，使用 @ 來指代某人，使用：用於表情符號自動填充 ..."
            }
          }, {
            "locale": "zh_TW",
            "translations": {
              "{tag} (invisible)": "{tag} (隱藏)",
              "{tag} (restricted)": "{tag} (受限)",
              "Actions": "動作",
              "Activities": "活動",
              "Animals & Nature": "動物與自然",
              "Choose": "選擇",
              "Close": "關閉",
              "Custom": "自定義",
              "Flags": "旗幟",
              "Food & Drink": "食物與飲料",
              "Frequently used": "最近使用",
              "Message limit of {count} characters reached": "已達到訊息最多 {count} 字元限制",
              "Next": "下一個",
              "No emoji found": "未找到表情符號",
              "No results": "無結果",
              "Objects": "物件",
              "Pause slideshow": "暫停幻燈片",
              "People & Body": "人物",
              "Pick an emoji": "選擇表情符號",
              "Previous": "上一個",
              "Search": "搜尋",
              "Search results": "搜尋結果",
              "Select a tag": "選擇標籤",
              "Settings": "設定",
              "Settings navigation": "設定值導覽",
              "Smileys & Emotion": "表情",
              "Start slideshow": "開始幻燈片",
              "Symbols": "標誌",
              "Travel & Places": "旅遊與景點",
              "Unable to search the group": "無法搜尋群組",
              "Write message, @ to mention someone …": "輸入訊息時可使用 @ 來標示某人..."
            }
          }].forEach(function (lang) {
            var translations = {};

            for (var key in lang.translations) {
              // Plural
              if (lang.translations[key].pluralId) {
                translations[key] = {
                  msgid: key,
                  msgid_plural: lang.translations[key].pluralId,
                  msgstr: lang.translations[key].msgstr
                };
                continue;
              } // Singular


              translations[key] = {
                msgid: key,
                msgstr: [lang.translations[key]]
              };
            }

            gtBuilder.addTranslation(lang.locale, {
              translations: {
                '': translations
              }
            });
          });
          var gt = gtBuilder.build();

          var _n = gt.ngettext.bind(gt);

          var _t = gt.gettext.bind(gt);
          /***/

        },

        /***/
        "./src/mixins/l10n.js":
        /*!****************************!*\
          !*** ./src/mixins/l10n.js ***!
          \****************************/

        /***/
        function srcMixinsL10nJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_129597__) {
          "use strict";

          __nested_webpack_require_129597__.r(__webpack_exports__);
          /* harmony import */


          var _l10n_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_129597__(
          /*! ../l10n.js */
          "./src/l10n.js");
          /* harmony default export */


          __webpack_exports__["default"] = {
            methods: {
              n: _l10n_js__WEBPACK_IMPORTED_MODULE_0__.n,
              t: _l10n_js__WEBPACK_IMPORTED_MODULE_0__.t
            }
          };
          /***/
        },

        /***/
        "./src/utils/GenRandomId.js":
        /*!**********************************!*\
          !*** ./src/utils/GenRandomId.js ***!
          \**********************************/

        /***/
        function srcUtilsGenRandomIdJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_130437__) {
          "use strict";

          __nested_webpack_require_130437__.r(__webpack_exports__);
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


          var GenRandomId = function GenRandomId(length) {
            return Math.random().toString(36).replace(/[^a-z]+/g, '').slice(0, length || 5);
          };
          /* harmony default export */


          __webpack_exports__["default"] = GenRandomId;
          /***/
        },

        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=style&index=0&id=99d12602&lang=scss&scoped=true&":
        /*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=style&index=0&id=99d12602&lang=scss&scoped=true& ***!
          \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcCheckboxRadioSwitchNcCheckboxRadioSwitchVueVueTypeStyleIndex0Id99d12602LangScssScopedTrue(module, __webpack_exports__, __nested_webpack_require_133874__) {
          "use strict";

          __nested_webpack_require_133874__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_133874__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_133874__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_133874__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_133874__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__); // Imports


          var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()); // Module


          ___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-99d12602] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.checkbox-radio-switch[data-v-99d12602] {\n  display: flex;\n}\n.checkbox-radio-switch__input[data-v-99d12602] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0 !important;\n  width: var(--icon-size);\n  height: var(--icon-size);\n}\n.checkbox-radio-switch__label[data-v-99d12602] {\n  display: flex;\n  position: relative;\n  align-items: center;\n  user-select: none;\n  height: 44px;\n  border-radius: 44px;\n  padding: 0 14px;\n  margin: 0 -14px;\n}\n.checkbox-radio-switch__label[data-v-99d12602], .checkbox-radio-switch__label *[data-v-99d12602] {\n  cursor: pointer;\n}\n.checkbox-radio-switch__icon[data-v-99d12602] {\n  margin-right: 4px;\n  margin-left: -2px;\n  color: var(--color-primary-element);\n  width: var(--icon-size);\n  height: var(--icon-size);\n}\n.checkbox-radio-switch--disabled .checkbox-radio-switch__label[data-v-99d12602] {\n  opacity: 0.5;\n}\n.checkbox-radio-switch--disabled .checkbox-radio-switch__label .checkbox-radio-switch__icon[data-v-99d12602] {\n  color: var(--color-text-light);\n}\n.checkbox-radio-switch:not(.checkbox-radio-switch--disabled) .checkbox-radio-switch__label[data-v-99d12602]:hover, .checkbox-radio-switch:not(.checkbox-radio-switch--disabled) .checkbox-radio-switch__label[data-v-99d12602]:focus-within {\n  background-color: var(--color-primary-light);\n}\n.checkbox-radio-switch-switch:not(.checkbox-radio-switch--checked) .checkbox-radio-switch__icon[data-v-99d12602] {\n  color: var(--color-text-lighter);\n}\n.checkbox-radio-switch-switch.checkbox-radio-switch--disabled.checkbox-radio-switch--checked .checkbox-radio-switch__icon[data-v-99d12602] {\n  color: var(--color-primary-element-light);\n}\n.checkbox-radio-switch--button-variant .checkbox-radio-switch__label[data-v-99d12602] {\n  border-radius: 0;\n  width: 100%;\n  margin: 0;\n}\n.checkbox-radio-switch--button-variant[data-v-99d12602]:not(.checkbox-radio-switch--button-variant-v-grouped):not(.checkbox-radio-switch--button-variant-h-grouped) {\n  border-radius: var(--border-radius-large);\n}\n.checkbox-radio-switch--button-variant-v-grouped[data-v-99d12602]:first-of-type {\n  border-top-left-radius: var(--border-radius-large);\n  border-top-right-radius: var(--border-radius-large);\n}\n.checkbox-radio-switch--button-variant-v-grouped[data-v-99d12602]:last-of-type {\n  border-bottom-left-radius: var(--border-radius-large);\n  border-bottom-right-radius: var(--border-radius-large);\n}\n.checkbox-radio-switch--button-variant-v-grouped + .checkbox-radio-switch--button-variant-v-grouped[data-v-99d12602]:not(.checkbox-radio-switch--button-variant-v-grouped.checkbox-radio-switch--checked) {\n  border-top: 0;\n}\n.checkbox-radio-switch--button-variant-v-grouped + .checkbox-radio-switch--button-variant-v-grouped.checkbox-radio-switch--checked[data-v-99d12602] {\n  margin-top: -2px;\n}\n.checkbox-radio-switch--button-variant-h-grouped[data-v-99d12602]:first-of-type {\n  border-top-left-radius: var(--border-radius-large);\n  border-bottom-left-radius: var(--border-radius-large);\n}\n.checkbox-radio-switch--button-variant-h-grouped[data-v-99d12602]:last-of-type {\n  border-top-right-radius: var(--border-radius-large);\n  border-bottom-right-radius: var(--border-radius-large);\n}\n.checkbox-radio-switch--button-variant-h-grouped + .checkbox-radio-switch--button-variant-h-grouped[data-v-99d12602]:not(.checkbox-radio-switch--button-variant-h-grouped.checkbox-radio-switch--checked) {\n  border-left: 0;\n}\n.checkbox-radio-switch--button-variant-h-grouped + .checkbox-radio-switch--button-variant-h-grouped.checkbox-radio-switch--checked[data-v-99d12602] {\n  margin-left: -2px;\n}\n.checkbox-radio-switch--button-variant.checkbox-radio-switch[data-v-99d12602] {\n  border: 2px solid var(--color-border-dark);\n  overflow: hidden;\n}\n.checkbox-radio-switch--button-variant.checkbox-radio-switch--checked[data-v-99d12602] {\n  font-weight: bold;\n  border: 2px solid var(--color-primary-element-light);\n}\n.checkbox-radio-switch--button-variant.checkbox-radio-switch--checked[data-v-99d12602]:hover {\n  border: 2px solid var(--color-primary);\n}\n.checkbox-radio-switch--button-variant.checkbox-radio-switch--checked label[data-v-99d12602] {\n  background-color: var(--color-background-dark);\n}", ""]); // Exports

          /* harmony default export */


          __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
          /***/
        },

        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=style&index=0&id=fe92815e&lang=scss&scoped=true&":
        /*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=style&index=0&id=fe92815e&lang=scss&scoped=true& ***!
          \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcLoadingIconNcLoadingIconVueVueTypeStyleIndex0IdFe92815eLangScssScopedTrue(module, __webpack_exports__, __nested_webpack_require_142791__) {
          "use strict";

          __nested_webpack_require_142791__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_142791__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_142791__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_142791__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_142791__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__); // Imports


          var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()); // Module


          ___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-fe92815e] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.loading-icon svg[data-v-fe92815e] {\n  animation: rotate var(--animation-duration, 0.8s) linear infinite;\n}", ""]); // Exports

          /* harmony default export */


          __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
          /***/
        },

        /***/
        "./node_modules/css-loader/dist/runtime/api.js":
        /*!*****************************************************!*\
          !*** ./node_modules/css-loader/dist/runtime/api.js ***!
          \*****************************************************/

        /***/
        function node_modulesCssLoaderDistRuntimeApiJs(module) {
          "use strict";
          /*
            MIT License http://www.opensource.org/licenses/mit-license.php
            Author Tobias Koppers @sokra
          */

          module.exports = function (cssWithMappingToString) {
            var list = []; // return the list of modules as css string

            list.toString = function toString() {
              return this.map(function (item) {
                var content = "";
                var needLayer = typeof item[5] !== "undefined";

                if (item[4]) {
                  content += "@supports (".concat(item[4], ") {");
                }

                if (item[2]) {
                  content += "@media ".concat(item[2], " {");
                }

                if (needLayer) {
                  content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
                }

                content += cssWithMappingToString(item);

                if (needLayer) {
                  content += "}";
                }

                if (item[2]) {
                  content += "}";
                }

                if (item[4]) {
                  content += "}";
                }

                return content;
              }).join("");
            }; // import a list of modules into the list


            list.i = function i(modules, media, dedupe, supports, layer) {
              if (typeof modules === "string") {
                modules = [[null, modules, undefined]];
              }

              var alreadyImportedModules = {};

              if (dedupe) {
                for (var k = 0; k < this.length; k++) {
                  var id = this[k][0];

                  if (id != null) {
                    alreadyImportedModules[id] = true;
                  }
                }
              }

              for (var _k = 0; _k < modules.length; _k++) {
                var item = [].concat(modules[_k]);

                if (dedupe && alreadyImportedModules[item[0]]) {
                  continue;
                }

                if (typeof layer !== "undefined") {
                  if (typeof item[5] === "undefined") {
                    item[5] = layer;
                  } else {
                    item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
                    item[5] = layer;
                  }
                }

                if (media) {
                  if (!item[2]) {
                    item[2] = media;
                  } else {
                    item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
                    item[2] = media;
                  }
                }

                if (supports) {
                  if (!item[4]) {
                    item[4] = "".concat(supports);
                  } else {
                    item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
                    item[4] = supports;
                  }
                }

                list.push(item);
              }
            };

            return list;
          };
          /***/

        },

        /***/
        "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
        /*!**************************************************************!*\
          !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
          \**************************************************************/

        /***/
        function node_modulesCssLoaderDistRuntimeNoSourceMapsJs(module) {
          "use strict";

          module.exports = function (i) {
            return i[1];
          };
          /***/

        },

        /***/
        "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=style&index=0&id=99d12602&lang=scss&scoped=true&":
        /*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=style&index=0&id=99d12602&lang=scss&scoped=true& ***!
          \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesStyleLoaderDistCjsJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcCheckboxRadioSwitchNcCheckboxRadioSwitchVueVueTypeStyleIndex0Id99d12602LangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_151893__) {
          "use strict";

          __nested_webpack_require_151893__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_151893__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_151893__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_151893__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_151893__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_151893__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_151893__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_151893__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_151893__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_151893__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_151893__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_151893__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_151893__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcCheckboxRadioSwitch_vue_vue_type_style_index_0_id_99d12602_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_151893__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcCheckboxRadioSwitch.vue?vue&type=style&index=0&id=99d12602&lang=scss&scoped=true& */
          "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=style&index=0&id=99d12602&lang=scss&scoped=true&");

          var options = {};
          options.styleTagTransform = _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
          options.setAttributes = _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
          options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
          options.domAPI = _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
          options.insertStyleElement = _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

          var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcCheckboxRadioSwitch_vue_vue_type_style_index_0_id_99d12602_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcCheckboxRadioSwitch_vue_vue_type_style_index_0_id_99d12602_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcCheckboxRadioSwitch_vue_vue_type_style_index_0_id_99d12602_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcCheckboxRadioSwitch_vue_vue_type_style_index_0_id_99d12602_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined;
          /***/
        },

        /***/
        "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=style&index=0&id=fe92815e&lang=scss&scoped=true&":
        /*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=style&index=0&id=fe92815e&lang=scss&scoped=true& ***!
          \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesStyleLoaderDistCjsJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcLoadingIconNcLoadingIconVueVueTypeStyleIndex0IdFe92815eLangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_161497__) {
          "use strict";

          __nested_webpack_require_161497__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_161497__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_161497__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_161497__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_161497__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_161497__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_161497__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_161497__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_161497__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_161497__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_161497__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_161497__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_161497__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcLoadingIcon_vue_vue_type_style_index_0_id_fe92815e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_161497__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcLoadingIcon.vue?vue&type=style&index=0&id=fe92815e&lang=scss&scoped=true& */
          "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=style&index=0&id=fe92815e&lang=scss&scoped=true&");

          var options = {};
          options.styleTagTransform = _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
          options.setAttributes = _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
          options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
          options.domAPI = _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
          options.insertStyleElement = _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

          var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcLoadingIcon_vue_vue_type_style_index_0_id_fe92815e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcLoadingIcon_vue_vue_type_style_index_0_id_fe92815e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcLoadingIcon_vue_vue_type_style_index_0_id_fe92815e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcLoadingIcon_vue_vue_type_style_index_0_id_fe92815e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined;
          /***/
        },

        /***/
        "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
        /*!****************************************************************************!*\
          !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
          \****************************************************************************/

        /***/
        function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module) {
          "use strict";

          var stylesInDOM = [];

          function getIndexByIdentifier(identifier) {
            var result = -1;

            for (var i = 0; i < stylesInDOM.length; i++) {
              if (stylesInDOM[i].identifier === identifier) {
                result = i;
                break;
              }
            }

            return result;
          }

          function modulesToDom(list, options) {
            var idCountMap = {};
            var identifiers = [];

            for (var i = 0; i < list.length; i++) {
              var item = list[i];
              var id = options.base ? item[0] + options.base : item[0];
              var count = idCountMap[id] || 0;
              var identifier = "".concat(id, " ").concat(count);
              idCountMap[id] = count + 1;
              var indexByIdentifier = getIndexByIdentifier(identifier);
              var obj = {
                css: item[1],
                media: item[2],
                sourceMap: item[3],
                supports: item[4],
                layer: item[5]
              };

              if (indexByIdentifier !== -1) {
                stylesInDOM[indexByIdentifier].references++;
                stylesInDOM[indexByIdentifier].updater(obj);
              } else {
                var updater = addElementStyle(obj, options);
                options.byIndex = i;
                stylesInDOM.splice(i, 0, {
                  identifier: identifier,
                  updater: updater,
                  references: 1
                });
              }

              identifiers.push(identifier);
            }

            return identifiers;
          }

          function addElementStyle(obj, options) {
            var api = options.domAPI(options);
            api.update(obj);

            var updater = function updater(newObj) {
              if (newObj) {
                if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
                  return;
                }

                api.update(obj = newObj);
              } else {
                api.remove();
              }
            };

            return updater;
          }

          module.exports = function (list, options) {
            options = options || {};
            list = list || [];
            var lastIdentifiers = modulesToDom(list, options);
            return function update(newList) {
              newList = newList || [];

              for (var i = 0; i < lastIdentifiers.length; i++) {
                var identifier = lastIdentifiers[i];
                var index = getIndexByIdentifier(identifier);
                stylesInDOM[index].references--;
              }

              var newLastIdentifiers = modulesToDom(newList, options);

              for (var _i = 0; _i < lastIdentifiers.length; _i++) {
                var _identifier = lastIdentifiers[_i];

                var _index = getIndexByIdentifier(_identifier);

                if (stylesInDOM[_index].references === 0) {
                  stylesInDOM[_index].updater();

                  stylesInDOM.splice(_index, 1);
                }
              }

              lastIdentifiers = newLastIdentifiers;
            };
          };
          /***/

        },

        /***/
        "./node_modules/style-loader/dist/runtime/insertBySelector.js":
        /*!********************************************************************!*\
          !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
          \********************************************************************/

        /***/
        function node_modulesStyleLoaderDistRuntimeInsertBySelectorJs(module) {
          "use strict";

          var memo = {};
          /* istanbul ignore next  */

          function getTarget(target) {
            if (typeof memo[target] === "undefined") {
              var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

              if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                try {
                  // This will throw an exception if access to iframe is blocked
                  // due to cross-origin restrictions
                  styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                  // istanbul ignore next
                  styleTarget = null;
                }
              }

              memo[target] = styleTarget;
            }

            return memo[target];
          }
          /* istanbul ignore next  */


          function insertBySelector(insert, style) {
            var target = getTarget(insert);

            if (!target) {
              throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            }

            target.appendChild(style);
          }

          module.exports = insertBySelector;
          /***/
        },

        /***/
        "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
        /*!**********************************************************************!*\
          !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
          \**********************************************************************/

        /***/
        function node_modulesStyleLoaderDistRuntimeInsertStyleElementJs(module) {
          "use strict";
          /* istanbul ignore next  */

          function insertStyleElement(options) {
            var element = document.createElement("style");
            options.setAttributes(element, options.attributes);
            options.insert(element, options.options);
            return element;
          }

          module.exports = insertStyleElement;
          /***/
        },

        /***/
        "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
        /*!**********************************************************************************!*\
          !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
          \**********************************************************************************/

        /***/
        function node_modulesStyleLoaderDistRuntimeSetAttributesWithoutAttributesJs(module, __unused_webpack_exports, __nested_webpack_require_175851__) {
          "use strict";
          /* istanbul ignore next  */

          function setAttributesWithoutAttributes(styleElement) {
            var nonce =  true ? __nested_webpack_require_175851__.nc : 0;

            if (nonce) {
              styleElement.setAttribute("nonce", nonce);
            }
          }

          module.exports = setAttributesWithoutAttributes;
          /***/
        },

        /***/
        "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
        /*!***************************************************************!*\
          !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
          \***************************************************************/

        /***/
        function node_modulesStyleLoaderDistRuntimeStyleDomAPIJs(module) {
          "use strict";
          /* istanbul ignore next  */

          function apply(styleElement, options, obj) {
            var css = "";

            if (obj.supports) {
              css += "@supports (".concat(obj.supports, ") {");
            }

            if (obj.media) {
              css += "@media ".concat(obj.media, " {");
            }

            var needLayer = typeof obj.layer !== "undefined";

            if (needLayer) {
              css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
            }

            css += obj.css;

            if (needLayer) {
              css += "}";
            }

            if (obj.media) {
              css += "}";
            }

            if (obj.supports) {
              css += "}";
            }

            var sourceMap = obj.sourceMap;

            if (sourceMap && typeof btoa !== "undefined") {
              css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
            } // For old IE

            /* istanbul ignore if  */


            options.styleTagTransform(css, styleElement, options.options);
          }

          function removeStyleElement(styleElement) {
            // istanbul ignore if
            if (styleElement.parentNode === null) {
              return false;
            }

            styleElement.parentNode.removeChild(styleElement);
          }
          /* istanbul ignore next  */


          function domAPI(options) {
            var styleElement = options.insertStyleElement(options);
            return {
              update: function update(obj) {
                apply(styleElement, options, obj);
              },
              remove: function remove() {
                removeStyleElement(styleElement);
              }
            };
          }

          module.exports = domAPI;
          /***/
        },

        /***/
        "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
        /*!*********************************************************************!*\
          !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
          \*********************************************************************/

        /***/
        function node_modulesStyleLoaderDistRuntimeStyleTagTransformJs(module) {
          "use strict";
          /* istanbul ignore next  */

          function styleTagTransform(css, styleElement) {
            if (styleElement.styleSheet) {
              styleElement.styleSheet.cssText = css;
            } else {
              while (styleElement.firstChild) {
                styleElement.removeChild(styleElement.firstChild);
              }

              styleElement.appendChild(document.createTextNode(css));
            }
          }

          module.exports = styleTagTransform;
          /***/
        },

        /***/
        "./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue":
        /*!************************************************************************!*\
          !*** ./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue ***!
          \************************************************************************/

        /***/
        function srcComponentsNcCheckboxRadioSwitchNcCheckboxRadioSwitchVue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_180067__) {
          "use strict";

          __nested_webpack_require_180067__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_180067__.d(__webpack_exports__, {
            /* harmony export */
            "TYPE_CHECKBOX": function TYPE_CHECKBOX() {
              return (
                /* reexport safe */
                _NcCheckboxRadioSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.TYPE_CHECKBOX
              );
            },

            /* harmony export */
            "TYPE_RADIO": function TYPE_RADIO() {
              return (
                /* reexport safe */
                _NcCheckboxRadioSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.TYPE_RADIO
              );
            },

            /* harmony export */
            "TYPE_SWITCH": function TYPE_SWITCH() {
              return (
                /* reexport safe */
                _NcCheckboxRadioSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.TYPE_SWITCH
              );
            }
            /* harmony export */

          });
          /* harmony import */


          var _NcCheckboxRadioSwitch_vue_vue_type_template_id_99d12602_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_180067__(
          /*! ./NcCheckboxRadioSwitch.vue?vue&type=template&id=99d12602&scoped=true& */
          "./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=template&id=99d12602&scoped=true&");
          /* harmony import */


          var _NcCheckboxRadioSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_180067__(
          /*! ./NcCheckboxRadioSwitch.vue?vue&type=script&lang=js& */
          "./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=script&lang=js&");
          /* harmony import */


          var _NcCheckboxRadioSwitch_vue_vue_type_style_index_0_id_99d12602_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_180067__(
          /*! ./NcCheckboxRadioSwitch.vue?vue&type=style&index=0&id=99d12602&lang=scss&scoped=true& */
          "./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=style&index=0&id=99d12602&lang=scss&scoped=true&");
          /* harmony import */


          var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_180067__(
          /*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
          "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
          /* harmony import */


          var _NcCheckboxRadioSwitch_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_180067__(
          /*! ./NcCheckboxRadioSwitch.vue?vue&type=custom&index=0&blockType=docs */
          "./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=custom&index=0&blockType=docs");
          /* harmony import */


          var _NcCheckboxRadioSwitch_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_180067__.n(_NcCheckboxRadioSwitch_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__);

          ;
          /* normalize component */

          var component = (0, _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_NcCheckboxRadioSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _NcCheckboxRadioSwitch_vue_vue_type_template_id_99d12602_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render, _NcCheckboxRadioSwitch_vue_vue_type_template_id_99d12602_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns, false, null, "99d12602", null)
          /* custom blocks */
          ;
          if (typeof _NcCheckboxRadioSwitch_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default() === 'function') _NcCheckboxRadioSwitch_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default()(component);
          /* hot reload */

          if (false) { var api; }

          component.options.__file = "src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue";
          /* harmony default export */

          __webpack_exports__["default"] = component.exports;
          /***/
        },

        /***/
        "./src/components/NcLoadingIcon/NcLoadingIcon.vue":
        /*!********************************************************!*\
          !*** ./src/components/NcLoadingIcon/NcLoadingIcon.vue ***!
          \********************************************************/

        /***/
        function srcComponentsNcLoadingIconNcLoadingIconVue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_184814__) {
          "use strict";

          __nested_webpack_require_184814__.r(__webpack_exports__);
          /* harmony import */


          var _NcLoadingIcon_vue_vue_type_template_id_fe92815e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_184814__(
          /*! ./NcLoadingIcon.vue?vue&type=template&id=fe92815e&scoped=true& */
          "./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=template&id=fe92815e&scoped=true&");
          /* harmony import */


          var _NcLoadingIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_184814__(
          /*! ./NcLoadingIcon.vue?vue&type=script&lang=js& */
          "./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=script&lang=js&");
          /* harmony import */


          var _NcLoadingIcon_vue_vue_type_style_index_0_id_fe92815e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_184814__(
          /*! ./NcLoadingIcon.vue?vue&type=style&index=0&id=fe92815e&lang=scss&scoped=true& */
          "./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=style&index=0&id=fe92815e&lang=scss&scoped=true&");
          /* harmony import */


          var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_184814__(
          /*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
          "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
          /* harmony import */


          var _NcLoadingIcon_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_184814__(
          /*! ./NcLoadingIcon.vue?vue&type=custom&index=0&blockType=docs */
          "./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=custom&index=0&blockType=docs");
          /* harmony import */


          var _NcLoadingIcon_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_184814__.n(_NcLoadingIcon_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__);

          ;
          /* normalize component */

          var component = (0, _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_NcLoadingIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _NcLoadingIcon_vue_vue_type_template_id_fe92815e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render, _NcLoadingIcon_vue_vue_type_template_id_fe92815e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns, false, null, "fe92815e", null)
          /* custom blocks */
          ;
          if (typeof _NcLoadingIcon_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default() === 'function') _NcLoadingIcon_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default()(component);
          /* hot reload */

          if (false) { var api; }

          component.options.__file = "src/components/NcLoadingIcon/NcLoadingIcon.vue";
          /* harmony default export */

          __webpack_exports__["default"] = component.exports;
          /***/
        },

        /***/
        "./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=script&lang=js&":
        /*!*************************************************************************************************!*\
          !*** ./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=script&lang=js& ***!
          \*************************************************************************************************/

        /***/
        function srcComponentsNcCheckboxRadioSwitchNcCheckboxRadioSwitchVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_188565__) {
          "use strict";

          __nested_webpack_require_188565__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_188565__.d(__webpack_exports__, {
            /* harmony export */
            "TYPE_CHECKBOX": function TYPE_CHECKBOX() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcCheckboxRadioSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.TYPE_CHECKBOX
              );
            },

            /* harmony export */
            "TYPE_RADIO": function TYPE_RADIO() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcCheckboxRadioSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.TYPE_RADIO
              );
            },

            /* harmony export */
            "TYPE_SWITCH": function TYPE_SWITCH() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcCheckboxRadioSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.TYPE_SWITCH
              );
            }
            /* harmony export */

          });
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcCheckboxRadioSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_188565__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcCheckboxRadioSwitch.vue?vue&type=script&lang=js& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=script&lang=js&");
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcCheckboxRadioSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
          /***/
        },

        /***/
        "./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=script&lang=js&":
        /*!*********************************************************************************!*\
          !*** ./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=script&lang=js& ***!
          \*********************************************************************************/

        /***/
        function srcComponentsNcLoadingIconNcLoadingIconVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_191406__) {
          "use strict";

          __nested_webpack_require_191406__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcLoadingIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_191406__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcLoadingIcon.vue?vue&type=script&lang=js& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=script&lang=js&");
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcLoadingIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
          /***/
        },

        /***/
        "./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=template&id=99d12602&scoped=true&":
        /*!*******************************************************************************************************************!*\
          !*** ./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=template&id=99d12602&scoped=true& ***!
          \*******************************************************************************************************************/

        /***/
        function srcComponentsNcCheckboxRadioSwitchNcCheckboxRadioSwitchVueVueTypeTemplateId99d12602ScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_193095__) {
          "use strict";

          __nested_webpack_require_193095__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_193095__.d(__webpack_exports__, {
            /* harmony export */
            "render": function render() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcCheckboxRadioSwitch_vue_vue_type_template_id_99d12602_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render
              );
            },

            /* harmony export */
            "staticRenderFns": function staticRenderFns() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcCheckboxRadioSwitch_vue_vue_type_template_id_99d12602_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
              );
            }
            /* harmony export */

          });
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcCheckboxRadioSwitch_vue_vue_type_template_id_99d12602_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_193095__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcCheckboxRadioSwitch.vue?vue&type=template&id=99d12602&scoped=true& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=template&id=99d12602&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=template&id=fe92815e&scoped=true&":
        /*!***************************************************************************************************!*\
          !*** ./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=template&id=fe92815e&scoped=true& ***!
          \***************************************************************************************************/

        /***/
        function srcComponentsNcLoadingIconNcLoadingIconVueVueTypeTemplateIdFe92815eScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_195833__) {
          "use strict";

          __nested_webpack_require_195833__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_195833__.d(__webpack_exports__, {
            /* harmony export */
            "render": function render() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcLoadingIcon_vue_vue_type_template_id_fe92815e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render
              );
            },

            /* harmony export */
            "staticRenderFns": function staticRenderFns() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcLoadingIcon_vue_vue_type_template_id_fe92815e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
              );
            }
            /* harmony export */

          });
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcLoadingIcon_vue_vue_type_template_id_fe92815e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_195833__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcLoadingIcon.vue?vue&type=template&id=fe92815e&scoped=true& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=template&id=fe92815e&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=style&index=0&id=99d12602&lang=scss&scoped=true&":
        /*!**********************************************************************************************************************************!*\
          !*** ./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=style&index=0&id=99d12602&lang=scss&scoped=true& ***!
          \**********************************************************************************************************************************/

        /***/
        function srcComponentsNcCheckboxRadioSwitchNcCheckboxRadioSwitchVueVueTypeStyleIndex0Id99d12602LangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_198674__) {
          "use strict";

          __nested_webpack_require_198674__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcCheckboxRadioSwitch_vue_vue_type_style_index_0_id_99d12602_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_198674__(
          /*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcCheckboxRadioSwitch.vue?vue&type=style&index=0&id=99d12602&lang=scss&scoped=true& */
          "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=style&index=0&id=99d12602&lang=scss&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=style&index=0&id=fe92815e&lang=scss&scoped=true&":
        /*!******************************************************************************************************************!*\
          !*** ./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=style&index=0&id=fe92815e&lang=scss&scoped=true& ***!
          \******************************************************************************************************************/

        /***/
        function srcComponentsNcLoadingIconNcLoadingIconVueVueTypeStyleIndex0IdFe92815eLangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_200840__) {
          "use strict";

          __nested_webpack_require_200840__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcLoadingIcon_vue_vue_type_style_index_0_id_fe92815e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_200840__(
          /*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcLoadingIcon.vue?vue&type=style&index=0&id=fe92815e&lang=scss&scoped=true& */
          "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=style&index=0&id=fe92815e&lang=scss&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=custom&index=0&blockType=docs":
        /*!***************************************************************************************************************!*\
          !*** ./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue?vue&type=custom&index=0&blockType=docs ***!
          \***************************************************************************************************************/

        /***/
        function srcComponentsNcCheckboxRadioSwitchNcCheckboxRadioSwitchVueVueTypeCustomIndex0BlockTypeDocs() {
          /***/
        },

        /***/
        "./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=custom&index=0&blockType=docs":
        /*!***********************************************************************************************!*\
          !*** ./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=custom&index=0&blockType=docs ***!
          \***********************************************************************************************/

        /***/
        function srcComponentsNcLoadingIconNcLoadingIconVueVueTypeCustomIndex0BlockTypeDocs() {
          /***/
        },

        /***/
        "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
        /*!********************************************************************!*\
          !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
          \********************************************************************/

        /***/
        function node_modulesVueLoaderLibRuntimeComponentNormalizerJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_203990__) {
          "use strict";

          __nested_webpack_require_203990__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_203990__.d(__webpack_exports__, {
            /* harmony export */
            "default": function _default() {
              return (
                /* binding */
                normalizeComponent
              );
            }
            /* harmony export */

          });
          /* globals __VUE_SSR_CONTEXT__ */
          // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
          // This module is a runtime utility for cleaner component module output and will
          // be included in the final webpack user bundle.


          function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier
          /* server only */
          , shadowMode
          /* vue-cli only */
          ) {
            // Vue.extend constructor export interop
            var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports; // render functions

            if (render) {
              options.render = render;
              options.staticRenderFns = staticRenderFns;
              options._compiled = true;
            } // functional template


            if (functionalTemplate) {
              options.functional = true;
            } // scopedId


            if (scopeId) {
              options._scopeId = 'data-v-' + scopeId;
            }

            var hook;

            if (moduleIdentifier) {
              // server build
              hook = function hook(context) {
                // 2.3 injection
                context = context || // cached call
                this.$vnode && this.$vnode.ssrContext || // stateful
                this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
                // 2.2 with runInNewContext: true

                if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
                } // inject component styles


                if (injectStyles) {
                  injectStyles.call(this, context);
                } // register component module identifier for async chunk inferrence


                if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
                }
              }; // used by ssr in case component is cached and beforeCreate
              // never gets called


              options._ssrRegister = hook;
            } else if (injectStyles) {
              hook = shadowMode ? function () {
                injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
              } : injectStyles;
            }

            if (hook) {
              if (options.functional) {
                // for template-only hot-reload because in that case the render fn doesn't
                // go through the normalizer
                options._injectStyles = hook; // register for functional component in vue file

                var originalRender = options.render;

                options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
                };
              } else {
                // inject component registration as beforeCreate hook
                var existing = options.beforeCreate;
                options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
              }
            }

            return {
              exports: scriptExports,
              options: options
            };
          }
          /***/

        },

        /***/
        "@nextcloud/l10n/dist/gettext.js":
        /*!**************************************************!*\
          !*** external "@nextcloud/l10n/dist/gettext.js" ***!
          \**************************************************/

        /***/
        function nextcloudL10nDistGettextJs(module) {
          "use strict";

          module.exports = __webpack_require__(/*! @nextcloud/l10n/dist/gettext.js */ "../@nextcloud/nextcloud-vue/node_modules/@nextcloud/l10n/dist/gettext.js");
          /***/
        },

        /***/
        "vue-material-design-icons/CheckboxBlankOutline.vue":
        /*!*********************************************************************!*\
          !*** external "vue-material-design-icons/CheckboxBlankOutline.vue" ***!
          \*********************************************************************/

        /***/
        function vueMaterialDesignIconsCheckboxBlankOutlineVue(module) {
          "use strict";

          module.exports = __webpack_require__(/*! vue-material-design-icons/CheckboxBlankOutline.vue */ "../@nextcloud/nextcloud-vue/node_modules/vue-material-design-icons/CheckboxBlankOutline.vue");
          /***/
        },

        /***/
        "vue-material-design-icons/CheckboxMarked.vue":
        /*!***************************************************************!*\
          !*** external "vue-material-design-icons/CheckboxMarked.vue" ***!
          \***************************************************************/

        /***/
        function vueMaterialDesignIconsCheckboxMarkedVue(module) {
          "use strict";

          module.exports = __webpack_require__(/*! vue-material-design-icons/CheckboxMarked.vue */ "../@nextcloud/nextcloud-vue/node_modules/vue-material-design-icons/CheckboxMarked.vue");
          /***/
        },

        /***/
        "vue-material-design-icons/MinusBox.vue":
        /*!*********************************************************!*\
          !*** external "vue-material-design-icons/MinusBox.vue" ***!
          \*********************************************************/

        /***/
        function vueMaterialDesignIconsMinusBoxVue(module) {
          "use strict";

          module.exports = __webpack_require__(/*! vue-material-design-icons/MinusBox.vue */ "../@nextcloud/nextcloud-vue/node_modules/vue-material-design-icons/MinusBox.vue");
          /***/
        },

        /***/
        "vue-material-design-icons/RadioboxBlank.vue":
        /*!**************************************************************!*\
          !*** external "vue-material-design-icons/RadioboxBlank.vue" ***!
          \**************************************************************/

        /***/
        function vueMaterialDesignIconsRadioboxBlankVue(module) {
          "use strict";

          module.exports = __webpack_require__(/*! vue-material-design-icons/RadioboxBlank.vue */ "../@nextcloud/nextcloud-vue/node_modules/vue-material-design-icons/RadioboxBlank.vue");
          /***/
        },

        /***/
        "vue-material-design-icons/RadioboxMarked.vue":
        /*!***************************************************************!*\
          !*** external "vue-material-design-icons/RadioboxMarked.vue" ***!
          \***************************************************************/

        /***/
        function vueMaterialDesignIconsRadioboxMarkedVue(module) {
          "use strict";

          module.exports = __webpack_require__(/*! vue-material-design-icons/RadioboxMarked.vue */ "../@nextcloud/nextcloud-vue/node_modules/vue-material-design-icons/RadioboxMarked.vue");
          /***/
        },

        /***/
        "vue-material-design-icons/ToggleSwitch.vue":
        /*!*************************************************************!*\
          !*** external "vue-material-design-icons/ToggleSwitch.vue" ***!
          \*************************************************************/

        /***/
        function vueMaterialDesignIconsToggleSwitchVue(module) {
          "use strict";

          module.exports = __webpack_require__(/*! vue-material-design-icons/ToggleSwitch.vue */ "../@nextcloud/nextcloud-vue/node_modules/vue-material-design-icons/ToggleSwitch.vue");
          /***/
        },

        /***/
        "vue-material-design-icons/ToggleSwitchOff.vue":
        /*!****************************************************************!*\
          !*** external "vue-material-design-icons/ToggleSwitchOff.vue" ***!
          \****************************************************************/

        /***/
        function vueMaterialDesignIconsToggleSwitchOffVue(module) {
          "use strict";

          module.exports = __webpack_require__(/*! vue-material-design-icons/ToggleSwitchOff.vue */ "../@nextcloud/nextcloud-vue/node_modules/vue-material-design-icons/ToggleSwitchOff.vue");
          /***/
        }
        /******/

      };
      /************************************************************************/

      /******/
      // The module cache

      /******/

      var __webpack_module_cache__ = {};
      /******/

      /******/
      // The require function

      /******/

      function __nested_webpack_require_212163__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/

        if (cachedModule !== undefined) {
          /******/
          return cachedModule.exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = __webpack_module_cache__[moduleId] = {
          /******/
          id: moduleId,

          /******/
          // no module.loaded needed

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_212163__);
        /******/

        /******/
        // Return the exports of the module

        /******/


        return module.exports;
        /******/
      }
      /******/

      /************************************************************************/

      /******/

      /* webpack/runtime/compat get default export */

      /******/


      !function () {
        /******/
        // getDefaultExport function for compatibility with non-harmony modules

        /******/
        __nested_webpack_require_212163__.n = function (module) {
          /******/
          var getter = module && module.__esModule ?
          /******/
          function () {
            return module['default'];
          } :
          /******/
          function () {
            return module;
          };
          /******/

          __nested_webpack_require_212163__.d(getter, {
            a: getter
          });
          /******/


          return getter;
          /******/
        };
        /******/

      }();
      /******/

      /******/

      /* webpack/runtime/define property getters */

      /******/

      !function () {
        /******/
        // define getter functions for harmony exports

        /******/
        __nested_webpack_require_212163__.d = function (exports, definition) {
          /******/
          for (var key in definition) {
            /******/
            if (__nested_webpack_require_212163__.o(definition, key) && !__nested_webpack_require_212163__.o(exports, key)) {
              /******/
              Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
              });
              /******/
            }
            /******/

          }
          /******/

        };
        /******/

      }();
      /******/

      /******/

      /* webpack/runtime/hasOwnProperty shorthand */

      /******/

      !function () {
        /******/
        __nested_webpack_require_212163__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/

      }();
      /******/

      /******/

      /* webpack/runtime/make namespace object */

      /******/

      !function () {
        /******/
        // define __esModule on exports

        /******/
        __nested_webpack_require_212163__.r = function (exports) {
          /******/
          if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/


          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/

      }();
      /******/

      /******/

      /* webpack/runtime/nonce */

      /******/

      !function () {
        /******/
        __nested_webpack_require_212163__.nc = undefined;
        /******/
      }();
      /******/

      /************************************************************************/

      var __webpack_exports__ = {}; // This entry need to be wrapped in an IIFE because it need to be in strict mode.

      !function () {
        "use strict";
        /*!*******************************************************!*\
          !*** ./src/components/NcCheckboxRadioSwitch/index.js ***!
          \*******************************************************/

        __nested_webpack_require_212163__.r(__webpack_exports__);
        /* harmony import */


        var _NcCheckboxRadioSwitch_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_212163__(
        /*! ./NcCheckboxRadioSwitch.vue */
        "./src/components/NcCheckboxRadioSwitch/NcCheckboxRadioSwitch.vue");
        /**
         * @copyright Copyright (c) 2021 John Molakvoæ <skjnldsv@protonmail.com>
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
         * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
         * GNU Affero General Public License for more details.
         *
         * You should have received a copy of the GNU Affero General Public License
         * along with this program. If not, see <http://www.gnu.org/licenses/>.
         *
         */

        /* harmony default export */


        __webpack_exports__["default"] = _NcCheckboxRadioSwitch_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
      }();
      /******/

      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ "../@nextcloud/nextcloud-vue/dist/Components/NcSettingsSection.js":
/*!************************************************************************!*\
  !*** ../@nextcloud/nextcloud-vue/dist/Components/NcSettingsSection.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(self, function () {
  return (
    /******/
    function () {
      // webpackBootstrap

      /******/
      var __webpack_modules__ = {
        /***/
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=script&lang=js&":
        /*!*********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=script&lang=js& ***!
          \*********************************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcSettingsSectionNcSettingsSectionVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_2111__) {
          "use strict";

          __nested_webpack_require_2111__.r(__webpack_exports__);
          /* harmony import */


          var _l10n_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_2111__(
          /*! ../../l10n.js */
          "./src/l10n.js");
          /* harmony import */


          var vue_material_design_icons_HelpCircle_vue__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_2111__(
          /*! vue-material-design-icons/HelpCircle.vue */
          "vue-material-design-icons/HelpCircle.vue");
          /* harmony import */


          var vue_material_design_icons_HelpCircle_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_2111__.n(vue_material_design_icons_HelpCircle_vue__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony default export */


          __webpack_exports__["default"] = {
            name: 'NcSettingsSection',
            components: {
              HelpCircle: vue_material_design_icons_HelpCircle_vue__WEBPACK_IMPORTED_MODULE_1___default()
            },
            props: {
              title: {
                type: String,
                required: true
              },
              description: {
                type: String,
                default: ''
              },
              docUrl: {
                type: String,
                default: ''
              }
            },
            data: function data() {
              return {
                docTitleTranslated: (0, _l10n_js__WEBPACK_IMPORTED_MODULE_0__.t)('External documentation for {title}', {
                  title: this.title
                })
              };
            },
            computed: {
              hasDescription: function hasDescription() {
                return this.description.length > 0;
              },
              hasDocUrl: function hasDocUrl() {
                return this.docUrl.length > 0;
              }
            }
          };
          /***/
        },

        /***/
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=template&id=0e88f06b&scoped=true&":
        /*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=template&id=0e88f06b&scoped=true& ***!
          \********************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibLoadersTemplateLoaderJsRuleSet1Rules2Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcSettingsSectionNcSettingsSectionVueVueTypeTemplateId0e88f06bScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_5562__) {
          "use strict";

          __nested_webpack_require_5562__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_5562__.d(__webpack_exports__, {
            /* harmony export */
            "render": function render() {
              return (
                /* binding */
                _render
              );
            },

            /* harmony export */
            "staticRenderFns": function staticRenderFns() {
              return (
                /* binding */
                _staticRenderFns
              );
            }
            /* harmony export */

          });

          var _render = function render() {
            var _vm = this,
                _c = _vm._self._c;

            return _c("div", {
              staticClass: "settings-section"
            }, [_c("h2", {
              staticClass: "settings-section__title"
            }, [_vm._v("\n\t\t" + _vm._s(_vm.title) + "\n\t\t"), _vm.hasDocUrl ? _c("a", {
              staticClass: "settings-section__info",
              attrs: {
                href: _vm.docUrl,
                role: "note",
                title: _vm.docTitleTranslated
              }
            }, [_c("HelpCircle", {
              attrs: {
                size: 20
              }
            })], 1) : _vm._e()]), _vm._v(" "), _vm.hasDescription ? _c("p", {
              staticClass: "settings-section__desc"
            }, [_vm._v("\n\t\t" + _vm._s(_vm.description) + "\n\t")]) : _vm._e(), _vm._v(" "), _vm._t("default")], 2);
          };

          var _staticRenderFns = [];
          _render._withStripped = true;
          /***/
        },

        /***/
        "./src/l10n.js":
        /*!*********************!*\
          !*** ./src/l10n.js ***!
          \*********************/

        /***/
        function srcL10nJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_7452__) {
          "use strict";

          __nested_webpack_require_7452__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_7452__.d(__webpack_exports__, {
            /* harmony export */
            "n": function n() {
              return (
                /* binding */
                _n
              );
            },

            /* harmony export */
            "t": function t() {
              return (
                /* binding */
                _t
              );
            }
            /* harmony export */

          });
          /* harmony import */


          var _nextcloud_l10n_dist_gettext_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_7452__(
          /*! @nextcloud/l10n/dist/gettext.js */
          "@nextcloud/l10n/dist/gettext.js");
          /* harmony import */


          var _nextcloud_l10n_dist_gettext_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_7452__.n(_nextcloud_l10n_dist_gettext_js__WEBPACK_IMPORTED_MODULE_0__);

          var gtBuilder = (0, _nextcloud_l10n_dist_gettext_js__WEBPACK_IMPORTED_MODULE_0__.getGettextBuilder)().detectLocale(); // Decompress Translations to gettext format and add to gtBuilder

          [{
            "locale": "ar",
            "translations": {
              "{tag} (invisible)": "{tag} (غير مرئي)",
              "{tag} (restricted)": "{tag} (مقيد)",
              "Actions": "الإجراءات",
              "Activities": "النشاطات",
              "Animals & Nature": "الحيوانات والطبيعة",
              "Avatar of {displayName}": "صورة {displayName} الرمزية",
              "Avatar of {displayName}, {status}": "صورة {displayName} الرمزية، {status}",
              "Cancel changes": "إلغاء التغييرات",
              "Choose": "إختيار",
              "Close": "أغلق",
              "Close navigation": "إغلاق المتصفح",
              "Confirm changes": "تأكيد التغييرات",
              "Custom": "مخصص",
              "Edit item": "تعديل عنصر",
              "External documentation for {title}": "الوثائق الخارجية لـ{title}",
              "Flags": "الأعلام",
              "Food & Drink": "الطعام والشراب",
              "Frequently used": "كثيرا ما تستخدم",
              "Global": "عالمي",
              "Go back to the list": "العودة إلى القائمة",
              "Message limit of {count} characters reached": "تم الوصول إلى الحد الأقصى لعدد الأحرف في الرسالة: {count} حرف",
              "Next": "التالي",
              "No emoji found": "لم يتم العثور على أي رمز تعبيري",
              "No results": "ليس هناك أية نتيجة",
              "Objects": "الأشياء",
              "Open navigation": "فتح المتصفح",
              "Pause slideshow": "إيقاف العرض مؤقتًا",
              "People & Body": "الناس والجسم",
              "Pick an emoji": "اختر رمزًا تعبيريًا",
              "Please select a time zone:": "الرجاء تحديد المنطقة الزمنية:",
              "Previous": "السابق",
              "Search": "بحث",
              "Search results": "نتائج البحث",
              "Select a tag": "اختر علامة",
              "Settings": "الإعدادات",
              "Settings navigation": "إعدادات المتصفح",
              "Smileys & Emotion": "الوجوه و الرموز التعبيرية",
              "Start slideshow": "بدء العرض",
              "Submit": "إرسال",
              "Symbols": "الرموز",
              "Travel & Places": "السفر والأماكن",
              "Type to search time zone": "اكتب للبحث عن منطقة زمنية",
              "Unable to search the group": "تعذر البحث في المجموعة",
              "Undo changes": "التراجع عن التغييرات",
              "Write message, @ to mention someone, : for emoji autocompletion …": "اكتب رسالة، @ للإشارة إلى شخص ما، : للإكمال التلقائي للرموز التعبيرية ..."
            }
          }, {
            "locale": "br",
            "translations": {
              "{tag} (invisible)": "{tag} (diwelus)",
              "{tag} (restricted)": "{tag} (bevennet)",
              "Actions": "Oberioù",
              "Activities": "Oberiantizoù",
              "Animals & Nature": "Loened & Natur",
              "Choose": "Dibab",
              "Close": "Serriñ",
              "Custom": "Personelañ",
              "Flags": "Bannieloù",
              "Food & Drink": "Boued & Evajoù",
              "Frequently used": "Implijet alies",
              "Next": "Da heul",
              "No emoji found": "Emoji ebet kavet",
              "No results": "Disoc'h ebet",
              "Objects": "Traoù",
              "Pause slideshow": "Arsav an diaporama",
              "People & Body": "Tud & Korf",
              "Pick an emoji": "Choaz un emoji",
              "Previous": "A-raok",
              "Search": "Klask",
              "Search results": "Disoc'hoù an enklask",
              "Select a tag": "Choaz ur c'hlav",
              "Settings": "Arventennoù",
              "Smileys & Emotion": "Smileyioù & Fromoù",
              "Start slideshow": "Kregiñ an diaporama",
              "Symbols": "Arouezioù",
              "Travel & Places": "Beaj & Lec'hioù",
              "Unable to search the group": "Dibosupl eo klask ar strollad"
            }
          }, {
            "locale": "ca",
            "translations": {
              "{tag} (invisible)": "{tag} (invisible)",
              "{tag} (restricted)": "{tag} (restringit)",
              "Actions": "Accions",
              "Activities": "Activitats",
              "Animals & Nature": "Animals i natura",
              "Avatar of {displayName}": "Avatar de {displayName}",
              "Avatar of {displayName}, {status}": "Avatar de {displayName}, {status}",
              "Cancel changes": "Cancel·la els canvis",
              "Choose": "Tria",
              "Close": "Tanca",
              "Close navigation": "Tancar la navegació",
              "Confirm changes": "Confirmeu els canvis",
              "Custom": "Personalitzat",
              "Edit item": "Edita l'element",
              "External documentation for {title}": "Documentació externa per a {title}",
              "Flags": "Marques",
              "Food & Drink": "Menjar i begudes",
              "Frequently used": "Utilitzats recentment",
              "Global": "Global",
              "Go back to the list": "Torna a la llista",
              "Message limit of {count} characters reached": "S'ha arribat al límit de {count} caràcters per missatge",
              "Next": "Següent",
              "No emoji found": "No s'ha trobat cap emoji",
              "No results": "Sense resultats",
              "Objects": "Objectes",
              "Open navigation": "Obrir la navegació",
              "Pause slideshow": "Atura la presentació",
              "People & Body": "Persones i cos",
              "Pick an emoji": "Trieu un emoji",
              "Please select a time zone:": "Seleccioneu una zona horària:",
              "Previous": "Anterior",
              "Search": "Cerca",
              "Search results": "Resultats de cerca",
              "Select a tag": "Selecciona una etiqueta",
              "Settings": "Paràmetres",
              "Settings navigation": "Navegació d'opcions",
              "Smileys & Emotion": "Cares i emocions",
              "Start slideshow": "Inicia la presentació",
              "Submit": "Envia",
              "Symbols": "Símbols",
              "Travel & Places": "Viatges i llocs",
              "Type to search time zone": "Escriviu per cercar la zona horària",
              "Unable to search the group": "No es pot cercar el grup",
              "Undo changes": "Desfer canvis",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Escriu un missatge, @ per esmentar algú, : per a la compleció automàtica d'emojis..."
            }
          }, {
            "locale": "cs_CZ",
            "translations": {
              "{tag} (invisible)": "{tag} (neviditelné)",
              "{tag} (restricted)": "{tag} (omezené)",
              "Actions": "Akce",
              "Activities": "Aktivity",
              "Animals & Nature": "Zvířata a příroda",
              "Avatar of {displayName}": "Zástupný obrázek uživatele {displayName}",
              "Avatar of {displayName}, {status}": "Zástupný obrázek uživatele {displayName}, {status}",
              "Cancel changes": "Zrušit změny",
              "Change title": "Změnit nadpis",
              "Choose": "Zvolit",
              "Clear text": "Čitelný text",
              "Close": "Zavřít",
              "Close modal": "Zavřít dialogové okno",
              "Close navigation": "Zavřít navigaci",
              "Close sidebar": "Zavřít postranní panel",
              "Confirm changes": "Potvrdit změny",
              "Custom": "Uživatelsky určené",
              "Edit item": "Upravit položku",
              "External documentation for {title}": "Externí dokumentace k {title}",
              "Favorite": "Oblíbené",
              "Flags": "Příznaky",
              "Food & Drink": "Jídlo a pití",
              "Frequently used": "Často používané",
              "Global": "Globální",
              "Go back to the list": "Jít zpět na seznam",
              "Hide password": "Skrýt heslo",
              "items": "položky",
              "Message limit of {count} characters reached": "Dosaženo limitu počtu ({count}) znaků zprávy",
              "More {dashboardItemType} …": "Další {dashboardItemType} …",
              "Next": "Následující",
              "No emoji found": "Nenalezeno žádné emoji",
              "No results": "Nic nenalezeno",
              "Objects": "Objekty",
              "Open": "Otevřít",
              "Open navigation": "Otevřít navigaci",
              "Password is secure": "Heslo je bezpečné",
              "Pause slideshow": "Pozastavit prezentaci",
              "People & Body": "Lidé a tělo",
              "Pick an emoji": "Vybrat emoji",
              "Please select a time zone:": "Vyberte časovou zónu:",
              "Previous": "Předchozí",
              "Search": "Hledat",
              "Search results": "Výsledky hledání",
              "Select a tag": "Vybrat štítek",
              "Settings": "Nastavení",
              "Settings navigation": "Pohyb po nastavení",
              "Show password": "Zobrazit heslo",
              "Smileys & Emotion": "Úsměvy a emoce",
              "Start slideshow": "Spustit prezentaci",
              "Submit": "Odeslat",
              "Symbols": "Symboly",
              "Travel & Places": "Cestování a místa",
              "Type to search time zone": "Psaním vyhledejte časovou zónu",
              "Unable to search the group": "Nedaří se hledat skupinu",
              "Undo changes": "Vzít změny zpět",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Napište zprávu – pokud chcete někoho zmínit, napište před jeho uživatelským jménem @ (zavináč); automatické doplňování emotikonů zahájíte napsáním : (dvojtečky)…"
            }
          }, {
            "locale": "da",
            "translations": {
              "{tag} (invisible)": "{tag} (usynlig)",
              "{tag} (restricted)": "{tag} (begrænset)",
              "Actions": "Handlinger",
              "Activities": "Aktiviteter",
              "Animals & Nature": "Dyr & Natur",
              "Choose": "Vælg",
              "Close": "Luk",
              "Custom": "Brugerdefineret",
              "Flags": "Flag",
              "Food & Drink": "Mad & Drikke",
              "Frequently used": "Ofte brugt",
              "Message limit of {count} characters reached": "Begrænsning på {count} tegn er nået",
              "Next": "Videre",
              "No emoji found": "Ingen emoji fundet",
              "No results": "Ingen resultater",
              "Objects": "Objekter",
              "Pause slideshow": "Suspender fremvisning",
              "People & Body": "Mennesker & Menneskekroppen",
              "Pick an emoji": "Vælg en emoji",
              "Previous": "Forrige",
              "Search": "Søg",
              "Search results": "Søgeresultater",
              "Select a tag": "Vælg et mærke",
              "Settings": "Indstillinger",
              "Settings navigation": "Naviger i indstillinger",
              "Smileys & Emotion": "Smileys & Emotion",
              "Start slideshow": "Start fremvisning",
              "Symbols": "Symboler",
              "Travel & Places": "Rejser & Rejsemål",
              "Unable to search the group": "Kan ikke søge på denne gruppe",
              "Write message, @ to mention someone …": "Skriv i meddelelse, @ for at nævne nogen  …"
            }
          }, {
            "locale": "de",
            "translations": {
              "{tag} (invisible)": "{tag} (unsichtbar)",
              "{tag} (restricted)": "{tag} (eingeschränkt)",
              "Actions": "Aktionen",
              "Activities": "Aktivitäten",
              "Animals & Nature": "Tiere & Natur",
              "Avatar of {displayName}": "Avatar von {displayName}",
              "Avatar of {displayName}, {status}": "Avatar von {displayName}, {status}",
              "Cancel changes": "Änderungen verwerfen",
              "Change title": "Titel ändern",
              "Choose": "Auswählen",
              "Close": "Schließen",
              "Close modal": "Modal schließen",
              "Close navigation": "Navigation schließen",
              "Close sidebar": "Seitenleiste schließen",
              "Confirm changes": "Änderungen bestätigen",
              "Custom": "Benutzerdefiniert",
              "Edit item": "Objekt bearbeiten",
              "External documentation for {title}": "Externe Dokumentation für {title}",
              "Favorite": "Favorit",
              "Flags": "Flaggen",
              "Food & Drink": "Essen & Trinken",
              "Frequently used": "Häufig verwendet",
              "Global": "Global",
              "Go back to the list": "Zurück zur Liste",
              "items": "Elemente",
              "Message limit of {count} characters reached": "Nachrichtenlimit von {count} Zeichen erreicht",
              "More {dashboardItemType} …": "Mehr {dashboardItemType} …",
              "Next": "Weiter",
              "No emoji found": "Kein Emoji gefunden",
              "No results": "Keine Ergebnisse",
              "Objects": "Gegenstände",
              "Open": "Öffnen",
              "Open navigation": "Navigation öffnen",
              "Pause slideshow": "Diashow pausieren",
              "People & Body": "Menschen & Körper",
              "Pick an emoji": "Ein Emoji auswählen",
              "Please select a time zone:": "Bitte wählen Sie eine Zeitzone:",
              "Previous": "Vorherige",
              "Search": "Suche",
              "Search results": "Suchergebnisse",
              "Select a tag": "Schlagwort auswählen",
              "Settings": "Einstellungen",
              "Settings navigation": "Einstellungen für die Navigation",
              "Smileys & Emotion": "Smileys & Emotionen",
              "Start slideshow": "Diashow starten",
              "Submit": "Einreichen",
              "Symbols": "Symbole",
              "Travel & Places": "Reisen & Orte",
              "Type to search time zone": "Tippen, um Zeitzone zu suchen",
              "Unable to search the group": "Die Gruppe konnte nicht durchsucht werden",
              "Undo changes": "Änderungen rückgängig machen",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Nachricht schreiben, @, um jemanden zu erwähnen, : für die automatische Vervollständigung von Emojis … "
            }
          }, {
            "locale": "de_DE",
            "translations": {
              "{tag} (invisible)": "{tag} (unsichtbar)",
              "{tag} (restricted)": "{tag} (eingeschränkt)",
              "Actions": "Aktionen",
              "Activities": "Aktivitäten",
              "Animals & Nature": "Tiere & Natur",
              "Avatar of {displayName}": "Avatar von {displayName}",
              "Avatar of {displayName}, {status}": "Avatar von {displayName}, {status}",
              "Cancel changes": "Änderungen verwerfen",
              "Change title": "Titel ändern",
              "Choose": "Auswählen",
              "Clear text": "Klartext",
              "Close": "Schließen",
              "Close modal": "Modal schließen",
              "Close navigation": "Navigation schließen",
              "Close sidebar": "Seitenleiste schließen",
              "Confirm changes": "Änderungen bestätigen",
              "Custom": "Benutzerdefiniert",
              "Edit item": "Objekt bearbeiten",
              "External documentation for {title}": "Externe Dokumentation für {title}",
              "Favorite": "Favorit",
              "Flags": "Flaggen",
              "Food & Drink": "Essen & Trinken",
              "Frequently used": "Häufig verwendet",
              "Global": "Global",
              "Go back to the list": "Zurück zur Liste",
              "Hide password": "Passwort verbergen",
              "items": "Elemente",
              "Message limit of {count} characters reached": "Nachrichtenlimit von {count} Zeichen erreicht",
              "More {dashboardItemType} …": "Mehr {dashboardItemType} …",
              "Next": "Weiter",
              "No emoji found": "Kein Emoji gefunden",
              "No results": "Keine Ergebnisse",
              "Objects": "Objekte",
              "Open": "Öffnen",
              "Open navigation": "Navigation öffnen",
              "Password is secure": "Passwort ist sicher",
              "Pause slideshow": "Diashow pausieren",
              "People & Body": "Menschen & Körper",
              "Pick an emoji": "Ein Emoji auswählen",
              "Please select a time zone:": "Bitte eine Zeitzone auswählen:",
              "Previous": "Vorherige",
              "Search": "Suche",
              "Search results": "Suchergebnisse",
              "Select a tag": "Schlagwort auswählen",
              "Settings": "Einstellungen",
              "Settings navigation": "Einstellungen für die Navigation",
              "Show password": "Passwort anzeigen",
              "Smileys & Emotion": "Smileys & Emotionen",
              "Start slideshow": "Diashow starten",
              "Submit": "Einreichen",
              "Symbols": "Symbole",
              "Travel & Places": "Reisen & Orte",
              "Type to search time zone": "Tippen, um eine Zeitzone zu suchen",
              "Unable to search the group": "Die Gruppe kann nicht durchsucht werden",
              "Undo changes": "Änderungen rückgängig machen",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Nachricht schreiben, @, um jemanden zu erwähnen, : für die automatische Vervollständigung von Emojis …"
            }
          }, {
            "locale": "el",
            "translations": {
              "{tag} (invisible)": "{tag} (αόρατο)",
              "{tag} (restricted)": "{tag} (περιορισμένο)",
              "Actions": "Ενέργειες",
              "Activities": "Δραστηριότητες",
              "Animals & Nature": "Ζώα & Φύση",
              "Avatar of {displayName}": "Άβαταρ του {displayName}",
              "Cancel changes": "Ακύρωση αλλαγών",
              "Choose": "Επιλογή",
              "Close": "Κλείσιμο",
              "Close navigation": "Κλείσιμο πλοήγησης",
              "Confirm changes": "Επιβεβαίωση αλλαγών",
              "Custom": "Προσαρμογή",
              "Edit item": "Επεξεργασία",
              "External documentation for {title}": "Εξωτερική τεκμηρίωση για {title}",
              "Flags": "Σημαίες",
              "Food & Drink": "Φαγητό & Ποτό",
              "Frequently used": "Συχνά χρησιμοποιούμενο",
              "Global": "Καθολικό",
              "Go back to the list": "Επιστροφή στην αρχική λίστα ",
              "Message limit of {count} characters reached": "Συμπληρώθηκε το όριο των {count} χαρακτήρων του μηνύματος",
              "Next": "Επόμενο",
              "No emoji found": "Δεν βρέθηκε emoji",
              "No results": "Κανένα αποτέλεσμα",
              "Objects": "Αντικείμενα",
              "Open navigation": "Άνοιγμα πλοήγησης",
              "Pause slideshow": "Παύση προβολής διαφανειών",
              "People & Body": "Άνθρωποι & Σώμα",
              "Pick an emoji": "Επιλέξτε ένα emoji",
              "Please select a time zone:": "Παρακαλούμε επιλέξτε μια ζώνη ώρας:",
              "Previous": "Προηγούμενο",
              "Search": "Αναζήτηση",
              "Search results": "Αποτελέσματα αναζήτησης",
              "Select a tag": "Επιλογή ετικέτας",
              "Settings": "Ρυθμίσεις",
              "Settings navigation": "Πλοήγηση ρυθμίσεων",
              "Smileys & Emotion": "Φατσούλες & Συναίσθημα",
              "Start slideshow": "Έναρξη προβολής διαφανειών",
              "Submit": "Υποβολή",
              "Symbols": "Σύμβολα",
              "Travel & Places": "Ταξίδια & Τοποθεσίες",
              "Type to search time zone": "Πληκτρολογήστε για αναζήτηση ζώνης ώρας",
              "Unable to search the group": "Δεν είναι δυνατή η αναζήτηση της ομάδας",
              "Undo changes": "Αναίρεση Αλλαγών",
              "Write message, @ to mention someone …": "Γράψτε ένα μήνυμα, και με το σύμβολο @, μνημονεύστε κάποιον …"
            }
          }, {
            "locale": "en_GB",
            "translations": {
              "{tag} (invisible)": "{tag} (invisible)",
              "{tag} (restricted)": "{tag} (restricted)",
              "Actions": "Actions",
              "Activities": "Activities",
              "Animals & Nature": "Animals & Nature",
              "Avatar of {displayName}": "Avatar of {displayName}",
              "Avatar of {displayName}, {status}": "Avatar of {displayName}, {status}",
              "Cancel changes": "Cancel changes",
              "Change title": "Change title",
              "Choose": "Choose",
              "Close": "Close",
              "Close modal": "Close modal",
              "Close navigation": "Close navigation",
              "Close sidebar": "Close sidebar",
              "Confirm changes": "Confirm changes",
              "Custom": "Custom",
              "Edit item": "Edit item",
              "External documentation for {title}": "External documentation for {title}",
              "Favorite": "Favourite",
              "Flags": "Flags",
              "Food & Drink": "Food & Drink",
              "Frequently used": "Frequently used",
              "Global": "Global",
              "Go back to the list": "Go back to the list",
              "items": "items",
              "Message limit of {count} characters reached": "Message limit of {count} characters reached",
              "More {dashboardItemType} …": "More {dashboardItemType} …",
              "Next": "Next",
              "No emoji found": "No emoji found",
              "No results": "No results",
              "Objects": "Objects",
              "Open": "Open",
              "Open navigation": "Open navigation",
              "Pause slideshow": "Pause slideshow",
              "People & Body": "People & Body",
              "Pick an emoji": "Pick an emoji",
              "Please select a time zone:": "Please select a time zone:",
              "Previous": "Previous",
              "Search": "Search",
              "Search results": "Search results",
              "Select a tag": "Select a tag",
              "Settings": "Settings",
              "Settings navigation": "Settings navigation",
              "Smileys & Emotion": "Smileys & Emotion",
              "Start slideshow": "Start slideshow",
              "Submit": "Submit",
              "Symbols": "Symbols",
              "Travel & Places": "Travel & Places",
              "Type to search time zone": "Type to search time zone",
              "Unable to search the group": "Unable to search the group",
              "Undo changes": "Undo changes",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Write message, @ to mention someone, : for emoji autocompletion …"
            }
          }, {
            "locale": "eo",
            "translations": {
              "{tag} (invisible)": "{tag} (kaŝita)",
              "{tag} (restricted)": "{tag} (limigita)",
              "Actions": "Agoj",
              "Activities": "Aktiveco",
              "Animals & Nature": "Bestoj & Naturo",
              "Choose": "Elektu",
              "Close": "Fermu",
              "Custom": "Propra",
              "Flags": "Flagoj",
              "Food & Drink": "Manĝaĵo & Trinkaĵo",
              "Frequently used": "Ofte uzataj",
              "Message limit of {count} characters reached": "La limo je {count} da literoj atingita",
              "Next": "Sekva",
              "No emoji found": "La emoĝio forestas",
              "No results": "La rezulto forestas",
              "Objects": "Objektoj",
              "Pause slideshow": "Payzi bildprezenton",
              "People & Body": "Homoj & Korpo",
              "Pick an emoji": "Elekti emoĝion ",
              "Previous": "Antaŭa",
              "Search": "Serĉi",
              "Search results": "Serĉrezultoj",
              "Select a tag": "Elektu etikedon",
              "Settings": "Agordo",
              "Settings navigation": "Agorda navigado",
              "Smileys & Emotion": "Ridoj kaj Emocioj",
              "Start slideshow": "Komenci bildprezenton",
              "Symbols": "Signoj",
              "Travel & Places": "Vojaĵoj & Lokoj",
              "Unable to search the group": "Ne eblas serĉi en la grupo",
              "Write message, @ to mention someone …": "Mesaĝi, uzu @ por mencii iun ..."
            }
          }, {
            "locale": "es",
            "translations": {
              "{tag} (invisible)": "{tag} (invisible)",
              "{tag} (restricted)": "{tag} (restringido)",
              "Actions": "Acciones",
              "Activities": "Actividades",
              "Animals & Nature": "Animales y naturaleza",
              "Avatar of {displayName}": "Avatar de {displayName}",
              "Avatar of {displayName}, {status}": "Avatar de {displayName}, {status}",
              "Cancel changes": "Cancelar cambios",
              "Change title": "Cambiar título",
              "Choose": "Elegir",
              "Close": "Cerrar",
              "Close modal": "Cerrar modal",
              "Close navigation": "Cerrar navegación",
              "Confirm changes": "Confirmar cambios",
              "Custom": "Personalizado",
              "Edit item": "Editar elemento",
              "External documentation for {title}": "Documentacion externa de {title}",
              "Favorite": "Favorito",
              "Flags": "Banderas",
              "Food & Drink": "Comida y bebida",
              "Frequently used": "Usado con frecuenca",
              "Global": "Global",
              "Go back to the list": "Volver a la lista",
              "items": "elementos",
              "Message limit of {count} characters reached": "El mensaje ha alcanzado el límite de {count} caracteres",
              "More {dashboardItemType} …": "Más {dashboardItemType} ...",
              "Next": "Siguiente",
              "No emoji found": "No hay ningún emoji",
              "No results": " Ningún resultado",
              "Objects": "Objetos",
              "Open": "Abrir",
              "Open navigation": "Abrir navegación",
              "Pause slideshow": "Pausar la presentación ",
              "People & Body": "Personas y cuerpos",
              "Pick an emoji": "Elegir un emoji",
              "Please select a time zone:": "Por favor elige un huso de horario:",
              "Previous": "Anterior",
              "Search": "Buscar",
              "Search results": "Resultados de la búsqueda",
              "Select a tag": "Seleccione una etiqueta",
              "Settings": "Ajustes",
              "Settings navigation": "Navegación por ajustes",
              "Smileys & Emotion": "Smileys y emoticonos",
              "Start slideshow": "Iniciar la presentación",
              "Submit": "Enviar",
              "Symbols": "Símbolos",
              "Travel & Places": "Viajes y lugares",
              "Type to search time zone": "Escribe para buscar un huso de horario",
              "Unable to search the group": "No es posible buscar en el grupo",
              "Undo changes": "Deshacer cambios",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Escribe un mensaje, @ para mencionar a alguien, : para autocompletado de emoji ..."
            }
          }, {
            "locale": "eu",
            "translations": {
              "{tag} (invisible)": "{tag} (ikusezina)",
              "{tag} (restricted)": "{tag} (mugatua)",
              "Actions": "Ekintzak",
              "Activities": "Jarduerak",
              "Animals & Nature": "Animaliak eta Natura",
              "Avatar of {displayName}": "{displayName}-(e)n irudia",
              "Avatar of {displayName}, {status}": "{displayName} -(e)n irudia, {status}",
              "Cancel changes": "Ezeztatu aldaketak",
              "Change title": "Aldatu titulua",
              "Choose": "Aukeratu",
              "Close": "Itxi",
              "Close modal": "Itxi modala",
              "Close navigation": "Itxi nabigazioa",
              "Close sidebar": "Itxi albo-barra",
              "Confirm changes": "Baieztatu aldaketak",
              "Custom": "Pertsonalizatua",
              "Edit item": "Editatu elementua",
              "External documentation for {title}": "Kanpoko dokumentazioa {title}(r)entzat",
              "Favorite": "Gogokoa",
              "Flags": "Banderak",
              "Food & Drink": "Janaria eta edariak",
              "Frequently used": "Askotan erabilia",
              "Global": "Globala",
              "Go back to the list": "Bueltatu zerrendara",
              "items": "elementuak",
              "Message limit of {count} characters reached": "Mezuaren {count} karaketere-limitera heldu zara",
              "More {dashboardItemType} …": "{dashboardItemType} gehiago…",
              "Next": "Hurrengoa",
              "No emoji found": "Ez da emojirik aurkitu",
              "No results": "Emaitzarik ez",
              "Objects": "Objektuak",
              "Open": "Ireki",
              "Open navigation": "Ireki nabigazioa",
              "Pause slideshow": "Pausatu diaporama",
              "People & Body": "Jendea eta gorputza",
              "Pick an emoji": "Aukeratu emoji bat",
              "Please select a time zone:": "Mesedez hautatu ordu-zona bat:",
              "Previous": "Aurrekoa",
              "Search": "Bilatu",
              "Search results": "Bilaketa emaitzak",
              "Select a tag": "Hautatu etiketa bat",
              "Settings": "Ezarpenak",
              "Settings navigation": "Nabigazio ezarpenak",
              "Smileys & Emotion": "Smileyak eta emozioa",
              "Start slideshow": "Hasi diaporama",
              "Submit": "Bidali",
              "Symbols": "Sinboloak",
              "Travel & Places": "Bidaiak eta lekuak",
              "Type to search time zone": "Idatzi ordu-zona bat bilatzeko",
              "Unable to search the group": "Ezin izan da taldea bilatu",
              "Undo changes": "Aldaketak desegin",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Idatzi mezua, @ norbait aipatzeko, : emojia automatikoki idazteko"
            }
          }, {
            "locale": "fi_FI",
            "translations": {
              "{tag} (invisible)": "{tag} (näkymätön)",
              "{tag} (restricted)": "{tag} (rajoitettu)",
              "Actions": "Toiminnot",
              "Activities": "Aktiviteetit",
              "Animals & Nature": "Eläimet & luonto",
              "Avatar of {displayName}": "Käyttäjän {displayName} avatar",
              "Avatar of {displayName}, {status}": "Käyttäjän {displayName} avatar, {status}",
              "Cancel changes": "Peruuta muutokset",
              "Choose": "Valitse",
              "Close": "Sulje",
              "Close navigation": "Sulje navigaatio",
              "Confirm changes": "Vahvista muutokset",
              "Custom": "Mukautettu",
              "Edit item": "Muokkaa kohdetta",
              "External documentation for {title}": "Ulkoinen dokumentaatio kohteelle {title}",
              "Flags": "Liput",
              "Food & Drink": "Ruoka & juoma",
              "Frequently used": "Usein käytetyt",
              "Global": "Yleinen",
              "Go back to the list": "Siirry takaisin listaan",
              "Message limit of {count} characters reached": "Viestin merkken enimmäisimäärä {count} täynnä ",
              "Next": "Seuraava",
              "No emoji found": "Emojia ei löytynyt",
              "No results": "Ei tuloksia",
              "Objects": "Esineet & asiat",
              "Open navigation": "Avaa navigaatio",
              "Pause slideshow": "Keskeytä diaesitys",
              "People & Body": "Ihmiset & keho",
              "Pick an emoji": "Valitse emoji",
              "Please select a time zone:": "Valitse aikavyöhyke:",
              "Previous": "Edellinen",
              "Search": "Etsi",
              "Search results": "Hakutulokset",
              "Select a tag": "Valitse tagi",
              "Settings": "Asetukset",
              "Settings navigation": "Asetusnavigaatio",
              "Smileys & Emotion": "Hymiöt & tunteet",
              "Start slideshow": "Aloita diaesitys",
              "Submit": "Lähetä",
              "Symbols": "Symbolit",
              "Travel & Places": "Matkustus & kohteet",
              "Type to search time zone": "Kirjoita etsiäksesi aikavyöhyke",
              "Unable to search the group": "Ryhmää ei voi hakea",
              "Undo changes": "Kumoa muutokset",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Kirjoita viesti, @ mainitaksesi käyttäjän, : emojin automaattitäydennykseen…"
            }
          }, {
            "locale": "fr",
            "translations": {
              "{tag} (invisible)": "{tag} (invisible)",
              "{tag} (restricted)": "{tag} (restreint)",
              "Actions": "Actions",
              "Activities": "Activités",
              "Animals & Nature": "Animaux & Nature",
              "Avatar of {displayName}": "Avatar de {displayName}",
              "Avatar of {displayName}, {status}": "Avatar de {displayName}, {status}",
              "Cancel changes": "Annuler les modifications",
              "Choose": "Choisir",
              "Close": "Fermer",
              "Close modal": "Fermer la fenêtre",
              "Close navigation": "Fermer la navigation",
              "Confirm changes": "Confirmer les modifications",
              "Custom": "Personnalisé",
              "Edit item": "Éditer l'élément",
              "External documentation for {title}": "Documentation externe pour {title}",
              "Flags": "Drapeaux",
              "Food & Drink": "Nourriture & Boissons",
              "Frequently used": "Utilisés fréquemment",
              "Global": "Global",
              "Go back to the list": "Retourner à la liste",
              "items": "éléments",
              "Message limit of {count} characters reached": "Limite de messages de {count} caractères atteinte",
              "More {dashboardItemType} …": "Plus de {dashboardItemType} …",
              "Next": "Suivant",
              "No emoji found": "Pas d’émoji trouvé",
              "No results": "Aucun résultat",
              "Objects": "Objets",
              "Open": "Ouvrir",
              "Open navigation": "Ouvrir la navigation",
              "Pause slideshow": "Mettre le diaporama en pause",
              "People & Body": "Personnes & Corps",
              "Pick an emoji": "Choisissez un émoji",
              "Please select a time zone:": "Sélectionnez un fuseau horaire : ",
              "Previous": "Précédent",
              "Search": "Chercher",
              "Search results": "Résultats de recherche",
              "Select a tag": "Sélectionnez une balise",
              "Settings": "Paramètres",
              "Settings navigation": "Navigation dans les paramètres",
              "Smileys & Emotion": "Smileys & Émotions",
              "Start slideshow": "Démarrer le diaporama",
              "Submit": "Valider",
              "Symbols": "Symboles",
              "Travel & Places": "Voyage & Lieux",
              "Type to search time zone": "Saisissez les premiers lettres pour rechercher un fuseau horaire",
              "Unable to search the group": "Impossible de chercher le groupe",
              "Undo changes": "Annuler les changements",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Ecrire un message, @ pour mentionner quelqu'un, : pour l'auto-complétion des émoticônes"
            }
          }, {
            "locale": "gl",
            "translations": {
              "{tag} (invisible)": "{tag} (invisíbel)",
              "{tag} (restricted)": "{tag} (restrinxido)",
              "Actions": "Accións",
              "Activities": "Actividades",
              "Animals & Nature": "Animais e natureza",
              "Cancel changes": "Cancelar os cambios",
              "Choose": "Escoller",
              "Close": "Pechar",
              "Confirm changes": "Confirma os cambios",
              "Custom": "Personalizado",
              "External documentation for {title}": "Documentación externa para {title}",
              "Flags": "Bandeiras",
              "Food & Drink": "Comida e bebida",
              "Frequently used": "Usado con frecuencia",
              "Message limit of {count} characters reached": "Acadouse o límite de {count} caracteres por mensaxe",
              "Next": "Seguinte",
              "No emoji found": "Non se atopou ningún «emoji»",
              "No results": "Sen resultados",
              "Objects": "Obxectos",
              "Pause slideshow": "Pausar o diaporama",
              "People & Body": "Persoas e corpo",
              "Pick an emoji": "Escolla un «emoji»",
              "Previous": "Anterir",
              "Search": "Buscar",
              "Search results": "Resultados da busca",
              "Select a tag": "Seleccione unha etiqueta",
              "Settings": "Axustes",
              "Settings navigation": "Navegación polos axustes",
              "Smileys & Emotion": "Sorrisos e emocións",
              "Start slideshow": "Iniciar o diaporama",
              "Submit": "Enviar",
              "Symbols": "Símbolos",
              "Travel & Places": "Viaxes e lugares",
              "Unable to search the group": "Non foi posíbel buscar o grupo",
              "Write message, @ to mention someone …": "Escriba a mensaxe, @ para mencionar a alguén…"
            }
          }, {
            "locale": "he",
            "translations": {
              "{tag} (invisible)": "{tag} (נסתר)",
              "{tag} (restricted)": "{tag} (מוגבל)",
              "Actions": "פעולות",
              "Activities": "פעילויות",
              "Animals & Nature": "חיות וטבע",
              "Choose": "בחירה",
              "Close": "סגירה",
              "Custom": "בהתאמה אישית",
              "Flags": "דגלים",
              "Food & Drink": "מזון ומשקאות",
              "Frequently used": "בשימוש תדיר",
              "Next": "הבא",
              "No emoji found": "לא נמצא אמוג׳י",
              "No results": "אין תוצאות",
              "Objects": "חפצים",
              "Pause slideshow": "השהיית מצגת",
              "People & Body": "אנשים וגוף",
              "Pick an emoji": "נא לבחור אמוג׳י",
              "Previous": "הקודם",
              "Search": "חיפוש",
              "Search results": "תוצאות חיפוש",
              "Select a tag": "בחירת תגית",
              "Settings": "הגדרות",
              "Smileys & Emotion": "חייכנים ורגשונים",
              "Start slideshow": "התחלת המצגת",
              "Symbols": "סמלים",
              "Travel & Places": "טיולים ומקומות",
              "Unable to search the group": "לא ניתן לחפש בקבוצה"
            }
          }, {
            "locale": "hu_HU",
            "translations": {
              "{tag} (invisible)": "{tag} (láthatatlan)",
              "{tag} (restricted)": "{tag} (korlátozott)",
              "Actions": "Műveletek",
              "Activities": "Tevékenységek",
              "Animals & Nature": "Állatok és természet",
              "Avatar of {displayName}": "{displayName} profilképe",
              "Avatar of {displayName}, {status}": "{displayName} profilképe, {status}",
              "Cancel changes": "Változtatások elvetése",
              "Choose": "Válassszon",
              "Close": "Bezárás",
              "Close modal": "Ablak bezárása",
              "Close navigation": "Navigáció bezárása",
              "Confirm changes": "Változtatások megerősítése",
              "Custom": "Egyéni",
              "Edit item": "Elem szerkesztése",
              "External documentation for {title}": "Külső dokumentáció ehhez: {title}",
              "Flags": "Zászló",
              "Food & Drink": "Étel és ital",
              "Frequently used": "Gyakran használt",
              "Global": "Globális",
              "Go back to the list": "Ugrás vissza a listához",
              "items": "elemek",
              "Message limit of {count} characters reached": "{count} karakteres üzenetkorlát elérve",
              "More {dashboardItemType} …": "Több {dashboardItemType}…",
              "Next": "Következő",
              "No emoji found": "Nem található emodzsi",
              "No results": "Nincs találat",
              "Objects": "Tárgyak",
              "Open": "Megnyitás",
              "Open navigation": "Navigáció megnyitása",
              "Pause slideshow": "Diavetítés szüneteltetése",
              "People & Body": "Emberek és test",
              "Pick an emoji": "Válasszon egy emodzsit",
              "Please select a time zone:": "Válasszon időzónát:",
              "Previous": "Előző",
              "Search": "Keresés",
              "Search results": "Találatok",
              "Select a tag": "Válasszon címkét",
              "Settings": "Beállítások",
              "Settings navigation": "Navigáció a beállításokban",
              "Smileys & Emotion": "Mosolyok és érzelmek",
              "Start slideshow": "Diavetítés indítása",
              "Submit": "Beküldés",
              "Symbols": "Szimbólumok",
              "Travel & Places": "Utazás és helyek",
              "Type to search time zone": "Gépeljen az időzóna kereséséhez",
              "Unable to search the group": "A csoport nem kereshető",
              "Undo changes": "Változtatások visszavonása",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Írjon üzenetet, @ valaki megemlítéséhez, : az emodzsik automatikus kiegészítéséhez…"
            }
          }, {
            "locale": "is",
            "translations": {
              "{tag} (invisible)": "{tag} (ósýnilegt)",
              "{tag} (restricted)": "{tag} (takmarkað)",
              "Actions": "Aðgerðir",
              "Activities": "Aðgerðir",
              "Animals & Nature": "Dýr og náttúra",
              "Choose": "Velja",
              "Close": "Loka",
              "Custom": "Sérsniðið",
              "Flags": "Flögg",
              "Food & Drink": "Matur og drykkur",
              "Frequently used": "Oftast notað",
              "Next": "Næsta",
              "No emoji found": "Ekkert tjáningartákn fannst",
              "No results": "Engar niðurstöður",
              "Objects": "Hlutir",
              "Pause slideshow": "Gera hlé á skyggnusýningu",
              "People & Body": "Fólk og líkami",
              "Pick an emoji": "Veldu tjáningartákn",
              "Previous": "Fyrri",
              "Search": "Leita",
              "Search results": "Leitarniðurstöður",
              "Select a tag": "Veldu merki",
              "Settings": "Stillingar",
              "Smileys & Emotion": "Broskallar og tilfinningar",
              "Start slideshow": "Byrja skyggnusýningu",
              "Symbols": "Tákn",
              "Travel & Places": "Staðir og ferðalög",
              "Unable to search the group": "Get ekki leitað í hópnum"
            }
          }, {
            "locale": "it",
            "translations": {
              "{tag} (invisible)": "{tag} (invisibile)",
              "{tag} (restricted)": "{tag} (limitato)",
              "Actions": "Azioni",
              "Activities": "Attività",
              "Animals & Nature": "Animali e natura",
              "Avatar of {displayName}": "Avatar di {displayName}",
              "Avatar of {displayName}, {status}": "Avatar di {displayName}, {status}",
              "Cancel changes": "Annulla modifiche",
              "Choose": "Scegli",
              "Close": "Chiudi",
              "Close navigation": "Chiudi la navigazione",
              "Confirm changes": "Conferma modifiche",
              "Custom": "Personalizzato",
              "Edit item": "Modifica l'elemento",
              "External documentation for {title}": "Documentazione esterna per {title}",
              "Flags": "Bandiere",
              "Food & Drink": "Cibo e bevande",
              "Frequently used": "Usati di frequente",
              "Global": "Globale",
              "Go back to the list": "Torna all'elenco",
              "Message limit of {count} characters reached": "Limite dei messaggi di {count} caratteri raggiunto",
              "Next": "Successivo",
              "No emoji found": "Nessun emoji trovato",
              "No results": "Nessun risultato",
              "Objects": "Oggetti",
              "Open navigation": "Apri la navigazione",
              "Pause slideshow": "Presentazione in pausa",
              "People & Body": "Persone e corpo",
              "Pick an emoji": "Scegli un emoji",
              "Please select a time zone:": "Si prega di selezionare un fuso orario:",
              "Previous": "Precedente",
              "Search": "Cerca",
              "Search results": "Risultati di ricerca",
              "Select a tag": "Seleziona un'etichetta",
              "Settings": "Impostazioni",
              "Settings navigation": "Navigazione delle impostazioni",
              "Smileys & Emotion": "Faccine ed emozioni",
              "Start slideshow": "Avvia presentazione",
              "Submit": "Invia",
              "Symbols": "Simboli",
              "Travel & Places": "Viaggi e luoghi",
              "Type to search time zone": "Digita per cercare un fuso orario",
              "Unable to search the group": "Impossibile cercare il gruppo",
              "Undo changes": "Cancella i cambiamenti",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Scrivi un messaggio, @ per menzionare qualcuno, : per il completamento automatico delle emoji ..."
            }
          }, {
            "locale": "ja_JP",
            "translations": {
              "{tag} (invisible)": "{タグ} (不可視)",
              "{tag} (restricted)": "{タグ} (制限付)",
              "Actions": "操作",
              "Activities": "アクティビティ",
              "Animals & Nature": "動物と自然",
              "Avatar of {displayName}": "{displayName} のアバター",
              "Avatar of {displayName}, {status}": "{displayName}, {status} のアバター",
              "Cancel changes": "変更をキャンセル",
              "Change title": "タイトルを変更",
              "Choose": "選択",
              "Close": "閉じる",
              "Close modal": "モーダルを閉じる",
              "Close navigation": "ナビゲーションを閉じる",
              "Close sidebar": "サイドバーを閉じる",
              "Confirm changes": "変更を承認",
              "Custom": "カスタム",
              "Edit item": "編集",
              "External documentation for {title}": "{title} のための添付文書",
              "Favorite": "お気に入り",
              "Flags": "国旗",
              "Food & Drink": "食べ物と飲み物",
              "Frequently used": "よく使うもの",
              "Global": "全体",
              "Go back to the list": "リストに戻る",
              "items": "アイテム",
              "Message limit of {count} characters reached": "{count} 文字のメッセージ上限に達しています",
              "More {dashboardItemType} …": "{dashboardItemType} をさらに表示…",
              "Next": "次",
              "No emoji found": "絵文字が見つかりません",
              "No results": "なし",
              "Objects": "物",
              "Open": "開く",
              "Open navigation": "ナビゲーションを開く",
              "Pause slideshow": "スライドショーを一時停止",
              "People & Body": "様々な人と体の部位",
              "Pick an emoji": "絵文字を選択",
              "Please select a time zone:": "タイムゾーンを選んで下さい：",
              "Previous": "前",
              "Search": "検索",
              "Search results": "検索結果",
              "Select a tag": "タグを選択",
              "Settings": "設定",
              "Settings navigation": "ナビゲーション設定",
              "Smileys & Emotion": "感情表現",
              "Start slideshow": "スライドショーを開始",
              "Submit": "提出",
              "Symbols": "記号",
              "Travel & Places": "旅行と場所",
              "Type to search time zone": "タイムゾーン検索のため入力してください",
              "Unable to search the group": "グループを検索できません",
              "Undo changes": "変更を取り消し",
              "Write message, @ to mention someone, : for emoji autocompletion …": "メッセージを書く、@で誰かを紹介する、: で絵文字を自動補完する ..."
            }
          }, {
            "locale": "lt_LT",
            "translations": {
              "{tag} (invisible)": "{tag} (nematoma)",
              "{tag} (restricted)": "{tag} (apribota)",
              "Actions": "Veiksmai",
              "Activities": "Veiklos",
              "Animals & Nature": "Gyvūnai ir gamta",
              "Choose": "Pasirinkti",
              "Close": "Užverti",
              "Custom": "Tinkinti",
              "External documentation for {title}": "Išorinė {title} dokumentacija",
              "Flags": "Vėliavos",
              "Food & Drink": "Maistas ir gėrimai",
              "Frequently used": "Dažniausiai naudoti",
              "Message limit of {count} characters reached": "Pasiekta {count} simbolių žinutės riba",
              "Next": "Kitas",
              "No emoji found": "Nerasta jaustukų",
              "No results": "Nėra rezultatų",
              "Objects": "Objektai",
              "Pause slideshow": "Pristabdyti skaidrių rodymą",
              "People & Body": "Žmonės ir kūnas",
              "Pick an emoji": "Pasirinkti jaustuką",
              "Previous": "Ankstesnis",
              "Search": "Ieškoti",
              "Search results": "Paieškos rezultatai",
              "Select a tag": "Pasirinkti žymę",
              "Settings": "Nustatymai",
              "Settings navigation": "Naršymas nustatymuose",
              "Smileys & Emotion": "Šypsenos ir emocijos",
              "Start slideshow": "Pradėti skaidrių rodymą",
              "Submit": "Pateikti",
              "Symbols": "Simboliai",
              "Travel & Places": "Kelionės ir vietos",
              "Unable to search the group": "Nepavyko atlikti paiešką grupėje",
              "Write message, @ to mention someone …": "Rašykite žinutę, naudokite @ norėdami kažką paminėti…"
            }
          }, {
            "locale": "lv",
            "translations": {
              "{tag} (invisible)": "{tag} (neredzams)",
              "{tag} (restricted)": "{tag} (ierobežots)",
              "Choose": "Izvēlēties",
              "Close": "Aizvērt",
              "Next": "Nākamais",
              "No results": "Nav rezultātu",
              "Pause slideshow": "Pauzēt slaidrādi",
              "Previous": "Iepriekšējais",
              "Select a tag": "Izvēlēties birku",
              "Settings": "Iestatījumi",
              "Start slideshow": "Sākt slaidrādi"
            }
          }, {
            "locale": "mk",
            "translations": {
              "{tag} (invisible)": "{tag} (невидливо)",
              "{tag} (restricted)": "{tag} (ограничено)",
              "Actions": "Акции",
              "Activities": "Активности",
              "Animals & Nature": "Животни & Природа",
              "Avatar of {displayName}": "Аватар на {displayName}",
              "Avatar of {displayName}, {status}": "Аватар на {displayName}, {status}",
              "Cancel changes": "Откажи ги промените",
              "Change title": "Промени наслов",
              "Choose": "Избери",
              "Close": "Затвори",
              "Close modal": "Затвори модал",
              "Close navigation": "Затвори навигација",
              "Confirm changes": "Потврди ги промените",
              "Custom": "Прилагодени",
              "Edit item": "Уреди",
              "External documentation for {title}": "Надворешна документација за {title}",
              "Favorite": "Фаворити",
              "Flags": "Знамиња",
              "Food & Drink": "Храна & Пијалоци",
              "Frequently used": "Најчесто користени",
              "Global": "Глобално",
              "Go back to the list": "Врати се на листата",
              "items": "ставки",
              "Message limit of {count} characters reached": "Ограничувањето на должината на пораката од {count} карактери е надминато",
              "More {dashboardItemType} …": "Повеќе {dashboardItemType} …",
              "Next": "Следно",
              "No emoji found": "Не се пронајдени емотикони",
              "No results": "Нема резултати",
              "Objects": "Објекти",
              "Open": "Отвори",
              "Open navigation": "Отвори навигација",
              "Pause slideshow": "Пузирај слајдшоу",
              "People & Body": "Луѓе & Тело",
              "Pick an emoji": "Избери емотикон",
              "Please select a time zone:": "Изберете временска зона:",
              "Previous": "Предходно",
              "Search": "Барај",
              "Search results": "Резултати од барувањето",
              "Select a tag": "Избери ознака",
              "Settings": "Параметри",
              "Settings navigation": "Параметри за навигација",
              "Smileys & Emotion": "Смешковци & Емотикони",
              "Start slideshow": "Стартувај слајдшоу",
              "Submit": "Испрати",
              "Symbols": "Симболи",
              "Travel & Places": "Патувања & Места",
              "Type to search time zone": "Напишете за да пребарате временска зона",
              "Unable to search the group": "Неможе да се принајде групата",
              "Undo changes": "Врати ги промените",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Напиши порака, @ за да спомнете некого, : за емотинони автоатско комплетирање ..."
            }
          }, {
            "locale": "my",
            "translations": {
              "{tag} (invisible)": "{tag} (ကွယ်ဝှက်ထား)",
              "{tag} (restricted)": "{tag} (ကန့်သတ်)",
              "Actions": "လုပ်ဆောင်ချက်များ",
              "Activities": "ပြုလုပ်ဆောင်တာများ",
              "Animals & Nature": "တိရစ္ဆာန်များနှင့် သဘာဝ",
              "Avatar of {displayName}": "{displayName} ၏ ကိုယ်ပွား",
              "Cancel changes": "ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်",
              "Choose": "ရွေးချယ်ရန်",
              "Close": "ပိတ်ရန်",
              "Confirm changes": "ပြောင်းလဲမှုများ အတည်ပြုရန်",
              "Custom": "အလိုကျချိန်ညှိမှု",
              "External documentation for {title}": "{title} အတွက် ပြင်ပ စာရွက်စာတမ်း",
              "Flags": "အလံများ",
              "Food & Drink": "အစားအသောက်",
              "Frequently used": "မကြာခဏအသုံးပြုသော",
              "Global": "ကမ္ဘာလုံးဆိုင်ရာ",
              "Message limit of {count} characters reached": "ကန့်သတ် စာလုံးရေ {count} လုံး ပြည့်ပါပြီ",
              "Next": "နောက်သို့ဆက်ရန်",
              "No emoji found": "အီမိုဂျီ ရှာဖွေမတွေ့နိုင်ပါ",
              "No results": "ရလဒ်မရှိပါ",
              "Objects": "အရာဝတ္ထုများ",
              "Pause slideshow": "စလိုက်ရှိုး ခေတ္တရပ်ရန်",
              "People & Body": "လူပုဂ္ဂိုလ်များနှင့် ခန္ဓာကိုယ်",
              "Pick an emoji": "အီမိုဂျီရွေးရန်",
              "Please select a time zone:": "ဒေသစံတော်ချိန် ရွေးချယ်ပေးပါ",
              "Previous": "ယခင်",
              "Search": "ရှာဖွေရန်",
              "Search results": "ရှာဖွေမှု ရလဒ်များ",
              "Select a tag": "tag ရွေးချယ်ရန်",
              "Settings": "ချိန်ညှိချက်များ",
              "Settings navigation": "ချိန်ညှိချက်အညွှန်း",
              "Smileys & Emotion": "စမိုင်လီများနှင့် အီမိုရှင်း",
              "Start slideshow": "စလိုက်ရှိုးအား စတင်ရန်",
              "Submit": "တင်သွင်းရန်",
              "Symbols": "သင်္ကေတများ",
              "Travel & Places": "ခရီးသွားလာခြင်းနှင့် နေရာများ",
              "Type to search time zone": "ဒေသစံတော်ချိန်များ ရှာဖွေရန် စာရိုက်ပါ",
              "Unable to search the group": "အဖွဲ့အား ရှာဖွေ၍ မရနိုင်ပါ",
              "Write message, @ to mention someone …": "စာရေးသားရန်၊ တစ်စုံတစ်ဦးအား @ အသုံးပြု ရည်ညွှန်းရန်..."
            }
          }, {
            "locale": "nb_NO",
            "translations": {
              "{tag} (invisible)": "{tag} (usynlig)",
              "{tag} (restricted)": "{tag} (beskyttet)",
              "Actions": "Handlinger",
              "Activities": "Aktiviteter",
              "Animals & Nature": "Dyr og natur",
              "Avatar of {displayName}": "Avataren til {displayName}",
              "Avatar of {displayName}, {status}": "{displayName}'s avatar, {status}",
              "Cancel changes": "Avbryt endringer",
              "Change title": "Endre tittel",
              "Choose": "Velg",
              "Close": "Lukk",
              "Close modal": "Lukk modal",
              "Close navigation": "Lukk navigasjon",
              "Close sidebar": "Lukk sidepanel",
              "Confirm changes": "Bekreft endringer",
              "Custom": "Tilpasset",
              "Edit item": "Rediger",
              "External documentation for {title}": "Ekstern dokumentasjon for {title}",
              "Favorite": "Favoritt",
              "Flags": "Flagg",
              "Food & Drink": "Mat og drikke",
              "Frequently used": "Ofte brukt",
              "Global": "Global",
              "Go back to the list": "Gå tilbake til listen",
              "items": "enheter",
              "Message limit of {count} characters reached": "Karakter begrensing {count} nådd i melding",
              "More {dashboardItemType} …": "Mer {dashboardItemType} …",
              "Next": "Neste",
              "No emoji found": "Fant ingen emoji",
              "No results": "Ingen resultater",
              "Objects": "Objekter",
              "Open": "Åpne",
              "Open navigation": "Åpne navigasjon",
              "Pause slideshow": "Pause lysbildefremvisning",
              "People & Body": "Mennesker og kropp",
              "Pick an emoji": "Velg en emoji",
              "Please select a time zone:": "Vennligst velg tidssone",
              "Previous": "Forrige",
              "Search": "Søk",
              "Search results": "Søkeresultater",
              "Select a tag": "Velg en merkelapp",
              "Settings": "Innstillinger",
              "Settings navigation": "Navigasjonsinstillinger",
              "Smileys & Emotion": "Smilefjes og følelser",
              "Start slideshow": "Start lysbildefremvisning",
              "Submit": "Send",
              "Symbols": "Symboler",
              "Travel & Places": "Reise og steder",
              "Type to search time zone": "Tast for å søke etter tidssone",
              "Unable to search the group": "Kunne ikke søke i gruppen",
              "Undo changes": "Tilbakestill endringer",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Skriv melding, @ for å nevne noen, : for emoji-autofullføring…"
            }
          }, {
            "locale": "nl",
            "translations": {
              "{tag} (invisible)": "{tag} (onzichtbaar)",
              "{tag} (restricted)": "{tag} (beperkt)",
              "Actions": "Acties",
              "Activities": "Activiteiten",
              "Animals & Nature": "Dieren & Natuur",
              "Avatar of {displayName}": "Avatar van {displayName}",
              "Avatar of {displayName}, {status}": "Avatar van {displayName}, {status}",
              "Cancel changes": "Wijzigingen annuleren",
              "Choose": "Kies",
              "Close": "Sluiten",
              "Close navigation": "Navigatie sluiten",
              "Confirm changes": "Wijzigingen bevestigen",
              "Custom": "Aangepast",
              "Edit item": "Item bewerken",
              "External documentation for {title}": "Externe documentatie voor {title}",
              "Flags": "Vlaggen",
              "Food & Drink": "Eten & Drinken",
              "Frequently used": "Vaak gebruikt",
              "Global": "Globaal",
              "Go back to the list": "Ga terug naar de lijst",
              "Message limit of {count} characters reached": "Berichtlimiet van {count} karakters bereikt",
              "Next": "Volgende",
              "No emoji found": "Geen emoji gevonden",
              "No results": "Geen resultaten",
              "Objects": "Objecten",
              "Open navigation": "Navigatie openen",
              "Pause slideshow": "Pauzeer diavoorstelling",
              "People & Body": "Mensen & Lichaam",
              "Pick an emoji": "Kies een emoji",
              "Please select a time zone:": "Selecteer een tijdzone:",
              "Previous": "Vorige",
              "Search": "Zoeken",
              "Search results": "Zoekresultaten",
              "Select a tag": "Selecteer een label",
              "Settings": "Instellingen",
              "Settings navigation": "Instellingen navigatie",
              "Smileys & Emotion": "Smileys & Emotie",
              "Start slideshow": "Start diavoorstelling",
              "Submit": "Verwerken",
              "Symbols": "Symbolen",
              "Travel & Places": "Reizen & Plaatsen",
              "Type to search time zone": "Type om de tijdzone te zoeken",
              "Unable to search the group": "Kan niet in de groep zoeken",
              "Undo changes": "Wijzigingen ongedaan maken",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Schrijf bericht, @ om iemand te noemen, : voor emoji auto-aanvullen ..."
            }
          }, {
            "locale": "oc",
            "translations": {
              "{tag} (invisible)": "{tag} (invisible)",
              "{tag} (restricted)": "{tag} (limit)",
              "Actions": "Accions",
              "Choose": "Causir",
              "Close": "Tampar",
              "Next": "Seguent",
              "No results": "Cap de resultat",
              "Pause slideshow": "Metre en pausa lo diaporama",
              "Previous": "Precedent",
              "Select a tag": "Seleccionar una etiqueta",
              "Settings": "Paramètres",
              "Start slideshow": "Lançar lo diaporama"
            }
          }, {
            "locale": "pl",
            "translations": {
              "{tag} (invisible)": "{tag} (niewidoczna)",
              "{tag} (restricted)": "{tag} (ograniczona)",
              "Actions": "Działania",
              "Activities": "Aktywność",
              "Animals & Nature": "Zwierzęta i natura",
              "Avatar of {displayName}": "Awatar {displayName}",
              "Avatar of {displayName}, {status}": "Awatar {displayName}, {status}",
              "Cancel changes": "Anuluj zmiany",
              "Change title": "Zmień tytuł",
              "Choose": "Wybierz",
              "Clear text": "Wyczyść tekst",
              "Close": "Zamknij",
              "Close modal": "Zamknij modal",
              "Close navigation": "Zamknij nawigację",
              "Close sidebar": "Zamknij pasek boczny",
              "Confirm changes": "Potwierdź zmiany",
              "Custom": "Zwyczajne",
              "Edit item": "Edytuj element",
              "External documentation for {title}": "Dokumentacja zewnętrzna dla {title}",
              "Favorite": "Ulubiony",
              "Flags": "Flagi",
              "Food & Drink": "Jedzenie i picie",
              "Frequently used": "Często używane",
              "Global": "Globalnie",
              "Go back to the list": "Powrót do listy",
              "Hide password": "Ukryj hasło",
              "items": "elementy",
              "Message limit of {count} characters reached": "Przekroczono limit wiadomości wynoszący {count} znaków",
              "More {dashboardItemType} …": "Więcej {dashboardItemType}…",
              "Next": "Następny",
              "No emoji found": "Nie znaleziono emotikonów",
              "No results": "Brak wyników",
              "Objects": "Obiekty",
              "Open": "Otwórz",
              "Open navigation": "Otwórz nawigację",
              "Password is secure": "Hasło jest bezpieczne",
              "Pause slideshow": "Wstrzymaj pokaz slajdów",
              "People & Body": "Ludzie i ciało",
              "Pick an emoji": "Wybierz emoji",
              "Please select a time zone:": "Wybierz strefę czasową:",
              "Previous": "Poprzedni",
              "Search": "Szukaj",
              "Search results": "Wyniki wyszukiwania",
              "Select a tag": "Wybierz etykietę",
              "Settings": "Ustawienia",
              "Settings navigation": "Ustawienia nawigacji",
              "Show password": "Pokaż hasło",
              "Smileys & Emotion": "Buźki i emotikony",
              "Start slideshow": "Rozpocznij pokaz slajdów",
              "Submit": "Wyślij",
              "Symbols": "Symbole",
              "Travel & Places": "Podróże i miejsca",
              "Type to search time zone": "Wpisz, aby wyszukać strefę czasową",
              "Unable to search the group": "Nie można przeszukać grupy",
              "Undo changes": "Cofnij zmiany",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Napisz wiadomość, @ aby o kimś wspomnieć, : dla autouzupełniania emotikon…"
            }
          }, {
            "locale": "pt_BR",
            "translations": {
              "{tag} (invisible)": "{tag} (invisível)",
              "{tag} (restricted)": "{tag} (restrito) ",
              "Actions": "Ações",
              "Activities": "Atividades",
              "Animals & Nature": "Animais & Natureza",
              "Avatar of {displayName}": "Avatar de {displayName}",
              "Avatar of {displayName}, {status}": "Avatar de {displayName}, {status}",
              "Cancel changes": "Cancelar alterações",
              "Change title": "Alterar título",
              "Choose": "Escolher",
              "Close": "Fechar",
              "Close modal": "Fechar modal",
              "Close navigation": "Fechar navegação",
              "Close sidebar": "Fechar barra lateral",
              "Confirm changes": "Confirmar alterações",
              "Custom": "Personalizado",
              "Edit item": "Editar item",
              "External documentation for {title}": "Documentação externa para {title}",
              "Favorite": "Favorito",
              "Flags": "Bandeiras",
              "Food & Drink": "Comida & Bebida",
              "Frequently used": "Mais usados",
              "Global": "Global",
              "Go back to the list": "Volte para a lista",
              "items": "itens",
              "Message limit of {count} characters reached": "Limite de mensagem de {count} caracteres atingido",
              "More {dashboardItemType} …": "Mais {dashboardItemType} …",
              "Next": "Próximo",
              "No emoji found": "Nenhum emoji encontrado",
              "No results": "Sem resultados",
              "Objects": "Objetos",
              "Open": "Aberto",
              "Open navigation": "Abrir navegação",
              "Pause slideshow": "Pausar apresentação de slides",
              "People & Body": "Pessoas & Corpo",
              "Pick an emoji": "Escolha um emoji",
              "Please select a time zone:": "Selecione um fuso horário: ",
              "Previous": "Anterior",
              "Search": "Pesquisar",
              "Search results": "Resultados da pesquisa",
              "Select a tag": "Selecionar uma tag",
              "Settings": "Configurações",
              "Settings navigation": "Navegação de configurações",
              "Smileys & Emotion": "Smiles & Emoções",
              "Start slideshow": "Iniciar apresentação de slides",
              "Submit": "Enviar",
              "Symbols": "Símbolo",
              "Travel & Places": "Viagem & Lugares",
              "Type to search time zone": "Digite para pesquisar o fuso horário ",
              "Unable to search the group": "Não foi possível pesquisar o grupo",
              "Undo changes": "Desfazer modificações",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Escreva mensagem, @ para mencionar alguém, : para autocompleção emoji..."
            }
          }, {
            "locale": "pt_PT",
            "translations": {
              "{tag} (invisible)": "{tag} (invisivel)",
              "{tag} (restricted)": "{tag} (restrito)",
              "Actions": "Ações",
              "Choose": "Escolher",
              "Close": "Fechar",
              "Next": "Seguinte",
              "No results": "Sem resultados",
              "Pause slideshow": "Pausar diaporama",
              "Previous": "Anterior",
              "Select a tag": "Selecionar uma etiqueta",
              "Settings": "Definições",
              "Start slideshow": "Iniciar diaporama",
              "Unable to search the group": "Não é possível pesquisar o grupo"
            }
          }, {
            "locale": "ro",
            "translations": {
              "{tag} (invisible)": "{tag} (invizibil)",
              "{tag} (restricted)": "{tag} (restricționat)",
              "Actions": "Acțiuni",
              "Activities": "Activități",
              "Animals & Nature": "Animale și natură",
              "Avatar of {displayName}": "Avatarul lui {displayName}",
              "Avatar of {displayName}, {status}": "Avatarul lui {displayName}, {status}",
              "Cancel changes": "Anulează modificările",
              "Change title": "Modificați titlul",
              "Choose": "Alegeți",
              "Close": "Închideți",
              "Close modal": "Închideți modulul",
              "Close navigation": "Închideți navigarea",
              "Close sidebar": "Închide bara laterală",
              "Confirm changes": "Confirmați modificările",
              "Custom": "Personalizat",
              "Edit item": "Editați elementul",
              "External documentation for {title}": "Documentație externă pentru {title}",
              "Favorite": "Favorit",
              "Flags": "Marcaje",
              "Food & Drink": "Alimente și băuturi",
              "Frequently used": "Utilizate frecvent",
              "Global": "Global",
              "Go back to the list": "Întoarceți-vă la listă",
              "items": "articole",
              "Message limit of {count} characters reached": "Limita mesajului de {count} caractere a fost atinsă",
              "More {dashboardItemType} …": "Mai multe {dashboardItemType} …",
              "Next": "Următorul",
              "No emoji found": "Nu s-a găsit niciun emoji",
              "No results": "Nu există rezultate",
              "Objects": "Obiecte",
              "Open": "Deschideți",
              "Open navigation": "Deschideți navigația",
              "Pause slideshow": "Pauză prezentare de diapozitive",
              "People & Body": "Oameni și corp",
              "Pick an emoji": "Alege un emoji",
              "Please select a time zone:": "Vă rugăm să selectați un fus orar:",
              "Previous": "Anterior",
              "Search": "Căutare",
              "Search results": "Rezultatele căutării",
              "Select a tag": "Selectați o etichetă",
              "Settings": "Setări",
              "Settings navigation": "Navigare setări",
              "Smileys & Emotion": "Zâmbete și emoții",
              "Start slideshow": "Începeți prezentarea de diapozitive",
              "Submit": "Trimiteți",
              "Symbols": "Simboluri",
              "Travel & Places": "Călătorii și locuri",
              "Type to search time zone": "Tastați pentru a căuta fusul orar",
              "Unable to search the group": "Imposibilitatea de a căuta în grup",
              "Undo changes": "Anularea modificărilor",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Scrieți un mesaj, @ pentru a menționa pe cineva, : pentru autocompletare emoji ..."
            }
          }, {
            "locale": "ru",
            "translations": {
              "{tag} (invisible)": "{tag} (невидимое)",
              "{tag} (restricted)": "{tag} (ограниченное)",
              "Actions": "Действия ",
              "Activities": "События",
              "Animals & Nature": "Животные и природа ",
              "Avatar of {displayName}": "Аватар {displayName}",
              "Avatar of {displayName}, {status}": "Фотография {displayName}, {status}",
              "Cancel changes": "Отменить изменения",
              "Choose": "Выберите",
              "Close": "Закрыть",
              "Close modal": "Закрыть модальное окно",
              "Close navigation": "Закрыть навигацию",
              "Confirm changes": "Подтвердить изменения",
              "Custom": "Пользовательское",
              "Edit item": "Изменить элемент",
              "External documentation for {title}": "Внешняя документация для {title}",
              "Flags": "Флаги",
              "Food & Drink": "Еда, напиток",
              "Frequently used": "Часто используемый",
              "Global": "Глобальный",
              "Go back to the list": "Вернуться к списку",
              "items": "элементов",
              "Message limit of {count} characters reached": "Достигнуто ограничение на количество символов в {count}",
              "More {dashboardItemType} …": "Больше {dashboardItemType} …",
              "Next": "Следующее",
              "No emoji found": "Эмодзи не найдено",
              "No results": "Результаты отсуствуют",
              "Objects": "Объекты",
              "Open": "Открыть",
              "Open navigation": "Открыть навигацию",
              "Pause slideshow": "Приостановить показ слйдов",
              "People & Body": "Люди и тело",
              "Pick an emoji": "Выберите эмодзи",
              "Please select a time zone:": "Пожалуйста, выберите часовой пояс:",
              "Previous": "Предыдущее",
              "Search": "Поиск",
              "Search results": "Результаты поиска",
              "Select a tag": "Выберите метку",
              "Settings": "Параметры",
              "Settings navigation": "Навигация по настройкам",
              "Smileys & Emotion": "Смайлики и эмоции",
              "Start slideshow": "Начать показ слайдов",
              "Submit": "Утвердить",
              "Symbols": "Символы",
              "Travel & Places": "Путешествия и места",
              "Type to search time zone": "Введите для поиска часового пояса",
              "Unable to search the group": "Невозможно найти группу",
              "Undo changes": "Отменить изменения",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Напишите сообщение, @ - чтобы упомянуть кого-то, : - для автозаполнения эмодзи …"
            }
          }, {
            "locale": "sk_SK",
            "translations": {
              "{tag} (invisible)": "{tag} (neviditeľný)",
              "{tag} (restricted)": "{tag} (obmedzený)",
              "Actions": "Akcie",
              "Activities": "Aktivity",
              "Animals & Nature": "Zvieratá a príroda",
              "Avatar of {displayName}": "Avatar {displayName}",
              "Avatar of {displayName}, {status}": "Avatar {displayName}, {status}",
              "Cancel changes": "Zrušiť zmeny",
              "Choose": "Vybrať",
              "Close": "Zatvoriť",
              "Close navigation": "Zavrieť navigáciu",
              "Confirm changes": "Potvrdiť zmeny",
              "Custom": "Zvyk",
              "Edit item": "Upraviť položku",
              "External documentation for {title}": "Externá dokumentácia pre {title}",
              "Flags": "Vlajky",
              "Food & Drink": "Jedlo a nápoje",
              "Frequently used": "Často používané",
              "Global": "Globálne",
              "Go back to the list": "Naspäť na zoznam",
              "Message limit of {count} characters reached": "Limit správy na {count} znakov dosiahnutý",
              "Next": "Ďalší",
              "No emoji found": "Nenašli sa žiadne emodži",
              "No results": "Žiadne výsledky",
              "Objects": "Objekty",
              "Open navigation": "Otvoriť navigáciu",
              "Pause slideshow": "Pozastaviť prezentáciu",
              "People & Body": "Ľudia a telo",
              "Pick an emoji": "Vyberte si emodži",
              "Please select a time zone:": "Prosím vyberte časovú zónu:",
              "Previous": "Predchádzajúci",
              "Search": "Hľadať",
              "Search results": "Výsledky vyhľadávania",
              "Select a tag": "Vybrať štítok",
              "Settings": "Nastavenia",
              "Settings navigation": "Navigácia v nastaveniach",
              "Smileys & Emotion": "Smajlíky a emócie",
              "Start slideshow": "Začať prezentáciu",
              "Submit": "Odoslať",
              "Symbols": "Symboly",
              "Travel & Places": "Cestovanie a miesta",
              "Type to search time zone": "Začníte písať pre vyhľadávanie časovej zóny",
              "Unable to search the group": "Skupinu sa nepodarilo nájsť",
              "Undo changes": "Vrátiť zmeny",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Napíšte správu, @ ak chcete niekoho spomenúť, : pre automatické dopĺňanie emotikonov…"
            }
          }, {
            "locale": "sl",
            "translations": {
              "{tag} (invisible)": "{tag} (nevidno)",
              "{tag} (restricted)": "{tag} (omejeno)",
              "Actions": "Dejanja",
              "Activities": "Dejavnosti",
              "Animals & Nature": "Živali in Narava",
              "Avatar of {displayName}": "Podoba {displayName}",
              "Avatar of {displayName}, {status}": "Prikazna slika {displayName}, {status}",
              "Cancel changes": "Prekliči spremembe",
              "Change title": "Spremeni naziv",
              "Choose": "Izbor",
              "Close": "Zapri",
              "Close modal": "Zapri pojavno okno",
              "Close navigation": "Zapri krmarjenje",
              "Close sidebar": "Zapri stransko vrstico",
              "Confirm changes": "Potrdi spremembe",
              "Custom": "Po meri",
              "Edit item": "Uredi postavko",
              "External documentation for {title}": "Zunanja dokumentacija za {title}",
              "Favorite": "Priljubljeno",
              "Flags": "Zastavice",
              "Food & Drink": "Hrana in Pijača",
              "Frequently used": "Pogostost uporabe",
              "Global": "Splošno",
              "Go back to the list": "Vrni se na seznam",
              "items": "Postavke",
              "Message limit of {count} characters reached": "Dosežena omejitev {count} znakov na sporočilo.",
              "More {dashboardItemType} …": "Več {dashboardItemType} …",
              "Next": "Naslednji",
              "No emoji found": "Ni najdenih izraznih ikon",
              "No results": "Ni zadetkov",
              "Objects": "Predmeti",
              "Open": "Odpri",
              "Open navigation": "Odpri navigacijo",
              "Pause slideshow": "Ustavi predstavitev",
              "People & Body": "Ljudje in Telo",
              "Pick an emoji": "Izbor izrazne ikone",
              "Please select a time zone:": "Izbor časovnega pasu:",
              "Previous": "Predhodni",
              "Search": "Iskanje",
              "Search results": "Zadetki iskanja",
              "Select a tag": "Izbor oznake",
              "Settings": "Nastavitve",
              "Settings navigation": "Krmarjenje nastavitev",
              "Smileys & Emotion": "Izrazne ikone",
              "Start slideshow": "Začni predstavitev",
              "Submit": "Pošlji",
              "Symbols": "Simboli",
              "Travel & Places": "Potovanja in Kraji",
              "Type to search time zone": "Vpišite niz za iskanje časovnega pasu",
              "Unable to search the group": "Ni mogoče iskati po skupini",
              "Undo changes": "Razveljavi spremembe",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Napišite sporočilo, @ da nekoga omenite, : za samodejno ponudbo emotikonov …"
            }
          }, {
            "locale": "sr",
            "translations": {
              "{tag} (invisible)": "{tag} (nevidljivo)",
              "{tag} (restricted)": "{tag} (ograničeno)",
              "Actions": "Radnje",
              "Activities": "Aktivnosti",
              "Animals & Nature": "Životinje i Priroda",
              "Avatar of {displayName}": "Avatar za {displayName}",
              "Avatar of {displayName}, {status}": "Avatar za {displayName}, {status}",
              "Cancel changes": "Otkaži izmene",
              "Change title": "Izmeni naziv",
              "Choose": "Изаберите",
              "Close": "Затвори",
              "Close modal": "Zatvori modal",
              "Close navigation": "Zatvori navigaciju",
              "Close sidebar": "Zatvori bočnu traku",
              "Confirm changes": "Potvrdite promene",
              "Custom": "Po meri",
              "Edit item": "Uredi stavku",
              "External documentation for {title}": "Eksterna dokumentacija za {title}",
              "Favorite": "Omiljeni",
              "Flags": "Zastave",
              "Food & Drink": "Hrana i Piće",
              "Frequently used": "Često korišćeno",
              "Global": "Globalno",
              "Go back to the list": "Natrag na listu",
              "items": "stavke",
              "Message limit of {count} characters reached": "Dostignuto je ograničenje za poruke od {count} znakova",
              "More {dashboardItemType} …": "Više  {dashboardItemType} …",
              "Next": "Следеће",
              "No emoji found": "Nije pronađen nijedan emodži",
              "No results": "Нема резултата",
              "Objects": "Objekti",
              "Open": "Otvori",
              "Open navigation": "Otvori navigaciju",
              "Pause slideshow": "Паузирај слајд шоу",
              "People & Body": "Ljudi i Telo",
              "Pick an emoji": "Izaberi emodži",
              "Please select a time zone:": "Molimo izaberite vremensku zonu:",
              "Previous": "Претходно",
              "Search": "Pretraži",
              "Search results": "Rezultati pretrage",
              "Select a tag": "Изаберите ознаку",
              "Settings": "Поставке",
              "Settings navigation": "Navigacija u podešavanjima",
              "Smileys & Emotion": "Smajli i Emocije",
              "Start slideshow": "Покрени слајд шоу",
              "Submit": "Prihvati",
              "Symbols": "Simboli",
              "Travel & Places": "Putovanja i Mesta",
              "Type to search time zone": "Ukucaj da pretražiš vremenske zone",
              "Unable to search the group": "Nije moguće pretražiti grupu",
              "Undo changes": "Poništi promene",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Napišite poruku, @ da pomenete nekoga, : za automatsko dovršavanje emodžija…"
            }
          }, {
            "locale": "sv",
            "translations": {
              "{tag} (invisible)": "{tag} (osynlig)",
              "{tag} (restricted)": "{tag} (begränsad)",
              "Actions": "Åtgärder",
              "Activities": "Aktiviteter",
              "Animals & Nature": "Djur & Natur",
              "Avatar of {displayName}": "{displayName}s avatar",
              "Avatar of {displayName}, {status}": "{displayName}s avatar, {status}",
              "Cancel changes": "Avbryt ändringar",
              "Choose": "Välj",
              "Close": "Stäng",
              "Close navigation": "Stäng navigering",
              "Confirm changes": "Bekräfta ändringar",
              "Custom": "Anpassad",
              "Edit item": "Ändra",
              "External documentation for {title}": "Extern dokumentation för {title}",
              "Flags": "Flaggor",
              "Food & Drink": "Mat & Dryck",
              "Frequently used": "Används ofta",
              "Global": "Global",
              "Go back to the list": "Gå tillbaka till listan",
              "Message limit of {count} characters reached": "Meddelandegräns {count} tecken används",
              "Next": "Nästa",
              "No emoji found": "Hittade inga emojis",
              "No results": "Inga resultat",
              "Objects": "Objekt",
              "Open navigation": "Öppna navigering",
              "Pause slideshow": "Pausa bildspelet",
              "People & Body": "Kropp & Själ",
              "Pick an emoji": "Välj en emoji",
              "Please select a time zone:": "Välj tidszon:",
              "Previous": "Föregående",
              "Search": "Sök",
              "Search results": "Sökresultat",
              "Select a tag": "Välj en tag",
              "Settings": "Inställningar",
              "Settings navigation": "Inställningsmeny",
              "Smileys & Emotion": "Selfies & Känslor",
              "Start slideshow": "Starta bildspelet",
              "Submit": "Skicka",
              "Symbols": "Symboler",
              "Travel & Places": "Resor & Sevärdigheter",
              "Type to search time zone": "Skriv för att välja tidszon",
              "Unable to search the group": "Kunde inte söka i gruppen",
              "Undo changes": "Ångra ändringar",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Skriv meddelande, @ för att nämna någon, : för automatiska emojiförslag ..."
            }
          }, {
            "locale": "tr",
            "translations": {
              "{tag} (invisible)": "{tag} (görünmez)",
              "{tag} (restricted)": "{tag} (kısıtlı)",
              "Actions": "İşlemler",
              "Activities": "Etkinlikler",
              "Animals & Nature": "Hayvanlar ve Doğa",
              "Avatar of {displayName}": "{displayName} avatarı",
              "Avatar of {displayName}, {status}": "{displayName}, {status} avatarı",
              "Cancel changes": "Değişiklikleri iptal et",
              "Change title": "Başlığı değiştir",
              "Choose": "Seçin",
              "Clear text": "Metni temizle",
              "Close": "Kapat",
              "Close modal": "Üste açılan pencereyi kapat",
              "Close navigation": "Gezinmeyi kapat",
              "Close sidebar": "Yan çubuğu kapat",
              "Confirm changes": "Değişiklikleri onayla",
              "Custom": "Özel",
              "Edit item": "Ögeyi düzenle",
              "External documentation for {title}": "{title} için dış belgeler",
              "Favorite": "Sık kullanılanlara ekle",
              "Flags": "Bayraklar",
              "Food & Drink": "Yeme ve İçme",
              "Frequently used": "Sık kullanılanlar",
              "Global": "Evrensel",
              "Go back to the list": "Listeye dön",
              "Hide password": "Parolayı gizle",
              "items": "ögeler",
              "Message limit of {count} characters reached": "{count} karakter ileti sınırına ulaşıldı",
              "More {dashboardItemType} …": "Diğer {dashboardItemType} ögeleri…",
              "Next": "Sonraki",
              "No emoji found": "Herhangi bir emoji bulunamadı",
              "No results": "Herhangi bir sonuç bulunamadı",
              "Objects": "Nesneler",
              "Open": "Aç",
              "Open navigation": "Gezinmeyi aç",
              "Password is secure": "Parola güvenli",
              "Pause slideshow": "Slayt sunumunu duraklat",
              "People & Body": "İnsanlar ve Beden",
              "Pick an emoji": "Bir emoji seçin",
              "Please select a time zone:": "Lütfen bir saat dilimi seçin:",
              "Previous": "Önceki",
              "Search": "Arama",
              "Search results": "Arama sonuçları",
              "Select a tag": "Bir etiket seçin",
              "Settings": "Ayarlar",
              "Settings navigation": "Gezinme ayarları",
              "Show password": "Parolayı görüntüle",
              "Smileys & Emotion": "İfadeler ve Duygular",
              "Start slideshow": "Slayt sunumunu başlat",
              "Submit": "Gönder",
              "Symbols": "Simgeler",
              "Travel & Places": "Gezi ve Yerler",
              "Type to search time zone": "Saat dilimi aramak için yazmaya başlayın",
              "Unable to search the group": "Grupta arama yapılamadı",
              "Undo changes": "Değişiklikleri geri al",
              "Write message, @ to mention someone, : for emoji autocompletion …": "İleti yazın, birini anmak için @, otomatik emoji tamamlamak için : kullanın…"
            }
          }, {
            "locale": "uk",
            "translations": {
              "{tag} (invisible)": "{tag} (невидимий)",
              "{tag} (restricted)": "{tag} (обмежений)",
              "Actions": "Дії",
              "Activities": "Діяльність",
              "Animals & Nature": "Тварини та природа",
              "Avatar of {displayName}": "Аватар {displayName}",
              "Avatar of {displayName}, {status}": "Аватар {displayName}, {status}",
              "Cancel changes": "Скасувати зміни",
              "Change title": "Змінити назву",
              "Choose": "ВиберітьВиберіть",
              "Clear text": "Очистити текст",
              "Close": "Закрити",
              "Close modal": "Закрити модаль",
              "Close navigation": "Закрити навігацію",
              "Close sidebar": "Закрити бічну панель",
              "Confirm changes": "Підтвердити зміни",
              "Custom": "Власне",
              "Edit item": "Редагувати елемент",
              "External documentation for {title}": "Зовнішня документація для {title}",
              "Favorite": "Улюблений",
              "Flags": "Прапори",
              "Food & Drink": "Їжа та напої",
              "Frequently used": "Найчастіші",
              "Global": "Глобальний",
              "Go back to the list": "Повернутися до списку",
              "Hide password": "Приховати пароль",
              "items": "елементи",
              "Message limit of {count} characters reached": "Вичерпано ліміт у {count} символів для повідомлення",
              "More {dashboardItemType} …": "Більше {dashboardItemType}…",
              "Next": "Вперед",
              "No emoji found": "Емоційки відсутні",
              "No results": "Відсутні результати",
              "Objects": "Об'єкти",
              "Open": "Відкрити",
              "Open navigation": "Відкрити навігацію",
              "Password is secure": "Пароль безпечний",
              "Pause slideshow": "Пауза у показі слайдів",
              "People & Body": "Люди та жести",
              "Pick an emoji": "Виберіть емоційку",
              "Please select a time zone:": "Виберіть часовий пояс:",
              "Previous": "Назад",
              "Search": "Пошук",
              "Search results": "Результати пошуку",
              "Select a tag": "Виберіть позначку",
              "Settings": "Налаштування",
              "Settings navigation": "Навігація у налаштуваннях",
              "Show password": "Показати пароль",
              "Smileys & Emotion": "Смайли та емоції",
              "Start slideshow": "Почати показ слайдів",
              "Submit": "Надіслати",
              "Symbols": "Символи",
              "Travel & Places": "Поїздки та місця",
              "Type to search time zone": "Введіть для пошуку часовий пояс",
              "Unable to search the group": "Неможливо шукати в групі",
              "Undo changes": "Скасувати зміни",
              "Write message, @ to mention someone, : for emoji autocompletion …": "Напишіть повідомлення, @, щоб згадати когось, : для автозаповнення емодзі…"
            }
          }, {
            "locale": "zh_CN",
            "translations": {
              "{tag} (invisible)": "{tag} （不可见）",
              "{tag} (restricted)": "{tag} （受限）",
              "Actions": "行为",
              "Activities": "活动",
              "Animals & Nature": "动物 & 自然",
              "Avatar of {displayName}": "{displayName}的头像",
              "Avatar of {displayName}, {status}": "{displayName}的头像，{status}",
              "Cancel changes": "取消更改",
              "Choose": "选择",
              "Close": "关闭",
              "Close navigation": "关闭导航",
              "Confirm changes": "确认更改",
              "Custom": "自定义",
              "Edit item": "编辑项目",
              "External documentation for {title}": "{title}的外部文档",
              "Flags": "旗帜",
              "Food & Drink": "食物 & 饮品",
              "Frequently used": "经常使用",
              "Global": "全局",
              "Go back to the list": "返回至列表",
              "Message limit of {count} characters reached": "已达到 {count} 个字符的消息限制",
              "Next": "下一个",
              "No emoji found": "表情未找到",
              "No results": "无结果",
              "Objects": "物体",
              "Open navigation": "开启导航",
              "Pause slideshow": "暂停幻灯片",
              "People & Body": "人 & 身体",
              "Pick an emoji": "选择一个表情",
              "Please select a time zone:": "请选择一个时区：",
              "Previous": "上一个",
              "Search": "搜索",
              "Search results": "搜索结果",
              "Select a tag": "选择一个标签",
              "Settings": "设置",
              "Settings navigation": "设置向导",
              "Smileys & Emotion": "笑脸 & 情感",
              "Start slideshow": "开始幻灯片",
              "Submit": "提交",
              "Symbols": "符号",
              "Travel & Places": "旅游 & 地点",
              "Type to search time zone": "打字以搜索时区",
              "Unable to search the group": "无法搜索分组",
              "Undo changes": "撤销更改",
              "Write message, @ to mention someone, : for emoji autocompletion …": "写信息，@ 提到某人，: 用于表情符号自动完成 ..."
            }
          }, {
            "locale": "zh_HK",
            "translations": {
              "{tag} (invisible)": "{tag} (隱藏)",
              "{tag} (restricted)": "{tag} (受限)",
              "Actions": "動作",
              "Activities": "活動",
              "Animals & Nature": "動物與自然",
              "Avatar of {displayName}": "{displayName} 的頭像",
              "Avatar of {displayName}, {status}": "{displayName} 的頭像，{status}",
              "Cancel changes": "取消更改",
              "Choose": "選擇",
              "Close": "關閉",
              "Close modal": "關閉模態",
              "Close navigation": "關閉導航",
              "Confirm changes": "確認更改",
              "Custom": "自定義",
              "Edit item": "編輯項目",
              "External documentation for {title}": "{title} 的外部文檔",
              "Flags": "旗幟",
              "Food & Drink": "食物與飲料",
              "Frequently used": "經常使用",
              "Global": "全球的",
              "Go back to the list": "返回清單",
              "items": "項目",
              "Message limit of {count} characters reached": "已達到訊息最多 {count} 字元限制",
              "More {dashboardItemType} …": "更多 {dashboardItemType} …",
              "Next": "下一個",
              "No emoji found": "未找到表情符號",
              "No results": "無結果",
              "Objects": "物件",
              "Open navigation": "開啟導航",
              "Pause slideshow": "暫停幻燈片",
              "People & Body": "人物",
              "Pick an emoji": "選擇表情符號",
              "Please select a time zone:": "請選擇時區：",
              "Previous": "上一個",
              "Search": "搜尋",
              "Search results": "搜尋結果",
              "Select a tag": "選擇標籤",
              "Settings": "設定",
              "Settings navigation": "設定值導覽",
              "Smileys & Emotion": "表情",
              "Start slideshow": "開始幻燈片",
              "Submit": "提交",
              "Symbols": "標誌",
              "Travel & Places": "旅遊與景點",
              "Type to search time zone": "鍵入以搜索時區",
              "Unable to search the group": "無法搜尋群組",
              "Undo changes": "取消更改",
              "Write message, @ to mention someone, : for emoji autocompletion …": "寫訊息，使用 @ 來指代某人，使用：用於表情符號自動填充 ..."
            }
          }, {
            "locale": "zh_TW",
            "translations": {
              "{tag} (invisible)": "{tag} (隱藏)",
              "{tag} (restricted)": "{tag} (受限)",
              "Actions": "動作",
              "Activities": "活動",
              "Animals & Nature": "動物與自然",
              "Choose": "選擇",
              "Close": "關閉",
              "Custom": "自定義",
              "Flags": "旗幟",
              "Food & Drink": "食物與飲料",
              "Frequently used": "最近使用",
              "Message limit of {count} characters reached": "已達到訊息最多 {count} 字元限制",
              "Next": "下一個",
              "No emoji found": "未找到表情符號",
              "No results": "無結果",
              "Objects": "物件",
              "Pause slideshow": "暫停幻燈片",
              "People & Body": "人物",
              "Pick an emoji": "選擇表情符號",
              "Previous": "上一個",
              "Search": "搜尋",
              "Search results": "搜尋結果",
              "Select a tag": "選擇標籤",
              "Settings": "設定",
              "Settings navigation": "設定值導覽",
              "Smileys & Emotion": "表情",
              "Start slideshow": "開始幻燈片",
              "Symbols": "標誌",
              "Travel & Places": "旅遊與景點",
              "Unable to search the group": "無法搜尋群組",
              "Write message, @ to mention someone …": "輸入訊息時可使用 @ 來標示某人..."
            }
          }].forEach(function (lang) {
            var translations = {};

            for (var key in lang.translations) {
              // Plural
              if (lang.translations[key].pluralId) {
                translations[key] = {
                  msgid: key,
                  msgid_plural: lang.translations[key].pluralId,
                  msgstr: lang.translations[key].msgstr
                };
                continue;
              } // Singular


              translations[key] = {
                msgid: key,
                msgstr: [lang.translations[key]]
              };
            }

            gtBuilder.addTranslation(lang.locale, {
              translations: {
                '': translations
              }
            });
          });
          var gt = gtBuilder.build();

          var _n = gt.ngettext.bind(gt);

          var _t = gt.gettext.bind(gt);
          /***/

        },

        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=style&index=0&id=0e88f06b&lang=scss&scoped=true&":
        /*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=style&index=0&id=0e88f06b&lang=scss&scoped=true& ***!
          \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcSettingsSectionNcSettingsSectionVueVueTypeStyleIndex0Id0e88f06bLangScssScopedTrue(module, __webpack_exports__, __nested_webpack_require_108731__) {
          "use strict";

          __nested_webpack_require_108731__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_108731__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_108731__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_108731__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_108731__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__); // Imports


          var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()); // Module


          ___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-0e88f06b] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.settings-section[data-v-0e88f06b] {\n  display: block;\n  margin-bottom: auto;\n  padding: 30px;\n}\n.settings-section[data-v-0e88f06b]:not(:last-child) {\n  border-bottom: 1px solid var(--color-border);\n}\n.settings-section__title[data-v-0e88f06b] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: bold;\n}\n.settings-section__info[data-v-0e88f06b] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  margin: -14px;\n  margin-left: 0;\n  opacity: 0.7;\n}\n.settings-section__info[data-v-0e88f06b]:hover, .settings-section__info[data-v-0e88f06b]:focus, .settings-section__info[data-v-0e88f06b]:active {\n  opacity: 1;\n}\n.settings-section__desc[data-v-0e88f06b] {\n  margin-top: -0.2em;\n  margin-bottom: 1em;\n  opacity: 0.7;\n}", ""]); // Exports

          /* harmony default export */


          __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
          /***/
        },

        /***/
        "./node_modules/css-loader/dist/runtime/api.js":
        /*!*****************************************************!*\
          !*** ./node_modules/css-loader/dist/runtime/api.js ***!
          \*****************************************************/

        /***/
        function node_modulesCssLoaderDistRuntimeApiJs(module) {
          "use strict";
          /*
            MIT License http://www.opensource.org/licenses/mit-license.php
            Author Tobias Koppers @sokra
          */

          module.exports = function (cssWithMappingToString) {
            var list = []; // return the list of modules as css string

            list.toString = function toString() {
              return this.map(function (item) {
                var content = "";
                var needLayer = typeof item[5] !== "undefined";

                if (item[4]) {
                  content += "@supports (".concat(item[4], ") {");
                }

                if (item[2]) {
                  content += "@media ".concat(item[2], " {");
                }

                if (needLayer) {
                  content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
                }

                content += cssWithMappingToString(item);

                if (needLayer) {
                  content += "}";
                }

                if (item[2]) {
                  content += "}";
                }

                if (item[4]) {
                  content += "}";
                }

                return content;
              }).join("");
            }; // import a list of modules into the list


            list.i = function i(modules, media, dedupe, supports, layer) {
              if (typeof modules === "string") {
                modules = [[null, modules, undefined]];
              }

              var alreadyImportedModules = {};

              if (dedupe) {
                for (var k = 0; k < this.length; k++) {
                  var id = this[k][0];

                  if (id != null) {
                    alreadyImportedModules[id] = true;
                  }
                }
              }

              for (var _k = 0; _k < modules.length; _k++) {
                var item = [].concat(modules[_k]);

                if (dedupe && alreadyImportedModules[item[0]]) {
                  continue;
                }

                if (typeof layer !== "undefined") {
                  if (typeof item[5] === "undefined") {
                    item[5] = layer;
                  } else {
                    item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
                    item[5] = layer;
                  }
                }

                if (media) {
                  if (!item[2]) {
                    item[2] = media;
                  } else {
                    item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
                    item[2] = media;
                  }
                }

                if (supports) {
                  if (!item[4]) {
                    item[4] = "".concat(supports);
                  } else {
                    item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
                    item[4] = supports;
                  }
                }

                list.push(item);
              }
            };

            return list;
          };
          /***/

        },

        /***/
        "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
        /*!**************************************************************!*\
          !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
          \**************************************************************/

        /***/
        function node_modulesCssLoaderDistRuntimeNoSourceMapsJs(module) {
          "use strict";

          module.exports = function (i) {
            return i[1];
          };
          /***/

        },

        /***/
        "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=style&index=0&id=0e88f06b&lang=scss&scoped=true&":
        /*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=style&index=0&id=0e88f06b&lang=scss&scoped=true& ***!
          \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesStyleLoaderDistCjsJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcSettingsSectionNcSettingsSectionVueVueTypeStyleIndex0Id0e88f06bLangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_118537__) {
          "use strict";

          __nested_webpack_require_118537__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_118537__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_118537__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_118537__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_118537__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_118537__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_118537__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_118537__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_118537__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_118537__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_118537__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_118537__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_118537__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcSettingsSection_vue_vue_type_style_index_0_id_0e88f06b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_118537__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcSettingsSection.vue?vue&type=style&index=0&id=0e88f06b&lang=scss&scoped=true& */
          "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=style&index=0&id=0e88f06b&lang=scss&scoped=true&");

          var options = {};
          options.styleTagTransform = _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
          options.setAttributes = _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
          options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
          options.domAPI = _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
          options.insertStyleElement = _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

          var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcSettingsSection_vue_vue_type_style_index_0_id_0e88f06b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcSettingsSection_vue_vue_type_style_index_0_id_0e88f06b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcSettingsSection_vue_vue_type_style_index_0_id_0e88f06b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcSettingsSection_vue_vue_type_style_index_0_id_0e88f06b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined;
          /***/
        },

        /***/
        "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
        /*!****************************************************************************!*\
          !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
          \****************************************************************************/

        /***/
        function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module) {
          "use strict";

          var stylesInDOM = [];

          function getIndexByIdentifier(identifier) {
            var result = -1;

            for (var i = 0; i < stylesInDOM.length; i++) {
              if (stylesInDOM[i].identifier === identifier) {
                result = i;
                break;
              }
            }

            return result;
          }

          function modulesToDom(list, options) {
            var idCountMap = {};
            var identifiers = [];

            for (var i = 0; i < list.length; i++) {
              var item = list[i];
              var id = options.base ? item[0] + options.base : item[0];
              var count = idCountMap[id] || 0;
              var identifier = "".concat(id, " ").concat(count);
              idCountMap[id] = count + 1;
              var indexByIdentifier = getIndexByIdentifier(identifier);
              var obj = {
                css: item[1],
                media: item[2],
                sourceMap: item[3],
                supports: item[4],
                layer: item[5]
              };

              if (indexByIdentifier !== -1) {
                stylesInDOM[indexByIdentifier].references++;
                stylesInDOM[indexByIdentifier].updater(obj);
              } else {
                var updater = addElementStyle(obj, options);
                options.byIndex = i;
                stylesInDOM.splice(i, 0, {
                  identifier: identifier,
                  updater: updater,
                  references: 1
                });
              }

              identifiers.push(identifier);
            }

            return identifiers;
          }

          function addElementStyle(obj, options) {
            var api = options.domAPI(options);
            api.update(obj);

            var updater = function updater(newObj) {
              if (newObj) {
                if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
                  return;
                }

                api.update(obj = newObj);
              } else {
                api.remove();
              }
            };

            return updater;
          }

          module.exports = function (list, options) {
            options = options || {};
            list = list || [];
            var lastIdentifiers = modulesToDom(list, options);
            return function update(newList) {
              newList = newList || [];

              for (var i = 0; i < lastIdentifiers.length; i++) {
                var identifier = lastIdentifiers[i];
                var index = getIndexByIdentifier(identifier);
                stylesInDOM[index].references--;
              }

              var newLastIdentifiers = modulesToDom(newList, options);

              for (var _i = 0; _i < lastIdentifiers.length; _i++) {
                var _identifier = lastIdentifiers[_i];

                var _index = getIndexByIdentifier(_identifier);

                if (stylesInDOM[_index].references === 0) {
                  stylesInDOM[_index].updater();

                  stylesInDOM.splice(_index, 1);
                }
              }

              lastIdentifiers = newLastIdentifiers;
            };
          };
          /***/

        },

        /***/
        "./node_modules/style-loader/dist/runtime/insertBySelector.js":
        /*!********************************************************************!*\
          !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
          \********************************************************************/

        /***/
        function node_modulesStyleLoaderDistRuntimeInsertBySelectorJs(module) {
          "use strict";

          var memo = {};
          /* istanbul ignore next  */

          function getTarget(target) {
            if (typeof memo[target] === "undefined") {
              var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

              if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                try {
                  // This will throw an exception if access to iframe is blocked
                  // due to cross-origin restrictions
                  styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                  // istanbul ignore next
                  styleTarget = null;
                }
              }

              memo[target] = styleTarget;
            }

            return memo[target];
          }
          /* istanbul ignore next  */


          function insertBySelector(insert, style) {
            var target = getTarget(insert);

            if (!target) {
              throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            }

            target.appendChild(style);
          }

          module.exports = insertBySelector;
          /***/
        },

        /***/
        "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
        /*!**********************************************************************!*\
          !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
          \**********************************************************************/

        /***/
        function node_modulesStyleLoaderDistRuntimeInsertStyleElementJs(module) {
          "use strict";
          /* istanbul ignore next  */

          function insertStyleElement(options) {
            var element = document.createElement("style");
            options.setAttributes(element, options.attributes);
            options.insert(element, options.options);
            return element;
          }

          module.exports = insertStyleElement;
          /***/
        },

        /***/
        "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
        /*!**********************************************************************************!*\
          !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
          \**********************************************************************************/

        /***/
        function node_modulesStyleLoaderDistRuntimeSetAttributesWithoutAttributesJs(module, __unused_webpack_exports, __nested_webpack_require_132923__) {
          "use strict";
          /* istanbul ignore next  */

          function setAttributesWithoutAttributes(styleElement) {
            var nonce =  true ? __nested_webpack_require_132923__.nc : 0;

            if (nonce) {
              styleElement.setAttribute("nonce", nonce);
            }
          }

          module.exports = setAttributesWithoutAttributes;
          /***/
        },

        /***/
        "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
        /*!***************************************************************!*\
          !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
          \***************************************************************/

        /***/
        function node_modulesStyleLoaderDistRuntimeStyleDomAPIJs(module) {
          "use strict";
          /* istanbul ignore next  */

          function apply(styleElement, options, obj) {
            var css = "";

            if (obj.supports) {
              css += "@supports (".concat(obj.supports, ") {");
            }

            if (obj.media) {
              css += "@media ".concat(obj.media, " {");
            }

            var needLayer = typeof obj.layer !== "undefined";

            if (needLayer) {
              css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
            }

            css += obj.css;

            if (needLayer) {
              css += "}";
            }

            if (obj.media) {
              css += "}";
            }

            if (obj.supports) {
              css += "}";
            }

            var sourceMap = obj.sourceMap;

            if (sourceMap && typeof btoa !== "undefined") {
              css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
            } // For old IE

            /* istanbul ignore if  */


            options.styleTagTransform(css, styleElement, options.options);
          }

          function removeStyleElement(styleElement) {
            // istanbul ignore if
            if (styleElement.parentNode === null) {
              return false;
            }

            styleElement.parentNode.removeChild(styleElement);
          }
          /* istanbul ignore next  */


          function domAPI(options) {
            var styleElement = options.insertStyleElement(options);
            return {
              update: function update(obj) {
                apply(styleElement, options, obj);
              },
              remove: function remove() {
                removeStyleElement(styleElement);
              }
            };
          }

          module.exports = domAPI;
          /***/
        },

        /***/
        "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
        /*!*********************************************************************!*\
          !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
          \*********************************************************************/

        /***/
        function node_modulesStyleLoaderDistRuntimeStyleTagTransformJs(module) {
          "use strict";
          /* istanbul ignore next  */

          function styleTagTransform(css, styleElement) {
            if (styleElement.styleSheet) {
              styleElement.styleSheet.cssText = css;
            } else {
              while (styleElement.firstChild) {
                styleElement.removeChild(styleElement.firstChild);
              }

              styleElement.appendChild(document.createTextNode(css));
            }
          }

          module.exports = styleTagTransform;
          /***/
        },

        /***/
        "./src/components/NcSettingsSection/NcSettingsSection.vue":
        /*!****************************************************************!*\
          !*** ./src/components/NcSettingsSection/NcSettingsSection.vue ***!
          \****************************************************************/

        /***/
        function srcComponentsNcSettingsSectionNcSettingsSectionVue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_137099__) {
          "use strict";

          __nested_webpack_require_137099__.r(__webpack_exports__);
          /* harmony import */


          var _NcSettingsSection_vue_vue_type_template_id_0e88f06b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_137099__(
          /*! ./NcSettingsSection.vue?vue&type=template&id=0e88f06b&scoped=true& */
          "./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=template&id=0e88f06b&scoped=true&");
          /* harmony import */


          var _NcSettingsSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_137099__(
          /*! ./NcSettingsSection.vue?vue&type=script&lang=js& */
          "./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=script&lang=js&");
          /* harmony import */


          var _NcSettingsSection_vue_vue_type_style_index_0_id_0e88f06b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_137099__(
          /*! ./NcSettingsSection.vue?vue&type=style&index=0&id=0e88f06b&lang=scss&scoped=true& */
          "./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=style&index=0&id=0e88f06b&lang=scss&scoped=true&");
          /* harmony import */


          var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_137099__(
          /*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
          "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
          /* harmony import */


          var _NcSettingsSection_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_137099__(
          /*! ./NcSettingsSection.vue?vue&type=custom&index=0&blockType=docs */
          "./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=custom&index=0&blockType=docs");
          /* harmony import */


          var _NcSettingsSection_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_137099__.n(_NcSettingsSection_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__);

          ;
          /* normalize component */

          var component = (0, _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_NcSettingsSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _NcSettingsSection_vue_vue_type_template_id_0e88f06b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render, _NcSettingsSection_vue_vue_type_template_id_0e88f06b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns, false, null, "0e88f06b", null)
          /* custom blocks */
          ;
          if (typeof _NcSettingsSection_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default() === 'function') _NcSettingsSection_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default()(component);
          /* hot reload */

          if (false) { var api; }

          component.options.__file = "src/components/NcSettingsSection/NcSettingsSection.vue";
          /* harmony default export */

          __webpack_exports__["default"] = component.exports;
          /***/
        },

        /***/
        "./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=script&lang=js&":
        /*!*****************************************************************************************!*\
          !*** ./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=script&lang=js& ***!
          \*****************************************************************************************/

        /***/
        function srcComponentsNcSettingsSectionNcSettingsSectionVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_140910__) {
          "use strict";

          __nested_webpack_require_140910__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcSettingsSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_140910__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcSettingsSection.vue?vue&type=script&lang=js& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=script&lang=js&");
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcSettingsSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
          /***/
        },

        /***/
        "./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=template&id=0e88f06b&scoped=true&":
        /*!***********************************************************************************************************!*\
          !*** ./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=template&id=0e88f06b&scoped=true& ***!
          \***********************************************************************************************************/

        /***/
        function srcComponentsNcSettingsSectionNcSettingsSectionVueVueTypeTemplateId0e88f06bScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_142579__) {
          "use strict";

          __nested_webpack_require_142579__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_142579__.d(__webpack_exports__, {
            /* harmony export */
            "render": function render() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcSettingsSection_vue_vue_type_template_id_0e88f06b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render
              );
            },

            /* harmony export */
            "staticRenderFns": function staticRenderFns() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcSettingsSection_vue_vue_type_template_id_0e88f06b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
              );
            }
            /* harmony export */

          });
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcSettingsSection_vue_vue_type_template_id_0e88f06b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_142579__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcSettingsSection.vue?vue&type=template&id=0e88f06b&scoped=true& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=template&id=0e88f06b&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=style&index=0&id=0e88f06b&lang=scss&scoped=true&":
        /*!**************************************************************************************************************************!*\
          !*** ./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=style&index=0&id=0e88f06b&lang=scss&scoped=true& ***!
          \**************************************************************************************************************************/

        /***/
        function srcComponentsNcSettingsSectionNcSettingsSectionVueVueTypeStyleIndex0Id0e88f06bLangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_145404__) {
          "use strict";

          __nested_webpack_require_145404__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcSettingsSection_vue_vue_type_style_index_0_id_0e88f06b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_145404__(
          /*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcSettingsSection.vue?vue&type=style&index=0&id=0e88f06b&lang=scss&scoped=true& */
          "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=style&index=0&id=0e88f06b&lang=scss&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=custom&index=0&blockType=docs":
        /*!*******************************************************************************************************!*\
          !*** ./src/components/NcSettingsSection/NcSettingsSection.vue?vue&type=custom&index=0&blockType=docs ***!
          \*******************************************************************************************************/

        /***/
        function srcComponentsNcSettingsSectionNcSettingsSectionVueVueTypeCustomIndex0BlockTypeDocs() {
          /***/
        },

        /***/
        "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
        /*!********************************************************************!*\
          !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
          \********************************************************************/

        /***/
        function node_modulesVueLoaderLibRuntimeComponentNormalizerJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_147952__) {
          "use strict";

          __nested_webpack_require_147952__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_147952__.d(__webpack_exports__, {
            /* harmony export */
            "default": function _default() {
              return (
                /* binding */
                normalizeComponent
              );
            }
            /* harmony export */

          });
          /* globals __VUE_SSR_CONTEXT__ */
          // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
          // This module is a runtime utility for cleaner component module output and will
          // be included in the final webpack user bundle.


          function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier
          /* server only */
          , shadowMode
          /* vue-cli only */
          ) {
            // Vue.extend constructor export interop
            var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports; // render functions

            if (render) {
              options.render = render;
              options.staticRenderFns = staticRenderFns;
              options._compiled = true;
            } // functional template


            if (functionalTemplate) {
              options.functional = true;
            } // scopedId


            if (scopeId) {
              options._scopeId = 'data-v-' + scopeId;
            }

            var hook;

            if (moduleIdentifier) {
              // server build
              hook = function hook(context) {
                // 2.3 injection
                context = context || // cached call
                this.$vnode && this.$vnode.ssrContext || // stateful
                this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
                // 2.2 with runInNewContext: true

                if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
                } // inject component styles


                if (injectStyles) {
                  injectStyles.call(this, context);
                } // register component module identifier for async chunk inferrence


                if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
                }
              }; // used by ssr in case component is cached and beforeCreate
              // never gets called


              options._ssrRegister = hook;
            } else if (injectStyles) {
              hook = shadowMode ? function () {
                injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
              } : injectStyles;
            }

            if (hook) {
              if (options.functional) {
                // for template-only hot-reload because in that case the render fn doesn't
                // go through the normalizer
                options._injectStyles = hook; // register for functional component in vue file

                var originalRender = options.render;

                options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
                };
              } else {
                // inject component registration as beforeCreate hook
                var existing = options.beforeCreate;
                options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
              }
            }

            return {
              exports: scriptExports,
              options: options
            };
          }
          /***/

        },

        /***/
        "@nextcloud/l10n/dist/gettext.js":
        /*!**************************************************!*\
          !*** external "@nextcloud/l10n/dist/gettext.js" ***!
          \**************************************************/

        /***/
        function nextcloudL10nDistGettextJs(module) {
          "use strict";

          module.exports = __webpack_require__(/*! @nextcloud/l10n/dist/gettext.js */ "../@nextcloud/nextcloud-vue/node_modules/@nextcloud/l10n/dist/gettext.js");
          /***/
        },

        /***/
        "vue-material-design-icons/HelpCircle.vue":
        /*!***********************************************************!*\
          !*** external "vue-material-design-icons/HelpCircle.vue" ***!
          \***********************************************************/

        /***/
        function vueMaterialDesignIconsHelpCircleVue(module) {
          "use strict";

          module.exports = __webpack_require__(/*! vue-material-design-icons/HelpCircle.vue */ "../@nextcloud/nextcloud-vue/node_modules/vue-material-design-icons/HelpCircle.vue");
          /***/
        }
        /******/

      };
      /************************************************************************/

      /******/
      // The module cache

      /******/

      var __webpack_module_cache__ = {};
      /******/

      /******/
      // The require function

      /******/

      function __nested_webpack_require_152999__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/

        if (cachedModule !== undefined) {
          /******/
          return cachedModule.exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = __webpack_module_cache__[moduleId] = {
          /******/
          id: moduleId,

          /******/
          // no module.loaded needed

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_152999__);
        /******/

        /******/
        // Return the exports of the module

        /******/


        return module.exports;
        /******/
      }
      /******/

      /************************************************************************/

      /******/

      /* webpack/runtime/compat get default export */

      /******/


      !function () {
        /******/
        // getDefaultExport function for compatibility with non-harmony modules

        /******/
        __nested_webpack_require_152999__.n = function (module) {
          /******/
          var getter = module && module.__esModule ?
          /******/
          function () {
            return module['default'];
          } :
          /******/
          function () {
            return module;
          };
          /******/

          __nested_webpack_require_152999__.d(getter, {
            a: getter
          });
          /******/


          return getter;
          /******/
        };
        /******/

      }();
      /******/

      /******/

      /* webpack/runtime/define property getters */

      /******/

      !function () {
        /******/
        // define getter functions for harmony exports

        /******/
        __nested_webpack_require_152999__.d = function (exports, definition) {
          /******/
          for (var key in definition) {
            /******/
            if (__nested_webpack_require_152999__.o(definition, key) && !__nested_webpack_require_152999__.o(exports, key)) {
              /******/
              Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
              });
              /******/
            }
            /******/

          }
          /******/

        };
        /******/

      }();
      /******/

      /******/

      /* webpack/runtime/hasOwnProperty shorthand */

      /******/

      !function () {
        /******/
        __nested_webpack_require_152999__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/

      }();
      /******/

      /******/

      /* webpack/runtime/make namespace object */

      /******/

      !function () {
        /******/
        // define __esModule on exports

        /******/
        __nested_webpack_require_152999__.r = function (exports) {
          /******/
          if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/


          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/

      }();
      /******/

      /******/

      /* webpack/runtime/nonce */

      /******/

      !function () {
        /******/
        __nested_webpack_require_152999__.nc = undefined;
        /******/
      }();
      /******/

      /************************************************************************/

      var __webpack_exports__ = {}; // This entry need to be wrapped in an IIFE because it need to be in strict mode.

      !function () {
        "use strict";
        /*!***************************************************!*\
          !*** ./src/components/NcSettingsSection/index.js ***!
          \***************************************************/

        __nested_webpack_require_152999__.r(__webpack_exports__);
        /* harmony import */


        var _NcSettingsSection_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_152999__(
        /*! ./NcSettingsSection.vue */
        "./src/components/NcSettingsSection/NcSettingsSection.vue");
        /**
         * @copyright Copyright (c) 2019 Greta Doci <gretadoci@gmail.com>
         *
         * @author Greta Doci <gretadoci@gmail.com>
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

        /* harmony default export */


        __webpack_exports__["default"] = _NcSettingsSection_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
      }();
      /******/

      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ "./apps/sharebymail/src/main-admin.js":
/*!********************************************!*\
  !*** ./apps/sharebymail/src/main-admin.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.js");
/* harmony import */ var _nextcloud_dialogs_styles_toast_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/dialogs/styles/toast.scss */ "./node_modules/@nextcloud/dialogs/styles/toast.scss");
/* harmony import */ var _components_AdminSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AdminSettings */ "./apps/sharebymail/src/components/AdminSettings.vue");
/**
 * @copyright 2022 Carl Schwan <carl@carlschwan.eu>
 *
 * @author Carl Schwan <carl@carlschwan.eu>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */





__webpack_require__.nc = btoa((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getRequestToken)());
vue__WEBPACK_IMPORTED_MODULE_4__["default"].mixin({
  methods: {
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate
  }
});
var AdminSettingsView = vue__WEBPACK_IMPORTED_MODULE_4__["default"].extend(_components_AdminSettings__WEBPACK_IMPORTED_MODULE_3__["default"]);
new AdminSettingsView().$mount('#vue-admin-sharebymail');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/sharebymail/src/components/AdminSettings.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/sharebymail/src/components/AdminSettings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcCheckboxRadioSwitch */ "../@nextcloud/nextcloud-vue/dist/Components/NcCheckboxRadioSwitch.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcSettingsSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcSettingsSection */ "../@nextcloud/nextcloud-vue/dist/Components/NcSettingsSection.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcSettingsSection__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcSettingsSection__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.es.js");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/password-confirmation */ "./node_modules/@nextcloud/password-confirmation/dist/main.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_6__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AdminSettings',
  components: {
    NcCheckboxRadioSwitch: (_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch__WEBPACK_IMPORTED_MODULE_0___default()),
    NcSettingsSection: (_nextcloud_vue_dist_Components_NcSettingsSection__WEBPACK_IMPORTED_MODULE_1___default())
  },
  data: function data() {
    return {
      sendPasswordMail: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__.loadState)('sharebymail', 'sendPasswordMail'),
      replyToInitiator: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__.loadState)('sharebymail', 'replyToInitiator')
    };
  },
  methods: {
    update: function update(key, value) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var url, stringValue, _data$ocs, _data$ocs$meta, _yield$axios$post, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_6___default()();

              case 2:
                url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_5__.generateOcsUrl)('/apps/provisioning_api/api/v1/config/apps/{appId}/{key}', {
                  appId: 'sharebymail',
                  key: key
                });
                stringValue = value ? 'yes' : 'no';
                _context.prev = 4;
                _context.next = 7;
                return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post(url, {
                  value: stringValue
                });

              case 7:
                _yield$axios$post = _context.sent;
                data = _yield$axios$post.data;

                _this.handleResponse({
                  status: (_data$ocs = data.ocs) === null || _data$ocs === void 0 ? void 0 : (_data$ocs$meta = _data$ocs.meta) === null || _data$ocs$meta === void 0 ? void 0 : _data$ocs$meta.status
                });

                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](4);

                _this.handleResponse({
                  errorMessage: t('sharebymail', 'Unable to update share by mail config'),
                  error: _context.t0
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 12]]);
      }))();
    },
    handleResponse: function handleResponse(_ref) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var status, errorMessage, error;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                status = _ref.status, errorMessage = _ref.errorMessage, error = _ref.error;

                if (status !== 'ok') {
                  (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_3__.showError)(errorMessage);
                  console.error(errorMessage, error);
                }

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./apps/sharebymail/src/components/AdminSettings.vue":
/*!***********************************************************!*\
  !*** ./apps/sharebymail/src/components/AdminSettings.vue ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminSettings_vue_vue_type_template_id_06941cf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminSettings.vue?vue&type=template&id=06941cf6& */ "./apps/sharebymail/src/components/AdminSettings.vue?vue&type=template&id=06941cf6&");
/* harmony import */ var _AdminSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminSettings.vue?vue&type=script&lang=js& */ "./apps/sharebymail/src/components/AdminSettings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminSettings_vue_vue_type_template_id_06941cf6___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminSettings_vue_vue_type_template_id_06941cf6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/sharebymail/src/components/AdminSettings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./apps/sharebymail/src/components/AdminSettings.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./apps/sharebymail/src/components/AdminSettings.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/sharebymail/src/components/AdminSettings.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/sharebymail/src/components/AdminSettings.vue?vue&type=template&id=06941cf6&":
/*!******************************************************************************************!*\
  !*** ./apps/sharebymail/src/components/AdminSettings.vue?vue&type=template&id=06941cf6& ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSettings_vue_vue_type_template_id_06941cf6___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSettings_vue_vue_type_template_id_06941cf6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminSettings_vue_vue_type_template_id_06941cf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminSettings.vue?vue&type=template&id=06941cf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/sharebymail/src/components/AdminSettings.vue?vue&type=template&id=06941cf6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/sharebymail/src/components/AdminSettings.vue?vue&type=template&id=06941cf6&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/sharebymail/src/components/AdminSettings.vue?vue&type=template&id=06941cf6& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "NcSettingsSection",
    {
      attrs: {
        title: _vm.t("sharebymail", "Share by mail"),
        description: _vm.t(
          "sharebymail",
          "Allows users to share a personalized link to a file or folder by putting in an email address."
        ),
      },
    },
    [
      _c(
        "NcCheckboxRadioSwitch",
        {
          attrs: { type: "switch", checked: _vm.sendPasswordMail },
          on: {
            "update:checked": [
              function ($event) {
                _vm.sendPasswordMail = $event
              },
              function ($event) {
                return _vm.update("sendpasswordmail", _vm.sendPasswordMail)
              },
            ],
          },
        },
        [
          _vm._v(
            "\n\t\t" +
              _vm._s(_vm.t("sharebymail", "Send password by mail")) +
              "\n\t"
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "NcCheckboxRadioSwitch",
        {
          attrs: { type: "switch", checked: _vm.replyToInitiator },
          on: {
            "update:checked": [
              function ($event) {
                _vm.replyToInitiator = $event
              },
              function ($event) {
                return _vm.update("replyToInitiator", _vm.replyToInitiator)
              },
            ],
          },
        },
        [
          _vm._v(
            "\n\t\t" +
              _vm._s(_vm.t("sharebymail", "Reply to initiator")) +
              "\n\t"
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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
/******/ 	/* webpack/runtime/amd define */
/******/ 	!function() {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	!function() {
/******/ 		__webpack_require__.amdO = {};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
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
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
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
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"sharebymail-vue-settings-admin-sharebymail": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
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
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], function() { return __webpack_require__("./apps/sharebymail/src/main-admin.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=sharebymail-vue-settings-admin-sharebymail.js.map?v=54a3def7641bcd4b5fac