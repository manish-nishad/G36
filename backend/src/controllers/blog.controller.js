import Blog from "../models/Blog.js";
import Counter from "../models/Counter.js";

/* CREATE BLOG */
export const createBlog = async (req, res) => {
  try {
    const { title } = req.body;

    // ❌ Duplicate title
    const exists = await Blog.findOne({ title });
    if (exists) {
      return res.status(409).json({
        message: "Blog with this title already exists"
      });
    }

    // 🔢 Auto-increment id
    const counter = await Counter.findOneAndUpdate(
      { name: "blogId" },
      { $inc: { value: 1 } },
      { new: true, upsert: true }
    );

    const blog = await Blog.create({
      ...req.body,
      id: counter.value
    });

    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* GET ALL BLOGS */
export const getBlogs = async (req, res) => {
  const blogs = await Blog.find().sort({ id: -1 });
  res.json(blogs);
};

/* GET BLOG BY NUMERIC ID */
export const getBlogById = async (req, res) => {
  const blog = await Blog.findOne({ id: Number(req.params.id) });

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  res.json(blog);
};

/* UPDATE BLOG BY NUMERIC ID */
export const updateBlog = async (req, res) => {
  const blog = await Blog.findOneAndUpdate(
    { id: Number(req.params.id) },
    req.body,
    { new: true }
  );

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  res.json(blog);
};

/* DELETE BLOG BY NUMERIC ID */
export const deleteBlog = async (req, res) => {
  const blog = await Blog.findOneAndDelete({
    id: Number(req.params.id)
  });

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  res.json({ message: "Blog deleted successfully" });
};

/* SEARCH BLOGS BY TITLE OR CONTENT */
export const searchBlogs = async (req, res) => {
  const { query } = req.query; 
  if (!query) {
    return res.status(400).json({ message: "Query parameter is required" });
  } 
  const regex = new RegExp(query, "i");
  const blogs = await Blog.find({
    $or: [{ title: regex }, { content: regex }]
  }).sort({ id: -1 }); 
  res.json(blogs);
};

/* GET BLOGS BY CATEGORY */
export const getBlogsByCategory = async (req, res) => {
  const { category } = req.params;
  const blogs = await Blog.find({ category }).sort({ id: -1 });
  res.json(blogs);
};  

/* GET RECENT BLOGS */    
export const getRecentBlogs = async (req, res) => {
  const limit = parseInt(req.query.limit) || 5; 
  const blogs = await Blog.find().sort({ date: -1 }).limit(limit);
  res.json(blogs);
};

/* GET BLOGS WITH PAGINATION */
export const getBlogsPaginated = async (req, res) => {
  const page = parseInt(req.query.page) || 1; 
  const limit = parseInt(req.query.limit) || 10; 
  const skip = (page - 1) * limit;  
  const total = await Blog.countDocuments();
  const blogs = await Blog.find().sort({ id: -1 }).skip(skip).limit(limit); 
  res.json({
    total,
    page,
    pages: Math.ceil(total / limit),
    blogs
  });
};

