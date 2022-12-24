"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(code) {
  var message = "<h3>Verification Code</h3><br /><div>To verify your account, enter this code in Citizen Monitor App:</div><div style='margin:10px 0;font-size: 32px'>".concat(code, "</div>Verification codes expire after 48 hours.");
  var subject = "".concat(code, " is your verification code");
  return {
    message: message,
    subject: subject
  };
};
exports["default"] = _default;
//# sourceMappingURL=sendEmailOtp.js.map