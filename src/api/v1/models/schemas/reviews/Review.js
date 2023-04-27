const mongoose = require('mongoose');
const CommentSchema = require('./Comment').schema;

const ReviewSchema = new mongoose.Schema(
  {
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
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    comments: [CommentSchema],
  },
  { timestamps: true }
);

module.exports.schema = ReviewSchema;
