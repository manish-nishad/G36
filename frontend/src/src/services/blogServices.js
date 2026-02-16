import api from "../config/api";

// GET all blogs
export const getBlogs = () => api.get("/blogs");

// GET single blog by numeric id
export const getBlogById = (id) => api.get(`/blogs/${id}`);

// CREATE blog (admin only)
export const createBlog = (data) => api.post("/blogs", data);

// UPDATE blog
export const updateBlog = (id, data) => api.put(`/blogs/${id}`, data);

// DELETE blog
export const deleteBlog = (id) => api.delete(`/blogs/${id}`);
