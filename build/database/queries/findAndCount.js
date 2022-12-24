"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../models"));
var _sequelize = require("sequelize");
/**
 * @param {object} modal
 * @returns {object} an object containing the information of the user or null
 */
var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(Model) {
    var condition,
      include,
      limit,
      offset,
      order,
      meta,
      response,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            condition = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            include = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
            limit = _args.length > 3 ? _args[3] : undefined;
            offset = _args.length > 4 ? _args[4] : undefined;
            order = _args.length > 5 ? _args[5] : undefined;
            meta = {};
            order = order || [['createdAt', 'DESC']];
            _context.prev = 7;
            _context.next = 10;
            return _models["default"][Model].findAndCountAll({
              where: condition,
              include: include,
              order: order,
              limit: limit,
              offset: offset
            }, {
              logging: false,
              raw: true
            });
          case 10:
            response = _context.sent;
            return _context.abrupt("return", {
              response: response.rows,
              meta: {
                count: response.count || null
              }
            });
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](7);
            return _context.abrupt("return", _context.t0);
          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[7, 14]]);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
exports["default"] = _default;
//# sourceMappingURL=findAndCount.js.map