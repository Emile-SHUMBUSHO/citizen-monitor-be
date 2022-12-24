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
var _models = _interopRequireDefault(require("../database/models"));
var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var include, car;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            include = [{
              model: _models["default"]['CarType'],
              as: 'carType',
              attributes: {
                exclude: ['createdAt', 'updatedAt']
              }
            }, {
              model: _models["default"]['CarMake'],
              as: 'carMake',
              attributes: {
                exclude: ['createdAt', 'updatedAt']
              }
            }, {
              model: _models["default"]['CarMeta'],
              as: 'carMeta',
              attributes: {
                exclude: ['createdAt', 'updatedAt']
              }
            }, {
              model: _models["default"]['RentingInformation'],
              as: 'RentingInformation',
              attributes: {
                exclude: ['createdAt', 'updatedAt']
              }
            }, {
              model: _models["default"].Galleries,
              as: 'Galleries',
              attributes: {
                exclude: ['createdAt', 'updatedAt']
              }
            }, {
              model: _models["default"]['Profile'],
              as: 'owner',
              attributes: {
                exclude: ['createdAt', 'updatedAt']
              },
              include: {
                model: _models["default"]['User'],
                as: 'profile',
                attributes: {
                  exclude: ['password', 'createdAt', 'updatedAt']
                }
              }
            }];
            _context.next = 3;
            return (0, _queries.FindOne)('Car', {
              slug: req.params.slug
            }, include);
          case 3:
            car = _context.sent;
            console.log('car', car);
            if (!(car.errors || !Object.keys(car).length > 0)) {
              _context.next = 7;
              break;
            }
            return _context.abrupt("return", res.status(_status["default"].BAD_REQUEST).json({
              error: 'The car you are looking for can not be found at this moment.'
            }));
          case 7:
            req.car = car;
            req.body.carId = car.id;
            next();
          case 10:
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
//# sourceMappingURL=getCarIdBySlug.js.map