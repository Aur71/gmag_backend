const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  addProduct,
  getSingleProduct,
  deleteProduct,
  editProduct,
  getProductsByType,
  getHotDeals,
  getMostPopular,
  searchProducts,
} = require('../controllers/products');

router.route('/').get(getAllProducts).post(addProduct);
router
  .route('/id/:id')
  .get(getSingleProduct)
  .delete(deleteProduct)
  .put(editProduct);
router.route('/search').get(searchProducts);
router.route('/type/:type').get(getProductsByType);
router.route('/hot-deals').get(getHotDeals);
router.route('/most-popular').get(getMostPopular);

module.exports = router;
