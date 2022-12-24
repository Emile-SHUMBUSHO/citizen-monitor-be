"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
var _process$env = process.env,
  CONTACT_EMAIL = _process$env.CONTACT_EMAIL,
  CONTACT_PHONE = _process$env.CONTACT_PHONE;
var _default = function _default(message) {
  return "<div style=\"background:#ECECEC;width:100%;padding:5px 0 0 0;font-size:16px;\">\n  <!--   wrapper -->\n  <div style=\"max-width: 720px;margin:20px auto;background:#ffffff;\">\n  <!--   header -->\n  <div style=\"background:#000041;padding:10px 30px 0px;color:#ffffff;text-align:center;font-size:34px;height:70px;margin-top:30px\">\n    <span width=\"130\" style=\"height:auto;margin:5px;float:center\">Welcome to citizen Monitor</span>\n  </div>\n    <div style=\"width: 100%\">\n      <img src=\"https://imgs.search.brave.com/ScA81HoxKpTHTmOcnS1d8FGjRdmuwIzFZwCEMV_Kv90/rs:fit:960:430:1/g:ce/aHR0cHM6Ly9kYW0u/YWJib3R0LmNvbS9l/bi11cy9hYmJvdHRj/b3JwbmV3cy9pbWFn/ZXMvUndhbmRhLTk2/MHg0MzAuanBn\" style=\"width:100%;\" />\n    </div>\n  <!--   BODY -->\n  <div style=\"padding:20px;margin: 0 auto;display:block;text-align:left;\">\n    ".concat(message, "\n  <br><br>\n  <div>\n  If you have any questions, please call us on ").concat(CONTACT_PHONE, ", visit our <a href='http://Citizen-monitor.com'>Help Center</a>, or <a href='").concat(CONTACT_EMAIL, "'>Send us an email</a>\n  </div>\n  <br>\n  <div>Best regards,<br></div>\n  <b>Citizen-monitor Team</b>\n  </div>\n  <!-- end body   -->\n  </div>\n  <!-- FOOTER -->\n  <div style=\"padding:35px 0px;text-align:left;\">\n    <div style=\"max-width:720px;margin: 0 auto;\">\n      Copyright, 2022<br>\n      Citizen-monitor Team, All right reserved.\n    </div>\n  </div>\n</div>");
};
exports["default"] = _default;
//# sourceMappingURL=template.js.map