const Product = require('../models/Product');

const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send(error['message']);
  }
};

module.exports = { addProduct };
