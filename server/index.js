const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const apiRoutes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = process.env.DB_URI || 'mongodb://database/rickadvisor';

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(console.error);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', apiRoutes);

app.listen(port, () => console.log(`Express server running on port ${port}`));
