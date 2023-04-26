const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema(
  {
    listName: {
      type: String,
      required: true,
      default: 'Favorites',
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
  },
  { timestamps: true }
);

module.exports.schema = ListSchema;
