
const task = require('../services/task.service');
class TaskController {

  insertTask= async(req, res) => {
        
    try {
      const data = req.task;
      const result = await task.insertTask(data);
      return res.status(200).json(result);
    }
    catch (error) {
      return res.status(error.statusCode || 400).json(error);
    }
 
  }
  getTask= async(req, res) => {
        
    try {
      const data = req.task;
      const result = await task.getTask(data);
      return res.status(200).json(result);
    }
    catch (error) {
      return res.status(error.statusCode || 400).json(error);
    }

  }
  updateTask= async(req, res) => {
        
    try {
      const data = req.task;
      const result = await task.updateTask(data);
      return res.status(200).json(result);
    }
    catch (error) {
      return res.status(error.statusCode || 400).json(error);
    }

  }
  deleteTask= async(req, res) => {
        
    try {
      const data = req.task;
      const result = await task.deleteTask(data);
      return res.status(200).json(result);
    }
    catch (error) {
      return res.status(error.statusCode || 400).json(error);
    }

  }
}
module.exports = new TaskController();