// productController.js

// Import the necessary modules and models
const Product = require('../models/Product');

// Handle the get reviews request for a specific product
const getReviews = async (req, res) => {
  try {
    const { productId } = req.params;

    // Find the product by its ID
    const product = await Product.findById(productId);

    if (product) {
      // Return the reviews of the product
      res.status(200).json(product.reviews);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Export the controller functions
module.exports = {
  getReviews
};
