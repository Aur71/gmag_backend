const mongoose = require('mongoose');

const SmallElementSchema = new mongoose.Schema({
  element: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  path: String,
  styles: Object,
});

module.exports.schema = SmallElementSchema;
