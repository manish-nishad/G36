import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  Spinner,
  HStack,
} from "@chakra-ui/react";
import axios from "axios";
import { blogPosts } from "../mockData";
import Seo from "../seo/Seo";

// Date formatter - matches Blogs.jsx
const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

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
        // Try to fetch from API first
        try {
          const response = await axios.get(`${API_URL}/api/blogs/${id}`, {
            timeout: 10000,
          });
          const blogData = response.data?.data || response.data;
          if (blogData) {
            setBlog(blogData);
            setLoading(false);
            return;
          }
        } catch (apiError) {
          // If API fails, fall back to mock data
          console.log("API fetch failed, using mock data:", apiError);
        }

        // Fallback to mock data
        const foundBlog = blogPosts.find(
          (post) => post._id === id || post.id === id || post.id === parseInt(id)
        );
        
        if (foundBlog) {
          setBlog(foundBlog);
        } else {
          setError("Blog post not found");
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id, API_URL]);

  if (loading) {
    return (
      <Box bg="white" minH="100vh" pt={{ base: "90px", md: "100px" }} display="flex" alignItems="center" justifyContent="center">
        <Container maxW="7xl">
          <VStack spacing={4}>
            <Spinner size="xl" color="gray.500" />
            <Text color="gray.500" fontSize="lg">
              Loading blog post...
            </Text>
          </VStack>
        </Container>
      </Box>
    );
  }

  if (error || !blog) {
    return (
      <Box bg="white" minH="100vh" pt={{ base: "90px", md: "100px" }} display="flex" alignItems="center" justifyContent="center">
        <Container maxW="7xl">
          <VStack spacing={4} textAlign="center">
            <Heading size="lg" color="gray.900">
              Blog Post Not Found
            </Heading>
            <Text color="gray.600">
              The blog post you're looking for doesn't exist or has been removed.
            </Text>
          </VStack>
        </Container>
      </Box>
    );
  }

  // Parse content if it's HTML or plain text
  const renderContent = (content) => {
    if (!content) {
      return (
        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
          Content coming soon...
        </Text>
      );
    }
    
    // If content contains HTML tags, render as HTML
    if (content.includes('<')) {
      return (
        <Box
          dangerouslySetInnerHTML={{ __html: content }}
        />
      );
    }
    
    // If plain text, split by paragraphs and render
    const paragraphs = content.split('\n\n').filter(p => p.trim());
    if (paragraphs.length === 0) {
      return (
        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
          {content}
        </Text>
      );
    }
    
    return (
      <VStack align="stretch" spacing={5}>
        {paragraphs.map((paragraph, index) => (
          <Text
            key={index}
            fontSize={{ base: 'md', md: 'lg' }}
            color="gray.700"
            lineHeight="1.8"
          >
            {paragraph.trim()}
          </Text>
        ))}
      </VStack>
    );
  };

  return (
    <>
      <Seo
        title={`${blog.title} | Genius36 Technologies`}
        description={blog.excerpt || blog.content?.substring(0, 160) || "Read our latest blog post"}
      />
      
      <Box bg="white" minH="100vh" pt={{ base: "90px", md: "100px" }} pb={{ base: 8, md: 12 }}>
        <Container maxW="95%" px={{ base: 4, md: 4, lg: 6, xl: 8 }}>
          {/* Blog Header Section */}
          <Box maxW="4xl" mx="auto" mb={{ base: 6, md: 8 }}>
            <VStack align="start" spacing={4} w="100%">
              {/* Blog Title - H1 */}
              <Heading
                as="h1"
                size={{ base: "xl", md: "2xl", lg: "3xl" }}
                color="gray.900"
                fontWeight="700"
                lineHeight="1.3"
                wordBreak="break-word"
                overflowWrap="break-word"
              >
                {blog.title}
              </Heading>

              {/* Published Date and Reading Time */}
              <HStack spacing={4} flexWrap="wrap">
                {blog.createdAt || blog.date ? (
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    color="gray.500"
                    lineHeight="1.5"
                  >
                    {formatDate(blog.createdAt || blog.date)}
                  </Text>
                ) : null}
                {blog.readTime && (
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    color="gray.500"
                    lineHeight="1.5"
                  >
                    {blog.readTime}
                  </Text>
                )}
                {blog.category && (
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    color="gray.500"
                    lineHeight="1.5"
                  >
                    {blog.category}
                  </Text>
                )}
              </HStack>
            </VStack>
          </Box>

          {/* Featured Image - Full-width within content container */}
          <Box maxW="4xl" mx="auto" mb={{ base: 6, md: 8 }}>
            <Box
              borderRadius="md"
              overflow="hidden"
              bg="gray.200"
              w="100%"
              h={{ base: "300px", sm: "400px", md: "500px" }}
              position="relative"
            >
              <Image
                src={
                  blog.coverImage ||
                  blog.image ||
                  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop"
                }
                alt={blog.title || "Blog post"}
                w="100%"
                h="100%"
                objectFit="cover"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop";
                }}
              />
            </Box>
          </Box>

          {/* Blog Content Body */}
          <Box maxW="4xl" mx="auto">
            <Box
              fontSize={{ base: 'md', md: 'lg' }}
              color="gray.700"
              lineHeight="1.8"
              sx={{
                // Heading styles - H2 for major sections
                '& h2': {
                  fontSize: { base: 'xl', md: '2xl' },
                  fontWeight: '700',
                  color: 'gray.900',
                  mt: { base: 8, md: 10 },
                  mb: { base: 4, md: 5 },
                  lineHeight: '1.3',
                },
                // Heading styles - H3 for sub-sections
                '& h3': {
                  fontSize: { base: 'lg', md: 'xl' },
                  fontWeight: '600',
                  color: 'gray.800',
                  mt: { base: 6, md: 8 },
                  mb: { base: 3, md: 4 },
                  lineHeight: '1.4',
                },
                // Paragraph styles - clean readable spacing
                '& p': {
                  fontSize: { base: 'md', md: 'lg' },
                  color: 'gray.700',
                  lineHeight: '1.8',
                  mb: { base: 4, md: 5 },
                },
                // List styles - bullet points and numbered lists
                '& ul, & ol': {
                  fontSize: { base: 'md', md: 'lg' },
                  color: 'gray.700',
                  lineHeight: '1.8',
                  mb: { base: 4, md: 5 },
                  pl: { base: 6, md: 8 },
                },
                '& li': {
                  mb: { base: 2, md: 3 },
                },
                // Link styles - using existing link styles
                '& a': {
                  color: 'blue.600',
                  textDecoration: 'underline',
                  _hover: {
                    color: 'blue.700',
                  },
                },
                // Image styles - responsive images inside content
                '& img': {
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: 'md',
                  my: { base: 4, md: 6 },
                },
                // Code styles - matching existing site styling
                '& code': {
                  bg: 'gray.100',
                  px: 2,
                  py: 1,
                  borderRadius: 'sm',
                  fontSize: '0.9em',
                  fontFamily: 'monospace',
                },
                '& pre': {
                  bg: 'gray.100',
                  p: 4,
                  borderRadius: 'md',
                  overflowX: 'auto',
                  mb: { base: 4, md: 5 },
                },
              }}
            >
              {renderContent(blog.content)}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BlogSingle;
