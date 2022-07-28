const taskRepository = require("../repositories/task.repository");
const { v4: uuid } = require("uuid");
const { ifExist, ifExistById } = require("../helpers/bd.task.helper");
const { print } = require("../helpers/utils.helper");

class TaskService {
  insertTask = async (data, userId) => {
    if (ifExist(data.title)) return { status: false, message: "la tarea ya existe" };
    const dateCreated = new Date(Date.now()).toLocaleString();
    data = { taskId: uuid(), ...data, createdByUser: userId, dateCreated };
    const result = await taskRepository.insertTask(data);
    print("Creo una tarea", userId);
    return result;
  };
  getAllTasks = async (userId) => {
    const result = await taskRepository.getAllTasks();
    result.data = result.data.map((task) => {
      const { taskId, title, completed, deliveryDate, ...t } = task;
      return { taskId, title, completed, deliveryDate };
    });
    print("obtuvo todas las tareas", userId);
    return result;
  };
  getTask = async (data, userId) => {
    if (!ifExistById(data.taskId)) return { status: false, message: "la tarea no existe" };
    const result = await taskRepository.getTask(data);
    print(`obtuvo la infomacion de la tarea ${result.data[0].title}`, userId);
    return result;
  };
  updateTask = async (data, userId) => {
    if (!ifExistById(data.taskId)) return { status: false, message: "la tarea no existe" };
    const dateUpdated = new Date(Date.now()).toLocaleString();
    data = { ...data, dateUpdated };
    const result = await taskRepository.updateTask(data);
    print(`actualizo la infomacion de la tarea ${result.data.title}`, userId);
    return result;
  };
  deleteTask = async (data, userId) => {
    if (!ifExistById(data.taskId)) return { status: false, message: "la tarea no existe" };
    const result = await taskRepository.deleteTask(data);
    print(`Elimino la infomacion de la tarea ${result.data.taskId}`, userId);
    return result;
  };
}
module.exports = new TaskService();
