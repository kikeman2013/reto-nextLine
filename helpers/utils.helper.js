const userRepository = require("../repositories/user.repository");

//funcion para desarrollador , imprimir en consola quien esta solicitando
const print = async (action, userId) => {
  const username = await getUserName(userId);
  const date = new Date(Date.now()).toLocaleString();
  console.log(`\nUsuario: ${username}\nAccion: ${action} \nFecha:  ${date} \n`);
};

//funcion para desarrollador para regresar el nombre de usuario
const getUserName = async (userId) => {
  return await userRepository.getUserName(userId);
};

module.exports = {
  print,
};
