"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = void 0;
var _celebrate = require("celebrate");
var register = (0, _celebrate.celebrate)({
  body: _celebrate.Joi.object().keys({
    email: _celebrate.Joi.string().email().required(),
    password: _celebrate.Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
  })
});
exports.register = register;
//# sourceMappingURL=register.js.map