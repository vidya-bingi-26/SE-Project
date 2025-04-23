// controllers/user.controllers.js
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const user = new User({ name, email, password, phone, address });
    await user.save();

    const accessToken = user.generateAuthToken();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        isAdmin: user.isAdmin,
      },
      accessToken,
    });
  } catch (err) {
    console.error("❌ Error in registerUser:", err); // Log full error
    res
      .status(500)
      .json({ message: "Error registering user", error: err.message });
  }

};

export const loginUser = asyncHandler(async (req, res) => {
  try {
    const { loginId, password } = req.body;

    if (!loginId || !password) {
      throw new ApiError(400, "All fields are required");
    }

    // Find by email or username
    const user = await User.findOne({
      $or: [{ email: loginId }, { username: loginId }],
    }).select("+password"); 

    if (!user) {
      throw new ApiError(401, "Invalid login credentials");
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      throw new ApiError(401, "Invalid login credentials");
    }

    const accessToken = user.generateAuthToken();

    // Set cookie or send token
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });
    

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: "Error Logging in user", error: error.message });
  }
});
