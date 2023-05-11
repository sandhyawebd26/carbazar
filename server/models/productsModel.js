const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }
})

const Product = mongoose.model("Product", productSchema);

const postProductModel = async ({ body }) => {
  const { name, price, description, reviews ,image} = body
  try {
    const data = await Product.create({ name, price, description, reviews ,image})
    return { data: data, message: "Succes", status: 200 }
  }
  catch (err) {
    console.log("Error", err);
    return { message: err, status: 500 }
  }
}

module.exports = { postProductModel }
