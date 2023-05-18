const mongoose = require('mongoose');
const validator = require('validator');

const subscribedUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

subscribedUserSchema.statics.subscribe = async function (name, email) {
  if (!email || !name) {
    const error = new Error('All fields must be filled');
    error.code = 400;
    throw error;
  }
  if (!validator.isEmail(email)) {
    const error = new Error('Email is not valid');
    error.code = 422;
    throw error;
  }
  const exists = await this.findOne({ email });
  if (exists) {
    const error = new Error('Email already in use');
    error.code = 409;
    throw error;
  }
};

module.exports = mongoose.model('subscribedUser', subscribedUserSchema);
