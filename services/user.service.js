//importacion del modulo de repositorio de usuarios
const userRepository = require("../repositories/user.repository");
//importacion de la libreria para la generacion de Id
const { v4: uuid } = require("uuid");
//importacion de funciones helper para validacion de existencias
const { ifExist, ifExistById } = require("../helpers/bd.user.helper");
//importacion de funcion para imprimir en consola las acciones que se van realizando
const { print } = require("../helpers/utils.helper");

//creacion de la clase servicio de usuarios
class UserService {
  //funcion para insertar un nuevo usuario
  insertUser = async (data, userId) => {
    //validacion de que el usuario exista en la base de datos
    if (ifExist(data.userName)) throw { status: false, message: "el usuario ya existe" };
    //creacion del parametro para agregar la fecha de creacion al usuario
    const dateCreated = new Date(Date.now()).toLocaleString();
    //agregamos a los datos de forma constructiva un nuevo Id para el usuario y la fecha de creacion
    data = { userId: uuid(), ...data, dateCreated };
    //mandamos al repositorio los datos obtenidos
    const result = await userRepository.insertUser(data);
    //eliminamos el parametro de la contraseña al resultado
    delete result.data.pass;
    //imprimimos en consola que el usuario realizo una accion en un tiempo especifico
    print("Creo un usuario", userId);
    //retornamos el resultado
    return result;
  };

  //funcion para obtener todas los usuarios
  getAllUsers = async (userId) => {
    //mandamos a llamar la funcion de obtener todos los usuarios del repositorio
    const result = await userRepository.getAllUsers();
    //quitamos unos parametros de manera desconstrutiva para no enviar toda la informacion
    //realizando un mapeo de todos los usuarios
    result.data = result.data.map((user) => {
      const { pass, dateCreated, dateUpdated, age, ...u } = user;
      return u;
    });
    //imprimimos en consola que el usuario realizo una accion en un tiempo especifico
    print("obtuvo todos los usuarios", userId);
    //retornamos el resultado
    return result;
  };

  //funcion para obtener un usuario en especifico
  getUser = async (data, userId) => {
    //validacion de que el usuario exista en la base de datos
    if (!ifExistById(data.userId)) throw { status: false, message: "el usuario no existe" };
    //mandamos al repositorio los datos obtenidos
    const result = await userRepository.getUser(data);
    //eliminamos el parametro de la contraseña al resultado
    delete result.data[0].pass;
    //imprimimos en consola que el usuario realizo una accion en un tiempo especifico
    print(`obtuvo la infomacion del usuario ${result.data[0].userName}`, userId);
    //retornamos el resultado
    return result;
  };

  //funcion para actualizar un usuario en especifico
  updateUser = async (data, userId) => {
    //validacion de que el usuario exista en la base de datos
    if (!ifExistById(data.userId)) throw { status: false, message: "el usuario no existe" };
    //agregamos a los datos de forma constructiva la fecha de creacion al usuario
    const dateUpdated = new Date(Date.now()).toLocaleString();
    data = { ...data, dateUpdated };
    //mandamos al repositorio los datos obtenidos
    const result = await userRepository.updateUser(data);
    //eliminamos el parametro de la contraseña al resultado
    delete result.data.pass;
    //imprimimos en consola que el usuario realizo una accion en un tiempo especifico
    print(`actualizo la infomacion del usuario ${result.data.userName}`, userId);
    //retornamos el resultado
    return result;
  };
  deleteUser = async (data, userId) => {
    //validacion de que el usuario exista en la base de datos
    if (!ifExistById(data.userId)) throw { status: false, message: "el usuario no existe" };
    //validacion para que el usuario que esta en sesion no se pueda borrar a si mismo
    if (data.userId === userId) throw { statusCode: 404, message: "no puedes borrarte a ti mismo" };
    //mandamos al repositorio los datos obtenidos
    const result = await userRepository.deleteUser(data);
    //imprimimos en consola que el usuario realizo una accion en un tiempo especifico
    print(`Elimino la infomacion del usuario ${result.data.userId}`, userId);
    //retornamos el resultado
    return result;
  };
}
//exportamos el modulo creando una instancia de la clase
module.exports = new UserService();
