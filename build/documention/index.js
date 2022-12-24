"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));
var swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "CITIZEN-MONITOR",
      version: "1.0.0",
      description: "Monitor citizen migrations at umudugudu level",
      license: {
        name: "Licensed Under MIT",
        url: "https://spdx.org/licenses/MIT.html"
      },
      contact: {
        name: "CITIZEN-MONITOR",
        url: "https://spdx.org/licenses/MIT.html"
      }
    },
    servers: [{
      url: "/"
    }, {
      url: ""
    }],
    components: {
      securitySchemes: {
        BearerToken: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    }
  },
  apis: ["src/**/*.doc.js"]
};
var swaggerDocs = (0, _swaggerJsdoc["default"])(swaggerOptions);
var _default = swaggerDocs;
exports["default"] = _default;
//# sourceMappingURL=index.js.map