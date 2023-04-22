const mongoose = require('mongoose');

const RecommendationSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
});

module.exports.schema = RecommendationSchema;
