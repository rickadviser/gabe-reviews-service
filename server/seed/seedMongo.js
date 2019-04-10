/* eslint-disable no-underscore-dangle */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

const Hotel = require('../models/Hotel');
const Review = require('../models/Review');
const User = require('../models/User');
const Photo = require('../models/Photo');
const { Question, Answer } = require('../models/QAndA');
const RoomTip = require('../models/RoomTip');
const generateUserReviewsData = require('./user_review');
const generateHotelsData = require('./hotels_general');
const generateUsersData = require('./users');
const generatePhotosData = require('./photos');
const generateRoomTipsData = require('./room_tips');
const { generateQuestionsData, generateAnswerData } = require('./q_and_a');

const seedMongo = async (n = 99) => {
  const hotelsData = generateHotelsData(n);
  const usersData = generateUsersData(n);

  // seed users
  for (const user of usersData) {
    const newEntry = new User(user);
    await newEntry.save();
  }

  // seed general hotel data
  for (const hotel of hotelsData) {
    const newEntry = new Hotel(hotel);
    await newEntry.save();
  }

  const mongoUsers = await User.find({});
  const mongoHotels = await Hotel.find({});

  for (const hotel of mongoHotels) {
    const userReviewsData = generateUserReviewsData(n);

    // seed general user reviews
    for (const review of userReviewsData) {
      const randomUserId =
        mongoUsers[Math.floor(Math.random() * mongoUsers.length)]._id;

      const newEntry = new Review({
        ...review,
        hotel_id: hotel._id,
        user_id: randomUserId,
      });

      await newEntry.save();
    }

    // seed seven same photos per hotel
    const photosData = generatePhotosData();

    for (const photo of photosData) {
      const randomUserId =
        mongoUsers[Math.floor(Math.random() * mongoUsers.length)]._id;

      const newEntry = new Photo({
        ...photo,
        hotel_id: hotel._id,
        user_id: randomUserId,
      });

      await newEntry.save();
    }

    // seed room tips
    const roomTipsData = generateRoomTipsData(n);

    for (const roomTip of roomTipsData) {
      const randomUserId =
        mongoUsers[Math.floor(Math.random() * mongoUsers.length)]._id;

      const newEntry = new RoomTip({
        ...roomTip,
        hotel_id: hotel._id,
        user_id: randomUserId,
      });

      await newEntry.save();
    }

    // seed q & a

    const questionsData = generateQuestionsData(n);

    for (const question of questionsData) {
      const randomUserId =
        mongoUsers[Math.floor(Math.random() * mongoUsers.length)]._id;

      const newQuestion = new Question({
        ...question,
        hotel_id: hotel._id,
        user_id: randomUserId,
      });

      await newQuestion.save();

      const answerData = generateAnswerData();

      const randomUserId2 =
        mongoUsers[Math.floor(Math.random() * mongoUsers.length)]._id;

      const answer = new Answer({
        ...answerData,
        user_id: randomUserId2,
        question_id: newQuestion._id,
      });

      await answer.save();
    }
  }
};

module.exports = seedMongo;
