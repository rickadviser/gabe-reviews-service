const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
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
  question: {
    type: String,
    required: true,
  },
});

const answerSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'question',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    required: true,
  },
});

exports.Question = mongoose.model('question', questionSchema);
exports.Answer = mongoose.model('answer', answerSchema);
