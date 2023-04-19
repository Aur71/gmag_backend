const getAllProducts = (req, res) => {
  res.send('get all products');
};

const getProductsByType = async (req, res) => {
  res.send('get products by type');
};

const getSingleProduct = (req, res) => {
  res.send('get single product');
};

const getRecommendedProducts = (req, res) => {
  res.send('recommended products');
};

const getPromotionSlider = (req, res) => {
  res.send('promotion slider');
};

const getHotDeals = (req, res) => {
  res.send('get hot deals');
};

const getMostPopular = (req, res) => {
  res.send('get most popular products');
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
