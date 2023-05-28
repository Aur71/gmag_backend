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
    const user = await User.findById(userId).select('favorites');
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
  res.send('delete list');
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
