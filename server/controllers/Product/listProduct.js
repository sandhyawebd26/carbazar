const { Product } = require('../models/products');

const listProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.render('products', { products });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching products' });
  }
};

module.exports = listProduct;
