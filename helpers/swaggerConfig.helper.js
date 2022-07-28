const swaggerJsDoc = require("swagger-jsdoc");

//configuraciones necesarias para la documentacion en Swagger
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

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerDocs };
