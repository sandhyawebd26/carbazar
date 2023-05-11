const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const productController = require("../controllers/Product/productControllers");

const createProductSchema = Joi.object({
  name: Joi.string().required().label("name"),
  price: Joi.number().required().label("price"),
  description: Joi.string().required().label("description"),

});

router.post(
  "/create",
  validator.body(createProductSchema),
  productController.createProduct
);

router.get("/", productController.getAllProducts);

router.get("/:id", productController.getProductById);

module.exports = router;
