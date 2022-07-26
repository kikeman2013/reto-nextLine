
  const express = require('express');
  const app = express();
  const router = express.Router();

  //task	Controller
  const task = require('../controllers/task.controller');

  //task	Middleware
  const taskMiddleware = require('../middlewares/task.middleware');

  //routes to task
  router.post('/', [taskMiddleware.insert], task.insertTask);
  router.get('/', [taskMiddleware.get], task.getTask);
  router.put('/', [taskMiddleware.update], task.updateTask);
  router.delete('/', [taskMiddleware.delete], task.deleteTask);
      
  app.use('/api/task', router);
  module.exports = app;
  