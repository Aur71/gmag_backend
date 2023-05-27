const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        default: [],
      },
    ],
  },
  { timestamps: true }
);

module.exports.schema = ListSchema;
