const task = require("../services/task.service");
class TaskController {
  insertTask = async (req, res) => {
    try {
      const { userId } = req.userInfo;
      const data = req.task;
      const result = await task.insertTask(data, userId);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 400).json(error);
    }
  };

  getAllTasks = async (req, res) => {
    try {
      const { userId } = req.userInfo;
      const result = await task.getAllTasks(userId);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(error.statusCode || 400).json(error);
    }
  };

  getTask = async (req, res) => {
    try {
      const { userId } = req.userInfo;
      const data = req.task;
      const result = await task.getTask(data, userId);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 400).json(error);
    }
  };
  updateTask = async (req, res) => {
    try {
      const { userId } = req.userInfo;
      const data = req.task;
      const result = await task.updateTask(data, userId);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(error.statusCode || 400).json(error);
    }
  };
  deleteTask = async (req, res) => {
    try {
      const { userId } = req.userInfo;
      const data = req.task;
      const result = await task.deleteTask(data, userId);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 400).json(error);
    }
  };
}
module.exports = new TaskController();
