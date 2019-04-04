const faker = require('faker');
const { generateEnum, generateNum } = require('./helpers');

const getReviewTitle = title => {
  const randNum = Math.ceil(Math.random() * 5);
  return title
    .split(' ')
    .slice(0, randNum)
    .map(i => i[0].toUpperCase() + i.slice(1))
    .join(' ');
};

const generateLanguage = () => {
  const rand = Math.random();
  return rand < 0.75
    ? 'English'
    : generateEnum(['Spanish', 'Chinese', 'Italian']);
};

const generateRating = () => {
  const rand = Math.ceil(Math.random() * 10);
  let rating;

  if (rand >= 1 && rand < 4) {
    rating = 5;
  } else if (rand >= 4 && rand < 7) {
    rating = 4;
  } else if (rand >= 7 && rand < 9) {
    rating = 3;
  } else if (rand === 9) {
    rating = 2;
  } else {
    rating = 1;
  }

  return rating;
};

const generateHelpful = () => {
  const rand = Math.random();
  return rand > 0.75 ? Math.ceil(Math.random() * 20) : 0;
};

// const generateRoomtip = () => {
//   const rand = Math.random();

//   if(rand > 0.5) {
//     //
//   }
// }

// const generatePhotos = () => {}

const generateUserReviewsData = n => {
  const reviews = [];

  for (let i = 0; i < n; i++) {
    const currentReview = {};

    currentReview.date = faker.date.past();
    currentReview.language = generateLanguage();
    currentReview.title = getReviewTitle(faker.lorem.sentence());
    currentReview.description = faker.lorem.paragraphs();
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
    currentReview.ratings.overall = generateRating();
    currentReview.helpful_votes = generateHelpful();
    // currentReview.roomtip = generateRoomtip():

    reviews.push(currentReview);
  }

  return reviews;
};

module.exports = generateUserReviewsData;
