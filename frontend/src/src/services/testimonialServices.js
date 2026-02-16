import api from "../config/api";

// GET all testimonials
export const getTestimonials = () => api.get("/testimonials");

// GET single testimonial
export const getTestimonialById = (id) => api.get(`/testimonials/${id}`);

// CREATE testimonial
export const createTestimonial = (data) => api.post("/testimonials", data);

// UPDATE testimonial
export const updateTestimonial = (id, data) =>
  api.put(`/testimonials/${id}`, data);

// DELETE testimonial
export const deleteTestimonial = (id) =>
  api.delete(`/testimonials/${id}`);
