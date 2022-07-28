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
router.post("/", [validateUser, taskMiddleware.insert], task.insertTask);
router.get("/", [validateUser], task.getAllTasks);
router.get("/:taskId", [validateUser, taskMiddleware.get], task.getTask);
router.put("/", [validateUser, taskMiddleware.update], task.updateTask);
router.delete("/:taskId", [validateUser, taskMiddleware.delete], task.deleteTask);

app.use("/api/task", router);
module.exports = app;
