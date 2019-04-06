const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
  },
  location: {
    city: {
      type: String,
    },
    state: {
      type: String,
    },
  },
  contributions: {
    type: Number,
  },
  helpful_votes: {
    type: Number,
  },
});

module.exports = mongoose.model('user', userSchema);
