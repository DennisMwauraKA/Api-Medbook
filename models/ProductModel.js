const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  size: {
    type: String,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
