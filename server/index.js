const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const apiRoutes = require('./routes');

const app = express();
const PORT = 3000;

mongoose
  .connect('mongodb://localhost:27017/rickadvisor', {
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(console.error);

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', apiRoutes);

app.listen(PORT, () => console.log('Server running'));
