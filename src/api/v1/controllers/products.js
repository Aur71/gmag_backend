const Product = require('../models/Product');
const formatSpecifications = require('./functions/formatSpecifications');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}).select([
      '_id',
      'type',
      'name',
      'thumbnail',
      'currentPrice',
      'oldPrice',
      'discount',
      'rating',
      'reviewsCount',
      'stock',
      'orders',
      'date',
    ]);
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error['message']);
  }
};

const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send(error['message']);
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate({
        path: 'recommendations.productID',
        select: [
          '_id',
          'type',
          'name',
          'thumbnail',
          'currentPrice',
          'oldPrice',
          'discount',
          'rating',
          'reviewsCount',
          'stock',
          'orders',
          'date',
        ],
      })
      .exec();
    if (!product)
      return res
        .status(404)
        .send({ msg: `No product with id ${req.params.id}` });

    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error['message']);
  }
};

const deleteProduct = (req, res) => {};

const editProduct = (req, res) => {};

const getProductsByType = async (req, res) => {
  try {
    const products = await Product.find({ type: req.params.type }).select([
      '_id',
      'type',
      'name',
      'thumbnail',
      'currentPrice',
      'oldPrice',
      'discount',
      'rating',
      'reviewsCount',
      'stock',
      'orders',
      'date',
      'specifications',
    ]);

    const modifiedProducts = formatSpecifications(products);
    res.status(200).send(modifiedProducts);
  } catch (error) {
    res.status(500).send(error['message']);
  }
};

const getHotDeals = async (req, res) => {
  try {
    const products = await Product.find({ featured: 'hot deals' })
      .select([
        '_id',
        'type',
        'name',
        'thumbnail',
        'currentPrice',
        'oldPrice',
        'rating',
        'reviewsCount',
      ])
      .exec();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error['message']);
  }
};

const getMostPopular = async (req, res) => {
  try {
    const products = await Product.find({ featured: 'most popular' })
      .select([
        '_id',
        'type',
        'name',
        'thumbnail',
        'currentPrice',
        'oldPrice',
        'rating',
        'reviewsCount',
      ])
      .exec();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error['message']);
  }
};

const searchProducts = async (req, res) => {
  try {
    const { query } = req.query;
    const products = await Product.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { type: { $regex: query, $options: 'i' } },
      ],
    }).select([
      '_id',
      'type',
      'name',
      'thumbnail',
      'currentPrice',
      'oldPrice',
      'discount',
      'rating',
      'reviewsCount',
      'stock',
      'orders',
      'date',
      'specifications',
    ]);

    const modifiedProducts = formatSpecifications(products);
    res.json(modifiedProducts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllProducts,
  getProductsByType,
  getSingleProduct,
  getHotDeals,
  getMostPopular,
  addProduct,
  deleteProduct,
  editProduct,
  searchProducts,
};
