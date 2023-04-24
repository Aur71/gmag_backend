const express = require('express');
const router = express.Router();
const {
  getSlides,
  addSlide,
  deleteSlide,
  editSlide,
} = require('../controllers/promotion-slider');

router.route('/').get(getSlides);
router.route('/').post(addSlide);
router.route('/').delete(deleteSlide);
router.route('/').patch(editSlide);

module.exports = router;
