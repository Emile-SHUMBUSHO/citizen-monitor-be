"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _joi = _interopRequireDefault(require("joi"));
var _default = function _default(user) {
  var schema = _joi["default"].object().keys({
    email: _joi["default"].email().min(16).max(85).required(),
    password: _joi["default"].string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
  });
  return _joi["default"].validate(user, schema, {
    abortEarly: false
  });
};
exports["default"] = _default;
//# sourceMappingURL=login.js.map