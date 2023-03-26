const Item = require('../models/item');

const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createItem = async (req, res) => {
  const item = req.body;
  const newItem = new Item(item);
  try {
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateItem = async (req, res) => {
  const { id: _id } = req.params;
  const item = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('Item not found');
  }

  try {
    const updatedItem = await Item.findByIdAndUpdate(
      _id,
      { ...item, _id },
      { new: true }
    );
    res.json(updatedItem);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('Item not found');
  }

  try {
    await Item.findByIdAndRemove(id);
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getItems, createItem, updateItem, deleteItem };
