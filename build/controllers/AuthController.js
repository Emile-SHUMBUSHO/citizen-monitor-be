"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
require("dotenv/config");
var _generateOtp = _interopRequireDefault(require("generate-otp"));
var helper = _interopRequireWildcard(require("../helpers"));
var template = _interopRequireWildcard(require("../templates"));
var _status = _interopRequireDefault(require("../config/status"));
var _queries = require("../database/queries");
var _mail = _interopRequireDefault(require("../helpers/mailer/mail"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * A class to handle user local authentication
 */
var AuthLocalController = /*#__PURE__*/function () {
  function AuthLocalController() {
    (0, _classCallCheck2["default"])(this, AuthLocalController);
  }
  (0, _createClass2["default"])(AuthLocalController, null, [{
    key: "signup",
    value:
    /**
     * @description user signup function
     * @param {object} req request from user
     * @param {object} res response from server
     * @return {object} user information & token
     */
    function () {
      var _signup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req.body.password = helper.password.hash(req.body.password);
                _context.prev = 1;
                _context.next = 4;
                return (0, _queries.Create)('User', req.body);
              case 4:
                response = _context.sent;
                return _context.abrupt("return", delete response.password && res.status(_status["default"].CREATED).json({
                  response: response
                }));
              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", res.status(_status["default"].BAD_REQUEST).send({
                  error: 'Sorry, we can not create your account right now. Try again later'
                }));
              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      }));
      function signup(_x, _x2) {
        return _signup.apply(this, arguments);
      }
      return signup;
    }()
  }, {
    key: "registerEmail",
    value: function () {
      var _registerEmail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var email, code, data, response, _template$account$sen, message, subject;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                email = req.body.email;
                code = _generateOtp["default"].generate(6);
                data = {
                  email: email,
                  code: code
                };
                _context2.prev = 3;
                _context2.next = 6;
                return (0, _queries.Create)('VerifyEmail', data);
              case 6:
                response = _context2.sent;
                _template$account$sen = template.account.sendEmailOtp(data.code), message = _template$account$sen.message, subject = _template$account$sen.subject;
                _context2.next = 10;
                return (0, _mail["default"])(response, message, subject);
              case 10:
                return _context2.abrupt("return", res.status(_status["default"].CREATED).json({
                  response: {
                    email: response.email
                  }
                }));
              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](3);
                return _context2.abrupt("return", res.status(_status["default"].BAD_REQUEST).send({
                  error: _context2.t0.message
                  // 'Sorry, we can not create your account right now. Try again later',
                }));
              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 13]]);
      }));
      function registerEmail(_x3, _x4) {
        return _registerEmail.apply(this, arguments);
      }
      return registerEmail;
    }()
  }, {
    key: "registerVerify",
    value: function () {
      var _registerVerify = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var _req$body, email, code, response;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _req$body = req.body, email = _req$body.email, code = _req$body.code;
                _context3.next = 3;
                return (0, _queries.FindOne)('VerifyEmail', {
                  email: email,
                  code: code
                });
              case 3:
                response = _context3.sent;
                if (!(Object.keys(response).length === 0)) {
                  _context3.next = 6;
                  break;
                }
                return _context3.abrupt("return", res.status(_status["default"].NOT_FOUND).send({
                  error: 'Sorry, we can not find the OTP you provided, try again later'
                }));
              case 6:
                return _context3.abrupt("return", res.status(_status["default"].CREATED).json({
                  response: response
                }));
              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      function registerVerify(_x5, _x6) {
        return _registerVerify.apply(this, arguments);
      }
      return registerVerify;
    }()
  }, {
    key: "registerComplete",
    value: function () {
      var _registerComplete = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var _req$body2, email, code, password, firstName, lastName, phoneNumber, ID, province, district, sector, cell, newPassword, response, user;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _req$body2 = req.body, email = _req$body2.email, code = _req$body2.code, password = _req$body2.password, firstName = _req$body2.firstName, lastName = _req$body2.lastName, phoneNumber = _req$body2.phoneNumber, ID = _req$body2.ID, province = _req$body2.province, district = _req$body2.district, sector = _req$body2.sector, cell = _req$body2.cell;
                _context4.prev = 1;
                // 1. REGISTER A USER
                newPassword = helper.password.hash(password);
                _context4.next = 5;
                return (0, _queries.Create)('User', {
                  password: newPassword,
                  email: email
                });
              case 5:
                response = _context4.sent;
                _context4.next = 8;
                return (0, _queries.Create)('Profile', {
                  userId: response.id,
                  firstName: firstName,
                  lastName: lastName,
                  ID: ID,
                  phoneNumber: phoneNumber,
                  province: province,
                  district: district,
                  sector: sector,
                  cell: cell
                });
              case 8:
                user = _context4.sent;
                _context4.next = 11;
                return (0, _queries.Delete)('VerifyEmail', {
                  email: email,
                  code: code
                });
              case 11:
                return _context4.abrupt("return", delete response.password && res.status(_status["default"].CREATED).json({
                  response: response
                }));
              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](1);
                _context4.next = 18;
                return (0, _queries.Delete)('User', {
                  email: email
                });
              case 18:
                if (!(_context4.t0.name === 'SequelizeUniqueConstraintError')) {
                  _context4.next = 20;
                  break;
                }
                return _context4.abrupt("return", res.status(_status["default"].EXIST).send({
                  error: 'Account with email or phone number already exists'
                }));
              case 20:
                return _context4.abrupt("return", res.status(_status["default"].BAD_REQUEST).send({
                  error: 'Sorry, we can not register your account at this moment. Refresh the page and try again',
                  message: _context4.t0.message
                }));
              case 21:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 14]]);
      }));
      function registerComplete(_x7, _x8) {
        return _registerComplete.apply(this, arguments);
      }
      return registerComplete;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var password, user, profile, comparePassword, payload, token;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                password = req.body.password;
                user = req.auth; // get profile info
                _context5.next = 4;
                return (0, _queries.FindOne)('Profile', {
                  userId: user.id
                });
              case 4:
                profile = _context5.sent;
                if (!(Object.keys(user).length > 0)) {
                  _context5.next = 15;
                  break;
                }
                comparePassword = helper.password.compare(password, user.password || '');
                if (comparePassword) {
                  _context5.next = 9;
                  break;
                }
                return _context5.abrupt("return", res.status(_status["default"].UNAUTHORIZED).json({
                  error: 'The credentials you provided are incorrect'
                }));
              case 9:
                payload = {
                  id: user.id
                };
                token = helper.token.generate(payload);
                delete user.password;
                return _context5.abrupt("return", user && profile && res.status(_status["default"].OK).json({
                  user: user,
                  profile: profile,
                  token: token
                }));
              case 15:
                return _context5.abrupt("return", res.status(_status["default"].UNAUTHORIZED).json({
                  error: 'The credentials you provided are incorrect'
                }));
              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));
      function login(_x9, _x10) {
        return _login.apply(this, arguments);
      }
      return login;
    }()
  }, {
    key: "getUser",
    value: function () {
      var _getUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", req.user ? delete req.user.password && res.status(_status["default"].OK).json({
                  user: req.user
                }) : res.status(_status["default"].NOT_FOUND).send({
                  error: 'The account is not found at this moment.'
                }));
              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));
      function getUser(_x11, _x12) {
        return _getUser.apply(this, arguments);
      }
      return getUser;
    }()
  }]);
  return AuthLocalController;
}();
exports["default"] = AuthLocalController;
//# sourceMappingURL=AuthController.js.map