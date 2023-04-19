const express = require('express');
const router = express.Router();
const { getCartProducts } = require('../controllers/cart');

router.route('/').get(getCartProducts);
// router.route('/add/:id').post();
// router.route('/remove/:id').delete();
// router.route('/increase/:id').patch();
// router.route('/decrease/:id').patch();

module.exports = router;
