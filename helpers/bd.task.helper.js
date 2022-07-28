//constante para obtener la base de datos(puede ser la conexion en caso de ser otro SGBD)
const BD = require("../BD/bd.json");
//constante para la librearia de gestor de archivos
const fs = require("fs");

//Funcion para guardar a la base de datos
const save = (BD) => {
  //funcion para reescribir la base de datos ya con los nuevos cambios hechos
  fs.writeFileSync("./BD/bd.json", JSON.stringify(BD, null, 2), { encoding: "utf-8" });
};

//funcion para comprobar si existe un nombre usuario en la base de datos
const ifExist = (title) => {
  return BD.tasks.findIndex((task) => task.title === title) > -1;
};

//funcion para comprobar si existe un Id en la base de datos
const ifExistById = (taskId) => {
  return BD.tasks.findIndex((task) => task.taskId === taskId) >= 0;
};

//exportacion de las funciones y constante BD
module.exports = {
  save,
  ifExist,
  ifExistById,
  BD,
};
