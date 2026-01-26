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
} from "@chakra-ui/react";
import axios from "axios";
import { blogPosts } from "../mockData";
import { getAllBlogs } from "../data/allBlogsContent";
import Seo from "../seo/Seo";

/* -------------------- Date Formatter -------------------- */

const formatDate = (dateString) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

/* -------------------- Skeleton UI -------------------- */

const BlogSingleSkeleton = () => (
  <Box bg="white" minH="100vh" pt={{ base: "90px", md: "100px" }} pb={{ base: 8, md: 12 }}>
    <Container maxW="4xl" px={{ base: 4, md: 6 }}>
      <VStack align="start" spacing={{ base: 4, md: 6 }}>
        {/* Title */}
        <Skeleton height={{ base: "32px", md: "42px" }} width="90%" />

        {/* Meta */}
        <HStack spacing={4}>
          <Skeleton height="16px" width="120px" />
          <Skeleton height="16px" width="90px" />
        </HStack>

        {/* Image */}
        <Skeleton
          height={{ base: "250px", sm: "300px", md: "400px", lg: "450px" }}
          width="100%"
          borderRadius="md"
        />

        {/* Content */}
        <VStack align="stretch" spacing={4} w="100%">
          <SkeletonText noOfLines={4} spacing="4" />
          <Skeleton height="24px" width="60%" />
          <SkeletonText noOfLines={5} spacing="4" />
          <Skeleton height="24px" width="50%" />
          <SkeletonText noOfLines={4} spacing="4" />
        </VStack>
      </VStack>
    </Container>
  </Box>
);

/* -------------------- Component -------------------- */

const BlogSingle = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);

        try {
          const res = await axios.get(`${API_URL}/api/blogs/${id}`, {
            timeout: 10000,
          });
          const data = res.data?.data || res.data;
          if (data) {
            setBlog(data);
            return;
          }
        } catch {
          // fallback
        }

        const allBlogs = getAllBlogs();
        const found = allBlogs.find(
          (b) => b._id === id || b.id === id || b.id === Number(id) || b.slug === id
        );

        if (found) setBlog(found);
        else setError("Blog not found");
      } catch {
        setError("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id, API_URL]);

  /* -------------------- STATES -------------------- */

  if (loading) return <BlogSingleSkeleton />;

  if (error || !blog) {
    return (
      <Box bg="white" minH="100vh" pt={{ base: "90px", md: "100px" }} pb={12}>
        <Container maxW="4xl" px={{ base: 4, md: 6 }}>
          <VStack align="start" spacing={4}>
            <Heading size={{ base: "lg", md: "xl" }} color="gray.900">
              Blog not found
            </Heading>
            <Text color="gray.600" fontSize={{ base: "md", md: "lg" }}>
              The requested blog post does not exist.
            </Text>
          </VStack>
        </Container>
      </Box>
    );
  }

  /* -------------------- Render Content -------------------- */

  const renderContent = (content) => {
    if (!content)
      return <Text color="gray.600">Content coming soon...</Text>;

    // If content contains HTML tags, render as HTML
    if (content.includes("<")) {
      return (
        <Box
          dangerouslySetInnerHTML={{ __html: content }}
          sx={{
            // Ensure HTML content respects the parent styles
            "& > *:first-child": { mt: 0 },
          }}
        />
      );
    }

    // For plain text content, split by paragraphs and render
    return (
      <>
        {content.split("\n\n").map((p, i) => {
          // Skip empty paragraphs
          if (!p.trim()) return null;
          
          // Check if paragraph starts with heading markers (for markdown-like content)
          if (p.trim().startsWith("## ")) {
            return (
              <Heading
                key={i}
                as="h2"
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="700"
                color="gray.900"
                mt={{ base: 8, md: 10 }}
                mb={{ base: 4, md: 5 }}
              >
                {p.trim().replace(/^##\s+/, "")}
              </Heading>
            );
          }
          
          if (p.trim().startsWith("### ")) {
            return (
              <Heading
                key={i}
                as="h3"
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="600"
                color="gray.800"
                mt={{ base: 6, md: 8 }}
                mb={{ base: 3, md: 4 }}
              >
                {p.trim().replace(/^###\s+/, "")}
              </Heading>
            );
          }
          
          // Regular paragraph
          return (
            <Text key={i} mb={{ base: 4, md: 5 }} lineHeight={{ base: "1.7", md: "1.8" }}>
              {p.trim()}
            </Text>
          );
        })}
      </>
    );
  };

  /* -------------------- Render -------------------- */

  // Generate Blog Schema Markup
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt || blog.content?.slice(0, 160),
    "image": blog.coverImage || blog.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    "datePublished": blog.createdAt || blog.date,
    "dateModified": blog.createdAt || blog.date,
    "author": {
      "@type": "Organization",
      "name": "Genius36 Technologies India LLP"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Genius36 Technologies India LLP",
      "logo": {
        "@type": "ImageObject",
        "url": "https://genius36.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://genius36.com/blogs/${blog.slug || blog.id}`
    }
  };

  return (
    <>
      <Seo
        title={blog.seo?.metaTitle || `${blog.title} | Genius36 Technologies`}
        description={blog.seo?.metaDescription || blog.excerpt || blog.content?.slice(0, 160)}
      />
      
      {/* Blog Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <Box bg="white" minH="100vh" pt={{ base: "90px", md: "100px" }} pb={{ base: 8, md: 12 }}>
        <Container maxW="4xl" px={{ base: 4, md: 6 }}>
          {/* Blog Header Section - Title, Date, Reading Time */}
          <VStack align="start" spacing={{ base: 3, md: 4 }} mb={{ base: 6, md: 8 }}>
            {/* Blog Title (H1) */}
            <Heading 
              as="h1" 
              size={{ base: "xl", md: "2xl", lg: "3xl" }}
              fontWeight="700"
              color="gray.900"
              lineHeight="1.2"
            >
              {blog.title}
            </Heading>

            {/* Published Date and Reading Time */}
            <HStack spacing={4} flexWrap="wrap" color="gray.500" fontSize={{ base: "sm", md: "md" }}>
              <Text>
                {formatDate(blog.createdAt || blog.date)}
              </Text>
              {blog.readTime && (
                <>
                  <Text as="span">•</Text>
                  <Text>{blog.readTime}</Text>
                </>
              )}
              {blog.category && (
                <>
                  <Text as="span">•</Text>
                  <Text>{blog.category}</Text>
                </>
              )}
            </HStack>
          </VStack>

          {/* Featured Image - Full-width within container */}
          <Box mb={{ base: 8, md: 10 }} w="100%">
            <Image
              src={
                blog.coverImage ||
                blog.image ||
                "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
              }
              alt={blog.title}
              borderRadius="md"
              w="100%"
              h={{ base: "250px", sm: "300px", md: "400px", lg: "450px" }}
              objectFit="cover"
              loading="eager"
            />
          </Box>

          {/* Blog Content Body - Clean readable paragraphs with proper heading hierarchy */}
          <Box
            as="article"
            color="gray.700"
            fontSize={{ base: "md", md: "lg" }}
            lineHeight={{ base: "1.7", md: "1.8" }}
            sx={{
              // H2 styling for major sections
              "& h2": {
                fontSize: { base: "xl", md: "2xl" },
                fontWeight: "700",
                color: "gray.900",
                mt: { base: 8, md: 10 },
                mb: { base: 4, md: 5 },
                lineHeight: "1.3",
              },
              // H3 styling for sub-sections
              "& h3": {
                fontSize: { base: "lg", md: "xl" },
                fontWeight: "600",
                color: "gray.800",
                mt: { base: 6, md: 8 },
                mb: { base: 3, md: 4 },
                lineHeight: "1.4",
              },
              // Paragraph spacing
              "& p": {
                mb: { base: 4, md: 5 },
                lineHeight: { base: "1.7", md: "1.8" },
              },
              // List styling
              "& ul, & ol": {
                pl: { base: 5, md: 6 },
                mb: { base: 4, md: 5 },
                "& li": {
                  mb: { base: 2, md: 2.5 },
                  lineHeight: { base: "1.7", md: "1.8" },
                },
              },
              // Images inside content
              "& img": {
                borderRadius: "md",
                my: { base: 5, md: 6 },
                w: "100%",
                h: "auto",
                maxW: "100%",
              },
              // Links styling
              "& a": {
                color: "#0951d8",
                textDecoration: "underline",
                _hover: {
                  color: "#073fa6",
                },
              },
              // Code blocks (if present)
              "& code": {
                bg: "gray.100",
                px: 2,
                py: 1,
                borderRadius: "sm",
                fontSize: "0.9em",
                fontFamily: "mono",
              },
              "& pre": {
                bg: "gray.100",
                p: 4,
                borderRadius: "md",
                overflowX: "auto",
                mb: { base: 4, md: 5 },
              },
            }}
          >
            {renderContent(blog.content)}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BlogSingle;
