"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../models"));
var _sequelize = require("sequelize");
/**
 * @param {object} modal
 * @returns {object} an object containing the information of the user or null
 */
var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(Model) {
    var key,
      field,
      include,
      order,
      meta,
      response,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            key = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            field = _args.length > 2 ? _args[2] : undefined;
            include = _args.length > 3 && _args[3] !== undefined ? _args[3] : [];
            order = _args.length > 4 && _args[4] !== undefined ? _args[4] : [];
            meta = {};
            order = order || [['createdAt', 'DESC']];
            _context.prev = 6;
            _context.next = 9;
            return _models["default"][Model].findAll({
              where: (0, _defineProperty2["default"])({}, field, (0, _defineProperty2["default"])({}, _sequelize.Op.iLike, "%".concat(key, "%"))),
              include: include,
              order: order
            }, {
              logging: false
            });
          case 9:
            response = _context.sent;
            return _context.abrupt("return", {
              response: response,
              meta: meta
            });
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](6);
            return _context.abrupt("return", _context.t0);
          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 13]]);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
exports["default"] = _default;
//# sourceMappingURL=search.js.map