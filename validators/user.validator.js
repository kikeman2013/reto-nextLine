//importacion de la libreria de validacion de datos Joi
const Joi = require("@hapi/joi");

//creacion de la clase validacion de usuarios
class UserValidator {
  //funcion para validar los datos de la ruta POST
  insert = () => {
    //creacion de un objeto con los parametros requeridos para el correcto funcionamiento de la API
    return Joi.object()
      .keys({
        //asignacion de parametros de un usuario con su tipo de dato , su requerimiento y datos default
        userName: Joi.string().required(),
        pass: Joi.string().required(),
        email: Joi.string().required(),
        age: Joi.number().required(),
      })
      .options({ allowUnknown: true, stripUnknown: true });
  };

  //funcion para validar los datos de la ruta GET
  get = () => {
    //creacion de un objeto con los parametros requeridos para el correcto funcionamiento de la API
    return Joi.object()
      .keys({
        //asignacion de parametros de un usuario con su tipo de dato , su requerimiento
        userId: Joi.string().required(),
      })
      .options({ allowUnknown: true, stripUnknown: true });
  };

  //funcion para validar los datos de la ruta PUT
  pdate = () => {
    //creacion de un objeto con los parametros requeridos para el correcto funcionamiento de la API
    return Joi.object()
      .keys({
        //asignacion de parametros de un usuario con su tipo de dato , su requerimiento y datos default
        userId: Joi.string().required(),
        userName: Joi.string().optional(),
        email: Joi.string().optional(),
        age: Joi.number().optional(),
      })
      .options({ allowUnknown: true, stripUnknown: true });
  };

  //funcion para validar los datos de la ruta DELETE
  delete = () => {
    //creacion de un objeto con los parametros requeridos para el correcto funcionamiento de la API
    return Joi.object()
      .keys({
        //asignacion de parametros de un usuario con su tipo de dato , su requerimiento
        userId: Joi.string().required(),
      })
      .options({ allowUnknown: true, stripUnknown: true });
  };
}

//exportamos el modulo creando una instancia de la clase
module.exports = new UserValidator();
