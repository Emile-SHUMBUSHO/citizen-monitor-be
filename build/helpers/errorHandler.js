"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _status = _interopRequireDefault(require("../config/status"));
/**
 * Author: Gilles Kagarama
 * Joi error logger
 */
var Error = /*#__PURE__*/function () {
  function Error() {
    (0, _classCallCheck2["default"])(this, Error);
  }
  (0, _createClass2["default"])(Error, null, [{
    key: "joiErrorHandler",
    value:
    /**
     * Joi error logger
     * @param {object} res response
     * @param {object} result Results passed
     * @returns {object} Object representing the response returned
     */
    function joiErrorHandler(res, result) {
      var errorArray = [];
      result.error.details.forEach(function (value) {
        errorArray.push(value.message.replace(/"/g, ''));
      });
      return res.status(_status["default"].BAD_REQUEST).send({
        errors: errorArray
      });
    }
  }]);
  return Error;
}();
var _default = Error;
exports["default"] = _default;
//# sourceMappingURL=errorHandler.js.map