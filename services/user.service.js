const userRepository = require("../repositories/user.repository");
const { v4: uuid } = require("uuid");
const { ifExist, ifExistById } = require("../helpers/bd.user.helper");
const { print } = require("../helpers/utils.helper");

//clase UserService
class UserService {
  insertUser = async (data, userId) => {
    if (ifExist(data.userName)) return { status: false, message: "el usuario ya existe" };
    const dateCreated = new Date(Date.now()).toLocaleString();
    data = { userId: uuid(), ...data, dateCreated };
    const result = await userRepository.insertUser(data);
    print("Creo un usuario", userId);
    return result;
  };

  getAllUsers = async (userId) => {
    const result = await userRepository.getAllUsers();
    result.data = result.data.map((user) => {
      const { pass, dateCreated, dateUpdated, age, ...u } = user;
      return u;
    });
    print("obtuvo todos los usuarios", userId);
    return result;
  };

  getUser = async (data, userId) => {
    if (!ifExistById(data.userId)) return { status: false, message: "el usuario no existe" };
    const result = await userRepository.getUser(data);
    delete result.data[0].pass;
    print(`obtuvo la infomacion del usuario ${result.data[0].userName}`, userId);
    return result;
  };
  updateUser = async (data, userId) => {
    if (!ifExistById(data.userId)) return { status: false, message: "el usuario no existe" };
    const dateUpdated = new Date(Date.now()).toLocaleString();
    data = { ...data, dateUpdated };
    const result = await userRepository.updateUser(data);
    delete result.data.pass;
    print(`actualizo la infomacion del usuario ${result.data.userName}`, userId);
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
