const mongoose = require('mongoose');
const ImageSchema = require('./schemas/Image').schema;

const ProductSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  featured: {
    type: String,
    default: 'not featured',
  },
  thumbnail: {
    type: String,
    required: true,
  },
  currentPrice: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: Number,
    default: 0,
  },
  discount: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviewsCount: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    default: 0,
  },
  orders: {
    type: Number,
    default: 0,
  },
  date: {
    type: Number,
    default: Date.now,
  },
  images: [ImageSchema],
});

module.exports = mongoose.model('Product', ProductSchema);
