"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _joi = _interopRequireDefault(require("joi"));
var _default = function _default(slug) {
  var schema = _joi["default"].object().keys({
    slug: _joi["default"].string().min(16).max(85).required()
  });
  return _joi["default"].validate(slug, schema, {
    abortEarly: false
  });
};
exports["default"] = _default;
//# sourceMappingURL=slug.js.map