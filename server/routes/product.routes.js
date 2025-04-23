import express from "express";
const router = express.Router();
import {Product} from "../models/product.model.js";

// GET /api/products?category=Electronics
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    let products;
    
    if (category) {
      products = await Product.find({ category }); // only products in given category
    } else {
      products = await Product.find({}); // all products
    }

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});
export default router;