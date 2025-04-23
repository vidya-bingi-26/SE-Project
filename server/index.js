import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";


dotenv.config(); // Load env variables

const app = express();
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Middleware
    // In your backend server code
    app.use(cors());

    app.use(express.json());

    // Routes
    app.use("/api/users", userRoutes);
    app.use("/api/products", productRoutes);

    // Start the server
    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Server failed to start:", err.message);
    process.exit(1);
  }
};

startServer();

export { app };
