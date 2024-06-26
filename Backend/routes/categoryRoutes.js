const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const Product = require('../models/Product');

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find().maxTimeMS(10000);;
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a category
router.post('/addCtegory', async (req, res) => {
  const category = new Category({
    name: req.body.name,
  });
  try {
    const newCategory = await category.save().maxTimeMS(10000);;
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});




module.exports = router;