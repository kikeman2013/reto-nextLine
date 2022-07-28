const swaggerJsDoc = require("swagger-jsdoc");

/* -------------------------------- Doumentation of API with Swagger ----------------------------- */
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.1",
    info: {
      title: "Reto NextLine",
      description: "Prueba de generacion de Api para NextLine",
      contact: {
        name: "Enrique Antonio Belmarez Meraz",
      },
      version: "1.0",
    },
    servers: [
      {
        url: "http://localhost:3000/api/",
      },
    ],
    components: {},
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./docs/*.yaml"],
};

// Declaration of compatibility object with Swagger tools
const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerDocs };
