const BD = require("../BD/bd.task.json");
const fs = require("fs");

//Funcion para guardar a la base de datos
const save = (BD) => {
  fs.writeFileSync("./BD/bd.task.json", JSON.stringify(BD, null, 2), { encoding: "utf-8" });
};

//funcion para comprobar si existe un nombre usuario en la base de datos
const ifExist = (title) => {
  return BD.tasks.findIndex((task) => task.title === title) > -1;
};

//funcion para comprobar si existe un Id en la base de datos
const ifExistById = (taskId) => {
  return BD.tasks.findIndex((task) => task.taskId === taskId) >= 0;
};

module.exports = {
  save,
  ifExist,
  ifExistById,
  BD,
};
