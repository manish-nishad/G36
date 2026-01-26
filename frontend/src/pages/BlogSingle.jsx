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
  <Box bg="white" minH="100vh" pt={{ base: "90px", md: "100px" }}>
    <Container maxW="4xl">
      <VStack align="start" spacing={6}>
        {/* Title */}
        <Skeleton height="42px" width="90%" />

        {/* Meta */}
        <HStack spacing={4}>
          <Skeleton height="14px" width="120px" />
          <Skeleton height="14px" width="90px" />
          <Skeleton height="14px" width="80px" />
        </HStack>

        {/* Image */}
        <Skeleton
          height={{ base: "300px", md: "450px" }}
          width="100%"
          borderRadius="md"
        />

        {/* Content */}
        <SkeletonText noOfLines={6} spacing="4" />
        <SkeletonText noOfLines={4} spacing="4" />
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

        const found = blogPosts.find(
          (b) => b._id === id || b.id === id || b.id === Number(id)
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
      <Box bg="white" minH="100vh" pt="100px">
        <Container maxW="4xl">
          <Heading size="lg">Blog not found</Heading>
          <Text color="gray.600" mt={2}>
            The requested blog post does not exist.
          </Text>
        </Container>
      </Box>
    );
  }

  /* -------------------- Render Content -------------------- */

  const renderContent = (content) => {
    if (!content)
      return <Text color="gray.600">Content coming soon...</Text>;

    if (content.includes("<")) {
      return <Box dangerouslySetInnerHTML={{ __html: content }} />;
    }

    return (
      <VStack align="stretch" spacing={5}>
        {content.split("\n\n").map((p, i) => (
          <Text key={i} lineHeight="1.8">
            {p}
          </Text>
        ))}
      </VStack>
    );
  };

  /* -------------------- Render -------------------- */

  return (
    <>
      <Seo
        title={`${blog.title} | Genius36 Technologies`}
        description={blog.excerpt || blog.content?.slice(0, 160)}
      />

      <Box bg="white" minH="100vh" pt={{ base: "90px", md: "100px" }} pb={12}>
        <Container maxW="4xl">
          {/* Header */}
          <VStack align="start" spacing={4} mb={6}>
            <Heading as="h1" size={{ base: "xl", md: "2xl" }}>
              {blog.title}
            </Heading>

            <HStack spacing={4} flexWrap="wrap">
              <Text color="gray.500" fontSize="sm">
                {formatDate(blog.createdAt || blog.date)}
              </Text>
              {blog.readTime && (
                <Text color="gray.500" fontSize="sm">
                  {blog.readTime}
                </Text>
              )}
              {blog.category && (
                <Text color="gray.500" fontSize="sm">
                  {blog.category}
                </Text>
              )}
            </HStack>
          </VStack>

          {/* Image */}
          <Box mb={8}>
            <Image
              src={
                blog.coverImage ||
                blog.image ||
                "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
              }
              borderRadius="md"
              w="100%"
              h={{ base: "300px", md: "450px" }}
              objectFit="cover"
            />
          </Box>

          {/* Content */}
          <Box
            color="gray.700"
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="1.8"
            sx={{
              "& h2": { fontSize: "2xl", fontWeight: "700", mt: 10 },
              "& h3": { fontSize: "xl", fontWeight: "600", mt: 8 },
              "& p": { mb: 5 },
              "& ul, & ol": { pl: 6, mb: 5 },
              "& img": { borderRadius: "md", my: 6 },
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
