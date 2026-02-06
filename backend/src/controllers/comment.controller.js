import Comment from "../models/Comment.js";

export const addComment = async (req, res) => {
  const comment = await Comment.create(req.body);
  res.status(201).json(comment);
};

export const getCommentsByBlog = async (req, res) => {
  const comments = await Comment.find({ blogId: req.params.blogId });
  res.json(comments);
};
