const PromotionSlide = require('../models/PromotionSlide');

const getPromotionSlides = async (req, res) => {
  try {
    const slides = await PromotionSlide.find({});
    res.status(200).send(slides);
  } catch (error) {
    res.status(500).send(error['message']);
  }
};

const addPromotionSlide = async (req, res) => {
  try {
    const slide = await PromotionSlide.create(req.body);
    res.status(201).send(slide);
  } catch (error) {
    res.status(500).send(error['message']);
  }
};

const deletePromotionSlide = async (req, res) => {
  try {
    const deletedSlide = await PromotionSlide.findByIdAndDelete(req.params.id);
    if (!deletedSlide) {
      return res.status(404).json({ message: 'Slide not found' });
    }
    res.send({ message: 'Slide deleted successfully' });
  } catch (error) {
    res.status(500).send(error['message']);
  }
};

const editPromotionSlide = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSlide = await PromotionSlide.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedSlide) {
      return res.status(404).json({ message: 'Slide not found' });
    }
    res.send(updatedSlide);
  } catch (error) {
    res.status(500).send(error['message']);
  }
};

module.exports = {
  getPromotionSlides,
  addPromotionSlide,
  deletePromotionSlide,
  editPromotionSlide,
};
