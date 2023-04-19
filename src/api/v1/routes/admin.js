const express = require('express');
const router = express.Router();
const { addProduct } = require('../controllers/admin');

router.route('/products').post(addProduct);

module.exports = router;
