const { save, BD } = require("../helpers/bd.user.helper");

class UserRepository {
  insertUser = async (data) => {
    BD.users.push(data);
    save(BD);
    return {
      status: true,
      message: `Usuario creado con el id: ${data.userId}`,
      data: data,
    };
  };

  getAllUsers = async () => {
    return {
      status: true,
      message: `${BD.users.length} Usuarios Encotrados`,
      data: BD.users,
    };
  };

  getUser = async (data) => {
    const user = BD.users.filter((user) => user.userId === data.userId);
    return { status: true, message: "Usuario encontrado", data: user };
  };

  updateUser = async (data) => {
    BD.users.forEach((user) => {
      if (user.userId === data.userId) {
        user.userName = data.userName || user.userName;
        user.email = data.email || user.email;
        user.age = data.age || user.age;
        user.dateUpdated || data.dateUpdated || "";

        data = user;
      }
    });

    return {
      status: true,
      message: `Usuario ${data.userId} actualizado`,
      data: data,
    };
  };

  deleteUser = async (data) => {
    BD.users = BD.users.filter((user) => user.userId !== data.userId);
    save(BD);
    return {
      status: true,
      message: `Usuario ${data.userId} eliminado`,
      data: data,
    };
  };

  //funcion para desarrollador
  getUserName = async (userId) => {
    return BD.users.filter((user) => user.userId === userId)[0].userName;
  };
}
module.exports = new UserRepository();
