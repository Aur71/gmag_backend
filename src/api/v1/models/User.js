const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

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
    profileImage: {
      type: String,
      default:
        'https://firebasestorage.googleapis.com/v0/b/gmag-b6a34.appspot.com/o/users%2Fuser.png?alt=media&token=701f682d-d622-412a-8788-1cd46d5c86d7',
    },
  },
  { timestamps: true }
);

userSchema.statics.signup = async function (email, password) {
  if (!email || !password) throw Error('All fields must be filled');
  if (!validator.isEmail(email)) throw Error('Email is not valid');
  if (!validator.isStrongPassword(password))
    throw Error('Password not strong enough');
  const exists = await this.findOne({ email });
  if (exists) throw Error('Email already in use');
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ email, password: hash });
  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) throw Error('All fields must be filled');
  const user = await this.findOne({ email });
  if (!user) throw Error('Incorrect email');
  const match = await bcrypt.compare(password, user.password);
  if (!match) throw Error('Incorrect password');
  return user;
};

module.exports = mongoose.model('User', userSchema);
