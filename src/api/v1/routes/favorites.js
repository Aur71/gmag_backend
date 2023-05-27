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

router.route('/').get(getFavorites).post(addProductToFavorites);
router.route('/list').post(addList);
router.route('/list/:listId').put(editList).delete(deleteList);
router.route('/list/:listId/:productId').delete(removeProductFromFavorites);
router.route('/list/:listId/:productId/:newListId').put(moveProduct);

module.exports = router;
