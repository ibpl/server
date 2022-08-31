(self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || []).push([["_nextcloud_nextcloud-vue_dist_Components_NcModal_js"],{

/***/ "../@nextcloud/nextcloud-vue/dist/Components/NcModal.js":
/*!**************************************************************!*\
  !*** ../@nextcloud/nextcloud-vue/dist/Components/NcModal.js ***!
  \**************************************************************/
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
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcActionsNcActionsVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_2021__) {
          "use strict";

          __nested_webpack_require_2021__.r(__webpack_exports__);
          /* harmony import */


          var _NcButton_index_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_2021__(
          /*! ../NcButton/index.js */
          "./src/components/NcButton/index.js");
          /* harmony import */


          var _NcPopover_index_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_2021__(
          /*! ../NcPopover/index.js */
          "./src/components/NcPopover/index.js");
          /* harmony import */


          var _directives_Tooltip_index_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_2021__(
          /*! ../../directives/Tooltip/index.js */
          "./src/directives/Tooltip/index.js");
          /* harmony import */


          var _utils_GenRandomId_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_2021__(
          /*! ../../utils/GenRandomId.js */
          "./src/utils/GenRandomId.js");
          /* harmony import */


          var _l10n_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_2021__(
          /*! ../../l10n.js */
          "./src/l10n.js");
          /* harmony import */


          var vue__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_2021__(
          /*! vue */
          "vue");
          /* harmony import */


          var vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_2021__.n(vue__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var vue_material_design_icons_DotsHorizontal_vue__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_2021__(
          /*! vue-material-design-icons/DotsHorizontal.vue */
          "vue-material-design-icons/DotsHorizontal.vue");
          /* harmony import */


          var vue_material_design_icons_DotsHorizontal_vue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__nested_webpack_require_2021__.n(vue_material_design_icons_DotsHorizontal_vue__WEBPACK_IMPORTED_MODULE_6__);

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
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcButtonNcButtonVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_32702__) {
          "use strict";

          __nested_webpack_require_32702__.r(__webpack_exports__);

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
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcModal/NcModal.vue?vue&type=script&lang=js&":
        /*!*************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcModal/NcModal.vue?vue&type=script&lang=js& ***!
          \*************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcModalNcModalVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_43489__) {
          "use strict";

          __nested_webpack_require_43489__.r(__webpack_exports__);
          /* harmony import */


          var _NcActions_index_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_43489__(
          /*! ../NcActions/index.js */
          "./src/components/NcActions/index.js");
          /* harmony import */


          var _directives_Tooltip_index_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_43489__(
          /*! ../../directives/Tooltip/index.js */
          "./src/directives/Tooltip/index.js");
          /* harmony import */


          var _mixins_l10n_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_43489__(
          /*! ../../mixins/l10n.js */
          "./src/mixins/l10n.js");
          /* harmony import */


          var _utils_Timer_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_43489__(
          /*! ../../utils/Timer.js */
          "./src/utils/Timer.js");
          /* harmony import */


          var _l10n_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_43489__(
          /*! ../../l10n.js */
          "./src/l10n.js");
          /* harmony import */


          var _components_NcButton_index_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_43489__(
          /*! ../../components/NcButton/index.js */
          "./src/components/NcButton/index.js");
          /* harmony import */


          var _utils_GenRandomId_js__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_43489__(
          /*! ../../utils/GenRandomId.js */
          "./src/utils/GenRandomId.js");
          /* harmony import */


          var vue_material_design_icons_ChevronLeft_vue__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_43489__(
          /*! vue-material-design-icons/ChevronLeft.vue */
          "vue-material-design-icons/ChevronLeft.vue");
          /* harmony import */


          var vue_material_design_icons_ChevronLeft_vue__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__nested_webpack_require_43489__.n(vue_material_design_icons_ChevronLeft_vue__WEBPACK_IMPORTED_MODULE_7__);
          /* harmony import */


          var vue_material_design_icons_ChevronRight_vue__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_43489__(
          /*! vue-material-design-icons/ChevronRight.vue */
          "vue-material-design-icons/ChevronRight.vue");
          /* harmony import */


          var vue_material_design_icons_ChevronRight_vue__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__nested_webpack_require_43489__.n(vue_material_design_icons_ChevronRight_vue__WEBPACK_IMPORTED_MODULE_8__);
          /* harmony import */


          var vue_material_design_icons_Close_vue__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_43489__(
          /*! vue-material-design-icons/Close.vue */
          "vue-material-design-icons/Close.vue");
          /* harmony import */


          var vue_material_design_icons_Close_vue__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__nested_webpack_require_43489__.n(vue_material_design_icons_Close_vue__WEBPACK_IMPORTED_MODULE_9__);
          /* harmony import */


          var vue_material_design_icons_Pause_vue__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_43489__(
          /*! vue-material-design-icons/Pause.vue */
          "vue-material-design-icons/Pause.vue");
          /* harmony import */


          var vue_material_design_icons_Pause_vue__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__nested_webpack_require_43489__.n(vue_material_design_icons_Pause_vue__WEBPACK_IMPORTED_MODULE_10__);
          /* harmony import */


          var vue_material_design_icons_Play_vue__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_43489__(
          /*! vue-material-design-icons/Play.vue */
          "vue-material-design-icons/Play.vue");
          /* harmony import */


          var vue_material_design_icons_Play_vue__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__nested_webpack_require_43489__.n(vue_material_design_icons_Play_vue__WEBPACK_IMPORTED_MODULE_11__);
          /* harmony import */


          var hammerjs__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_43489__(
          /*! hammerjs */
          "hammerjs");
          /* harmony import */


          var hammerjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__nested_webpack_require_43489__.n(hammerjs__WEBPACK_IMPORTED_MODULE_12__);
          /* harmony import */


          var focus_trap__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_43489__(
          /*! focus-trap */
          "focus-trap");
          /* harmony import */


          var focus_trap__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__nested_webpack_require_43489__.n(focus_trap__WEBPACK_IMPORTED_MODULE_13__);

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
          /* harmony default export */


          __webpack_exports__["default"] = {
            name: 'NcModal',
            components: {
              NcActions: _NcActions_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
              ChevronLeft: vue_material_design_icons_ChevronLeft_vue__WEBPACK_IMPORTED_MODULE_7___default(),
              ChevronRight: vue_material_design_icons_ChevronRight_vue__WEBPACK_IMPORTED_MODULE_8___default(),
              Close: vue_material_design_icons_Close_vue__WEBPACK_IMPORTED_MODULE_9___default(),
              Pause: vue_material_design_icons_Pause_vue__WEBPACK_IMPORTED_MODULE_10___default(),
              Play: vue_material_design_icons_Play_vue__WEBPACK_IMPORTED_MODULE_11___default(),
              NcButton: _components_NcButton_index_js__WEBPACK_IMPORTED_MODULE_5__["default"]
            },
            directives: {
              tooltip: _directives_Tooltip_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]
            },
            mixins: [_mixins_l10n_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
            props: {
              /**
               * Title to be shown with the modal
               */
              title: {
                type: String,
                default: ''
              },

              /**
               * Declare if a previous slide is available
               */
              hasPrevious: {
                type: Boolean,
                default: false
              },

              /**
               * Declare if a next slide is available
               */
              hasNext: {
                type: Boolean,
                default: false
              },

              /**
               * Declare if hiding the modal should be animated
               */
              outTransition: {
                type: Boolean,
                default: false
              },

              /**
               * Declare if the slideshow functionality should be enabled
               */
              enableSlideshow: {
                type: Boolean,
                default: false
              },

              /**
               * Declare the slide interval
               */
              slideshowDelay: {
                type: Number,
                default: 5000
              },

              /**
               * Allow to pause an ongoing slideshow
               */
              slideshowPaused: {
                type: Boolean,
                default: false
              },

              /**
               * Enable swipe between slides
               */
              enableSwipe: {
                type: Boolean,
                default: true
              },
              spreadNavigation: {
                type: Boolean,
                default: false
              },

              /**
               * Defines the modal size.
               * Default is 'normal'.
               * Available are 'small', 'normal', 'large' and 'full'.
               * All sizes except 'small' change automatically to full-screen on mobile.
               */
              size: {
                type: String,
                default: 'normal',
                validator: function validator(size) {
                  return ['small', 'normal', 'large', 'full'].includes(size);
                }
              },

              /**
               * Declare if the modal can be closed
               */
              canClose: {
                type: Boolean,
                default: true
              },

              /** Makes the modal backdrop black if true  */
              dark: {
                type: Boolean,
                default: false
              },

              /**
               * Selector for the modal container
               */
              container: {
                type: String,
                default: 'body'
              },

              /**
               * Pass in false if you want the modal 'close' button to be displayed
               * outside the modal boundaries, in the top right corner of the window
               */
              closeButtonContained: {
                type: Boolean,
                default: true
              },

              /**
               * Additional elements to add to the focus trap
               */
              additionalTrapElements: {
                type: Array,
                default: function _default() {
                  return [];
                }
              },

              /**
               * Display x items inline
               *
               * @see Actions component usage
               */
              inlineActions: {
                type: Number,
                default: 0
              }
            },
            emits: ['previous', 'next', 'close'],
            data: function data() {
              return {
                mc: null,
                showModal: false,
                playing: false,
                slideshowTimeout: null,
                iconSize: 24,
                focusTrap: null,
                randId: (0, _utils_GenRandomId_js__WEBPACK_IMPORTED_MODULE_6__["default"])()
              };
            },
            computed: {
              modalTransitionName: function modalTransitionName() {
                return "modal-".concat(this.outTransition ? 'out' : 'in');
              },
              playPauseTitle: function playPauseTitle() {
                return this.playing ? (0, _l10n_js__WEBPACK_IMPORTED_MODULE_4__.t)('Pause slideshow') : (0, _l10n_js__WEBPACK_IMPORTED_MODULE_4__.t)('Start slideshow');
              },
              cssVariables: function cssVariables() {
                return {
                  '--slideshow-duration': this.slideshowDelay + 'ms',
                  '--icon-size': this.iconSize + 'px'
                };
              },
              closeButtonAriaLabel: function closeButtonAriaLabel() {
                return (0, _l10n_js__WEBPACK_IMPORTED_MODULE_4__.t)('Close modal');
              },
              prevButtonAriaLabel: function prevButtonAriaLabel() {
                return (0, _l10n_js__WEBPACK_IMPORTED_MODULE_4__.t)('Previous');
              },
              nextButtonAriaLabel: function nextButtonAriaLabel() {
                return (0, _l10n_js__WEBPACK_IMPORTED_MODULE_4__.t)('Next');
              }
            },
            watch: {
              /**
               * Handle play/pause of an ongoing slideshow
               *
               * @param {boolean} paused is the player paused
               */
              slideshowPaused: function slideshowPaused(paused) {
                if (this.slideshowTimeout) {
                  if (paused) {
                    this.slideshowTimeout.pause();
                  } else {
                    this.slideshowTimeout.start();
                  }
                }
              },
              additionalTrapElements: function additionalTrapElements(elements) {
                if (this.focusTrap) {
                  var contentContainer = this.$refs.mask;
                  this.focusTrap.updateContainerElements([contentContainer].concat(_toConsumableArray(elements)));
                }
              }
            },
            beforeMount: function beforeMount() {
              window.addEventListener('keydown', this.handleKeydown);
            },
            beforeDestroy: function beforeDestroy() {
              window.removeEventListener('keydown', this.handleKeydown);
              this.mc.off('swipeleft swiperight');
              this.mc.destroy();
            },
            mounted: function mounted() {
              var _this = this;

              this.showModal = true; // init clear view

              this.useFocusTrap();
              this.mc = new (hammerjs__WEBPACK_IMPORTED_MODULE_12___default())(this.$refs.mask);
              this.mc.on('swipeleft swiperight', function (e) {
                _this.handleSwipe(e);
              });

              if (this.container === 'body') {
                // force mount the component to body
                document.body.insertBefore(this.$el, document.body.lastChild);
              } else {
                var container = document.querySelector(this.container);
                container.appendChild(this.$el);
              }
            },
            destroyed: function destroyed() {
              this.clearFocusTrap();
              this.$el.remove();
            },
            methods: {
              // Events emitters
              previous: function previous(event) {
                // do not send the event if nothing is available
                if (this.hasPrevious) {
                  // if data is set, then it's a user mouse event
                  // and not the slideshow handler, therefore
                  // we reset the timer
                  if (event) {
                    this.resetSlideshow();
                  }

                  this.$emit('previous', event);
                }
              },
              next: function next(event) {
                // do not send the event if nothing is available
                if (this.hasNext) {
                  // if data is set, then it's a mouse event
                  // and not the slideshow handler, therefore
                  // we reset the timer
                  if (event) {
                    this.resetSlideshow();
                  }

                  this.$emit('next', event);
                }
              },
              close: function close(data) {
                var _this2 = this; // do not fire event if forbidden


                if (this.canClose) {
                  this.showModal = false; // delay closing for animation

                  setTimeout(function () {
                    /**
                     * Emitted when the closing animation is finished
                     */
                    _this2.$emit('close', data);
                  }, 300);
                }
              },
              // Key Handlers
              handleKeydown: function handleKeydown(e) {
                switch (e.keyCode) {
                  case 37:
                    // left arrow
                    this.previous(e);
                    break;

                  case 13: // enter key

                  case 39:
                    // right arrow
                    this.next(e);
                    break;

                  case 27:
                    // escape key
                    this.close(e);
                    break;
                }
              },
              handleSwipe: function handleSwipe(e) {
                if (this.enableSwipe) {
                  if (e.type === 'swipeleft') {
                    // swiping to left to go to the next item
                    this.next(e);
                  } else if (e.type === 'swiperight') {
                    // swiping to right to go back to the previous item
                    this.previous(e);
                  }
                }
              },

              /**
               * Toggle the slideshow state
               */
              togglePlayPause: function togglePlayPause() {
                this.playing = !this.playing;

                if (this.playing) {
                  this.handleSlideshow();
                } else {
                  this.clearSlideshowTimeout();
                }
              },

              /**
               * Reset the slideshow timer and keep going if it was on
               */
              resetSlideshow: function resetSlideshow() {
                this.playing = !this.playing;
                this.clearSlideshowTimeout();
                this.$nextTick(function () {
                  this.togglePlayPause();
                });
              },

              /**
               * Handle the slideshow timer and next event
               */
              handleSlideshow: function handleSlideshow() {
                var _this3 = this;

                this.playing = true;

                if (this.hasNext) {
                  this.slideshowTimeout = new _utils_Timer_js__WEBPACK_IMPORTED_MODULE_3__["default"](function () {
                    _this3.next();

                    _this3.handleSlideshow();
                  }, this.slideshowDelay);
                } else {
                  this.playing = false;
                  this.clearSlideshowTimeout();
                }
              },

              /**
               * Clear slideshowTimeout if ongoing
               */
              clearSlideshowTimeout: function clearSlideshowTimeout() {
                if (this.slideshowTimeout) {
                  this.slideshowTimeout.clear();
                }
              },

              /**
               * Add focus trap for accessibility.
               */
              useFocusTrap: function useFocusTrap() {
                var _this4 = this;

                var contentContainer = this.$refs.mask; // wait until all children are mounted and available in the DOM before focusTrap can be added

                this.$nextTick(function () {
                  _this4.focusTrap = (0, focus_trap__WEBPACK_IMPORTED_MODULE_13__.createFocusTrap)(contentContainer, {
                    allowOutsideClick: true
                  });

                  _this4.focusTrap.activate();
                });
              },
              clearFocusTrap: function clearFocusTrap() {
                var _this$focusTrap;

                (_this$focusTrap = this.focusTrap) === null || _this$focusTrap === void 0 ? void 0 : _this$focusTrap.deactivate();
                this.focusTrap = null;
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
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcPopoverNcPopoverVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_64205__) {
          "use strict";

          __nested_webpack_require_64205__.r(__webpack_exports__);
          /* harmony import */


          var floating_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_64205__(
          /*! floating-vue */
          "floating-vue");
          /* harmony import */


          var floating_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_64205__.n(floating_vue__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var focus_trap__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_64205__(
          /*! focus-trap */
          "focus-trap");
          /* harmony import */


          var focus_trap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_64205__.n(focus_trap__WEBPACK_IMPORTED_MODULE_1__);

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
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibLoadersTemplateLoaderJsRuleSet1Rules2Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcButtonNcButtonVueVueTypeTemplateId592da5afScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_72438__) {
          "use strict";

          __nested_webpack_require_72438__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_72438__.d(__webpack_exports__, {
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
        "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcModal/NcModal.vue?vue&type=template&id=1b9c2b7e&scoped=true&":
        /*!************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcModal/NcModal.vue?vue&type=template&id=1b9c2b7e&scoped=true& ***!
          \************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibLoadersTemplateLoaderJsRuleSet1Rules2Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcModalNcModalVueVueTypeTemplateId1b9c2b7eScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_76644__) {
          "use strict";

          __nested_webpack_require_76644__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_76644__.d(__webpack_exports__, {
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

            return _c("transition", {
              attrs: {
                name: "fade"
              }
            }, [_c("div", {
              ref: "mask",
              staticClass: "modal-mask",
              class: {
                "modal-mask--dark": _vm.dark
              },
              style: _vm.cssVariables,
              attrs: {
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "modal-title-" + _vm.randId,
                "aria-describedby": "modal-description-" + _vm.randId
              }
            }, [_c("transition", {
              attrs: {
                name: "fade-visibility"
              }
            }, [_c("div", {
              staticClass: "modal-header"
            }, [_vm.title.trim() !== "" ? _c("div", {
              staticClass: "modal-title",
              attrs: {
                id: "modal-title-" + _vm.randId
              }
            }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.title) + "\n\t\t\t\t")]) : _vm._e(), _vm._v(" "), _c("div", {
              staticClass: "icons-menu"
            }, [_vm.hasNext && _vm.enableSlideshow ? _c("button", {
              directives: [{
                name: "tooltip",
                rawName: "v-tooltip.auto",
                value: _vm.playPauseTitle,
                expression: "playPauseTitle",
                modifiers: {
                  auto: true
                }
              }],
              staticClass: "play-pause-icons",
              class: {
                "play-pause-icons--paused": _vm.slideshowPaused
              },
              attrs: {
                type: "button"
              },
              on: {
                click: _vm.togglePlayPause
              }
            }, [!_vm.playing ? _c("Play", {
              staticClass: "play-pause-icons__play",
              attrs: {
                size: _vm.iconSize
              }
            }) : _c("Pause", {
              staticClass: "play-pause-icons__pause",
              attrs: {
                size: _vm.iconSize
              }
            }), _vm._v(" "), _c("span", {
              staticClass: "hidden-visually"
            }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.playPauseTitle) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _vm.playing ? _c("svg", {
              staticClass: "progress-ring",
              attrs: {
                height: "50",
                width: "50"
              }
            }, [_c("circle", {
              staticClass: "progress-ring__circle",
              attrs: {
                stroke: "white",
                "stroke-width": "2",
                fill: "transparent",
                r: "15",
                cx: "25",
                cy: "25"
              }
            })]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c("NcActions", {
              staticClass: "header-actions",
              attrs: {
                inline: _vm.inlineActions
              }
            }, [_vm._t("actions")], 2), _vm._v(" "), _vm.canClose && !_vm.closeButtonContained ? _c("NcButton", {
              staticClass: "header-close",
              attrs: {
                "aria-label": _vm.closeButtonAriaLabel,
                type: "tertiary"
              },
              on: {
                click: _vm.close
              },
              scopedSlots: _vm._u([{
                key: "icon",
                fn: function fn() {
                  return [_c("Close", {
                    attrs: {
                      size: _vm.iconSize
                    }
                  })];
                },
                proxy: true
              }], null, false, 1841713362)
            }) : _vm._e()], 1)])]), _vm._v(" "), _c("transition", {
              attrs: {
                name: _vm.modalTransitionName
              }
            }, [_c("div", {
              directives: [{
                name: "show",
                rawName: "v-show",
                value: _vm.showModal,
                expression: "showModal"
              }],
              staticClass: "modal-wrapper",
              class: ["modal-wrapper--".concat(_vm.size), _vm.spreadNavigation ? "modal-wrapper--spread-navigation" : ""],
              on: {
                mousedown: function mousedown($event) {
                  if ($event.target !== $event.currentTarget) return null;
                  return _vm.close.apply(null, arguments);
                }
              }
            }, [_c("transition", {
              attrs: {
                name: "fade-visibility"
              }
            }, [_c("NcButton", {
              directives: [{
                name: "show",
                rawName: "v-show",
                value: _vm.hasPrevious,
                expression: "hasPrevious"
              }],
              staticClass: "prev",
              class: {
                invisible: !_vm.hasPrevious
              },
              attrs: {
                type: "tertiary-no-background",
                "aria-label": _vm.prevButtonAriaLabel
              },
              on: {
                click: _vm.previous
              },
              scopedSlots: _vm._u([{
                key: "icon",
                fn: function fn() {
                  return [_c("ChevronLeft", {
                    attrs: {
                      size: 40
                    }
                  })];
                },
                proxy: true
              }])
            })], 1), _vm._v(" "), _c("div", {
              staticClass: "modal-container",
              attrs: {
                id: "modal-description-" + _vm.randId
              }
            }, [_vm.canClose && _vm.closeButtonContained ? _c("NcButton", {
              staticClass: "modal-container__close",
              attrs: {
                type: "tertiary",
                "aria-label": _vm.closeButtonAriaLabel
              },
              on: {
                click: _vm.close
              },
              scopedSlots: _vm._u([{
                key: "icon",
                fn: function fn() {
                  return [_c("Close", {
                    attrs: {
                      size: 20
                    }
                  })];
                },
                proxy: true
              }], null, false, 2121748766)
            }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2), _vm._v(" "), _c("transition", {
              attrs: {
                name: "fade-visibility"
              }
            }, [_c("NcButton", {
              directives: [{
                name: "show",
                rawName: "v-show",
                value: _vm.hasNext,
                expression: "hasNext"
              }],
              staticClass: "next",
              class: {
                invisible: !_vm.hasNext
              },
              attrs: {
                type: "tertiary-no-background",
                "aria-label": _vm.nextButtonAriaLabel
              },
              on: {
                click: _vm.next
              },
              scopedSlots: _vm._u([{
                key: "icon",
                fn: function fn() {
                  return [_c("ChevronRight", {
                    attrs: {
                      size: 40
                    }
                  })];
                },
                proxy: true
              }])
            })], 1)], 1)])], 1)]);
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
        function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibLoadersTemplateLoaderJsRuleSet1Rules2Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcPopoverNcPopoverVueVueTypeTemplateId40cc2471(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_86218__) {
          "use strict";

          __nested_webpack_require_86218__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_86218__.d(__webpack_exports__, {
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
        "./src/components/NcActions/index.js":
        /*!*******************************************!*\
          !*** ./src/components/NcActions/index.js ***!
          \*******************************************/

        /***/
        function srcComponentsNcActionsIndexJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_87979__) {
          "use strict";

          __nested_webpack_require_87979__.r(__webpack_exports__);
          /* harmony import */


          var _NcActions_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_87979__(
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
          /***/
        },

        /***/
        "./src/components/NcButton/index.js":
        /*!******************************************!*\
          !*** ./src/components/NcButton/index.js ***!
          \******************************************/

        /***/
        function srcComponentsNcButtonIndexJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_89836__) {
          "use strict";

          __nested_webpack_require_89836__.r(__webpack_exports__);
          /* harmony import */


          var _NcButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_89836__(
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
        function srcComponentsNcPopoverIndexJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_91701__) {
          "use strict";

          __nested_webpack_require_91701__.r(__webpack_exports__);
          /* harmony import */


          var _NcPopover_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_91701__(
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
        function srcDirectivesTooltipIndexJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_93560__) {
          "use strict";

          __nested_webpack_require_93560__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_93560__.d(__webpack_exports__, {
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


          var floating_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_93560__(
          /*! floating-vue */
          "floating-vue");
          /* harmony import */


          var floating_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_93560__.n(floating_vue__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_93560__(
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
        function srcL10nJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_96476__) {
          "use strict";

          __nested_webpack_require_96476__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_96476__.d(__webpack_exports__, {
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


          var _nextcloud_l10n_dist_gettext_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_96476__(
          /*! @nextcloud/l10n/dist/gettext.js */
          "@nextcloud/l10n/dist/gettext.js");
          /* harmony import */


          var _nextcloud_l10n_dist_gettext_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_96476__.n(_nextcloud_l10n_dist_gettext_js__WEBPACK_IMPORTED_MODULE_0__);

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
        function srcMixinsL10nJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_196066__) {
          "use strict";

          __nested_webpack_require_196066__.r(__webpack_exports__);
          /* harmony import */


          var _l10n_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_196066__(
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
        function srcUtilsGenRandomIdJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_196906__) {
          "use strict";

          __nested_webpack_require_196906__.r(__webpack_exports__);
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
        "./src/utils/ScopeComponent.js":
        /*!*************************************!*\
          !*** ./src/utils/ScopeComponent.js ***!
          \*************************************/

        /***/
        function srcUtilsScopeComponentJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_198659__) {
          "use strict";

          __nested_webpack_require_198659__.r(__webpack_exports__);
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


          var ScopeComponent = function ScopeComponent(Component) {
            // Init mounted vue if none
            if (!Component.mounted) {
              Component.mounted = [];
            } else if (!Array.isArray(Component.mounted)) {
              Component.mounted = [Component.mounted];
            } // Inject root scoping function


            Component.mounted.push(function () {
              this.$el.setAttribute("data-v-".concat("bc860fd"), '');
            });
          };
          /* harmony default export */


          __webpack_exports__["default"] = ScopeComponent;
          /***/
        },

        /***/
        "./src/utils/Timer.js":
        /*!****************************!*\
          !*** ./src/utils/Timer.js ***!
          \****************************/

        /***/
        function srcUtilsTimerJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_200700__) {
          "use strict";

          __nested_webpack_require_200700__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_200700__.d(__webpack_exports__, {
            /* harmony export */
            "default": function _default() {
              return (
                /* binding */
                timer
              );
            }
            /* harmony export */

          });
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
           * @param {Function} callback The function to call
           * @param {number} delay The time to wait
           */


          function timer(callback, delay) {
            var id;
            var started;
            var remaining = delay;
            var running;

            this.start = function () {
              running = true;
              started = new Date();
              id = setTimeout(callback, remaining);
            };

            this.pause = function () {
              running = false;
              clearTimeout(id);
              remaining -= new Date() - started;
            };

            this.clear = function () {
              running = false;
              clearTimeout(id);
              remaining = 0;
            };

            this.getTimeLeft = function () {
              if (running) {
                this.pause();
                this.start();
              }

              return remaining;
            };

            this.getStateRunning = function () {
              return running;
            };

            this.start();
          }
          /***/

        },

        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./src/directives/Tooltip/index.scss":
        /*!*******************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./src/directives/Tooltip/index.scss ***!
          \*******************************************************************************************************************************************************************************************/

        /***/
        function node_modulesCssLoaderDistCjsJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3SrcDirectivesTooltipIndexScss(module, __webpack_exports__, __nested_webpack_require_204325__) {
          "use strict";

          __nested_webpack_require_204325__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_204325__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_204325__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_204325__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_204325__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__); // Imports


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
        function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcActionsNcActionsVueVueTypeStyleIndex0IdAe33d9beLangScssScopedTrue(module, __webpack_exports__, __nested_webpack_require_211355__) {
          "use strict";

          __nested_webpack_require_211355__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_211355__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_211355__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_211355__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_211355__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__); // Imports


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
        function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcActionsNcActionsVueVueTypeStyleIndex1IdAe33d9beLangScss(module, __webpack_exports__, __nested_webpack_require_216901__) {
          "use strict";

          __nested_webpack_require_216901__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_216901__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_216901__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_216901__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_216901__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__); // Imports


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
        function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcButtonNcButtonVueVueTypeStyleIndex0Id592da5afLangScssScopedTrue(module, __webpack_exports__, __nested_webpack_require_221656__) {
          "use strict";

          __nested_webpack_require_221656__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_221656__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_221656__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_221656__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_221656__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__); // Imports


          var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()); // Module


          ___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-592da5af] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.button-vue[data-v-592da5af] {\n  position: relative;\n  width: fit-content;\n  overflow: hidden;\n  border: 0;\n  padding: 0;\n  font-size: var(--default-font-size);\n  font-weight: bold;\n  min-height: 44px;\n  min-width: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 22px;\n  transition: background-color 0.1s linear !important;\n  transition: border 0.1s linear;\n  background-color: var(--color-primary-element-lighter);\n  color: var(--color-primary-light-text);\n}\n.button-vue *[data-v-592da5af] {\n  cursor: pointer;\n}\n.button-vue[data-v-592da5af]:focus {\n  outline: none;\n}\n.button-vue[data-v-592da5af]:disabled {\n  cursor: default;\n  opacity: 0.5;\n  filter: saturate(0.7);\n}\n.button-vue:disabled *[data-v-592da5af] {\n  cursor: default;\n}\n.button-vue[data-v-592da5af]:hover:not(:disabled) {\n  background-color: var(--color-primary-light-hover);\n}\n.button-vue[data-v-592da5af]:active {\n  background-color: var(--color-primary-element-lighter);\n}\n.button-vue__wrapper[data-v-592da5af] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.button-vue__icon[data-v-592da5af] {\n  height: 44px;\n  width: 44px;\n  min-height: 44px;\n  min-width: 44px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.button-vue__text[data-v-592da5af] {\n  font-weight: bold;\n  margin-bottom: 1px;\n  padding: 2px 0;\n}\n.button-vue--icon-only[data-v-592da5af] {\n  width: 44px !important;\n}\n.button-vue--text-only[data-v-592da5af] {\n  padding: 0 12px;\n}\n.button-vue--text-only .button-vue__text[data-v-592da5af] {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n.button-vue--icon-and-text[data-v-592da5af] {\n  padding: 0 16px 0 4px;\n}\n.button-vue--wide[data-v-592da5af] {\n  width: 100%;\n}\n.button-vue--tabbed[data-v-592da5af], .button-vue[data-v-592da5af]:focus-visible {\n  box-shadow: 0 0 0 2px var(--color-main-text);\n  background-color: var(--color-primary-light-hover);\n}\n.button-vue--tabbed.button-vue--vue-primary[data-v-592da5af], .button-vue:focus-visible.button-vue--vue-primary[data-v-592da5af] {\n  background-color: var(--color-primary-hover);\n}\n.button-vue--tabbed.button-vue--vue-secondary[data-v-592da5af], .button-vue:focus-visible.button-vue--vue-secondary[data-v-592da5af] {\n  box-shadow: 0 0 0 2px var(--color-main-text);\n}\n.button-vue--tabbed.button-vue--vue-tertiary-no-background[data-v-592da5af], .button-vue:focus-visible.button-vue--vue-tertiary-no-background[data-v-592da5af] {\n  opacity: 1;\n}\n.button-vue--tabbed.button-vue--vue-tertiary-on-primary[data-v-592da5af], .button-vue:focus-visible.button-vue--vue-tertiary-on-primary[data-v-592da5af] {\n  box-shadow: 0 0 0 2px var(--color-primary-text);\n  border-radius: var(--border-radius);\n  opacity: 1;\n  background-color: transparent;\n}\n.button-vue--tabbed.button-vue--vue-success[data-v-592da5af], .button-vue:focus-visible.button-vue--vue-success[data-v-592da5af] {\n  background-color: var(--color-success-hover);\n}\n.button-vue--tabbed.button-vue--vue-warning[data-v-592da5af], .button-vue:focus-visible.button-vue--vue-warning[data-v-592da5af] {\n  background-color: var(--color-warning-hover);\n}\n.button-vue--tabbed.button-vue--vue-error[data-v-592da5af], .button-vue:focus-visible.button-vue--vue-error[data-v-592da5af] {\n  background-color: var(--color-error-hover);\n}\n.button-vue--vue-primary[data-v-592da5af] {\n  background-color: var(--color-primary-element);\n  color: var(--color-primary-text);\n}\n.button-vue--vue-primary[data-v-592da5af]:hover:not(:disabled) {\n  background-color: var(--color-primary-element-hover);\n}\n.button-vue--vue-primary[data-v-592da5af]:active {\n  background-color: var(--color-primary-element);\n}\n.button-vue--vue-secondary[data-v-592da5af] {\n  color: var(--color-primary-light-text);\n  background-color: var(--color-primary-light);\n}\n.button-vue--vue-secondary[data-v-592da5af]:hover:not(:disabled) {\n  color: var(--color-primary-light-text);\n  background-color: var(--color-primary-light-hover);\n}\n.button-vue--vue-tertiary[data-v-592da5af] {\n  color: var(--color-main-text);\n  background-color: transparent;\n}\n.button-vue--vue-tertiary[data-v-592da5af]:hover:not(:disabled) {\n  background-color: var(--color);\n  background-color: var(--color-background-hover);\n}\n.button-vue--vue-tertiary-no-background[data-v-592da5af] {\n  color: var(--color-main-text);\n  background-color: transparent;\n  opacity: 0.7;\n}\n.button-vue--vue-tertiary-no-background[data-v-592da5af]:hover:not(:disabled) {\n  background-color: transparent;\n  opacity: 1;\n}\n.button-vue--vue-tertiary-on-primary[data-v-592da5af] {\n  color: var(--color-primary-text);\n  background-color: transparent;\n  opacity: 0.7;\n}\n.button-vue--vue-tertiary-on-primary[data-v-592da5af]:hover:not(:disabled) {\n  background-color: transparent;\n  opacity: 1;\n}\n.button-vue--vue-success[data-v-592da5af] {\n  background-color: var(--color-success);\n  color: white;\n}\n.button-vue--vue-success[data-v-592da5af]:hover:not(:disabled) {\n  background-color: var(--color-success-hover);\n}\n.button-vue--vue-success[data-v-592da5af]:active {\n  background-color: var(--color-success);\n}\n.button-vue--vue-warning[data-v-592da5af] {\n  background-color: var(--color-warning);\n  color: white;\n}\n.button-vue--vue-warning[data-v-592da5af]:hover:not(:disabled) {\n  background-color: var(--color-warning-hover);\n}\n.button-vue--vue-warning[data-v-592da5af]:active {\n  background-color: var(--color-warning);\n}\n.button-vue--vue-error[data-v-592da5af] {\n  background-color: var(--color-error);\n  color: white;\n}\n.button-vue--vue-error[data-v-592da5af]:hover:not(:disabled) {\n  background-color: var(--color-error-hover);\n}\n.button-vue--vue-error[data-v-592da5af]:active {\n  background-color: var(--color-error);\n}", ""]); // Exports

          /* harmony default export */


          __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
          /***/
        },

        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcModal/NcModal.vue?vue&type=style&index=0&id=1b9c2b7e&lang=scss&scoped=true&":
        /*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcModal/NcModal.vue?vue&type=style&index=0&id=1b9c2b7e&lang=scss&scoped=true& ***!
          \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcModalNcModalVueVueTypeStyleIndex0Id1b9c2b7eLangScssScopedTrue(module, __webpack_exports__, __nested_webpack_require_232168__) {
          "use strict";

          __nested_webpack_require_232168__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_232168__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_232168__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_232168__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_232168__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__); // Imports


          var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()); // Module


          ___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-1b9c2b7e] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.modal-mask[data-v-1b9c2b7e] {\n  position: fixed;\n  z-index: 9998;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.modal-mask--dark[data-v-1b9c2b7e] {\n  background-color: rgba(0, 0, 0, 0.92);\n}\n.modal-header[data-v-1b9c2b7e] {\n  position: absolute;\n  z-index: 10001;\n  top: 0;\n  right: 0;\n  left: 0;\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 50px;\n  transition: opacity 250ms, visibility 250ms;\n}\n.modal-header.invisible[style*=\"display:none\"][data-v-1b9c2b7e], .modal-header.invisible[style*=\"display: none\"][data-v-1b9c2b7e] {\n  visibility: hidden;\n}\n.modal-header .modal-title[data-v-1b9c2b7e] {\n  overflow-x: hidden;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0 132px 0 12px;\n  transition: padding ease 100ms;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #fff;\n  font-size: 14px;\n}\n@media only screen and (min-width: 512px) {\n.modal-header .modal-title[data-v-1b9c2b7e] {\n    padding-left: 132px;\n    text-align: center;\n}\n}\n.modal-header .icons-menu[data-v-1b9c2b7e] {\n  position: absolute;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.modal-header .icons-menu .header-close[data-v-1b9c2b7e] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  margin: 3px;\n  padding: 0;\n}\n.modal-header .icons-menu .play-pause-icons[data-v-1b9c2b7e] {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n}\n.modal-header .icons-menu .play-pause-icons:hover .play-pause-icons__play[data-v-1b9c2b7e],\n.modal-header .icons-menu .play-pause-icons:hover .play-pause-icons__pause[data-v-1b9c2b7e], .modal-header .icons-menu .play-pause-icons:focus .play-pause-icons__play[data-v-1b9c2b7e],\n.modal-header .icons-menu .play-pause-icons:focus .play-pause-icons__pause[data-v-1b9c2b7e] {\n  opacity: 1;\n  border-radius: 22px;\n  background-color: rgba(127, 127, 127, 0.25);\n}\n.modal-header .icons-menu .play-pause-icons__play[data-v-1b9c2b7e], .modal-header .icons-menu .play-pause-icons__pause[data-v-1b9c2b7e] {\n  box-sizing: border-box;\n  width: 44px;\n  height: 44px;\n  margin: 3px;\n  cursor: pointer;\n  opacity: 0.7;\n}\n.modal-header .icons-menu .header-actions[data-v-1b9c2b7e] {\n  color: white;\n}\n.modal-header .icons-menu[data-v-1b9c2b7e]  .action-item {\n  margin: 3px;\n}\n.modal-header .icons-menu[data-v-1b9c2b7e]  .action-item--single {\n  box-sizing: border-box;\n  width: 44px;\n  height: 44px;\n  cursor: pointer;\n  background-position: center;\n  background-size: 22px;\n}\n.modal-header .icons-menu[data-v-1b9c2b7e] button {\n  color: #fff;\n}\n.modal-header .icons-menu[data-v-1b9c2b7e] .action-item__menutoggle {\n  padding: 0;\n}\n.modal-header .icons-menu[data-v-1b9c2b7e] .action-item__menutoggle span, .modal-header .icons-menu[data-v-1b9c2b7e] .action-item__menutoggle svg {\n  width: var(--icon-size);\n  height: var(--icon-size);\n}\n.modal-wrapper[data-v-1b9c2b7e] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  /* Navigation buttons */\n  /* Content */\n}\n.modal-wrapper .prev[data-v-1b9c2b7e],\n.modal-wrapper .next[data-v-1b9c2b7e] {\n  z-index: 10000;\n  display: flex !important;\n  height: 35vw;\n  position: absolute;\n  transition: opacity 250ms, visibility 250ms;\n  color: var(--color-primary-text);\n}\n.modal-wrapper .prev[data-v-1b9c2b7e]:focus-visible,\n.modal-wrapper .next[data-v-1b9c2b7e]:focus-visible {\n  box-shadow: 0 0 0 2px var(--color-primary-text);\n  background-color: var(--color-box-shadow);\n}\n.modal-wrapper .prev.invisible[style*=\"display:none\"][data-v-1b9c2b7e], .modal-wrapper .prev.invisible[style*=\"display: none\"][data-v-1b9c2b7e],\n.modal-wrapper .next.invisible[style*=\"display:none\"][data-v-1b9c2b7e],\n.modal-wrapper .next.invisible[style*=\"display: none\"][data-v-1b9c2b7e] {\n  visibility: hidden;\n}\n.modal-wrapper .prev[data-v-1b9c2b7e] {\n  left: 2px;\n}\n.modal-wrapper .next[data-v-1b9c2b7e] {\n  right: 2px;\n}\n.modal-wrapper .modal-container[data-v-1b9c2b7e] {\n  position: relative;\n  display: block;\n  overflow: auto;\n  padding: 0;\n  transition: transform 300ms ease;\n  border-radius: var(--border-radius-large);\n  background-color: var(--color-main-background);\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);\n}\n.modal-wrapper .modal-container__close[data-v-1b9c2b7e] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n}\n.modal-wrapper--small .modal-container[data-v-1b9c2b7e] {\n  width: 400px;\n  max-width: 90%;\n  max-height: 90%;\n}\n.modal-wrapper--normal .modal-container[data-v-1b9c2b7e] {\n  max-width: 90%;\n  width: 600px;\n  max-height: 90%;\n}\n.modal-wrapper--large .modal-container[data-v-1b9c2b7e] {\n  max-width: 90%;\n  width: 900px;\n  max-height: 90%;\n}\n.modal-wrapper--full .modal-container[data-v-1b9c2b7e] {\n  width: 100%;\n  height: calc(100% - var(--header-height));\n  position: absolute;\n  top: 50px;\n  border-radius: 0;\n}\n@media only screen and (max-width: 512px) {\n.modal-wrapper .modal-container[data-v-1b9c2b7e] {\n    max-width: initial;\n    width: 100%;\n    max-height: initial;\n    height: calc(100% - var(--header-height));\n    position: absolute;\n    top: 50px;\n    border-radius: 0;\n}\n}\n\n/* TRANSITIONS */\n.fade-enter-active[data-v-1b9c2b7e],\n.fade-leave-active[data-v-1b9c2b7e] {\n  transition: opacity 250ms;\n}\n.fade-enter[data-v-1b9c2b7e],\n.fade-leave-to[data-v-1b9c2b7e] {\n  opacity: 0;\n}\n.fade-visibility-enter[data-v-1b9c2b7e],\n.fade-visibility-leave-to[data-v-1b9c2b7e] {\n  visibility: hidden;\n  opacity: 0;\n}\n.modal-in-enter-active[data-v-1b9c2b7e],\n.modal-in-leave-active[data-v-1b9c2b7e],\n.modal-out-enter-active[data-v-1b9c2b7e],\n.modal-out-leave-active[data-v-1b9c2b7e] {\n  transition: opacity 250ms;\n}\n.modal-in-enter[data-v-1b9c2b7e],\n.modal-in-leave-to[data-v-1b9c2b7e],\n.modal-out-enter[data-v-1b9c2b7e],\n.modal-out-leave-to[data-v-1b9c2b7e] {\n  opacity: 0;\n}\n.modal-in-enter .modal-container[data-v-1b9c2b7e],\n.modal-in-leave-to .modal-container[data-v-1b9c2b7e] {\n  transform: scale(0.9);\n}\n.modal-out-enter .modal-container[data-v-1b9c2b7e],\n.modal-out-leave-to .modal-container[data-v-1b9c2b7e] {\n  transform: scale(1.1);\n}\n.modal-mask .play-pause-icons .progress-ring[data-v-1b9c2b7e] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: rotate(-90deg);\n}\n.modal-mask .play-pause-icons .progress-ring .progress-ring__circle[data-v-1b9c2b7e] {\n  transition: 100ms stroke-dashoffset;\n  transform-origin: 50% 50%;\n  animation: progressring-1b9c2b7e linear var(--slideshow-duration) infinite;\n  stroke-linecap: round;\n  stroke-dashoffset: 94.2477796077;\n  stroke-dasharray: 94.2477796077;\n}\n.modal-mask .play-pause-icons--paused .icon-pause[data-v-1b9c2b7e] {\n  animation: breath-1b9c2b7e 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n}\n.modal-mask .play-pause-icons--paused .progress-ring__circle[data-v-1b9c2b7e] {\n  animation-play-state: paused !important;\n}\n@keyframes progressring-1b9c2b7e {\nfrom {\n    stroke-dashoffset: 94.2477796077;\n}\nto {\n    stroke-dashoffset: 0;\n}\n}\n@keyframes breath-1b9c2b7e {\n0% {\n    opacity: 1;\n}\n50% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}", ""]); // Exports

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
        function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcPopoverNcPopoverVueVueTypeStyleIndex0Id40cc2471LangScss(module, __webpack_exports__, __nested_webpack_require_244254__) {
          "use strict";

          __nested_webpack_require_244254__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_244254__(
          /*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */
          "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_244254__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_244254__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */
          "./node_modules/css-loader/dist/runtime/api.js");
          /* harmony import */


          var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_244254__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__); // Imports


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
        function srcDirectivesTooltipIndexScss(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_253565__) {
          "use strict";

          __nested_webpack_require_253565__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_253565__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_253565__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_253565__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_253565__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_253565__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_253565__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_253565__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_253565__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_253565__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_253565__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_253565__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_253565__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_253565__(
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
        function node_modulesStyleLoaderDistCjsJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcActionsNcActionsVueVueTypeStyleIndex0IdAe33d9beLangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_261803__) {
          "use strict";

          __nested_webpack_require_261803__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_261803__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_261803__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_261803__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_261803__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_261803__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_261803__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_261803__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_261803__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_261803__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_261803__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_261803__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_261803__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActions_vue_vue_type_style_index_0_id_ae33d9be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_261803__(
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
        function node_modulesStyleLoaderDistCjsJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcActionsNcActionsVueVueTypeStyleIndex1IdAe33d9beLangScss(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_271213__) {
          "use strict";

          __nested_webpack_require_271213__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_271213__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_271213__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_271213__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_271213__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_271213__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_271213__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_271213__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_271213__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_271213__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_271213__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_271213__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_271213__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActions_vue_vue_type_style_index_1_id_ae33d9be_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_271213__(
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
        function node_modulesStyleLoaderDistCjsJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcButtonNcButtonVueVueTypeStyleIndex0Id592da5afLangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_280587__) {
          "use strict";

          __nested_webpack_require_280587__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_280587__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_280587__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_280587__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_280587__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_280587__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_280587__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_280587__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_280587__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_280587__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_280587__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_280587__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_280587__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcButton_vue_vue_type_style_index_0_id_592da5af_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_280587__(
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
        "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcModal/NcModal.vue?vue&type=style&index=0&id=1b9c2b7e&lang=scss&scoped=true&":
        /*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcModal/NcModal.vue?vue&type=style&index=0&id=1b9c2b7e&lang=scss&scoped=true& ***!
          \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesStyleLoaderDistCjsJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcModalNcModalVueVueTypeStyleIndex0Id1b9c2b7eLangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_290027__) {
          "use strict";

          __nested_webpack_require_290027__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_290027__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_290027__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_290027__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_290027__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_290027__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_290027__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_290027__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_290027__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_290027__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_290027__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_290027__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_290027__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcModal_vue_vue_type_style_index_0_id_1b9c2b7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_290027__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcModal.vue?vue&type=style&index=0&id=1b9c2b7e&lang=scss&scoped=true& */
          "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcModal/NcModal.vue?vue&type=style&index=0&id=1b9c2b7e&lang=scss&scoped=true&");

          var options = {};
          options.styleTagTransform = _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
          options.setAttributes = _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
          options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
          options.domAPI = _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
          options.insertStyleElement = _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

          var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcModal_vue_vue_type_style_index_0_id_1b9c2b7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcModal_vue_vue_type_style_index_0_id_1b9c2b7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcModal_vue_vue_type_style_index_0_id_1b9c2b7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcModal_vue_vue_type_style_index_0_id_1b9c2b7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined;
          /***/
        },

        /***/
        "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss&":
        /*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss& ***!
          \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

        /***/
        function node_modulesStyleLoaderDistCjsJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsClonedRuleSet2Use3Node_modulesVueLoaderLibIndexJsVueLoaderOptionsSrcComponentsNcPopoverNcPopoverVueVueTypeStyleIndex0Id40cc2471LangScss(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_299421__) {
          "use strict";

          __nested_webpack_require_299421__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_299421__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_299421__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_299421__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_299421__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_299421__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */
          "./node_modules/style-loader/dist/runtime/insertBySelector.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_299421__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_299421__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_299421__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_299421__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_299421__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_299421__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
          /* harmony import */


          var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_299421__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_style_index_0_id_40cc2471_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_299421__(
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
        function node_modulesStyleLoaderDistRuntimeSetAttributesWithoutAttributesJs(module, __unused_webpack_exports, __nested_webpack_require_313659__) {
          "use strict";
          /* istanbul ignore next  */

          function setAttributesWithoutAttributes(styleElement) {
            var nonce =  true ? __nested_webpack_require_313659__.nc : 0;

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
        function srcComponentsNcActionsNcActionsVue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_317755__) {
          "use strict";

          __nested_webpack_require_317755__.r(__webpack_exports__);
          /* harmony import */


          var _NcActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_317755__(
          /*! ./NcActions.vue?vue&type=script&lang=js& */
          "./src/components/NcActions/NcActions.vue?vue&type=script&lang=js&");
          /* harmony import */


          var _NcActions_vue_vue_type_style_index_0_id_ae33d9be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_317755__(
          /*! ./NcActions.vue?vue&type=style&index=0&id=ae33d9be&lang=scss&scoped=true& */
          "./src/components/NcActions/NcActions.vue?vue&type=style&index=0&id=ae33d9be&lang=scss&scoped=true&");
          /* harmony import */


          var _NcActions_vue_vue_type_style_index_1_id_ae33d9be_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_317755__(
          /*! ./NcActions.vue?vue&type=style&index=1&id=ae33d9be&lang=scss& */
          "./src/components/NcActions/NcActions.vue?vue&type=style&index=1&id=ae33d9be&lang=scss&");
          /* harmony import */


          var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_317755__(
          /*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
          "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
          /* harmony import */


          var _NcActions_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_317755__(
          /*! ./NcActions.vue?vue&type=custom&index=0&blockType=docs */
          "./src/components/NcActions/NcActions.vue?vue&type=custom&index=0&blockType=docs");
          /* harmony import */


          var _NcActions_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_317755__.n(_NcActions_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__);

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
        function srcComponentsNcButtonNcButtonVue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_321031__) {
          "use strict";

          __nested_webpack_require_321031__.r(__webpack_exports__);
          /* harmony import */


          var _NcButton_vue_vue_type_template_id_592da5af_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_321031__(
          /*! ./NcButton.vue?vue&type=template&id=592da5af&scoped=true& */
          "./src/components/NcButton/NcButton.vue?vue&type=template&id=592da5af&scoped=true&");
          /* harmony import */


          var _NcButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_321031__(
          /*! ./NcButton.vue?vue&type=script&lang=js& */
          "./src/components/NcButton/NcButton.vue?vue&type=script&lang=js&");
          /* harmony import */


          var _NcButton_vue_vue_type_style_index_0_id_592da5af_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_321031__(
          /*! ./NcButton.vue?vue&type=style&index=0&id=592da5af&lang=scss&scoped=true& */
          "./src/components/NcButton/NcButton.vue?vue&type=style&index=0&id=592da5af&lang=scss&scoped=true&");
          /* harmony import */


          var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_321031__(
          /*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
          "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
          /* harmony import */


          var _NcButton_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_321031__(
          /*! ./NcButton.vue?vue&type=custom&index=0&blockType=docs */
          "./src/components/NcButton/NcButton.vue?vue&type=custom&index=0&blockType=docs");
          /* harmony import */


          var _NcButton_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_321031__.n(_NcButton_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__);

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
        "./src/components/NcModal/NcModal.vue":
        /*!********************************************!*\
          !*** ./src/components/NcModal/NcModal.vue ***!
          \********************************************/

        /***/
        function srcComponentsNcModalNcModalVue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_324398__) {
          "use strict";

          __nested_webpack_require_324398__.r(__webpack_exports__);
          /* harmony import */


          var _NcModal_vue_vue_type_template_id_1b9c2b7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_324398__(
          /*! ./NcModal.vue?vue&type=template&id=1b9c2b7e&scoped=true& */
          "./src/components/NcModal/NcModal.vue?vue&type=template&id=1b9c2b7e&scoped=true&");
          /* harmony import */


          var _NcModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_324398__(
          /*! ./NcModal.vue?vue&type=script&lang=js& */
          "./src/components/NcModal/NcModal.vue?vue&type=script&lang=js&");
          /* harmony import */


          var _NcModal_vue_vue_type_style_index_0_id_1b9c2b7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_324398__(
          /*! ./NcModal.vue?vue&type=style&index=0&id=1b9c2b7e&lang=scss&scoped=true& */
          "./src/components/NcModal/NcModal.vue?vue&type=style&index=0&id=1b9c2b7e&lang=scss&scoped=true&");
          /* harmony import */


          var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_324398__(
          /*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
          "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
          /* harmony import */


          var _NcModal_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_324398__(
          /*! ./NcModal.vue?vue&type=custom&index=0&blockType=docs */
          "./src/components/NcModal/NcModal.vue?vue&type=custom&index=0&blockType=docs");
          /* harmony import */


          var _NcModal_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_324398__.n(_NcModal_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__);

          ;
          /* normalize component */

          var component = (0, _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_NcModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _NcModal_vue_vue_type_template_id_1b9c2b7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render, _NcModal_vue_vue_type_template_id_1b9c2b7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns, false, null, "1b9c2b7e", null)
          /* custom blocks */
          ;
          if (typeof _NcModal_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default() === 'function') _NcModal_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default()(component);
          /* hot reload */

          if (false) { var api; }

          component.options.__file = "src/components/NcModal/NcModal.vue";
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
        function srcComponentsNcPopoverNcPopoverVue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_327760__) {
          "use strict";

          __nested_webpack_require_327760__.r(__webpack_exports__);
          /* harmony import */


          var _NcPopover_vue_vue_type_template_id_40cc2471___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_327760__(
          /*! ./NcPopover.vue?vue&type=template&id=40cc2471& */
          "./src/components/NcPopover/NcPopover.vue?vue&type=template&id=40cc2471&");
          /* harmony import */


          var _NcPopover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_327760__(
          /*! ./NcPopover.vue?vue&type=script&lang=js& */
          "./src/components/NcPopover/NcPopover.vue?vue&type=script&lang=js&");
          /* harmony import */


          var _NcPopover_vue_vue_type_style_index_0_id_40cc2471_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_327760__(
          /*! ./NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss& */
          "./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss&");
          /* harmony import */


          var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_327760__(
          /*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
          "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
          /* harmony import */


          var _NcPopover_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_327760__(
          /*! ./NcPopover.vue?vue&type=custom&index=0&blockType=docs */
          "./src/components/NcPopover/NcPopover.vue?vue&type=custom&index=0&blockType=docs");
          /* harmony import */


          var _NcPopover_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_327760__.n(_NcPopover_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__);

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
        function srcComponentsNcActionsNcActionsVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_331189__) {
          "use strict";

          __nested_webpack_require_331189__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_331189__(
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
        function srcComponentsNcButtonNcButtonVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_332640__) {
          "use strict";

          __nested_webpack_require_332640__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_332640__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcButton.vue?vue&type=script&lang=js& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcButton/NcButton.vue?vue&type=script&lang=js&");
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
          /***/
        },

        /***/
        "./src/components/NcModal/NcModal.vue?vue&type=script&lang=js&":
        /*!*********************************************************************!*\
          !*** ./src/components/NcModal/NcModal.vue?vue&type=script&lang=js& ***!
          \*********************************************************************/

        /***/
        function srcComponentsNcModalNcModalVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_334076__) {
          "use strict";

          __nested_webpack_require_334076__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_334076__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcModal.vue?vue&type=script&lang=js& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcModal/NcModal.vue?vue&type=script&lang=js&");
          /* harmony default export */


          __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
          /***/
        },

        /***/
        "./src/components/NcPopover/NcPopover.vue?vue&type=script&lang=js&":
        /*!*************************************************************************!*\
          !*** ./src/components/NcPopover/NcPopover.vue?vue&type=script&lang=js& ***!
          \*************************************************************************/

        /***/
        function srcComponentsNcPopoverNcPopoverVueVueTypeScriptLangJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_335527__) {
          "use strict";

          __nested_webpack_require_335527__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_335527__(
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
        function srcComponentsNcButtonNcButtonVueVueTypeTemplateId592da5afScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_337066__) {
          "use strict";

          __nested_webpack_require_337066__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_337066__.d(__webpack_exports__, {
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


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcButton_vue_vue_type_template_id_592da5af_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_337066__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcButton.vue?vue&type=template&id=592da5af&scoped=true& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcButton/NcButton.vue?vue&type=template&id=592da5af&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcModal/NcModal.vue?vue&type=template&id=1b9c2b7e&scoped=true&":
        /*!***************************************************************************************!*\
          !*** ./src/components/NcModal/NcModal.vue?vue&type=template&id=1b9c2b7e&scoped=true& ***!
          \***************************************************************************************/

        /***/
        function srcComponentsNcModalNcModalVueVueTypeTemplateId1b9c2b7eScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_339666__) {
          "use strict";

          __nested_webpack_require_339666__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_339666__.d(__webpack_exports__, {
            /* harmony export */
            "render": function render() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcModal_vue_vue_type_template_id_1b9c2b7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render
              );
            },

            /* harmony export */
            "staticRenderFns": function staticRenderFns() {
              return (
                /* reexport safe */
                _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcModal_vue_vue_type_template_id_1b9c2b7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
              );
            }
            /* harmony export */

          });
          /* harmony import */


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcModal_vue_vue_type_template_id_1b9c2b7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_339666__(
          /*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcModal.vue?vue&type=template&id=1b9c2b7e&scoped=true& */
          "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcModal/NcModal.vue?vue&type=template&id=1b9c2b7e&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcPopover/NcPopover.vue?vue&type=template&id=40cc2471&":
        /*!*******************************************************************************!*\
          !*** ./src/components/NcPopover/NcPopover.vue?vue&type=template&id=40cc2471& ***!
          \*******************************************************************************/

        /***/
        function srcComponentsNcPopoverNcPopoverVueVueTypeTemplateId40cc2471(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_342222__) {
          "use strict";

          __nested_webpack_require_342222__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_342222__.d(__webpack_exports__, {
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


          var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_template_id_40cc2471___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_342222__(
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
        function srcComponentsNcActionsNcActionsVueVueTypeStyleIndex0IdAe33d9beLangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_344859__) {
          "use strict";

          __nested_webpack_require_344859__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActions_vue_vue_type_style_index_0_id_ae33d9be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_344859__(
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
        function srcComponentsNcActionsNcActionsVueVueTypeStyleIndex1IdAe33d9beLangScss(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_346879__) {
          "use strict";

          __nested_webpack_require_346879__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcActions_vue_vue_type_style_index_1_id_ae33d9be_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_346879__(
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
        function srcComponentsNcButtonNcButtonVueVueTypeStyleIndex0Id592da5afLangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_348911__) {
          "use strict";

          __nested_webpack_require_348911__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcButton_vue_vue_type_style_index_0_id_592da5af_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_348911__(
          /*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcButton.vue?vue&type=style&index=0&id=592da5af&lang=scss&scoped=true& */
          "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcButton/NcButton.vue?vue&type=style&index=0&id=592da5af&lang=scss&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcModal/NcModal.vue?vue&type=style&index=0&id=1b9c2b7e&lang=scss&scoped=true&":
        /*!******************************************************************************************************!*\
          !*** ./src/components/NcModal/NcModal.vue?vue&type=style&index=0&id=1b9c2b7e&lang=scss&scoped=true& ***!
          \******************************************************************************************************/

        /***/
        function srcComponentsNcModalNcModalVueVueTypeStyleIndex0Id1b9c2b7eLangScssScopedTrue(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_350965__) {
          "use strict";

          __nested_webpack_require_350965__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcModal_vue_vue_type_style_index_0_id_1b9c2b7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_350965__(
          /*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NcModal.vue?vue&type=style&index=0&id=1b9c2b7e&lang=scss&scoped=true& */
          "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NcModal/NcModal.vue?vue&type=style&index=0&id=1b9c2b7e&lang=scss&scoped=true&");
          /***/

        },

        /***/
        "./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss&":
        /*!**********************************************************************************************!*\
          !*** ./src/components/NcPopover/NcPopover.vue?vue&type=style&index=0&id=40cc2471&lang=scss& ***!
          \**********************************************************************************************/

        /***/
        function srcComponentsNcPopoverNcPopoverVueVueTypeStyleIndex0Id40cc2471LangScss(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_352977__) {
          "use strict";

          __nested_webpack_require_352977__.r(__webpack_exports__);
          /* harmony import */


          var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NcPopover_vue_vue_type_style_index_0_id_40cc2471_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_352977__(
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
        "./src/components/NcModal/NcModal.vue?vue&type=custom&index=0&blockType=docs":
        /*!***********************************************************************************!*\
          !*** ./src/components/NcModal/NcModal.vue?vue&type=custom&index=0&blockType=docs ***!
          \***********************************************************************************/

        /***/
        function srcComponentsNcModalNcModalVueVueTypeCustomIndex0BlockTypeDocs() {
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
        function node_modulesVueLoaderLibRuntimeComponentNormalizerJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_356961__) {
          "use strict";

          __nested_webpack_require_356961__.r(__webpack_exports__);
          /* harmony export */


          __nested_webpack_require_356961__.d(__webpack_exports__, {
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
        "hammerjs":
        /*!***************************!*\
          !*** external "hammerjs" ***!
          \***************************/

        /***/
        function hammerjs(module) {
          "use strict";

          module.exports = __webpack_require__(/*! hammerjs */ "../@nextcloud/nextcloud-vue/node_modules/hammerjs/hammer.js");
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
        "vue-material-design-icons/ChevronLeft.vue":
        /*!************************************************************!*\
          !*** external "vue-material-design-icons/ChevronLeft.vue" ***!
          \************************************************************/

        /***/
        function vueMaterialDesignIconsChevronLeftVue(module) {
          "use strict";

          module.exports = __webpack_require__(/*! vue-material-design-icons/ChevronLeft.vue */ "../@nextcloud/nextcloud-vue/node_modules/vue-material-design-icons/ChevronLeft.vue");
          /***/
        },

        /***/
        "vue-material-design-icons/ChevronRight.vue":
        /*!*************************************************************!*\
          !*** external "vue-material-design-icons/ChevronRight.vue" ***!
          \*************************************************************/

        /***/
        function vueMaterialDesignIconsChevronRightVue(module) {
          "use strict";

          module.exports = __webpack_require__(/*! vue-material-design-icons/ChevronRight.vue */ "../@nextcloud/nextcloud-vue/node_modules/vue-material-design-icons/ChevronRight.vue");
          /***/
        },

        /***/
        "vue-material-design-icons/Close.vue":
        /*!******************************************************!*\
          !*** external "vue-material-design-icons/Close.vue" ***!
          \******************************************************/

        /***/
        function vueMaterialDesignIconsCloseVue(module) {
          "use strict";

          module.exports = __webpack_require__(/*! vue-material-design-icons/Close.vue */ "../@nextcloud/nextcloud-vue/node_modules/vue-material-design-icons/Close.vue");
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
        },

        /***/
        "vue-material-design-icons/Pause.vue":
        /*!******************************************************!*\
          !*** external "vue-material-design-icons/Pause.vue" ***!
          \******************************************************/

        /***/
        function vueMaterialDesignIconsPauseVue(module) {
          "use strict";

          module.exports = __webpack_require__(/*! vue-material-design-icons/Pause.vue */ "../@nextcloud/nextcloud-vue/node_modules/vue-material-design-icons/Pause.vue");
          /***/
        },

        /***/
        "vue-material-design-icons/Play.vue":
        /*!*****************************************************!*\
          !*** external "vue-material-design-icons/Play.vue" ***!
          \*****************************************************/

        /***/
        function vueMaterialDesignIconsPlayVue(module) {
          "use strict";

          module.exports = __webpack_require__(/*! vue-material-design-icons/Play.vue */ "../@nextcloud/nextcloud-vue/node_modules/vue-material-design-icons/Play.vue");
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

      function __nested_webpack_require_365665__(moduleId) {
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

        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_365665__);
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
        __nested_webpack_require_365665__.n = function (module) {
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

          __nested_webpack_require_365665__.d(getter, {
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
        __nested_webpack_require_365665__.d = function (exports, definition) {
          /******/
          for (var key in definition) {
            /******/
            if (__nested_webpack_require_365665__.o(definition, key) && !__nested_webpack_require_365665__.o(exports, key)) {
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
        __nested_webpack_require_365665__.o = function (obj, prop) {
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
        __nested_webpack_require_365665__.r = function (exports) {
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
        __nested_webpack_require_365665__.nc = undefined;
        /******/
      }();
      /******/

      /************************************************************************/

      var __webpack_exports__ = {}; // This entry need to be wrapped in an IIFE because it need to be in strict mode.

      !function () {
        "use strict";
        /*!*****************************************!*\
          !*** ./src/components/NcModal/index.js ***!
          \*****************************************/

        __nested_webpack_require_365665__.r(__webpack_exports__);
        /* harmony import */


        var _utils_ScopeComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_365665__(
        /*! ../../utils/ScopeComponent.js */
        "./src/utils/ScopeComponent.js");
        /* harmony import */


        var _NcModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_365665__(
        /*! ./NcModal.vue */
        "./src/components/NcModal/NcModal.vue");
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


        (0, _utils_ScopeComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_NcModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
        /* harmony default export */

        __webpack_exports__["default"] = _NcModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"];
      }();
      /******/

      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ })

}]);
//# sourceMappingURL=_nextcloud_nextcloud-vue_dist_Components_NcModal_js-_nextcloud_nextcloud-vue_dist_Components_NcModal_js.js.map?v=15f3917e3010bfa286c8