import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: true
    },
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    excerpt: String,
    author: String,
    date: { type: Date, default: Date.now },
    category: String,
    readTime: String,
    image: String,
    content: String
  },
  { timestamps: true }
);

blogSchema.index({ id: 1 }, { unique: true });
blogSchema.index({ title: 1 }, { unique: true });

export default mongoose.model("Blog", blogSchema);
