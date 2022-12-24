"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _cloudinary = require("cloudinary");
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
var cloudinaryConfig = function cloudinaryConfig() {
  return (0, _cloudinary.config)({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || null,
    api_key: process.env.CLOUDINARY_API_KEY || null,
    api_secret: process.env.CLOUDINARY_API_SECRET || null
  });
};
var _default = cloudinaryConfig;
exports["default"] = _default;
//# sourceMappingURL=cloudinaryConfig.js.map