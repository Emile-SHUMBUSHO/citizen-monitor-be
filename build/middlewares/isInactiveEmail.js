"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _status = _interopRequireDefault(require("../config/status"));
var _queries = require("../database/queries");
/**
 * @param {object} req Request to the route
 * @param {object} res Response from server
 * @param {object} next middleware called to pass after success
 * @returns {object} returned response
 */
var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _queries.FindOne)('User', {
              email: req.body.email
            });
          case 2:
            user = _context.sent;
            if (!(user && user.status === 'active')) {
              _context.next = 5;
              break;
            }
            return _context.abrupt("return", res.status(_status["default"].EXIST).json({
              error: "Account with '".concat(req.body.email, "' is already active")
            }));
          case 5:
            next();
          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports["default"] = _default;
//# sourceMappingURL=isInactiveEmail.js.map