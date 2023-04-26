const getCartProducts = (req, res) => {
  res.send('cart product');
};

const addCartProduct = (req, res) => {
  res.send('add product to cart');
};

const removeCartProduct = (req, res) => {
  res.send('remove product from cart');
};

const increaseProductCount = (req, res) => {
  res.send('increase product count');
};

const decreaseProductCount = (req, res) => {
  res.send('decrease product count');
};

module.exports = {
  getCartProducts,
  addCartProduct,
  removeCartProduct,
  increaseProductCount,
  decreaseProductCount,
};
