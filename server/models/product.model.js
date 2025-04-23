import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  brand: String,
  stock: Number,
  rating: Number,
  images: [String],
  createdAt: Date,
});

export const Product = mongoose.model("Product", productSchema);
