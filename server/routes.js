const express = require('express');
const User = require('./models/User');
const Hotel = require('./models/Hotel');
const Review = require('./models/Review');
const { Question, Answer } = require('./models/QAndA');
const Photo = require('./models/Photo');
const RoomTip = require('./models/RoomTip');

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
    Route:          /api/hotels/:id/reviews/general
    Method:         GET
    Description:    Get General Reviews For A Hotel
    Access:         Public
 */

router.get('/hotels/:id/reviews/general', async (req, res) => {
  const reviews = await Review.find({ hotel_id: req.params.id })
    .populate('user_id')
    .exec();
  res.json(reviews);
});

/*
    Route:          /api/hotels/:id/reviews/photos
    Method:         GET
    Description:    Get Review Photos For A Hotel
    Access:         Public
 */

router.get('/hotels/:id/reviews/photos', async (req, res) => {
  const photos = await Photo.find({ hotel_id: req.params.id });
  res.json(photos);
});

/*
    Route:          /api/hotels/:id/reviews/roomtips
    Method:         GET
    Description:    Get Room Tips For A Hotel
    Access:         Public
 */

router.get('/hotels/:id/reviews/roomtips', async (req, res) => {
  const roomTips = await RoomTip.find({ hotel_id: req.params.id });
  res.json(roomTips);
});

/*
    Route:          /api/hotels/:id/reviews/questions
    Method:         GET
    Description:    Get Q & A For A Hotel
    Access:         Public
 */

router.get('/hotels/:id/reviews/questions', async (req, res) => {
  const questions = await Question.find({ hotel_id: req.params.id });
  res.json(questions);
});

/*
    Route:          /api/hotels
    Method:         GET
    Description:    Get All Hotels
    Access:         Public
 */

router.get('/reviews/general', async (req, res) => {
  const reviews = await Review.find({});
  res.json(reviews);
});

/*
    Route:          /api/hotels
    Method:         GET
    Description:    Get All Hotels
    Access:         Public
 */

router.get('/reviews/general/:id', async (req, res) => {
  const review = await Review.find({ _id: req.params.id })
    .populate('hotel_id')
    .populate('user_id')
    .exec();
  res.json(review);
});

/*
    Route:          /api/hotels
    Method:         GET
    Description:    Get All Hotels
    Access:         Public
 */

router.get('/reviews/roomtips', async (req, res) => {
  const roomtips = await RoomTip.find({});
  res.json(roomtips);
});

/*
    Route:          /api/questions
    Method:         GET
    Description:    Get All Hotels
    Access:         Public
 */

router.get('/reviews/roomtips/:id', async (req, res) => {
  const roomtip = await RoomTip.find({ _id: req.params.id });
  res.json(roomtip);
});

/*
    Route:          /api/hotels
    Method:         GET
    Description:    Get All Hotels
    Access:         Public
 */

router.get('/reviews/photos', async (req, res) => {
  const photos = await Photo.find({});
  res.json(photos);
});

/*
    Route:          /api/questions
    Method:         GET
    Description:    Get All Hotels
    Access:         Public
 */

router.get('/reviews/photos/:id', async (req, res) => {
  const photo = await Photo.find({ _id: req.params.id });
  res.json(photo);
});

/*
    Route:          /api/hotels
    Method:         GET
    Description:    Get All Hotels
    Access:         Public
 */

router.get('/reviews/questions', async (req, res) => {
  const questions = await Question.find({});
  res.json(questions);
});

/*
    Route:          /api/questions
    Method:         GET
    Description:    Get All Hotels
    Access:         Public
 */

router.get('/reviews/questions/:id', async (req, res) => {
  const question = await Question.find({ _id: req.params.id });
  res.json(question);
});

/*
    Route:          /api/hotels
    Method:         GET
    Description:    Get All Hotels
    Access:         Public
 */

router.get('/reviews/answers', async (req, res) => {
  const answers = await Answer.find({})
    .populate('question_id')
    .exec();
  res.json(answers);
});

/*
    Route:          /api/questions
    Method:         GET
    Description:    Get All Hotels
    Access:         Public
 */

router.get('/reviews/answers/:id', async (req, res) => {
  const answer = await Answer.find({ _id: req.params.id })
    .populate('question_id')
    .exec();
  res.json(answer);
});

module.exports = router;
