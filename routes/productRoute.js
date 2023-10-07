const express = require("express");
const { Product } = require("../models/ProductModel");
const { Category } = require("../models/CategoryModel");
const router = express.Router();

// importing the controllers
const {
  addProduct,
  getProduct,
  updateProduct,
  getCategoryName,
} = require("../controllers/productControler.js");

router.get("/", getProduct);
router.post("/", addProduct);
router.put("/:name", updateProduct);
router.get("/category/:categoryName", getCategoryName);

module.exports = router;
