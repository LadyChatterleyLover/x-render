"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = color;

var _input = _interopRequireDefault(require("@alifd/next/lib/input"));

var _react = _interopRequireDefault(require("react"));

var _rcColorPicker = _interopRequireDefault(require("rc-color-picker"));

require("rc-color-picker/assets/index.css");

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function color(p) {
  var format = p.schema.format;
  var defaultColor = '#ffffff';

  var onPickerChange = function onPickerChange(e) {
    if (p.disabled || p.readOnly) return;
    var color = e.color,
        alpha = e.alpha;

    if (alpha !== 100) {
      color = (0, _color.default)(color).alpha(alpha / 100).string();
    }

    p.onChange(p.name, color);
  };

  var onInputChange = function onInputChange(value) {
    p.onChange(p.name, value);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "fr-color-picker"
  }, /*#__PURE__*/_react.default.createElement(_rcColorPicker.default, {
    type: format,
    animation: "slide-up",
    color: p.value || defaultColor,
    onClose: onPickerChange
  }), p.readOnly ? /*#__PURE__*/_react.default.createElement("span", null, p.value || defaultColor) : /*#__PURE__*/_react.default.createElement(_input.default, {
    style: {
      width: '100%'
    },
    placeholder: defaultColor,
    disabled: p.disabled,
    value: p.value,
    onChange: onInputChange
  }));
}