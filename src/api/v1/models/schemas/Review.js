const mongoose = require('mongoose');
const CommentSchema = require('./Comment').schema;

const ReviewSchema = new mongoose.Schema({
  stars: {
    type: Number,
    default: 1,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  postedOn: {
    type: Number,
    default: Date.now,
  },
  postedBy: {
    type: Number,
    required: true,
  },
  comments: [CommentSchema],
});

module.exports.schema = ReviewSchema;
