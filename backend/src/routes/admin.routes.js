import express from "express";
import {
  loginAdmin,
  registerAdmin
} from "../controllers/admin.controller.js";

const router = express.Router();

// 🔥 One-time use
router.post("/register", registerAdmin);

// Login
router.post("/login", loginAdmin);

export default router;
