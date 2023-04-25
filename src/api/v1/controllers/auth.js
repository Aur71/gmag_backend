const User = require('../models/User');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    const token = createToken(user._id);
    res.status(200).send({ email, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).send({ email, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const logoutUser = (req, res) => {
  res.send('logout user');
};

module.exports = { signupUser, loginUser, logoutUser };
