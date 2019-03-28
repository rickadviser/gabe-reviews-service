const mongoose = require('mongoose');

/*
hotel.name = generateHotelName();
    hotel.address = generateAddress();
    hotel.decription = faker.lorem.paragraph();
    hotel.walkable_score = Math.floor(Math.random() * 100);
    hotel.phone = faker.phone.phoneNumber();
    hotel.nearest_airport = generateAirport();
    hotel.url = '';
    hotel.ranking = generateRanking();
*/
const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  description: {
    type: String,
    required: true,
  },
  walkable_score: {
    type: Number,
  },
  phone: {
    type: String,
    required: true,
  },
  nearest_airport: {
    name: {
      type: String,
    },
    nearest: {
      type: Number,
    },
    unit: {
      type: String,
    },
  },
  url: {
    type: String,
    required: true,
  },
  ranking: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('hotel', hotelSchema);
