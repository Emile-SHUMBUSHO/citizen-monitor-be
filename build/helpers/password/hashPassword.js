"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _default = function _default(password) {
  return _bcryptjs["default"].hashSync(password, _bcryptjs["default"].genSaltSync(8));
};
exports["default"] = _default;
//# sourceMappingURL=hashPassword.js.map