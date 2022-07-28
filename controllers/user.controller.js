const user = require("../services/user.service");

class UserController {
  insertUser = async (req, res) => {
    try {
      const { userId } = req.userInfo;
      const data = req.user;
      const result = await user.insertUser(data, userId);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 400).json(error);
    }
  };

  getAllUsers = async (req, res) => {
    try {
      const { userId } = req.userInfo;
      const result = await user.getAllUsers(userId);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 400).json(error);
    }
  };

  getUser = async (req, res) => {
    try {
      const data = req.user;
      const { userId } = req.userInfo;
      const result = await user.getUser(data, userId);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 400).json(error);
    }
  };
  updateUser = async (req, res) => {
    try {
      const data = req.user;
      const { userId } = req.userInfo;
      const result = await user.updateUser(data, userId);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 400).json(error);
    }
  };
  deleteUser = async (req, res) => {
    try {
      const data = req.user;
      const { userId } = req.userInfo;
      const result = await user.deleteUser(data, userId);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 400).json(error);
    }
  };
}
module.exports = new UserController();
