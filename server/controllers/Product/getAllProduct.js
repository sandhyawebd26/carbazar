const { Product } = require('../models/products');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching products' });
  }
};

module.exports = getAllProducts;
