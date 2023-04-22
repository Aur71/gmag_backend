const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
  postedOn: {
    type: Number,
    default: Date.now,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

module.exports.schema = AnswerSchema;
