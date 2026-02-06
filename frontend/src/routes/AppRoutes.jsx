import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";
import Blogs from "../pages/Blogs";
import BlogSingle from "../pages/BlogSingle";
import Career from "../pages/Career";
import Training from "../pages/Training";
import AdminDashboard from "../pages/AdminDashboard";
import AddBlog from "../pages/AddBlog";
import ProtectedRoute from "./ProtectedRoute";
import BlogList from "../pages/BlogList";
import EditBlog from "../pages/EditBlog";
import PageNotFound from "../pages/404";
import ServiceSingle from "../pages/ServiceSingle";
import TestimonialList from "../pages/TestimonialList";
import AddTestimonial from "../pages/AddTestimonial";
import EditTestimonial from "../pages/EditTestimonial";

/* -------------------- Component -------------------- */

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceSingle />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogSingle />} />
      <Route path="/career" element={<Career />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/training" element={<Training />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<PageNotFound />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<Admin />} />

      {/* 🔐 Protected Admin Dashboard */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      >
        {/* ✅ Dashboard Home */}
        <Route index element={<div>Welcome Admin</div>} />

        {/* ✅ Blog List (FIXED) */}
        <Route path="blogs" element={<BlogList />} />

        {/* ✅ Add Blog */}
        <Route path="add-blog" element={<AddBlog />} />

        {/* ✅ Edit Blog */}
        <Route path="edit-blog/:id" element={<EditBlog />} />

        <Route
          path="/admin/dashboard/testimonials"
          element={<TestimonialList />}
        />
        <Route
          path="/admin/dashboard/add-testimonial"
          element={<AddTestimonial />}
        />
        <Route
          path="/admin/dashboard/edit-testimonial/:id"
          element={<EditTestimonial />}
        />
      </Route>
    </Routes>
  );
}
