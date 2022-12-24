"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _http = _interopRequireDefault(require("http"));
var _httpErrors = _interopRequireDefault(require("http-errors"));
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _cors = _interopRequireDefault(require("cors"));
var _expressSession = _interopRequireDefault(require("express-session"));
var _routes = _interopRequireDefault(require("./routes"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _documention = _interopRequireDefault(require("./documention"));
var app = (0, _express["default"])();
var server = _http["default"].createServer(app);
_dotenv["default"].config();
app.use((0, _expressSession["default"])({
  secret: process.env.SECRET_KEY || 'CITIZEN-MONITOR',
  cookie: {
    maxAge: 60000
  },
  resave: true,
  saveUninitialized: true
}));

// swagger route

app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cors["default"])());
app.use('/', _routes["default"]);

// api documentation
app.use("/docs", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_documention["default"]));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next((0, _httpErrors["default"])(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err.status
  });
  next();
});
app.server = server;
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=app.js.map