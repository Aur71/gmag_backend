const Product = require('../models/Product');

const addReview = async (req, res) => {
  res.send('add reviewww');
  //   const { stars, title, content } = req.body;
  //   const { productId } = req.params;
  //   const userId = req.user._id; // assuming you have middleware to verify user authentication

  //   try {
  //     const product = await Product.findById(productId);

  //     if (!product) {
  //       return res.status(404).json({ error: 'Product not found' });
  //     }

  //     const newReview = {
  //       stars,
  //       title,
  //       content,
  //       postedBy: userId,
  //     };

  //     product.reviews.push(newReview);
  //     await product.save();

  //     res.status(201).json(newReview);
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ error: 'Server error' });
  //   }
};

const updateReview = (req, res) => {
  res.send('update review');
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
