//importacion de la libreria de validacion de datos Joi
const Joi = require("@hapi/joi").extend(require("@joi/date"));

//creacion de la clase validacion de tareas
class TaskValidator {
  //funcion para validar los datos de la ruta POST
  insert = () => {
    //creacion de un objeto con los parametros requeridos para el correcto funcionamiento de la API
    return Joi.object()
      .keys({
        //asignacion de parametros de una tarea con su tipo de dato , su requerimiento y datos default
        title: Joi.string().required(),
        description: Joi.string().required(),
        completed: Joi.boolean().optional(),
        deliveryDate: Joi.date().format(["DD/MM/YYYY", "DD-MM-YYYY"]).required(),
        comments: Joi.array().items(Joi.string()).optional().default([]),
        responsable: Joi.string().optional(),
        tags: Joi.array().items(Joi.string()).optional().default([]),
      })
      .options({ allowUnknown: true, stripUnknown: true });
  };

  //funcion para validar los datos de la ruta GET
  get = () => {
    //creacion de un objeto con los parametros requeridos para el correcto funcionamiento de la API
    return Joi.object()
      .keys({
        //asignacion de parametros de una tarea con su tipo de dato , su requerimiento
        taskId: Joi.string().required(),
      })
      .options({ allowUnknown: true, stripUnknown: true });
  };

  //funcion para validar los datos de la ruta PUT
  update = () => {
    //creacion de un objeto con los parametros requeridos para el correcto funcionamiento de la API
    return Joi.object()
      .keys({
        //asignacion de parametros de una tarea con su tipo de dato , su requerimiento y datos default
        taskId: Joi.string().required(),
        title: Joi.string().optional(),
        description: Joi.string().optional(),
        completed: Joi.boolean().optional(),
        deliveryDate: Joi.date().format(["DD/MM/YYYY", "DD-MM-YYYY"]).optional(),
        comments: Joi.array().items(Joi.string()).optional(),
        responsable: Joi.string().optional(),
        tags: Joi.array().items(Joi.string()).optional(),
      })
      .options({ allowUnknown: true, stripUnknown: true });
  };

  //funcion para validar los datos de la ruta DELETE
  delete = () => {
    //creacion de un objeto con los parametros requeridos para el correcto funcionamiento de la API
    return Joi.object()
      .keys({
        //asignacion de parametros de una tarea con su tipo de dato , su requerimiento
        taskId: Joi.string().required(),
      })
      .options({ allowUnknown: true, stripUnknown: true });
  };
}

//exportamos el modulo creando una instancia de la clase
module.exports = new TaskValidator();
