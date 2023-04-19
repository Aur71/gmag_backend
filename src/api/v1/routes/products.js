const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductsByType,
  getSingleProduct,
  getRecommendedProducts,
  getPromotionSlider,
  getHotDeals,
  getMostPopular,
} = require('../controllers/products');

router.route('/').get(getAllProducts);
router.route('/type/:type').get(getProductsByType);
router.route('/id/:id').get(getSingleProduct);
router.route('/id/:id/recommended').get(getRecommendedProducts);
router.route('/promotion-slider').get(getPromotionSlider);
router.route('/hot-deals').get(getHotDeals);
router.route('/most-popular').get(getMostPopular);

module.exports = router;

// need to add routes for adding products to favorite
// need to add routes for creating, deleting and updating lists.
// need to add routes for getting a user reviews info and getting all the info if the user is logged in
