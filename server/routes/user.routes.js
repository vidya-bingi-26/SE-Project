import express from "express";
import { loginUser, registerUser } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js"; // Import the verifyJWT middleware

const router = express.Router();

// Public routes (No JWT required)
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected route (JWT required)
router.get("/profile", verifyJWT, (req, res) => {
  // User is authenticated and their info is available in req.user
  res.status(200).json({
    message: "User profile data",
    user: req.user, // User details from the token
  });
});

export default router;



/*
// routes/user.routes.js
import express from "express";
import { loginUser, registerUser } from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login",loginUser);

export default router;
*/