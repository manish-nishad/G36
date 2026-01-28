import axios from "axios";

const API_URL = "http://localhost:5000/api/blogs";

export const getBlogs = () => axios.get(API_URL);

export const getBlogById = (id) => axios.get(`${API_URL}/${id}`);

export const createBlog = (data) =>
  axios.post(API_URL, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
    },
  });

export const updateBlog = (id, data) =>
  axios.put(`${API_URL}/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
    },
  });

export const deleteBlog = (id) =>
  axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
    },
  });
