"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
/**
 * Normalize a port into a number, string, or false.
 * @param {int} val The port number.
 * @returns {int} The port number.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (Number.isNaN(port)) {
    return val; // named pipe
  }

  if (port >= 0) {
    return port; // port number
  }

  return false;
}

/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || '4001');
_app["default"].set('port', port);

/**
 * Event listener for HTTP server "error" event.
 * Normalize a port into a number, string, or false.
 * @param {int} error The created error.
 * @returns {string} The error message.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  var bind = typeof port === 'string' ? "Pipe ".concat(port) : "Port ".concat(port);

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      process.stdout.write("".concat(bind, " requires elevated privileges\n"));
      process.exit(1);
      break;
    case 'EADDRINUSE':
      process.stdout.write("".concat(bind, " is already in use\n"));
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Listen on provided port, on all network interfaces.
 */
var server = _app["default"].server.listen(port, function () {
  process.stdout.write("Server is running on port: ".concat(port, "\n"));
});
_app["default"].server.on('error', onError);
//# sourceMappingURL=index.js.map