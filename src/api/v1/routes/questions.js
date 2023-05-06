const express = require('express');
const router = express.Router();
const {
  addQuestion,
  updateQuestion,
  deleteQuestion,
  addAnswer,
  updateAnswer,
  deleteAnswer,
} = require('../controllers/questions');
const requireAuth = require('../middleware/auth');

router.use(requireAuth);

router.route('/:productId').post(addQuestion);
router
  .route('/:productId/:questionId')
  .put(updateQuestion)
  .delete(deleteQuestion);
router.route('/:productId/:questionId/answers').post(addAnswer);
router
  .route('/:productId/:questionId/answers/:answerId')
  .put(updateAnswer)
  .delete(deleteAnswer);

module.exports = router;
