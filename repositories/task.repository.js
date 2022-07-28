//importacion de funciones helper para obtener la basde de datos (BD) y funcion helper para el guardado de ella (save)
const { save, BD } = require("../helpers/bd.task.helper");

//creacion de la clase repositorio de tareas
class TaskRepository {
  //funcion para agregar una nueva tarea a la base de datos
  insertTask = async (data) => {
    //ingresamos los datos al arreglo de tareas
    BD.tasks.push(data);
    //usamos la funcion para guardar y reescribir la base de datos
    save(BD);
    //regresamos un mensaje personalizado con la info de la tarea nueva
    return {
      status: true,
      message: `Tarea creado con el id: ${data.taskId}`,
      data: data,
    };
  };

  //funcion para obtener todas las tareas
  getAllTasks = async () => {
    //regresamos un mensaje personalizado con todas las tareas
    return {
      status: true,
      message: `${BD.tasks.length} Tareas encotradas`,
      data: BD.tasks,
    };
  };

  //funcion para obtener una tarea en especifico
  getTask = async (data) => {
    //filtro de todos las tareas para obtener la solicitada
    const task = BD.tasks.filter((task) => task.taskId === data.taskId);
    //regresamos un mensaje personalizado con la tarea en especifico
    return { status: true, message: "Tarea encontrada", data: task };
  };

  //funcion para actualizar una tarea en especifico
  updateTask = async (data) => {
    //recorremos el arreglo de todas las tareas
    BD.tasks.forEach((task) => {
      //hacemos coincidir la tarea a modificar
      if (task.taskId === data.taskId) {
        //al encontrar la tarea sobreescribimos los datos antiguos con los nuevos
        //en caso de que no existan los datos nuevos , se rescribiran los antiguos (hecho para evitar perdida de datos)
        task.title = data.title || task.title;
        task.description = data.description || task.description;
        task.completed = data.completed || task.completed;
        task.deliveryDate = data.deliveryDate || task.deliveryDate;
        task.comments = data.comments || task.comments;
        task.responsable = data.responsable || task.responsable;
        task.tags = data.tags || task.tags;
        task.dateUpdated || data.dateUpdated;

        // para el ahorro de codigo asignamos a la variable data la tarea econtrada asi poderla regresar completa en el mensaje
        data = task;
      }
    });
    //usamos la funcion para guardar y reescribir la base de datos
    save(BD);
    //regresamos un mensaje personalizado con la info de la tarea
    return {
      status: true,
      message: `Tarea ${data.taskId} actualizada`,
      data: data,
    };
  };

  //funcion para borrar una tarea en especifico
  deleteTask = async (data) => {
    //filtro de todos las tareas para quitar la solicitada
    BD.tasks = BD.tasks.filter((task) => task.taskId !== data.taskId);
    //usamos la funcion para guardar y reescribir la base de datos
    save(BD);
    //regresamos un mensaje personalizado con el taskId de la tarea eliminada
    return {
      status: true,
      message: `Tarea ${data.taskId} eliminada`,
      data: data,
    };
  };
}
//exportamos el modulo creando una instancia de la clase
module.exports = new TaskRepository();
