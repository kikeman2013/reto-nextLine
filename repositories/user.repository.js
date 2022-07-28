//importacion de funciones helper para obtener la basde de datos (BD) y funcion helper para el guardado de ella (save)
const { save, BD } = require("../helpers/bd.user.helper");

//creacion de la clase repositorio de usuarios
class UserRepository {
  //funcion para agregar usuario nuevo a la base de datos
  insertUser = async (data) => {
    //ingresamos los datos al arreglo de usuarios
    BD.users.push(data);
    //usamos la funcion para guardar y reescribir la base de datos
    save(BD);
    //regresamos un mensaje personalizado con la info del usuario nuevo
    return {
      status: true,
      message: `Usuario creado con el id: ${data.userId}`,
      data: data,
    };
  };

  //funcion para obtener todos los usuarios
  getAllUsers = async () => {
    //regresamos un mensaje personalizado con todos los usuarios
    return {
      status: true,
      message: `${BD.users.length} Usuarios Encotrados`,
      data: BD.users,
    };
  };

  //funcion para obtener un usuario en especifico
  getUser = async (data) => {
    //filtro de todos los usuarios para obtener el solicitado
    const user = BD.users.filter((user) => user.userId === data.userId);
    //regresamos un mensaje personalizado con el usuario en especifico
    return { status: true, message: "Usuario encontrado", data: user };
  };

  //funcion para actualizar un usuario en especifico
  updateUser = async (data) => {
    //recorremos el arreglo de todas los usuarios
    BD.users.forEach((user) => {
      //hacemos coincidir el usuario a modificar
      if (user.userId === data.userId) {
        //al encontrar el usuario sobreescribimos los datos antiguos con los nuevos
        //en caso de que no existan los datos nuevos , se rescribiran los antiguos (hecho para evitar perdida de datos)
        user.userName = data.userName || user.userName;
        user.email = data.email || user.email;
        user.age = data.age || user.age;
        user.dateUpdated = data.dateUpdated;
        // para el ahorro de codigo asignamos a la variable data el usuario econtrado asi poderla regresar completa en el mensaje
        data = user;
      }
    });
    //usamos la funcion para guardar y reescribir la base de datos
    save(BD);
    //regresamos un mensaje personalizado con la info del usuario modificado
    return {
      status: true,
      message: `Usuario ${data.userId} actualizado`,
      data: data,
    };
  };

  //funcion para borrar un usuario en especifico
  deleteUser = async (data) => {
    ///filtro de todos los usuarios para quitar el solicitado
    BD.users = BD.users.filter((user) => user.userId !== data.userId);
    //usamos la funcion para guardar y reescribir la base de datos
    save(BD);
    //regresamos un mensaje personalizado con el userId del usuario eliminado

    return {
      status: true,
      message: `Usuario ${data.userId} eliminado`,
      data: data,
    };
  };

  //funcion para desarrollador
  //funcion para obtener el nombre del usuario por medio del userId
  //utilizado para fines de auditoria y control de acciones
  getUserName = async (userId) => {
    return BD.users.filter((user) => user.userId === userId)[0].userName;
  };
}
//exportamos el modulo creando una instancia de la clase
module.exports = new UserRepository();
