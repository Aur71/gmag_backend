const mongoose = require('mongoose');
const ImageSchema = require('./schemas/Image').schema;
const ColorSchema = require('./schemas/Color').schema;
const ReviewSchema = require('./schemas/Review').schema;

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
  images: {
    type: [ImageSchema],
    validate: [arrayMinLength, 'At least one image is required'],
  },
  colors: {
    type: [ColorSchema],
    validate: [arrayMinLength, 'At least one color is required'],
  },
  description: [],
  specifications: [],
  reviews: [ReviewSchema],
  questions: [],
  recomandations: [],
});

module.exports = mongoose.model('Product', ProductSchema);

function arrayMinLength(arr) {
  return arr && arr.length > 0;
}
