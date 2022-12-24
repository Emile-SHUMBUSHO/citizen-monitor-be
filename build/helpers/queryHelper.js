"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbUpdate = exports.dbFindSingle = exports.dbFindAll = exports.dbDelete = exports.dbCreate = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var dbFindSingle = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(model) {
    var whereCondition,
      include,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            whereCondition = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            include = _args.length > 2 ? _args[2] : undefined;
            return _context.abrupt("return", model.findOne({
              where: whereCondition,
              logging: false,
              include: include
            }));
          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function dbFindSingle(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.dbFindSingle = dbFindSingle;
var dbFindAll = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(model, whereCondition) {
    var offset,
      limit,
      include,
      _args2 = arguments;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            offset = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 0;
            limit = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : 20;
            include = _args2.length > 4 ? _args2[4] : undefined;
            return _context2.abrupt("return", model.findAll({
              offset: offset,
              limit: limit,
              where: whereCondition,
              logging: false,
              include: include
            }));
          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function dbFindAll(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
exports.dbFindAll = dbFindAll;
var dbCreate = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(model, condition) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", model.create(condition, {
              logging: false
            }));
          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function dbCreate(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
exports.dbCreate = dbCreate;
var dbDelete = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(model, whereCondition) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", model.destroy({
              where: whereCondition,
              logging: false
            }));
          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function dbDelete(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();
exports.dbDelete = dbDelete;
var dbUpdate = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(model, condition) {
    var whereCondition,
      _args5 = arguments;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            whereCondition = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : {};
            model.update(condition, {
              where: whereCondition,
              logging: false
            });
          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function dbUpdate(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();
exports.dbUpdate = dbUpdate;
//# sourceMappingURL=queryHelper.js.map