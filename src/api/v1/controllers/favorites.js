const User = require('../models/User');

const getFavorites = async (req, res) => {
  const userId = req.user._id;
  if (!userId) return res.status(404).json({ error: 'User not found' });
  try {
    const user = await User.findById(userId).populate({
      path: 'favorites.lists.products',
      select:
        '_id type name thumbnail currentPrice oldPrice rating reviewsCount',
    });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(201).send(user.favorites);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const addList = async (req, res) => {
  const userId = req.user._id;
  const { name, useAsMainList } = req.body;
  if (!userId) res.status(404).json({ error: 'User not found' });
  try {
    const user = await User.findById(userId).populate({
      path: 'favorites.lists.products',
      select:
        '_id type name thumbnail currentPrice oldPrice rating reviewsCount',
    });
    if (!user) return res.status(404).json({ error: 'User not found' });
    const newList = { name, products: [] };
    user.favorites.lists.push(newList);
    if (useAsMainList) user.favorites.mainList = name;
    await user.save();
    res.status(201).send(user.favorites);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const editList = async (req, res) => {
  const userId = req.user._id;
  const { listId } = req.params;
  const { name, useAsMainList } = req.body;
  if (!userId) res.status(404).json({ error: 'User not found' });
  try {
    const user = await User.findById(userId).populate({
      path: 'favorites.lists.products',
      select:
        '_id type name thumbnail currentPrice oldPrice rating reviewsCount',
    });
    if (!user) return res.status(404).json({ error: 'User not found' });
    const list = user.favorites.lists.find(
      (list) => list._id.toString() === listId.toString()
    );
    if (!list) return res.status(404).json({ error: 'List not found' });
    if (user.favorites.mainList === list.name && !useAsMainList)
      user.favorites.mainList = user.favorites.lists[1].name;
    if (useAsMainList) user.favorites.mainList = name;
    list.name = name;
    await user.save();
    res.status(201).send(user.favorites);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteList = async (req, res) => {
  const userId = req.user._id;
  const { listId } = req.params;
  if (!userId) res.status(404).json({ error: 'User not found' });
  try {
    const user = await User.findById(userId).populate({
      path: 'favorites.lists.products',
      select:
        '_id type name thumbnail currentPrice oldPrice rating reviewsCount',
    });
    if (!user) return res.status(404).json({ error: 'User not found' });
    const list = user.favorites.lists.find(
      (list) => list._id.toString() === listId.toString()
    );
    if (!list) return res.status(404).json({ error: 'List not found' });
    if (user.favorites.mainList === list.name)
      user.favorites.mainList = user.favorites.lists[1].name;
    user.favorites.lists.pull({ _id: listId });
    await user.save();
    res.status(201).send(user.favorites);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const addProductToFavorites = async (req, res) => {
  const userId = req.user._id;
  const { _id } = req.body;
  try {
    const user = await User.findById(userId).select('favorites');
    if (!user) return res.status(404).json({ error: 'User not found' });
    const mainList = user.favorites.lists.find(
      (list) => list.name === user.favorites.mainList
    );
    if (!mainList) return res.status(404).json({ error: 'List not found' });
    if (!_id) return res.status(404).json({ error: 'Product not found' });

    const isProductInAnyList = user.favorites.lists.some((list) => {
      const { products } = list;
      if (list.name === user.favorites.lists[0].name) return;
      return products.some(
        (productId) => productId.toString() === _id.toString()
      );
    });
    if (isProductInAnyList)
      return res.status(409).json({ error: 'Product already in favorites' });
    mainList.products.push(_id);
    const allProducts = user.favorites.lists[0];
    const isProductAlreadyInAllProductsList = allProducts.products.some(
      (id) => id.toString() === _id.toString()
    );
    if (!isProductAlreadyInAllProductsList) allProducts.products.push(_id);
    await user.save();
    res.status(201).send('Product added to favorites');
  } catch (error) {
    res.status(500).send({ error: 'Server error' });
  }
};

const removeProductFromFavorites = (req, res) => {
  res.send('remove product from list');
};

const moveProduct = (req, res) => {
  res.send('move product to a different list');
};

module.exports = {
  getFavorites,
  addList,
  deleteList,
  editList,
  addProductToFavorites,
  removeProductFromFavorites,
  moveProduct,
};
