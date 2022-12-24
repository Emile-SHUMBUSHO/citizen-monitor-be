"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _nodeMailjet = _interopRequireDefault(require("node-mailjet"));
var _template = _interopRequireDefault(require("./template"));
var _models = _interopRequireDefault(require("../../database/models"));
_dotenv["default"].config();
var nodemailer = require('nodemailer');
var sendEmail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data, message, subject) {
    var transporter;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            transporter = nodemailer.createTransport({
              host: "smtp.gmail.com",
              port: 587,
              secure: false,
              auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_APP_PASSWORD
              }
            });
            _context.next = 3;
            return transporter.sendMail({
              from: "".concat(process.env.EMAIL),
              // sender address
              to: "".concat(data.email),
              // list of receivers
              subject: subject,
              // Subject line
              html: (0, _template["default"])(message) // html body
            });
          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function sendEmail(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var _default = sendEmail;
exports["default"] = _default;
//# sourceMappingURL=mail.js.map