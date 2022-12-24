"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _uniqid = _interopRequireDefault(require("uniqid"));
var _default = function _default(type) {
  var codeType;
  switch (type) {
    case 'BUSINESS':
      codeType = (0, _uniqid["default"])('BI').toUpperCase();
      break;
    case 'PAYMENT':
      codeType = (0, _uniqid["default"])('PA').toUpperCase();
      break;
    case 'BOOKING':
      codeType = (0, _uniqid["default"])('BO').toUpperCase();
      break;
    default:
      break;
  }
  return codeType;
};
exports["default"] = _default;
//# sourceMappingURL=code.js.map