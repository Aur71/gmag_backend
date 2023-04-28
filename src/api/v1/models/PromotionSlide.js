const mongoose = require('mongoose');

const PromotionSlideSchema = new mongoose.Schema(
  {
    thumbnail: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('PromotionSlide', PromotionSlideSchema);
