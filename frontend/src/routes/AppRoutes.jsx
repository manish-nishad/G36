import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const Home = lazy(() => import("../pages/Home"));
const Services = lazy(() => import("../pages/Services"));
const About = lazy(() => import("../pages/About"));
const Projects = lazy(() => import("../pages/Projects"));
const Contact = lazy(() => import("../pages/Contact"));
const Admin = lazy(() => import("../pages/Admin"));
const Blogs = lazy(() => import("../pages/Blogs"));
const BlogSingle = lazy(() => import("../pages/BlogSingle"));
const Career = lazy(() => import("../pages/Career"));
const Training = lazy(() => import("../pages/Training"));
const AdminDashboard = lazy(() => import("../pages/AdminDashboard"));
const AddBlog = lazy(() => import("../pages/AddBlog"));
const BlogList = lazy(() => import("../pages/BlogList"));
const EditBlog = lazy(() => import("../pages/EditBlog"));
const PageNotFound = lazy(() => import("../pages/404"));
const ServiceSingle = lazy(() => import("../pages/ServiceSingle"));
const TestimonialList = lazy(() => import("../pages/TestimonialList"));
const AddTestimonial = lazy(() => import("../pages/AddTestimonial"));
const EditTestimonial = lazy(() => import("../pages/EditTestimonial"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div style={{ minHeight: "40vh" }} />}>
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

        <Route path="/admin" element={<Admin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<div>Welcome Admin</div>} />
          <Route path="blogs" element={<BlogList />} />
          <Route path="add-blog" element={<AddBlog />} />
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
    </Suspense>
  );
}
