
const userValidator = require('../validators/user.validator');
class UserMiddleware {
  insert = async(req, res, next) => {
    
    try {
      req.user = await userValidator.insert().validateAsync({
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
      req.user = await userValidator.get().validateAsync({
        ...req.params,
      });
      next();
    }
    catch (error) {
      res.status(error.statusCode || 400).json(error);
    }
  }
  update = async(req, res, next) => {
    
    try {
      req.user = await userValidator.update().validateAsync({
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
      req.user = await userValidator.delete().validateAsync({
        ...req.params,
      });
      next();
    }
    catch (error) {
      res.status(error.statusCode || 400).json(error);
    }
  }
}
module.exports = new UserMiddleware();
