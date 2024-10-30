/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 8720:
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _blockonsEditorObj$bl;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var addFilter = wp.hooks.addFilter;
var _wp$element = wp.element,
  useState = _wp$element.useState,
  useEffect = _wp$element.useEffect;
var __ = wp.i18n.__;
var _wp$richText = wp.richText,
  registerFormatType = _wp$richText.registerFormatType,
  unregisterFormatType = _wp$richText.unregisterFormatType,
  applyFormat = _wp$richText.applyFormat,
  removeFormat = _wp$richText.removeFormat,
  getActiveFormat = _wp$richText.getActiveFormat;
var _wp$blockEditor = wp.blockEditor,
  BlockControls = _wp$blockEditor.BlockControls,
  MediaUpload = _wp$blockEditor.MediaUpload;
var _wp$components = wp.components,
  ToolbarGroup = _wp$components.ToolbarGroup,
  Dropdown = _wp$components.Dropdown,
  ToolbarButton = _wp$components.ToolbarButton,
  ToggleControl = _wp$components.ToggleControl,
  TextControl = _wp$components.TextControl,
  TextareaControl = _wp$components.TextareaControl,
  SelectControl = _wp$components.SelectControl,
  Button = _wp$components.Button,
  ColorPicker = _wp$components.ColorPicker,
  ColorIndicator = _wp$components.ColorIndicator;
var _wp$data = wp.data,
  useSelect = _wp$data.useSelect,
  dispatch = _wp$data.dispatch;
var isPremium = Boolean(blockonsEditorObj.isPremium);
var tooltipDefaults = (_blockonsEditorObj$bl = blockonsEditorObj.blockonsOptions) === null || _blockonsEditorObj$bl === void 0 ? void 0 : _blockonsEditorObj$bl.tooltips;
var BlockonsInlineBlockTooltip = function BlockonsInlineBlockTooltip(_ref) {
  var isActive = _ref.isActive,
    onChange = _ref.onChange,
    value = _ref.value;
  var selectedBlock = useSelect(function (select) {
    return select("core/block-editor").getSelectedBlock();
  }, []);

  // console.log("selectedBlock", selectedBlock);

  var allowedBlocks = ["core/paragraph", "core/heading", "core/list-item", "blockons/line-heading"];
  if (!selectedBlock || !allowedBlocks.includes(selectedBlock.name)) {
    return null;
  }
  var activeFormat = getActiveFormat(value, "blockons/inline-tooltip");
  var _useState = useState({
      style: (tooltipDefaults === null || tooltipDefaults === void 0 ? void 0 : tooltipDefaults.style) || "underlined",
      theme: (tooltipDefaults === null || tooltipDefaults === void 0 ? void 0 : tooltipDefaults.theme) || "one",
      title: "",
      text: "",
      icon: "",
      image: "",
      color: (tooltipDefaults === null || tooltipDefaults === void 0 ? void 0 : tooltipDefaults.color) || "#424242",
      fcolor: (tooltipDefaults === null || tooltipDefaults === void 0 ? void 0 : tooltipDefaults.fcolor) || "#000",
      pcolor: (tooltipDefaults === null || tooltipDefaults === void 0 ? void 0 : tooltipDefaults.pcolor) || "#424242",
      pfcolor: (tooltipDefaults === null || tooltipDefaults === void 0 ? void 0 : tooltipDefaults.pfcolor) || "#FFF"
    }),
    _useState2 = _slicedToArray(_useState, 2),
    selectedTooltip = _useState2[0],
    setSelectedTooltip = _useState2[1];
  useEffect(function () {
    if (activeFormat) {
      var attributes = Object.keys(activeFormat.attributes).length > 0 ? activeFormat.attributes : Object.keys(activeFormat.unregisteredAttributes).length > 0 ? activeFormat.unregisteredAttributes : "";
      setSelectedTooltip({
        style: attributes["data-style"] || (tooltipDefaults === null || tooltipDefaults === void 0 ? void 0 : tooltipDefaults.style) || "underlined",
        theme: attributes["data-theme"] || (tooltipDefaults === null || tooltipDefaults === void 0 ? void 0 : tooltipDefaults.theme) || "one",
        title: attributes["data-title"] || "",
        text: attributes["data-text"] || "",
        icon: attributes["data-icon"] || "",
        image: attributes["data-image"] || "",
        color: attributes["data-color"] || (tooltipDefaults === null || tooltipDefaults === void 0 ? void 0 : tooltipDefaults.color) || "#424242",
        fcolor: attributes["data-fcolor"] || (tooltipDefaults === null || tooltipDefaults === void 0 ? void 0 : tooltipDefaults.fcolor) || "#000",
        pcolor: attributes["data-pcolor"] || (tooltipDefaults === null || tooltipDefaults === void 0 ? void 0 : tooltipDefaults.pcolor) || "#424242",
        pfcolor: attributes["data-pfcolor"] || (tooltipDefaults === null || tooltipDefaults === void 0 ? void 0 : tooltipDefaults.pfcolor) || "#FFF"
      });
    } else {
      setSelectedTooltip({
        style: (tooltipDefaults === null || tooltipDefaults === void 0 ? void 0 : tooltipDefaults.style) || "underlined",
        theme: (tooltipDefaults === null || tooltipDefaults === void 0 ? void 0 : tooltipDefaults.theme) || "one",
        title: "",
        text: "",
        icon: "",
        image: "",
        color: (tooltipDefaults === null || tooltipDefaults === void 0 ? void 0 : tooltipDefaults.color) || "#424242",
        fcolor: (tooltipDefaults === null || tooltipDefaults === void 0 ? void 0 : tooltipDefaults.fcolor) || "#000",
        pcolor: (tooltipDefaults === null || tooltipDefaults === void 0 ? void 0 : tooltipDefaults.pcolor) || "#424242",
        pfcolor: (tooltipDefaults === null || tooltipDefaults === void 0 ? void 0 : tooltipDefaults.pfcolor) || "#FFF"
      });
    }
  }, [activeFormat]);
  var handleTooltipChange = function handleTooltipChange(property) {
    return function (newValue) {
      setSelectedTooltip(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, property, newValue));
      });
    };
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BlockControls, null, /*#__PURE__*/React.createElement(ToolbarGroup, null, /*#__PURE__*/React.createElement(Dropdown, {
    className: "blockons-tooltip-settings-dropdown",
    contentClassName: "blockons-tooltip-settings-popover",
    popoverProps: {
      placement: "bottom-start"
    },
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
        onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(ToolbarButton, {
        icon: /*#__PURE__*/React.createElement("span", {
          className: "dashicons dashicons-format-status"
        }),
        title: "Blockons Tooltip",
        onClick: onToggle,
        isActive: isActive
      });
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        className: "blockons-tooltip-settings"
      }, /*#__PURE__*/React.createElement(TextControl, {
        label: __("Tooltip Title", "blockons"),
        value: selectedTooltip.title,
        onChange: handleTooltipChange("title")
      }), /*#__PURE__*/React.createElement(TextareaControl, {
        label: __("Tooltip Text", "blockons"),
        value: selectedTooltip.text,
        onChange: handleTooltipChange("text")
      }), isPremium && /*#__PURE__*/React.createElement("p", {
        className: "tooltip-link-hint"
      }, __("Add links", "blockons"), ": (Blockons [*https://blockons.com/])"), /*#__PURE__*/React.createElement("div", {
        className: "blockons-divider"
      }), /*#__PURE__*/React.createElement("div", {
        className: "blockons-tooltip-extra"
      }, /*#__PURE__*/React.createElement("div", {
        className: "blockons-tooltip-color-wrap"
      }, !isPremium && /*#__PURE__*/React.createElement(Dropdown, {
        className: "blockons-tooltip-color disabled",
        contentClassName: "blockons-tooltip-color-picker",
        renderToggle: function renderToggle(_ref3) {
          var isOpen = _ref3.isOpen,
            onToggle = _ref3.onToggle;
          return /*#__PURE__*/React.createElement(ToolbarButton, {
            icon: /*#__PURE__*/React.createElement("span", {
              className: "dashicons dashicons-admin-appearance"
            }),
            title: __("Blockons Tooltip", "blockons"),
            onClick: onToggle,
            isActive: isOpen,
            className: "btn-disabled"
          });
        },
        renderContent: function renderContent() {
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, __("Blockons Pro offers advanced Tooltips with more customization options.", "blockons")));
        }
      }), isPremium && activeFormat && /*#__PURE__*/React.createElement(Dropdown, {
        className: "blockons-tooltip-color",
        contentClassName: "blockons-tooltip-color-picker",
        renderToggle: function renderToggle(_ref4) {
          var isOpen = _ref4.isOpen,
            onToggle = _ref4.onToggle;
          return /*#__PURE__*/React.createElement(ToolbarButton, {
            icon: /*#__PURE__*/React.createElement("span", {
              className: "dashicons dashicons-admin-appearance"
            }),
            title: __("Blockons Tooltip", "blockons"),
            onClick: onToggle,
            isActive: isOpen
          });
        },
        renderContent: function renderContent() {
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectControl, {
            label: __("Tooltip Link Style", "blockons"),
            value: selectedTooltip.style,
            options: [{
              label: "Underlined",
              value: "underlined"
            }, {
              label: "Underline Dashed",
              value: "dashed"
            }, {
              label: "Highlighted",
              value: "highlight"
            }],
            onChange: handleTooltipChange("style")
          }), /*#__PURE__*/React.createElement("div", {
            className: "blockons-tooltip-clrs"
          }, /*#__PURE__*/React.createElement(Dropdown, {
            className: "blockons-tooltip-color",
            contentClassName: "blockons-tooltip-color-picker",
            renderToggle: function renderToggle(_ref5) {
              var isOpen = _ref5.isOpen,
                onToggle = _ref5.onToggle;
              return /*#__PURE__*/React.createElement(Button, {
                variant: "link",
                onClick: onToggle,
                className: "blockons-colorpicker-btn"
              }, /*#__PURE__*/React.createElement(ColorIndicator, {
                colorValue: selectedTooltip.color
              }), /*#__PURE__*/React.createElement("span", null, __("Tooltip Link Color", "blockons")));
            },
            renderContent: function renderContent() {
              return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ColorPicker, {
                color: selectedTooltip.color,
                onChange: handleTooltipChange("color"),
                defaultValue: "#f4f4f4"
              }));
            }
          }), (selectedTooltip.theme !== "one" || selectedTooltip.theme !== "two") && /*#__PURE__*/React.createElement(Dropdown, {
            className: "blockons-tooltip-color",
            contentClassName: "blockons-tooltip-color-picker",
            renderToggle: function renderToggle(_ref6) {
              var isOpen = _ref6.isOpen,
                onToggle = _ref6.onToggle;
              return /*#__PURE__*/React.createElement(Button, {
                variant: "link",
                onClick: onToggle,
                className: "blockons-colorpicker-btn"
              }, /*#__PURE__*/React.createElement(ColorIndicator, {
                colorValue: selectedTooltip.fcolor
              }), /*#__PURE__*/React.createElement("span", null, __("Font Color", "blockons")));
            },
            renderContent: function renderContent() {
              return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ColorPicker, {
                color: selectedTooltip.fcolor,
                onChange: handleTooltipChange("fcolor"),
                defaultValue: "#f4f4f4"
              }));
            }
          })), /*#__PURE__*/React.createElement("div", {
            className: "blockons-divider"
          }), /*#__PURE__*/React.createElement(TextControl, {
            label: __("Tooltip Icon", "blockons"),
            value: selectedTooltip.icon,
            onChange: handleTooltipChange("icon"),
            help: __("Add the CSS class names of the Font Awesome icon to be displayed in the Tooltip", "blockons")
          }), /*#__PURE__*/React.createElement("div", {
            className: "blockons-divider"
          }), /*#__PURE__*/React.createElement(SelectControl, {
            label: __("Tooltip Popup Theme", "blockons"),
            value: selectedTooltip.theme,
            options: [{
              label: "Dark",
              value: "one"
            }, {
              label: "Light",
              value: "two"
            }, {
              label: "Custom Color",
              value: "custom"
            }],
            onChange: handleTooltipChange("theme")
          }), /*#__PURE__*/React.createElement("div", {
            className: "blockons-divider"
          }), selectedTooltip.theme === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
            className: "blockons-tooltip-clrs"
          }, /*#__PURE__*/React.createElement(Dropdown, {
            className: "blockons-tooltip-color",
            contentClassName: "blockons-tooltip-color-picker",
            renderToggle: function renderToggle(_ref7) {
              var isOpen = _ref7.isOpen,
                onToggle = _ref7.onToggle;
              return /*#__PURE__*/React.createElement(Button, {
                variant: "link",
                onClick: onToggle,
                className: "blockons-colorpicker-btn"
              }, /*#__PURE__*/React.createElement(ColorIndicator, {
                colorValue: selectedTooltip.pcolor
              }), /*#__PURE__*/React.createElement("span", null, __("Popup Color", "blockons")));
            },
            renderContent: function renderContent() {
              return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ColorPicker, {
                color: selectedTooltip.pcolor,
                onChange: handleTooltipChange("pcolor"),
                defaultValue: "#d6c0ff"
              }));
            }
          }), (selectedTooltip.theme !== "one" || selectedTooltip.theme !== "two") && /*#__PURE__*/React.createElement(Dropdown, {
            className: "blockons-tooltip-color",
            contentClassName: "blockons-tooltip-color-picker",
            renderToggle: function renderToggle(_ref8) {
              var isOpen = _ref8.isOpen,
                onToggle = _ref8.onToggle;
              return /*#__PURE__*/React.createElement(Button, {
                variant: "link",
                onClick: onToggle,
                className: "blockons-colorpicker-btn"
              }, /*#__PURE__*/React.createElement(ColorIndicator, {
                colorValue: selectedTooltip.pfcolor
              }), /*#__PURE__*/React.createElement("span", null, __("Popup Font Color", "blockons")));
            },
            renderContent: function renderContent() {
              return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ColorPicker, {
                color: selectedTooltip.pfcolor,
                onChange: handleTooltipChange("pfcolor"),
                defaultValue: "#000"
              }));
            }
          })), /*#__PURE__*/React.createElement("div", {
            className: "blockons-divider"
          })), /*#__PURE__*/React.createElement(MediaUpload, {
            className: "components-icon-button components-toolbar__control",
            allowedTypes: ["image"],
            value: selectedTooltip.image,
            onSelect: function onSelect(media) {
              return handleTooltipChange("image")(media.url);
            },
            render: function render(_ref9) {
              var open = _ref9.open;
              return selectedTooltip !== null && selectedTooltip !== void 0 && selectedTooltip.image ? /*#__PURE__*/React.createElement("div", {
                className: "blockons-tooltip-imgpreview"
              }, /*#__PURE__*/React.createElement("div", {
                className: "blockons-tooltip-imgpreview-img"
              }, /*#__PURE__*/React.createElement("img", {
                src: selectedTooltip.image
              })), /*#__PURE__*/React.createElement(Button, {
                className: "blockons-tt-upload-button remove",
                onClick: function onClick() {
                  handleTooltipChange("image")("");
                }
              }, __("Remove Image", "blockons"))) : /*#__PURE__*/React.createElement(Button, {
                className: "blockons-tt-upload-button",
                icon: "format-image",
                onClick: open
              }, __("Add a Tooltip Image", "blockons"));
            }
          }), /*#__PURE__*/React.createElement("p", {
            className: "note-link"
          }, /*#__PURE__*/React.createElement("a", {
            href: "https://blockons.com/documentation/content-tooltips/#adding-tooltips",
            target: "_blank"
          }, __("Read more on adding Tooltips", "blockons"))));
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: "blockons-tooltip-preview  ".concat(selectedTooltip.theme)
      }, isPremium && selectedTooltip.style === "highlight" ? /*#__PURE__*/React.createElement("mark", {
        className: "blockons-tooltip-style ".concat(selectedTooltip.style),
        style: _objectSpread({
          backgroundColor: selectedTooltip.color
        }, selectedTooltip.fcolor ? {
          color: selectedTooltip.fcolor
        } : {})
      }, "Tooltip Preview") : /*#__PURE__*/React.createElement("span", _extends({
        className: "blockons-tooltip-style ".concat(selectedTooltip.style)
      }, isPremium ? {
        style: _objectSpread(_objectSpread({}, selectedTooltip.color ? {
          borderBottomColor: selectedTooltip.color
        } : {}), selectedTooltip.fcolor ? {
          color: selectedTooltip.fcolor
        } : {})
      } : {}), "Tooltip Preview"), isPremium && selectedTooltip.icon && /*#__PURE__*/React.createElement("span", {
        className: "blockons-icon ".concat(selectedTooltip.icon),
        style: {
          color: selectedTooltip.color
        }
      }), /*#__PURE__*/React.createElement("div", _extends({
        className: "blockons-tooltip-preview-tooltip"
      }, isPremium && selectedTooltip.theme === "custom" ? {
        style: {
          backgroundColor: selectedTooltip.pcolor,
          color: selectedTooltip.pfcolor
        }
      } : {}), isPremium && selectedTooltip.image && /*#__PURE__*/React.createElement("div", {
        className: "blockons-tooltip-img"
      }, /*#__PURE__*/React.createElement("div", {
        className: "blockons-tooltip-img-prvw"
      }, "Image")), /*#__PURE__*/React.createElement("h6", {
        className: "preview-title"
      }, "Tooltip Title"), /*#__PURE__*/React.createElement("p", {
        className: "preview-text"
      }, "Some example text."), /*#__PURE__*/React.createElement("span", _extends({
        className: "blockons-tooltip-arrow"
      }, isPremium && selectedTooltip.theme === "custom" ? {
        style: {
          borderTopColor: selectedTooltip.pcolor
        }
      } : {}))))), /*#__PURE__*/React.createElement("div", {
        className: "blockons-tooltip-btns ".concat(activeFormat ? "active" : "")
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        className: "blockons-tooltip-button",
        onClick: function onClick() {
          onChange(applyFormat(value, {
            type: "blockons/inline-tooltip",
            attributes: {
              "data-style": selectedTooltip.style,
              "data-theme": selectedTooltip.theme,
              "data-title": selectedTooltip.title,
              "data-text": selectedTooltip.text,
              "data-icon": selectedTooltip.icon,
              "data-image": selectedTooltip.image,
              "data-color": selectedTooltip.color,
              "data-fcolor": selectedTooltip.fcolor,
              "data-pcolor": selectedTooltip.pcolor,
              "data-pfcolor": selectedTooltip.pfcolor
            }
          }));
        },
        disabled: !selectedTooltip.title && !selectedTooltip.text
      }, activeFormat && (selectedTooltip.title || selectedTooltip.text) ? __("Update Tooltip", "blockons") : __("Add Tooltip", "blockons")), activeFormat && /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        className: "blockons-tooltip-button remove",
        onClick: function onClick() {
          onChange(removeFormat(value, "blockons/inline-tooltip"));
        },
        icon: "no-alt",
        title: __("Remove Tooltip", "blockons")
      })));
    }
  }))));
};
registerFormatType("blockons/inline-tooltip", {
  title: "Blockons Tooltip",
  tagName: "span",
  className: "blockons-inline-tooltip",
  edit: BlockonsInlineBlockTooltip
});

/***/ }),

/***/ 5228:
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 5287:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(5228),n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.2";


/***/ }),

/***/ 6540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(5287);
} else {}


/***/ }),

/***/ 7604:
/***/ ((module, exports, __webpack_require__) => {

var __webpack_unused_export__;
var __WEBPACK_AMD_DEFINE_RESULT__;/* global window, exports, define */

!function() {
    'use strict'

    var re = {
        not_string: /[^s]/,
        not_bool: /[^t]/,
        not_type: /[^T]/,
        not_primitive: /[^v]/,
        number: /[diefg]/,
        numeric_arg: /[bcdiefguxX]/,
        json: /[j]/,
        not_json: /[^j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[+-]/
    }

    function sprintf(key) {
        // `arguments` is not an array, but should be fine for this call
        return sprintf_format(sprintf_parse(key), arguments)
    }

    function vsprintf(fmt, argv) {
        return sprintf.apply(null, [fmt].concat(argv || []))
    }

    function sprintf_format(parse_tree, argv) {
        var cursor = 1, tree_length = parse_tree.length, arg, output = '', i, k, ph, pad, pad_character, pad_length, is_positive, sign
        for (i = 0; i < tree_length; i++) {
            if (typeof parse_tree[i] === 'string') {
                output += parse_tree[i]
            }
            else if (typeof parse_tree[i] === 'object') {
                ph = parse_tree[i] // convenience purposes only
                if (ph.keys) { // keyword argument
                    arg = argv[cursor]
                    for (k = 0; k < ph.keys.length; k++) {
                        if (arg == undefined) {
                            throw new Error(sprintf('[sprintf] Cannot access property "%s" of undefined value "%s"', ph.keys[k], ph.keys[k-1]))
                        }
                        arg = arg[ph.keys[k]]
                    }
                }
                else if (ph.param_no) { // positional argument (explicit)
                    arg = argv[ph.param_no]
                }
                else { // positional argument (implicit)
                    arg = argv[cursor++]
                }

                if (re.not_type.test(ph.type) && re.not_primitive.test(ph.type) && arg instanceof Function) {
                    arg = arg()
                }

                if (re.numeric_arg.test(ph.type) && (typeof arg !== 'number' && isNaN(arg))) {
                    throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg))
                }

                if (re.number.test(ph.type)) {
                    is_positive = arg >= 0
                }

                switch (ph.type) {
                    case 'b':
                        arg = parseInt(arg, 10).toString(2)
                        break
                    case 'c':
                        arg = String.fromCharCode(parseInt(arg, 10))
                        break
                    case 'd':
                    case 'i':
                        arg = parseInt(arg, 10)
                        break
                    case 'j':
                        arg = JSON.stringify(arg, null, ph.width ? parseInt(ph.width) : 0)
                        break
                    case 'e':
                        arg = ph.precision ? parseFloat(arg).toExponential(ph.precision) : parseFloat(arg).toExponential()
                        break
                    case 'f':
                        arg = ph.precision ? parseFloat(arg).toFixed(ph.precision) : parseFloat(arg)
                        break
                    case 'g':
                        arg = ph.precision ? String(Number(arg.toPrecision(ph.precision))) : parseFloat(arg)
                        break
                    case 'o':
                        arg = (parseInt(arg, 10) >>> 0).toString(8)
                        break
                    case 's':
                        arg = String(arg)
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 't':
                        arg = String(!!arg)
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'T':
                        arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase()
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'u':
                        arg = parseInt(arg, 10) >>> 0
                        break
                    case 'v':
                        arg = arg.valueOf()
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'x':
                        arg = (parseInt(arg, 10) >>> 0).toString(16)
                        break
                    case 'X':
                        arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase()
                        break
                }
                if (re.json.test(ph.type)) {
                    output += arg
                }
                else {
                    if (re.number.test(ph.type) && (!is_positive || ph.sign)) {
                        sign = is_positive ? '+' : '-'
                        arg = arg.toString().replace(re.sign, '')
                    }
                    else {
                        sign = ''
                    }
                    pad_character = ph.pad_char ? ph.pad_char === '0' ? '0' : ph.pad_char.charAt(1) : ' '
                    pad_length = ph.width - (sign + arg).length
                    pad = ph.width ? (pad_length > 0 ? pad_character.repeat(pad_length) : '') : ''
                    output += ph.align ? sign + arg + pad : (pad_character === '0' ? sign + pad + arg : pad + sign + arg)
                }
            }
        }
        return output
    }

    var sprintf_cache = Object.create(null)

    function sprintf_parse(fmt) {
        if (sprintf_cache[fmt]) {
            return sprintf_cache[fmt]
        }

        var _fmt = fmt, match, parse_tree = [], arg_names = 0
        while (_fmt) {
            if ((match = re.text.exec(_fmt)) !== null) {
                parse_tree.push(match[0])
            }
            else if ((match = re.modulo.exec(_fmt)) !== null) {
                parse_tree.push('%')
            }
            else if ((match = re.placeholder.exec(_fmt)) !== null) {
                if (match[2]) {
                    arg_names |= 1
                    var field_list = [], replacement_field = match[2], field_match = []
                    if ((field_match = re.key.exec(replacement_field)) !== null) {
                        field_list.push(field_match[1])
                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            }
                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            }
                            else {
                                throw new SyntaxError('[sprintf] failed to parse named argument key')
                            }
                        }
                    }
                    else {
                        throw new SyntaxError('[sprintf] failed to parse named argument key')
                    }
                    match[2] = field_list
                }
                else {
                    arg_names |= 2
                }
                if (arg_names === 3) {
                    throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported')
                }

                parse_tree.push(
                    {
                        placeholder: match[0],
                        param_no:    match[1],
                        keys:        match[2],
                        sign:        match[3],
                        pad_char:    match[4],
                        align:       match[5],
                        width:       match[6],
                        precision:   match[7],
                        type:        match[8]
                    }
                )
            }
            else {
                throw new SyntaxError('[sprintf] unexpected placeholder')
            }
            _fmt = _fmt.substring(match[0].length)
        }
        return sprintf_cache[fmt] = parse_tree
    }

    /**
     * export to either browser or node.js
     */
    /* eslint-disable quote-props */
    if (true) {
        __webpack_unused_export__ = sprintf
        __webpack_unused_export__ = vsprintf
    }
    if (typeof window !== 'undefined') {
        window['sprintf'] = sprintf
        window['vsprintf'] = vsprintf

        if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                return {
                    'sprintf': sprintf,
                    'vsprintf': vsprintf
                }
            }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        }
    }
    /* eslint-enable quote-props */
}(); // eslint-disable-line


/***/ }),

/***/ 6942:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/backend/editor/extensions/tooltips.js
var tooltips = __webpack_require__(8720);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6942);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
;// CONCATENATED MODULE: ./node_modules/memize/dist/index.js
/**
 * Memize options object.
 *
 * @typedef MemizeOptions
 *
 * @property {number} [maxSize] Maximum size of the cache.
 */

/**
 * Internal cache entry.
 *
 * @typedef MemizeCacheNode
 *
 * @property {?MemizeCacheNode|undefined} [prev] Previous node.
 * @property {?MemizeCacheNode|undefined} [next] Next node.
 * @property {Array<*>}                   args   Function arguments for cache
 *                                               entry.
 * @property {*}                          val    Function result.
 */

/**
 * Properties of the enhanced function for controlling cache.
 *
 * @typedef MemizeMemoizedFunction
 *
 * @property {()=>void} clear Clear the cache.
 */

/**
 * Accepts a function to be memoized, and returns a new memoized function, with
 * optional options.
 *
 * @template {(...args: any[]) => any} F
 *
 * @param {F}             fn        Function to memoize.
 * @param {MemizeOptions} [options] Options object.
 *
 * @return {((...args: Parameters<F>) => ReturnType<F>) & MemizeMemoizedFunction} Memoized function.
 */
function memize(fn, options) {
	var size = 0;

	/** @type {?MemizeCacheNode|undefined} */
	var head;

	/** @type {?MemizeCacheNode|undefined} */
	var tail;

	options = options || {};

	function memoized(/* ...args */) {
		var node = head,
			len = arguments.length,
			args,
			i;

		searchCache: while (node) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if (node.args.length !== arguments.length) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for (i = 0; i < len; i++) {
				if (node.args[i] !== arguments[i]) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if (node !== head) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if (node === tail) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				/** @type {MemizeCacheNode} */ (node.prev).next = node.next;
				if (node.next) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				/** @type {MemizeCacheNode} */ (head).prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array(len);
		for (i = 0; i < len; i++) {
			args[i] = arguments[i];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply(null, args),
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if (head) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if (size === /** @type {MemizeOptions} */ (options).maxSize) {
			tail = /** @type {MemizeCacheNode} */ (tail).prev;
			/** @type {MemizeCacheNode} */ (tail).next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function () {
		head = null;
		tail = null;
		size = 0;
	};

	// Ignore reason: There's not a clear solution to create an intersection of
	// the function with additional properties, where the goal is to retain the
	// function signature of the incoming argument and add control properties
	// on the return value.

	// @ts-ignore
	return memoized;
}



// EXTERNAL MODULE: ./node_modules/sprintf-js/src/sprintf.js
var sprintf = __webpack_require__(7604);
;// CONCATENATED MODULE: ./node_modules/@wordpress/i18n/build-module/sprintf.js
/**
 * External dependencies
 */



/**
 * Log to console, once per message; or more precisely, per referentially equal
 * argument set. Because Jed throws errors, we log these to the console instead
 * to avoid crashing the application.
 *
 * @param {...*} args Arguments to pass to `console.error`
 */
const logErrorOnce = memize(console.error); // eslint-disable-line no-console

/**
 * Returns a formatted string. If an error occurs in applying the format, the
 * original format string is returned.
 *
 * @param {string} format The format of the string to generate.
 * @param {...*}   args   Arguments to apply to the format.
 *
 * @see https://www.npmjs.com/package/sprintf-js
 *
 * @return {string} The formatted string.
 */
function sprintf_sprintf(format, ...args) {
  try {
    return sprintfjs.sprintf(format, ...args);
  } catch (error) {
    if (error instanceof Error) {
      logErrorOnce('sprintf error: \n\n' + error.toString());
    }
    return format;
  }
}
//# sourceMappingURL=sprintf.js.map
;// CONCATENATED MODULE: ./node_modules/@tannin/postfix/index.js
var PRECEDENCE, OPENERS, TERMINATORS, PATTERN;

/**
 * Operator precedence mapping.
 *
 * @type {Object}
 */
PRECEDENCE = {
	'(': 9,
	'!': 8,
	'*': 7,
	'/': 7,
	'%': 7,
	'+': 6,
	'-': 6,
	'<': 5,
	'<=': 5,
	'>': 5,
	'>=': 5,
	'==': 4,
	'!=': 4,
	'&&': 3,
	'||': 2,
	'?': 1,
	'?:': 1,
};

/**
 * Characters which signal pair opening, to be terminated by terminators.
 *
 * @type {string[]}
 */
OPENERS = [ '(', '?' ];

/**
 * Characters which signal pair termination, the value an array with the
 * opener as its first member. The second member is an optional operator
 * replacement to push to the stack.
 *
 * @type {string[]}
 */
TERMINATORS = {
	')': [ '(' ],
	':': [ '?', '?:' ],
};

/**
 * Pattern matching operators and openers.
 *
 * @type {RegExp}
 */
PATTERN = /<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;

/**
 * Given a C expression, returns the equivalent postfix (Reverse Polish)
 * notation terms as an array.
 *
 * If a postfix string is desired, simply `.join( ' ' )` the result.
 *
 * @example
 *
 * ```js
 * import postfix from '@tannin/postfix';
 *
 * postfix( 'n > 1' );
 * // ⇒ [ 'n', '1', '>' ]
 * ```
 *
 * @param {string} expression C expression.
 *
 * @return {string[]} Postfix terms.
 */
function postfix( expression ) {
	var terms = [],
		stack = [],
		match, operator, term, element;

	while ( ( match = expression.match( PATTERN ) ) ) {
		operator = match[ 0 ];

		// Term is the string preceding the operator match. It may contain
		// whitespace, and may be empty (if operator is at beginning).
		term = expression.substr( 0, match.index ).trim();
		if ( term ) {
			terms.push( term );
		}

		while ( ( element = stack.pop() ) ) {
			if ( TERMINATORS[ operator ] ) {
				if ( TERMINATORS[ operator ][ 0 ] === element ) {
					// Substitution works here under assumption that because
					// the assigned operator will no longer be a terminator, it
					// will be pushed to the stack during the condition below.
					operator = TERMINATORS[ operator ][ 1 ] || operator;
					break;
				}
			} else if ( OPENERS.indexOf( element ) >= 0 || PRECEDENCE[ element ] < PRECEDENCE[ operator ] ) {
				// Push to stack if either an opener or when pop reveals an
				// element of lower precedence.
				stack.push( element );
				break;
			}

			// For each popped from stack, push to terms.
			terms.push( element );
		}

		if ( ! TERMINATORS[ operator ] ) {
			stack.push( operator );
		}

		// Slice matched fragment from expression to continue match.
		expression = expression.substr( match.index + operator.length );
	}

	// Push remainder of operand, if exists, to terms.
	expression = expression.trim();
	if ( expression ) {
		terms.push( expression );
	}

	// Pop remaining items from stack into terms.
	return terms.concat( stack.reverse() );
}

;// CONCATENATED MODULE: ./node_modules/@tannin/evaluate/index.js
/**
 * Operator callback functions.
 *
 * @type {Object}
 */
var OPERATORS = {
	'!': function( a ) {
		return ! a;
	},
	'*': function( a, b ) {
		return a * b;
	},
	'/': function( a, b ) {
		return a / b;
	},
	'%': function( a, b ) {
		return a % b;
	},
	'+': function( a, b ) {
		return a + b;
	},
	'-': function( a, b ) {
		return a - b;
	},
	'<': function( a, b ) {
		return a < b;
	},
	'<=': function( a, b ) {
		return a <= b;
	},
	'>': function( a, b ) {
		return a > b;
	},
	'>=': function( a, b ) {
		return a >= b;
	},
	'==': function( a, b ) {
		return a === b;
	},
	'!=': function( a, b ) {
		return a !== b;
	},
	'&&': function( a, b ) {
		return a && b;
	},
	'||': function( a, b ) {
		return a || b;
	},
	'?:': function( a, b, c ) {
		if ( a ) {
			throw b;
		}

		return c;
	},
};

/**
 * Given an array of postfix terms and operand variables, returns the result of
 * the postfix evaluation.
 *
 * @example
 *
 * ```js
 * import evaluate from '@tannin/evaluate';
 *
 * // 3 + 4 * 5 / 6 ⇒ '3 4 5 * 6 / +'
 * const terms = [ '3', '4', '5', '*', '6', '/', '+' ];
 *
 * evaluate( terms, {} );
 * // ⇒ 6.333333333333334
 * ```
 *
 * @param {string[]} postfix   Postfix terms.
 * @param {Object}   variables Operand variables.
 *
 * @return {*} Result of evaluation.
 */
function evaluate( postfix, variables ) {
	var stack = [],
		i, j, args, getOperatorResult, term, value;

	for ( i = 0; i < postfix.length; i++ ) {
		term = postfix[ i ];

		getOperatorResult = OPERATORS[ term ];
		if ( getOperatorResult ) {
			// Pop from stack by number of function arguments.
			j = getOperatorResult.length;
			args = Array( j );
			while ( j-- ) {
				args[ j ] = stack.pop();
			}

			try {
				value = getOperatorResult.apply( null, args );
			} catch ( earlyReturn ) {
				return earlyReturn;
			}
		} else if ( variables.hasOwnProperty( term ) ) {
			value = variables[ term ];
		} else {
			value = +term;
		}

		stack.push( value );
	}

	return stack[ 0 ];
}

;// CONCATENATED MODULE: ./node_modules/@tannin/compile/index.js



/**
 * Given a C expression, returns a function which can be called to evaluate its
 * result.
 *
 * @example
 *
 * ```js
 * import compile from '@tannin/compile';
 *
 * const evaluate = compile( 'n > 1' );
 *
 * evaluate( { n: 2 } );
 * // ⇒ true
 * ```
 *
 * @param {string} expression C expression.
 *
 * @return {(variables?:{[variable:string]:*})=>*} Compiled evaluator.
 */
function compile( expression ) {
	var terms = postfix( expression );

	return function( variables ) {
		return evaluate( terms, variables );
	};
}

;// CONCATENATED MODULE: ./node_modules/@tannin/plural-forms/index.js


/**
 * Given a C expression, returns a function which, when called with a value,
 * evaluates the result with the value assumed to be the "n" variable of the
 * expression. The result will be coerced to its numeric equivalent.
 *
 * @param {string} expression C expression.
 *
 * @return {Function} Evaluator function.
 */
function pluralForms( expression ) {
	var evaluate = compile( expression );

	return function( n ) {
		return +evaluate( { n: n } );
	};
}

;// CONCATENATED MODULE: ./node_modules/tannin/index.js


/**
 * Tannin constructor options.
 *
 * @typedef {Object} TanninOptions
 *
 * @property {string}   [contextDelimiter] Joiner in string lookup with context.
 * @property {Function} [onMissingKey]     Callback to invoke when key missing.
 */

/**
 * Domain metadata.
 *
 * @typedef {Object} TanninDomainMetadata
 *
 * @property {string}            [domain]       Domain name.
 * @property {string}            [lang]         Language code.
 * @property {(string|Function)} [plural_forms] Plural forms expression or
 *                                              function evaluator.
 */

/**
 * Domain translation pair respectively representing the singular and plural
 * translation.
 *
 * @typedef {[string,string]} TanninTranslation
 */

/**
 * Locale data domain. The key is used as reference for lookup, the value an
 * array of two string entries respectively representing the singular and plural
 * translation.
 *
 * @typedef {{[key:string]:TanninDomainMetadata|TanninTranslation,'':TanninDomainMetadata|TanninTranslation}} TanninLocaleDomain
 */

/**
 * Jed-formatted locale data.
 *
 * @see http://messageformat.github.io/Jed/
 *
 * @typedef {{[domain:string]:TanninLocaleDomain}} TanninLocaleData
 */

/**
 * Default Tannin constructor options.
 *
 * @type {TanninOptions}
 */
var DEFAULT_OPTIONS = {
	contextDelimiter: '\u0004',
	onMissingKey: null,
};

/**
 * Given a specific locale data's config `plural_forms` value, returns the
 * expression.
 *
 * @example
 *
 * ```
 * getPluralExpression( 'nplurals=2; plural=(n != 1);' ) === '(n != 1)'
 * ```
 *
 * @param {string} pf Locale data plural forms.
 *
 * @return {string} Plural forms expression.
 */
function getPluralExpression( pf ) {
	var parts, i, part;

	parts = pf.split( ';' );

	for ( i = 0; i < parts.length; i++ ) {
		part = parts[ i ].trim();
		if ( part.indexOf( 'plural=' ) === 0 ) {
			return part.substr( 7 );
		}
	}
}

/**
 * Tannin constructor.
 *
 * @class
 *
 * @param {TanninLocaleData} data      Jed-formatted locale data.
 * @param {TanninOptions}    [options] Tannin options.
 */
function Tannin( data, options ) {
	var key;

	/**
	 * Jed-formatted locale data.
	 *
	 * @name Tannin#data
	 * @type {TanninLocaleData}
	 */
	this.data = data;

	/**
	 * Plural forms function cache, keyed by plural forms string.
	 *
	 * @name Tannin#pluralForms
	 * @type {Object<string,Function>}
	 */
	this.pluralForms = {};

	/**
	 * Effective options for instance, including defaults.
	 *
	 * @name Tannin#options
	 * @type {TanninOptions}
	 */
	this.options = {};

	for ( key in DEFAULT_OPTIONS ) {
		this.options[ key ] = options !== undefined && key in options
			? options[ key ]
			: DEFAULT_OPTIONS[ key ];
	}
}

/**
 * Returns the plural form index for the given domain and value.
 *
 * @param {string} domain Domain on which to calculate plural form.
 * @param {number} n      Value for which plural form is to be calculated.
 *
 * @return {number} Plural form index.
 */
Tannin.prototype.getPluralForm = function( domain, n ) {
	var getPluralForm = this.pluralForms[ domain ],
		config, plural, pf;

	if ( ! getPluralForm ) {
		config = this.data[ domain ][ '' ];

		pf = (
			config[ 'Plural-Forms' ] ||
			config[ 'plural-forms' ] ||
			// Ignore reason: As known, there's no way to document the empty
			// string property on a key to guarantee this as metadata.
			// @ts-ignore
			config.plural_forms
		);

		if ( typeof pf !== 'function' ) {
			plural = getPluralExpression(
				config[ 'Plural-Forms' ] ||
				config[ 'plural-forms' ] ||
				// Ignore reason: As known, there's no way to document the empty
				// string property on a key to guarantee this as metadata.
				// @ts-ignore
				config.plural_forms
			);

			pf = pluralForms( plural );
		}

		getPluralForm = this.pluralForms[ domain ] = pf;
	}

	return getPluralForm( n );
};

/**
 * Translate a string.
 *
 * @param {string}      domain   Translation domain.
 * @param {string|void} context  Context distinguishing terms of the same name.
 * @param {string}      singular Primary key for translation lookup.
 * @param {string=}     plural   Fallback value used for non-zero plural
 *                               form index.
 * @param {number=}     n        Value to use in calculating plural form.
 *
 * @return {string} Translated string.
 */
Tannin.prototype.dcnpgettext = function( domain, context, singular, plural, n ) {
	var index, key, entry;

	if ( n === undefined ) {
		// Default to singular.
		index = 0;
	} else {
		// Find index by evaluating plural form for value.
		index = this.getPluralForm( domain, n );
	}

	key = singular;

	// If provided, context is prepended to key with delimiter.
	if ( context ) {
		key = context + this.options.contextDelimiter + singular;
	}

	entry = this.data[ domain ][ key ];

	// Verify not only that entry exists, but that the intended index is within
	// range and non-empty.
	if ( entry && entry[ index ] ) {
		return entry[ index ];
	}

	if ( this.options.onMissingKey ) {
		this.options.onMissingKey( singular, domain );
	}

	// If entry not found, fall back to singular vs. plural with zero index
	// representing the singular value.
	return index === 0 ? singular : plural;
};

;// CONCATENATED MODULE: ./node_modules/@wordpress/i18n/build-module/create-i18n.js
/**
 * External dependencies
 */


/**
 * @typedef {Record<string,any>} LocaleData
 */

/**
 * Default locale data to use for Tannin domain when not otherwise provided.
 * Assumes an English plural forms expression.
 *
 * @type {LocaleData}
 */
const DEFAULT_LOCALE_DATA = {
  '': {
    /** @param {number} n */
    plural_forms(n) {
      return n === 1 ? 0 : 1;
    }
  }
};

/*
 * Regular expression that matches i18n hooks like `i18n.gettext`, `i18n.ngettext`,
 * `i18n.gettext_domain` or `i18n.ngettext_with_context` or `i18n.has_translation`.
 */
const I18N_HOOK_REGEXP = /^i18n\.(n?gettext|has_translation)(_|$)/;

/**
 * @typedef {(domain?: string) => LocaleData} GetLocaleData
 *
 * Returns locale data by domain in a
 * Jed-formatted JSON object shape.
 *
 * @see http://messageformat.github.io/Jed/
 */
/**
 * @typedef {(data?: LocaleData, domain?: string) => void} SetLocaleData
 *
 * Merges locale data into the Tannin instance by domain. Note that this
 * function will overwrite the domain configuration. Accepts data in a
 * Jed-formatted JSON object shape.
 *
 * @see http://messageformat.github.io/Jed/
 */
/**
 * @typedef {(data?: LocaleData, domain?: string) => void} AddLocaleData
 *
 * Merges locale data into the Tannin instance by domain. Note that this
 * function will also merge the domain configuration. Accepts data in a
 * Jed-formatted JSON object shape.
 *
 * @see http://messageformat.github.io/Jed/
 */
/**
 * @typedef {(data?: LocaleData, domain?: string) => void} ResetLocaleData
 *
 * Resets all current Tannin instance locale data and sets the specified
 * locale data for the domain. Accepts data in a Jed-formatted JSON object shape.
 *
 * @see http://messageformat.github.io/Jed/
 */
/** @typedef {() => void} SubscribeCallback */
/** @typedef {() => void} UnsubscribeCallback */
/**
 * @typedef {(callback: SubscribeCallback) => UnsubscribeCallback} Subscribe
 *
 * Subscribes to changes of locale data
 */
/**
 * @typedef {(domain?: string) => string} GetFilterDomain
 * Retrieve the domain to use when calling domain-specific filters.
 */
/**
 * @typedef {(text: string, domain?: string) => string} __
 *
 * Retrieve the translation of text.
 *
 * @see https://developer.wordpress.org/reference/functions/__/
 */
/**
 * @typedef {(text: string, context: string, domain?: string) => string} _x
 *
 * Retrieve translated string with gettext context.
 *
 * @see https://developer.wordpress.org/reference/functions/_x/
 */
/**
 * @typedef {(single: string, plural: string, number: number, domain?: string) => string} _n
 *
 * Translates and retrieves the singular or plural form based on the supplied
 * number.
 *
 * @see https://developer.wordpress.org/reference/functions/_n/
 */
/**
 * @typedef {(single: string, plural: string, number: number, context: string, domain?: string) => string} _nx
 *
 * Translates and retrieves the singular or plural form based on the supplied
 * number, with gettext context.
 *
 * @see https://developer.wordpress.org/reference/functions/_nx/
 */
/**
 * @typedef {() => boolean} IsRtl
 *
 * Check if current locale is RTL.
 *
 * **RTL (Right To Left)** is a locale property indicating that text is written from right to left.
 * For example, the `he` locale (for Hebrew) specifies right-to-left. Arabic (ar) is another common
 * language written RTL. The opposite of RTL, LTR (Left To Right) is used in other languages,
 * including English (`en`, `en-US`, `en-GB`, etc.), Spanish (`es`), and French (`fr`).
 */
/**
 * @typedef {(single: string, context?: string, domain?: string) => boolean} HasTranslation
 *
 * Check if there is a translation for a given string in singular form.
 */
/** @typedef {import('@wordpress/hooks').Hooks} Hooks */

/**
 * An i18n instance
 *
 * @typedef I18n
 * @property {GetLocaleData}   getLocaleData   Returns locale data by domain in a Jed-formatted JSON object shape.
 * @property {SetLocaleData}   setLocaleData   Merges locale data into the Tannin instance by domain. Note that this
 *                                             function will overwrite the domain configuration. Accepts data in a
 *                                             Jed-formatted JSON object shape.
 * @property {AddLocaleData}   addLocaleData   Merges locale data into the Tannin instance by domain. Note that this
 *                                             function will also merge the domain configuration. Accepts data in a
 *                                             Jed-formatted JSON object shape.
 * @property {ResetLocaleData} resetLocaleData Resets all current Tannin instance locale data and sets the specified
 *                                             locale data for the domain. Accepts data in a Jed-formatted JSON object shape.
 * @property {Subscribe}       subscribe       Subscribes to changes of Tannin locale data.
 * @property {__}              __              Retrieve the translation of text.
 * @property {_x}              _x              Retrieve translated string with gettext context.
 * @property {_n}              _n              Translates and retrieves the singular or plural form based on the supplied
 *                                             number.
 * @property {_nx}             _nx             Translates and retrieves the singular or plural form based on the supplied
 *                                             number, with gettext context.
 * @property {IsRtl}           isRTL           Check if current locale is RTL.
 * @property {HasTranslation}  hasTranslation  Check if there is a translation for a given string.
 */

/**
 * Create an i18n instance
 *
 * @param {LocaleData} [initialData]   Locale data configuration.
 * @param {string}     [initialDomain] Domain for which configuration applies.
 * @param {Hooks}      [hooks]         Hooks implementation.
 *
 * @return {I18n} I18n instance.
 */
const createI18n = (initialData, initialDomain, hooks) => {
  /**
   * The underlying instance of Tannin to which exported functions interface.
   *
   * @type {Tannin}
   */
  const tannin = new Tannin({});
  const listeners = new Set();
  const notifyListeners = () => {
    listeners.forEach(listener => listener());
  };

  /**
   * Subscribe to changes of locale data.
   *
   * @param {SubscribeCallback} callback Subscription callback.
   * @return {UnsubscribeCallback} Unsubscribe callback.
   */
  const subscribe = callback => {
    listeners.add(callback);
    return () => listeners.delete(callback);
  };

  /** @type {GetLocaleData} */
  const getLocaleData = (domain = 'default') => tannin.data[domain];

  /**
   * @param {LocaleData} [data]
   * @param {string}     [domain]
   */
  const doSetLocaleData = (data, domain = 'default') => {
    tannin.data[domain] = {
      ...tannin.data[domain],
      ...data
    };

    // Populate default domain configuration (supported locale date which omits
    // a plural forms expression).
    tannin.data[domain][''] = {
      ...DEFAULT_LOCALE_DATA[''],
      ...tannin.data[domain]?.['']
    };

    // Clean up cached plural forms functions cache as it might be updated.
    delete tannin.pluralForms[domain];
  };

  /** @type {SetLocaleData} */
  const setLocaleData = (data, domain) => {
    doSetLocaleData(data, domain);
    notifyListeners();
  };

  /** @type {AddLocaleData} */
  const addLocaleData = (data, domain = 'default') => {
    tannin.data[domain] = {
      ...tannin.data[domain],
      ...data,
      // Populate default domain configuration (supported locale date which omits
      // a plural forms expression).
      '': {
        ...DEFAULT_LOCALE_DATA[''],
        ...tannin.data[domain]?.[''],
        ...data?.['']
      }
    };

    // Clean up cached plural forms functions cache as it might be updated.
    delete tannin.pluralForms[domain];
    notifyListeners();
  };

  /** @type {ResetLocaleData} */
  const resetLocaleData = (data, domain) => {
    // Reset all current Tannin locale data.
    tannin.data = {};

    // Reset cached plural forms functions cache.
    tannin.pluralForms = {};
    setLocaleData(data, domain);
  };

  /**
   * Wrapper for Tannin's `dcnpgettext`. Populates default locale data if not
   * otherwise previously assigned.
   *
   * @param {string|undefined} domain   Domain to retrieve the translated text.
   * @param {string|undefined} context  Context information for the translators.
   * @param {string}           single   Text to translate if non-plural. Used as
   *                                    fallback return value on a caught error.
   * @param {string}           [plural] The text to be used if the number is
   *                                    plural.
   * @param {number}           [number] The number to compare against to use
   *                                    either the singular or plural form.
   *
   * @return {string} The translated string.
   */
  const dcnpgettext = (domain = 'default', context, single, plural, number) => {
    if (!tannin.data[domain]) {
      // Use `doSetLocaleData` to set silently, without notifying listeners.
      doSetLocaleData(undefined, domain);
    }
    return tannin.dcnpgettext(domain, context, single, plural, number);
  };

  /** @type {GetFilterDomain} */
  const getFilterDomain = (domain = 'default') => domain;

  /** @type {__} */
  const __ = (text, domain) => {
    let translation = dcnpgettext(domain, undefined, text);
    if (!hooks) {
      return translation;
    }

    /**
     * Filters text with its translation.
     *
     * @param {string} translation Translated text.
     * @param {string} text        Text to translate.
     * @param {string} domain      Text domain. Unique identifier for retrieving translated strings.
     */
    translation = /** @type {string} */
    /** @type {*} */hooks.applyFilters('i18n.gettext', translation, text, domain);
    return /** @type {string} */(
      /** @type {*} */hooks.applyFilters('i18n.gettext_' + getFilterDomain(domain), translation, text, domain)
    );
  };

  /** @type {_x} */
  const _x = (text, context, domain) => {
    let translation = dcnpgettext(domain, context, text);
    if (!hooks) {
      return translation;
    }

    /**
     * Filters text with its translation based on context information.
     *
     * @param {string} translation Translated text.
     * @param {string} text        Text to translate.
     * @param {string} context     Context information for the translators.
     * @param {string} domain      Text domain. Unique identifier for retrieving translated strings.
     */
    translation = /** @type {string} */
    /** @type {*} */hooks.applyFilters('i18n.gettext_with_context', translation, text, context, domain);
    return /** @type {string} */(
      /** @type {*} */hooks.applyFilters('i18n.gettext_with_context_' + getFilterDomain(domain), translation, text, context, domain)
    );
  };

  /** @type {_n} */
  const _n = (single, plural, number, domain) => {
    let translation = dcnpgettext(domain, undefined, single, plural, number);
    if (!hooks) {
      return translation;
    }

    /**
     * Filters the singular or plural form of a string.
     *
     * @param {string} translation Translated text.
     * @param {string} single      The text to be used if the number is singular.
     * @param {string} plural      The text to be used if the number is plural.
     * @param {string} number      The number to compare against to use either the singular or plural form.
     * @param {string} domain      Text domain. Unique identifier for retrieving translated strings.
     */
    translation = /** @type {string} */
    /** @type {*} */hooks.applyFilters('i18n.ngettext', translation, single, plural, number, domain);
    return /** @type {string} */(
      /** @type {*} */hooks.applyFilters('i18n.ngettext_' + getFilterDomain(domain), translation, single, plural, number, domain)
    );
  };

  /** @type {_nx} */
  const _nx = (single, plural, number, context, domain) => {
    let translation = dcnpgettext(domain, context, single, plural, number);
    if (!hooks) {
      return translation;
    }

    /**
     * Filters the singular or plural form of a string with gettext context.
     *
     * @param {string} translation Translated text.
     * @param {string} single      The text to be used if the number is singular.
     * @param {string} plural      The text to be used if the number is plural.
     * @param {string} number      The number to compare against to use either the singular or plural form.
     * @param {string} context     Context information for the translators.
     * @param {string} domain      Text domain. Unique identifier for retrieving translated strings.
     */
    translation = /** @type {string} */
    /** @type {*} */hooks.applyFilters('i18n.ngettext_with_context', translation, single, plural, number, context, domain);
    return /** @type {string} */(
      /** @type {*} */hooks.applyFilters('i18n.ngettext_with_context_' + getFilterDomain(domain), translation, single, plural, number, context, domain)
    );
  };

  /** @type {IsRtl} */
  const isRTL = () => {
    return 'rtl' === _x('ltr', 'text direction');
  };

  /** @type {HasTranslation} */
  const hasTranslation = (single, context, domain) => {
    const key = context ? context + '\u0004' + single : single;
    let result = !!tannin.data?.[domain !== null && domain !== void 0 ? domain : 'default']?.[key];
    if (hooks) {
      /**
       * Filters the presence of a translation in the locale data.
       *
       * @param {boolean} hasTranslation Whether the translation is present or not..
       * @param {string}  single         The singular form of the translated text (used as key in locale data)
       * @param {string}  context        Context information for the translators.
       * @param {string}  domain         Text domain. Unique identifier for retrieving translated strings.
       */
      result = /** @type { boolean } */
      /** @type {*} */hooks.applyFilters('i18n.has_translation', result, single, context, domain);
      result = /** @type { boolean } */
      /** @type {*} */hooks.applyFilters('i18n.has_translation_' + getFilterDomain(domain), result, single, context, domain);
    }
    return result;
  };
  if (initialData) {
    setLocaleData(initialData, initialDomain);
  }
  if (hooks) {
    /**
     * @param {string} hookName
     */
    const onHookAddedOrRemoved = hookName => {
      if (I18N_HOOK_REGEXP.test(hookName)) {
        notifyListeners();
      }
    };
    hooks.addAction('hookAdded', 'core/i18n', onHookAddedOrRemoved);
    hooks.addAction('hookRemoved', 'core/i18n', onHookAddedOrRemoved);
  }
  return {
    getLocaleData,
    setLocaleData,
    addLocaleData,
    resetLocaleData,
    subscribe,
    __,
    _x,
    _n,
    _nx,
    isRTL,
    hasTranslation
  };
};
//# sourceMappingURL=create-i18n.js.map
;// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/validateNamespace.js
/**
 * Validate a namespace string.
 *
 * @param {string} namespace The namespace to validate - should take the form
 *                           `vendor/plugin/function`.
 *
 * @return {boolean} Whether the namespace is valid.
 */
function validateNamespace(namespace) {
  if ('string' !== typeof namespace || '' === namespace) {
    // eslint-disable-next-line no-console
    console.error('The namespace must be a non-empty string.');
    return false;
  }
  if (!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(namespace)) {
    // eslint-disable-next-line no-console
    console.error('The namespace can only contain numbers, letters, dashes, periods, underscores and slashes.');
    return false;
  }
  return true;
}
/* harmony default export */ const build_module_validateNamespace = (validateNamespace);
//# sourceMappingURL=validateNamespace.js.map
;// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/validateHookName.js
/**
 * Validate a hookName string.
 *
 * @param {string} hookName The hook name to validate. Should be a non empty string containing
 *                          only numbers, letters, dashes, periods and underscores. Also,
 *                          the hook name cannot begin with `__`.
 *
 * @return {boolean} Whether the hook name is valid.
 */
function validateHookName(hookName) {
  if ('string' !== typeof hookName || '' === hookName) {
    // eslint-disable-next-line no-console
    console.error('The hook name must be a non-empty string.');
    return false;
  }
  if (/^__/.test(hookName)) {
    // eslint-disable-next-line no-console
    console.error('The hook name cannot begin with `__`.');
    return false;
  }
  if (!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(hookName)) {
    // eslint-disable-next-line no-console
    console.error('The hook name can only contain numbers, letters, dashes, periods and underscores.');
    return false;
  }
  return true;
}
/* harmony default export */ const build_module_validateHookName = (validateHookName);
//# sourceMappingURL=validateHookName.js.map
;// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createAddHook.js
/**
 * Internal dependencies
 */



/**
 * @callback AddHook
 *
 * Adds the hook to the appropriate hooks container.
 *
 * @param {string}               hookName      Name of hook to add
 * @param {string}               namespace     The unique namespace identifying the callback in the form `vendor/plugin/function`.
 * @param {import('.').Callback} callback      Function to call when the hook is run
 * @param {number}               [priority=10] Priority of this hook
 */

/**
 * Returns a function which, when invoked, will add a hook.
 *
 * @param {import('.').Hooks}    hooks    Hooks instance.
 * @param {import('.').StoreKey} storeKey
 *
 * @return {AddHook} Function that adds a new hook.
 */
function createAddHook(hooks, storeKey) {
  return function addHook(hookName, namespace, callback, priority = 10) {
    const hooksStore = hooks[storeKey];
    if (!build_module_validateHookName(hookName)) {
      return;
    }
    if (!build_module_validateNamespace(namespace)) {
      return;
    }
    if ('function' !== typeof callback) {
      // eslint-disable-next-line no-console
      console.error('The hook callback must be a function.');
      return;
    }

    // Validate numeric priority
    if ('number' !== typeof priority) {
      // eslint-disable-next-line no-console
      console.error('If specified, the hook priority must be a number.');
      return;
    }
    const handler = {
      callback,
      priority,
      namespace
    };
    if (hooksStore[hookName]) {
      // Find the correct insert index of the new hook.
      const handlers = hooksStore[hookName].handlers;

      /** @type {number} */
      let i;
      for (i = handlers.length; i > 0; i--) {
        if (priority >= handlers[i - 1].priority) {
          break;
        }
      }
      if (i === handlers.length) {
        // If append, operate via direct assignment.
        handlers[i] = handler;
      } else {
        // Otherwise, insert before index via splice.
        handlers.splice(i, 0, handler);
      }

      // We may also be currently executing this hook.  If the callback
      // we're adding would come after the current callback, there's no
      // problem; otherwise we need to increase the execution index of
      // any other runs by 1 to account for the added element.
      hooksStore.__current.forEach(hookInfo => {
        if (hookInfo.name === hookName && hookInfo.currentIndex >= i) {
          hookInfo.currentIndex++;
        }
      });
    } else {
      // This is the first hook of its type.
      hooksStore[hookName] = {
        handlers: [handler],
        runs: 0
      };
    }
    if (hookName !== 'hookAdded') {
      hooks.doAction('hookAdded', hookName, namespace, callback, priority);
    }
  };
}
/* harmony default export */ const build_module_createAddHook = (createAddHook);
//# sourceMappingURL=createAddHook.js.map
;// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createRemoveHook.js
/**
 * Internal dependencies
 */



/**
 * @callback RemoveHook
 * Removes the specified callback (or all callbacks) from the hook with a given hookName
 * and namespace.
 *
 * @param {string} hookName  The name of the hook to modify.
 * @param {string} namespace The unique namespace identifying the callback in the
 *                           form `vendor/plugin/function`.
 *
 * @return {number | undefined} The number of callbacks removed.
 */

/**
 * Returns a function which, when invoked, will remove a specified hook or all
 * hooks by the given name.
 *
 * @param {import('.').Hooks}    hooks             Hooks instance.
 * @param {import('.').StoreKey} storeKey
 * @param {boolean}              [removeAll=false] Whether to remove all callbacks for a hookName,
 *                                                 without regard to namespace. Used to create
 *                                                 `removeAll*` functions.
 *
 * @return {RemoveHook} Function that removes hooks.
 */
function createRemoveHook(hooks, storeKey, removeAll = false) {
  return function removeHook(hookName, namespace) {
    const hooksStore = hooks[storeKey];
    if (!build_module_validateHookName(hookName)) {
      return;
    }
    if (!removeAll && !build_module_validateNamespace(namespace)) {
      return;
    }

    // Bail if no hooks exist by this name.
    if (!hooksStore[hookName]) {
      return 0;
    }
    let handlersRemoved = 0;
    if (removeAll) {
      handlersRemoved = hooksStore[hookName].handlers.length;
      hooksStore[hookName] = {
        runs: hooksStore[hookName].runs,
        handlers: []
      };
    } else {
      // Try to find the specified callback to remove.
      const handlers = hooksStore[hookName].handlers;
      for (let i = handlers.length - 1; i >= 0; i--) {
        if (handlers[i].namespace === namespace) {
          handlers.splice(i, 1);
          handlersRemoved++;
          // This callback may also be part of a hook that is
          // currently executing.  If the callback we're removing
          // comes after the current callback, there's no problem;
          // otherwise we need to decrease the execution index of any
          // other runs by 1 to account for the removed element.
          hooksStore.__current.forEach(hookInfo => {
            if (hookInfo.name === hookName && hookInfo.currentIndex >= i) {
              hookInfo.currentIndex--;
            }
          });
        }
      }
    }
    if (hookName !== 'hookRemoved') {
      hooks.doAction('hookRemoved', hookName, namespace);
    }
    return handlersRemoved;
  };
}
/* harmony default export */ const build_module_createRemoveHook = (createRemoveHook);
//# sourceMappingURL=createRemoveHook.js.map
;// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createHasHook.js
/**
 * @callback HasHook
 *
 * Returns whether any handlers are attached for the given hookName and optional namespace.
 *
 * @param {string} hookName    The name of the hook to check for.
 * @param {string} [namespace] Optional. The unique namespace identifying the callback
 *                             in the form `vendor/plugin/function`.
 *
 * @return {boolean} Whether there are handlers that are attached to the given hook.
 */
/**
 * Returns a function which, when invoked, will return whether any handlers are
 * attached to a particular hook.
 *
 * @param {import('.').Hooks}    hooks    Hooks instance.
 * @param {import('.').StoreKey} storeKey
 *
 * @return {HasHook} Function that returns whether any handlers are
 *                   attached to a particular hook and optional namespace.
 */
function createHasHook(hooks, storeKey) {
  return function hasHook(hookName, namespace) {
    const hooksStore = hooks[storeKey];

    // Use the namespace if provided.
    if ('undefined' !== typeof namespace) {
      return hookName in hooksStore && hooksStore[hookName].handlers.some(hook => hook.namespace === namespace);
    }
    return hookName in hooksStore;
  };
}
/* harmony default export */ const build_module_createHasHook = (createHasHook);
//# sourceMappingURL=createHasHook.js.map
;// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createRunHook.js
/**
 * Returns a function which, when invoked, will execute all callbacks
 * registered to a hook of the specified type, optionally returning the final
 * value of the call chain.
 *
 * @param {import('.').Hooks}    hooks                  Hooks instance.
 * @param {import('.').StoreKey} storeKey
 * @param {boolean}              [returnFirstArg=false] Whether each hook callback is expected to
 *                                                      return its first argument.
 *
 * @return {(hookName:string, ...args: unknown[]) => undefined|unknown} Function that runs hook callbacks.
 */
function createRunHook(hooks, storeKey, returnFirstArg = false) {
  return function runHooks(hookName, ...args) {
    const hooksStore = hooks[storeKey];
    if (!hooksStore[hookName]) {
      hooksStore[hookName] = {
        handlers: [],
        runs: 0
      };
    }
    hooksStore[hookName].runs++;
    const handlers = hooksStore[hookName].handlers;

    // The following code is stripped from production builds.
    if (false) {}
    if (!handlers || !handlers.length) {
      return returnFirstArg ? args[0] : undefined;
    }
    const hookInfo = {
      name: hookName,
      currentIndex: 0
    };
    hooksStore.__current.push(hookInfo);
    while (hookInfo.currentIndex < handlers.length) {
      const handler = handlers[hookInfo.currentIndex];
      const result = handler.callback.apply(null, args);
      if (returnFirstArg) {
        args[0] = result;
      }
      hookInfo.currentIndex++;
    }
    hooksStore.__current.pop();
    if (returnFirstArg) {
      return args[0];
    }
    return undefined;
  };
}
/* harmony default export */ const build_module_createRunHook = (createRunHook);
//# sourceMappingURL=createRunHook.js.map
;// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createCurrentHook.js
/**
 * Returns a function which, when invoked, will return the name of the
 * currently running hook, or `null` if no hook of the given type is currently
 * running.
 *
 * @param {import('.').Hooks}    hooks    Hooks instance.
 * @param {import('.').StoreKey} storeKey
 *
 * @return {() => string | null} Function that returns the current hook name or null.
 */
function createCurrentHook(hooks, storeKey) {
  return function currentHook() {
    var _hooksStore$__current;
    const hooksStore = hooks[storeKey];
    return (_hooksStore$__current = hooksStore.__current[hooksStore.__current.length - 1]?.name) !== null && _hooksStore$__current !== void 0 ? _hooksStore$__current : null;
  };
}
/* harmony default export */ const build_module_createCurrentHook = (createCurrentHook);
//# sourceMappingURL=createCurrentHook.js.map
;// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createDoingHook.js
/**
 * @callback DoingHook
 * Returns whether a hook is currently being executed.
 *
 * @param {string} [hookName] The name of the hook to check for.  If
 *                            omitted, will check for any hook being executed.
 *
 * @return {boolean} Whether the hook is being executed.
 */

/**
 * Returns a function which, when invoked, will return whether a hook is
 * currently being executed.
 *
 * @param {import('.').Hooks}    hooks    Hooks instance.
 * @param {import('.').StoreKey} storeKey
 *
 * @return {DoingHook} Function that returns whether a hook is currently
 *                     being executed.
 */
function createDoingHook(hooks, storeKey) {
  return function doingHook(hookName) {
    const hooksStore = hooks[storeKey];

    // If the hookName was not passed, check for any current hook.
    if ('undefined' === typeof hookName) {
      return 'undefined' !== typeof hooksStore.__current[0];
    }

    // Return the __current hook.
    return hooksStore.__current[0] ? hookName === hooksStore.__current[0].name : false;
  };
}
/* harmony default export */ const build_module_createDoingHook = (createDoingHook);
//# sourceMappingURL=createDoingHook.js.map
;// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createDidHook.js
/**
 * Internal dependencies
 */


/**
 * @callback DidHook
 *
 * Returns the number of times an action has been fired.
 *
 * @param {string} hookName The hook name to check.
 *
 * @return {number | undefined} The number of times the hook has run.
 */

/**
 * Returns a function which, when invoked, will return the number of times a
 * hook has been called.
 *
 * @param {import('.').Hooks}    hooks    Hooks instance.
 * @param {import('.').StoreKey} storeKey
 *
 * @return {DidHook} Function that returns a hook's call count.
 */
function createDidHook(hooks, storeKey) {
  return function didHook(hookName) {
    const hooksStore = hooks[storeKey];
    if (!build_module_validateHookName(hookName)) {
      return;
    }
    return hooksStore[hookName] && hooksStore[hookName].runs ? hooksStore[hookName].runs : 0;
  };
}
/* harmony default export */ const build_module_createDidHook = (createDidHook);
//# sourceMappingURL=createDidHook.js.map
;// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createHooks.js
/**
 * Internal dependencies
 */








/**
 * Internal class for constructing hooks. Use `createHooks()` function
 *
 * Note, it is necessary to expose this class to make its type public.
 *
 * @private
 */
class _Hooks {
  constructor() {
    /** @type {import('.').Store} actions */
    this.actions = Object.create(null);
    this.actions.__current = [];

    /** @type {import('.').Store} filters */
    this.filters = Object.create(null);
    this.filters.__current = [];
    this.addAction = build_module_createAddHook(this, 'actions');
    this.addFilter = build_module_createAddHook(this, 'filters');
    this.removeAction = build_module_createRemoveHook(this, 'actions');
    this.removeFilter = build_module_createRemoveHook(this, 'filters');
    this.hasAction = build_module_createHasHook(this, 'actions');
    this.hasFilter = build_module_createHasHook(this, 'filters');
    this.removeAllActions = build_module_createRemoveHook(this, 'actions', true);
    this.removeAllFilters = build_module_createRemoveHook(this, 'filters', true);
    this.doAction = build_module_createRunHook(this, 'actions');
    this.applyFilters = build_module_createRunHook(this, 'filters', true);
    this.currentAction = build_module_createCurrentHook(this, 'actions');
    this.currentFilter = build_module_createCurrentHook(this, 'filters');
    this.doingAction = build_module_createDoingHook(this, 'actions');
    this.doingFilter = build_module_createDoingHook(this, 'filters');
    this.didAction = build_module_createDidHook(this, 'actions');
    this.didFilter = build_module_createDidHook(this, 'filters');
  }
}

/** @typedef {_Hooks} Hooks */

/**
 * Returns an instance of the hooks object.
 *
 * @return {Hooks} A Hooks instance.
 */
function createHooks() {
  return new _Hooks();
}
/* harmony default export */ const build_module_createHooks = (createHooks);
//# sourceMappingURL=createHooks.js.map
;// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/index.js
/**
 * Internal dependencies
 */


/** @typedef {(...args: any[])=>any} Callback */

/**
 * @typedef Handler
 * @property {Callback} callback  The callback
 * @property {string}   namespace The namespace
 * @property {number}   priority  The namespace
 */

/**
 * @typedef Hook
 * @property {Handler[]} handlers Array of handlers
 * @property {number}    runs     Run counter
 */

/**
 * @typedef Current
 * @property {string} name         Hook name
 * @property {number} currentIndex The index
 */

/**
 * @typedef {Record<string, Hook> & {__current: Current[]}} Store
 */

/**
 * @typedef {'actions' | 'filters'} StoreKey
 */

/**
 * @typedef {import('./createHooks').Hooks} Hooks
 */

const defaultHooks = build_module_createHooks();
const {
  addAction,
  addFilter,
  removeAction,
  removeFilter,
  hasAction,
  hasFilter,
  removeAllActions,
  removeAllFilters,
  doAction,
  applyFilters,
  currentAction,
  currentFilter,
  doingAction,
  doingFilter,
  didAction,
  didFilter,
  actions,
  filters
} = defaultHooks;

//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@wordpress/i18n/build-module/default-i18n.js
/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

const i18n = createI18n(undefined, undefined, defaultHooks);

/**
 * Default, singleton instance of `I18n`.
 */
/* harmony default export */ const default_i18n = ((/* unused pure expression or super */ null && (i18n)));

/*
 * Comments in this file are duplicated from ./i18n due to
 * https://github.com/WordPress/gutenberg/pull/20318#issuecomment-590837722
 */

/**
 * @typedef {import('./create-i18n').LocaleData} LocaleData
 * @typedef {import('./create-i18n').SubscribeCallback} SubscribeCallback
 * @typedef {import('./create-i18n').UnsubscribeCallback} UnsubscribeCallback
 */

/**
 * Returns locale data by domain in a Jed-formatted JSON object shape.
 *
 * @see http://messageformat.github.io/Jed/
 *
 * @param {string} [domain] Domain for which to get the data.
 * @return {LocaleData} Locale data.
 */
const getLocaleData = i18n.getLocaleData.bind(i18n);

/**
 * Merges locale data into the Tannin instance by domain. Accepts data in a
 * Jed-formatted JSON object shape.
 *
 * @see http://messageformat.github.io/Jed/
 *
 * @param {LocaleData} [data]   Locale data configuration.
 * @param {string}     [domain] Domain for which configuration applies.
 */
const setLocaleData = i18n.setLocaleData.bind(i18n);

/**
 * Resets all current Tannin instance locale data and sets the specified
 * locale data for the domain. Accepts data in a Jed-formatted JSON object shape.
 *
 * @see http://messageformat.github.io/Jed/
 *
 * @param {LocaleData} [data]   Locale data configuration.
 * @param {string}     [domain] Domain for which configuration applies.
 */
const resetLocaleData = i18n.resetLocaleData.bind(i18n);

/**
 * Subscribes to changes of locale data
 *
 * @param {SubscribeCallback} callback Subscription callback
 * @return {UnsubscribeCallback} Unsubscribe callback
 */
const subscribe = i18n.subscribe.bind(i18n);

/**
 * Retrieve the translation of text.
 *
 * @see https://developer.wordpress.org/reference/functions/__/
 *
 * @param {string} text     Text to translate.
 * @param {string} [domain] Domain to retrieve the translated text.
 *
 * @return {string} Translated text.
 */
const __ = i18n.__.bind(i18n);

/**
 * Retrieve translated string with gettext context.
 *
 * @see https://developer.wordpress.org/reference/functions/_x/
 *
 * @param {string} text     Text to translate.
 * @param {string} context  Context information for the translators.
 * @param {string} [domain] Domain to retrieve the translated text.
 *
 * @return {string} Translated context string without pipe.
 */
const _x = i18n._x.bind(i18n);

/**
 * Translates and retrieves the singular or plural form based on the supplied
 * number.
 *
 * @see https://developer.wordpress.org/reference/functions/_n/
 *
 * @param {string} single   The text to be used if the number is singular.
 * @param {string} plural   The text to be used if the number is plural.
 * @param {number} number   The number to compare against to use either the
 *                          singular or plural form.
 * @param {string} [domain] Domain to retrieve the translated text.
 *
 * @return {string} The translated singular or plural form.
 */
const _n = i18n._n.bind(i18n);

/**
 * Translates and retrieves the singular or plural form based on the supplied
 * number, with gettext context.
 *
 * @see https://developer.wordpress.org/reference/functions/_nx/
 *
 * @param {string} single   The text to be used if the number is singular.
 * @param {string} plural   The text to be used if the number is plural.
 * @param {number} number   The number to compare against to use either the
 *                          singular or plural form.
 * @param {string} context  Context information for the translators.
 * @param {string} [domain] Domain to retrieve the translated text.
 *
 * @return {string} The translated singular or plural form.
 */
const _nx = i18n._nx.bind(i18n);

/**
 * Check if current locale is RTL.
 *
 * **RTL (Right To Left)** is a locale property indicating that text is written from right to left.
 * For example, the `he` locale (for Hebrew) specifies right-to-left. Arabic (ar) is another common
 * language written RTL. The opposite of RTL, LTR (Left To Right) is used in other languages,
 * including English (`en`, `en-US`, `en-GB`, etc.), Spanish (`es`), and French (`fr`).
 *
 * @return {boolean} Whether locale is RTL.
 */
const isRTL = i18n.isRTL.bind(i18n);

/**
 * Check if there is a translation for a given string (in singular form).
 *
 * @param {string} single    Singular form of the string to look up.
 * @param {string} [context] Context information for the translators.
 * @param {string} [domain]  Domain to retrieve the translated text.
 * @return {boolean} Whether the translation exists or not.
 */
const hasTranslation = i18n.hasTranslation.bind(i18n);
//# sourceMappingURL=default-i18n.js.map
;// CONCATENATED MODULE: ./node_modules/@wordpress/i18n/build-module/index.js



//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./src/backend/settings/components/UI/BlockonsNote.js


var BlockonsNote = function BlockonsNote(_ref) {
  var imageUrl = _ref.imageUrl,
    title = _ref.title,
    text = _ref.text,
    docLink = _ref.docLink,
    upgradeLink = _ref.upgradeLink,
    proFeatures = _ref.proFeatures,
    noline = _ref.noline;
  return /*#__PURE__*/react.createElement("div", {
    className: "blockons-editor-note ".concat(noline ? "noline" : "")
  }, imageUrl && /*#__PURE__*/react.createElement("div", {
    className: "bl-note-img"
  }, /*#__PURE__*/react.createElement("img", {
    src: imageUrl,
    alt: title
  })), title && /*#__PURE__*/react.createElement("h4", {
    className: "bl-note-title"
  }, title), text && /*#__PURE__*/react.createElement("div", {
    className: "bl-note-txt"
  }, text), proFeatures && /*#__PURE__*/react.createElement("div", {
    className: "bl-note-features"
  }, proFeatures.map(function (feature, i) {
    return /*#__PURE__*/react.createElement("div", {
      key: i,
      className: "bl-note-feature"
    }, feature);
  })), (docLink || upgradeLink) && /*#__PURE__*/react.createElement("div", {
    className: "bl-note-links"
  }, docLink && /*#__PURE__*/react.createElement("a", {
    href: docLink,
    className: "bl-note-link",
    target: "_blank"
  }, __("Read Documentation", "blockons")), upgradeLink && /*#__PURE__*/react.createElement("a", {
    href: upgradeLink,
    className: "bl-note-link upgrade",
    target: "_blank"
  }, __("Upgrade to Pro", "blockons"))));
};
/* harmony default export */ const UI_BlockonsNote = (BlockonsNote);
;// CONCATENATED MODULE: ./src/backend/editor/extensions/imagepopups.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _blockonsEditorObj$bl;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var imagepopups_ = wp.i18n.__;
var imagepopups_addFilter = wp.hooks.addFilter;
var _lodash = lodash,
  imagepopups_assign = _lodash.assign,
  merge = _lodash.merge;
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var isPremium = Boolean(blockonsEditorObj.isPremium);
var defaultOptions = (_blockonsEditorObj$bl = blockonsEditorObj.blockonsOptions) === null || _blockonsEditorObj$bl === void 0 ? void 0 : _blockonsEditorObj$bl.imagepopups;
var defaultOptionImgEnabled = Boolean(defaultOptions === null || defaultOptions === void 0 ? void 0 : defaultOptions.enabled);
var allowedImgPopupBlockTypes = ["core/image"];

/**
 * Add New Attributes to all blocks
 */
function blockonsAddImgPopupAttributes(settings, name) {
  var showOnImageBlock = allowedImgPopupBlockTypes.includes(name);
  if (!showOnImageBlock) {
    return settings;
  }
  var blockImgPopupAtts = {
    blockonsPopupEnabled: {
      type: "boolean",
      "default": false
    },
    blockonsPopupIcon: {
      type: "string",
      "default": (defaultOptions === null || defaultOptions === void 0 ? void 0 : defaultOptions.icon) || "one"
    },
    blockonsPopupIconPos: {
      type: "string",
      "default": (defaultOptions === null || defaultOptions === void 0 ? void 0 : defaultOptions.iconpos) || "topleft"
    },
    blockonsPopupIconColor: {
      type: "string",
      "default": (defaultOptions === null || defaultOptions === void 0 ? void 0 : defaultOptions.iconcolor) || "dark"
    },
    blockonsGalleryId: {
      type: "string",
      "default": ""
    }
  };
  return imagepopups_assign({}, settings, {
    attributes: merge(settings.attributes, blockImgPopupAtts)
  });
}
/**
 * Add New Controls to all blocks
 */
var blockonsAddInspectorImgPopupControls = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    var Fragment = wp.element.Fragment;
    var InspectorControls = wp.blockEditor.InspectorControls;
    var _wp$components = wp.components,
      PanelBody = _wp$components.PanelBody,
      ToggleControl = _wp$components.ToggleControl,
      SelectControl = _wp$components.SelectControl,
      TextControl = _wp$components.TextControl;
    var _props$attributes = props.attributes,
      blockonsPopupEnabled = _props$attributes.blockonsPopupEnabled,
      blockonsPopupIcon = _props$attributes.blockonsPopupIcon,
      blockonsPopupIconPos = _props$attributes.blockonsPopupIconPos,
      blockonsPopupIconColor = _props$attributes.blockonsPopupIconColor,
      blockonsGalleryId = _props$attributes.blockonsGalleryId,
      setAttributes = props.setAttributes,
      name = props.name;
    var showOnImageBlock = allowedImgPopupBlockTypes.includes(name);
    if (!showOnImageBlock || !defaultOptionImgEnabled) {
      return /*#__PURE__*/React.createElement(BlockEdit, props);
    }
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(BlockEdit, props), /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
      title: imagepopups_("Image Lightbox Settings", "blockons"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(ToggleControl, {
      checked: blockonsPopupEnabled,
      label: imagepopups_("Enable Image Lightbox", "blockons"),
      onChange: function onChange(newValue) {
        return setAttributes({
          blockonsPopupEnabled: newValue
        });
      }
    }), blockonsPopupEnabled && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "blockons-divider"
    }), /*#__PURE__*/React.createElement(SelectControl, {
      label: imagepopups_("Icon", "blockons"),
      value: blockonsPopupIcon,
      options: [{
        label: "Magnifying Glass",
        value: "one"
      }, {
        label: "Expand",
        value: "two"
      }, {
        label: "Diagonal Arrows",
        value: "three"
      }, {
        label: "Maximize",
        value: "four"
      }, {
        label: "Plus",
        value: "five"
      }, {
        label: "Cross Arrows",
        value: "six"
      }],
      onChange: function onChange(newValue) {
        return setAttributes({
          blockonsPopupIcon: newValue
        });
      },
      __nextHasNoMarginBottom: true
    }), /*#__PURE__*/React.createElement(SelectControl, {
      label: imagepopups_("Icon Position", "blockons"),
      value: blockonsPopupIconPos,
      options: [{
        label: "Top Left",
        value: "topleft"
      }, {
        label: "Top Right",
        value: "topright"
      }, {
        label: "Bottom Left",
        value: "bottomleft"
      }, {
        label: "Bottom Right",
        value: "bottomright"
      }, {
        label: "Center Center",
        value: "center"
      }],
      onChange: function onChange(newValue) {
        return setAttributes({
          blockonsPopupIconPos: newValue
        });
      },
      __nextHasNoMarginBottom: true
    }), /*#__PURE__*/React.createElement(SelectControl, {
      label: imagepopups_("Icon Color", "blockons"),
      value: blockonsPopupIconColor,
      options: [{
        label: "Dark",
        value: "dark"
      }, {
        label: "Light",
        value: "light"
      }],
      onChange: function onChange(newValue) {
        return setAttributes({
          blockonsPopupIconColor: newValue
        });
      },
      __nextHasNoMarginBottom: true
    }), isPremium && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "blockons-divider"
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: imagepopups_("Gallery ID", "blockons"),
      value: blockonsGalleryId,
      onChange: function onChange(newValue) {
        return setAttributes({
          blockonsGalleryId: newValue
        });
      },
      help: imagepopups_("Enter a unique ID for the gallery. All images with the same ID will be grouped together.", "blockons")
    })), /*#__PURE__*/React.createElement("div", {
      className: "blockons-divider"
    }), /*#__PURE__*/React.createElement(UI_BlockonsNote, {
      imageUrl: "",
      title: imagepopups_("Using Image Popups", "blockons"),
      text: imagepopups_("Enable this option to show the image in a popup when clicked.", "blockons"),
      docLink: "https://blockons.com/documentation/block-visibility",
      noline: true
    })))));
  };
}, "blockonsAddInspectorImgPopupControls");
/**
 * Add CSS Classes to the blocks in the editor
 */
var blockonsAddEditorImgPopupAttributes = createHigherOrderComponent(function (BlockListBlock) {
  return function (props) {
    var _props$attributes2 = props.attributes,
      caption = _props$attributes2.caption,
      url = _props$attributes2.url,
      blockonsPopupEnabled = _props$attributes2.blockonsPopupEnabled,
      blockonsPopupIcon = _props$attributes2.blockonsPopupIcon,
      blockonsPopupIconPos = _props$attributes2.blockonsPopupIconPos,
      blockonsPopupIconColor = _props$attributes2.blockonsPopupIconColor,
      blockonsGalleryId = _props$attributes2.blockonsGalleryId,
      className = props.className,
      name = props.name;
    var showOnImageBlock = allowedImgPopupBlockTypes.includes(name);
    if (!showOnImageBlock) {
      return /*#__PURE__*/React.createElement(BlockListBlock, props);
    }
    var newWrapperProps = defaultOptionImgEnabled && blockonsPopupEnabled ? _objectSpread({
      "data-href": url,
      "data-title": caption || "",
      "data-popup": JSON.stringify({
        enabled: blockonsPopupEnabled || false,
        iconpos: blockonsPopupIconPos || "topleft"
      })
    }, isPremium && blockonsGalleryId !== "" ? {
      "data-gall": blockonsGalleryId
    } : {}) : {};
    var newClasses = defaultOptionImgEnabled && blockonsPopupEnabled ? "blockons-venobox icon-".concat(blockonsPopupIcon, " ").concat(blockonsPopupIconPos, " ").concat(blockonsPopupIconColor) : className;
    var newClassnames = classnames_default()(className, newClasses);
    return /*#__PURE__*/React.createElement(BlockListBlock, _extends({}, props, {
      className: newClassnames,
      wrapperProps: newWrapperProps
    }));
  };
}, "blockonsAddEditorImgPopupAttributes");
/**
 * Add Classes to the blocks on the Frontend
 */
var blockonsAddFrontendImgPopupAttributes = function blockonsAddFrontendImgPopupAttributes(extraProps, blockType, attributes) {
  var caption = attributes.caption,
    url = attributes.url,
    blockonsPopupEnabled = attributes.blockonsPopupEnabled,
    blockonsPopupIcon = attributes.blockonsPopupIcon,
    blockonsPopupIconPos = attributes.blockonsPopupIconPos,
    blockonsPopupIconColor = attributes.blockonsPopupIconColor,
    blockonsGalleryId = attributes.blockonsGalleryId;
  var name = blockType.name;
  var showOnImageBlock = allowedImgPopupBlockTypes.includes(name);
  if (!showOnImageBlock || !defaultOptionImgEnabled) {
    return extraProps;
  }
  if (blockonsPopupEnabled) {
    var newClasses = "blockons-venobox icon-".concat(blockonsPopupIcon, " ").concat(blockonsPopupIconPos, " ").concat(blockonsPopupIconColor);
    extraProps.className = classnames_default()(extraProps.className, _defineProperty({}, newClasses, true));
    extraProps["data-href"] = url;
    extraProps["data-title"] = caption || "";
    extraProps["data-popup"] = JSON.stringify({
      enabled: blockonsPopupEnabled || false,
      iconpos: blockonsPopupIconPos || "topleft"
    });
    if (isPremium && blockonsGalleryId !== "") {
      extraProps["data-gall"] = blockonsGalleryId;
    }
  }
  return extraProps;
};

/**
 * WP Editor Hooks
 */
imagepopups_addFilter("blocks.registerBlockType", "blockons/block-imagepopups-attributes", blockonsAddImgPopupAttributes);
imagepopups_addFilter("editor.BlockEdit", "blockons/block-imagepopups-controls", blockonsAddInspectorImgPopupControls);
imagepopups_addFilter("blocks.getSaveContent.extraProps", "blockons/block-imagepopups-frontend-classes", blockonsAddFrontendImgPopupAttributes);
imagepopups_addFilter("editor.BlockListBlock", "blockons/block-imagepopups-editor-classes", blockonsAddEditorImgPopupAttributes);
;// CONCATENATED MODULE: ./src/backend/editor/extensions/visibility.js
var visibility_blockonsEditorObj$bl;
function visibility_extends() { return visibility_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, visibility_extends.apply(null, arguments); }


var visibility_ = wp.i18n.__;
var visibility_addFilter = wp.hooks.addFilter;
var visibility_lodash = lodash,
  visibility_assign = visibility_lodash.assign,
  visibility_merge = visibility_lodash.merge;
var visibility_createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var visibility_isPremium = Boolean(blockonsEditorObj.isPremium);
var visibilityEnabled = Boolean((visibility_blockonsEditorObj$bl = blockonsEditorObj.blockonsOptions) === null || visibility_blockonsEditorObj$bl === void 0 || (visibility_blockonsEditorObj$bl = visibility_blockonsEditorObj$bl.blockvisibility) === null || visibility_blockonsEditorObj$bl === void 0 ? void 0 : visibility_blockonsEditorObj$bl.enabled) || false;
var allowedVisibilityBlockTypes = ["core/group", "core/columns", "core/column"];

/**
 * Add New Attributes to all blocks
 */
function blockonsAddVisibilityAttributes(settings, name) {
  if (!visibility_isPremium || !visibilityEnabled) return settings;

  // console.log({ settings, name });
  var showVisibilitySettings = allowedVisibilityBlockTypes.includes(name);
  var blockVisibilityAtts = showVisibilitySettings ? {
    blockonsHideOnDesktop: {
      type: "boolean",
      "default": false
    },
    blockonsHideOnTablet: {
      type: "boolean",
      "default": false
    },
    blockonsHideOnMobile: {
      type: "boolean",
      "default": false
    }
  } : {};
  return visibility_assign({}, settings, {
    attributes: visibility_merge(settings.attributes, blockVisibilityAtts)
  });
}
/**
 * Add New Controls to all blocks
 */
var blockonsAddInspectorVisibilityControls = visibility_createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    var Fragment = wp.element.Fragment;
    var _wp$blockEditor = wp.blockEditor,
      InspectorControls = _wp$blockEditor.InspectorControls,
      BlockControls = _wp$blockEditor.BlockControls;
    var _wp$components = wp.components,
      PanelBody = _wp$components.PanelBody,
      ToggleControl = _wp$components.ToggleControl,
      RangeControl = _wp$components.RangeControl,
      SelectControl = _wp$components.SelectControl,
      TextControl = _wp$components.TextControl,
      ToolbarGroup = _wp$components.ToolbarGroup,
      DropdownMenu = _wp$components.DropdownMenu;
    var _props$attributes = props.attributes,
      blockonsHideOnDesktop = _props$attributes.blockonsHideOnDesktop,
      blockonsHideOnTablet = _props$attributes.blockonsHideOnTablet,
      blockonsHideOnMobile = _props$attributes.blockonsHideOnMobile,
      setAttributes = props.setAttributes,
      name = props.name;
    var showVisibilitySettings = allowedVisibilityBlockTypes.includes(name);
    if (!visibility_isPremium || !visibilityEnabled) {
      return /*#__PURE__*/React.createElement(BlockEdit, props);
    }
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(BlockEdit, props), showVisibilitySettings && /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
      title: visibility_("Block Visibility", "blockons"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(UI_BlockonsNote, {
      imageUrl: "",
      title: visibility_("Using Block Visibility", "blockons"),
      text: visibility_("Hide certain blocks by device screen size. For more information, click the link below.", "blockons"),
      docLink: "https://blockons.com/documentation/block-visibility-per-device/"
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      checked: blockonsHideOnDesktop,
      label: visibility_("Hide on desktop", "blockons"),
      onChange: function onChange(newValue) {
        return setAttributes({
          blockonsHideOnDesktop: newValue
        });
      }
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      checked: blockonsHideOnTablet,
      label: visibility_("Hide on tablet", "blockons"),
      onChange: function onChange(newValue) {
        return setAttributes({
          blockonsHideOnTablet: newValue
        });
      }
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      checked: blockonsHideOnMobile,
      label: visibility_("Hide on mobile", "blockons"),
      onChange: function onChange(newValue) {
        return setAttributes({
          blockonsHideOnMobile: newValue
        });
      }
    }))));
  };
}, "blockonsAddInspectorVisibilityControls");
/**
 * Add CSS Classes to the blocks in the editor
 */
var blockonsAddEditorVisibilityAttributes = visibility_createHigherOrderComponent(function (BlockListBlock) {
  return function (props) {
    var _props$attributes2 = props.attributes,
      blockonsHideOnDesktop = _props$attributes2.blockonsHideOnDesktop,
      blockonsHideOnTablet = _props$attributes2.blockonsHideOnTablet,
      blockonsHideOnMobile = _props$attributes2.blockonsHideOnMobile,
      className = props.className,
      name = props.name;
    var showVisibilitySettings = allowedVisibilityBlockTypes.includes(name);
    if (!visibility_isPremium || !visibilityEnabled) {
      return /*#__PURE__*/React.createElement(BlockListBlock, props);
    }
    var newClassnames = showVisibilitySettings ? classnames_default()(className, "".concat(blockonsHideOnDesktop ? "hide-on-desktop" : "", " ").concat(blockonsHideOnTablet ? "hide-on-tablet" : "", " ").concat(blockonsHideOnMobile ? "hide-on-mobile" : "")) : className;
    return /*#__PURE__*/React.createElement(BlockListBlock, visibility_extends({}, props, {
      className: newClassnames
    }));
  };
}, "blockonsAddEditorVisibilityAttributes");
/**
 * Add Classes to the blocks on the Frontend
 */
var blockonsAddFrontendVisibilityAttributes = function blockonsAddFrontendVisibilityAttributes(extraProps, blockType, attributes) {
  var blockonsHideOnDesktop = attributes.blockonsHideOnDesktop,
    blockonsHideOnTablet = attributes.blockonsHideOnTablet,
    blockonsHideOnMobile = attributes.blockonsHideOnMobile;
  var name = blockType.name;
  var showVisibilitySettings = allowedVisibilityBlockTypes.includes(name);
  if (!visibility_isPremium || !visibilityEnabled) {
    return extraProps;
  }
  if (showVisibilitySettings) {
    extraProps.className = classnames_default()(extraProps.className, {
      "hide-on-desktop": blockonsHideOnDesktop,
      "hide-on-tablet": blockonsHideOnTablet,
      "hide-on-mobile": blockonsHideOnMobile
    });
  }
  return extraProps;
};

/**
 * WP Editor Hooks
 */
visibility_addFilter("blocks.registerBlockType", "blockons/block-visibility-attributes", blockonsAddVisibilityAttributes);
visibility_addFilter("editor.BlockEdit", "blockons/block-visibility-controls", blockonsAddInspectorVisibilityControls);
visibility_addFilter("blocks.getSaveContent.extraProps", "blockons/block-visibility-frontend-clases", blockonsAddFrontendVisibilityAttributes);
visibility_addFilter("editor.BlockListBlock", "blockons/block-visibility-editor-clases", blockonsAddEditorVisibilityAttributes);
;// CONCATENATED MODULE: ./src/backend/editor/extensions/animations.js
var animations_blockonsEditorObj$bl, _blockonsEditorObj$bl2;
function animations_extends() { return animations_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, animations_extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var animations_ = wp.i18n.__;
var animations_addFilter = wp.hooks.addFilter;
var animations_lodash = lodash,
  animations_assign = animations_lodash.assign,
  animations_merge = animations_lodash.merge;
var animations_createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var animations_isPremium = Boolean(blockonsEditorObj.isPremium);
var animationsEnabled = Boolean((animations_blockonsEditorObj$bl = blockonsEditorObj.blockonsOptions) === null || animations_blockonsEditorObj$bl === void 0 || (animations_blockonsEditorObj$bl = animations_blockonsEditorObj$bl.blockanimation) === null || animations_blockonsEditorObj$bl === void 0 ? void 0 : animations_blockonsEditorObj$bl.enabled) || false;
var animationsSettings = (_blockonsEditorObj$bl2 = blockonsEditorObj.blockonsOptions) === null || _blockonsEditorObj$bl2 === void 0 ? void 0 : _blockonsEditorObj$bl2.blockanimation;
var allowedAnimationBlockTypes = ["core/group", "core/columns", "core/column"];

/**
 * Add New Attributes to all blocks
 */
function blockonsAddAnimationAttributes(settings, name) {
  if (!animations_isPremium || !animationsEnabled) return settings;

  // console.log({ settings, name });
  var showAnimationSettings = allowedAnimationBlockTypes.includes(name);
  var blockAnimationAtts = showAnimationSettings ? {
    blockonsEnableAnimation: {
      type: "boolean",
      "default": false
    },
    blockonsAnimation: {
      type: "string",
      "default": (animationsSettings === null || animationsSettings === void 0 ? void 0 : animationsSettings.default_style) || "fade"
    },
    blockonsAnimationDirection: {
      type: "string",
      "default": (animationsSettings === null || animationsSettings === void 0 ? void 0 : animationsSettings.default_direction) || "-up"
    },
    blockonsAnimationDuration: {
      type: "number",
      "default": (animationsSettings === null || animationsSettings === void 0 ? void 0 : animationsSettings.default_duration) || 850
    },
    blockonsAnimationDelay: {
      type: "number",
      "default": (animationsSettings === null || animationsSettings === void 0 ? void 0 : animationsSettings.default_delay) || 50
    },
    blockonsAnimationOffset: {
      type: "number",
      "default": (animationsSettings === null || animationsSettings === void 0 ? void 0 : animationsSettings.default_offset) || 80
    },
    blockonsAnimationOnce: {
      type: "boolean",
      "default": (animationsSettings === null || animationsSettings === void 0 ? void 0 : animationsSettings.default_animate_once) || false
    },
    blockonsAnimationMirror: {
      type: "boolean",
      "default": (animationsSettings === null || animationsSettings === void 0 ? void 0 : animationsSettings.default_mirror) || false
    }
  } : {};
  return animations_assign({}, settings, {
    attributes: animations_merge(settings.attributes, blockAnimationAtts)
  });
}
/**
 * Add New Controls to all blocks
 */
var blockonsAddAnimationInspectorControls = animations_createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    var Fragment = wp.element.Fragment;
    var _wp$blockEditor = wp.blockEditor,
      InspectorControls = _wp$blockEditor.InspectorControls,
      BlockControls = _wp$blockEditor.BlockControls;
    var _wp$components = wp.components,
      PanelBody = _wp$components.PanelBody,
      ToggleControl = _wp$components.ToggleControl,
      RangeControl = _wp$components.RangeControl,
      SelectControl = _wp$components.SelectControl;
    var _props$attributes = props.attributes,
      blockonsEnableAnimation = _props$attributes.blockonsEnableAnimation,
      blockonsAnimation = _props$attributes.blockonsAnimation,
      blockonsAnimationDirection = _props$attributes.blockonsAnimationDirection,
      blockonsAnimationDuration = _props$attributes.blockonsAnimationDuration,
      blockonsAnimationDelay = _props$attributes.blockonsAnimationDelay,
      blockonsAnimationOffset = _props$attributes.blockonsAnimationOffset,
      blockonsAnimationOnce = _props$attributes.blockonsAnimationOnce,
      blockonsAnimationMirror = _props$attributes.blockonsAnimationMirror,
      setAttributes = props.setAttributes,
      name = props.name;
    var showAnimationSettings = allowedAnimationBlockTypes.includes(name);
    if (!animations_isPremium || !animationsEnabled) {
      return /*#__PURE__*/React.createElement(BlockEdit, props);
    }
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(BlockEdit, props), showAnimationSettings && /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
      title: animations_("Block Animations", "blockons"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(UI_BlockonsNote, {
      imageUrl: "",
      title: animations_("Using Block Animations", "blockons"),
      text: animations_("Add scroll animations for layout blocks in your WordPress editor. For more information, click the link below.", "blockons"),
      docLink: "https://blockons.com/documentation/block-animations-on-scroll/"
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      checked: blockonsEnableAnimation,
      label: animations_("Enable Block Animations", "blockons"),
      onChange: function onChange(newValue) {
        setAttributes({
          blockonsEnableAnimation: newValue
        });
      }
    }), blockonsEnableAnimation && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectControl, {
      label: "Style",
      value: blockonsAnimation,
      options: [{
        label: "Fade",
        value: "fade"
      }, {
        label: "Slide",
        value: "slide"
      }, {
        label: "Flip",
        value: "flip"
      }, {
        label: "Zoom In",
        value: "zoom-in"
      }, {
        label: "Zoom Out",
        value: "zoom-out"
      }],
      onChange: function onChange(newAnimationStyle) {
        setAttributes({
          blockonsAnimation: newAnimationStyle
        });
      },
      __nextHasNoMarginBottom: true
    }), /*#__PURE__*/React.createElement(SelectControl, {
      label: "Direction",
      value: blockonsAnimationDirection,
      options: [{
        label: "Up",
        value: "-up"
      }, {
        label: "Down",
        value: "-down"
      }, {
        label: "Left",
        value: "-left"
      }, {
        label: "Right",
        value: "-right"
      }].concat(_toConsumableArray(blockonsAnimation === "zoom-in" || blockonsAnimation === "zoom-out" ? [{
        label: "None",
        value: ""
      }] : []), _toConsumableArray(blockonsAnimation === "fade" ? [{
        label: "Up Right",
        value: "-up-right"
      }, {
        label: "Up Left",
        value: "-up-left"
      }, {
        label: "Down Right",
        value: "-down-right"
      }, {
        label: "Down Left",
        value: "-down-left"
      }] : [])),
      onChange: function onChange(newAnimationDirection) {
        setAttributes({
          blockonsAnimationDirection: newAnimationDirection
        });
      },
      __nextHasNoMarginBottom: true
    }), /*#__PURE__*/React.createElement(RangeControl, {
      label: animations_("Duration", "blockons"),
      value: parseInt(blockonsAnimationDuration),
      onChange: function onChange(newDurationValue) {
        return setAttributes({
          blockonsAnimationDuration: parseInt(newDurationValue)
        });
      },
      min: 50,
      max: 3000,
      step: 50,
      help: animations_("How long the animation takes - 1000 = 1 second", "blockons")
    }), /*#__PURE__*/React.createElement(RangeControl, {
      label: animations_("Delay", "blockons"),
      value: parseInt(blockonsAnimationDelay),
      onChange: function onChange(newDelayValue) {
        return setAttributes({
          blockonsAnimationDelay: parseInt(newDelayValue)
        });
      },
      min: 0,
      max: 3000,
      step: 50,
      help: animations_("The milliseconds before the animation starts - 1000 = 1 second", "blockons")
    }), /*#__PURE__*/React.createElement(RangeControl, {
      label: animations_("Offset", "blockons"),
      value: parseInt(blockonsAnimationOffset),
      onChange: function onChange(newOffsetValue) {
        return setAttributes({
          blockonsAnimationOffset: parseInt(newOffsetValue)
        });
      },
      min: 0,
      max: 600,
      step: 5,
      help: animations_("The offset in pixels from the bottom of the window", "blockons")
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      checked: blockonsAnimationOnce,
      label: animations_("Animate Once", "blockons"),
      onChange: function onChange(newValue) {
        setAttributes({
          blockonsAnimationOnce: newValue
        });
      },
      help: animations_("Whether animation should happen only once - while scrolling down", "blockons")
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      checked: blockonsAnimationMirror,
      label: animations_("Mirror Animations", "blockons"),
      onChange: function onChange(newValue) {
        setAttributes({
          blockonsAnimationMirror: newValue
        });
      },
      help: animations_("Whether elements should animate out while scrolling past them", "blockons")
    })))));
  };
}, "blockonsAddAnimationInspectorControls");
/**
 * Add CSS Classes to the blocks in the editor
 */
var blockonsAddEditorAnimationAttributes = animations_createHigherOrderComponent(function (BlockListBlock) {
  return function (props) {
    var _props$attributes2 = props.attributes,
      blockonsEnableAnimation = _props$attributes2.blockonsEnableAnimation,
      blockonsAnimation = _props$attributes2.blockonsAnimation,
      blockonsAnimationDirection = _props$attributes2.blockonsAnimationDirection,
      blockonsAnimationDuration = _props$attributes2.blockonsAnimationDuration,
      blockonsAnimationDelay = _props$attributes2.blockonsAnimationDelay,
      blockonsAnimationOffset = _props$attributes2.blockonsAnimationOffset,
      blockonsAnimationOnce = _props$attributes2.blockonsAnimationOnce,
      blockonsAnimationMirror = _props$attributes2.blockonsAnimationMirror,
      className = props.className,
      name = props.name;
    var showAnimationSettings = allowedAnimationBlockTypes.includes(name);
    if (!animations_isPremium || !animationsEnabled || !showAnimationSettings) {
      return /*#__PURE__*/React.createElement(BlockListBlock, props);
    }
    var newWrapperProps = blockonsEnableAnimation ? {
      "data-aos": "".concat(blockonsAnimation).concat(blockonsAnimationDirection),
      "data-aos-easing": "ease-in-out",
      "data-aos-duration": blockonsAnimationDuration,
      "data-aos-delay": blockonsAnimationDelay,
      "data-aos-offset": blockonsAnimationOffset,
      "data-aos-once": blockonsAnimationOnce,
      "data-aos-mirror": blockonsAnimationMirror
    } : {};
    return /*#__PURE__*/React.createElement(BlockListBlock, animations_extends({}, props, {
      wrapperProps: newWrapperProps // ANIMATIONS
    }));
  };
}, "blockonsAddEditorAnimationAttributes");
/**
 * Add Classes to the blocks on the Frontend
 */
var blockonsAddFrontendAnimationAttributes = function blockonsAddFrontendAnimationAttributes(extraProps, blockType, attributes) {
  var blockonsEnableAnimation = attributes.blockonsEnableAnimation,
    blockonsAnimation = attributes.blockonsAnimation,
    blockonsAnimationDirection = attributes.blockonsAnimationDirection,
    blockonsAnimationDuration = attributes.blockonsAnimationDuration,
    blockonsAnimationDelay = attributes.blockonsAnimationDelay,
    blockonsAnimationOffset = attributes.blockonsAnimationOffset,
    blockonsAnimationOnce = attributes.blockonsAnimationOnce,
    blockonsAnimationMirror = attributes.blockonsAnimationMirror;
  var name = blockType.name;
  var showAnimationSettings = allowedAnimationBlockTypes.includes(name);
  if (!animations_isPremium || !animationsEnabled || !showAnimationSettings) {
    return extraProps;
  }
  if (blockonsEnableAnimation) {
    extraProps["data-aos"] = "".concat(blockonsAnimation).concat(blockonsAnimationDirection);
    extraProps["data-aos-easing"] = "ease-in-out";
    extraProps["data-aos-duration"] = blockonsAnimationDuration;
    extraProps["data-aos-delay"] = blockonsAnimationDelay;
    extraProps["data-aos-offset"] = blockonsAnimationOffset;
    extraProps["data-aos-once"] = blockonsAnimationOnce;
    extraProps["data-aos-mirror"] = blockonsAnimationMirror;
  }
  return extraProps;
};

/**
 * WP Editor Hooks
 */
animations_addFilter("blocks.registerBlockType", "blockons/block-animations-attributes", blockonsAddAnimationAttributes);
animations_addFilter("editor.BlockEdit", "blockons/block-animations-controls", blockonsAddAnimationInspectorControls);
animations_addFilter("blocks.getSaveContent.extraProps", "blockons/block-animations-frontend-classes", blockonsAddFrontendAnimationAttributes);
animations_addFilter("editor.BlockListBlock", "blockons/block-animations-editor-classes", blockonsAddEditorAnimationAttributes);
;// CONCATENATED MODULE: ./src/backend/editor/editor.js





})();

/******/ })()
;