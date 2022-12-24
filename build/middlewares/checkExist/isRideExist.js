"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
require("dotenv/config");
var _status = _interopRequireDefault(require("../../config/status"));
var _models = _interopRequireDefault(require("../../database/models"));
var _queries = require("../../database/queries");
var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var where, include, ride;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            where = {
              id: req.params.rideId
            };
            include = [{
              model: _models["default"]['User'],
              as: 'user',
              attributes: {
                exclude: ['createdAt', 'updatedAt']
              },
              include: {
                model: _models["default"]['Profile'],
                as: 'user'
              }
            }, {
              model: _models["default"].Car,
              as: 'car',
              attributes: {
                exclude: ['createdAt', 'updatedAt']
              }
            }];
            _context.next = 4;
            return (0, _queries.FindOne)('Ride', where, include);
          case 4:
            ride = _context.sent;
            if (!(Object.keys(ride).length === 0)) {
              _context.next = 7;
              break;
            }
            return _context.abrupt("return", res.status(_status["default"].NO_CONTENT).send({
              error: 'Ride not found'
            }));
          case 7:
            req.ride = ride;
            return _context.abrupt("return", next());
          case 9:
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
//# sourceMappingURL=isRideExist.js.map