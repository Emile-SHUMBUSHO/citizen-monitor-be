"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _status = _interopRequireDefault(require("../config/status"));
var helper = _interopRequireWildcard(require("../helpers"));
var _models = _interopRequireDefault(require("../database/models"));
var _queries = require("../database/queries");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var authHeader, token, decodedToken, include, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            authHeader = req.get('Authorization');
            if (authHeader) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return", res.status(403).json({
              message: 'No token provided!'
            }));
          case 3:
            token = authHeader.split(' ')[1];
            if (token) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return", res.status(_status["default"].UNAUTHORIZED).json({
              errors: {
                authentication: 'Please, login first.'
              }
            }));
          case 6:
            decodedToken = helper.token.decode(token);
            if (!(decodedToken.errors || !decodedToken)) {
              _context.next = 9;
              break;
            }
            return _context.abrupt("return", res.status(_status["default"].UNAUTHORIZED).json({
              error: 'Sorry, we fail to authenticate you.'
            }));
          case 9:
            include = [{
              model: _models["default"].Profile,
              as: 'user',
              attributes: {
                exclude: ['createdAt', 'updatedAt']
              }
            }];
            _context.next = 12;
            return (0, _queries.FindOne)('User', {
              id: decodedToken.id
            }, include);
          case 12:
            user = _context.sent;
            if (!(user && user)) {
              _context.next = 19;
              break;
            }
            delete user.password;
            req.user = user.get();
            req.body.userId = req.user.id;
            _context.next = 20;
            break;
          case 19:
            return _context.abrupt("return", res.status(_status["default"].ACCESS_DENIED).json({
              error: 'Sorry, we fail to authenticate you.'
            }));
          case 20:
            return _context.abrupt("return", next());
          case 21:
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
//# sourceMappingURL=verifyToken.js.map