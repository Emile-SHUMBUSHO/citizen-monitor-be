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
var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _queries.FindOne)('User', {
              email: req.body.email,
              status: 'active'
            });
          case 2:
            user = _context.sent;
            if (Object.keys(user).length) {
              _context.next = 5;
              break;
            }
            return _context.abrupt("return", res.status(_status["default"].UNAUTHORIZED).json({
              error: "Account with '".concat(req.body.email, "' email do not exist")
            }));
          case 5:
            req.auth = user.get();
            next();
          case 7:
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
//# sourceMappingURL=loginUser.js.map