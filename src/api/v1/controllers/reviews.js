const Product = require('../models/Product');

const addReview = async (req, res) => {
  const { stars, title, content } = req.body;
  const { productId } = req.params;
  const userId = req.user._id;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    const newReview = {
      stars,
      title,
      content,
      postedBy: userId,
    };
    product.reviews.push(newReview);
    await product.save();
    res.status(201).json('Review added');
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

const updateReview = async (req, res) => {
  const { productId, reviewId } = req.params;
  const userId = req.user._id;
  const { stars, title, content } = req.body;

  try {
    const product = await Product.findById(productId);
    const review = product.reviews.id(reviewId);
    if (!product) {
      return res.status(404).send({ error: 'Product not found' });
    }
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    if (review.postedBy.toString() !== userId.toString()) {
      return res.status(401).json({ error: 'You are not authorized' });
    }
    review.stars = stars;
    review.title = title;
    review.content = content;
    await product.save();
    res.status(200).json('Review updated');
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteReview = (req, res) => {
  res.send('delete review');
};

const addComment = (req, res) => {
  res.send('add comment to a review');
};

const updateComment = (req, res) => {
  res.send('update comment to a review');
};

const deleteComment = (req, res) => {
  res.send('delete comment to a review');
};

const addLike = (req, res) => {
  res.send('add like');
};

const removeLike = (req, res) => {
  res.send('remove like');
};

module.exports = {
  addReview,
  updateReview,
  deleteReview,
  addComment,
  updateComment,
  deleteComment,
  addLike,
  removeLike,
};
