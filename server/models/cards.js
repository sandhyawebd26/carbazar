const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/DATABASE", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the card schema
const cardSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: String,
  imageUrl: String,
  reviews: String,
  description: String,
  message: String,
});

// Create the card model
const Card = mongoose.model("Card", cardSchema);

module.exports = { Card };
