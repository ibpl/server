/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../@nextcloud/nextcloud-vue/dist/Components/NcActionLink.js":
/*!*******************************************************************!*\
  !*** ../@nextcloud/nextcloud-vue/dist/Components/NcActionLink.js ***!
  \*******************************************************************/
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
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActionLink/NcActionLink.vue?vue&type=script&lang=js&":
        /*!***********************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActionLink/NcActionLink.vue?vue&type=script&lang=js& ***!
          \***********************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcActionLinkNcActionLinkVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_2056__) {
          "use strict";

          __nested_webpack_require_2056__.r(__webpack_exports__);
          /* harmony import */


          var _mixins_actionText_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_2056__(
          /*! ../../mixins/actionText.js */
          "./src/mixins/actionText.js");
          /* harmony default export */


          __webpack_exports__["default"] = {
            name: 'NcActionLink',
            mixins: [_mixins_actionText_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
            props: {
              /**
               * destionation to link to
               */
              href: {
                type: String,
                default: '#',
                required: true,
                validator: function validator(value) {
                  // href is either an anchor or a valid url starting with a scheme or a relative path
                  try {
                    return new URL(value);
                  } catch (error) {
                    return value.startsWith('#') || value.startsWith('/');
                  }
                }
              },

              /**
               * download the link instead of opening
               */
              download: {
                type: String,
                default: null
              },

              /**
               * target to open the link
               */
              target: {
                type: String,
                default: '_self',
                validator: function validator(value) {
                  return ['_blank', '_self', '_parent', '_top'].indexOf(value) > -1;
                }
              }
            }
          };
          /***/
        },

        /***/
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActionLink/NcActionLink.vue?vue&type=template&id=4c60ba6f&scoped=true&":
        /*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActionLink/NcActionLink.vue?vue&type=template&id=4c60ba6f&scoped=true& ***!
          \**********************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibLoadersTemplateLoaderJsRuleSet1Rules2Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcActionLinkNcActionLinkVueVueTypeTemplateId4c60ba6fScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_5211__) {
          "use strict";

          __nested_webpack_require_5211__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_5211__.d(__webpack_exports__, {
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

            return _c("li", {
              staticClass: "action"
            }, [_c("a", {
              staticClass: "action-link focusable",
              attrs: {
                download: _vm.download,
                href: _vm.href,
                "aria-label": _vm.ariaLabel,
                target: _vm.target,
                rel: "nofollow noreferrer noopener"
              },
              on: {
                click: _vm.onClick
              }
            }, [_vm._t("icon", function () {
              return [_c("span", {
                staticClass: "action-link__icon",
                class: [_vm.isIconUrl ? "action-link__icon--url" : _vm.icon],
                style: {
                  backgroundImage: _vm.isIconUrl ? "url(".concat(_vm.icon, ")") : null
                }
              })];
            }), _vm._v(" "), _vm.title ? _c("p", [_c("strong", {
              staticClass: "action-link__title"
            }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.title) + "\n\t\t\t")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("span", {
              staticClass: "action-link__longtext",
              domProps: {
                textContent: _vm._s(_vm.text)
              }
            })]) : _vm.isLongText ? _c("p", {
              staticClass: "action-link__longtext",
              domProps: {
                textContent: _vm._s(_vm.text)
              }
            }) : _c("span", {
              staticClass: "action-link__text"
            }, [_vm._v(_vm._s(_vm.text))]), _vm._v(" "),  false ? 0 : _vm._e()], 2)]);
          };

          var _staticRenderFns = [];
          _render._withStripped = true;
          /***/
        },

        /***/
        "./src/mixins/actionGlobal.js":
        /*!************************************!*\
          !*** ./src/mixins/actionGlobal.js ***!
          \************************************/

        /***/
        function srcMixinsActionGlobalJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_7918__) {
          "use strict";

          __nested_webpack_require_7918__.r(__webpack_exports__);
          /* harmony import */


          var vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_7918__(
          /*! vue */
          "vue");
          /* harmony import */


          var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_7918__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
          /**
           * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
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


          __webpack_exports__["default"] = {
            before: function before() {
              // all actions requires a valid text content
              // if none, forbid the component mount and throw error
              if (!this.$slots.default || this.text.trim() === '') {
                vue__WEBPACK_IMPORTED_MODULE_0___default().util.warn("".concat(this.$options.name, " cannot be empty and requires a meaningful text content"), this);
                this.$destroy();
                this.$el.remove();
              }
            },
            beforeUpdate: function beforeUpdate() {
              this.text = this.getText();
            },
            data: function data() {
              return {
                // $slots are not reactive.
                // We need to update  the content manually
                text: this.getText()
              };
            },
            computed: {
              isLongText: function isLongText() {
                return this.text && this.text.trim().length > 20;
              }
            },
            methods: {
              getText: function getText() {
                return this.$slots.default ? this.$slots.default[0].text.trim() : '';
              }
            }
          };
          /***/
        },

        /***/
        "./src/mixins/actionText.js":
        /*!**********************************!*\
          !*** ./src/mixins/actionText.js ***!
          \**********************************/

        /***/
        function srcMixinsActionTextJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_10991__) {
          "use strict";

          __nested_webpack_require_10991__.r(__webpack_exports__);
          /* harmony import */


          var _actionGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_10991__(
          /*! ./actionGlobal.js */
          "./src/mixins/actionGlobal.js");
          /* harmony import */


          var _utils_GetParent_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_10991__(
          /*! ../utils/GetParent.js */
          "./src/utils/GetParent.js");
          /**
           * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
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


          __webpack_exports__["default"] = {
            mixins: [_actionGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
            props: {
              /**
               * Icon to show with the action, can be either a CSS class or an URL
               */
              icon: {
                type: String,
                default: ''
              },

              /**
               * Title to show next to the icon
               */
              title: {
                type: String,
                default: ''
              },

              /**
               * Whether we close the Actions menu after the click
               */
              closeAfterClick: {
                type: Boolean,
                default: false
              },

              /**
               * Aria label for the button. Not needed if the button has text.
               */
              ariaLabel: {
                type: String,
                default: ''
              }
            },
            emits: ['click'],
            computed: {
              isIconUrl: function isIconUrl() {
                try {
                  return new URL(this.icon);
                } catch (error) {
                  return false;
                }
              }
            },
            methods: {
              onClick: function onClick(event) {
                /**
                 * Emitted when the action is clicked
                 *
                 * @type {Event}
                 */
                this.$emit('click', event);

                if (this.closeAfterClick) {
                  var parent = (0, _utils_GetParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, 'NcActions');

                  if (parent && parent.closeMenu) {
                    parent.closeMenu(false);
                  }
                }
              }
            }
          };
          /***/
        },

        /***/
        "./src/utils/GetParent.js":
        /*!********************************!*\
          !*** ./src/utils/GetParent.js ***!
          \********************************/

        /***/
        function srcUtilsGetParentJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_14768__) {
          "use strict";

          __nested_webpack_require_14768__.r(__webpack_exports__);
          /**
           * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
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

          /**
           * Get the first parent component matching the provided name
           *
           * @param {object} context the context to search from (usualy this)
           * @param {string} name the parent name
           * @return {object} the parent component
           */


          var GetParent = function GetParent(context, name) {
            var parent = context.$parent;

            while (parent) {
              if (parent.$options.name === name) {
                return parent;
              }

              parent = parent.$parent;
            }
          };
          /* harmony default export */


          __webpack_exports__["default"] = GetParent;
          /***/
        },

        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActionLink/NcActionLink.vue?vue&type=style&index=0&id=4c60ba6f&lang=scss&scoped=true&":
        /*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActionLink/NcActionLink.vue?vue&type=style&index=0&id=4c60ba6f&lang=scss&scoped=true& ***!
          \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcActionLinkNcActionLinkVueVueTypeStyleIndex0Id4c60ba6fLangScssScopedTrue(module, __webpack_exports__, __nested_webpack_require_18539__) {
          "use strict";

          __nested_webpack_require_18539__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_18539__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_18539__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_18539__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_18539__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__); // Imports


          var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()); // Module


          ___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-4c60ba6f] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n * @author Marco Ambrosini <marcoambrosini@icloud.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\nli.active[data-v-4c60ba6f] {\n  background-color: var(--color-background-hover);\n  border-radius: 6px;\n  padding: 0;\n}\n.action-link[data-v-4c60ba6f] {\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n  height: auto;\n  margin: 0;\n  padding: 0;\n  padding-right: 14px;\n  box-sizing: border-box;\n  cursor: pointer;\n  white-space: nowrap;\n  opacity: 0.7;\n  color: var(--color-main-text);\n  border: 0;\n  border-radius: 0;\n  background-color: transparent;\n  box-shadow: none;\n  font-weight: normal;\n  font-size: var(--default-font-size);\n  line-height: 44px;\n}\n.action-link[data-v-4c60ba6f]:hover, .action-link[data-v-4c60ba6f]:focus {\n  opacity: 1;\n}\n.action-link > span[data-v-4c60ba6f] {\n  cursor: pointer;\n  white-space: nowrap;\n}\n.action-link__icon[data-v-4c60ba6f] {\n  width: 44px;\n  height: 44px;\n  opacity: 1;\n  background-position: 14px center;\n  background-size: 16px;\n  background-repeat: no-repeat;\n}\n.action-link[data-v-4c60ba6f] .material-design-icon {\n  width: 44px;\n  height: 44px;\n  opacity: 1;\n}\n.action-link[data-v-4c60ba6f] .material-design-icon .material-design-icon__svg {\n  vertical-align: middle;\n}\n.action-link p[data-v-4c60ba6f] {\n  max-width: 220px;\n  line-height: 1.6em;\n  padding: 10.8px 0;\n  cursor: pointer;\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.action-link__longtext[data-v-4c60ba6f] {\n  cursor: pointer;\n  white-space: pre-wrap;\n}\n.action-link__title[data-v-4c60ba6f] {\n  font-weight: bold;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  max-width: 100%;\n  display: inline-block;\n}", ""]); // Exports

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
        "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActionLink/NcActionLink.vue?vue&type=style&index=0&id=4c60ba6f&lang=scss&scoped=true&":
        /*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActionLink/NcActionLink.vue?vue&type=style&index=0&id=4c60ba6f&lang=scss&scoped=true& ***!
          \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesStyleLoaderDistCjsJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcActionLinkNcActionLinkVueVueTypeStyleIndex0Id4c60ba6fLangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_30025__) {
          "use strict";

          __nested_webpack_require_30025__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_30025__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_30025__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_30025__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_30025__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_30025__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_30025__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_30025__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_30025__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_30025__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_30025__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_30025__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_30025__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActionLink_vue_vue_type_style_index_0_id_4c60ba6f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_30025__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcActionLink.vue?vue&type=style&index=0&id=4c60ba6f&lang=scss&scoped=true& */
          "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActionLink/NcActionLink.vue?vue&type=style&index=0&id=4c60ba6f&lang=scss&scoped=true&");

          var options = {};
          options.styleTagTransform = _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
          options.setAttributes = _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
          options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
          options.domAPI = _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
          options.insertStyleElement = _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

          var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActionLink_vue_vue_type_style_index_0_id_4c60ba6f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActionLink_vue_vue_type_style_index_0_id_4c60ba6f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActionLink_vue_vue_type_style_index_0_id_4c60ba6f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActionLink_vue_vue_type_style_index_0_id_4c60ba6f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined;
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
        function node_modulesStyleLoaderDistRuntimeSetAttributesWithoutAttributesJs(module, __unused_webpack_exports, __nested_webpack_require_44371__) {
          "use strict";
          /* istanbul ignore next  */

          function setAttributesWithoutAttributes(styleElement) {
            var nonce =  true ? __nested_webpack_require_44371__.nc : 0;

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
        "./src/components/NcActionLink/NcActionLink.vue":
        /*!******************************************************!*\
          !*** ./src/components/NcActionLink/NcActionLink.vue ***!
          \******************************************************/

        /***/
        function srcComponentsNcActionLinkNcActionLinkVue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_48497__) {
          "use strict";

          __nested_webpack_require_48497__.r(__webpack_exports__);
          /* harmony import */


          var _NcActionLink_vue_vue_type_template_id_4c60ba6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_48497__(
          /*! ./NcActionLink.vue?vue&type=template&id=4c60ba6f&scoped=true& */
          "./src/components/NcActionLink/NcActionLink.vue?vue&type=template&id=4c60ba6f&scoped=true&");
          /* harmony import */


          var _NcActionLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_48497__(
          /*! ./NcActionLink.vue?vue&type=script&lang=js& */
          "./src/components/NcActionLink/NcActionLink.vue?vue&type=script&lang=js&");
          /* harmony import */


          var _NcActionLink_vue_vue_type_style_index_0_id_4c60ba6f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_48497__(
          /*! ./NcActionLink.vue?vue&type=style&index=0&id=4c60ba6f&lang=scss&scoped=true& */
          "./src/components/NcActionLink/NcActionLink.vue?vue&type=style&index=0&id=4c60ba6f&lang=scss&scoped=true&");
          /* harmony import */


          var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_48497__(
          /*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
          "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
          /* harmony import */


          var _NcActionLink_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_48497__(
          /*! ./NcActionLink.vue?vue&type=custom&index=0&blockType=docs */
          "./src/components/NcActionLink/NcActionLink.vue?vue&type=custom&index=0&blockType=docs");
          /* harmony import */


          var _NcActionLink_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_48497__.n(_NcActionLink_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__);

          ;
          /* normalize component */

          var component = (0, _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_NcActionLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _NcActionLink_vue_vue_type_template_id_4c60ba6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render, _NcActionLink_vue_vue_type_template_id_4c60ba6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns, false, null, "4c60ba6f", null)
          /* custom blocks */
          ;
          if (typeof _NcActionLink_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default() === 'function') _NcActionLink_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default()(component);
          /* hot reload */

          if (false) { var api; }

          component.options.__file = "src/components/NcActionLink/NcActionLink.vue";
          /* harmony default export */

          __webpack_exports__["default"] = component.exports;
          /***/
        },

        /***/
        "./src/components/NcActionLink/NcActionLink.vue?vue&type=script&lang=js&":
        /*!*******************************************************************************!*\
          !*** ./src/components/NcActionLink/NcActionLink.vue?vue&type=script&lang=js& ***!
          \*******************************************************************************/

        /***/
        function srcComponentsNcActionLinkNcActionLinkVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_52133__) {
          "use strict";

          __nested_webpack_require_52133__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActionLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_52133__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcActionLink.vue?vue&type=script&lang=js& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActionLink/NcActionLink.vue?vue&type=script&lang=js&");
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActionLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
          /***/
        },

        /***/
        "./src/components/NcActionLink/NcActionLink.vue?vue&type=template&id=4c60ba6f&scoped=true&":
        /*!*************************************************************************************************!*\
          !*** ./src/components/NcActionLink/NcActionLink.vue?vue&type=template&id=4c60ba6f&scoped=true& ***!
          \*************************************************************************************************/

        /***/
        function srcComponentsNcActionLinkNcActionLinkVueVueTypeTemplateId4c60ba6fScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_53727__) {
          "use strict";

          __nested_webpack_require_53727__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_53727__.d(__webpack_exports__, {
            /* harmony export */
            "render": function render() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActionLink_vue_vue_type_template_id_4c60ba6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render
              );
            },

            /* harmony export */
            "staticRenderFns": function staticRenderFns() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActionLink_vue_vue_type_template_id_4c60ba6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
              );
            }
            /* harmony export */

          });
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActionLink_vue_vue_type_template_id_4c60ba6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_53727__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcActionLink.vue?vue&type=template&id=4c60ba6f&scoped=true& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActionLink/NcActionLink.vue?vue&type=template&id=4c60ba6f&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcActionLink/NcActionLink.vue?vue&type=style&index=0&id=4c60ba6f&lang=scss&scoped=true&":
        /*!****************************************************************************************************************!*\
          !*** ./src/components/NcActionLink/NcActionLink.vue?vue&type=style&index=0&id=4c60ba6f&lang=scss&scoped=true& ***!
          \****************************************************************************************************************/

        /***/
        function srcComponentsNcActionLinkNcActionLinkVueVueTypeStyleIndex0Id4c60ba6fLangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_56472__) {
          "use strict";

          __nested_webpack_require_56472__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActionLink_vue_vue_type_style_index_0_id_4c60ba6f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_56472__(
          /*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcActionLink.vue?vue&type=style&index=0&id=4c60ba6f&lang=scss&scoped=true& */
          "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActionLink/NcActionLink.vue?vue&type=style&index=0&id=4c60ba6f&lang=scss&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcActionLink/NcActionLink.vue?vue&type=custom&index=0&blockType=docs":
        /*!*********************************************************************************************!*\
          !*** ./src/components/NcActionLink/NcActionLink.vue?vue&type=custom&index=0&blockType=docs ***!
          \*********************************************************************************************/

        /***/
        function srcComponentsNcActionLinkNcActionLinkVueVueTypeCustomIndex0BlockTypeDocs() {
          /***/
        },

        /***/
        "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
        /*!********************************************************************!*\
          !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
          \********************************************************************/

        /***/
        function node_modulesVueLoaderLibRuntimeComponentNormalizerJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_58950__) {
          "use strict";

          __nested_webpack_require_58950__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_58950__.d(__webpack_exports__, {
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
        "vue":
        /*!**********************!*\
          !*** external "vue" ***!
          \**********************/

        /***/
        function vue(module) {
          "use strict";

          module.exports = __webpack_require__(/*! vue */ "../@nextcloud/nextcloud-vue/node_modules/vue/dist/vue.runtime.common.js");
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

      function __nested_webpack_require_63339__(moduleId) {
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

        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_63339__);
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
        __nested_webpack_require_63339__.n = function (module) {
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

          __nested_webpack_require_63339__.d(getter, {
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
        __nested_webpack_require_63339__.d = function (exports, definition) {
          /******/
          for (var key in definition) {
            /******/
            if (__nested_webpack_require_63339__.o(definition, key) && !__nested_webpack_require_63339__.o(exports, key)) {
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
        __nested_webpack_require_63339__.o = function (obj, prop) {
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
        __nested_webpack_require_63339__.r = function (exports) {
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
        __nested_webpack_require_63339__.nc = undefined;
        /******/
      }();
      /******/

      /************************************************************************/

      var __webpack_exports__ = {}; // This entry need to be wrapped in an IIFE because it need to be in strict mode.

      !function () {
        "use strict";
        /*!**********************************************!*\
          !*** ./src/components/NcActionLink/index.js ***!
          \**********************************************/

        __nested_webpack_require_63339__.r(__webpack_exports__);
        /* harmony import */


        var _NcActionLink_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_63339__(
        /*! ./NcActionLink.vue */
        "./src/components/NcActionLink/NcActionLink.vue");
        /**
         * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
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


        __webpack_exports__["default"] = _NcActionLink_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
      }();
      /******/

      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ "../@nextcloud/nextcloud-vue/dist/Components/NcActions.js":
/*!****************************************************************!*\
  !*** ../@nextcloud/nextcloud-vue/dist/Components/NcActions.js ***!
  \****************************************************************/
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
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActions/NcActions.vue?vue&type=script&lang=js&":
        /*!*****************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActions/NcActions.vue?vue&type=script&lang=js& ***!
          \*****************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcActionsNcActionsVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_2023__) {
          "use strict";

          __nested_webpack_require_2023__.r(__webpack_exports__);
          /* harmony import */


          var _NcButton_index_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_2023__(
          /*! ../NcButton/index.js */
          "./src/components/NcButton/index.js");
          /* harmony import */


          var _NcPopover_index_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_2023__(
          /*! ../NcPopover/index.js */
          "./src/components/NcPopover/index.js");
          /* harmony import */


          var _directives_Tooltip_index_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_2023__(
          /*! ../../directives/Tooltip/index.js */
          "./src/directives/Tooltip/index.js");
          /* harmony import */


          var _utils_GenRandomId_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_2023__(
          /*! ../../utils/GenRandomId.js */
          "./src/utils/GenRandomId.js");
          /* harmony import */


          var _l10n_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_2023__(
          /*! ../../l10n.js */
          "./src/l10n.js");
          /* harmony import */


          var vue__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_2023__(
          /*! vue */
          "vue");
          /* harmony import */


          var vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_2023__.n(vue__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var vue_material_design_icons_DotsHorizontal_vue__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_2023__(
          /*! vue-material-design-icons/DotsHorizontal.vue */
          "vue-material-design-icons/DotsHorizontal.vue");
          /* harmony import */


          var vue_material_design_icons_DotsHorizontal_vue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__nested_webpack_require_2023__.n(vue_material_design_icons_DotsHorizontal_vue__WEBPACK_IMPORTED_MODULE_6__);

          function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);

            if (Object.getOwnPropertySymbols) {
              var symbols = Object.getOwnPropertySymbols(object);

              if (enumerableOnly) {
                symbols = symbols.filter(function (sym) {
                  return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
              }

              keys.push.apply(keys, symbols);
            }

            return keys;
          }

          function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i] != null ? arguments[i] : {};

              if (i % 2) {
                ownKeys(Object(source), true).forEach(function (key) {
                  _defineProperty(target, key, source[key]);
                });
              } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
              } else {
                ownKeys(Object(source)).forEach(function (key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
              }
            }

            return target;
          }

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

          var focusableSelector = '.focusable';
          /**
           * The Actions component can be used to display one ore more actions.
           * If only a single action is provided, it will be rendered as an inline icon.
           * For more, a menu indicator will be shown and a popovermenu containing the
           * actions will be opened on click.
           *
           * @since 0.10.0
           */

          /* harmony default export */

          __webpack_exports__["default"] = {
            name: 'NcActions',
            directives: {
              tooltip: _directives_Tooltip_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]
            },
            components: {
              NcButton: _NcButton_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
              DotsHorizontal: vue_material_design_icons_DotsHorizontal_vue__WEBPACK_IMPORTED_MODULE_6___default(),
              NcPopover: _NcPopover_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]
            },
            props: {
              /**
               * Specify the open state of the popover menu
               */
              open: {
                type: Boolean,
                default: false
              },

              /**
               * Force the actions to display in a three dot menu
               */
              forceMenu: {
                type: Boolean,
                default: false
              },

              /**
               * Force the title to show for single actions
               */
              forceTitle: {
                type: Boolean,
                default: false
              },

              /**
               * Specify the menu title
               */
              menuTitle: {
                type: String,
                default: null
              },

              /**
               * Apply primary styling for this menu
               */
              primary: {
                type: Boolean,
                default: false
              },

              /**
               * Specifies the button type used for trigger and single actions buttons
               * Accepted values: primary, secondary, tertiary, tertiary-no-background, tertiary-on-primary, error, warning, success. If left empty,
               * the default button style will be applied.
               */
              type: {
                type: String,
                validator: function validator(value) {
                  return ['primary', 'secondary', 'tertiary', 'tertiary-no-background', 'tertiary-on-primary', 'error', 'warning', 'success'].indexOf(value) !== -1;
                },
                default: null
              },

              /**
               * Icon to show for the toggle menu button
               * when more than one action is inside the actions component.
               * Only replace the default three-dot icon if really necessary.
               */
              defaultIcon: {
                type: String,
                default: ''
              },

              /**
               * Aria label for the actions menu
               */
              ariaLabel: {
                type: String,
                default: (0, _l10n_js__WEBPACK_IMPORTED_MODULE_4__.t)('Actions')
              },

              /**
               * Wanted direction of the menu
               */
              placement: {
                type: String,
                default: 'bottom'
              },

              /**
               * DOM element for the actions' popover boundaries
               */
              boundariesElement: {
                type: Element,
                default: function _default() {
                  return document.querySelector('body');
                }
              },

              /**
               * Selector for the actions' popover container
               */
              container: {
                type: String,
                default: 'body'
              },

              /**
               * Disabled state of the main button (single action or menu toggle)
               */
              disabled: {
                type: Boolean,
                default: false
              },

              /**
               * Display x items inline out of the dropdown menu
               * Will be ignored if `forceMenu` is set
               */
              inline: {
                type: Number,
                default: 0
              }
            },
            emits: ['update:open', 'open', 'update:open', 'close', 'focus', 'blur'],
            data: function data() {
              return {
                opened: this.open,
                focusIndex: 0,
                randomId: "menu-".concat((0, _utils_GenRandomId_js__WEBPACK_IMPORTED_MODULE_3__["default"])())
              };
            },
            computed: {
              triggerBtnType: function triggerBtnType() {
                // If requested, we use a primary button
                return this.type || (this.primary ? 'primary' // If it has a title, we use a secondary button
                : this.menuTitle ? 'secondary' : 'tertiary');
              }
            },
            watch: {
              // Watch parent prop
              open: function open(state) {
                if (state === this.opened) {
                  return;
                }

                this.opened = state;
              }
            },
            methods: {
              /**
               * Do we have exactly one Action and
               * is it allowed as a standalone element?
               *
               * @param {Array} action The action to check
               * @return {boolean}
               */
              isValidSingleAction: function isValidSingleAction(action) {
                var _action$componentOpti;

                return ['NcActionButton', 'NcActionLink', 'NcActionRouter'].includes(action === null || action === void 0 ? void 0 : (_action$componentOpti = action.componentOptions) === null || _action$componentOpti === void 0 ? void 0 : _action$componentOpti.tag);
              },
              // MENU STATE MANAGEMENT
              openMenu: function openMenu(e) {
                if (this.opened) {
                  return;
                }

                this.opened = true;
                /**
                 * Event emitted when the popover menu open state is changed
                 *
                 * @type {boolean}
                 */

                this.$emit('update:open', true);
                /**
                 * Event emitted when the popover menu is opened
                 */

                this.$emit('open');
              },
              closeMenu: function closeMenu() {
                var returnFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

                if (!this.opened) {
                  return;
                }

                this.opened = false;
                this.$refs.popover.clearFocusTrap({
                  returnFocus: returnFocus
                });
                /**
                 * Event emitted when the popover menu open state is changed
                 *
                 * @type {boolean}
                 */

                this.$emit('update:open', false);
                /**
                 * Event emitted when the popover menu is closed
                 */

                this.$emit('close'); // close everything

                this.opened = false;
                this.focusIndex = 0; // focus back the menu button

                this.$refs.menuButton.$el.focus();
              },
              onOpen: function onOpen(event) {
                var _this = this;

                this.$nextTick(function () {
                  _this.focusFirstAction(event);
                });
              },
              // MENU KEYS & FOCUS MANAGEMENT
              // focus nearest focusable item on mouse move
              // DO NOT change the focus if the target is already focused
              // this will prevent issues with input being unfocused
              // on mouse move
              onMouseFocusAction: function onMouseFocusAction(event) {
                if (document.activeElement === event.target) {
                  return;
                }

                var menuItem = event.target.closest('li');

                if (menuItem) {
                  var focusableItem = menuItem.querySelector(focusableSelector);

                  if (focusableItem) {
                    var focusList = this.$refs.menu.querySelectorAll(focusableSelector);

                    var focusIndex = _toConsumableArray(focusList).indexOf(focusableItem);

                    if (focusIndex > -1) {
                      this.focusIndex = focusIndex;
                      this.focusAction();
                    }
                  }
                }
              },

              /**
               * Dispatches the keydown listener to different handlers
               *
               * @param {object} event The keydown event
               */
              onKeydown: function onKeydown(event) {
                // Up or Shift+Tab
                if (event.keyCode === 38 || event.keyCode === 9 && event.shiftKey) {
                  this.focusPreviousAction(event);
                } // Down or Tab


                if (event.keyCode === 40 || event.keyCode === 9 && !event.shiftKey) {
                  this.focusNextAction(event);
                } // Page-Up


                if (event.keyCode === 33) {
                  this.focusFirstAction(event);
                } // Page-Down


                if (event.keyCode === 34) {
                  this.focusLastAction(event);
                } // Esc


                if (event.keyCode === 27) {
                  this.closeMenu();
                  event.preventDefault();
                }
              },
              removeCurrentActive: function removeCurrentActive() {
                var currentActiveElement = this.$refs.menu.querySelector('li.active');

                if (currentActiveElement) {
                  currentActiveElement.classList.remove('active');
                }
              },
              focusAction: function focusAction() {
                // TODO: have a global disabled state for non input elements
                var focusElement = this.$refs.menu.querySelectorAll(focusableSelector)[this.focusIndex];

                if (focusElement) {
                  this.removeCurrentActive();
                  var liMenuParent = focusElement.closest('li.action');
                  focusElement.focus();

                  if (liMenuParent) {
                    liMenuParent.classList.add('active');
                  }
                }
              },
              focusPreviousAction: function focusPreviousAction(event) {
                if (this.opened) {
                  if (this.focusIndex === 0) {
                    // First element overflows to body-navigation (no preventDefault!) and closes Actions-menu
                    this.closeMenu();
                  } else {
                    this.preventIfEvent(event);
                    this.focusIndex = this.focusIndex - 1;
                  }

                  this.focusAction();
                }
              },
              focusNextAction: function focusNextAction(event) {
                if (this.opened) {
                  var indexLength = this.$refs.menu.querySelectorAll(focusableSelector).length - 1;

                  if (this.focusIndex === indexLength) {
                    // Last element overflows to body-navigation (no preventDefault!) and closes Actions-menu
                    this.closeMenu();
                  } else {
                    this.preventIfEvent(event);
                    this.focusIndex = this.focusIndex + 1;
                  }

                  this.focusAction();
                }
              },
              focusFirstAction: function focusFirstAction(event) {
                if (this.opened) {
                  this.preventIfEvent(event);
                  this.focusIndex = 0;
                  this.focusAction();
                }
              },
              focusLastAction: function focusLastAction(event) {
                if (this.opened) {
                  this.preventIfEvent(event);
                  this.focusIndex = this.$refs.menu.querySelectorAll(focusableSelector).length - 1;
                  this.focusAction();
                }
              },
              preventIfEvent: function preventIfEvent(event) {
                if (event) {
                  event.preventDefault();
                  event.stopPropagation();
                }
              },
              onFocus: function onFocus(event) {
                this.$emit('focus', event);
              },
              onBlur: function onBlur(event) {
                this.$emit('blur', event);
              }
            },

            /**
             * The render function to display the component
             *
             * @param {Function} h The function to create VNodes
             * @return {VNodes} The created VNodes
             */
            render: function render(h) {
              var _this2 = this;
              /**
               * Filter the Actions, so that we only get allowed components.
               * This also ensure that we don't get 'text' elements, which would
               * become problematic later on.
               */


              var actions = (this.$slots.default || []).filter(function (action) {
                var _action$componentOpti2;

                return action === null || action === void 0 ? void 0 : (_action$componentOpti2 = action.componentOptions) === null || _action$componentOpti2 === void 0 ? void 0 : _action$componentOpti2.tag;
              });
              /**
               * Filter and list actions that are allowed to be displayed inline
               */

              var inlineActions = actions.filter(this.isValidSingleAction);

              if (this.forceMenu && inlineActions.length > 0 && this.inline > 0) {
                vue__WEBPACK_IMPORTED_MODULE_5___default().util.warn('Specifying forceMenu will ignore any inline actions rendering.');
                inlineActions = [];
              } // Check that we have at least one action


              if (actions.length === 0) {
                return;
              }
              /**
               * Render the provided action
               *
               * @param {VNode} action the action to render
               * @return {Function} the vue render function
               */


              var renderInlineAction = function renderInlineAction(action) {
                var _action$data, _action$data$scopedSl, _action$data$scopedSl2, _action$componentOpti3, _action$componentOpti4, _action$componentOpti5, _action$componentOpti6, _action$data2, _action$data3, _action$componentOpti7, _action$componentOpti8, _action$componentOpti9, _action$componentOpti10, _action$componentOpti11, _action$componentOpti12, _action$componentOpti13, _action$componentOpti14, _action$componentOpti15, _action$componentOpti16, _action$componentOpti17;

                var icon = (action === null || action === void 0 ? void 0 : (_action$data = action.data) === null || _action$data === void 0 ? void 0 : (_action$data$scopedSl = _action$data.scopedSlots) === null || _action$data$scopedSl === void 0 ? void 0 : (_action$data$scopedSl2 = _action$data$scopedSl.icon()) === null || _action$data$scopedSl2 === void 0 ? void 0 : _action$data$scopedSl2[0]) || h('span', {
                  class: ['icon', action === null || action === void 0 ? void 0 : (_action$componentOpti3 = action.componentOptions) === null || _action$componentOpti3 === void 0 ? void 0 : (_action$componentOpti4 = _action$componentOpti3.propsData) === null || _action$componentOpti4 === void 0 ? void 0 : _action$componentOpti4.icon]
                });
                var title = _this2.forceTitle ? _this2.menuTitle : '';
                var clickListener = action === null || action === void 0 ? void 0 : (_action$componentOpti5 = action.componentOptions) === null || _action$componentOpti5 === void 0 ? void 0 : (_action$componentOpti6 = _action$componentOpti5.listeners) === null || _action$componentOpti6 === void 0 ? void 0 : _action$componentOpti6.click;
                return h('NcButton', {
                  class: ['action-item action-item--single', action === null || action === void 0 ? void 0 : (_action$data2 = action.data) === null || _action$data2 === void 0 ? void 0 : _action$data2.staticClass, action === null || action === void 0 ? void 0 : (_action$data3 = action.data) === null || _action$data3 === void 0 ? void 0 : _action$data3.class],
                  attrs: {
                    'aria-label': (action === null || action === void 0 ? void 0 : (_action$componentOpti7 = action.componentOptions) === null || _action$componentOpti7 === void 0 ? void 0 : (_action$componentOpti8 = _action$componentOpti7.propsData) === null || _action$componentOpti8 === void 0 ? void 0 : _action$componentOpti8.ariaLabel) || (action === null || action === void 0 ? void 0 : (_action$componentOpti9 = action.componentOptions) === null || _action$componentOpti9 === void 0 ? void 0 : (_action$componentOpti10 = _action$componentOpti9.children) === null || _action$componentOpti10 === void 0 ? void 0 : (_action$componentOpti11 = _action$componentOpti10[0]) === null || _action$componentOpti11 === void 0 ? void 0 : _action$componentOpti11.text)
                  },
                  props: _objectSpread({
                    // If it has a title, we use a secondary button
                    type: _this2.type || (title ? 'secondary' : 'tertiary'),
                    disabled: _this2.disabled || (action === null || action === void 0 ? void 0 : (_action$componentOpti12 = action.componentOptions) === null || _action$componentOpti12 === void 0 ? void 0 : (_action$componentOpti13 = _action$componentOpti12.propsData) === null || _action$componentOpti13 === void 0 ? void 0 : _action$componentOpti13.disabled)
                  }, action === null || action === void 0 ? void 0 : (_action$componentOpti14 = action.componentOptions) === null || _action$componentOpti14 === void 0 ? void 0 : _action$componentOpti14.propsData),
                  directives: [{
                    name: 'tooltip',
                    value: action === null || action === void 0 ? void 0 : (_action$componentOpti15 = action.componentOptions) === null || _action$componentOpti15 === void 0 ? void 0 : (_action$componentOpti16 = _action$componentOpti15.children) === null || _action$componentOpti16 === void 0 ? void 0 : (_action$componentOpti17 = _action$componentOpti16[0]) === null || _action$componentOpti17 === void 0 ? void 0 : _action$componentOpti17.text,
                    modifiers: {
                      auto: true
                    }
                  }],
                  on: _objectSpread({
                    focus: _this2.onFocus,
                    blur: _this2.onBlur
                  }, !!clickListener && {
                    click: function click(event) {
                      if (clickListener) {
                        clickListener(event);
                      }
                    }
                  })
                }, [h('template', {
                  slot: 'icon'
                }, [icon]), title]);
              };
              /**
               * Render the actions popover
               *
               * @param {VNode} actions the actions to render within
               * @return {Function} the vue render function
               */


              var renderActionsPopover = function renderActionsPopover(actions) {
                var _this2$$slots$icon;

                var triggerIcon = ((_this2$$slots$icon = _this2.$slots.icon) === null || _this2$$slots$icon === void 0 ? void 0 : _this2$$slots$icon[0]) || (_this2.defaultIcon ? h('span', {
                  class: ['icon', _this2.defaultIcon]
                }) : h('DotsHorizontal', {
                  props: {
                    size: 20
                  }
                }));
                return h('NcPopover', {
                  ref: 'popover',
                  props: {
                    delay: 0,
                    handleResize: true,
                    shown: _this2.opened,
                    placement: _this2.placement,
                    boundary: _this2.boundariesElement,
                    container: _this2.container,
                    popoverBaseClass: 'action-item__popper'
                  },
                  // For some reason the popover component
                  // does not react to props given under the 'props' key,
                  // so we use both 'attrs' and 'props'
                  attrs: {
                    delay: 0,
                    handleResize: true,
                    shown: _this2.opened,
                    placement: _this2.placement,
                    boundary: _this2.boundariesElement,
                    container: _this2.container,
                    popoverBaseClass: 'action-item__popper'
                  },
                  on: {
                    show: _this2.openMenu,
                    'after-show': _this2.onOpen,
                    hide: _this2.closeMenu
                  }
                }, [h('NcButton', {
                  class: 'action-item__menutoggle',
                  props: {
                    type: _this2.triggerBtnType,
                    disabled: _this2.disabled
                  },
                  slot: 'trigger',
                  ref: 'menuButton',
                  attrs: {
                    'aria-haspopup': 'menu',
                    'aria-label': _this2.ariaLabel,
                    'aria-controls': _this2.opened ? _this2.randomId : null,
                    'aria-expanded': _this2.opened.toString()
                  },
                  on: {
                    focus: _this2.onFocus,
                    blur: _this2.onBlur
                  }
                }, [h('template', {
                  slot: 'icon'
                }, [triggerIcon]), _this2.menuTitle]), h('div', {
                  class: {
                    open: _this2.opened
                  },
                  attrs: {
                    tabindex: '-1'
                  },
                  on: {
                    keydown: _this2.onKeydown,
                    mousemove: _this2.onMouseFocusAction
                  },
                  ref: 'menu'
                }, [h('ul', {
                  attrs: {
                    id: _this2.randomId,
                    tabindex: '-1',
                    role: 'menu'
                  }
                }, [actions])])]);
              };
              /**
               * If we have a single action only and didn't force a menu,
               * we render the action as a standalone button
               */


              if (actions.length === 1 && inlineActions.length === 1 && !this.forceMenu) {
                return renderInlineAction(inlineActions[0]);
              }
              /**
               * If we some inline actions to render, render them, then the menu
               */


              if (inlineActions.length > 0 && this.inline > 0) {
                var renderedInlineActions = inlineActions.slice(0, this.inline); // Filter already rendered actions

                var menuActions = actions.filter(function (action) {
                  return !renderedInlineActions.includes(action);
                });
                return h('div', {
                  class: ['action-items', "action-item--".concat(this.triggerBtnType)]
                }, [].concat(_toConsumableArray(renderedInlineActions.map(renderInlineAction)), [// render the rest within the popover menu
                menuActions.length > 0 ? h('div', {
                  class: ['action-item', {
                    'action-item--open': this.opened
                  }]
                }, [renderActionsPopover(menuActions)]) : null]));
              }
              /**
               * Otherwise, we render the actions in a popover
               */


              return h('div', {
                class: ['action-item action-item--default-popover', "action-item--".concat(this.triggerBtnType), {
                  'action-item--open': this.opened
                }]
              }, [renderActionsPopover(actions)]);
            }
          };
          /***/
        },

        /***/
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcButton/NcButton.vue?vue&type=script&lang=js&":
        /*!***************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcButton/NcButton.vue?vue&type=script&lang=js& ***!
          \***************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcButtonNcButtonVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_32704__) {
          "use strict";

          __nested_webpack_require_32704__.r(__webpack_exports__);

          function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);

            if (Object.getOwnPropertySymbols) {
              var symbols = Object.getOwnPropertySymbols(object);

              if (enumerableOnly) {
                symbols = symbols.filter(function (sym) {
                  return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
              }

              keys.push.apply(keys, symbols);
            }

            return keys;
          }

          function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i] != null ? arguments[i] : {};

              if (i % 2) {
                ownKeys(Object(source), true).forEach(function (key) {
                  _defineProperty(target, key, source[key]);
                });
              } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
              } else {
                ownKeys(Object(source)).forEach(function (key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
              }
            }

            return target;
          }

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
          /* harmony default export */


          __webpack_exports__["default"] = {
            name: 'NcButton',
            props: {
              /**
               * Toggles the disabled state of the button on and off.
               */
              disabled: {
                type: Boolean,
                default: false
              },

              /**
               * Specifies the button type
               * Accepted values: primary, secondary, tertiary, tertiary-no-background, tertiary-on-primary, error, warning, success. If left empty,
               * the default button style will be applied.
               */
              type: {
                type: String,
                validator: function validator(value) {
                  return ['primary', 'secondary', 'tertiary', 'tertiary-no-background', 'tertiary-on-primary', 'error', 'warning', 'success'].indexOf(value) !== -1;
                },
                default: 'secondary'
              },

              /**
               * Specifies the button native type
               * Accepted values: submit, reset, button. If left empty,
               * the default "button" type will be used.
               */
              nativeType: {
                type: String,
                validator: function validator(value) {
                  return ['submit', 'reset', 'button'].indexOf(value) !== -1;
                },
                default: 'button'
              },

              /**
               * Specifies whether the button should span all the available width.
               * By default, buttons span the whole width of the container.
               */
              wide: {
                type: Boolean,
                default: false
              },

              /**
               * Always try to provide an aria-label to your button. Make it more
               * specific than the button's title by provide some more context. E.g. if
               * the title of the button is "send" in the Mail app, the aria label could
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
                default: false
              }
            },
            data: function data() {
              return {
                /**
                 * Keeps track of whether the element's focus status is due to having
                 * tabbed to it. We use this to display a thick 'focus outline' only
                 * when the user is navigating with the keyboard.
                 */
                tabbed: false,

                /**
                 * Making sure the slots are reactive
                 */
                slots: this.$slots
              };
            },
            computed: {
              // Determines whether the root element is an a,
              // a router-link or a button
              rootElement: function rootElement() {
                if (this.to) {
                  return _objectSpread({
                    is: 'router-link',
                    tag: 'button',
                    to: this.to,
                    exact: this.exact
                  }, this.$attrs);
                }

                if (this.href) {
                  return _objectSpread({
                    is: 'a',
                    href: this.href
                  }, this.$attrs);
                }

                return _objectSpread({
                  is: 'button'
                }, this.$attrs);
              },
              hasText: function hasText() {
                var _this$slots, _this$slots2, _this$slots2$default$;

                return ((_this$slots = this.slots) === null || _this$slots === void 0 ? void 0 : _this$slots.default) !== undefined && ((_this$slots2 = this.slots) === null || _this$slots2 === void 0 ? void 0 : (_this$slots2$default$ = _this$slots2.default[0]) === null || _this$slots2$default$ === void 0 ? void 0 : _this$slots2$default$.text);
              },
              hasIcon: function hasIcon() {
                return this.slots.icon !== undefined;
              },
              iconOnly: function iconOnly() {
                return this.hasIcon && !this.hasText;
              },
              textOnly: function textOnly() {
                return !this.hasIcon && this.hasText;
              },
              iconAndText: function iconAndText() {
                return this.hasIcon && this.hasText;
              },
              text: function text() {
                return this.hasText ? this.slots.default[0].text.trim() : null;
              },
              // Classes applied to the button element
              buttonClassObject: function buttonClassObject() {
                var _ref;

                return _ref = {
                  // If icon only, some additional css rules are required
                  'button-vue--icon-only': this.iconOnly,
                  'button-vue--text-only': this.textOnly,
                  'button-vue--icon-and-text': this.iconAndText
                }, _defineProperty(_ref, "button-vue--vue-".concat(this.type), this.type), _defineProperty(_ref, 'button-vue--wide', this.wide), _defineProperty(_ref, 'button-vue--tabbed', this.tabbed), _ref;
              }
            },
            beforeUpdate: function beforeUpdate() {
              // $slots is not reactive, this make sure we are able to detect changes
              this.slots = this.$slots;
            },
            mounted: function mounted() {
              /**
               * Always fill either the text prop or the ariaLabel one.
               */
              if (!this.text && !this.ariaLabel) {
                console.warn('You need to fill either the text or the ariaLabel props in the button component.', {
                  text: this.text,
                  ariaLabel: this.ariaLabel
                }, this);
              }
            },
            methods: {
              /**
               * Removes the tabbed state of the button.
               */
              handleClick: function handleClick() {
                this.tabbed = false;
              },

              /**
               * When the tab key is lifted, the button has been "tabbed in",
               * see comments on the `tabbed` variable declared in the data.
               */
              handleTabUp: function handleTabUp() {
                this.tabbed = true;
              },

              /**
               * Everytime the button is blurred, we remove the tabbed state.
               */
              handleBlur: function handleBlur() {
                this.tabbed = false;
              },

              /**
               * When the button is reached via keyboard navigation and pressed using
               * the enter key, we slightly change the styles to provide an "active-like"
               * feedback. When using the mouse this is achieved with the ripple effect.
               */
              makeActive: function makeActive() {
                this.tabbed = false;
              },
              makeInactive: function makeInactive() {
                this.tabbed = true;
              }
            }
          };
          /***/
        },

        /***/
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=script&lang=js&":
        /*!*****************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=script&lang=js& ***!
          \*****************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcPopoverNcPopoverVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_43511__) {
          "use strict";

          __nested_webpack_require_43511__.r(__webpack_exports__);
          /* harmony import */


          var floating_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_43511__(
          /*! floating-vue */
          "floating-vue");
          /* harmony import */


          var floating_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_43511__.n(floating_vue__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var focus_trap__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_43511__(
          /*! focus-trap */
          "focus-trap");
          /* harmony import */


          var focus_trap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_43511__.n(focus_trap__WEBPACK_IMPORTED_MODULE_1__);

          function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
            try {
              var info = gen[key](arg);
              var value = info.value;
            } catch (error) {
              reject(error);
              return;
            }

            if (info.done) {
              resolve(value);
            } else {
              Promise.resolve(value).then(_next, _throw);
            }
          }

          function _asyncToGenerator(fn) {
            return function () {
              var self = this,
                  args = arguments;
              return new Promise(function (resolve, reject) {
                var gen = fn.apply(self, args);

                function _next(value) {
                  asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                }

                function _throw(err) {
                  asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                }

                _next(undefined);
              });
            };
          }
          /* harmony default export */


          __webpack_exports__["default"] = {
            name: 'NcPopover',
            components: {
              Dropdown: floating_vue__WEBPACK_IMPORTED_MODULE_0__.Dropdown
            },
            props: {
              popoverBaseClass: {
                type: String,
                default: ''
              },

              /**
               * Enable popover focus trap
               */
              focusTrap: {
                type: Boolean,
                default: true
              }
            },
            emits: ['after-show', 'after-hide'],
            mounted: function mounted() {
              var _this = this;

              this.$watch(function () {
                // required because v-tooltip doesn't provide events
                // and @show is too early
                // see https://github.com/Akryum/v-tooltip/issues/661
                return _this.$refs.popover.$refs.popper.isShown;
              }, function (val) {
                if (val) {
                  _this.afterShow();
                } else {
                  _this.afterHide();
                }
              });
            },
            beforeDestroy: function beforeDestroy() {
              this.clearFocusTrap();
            },
            methods: {
              /**
               * Add focus trap for accessibility.
               */
              useFocusTrap: function useFocusTrap() {
                var _this2 = this;

                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var _this2$$refs$popover, _this2$$refs$popover$;

                  var el;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _this2.$nextTick();

                        case 2:
                          if (_this2.focusTrap) {
                            _context.next = 4;
                            break;
                          }

                          return _context.abrupt("return");

                        case 4:
                          el = (_this2$$refs$popover = _this2.$refs.popover) === null || _this2$$refs$popover === void 0 ? void 0 : (_this2$$refs$popover$ = _this2$$refs$popover.$refs.popperContent) === null || _this2$$refs$popover$ === void 0 ? void 0 : _this2$$refs$popover$.$el;

                          if (el) {
                            _context.next = 7;
                            break;
                          }

                          return _context.abrupt("return");

                        case 7:
                          _this2.$focusTrap = (0, focus_trap__WEBPACK_IMPORTED_MODULE_1__.createFocusTrap)(el, {
                            // Prevents to lose focus using esc key
                            // Focus will be release when popover be hide
                            escapeDeactivates: false,
                            allowOutsideClick: true
                          });

                          _this2.$focusTrap.activate();

                        case 9:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }))();
              },

              /**
               * Remove focus trap
               *
               * @param {object} options The configuration options for focusTrap
               */
              clearFocusTrap: function clearFocusTrap() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                try {
                  var _this$$focusTrap;

                  (_this$$focusTrap = this.$focusTrap) === null || _this$$focusTrap === void 0 ? void 0 : _this$$focusTrap.deactivate(options);
                  this.$focusTrap = null;
                } catch (err) {
                  console.warn(err);
                }
              },
              afterShow: function afterShow() {
                /**
                 * Triggered after the tooltip was visually displayed.
                 *
                 * This is different from the 'show' and 'apply-show' which
                 * run earlier than this where there is no guarantee that the
                 * tooltip is already visible and in the DOM.
                 */
                this.$emit('after-show');
                this.useFocusTrap();
              },
              afterHide: function afterHide() {
                /**
                 * Triggered after the tooltip was visually hidden.
                 */
                this.$emit('after-hide');
                this.clearFocusTrap();
              }
            }
          };
          /***/
        },

        /***/
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcButton/NcButton.vue?vue&type=template&id=592da5af&scoped=true&":
        /*!**************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcButton/NcButton.vue?vue&type=template&id=592da5af&scoped=true& ***!
          \**************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibLoadersTemplateLoaderJsRuleSet1Rules2Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcButtonNcButtonVueVueTypeTemplateId592da5afScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_51744__) {
          "use strict";

          __nested_webpack_require_51744__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_51744__.d(__webpack_exports__, {
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

            return _c("root-element", _vm._g(_vm._b({
              staticClass: "button-vue",
              class: _vm.buttonClassObject,
              attrs: {
                "aria-label": _vm.ariaLabel,
                type: _vm.nativeType,
                disabled: _vm.disabled
              },
              on: {
                keydown: function keydown($event) {
                  if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
                  return _vm.makeActive.apply(null, arguments);
                },
                keyup: [function ($event) {
                  if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
                  return _vm.makeInactive.apply(null, arguments);
                }, function ($event) {
                  if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")) return null;
                  if ($event.ctrlKey || $event.shiftKey || $event.altKey || $event.metaKey) return null;
                  return _vm.handleTabUp.apply(null, arguments);
                }, function ($event) {
                  if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")) return null;
                  if (!$event.shiftKey) return null;
                  return _vm.handleTabUp.apply(null, arguments);
                }],
                click: _vm.handleClick,
                blur: _vm.handleBlur
              }
            }, "root-element", _vm.rootElement, false), _vm.$listeners), [_c("span", {
              staticClass: "button-vue__wrapper"
            }, [_vm.hasIcon ? _c("span", {
              staticClass: "button-vue__icon"
            }, [_vm._t("icon")], 2) : _vm._e(), _vm._v(" "), _vm.hasText ? _c("span", {
              staticClass: "button-vue__text"
            }, [_vm._t("default")], 2) : _vm._e()])]);
          };

          var _staticRenderFns = [];
          _render._withStripped = true;
          /***/
        },

        /***/
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=template&id=40cc2471&":
        /*!****************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=template&id=40cc2471& ***!
          \****************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibLoadersTemplateLoaderJsRuleSet1Rules2Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcPopoverNcPopoverVueVueTypeTemplateId40cc2471(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_55912__) {
          "use strict";

          __nested_webpack_require_55912__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_55912__.d(__webpack_exports__, {
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

            return _c("Dropdown", _vm._g(_vm._b({
              ref: "popover",
              attrs: {
                distance: 10,
                "arrow-padding": 10,
                "popper-class": _vm.popoverBaseClass
              },
              scopedSlots: _vm._u([{
                key: "popper",
                fn: function fn() {
                  return [_vm._t("default")];
                },
                proxy: true
              }], null, true)
            }, "Dropdown", _vm.$attrs, false), _vm.$listeners), [_vm._t("trigger")], 2);
          };

          var _staticRenderFns2 = [];
          _render2._withStripped = true;
          /***/
        },

        /***/
        "./src/components/NcButton/index.js":
        /*!******************************************!*\
          !*** ./src/components/NcButton/index.js ***!
          \******************************************/

        /***/
        function srcComponentsNcButtonIndexJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_57668__) {
          "use strict";

          __nested_webpack_require_57668__.r(__webpack_exports__);
          /* harmony import */


          var _NcButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_57668__(
          /*! ./NcButton.vue */
          "./src/components/NcButton/NcButton.vue");
          /**
           * @copyright Copyright (c) 2020 Marco Ambrosini <marcoambrosini@icloud.com>
           *
           * @author Marco Ambrosini <marcoambrosini@icloud.com>
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


          __webpack_exports__["default"] = _NcButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
          /***/
        },

        /***/
        "./src/components/NcPopover/index.js":
        /*!*******************************************!*\
          !*** ./src/components/NcPopover/index.js ***!
          \*******************************************/

        /***/
        function srcComponentsNcPopoverIndexJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_59533__) {
          "use strict";

          __nested_webpack_require_59533__.r(__webpack_exports__);
          /* harmony import */


          var _NcPopover_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_59533__(
          /*! ./NcPopover.vue */
          "./src/components/NcPopover/NcPopover.vue");
          /**
           * @copyright Copyright (c) 2019 Marco Ambrosini <marcoambrosini@icloud.com>
           *
           * @author Marco Ambrosini <marcoambrosini@icloud.com>
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

          /* harmony default export */


          __webpack_exports__["default"] = _NcPopover_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
          /***/
        },

        /***/
        "./src/directives/Tooltip/index.js":
        /*!*****************************************!*\
          !*** ./src/directives/Tooltip/index.js ***!
          \*****************************************/

        /***/
        function srcDirectivesTooltipIndexJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_61392__) {
          "use strict";

          __nested_webpack_require_61392__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_61392__.d(__webpack_exports__, {
            /* harmony export */
            "options": function options() {
              return (
                /* reexport safe */
                floating_vue__WEBPACK_IMPORTED_MODULE_0__.options
              );
            }
            /* harmony export */

          });
          /* harmony import */


          var floating_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_61392__(
          /*! floating-vue */
          "floating-vue");
          /* harmony import */


          var floating_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_61392__.n(floating_vue__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_61392__(
          /*! ./index.scss */
          "./src/directives/Tooltip/index.scss");
          /**
           * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
           *
           * @author Julius Härtl <jus@bitgrid.net>
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


          floating_vue__WEBPACK_IMPORTED_MODULE_0__.options.themes.tooltip.html = false;
          floating_vue__WEBPACK_IMPORTED_MODULE_0__.options.themes.tooltip.delay = {
            show: 500,
            hide: 200
          };
          floating_vue__WEBPACK_IMPORTED_MODULE_0__.options.themes.tooltip.distance = 10;
          floating_vue__WEBPACK_IMPORTED_MODULE_0__.options.themes.tooltip["arrow-padding"] = 3;
          /* harmony default export */

          __webpack_exports__["default"] = floating_vue__WEBPACK_IMPORTED_MODULE_0__.VTooltip;
          /***/
        },

        /***/
        "./src/l10n.js":
        /*!*********************!*\
          !*** ./src/l10n.js ***!
          \*********************/

        /***/
        function srcL10nJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_64308__) {
          "use strict";

          __nested_webpack_require_64308__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_64308__.d(__webpack_exports__, {
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


          var _nextcloud_l10n_dist_gettext_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_64308__(
          /*! @nextcloud/l10n/dist/gettext.js */
          "@nextcloud/l10n/dist/gettext.js");
          /* harmony import */


          var _nextcloud_l10n_dist_gettext_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_64308__.n(_nextcloud_l10n_dist_gettext_js__WEBPACK_IMPORTED_MODULE_0__);

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
        "./src/utils/GenRandomId.js":
        /*!**********************************!*\
          !*** ./src/utils/GenRandomId.js ***!
          \**********************************/

        /***/
        function srcUtilsGenRandomIdJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_163928__) {
          "use strict";

          __nested_webpack_require_163928__.r(__webpack_exports__);
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
        "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./src/directives/Tooltip/index.scss":
        /*!*******************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./src/directives/Tooltip/index.scss ***!
          \*******************************************************************************************************************************************************************************************/

        /***/
        function node_modulesCssLoaderDistCjsJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3SrcDirectivesTooltipIndexScss(module, __webpack_exports__, __nested_webpack_require_166383__) {
          "use strict";

          __nested_webpack_require_166383__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_166383__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_166383__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_166383__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_166383__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__); // Imports


          var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()); // Module


          ___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n\n/**\n* @copyright Copyright (c) 2016, John Molakvoæ <skjnldsv@protonmail.com>\n* @copyright Copyright (c) 2016, Robin Appelman <robin@icewind.nl>\n* @copyright Copyright (c) 2016, Jan-Christoph Borchardt <hey@jancborchardt.net>\n* @copyright Copyright (c) 2016, Erik Pellikka <erik@pellikka.org>\n* @copyright Copyright (c) 2015, Vincent Petry <pvince81@owncloud.com>\n*\n* Bootstrap v3.3.5 (http://getbootstrap.com)\n* Copyright 2011-2015 Twitter, Inc.\n* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n*/\n.v-popper--theme-tooltip.v-popper__popper {\n  position: absolute;\n  z-index: 100000;\n  top: 0;\n  right: auto;\n  left: auto;\n  display: block;\n  margin: 0;\n  padding: 0;\n  text-align: left;\n  text-align: start;\n  opacity: 0;\n  line-height: 1.6;\n  line-break: auto;\n  filter: drop-shadow(0 1px 10px var(--color-box-shadow));\n}\n.v-popper--theme-tooltip.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-container {\n  bottom: -10px;\n  border-bottom-width: 0;\n  border-top-color: var(--color-main-background);\n}\n.v-popper--theme-tooltip.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-container {\n  top: -10px;\n  border-top-width: 0;\n  border-bottom-color: var(--color-main-background);\n}\n.v-popper--theme-tooltip.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-container {\n  right: 100%;\n  border-left-width: 0;\n  border-right-color: var(--color-main-background);\n}\n.v-popper--theme-tooltip.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-container {\n  left: 100%;\n  border-right-width: 0;\n  border-left-color: var(--color-main-background);\n}\n.v-popper--theme-tooltip.v-popper__popper[aria-hidden=true] {\n  visibility: hidden;\n  transition: opacity 0.15s, visibility 0.15s;\n  opacity: 0;\n}\n.v-popper--theme-tooltip.v-popper__popper[aria-hidden=false] {\n  visibility: visible;\n  transition: opacity 0.15s;\n  opacity: 1;\n}\n.v-popper--theme-tooltip .v-popper__inner {\n  max-width: 350px;\n  padding: 5px 8px;\n  text-align: center;\n  color: var(--color-main-text);\n  border-radius: var(--border-radius);\n  background-color: var(--color-main-background);\n}\n.v-popper--theme-tooltip .v-popper__arrow-container {\n  position: absolute;\n  z-index: 1;\n  width: 0;\n  height: 0;\n  margin: 0;\n  border-style: solid;\n  border-color: transparent;\n  border-width: 10px;\n}", ""]); // Exports

          /* harmony default export */


          __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
          /***/
        },

        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActions/NcActions.vue?vue&type=style&index=0&id=ae33d9be&lang=scss&scoped=true&":
        /*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActions/NcActions.vue?vue&type=style&index=0&id=ae33d9be&lang=scss&scoped=true& ***!
          \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcActionsNcActionsVueVueTypeStyleIndex0IdAe33d9beLangScssScopedTrue(module, __webpack_exports__, __nested_webpack_require_173413__) {
          "use strict";

          __nested_webpack_require_173413__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_173413__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_173413__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_173413__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_173413__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__); // Imports


          var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()); // Module


          ___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-ae33d9be] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.action-items[data-v-ae33d9be] {\n  display: flex;\n  align-items: center;\n}\n.action-item[data-v-ae33d9be] {\n  --open-background-color: var(--color-background-hover, $action-background-hover);\n  position: relative;\n  display: inline-block;\n}\n.action-item.action-item--primary[data-v-ae33d9be] {\n  --open-background-color: var(--color-primary-element-hover);\n}\n.action-item.action-item--secondary[data-v-ae33d9be] {\n  --open-background-color: var(--color-primary-light-hover);\n}\n.action-item.action-item--error[data-v-ae33d9be] {\n  --open-background-color: var(--color-error-hover);\n}\n.action-item.action-item--warning[data-v-ae33d9be] {\n  --open-background-color: var(--color-warning-hover);\n}\n.action-item.action-item--success[data-v-ae33d9be] {\n  --open-background-color: var(--color-success-hover);\n}\n.action-item.action-item--open .action-item__menutoggle[data-v-ae33d9be] {\n  opacity: 1;\n  background-color: var(--open-background-color);\n}", ""]); // Exports

          /* harmony default export */


          __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
          /***/
        },

        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActions/NcActions.vue?vue&type=style&index=1&id=ae33d9be&lang=scss&":
        /*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActions/NcActions.vue?vue&type=style&index=1&id=ae33d9be&lang=scss& ***!
          \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcActionsNcActionsVueVueTypeStyleIndex1IdAe33d9beLangScss(module, __webpack_exports__, __nested_webpack_require_178959__) {
          "use strict";

          __nested_webpack_require_178959__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_178959__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_178959__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_178959__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_178959__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__); // Imports


          var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()); // Module


          ___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.v-popper--theme-dropdown.v-popper__popper.action-item__popper .v-popper__inner {\n  border-radius: var(--border-radius-large);\n  padding: 4px;\n}", ""]); // Exports

          /* harmony default export */


          __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
          /***/
        },

        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcButton/NcButton.vue?vue&type=style&index=0&id=592da5af&lang=scss&scoped=true&":
        /*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcButton/NcButton.vue?vue&type=style&index=0&id=592da5af&lang=scss&scoped=true& ***!
          \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcButtonNcButtonVueVueTypeStyleIndex0Id592da5afLangScssScopedTrue(module, __webpack_exports__, __nested_webpack_require_183714__) {
          "use strict";

          __nested_webpack_require_183714__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_183714__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_183714__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_183714__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_183714__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__); // Imports


          var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()); // Module


          ___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-592da5af] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.button-vue[data-v-592da5af] {\n  position: relative;\n  width: fit-content;\n  overflow: hidden;\n  border: 0;\n  padding: 0;\n  font-size: var(--default-font-size);\n  font-weight: bold;\n  min-height: 44px;\n  min-width: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 22px;\n  transition: background-color 0.1s linear !important;\n  transition: border 0.1s linear;\n  background-color: var(--color-primary-element-lighter);\n  color: var(--color-primary-light-text);\n}\n.button-vue *[data-v-592da5af] {\n  cursor: pointer;\n}\n.button-vue[data-v-592da5af]:focus {\n  outline: none;\n}\n.button-vue[data-v-592da5af]:disabled {\n  cursor: default;\n  opacity: 0.5;\n  filter: saturate(0.7);\n}\n.button-vue:disabled *[data-v-592da5af] {\n  cursor: default;\n}\n.button-vue[data-v-592da5af]:hover:not(:disabled) {\n  background-color: var(--color-primary-light-hover);\n}\n.button-vue[data-v-592da5af]:active {\n  background-color: var(--color-primary-element-lighter);\n}\n.button-vue__wrapper[data-v-592da5af] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.button-vue__icon[data-v-592da5af] {\n  height: 44px;\n  width: 44px;\n  min-height: 44px;\n  min-width: 44px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.button-vue__text[data-v-592da5af] {\n  font-weight: bold;\n  margin-bottom: 1px;\n  padding: 2px 0;\n}\n.button-vue--icon-only[data-v-592da5af] {\n  width: 44px !important;\n}\n.button-vue--text-only[data-v-592da5af] {\n  padding: 0 12px;\n}\n.button-vue--text-only .button-vue__text[data-v-592da5af] {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n.button-vue--icon-and-text[data-v-592da5af] {\n  padding: 0 16px 0 4px;\n}\n.button-vue--wide[data-v-592da5af] {\n  width: 100%;\n}\n.button-vue--tabbed[data-v-592da5af], .button-vue[data-v-592da5af]:focus-visible {\n  box-shadow: 0 0 0 2px var(--color-main-text);\n  background-color: var(--color-primary-light-hover);\n}\n.button-vue--tabbed.button-vue--vue-primary[data-v-592da5af], .button-vue:focus-visible.button-vue--vue-primary[data-v-592da5af] {\n  background-color: var(--color-primary-hover);\n}\n.button-vue--tabbed.button-vue--vue-secondary[data-v-592da5af], .button-vue:focus-visible.button-vue--vue-secondary[data-v-592da5af] {\n  box-shadow: 0 0 0 2px var(--color-main-text);\n}\n.button-vue--tabbed.button-vue--vue-tertiary-no-background[data-v-592da5af], .button-vue:focus-visible.button-vue--vue-tertiary-no-background[data-v-592da5af] {\n  opacity: 1;\n}\n.button-vue--tabbed.button-vue--vue-tertiary-on-primary[data-v-592da5af], .button-vue:focus-visible.button-vue--vue-tertiary-on-primary[data-v-592da5af] {\n  box-shadow: 0 0 0 2px var(--color-primary-text);\n  border-radius: var(--border-radius);\n  opacity: 1;\n  background-color: transparent;\n}\n.button-vue--tabbed.button-vue--vue-success[data-v-592da5af], .button-vue:focus-visible.button-vue--vue-success[data-v-592da5af] {\n  background-color: var(--color-success-hover);\n}\n.button-vue--tabbed.button-vue--vue-warning[data-v-592da5af], .button-vue:focus-visible.button-vue--vue-warning[data-v-592da5af] {\n  background-color: var(--color-warning-hover);\n}\n.button-vue--tabbed.button-vue--vue-error[data-v-592da5af], .button-vue:focus-visible.button-vue--vue-error[data-v-592da5af] {\n  background-color: var(--color-error-hover);\n}\n.button-vue--vue-primary[data-v-592da5af] {\n  background-color: var(--color-primary-element);\n  color: var(--color-primary-text);\n}\n.button-vue--vue-primary[data-v-592da5af]:hover:not(:disabled) {\n  background-color: var(--color-primary-element-hover);\n}\n.button-vue--vue-primary[data-v-592da5af]:active {\n  background-color: var(--color-primary-element);\n}\n.button-vue--vue-secondary[data-v-592da5af] {\n  color: var(--color-primary-light-text);\n  background-color: var(--color-primary-light);\n}\n.button-vue--vue-secondary[data-v-592da5af]:hover:not(:disabled) {\n  color: var(--color-primary-light-text);\n  background-color: var(--color-primary-light-hover);\n}\n.button-vue--vue-tertiary[data-v-592da5af] {\n  color: var(--color-main-text);\n  background-color: transparent;\n}\n.button-vue--vue-tertiary[data-v-592da5af]:hover:not(:disabled) {\n  background-color: var(--color);\n  background-color: var(--color-background-hover);\n}\n.button-vue--vue-tertiary-no-background[data-v-592da5af] {\n  color: var(--color-main-text);\n  background-color: transparent;\n  opacity: 0.7;\n}\n.button-vue--vue-tertiary-no-background[data-v-592da5af]:hover:not(:disabled) {\n  background-color: transparent;\n  opacity: 1;\n}\n.button-vue--vue-tertiary-on-primary[data-v-592da5af] {\n  color: var(--color-primary-text);\n  background-color: transparent;\n  opacity: 0.7;\n}\n.button-vue--vue-tertiary-on-primary[data-v-592da5af]:hover:not(:disabled) {\n  background-color: transparent;\n  opacity: 1;\n}\n.button-vue--vue-success[data-v-592da5af] {\n  background-color: var(--color-success);\n  color: white;\n}\n.button-vue--vue-success[data-v-592da5af]:hover:not(:disabled) {\n  background-color: var(--color-success-hover);\n}\n.button-vue--vue-success[data-v-592da5af]:active {\n  background-color: var(--color-success);\n}\n.button-vue--vue-warning[data-v-592da5af] {\n  background-color: var(--color-warning);\n  color: white;\n}\n.button-vue--vue-warning[data-v-592da5af]:hover:not(:disabled) {\n  background-color: var(--color-warning-hover);\n}\n.button-vue--vue-warning[data-v-592da5af]:active {\n  background-color: var(--color-warning);\n}\n.button-vue--vue-error[data-v-592da5af] {\n  background-color: var(--color-error);\n  color: white;\n}\n.button-vue--vue-error[data-v-592da5af]:hover:not(:disabled) {\n  background-color: var(--color-error-hover);\n}\n.button-vue--vue-error[data-v-592da5af]:active {\n  background-color: var(--color-error);\n}", ""]); // Exports

          /* harmony default export */


          __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
          /***/
        },

        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss&":
        /*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss& ***!
          \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcPopoverNcPopoverVueVueTypeStyleIndex0Id40cc2471LangScss(module, __webpack_exports__, __nested_webpack_require_194188__) {
          "use strict";

          __nested_webpack_require_194188__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_194188__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_194188__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_194188__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_194188__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__); // Imports


          var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()); // Module


          ___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.resize-observer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  pointer-events: none;\n  display: block;\n  overflow: hidden;\n  opacity: 0;\n}\n.resize-observer object {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: -1;\n}\n.v-popper--theme-dropdown.v-popper__popper {\n  z-index: 100000;\n  top: 0;\n  left: 0;\n  display: block !important;\n  filter: drop-shadow(0 1px 10px var(--color-box-shadow));\n}\n.v-popper--theme-dropdown.v-popper__popper .v-popper__inner {\n  padding: 0;\n  color: var(--color-main-text);\n  border-radius: var(--border-radius);\n  overflow: hidden;\n  background: var(--color-main-background);\n}\n.v-popper--theme-dropdown.v-popper__popper .v-popper__arrow-container {\n  position: absolute;\n  z-index: 1;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-color: transparent;\n  border-width: 10px;\n}\n.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-container {\n  bottom: -10px;\n  border-bottom-width: 0;\n  border-top-color: var(--color-main-background);\n}\n.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-container {\n  top: -10px;\n  border-top-width: 0;\n  border-bottom-color: var(--color-main-background);\n}\n.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-container {\n  left: -10px;\n  border-left-width: 0;\n  border-right-color: var(--color-main-background);\n}\n.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-container {\n  right: -10px;\n  border-right-width: 0;\n  border-left-color: var(--color-main-background);\n}\n.v-popper--theme-dropdown.v-popper__popper[aria-hidden=true] {\n  visibility: hidden;\n  transition: opacity var(--animation-quick), visibility var(--animation-quick);\n  opacity: 0;\n}\n.v-popper--theme-dropdown.v-popper__popper[aria-hidden=false] {\n  visibility: visible;\n  transition: opacity var(--animation-quick);\n  opacity: 1;\n}", ""]); // Exports

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
        "./src/directives/Tooltip/index.scss":
        /*!*******************************************!*\
          !*** ./src/directives/Tooltip/index.scss ***!
          \*******************************************/

        /***/
        function srcDirectivesTooltipIndexScss(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_203499__) {
          "use strict";

          __nested_webpack_require_203499__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_203499__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_203499__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_203499__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_203499__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_203499__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_203499__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_203499__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_203499__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_203499__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_203499__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_203499__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_203499__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_203499__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./index.scss */
          "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./src/directives/Tooltip/index.scss");

          var options = {};
          options.styleTagTransform = _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
          options.setAttributes = _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
          options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
          options.domAPI = _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
          options.insertStyleElement = _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

          var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined;
          /***/
        },

        /***/
        "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActions/NcActions.vue?vue&type=style&index=0&id=ae33d9be&lang=scss&scoped=true&":
        /*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActions/NcActions.vue?vue&type=style&index=0&id=ae33d9be&lang=scss&scoped=true& ***!
          \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesStyleLoaderDistCjsJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcActionsNcActionsVueVueTypeStyleIndex0IdAe33d9beLangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_211737__) {
          "use strict";

          __nested_webpack_require_211737__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_211737__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_211737__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_211737__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_211737__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_211737__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_211737__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_211737__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_211737__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_211737__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_211737__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_211737__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_211737__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActions_vue_vue_type_style_index_0_id_ae33d9be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_211737__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcActions.vue?vue&type=style&index=0&id=ae33d9be&lang=scss&scoped=true& */
          "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActions/NcActions.vue?vue&type=style&index=0&id=ae33d9be&lang=scss&scoped=true&");

          var options = {};
          options.styleTagTransform = _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
          options.setAttributes = _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
          options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
          options.domAPI = _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
          options.insertStyleElement = _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

          var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActions_vue_vue_type_style_index_0_id_ae33d9be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActions_vue_vue_type_style_index_0_id_ae33d9be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActions_vue_vue_type_style_index_0_id_ae33d9be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActions_vue_vue_type_style_index_0_id_ae33d9be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined;
          /***/
        },

        /***/
        "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActions/NcActions.vue?vue&type=style&index=1&id=ae33d9be&lang=scss&":
        /*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActions/NcActions.vue?vue&type=style&index=1&id=ae33d9be&lang=scss& ***!
          \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesStyleLoaderDistCjsJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcActionsNcActionsVueVueTypeStyleIndex1IdAe33d9beLangScss(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_221147__) {
          "use strict";

          __nested_webpack_require_221147__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_221147__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_221147__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_221147__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_221147__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_221147__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_221147__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_221147__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_221147__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_221147__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_221147__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_221147__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_221147__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActions_vue_vue_type_style_index_1_id_ae33d9be_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_221147__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcActions.vue?vue&type=style&index=1&id=ae33d9be&lang=scss& */
          "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActions/NcActions.vue?vue&type=style&index=1&id=ae33d9be&lang=scss&");

          var options = {};
          options.styleTagTransform = _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
          options.setAttributes = _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
          options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
          options.domAPI = _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
          options.insertStyleElement = _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

          var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActions_vue_vue_type_style_index_1_id_ae33d9be_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActions_vue_vue_type_style_index_1_id_ae33d9be_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActions_vue_vue_type_style_index_1_id_ae33d9be_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActions_vue_vue_type_style_index_1_id_ae33d9be_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined;
          /***/
        },

        /***/
        "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcButton/NcButton.vue?vue&type=style&index=0&id=592da5af&lang=scss&scoped=true&":
        /*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcButton/NcButton.vue?vue&type=style&index=0&id=592da5af&lang=scss&scoped=true& ***!
          \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesStyleLoaderDistCjsJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcButtonNcButtonVueVueTypeStyleIndex0Id592da5afLangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_230521__) {
          "use strict";

          __nested_webpack_require_230521__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_230521__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_230521__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_230521__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_230521__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_230521__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_230521__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_230521__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_230521__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_230521__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_230521__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_230521__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_230521__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcButton_vue_vue_type_style_index_0_id_592da5af_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_230521__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcButton.vue?vue&type=style&index=0&id=592da5af&lang=scss&scoped=true& */
          "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcButton/NcButton.vue?vue&type=style&index=0&id=592da5af&lang=scss&scoped=true&");

          var options = {};
          options.styleTagTransform = _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
          options.setAttributes = _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
          options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
          options.domAPI = _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
          options.insertStyleElement = _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

          var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcButton_vue_vue_type_style_index_0_id_592da5af_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcButton_vue_vue_type_style_index_0_id_592da5af_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcButton_vue_vue_type_style_index_0_id_592da5af_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcButton_vue_vue_type_style_index_0_id_592da5af_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined;
          /***/
        },

        /***/
        "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss&":
        /*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss& ***!
          \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesStyleLoaderDistCjsJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcPopoverNcPopoverVueVueTypeStyleIndex0Id40cc2471LangScss(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_239923__) {
          "use strict";

          __nested_webpack_require_239923__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_239923__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_239923__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_239923__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_239923__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_239923__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_239923__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_239923__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_239923__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_239923__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_239923__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_239923__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_239923__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_style_index_0_id_40cc2471_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_239923__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss& */
          "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss&");

          var options = {};
          options.styleTagTransform = _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
          options.setAttributes = _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
          options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
          options.domAPI = _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
          options.insertStyleElement = _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

          var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_style_index_0_id_40cc2471_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_style_index_0_id_40cc2471_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_style_index_0_id_40cc2471_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_style_index_0_id_40cc2471_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined;
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
        function node_modulesStyleLoaderDistRuntimeSetAttributesWithoutAttributesJs(module, __unused_webpack_exports, __nested_webpack_require_254161__) {
          "use strict";
          /* istanbul ignore next  */

          function setAttributesWithoutAttributes(styleElement) {
            var nonce =  true ? __nested_webpack_require_254161__.nc : 0;

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
        "./src/components/NcActions/NcActions.vue":
        /*!************************************************!*\
          !*** ./src/components/NcActions/NcActions.vue ***!
          \************************************************/

        /***/
        function srcComponentsNcActionsNcActionsVue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_258257__) {
          "use strict";

          __nested_webpack_require_258257__.r(__webpack_exports__);
          /* harmony import */


          var _NcActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_258257__(
          /*! ./NcActions.vue?vue&type=script&lang=js& */
          "./src/components/NcActions/NcActions.vue?vue&type=script&lang=js&");
          /* harmony import */


          var _NcActions_vue_vue_type_style_index_0_id_ae33d9be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_258257__(
          /*! ./NcActions.vue?vue&type=style&index=0&id=ae33d9be&lang=scss&scoped=true& */
          "./src/components/NcActions/NcActions.vue?vue&type=style&index=0&id=ae33d9be&lang=scss&scoped=true&");
          /* harmony import */


          var _NcActions_vue_vue_type_style_index_1_id_ae33d9be_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_258257__(
          /*! ./NcActions.vue?vue&type=style&index=1&id=ae33d9be&lang=scss& */
          "./src/components/NcActions/NcActions.vue?vue&type=style&index=1&id=ae33d9be&lang=scss&");
          /* harmony import */


          var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_258257__(
          /*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
          "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
          /* harmony import */


          var _NcActions_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_258257__(
          /*! ./NcActions.vue?vue&type=custom&index=0&blockType=docs */
          "./src/components/NcActions/NcActions.vue?vue&type=custom&index=0&blockType=docs");
          /* harmony import */


          var _NcActions_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_258257__.n(_NcActions_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__);

          var render, staticRenderFns;
          ;
          /* normalize component */

          var component = (0, _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_NcActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"], render, staticRenderFns, false, null, "ae33d9be", null)
          /* custom blocks */
          ;
          if (typeof _NcActions_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default() === 'function') _NcActions_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default()(component);
          /* hot reload */

          if (false) { var api; }

          component.options.__file = "src/components/NcActions/NcActions.vue";
          /* harmony default export */

          __webpack_exports__["default"] = component.exports;
          /***/
        },

        /***/
        "./src/components/NcButton/NcButton.vue":
        /*!**********************************************!*\
          !*** ./src/components/NcButton/NcButton.vue ***!
          \**********************************************/

        /***/
        function srcComponentsNcButtonNcButtonVue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_261533__) {
          "use strict";

          __nested_webpack_require_261533__.r(__webpack_exports__);
          /* harmony import */


          var _NcButton_vue_vue_type_template_id_592da5af_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_261533__(
          /*! ./NcButton.vue?vue&type=template&id=592da5af&scoped=true& */
          "./src/components/NcButton/NcButton.vue?vue&type=template&id=592da5af&scoped=true&");
          /* harmony import */


          var _NcButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_261533__(
          /*! ./NcButton.vue?vue&type=script&lang=js& */
          "./src/components/NcButton/NcButton.vue?vue&type=script&lang=js&");
          /* harmony import */


          var _NcButton_vue_vue_type_style_index_0_id_592da5af_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_261533__(
          /*! ./NcButton.vue?vue&type=style&index=0&id=592da5af&lang=scss&scoped=true& */
          "./src/components/NcButton/NcButton.vue?vue&type=style&index=0&id=592da5af&lang=scss&scoped=true&");
          /* harmony import */


          var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_261533__(
          /*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
          "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
          /* harmony import */


          var _NcButton_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_261533__(
          /*! ./NcButton.vue?vue&type=custom&index=0&blockType=docs */
          "./src/components/NcButton/NcButton.vue?vue&type=custom&index=0&blockType=docs");
          /* harmony import */


          var _NcButton_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_261533__.n(_NcButton_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__);

          ;
          /* normalize component */

          var component = (0, _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_NcButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _NcButton_vue_vue_type_template_id_592da5af_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render, _NcButton_vue_vue_type_template_id_592da5af_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns, false, null, "592da5af", null)
          /* custom blocks */
          ;
          if (typeof _NcButton_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default() === 'function') _NcButton_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default()(component);
          /* hot reload */

          if (false) { var api; }

          component.options.__file = "src/components/NcButton/NcButton.vue";
          /* harmony default export */

          __webpack_exports__["default"] = component.exports;
          /***/
        },

        /***/
        "./src/components/NcPopover/NcPopover.vue":
        /*!************************************************!*\
          !*** ./src/components/NcPopover/NcPopover.vue ***!
          \************************************************/

        /***/
        function srcComponentsNcPopoverNcPopoverVue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_264920__) {
          "use strict";

          __nested_webpack_require_264920__.r(__webpack_exports__);
          /* harmony import */


          var _NcPopover_vue_vue_type_template_id_40cc2471___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_264920__(
          /*! ./NcPopover.vue?vue&type=template&id=40cc2471& */
          "./src/components/NcPopover/NcPopover.vue?vue&type=template&id=40cc2471&");
          /* harmony import */


          var _NcPopover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_264920__(
          /*! ./NcPopover.vue?vue&type=script&lang=js& */
          "./src/components/NcPopover/NcPopover.vue?vue&type=script&lang=js&");
          /* harmony import */


          var _NcPopover_vue_vue_type_style_index_0_id_40cc2471_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_264920__(
          /*! ./NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss& */
          "./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss&");
          /* harmony import */


          var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_264920__(
          /*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
          "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
          /* harmony import */


          var _NcPopover_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_264920__(
          /*! ./NcPopover.vue?vue&type=custom&index=0&blockType=docs */
          "./src/components/NcPopover/NcPopover.vue?vue&type=custom&index=0&blockType=docs");
          /* harmony import */


          var _NcPopover_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_264920__.n(_NcPopover_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__);

          ;
          /* normalize component */

          var component = (0, _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_NcPopover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _NcPopover_vue_vue_type_template_id_40cc2471___WEBPACK_IMPORTED_MODULE_0__.render, _NcPopover_vue_vue_type_template_id_40cc2471___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns, false, null, null, null)
          /* custom blocks */
          ;
          if (typeof _NcPopover_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default() === 'function') _NcPopover_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default()(component);
          /* hot reload */

          if (false) { var api; }

          component.options.__file = "src/components/NcPopover/NcPopover.vue";
          /* harmony default export */

          __webpack_exports__["default"] = component.exports;
          /***/
        },

        /***/
        "./src/components/NcActions/NcActions.vue?vue&type=script&lang=js&":
        /*!*************************************************************************!*\
          !*** ./src/components/NcActions/NcActions.vue?vue&type=script&lang=js& ***!
          \*************************************************************************/

        /***/
        function srcComponentsNcActionsNcActionsVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_268349__) {
          "use strict";

          __nested_webpack_require_268349__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_268349__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcActions.vue?vue&type=script&lang=js& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActions/NcActions.vue?vue&type=script&lang=js&");
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
          /***/
        },

        /***/
        "./src/components/NcButton/NcButton.vue?vue&type=script&lang=js&":
        /*!***********************************************************************!*\
          !*** ./src/components/NcButton/NcButton.vue?vue&type=script&lang=js& ***!
          \***********************************************************************/

        /***/
        function srcComponentsNcButtonNcButtonVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_269800__) {
          "use strict";

          __nested_webpack_require_269800__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_269800__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcButton.vue?vue&type=script&lang=js& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcButton/NcButton.vue?vue&type=script&lang=js&");
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
          /***/
        },

        /***/
        "./src/components/NcPopover/NcPopover.vue?vue&type=script&lang=js&":
        /*!*************************************************************************!*\
          !*** ./src/components/NcPopover/NcPopover.vue?vue&type=script&lang=js& ***!
          \*************************************************************************/

        /***/
        function srcComponentsNcPopoverNcPopoverVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_271256__) {
          "use strict";

          __nested_webpack_require_271256__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_271256__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcPopover.vue?vue&type=script&lang=js& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=script&lang=js&");
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
          /***/
        },

        /***/
        "./src/components/NcButton/NcButton.vue?vue&type=template&id=592da5af&scoped=true&":
        /*!*****************************************************************************************!*\
          !*** ./src/components/NcButton/NcButton.vue?vue&type=template&id=592da5af&scoped=true& ***!
          \*****************************************************************************************/

        /***/
        function srcComponentsNcButtonNcButtonVueVueTypeTemplateId592da5afScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_272795__) {
          "use strict";

          __nested_webpack_require_272795__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_272795__.d(__webpack_exports__, {
            /* harmony export */
            "render": function render() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcButton_vue_vue_type_template_id_592da5af_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render
              );
            },

            /* harmony export */
            "staticRenderFns": function staticRenderFns() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcButton_vue_vue_type_template_id_592da5af_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
              );
            }
            /* harmony export */

          });
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcButton_vue_vue_type_template_id_592da5af_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_272795__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcButton.vue?vue&type=template&id=592da5af&scoped=true& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcButton/NcButton.vue?vue&type=template&id=592da5af&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcPopover/NcPopover.vue?vue&type=template&id=40cc2471&":
        /*!*******************************************************************************!*\
          !*** ./src/components/NcPopover/NcPopover.vue?vue&type=template&id=40cc2471& ***!
          \*******************************************************************************/

        /***/
        function srcComponentsNcPopoverNcPopoverVueVueTypeTemplateId40cc2471(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_275357__) {
          "use strict";

          __nested_webpack_require_275357__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_275357__.d(__webpack_exports__, {
            /* harmony export */
            "render": function render() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_template_id_40cc2471___WEBPACK_IMPORTED_MODULE_0__.render
              );
            },

            /* harmony export */
            "staticRenderFns": function staticRenderFns() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_template_id_40cc2471___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
              );
            }
            /* harmony export */

          });
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_template_id_40cc2471___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_275357__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcPopover.vue?vue&type=template&id=40cc2471& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=template&id=40cc2471&");
          /***/

        },

        /***/
        "./src/components/NcActions/NcActions.vue?vue&type=style&index=0&id=ae33d9be&lang=scss&scoped=true&":
        /*!**********************************************************************************************************!*\
          !*** ./src/components/NcActions/NcActions.vue?vue&type=style&index=0&id=ae33d9be&lang=scss&scoped=true& ***!
          \**********************************************************************************************************/

        /***/
        function srcComponentsNcActionsNcActionsVueVueTypeStyleIndex0IdAe33d9beLangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_277994__) {
          "use strict";

          __nested_webpack_require_277994__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActions_vue_vue_type_style_index_0_id_ae33d9be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_277994__(
          /*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcActions.vue?vue&type=style&index=0&id=ae33d9be&lang=scss&scoped=true& */
          "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActions/NcActions.vue?vue&type=style&index=0&id=ae33d9be&lang=scss&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcActions/NcActions.vue?vue&type=style&index=1&id=ae33d9be&lang=scss&":
        /*!**********************************************************************************************!*\
          !*** ./src/components/NcActions/NcActions.vue?vue&type=style&index=1&id=ae33d9be&lang=scss& ***!
          \**********************************************************************************************/

        /***/
        function srcComponentsNcActionsNcActionsVueVueTypeStyleIndex1IdAe33d9beLangScss(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_280014__) {
          "use strict";

          __nested_webpack_require_280014__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActions_vue_vue_type_style_index_1_id_ae33d9be_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_280014__(
          /*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcActions.vue?vue&type=style&index=1&id=ae33d9be&lang=scss& */
          "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcActions/NcActions.vue?vue&type=style&index=1&id=ae33d9be&lang=scss&");
          /***/

        },

        /***/
        "./src/components/NcButton/NcButton.vue?vue&type=style&index=0&id=592da5af&lang=scss&scoped=true&":
        /*!********************************************************************************************************!*\
          !*** ./src/components/NcButton/NcButton.vue?vue&type=style&index=0&id=592da5af&lang=scss&scoped=true& ***!
          \********************************************************************************************************/

        /***/
        function srcComponentsNcButtonNcButtonVueVueTypeStyleIndex0Id592da5afLangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_282046__) {
          "use strict";

          __nested_webpack_require_282046__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcButton_vue_vue_type_style_index_0_id_592da5af_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_282046__(
          /*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcButton.vue?vue&type=style&index=0&id=592da5af&lang=scss&scoped=true& */
          "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcButton/NcButton.vue?vue&type=style&index=0&id=592da5af&lang=scss&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss&":
        /*!**********************************************************************************************!*\
          !*** ./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss& ***!
          \**********************************************************************************************/

        /***/
        function srcComponentsNcPopoverNcPopoverVueVueTypeStyleIndex0Id40cc2471LangScss(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_284062__) {
          "use strict";

          __nested_webpack_require_284062__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_style_index_0_id_40cc2471_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_284062__(
          /*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss& */
          "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss&");
          /***/

        },

        /***/
        "./src/components/NcActions/NcActions.vue?vue&type=custom&index=0&blockType=docs":
        /*!***************************************************************************************!*\
          !*** ./src/components/NcActions/NcActions.vue?vue&type=custom&index=0&blockType=docs ***!
          \***************************************************************************************/

        /***/
        function srcComponentsNcActionsNcActionsVueVueTypeCustomIndex0BlockTypeDocs() {
          /***/
        },

        /***/
        "./src/components/NcButton/NcButton.vue?vue&type=custom&index=0&blockType=docs":
        /*!*************************************************************************************!*\
          !*** ./src/components/NcButton/NcButton.vue?vue&type=custom&index=0&blockType=docs ***!
          \*************************************************************************************/

        /***/
        function srcComponentsNcButtonNcButtonVueVueTypeCustomIndex0BlockTypeDocs() {
          /***/
        },

        /***/
        "./src/components/NcPopover/NcPopover.vue?vue&type=custom&index=0&blockType=docs":
        /*!***************************************************************************************!*\
          !*** ./src/components/NcPopover/NcPopover.vue?vue&type=custom&index=0&blockType=docs ***!
          \***************************************************************************************/

        /***/
        function srcComponentsNcPopoverNcPopoverVueVueTypeCustomIndex0BlockTypeDocs() {
          /***/
        },

        /***/
        "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
        /*!********************************************************************!*\
          !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
          \********************************************************************/

        /***/
        function node_modulesVueLoaderLibRuntimeComponentNormalizerJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_287528__) {
          "use strict";

          __nested_webpack_require_287528__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_287528__.d(__webpack_exports__, {
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
        "floating-vue":
        /*!*******************************!*\
          !*** external "floating-vue" ***!
          \*******************************/

        /***/
        function floatingVue(module) {
          "use strict";

          module.exports = __webpack_require__(/*! floating-vue */ "../@nextcloud/nextcloud-vue/node_modules/floating-vue/dist/floating-vue.es.js");
          /***/
        },

        /***/
        "focus-trap":
        /*!*****************************!*\
          !*** external "focus-trap" ***!
          \*****************************/

        /***/
        function focusTrap(module) {
          "use strict";

          module.exports = __webpack_require__(/*! focus-trap */ "../@nextcloud/nextcloud-vue/node_modules/focus-trap/dist/focus-trap.esm.js");
          /***/
        },

        /***/
        "vue":
        /*!**********************!*\
          !*** external "vue" ***!
          \**********************/

        /***/
        function vue(module) {
          "use strict";

          module.exports = __webpack_require__(/*! vue */ "../@nextcloud/nextcloud-vue/node_modules/vue/dist/vue.runtime.common.js");
          /***/
        },

        /***/
        "vue-material-design-icons/DotsHorizontal.vue":
        /*!***************************************************************!*\
          !*** external "vue-material-design-icons/DotsHorizontal.vue" ***!
          \***************************************************************/

        /***/
        function vueMaterialDesignIconsDotsHorizontalVue(module) {
          "use strict";

          module.exports = __webpack_require__(/*! vue-material-design-icons/DotsHorizontal.vue */ "../@nextcloud/nextcloud-vue/node_modules/vue-material-design-icons/DotsHorizontal.vue");
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

      function __nested_webpack_require_293527__(moduleId) {
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

        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_293527__);
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
        __nested_webpack_require_293527__.n = function (module) {
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

          __nested_webpack_require_293527__.d(getter, {
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
        __nested_webpack_require_293527__.d = function (exports, definition) {
          /******/
          for (var key in definition) {
            /******/
            if (__nested_webpack_require_293527__.o(definition, key) && !__nested_webpack_require_293527__.o(exports, key)) {
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
        __nested_webpack_require_293527__.o = function (obj, prop) {
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
        __nested_webpack_require_293527__.r = function (exports) {
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
        __nested_webpack_require_293527__.nc = undefined;
        /******/
      }();
      /******/

      /************************************************************************/

      var __webpack_exports__ = {}; // This entry need to be wrapped in an IIFE because it need to be in strict mode.

      !function () {
        "use strict";
        /*!*******************************************!*\
          !*** ./src/components/NcActions/index.js ***!
          \*******************************************/

        __nested_webpack_require_293527__.r(__webpack_exports__);
        /* harmony import */


        var _NcActions_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_293527__(
        /*! ./NcActions.vue */
        "./src/components/NcActions/NcActions.vue");
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
         * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
         * GNU Affero General Public License for more details.
         *
         * You should have received a copy of the GNU Affero General Public License
         * along with this program. If not, see <http://www.gnu.org/licenses/>.
         *
         */

        /* harmony default export */


        __webpack_exports__["default"] = _NcActions_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
      }();
      /******/

      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ "../@nextcloud/nextcloud-vue/dist/Components/NcAvatar.js":
/*!***************************************************************!*\
  !*** ../@nextcloud/nextcloud-vue/dist/Components/NcAvatar.js ***!
  \***************************************************************/
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
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcAvatar/NcAvatar.vue?vue&type=script&lang=js&":
        /*!***************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcAvatar/NcAvatar.vue?vue&type=script&lang=js& ***!
          \***************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcAvatarNcAvatarVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_2012__) {
          "use strict";

          __nested_webpack_require_2012__.r(__webpack_exports__);
          /* harmony import */


          var _NcPopover_index_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_2012__(
          /*! ../NcPopover/index.js */
          "./src/components/NcPopover/index.js");
          /* harmony import */


          var _NcPopoverMenu_index_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_2012__(
          /*! ../NcPopoverMenu/index.js */
          "./src/components/NcPopoverMenu/index.js");
          /* harmony import */


          var _NcLoadingIcon_index_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_2012__(
          /*! ../NcLoadingIcon/index.js */
          "./src/components/NcLoadingIcon/index.js");
          /* harmony import */


          var _directives_Tooltip_index_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_2012__(
          /*! ../../directives/Tooltip/index.js */
          "./src/directives/Tooltip/index.js");
          /* harmony import */


          var _functions_usernameToColor_index_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_2012__(
          /*! ../../functions/usernameToColor/index.js */
          "./src/functions/usernameToColor/index.js");
          /* harmony import */


          var _mixins_index_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_2012__(
          /*! ../../mixins/index.js */
          "./src/mixins/index.js");
          /* harmony import */


          var _l10n_js__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_2012__(
          /*! ../../l10n.js */
          "./src/l10n.js");
          /* harmony import */


          var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_2012__(
          /*! @nextcloud/auth */
          "@nextcloud/auth");
          /* harmony import */


          var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__nested_webpack_require_2012__.n(_nextcloud_auth__WEBPACK_IMPORTED_MODULE_7__);
          /* harmony import */


          var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_2012__(
          /*! @nextcloud/axios */
          "@nextcloud/axios");
          /* harmony import */


          var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__nested_webpack_require_2012__.n(_nextcloud_axios__WEBPACK_IMPORTED_MODULE_8__);
          /* harmony import */


          var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_2012__(
          /*! @nextcloud/event-bus */
          "@nextcloud/event-bus");
          /* harmony import */


          var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__nested_webpack_require_2012__.n(_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_9__);
          /* harmony import */


          var _nextcloud_browser_storage__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_2012__(
          /*! @nextcloud/browser-storage */
          "@nextcloud/browser-storage");
          /* harmony import */


          var _nextcloud_browser_storage__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__nested_webpack_require_2012__.n(_nextcloud_browser_storage__WEBPACK_IMPORTED_MODULE_10__);
          /* harmony import */


          var _nextcloud_router__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_2012__(
          /*! @nextcloud/router */
          "@nextcloud/router");
          /* harmony import */


          var _nextcloud_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__nested_webpack_require_2012__.n(_nextcloud_router__WEBPACK_IMPORTED_MODULE_11__);
          /* harmony import */


          var vue_material_design_icons_DotsHorizontal_vue__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_2012__(
          /*! vue-material-design-icons/DotsHorizontal.vue */
          "vue-material-design-icons/DotsHorizontal.vue");
          /* harmony import */


          var vue_material_design_icons_DotsHorizontal_vue__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__nested_webpack_require_2012__.n(vue_material_design_icons_DotsHorizontal_vue__WEBPACK_IMPORTED_MODULE_12__);
          /* harmony import */


          var v_click_outside__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_2012__(
          /*! v-click-outside */
          "v-click-outside");
          /* harmony import */


          var v_click_outside__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__nested_webpack_require_2012__.n(v_click_outside__WEBPACK_IMPORTED_MODULE_13__);

          function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
            try {
              var info = gen[key](arg);
              var value = info.value;
            } catch (error) {
              reject(error);
              return;
            }

            if (info.done) {
              resolve(value);
            } else {
              Promise.resolve(value).then(_next, _throw);
            }
          }

          function _asyncToGenerator(fn) {
            return function () {
              var self = this,
                  args = arguments;
              return new Promise(function (resolve, reject) {
                var gen = fn.apply(self, args);

                function _next(value) {
                  asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                }

                function _throw(err) {
                  asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                }

                _next(undefined);
              });
            };
          }

          var browserStorage = (0, _nextcloud_browser_storage__WEBPACK_IMPORTED_MODULE_10__.getBuilder)('nextcloud').persist().build();
          /**
           * @param {string} userId The id of the user
           */

          function getUserHasAvatar(userId) {
            var flag = browserStorage.getItem('user-has-avatar.' + userId);

            if (typeof flag === 'string') {
              return Boolean(flag);
            }

            return null;
          }
          /**
           * @param {string} userId The id of the user
           * @param {boolean} flag Has the user an avatar
           */


          function setUserHasAvatar(userId, flag) {
            if (userId) {
              browserStorage.setItem('user-has-avatar.' + userId, flag);
            }
          }
          /* harmony default export */


          __webpack_exports__["default"] = {
            name: 'NcAvatar',
            directives: {
              ClickOutside: v_click_outside__WEBPACK_IMPORTED_MODULE_13__.directive,
              tooltip: _directives_Tooltip_index_js__WEBPACK_IMPORTED_MODULE_3__["default"]
            },
            components: {
              DotsHorizontal: vue_material_design_icons_DotsHorizontal_vue__WEBPACK_IMPORTED_MODULE_12___default(),
              NcLoadingIcon: _NcLoadingIcon_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
              NcPopover: _NcPopover_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
              NcPopoverMenu: _NcPopoverMenu_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]
            },
            mixins: [_mixins_index_js__WEBPACK_IMPORTED_MODULE_5__.userStatus],
            props: {
              /**
               * Set a custom url to the avatar image
               * either the url, user or displayName property must be defined
               */
              url: {
                type: String,
                default: undefined
              },

              /**
               * Set a css icon-class for an icon to be used instead of the avatar.
               */
              iconClass: {
                type: String,
                default: undefined
              },

              /**
               * Set the user id to fetch the avatar
               * either the url, user or displayName property must be defined
               */
              user: {
                type: String,
                default: undefined
              },

              /**
               * Whether or not to display the user-status
               */
              showUserStatus: {
                type: Boolean,
                default: true
              },

              /**
               * Whether or not to the status-icon should be used instead of online/away
               */
              showUserStatusCompact: {
                type: Boolean,
                default: true
              },

              /**
               * When the user status was preloaded via another source it can be handed in with this property to save the request.
               * If this property is not set the status will be fetched automatically.
               * If a preloaded no-status is available provide this object with properties "status", "icon" and "message" set to null.
               */
              preloadedUserStatus: {
                type: Object,
                default: undefined
              },

              /**
               * Is the user a guest user (then we have to user a different endpoint)
               */
              isGuest: {
                type: Boolean,
                default: false
              },

              /**
               * Set a display name that will be rendered as a tooltip
               * either the url, user or displayName property must be defined
               * specify just the displayname to generate a placeholder avatar without
               * trying to fetch the avatar based on the user id
               */
              displayName: {
                type: String,
                default: undefined
              },

              /**
               * Set a size in px for the rendered avatar
               */
              size: {
                type: Number,
                default: 32
              },

              /**
               * Placeholder avatars will be automatically generated when this is set to true
               */
              allowPlaceholder: {
                type: Boolean,
                default: true
              },

              /**
               * Disable the tooltip
               */
              disableTooltip: {
                type: Boolean,
                default: false
              },

              /**
               * Disable the menu
               */
              disableMenu: {
                type: Boolean,
                default: false
              },

              /**
               * Declares a custom tooltip when not null
               * Fallback will be the displayName
               *
               * requires disableTooltip not to be set to true
               */
              tooltipMessage: {
                type: String,
                default: null
              },

              /**
               * Declares username is not a user's name, when true.
               * Prevents loading user's avatar from server and forces generating colored initials,
               * i.e. if the user is a group
               */
              isNoUser: {
                type: Boolean,
                default: false
              },

              /**
               * Choose the avatar menu alignment.
               * Possible values are `left`, `center`, `right`.
               */
              menuPosition: {
                type: String,
                default: 'center'
              },

              /**
               * Selector for the popover menu container
               */
              menuContainer: {
                type: String,
                default: 'body'
              },
              ariaLabel: {
                type: String,
                default: null
              }
            },
            data: function data() {
              return {
                avatarUrlLoaded: null,
                avatarSrcSetLoaded: null,
                userDoesNotExist: false,
                isAvatarLoaded: false,
                isMenuLoaded: false,
                contactsMenuLoading: false,
                contactsMenuActions: [],
                contactsMenuOpenState: false
              };
            },
            computed: {
              avatarAriaLabel: function avatarAriaLabel() {
                if (this.ariaLabel !== null) {
                  return this.ariaLabel;
                }

                if (this.hasStatus && this.showUserStatus && this.showUserStatusCompact) {
                  return (0, _l10n_js__WEBPACK_IMPORTED_MODULE_6__.t)('Avatar of {displayName}, {status}', {
                    displayName: this.displayName || this.userId,
                    status: this.userStatus.status
                  });
                }

                return (0, _l10n_js__WEBPACK_IMPORTED_MODULE_6__.t)('Avatar of {displayName}', {
                  displayName: this.displayName || this.userId
                });
              },
              canDisplayUserStatus: function canDisplayUserStatus() {
                return this.showUserStatus && this.hasStatus && ['online', 'away', 'dnd'].includes(this.userStatus.status);
              },
              showUserStatusIconOnAvatar: function showUserStatusIconOnAvatar() {
                return this.showUserStatus && this.showUserStatusCompact && this.hasStatus && this.userStatus.status !== 'dnd' && this.userStatus.icon;
              },
              getUserIdentifier: function getUserIdentifier() {
                if (this.isDisplayNameDefined) {
                  return this.displayName;
                }

                if (this.isUserDefined) {
                  return this.user;
                }

                return '';
              },
              isUserDefined: function isUserDefined() {
                return typeof this.user !== 'undefined';
              },
              isDisplayNameDefined: function isDisplayNameDefined() {
                return typeof this.displayName !== 'undefined';
              },
              isUrlDefined: function isUrlDefined() {
                return typeof this.url !== 'undefined';
              },
              hasMenu: function hasMenu() {
                var _getCurrentUser;

                if (this.disableMenu) {
                  return false;
                }

                if (this.isMenuLoaded) {
                  return this.menu.length > 0;
                }

                return !(this.user === ((_getCurrentUser = (0, _nextcloud_auth__WEBPACK_IMPORTED_MODULE_7__.getCurrentUser)()) === null || _getCurrentUser === void 0 ? void 0 : _getCurrentUser.uid) || this.userDoesNotExist || this.url);
              },
              shouldShowPlaceholder: function shouldShowPlaceholder() {
                return this.allowPlaceholder && this.userDoesNotExist;
              },
              avatarStyle: function avatarStyle() {
                var style = {
                  '--size': this.size + 'px',
                  lineHeight: this.size + 'px',
                  fontSize: Math.round(this.size * 0.55) + 'px'
                };

                if (!this.iconClass && !this.avatarSrcSetLoaded) {
                  var rgb = (0, _functions_usernameToColor_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this.getUserIdentifier);
                  style.backgroundColor = 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';
                }

                return style;
              },
              tooltip: function tooltip() {
                if (this.disableTooltip) {
                  return false;
                }

                if (this.tooltipMessage) {
                  return this.tooltipMessage;
                }

                return this.displayName;
              },
              initials: function initials() {
                var initials;

                if (this.shouldShowPlaceholder) {
                  var user = this.getUserIdentifier;
                  var idx = user.indexOf(' ');

                  if (user === '') {
                    initials = '?';
                  } else {
                    initials = String.fromCodePoint(user.codePointAt(0));

                    if (idx !== -1) {
                      initials = initials.concat(String.fromCodePoint(user.codePointAt(idx + 1)));
                    }
                  }
                }

                return initials.toUpperCase();
              },
              menu: function menu() {
                var actions = this.contactsMenuActions.map(function (item) {
                  return {
                    href: item.hyperlink,
                    icon: item.icon,
                    longtext: item.title
                  };
                });
                /**
                 * @param {string} html The HTML to escape
                 */

                function escape(html) {
                  var text = document.createTextNode(html);
                  var p = document.createElement('p');
                  p.appendChild(text);
                  return p.innerHTML;
                }

                if (this.showUserStatus && (this.userStatus.icon || this.userStatus.message)) {
                  return [{
                    href: '#',
                    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><text x='0' y='14' font-size='14'>".concat(escape(this.userStatus.icon), "</text></svg>"),
                    text: "".concat(this.userStatus.message)
                  }].concat(actions);
                }

                return actions;
              }
            },
            watch: {
              url: function url() {
                this.userDoesNotExist = false;
                this.loadAvatarUrl();
              },
              user: function user() {
                this.userDoesNotExist = false;
                this.isMenuLoaded = false;
                this.loadAvatarUrl();
              }
            },
            mounted: function mounted() {
              this.loadAvatarUrl();

              if (this.showUserStatus && this.user && !this.isNoUser) {
                if (!this.preloadedUserStatus) {
                  this.fetchUserStatus(this.user);
                } else {
                  this.userStatus.status = this.preloadedUserStatus.status || '';
                  this.userStatus.message = this.preloadedUserStatus.message || '';
                  this.userStatus.icon = this.preloadedUserStatus.icon || '';
                  this.hasStatus = this.preloadedUserStatus.status !== null;
                }

                (0, _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_9__.subscribe)('user_status:status.updated', this.handleUserStatusUpdated);
              }
            },
            beforeDestroy: function beforeDestroy() {
              if (this.showUserStatus && this.user && !this.isNoUser) {
                (0, _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_9__.unsubscribe)('user_status:status.updated', this.handleUserStatusUpdated);
              }
            },
            methods: {
              handlePopoverAfterShow: function handlePopoverAfterShow() {
                var links = this.$refs.popoverMenu.$el.getElementsByTagName('a');

                if (links.length) {
                  links[0].focus();
                }
              },
              handlePopoverAfterHide: function handlePopoverAfterHide() {
                // bring focus back to the trigger
                this.$refs.main.focus();
              },
              handleUserStatusUpdated: function handleUserStatusUpdated(state) {
                if (this.user === state.userId) {
                  this.userStatus = {
                    status: state.status,
                    icon: state.icon,
                    message: state.message
                  };
                }
              },
              toggleMenu: function toggleMenu() {
                var _this = this;

                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (_this.hasMenu) {
                            _context.next = 2;
                            break;
                          }

                          return _context.abrupt("return");

                        case 2:
                          if (_this.contactsMenuOpenState) {
                            _context.next = 5;
                            break;
                          }

                          _context.next = 5;
                          return _this.fetchContactsMenu();

                        case 5:
                          _this.contactsMenuOpenState = !_this.contactsMenuOpenState;

                        case 6:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }))();
              },
              closeMenu: function closeMenu() {
                this.contactsMenuOpenState = false;
              },
              fetchContactsMenu: function fetchContactsMenu() {
                var _this2 = this;

                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  var user, _yield$axios$post, data;

                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _this2.contactsMenuLoading = true;
                          _context2.prev = 1;
                          user = encodeURIComponent(_this2.user);
                          _context2.next = 5;
                          return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_8___default().post((0, _nextcloud_router__WEBPACK_IMPORTED_MODULE_11__.generateUrl)('contactsmenu/findOne'), "shareType=0&shareWith=".concat(user));

                        case 5:
                          _yield$axios$post = _context2.sent;
                          data = _yield$axios$post.data;
                          _this2.contactsMenuActions = data.topAction ? [data.topAction].concat(data.actions) : data.actions;
                          _context2.next = 13;
                          break;

                        case 10:
                          _context2.prev = 10;
                          _context2.t0 = _context2["catch"](1);
                          _this2.contactsMenuOpenState = false;

                        case 13:
                          _this2.contactsMenuLoading = false;
                          _this2.isMenuLoaded = true;

                        case 15:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, null, [[1, 10]]);
                }))();
              },

              /**
               * Handle avatar loading if user or url defined
               */
              loadAvatarUrl: function loadAvatarUrl() {
                this.isAvatarLoaded = false;
                /** Only run avatar image loading if either user or url property is defined */

                if (!this.isUrlDefined && (!this.isUserDefined || this.isNoUser)) {
                  this.isAvatarLoaded = true;
                  this.userDoesNotExist = true;
                  return;
                } // Directly use the url if defined


                if (this.isUrlDefined) {
                  this.updateImageIfValid(this.url);
                  return;
                }

                if (this.size <= 64) {
                  var avatarUrl = this.avatarUrlGenerator(this.user, 64);
                  var srcset = [avatarUrl + ' 1x', this.avatarUrlGenerator(this.user, 512) + ' 8x'].join(', ');
                  this.updateImageIfValid(avatarUrl, srcset);
                } else {
                  var _avatarUrl = this.avatarUrlGenerator(this.user, 512);

                  this.updateImageIfValid(_avatarUrl);
                }
              },

              /**
               * Generate an avatar url from the server's avatar endpoint
               *
               * @param {string} user the user id
               * @param {number} size the desired size
               * @return {string}
               */
              avatarUrlGenerator: function avatarUrlGenerator(user, size) {
                var _getCurrentUser2;

                var url = '/avatar/{user}/{size}';

                if (this.isGuest) {
                  url = '/avatar/guest/{user}/{size}';
                }

                var avatarUrl = (0, _nextcloud_router__WEBPACK_IMPORTED_MODULE_11__.generateUrl)(url, {
                  user: user,
                  size: size
                }); // eslint-disable-next-line camelcase

                if (user === ((_getCurrentUser2 = (0, _nextcloud_auth__WEBPACK_IMPORTED_MODULE_7__.getCurrentUser)()) === null || _getCurrentUser2 === void 0 ? void 0 : _getCurrentUser2.uid) && typeof oc_userconfig !== 'undefined') {
                  avatarUrl += '?v=' + oc_userconfig.avatar.version;
                }

                return avatarUrl;
              },

              /**
               * Check if the provided url is valid and update Avatar if so
               *
               * @param {string} url the avatar url
               * @param {Array} srcset the avatar srcset
               */
              updateImageIfValid: function updateImageIfValid(url) {
                var _this3 = this;

                var srcset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null; // skip loading

                var userHasAvatar = getUserHasAvatar(this.user);

                if (this.isUserDefined && typeof userHasAvatar === 'boolean') {
                  this.isAvatarLoaded = true;
                  this.avatarUrlLoaded = url;

                  if (srcset) {
                    this.avatarSrcSetLoaded = srcset;
                  }

                  if (userHasAvatar === false) {
                    this.userDoesNotExist = true;
                  }

                  return;
                }

                var img = new Image();

                img.onload = function () {
                  _this3.avatarUrlLoaded = url;

                  if (srcset) {
                    _this3.avatarSrcSetLoaded = srcset;
                  }

                  _this3.isAvatarLoaded = true; // re-get to avoid concurrent access

                  setUserHasAvatar(_this3.user, true);
                };

                img.onerror = function () {
                  console.debug('Invalid avatar url', url); // Avatar is invalid, reset

                  _this3.avatarUrlLoaded = null;
                  _this3.avatarSrcSetLoaded = null;
                  _this3.userDoesNotExist = true;
                  _this3.isAvatarLoaded = false;
                  setUserHasAvatar(_this3.user, false);
                };

                if (srcset) {
                  img.srcset = srcset;
                }

                img.src = url;
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
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcLoadingIconNcLoadingIconVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_30229__) {
          "use strict";

          __nested_webpack_require_30229__.r(__webpack_exports__);
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
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=script&lang=js&":
        /*!*****************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=script&lang=js& ***!
          \*****************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcPopoverNcPopoverVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_32737__) {
          "use strict";

          __nested_webpack_require_32737__.r(__webpack_exports__);
          /* harmony import */


          var floating_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_32737__(
          /*! floating-vue */
          "floating-vue");
          /* harmony import */


          var floating_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_32737__.n(floating_vue__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var focus_trap__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_32737__(
          /*! focus-trap */
          "focus-trap");
          /* harmony import */


          var focus_trap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_32737__.n(focus_trap__WEBPACK_IMPORTED_MODULE_1__);

          function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
            try {
              var info = gen[key](arg);
              var value = info.value;
            } catch (error) {
              reject(error);
              return;
            }

            if (info.done) {
              resolve(value);
            } else {
              Promise.resolve(value).then(_next, _throw);
            }
          }

          function _asyncToGenerator(fn) {
            return function () {
              var self = this,
                  args = arguments;
              return new Promise(function (resolve, reject) {
                var gen = fn.apply(self, args);

                function _next(value) {
                  asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                }

                function _throw(err) {
                  asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                }

                _next(undefined);
              });
            };
          }
          /* harmony default export */


          __webpack_exports__["default"] = {
            name: 'NcPopover',
            components: {
              Dropdown: floating_vue__WEBPACK_IMPORTED_MODULE_0__.Dropdown
            },
            props: {
              popoverBaseClass: {
                type: String,
                default: ''
              },

              /**
               * Enable popover focus trap
               */
              focusTrap: {
                type: Boolean,
                default: true
              }
            },
            emits: ['after-show', 'after-hide'],
            mounted: function mounted() {
              var _this = this;

              this.$watch(function () {
                // required because v-tooltip doesn't provide events
                // and @show is too early
                // see https://github.com/Akryum/v-tooltip/issues/661
                return _this.$refs.popover.$refs.popper.isShown;
              }, function (val) {
                if (val) {
                  _this.afterShow();
                } else {
                  _this.afterHide();
                }
              });
            },
            beforeDestroy: function beforeDestroy() {
              this.clearFocusTrap();
            },
            methods: {
              /**
               * Add focus trap for accessibility.
               */
              useFocusTrap: function useFocusTrap() {
                var _this2 = this;

                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var _this2$$refs$popover, _this2$$refs$popover$;

                  var el;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _this2.$nextTick();

                        case 2:
                          if (_this2.focusTrap) {
                            _context.next = 4;
                            break;
                          }

                          return _context.abrupt("return");

                        case 4:
                          el = (_this2$$refs$popover = _this2.$refs.popover) === null || _this2$$refs$popover === void 0 ? void 0 : (_this2$$refs$popover$ = _this2$$refs$popover.$refs.popperContent) === null || _this2$$refs$popover$ === void 0 ? void 0 : _this2$$refs$popover$.$el;

                          if (el) {
                            _context.next = 7;
                            break;
                          }

                          return _context.abrupt("return");

                        case 7:
                          _this2.$focusTrap = (0, focus_trap__WEBPACK_IMPORTED_MODULE_1__.createFocusTrap)(el, {
                            // Prevents to lose focus using esc key
                            // Focus will be release when popover be hide
                            escapeDeactivates: false,
                            allowOutsideClick: true
                          });

                          _this2.$focusTrap.activate();

                        case 9:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }))();
              },

              /**
               * Remove focus trap
               *
               * @param {object} options The configuration options for focusTrap
               */
              clearFocusTrap: function clearFocusTrap() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                try {
                  var _this$$focusTrap;

                  (_this$$focusTrap = this.$focusTrap) === null || _this$$focusTrap === void 0 ? void 0 : _this$$focusTrap.deactivate(options);
                  this.$focusTrap = null;
                } catch (err) {
                  console.warn(err);
                }
              },
              afterShow: function afterShow() {
                /**
                 * Triggered after the tooltip was visually displayed.
                 *
                 * This is different from the 'show' and 'apply-show' which
                 * run earlier than this where there is no guarantee that the
                 * tooltip is already visible and in the DOM.
                 */
                this.$emit('after-show');
                this.useFocusTrap();
              },
              afterHide: function afterHide() {
                /**
                 * Triggered after the tooltip was visually hidden.
                 */
                this.$emit('after-hide');
                this.clearFocusTrap();
              }
            }
          };
          /***/
        },

        /***/
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=script&lang=js&":
        /*!*************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=script&lang=js& ***!
          \*************************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcPopoverMenuNcPopoverMenuVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_40563__) {
          "use strict";

          __nested_webpack_require_40563__.r(__webpack_exports__);
          /* harmony import */


          var _NcPopoverMenuItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_40563__(
          /*! ./NcPopoverMenuItem.vue */
          "./src/components/NcPopoverMenu/NcPopoverMenuItem.vue");
          /* harmony default export */


          __webpack_exports__["default"] = {
            name: 'NcPopoverMenu',
            components: {
              NcPopoverMenuItem: _NcPopoverMenuItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
            },
            props: {
              menu: {
                type: Array,
                default: function _default() {
                  return [{
                    href: 'https://nextcloud.com',
                    icon: 'icon-links',
                    text: 'Nextcloud'
                  }];
                },
                required: true
              }
            }
          };
          /***/
        },

        /***/
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=script&lang=js&":
        /*!*****************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=script&lang=js& ***!
          \*****************************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcPopoverMenuNcPopoverMenuItemVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_42595__) {
          "use strict";

          __nested_webpack_require_42595__.r(__webpack_exports__);
          /* harmony default export */


          __webpack_exports__["default"] = {
            name: 'NcPopoverMenuItem',
            props: {
              item: {
                type: Object,
                required: true,
                default: function _default() {
                  return {
                    key: 'nextcloud-link',
                    href: 'https://nextcloud.com',
                    icon: 'icon-links',
                    text: 'Nextcloud'
                  };
                },
                // check the input types
                // TODO: add more validation of types
                validator: function validator(item) {
                  // TODO: support radio
                  if (item.input) {
                    return ['text', 'checkbox'].indexOf(item.input) !== -1;
                  }

                  return true;
                }
              }
            },
            computed: {
              // random key for inputs binding if not provided
              key: function key() {
                return this.item.key ? this.item.key : Math.round(Math.random() * 16 * 1000000).toString(16);
              },
              iconIsUrl: function iconIsUrl() {
                try {
                  // eslint-disable-next-line no-new
                  new URL(this.item.icon);
                  return true;
                } catch (_) {
                  return false;
                }
              }
            },
            methods: {
              // allow us to use both link and an action on `a`
              // we still need to make sure item.action exists
              action: function action(event) {
                if (this.item.action) {
                  this.item.action(event);
                }
              }
            }
          };
          /***/
        },

        /***/
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcRichContenteditable/NcMentionBubble.vue?vue&type=script&lang=js&":
        /*!***********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcRichContenteditable/NcMentionBubble.vue?vue&type=script&lang=js& ***!
          \***********************************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcRichContenteditableNcMentionBubbleVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_45596__) {
          "use strict";

          __nested_webpack_require_45596__.r(__webpack_exports__);
          /* harmony import */


          var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_45596__(
          /*! @nextcloud/router */
          "@nextcloud/router");
          /* harmony import */


          var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_45596__.n(_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony default export */


          __webpack_exports__["default"] = {
            name: 'NcMentionBubble',
            props: {
              id: {
                type: String,
                required: true
              },
              label: {
                type: String,
                required: true
              },
              icon: {
                type: String,
                required: true
              },
              source: {
                type: String,
                required: true
              },
              primary: {
                type: Boolean,
                default: false
              }
            },
            computed: {
              avatarUrl: function avatarUrl() {
                return this.id && this.source === 'users' ? this.getAvatarUrl(this.id, 44) : null;
              },
              mentionText: function mentionText() {
                return this.id.indexOf(' ') === -1 ? "@".concat(this.id) : "@\"".concat(this.id, "\"");
              }
            },
            methods: {
              getAvatarUrl: function getAvatarUrl(user, size) {
                return (0, _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('/avatar/{user}/{size}', {
                  user: user,
                  size: size
                });
              }
            }
          };
          /***/
        },

        /***/
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcAvatar/NcAvatar.vue?vue&type=template&id=78eb9ce2&scoped=true&":
        /*!**************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcAvatar/NcAvatar.vue?vue&type=template&id=78eb9ce2&scoped=true& ***!
          \**************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibLoadersTemplateLoaderJsRuleSet1Rules2Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcAvatarNcAvatarVueVueTypeTemplateId78eb9ce2ScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_48869__) {
          "use strict";

          __nested_webpack_require_48869__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_48869__.d(__webpack_exports__, {
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

            return _c("div", _vm._g({
              directives: [{
                name: "tooltip",
                rawName: "v-tooltip",
                value: _vm.tooltip,
                expression: "tooltip"
              }, {
                name: "click-outside",
                rawName: "v-click-outside",
                value: _vm.closeMenu,
                expression: "closeMenu"
              }],
              ref: "main",
              staticClass: "avatardiv popovermenu-wrapper",
              class: {
                "avatardiv--unknown": _vm.userDoesNotExist,
                "avatardiv--with-menu": _vm.hasMenu
              },
              style: _vm.avatarStyle,
              attrs: {
                tabindex: _vm.hasMenu ? "0" : undefined,
                "aria-label": _vm.avatarAriaLabel,
                role: _vm.hasMenu ? "button" : undefined
              },
              on: {
                keydown: function keydown($event) {
                  if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
                  return _vm.toggleMenu.apply(null, arguments);
                }
              }
            }, _vm.hasMenu ? {
              click: _vm.toggleMenu
            } : {}), [_vm._t("icon", function () {
              return [_vm.iconClass ? _c("div", {
                staticClass: "avatar-class-icon",
                class: _vm.iconClass
              }) : _vm.isAvatarLoaded && !_vm.userDoesNotExist ? _c("img", {
                attrs: {
                  src: _vm.avatarUrlLoaded,
                  srcset: _vm.avatarSrcSetLoaded,
                  alt: ""
                }
              }) : _vm._e()];
            }), _vm._v(" "), _vm.hasMenu ? _c("NcPopover", {
              attrs: {
                placement: "auto",
                container: _vm.menuContainer,
                open: _vm.contactsMenuOpenState
              },
              on: {
                "after-show": _vm.handlePopoverAfterShow,
                "after-hide": _vm.handlePopoverAfterHide
              },
              scopedSlots: _vm._u([{
                key: "trigger",
                fn: function fn() {
                  return [_vm.contactsMenuLoading ? _c("NcLoadingIcon") : _c("DotsHorizontal", {
                    staticClass: "icon-more",
                    attrs: {
                      size: 20
                    }
                  })];
                },
                proxy: true
              }], null, false, 2037777893)
            }, [_c("NcPopoverMenu", {
              ref: "popoverMenu",
              attrs: {
                menu: _vm.menu
              }
            })], 1) : _vm._e(), _vm._v(" "), _vm.showUserStatusIconOnAvatar ? _c("div", {
              staticClass: "avatardiv__user-status avatardiv__user-status--icon"
            }, [_vm._v("\n\t\t" + _vm._s(_vm.userStatus.icon) + "\n\t")]) : _vm.canDisplayUserStatus ? _c("div", {
              staticClass: "avatardiv__user-status",
              class: "avatardiv__user-status--" + _vm.userStatus.status
            }) : _vm._e(), _vm._v(" "), _vm.userDoesNotExist && !(_vm.iconClass || _vm.$slots.icon) ? _c("div", {
              staticClass: "unknown"
            }, [_vm._v("\n\t\t" + _vm._s(_vm.initials) + "\n\t")]) : _vm._e()], 2);
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
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibLoadersTemplateLoaderJsRuleSet1Rules2Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcLoadingIconNcLoadingIconVueVueTypeTemplateIdFe92815eScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_54514__) {
          "use strict";

          __nested_webpack_require_54514__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_54514__.d(__webpack_exports__, {
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
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=template&id=40cc2471&":
        /*!****************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=template&id=40cc2471& ***!
          \****************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibLoadersTemplateLoaderJsRuleSet1Rules2Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcPopoverNcPopoverVueVueTypeTemplateId40cc2471(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_57559__) {
          "use strict";

          __nested_webpack_require_57559__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_57559__.d(__webpack_exports__, {
            /* harmony export */
            "render": function render() {
              return (
                /* binding */
                _render3
              );
            },

            /* harmony export */
            "staticRenderFns": function staticRenderFns() {
              return (
                /* binding */
                _staticRenderFns3
              );
            }
            /* harmony export */

          });

          var _render3 = function render() {
            var _vm = this,
                _c = _vm._self._c;

            return _c("Dropdown", _vm._g(_vm._b({
              ref: "popover",
              attrs: {
                distance: 10,
                "arrow-padding": 10,
                "popper-class": _vm.popoverBaseClass
              },
              scopedSlots: _vm._u([{
                key: "popper",
                fn: function fn() {
                  return [_vm._t("default")];
                },
                proxy: true
              }], null, true)
            }, "Dropdown", _vm.$attrs, false), _vm.$listeners), [_vm._t("trigger")], 2);
          };

          var _staticRenderFns3 = [];
          _render3._withStripped = true;
          /***/
        },

        /***/
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=template&id=bcce04a2&scoped=true&":
        /*!************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=template&id=bcce04a2&scoped=true& ***!
          \************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibLoadersTemplateLoaderJsRuleSet1Rules2Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcPopoverMenuNcPopoverMenuVueVueTypeTemplateIdBcce04a2ScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_60441__) {
          "use strict";

          __nested_webpack_require_60441__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_60441__.d(__webpack_exports__, {
            /* harmony export */
            "render": function render() {
              return (
                /* binding */
                _render4
              );
            },

            /* harmony export */
            "staticRenderFns": function staticRenderFns() {
              return (
                /* binding */
                _staticRenderFns4
              );
            }
            /* harmony export */

          });

          var _render4 = function render() {
            var _vm = this,
                _c = _vm._self._c;

            return _c("ul", {
              staticClass: "popover__menu"
            }, _vm._l(_vm.menu, function (item, key) {
              return _c("NcPopoverMenuItem", {
                key: key,
                attrs: {
                  item: item
                }
              });
            }), 1);
          };

          var _staticRenderFns4 = [];
          _render4._withStripped = true;
          /***/
        },

        /***/
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=template&id=7ca1b7e2&scoped=true&":
        /*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=template&id=7ca1b7e2&scoped=true& ***!
          \****************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibLoadersTemplateLoaderJsRuleSet1Rules2Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcPopoverMenuNcPopoverMenuItemVueVueTypeTemplateId7ca1b7e2ScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_63098__) {
          "use strict";

          __nested_webpack_require_63098__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_63098__.d(__webpack_exports__, {
            /* harmony export */
            "render": function render() {
              return (
                /* binding */
                _render5
              );
            },

            /* harmony export */
            "staticRenderFns": function staticRenderFns() {
              return (
                /* binding */
                _staticRenderFns5
              );
            }
            /* harmony export */

          });

          var _render5 = function render() {
            var _vm = this,
                _c = _vm._self._c;

            return _c("li", {
              staticClass: "popover__menuitem"
            }, [_vm.item.href ? _c("a", {
              staticClass: "focusable",
              attrs: {
                href: _vm.item.href ? _vm.item.href : "#",
                target: _vm.item.target ? _vm.item.target : "",
                download: _vm.item.download,
                rel: "nofollow noreferrer noopener"
              },
              on: {
                click: _vm.action
              }
            }, [!_vm.iconIsUrl ? _c("span", {
              class: _vm.item.icon
            }) : _c("img", {
              attrs: {
                src: _vm.item.icon
              }
            }), _vm._v(" "), _vm.item.text && _vm.item.longtext ? _c("p", [_c("strong", {
              staticClass: "menuitem-text"
            }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.item.text) + "\n\t\t\t")]), _c("br"), _vm._v(" "), _c("span", {
              staticClass: "menuitem-text-detail"
            }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.item.longtext) + "\n\t\t\t")])]) : _vm.item.text ? _c("span", [_vm._v("\n\t\t\t" + _vm._s(_vm.item.text) + "\n\t\t")]) : _vm.item.longtext ? _c("p", [_vm._v("\n\t\t\t" + _vm._s(_vm.item.longtext) + "\n\t\t")]) : _vm._e()]) : _vm.item.input ? _c("span", {
              staticClass: "menuitem",
              class: {
                active: _vm.item.active
              }
            }, [_vm.item.input !== "checkbox" ? _c("span", {
              class: _vm.item.icon
            }) : _vm._e(), _vm._v(" "), _vm.item.input === "text" ? _c("form", {
              class: _vm.item.input,
              on: {
                submit: function submit($event) {
                  $event.preventDefault();
                  return _vm.item.action.apply(null, arguments);
                }
              }
            }, [_c("input", {
              attrs: {
                type: _vm.item.input,
                placeholder: _vm.item.text,
                required: ""
              },
              domProps: {
                value: _vm.item.value
              }
            }), _vm._v(" "), _c("input", {
              staticClass: "icon-confirm",
              attrs: {
                type: "submit",
                value: ""
              }
            })]) : [_vm.item.input === "checkbox" ? _c("input", {
              directives: [{
                name: "model",
                rawName: "v-model",
                value: _vm.item.model,
                expression: "item.model"
              }],
              class: _vm.item.input,
              attrs: {
                id: _vm.key,
                type: "checkbox"
              },
              domProps: {
                checked: Array.isArray(_vm.item.model) ? _vm._i(_vm.item.model, null) > -1 : _vm.item.model
              },
              on: {
                change: [function ($event) {
                  var $$a = _vm.item.model,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false;

                  if (Array.isArray($$a)) {
                    var $$v = null,
                        $$i = _vm._i($$a, $$v);

                    if ($$el.checked) {
                      $$i < 0 && _vm.$set(_vm.item, "model", $$a.concat([$$v]));
                    } else {
                      $$i > -1 && _vm.$set(_vm.item, "model", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                    }
                  } else {
                    _vm.$set(_vm.item, "model", $$c);
                  }
                }, _vm.item.action]
              }
            }) : _vm.item.input === "radio" ? _c("input", {
              directives: [{
                name: "model",
                rawName: "v-model",
                value: _vm.item.model,
                expression: "item.model"
              }],
              class: _vm.item.input,
              attrs: {
                id: _vm.key,
                type: "radio"
              },
              domProps: {
                checked: _vm._q(_vm.item.model, null)
              },
              on: {
                change: [function ($event) {
                  return _vm.$set(_vm.item, "model", null);
                }, _vm.item.action]
              }
            }) : _c("input", {
              directives: [{
                name: "model",
                rawName: "v-model",
                value: _vm.item.model,
                expression: "item.model"
              }],
              class: _vm.item.input,
              attrs: {
                id: _vm.key,
                type: _vm.item.input
              },
              domProps: {
                value: _vm.item.model
              },
              on: {
                change: _vm.item.action,
                input: function input($event) {
                  if ($event.target.composing) return;

                  _vm.$set(_vm.item, "model", $event.target.value);
                }
              }
            }), _vm._v(" "), _c("label", {
              attrs: {
                for: _vm.key
              },
              on: {
                click: function click($event) {
                  $event.stopPropagation();
                  $event.preventDefault();
                  return _vm.item.action.apply(null, arguments);
                }
              }
            }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.item.text) + "\n\t\t\t")])]], 2) : _vm.item.action ? _c("button", {
              staticClass: "menuitem focusable",
              class: {
                active: _vm.item.active
              },
              attrs: {
                disabled: _vm.item.disabled,
                type: "button"
              },
              on: {
                click: function click($event) {
                  $event.stopPropagation();
                  $event.preventDefault();
                  return _vm.item.action.apply(null, arguments);
                }
              }
            }, [_c("span", {
              class: _vm.item.icon
            }), _vm._v(" "), _vm.item.text && _vm.item.longtext ? _c("p", [_c("strong", {
              staticClass: "menuitem-text"
            }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.item.text) + "\n\t\t\t")]), _c("br"), _vm._v(" "), _c("span", {
              staticClass: "menuitem-text-detail"
            }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.item.longtext) + "\n\t\t\t")])]) : _vm.item.text ? _c("span", [_vm._v("\n\t\t\t" + _vm._s(_vm.item.text) + "\n\t\t")]) : _vm.item.longtext ? _c("p", [_vm._v("\n\t\t\t" + _vm._s(_vm.item.longtext) + "\n\t\t")]) : _vm._e()]) : _c("span", {
              staticClass: "menuitem",
              class: {
                active: _vm.item.active
              }
            }, [_c("span", {
              class: _vm.item.icon
            }), _vm._v(" "), _vm.item.text && _vm.item.longtext ? _c("p", [_c("strong", {
              staticClass: "menuitem-text"
            }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.item.text) + "\n\t\t\t")]), _c("br"), _vm._v(" "), _c("span", {
              staticClass: "menuitem-text-detail"
            }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.item.longtext) + "\n\t\t\t")])]) : _vm.item.text ? _c("span", [_vm._v("\n\t\t\t" + _vm._s(_vm.item.text) + "\n\t\t")]) : _vm.item.longtext ? _c("p", [_vm._v("\n\t\t\t" + _vm._s(_vm.item.longtext) + "\n\t\t")]) : _vm._e()])]);
          };

          var _staticRenderFns5 = [];
          _render5._withStripped = true;
          /***/
        },

        /***/
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcRichContenteditable/NcMentionBubble.vue?vue&type=template&id=6a4da19e&scoped=true&":
        /*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcRichContenteditable/NcMentionBubble.vue?vue&type=template&id=6a4da19e&scoped=true& ***!
          \**********************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibLoadersTemplateLoaderJsRuleSet1Rules2Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcRichContenteditableNcMentionBubbleVueVueTypeTemplateId6a4da19eScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_72821__) {
          "use strict";

          __nested_webpack_require_72821__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_72821__.d(__webpack_exports__, {
            /* harmony export */
            "render": function render() {
              return (
                /* binding */
                _render6
              );
            },

            /* harmony export */
            "staticRenderFns": function staticRenderFns() {
              return (
                /* binding */
                _staticRenderFns6
              );
            }
            /* harmony export */

          });

          var _render6 = function render() {
            var _vm = this,
                _c = _vm._self._c;

            return _c("span", {
              staticClass: "mention-bubble",
              class: {
                "mention-bubble--primary": _vm.primary
              },
              attrs: {
                contenteditable: "false"
              }
            }, [_c("span", {
              staticClass: "mention-bubble__wrapper"
            }, [_c("span", {
              staticClass: "mention-bubble__content"
            }, [_c("span", {
              staticClass: "mention-bubble__icon",
              class: [_vm.icon, "mention-bubble__icon--".concat(_vm.avatarUrl ? "with-avatar" : "")],
              style: _vm.avatarUrl ? {
                backgroundImage: "url(".concat(_vm.avatarUrl, ")")
              } : null
            }), _vm._v(" "), _c("span", {
              staticClass: "mention-bubble__title",
              attrs: {
                role: "heading",
                title: _vm.label
              }
            })]), _vm._v(" "), _c("span", {
              staticClass: "mention-bubble__select",
              attrs: {
                role: "none"
              }
            }, [_vm._v(_vm._s(_vm.mentionText))])])]);
          };

          var _staticRenderFns6 = [];
          _render6._withStripped = true;
          /***/
        },

        /***/
        "./src/components/NcLoadingIcon/index.js":
        /*!***********************************************!*\
          !*** ./src/components/NcLoadingIcon/index.js ***!
          \***********************************************/

        /***/
        function srcComponentsNcLoadingIconIndexJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_75192__) {
          "use strict";

          __nested_webpack_require_75192__.r(__webpack_exports__);
          /* harmony import */


          var _NcLoadingIcon_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_75192__(
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
        "./src/components/NcPopover/index.js":
        /*!*******************************************!*\
          !*** ./src/components/NcPopover/index.js ***!
          \*******************************************/

        /***/
        function srcComponentsNcPopoverIndexJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_77098__) {
          "use strict";

          __nested_webpack_require_77098__.r(__webpack_exports__);
          /* harmony import */


          var _NcPopover_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_77098__(
          /*! ./NcPopover.vue */
          "./src/components/NcPopover/NcPopover.vue");
          /**
           * @copyright Copyright (c) 2019 Marco Ambrosini <marcoambrosini@icloud.com>
           *
           * @author Marco Ambrosini <marcoambrosini@icloud.com>
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

          /* harmony default export */


          __webpack_exports__["default"] = _NcPopover_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
          /***/
        },

        /***/
        "./src/components/NcPopoverMenu/index.js":
        /*!***********************************************!*\
          !*** ./src/components/NcPopoverMenu/index.js ***!
          \***********************************************/

        /***/
        function srcComponentsNcPopoverMenuIndexJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_78987__) {
          "use strict";

          __nested_webpack_require_78987__.r(__webpack_exports__);
          /* harmony import */


          var _NcPopoverMenu_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_78987__(
          /*! ./NcPopoverMenu.vue */
          "./src/components/NcPopoverMenu/NcPopoverMenu.vue");
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

          /* harmony default export */


          __webpack_exports__["default"] = _NcPopoverMenu_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
          /***/
        },

        /***/
        "./src/directives/Tooltip/index.js":
        /*!*****************************************!*\
          !*** ./src/directives/Tooltip/index.js ***!
          \*****************************************/

        /***/
        function srcDirectivesTooltipIndexJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_80858__) {
          "use strict";

          __nested_webpack_require_80858__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_80858__.d(__webpack_exports__, {
            /* harmony export */
            "options": function options() {
              return (
                /* reexport safe */
                floating_vue__WEBPACK_IMPORTED_MODULE_0__.options
              );
            }
            /* harmony export */

          });
          /* harmony import */


          var floating_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_80858__(
          /*! floating-vue */
          "floating-vue");
          /* harmony import */


          var floating_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_80858__.n(floating_vue__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_80858__(
          /*! ./index.scss */
          "./src/directives/Tooltip/index.scss");
          /**
           * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
           *
           * @author Julius Härtl <jus@bitgrid.net>
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


          floating_vue__WEBPACK_IMPORTED_MODULE_0__.options.themes.tooltip.html = false;
          floating_vue__WEBPACK_IMPORTED_MODULE_0__.options.themes.tooltip.delay = {
            show: 500,
            hide: 200
          };
          floating_vue__WEBPACK_IMPORTED_MODULE_0__.options.themes.tooltip.distance = 10;
          floating_vue__WEBPACK_IMPORTED_MODULE_0__.options.themes.tooltip["arrow-padding"] = 3;
          /* harmony default export */

          __webpack_exports__["default"] = floating_vue__WEBPACK_IMPORTED_MODULE_0__.VTooltip;
          /***/
        },

        /***/
        "./src/functions/usernameToColor/index.js":
        /*!************************************************!*\
          !*** ./src/functions/usernameToColor/index.js ***!
          \************************************************/

        /***/
        function srcFunctionsUsernameToColorIndexJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_83907__) {
          "use strict";

          __nested_webpack_require_83907__.r(__webpack_exports__);
          /* harmony import */


          var _usernameToColor_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_83907__(
          /*! ./usernameToColor.js */
          "./src/functions/usernameToColor/usernameToColor.js");
          /**
           * @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>
           *
           * @author Julius Härtl <jus@bitgrid.net>
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


          __webpack_exports__["default"] = _usernameToColor_js__WEBPACK_IMPORTED_MODULE_0__["default"];
          /***/
        },

        /***/
        "./src/functions/usernameToColor/usernameToColor.js":
        /*!**********************************************************!*\
          !*** ./src/functions/usernameToColor/usernameToColor.js ***!
          \**********************************************************/

        /***/
        function srcFunctionsUsernameToColorUsernameToColorJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_85851__) {
          "use strict";

          __nested_webpack_require_85851__.r(__webpack_exports__);
          /* harmony import */


          var _utils_GenColors_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_85851__(
          /*! ../../utils/GenColors.js */
          "./src/utils/GenColors.js");
          /* harmony import */


          var md5__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_85851__(
          /*! md5 */
          "md5");
          /* harmony import */


          var md5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_85851__.n(md5__WEBPACK_IMPORTED_MODULE_1__);
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
           * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
           * GNU Affero General Public License for more details.
           *
           * You should have received a copy of the GNU Affero General Public License
           * along with this program. If not, see <http://www.gnu.org/licenses/>.
           *
           */

          /**
           * Originally taken from https://github.com/nextcloud/server/blob/master/core/js/placeholder.js
           *
           * @param {string} username Display name or user id to generate from
           * @return {object} the rgb colors as {r:255, g:255, b:255}
           */


          var usernameToColor = function usernameToColor(username) {
            // Normalize hash
            var hash = username.toLowerCase(); // Already a md5 hash?

            if (hash.match(/^([0-9a-f]{4}-?){8}$/) === null) {
              hash = md5__WEBPACK_IMPORTED_MODULE_1___default()(hash);
            }

            hash = hash.replace(/[^0-9a-f]/g, '');
            var steps = 6;
            var finalPalette = (0, _utils_GenColors_js__WEBPACK_IMPORTED_MODULE_0__["default"])(steps);
            /**
             * Convert a string to an integer evenly
             *
             * @param {string} hash The hash to convert
             * @param {number} maximum Largest number allowed
             */

            function hashToInt(hash, maximum) {
              var finalInt = 0;
              var result = []; // Splitting evenly the string

              for (var i = 0; i < hash.length; i++) {
                // chars in md5 goes up to f, hex:16
                result.push(parseInt(hash.charAt(i), 16) % 16);
              } // Adds up all results


              for (var j in result) {
                finalInt += result[j];
              } // chars in md5 goes up to f, hex:16
              // make sure we're always using int in our operation


              return parseInt(parseInt(finalInt, 10) % maximum, 10);
            }

            return finalPalette[hashToInt(hash, steps * 3)];
          };
          /* harmony default export */


          __webpack_exports__["default"] = usernameToColor;
          /***/
        },

        /***/
        "./src/l10n.js":
        /*!*********************!*\
          !*** ./src/l10n.js ***!
          \*********************/

        /***/
        function srcL10nJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_89596__) {
          "use strict";

          __nested_webpack_require_89596__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_89596__.d(__webpack_exports__, {
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


          var _nextcloud_l10n_dist_gettext_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_89596__(
          /*! @nextcloud/l10n/dist/gettext.js */
          "@nextcloud/l10n/dist/gettext.js");
          /* harmony import */


          var _nextcloud_l10n_dist_gettext_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_89596__.n(_nextcloud_l10n_dist_gettext_js__WEBPACK_IMPORTED_MODULE_0__);

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
        "./src/mixins/excludeClickOutsideClasses/index.js":
        /*!********************************************************!*\
          !*** ./src/mixins/excludeClickOutsideClasses/index.js ***!
          \********************************************************/

        /***/
        function srcMixinsExcludeClickOutsideClassesIndexJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_189325__) {
          "use strict";

          __nested_webpack_require_189325__.r(__webpack_exports__);

          function _createForOfIteratorHelper(o, allowArrayLike) {
            var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

            if (!it) {
              if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                if (it) o = it;
                var i = 0;

                var F = function F() {};

                return {
                  s: F,
                  n: function n() {
                    if (i >= o.length) return {
                      done: true
                    };
                    return {
                      done: false,
                      value: o[i++]
                    };
                  },
                  e: function e(_e) {
                    throw _e;
                  },
                  f: F
                };
              }

              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }

            var normalCompletion = true,
                didErr = false,
                err;
            return {
              s: function s() {
                it = it.call(o);
              },
              n: function n() {
                var step = it.next();
                normalCompletion = step.done;
                return step;
              },
              e: function e(_e2) {
                didErr = true;
                err = _e2;
              },
              f: function f() {
                try {
                  if (!normalCompletion && it.return != null) it.return();
                } finally {
                  if (didErr) throw err;
                }
              }
            };
          }

          function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
          }

          function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;

            for (var i = 0, arr2 = new Array(len); i < len; i++) {
              arr2[i] = arr[i];
            }

            return arr2;
          }
          /**
           * @copyright Copyright (c) 2020 Georg Ehrke <georg-nextcloud@ehrke.email>
           *
           * @author Georg Ehrke <georg-nextcloud@ehrke.email>
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


          __webpack_exports__["default"] = {
            props: {
              /**
               * A class-name or an array of class-names
               * to be ignored when clicking outside
               * an element
               */
              excludeClickOutsideClasses: {
                type: String | Array,
                default: function _default() {
                  return [];
                }
              }
            },
            methods: {
              /**
               * Middleware Handler for V-Click-Outside
               *
               * @param {Event} event The click event
               * @return {boolean}
               */
              clickOutsideMiddleware: function clickOutsideMiddleware(event) {
                var excludedClassList = Array.isArray(this.excludeClickOutsideClasses) ? this.excludeClickOutsideClasses : [this.excludeClickOutsideClasses]; // No need to iterate through all parents
                // if class-list is empty

                if (excludedClassList.length === 0) {
                  return true;
                }

                return !this.hasNodeOrAnyParentClass(event.target, excludedClassList);
              },

              /**
               * Checks if given node or any of it's parents have a class of classArray
               *
               * @param {Element} node Node to test
               * @param {Array} classArray List of classes to check for
               * @return {boolean}
               */
              hasNodeOrAnyParentClass: function hasNodeOrAnyParentClass(node, classArray) {
                var _iterator = _createForOfIteratorHelper(classArray),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var _node$classList;

                    var className = _step.value;

                    if (node !== null && node !== void 0 && (_node$classList = node.classList) !== null && _node$classList !== void 0 && _node$classList.contains(className)) {
                      return true;
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                return !!node.parentElement && this.hasNodeOrAnyParentClass(node.parentElement, classArray);
              }
            }
          };
          /***/
        },

        /***/
        "./src/mixins/index.js":
        /*!*****************************!*\
          !*** ./src/mixins/index.js ***!
          \*****************************/

        /***/
        function srcMixinsIndexJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_195847__) {
          "use strict";

          __nested_webpack_require_195847__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_195847__.d(__webpack_exports__, {
            /* harmony export */
            "excludeClickOutsideClasses": function excludeClickOutsideClasses() {
              return (
                /* reexport safe */
                _excludeClickOutsideClasses_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]
              );
            },

            /* harmony export */
            "isFullscreen": function isFullscreen() {
              return (
                /* reexport safe */
                _isFullscreen_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]
              );
            },

            /* harmony export */
            "isMobile": function isMobile() {
              return (
                /* reexport safe */
                _isMobile_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]
              );
            },

            /* harmony export */
            "richEditor": function richEditor() {
              return (
                /* reexport safe */
                _richEditor_index_js__WEBPACK_IMPORTED_MODULE_3__["default"]
              );
            },

            /* harmony export */
            "userStatus": function userStatus() {
              return (
                /* reexport safe */
                _userStatus_js__WEBPACK_IMPORTED_MODULE_4__["default"]
              );
            }
            /* harmony export */

          });
          /* harmony import */


          var _excludeClickOutsideClasses_index_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_195847__(
          /*! ./excludeClickOutsideClasses/index.js */
          "./src/mixins/excludeClickOutsideClasses/index.js");
          /* harmony import */


          var _isFullscreen_index_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_195847__(
          /*! ./isFullscreen/index.js */
          "./src/mixins/isFullscreen/index.js");
          /* harmony import */


          var _isMobile_index_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_195847__(
          /*! ./isMobile/index.js */
          "./src/mixins/isMobile/index.js");
          /* harmony import */


          var _richEditor_index_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_195847__(
          /*! ./richEditor/index.js */
          "./src/mixins/richEditor/index.js");
          /* harmony import */


          var _userStatus_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_195847__(
          /*! ./userStatus.js */
          "./src/mixins/userStatus.js");
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

          /***/

        },

        /***/
        "./src/mixins/isFullscreen/index.js":
        /*!******************************************!*\
          !*** ./src/mixins/isFullscreen/index.js ***!
          \******************************************/

        /***/
        function srcMixinsIsFullscreenIndexJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_199858__) {
          "use strict";

          __nested_webpack_require_199858__.r(__webpack_exports__);
          /**
           * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
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

          /* harmony default export */


          __webpack_exports__["default"] = {
            data: function data() {
              return {
                isFullscreen: this._isFullscreen()
              };
            },
            beforeMount: function beforeMount() {
              window.addEventListener('resize', this._onResize);
            },
            beforeDestroy: function beforeDestroy() {
              window.removeEventListener('resize', this._onResize);
            },
            methods: {
              _onResize: function _onResize() {
                // Update fullscreen mode
                this.isFullscreen = this._isFullscreen();
              },
              _isFullscreen: function _isFullscreen() {
                // if the window height is equal to the screen height,
                // we're in full screen mode
                return window.outerHeight === screen.height;
              }
            }
          };
          /***/
        },

        /***/
        "./src/mixins/isMobile/index.js":
        /*!**************************************!*\
          !*** ./src/mixins/isMobile/index.js ***!
          \**************************************/

        /***/
        function srcMixinsIsMobileIndexJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_202311__) {
          "use strict";

          __nested_webpack_require_202311__.r(__webpack_exports__);
          /* harmony import */


          var _utils_IsMobileState_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_202311__(
          /*! ../../utils/IsMobileState.js */
          "./src/utils/IsMobileState.js");
          /**
           * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
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

          /* harmony default export */


          __webpack_exports__["default"] = {
            data: function data() {
              return {
                isMobile: false
              };
            },
            mounted: function mounted() {
              _utils_IsMobileState_js__WEBPACK_IMPORTED_MODULE_0__.IsMobileState.$on('changed', this.onIsMobileChanged);

              this.isMobile = _utils_IsMobileState_js__WEBPACK_IMPORTED_MODULE_0__.IsMobileState.isMobile;
            },
            beforeDestroy: function beforeDestroy() {
              _utils_IsMobileState_js__WEBPACK_IMPORTED_MODULE_0__.IsMobileState.$off('changed', this.onIsMobileChanged);
            },
            methods: {
              onIsMobileChanged: function onIsMobileChanged(val) {
                this.isMobile = val;
              }
            }
          };
          /***/
        },

        /***/
        "./src/mixins/richEditor/index.js":
        /*!****************************************!*\
          !*** ./src/mixins/richEditor/index.js ***!
          \****************************************/

        /***/
        function srcMixinsRichEditorIndexJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_204883__) {
          "use strict";

          __nested_webpack_require_204883__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_204883__.d(__webpack_exports__, {
            /* harmony export */
            "USERID_REGEX": function USERID_REGEX() {
              return (
                /* binding */
                _USERID_REGEX
              );
            },

            /* harmony export */
            "USERID_REGEX_WITH_SPACE": function USERID_REGEX_WITH_SPACE() {
              return (
                /* binding */
                _USERID_REGEX_WITH_SPACE
              );
            }
            /* harmony export */

          });
          /* harmony import */


          var _components_NcRichContenteditable_NcMentionBubble_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_204883__(
          /*! ../../components/NcRichContenteditable/NcMentionBubble.vue */
          "./src/components/NcRichContenteditable/NcMentionBubble.vue");
          /* harmony import */


          var _utils_Linkify_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_204883__(
          /*! ../../utils/Linkify.js */
          "./src/utils/Linkify.js");
          /* harmony import */


          var escape_html__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_204883__(
          /*! escape-html */
          "escape-html");
          /* harmony import */


          var escape_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_204883__.n(escape_html__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var striptags__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_204883__(
          /*! striptags */
          "striptags");
          /* harmony import */


          var striptags__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_204883__.n(striptags__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var vue__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_204883__(
          /*! vue */
          "vue");
          /* harmony import */


          var vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_204883__.n(vue__WEBPACK_IMPORTED_MODULE_4__);
          /**
           * @copyright Copyright (c) 2020 John Molakvoæ <skjnldsv@protonmail.com>
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
          // Beginning or whitespace. Non-capturing group


          var MENTION_START = '(?:^|\\s)'; // Anything that is not text or end-of-line. Non-capturing group

          var MENTION_END = '(?:[^a-z]|$)';

          var _USERID_REGEX = new RegExp("".concat(MENTION_START, "(@[a-zA-Z0-9_.@\\-']+)(").concat(MENTION_END, ")"), 'gi');

          var _USERID_REGEX_WITH_SPACE = new RegExp("".concat(MENTION_START, "(@&quot;[a-zA-Z0-9 _.@\\-']+&quot;)(").concat(MENTION_END, ")"), 'gi');
          /* harmony default export */


          __webpack_exports__["default"] = {
            props: {
              userData: {
                type: Object,
                default: function _default() {
                  return {};
                }
              }
            },
            methods: {
              /**
               * Convert the value string to html for the inner content
               *
               * @param {string} value the content without html
               * @return {string} rendered html
               */
              renderContent: function renderContent(value) {
                var _this = this; // Sanitize the value prop


                var sanitizedValue = escape_html__WEBPACK_IMPORTED_MODULE_2___default()(value); // Extract all the userIds

                var splitValue = sanitizedValue.split(_USERID_REGEX).map(function (part) {
                  return part.split(_USERID_REGEX_WITH_SPACE);
                }).flat(); // Replace userIds by html

                return splitValue.map(function (part) {
                  // When splitting, the string is always putting the userIds
                  // on the the uneven indexes. We only want to generate the mentions html
                  if (!part.startsWith('@')) {
                    // This part doesn't contain a mention, let's make sure links are parsed
                    return (0, _utils_Linkify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(part);
                  } // Extracting the id, nuking the " and @


                  var id = part.replace(/@|&quot;/gi, ''); // Compiling template and prepend with the space we removed during the split

                  return ' ' + _this.genSelectTemplate(id);
                }).join('').replace(/\n/gmi, '<br>').replace(/&amp;/gmi, '&');
              },

              /**
               * Convert the innerHtml content to a string with mentions as text
               *
               * @param {string} content the content without html
               * @return {string}
               */
              parseContent: function parseContent(content) {
                var text = content.replace(/<br>/gmi, '\n');
                text = text.replace(/&nbsp;/gmi, ' ');
                text = text.replace(/&amp;/gmi, '&'); // Convert the mentions to text only
                // first we replace divs with new lines

                text = text.replace(/<\/div>/gmi, '\n'); // then we remove all leftover html

                text = striptags__WEBPACK_IMPORTED_MODULE_3___default()(text, '<div>');
                text = striptags__WEBPACK_IMPORTED_MODULE_3___default()(text);
                return text;
              },

              /**
               * Generate an autocompletion popup entry template
               *
               * @param {string} value the value to match against the userData
               * @return {string}
               */
              genSelectTemplate: function genSelectTemplate(value) {
                var data = this.userData[value]; // Fallback to @mention in case no data matches

                if (!data) {
                  // return `@${value}`
                  return value.indexOf(' ') === -1 ? "@".concat(value) : "@\"".concat(value, "\"");
                } // Return template and make sure we strip of new lines and tabs


                return this.renderComponentHtml(data, _components_NcRichContenteditable_NcMentionBubble_vue__WEBPACK_IMPORTED_MODULE_0__["default"]).replace(/[\n\t]/gmi, '');
              },

              /**
               * Render a component and return its html content
               *
               * @param {object} propsData the props to pass to the component
               * @param {object} component the component to render
               * @return {string} the rendered html
               */
              renderComponentHtml: function renderComponentHtml(propsData, component) {
                var View = vue__WEBPACK_IMPORTED_MODULE_4___default().extend(component);
                var Item = new View({
                  propsData: propsData
                }); // Prepare mountpoint

                var wrapper = document.createElement('div');
                var mount = document.createElement('div');
                wrapper.style.display = 'none';
                wrapper.appendChild(mount);
                document.body.appendChild(wrapper); // Mount and get raw html

                Item.$mount(mount);
                var renderedHtml = wrapper.innerHTML; // Destroy

                Item.$destroy();
                wrapper.remove();
                return renderedHtml;
              }
            }
          };
          /***/
        },

        /***/
        "./src/mixins/userStatus.js":
        /*!**********************************!*\
          !*** ./src/mixins/userStatus.js ***!
          \**********************************/

        /***/
        function srcMixinsUserStatusJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_213579__) {
          "use strict";

          __nested_webpack_require_213579__.r(__webpack_exports__);
          /* harmony import */


          var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_213579__(
          /*! @nextcloud/auth */
          "@nextcloud/auth");
          /* harmony import */


          var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_213579__.n(_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_213579__(
          /*! @nextcloud/axios */
          "@nextcloud/axios");
          /* harmony import */


          var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_213579__.n(_nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _nextcloud_capabilities__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_213579__(
          /*! @nextcloud/capabilities */
          "@nextcloud/capabilities");
          /* harmony import */


          var _nextcloud_capabilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_213579__.n(_nextcloud_capabilities__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _nextcloud_router__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_213579__(
          /*! @nextcloud/router */
          "@nextcloud/router");
          /* harmony import */


          var _nextcloud_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_213579__.n(_nextcloud_router__WEBPACK_IMPORTED_MODULE_3__);

          function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
            try {
              var info = gen[key](arg);
              var value = info.value;
            } catch (error) {
              reject(error);
              return;
            }

            if (info.done) {
              resolve(value);
            } else {
              Promise.resolve(value).then(_next, _throw);
            }
          }

          function _asyncToGenerator(fn) {
            return function () {
              var self = this,
                  args = arguments;
              return new Promise(function (resolve, reject) {
                var gen = fn.apply(self, args);

                function _next(value) {
                  asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                }

                function _throw(err) {
                  asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                }

                _next(undefined);
              });
            };
          }
          /**
           * @copyright Copyright (c) 2020 Georg Ehrke <georg-nextcloud@ehrke.email>
           *
           * @author Georg Ehrke <georg-nextcloud@ehrke.email>
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


          __webpack_exports__["default"] = {
            data: function data() {
              return {
                hasStatus: false,
                userStatus: {
                  status: null,
                  message: null,
                  icon: null
                }
              };
            },
            methods: {
              /**
               * Fetches the user-status from the server
               *
               * @param {string} userId UserId of the user to fetch the status for
               *
               * @return {Promise<void>}
               */
              fetchUserStatus: function fetchUserStatus(userId) {
                var _this = this;

                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var capabilities, _yield$axios$get, data, _data$ocs$data, status, message, icon, _e$response$data$ocs, _e$response$data$ocs$;

                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (userId) {
                            _context.next = 2;
                            break;
                          }

                          return _context.abrupt("return");

                        case 2:
                          capabilities = (0, _nextcloud_capabilities__WEBPACK_IMPORTED_MODULE_2__.getCapabilities)();

                          if (!(!Object.prototype.hasOwnProperty.call(capabilities, 'user_status') || !capabilities.user_status.enabled)) {
                            _context.next = 5;
                            break;
                          }

                          return _context.abrupt("return");

                        case 5:
                          if ((0, _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)()) {
                            _context.next = 7;
                            break;
                          }

                          return _context.abrupt("return");

                        case 7:
                          _context.prev = 7;
                          _context.next = 10;
                          return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1___default().get((0, _nextcloud_router__WEBPACK_IMPORTED_MODULE_3__.generateOcsUrl)('apps/user_status/api/v1/statuses/{userId}', {
                            userId: userId
                          }));

                        case 10:
                          _yield$axios$get = _context.sent;
                          data = _yield$axios$get.data;
                          _data$ocs$data = data.ocs.data, status = _data$ocs$data.status, message = _data$ocs$data.message, icon = _data$ocs$data.icon;
                          _this.userStatus.status = status;
                          _this.userStatus.message = message || '';
                          _this.userStatus.icon = icon || '';
                          _this.hasStatus = true;
                          _context.next = 24;
                          break;

                        case 19:
                          _context.prev = 19;
                          _context.t0 = _context["catch"](7);

                          if (!(_context.t0.response.status === 404 && ((_e$response$data$ocs = _context.t0.response.data.ocs) === null || _e$response$data$ocs === void 0 ? void 0 : (_e$response$data$ocs$ = _e$response$data$ocs.data) === null || _e$response$data$ocs$ === void 0 ? void 0 : _e$response$data$ocs$.length) === 0)) {
                            _context.next = 23;
                            break;
                          }

                          return _context.abrupt("return");

                        case 23:
                          console.error(_context.t0);

                        case 24:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[7, 19]]);
                }))();
              }
            }
          };
          /***/
        },

        /***/
        "./src/utils/GenColors.js":
        /*!********************************!*\
          !*** ./src/utils/GenColors.js ***!
          \********************************/

        /***/
        function srcUtilsGenColorsJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_221822__) {
          "use strict";

          __nested_webpack_require_221822__.r(__webpack_exports__);
          /**
           * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
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
           * but WITHOUT ANY WARRANTY without even the implied warranty of
           * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
           * GNU Affero General Public License for more details.
           *
           * You should have received a copy of the GNU Affero General Public License
           * along with this program. If not, see <http://www.gnu.org/licenses/>.
           *
           */

          /**
           * Originally taken from https://github.com/nextcloud/server/blob/master/core/js/placeholder.js
           */

          /**
           * @param {number} r The red value
           * @param {number} g The green value
           * @param {number} b The blue value
           */


          function Color(r, g, b) {
            this.r = r;
            this.g = g;
            this.b = b;
          }
          /**
           * Calculate the number of steps
           *
           * @param {number} steps The number of steps
           * @param {Array} ends The ends
           * @return {Array} Array containing the number of steps per color
           */


          function stepCalc(steps, ends) {
            var step = new Array(3);
            step[0] = (ends[1].r - ends[0].r) / steps;
            step[1] = (ends[1].g - ends[0].g) / steps;
            step[2] = (ends[1].b - ends[0].b) / steps;
            return step;
          }
          /**
           * Create a color palette from two colors
           *
           * @param {number} steps The number of steps the palette has
           * @param {string} color1 The first color
           * @param {string} color2 The second color
           * @return {Array} The created palette array
           */


          function mixPalette(steps, color1, color2) {
            var palette = [];
            palette.push(color1);
            var step = stepCalc(steps, [color1, color2]);

            for (var i = 1; i < steps; i++) {
              var r = parseInt(color1.r + step[0] * i, 10);
              var g = parseInt(color1.g + step[1] * i, 10);
              var b = parseInt(color1.b + step[2] * i, 10);
              palette.push(new Color(r, g, b));
            }

            return palette;
          }
          /**
           * Generate colors from the official nextcloud color
           * You can provide how many colors you want (multiplied by 3)
           * if step = 6
           * 3 colors * 6 will result in 18 generated colors
           *
           * @param {number} [steps=6] Number of steps to go from a color to another
           * @return {object[]}
           */


          function GenColors(steps) {
            if (!steps) {
              steps = 6;
            }

            var red = new Color(182, 70, 157);
            var yellow = new Color(221, 203, 85);
            var blue = new Color(0, 130, 201); // Nextcloud blue

            var palette1 = mixPalette(steps, red, yellow);
            var palette2 = mixPalette(steps, yellow, blue);
            var palette3 = mixPalette(steps, blue, red);
            return palette1.concat(palette2).concat(palette3);
          }
          /* harmony default export */


          __webpack_exports__["default"] = GenColors;
          /***/
        },

        /***/
        "./src/utils/IsMobileState.js":
        /*!************************************!*\
          !*** ./src/utils/IsMobileState.js ***!
          \************************************/

        /***/
        function srcUtilsIsMobileStateJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_226098__) {
          "use strict";

          __nested_webpack_require_226098__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_226098__.d(__webpack_exports__, {
            /* harmony export */
            "IsMobileState": function IsMobileState() {
              return (
                /* binding */
                _IsMobileState
              );
            }
            /* harmony export */

          });
          /* harmony import */


          var vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_226098__(
          /*! vue */
          "vue");
          /* harmony import */


          var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_226098__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
          /**
           * @copyright Copyright (c) 2019 Kristof Hamann, Paul Schwörer
           *
           * @author Kristof Hamann
           * @author Paul Schwörer
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


          var _IsMobileState = new (vue__WEBPACK_IMPORTED_MODULE_0___default())({
            data: function data() {
              return {
                isMobile: false
              };
            },
            watch: {
              isMobile: function isMobile(val) {
                this.$emit('changed', val);
              }
            },
            created: function created() {
              window.addEventListener('resize', this.handleWindowResize);
              this.handleWindowResize();
            },
            beforeDestroy: function beforeDestroy() {
              window.removeEventListener('resize', this.handleWindowResize);
            },
            methods: {
              handleWindowResize: function handleWindowResize() {
                this.isMobile = document.documentElement.clientWidth < 1024;
              }
            }
          });
          /***/

        },

        /***/
        "./src/utils/Linkify.js":
        /*!******************************!*\
          !*** ./src/utils/Linkify.js ***!
          \******************************/

        /***/
        function srcUtilsLinkifyJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_229075__) {
          "use strict";

          __nested_webpack_require_229075__.r(__webpack_exports__);
          /* harmony import */


          var linkify_string__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_229075__(
          /*! linkify-string */
          "linkify-string");
          /* harmony import */


          var linkify_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_229075__.n(linkify_string__WEBPACK_IMPORTED_MODULE_0__);
          /**
           * @copyright Copyright (c) 2021 Raimund Schlüßler <raimund.schluessler@mailbox.org>
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
           * but WITHOUT ANY WARRANTY without even the implied warranty of
           * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
           * GNU Affero General Public License for more details.
           *
           * You should have received a copy of the GNU Affero General Public License
           * along with this program. If not, see <http://www.gnu.org/licenses/>.
           *
           */

          /**
           * Linkify text
           *
           * @param {string} text The text to linkify
           * @return {string} The linkified string
           */


          var Linkify = function Linkify(text) {
            return linkify_string__WEBPACK_IMPORTED_MODULE_0___default()(text, {
              defaultProtocol: 'https',
              target: '_blank',
              className: 'external linkified',
              attributes: {
                rel: 'nofollow noopener noreferrer'
              }
            });
          };
          /* harmony default export */


          __webpack_exports__["default"] = Linkify;
          /***/
        },

        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./src/directives/Tooltip/index.scss":
        /*!*******************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./src/directives/Tooltip/index.scss ***!
          \*******************************************************************************************************************************************************************************************/

        /***/
        function node_modulesCssLoaderDistCjsJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3SrcDirectivesTooltipIndexScss(module, __webpack_exports__, __nested_webpack_require_232288__) {
          "use strict";

          __nested_webpack_require_232288__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_232288__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_232288__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_232288__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_232288__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__); // Imports


          var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()); // Module


          ___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n\n/**\n* @copyright Copyright (c) 2016, John Molakvoæ <skjnldsv@protonmail.com>\n* @copyright Copyright (c) 2016, Robin Appelman <robin@icewind.nl>\n* @copyright Copyright (c) 2016, Jan-Christoph Borchardt <hey@jancborchardt.net>\n* @copyright Copyright (c) 2016, Erik Pellikka <erik@pellikka.org>\n* @copyright Copyright (c) 2015, Vincent Petry <pvince81@owncloud.com>\n*\n* Bootstrap v3.3.5 (http://getbootstrap.com)\n* Copyright 2011-2015 Twitter, Inc.\n* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n*/\n.v-popper--theme-tooltip.v-popper__popper {\n  position: absolute;\n  z-index: 100000;\n  top: 0;\n  right: auto;\n  left: auto;\n  display: block;\n  margin: 0;\n  padding: 0;\n  text-align: left;\n  text-align: start;\n  opacity: 0;\n  line-height: 1.6;\n  line-break: auto;\n  filter: drop-shadow(0 1px 10px var(--color-box-shadow));\n}\n.v-popper--theme-tooltip.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-container {\n  bottom: -10px;\n  border-bottom-width: 0;\n  border-top-color: var(--color-main-background);\n}\n.v-popper--theme-tooltip.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-container {\n  top: -10px;\n  border-top-width: 0;\n  border-bottom-color: var(--color-main-background);\n}\n.v-popper--theme-tooltip.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-container {\n  right: 100%;\n  border-left-width: 0;\n  border-right-color: var(--color-main-background);\n}\n.v-popper--theme-tooltip.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-container {\n  left: 100%;\n  border-right-width: 0;\n  border-left-color: var(--color-main-background);\n}\n.v-popper--theme-tooltip.v-popper__popper[aria-hidden=true] {\n  visibility: hidden;\n  transition: opacity 0.15s, visibility 0.15s;\n  opacity: 0;\n}\n.v-popper--theme-tooltip.v-popper__popper[aria-hidden=false] {\n  visibility: visible;\n  transition: opacity 0.15s;\n  opacity: 1;\n}\n.v-popper--theme-tooltip .v-popper__inner {\n  max-width: 350px;\n  padding: 5px 8px;\n  text-align: center;\n  color: var(--color-main-text);\n  border-radius: var(--border-radius);\n  background-color: var(--color-main-background);\n}\n.v-popper--theme-tooltip .v-popper__arrow-container {\n  position: absolute;\n  z-index: 1;\n  width: 0;\n  height: 0;\n  margin: 0;\n  border-style: solid;\n  border-color: transparent;\n  border-width: 10px;\n}", ""]); // Exports

          /* harmony default export */


          __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
          /***/
        },

        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcAvatar/NcAvatar.vue?vue&type=style&index=0&id=78eb9ce2&scoped=true&lang=scss&":
        /*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcAvatar/NcAvatar.vue?vue&type=style&index=0&id=78eb9ce2&scoped=true&lang=scss& ***!
          \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcAvatarNcAvatarVueVueTypeStyleIndex0Id78eb9ce2ScopedTrueLangScss(module, __webpack_exports__, __nested_webpack_require_239308__) {
          "use strict";

          __nested_webpack_require_239308__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_239308__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_239308__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_239308__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_239308__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_239308__(
          /*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */
          "./node_modules/css-loader/dist/runtime/getUrl.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_239308__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__); // Imports


          var ___CSS_LOADER_URL_IMPORT_0___ = new URL(
          /* asset import */
          __nested_webpack_require_239308__(
          /*! ../../assets/status-icons/user-status-online.svg */
          "./src/assets/status-icons/user-status-online.svg"), __nested_webpack_require_239308__.b);

          var ___CSS_LOADER_URL_IMPORT_1___ = new URL(
          /* asset import */
          __nested_webpack_require_239308__(
          /*! ../../assets/status-icons/user-status-dnd.svg */
          "./src/assets/status-icons/user-status-dnd.svg"), __nested_webpack_require_239308__.b);

          var ___CSS_LOADER_URL_IMPORT_2___ = new URL(
          /* asset import */
          __nested_webpack_require_239308__(
          /*! ../../assets/status-icons/user-status-away.svg */
          "./src/assets/status-icons/user-status-away.svg"), __nested_webpack_require_239308__.b);

          var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());

          var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);

          var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);

          var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___); // Module


          ___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-78eb9ce2] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.avatardiv[data-v-78eb9ce2] {\n  position: relative;\n  display: inline-block;\n  width: var(--size);\n  height: var(--size);\n}\n.avatardiv--unknown[data-v-78eb9ce2] {\n  position: relative;\n  background-color: var(--color-text-maxcontrast);\n}\n.avatardiv[data-v-78eb9ce2]:not(.avatardiv--unknown) {\n  background-color: #fff !important;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05) inset;\n}\nbody.theme--dark .avatardiv[data-v-78eb9ce2]:not(.avatardiv--unknown) {\n  background-color: #000 !important;\n}\n.avatardiv--with-menu[data-v-78eb9ce2] {\n  cursor: pointer;\n}\n.avatardiv--with-menu[data-v-78eb9ce2] .v-popper {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.avatardiv--with-menu .icon-more[data-v-78eb9ce2] {\n  cursor: pointer;\n  opacity: 0;\n}\n.avatardiv--with-menu:focus .icon-more[data-v-78eb9ce2], .avatardiv--with-menu:hover .icon-more[data-v-78eb9ce2] {\n  opacity: 1;\n}\n.avatardiv--with-menu:focus img[data-v-78eb9ce2], .avatardiv--with-menu:hover img[data-v-78eb9ce2] {\n  opacity: 0.3;\n}\n.avatardiv--with-menu .icon-more[data-v-78eb9ce2],\n.avatardiv--with-menu img[data-v-78eb9ce2] {\n  transition: opacity var(--animation-quick);\n}\n.avatardiv > .unknown[data-v-78eb9ce2] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  text-align: center;\n  font-weight: normal;\n  color: var(--color-main-background);\n}\n.avatardiv img[data-v-78eb9ce2] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatardiv .material-design-icon[data-v-78eb9ce2] {\n  width: var(--size);\n  height: var(--size);\n}\n.avatardiv .avatardiv__user-status[data-v-78eb9ce2] {\n  position: absolute;\n  right: -4px;\n  bottom: -4px;\n  max-height: 18px;\n  max-width: 18px;\n  height: 40%;\n  width: 40%;\n  line-height: 15px;\n  font-size: var(--default-font-size);\n  border: 2px solid var(--color-main-background);\n  background-color: var(--color-main-background);\n  background-repeat: no-repeat;\n  background-size: 16px;\n  background-position: center;\n  border-radius: 50%;\n}\n.acli:hover .avatardiv .avatardiv__user-status[data-v-78eb9ce2] {\n  border-color: var(--color-background-hover);\n  background-color: var(--color-background-hover);\n}\n.acli.active .avatardiv .avatardiv__user-status[data-v-78eb9ce2] {\n  border-color: var(--color-primary-light);\n  background-color: var(--color-primary-light);\n}\n.avatardiv .avatardiv__user-status--online[data-v-78eb9ce2] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n.avatardiv .avatardiv__user-status--dnd[data-v-78eb9ce2] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-color: #ffffff;\n}\n.avatardiv .avatardiv__user-status--away[data-v-78eb9ce2] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n.avatardiv .avatardiv__user-status--icon[data-v-78eb9ce2] {\n  border: none;\n  background-color: transparent;\n}\n.avatardiv .popovermenu-wrapper[data-v-78eb9ce2] {\n  position: relative;\n  display: inline-block;\n}\n.avatar-class-icon[data-v-78eb9ce2] {\n  border-radius: 50%;\n  background-color: var(--color-background-darker);\n  height: 100%;\n}", ""]); // Exports

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
        function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcLoadingIconNcLoadingIconVueVueTypeStyleIndex0IdFe92815eLangScssScopedTrue(module, __webpack_exports__, __nested_webpack_require_248987__) {
          "use strict";

          __nested_webpack_require_248987__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_248987__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_248987__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_248987__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_248987__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__); // Imports


          var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()); // Module


          ___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-fe92815e] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.loading-icon svg[data-v-fe92815e] {\n  animation: rotate var(--animation-duration, 0.8s) linear infinite;\n}", ""]); // Exports

          /* harmony default export */


          __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
          /***/
        },

        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss&":
        /*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss& ***!
          \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcPopoverNcPopoverVueVueTypeStyleIndex0Id40cc2471LangScss(module, __webpack_exports__, __nested_webpack_require_253673__) {
          "use strict";

          __nested_webpack_require_253673__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_253673__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_253673__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_253673__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_253673__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__); // Imports


          var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()); // Module


          ___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.resize-observer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  pointer-events: none;\n  display: block;\n  overflow: hidden;\n  opacity: 0;\n}\n.resize-observer object {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: -1;\n}\n.v-popper--theme-dropdown.v-popper__popper {\n  z-index: 100000;\n  top: 0;\n  left: 0;\n  display: block !important;\n  filter: drop-shadow(0 1px 10px var(--color-box-shadow));\n}\n.v-popper--theme-dropdown.v-popper__popper .v-popper__inner {\n  padding: 0;\n  color: var(--color-main-text);\n  border-radius: var(--border-radius);\n  overflow: hidden;\n  background: var(--color-main-background);\n}\n.v-popper--theme-dropdown.v-popper__popper .v-popper__arrow-container {\n  position: absolute;\n  z-index: 1;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-color: transparent;\n  border-width: 10px;\n}\n.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-container {\n  bottom: -10px;\n  border-bottom-width: 0;\n  border-top-color: var(--color-main-background);\n}\n.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-container {\n  top: -10px;\n  border-top-width: 0;\n  border-bottom-color: var(--color-main-background);\n}\n.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-container {\n  left: -10px;\n  border-left-width: 0;\n  border-right-color: var(--color-main-background);\n}\n.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-container {\n  right: -10px;\n  border-right-width: 0;\n  border-left-color: var(--color-main-background);\n}\n.v-popper--theme-dropdown.v-popper__popper[aria-hidden=true] {\n  visibility: hidden;\n  transition: opacity var(--animation-quick), visibility var(--animation-quick);\n  opacity: 0;\n}\n.v-popper--theme-dropdown.v-popper__popper[aria-hidden=false] {\n  visibility: visible;\n  transition: opacity var(--animation-quick);\n  opacity: 1;\n}", ""]); // Exports

          /* harmony default export */


          __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
          /***/
        },

        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=style&index=0&id=bcce04a2&lang=scss&scoped=true&":
        /*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=style&index=0&id=bcce04a2&lang=scss&scoped=true& ***!
          \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcPopoverMenuNcPopoverMenuVueVueTypeStyleIndex0IdBcce04a2LangScssScopedTrue(module, __webpack_exports__, __nested_webpack_require_260530__) {
          "use strict";

          __nested_webpack_require_260530__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_260530__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_260530__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_260530__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_260530__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__); // Imports


          var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()); // Module


          ___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-bcce04a2] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\nul[data-v-bcce04a2] {\n  display: flex;\n  flex-direction: column;\n}", ""]); // Exports

          /* harmony default export */


          __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
          /***/
        },

        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=style&index=1&id=7ca1b7e2&lang=scss&scoped=true&":
        /*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=style&index=1&id=7ca1b7e2&lang=scss&scoped=true& ***!
          \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcPopoverMenuNcPopoverMenuItemVueVueTypeStyleIndex1Id7ca1b7e2LangScssScopedTrue(module, __webpack_exports__, __nested_webpack_require_265294__) {
          "use strict";

          __nested_webpack_require_265294__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_265294__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_265294__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_265294__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_265294__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__); // Imports


          var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()); // Module


          ___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-7ca1b7e2] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\nli[data-v-7ca1b7e2] {\n  display: flex;\n  flex: 0 0 auto;\n  /* css hack, only first not hidden */\n}\nli.hidden[data-v-7ca1b7e2] {\n  display: none;\n}\nli > button[data-v-7ca1b7e2],\nli > a[data-v-7ca1b7e2],\nli > .menuitem[data-v-7ca1b7e2] {\n  cursor: pointer;\n  line-height: 44px;\n  border: 0;\n  border-radius: 0;\n  background-color: transparent;\n  display: flex;\n  align-items: flex-start;\n  height: auto;\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n  box-shadow: none;\n  width: 100%;\n  color: var(--color-main-text);\n  white-space: nowrap;\n  opacity: 0.7;\n  /* prevent .action class to break the design */\n  /* Add padding if contains icon+text */\n  /* DEPRECATED! old img in popover fallback\n  \t* TODO: to remove */\n  /* checkbox/radio fixes */\n  /* no margin if hidden span before */\n  /* Inputs inside popover supports text, submit & reset */\n}\nli > button span[class^=icon-][data-v-7ca1b7e2],\nli > button span[class*=\" icon-\"][data-v-7ca1b7e2], li > button[class^=icon-][data-v-7ca1b7e2], li > button[class*=\" icon-\"][data-v-7ca1b7e2],\nli > a span[class^=icon-][data-v-7ca1b7e2],\nli > a span[class*=\" icon-\"][data-v-7ca1b7e2],\nli > a[class^=icon-][data-v-7ca1b7e2],\nli > a[class*=\" icon-\"][data-v-7ca1b7e2],\nli > .menuitem span[class^=icon-][data-v-7ca1b7e2],\nli > .menuitem span[class*=\" icon-\"][data-v-7ca1b7e2],\nli > .menuitem[class^=icon-][data-v-7ca1b7e2],\nli > .menuitem[class*=\" icon-\"][data-v-7ca1b7e2] {\n  min-width: 0; /* Overwrite icons*/\n  min-height: 0;\n  background-position: 14px center;\n  background-size: 16px;\n}\nli > button span[class^=icon-][data-v-7ca1b7e2],\nli > button span[class*=\" icon-\"][data-v-7ca1b7e2],\nli > a span[class^=icon-][data-v-7ca1b7e2],\nli > a span[class*=\" icon-\"][data-v-7ca1b7e2],\nli > .menuitem span[class^=icon-][data-v-7ca1b7e2],\nli > .menuitem span[class*=\" icon-\"][data-v-7ca1b7e2] {\n  /* Keep padding to define the width to\n  \tassure correct position of a possible text */\n  padding: 22px 0 22px 44px;\n}\nli > button:not([class^=icon-]):not([class*=icon-]) > span[data-v-7ca1b7e2]:not([class^=icon-]):not([class*=icon-]):first-child,\nli > button:not([class^=icon-]):not([class*=icon-]) > input[data-v-7ca1b7e2]:not([class^=icon-]):not([class*=icon-]):first-child,\nli > button:not([class^=icon-]):not([class*=icon-]) > form[data-v-7ca1b7e2]:not([class^=icon-]):not([class*=icon-]):first-child,\nli > a:not([class^=icon-]):not([class*=icon-]) > span[data-v-7ca1b7e2]:not([class^=icon-]):not([class*=icon-]):first-child,\nli > a:not([class^=icon-]):not([class*=icon-]) > input[data-v-7ca1b7e2]:not([class^=icon-]):not([class*=icon-]):first-child,\nli > a:not([class^=icon-]):not([class*=icon-]) > form[data-v-7ca1b7e2]:not([class^=icon-]):not([class*=icon-]):first-child,\nli > .menuitem:not([class^=icon-]):not([class*=icon-]) > span[data-v-7ca1b7e2]:not([class^=icon-]):not([class*=icon-]):first-child,\nli > .menuitem:not([class^=icon-]):not([class*=icon-]) > input[data-v-7ca1b7e2]:not([class^=icon-]):not([class*=icon-]):first-child,\nli > .menuitem:not([class^=icon-]):not([class*=icon-]) > form[data-v-7ca1b7e2]:not([class^=icon-]):not([class*=icon-]):first-child {\n  margin-left: 44px;\n}\nli > button[class^=icon-][data-v-7ca1b7e2], li > button[class*=\" icon-\"][data-v-7ca1b7e2],\nli > a[class^=icon-][data-v-7ca1b7e2],\nli > a[class*=\" icon-\"][data-v-7ca1b7e2],\nli > .menuitem[class^=icon-][data-v-7ca1b7e2],\nli > .menuitem[class*=\" icon-\"][data-v-7ca1b7e2] {\n  padding: 0 14px 0 44px;\n}\nli > button[data-v-7ca1b7e2]:not(:disabled):hover, li > button[data-v-7ca1b7e2]:not(:disabled):focus, li > button:not(:disabled).active[data-v-7ca1b7e2],\nli > a[data-v-7ca1b7e2]:not(:disabled):hover,\nli > a[data-v-7ca1b7e2]:not(:disabled):focus,\nli > a:not(:disabled).active[data-v-7ca1b7e2],\nli > .menuitem[data-v-7ca1b7e2]:not(:disabled):hover,\nli > .menuitem[data-v-7ca1b7e2]:not(:disabled):focus,\nli > .menuitem:not(:disabled).active[data-v-7ca1b7e2] {\n  opacity: 1 !important;\n}\nli > button.action[data-v-7ca1b7e2],\nli > a.action[data-v-7ca1b7e2],\nli > .menuitem.action[data-v-7ca1b7e2] {\n  padding: inherit !important;\n}\nli > button > span[data-v-7ca1b7e2],\nli > a > span[data-v-7ca1b7e2],\nli > .menuitem > span[data-v-7ca1b7e2] {\n  cursor: pointer;\n  white-space: nowrap;\n}\nli > button > p[data-v-7ca1b7e2],\nli > a > p[data-v-7ca1b7e2],\nli > .menuitem > p[data-v-7ca1b7e2] {\n  width: 150px;\n  line-height: 1.6em;\n  padding: 8px 0;\n  white-space: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nli > button > select[data-v-7ca1b7e2],\nli > a > select[data-v-7ca1b7e2],\nli > .menuitem > select[data-v-7ca1b7e2] {\n  margin: 0;\n  margin-left: 6px;\n}\nli > button[data-v-7ca1b7e2]:not(:empty),\nli > a[data-v-7ca1b7e2]:not(:empty),\nli > .menuitem[data-v-7ca1b7e2]:not(:empty) {\n  padding-right: 14px !important;\n}\nli > button > img[data-v-7ca1b7e2],\nli > a > img[data-v-7ca1b7e2],\nli > .menuitem > img[data-v-7ca1b7e2] {\n  width: 16px;\n  height: 16px;\n  margin: 14px;\n}\nli > button > input.radio + label[data-v-7ca1b7e2],\nli > button > input.checkbox + label[data-v-7ca1b7e2],\nli > a > input.radio + label[data-v-7ca1b7e2],\nli > a > input.checkbox + label[data-v-7ca1b7e2],\nli > .menuitem > input.radio + label[data-v-7ca1b7e2],\nli > .menuitem > input.checkbox + label[data-v-7ca1b7e2] {\n  padding: 0 !important;\n  width: 100%;\n}\nli > button > input.checkbox + label[data-v-7ca1b7e2]::before,\nli > a > input.checkbox + label[data-v-7ca1b7e2]::before,\nli > .menuitem > input.checkbox + label[data-v-7ca1b7e2]::before {\n  margin: -2px 13px 0;\n}\nli > button > input.radio + label[data-v-7ca1b7e2]::before,\nli > a > input.radio + label[data-v-7ca1b7e2]::before,\nli > .menuitem > input.radio + label[data-v-7ca1b7e2]::before {\n  margin: -2px 12px 0;\n}\nli > button > input[data-v-7ca1b7e2]:not([type=radio]):not([type=checkbox]):not([type=image]),\nli > a > input[data-v-7ca1b7e2]:not([type=radio]):not([type=checkbox]):not([type=image]),\nli > .menuitem > input[data-v-7ca1b7e2]:not([type=radio]):not([type=checkbox]):not([type=image]) {\n  width: 150px;\n}\nli > button form[data-v-7ca1b7e2],\nli > a form[data-v-7ca1b7e2],\nli > .menuitem form[data-v-7ca1b7e2] {\n  display: flex;\n  flex: 1 1 auto;\n  /* put a small space between text and form\n  \tif there is an element before */\n}\nli > button form[data-v-7ca1b7e2]:not(:first-child),\nli > a form[data-v-7ca1b7e2]:not(:first-child),\nli > .menuitem form[data-v-7ca1b7e2]:not(:first-child) {\n  margin-left: 5px;\n}\nli > button > span.hidden + form[data-v-7ca1b7e2],\nli > button > span[style*=\"display:none\"] + form[data-v-7ca1b7e2],\nli > a > span.hidden + form[data-v-7ca1b7e2],\nli > a > span[style*=\"display:none\"] + form[data-v-7ca1b7e2],\nli > .menuitem > span.hidden + form[data-v-7ca1b7e2],\nli > .menuitem > span[style*=\"display:none\"] + form[data-v-7ca1b7e2] {\n  margin-left: 0;\n}\nli > button input[data-v-7ca1b7e2],\nli > a input[data-v-7ca1b7e2],\nli > .menuitem input[data-v-7ca1b7e2] {\n  min-width: 44px;\n  max-height: 40px; /* twice the element margin-y */\n  margin: 2px 0;\n  flex: 1 1 auto;\n}\nli > button input[data-v-7ca1b7e2]:not(:first-child),\nli > a input[data-v-7ca1b7e2]:not(:first-child),\nli > .menuitem input[data-v-7ca1b7e2]:not(:first-child) {\n  margin-left: 5px;\n}\nli:not(.hidden):not([style*=\"display:none\"]):first-of-type > button > form[data-v-7ca1b7e2], li:not(.hidden):not([style*=\"display:none\"]):first-of-type > button > input[data-v-7ca1b7e2], li:not(.hidden):not([style*=\"display:none\"]):first-of-type > a > form[data-v-7ca1b7e2], li:not(.hidden):not([style*=\"display:none\"]):first-of-type > a > input[data-v-7ca1b7e2], li:not(.hidden):not([style*=\"display:none\"]):first-of-type > .menuitem > form[data-v-7ca1b7e2], li:not(.hidden):not([style*=\"display:none\"]):first-of-type > .menuitem > input[data-v-7ca1b7e2] {\n  margin-top: 12px;\n}\nli:not(.hidden):not([style*=\"display:none\"]):last-of-type > button > form[data-v-7ca1b7e2], li:not(.hidden):not([style*=\"display:none\"]):last-of-type > button > input[data-v-7ca1b7e2], li:not(.hidden):not([style*=\"display:none\"]):last-of-type > a > form[data-v-7ca1b7e2], li:not(.hidden):not([style*=\"display:none\"]):last-of-type > a > input[data-v-7ca1b7e2], li:not(.hidden):not([style*=\"display:none\"]):last-of-type > .menuitem > form[data-v-7ca1b7e2], li:not(.hidden):not([style*=\"display:none\"]):last-of-type > .menuitem > input[data-v-7ca1b7e2] {\n  margin-bottom: 12px;\n}\nli > button[data-v-7ca1b7e2] {\n  padding: 0;\n}\nli > button span[data-v-7ca1b7e2] {\n  opacity: 1;\n}", ""]); // Exports

          /* harmony default export */


          __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
          /***/
        },

        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcRichContenteditable/NcMentionBubble.vue?vue&type=style&index=0&id=6a4da19e&lang=scss&scoped=true&":
        /*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcRichContenteditable/NcMentionBubble.vue?vue&type=style&index=0&id=6a4da19e&lang=scss&scoped=true& ***!
          \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcRichContenteditableNcMentionBubbleVueVueTypeStyleIndex0Id6a4da19eLangScssScopedTrue(module, __webpack_exports__, __nested_webpack_require_278693__) {
          "use strict";

          __nested_webpack_require_278693__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_278693__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_278693__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_278693__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_278693__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__); // Imports


          var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()); // Module


          ___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-6a4da19e] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.mention-bubble--primary .mention-bubble__content[data-v-6a4da19e] {\n  color: var(--color-primary-text);\n  background-color: var(--color-primary-element);\n}\n.mention-bubble__wrapper[data-v-6a4da19e] {\n  max-width: 150px;\n  height: 18px;\n  vertical-align: text-bottom;\n  display: inline-flex;\n  align-items: center;\n}\n.mention-bubble__content[data-v-6a4da19e] {\n  display: inline-flex;\n  overflow: hidden;\n  align-items: center;\n  max-width: 100%;\n  height: 20px;\n  -webkit-user-select: none;\n  user-select: none;\n  padding-right: 6px;\n  padding-left: 2px;\n  border-radius: 10px;\n  background-color: var(--color-background-dark);\n}\n.mention-bubble__icon[data-v-6a4da19e] {\n  position: relative;\n  width: 16px;\n  height: 16px;\n  border-radius: 8px;\n  background-color: var(--color-background-darker);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 12px;\n}\n.mention-bubble__icon--with-avatar[data-v-6a4da19e] {\n  color: inherit;\n  background-size: cover;\n}\n.mention-bubble__title[data-v-6a4da19e] {\n  overflow: hidden;\n  margin-left: 2px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.mention-bubble__title[data-v-6a4da19e]::before {\n  content: attr(title);\n}\n.mention-bubble__select[data-v-6a4da19e] {\n  position: absolute;\n  z-index: -1;\n  left: -1000px;\n}", ""]); // Exports

          /* harmony default export */


          __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
          /***/
        },

        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=style&index=0&id=7ca1b7e2&scoped=true&lang=css&":
        /*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=style&index=0&id=7ca1b7e2&scoped=true&lang=css& ***!
          \*******************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcPopoverMenuNcPopoverMenuItemVueVueTypeStyleIndex0Id7ca1b7e2ScopedTrueLangCss(module, __webpack_exports__, __nested_webpack_require_284223__) {
          "use strict";

          __nested_webpack_require_284223__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_284223__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_284223__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_284223__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_284223__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__); // Imports


          var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()); // Module


          ___CSS_LOADER_EXPORT___.push([module.id, "\nbutton.menuitem[data-v-7ca1b7e2] {\n\ttext-align: left;\n}\nbutton.menuitem *[data-v-7ca1b7e2] {\n\tcursor: pointer;\n}\nbutton.menuitem[data-v-7ca1b7e2]:disabled {\n\topacity: 0.5 !important;\n\tcursor: default;\n}\nbutton.menuitem:disabled *[data-v-7ca1b7e2] {\n\tcursor: default;\n}\n.menuitem.active[data-v-7ca1b7e2] {\n\tbox-shadow: inset 2px 0 var(--color-primary);\n\tborder-radius: 0;\n}\n", ""]); // Exports

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
        "./node_modules/css-loader/dist/runtime/getUrl.js":
        /*!********************************************************!*\
          !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
          \********************************************************/

        /***/
        function node_modulesCssLoaderDistRuntimeGetUrlJs(module) {
          "use strict";

          module.exports = function (url, options) {
            if (!options) {
              options = {};
            }

            if (!url) {
              return url;
            }

            url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

            if (/^['"].*['"]$/.test(url)) {
              url = url.slice(1, -1);
            }

            if (options.hash) {
              url += options.hash;
            } // Should url be wrapped?
            // See https://drafts.csswg.org/css-values-3/#urls


            if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
              return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
            }

            return url;
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
        "./src/directives/Tooltip/index.scss":
        /*!*******************************************!*\
          !*** ./src/directives/Tooltip/index.scss ***!
          \*******************************************/

        /***/
        function srcDirectivesTooltipIndexScss(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_291827__) {
          "use strict";

          __nested_webpack_require_291827__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_291827__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_291827__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_291827__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_291827__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_291827__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_291827__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_291827__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_291827__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_291827__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_291827__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_291827__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_291827__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_291827__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./index.scss */
          "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./src/directives/Tooltip/index.scss");

          var options = {};
          options.styleTagTransform = _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
          options.setAttributes = _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
          options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
          options.domAPI = _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
          options.insertStyleElement = _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

          var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined;
          /***/
        },

        /***/
        "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcAvatar/NcAvatar.vue?vue&type=style&index=0&id=78eb9ce2&scoped=true&lang=scss&":
        /*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcAvatar/NcAvatar.vue?vue&type=style&index=0&id=78eb9ce2&scoped=true&lang=scss& ***!
          \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesStyleLoaderDistCjsJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcAvatarNcAvatarVueVueTypeStyleIndex0Id78eb9ce2ScopedTrueLangScss(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_300055__) {
          "use strict";

          __nested_webpack_require_300055__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_300055__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_300055__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_300055__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_300055__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_300055__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_300055__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_300055__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_300055__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_300055__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_300055__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_300055__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_300055__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcAvatar_vue_vue_type_style_index_0_id_78eb9ce2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_300055__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcAvatar.vue?vue&type=style&index=0&id=78eb9ce2&scoped=true&lang=scss& */
          "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcAvatar/NcAvatar.vue?vue&type=style&index=0&id=78eb9ce2&scoped=true&lang=scss&");

          var options = {};
          options.styleTagTransform = _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
          options.setAttributes = _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
          options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
          options.domAPI = _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
          options.insertStyleElement = _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

          var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcAvatar_vue_vue_type_style_index_0_id_78eb9ce2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcAvatar_vue_vue_type_style_index_0_id_78eb9ce2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcAvatar_vue_vue_type_style_index_0_id_78eb9ce2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcAvatar_vue_vue_type_style_index_0_id_78eb9ce2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined;
          /***/
        },

        /***/
        "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=style&index=0&id=fe92815e&lang=scss&scoped=true&":
        /*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=style&index=0&id=fe92815e&lang=scss&scoped=true& ***!
          \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesStyleLoaderDistCjsJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcLoadingIconNcLoadingIconVueVueTypeStyleIndex0IdFe92815eLangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_309555__) {
          "use strict";

          __nested_webpack_require_309555__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_309555__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_309555__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_309555__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_309555__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_309555__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_309555__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_309555__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_309555__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_309555__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_309555__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_309555__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_309555__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcLoadingIcon_vue_vue_type_style_index_0_id_fe92815e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_309555__(
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
        "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss&":
        /*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss& ***!
          \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesStyleLoaderDistCjsJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcPopoverNcPopoverVueVueTypeStyleIndex0Id40cc2471LangScss(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_318997__) {
          "use strict";

          __nested_webpack_require_318997__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_318997__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_318997__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_318997__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_318997__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_318997__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_318997__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_318997__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_318997__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_318997__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_318997__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_318997__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_318997__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_style_index_0_id_40cc2471_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_318997__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss& */
          "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss&");

          var options = {};
          options.styleTagTransform = _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
          options.setAttributes = _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
          options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
          options.domAPI = _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
          options.insertStyleElement = _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

          var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_style_index_0_id_40cc2471_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_style_index_0_id_40cc2471_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_style_index_0_id_40cc2471_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_style_index_0_id_40cc2471_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined;
          /***/
        },

        /***/
        "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=style&index=0&id=bcce04a2&lang=scss&scoped=true&":
        /*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=style&index=0&id=bcce04a2&lang=scss&scoped=true& ***!
          \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesStyleLoaderDistCjsJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcPopoverMenuNcPopoverMenuVueVueTypeStyleIndex0IdBcce04a2LangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_328421__) {
          "use strict";

          __nested_webpack_require_328421__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_328421__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_328421__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_328421__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_328421__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_328421__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_328421__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_328421__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_328421__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_328421__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_328421__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_328421__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_328421__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenu_vue_vue_type_style_index_0_id_bcce04a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_328421__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcPopoverMenu.vue?vue&type=style&index=0&id=bcce04a2&lang=scss&scoped=true& */
          "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=style&index=0&id=bcce04a2&lang=scss&scoped=true&");

          var options = {};
          options.styleTagTransform = _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
          options.setAttributes = _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
          options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
          options.domAPI = _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
          options.insertStyleElement = _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

          var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenu_vue_vue_type_style_index_0_id_bcce04a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenu_vue_vue_type_style_index_0_id_bcce04a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenu_vue_vue_type_style_index_0_id_bcce04a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenu_vue_vue_type_style_index_0_id_bcce04a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined;
          /***/
        },

        /***/
        "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=style&index=1&id=7ca1b7e2&lang=scss&scoped=true&":
        /*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=style&index=1&id=7ca1b7e2&lang=scss&scoped=true& ***!
          \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesStyleLoaderDistCjsJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcPopoverMenuNcPopoverMenuItemVueVueTypeStyleIndex1Id7ca1b7e2LangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_337981__) {
          "use strict";

          __nested_webpack_require_337981__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_337981__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_337981__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_337981__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_337981__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_337981__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_337981__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_337981__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_337981__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_337981__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_337981__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_337981__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_337981__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenuItem_vue_vue_type_style_index_1_id_7ca1b7e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_337981__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcPopoverMenuItem.vue?vue&type=style&index=1&id=7ca1b7e2&lang=scss&scoped=true& */
          "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=style&index=1&id=7ca1b7e2&lang=scss&scoped=true&");

          var options = {};
          options.styleTagTransform = _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
          options.setAttributes = _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
          options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
          options.domAPI = _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
          options.insertStyleElement = _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

          var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenuItem_vue_vue_type_style_index_1_id_7ca1b7e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenuItem_vue_vue_type_style_index_1_id_7ca1b7e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenuItem_vue_vue_type_style_index_1_id_7ca1b7e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenuItem_vue_vue_type_style_index_1_id_7ca1b7e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined;
          /***/
        },

        /***/
        "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcRichContenteditable/NcMentionBubble.vue?vue&type=style&index=0&id=6a4da19e&lang=scss&scoped=true&":
        /*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcRichContenteditable/NcMentionBubble.vue?vue&type=style&index=0&id=6a4da19e&lang=scss&scoped=true& ***!
          \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesStyleLoaderDistCjsJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcRichContenteditableNcMentionBubbleVueVueTypeStyleIndex0Id6a4da19eLangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_347599__) {
          "use strict";

          __nested_webpack_require_347599__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_347599__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_347599__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_347599__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_347599__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_347599__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_347599__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_347599__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_347599__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_347599__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_347599__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_347599__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_347599__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcMentionBubble_vue_vue_type_style_index_0_id_6a4da19e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_347599__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcMentionBubble.vue?vue&type=style&index=0&id=6a4da19e&lang=scss&scoped=true& */
          "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcRichContenteditable/NcMentionBubble.vue?vue&type=style&index=0&id=6a4da19e&lang=scss&scoped=true&");

          var options = {};
          options.styleTagTransform = _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
          options.setAttributes = _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
          options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
          options.domAPI = _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
          options.insertStyleElement = _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

          var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcMentionBubble_vue_vue_type_style_index_0_id_6a4da19e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcMentionBubble_vue_vue_type_style_index_0_id_6a4da19e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcMentionBubble_vue_vue_type_style_index_0_id_6a4da19e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcMentionBubble_vue_vue_type_style_index_0_id_6a4da19e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined;
          /***/
        },

        /***/
        "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=style&index=0&id=7ca1b7e2&scoped=true&lang=css&":
        /*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=style&index=0&id=7ca1b7e2&scoped=true&lang=css& ***!
          \***********************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesStyleLoaderDistCjsJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcPopoverMenuNcPopoverMenuItemVueVueTypeStyleIndex0Id7ca1b7e2ScopedTrueLangCss(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_356668__) {
          "use strict";

          __nested_webpack_require_356668__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_356668__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_356668__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_356668__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_356668__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_356668__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_356668__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_356668__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_356668__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_356668__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_356668__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_356668__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_356668__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenuItem_vue_vue_type_style_index_0_id_7ca1b7e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_356668__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcPopoverMenuItem.vue?vue&type=style&index=0&id=7ca1b7e2&scoped=true&lang=css& */
          "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=style&index=0&id=7ca1b7e2&scoped=true&lang=css&");

          var options = {};
          options.styleTagTransform = _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
          options.setAttributes = _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
          options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
          options.domAPI = _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
          options.insertStyleElement = _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

          var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenuItem_vue_vue_type_style_index_0_id_7ca1b7e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"], options);
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenuItem_vue_vue_type_style_index_0_id_7ca1b7e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenuItem_vue_vue_type_style_index_0_id_7ca1b7e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenuItem_vue_vue_type_style_index_0_id_7ca1b7e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined;
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
        function node_modulesStyleLoaderDistRuntimeSetAttributesWithoutAttributesJs(module, __unused_webpack_exports, __nested_webpack_require_370317__) {
          "use strict";
          /* istanbul ignore next  */

          function setAttributesWithoutAttributes(styleElement) {
            var nonce =  true ? __nested_webpack_require_370317__.nc : 0;

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
        "./src/components/NcAvatar/NcAvatar.vue":
        /*!**********************************************!*\
          !*** ./src/components/NcAvatar/NcAvatar.vue ***!
          \**********************************************/

        /***/
        function srcComponentsNcAvatarNcAvatarVue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_374403__) {
          "use strict";

          __nested_webpack_require_374403__.r(__webpack_exports__);
          /* harmony import */


          var _NcAvatar_vue_vue_type_template_id_78eb9ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_374403__(
          /*! ./NcAvatar.vue?vue&type=template&id=78eb9ce2&scoped=true& */
          "./src/components/NcAvatar/NcAvatar.vue?vue&type=template&id=78eb9ce2&scoped=true&");
          /* harmony import */


          var _NcAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_374403__(
          /*! ./NcAvatar.vue?vue&type=script&lang=js& */
          "./src/components/NcAvatar/NcAvatar.vue?vue&type=script&lang=js&");
          /* harmony import */


          var _NcAvatar_vue_vue_type_style_index_0_id_78eb9ce2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_374403__(
          /*! ./NcAvatar.vue?vue&type=style&index=0&id=78eb9ce2&scoped=true&lang=scss& */
          "./src/components/NcAvatar/NcAvatar.vue?vue&type=style&index=0&id=78eb9ce2&scoped=true&lang=scss&");
          /* harmony import */


          var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_374403__(
          /*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
          "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
          /* harmony import */


          var _NcAvatar_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_374403__(
          /*! ./NcAvatar.vue?vue&type=custom&index=0&blockType=docs */
          "./src/components/NcAvatar/NcAvatar.vue?vue&type=custom&index=0&blockType=docs");
          /* harmony import */


          var _NcAvatar_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_374403__.n(_NcAvatar_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__);

          ;
          /* normalize component */

          var component = (0, _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_NcAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _NcAvatar_vue_vue_type_template_id_78eb9ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render, _NcAvatar_vue_vue_type_template_id_78eb9ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns, false, null, "78eb9ce2", null)
          /* custom blocks */
          ;
          if (typeof _NcAvatar_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default() === 'function') _NcAvatar_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default()(component);
          /* hot reload */

          if (false) { var api; }

          component.options.__file = "src/components/NcAvatar/NcAvatar.vue";
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
        function srcComponentsNcLoadingIconNcLoadingIconVue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_377830__) {
          "use strict";

          __nested_webpack_require_377830__.r(__webpack_exports__);
          /* harmony import */


          var _NcLoadingIcon_vue_vue_type_template_id_fe92815e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_377830__(
          /*! ./NcLoadingIcon.vue?vue&type=template&id=fe92815e&scoped=true& */
          "./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=template&id=fe92815e&scoped=true&");
          /* harmony import */


          var _NcLoadingIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_377830__(
          /*! ./NcLoadingIcon.vue?vue&type=script&lang=js& */
          "./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=script&lang=js&");
          /* harmony import */


          var _NcLoadingIcon_vue_vue_type_style_index_0_id_fe92815e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_377830__(
          /*! ./NcLoadingIcon.vue?vue&type=style&index=0&id=fe92815e&lang=scss&scoped=true& */
          "./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=style&index=0&id=fe92815e&lang=scss&scoped=true&");
          /* harmony import */


          var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_377830__(
          /*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
          "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
          /* harmony import */


          var _NcLoadingIcon_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_377830__(
          /*! ./NcLoadingIcon.vue?vue&type=custom&index=0&blockType=docs */
          "./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=custom&index=0&blockType=docs");
          /* harmony import */


          var _NcLoadingIcon_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_377830__.n(_NcLoadingIcon_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__);

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
        "./src/components/NcPopover/NcPopover.vue":
        /*!************************************************!*\
          !*** ./src/components/NcPopover/NcPopover.vue ***!
          \************************************************/

        /***/
        function srcComponentsNcPopoverNcPopoverVue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_381342__) {
          "use strict";

          __nested_webpack_require_381342__.r(__webpack_exports__);
          /* harmony import */


          var _NcPopover_vue_vue_type_template_id_40cc2471___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_381342__(
          /*! ./NcPopover.vue?vue&type=template&id=40cc2471& */
          "./src/components/NcPopover/NcPopover.vue?vue&type=template&id=40cc2471&");
          /* harmony import */


          var _NcPopover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_381342__(
          /*! ./NcPopover.vue?vue&type=script&lang=js& */
          "./src/components/NcPopover/NcPopover.vue?vue&type=script&lang=js&");
          /* harmony import */


          var _NcPopover_vue_vue_type_style_index_0_id_40cc2471_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_381342__(
          /*! ./NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss& */
          "./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss&");
          /* harmony import */


          var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_381342__(
          /*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
          "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
          /* harmony import */


          var _NcPopover_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_381342__(
          /*! ./NcPopover.vue?vue&type=custom&index=0&blockType=docs */
          "./src/components/NcPopover/NcPopover.vue?vue&type=custom&index=0&blockType=docs");
          /* harmony import */


          var _NcPopover_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_381342__.n(_NcPopover_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__);

          ;
          /* normalize component */

          var component = (0, _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_NcPopover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _NcPopover_vue_vue_type_template_id_40cc2471___WEBPACK_IMPORTED_MODULE_0__.render, _NcPopover_vue_vue_type_template_id_40cc2471___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns, false, null, null, null)
          /* custom blocks */
          ;
          if (typeof _NcPopover_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default() === 'function') _NcPopover_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default()(component);
          /* hot reload */

          if (false) { var api; }

          component.options.__file = "src/components/NcPopover/NcPopover.vue";
          /* harmony default export */

          __webpack_exports__["default"] = component.exports;
          /***/
        },

        /***/
        "./src/components/NcPopoverMenu/NcPopoverMenu.vue":
        /*!********************************************************!*\
          !*** ./src/components/NcPopoverMenu/NcPopoverMenu.vue ***!
          \********************************************************/

        /***/
        function srcComponentsNcPopoverMenuNcPopoverMenuVue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_384692__) {
          "use strict";

          __nested_webpack_require_384692__.r(__webpack_exports__);
          /* harmony import */


          var _NcPopoverMenu_vue_vue_type_template_id_bcce04a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_384692__(
          /*! ./NcPopoverMenu.vue?vue&type=template&id=bcce04a2&scoped=true& */
          "./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=template&id=bcce04a2&scoped=true&");
          /* harmony import */


          var _NcPopoverMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_384692__(
          /*! ./NcPopoverMenu.vue?vue&type=script&lang=js& */
          "./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=script&lang=js&");
          /* harmony import */


          var _NcPopoverMenu_vue_vue_type_style_index_0_id_bcce04a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_384692__(
          /*! ./NcPopoverMenu.vue?vue&type=style&index=0&id=bcce04a2&lang=scss&scoped=true& */
          "./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=style&index=0&id=bcce04a2&lang=scss&scoped=true&");
          /* harmony import */


          var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_384692__(
          /*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
          "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
          /* harmony import */


          var _NcPopoverMenu_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_384692__(
          /*! ./NcPopoverMenu.vue?vue&type=custom&index=0&blockType=docs */
          "./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=custom&index=0&blockType=docs");
          /* harmony import */


          var _NcPopoverMenu_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_384692__.n(_NcPopoverMenu_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__);

          ;
          /* normalize component */

          var component = (0, _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_NcPopoverMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _NcPopoverMenu_vue_vue_type_template_id_bcce04a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render, _NcPopoverMenu_vue_vue_type_template_id_bcce04a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns, false, null, "bcce04a2", null)
          /* custom blocks */
          ;
          if (typeof _NcPopoverMenu_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default() === 'function') _NcPopoverMenu_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default()(component);
          /* hot reload */

          if (false) { var api; }

          component.options.__file = "src/components/NcPopoverMenu/NcPopoverMenu.vue";
          /* harmony default export */

          __webpack_exports__["default"] = component.exports;
          /***/
        },

        /***/
        "./src/components/NcPopoverMenu/NcPopoverMenuItem.vue":
        /*!************************************************************!*\
          !*** ./src/components/NcPopoverMenu/NcPopoverMenuItem.vue ***!
          \************************************************************/

        /***/
        function srcComponentsNcPopoverMenuNcPopoverMenuItemVue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_388264__) {
          "use strict";

          __nested_webpack_require_388264__.r(__webpack_exports__);
          /* harmony import */


          var _NcPopoverMenuItem_vue_vue_type_template_id_7ca1b7e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_388264__(
          /*! ./NcPopoverMenuItem.vue?vue&type=template&id=7ca1b7e2&scoped=true& */
          "./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=template&id=7ca1b7e2&scoped=true&");
          /* harmony import */


          var _NcPopoverMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_388264__(
          /*! ./NcPopoverMenuItem.vue?vue&type=script&lang=js& */
          "./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=script&lang=js&");
          /* harmony import */


          var _NcPopoverMenuItem_vue_vue_type_style_index_0_id_7ca1b7e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_388264__(
          /*! ./NcPopoverMenuItem.vue?vue&type=style&index=0&id=7ca1b7e2&scoped=true&lang=css& */
          "./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=style&index=0&id=7ca1b7e2&scoped=true&lang=css&");
          /* harmony import */


          var _NcPopoverMenuItem_vue_vue_type_style_index_1_id_7ca1b7e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_388264__(
          /*! ./NcPopoverMenuItem.vue?vue&type=style&index=1&id=7ca1b7e2&lang=scss&scoped=true& */
          "./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=style&index=1&id=7ca1b7e2&lang=scss&scoped=true&");
          /* harmony import */


          var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_388264__(
          /*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
          "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

          ;
          /* normalize component */

          var component = (0, _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_NcPopoverMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _NcPopoverMenuItem_vue_vue_type_template_id_7ca1b7e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render, _NcPopoverMenuItem_vue_vue_type_template_id_7ca1b7e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns, false, null, "7ca1b7e2", null);
          /* hot reload */

          if (false) { var api; }

          component.options.__file = "src/components/NcPopoverMenu/NcPopoverMenuItem.vue";
          /* harmony default export */

          __webpack_exports__["default"] = component.exports;
          /***/
        },

        /***/
        "./src/components/NcRichContenteditable/NcMentionBubble.vue":
        /*!******************************************************************!*\
          !*** ./src/components/NcRichContenteditable/NcMentionBubble.vue ***!
          \******************************************************************/

        /***/
        function srcComponentsNcRichContenteditableNcMentionBubbleVue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_391432__) {
          "use strict";

          __nested_webpack_require_391432__.r(__webpack_exports__);
          /* harmony import */


          var _NcMentionBubble_vue_vue_type_template_id_6a4da19e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_391432__(
          /*! ./NcMentionBubble.vue?vue&type=template&id=6a4da19e&scoped=true& */
          "./src/components/NcRichContenteditable/NcMentionBubble.vue?vue&type=template&id=6a4da19e&scoped=true&");
          /* harmony import */


          var _NcMentionBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_391432__(
          /*! ./NcMentionBubble.vue?vue&type=script&lang=js& */
          "./src/components/NcRichContenteditable/NcMentionBubble.vue?vue&type=script&lang=js&");
          /* harmony import */


          var _NcMentionBubble_vue_vue_type_style_index_0_id_6a4da19e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_391432__(
          /*! ./NcMentionBubble.vue?vue&type=style&index=0&id=6a4da19e&lang=scss&scoped=true& */
          "./src/components/NcRichContenteditable/NcMentionBubble.vue?vue&type=style&index=0&id=6a4da19e&lang=scss&scoped=true&");
          /* harmony import */


          var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_391432__(
          /*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
          "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

          ;
          /* normalize component */

          var component = (0, _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_NcMentionBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _NcMentionBubble_vue_vue_type_template_id_6a4da19e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render, _NcMentionBubble_vue_vue_type_template_id_6a4da19e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns, false, null, "6a4da19e", null);
          /* hot reload */

          if (false) { var api; }

          component.options.__file = "src/components/NcRichContenteditable/NcMentionBubble.vue";
          /* harmony default export */

          __webpack_exports__["default"] = component.exports;
          /***/
        },

        /***/
        "./src/components/NcAvatar/NcAvatar.vue?vue&type=script&lang=js&":
        /*!***********************************************************************!*\
          !*** ./src/components/NcAvatar/NcAvatar.vue?vue&type=script&lang=js& ***!
          \***********************************************************************/

        /***/
        function srcComponentsNcAvatarNcAvatarVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_394224__) {
          "use strict";

          __nested_webpack_require_394224__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_394224__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcAvatar.vue?vue&type=script&lang=js& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcAvatar/NcAvatar.vue?vue&type=script&lang=js&");
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
          /***/
        },

        /***/
        "./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=script&lang=js&":
        /*!*********************************************************************************!*\
          !*** ./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=script&lang=js& ***!
          \*********************************************************************************/

        /***/
        function srcComponentsNcLoadingIconNcLoadingIconVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_395720__) {
          "use strict";

          __nested_webpack_require_395720__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcLoadingIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_395720__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcLoadingIcon.vue?vue&type=script&lang=js& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=script&lang=js&");
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcLoadingIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
          /***/
        },

        /***/
        "./src/components/NcPopover/NcPopover.vue?vue&type=script&lang=js&":
        /*!*************************************************************************!*\
          !*** ./src/components/NcPopover/NcPopover.vue?vue&type=script&lang=js& ***!
          \*************************************************************************/

        /***/
        function srcComponentsNcPopoverNcPopoverVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_397201__) {
          "use strict";

          __nested_webpack_require_397201__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_397201__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcPopover.vue?vue&type=script&lang=js& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=script&lang=js&");
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
          /***/
        },

        /***/
        "./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=script&lang=js&":
        /*!*********************************************************************************!*\
          !*** ./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=script&lang=js& ***!
          \*********************************************************************************/

        /***/
        function srcComponentsNcPopoverMenuNcPopoverMenuVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_398702__) {
          "use strict";

          __nested_webpack_require_398702__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_398702__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcPopoverMenu.vue?vue&type=script&lang=js& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=script&lang=js&");
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
          /***/
        },

        /***/
        "./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=script&lang=js&":
        /*!*************************************************************************************!*\
          !*** ./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=script&lang=js& ***!
          \*************************************************************************************/

        /***/
        function srcComponentsNcPopoverMenuNcPopoverMenuItemVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_400243__) {
          "use strict";

          __nested_webpack_require_400243__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_400243__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcPopoverMenuItem.vue?vue&type=script&lang=js& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=script&lang=js&");
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
          /***/
        },

        /***/
        "./src/components/NcRichContenteditable/NcMentionBubble.vue?vue&type=script&lang=js&":
        /*!*******************************************************************************************!*\
          !*** ./src/components/NcRichContenteditable/NcMentionBubble.vue?vue&type=script&lang=js& ***!
          \*******************************************************************************************/

        /***/
        function srcComponentsNcRichContenteditableNcMentionBubbleVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_401830__) {
          "use strict";

          __nested_webpack_require_401830__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcMentionBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_401830__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcMentionBubble.vue?vue&type=script&lang=js& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcRichContenteditable/NcMentionBubble.vue?vue&type=script&lang=js&");
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcMentionBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
          /***/
        },

        /***/
        "./src/components/NcAvatar/NcAvatar.vue?vue&type=template&id=78eb9ce2&scoped=true&":
        /*!*****************************************************************************************!*\
          !*** ./src/components/NcAvatar/NcAvatar.vue?vue&type=template&id=78eb9ce2&scoped=true& ***!
          \*****************************************************************************************/

        /***/
        function srcComponentsNcAvatarNcAvatarVueVueTypeTemplateId78eb9ce2ScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_403405__) {
          "use strict";

          __nested_webpack_require_403405__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_403405__.d(__webpack_exports__, {
            /* harmony export */
            "render": function render() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcAvatar_vue_vue_type_template_id_78eb9ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render
              );
            },

            /* harmony export */
            "staticRenderFns": function staticRenderFns() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcAvatar_vue_vue_type_template_id_78eb9ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
              );
            }
            /* harmony export */

          });
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcAvatar_vue_vue_type_template_id_78eb9ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_403405__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcAvatar.vue?vue&type=template&id=78eb9ce2&scoped=true& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcAvatar/NcAvatar.vue?vue&type=template&id=78eb9ce2&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=template&id=fe92815e&scoped=true&":
        /*!***************************************************************************************************!*\
          !*** ./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=template&id=fe92815e&scoped=true& ***!
          \***************************************************************************************************/

        /***/
        function srcComponentsNcLoadingIconNcLoadingIconVueVueTypeTemplateIdFe92815eScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_406065__) {
          "use strict";

          __nested_webpack_require_406065__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_406065__.d(__webpack_exports__, {
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


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcLoadingIcon_vue_vue_type_template_id_fe92815e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_406065__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcLoadingIcon.vue?vue&type=template&id=fe92815e&scoped=true& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=template&id=fe92815e&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcPopover/NcPopover.vue?vue&type=template&id=40cc2471&":
        /*!*******************************************************************************!*\
          !*** ./src/components/NcPopover/NcPopover.vue?vue&type=template&id=40cc2471& ***!
          \*******************************************************************************/

        /***/
        function srcComponentsNcPopoverNcPopoverVueVueTypeTemplateId40cc2471(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_408657__) {
          "use strict";

          __nested_webpack_require_408657__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_408657__.d(__webpack_exports__, {
            /* harmony export */
            "render": function render() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_template_id_40cc2471___WEBPACK_IMPORTED_MODULE_0__.render
              );
            },

            /* harmony export */
            "staticRenderFns": function staticRenderFns() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_template_id_40cc2471___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
              );
            }
            /* harmony export */

          });
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_template_id_40cc2471___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_408657__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcPopover.vue?vue&type=template&id=40cc2471& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=template&id=40cc2471&");
          /***/

        },

        /***/
        "./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=template&id=bcce04a2&scoped=true&":
        /*!***************************************************************************************************!*\
          !*** ./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=template&id=bcce04a2&scoped=true& ***!
          \***************************************************************************************************/

        /***/
        function srcComponentsNcPopoverMenuNcPopoverMenuVueVueTypeTemplateIdBcce04a2ScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_411263__) {
          "use strict";

          __nested_webpack_require_411263__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_411263__.d(__webpack_exports__, {
            /* harmony export */
            "render": function render() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenu_vue_vue_type_template_id_bcce04a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render
              );
            },

            /* harmony export */
            "staticRenderFns": function staticRenderFns() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenu_vue_vue_type_template_id_bcce04a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
              );
            }
            /* harmony export */

          });
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenu_vue_vue_type_template_id_bcce04a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_411263__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcPopoverMenu.vue?vue&type=template&id=bcce04a2&scoped=true& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=template&id=bcce04a2&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=template&id=7ca1b7e2&scoped=true&":
        /*!*******************************************************************************************************!*\
          !*** ./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=template&id=7ca1b7e2&scoped=true& ***!
          \*******************************************************************************************************/

        /***/
        function srcComponentsNcPopoverMenuNcPopoverMenuItemVueVueTypeTemplateId7ca1b7e2ScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_413973__) {
          "use strict";

          __nested_webpack_require_413973__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_413973__.d(__webpack_exports__, {
            /* harmony export */
            "render": function render() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenuItem_vue_vue_type_template_id_7ca1b7e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render
              );
            },

            /* harmony export */
            "staticRenderFns": function staticRenderFns() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenuItem_vue_vue_type_template_id_7ca1b7e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
              );
            }
            /* harmony export */

          });
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenuItem_vue_vue_type_template_id_7ca1b7e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_413973__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcPopoverMenuItem.vue?vue&type=template&id=7ca1b7e2&scoped=true& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=template&id=7ca1b7e2&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcRichContenteditable/NcMentionBubble.vue?vue&type=template&id=6a4da19e&scoped=true&":
        /*!*************************************************************************************************************!*\
          !*** ./src/components/NcRichContenteditable/NcMentionBubble.vue?vue&type=template&id=6a4da19e&scoped=true& ***!
          \*************************************************************************************************************/

        /***/
        function srcComponentsNcRichContenteditableNcMentionBubbleVueVueTypeTemplateId6a4da19eScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_416733__) {
          "use strict";

          __nested_webpack_require_416733__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_416733__.d(__webpack_exports__, {
            /* harmony export */
            "render": function render() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcMentionBubble_vue_vue_type_template_id_6a4da19e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render
              );
            },

            /* harmony export */
            "staticRenderFns": function staticRenderFns() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcMentionBubble_vue_vue_type_template_id_6a4da19e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
              );
            }
            /* harmony export */

          });
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcMentionBubble_vue_vue_type_template_id_6a4da19e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_416733__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcMentionBubble.vue?vue&type=template&id=6a4da19e&scoped=true& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcRichContenteditable/NcMentionBubble.vue?vue&type=template&id=6a4da19e&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcAvatar/NcAvatar.vue?vue&type=style&index=0&id=78eb9ce2&scoped=true&lang=scss&":
        /*!********************************************************************************************************!*\
          !*** ./src/components/NcAvatar/NcAvatar.vue?vue&type=style&index=0&id=78eb9ce2&scoped=true&lang=scss& ***!
          \********************************************************************************************************/

        /***/
        function srcComponentsNcAvatarNcAvatarVueVueTypeStyleIndex0Id78eb9ce2ScopedTrueLangScss(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_419462__) {
          "use strict";

          __nested_webpack_require_419462__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcAvatar_vue_vue_type_style_index_0_id_78eb9ce2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_419462__(
          /*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcAvatar.vue?vue&type=style&index=0&id=78eb9ce2&scoped=true&lang=scss& */
          "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcAvatar/NcAvatar.vue?vue&type=style&index=0&id=78eb9ce2&scoped=true&lang=scss&");
          /***/

        },

        /***/
        "./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=style&index=0&id=fe92815e&lang=scss&scoped=true&":
        /*!******************************************************************************************************************!*\
          !*** ./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=style&index=0&id=fe92815e&lang=scss&scoped=true& ***!
          \******************************************************************************************************************/

        /***/
        function srcComponentsNcLoadingIconNcLoadingIconVueVueTypeStyleIndex0IdFe92815eLangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_421576__) {
          "use strict";

          __nested_webpack_require_421576__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcLoadingIcon_vue_vue_type_style_index_0_id_fe92815e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_421576__(
          /*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcLoadingIcon.vue?vue&type=style&index=0&id=fe92815e&lang=scss&scoped=true& */
          "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcLoadingIcon/NcLoadingIcon.vue?vue&type=style&index=0&id=fe92815e&lang=scss&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss&":
        /*!**********************************************************************************************!*\
          !*** ./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss& ***!
          \**********************************************************************************************/

        /***/
        function srcComponentsNcPopoverNcPopoverVueVueTypeStyleIndex0Id40cc2471LangScss(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_423612__) {
          "use strict";

          __nested_webpack_require_423612__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_style_index_0_id_40cc2471_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_423612__(
          /*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss& */
          "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss&");
          /***/

        },

        /***/
        "./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=style&index=0&id=bcce04a2&lang=scss&scoped=true&":
        /*!******************************************************************************************************************!*\
          !*** ./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=style&index=0&id=bcce04a2&lang=scss&scoped=true& ***!
          \******************************************************************************************************************/

        /***/
        function srcComponentsNcPopoverMenuNcPopoverMenuVueVueTypeStyleIndex0IdBcce04a2LangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_425694__) {
          "use strict";

          __nested_webpack_require_425694__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenu_vue_vue_type_style_index_0_id_bcce04a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_425694__(
          /*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcPopoverMenu.vue?vue&type=style&index=0&id=bcce04a2&lang=scss&scoped=true& */
          "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=style&index=0&id=bcce04a2&lang=scss&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=style&index=1&id=7ca1b7e2&lang=scss&scoped=true&":
        /*!**********************************************************************************************************************!*\
          !*** ./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=style&index=1&id=7ca1b7e2&lang=scss&scoped=true& ***!
          \**********************************************************************************************************************/

        /***/
        function srcComponentsNcPopoverMenuNcPopoverMenuItemVueVueTypeStyleIndex1Id7ca1b7e2LangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_427848__) {
          "use strict";

          __nested_webpack_require_427848__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenuItem_vue_vue_type_style_index_1_id_7ca1b7e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_427848__(
          /*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcPopoverMenuItem.vue?vue&type=style&index=1&id=7ca1b7e2&lang=scss&scoped=true& */
          "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=style&index=1&id=7ca1b7e2&lang=scss&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcRichContenteditable/NcMentionBubble.vue?vue&type=style&index=0&id=6a4da19e&lang=scss&scoped=true&":
        /*!****************************************************************************************************************************!*\
          !*** ./src/components/NcRichContenteditable/NcMentionBubble.vue?vue&type=style&index=0&id=6a4da19e&lang=scss&scoped=true& ***!
          \****************************************************************************************************************************/

        /***/
        function srcComponentsNcRichContenteditableNcMentionBubbleVueVueTypeStyleIndex0Id6a4da19eLangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_430044__) {
          "use strict";

          __nested_webpack_require_430044__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcMentionBubble_vue_vue_type_style_index_0_id_6a4da19e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_430044__(
          /*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcMentionBubble.vue?vue&type=style&index=0&id=6a4da19e&lang=scss&scoped=true& */
          "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcRichContenteditable/NcMentionBubble.vue?vue&type=style&index=0&id=6a4da19e&lang=scss&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=style&index=0&id=7ca1b7e2&scoped=true&lang=css&":
        /*!*********************************************************************************************************************!*\
          !*** ./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=style&index=0&id=7ca1b7e2&scoped=true&lang=css& ***!
          \*********************************************************************************************************************/

        /***/
        function srcComponentsNcPopoverMenuNcPopoverMenuItemVueVueTypeStyleIndex0Id7ca1b7e2ScopedTrueLangCss(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_432207__) {
          "use strict";

          __nested_webpack_require_432207__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopoverMenuItem_vue_vue_type_style_index_0_id_7ca1b7e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_432207__(
          /*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcPopoverMenuItem.vue?vue&type=style&index=0&id=7ca1b7e2&scoped=true&lang=css& */
          "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopoverMenu/NcPopoverMenuItem.vue?vue&type=style&index=0&id=7ca1b7e2&scoped=true&lang=css&");
          /***/

        },

        /***/
        "./src/components/NcAvatar/NcAvatar.vue?vue&type=custom&index=0&blockType=docs":
        /*!*************************************************************************************!*\
          !*** ./src/components/NcAvatar/NcAvatar.vue?vue&type=custom&index=0&blockType=docs ***!
          \*************************************************************************************/

        /***/
        function srcComponentsNcAvatarNcAvatarVueVueTypeCustomIndex0BlockTypeDocs() {
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
        "./src/components/NcPopover/NcPopover.vue?vue&type=custom&index=0&blockType=docs":
        /*!***************************************************************************************!*\
          !*** ./src/components/NcPopover/NcPopover.vue?vue&type=custom&index=0&blockType=docs ***!
          \***************************************************************************************/

        /***/
        function srcComponentsNcPopoverNcPopoverVueVueTypeCustomIndex0BlockTypeDocs() {
          /***/
        },

        /***/
        "./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=custom&index=0&blockType=docs":
        /*!***********************************************************************************************!*\
          !*** ./src/components/NcPopoverMenu/NcPopoverMenu.vue?vue&type=custom&index=0&blockType=docs ***!
          \***********************************************************************************************/

        /***/
        function srcComponentsNcPopoverMenuNcPopoverMenuVueVueTypeCustomIndex0BlockTypeDocs() {
          /***/
        },

        /***/
        "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
        /*!********************************************************************!*\
          !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
          \********************************************************************/

        /***/
        function node_modulesVueLoaderLibRuntimeComponentNormalizerJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_436026__) {
          "use strict";

          __nested_webpack_require_436026__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_436026__.d(__webpack_exports__, {
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
        "./src/assets/status-icons/user-status-away.svg":
        /*!******************************************************!*\
          !*** ./src/assets/status-icons/user-status-away.svg ***!
          \******************************************************/

        /***/
        function srcAssetsStatusIconsUserStatusAwaySvg(module, __unused_webpack_exports, __nested_webpack_require_440226__) {
          "use strict";

          module.exports = __nested_webpack_require_440226__.p + "96293a957bef4e770995.svg";
          /***/
        },

        /***/
        "./src/assets/status-icons/user-status-dnd.svg":
        /*!*****************************************************!*\
          !*** ./src/assets/status-icons/user-status-dnd.svg ***!
          \*****************************************************/

        /***/
        function srcAssetsStatusIconsUserStatusDndSvg(module, __unused_webpack_exports, __nested_webpack_require_440755__) {
          "use strict";

          module.exports = __nested_webpack_require_440755__.p + "7794a610e9b72deb670f.svg";
          /***/
        },

        /***/
        "./src/assets/status-icons/user-status-online.svg":
        /*!********************************************************!*\
          !*** ./src/assets/status-icons/user-status-online.svg ***!
          \********************************************************/

        /***/
        function srcAssetsStatusIconsUserStatusOnlineSvg(module, __unused_webpack_exports, __nested_webpack_require_441299__) {
          "use strict";

          module.exports = __nested_webpack_require_441299__.p + "b247376f5974ca1c0738.svg";
          /***/
        },

        /***/
        "@nextcloud/auth":
        /*!**********************************!*\
          !*** external "@nextcloud/auth" ***!
          \**********************************/

        /***/
        function nextcloudAuth(module) {
          "use strict";

          module.exports = __webpack_require__(/*! @nextcloud/auth */ "../@nextcloud/nextcloud-vue/node_modules/@nextcloud/auth/dist/index.js");
          /***/
        },

        /***/
        "@nextcloud/axios":
        /*!***********************************!*\
          !*** external "@nextcloud/axios" ***!
          \***********************************/

        /***/
        function nextcloudAxios(module) {
          "use strict";

          module.exports = __webpack_require__(/*! @nextcloud/axios */ "../@nextcloud/nextcloud-vue/node_modules/@nextcloud/axios/dist/index.js");
          /***/
        },

        /***/
        "@nextcloud/browser-storage":
        /*!*********************************************!*\
          !*** external "@nextcloud/browser-storage" ***!
          \*********************************************/

        /***/
        function nextcloudBrowserStorage(module) {
          "use strict";

          module.exports = __webpack_require__(/*! @nextcloud/browser-storage */ "../@nextcloud/nextcloud-vue/node_modules/@nextcloud/browser-storage/dist/index.js");
          /***/
        },

        /***/
        "@nextcloud/capabilities":
        /*!******************************************!*\
          !*** external "@nextcloud/capabilities" ***!
          \******************************************/

        /***/
        function nextcloudCapabilities(module) {
          "use strict";

          module.exports = __webpack_require__(/*! @nextcloud/capabilities */ "../@nextcloud/nextcloud-vue/node_modules/@nextcloud/capabilities/dist/index.js");
          /***/
        },

        /***/
        "@nextcloud/event-bus":
        /*!***************************************!*\
          !*** external "@nextcloud/event-bus" ***!
          \***************************************/

        /***/
        function nextcloudEventBus(module) {
          "use strict";

          module.exports = __webpack_require__(/*! @nextcloud/event-bus */ "../@nextcloud/nextcloud-vue/node_modules/@nextcloud/event-bus/dist/index.js");
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
        "@nextcloud/router":
        /*!************************************!*\
          !*** external "@nextcloud/router" ***!
          \************************************/

        /***/
        function nextcloudRouter(module) {
          "use strict";

          module.exports = __webpack_require__(/*! @nextcloud/router */ "../@nextcloud/nextcloud-vue/node_modules/@nextcloud/router/dist/index.js");
          /***/
        },

        /***/
        "escape-html":
        /*!******************************!*\
          !*** external "escape-html" ***!
          \******************************/

        /***/
        function escapeHtml(module) {
          "use strict";

          module.exports = __webpack_require__(/*! escape-html */ "../@nextcloud/nextcloud-vue/node_modules/escape-html/index.js");
          /***/
        },

        /***/
        "floating-vue":
        /*!*******************************!*\
          !*** external "floating-vue" ***!
          \*******************************/

        /***/
        function floatingVue(module) {
          "use strict";

          module.exports = __webpack_require__(/*! floating-vue */ "../@nextcloud/nextcloud-vue/node_modules/floating-vue/dist/floating-vue.es.js");
          /***/
        },

        /***/
        "focus-trap":
        /*!*****************************!*\
          !*** external "focus-trap" ***!
          \*****************************/

        /***/
        function focusTrap(module) {
          "use strict";

          module.exports = __webpack_require__(/*! focus-trap */ "../@nextcloud/nextcloud-vue/node_modules/focus-trap/dist/focus-trap.esm.js");
          /***/
        },

        /***/
        "linkify-string":
        /*!*********************************!*\
          !*** external "linkify-string" ***!
          \*********************************/

        /***/
        function linkifyString(module) {
          "use strict";

          module.exports = __webpack_require__(/*! linkify-string */ "../@nextcloud/nextcloud-vue/node_modules/linkify-string/dist/linkify-string.module.js");
          /***/
        },

        /***/
        "md5":
        /*!**********************!*\
          !*** external "md5" ***!
          \**********************/

        /***/
        function md5(module) {
          "use strict";

          module.exports = __webpack_require__(/*! md5 */ "../@nextcloud/nextcloud-vue/node_modules/md5/md5.js");
          /***/
        },

        /***/
        "striptags":
        /*!****************************!*\
          !*** external "striptags" ***!
          \****************************/

        /***/
        function striptags(module) {
          "use strict";

          module.exports = __webpack_require__(/*! striptags */ "../@nextcloud/nextcloud-vue/node_modules/striptags/src/striptags.js");
          /***/
        },

        /***/
        "v-click-outside":
        /*!**********************************!*\
          !*** external "v-click-outside" ***!
          \**********************************/

        /***/
        function vClickOutside(module) {
          "use strict";

          module.exports = __webpack_require__(/*! v-click-outside */ "../@nextcloud/nextcloud-vue/node_modules/v-click-outside/dist/v-click-outside.umd.js");
          /***/
        },

        /***/
        "vue":
        /*!**********************!*\
          !*** external "vue" ***!
          \**********************/

        /***/
        function vue(module) {
          "use strict";

          module.exports = __webpack_require__(/*! vue */ "../@nextcloud/nextcloud-vue/node_modules/vue/dist/vue.runtime.common.js");
          /***/
        },

        /***/
        "vue-material-design-icons/DotsHorizontal.vue":
        /*!***************************************************************!*\
          !*** external "vue-material-design-icons/DotsHorizontal.vue" ***!
          \***************************************************************/

        /***/
        function vueMaterialDesignIconsDotsHorizontalVue(module) {
          "use strict";

          module.exports = __webpack_require__(/*! vue-material-design-icons/DotsHorizontal.vue */ "../@nextcloud/nextcloud-vue/node_modules/vue-material-design-icons/DotsHorizontal.vue");
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

      function __nested_webpack_require_447488__(moduleId) {
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

        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_447488__);
        /******/

        /******/
        // Return the exports of the module

        /******/


        return module.exports;
        /******/
      }
      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __nested_webpack_require_447488__.m = __webpack_modules__;
      /******/

      /************************************************************************/

      /******/

      /* webpack/runtime/compat get default export */

      /******/

      !function () {
        /******/
        // getDefaultExport function for compatibility with non-harmony modules

        /******/
        __nested_webpack_require_447488__.n = function (module) {
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

          __nested_webpack_require_447488__.d(getter, {
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
        __nested_webpack_require_447488__.d = function (exports, definition) {
          /******/
          for (var key in definition) {
            /******/
            if (__nested_webpack_require_447488__.o(definition, key) && !__nested_webpack_require_447488__.o(exports, key)) {
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
        __nested_webpack_require_447488__.o = function (obj, prop) {
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
        __nested_webpack_require_447488__.r = function (exports) {
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

      /* webpack/runtime/publicPath */

      /******/

      !function () {
        /******/
        __nested_webpack_require_447488__.p = "/dist/";
        /******/
      }();
      /******/

      /******/

      /* webpack/runtime/jsonp chunk loading */

      /******/

      !function () {
        /******/
        __nested_webpack_require_447488__.b = document.baseURI || self.location.href;
        /******/

        /******/
        // object to store loaded and loading chunks

        /******/
        // undefined = chunk not loaded, null = chunk preloaded/prefetched

        /******/
        // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded

        /******/

        var installedChunks = {
          /******/
          "Components/NcAvatar": 0
          /******/

        };
        /******/

        /******/
        // no chunk on demand loading

        /******/

        /******/
        // no prefetching

        /******/

        /******/
        // no preloaded

        /******/

        /******/
        // no HMR

        /******/

        /******/
        // no HMR manifest

        /******/

        /******/
        // no on chunks loaded

        /******/

        /******/
        // no jsonp function

        /******/
      }();
      /******/

      /******/

      /* webpack/runtime/nonce */

      /******/

      !function () {
        /******/
        __nested_webpack_require_447488__.nc = undefined;
        /******/
      }();
      /******/

      /************************************************************************/

      var __webpack_exports__ = {}; // This entry need to be wrapped in an IIFE because it need to be in strict mode.

      !function () {
        "use strict";
        /*!******************************************!*\
          !*** ./src/components/NcAvatar/index.js ***!
          \******************************************/

        __nested_webpack_require_447488__.r(__webpack_exports__);
        /* harmony import */


        var _NcAvatar_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_447488__(
        /*! ./NcAvatar.vue */
        "./src/components/NcAvatar/NcAvatar.vue");
        /**
         * @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>
         *
         * @author Julius Härtl <jus@bitgrid.net>
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


        __webpack_exports__["default"] = _NcAvatar_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
      }();
      /******/

      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ "./core/src/logger.js":
/*!****************************!*\
  !*** ./core/src/logger.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.js");
/**
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
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



var getLogger = function getLogger(user) {
  if (user === null) {
    return (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_1__.getLoggerBuilder)().setApp('core').build();
  }

  return (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_1__.getLoggerBuilder)().setApp('core').setUid(user.uid).build();
};

/* harmony default export */ __webpack_exports__["default"] = (getLogger((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)()));

/***/ }),

/***/ "./core/src/profile.js":
/*!*****************************!*\
  !*** ./core/src/profile.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.js");
/* harmony import */ var v_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! v-tooltip */ "./node_modules/v-tooltip/dist/v-tooltip.esm.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "./core/src/logger.js");
/* harmony import */ var _views_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/Profile */ "./core/src/views/Profile.vue");
/**
 * @copyright 2021, Christopher Ng <chrng8@gmail.com>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */






__webpack_require__.nc = btoa((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getRequestToken)());
vue__WEBPACK_IMPORTED_MODULE_5__["default"].use(v_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"]);
vue__WEBPACK_IMPORTED_MODULE_5__["default"].mixin({
  props: {
    logger: _logger__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  methods: {
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate
  }
});
var View = vue__WEBPACK_IMPORTED_MODULE_5__["default"].extend(_views_Profile__WEBPACK_IMPORTED_MODULE_4__["default"]);
window.addEventListener('DOMContentLoaded', function () {
  new View().$mount('#vue-profile');
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/Profile/PrimaryActionButton.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/Profile/PrimaryActionButton.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: 'PrimaryActionButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    target: {
      type: String,
      required: true,
      validator: function validator(value) {
        return ['_self', '_blank', '_parent', '_top'].includes(value);
      }
    }
  },
  computed: {
    colorPrimaryText: function colorPrimaryText() {
      // For some reason the returned string has prepended whitespace
      return getComputedStyle(document.body).getPropertyValue('--color-primary-text').trim();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/Profile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/Profile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.es.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAvatar */ "../@nextcloud/nextcloud-vue/dist/Components/NcAvatar.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAvatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcAvatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActions */ "../@nextcloud/nextcloud-vue/dist/Components/NcActions.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcActions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionLink */ "../@nextcloud/nextcloud-vue/dist/Components/NcActionLink.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionLink__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcActionLink__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue_material_design_icons_MapMarker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-material-design-icons/MapMarker */ "./node_modules/vue-material-design-icons/MapMarker.vue");
/* harmony import */ var vue_material_design_icons_Pencil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-material-design-icons/Pencil */ "./node_modules/vue-material-design-icons/Pencil.vue");
/* harmony import */ var vue_material_design_icons_Account__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-material-design-icons/Account */ "./node_modules/vue-material-design-icons/Account.vue");
/* harmony import */ var _components_Profile_PrimaryActionButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Profile/PrimaryActionButton */ "./core/src/components/Profile/PrimaryActionButton.vue");
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












var status = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__.loadState)('core', 'status', {});

var _loadState = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__.loadState)('core', 'profileParameters', {
  userId: null,
  displayname: null,
  address: null,
  organisation: null,
  role: null,
  headline: null,
  biography: null,
  actions: [],
  isUserAvatarVisible: false
}),
    userId = _loadState.userId,
    displayname = _loadState.displayname,
    address = _loadState.address,
    organisation = _loadState.organisation,
    role = _loadState.role,
    headline = _loadState.headline,
    biography = _loadState.biography,
    actions = _loadState.actions,
    isUserAvatarVisible = _loadState.isUserAvatarVisible;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Profile',
  components: {
    AccountIcon: vue_material_design_icons_Account__WEBPACK_IMPORTED_MODULE_10__["default"],
    NcActionLink: (_nextcloud_vue_dist_Components_NcActionLink__WEBPACK_IMPORTED_MODULE_7___default()),
    NcActions: (_nextcloud_vue_dist_Components_NcActions__WEBPACK_IMPORTED_MODULE_6___default()),
    NcAvatar: (_nextcloud_vue_dist_Components_NcAvatar__WEBPACK_IMPORTED_MODULE_5___default()),
    MapMarkerIcon: vue_material_design_icons_MapMarker__WEBPACK_IMPORTED_MODULE_8__["default"],
    PencilIcon: vue_material_design_icons_Pencil__WEBPACK_IMPORTED_MODULE_9__["default"],
    PrimaryActionButton: _components_Profile_PrimaryActionButton__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  data: function data() {
    return {
      status: status,
      userId: userId,
      displayname: displayname,
      address: address,
      organisation: organisation,
      role: role,
      headline: headline,
      biography: biography,
      actions: actions,
      isUserAvatarVisible: isUserAvatarVisible
    };
  },
  computed: {
    isCurrentUser: function isCurrentUser() {
      var _getCurrentUser;

      return ((_getCurrentUser = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)()) === null || _getCurrentUser === void 0 ? void 0 : _getCurrentUser.uid) === this.userId;
    },
    allActions: function allActions() {
      return this.actions;
    },
    primaryAction: function primaryAction() {
      if (this.allActions.length) {
        return this.allActions[0];
      }

      return null;
    },
    middleActions: function middleActions() {
      if (this.allActions.slice(1, 4).length) {
        return this.allActions.slice(1, 4);
      }

      return null;
    },
    otherActions: function otherActions() {
      if (this.allActions.slice(4).length) {
        return this.allActions.slice(4);
      }

      return null;
    },
    settingsUrl: function settingsUrl() {
      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_3__.generateUrl)('/settings/user');
    },
    colorMainBackground: function colorMainBackground() {
      // For some reason the returned string has prepended whitespace
      return getComputedStyle(document.body).getPropertyValue('--color-main-background').trim();
    },
    emptyProfileMessage: function emptyProfileMessage() {
      return this.isCurrentUser ? t('core', 'You have not added any info yet') : t('core', '{user} has not added any info yet', {
        user: this.displayname || this.userId
      });
    }
  },
  mounted: function mounted() {
    // Set the user's displayname or userId in the page title and preserve the default title of "Nextcloud" at the end
    document.title = "".concat(this.displayname || this.userId, " - ").concat(document.title);
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__.subscribe)('user_status:status.updated', this.handleStatusUpdate);
  },
  beforeDestroy: function beforeDestroy() {
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__.unsubscribe)('user_status:status.updated', this.handleStatusUpdate);
  },
  methods: {
    handleStatusUpdate: function handleStatusUpdate(status) {
      if (this.isCurrentUser && status.userId === this.userId) {
        this.status = status;
      }
    },
    openStatusModal: function openStatusModal() {
      var statusMenuItem = document.querySelector('.user-status-menu-item__toggle'); // Changing the user status is only enabled if you are the current user

      if (this.isCurrentUser) {
        if (statusMenuItem) {
          statusMenuItem.click();
        } else {
          (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_4__.showError)(t('core', 'Error opening the user status modal, try hard refreshing the page'));
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/Profile/PrimaryActionButton.vue?vue&type=style&index=0&id=cdc2cc30&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/Profile/PrimaryActionButton.vue?vue&type=style&index=0&id=cdc2cc30&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".profile__primary-action-button[data-v-cdc2cc30] {\n  font-size: var(--default-font-size);\n  font-weight: bold;\n  width: 188px;\n  height: 44px;\n  padding: 0 16px;\n  line-height: 44px;\n  text-align: center;\n  border-radius: var(--border-radius-pill);\n  color: var(--color-primary-text);\n  background-color: var(--color-primary-element);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.profile__primary-action-button .icon[data-v-cdc2cc30] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-bottom: 2px;\n  margin-right: 4px;\n}\n.profile__primary-action-button .icon.icon-invert[data-v-cdc2cc30] {\n  filter: invert(1);\n}\n.profile__primary-action-button[data-v-cdc2cc30]:hover, .profile__primary-action-button[data-v-cdc2cc30]:focus, .profile__primary-action-button[data-v-cdc2cc30]:active {\n  background-color: var(--color-primary-element-light);\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/Profile.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/Profile.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#header {\n  background-color: transparent !important;\n  background-image: none !important;\n}\n#content {\n  padding-top: 0px;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/Profile.vue?vue&type=style&index=1&id=8ecdffca&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/Profile.vue?vue&type=style&index=1&id=8ecdffca&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".profile[data-v-8ecdffca] {\n  width: 100%;\n}\n.profile__header[data-v-8ecdffca] {\n  position: sticky;\n  height: 190px;\n  top: -40px;\n  background-color: var(--color-main-background-blur);\n  backdrop-filter: var(--filter-background-blur);\n  -webkit-backdrop-filter: var(--filter-background-blur);\n}\n.profile__header__container[data-v-8ecdffca] {\n  align-self: flex-end;\n  width: 100%;\n  max-width: 1024px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-rows: max-content max-content;\n  grid-template-columns: 240px 1fr;\n  justify-content: center;\n}\n.profile__header__container__placeholder[data-v-8ecdffca] {\n  grid-row: 1/3;\n}\n.profile__header__container__displayname[data-v-8ecdffca], .profile__header__container__status-text[data-v-8ecdffca] {\n  color: var(--color-main-text);\n}\n.profile__header__container__displayname[data-v-8ecdffca] {\n  width: 640px;\n  height: 45px;\n  margin-top: 128px;\n  margin-bottom: 0;\n  font-size: 30px;\n  display: flex;\n  align-items: center;\n  cursor: text;\n}\n.profile__header__container__displayname[data-v-8ecdffca]:not(:last-child) {\n  margin-top: 100px;\n  margin-bottom: 4px;\n}\n.profile__header__container__edit-button[data-v-8ecdffca] {\n  border: none;\n  margin-left: 18px;\n  margin-top: 2px;\n  color: var(--color-primary-element);\n  background-color: var(--color-primary-text);\n  box-shadow: 0 0 0 2px var(--color-primary-text);\n  border-radius: var(--border-radius-pill);\n  padding: 0 18px;\n  font-size: var(--default-font-size);\n  height: 44px;\n  line-height: 44px;\n  font-weight: bold;\n}\n.profile__header__container__edit-button[data-v-8ecdffca]:hover, .profile__header__container__edit-button[data-v-8ecdffca]:focus, .profile__header__container__edit-button[data-v-8ecdffca]:active {\n  color: var(--color-primary-element);\n  background-color: var(--color-primary-element-light);\n}\n.profile__header__container__edit-button .pencil-icon[data-v-8ecdffca] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-top: 2px;\n}\n.profile__header__container__status-text[data-v-8ecdffca] {\n  width: max-content;\n  max-width: 640px;\n  padding: 5px 10px;\n  margin-left: -12px;\n  margin-top: 2px;\n}\n.profile__header__container__status-text.interactive[data-v-8ecdffca] {\n  cursor: pointer;\n}\n.profile__header__container__status-text.interactive[data-v-8ecdffca]:hover, .profile__header__container__status-text.interactive[data-v-8ecdffca]:focus, .profile__header__container__status-text.interactive[data-v-8ecdffca]:active {\n  background-color: var(--color-main-background);\n  color: var(--color-main-text);\n  border-radius: var(--border-radius-pill);\n  font-weight: bold;\n  box-shadow: 0 3px 6px var(--color-box-shadow);\n}\n.profile__sidebar[data-v-8ecdffca] {\n  position: sticky;\n  top: var(--header-height);\n  align-self: flex-start;\n  padding-top: 20px;\n  min-width: 220px;\n  margin: -150px 20px 0 0;\n}\n.profile__sidebar[data-v-8ecdffca] .avatar.avatardiv, .profile__sidebar h2[data-v-8ecdffca] {\n  text-align: center;\n  margin: auto;\n  display: block;\n  padding: 8px;\n}\n.profile__sidebar[data-v-8ecdffca] .avatar.avatardiv:not(.avatardiv--unknown) {\n  background-color: var(--color-main-background) !important;\n  box-shadow: none;\n}\n.profile__sidebar[data-v-8ecdffca] .avatar.avatardiv .avatardiv__user-status {\n  right: 14px;\n  bottom: 14px;\n  width: 34px;\n  height: 34px;\n  background-size: 28px;\n  border: none;\n  background-color: var(--color-main-background);\n  line-height: 34px;\n  font-size: 20px;\n}\n.profile__sidebar[data-v-8ecdffca] .avatar.interactive.avatardiv .avatardiv__user-status {\n  cursor: pointer;\n}\n.profile__sidebar[data-v-8ecdffca] .avatar.interactive.avatardiv .avatardiv__user-status:hover, .profile__sidebar[data-v-8ecdffca] .avatar.interactive.avatardiv .avatardiv__user-status:focus, .profile__sidebar[data-v-8ecdffca] .avatar.interactive.avatardiv .avatardiv__user-status:active {\n  box-shadow: 0 3px 6px var(--color-box-shadow);\n}\n.profile__wrapper[data-v-8ecdffca] {\n  background-color: var(--color-main-background);\n  min-height: 100%;\n}\n.profile__content[data-v-8ecdffca] {\n  max-width: 1024px;\n  margin: 0 auto;\n  display: flex;\n  width: 100%;\n}\n.profile__blocks[data-v-8ecdffca] {\n  margin: 18px 0 80px 0;\n  display: grid;\n  gap: 16px 0;\n  width: 640px;\n}\n.profile__blocks p[data-v-8ecdffca], .profile__blocks h3[data-v-8ecdffca] {\n  overflow-wrap: anywhere;\n}\n.profile__blocks-details[data-v-8ecdffca] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px 0;\n}\n.profile__blocks-details .detail[data-v-8ecdffca] {\n  display: inline-block;\n  color: var(--color-text-maxcontrast);\n}\n.profile__blocks-details .detail p .map-icon[data-v-8ecdffca] {\n  display: inline-block;\n  vertical-align: middle;\n}\n.profile__blocks-headline[data-v-8ecdffca] {\n  margin-top: 10px;\n}\n.profile__blocks-headline h3[data-v-8ecdffca] {\n  font-weight: bold;\n  font-size: 20px;\n  margin: 0;\n}\n.profile__blocks-biography[data-v-8ecdffca] {\n  white-space: pre-line;\n}\n.profile__blocks h3[data-v-8ecdffca], .profile__blocks p[data-v-8ecdffca] {\n  cursor: text;\n}\n.profile__blocks-empty-info[data-v-8ecdffca] {\n  margin-top: 80px;\n  margin-right: 100px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n.profile__blocks-empty-info h3[data-v-8ecdffca] {\n  font-weight: bold;\n  font-size: 18px;\n  margin: 8px 0;\n}\n@media only screen and (max-width: 1024px) {\n.profile__header[data-v-8ecdffca] {\n    height: 250px;\n    position: unset;\n}\n.profile__header__container[data-v-8ecdffca] {\n    grid-template-columns: unset;\n}\n.profile__header__container__displayname[data-v-8ecdffca] {\n    margin: 100px 20px 0px;\n    width: unset;\n    display: unset;\n    text-align: center;\n}\n.profile__header__container__edit-button[data-v-8ecdffca] {\n    width: fit-content;\n    display: block;\n    margin: 30px auto;\n}\n.profile__content[data-v-8ecdffca] {\n    display: block;\n}\n.profile__blocks[data-v-8ecdffca] {\n    width: unset;\n    max-width: 600px;\n    margin: 0 auto;\n    padding: 20px 50px 50px 50px;\n}\n.profile__blocks-empty-info[data-v-8ecdffca] {\n    margin: 0;\n}\n.profile__sidebar[data-v-8ecdffca] {\n    margin: unset;\n    position: unset;\n}\n}\n.user-actions[data-v-8ecdffca] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px 0;\n  margin-top: 20px;\n}\n.user-actions__primary[data-v-8ecdffca] {\n  margin: 0 auto;\n}\n.user-actions__other[data-v-8ecdffca] {\n  display: flex;\n  justify-content: center;\n  gap: 0 4px;\n}\n.user-actions__other a[data-v-8ecdffca] {\n  filter: var(--background-invert-if-dark);\n}\n.icon-invert[data-v-8ecdffca] .action-link__icon {\n  filter: invert(1);\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/Profile/PrimaryActionButton.vue?vue&type=style&index=0&id=cdc2cc30&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/Profile/PrimaryActionButton.vue?vue&type=style&index=0&id=cdc2cc30&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryActionButton_vue_vue_type_style_index_0_id_cdc2cc30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PrimaryActionButton.vue?vue&type=style&index=0&id=cdc2cc30&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/Profile/PrimaryActionButton.vue?vue&type=style&index=0&id=cdc2cc30&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryActionButton_vue_vue_type_style_index_0_id_cdc2cc30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryActionButton_vue_vue_type_style_index_0_id_cdc2cc30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryActionButton_vue_vue_type_style_index_0_id_cdc2cc30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryActionButton_vue_vue_type_style_index_0_id_cdc2cc30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/Profile.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/Profile.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/Profile.vue?vue&type=style&index=0&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/Profile.vue?vue&type=style&index=1&id=8ecdffca&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/Profile.vue?vue&type=style&index=1&id=8ecdffca&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_1_id_8ecdffca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=style&index=1&id=8ecdffca&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/Profile.vue?vue&type=style&index=1&id=8ecdffca&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_1_id_8ecdffca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_1_id_8ecdffca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_1_id_8ecdffca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_1_id_8ecdffca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./core/src/components/Profile/PrimaryActionButton.vue":
/*!*************************************************************!*\
  !*** ./core/src/components/Profile/PrimaryActionButton.vue ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrimaryActionButton_vue_vue_type_template_id_cdc2cc30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrimaryActionButton.vue?vue&type=template&id=cdc2cc30&scoped=true& */ "./core/src/components/Profile/PrimaryActionButton.vue?vue&type=template&id=cdc2cc30&scoped=true&");
/* harmony import */ var _PrimaryActionButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrimaryActionButton.vue?vue&type=script&lang=js& */ "./core/src/components/Profile/PrimaryActionButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _PrimaryActionButton_vue_vue_type_style_index_0_id_cdc2cc30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrimaryActionButton.vue?vue&type=style&index=0&id=cdc2cc30&lang=scss&scoped=true& */ "./core/src/components/Profile/PrimaryActionButton.vue?vue&type=style&index=0&id=cdc2cc30&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PrimaryActionButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PrimaryActionButton_vue_vue_type_template_id_cdc2cc30_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PrimaryActionButton_vue_vue_type_template_id_cdc2cc30_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "cdc2cc30",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "core/src/components/Profile/PrimaryActionButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./core/src/views/Profile.vue":
/*!************************************!*\
  !*** ./core/src/views/Profile.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_8ecdffca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=8ecdffca&scoped=true& */ "./core/src/views/Profile.vue?vue&type=template&id=8ecdffca&scoped=true&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./core/src/views/Profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.vue?vue&type=style&index=0&lang=scss& */ "./core/src/views/Profile.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Profile_vue_vue_type_style_index_1_id_8ecdffca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Profile.vue?vue&type=style&index=1&id=8ecdffca&lang=scss&scoped=true& */ "./core/src/views/Profile.vue?vue&type=style&index=1&id=8ecdffca&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_8ecdffca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Profile_vue_vue_type_template_id_8ecdffca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8ecdffca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "core/src/views/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./core/src/components/Profile/PrimaryActionButton.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./core/src/components/Profile/PrimaryActionButton.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryActionButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PrimaryActionButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/Profile/PrimaryActionButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryActionButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./core/src/views/Profile.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./core/src/views/Profile.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/Profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./core/src/components/Profile/PrimaryActionButton.vue?vue&type=style&index=0&id=cdc2cc30&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./core/src/components/Profile/PrimaryActionButton.vue?vue&type=style&index=0&id=cdc2cc30&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryActionButton_vue_vue_type_style_index_0_id_cdc2cc30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PrimaryActionButton.vue?vue&type=style&index=0&id=cdc2cc30&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/Profile/PrimaryActionButton.vue?vue&type=style&index=0&id=cdc2cc30&lang=scss&scoped=true&");


/***/ }),

/***/ "./core/src/views/Profile.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************!*\
  !*** ./core/src/views/Profile.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/Profile.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./core/src/views/Profile.vue?vue&type=style&index=1&id=8ecdffca&lang=scss&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./core/src/views/Profile.vue?vue&type=style&index=1&id=8ecdffca&lang=scss&scoped=true& ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_1_id_8ecdffca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=style&index=1&id=8ecdffca&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/Profile.vue?vue&type=style&index=1&id=8ecdffca&lang=scss&scoped=true&");


/***/ }),

/***/ "./core/src/components/Profile/PrimaryActionButton.vue?vue&type=template&id=cdc2cc30&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./core/src/components/Profile/PrimaryActionButton.vue?vue&type=template&id=cdc2cc30&scoped=true& ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryActionButton_vue_vue_type_template_id_cdc2cc30_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryActionButton_vue_vue_type_template_id_cdc2cc30_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrimaryActionButton_vue_vue_type_template_id_cdc2cc30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PrimaryActionButton.vue?vue&type=template&id=cdc2cc30&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/Profile/PrimaryActionButton.vue?vue&type=template&id=cdc2cc30&scoped=true&");


/***/ }),

/***/ "./core/src/views/Profile.vue?vue&type=template&id=8ecdffca&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./core/src/views/Profile.vue?vue&type=template&id=8ecdffca&scoped=true& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_8ecdffca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_8ecdffca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_8ecdffca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=template&id=8ecdffca&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/Profile.vue?vue&type=template&id=8ecdffca&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/Profile/PrimaryActionButton.vue?vue&type=template&id=cdc2cc30&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/Profile/PrimaryActionButton.vue?vue&type=template&id=cdc2cc30&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    "a",
    _vm._g(
      {
        staticClass: "profile__primary-action-button",
        class: { disabled: _vm.disabled },
        attrs: {
          href: _vm.href,
          target: _vm.target,
          rel: "noopener noreferrer nofollow",
        },
      },
      _vm.$listeners
    ),
    [
      _c("img", {
        staticClass: "icon",
        class: [
          _vm.icon,
          { "icon-invert": _vm.colorPrimaryText === "#ffffff" },
        ],
        attrs: { src: _vm.icon },
      }),
      _vm._v(" "),
      _vm._t("default"),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/Profile.vue?vue&type=template&id=8ecdffca&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/Profile.vue?vue&type=template&id=8ecdffca&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "profile" }, [
    _c("div", { staticClass: "profile__header" }, [
      _c("div", { staticClass: "profile__header__container" }, [
        _c("div", { staticClass: "profile__header__container__placeholder" }),
        _vm._v(" "),
        _c("h2", { staticClass: "profile__header__container__displayname" }, [
          _vm._v(
            "\n\t\t\t\t" + _vm._s(_vm.displayname || _vm.userId) + "\n\t\t\t\t"
          ),
          _vm.isCurrentUser
            ? _c(
                "a",
                {
                  staticClass:
                    "primary profile__header__container__edit-button",
                  attrs: { href: _vm.settingsUrl },
                },
                [
                  _c("PencilIcon", {
                    staticClass: "pencil-icon",
                    attrs: { size: 16 },
                  }),
                  _vm._v(
                    "\n\t\t\t\t\t" +
                      _vm._s(_vm.t("core", "Edit Profile")) +
                      "\n\t\t\t\t"
                  ),
                ],
                1
              )
            : _vm._e(),
        ]),
        _vm._v(" "),
        _vm.status.icon || _vm.status.message
          ? _c(
              "div",
              {
                staticClass: "profile__header__container__status-text",
                class: { interactive: _vm.isCurrentUser },
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    $event.stopPropagation()
                    return _vm.openStatusModal.apply(null, arguments)
                  },
                },
              },
              [
                _vm._v(
                  "\n\t\t\t\t" +
                    _vm._s(_vm.status.icon) +
                    " " +
                    _vm._s(_vm.status.message) +
                    "\n\t\t\t"
                ),
              ]
            )
          : _vm._e(),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "profile__wrapper" }, [
      _c("div", { staticClass: "profile__content" }, [
        _c(
          "div",
          { staticClass: "profile__sidebar" },
          [
            _c("NcAvatar", {
              staticClass: "avatar",
              class: { interactive: _vm.isCurrentUser },
              attrs: {
                user: _vm.userId,
                size: 180,
                "show-user-status": true,
                "show-user-status-compact": false,
                "disable-menu": true,
                "disable-tooltip": true,
                "is-no-user": !_vm.isUserAvatarVisible,
              },
              nativeOn: {
                click: function ($event) {
                  $event.preventDefault()
                  $event.stopPropagation()
                  return _vm.openStatusModal.apply(null, arguments)
                },
              },
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "user-actions" },
              [
                _vm.primaryAction
                  ? _c(
                      "PrimaryActionButton",
                      {
                        staticClass: "user-actions__primary",
                        attrs: {
                          href: _vm.primaryAction.target,
                          icon: _vm.primaryAction.icon,
                          target:
                            _vm.primaryAction.id === "phone"
                              ? "_self"
                              : "_blank",
                        },
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t" +
                            _vm._s(_vm.primaryAction.title) +
                            "\n\t\t\t\t\t"
                        ),
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "user-actions__other" },
                  [
                    _vm._l(_vm.middleActions, function (action) {
                      return _c(
                        "NcActions",
                        {
                          key: action.id,
                          staticStyle: {
                            "background-position": "14px center",
                            "background-size": "16px",
                            "background-repeat": "no-repeat",
                          },
                          style: Object.assign(
                            {},
                            { backgroundImage: "url(" + action.icon + ")" },
                            _vm.colorMainBackground === "#181818" && {
                              filter: "invert(1)",
                            }
                          ),
                          attrs: { "default-icon": action.icon },
                        },
                        [
                          _c(
                            "NcActionLink",
                            {
                              attrs: {
                                "close-after-click": true,
                                icon: action.icon,
                                href: action.target,
                                target:
                                  action.id === "phone" ? "_self" : "_blank",
                              },
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t" +
                                  _vm._s(action.title) +
                                  "\n\t\t\t\t\t\t\t"
                              ),
                            ]
                          ),
                        ],
                        1
                      )
                    }),
                    _vm._v(" "),
                    _vm.otherActions
                      ? [
                          _c(
                            "NcActions",
                            { attrs: { "force-menu": true } },
                            _vm._l(_vm.otherActions, function (action) {
                              return _c(
                                "NcActionLink",
                                {
                                  key: action.id,
                                  class: {
                                    "icon-invert":
                                      _vm.colorMainBackground === "#181818",
                                  },
                                  attrs: {
                                    "close-after-click": true,
                                    icon: action.icon,
                                    href: action.target,
                                    target:
                                      action.id === "phone"
                                        ? "_self"
                                        : "_blank",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\t" +
                                      _vm._s(action.title) +
                                      "\n\t\t\t\t\t\t\t\t"
                                  ),
                                ]
                              )
                            }),
                            1
                          ),
                        ]
                      : _vm._e(),
                  ],
                  2
                ),
              ],
              1
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "profile__blocks" },
          [
            _vm.organisation || _vm.role || _vm.address
              ? _c("div", { staticClass: "profile__blocks-details" }, [
                  _vm.organisation || _vm.role
                    ? _c("div", { staticClass: "detail" }, [
                        _c("p", [
                          _vm._v(_vm._s(_vm.organisation) + " "),
                          _vm.organisation && _vm.role
                            ? _c("span", [_vm._v("•")])
                            : _vm._e(),
                          _vm._v(" " + _vm._s(_vm.role)),
                        ]),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.address
                    ? _c("div", { staticClass: "detail" }, [
                        _c(
                          "p",
                          [
                            _c("MapMarkerIcon", {
                              staticClass: "map-icon",
                              attrs: { size: 16 },
                            }),
                            _vm._v(
                              "\n\t\t\t\t\t\t\t" +
                                _vm._s(_vm.address) +
                                "\n\t\t\t\t\t\t"
                            ),
                          ],
                          1
                        ),
                      ])
                    : _vm._e(),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.headline || _vm.biography
              ? [
                  _vm.headline
                    ? _c("div", { staticClass: "profile__blocks-headline" }, [
                        _c("h3", [_vm._v(_vm._s(_vm.headline))]),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.biography
                    ? _c("div", { staticClass: "profile__blocks-biography" }, [
                        _c("p", [_vm._v(_vm._s(_vm.biography))]),
                      ])
                    : _vm._e(),
                ]
              : [
                  _c(
                    "div",
                    { staticClass: "profile__blocks-empty-info" },
                    [
                      _c("AccountIcon", {
                        attrs: {
                          size: 60,
                          "fill-color": "var(--color-text-maxcontrast)",
                        },
                      }),
                      _vm._v(" "),
                      _c("h3", [_vm._v(_vm._s(_vm.emptyProfileMessage))]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          _vm._s(
                            _vm.t(
                              "core",
                              "The headline and about sections will show up here"
                            )
                          )
                        ),
                      ]),
                    ],
                    1
                  ),
                ],
          ],
          2
        ),
      ]),
    ]),
  ])
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
/******/ 			"core-profile": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], function() { return __webpack_require__("./core/src/profile.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=core-profile.js.map?v=0a25fd22f2c9f4f49a9a