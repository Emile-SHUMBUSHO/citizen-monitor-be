"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "generator", {
  enumerable: true,
  get: function get() {
    return _generator["default"];
  }
});
Object.defineProperty(exports, "isUser", {
  enumerable: true,
  get: function get() {
    return _isUser["default"];
  }
});
Object.defineProperty(exports, "mailer", {
  enumerable: true,
  get: function get() {
    return _mailer["default"];
  }
});
exports.token = exports.password = void 0;
Object.defineProperty(exports, "validate", {
  enumerable: true,
  get: function get() {
    return _validate["default"];
  }
});
var _validate = _interopRequireDefault(require("../middlewares/validate"));
var token = _interopRequireWildcard(require("./tokens"));
exports.token = token;
var password = _interopRequireWildcard(require("./password"));
exports.password = password;
var _generator = _interopRequireDefault(require("./generator"));
var _isUser = _interopRequireDefault(require("./isUser"));
var _mailer = _interopRequireDefault(require("./mailer"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=index.js.map