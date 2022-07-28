//importacion del modulo de validacion de tareas
const taskValidator = require("../validators/task.validator");

//creacion de la clase middleware de tareas
class TaskMiddleware {
  //funcion para validar los datos de la ruta insert de tareas (POST)
  insert = async (req, res, next) => {
    try {
      //obtenemos todo los datos del Body despues de validarlos los guardamos en la variable task
      req.task = await taskValidator.insert().validateAsync({
        ...req.body,
      });
      //sacamos la variable de la fecha de entrega para formatearla y despues volverla a asignar al mismo parametro
      let { deliveryDate } = req.task;
      deliveryDate = new Date(deliveryDate).toLocaleString();
      req.task.deliveryDate = deliveryDate;

      next();
    } catch (error) {
      res.status(error.statusCode || 400).json(error);
    }
  };

  //funcion para validar los datos de la ruta get de tareas (GET)
  get = async (req, res, next) => {
    try {
      //obtenemos el taskId de los parametros despues de validarlos los guardamos en la variable task
      req.task = await taskValidator.get().validateAsync({
        ...req.params,
      });

      next();
    } catch (error) {
      res.status(error.statusCode || 400).json(error);
    }
  };

  //funcion para validar los datos de la ruta put de tareas (PUT)
  update = async (req, res, next) => {
    try {
      //obtenemos todo los datos del Body despues de validarlos los guardamos en la variable task
      req.task = await taskValidator.update().validateAsync({
        ...req.body,
      });
      //sacamos la variable de la fecha de entrega para formatearla y despues volverla a asignar al mismo parametro
      let { deliveryDate } = req.task;
      deliveryDate = new Date(deliveryDate).toLocaleString();
      req.task.deliveryDate = deliveryDate;

      next();
    } catch (error) {
      res.status(error.statusCode || 400).json(error);
    }
  };

  //funcion para validar los datos de la ruta delete de tareas (DELETE)
  delete = async (req, res, next) => {
    try {
      //obtenemos el taskId de los parametros despues de validarlos los guardamos en la variable task
      req.task = await taskValidator.delete().validateAsync({
        ...req.params,
      });

      next();
    } catch (error) {
      res.status(error.statusCode || 400).json(error);
    }
  };
}

//exportamos el modulo creando una instancia de la clase
module.exports = new TaskMiddleware();
