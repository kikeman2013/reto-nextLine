const taskValidator = require("../validators/task.validator");
class TaskMiddleware {
  insert = async (req, res, next) => {
    try {
      req.task = await taskValidator.insert().validateAsync({
        ...req.body,
      });
      let { deliveryDate } = req.task;
      deliveryDate = new Date(deliveryDate).toLocaleString();
      req.task.deliveryDate = deliveryDate;
      next();
    } catch (error) {
      console.log(error);
      res.status(error.statusCode || 400).json(error);
    }
  };
  get = async (req, res, next) => {
    try {
      req.task = await taskValidator.get().validateAsync({
        ...req.params,
      });
      next();
    } catch (error) {
      res.status(error.statusCode || 400).json(error);
    }
  };
  update = async (req, res, next) => {
    try {
      req.task = await taskValidator.update().validateAsync({
        ...req.body,
      });
      let { deliveryDate } = req.task;
      deliveryDate = new Date(deliveryDate).toLocaleString();
      req.task.deliveryDate = deliveryDate;
      next();
    } catch (error) {
      res.status(error.statusCode || 400).json(error);
    }
  };
  delete = async (req, res, next) => {
    try {
      req.task = await taskValidator.delete().validateAsync({
        ...req.params,
      });
      next();
    } catch (error) {
      res.status(error.statusCode || 400).json(error);
    }
  };
}
module.exports = new TaskMiddleware();
