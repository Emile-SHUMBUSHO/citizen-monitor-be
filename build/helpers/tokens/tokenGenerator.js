"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();

/**
 * @param {object} payload the payload to encode the token
 * @param {object} expiresIn the expiration time of the token
 * @returns {string} the generated token
 */
var _default = function _default() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var expiresIn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    expiresIn: '1d'
  };
  var isValidPayload = true;
  if (typeof payload === 'number') {
    isValidPayload = false;
  } else if (payload === null) {
    isValidPayload = false;
  } else if ((0, _typeof2["default"])(payload) === 'object' && !Object.keys(payload).length) {
    isValidPayload = false;
  }
  return isValidPayload ? _jsonwebtoken["default"].sign(payload, process.env.SECRET_KEY, expiresIn) : null;
};
exports["default"] = _default;
//# sourceMappingURL=tokenGenerator.js.map