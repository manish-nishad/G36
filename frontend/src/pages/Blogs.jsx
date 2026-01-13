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
} from "@chakra-ui/react";
import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { blogPosts } from "../mockData";
import Seo from "../seo/Seo";
import {
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaReddit,
  FaRss,
  FaShieldAlt,
  FaGlobe,
  FaSearch,
} from "react-icons/fa";

// Memoized date formatter
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

// Debounce hook
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [displayCount, setDisplayCount] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");
  const abortControllerRef = useRef(null);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // Debounce search query
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    // Cancel previous request if it exists
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new abort controller
    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;

    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/blogs`, {
          signal,
          timeout: 10000, // 10 second timeout
        });
        const blogData = response.data?.data || response.data || [];
        if (blogData.length > 0) {
          setBlogs(blogData);
        } else {
          setBlogs(blogPosts);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled");
        } else {
          console.error("Error fetching blogs:", error);
          setBlogs(blogPosts);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();

    // Cleanup function
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  // Memoized filtered blogs
  const filteredBlogs = useMemo(() => {
    if (!debouncedSearchQuery.trim()) return blogs;
    const query = debouncedSearchQuery.toLowerCase();
    return blogs.filter((blog) => {
      return (
        blog.title?.toLowerCase().includes(query) ||
        blog.excerpt?.toLowerCase().includes(query) ||
        blog.content?.toLowerCase().includes(query) ||
        blog.category?.toLowerCase().includes(query)
      );
    });
  }, [blogs, debouncedSearchQuery]);

  // Memoized displayed blogs
  const displayedBlogs = useMemo(() => {
    return filteredBlogs.slice(0, displayCount);
  }, [filteredBlogs, displayCount]);

  const hasMore = useMemo(() => {
    return filteredBlogs.length > displayCount;
  }, [filteredBlogs.length, displayCount]);

  // Memoized blog sections
  const { firstPost, nextThreePosts, moreBlogs } = useMemo(() => {
    return {
      firstPost: displayedBlogs[0],
      nextThreePosts: displayedBlogs.slice(1, 4),
      moreBlogs: displayedBlogs.slice(4),
    };
  }, [displayedBlogs]);

  const handleNewsletterSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!email) return;
    setNewsletterLoading(true);
    setTimeout(() => {
      setNewsletterLoading(false);
      setEmail("");
      alert("Thank you for subscribing!");
    }, 1000);
  }, [email]);

  const handleLoadMore = useCallback(() => {
    setDisplayCount((prev) => prev + 6);
  }, []);

  // if (loading) {
  //   return (
  //     <Box bg="white" minH="100vh" py={12} display="flex" alignItems="center" justifyContent="center">
  //       <Container maxW="7xl">
  //         <Text textAlign="center" color="gray.500" fontSize="lg">
  //           Loading blogs...
  //         </Text>
  //       </Container>
  //     </Box>
  //   );
  // }

  return (
    <>
      <Seo
        title="Blog | Genius36 Technologies"
        description="Latest insights, tutorials, and updates on technology, software development, and IT solutions."
      />
      <Box bg="white" minH="100vh" pt={{ base: "90px", md: "100px" }} pb={{ base: 6, md: 8 }}>
        <Container maxW="95%" px={{ base: 4, md: 4, lg: 6, xl: 8 }}>
          {/* Search Bar and Social Icons Section - Full Width */}
          <Box w="100%" pt={4} pb={6} mb={6}>
            <HStack
              spacing={6}
              w="100%"
              align="center"
              justify="space-between"
              flexDirection={{ base: "column", md: "row" }}
            >
              {/* Search Bar - Pill shaped, fully rounded, takes more space */}
              <Box flex={1} w="100%" minW={0} mr={{ base: 0, md: 4 }}>
                <Input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  bg="gray.100"
                  borderRadius="full"
                  borderWidth="1px"
                  borderColor="gray.300"
                  px={6}
                  py={3}
                  h="44px"
                  fontSize="sm"
                  color="gray.700"
                  _placeholder={{ color: "gray.500" }}
                  
                  w="100%"
                  _focus={{
                    borderColor: "gray.400",
                    bg: "white",
                    boxShadow: "none",
                  }}
                  _hover={{
                    borderColor: "gray.400",
                  }}
                />
              </Box>

              {/* Social Icons - White circles with light gray border */}
              <HStack
                spacing={3}
                flexShrink={0}
                flexWrap={{ base: "wrap", md: "nowrap" }}
                justify={{ base: "center", md: "flex-end" }}
              >
                {[
                  { icon: FaTwitter, href: "#", label: "Twitter" },
                  { icon: FaShieldAlt, href: "#", label: "Shield" },
                  { icon: FaInstagram, href: "#", label: "Instagram" },
                  { icon: FaGithub, href: "#", label: "GitHub" },
                  { icon: FaGlobe, href: "#", label: "Website" },
                  { icon: FaYoutube, href: "#", label: "YouTube" },
                  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
                  { icon: FaRss, href: "#", label: "RSS Feed" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Box
                      w="40px"
                      h="40px"
                      borderRadius="full"
                      bg="white"
                      borderWidth="1px"
                      borderColor="gray.300"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      cursor="pointer"
                      transition="all 0.2s ease"
                      _hover={{
                        bg: "gray.50",
                        borderColor: "gray.400",
                      }}
                      flexShrink={0}
                    >
                      <social.icon size={18} color="gray.700" />
                    </Box>
                  </Link>
                ))}
              </HStack>
            </HStack>
          </Box>

          {/* Main Blog Layout: Large post on left, 3 smaller posts on right */}
          {displayedBlogs.length === 0 ? (
            <Box textAlign="center" py={12}>
              <Text color="gray.500" fontSize="lg">
                No blog posts available yet.
              </Text>
            </Box>
          ) : (
            <Grid
              templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
              gap={{ base: 6, lg: 10 }}
              alignItems="start"
              w="100%"
              mb={8}
            >
              {/* Left Side - Large Featured Post */}
              <GridItem>
                {firstPost && (
                  <Box w="100%">
                    <Box
                      as={RouterLink}
                      to={`/blogs/${firstPost._id || firstPost.id}`}
                      display="block"
                      w="100%"
                      _hover={{ textDecoration: "none" }}
                      cursor="pointer"
                      boxShadow="none"
                    >
                      <VStack align="stretch" spacing={5} w="100%">
                        {/* Cover Image - Large */}
                        <Box
                          borderRadius="md"
                          overflow="hidden"
                          bg="gray.200"
                          w="100%"
                          h={{ base: "300px", sm: "400px", md: "500px" }}
                          position="relative"
                          boxShadow="none"
                          border="none"
                          outline="none"
                        >
                          <Image
                            src={
                              firstPost.coverImage ||
                              firstPost.image ||
                              "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop"
                            }
                            alt={firstPost.title || "Blog post"}
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            loading="eager"
                            decoding="async"
                            fetchPriority="high"
                            boxShadow="none"
                            border="none"
                            outline="none"
                            onError={(e) => {
                              e.target.src = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop";
                            }}
                          />
                        </Box>

                        {/* Title, Excerpt, and Date */}
                        <VStack align="start" spacing={4} w="100%">
                          <Heading
                            size="xl"
                            color="gray.900"
                            fontWeight="700"
                            lineHeight="1.3"
                            
                            _hover={{ color: "gray.700" }}
                            transition="color 0.2s"
                            wordBreak="break-word"
                            overflowWrap="break-word"
                          >
                            {firstPost.title}
                          </Heading>
                          <Text
                            fontSize="md"
                            color="gray.600"
                            
                            lineHeight="1.6"
                          >
                            {firstPost.excerpt || firstPost.content?.substring(0, 200) + "..."}
                          </Text>
                          <Text
                            fontSize="sm"
                            color="gray.500"
                            
                            lineHeight="1.5"
                          >
                            {formatDate(firstPost.createdAt || firstPost.date)}
                          </Text>
                        </VStack>
                      </VStack>
                    </Box>
                  </Box>
                )}
              </GridItem>

              {/* Right Side - 3 Smaller Posts Stacked */}
              <GridItem>
                <VStack spacing={6} align="stretch" w="100%">
                  {nextThreePosts.map((blog) => (
                    <Box
                      key={blog._id || blog.id}
                      as={RouterLink}
                      to={`/blogs/${blog._id || blog.id}`}
                      display="block"
                      w="100%"
                      _hover={{ textDecoration: "none" }}
                      cursor="pointer"
                      boxShadow="none"
                    >
                      <SimpleGrid columns={2} spacing={{ base: 5, md: 8 }} w="100%" alignItems="start">
                        {/* Cover Image - Smaller */}
                        <Box
                          borderRadius="md"
                          overflow="hidden"
                          bg="gray.200"
                          w="100%"
                          h={{ base: "120px", md: "140px" }}
                          position="relative"
                          boxShadow="none"
                          border="none"
                          outline="none"
                          flexShrink={0}
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
                            loading="lazy"
                            decoding="async"
                            boxShadow="none"
                            border="none"
                            outline="none"
                            onError={(e) => {
                              e.target.src = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop";
                            }}
                          />
                        </Box>

                        {/* Title, Excerpt, and Date */}
                        <VStack align="start" spacing={2.5} w="100%" justify="flex-start" alignSelf="start" pl={{ base: 3, md: 2 }}>
                          <Heading
                            size="sm"
                            color="gray.900"
                            fontWeight="700"
                            lineHeight="1.3"
                            
                            _hover={{ color: "gray.700" }}
                            transition="color 0.2s"
                            wordBreak="break-word"
                            overflowWrap="break-word"
                            noOfLines={2}
                            textAlign="left"
                          >
                            {blog.title}
                          </Heading>
                          <Text
                            fontSize="xs"
                            color="gray.600"
                            
                            lineHeight="1.4"
                            noOfLines={2}
                            textAlign="left"
                          >
                            {blog.excerpt || blog.content?.substring(0, 100) + "..."}
                          </Text>
                          <Text
                            fontSize="xs"
                            color="gray.500"
                            
                            lineHeight="1.5"
                            textAlign="left"
                          >
                            {formatDate(blog.createdAt || blog.date)}
                          </Text>
                        </VStack>
                      </SimpleGrid>
                    </Box>
                  ))}
                </VStack>
              </GridItem>
            </Grid>
          )}

          {/* More Posts Section - Full Width Grid */}
          {moreBlogs.length > 0 && (
            <Box w="100%" mt={8}>
              <Heading
                as="h2"
                size="xl"
                mb={6}
                color="gray.900"
                fontWeight="700"
                
              >
                More Posts
              </Heading>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={{ base: 6, md: 6, lg: 10 }}
                w="100%"
              >
                {moreBlogs.map((blog) => (
                  <Box
                    key={blog._id || blog.id}
                    as={RouterLink}
                    to={`/blogs/${blog._id || blog.id}`}
                    display="block"
                    w="100%"
                    _hover={{ textDecoration: "none" }}
                    cursor="pointer"
                    boxShadow="none"
                  >
                    <VStack align="stretch" spacing={4} w="100%">
                      {/* Cover Image */}
                      <Box
                        borderRadius="md"
                        overflow="hidden"
                        bg="gray.200"
                        w="100%"
                        h={{ base: "200px", md: "220px" }}
                        position="relative"
                        mb={2}
                        p={{ base: 2, md: 3 }}
                        boxShadow="none"
                        border="none"
                        outline="none"
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
                          loading="lazy"
                          decoding="async"
                          borderRadius="md"
                          boxShadow="none"
                          border="none"
                          outline="none"
                          onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop";
                          }}
                        />
                      </Box>

                      {/* Title, Excerpt, and Date */}
                      <VStack align="start" spacing={3} w="100%" textAlign="left" pt={4}>
                        <Heading
                          size="md"
                          color="gray.900"
                          fontWeight="700"
                          lineHeight="1.3"
                          
                          _hover={{ color: "gray.700" }}
                          transition="color 0.2s"
                          wordBreak="break-word"
                          overflowWrap="break-word"
                          textAlign="left"
                          w="100%"
                        >
                          {blog.title}
                        </Heading>
                        <Text
                          fontSize="sm"
                          color="gray.600"
                          
                          lineHeight="1.5"
                          textAlign="left"
                          w="100%"
                        >
                          {blog.excerpt || blog.content?.substring(0, 120) + "..."}
                        </Text>
                        <Text
                          fontSize="sm"
                          color="gray.500"
                          
                          lineHeight="1.5"
                          textAlign="left"
                          w="100%"
                        >
                          {formatDate(blog.createdAt || blog.date)}
                        </Text>
                      </VStack>
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          )}

          {/* Load More Button */}
          {hasMore && (
            <Box textAlign="center" pt={6} pb={4} w="100%" mt={4}>
              <Button
                size="md"
                variant="outline"
                borderColor="gray.300"
                color="gray.700"
                borderRadius="md"
                _hover={{
                  bg: "gray.50",
                  borderColor: "gray.400",
                  color: "gray.900",
                }}
                onClick={handleLoadMore}
                
                transition="all 0.2s ease"
              >
                Load more posts
              </Button>
            </Box>
          )}

        </Container>
      </Box>

       {/* Newsletter Section - Full Width */}
          {displayedBlogs.length >= 4 && (
            <Box
              bg="purple.50"
              borderRadius="lg"
              p={{ base: 6, md: 8, lg: 10 }}
              textAlign="center"
              w="100%"
              mt={8}
              mb={8}
            >
              <VStack spacing={5} w="100%">
                <Heading
                  as="h2"
                  size="md"
                  color="purple.600"
                  
                  lineHeight="1.6"
                  fontWeight="400"
                >
                  Subscribe to our newsletter for updates and changelog.
                </Heading>
                <Box
                  as="form"
                  onSubmit={handleNewsletterSubmit}
                  w="100%"
                  maxW="md"
                  mx="auto"
                >
                  <HStack spacing={2} w="100%">
                    <Input
                      type="email"
                      placeholder="john@doe.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      size="md"
                      bg="white"
                      borderColor="gray.300"
                      borderRadius="md"
                      _focus={{
                        borderColor: "purple.400",
                        boxShadow: "none",
                      }}
                      _placeholder={{ color: "gray.400" }}
                      flex={1}
                      
                      required
                      w="100%"
                    />
                    <Button
                      type="submit"
                      size="md"
                      bg="purple.600"
                      color="white"
                      borderRadius="md"
                      _hover={{ bg: "purple.700" }}
                      isLoading={newsletterLoading}
                      loadingText="..."
                      
                      flexShrink={0}
                      px={6}
                    >
                      Subscribe
                    </Button>
                  </HStack>
                </Box>
              </VStack>
            </Box>
          )}
    </>
  );
};

export default Blogs;