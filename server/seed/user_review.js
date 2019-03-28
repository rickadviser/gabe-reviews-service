const faker = require('faker');
const { generateEnum, generateNum, generateAvg } = require('./helpers');

const generateUserReviewsData = n => {
  const reviews = [];

  for (let i = 0; i < n; i++) {
    const currentReview = {};

    currentReview.date = faker.date.past();
    currentReview.language = generateEnum([
      'English',
      'Spanish',
      'Chinese',
      'Italian',
    ]);
    currentReview.title = faker.lorem.sentence();
    currentReview.description = faker.lorem.paragraph();
    currentReview.traveler_type = generateEnum([
      'Families',
      'Couples',
      'Solo',
      'Business',
      'Friends',
    ]);
    currentReview.ratings = {};
    currentReview.ratings.location = generateNum(5);
    currentReview.ratings.cleanliness = generateNum(5);
    currentReview.ratings.service = generateNum(5);
    currentReview.ratings.sleep_quality = generateNum(5);
    currentReview.ratings.overall = generateAvg(
      currentReview.ratings.location,
      currentReview.ratings.cleanliness,
      currentReview.ratings.service,
      currentReview.ratings.sleep_quality
    );
    currentReview.images = [];

    reviews.push(currentReview);
  }

  return reviews;
};

module.exports = generateUserReviewsData;
