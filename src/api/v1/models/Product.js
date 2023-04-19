const mongoose = require('mongoose');

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
});

module.exports = mongoose.model('Product', ProductSchema);
