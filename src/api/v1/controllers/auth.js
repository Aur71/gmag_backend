const User = require('../models/User');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    const { _id } = user;
    const token = createToken(_id);
    res.status(200).send({ email, token, _id });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const { _id } = user;
    const token = createToken(_id);
    res.status(200).send({ email, token, _id });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
