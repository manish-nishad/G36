import express from "express";
import {
  addComment,
  getCommentsByBlog
} from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/", addComment);
router.get("/:blogId", getCommentsByBlog);

export default router;
