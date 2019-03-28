const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  // rating
  // date

  // language
  // title
  // description
  // traveler_type
  // trip_type
  // ratings
  // location
  // cleanliness
  // service
  // sleep quality
  // images
  date: {
    type: Date,
    required: true
  },
  language: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  traveler_type: {
    type: String
  },
  trip_type: {
    type: String
  },
  ratings: {
    overall: {
      type: Number
    },
    location: {
      type: Number
    },
    cleanliness: {
      type: Number
    },
    service: {
      type: Number
    },
    sleep_quality: {
      type: Number
    }
  },
  images: {
    type: [String]
  }
});

module.exports = mongoose.model("review", reviewSchema);
