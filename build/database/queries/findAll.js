"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../models"));
/**
 * @param {object} modal
 * @returns {object} an object containing the information of the user or null
 */
var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(Model) {
    var condition,
      include,
      order,
      attributes,
      meta,
      response,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            condition = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            include = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
            order = _args.length > 3 && _args[3] !== undefined ? _args[3] : null;
            attributes = {};
            if (Model === 'User') {
              attributes = {
                exclude: ['password']
              };
            }
            meta = {};
            order = order || [['createdAt', 'DESC']];
            _context.prev = 7;
            _context.next = 10;
            return _models["default"][Model].findAll({
              where: condition,
              include: include,
              attributes: attributes,
              order: order
            }, {
              logging: false
            });
          case 10:
            response = _context.sent;
            return _context.abrupt("return", {
              response: response,
              meta: meta
            });
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](7);
            throw _context.t0;
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
//# sourceMappingURL=findAll.js.map