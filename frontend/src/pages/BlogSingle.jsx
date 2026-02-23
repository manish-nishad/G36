import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  HStack,
  Skeleton,
  SkeletonText,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";
import axios from "axios";
import { blogPosts } from "../mockData";
import Seo from "../seo/Seo";

/* 👇 COMPONENTS */
import BlogComments from "../components/ui/BlogComments";
import BlogCommentForm from "../components/ui/BlogCommentForm";
import BlogSideBar from "../components/ui/BlogSideBar";

/* -------------------- Date Formatter -------------------- */
const formatDate = (dateString) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

/* -------------------- Skeleton -------------------- */
const BlogSingleSkeleton = () => (
  <Box bg="white" minH="100vh" pt="100px">
    <Container maxW="7xl">
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10}>
        <Box gridColumn={{ lg: "span 2" }} marginRight={10}>
          <Skeleton height="42px" width="90%" mb={4} />
          <SkeletonText noOfLines={2} mb={6} />
          <Skeleton height="400px" mb={6} />
          <SkeletonText noOfLines={6} />
        </Box>
        <Box>
          <Skeleton height="300px" />
        </Box>
      </SimpleGrid>
    </Container>
  </Box>
);

/* -------------------- Component -------------------- */
export default function BlogSingle() {
  const { id } = useParams();

  /* 🔹 Existing states */
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* 🔹 Sidebar-required states (ONLY ADDITION) */
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  /* -------------------- Fetch Single Blog -------------------- */
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);

        try {
          const res = await axios.get(`${API_URL}/api/blogs/${id}`);
          setBlog(res.data?.data || res.data);
          return;
        } catch {}

        const fallback = blogPosts.find(
          (b) => b.id === id || b.id === Number(id),
        );

        if (fallback) setBlog(fallback);
        else setError("Blog not found");
      } catch {
        setError("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  /* -------------------- Fetch Blogs (for Sidebar only) -------------------- */
  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/blogs`);
        const data = Array.isArray(res.data)
          ? res.data
          : res.data?.data || [];

        setBlogs(data.length ? data : blogPosts);
      } catch {
        setBlogs(blogPosts);
      }
    };

    fetchAllBlogs();
  }, []);

  if (loading) return <BlogSingleSkeleton />;

  if (error || !blog) {
    return (
      <Box minH="100vh" pt="100px">
        <Container maxW="7xl">
          <Heading>Blog not found</Heading>
        </Container>
      </Box>
    );
  }

  /* -------------------- Render -------------------- */
  return (
    <>
      <Seo
        title={`${blog.title} | Genius36 Technologies`}
        description={blog.excerpt || blog.content?.slice(0, 160)}
      />

      {/* Article Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": blog.title,
            "description": blog.excerpt || blog.content?.slice(0, 160),
            "image": blog.coverImage || blog.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
            "datePublished": blog.createdAt || blog.date,
            "dateModified": blog.updatedAt || blog.createdAt || blog.date,
            "author": {
              "@type": "Organization",
              "name": "Genius36 Technologies",
              "url": "https://genius36.com",
              "logo": "https://genius36.com/assets/G_new.svg"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Genius36 Technologies",
              "logo": {
                "@type": "ImageObject",
                "url": "https://genius36.com/assets/G_new.svg"
              }
            }
          })
        }}
      />

      <Box bg="white" pt="100px" pb={20}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={12}>
            {/* ================= LEFT COLUMN ================= */}
            <Box gridColumn={{ lg: "span 2" }}>
              {/* BLOG DETAILS */}
              <VStack align="start" spacing={4} mb={6}>
                <Heading as="h1" size="xl">
                  {blog.title}
                </Heading>

                <HStack spacing={4} color="gray.500" fontSize="sm">
                  <Badge variant="outline">
                    {formatDate(blog.createdAt || blog.date)}
                  </Badge>
                  {blog.readTime && (
                    <Badge variant="outline">{blog.readTime}</Badge>
                  )}
                  {blog.category && (
                    <Badge variant="outline">{blog.category}</Badge>
                  )}
                </HStack>
              </VStack>

              {/* IMAGE */}
              <Image
                src={
                  blog.coverImage ||
                  blog.image ||
                  "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
                }
                alt={blog.title}
                borderRadius="md"
                w="100%"
                h={{ base: "260px", md: "420px" }}
                objectFit="cover"
                mb={8}
              />

              {/* CONTENT */}
              <Box
                fontSize="lg"
                lineHeight="1.8"
                color="gray.700"
                sx={{
                  "& h2": { fontSize: "2xl", fontWeight: 700, mt: 10 },
                  "& h3": { fontSize: "xl", fontWeight: 600, mt: 8 },
                  "& p": { mb: 5 },
                }}
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* COMMENTS */}
              <BlogComments />

              {/* COMMENT FORM */}
              <BlogCommentForm />
            </Box>

            {/* ================= RIGHT SIDEBAR ================= */}
            <Box>
              <BlogSideBar
                blogs={blogs}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                setActiveCategory={() => {}}
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
