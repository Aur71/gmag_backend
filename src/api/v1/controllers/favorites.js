const User = require('../models/User');

const getFavorites = async (req, res) => {
  const userId = req.user._id;
  if (!userId) return res.status(404).json({ error: 'User not found' });
  try {
    const user = await User.findById(userId).select('favorites');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(201).send(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const addList = async (req, res) => {
  const userId = req.user._id;
  const { name, useAsMainList } = req.body;
  if (!userId) res.status(404).json({ error: 'User not found' });

  try {
    const user = await User.findById(userId).select('favorites');
    if (!user) return res.status(404).json({ error: 'User not found' });
    const newList = { name, products: [] };
    user.favorites.lists.push(newList);
    if (useAsMainList) user.favorites.mainList = name;
    await user.save();
    return res.send(user.favorites);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteList = (req, res) => {
  res.send('delete list');
};

const editList = (req, res) => {
  res.send('edit list');
};

const addProductToFavorites = (req, res) => {
  res.send('add product to list');
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
