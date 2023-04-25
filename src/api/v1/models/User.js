const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: function () {
        return this.email.replace(/@gmail.com$/, '');
      },
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImage: { type: String, default: null },
    // add a default user image from firebase
  },
  { timestamps: true }
);

// static methods
userSchema.statics.signup = async function (email, password) {
  const exists = await this.findOne({ email });
  if (exists) throw Error('Email already in use');
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ email, password: hash });
  return user;
};

module.exports = mongoose.model('User', userSchema);
