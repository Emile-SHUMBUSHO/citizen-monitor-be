"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _default = function _default(password, hashedPassword) {
  return _bcryptjs["default"].compareSync(password, hashedPassword);
};
exports["default"] = _default;
//# sourceMappingURL=comparePassword.js.map