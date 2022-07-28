//importacion de constantes
const express = require("express");
const app = express();
const router = express.Router();

//task	Controller
const task = require("../controllers/task.controller");

//validation to userId
const { validateUser } = require("../middlewares/verifyUser.middleware");

//task	Middleware
const taskMiddleware = require("../middlewares/task.middleware");

//routes to task
router.post("/", [validateUser, taskMiddleware.insert], task.insertTask); //crear una nueva tarea
router.get("/", [validateUser], task.getAllTasks); //Obtener todas las tareas
router.get("/:taskId", [validateUser, taskMiddleware.get], task.getTask); //Obtener una tarea en especifico
router.put("/", [validateUser, taskMiddleware.update], task.updateTask); //Actualizar una tarea en especifico
router.delete("/:taskId", [validateUser, taskMiddleware.delete], task.deleteTask); //Eliminar una tarea en especifico

//asignacion de la ruta de este modulo para la API
app.use("/api/task", router);

//exportacion de la constante app
module.exports = app;
