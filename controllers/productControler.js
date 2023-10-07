// destructuring the product from the Product model
const express = require("express");
const { Product } = require("../models/ProductModel");
const { Category } = require("../models/CategoryModel");
const asyncHandler = require("express-async-handler");
const addProduct = asyncHandler(async (req, res) => {
  const { name, category, image, price, description, size } = req.body;
  try {
    const product = await new Product({
      name,
      category,
      image,
      price,
      description,
      size,
    });
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//get  controller
const getProduct = async (req, res) => {
  try {
    const { name } = req.params;
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
const getCategoryName = async (req, res) => {
  const categoryName = req.params.categoryName;

  try {
    const category = await Category.findOne({ name: categoryName });
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    const products = await Product.find({ category: categoryName });
    res.json(products);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching products" });
  }
};
//update controller

const updateProduct = async (req, res) => {
  try {
    const { name } = req.params;
    const updatedProduct = await Product.findOneAndUpdate(
      { name: name }, // Find the product by its name
      req.body, // Update with the request body
      { new: true } // Return the updated document
    );

    if (!updatedProduct) {
      return res
        .status(404)
        .json({ message: `Cannot find any product with name ${name}` });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  addProduct,
  getProduct,
  updateProduct,
  getCategoryName,
};
