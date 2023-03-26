const express = require('express');
const router = express.Router();
const itemController = require('../controllers/items');

// Get all items
router.get('/', itemController.getAllItems);

// Get a single item by ID
router.get('/:id', itemController.getItemById);

// Create a new item
router.post('/', itemController.createItem);

// Update an item by ID
router.put('/:id', itemController.updateItemById);

// Delete an item by ID
router.delete('/:id', itemController.deleteItemById);

module.exports = router;
