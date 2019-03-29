const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  hotel_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'hotel',
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  date: {
    type: Date,
  },
  description: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('photo', photoSchema);
