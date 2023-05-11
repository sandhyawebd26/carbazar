// productController.js

// Import the necessary modules and models
const Product = require('../models/Product');

// Handle the post review request for a specific product
const postReview = async (req, res) => {
  try {
    const { productId } = req.params;
    const { rating, comment } = req.body;

    // Find the product by its ID
    const product = await Product.findById(productId);

    if (product) {
      // Create a new review object
      const review = {
        rating: Number(rating),
        comment,
        user: req.user._id // Assuming the user is authenticated and their ID is stored in req.user._id
      };

      // Add the review to the product's reviews array
      product.reviews.push(review);

      // Update the product with the new review
      await product.save();

      res.status(201).json({ message: 'Review added successfully' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Export the controller functions
module.exports = {
  postReview
};
