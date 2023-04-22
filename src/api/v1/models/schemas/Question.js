const mongoose = require('mongoose');
const Answer = require('./Answer').schema;

const QuestionSchema = new mongoose.Schema({
  postedOn: {
    type: Number,
    default: Date.now,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answers: [Answer],
});

module.exports.schema = QuestionSchema;
