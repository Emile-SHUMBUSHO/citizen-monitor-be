import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "CITIZEN-MONITOR",
      version: "1.0.0",
      description: "Monitor citizen migrations at umudugudu level",
      license: {
        name: "Licensed Under MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "CITIZEN-MONITOR",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: "/",
      },
      {
        url: "",
      },
    ],
    components: {
      securitySchemes: {
        BearerToken: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["src/**/*.doc.js"],
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;