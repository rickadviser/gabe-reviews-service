const express = require('express');
const User = require('./models/User');
const Hotel = require('./models/Hotel');
const Review = require('./models/Review');

const seedMongo = require('./seed/seedMongo');

const router = express.Router();

router.post('/seed', async (req, res) => {
  await seedMongo(99);
  res.json(await Review.find({}));
});

/*
    Route:          /api/users
    Method:         GET
    Description:    Get All Users
    Access:         Public
 */

router.get('/users', async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

/*
    Route:          /api/hotels/:id
    Method:         GET
    Description:    Get Single User
    Access:         Public
 */

router.get('/users/:id', async (req, res) => {
  const user = await User.find({ _id: req.params.id });
  res.json(user);
});

/*
    Route:          /api/hotels
    Method:         GET
    Description:    Get All Hotels
    Access:         Public
 */

router.get('/hotels', async (req, res) => {
  const hotels = await Hotel.find({});
  res.json(hotels);
});

/*
    Route:          /api/hotels/:id
    Method:         GET
    Description:    Get Single Hotel
    Access:         Public
 */

router.get('/hotels/:id', async (req, res) => {
  const hotels = await Hotel.find({ _id: req.params.id });
  res.json(hotels);
});

/*
    Route:          /api/hotels
    Method:         GET
    Description:    Get All Hotels
    Access:         Public
 */

router.get('/reviews', async (req, res) => {
  const reviews = await Review.find({});
  res.json(reviews);
});

/*
    Route:          /api/hotels
    Method:         GET
    Description:    Get All Hotels
    Access:         Public
 */

router.get('/reviews/:id', async (req, res) => {
  const review = await Review.find({ _id: req.params.id })
    .populate('hotel_id')
    .populate('user_id')
    .exec();
  res.json(review);
});

module.exports = router;
