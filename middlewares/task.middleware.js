
const taskValidator = require('../validators/task.validator');
class TaskMiddleware {
  insert = async(req, res, next) => {
    
    try {
      req.task = await taskValidator.insert().validateAsync({
        ...req.body,
      });
      next();
    }
    catch (error) {
      res.status(error.statusCode || 400).json(error);
    }
  }
  get = async(req, res, next) => {
    
    try {
      req.task = await taskValidator.get().validateAsync({
        ...req.body,
      });
      next();
    }
    catch (error) {
      res.status(error.statusCode || 400).json(error);
    }
  }
  update = async(req, res, next) => {
    
    try {
      req.task = await taskValidator.update().validateAsync({
        ...req.body,
      });
      next();
    }
    catch (error) {
      res.status(error.statusCode || 400).json(error);
    }
  }
  delete = async(req, res, next) => {
    
    try {
      req.task = await taskValidator.delete().validateAsync({
        ...req.body,
      });
      next();
    }
    catch (error) {
      res.status(error.statusCode || 400).json(error);
    }
  }
}
module.exports = new TaskMiddleware();
