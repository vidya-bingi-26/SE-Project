// routes/user.routes.js
import express from "express";
import { loginUser, registerUser } from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login",loginUser);

export default router;
