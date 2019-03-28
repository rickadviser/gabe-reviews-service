const Hotel = require('../models/Hotel');
const Review = require('../models/Review');
const User = require('../models/User');
const generateUserReviewsData = require('./user_review');
const generateHotelsData = require('./hotels_general');
const generateUsersData = require('./users');

const seedMongo = async n => {
  const hotelsData = generateHotelsData(n);
  const usersData = generateUsersData(n);

  // seed users
  for (const user of usersData) {
    const newEntry = new User(user);
    await newEntry.save();
  }

  const mongoUsers = await User.find({});

  // seed general hotel data
  for (const hotel of hotelsData) {
    const newEntry = new Hotel(hotel);
    await newEntry.save();
  }

  const mongoHotels = await Hotel.find({});

  for (const hotel of mongoHotels) {
    const userReviewsData = generateUserReviewsData(n);

    // seed reviews
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
  }
};

module.exports = seedMongo;
