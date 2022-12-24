"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../models"));
/**
 * @param {object} modal
 * @returns {object} an object containing the information of the user or null
 */
var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(Model) {
    var condition,
      payload,
      _yield$db$Model$findO,
      _yield$db$Model$findO2,
      response,
      created,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            condition = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            payload = _args.length > 2 ? _args[2] : undefined;
            _context.prev = 2;
            _context.next = 5;
            return _models["default"][Model].findOrCreate({
              where: condition,
              defaults: payload
            });
          case 5:
            _yield$db$Model$findO = _context.sent;
            _yield$db$Model$findO2 = (0, _slicedToArray2["default"])(_yield$db$Model$findO, 2);
            response = _yield$db$Model$findO2[0];
            created = _yield$db$Model$findO2[1];
            return _context.abrupt("return", {
              response: response,
              created: created
            });
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", _context.t0);
          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 12]]);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
exports["default"] = _default;
//# sourceMappingURL=findOrCreate.js.map