const mongoose = require('mongoose');
const SpecificationSchema = require('./Specification').schema;

const CategorySchema = new mongoose.Schema({
  category: {
    type: String,
    default: 'general characteristics',
  },
  specs: [SpecificationSchema],
});

module.exports.schema = CategorySchema;
