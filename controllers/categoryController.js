const { Category } = require("../models/CategoryModel");
const express =require("express")
const addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = new Category({ name });
    await category.save();
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
const getCategory = async (req, res) => {
  try {
    const { name } = req.params;
    const category = await Category.find({});
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  addCategory,
  getCategory,
};
