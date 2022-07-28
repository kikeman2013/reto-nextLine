//importacion del modulo de validacion de usuarios
const userValidator = require("../validators/user.validator");

//creacion de la clase middleware de usuarios
class UserMiddleware {
  insert = async (req, res, next) => {
    //funcion para validar los datos de la ruta insert de users (POST)
    try {
      //obtenemos todo los datos del Body despues de validarlos los guardamos en la variable user
      req.user = await userValidator.insert().validateAsync({
        ...req.body,
      });

      next();
    } catch (error) {
      res.status(error.statusCode || 400).json(error);
    }
  };

  //funcion para validar los datos de la ruta get de users (GET)
  get = async (req, res, next) => {
    try {
      //obtenemos el userId de los parametros despues de validarlos los guardamos en la variable user
      req.user = await userValidator.get().validateAsync({
        ...req.params,
      });

      next();
    } catch (error) {
      res.status(error.statusCode || 400).json(error);
    }
  };

  //funcion para validar los datos de la ruta put de users (PUT)
  update = async (req, res, next) => {
    try {
      //obtenemos todo los datos del Body despues de validarlos los guardamos en la variable user
      req.user = await userValidator.update().validateAsync({
        ...req.body,
      });

      next();
    } catch (error) {
      res.status(error.statusCode || 400).json(error);
    }
  };

  //funcion para validar los datos de la ruta delete de users (DELETE)
  delete = async (req, res, next) => {
    try {
      //obtenemos el userId de los parametros despues de validarlos los guardamos en la variable user
      req.user = await userValidator.delete().validateAsync({
        ...req.params,
      });
      next();
    } catch (error) {
      res.status(error.statusCode || 400).json(error);
    }
  };
}

//exportamos el modulo creando una instancia de la clase
module.exports = new UserMiddleware();
