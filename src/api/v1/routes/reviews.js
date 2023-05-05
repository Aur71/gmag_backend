const express = require('express');
const router = express.Router();
const {
  addReview,
  updateReview,
  deleteReview,
  addComment,
  updateComment,
  deleteComment,
  addLike,
  removeLike,
} = require('../controllers/reviews');
const requireAuth = require('../middleware/auth');

router.use(requireAuth);

router.route('/:productId').post(addReview);
router.route('/:productId/:reviewId').put(updateReview).delete(deleteReview);
router.route('/:productId/:reviewId/comments').post(addComment);
router
  .route('/:productId/:reviewId/comments/:commentId')
  .put(updateComment)
  .delete(deleteComment);
router.route('/:productId/:reviewId/likes').post(addLike).delete(removeLike);

module.exports = router;
