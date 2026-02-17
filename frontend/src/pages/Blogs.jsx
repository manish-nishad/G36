import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Input,
  Button,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import { Link } from "@chakra-ui/react";
import { useState, useEffect, useMemo, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import Seo from "../seo/Seo";
import { blogPosts } from "../mockData";
import Lottie from "lottie-react";
import BlogPost from "../assets/lottie/Blog post.json";

/* -------------------- Helpers -------------------- */

const formatDate = (dateString) => {
  if (!dateString) return "";
  const d = new Date(dateString);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const useDebounce = (value, delay = 300) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

/* -------------------- Skeleton -------------------- */

const BlogCardSkeleton = () => (
  <Box padding={3}>
    <Skeleton h="220px" borderRadius="md" />
    <VStack align="start" spacing={3} mt={4}>
      <Skeleton h="18px" w="80%" />
      <SkeletonText noOfLines={2} spacing="2" />
      <Skeleton h="12px" w="40%" />
    </VStack>
  </Box>
);

/* -------------------- Component -------------------- */

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [displayCount, setDisplayCount] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const observerRef = useRef(null);
  const debouncedSearch = useDebounce(searchQuery);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  /* -------------------- Fetch Blogs -------------------- */

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/blogs`, {
        timeout: 8000,
      });

      const apiData = Array.isArray(res.data) ? res.data : res.data?.data || [];

      setBlogs(apiData.length ? apiData : blogPosts);
    } catch {
      setBlogs(blogPosts);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  /* 🔥 Refetch when page regains focus (after Add/Edit Blog) */
  useEffect(() => {
    const onFocus = () => fetchBlogs();
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, []);

  /* Reset infinite scroll when blogs update */
  useEffect(() => {
    setDisplayCount(6);
  }, [blogs]);

  /* -------------------- Categories -------------------- */

  const categories = useMemo(() => {
    const cats = blogs.map((b) => b.category).filter(Boolean);
    return ["All", ...new Set(cats)];
  }, [blogs]);

  /* -------------------- Filtering -------------------- */

  const filteredBlogs = useMemo(() => {
    let data = blogs;

    if (activeCategory !== "All") {
      data = data.filter((b) => b.category === activeCategory);
    }

    if (!debouncedSearch.trim()) return data;

    const q = debouncedSearch.toLowerCase();
    return data.filter(
      (b) =>
        b.title?.toLowerCase().includes(q) ||
        b.excerpt?.toLowerCase().includes(q),
    );
  }, [blogs, activeCategory, debouncedSearch]);

  const displayedBlogs = filteredBlogs.slice(0, displayCount);
  const hasMore = filteredBlogs.length > displayCount;

  /* -------------------- Infinite Scroll -------------------- */

  useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDisplayCount((prev) => prev + 6);
        }
      },
      { threshold: 1 },
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [hasMore]);

  /* -------------------- SEO -------------------- */

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Genius36 Technologies Blog",
    blogPost: displayedBlogs.map((b) => ({
      "@type": "BlogPosting",
      headline: b.title,
      datePublished: b.createdAt,
      image: b.image,
    })),
  };

  /* -------------------- Render -------------------- */

  return (
    <>
      <Seo title="Blog | Genius36 Technologies">
        <script type="application/ld+json">
          {JSON.stringify(blogListSchema)}
        </script>
      </Seo>

      {/* <Box bg="gray.900" color="white">
        <Container maxW="6xl" py={{ base: 14, md: 20 }}>
          <VStack spacing={8} textAlign="center">
            <Box maxW="350px" mx="auto">
            <Lottie animationData={BlogPost} loop autoplay />
          </Box>
          </VStack>
        </Container>
      </Box> */}

      <Box bg="white" minH="100vh" pt="100px" padding={10}>
        <Container maxW="7xl">
          {/* Search */}
          <Input
            placeholder="Search blog posts..."
            mb={6}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Categories */}
          <HStack spacing={3} mb={8} wrap="wrap">
            {categories.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={activeCategory === cat ? "solid" : "outline"}
                onClick={() => {
                  setActiveCategory(cat);
                  setDisplayCount(6);
                }}
              >
                {cat}
              </Button>
            ))}
          </HStack>

          {/* Blog Grid */}
          {loading ? (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {[...Array(6)].map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
            </SimpleGrid>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} gap={5}>
              {displayedBlogs.map((blog) => (
                <Box key={blog.id} as={RouterLink} to={`/blogs/${blog.id}`}>
                  <Box borderRadius="md" overflow="hidden" bg="gray.100">
                    <Image
                      src={
                        blog.image ||
                        "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
                      }
                      h="220px"
                      w="100%"
                      objectFit="cover"
                      loading="lazy"
                      transition="transform 0.3s ease"
                      _hover={{ transform: "scale(1.15)" }}
                    />
                  </Box>

                  <VStack align="start" spacing={3} mt={4}>
                    <Heading
                      size="md"
                      transition="all 0.2s ease"
                      _hover={{ textDecoration: "underline" }}
                    >
                      {blog.title}
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                      {blog.excerpt}
                    </Text>
                    {/* <Text fontSize="xs" color="gray.500">
                      {formatDate(blog.createdAt)}
                    </Text> */}
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          )}

          {/* Infinite Scroll Trigger */}
          {hasMore && <Box ref={observerRef} h="30px" mt={10} />}
        </Container>
      </Box>
    </>
  );
}
