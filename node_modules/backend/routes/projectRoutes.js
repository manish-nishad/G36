import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Projects route working" });
});

export default router;
