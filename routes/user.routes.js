
  const express = require('express');
  const app = express();
  const router = express.Router();

  //user	Controller
  const user = require('../controllers/user.controller');

  //user	Middleware
  const userMiddleware = require('../middlewares/user.middleware');

  //routes to user
  router.post('/', [userMiddleware.insert], user.insertUser);
  router.get('/', user.getAllUsers);
  router.get('/:userId', [userMiddleware.get], user.getUser);
  router.put('/', [userMiddleware.update], user.updateUser);
  router.delete('/:userId', [userMiddleware.delete], user.deleteUser);
      
  app.use('/api/user', router);
  module.exports = app;
  