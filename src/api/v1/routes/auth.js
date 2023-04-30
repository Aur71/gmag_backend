const express = require('express');
const router = express.Router();
const { loginUser, signupUser } = require('../controllers/auth');

router.route('/login').post(loginUser);
router.route('/signup').post(signupUser);

module.exports = router;
