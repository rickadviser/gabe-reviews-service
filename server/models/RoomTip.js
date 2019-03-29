const mongoose = require('mongoose');

const roomTipSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  hotel_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'hotel',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  tip: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('review_tip', roomTipSchema);
