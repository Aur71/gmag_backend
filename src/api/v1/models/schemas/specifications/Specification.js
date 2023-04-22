const mongoose = require('mongoose');

const SpecificationSchema = new mongoose.Schema({
  showAsFilter: {
    type: Boolean,
    default: false,
  },
  key: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

module.exports.schema = SpecificationSchema;
