import dotenv from "dotenv";
dotenv.config();

import {connectDB} from "../db/index.js";
import {Product} from "../models/product.model.js";

const categoryBrandMap = {
  "Women Ethnic": ["Biba", "W", "Libas", "Aurelia", "Global Desi"],
  "Women Western": ["Zara", "Forever 21", "H&M", "ONLY", "Vero Moda"],
  "Home Appliances": ["LG", "Samsung", "Whirlpool", "Philips", "Haier"],
  "Home Decor": [
    "Chumbak",
    "Home Centre",
    "Urban Ladder",
    "Pepperfry",
    "FabIndia",
  ],
  "Makeup & Skincare": [
    "Lakme",
    "Maybelline",
    "L'Oreal",
    "Mamaearth",
    "The Ordinary",
  ],
  "Agricultural Products": [
    "Kissan",
    "Bayer",
    "Rallis India",
    "Mahindra Agribiz",
    "PI Industries",
  ],
  "Auto Components And accessories": [
    "Bosch",
    "Minda",
    "UNO Minda",
    "Hella",
    "TVS Autoparts",
  ],
  Electronics: ["Sony", "Apple", "Samsung", "Dell", "Lenovo"],
  "Food and Beverages": ["Nestlé", "Amul", "Britannia", "Coca-Cola", "PepsiCo"],
  Grocery: ["Big Bazaar", "Nature's Basket", "Dmart", "More", "Reliance Fresh"],
  "Books & Stationary": [
    "Classmate",
    "Camlin",
    "Navneet",
    "Penguin",
    "Scholastic",
  ],
  "Toys & Games": ["Lego", "Funskool", "Mattel", "Hasbro", "Fisher-Price"],
  "Health & wellness": [
    "Himalaya",
    "Patanjali",
    "Dr. Morepen",
    "Zandu",
    "Kapiva",
  ],
};

const generateProducts = () => {
  const products = [];

  for (const [category, brands] of Object.entries(categoryBrandMap)) {
    for (let i = 1; i <= 10; i++) {
      const brand = brands[i % brands.length];
      products.push({
        name: `${brand} ${category} Product ${i}`,
        description: `This is a high-quality ${category} product by ${brand}. Perfect for daily use.`,
        price: Math.floor(Math.random() * 99000) + 1000,
        category,
        brand,
        stock: Math.floor(Math.random() * 100),
        rating: (Math.random() * 4 + 1).toFixed(1),
        images: [
          `https://picsum.photos/seed/${
            category.replace(/ /g, "") + i
          }/300/300`,
        ],
        createdAt: new Date(),
      });
    }
  }

  return products;
};

const seedProducts = async () => {
  try {
    await connectDB();
    await Product.deleteMany();

    const products = generateProducts();
    await Product.insertMany(products);

    console.log("✅ Dummy products seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding products:", err);
    process.exit(1);
  }
};

export default seedProducts;
