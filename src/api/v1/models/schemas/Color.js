const mongoose = require('mongoose');

const ColorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

module.exports.schema = ColorSchema;
