const express = require('express');
const router = express.Router();
const {
  getLists,
  addList,
  deleteList,
  editList,
  addProduct,
  removeProduct,
  moveProduct,
} = require('../controllers/favorites');
const requireAuth = require('../middleware/auth');

router.use(requireAuth);

router.route('/').get(getLists).post(addList);
router.route('/:id').delete(deleteList).put(editList);
router.route('/:id/:productId').patch(addProduct).delete(removeProduct);
router.route('/:id/:productId/:moveToId').patch(moveProduct);

module.exports = router;
