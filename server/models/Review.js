const mongoose = require('mongoose');

const ratingsSchema = new mongoose.Schema({
  overall: {
    type: Number,
    required: true,
  },
  location: {
    type: Number,
  },
  cleanliness: {
    type: Number,
  },
  service: {
    type: Number,
  },
  sleep_quality: {
    type: Number,
  },
});

const reviewSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  hotel_id: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  language: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  traveler_type: {
    type: String,
  },
  ratings: ratingsSchema,
  images: {
    type: [String],
  },
});

module.exports = mongoose.model('review', reviewSchema);
