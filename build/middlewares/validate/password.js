"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
/**
 * @param {string} input
 * @param {string} required
 * @returns {array} an array of errors or an empty array if no error
 */
var _default = function _default(input) {
  var required = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var errors = [];
  if (!input && !required) {
    return [];
  }
  if (input.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,25}$/) && input.match(/[ \\,;:"!#$@*%&'+-/=?^_`{|}~]/)) {
    return [];
  }
  errors = [].concat((0, _toConsumableArray2["default"])(errors), ['Your password should have a minimum 8 and maximum of 25 characters, it must include at least one upper case letter, one lower case letter, one numeric digit and one special character (*&^!%$@#)']);
  return errors;
};
exports["default"] = _default;
//# sourceMappingURL=password.js.map