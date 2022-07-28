//importacion de constantes
const express = require("express");
const app = express();

//creacion de las rutas a usar
app.use(require("./user.routes"), require("./task.routes"));

//exportacion de la constante app
module.exports = app;
