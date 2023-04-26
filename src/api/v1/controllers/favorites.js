const getLists = (req, res) => {
  res.send('get lists for the current user');
};

const addList = (req, res) => {
  res.send('add list');
};

const deleteList = (req, res) => {
  res.send('delete list');
};

const editList = (req, res) => {
  res.send('edit list');
};

const addProduct = (req, res) => {
  res.send('add product to list');
};

const removeProduct = (req, res) => {
  res.send('remove product from list');
};

const moveProduct = (req, res) => {
  res.send('move product to a different list');
};

module.exports = {
  getLists,
  addList,
  deleteList,
  editList,
  addProduct,
  removeProduct,
  moveProduct,
};
