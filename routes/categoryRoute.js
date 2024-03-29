const express = require("express");
const { Category } = require("../models/CategoryModel");
const router = express.Router();
const { addCategory, getCategory } = require("../controllers/categoryController");
router.post("/", addCategory);
router.get("/", getCategory);
module.exports = router;
