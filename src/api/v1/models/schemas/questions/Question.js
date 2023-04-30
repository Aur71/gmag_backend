const mongoose = require('mongoose');
const Answer = require('./Answer').schema;

const QuestionSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

module.exports.schema = QuestionSchema;
