const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const User = require('./models/User');
const Hotel = require('./models/Hotel');
const Review = require('./models/Review');

const app = express();
const PORT = 3000;

mongoose
  .connect('mongodb://localhost:27017/rickadvisor', {
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(console.error);

app.use(express.static(path.join(__dirname, '../public')));

app.get('/users', async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

app.get('/hotels', async (req, res) => {
  const hotels = await Hotel.find({});
  res.json(hotels);
});

app.get('/review', async (req, res) => {
  const reviews = await Review.find({});
  res.json(reviews);
});

app.listen(PORT, () => console.log('Server running'));
