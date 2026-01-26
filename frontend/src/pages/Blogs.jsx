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
  Link,
  Grid,
  GridItem,
  SimpleGrid,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { useState, useEffect, useMemo, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import Seo from "../seo/Seo";
import { blogPosts } from "../mockData";
import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaRss,
} from "react-icons/fa";

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
  <Box>
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

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/blogs`, { timeout: 8000 });
        setBlogs(res.data?.data || blogPosts);
      } catch {
        setBlogs(blogPosts);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

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
        b.excerpt?.toLowerCase().includes(q)
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
      { threshold: 1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [hasMore]);

  /* -------------------- SEO Schema -------------------- */

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Genius36 Technologies Blog",
    description: "Technology insights, tutorials and IT updates",
    blogPost: displayedBlogs.map((b) => ({
      "@type": "BlogPosting",
      headline: b.title,
      datePublished: b.createdAt,
      image: b.coverImage || b.image,
    })),
  };

  /* -------------------- Render -------------------- */

  return (
    <>
      <Seo
        title="Blog | Genius36 Technologies"
        description="Latest technology insights, tutorials and IT updates"
      >
        <script type="application/ld+json">
          {JSON.stringify(blogListSchema)}
        </script>
      </Seo>

      <Box bg="white" minH="100vh" pt="100px">
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
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} gap="15px">
              {[...Array(6)].map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
            </SimpleGrid>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} gap="15px">
              {displayedBlogs.map((blog) => (
                <Box
                  key={blog._id || blog.id}
                  as={RouterLink}
                  to={`/blogs/${blog._id || blog.id}`}
                >
                  <Box borderRadius="md" overflow="hidden" bg="gray.100">
                    <Image
                      src={
                        blog.coverImage ||
                        blog.image ||
                        "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
                      }
                      h="220px"
                      w="100%"
                      objectFit="cover"
                      loading="lazy"
                    />
                  </Box>

                  <VStack align="start" spacing={3} mt={4}>
                    <Heading size="md">{blog.title}</Heading>
                    <Text fontSize="sm" color="gray.600">
                      {blog.excerpt}
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                      {formatDate(blog.createdAt)}
                    </Text>
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
