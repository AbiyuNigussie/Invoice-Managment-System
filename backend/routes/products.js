const express = require("express");
const Product = require("../model/Product");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("this is api/products route");
// });

router.get("/", async (req, res) => {
  const product = await Product.find();
  res.send(product);
});

router.post("/", async (req, res) => {
  const product = new Product({
    sku: req.body.sku,
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    currency: req.body.currency,
    brand: req.body.brand,
    model: req.body.model,
    countryOfOrigin: req.body.countryOfOrigin,
    stockQuantity: req.body.stockQuantity,
  });

  try {
    const savedProduct = await product.save();
    res.send(product.sku);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
