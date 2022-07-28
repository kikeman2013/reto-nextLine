//importacion del modulo de servicion de tareas
const task = require("../services/task.service");

//creacion de la clase controlador de las tareas
class TaskController {
  //funcion para insertar una tarea nueva
  insertTask = async (req, res) => {
    try {
      //obtenemos el userId que se mando desde la verificacion de usuario
      const { userId } = req.userInfo;
      //obtenemos la data que se obtuvo desde el middleware verificando los datos
      const data = req.task;
      //mandamos al modulo servicio los datos obtenidos
      const result = await task.insertTask(data, userId);
      //cuando sale todo bien retornamos el resultado
      return res.status(200).json(result);
    } catch (error) {
      //atrapamos cualquier error y lo mandamos con un codigo 400
      return res.status(error.statusCode || 400).json(error);
    }
  };

  //funcion para retornar todas las tareas
  getAllTasks = async (req, res) => {
    try {
      //obtenemos el userId que se mando desde la verificacion de usuario
      const { userId } = req.userInfo;
      //mandamos al modulo servicio los datos obtenidos
      const result = await task.getAllTasks(userId);
      //cuando sale todo bien retornamos el resultado
      return res.status(200).json(result);
    } catch (error) {
      //atrapamos cualquier error y lo mandamos con un codigo 400
      return res.status(error.statusCode || 400).json(error);
    }
  };

  //funcion para retornar una tarea en especifico
  getTask = async (req, res) => {
    try {
      //obtenemos el userId que se mando desde la verificacion de usuario
      const { userId } = req.userInfo;
      //obtenemos la data que se obtuvo desde el middleware verificando los datos
      const data = req.task;
      //mandamos al modulo servicio los datos obtenidos
      const result = await task.getTask(data, userId);
      //cuando sale todo bien retornamos el resultado
      return res.status(200).json(result);
    } catch (error) {
      //atrapamos cualquier error y lo mandamos con un codigo 400
      return res.status(error.statusCode || 400).json(error);
    }
  };

  //funcion para actualizar una tarea en especifico
  updateTask = async (req, res) => {
    try {
      //obtenemos el userId que se mando desde la verificacion de usuario
      const { userId } = req.userInfo;
      //obtenemos la data que se obtuvo desde el middleware verificando los datos
      const data = req.task;
      //mandamos al modulo servicio los datos obtenidos
      const result = await task.updateTask(data, userId);
      //cuando sale todo bien retornamos el resultado
      return res.status(200).json(result);
    } catch (error) {
      //atrapamos cualquier error y lo mandamos con un codigo 400
      return res.status(error.statusCode || 400).json(error);
    }
  };

  //funcion para eliminar una tarea en especifico
  deleteTask = async (req, res) => {
    try {
      //obtenemos el userId que se mando desde la verificacion de usuario
      const { userId } = req.userInfo;
      //obtenemos la data que se obtuvo desde el middleware verificando los datos
      const data = req.task;
      //mandamos al modulo servicio los datos obtenidos
      const result = await task.deleteTask(data, userId);
      //cuando sale todo bien retornamos el resultado
      return res.status(200).json(result);
    } catch (error) {
      //atrapamos cualquier error y lo mandamos con un codigo 400
      return res.status(error.statusCode || 400).json(error);
    }
  };
}

//exportamos el modulo creando una instancia de la clase
module.exports = new TaskController();
