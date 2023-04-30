const mongoose = require('mongoose');
const ImageSchema = require('./schemas/Image').schema;
const ColorSchema = require('./schemas/Color').schema;
const CategorySchema = require('./schemas/specifications/Category').schema;
const ReviewSchema = require('./schemas/reviews/Review').schema;
const QuestionSchema = require('./schemas/questions/Question').schema;

const ProductSchema = new mongoose.Schema(
  {
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
      sold: {
        type: Number,
        default: 0,
      },
      returned: {
        type: Number,
        default: 0,
      },
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
    specifications: [CategorySchema],
    reviews: [ReviewSchema],
    questions: [QuestionSchema],
  },
  {
    timestamps: true,
  }
);

// Calucates the rating and sets the review count.
ProductSchema.pre('save', function (next) {
  const product = this;
  const totalStars = product.reviews.reduce(
    (sum, review) => sum + review.stars,
    0
  );
  const reviewsCount = product.reviews.length;
  const rating = reviewsCount > 0 ? totalStars / reviewsCount : 0;
  product.rating = rating;
  product.reviewsCount = reviewsCount;
  next();
});

// Sets the stock to the sum of all different colored products stock.
ProductSchema.pre('save', function (next) {
  const product = this;
  const colorsStock = product.colors.reduce(
    (sum, color) => sum + color.stock,
    0
  );
  product.stock = colorsStock;
  next();
});

// Updates the discount based on the current price and old price
ProductSchema.pre('save', function (next) {
  const product = this;
  if (product.isModified('currentPrice') || product.isModified('oldPrice')) {
    const discount =
      ((product.oldPrice - product.currentPrice) / product.oldPrice) * 100;
    product.discount = Math.round(discount);
  }
  next();
});

module.exports = mongoose.model('Product', ProductSchema);

function arrayMinLength(arr) {
  return arr && arr.length > 0;
}
