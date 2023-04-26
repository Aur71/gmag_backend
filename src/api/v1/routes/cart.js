const express = require('express');
const router = express.Router();
const {
  getCartProducts,
  addCartProduct,
  removeCartProduct,
  increaseProductCount,
  decreaseProductCount,
} = require('../controllers/cart');
const requireAuth = require('../middleware/auth');

router.use(requireAuth);

router.route('/').get(getCartProducts);
router.route('/add/:id').post(addCartProduct);
router.route('/remove/:id').delete(removeCartProduct);
router.route('/increase/:id').patch(increaseProductCount);
router.route('/decrease/:id').patch(decreaseProductCount);

module.exports = router;
