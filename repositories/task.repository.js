const { save, BD } = require("../helpers/bd.task.helper");

class TaskRepository {
  insertTask = async (data) => {
    BD.tasks.push(data);
    save(BD);
    return {
      status: true,
      message: `Tarea creado con el id: ${data.taskId}`,
      data: data,
    };
  };

  getAllTasks = async () => {
    return {
      status: true,
      message: `${BD.tasks.length} Tareas encotradas`,
      data: BD.tasks,
    };
  };

  getTask = async (data) => {
    const task = BD.tasks.filter((task) => task.taskId === data.taskId);
    return { status: true, message: "Tarea encontrada", data: task };
  };

  updateTask = async (data) => {
    BD.tasks.forEach((task) => {
      if (task.taskId === data.taskId) {
        task.title = data.title || task.title;
        task.description = data.description || task.description;
        task.completed = data.completed || task.completed;
        task.deliveryDate = data.deliveryDate || task.deliveryDate;
        task.comments = data.comments || task.comments;
        task.responsable = data.responsable || task.responsable;
        task.tags = data.tags || task.tags;
        task.dateUpdated || data.dateUpdated;

        data = task;
      }
    });
    save(BD);
    return {
      status: true,
      message: `Tarea ${data.taskId} actualizada`,
      data: data,
    };
  };

  deleteTask = async (data) => {
    BD.tasks = BD.tasks.filter((task) => task.taskId !== data.taskId);
    save(BD);
    return {
      status: true,
      message: `Tarea ${data.taskId} eliminada`,
      data: data,
    };
  };
}
module.exports = new TaskRepository();
