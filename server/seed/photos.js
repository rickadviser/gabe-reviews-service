const faker = require('faker');
const { generateNum, generateEnum } = require('./helpers');

const generatePhotosData = () => {
  const photos = [];

  for (let i = 0; i < 7; i++) {
    const photo = {};
    photo.url = `https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley${i}.jpg`;
    photo.date = faker.date.past();
    photo.description = faker.lorem.paragraph();
    photo.likes = generateNum(20);
    photo.category = generateEnum([
      'Traveler',
      'Room & Suite',
      'Dining',
      'Pool & Beach',
      'Business Center & Event Rooms',
      'Family and Play Areas',
    ]);
    photos.push(photo);
  }

  return photos;
};

module.exports = generatePhotosData;
