const Product = require('../models/Product');

const addQuestion = async (req, res) => {
  const { question } = req.body;
  const { productId } = req.params;
  const userId = req.user._id;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    const newQuestion = {
      question,
      postedBy: userId,
    };

    product.questions.push(newQuestion);
    await product.save();
    res.status(201).json('Question added');
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const updateQuestion = async (req, res) => {
  const { newQuestion } = req.body;
  const { productId, questionId } = req.params;
  const userId = req.user._id;

  try {
    const product = await Product.findById(productId);
    const question = product.questions.id(questionId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }
    if (question.postedBy.toString() !== userId.toString()) {
      return res.status(401).json({ error: 'You are not authorized' });
    }
    question.question = newQuestion;
    await product.save();
    res.status(201).json('Question updated');
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteQuestion = async (req, res) => {
  const { productId, questionId } = req.params;
  const userId = req.user._id;

  try {
    const product = await Product.findById(productId);
    const question = product.questions.id(questionId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }
    if (question.postedBy.toString() !== userId.toString()) {
      return res.status(401).json({ error: 'You are not authorized' });
    }
    product.questions.pull({ _id: questionId });
    await product.save();
    res.status(200).json('Question deleted');
  } catch (error) {
    return res.status(404).json({ error: 'Question not found' });
  }
};

const addAnswer = async (req, res) => {
  const { answer } = req.body;
  const { productId, questionId } = req.params;
  const userId = req.user._id;

  try {
    const product = await Product.findById(productId);
    const question = product.questions.id(questionId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }
    const newAnswer = {
      answer,
      postedBy: userId,
    };

    question.answers.push(newAnswer);
    await product.save();
    res.status(201).json('Answer added');
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const updateAnswer = (req, res) => {
  res.send('Update answer');
};

const deleteAnswer = (req, res) => {
  res.send('Delete answer');
};

module.exports = {
  addQuestion,
  updateQuestion,
  deleteQuestion,
  addAnswer,
  updateAnswer,
  deleteAnswer,
};
