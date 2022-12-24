"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _auth = _interopRequireDefault(require("./auth"));
var _slug = _interopRequireDefault(require("./slug"));
var _newUser = _interopRequireDefault(require("./newUser"));
var _register = _interopRequireDefault(require("./register"));
var _default = {
  register: _register["default"],
  auth: _auth["default"],
  slug: _slug["default"],
  newUser: _newUser["default"]
};
exports["default"] = _default;
//# sourceMappingURL=index.js.map