"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _AuthController = _interopRequireDefault(require("../../controllers/AuthController"));
var _asyncHandler = _interopRequireDefault(require("../../middlewares/asyncHandler"));
var _verifyToken = _interopRequireDefault(require("../../middlewares/verifyToken"));
var _middlewares = require("../../middlewares");
var router = _express["default"].Router();
router.post('/signup', (0, _asyncHandler["default"])(_AuthController["default"].signup));
router.post('/register/email', _middlewares.isInactiveEmail, (0, _asyncHandler["default"])(_AuthController["default"].registerEmail));
router.post('/register/verify-otp', (0, _asyncHandler["default"])(_AuthController["default"].registerVerify) // check time validity
);

router.post('/register/complete', (0, _asyncHandler["default"])(_AuthController["default"].registerComplete));

// user login route
router.post('/login/public', _middlewares.loginUser, _AuthController["default"].login);
router.post('/login/admin', _middlewares.loginAdmin, _AuthController["default"].login);
router.get('/user', _verifyToken["default"], _AuthController["default"].getUser);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=local.js.map