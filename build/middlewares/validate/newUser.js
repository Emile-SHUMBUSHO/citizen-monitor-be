"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _joi = _interopRequireDefault(require("joi"));
var _default = function _default(input) {
  var schema = _joi["default"].object().keys({
    firstName: _joi["default"].string().min(2).max(45).required().label('First name'),
    lastName: _joi["default"].string().min(2).max(45).required().label('Last name'),
    username: _joi["default"].string().min(4).max(45).required(),
    email: _joi["default"].string().min(5).max(100).required(),
    bio: _joi["default"].string().min(5).optional(),
    password: _joi["default"].string().min(8).max(100).required(),
    role: _joi["default"].string().min(2).max(100).optional(),
    permissions: _joi["default"].object().optional()
  });
  return _joi["default"].validate(input, schema, {
    abortEarly: false
  });
};
exports["default"] = _default;
//# sourceMappingURL=newUser.js.map