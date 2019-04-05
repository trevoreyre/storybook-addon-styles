"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withStyles = void 0;

var _react = _interopRequireDefault(require("react"));

var _makeDecorator = _interopRequireDefault(require("./makeDecorator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var withStyles = (0, _makeDecorator["default"])({
  wrapper: function wrapper(getStory, context, _ref) {
    var options = _ref.options,
        parameters = _ref.parameters;
    return _react["default"].createElement("div", {
      style: _objectSpread({}, options, parameters)
    }, getStory(context));
  }
});
exports.withStyles = withStyles;

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}