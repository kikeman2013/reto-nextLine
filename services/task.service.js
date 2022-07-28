//importacion del modulo de repositorio de tareas
const taskRepository = require("../repositories/task.repository");
//importacion de la libreria para la generacion de Id
const { v4: uuid } = require("uuid");
//importacion de funciones helper para validacion de existencias
const { ifExist, ifExistById } = require("../helpers/bd.task.helper");
//importacion de funcion para imprimir en consola las acciones que se van realizando
const { print } = require("../helpers/utils.helper");

//creacion de la clase servicio de tareas
class TaskService {
  //funcion para insertar una nueva tarea
  insertTask = async (data, userId) => {
    //validacion de que la tarea exista en la base de datos
    if (ifExist(data.title)) throw { status: false, message: "la tarea ya existe" };
    //creacion del parametro para agregar la fecha de creacion a la tarea
    const dateCreated = new Date(Date.now()).toLocaleString();
    //agregamos a los datos de forma constructiva un nuevo Id para la tarea y la fecha de creacion
    data = { taskId: uuid(), ...data, createdByUser: userId, dateCreated };
    //mandamos al repositorio los datos obtenidos
    const result = await taskRepository.insertTask(data);
    //imprimimos en consola que el usuario realizo una accion en un tiempo especifico
    print("Creo una tarea", userId);
    //retornamos el resultado
    return result;
  };

  //funcion para obtener todas las tareas
  getAllTasks = async (userId) => {
    //mandamos a llamar la funcion de obtener todas las tareas del repositorio
    const result = await taskRepository.getAllTasks();
    //quitamos unos parametros de manera desconstrutiva para no enviar toda la informacion
    //realizando un mapeo de todas las tareas
    result.data = result.data.map((task) => {
      const { taskId, title, completed, deliveryDate, ...t } = task;
      return { taskId, title, completed, deliveryDate };
    });
    //imprimimos en consola que el usuario realizo una accion en un tiempo especifico
    print("obtuvo todas las tareas", userId);
    //retornamos el resultado
    return result;
  };

  //funcion para obtener una tarea en especifico
  getTask = async (data, userId) => {
    //validacion de que la tarea exista en la base de datos
    if (!ifExistById(data.taskId)) throw { status: false, message: "la tarea no existe" };
    //mandamos al repositorio los datos obtenidos
    const result = await taskRepository.getTask(data);
    //imprimimos en consola que el usuario realizo una accion en un tiempo especifico
    print(`obtuvo la infomacion de la tarea ${result.data[0].title}`, userId);
    //retornamos el resultado
    return result;
  };

  //funcion para actualizar un usuario en especifico
  updateTask = async (data, userId) => {
    //validacion de que la tarea exista en la base de datos
    if (!ifExistById(data.taskId)) throw { status: false, message: "la tarea no existe" };
    //creacion del parametro para agregar la fecha de modificacion a la tarea
    const dateUpdated = new Date(Date.now()).toLocaleString();
    //agregamos a los datos de forma constructiva la fecha de modificacion
    data = { ...data, dateUpdated };
    //mandamos al repositorio los datos obtenidos
    const result = await taskRepository.updateTask(data);
    //imprimimos en consola que el usuario realizo una accion en un tiempo especifico
    print(`actualizo la infomacion de la tarea ${result.data.title}`, userId);
    //retornamos el resultado
    return result;
  };

  //funcion para eliminar un usuario en especifico
  deleteTask = async (data, userId) => {
    //validacion de que la tarea exista en la base de datos
    if (!ifExistById(data.taskId)) throw { status: false, message: "la tarea no existe" };
    //mandamos al repositorio los datos obtenidos
    const result = await taskRepository.deleteTask(data);
    //imprimimos en consola que el usuario realizo una accion en un tiempo especifico
    print(`Elimino la infomacion de la tarea ${result.data.taskId}`, userId);
    //retornamos el resultado
    return result;
  };
}

//exportamos el modulo creando una instancia de la clase
module.exports = new TaskService();
