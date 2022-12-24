"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();

/**
 * @param {string} token the token to decode
 * @returns {object} the decoded token
 */
var _default = function _default() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  try {
    return _jsonwebtoken["default"].verify(token, process.env.SECRET_KEY);
  } catch (error) {
    return {
      errors: error
    };
  }
};
exports["default"] = _default;
//# sourceMappingURL=tokenDecoder.js.map