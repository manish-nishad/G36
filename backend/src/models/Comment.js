import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: true
    },
    name: String,
    email: String,
    comment: String
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
