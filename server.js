//importacion de constantes del framework Express
const express = require("express");
const app = express();
//asingacion del puerto
const port = process.env.PORT || 3000;

//configuracion swagger
const swaggerUi = require("swagger-ui-express");
const { swaggerDocs } = require("./helpers/swaggerConfig.helper");

//configuacion cors
const cors = require("cors");
app.use(cors({ origin: "*" }));
//configuracion de Json para aceptar el req.Body
app.use(express.json());

//rutas de la API
app.use(require("./routes/index.routes"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Servidor Corriendo
app.listen(port, () => {
  console.log(`\nApi corriendo en la direccion http://localhost:${port}/. \n`);
  console.log(`Documentacion Swagger corriendo en la direccion http://localhost:${port}/api-docs.\n`);
});
