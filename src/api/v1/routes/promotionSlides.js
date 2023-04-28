const express = require('express');
const router = express.Router();
const {
  getPromotionSlides,
  addPromotionSlide,
  deletePromotionSlide,
  editPromotionSlide,
} = require('../controllers/promotionSlides');

router.route('/').get(getPromotionSlides);
// add admin auth middleware for the routes below
router.route('/').post(addPromotionSlide);
router.route('/:id').delete(deletePromotionSlide);
router.route('/:id').put(editPromotionSlide);

module.exports = router;
