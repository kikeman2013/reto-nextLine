const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use(require('./routes/index.routes'));

// Server running
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}.`);
  });