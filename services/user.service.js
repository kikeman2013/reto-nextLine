const userRepository = require("../repositories/user.repository");
const { v4: uuid } = require("uuid");
const { ifExist, ifExistById } = require("../helpers/bd.user.helper");

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

//clase UserService
class UserService {
  insertUser = async (data, userId) => {
    if (ifExist(data.userName)) return { status: false, message: "el usuario ya existe" };
    const dateCreated = new Date(Date.now()).toLocaleString();
    data = { userId: uuid(), ...data, dateCreated };
    const result = await userRepository.insertUser(data);
    return result;
  };

  getAllUsers = async (userId) => {
    print("obtuvo todos los usuarios", userId);
    const result = await userRepository.getAllUsers();
    result.data = result.data.map((user) => {
      const { pass, dateCreated, dateUpdated, age, ...u } = user;
      return u;
    });
    return result;
  };

  getUser = async (data, userId) => {
    if (!ifExistById(data.userId)) return { status: false, message: "el usuario no existe" };
    const result = await userRepository.getUser(data);

    print(`obtuvo la infomacion del usuario ${result.data[0].userName}`, userId);
    delete result.data[0].pass;

    return result;
  };
  updateUser = async (data, userId) => {
    if (!ifExistById(data.userId)) return { status: false, message: "el usuario no existe" };
    const dateUpdated = new Date(Date.now()).toLocaleString();
    data = { ...data, dateUpdated };
    const result = await userRepository.updateUser(data);
    print(`actualizo la infomacion del usuario ${result.data[0].userName}`, userId);
    return result;
  };
  deleteUser = async (data, userId) => {
    if (!ifExistById(data.userId)) return { status: false, message: "el usuario no existe" };
    const result = await userRepository.deleteUser(data);
    print(`Elimino la infomacion del usuario ${result.data.userId}`, userId);
    return result;
  };
}
module.exports = new UserService();
