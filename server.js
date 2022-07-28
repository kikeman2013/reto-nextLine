const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

//config swagger
const swaggerUi = require("swagger-ui-express");
const { swaggerDocs } = require("./helpers/swaggerConfig.helper");
//------
app.use(cors({ origin: "*" }));
app.use(express.json());

//routes
app.use(require("./routes/index.routes"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Server running
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}.`);
});
