const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const apiRoutes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

mongoose
  .connect('mongodb://database/rickadvisor', {
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(console.error);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', apiRoutes);

app.listen(port, () => console.log(`Express server running on port ${port}`));
