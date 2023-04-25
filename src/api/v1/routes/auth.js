const express = require('express');
const router = express.Router();
const { loginUser, signupUser, logoutUser } = require('../controllers/auth');

router.route('/login').post(loginUser);
router.route('/signup').post(signupUser);
router.route('/logout').post(logoutUser);

module.exports = router;
