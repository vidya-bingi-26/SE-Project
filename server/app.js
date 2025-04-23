import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/index.js"; // DB connection
import userRoutes from "./routes/user.routes.js";

dotenv.config(); // Load env variables

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to DB (wrap in async IIFE if top-level await not supported)
(async () => {
  await connectDB();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Routes
  app.use("/api/users", userRoutes);

  // Start server
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
})();

export { app };
