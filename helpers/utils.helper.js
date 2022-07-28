//importacion del modulo repositorio de usuarios
const userRepository = require("../repositories/user.repository");

//funcion para desarrollador , imprimir en consola quien esta solicitando
const print = async (action, userId) => {
  //obtenemos el userName del usuario que solicita una request
  const username = await getUserName(userId);
  //obtenemos la fecha actual formateada con fecha y hora
  const date = new Date(Date.now()).toLocaleString();
  //imprimimos en consola el mensaje para ver el usuario, la accion que requirio y la fecha
  console.log(`\nUsuario: ${username}\nAccion: ${action} \nFecha:  ${date} \n`);
};

//funcion para desarrollador para regresar el nombre de usuario
const getUserName = async (userId) => {
  //manda a llamar y retornar el resultado de la funcion de obtener el nombre de usuario desde el repositorio de usuarios
  return await userRepository.getUserName(userId);
};

module.exports = {
  print,
};
