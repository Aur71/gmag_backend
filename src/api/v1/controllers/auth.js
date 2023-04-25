const User = require('../models/User');

const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    res.status(200).send({ email, user });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  res.send('login user');
};

const logoutUser = (req, res) => {
  res.send('logout user');
};

module.exports = { signupUser, loginUser, logoutUser };
