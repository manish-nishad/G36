import express from "express";
import {
  createTestimonial,
  getTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial
} from "../controllers/testimonial.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public
router.get("/", getTestimonials);
router.get("/:id", getTestimonialById);

// Admin protected
router.post("/", protect, createTestimonial);
router.put("/:id", protect, updateTestimonial);
router.delete("/:id", protect, deleteTestimonial);

export default router;
