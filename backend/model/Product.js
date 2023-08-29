const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    sku: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    countryOfOrigin: { type: String, required: true },
    stockQuantity: { type: Number, required: true },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Product", productSchema);
