// routes/userRoutes.js
import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import { getUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

// Get user profile
router.post("/get-user", userAuth, getUser);

// Update user profile
router.put("/update-user", userAuth, updateUser);

export default router;