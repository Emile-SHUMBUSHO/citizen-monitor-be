"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(type) {
  var code;
  switch (type) {
    case 'topup':
      code = 'T' + Date.now().toString(36).toUpperCase();
      break;
    case 'cashout':
      code = 'C' + Date.now().toString(36).toUpperCase();
      break;
    case 'ride':
      code = 'R' + Date.now().toString(36).toUpperCase();
      break;
    default:
      break;
  }
  return code;
};
exports["default"] = _default;
//# sourceMappingURL=transactionCode.js.map