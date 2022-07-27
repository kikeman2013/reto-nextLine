
const taskRepository = require('../repositories/task.repository');
const {ifExist , ifExistById} = require('../helpers/bd.task.helper')


class TaskService {
  insertTask = async(data) => {
    const result = await taskRepository.insertTask(data);
    return result;
  }
  getTask = async(data) => {
    const result = await taskRepository.getTask(data);
    return result;
  }
  updateTask = async(data) => {
    const result = await taskRepository.updateTask(data);
    return result;
  }
  deleteTask = async(data) => {
    const result = await taskRepository.deleteTask(data);
    return result;
}
}
module.exports = new TaskService();
      