const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error['message']);
  }
};

const getProductsByType = async (req, res) => {
  try {
    const products = await Product.find({ type: req.params.type }).exec();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error['message']);
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).exec();
    if (!product)
      return res
        .status(404)
        .send({ msg: `No product with id ${req.params.id}` });

    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error['message']);
  }
};

const getRecommendedProducts = (req, res) => {
  res.send('recommended products');
};

const getPromotionSlider = (req, res) => {
  res.send('promotion slider');
};

const getHotDeals = async (req, res) => {
  try {
    const products = await Product.find({ featured: 'hot deals' }).exec();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error['message']);
  }
};

const getMostPopular = async (req, res) => {
  try {
    const products = await Product.find({ featured: 'most popular' }).exec();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error['message']);
  }
};

module.exports = {
  getAllProducts,
  getProductsByType,
  getSingleProduct,
  getRecommendedProducts,
  getPromotionSlider,
  getHotDeals,
  getMostPopular,
};
