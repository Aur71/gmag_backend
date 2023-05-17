const express = require('express');
const router = express.Router();
const {
  getSubscribedUsers,
  subscribeUser,
  unsubscribeUser,
} = require('../controllers/newsLetter');

router.route('/').get(getSubscribedUsers);
router.route('/').post(subscribeUser);
router.route('/').delete(unsubscribeUser);

module.exports = router;
