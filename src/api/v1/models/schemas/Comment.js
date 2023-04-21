const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  postedOn: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    type: Number,
    required: true,
  },
});

module.exports.schema = CommentSchema;
