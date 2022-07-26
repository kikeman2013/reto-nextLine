const express = require('express');
const app = express();

app.use(
  require('./user.routes'),
  require('./task.routes')
);

module.exports = app;
