const express = require('express');
const router = express.Router();
const {
  getFavorites,
  addList,
  deleteList,
  editList,
  addProductToFavorites,
  removeProductFromFavorites,
  moveProduct,
} = require('../controllers/favorites');
const requireAuth = require('../middleware/auth');

router.use(requireAuth);

router.route('/').get(getFavorites);

module.exports = router;
