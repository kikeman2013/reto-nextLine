//importacion del modulo de servicion de usuarios
const user = require("../services/user.service");

//creacion de la clase controlador de los usuarios
class UserController {
  //funcion para insertar un usuario nuevo
  insertUser = async (req, res) => {
    try {
      //obtenemos el userId que se mando desde la verificacion de usuario
      const { userId } = req.userInfo;
      //obtenemos la data que se obtuvo desde el middleware verificando los datos
      const data = req.user;
      //mandamos al modulo servicio los datos obtenidos
      const result = await user.insertUser(data, userId);
      //cuando sale todo bien retornamos el resultado
      return res.status(200).json(result);
    } catch (error) {
      //atrapamos cualquier error y lo mandamos con un codigo 400
      return res.status(error.statusCode || 400).json(error);
    }
  };

  //funcion para retornar todos los usuarios
  getAllUsers = async (req, res) => {
    try {
      //obtenemos el userId que se mando desde la verificacion de usuario
      const { userId } = req.userInfo;
      //mandamos al modulo servicio los datos obtenidos
      const result = await user.getAllUsers(userId);
      //cuando sale todo bien retornamos el resultado
      return res.status(200).json(result);
    } catch (error) {
      //atrapamos cualquier error y lo mandamos con un codigo 400
      return res.status(error.statusCode || 400).json(error);
    }
  };

  //funcion para retornar un usuario en especifico
  getUser = async (req, res) => {
    try {
      //obtenemos el userId que se mando desde la verificacion de usuario
      const data = req.user;
      //obtenemos la data que se obtuvo desde el middleware verificando los datos
      const { userId } = req.userInfo;
      //mandamos al modulo servicio los datos obtenidos
      const result = await user.getUser(data, userId);
      //cuando sale todo bien retornamos el resultado
      return res.status(200).json(result);
    } catch (error) {
      //atrapamos cualquier error y lo mandamos con un codigo 400
      return res.status(error.statusCode || 400).json(error);
    }
  };

  //funcion para actualizar un usuario en especifico
  updateUser = async (req, res) => {
    try {
      //obtenemos el userId que se mando desde la verificacion de usuario
      const data = req.user;
      //obtenemos la data que se obtuvo desde el middleware verificando los datos
      const { userId } = req.userInfo;
      //mandamos al modulo servicio los datos obtenidos
      const result = await user.updateUser(data, userId);
      //cuando sale todo bien retornamos el resultado
      return res.status(200).json(result);
    } catch (error) {
      //atrapamos cualquier error y lo mandamos con un codigo 400
      return res.status(error.statusCode || 400).json(error);
    }
  };

  //funcion para eliminar un usuario en especifico
  deleteUser = async (req, res) => {
    try {
      //obtenemos el userId que se mando desde la verificacion de usuario
      const data = req.user;
      //obtenemos la data que se obtuvo desde el middleware verificando los datos
      const { userId } = req.userInfo;
      //mandamos al modulo servicio los datos obtenidos
      const result = await user.deleteUser(data, userId);
      //cuando sale todo bien retornamos el resultado
      return res.status(200).json(result);
    } catch (error) {
      //atrapamos cualquier error y lo mandamos con un codigo 400
      return res.status(error.statusCode || 400).json(error);
    }
  };
}

//exportamos el modulo creando una instancia de la clase
module.exports = new UserController();
