"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slug = _interopRequireDefault(require("slug"));
var _uniqid = _interopRequireDefault(require("uniqid"));
var _default = function _default(title) {
  if (title.length > 70) title = title.substring(0, 70);
  // generate slug;
  return "".concat((0, _slug["default"])(title, {
    lower: true,
    remove: /[.]/g,
    symbols: false
  }), "-").concat(_uniqid["default"].process());
};
exports["default"] = _default;
//# sourceMappingURL=slug.js.map