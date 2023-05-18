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
  getProductTypes,
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
router.route('/types').get(getProductTypes);

module.exports = router;
