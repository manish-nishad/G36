import {
  Box,
  Heading,
  Input,
  Button,
  VStack,
  HStack,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useMemo } from "react";

/* 🔹 Static tags (as required) */
const tags = [
  "Uncategorized",
  "Technology",
  "Tech News",
  "Innovation",
  "Web Development",
  "Software Development",
  "Programming",
  "Artificial Intelligence",
  "Machine Learning",
  "Blockchain",
  "Cloud Computing",
  "Cyber Security",
  "Data Science",
  "Startups",
  "Digital Transformation",
];

export default function BlogSideBar({
  blogs = [],
  searchQuery,
  setSearchQuery,
  setActiveCategory,
}) {
  /* -------------------- Categories (dynamic count) -------------------- */
  const categories = useMemo(() => {
    const map = {};
    blogs.forEach((b) => {
      if (b.category) {
        map[b.category] = (map[b.category] || 0) + 1;
      }
    });
    return Object.entries(map).map(([name, count]) => ({
      name,
      count,
    }));
  }, [blogs]);

  /* -------------------- Recent Posts (latest 3) -------------------- */
  const recentPosts = useMemo(() => {
    return [...blogs]
      .sort(
        (a, b) =>
          new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date),
      )
      .slice(0, 3);
  }, [blogs]);

  return (
    <VStack spacing={10} align="stretch" padding={10}>
      {/* 🔍 SEARCH */}
      <Box>
        <Heading size="md" mb={4}>
          Search
        </Heading>

        <Flex gap={2}>
          <Input
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button>
            <FaSearch />
          </Button>
        </Flex>
      </Box>

      {/* 📂 CATEGORIES */}
      <Box>
        <Heading size="md" mb={4}>
          Categories
        </Heading>

        <VStack align="stretch" spacing={3}>
          {categories.map((cat, i) => (
            <Flex
              key={i}
              justify="space-between"
              fontSize="sm"
              cursor="pointer"
              _hover={{ color: "blue.600" }}
              onClick={() => setActiveCategory(cat.name)}
            >
              <Text>{cat.name}</Text>
              <Text color="gray.500">({cat.count})</Text>
            </Flex>
          ))}

          {categories.length === 0 && (
            <Text fontSize="sm" color="gray.500">
              No categories found
            </Text>
          )}
        </VStack>
      </Box>

      {/* 📰 RECENT POSTS */}
      <Box>
        <Heading size="md" mb={4}>
          Recent Posts
        </Heading>

        <VStack spacing={4} align="stretch">
          {recentPosts.map((post) => (
            <Link key={post._id || post.id} to={`/blogs/${post.id || post.id}`}>
              <Box p={2}>
                <HStack spacing={3} align="flex-start">
                  {/* 🖼 Image with hover zoom */}
                  <Box
                    boxSize="60px"
                    borderRadius="md"
                    overflow="hidden"
                    flexShrink={0}
                    _hover={{}}
                  >
                    <Image
                      src={
                        post.coverImage ||
                        post.image ||
                        "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
                      }
                      alt={post.title}
                      boxSize="60px"
                      objectFit="cover"
                      transition="transform 0.3s ease"
                      _hover={{ transform: "scale(1.15)" }}
                    />
                  </Box>

                  {/* 📄 Text */}
                  <Box>
                    <Text fontSize="xs" color="gray.500" mb={1}>
                      {new Date(
                        post.createdAt || post.date,
                      ).toLocaleDateString()}
                    </Text>

                    {/* Title underline on hover */}
                    <Text
                      fontSize="sm"
                      fontWeight="600"
                      noOfLines={2}
                      transition="all 0.2s ease"
                      _hover={{ textDecoration: "underline" }}
                    >
                      {post.title}
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Link>
          ))}

          {recentPosts.length === 0 && (
            <Text fontSize="sm" color="gray.500">
              No recent posts
            </Text>
          )}
        </VStack>
      </Box>

      {/* 🏷 TAGS (Google search links) */}
      <Box>
        <Heading size="xl" mb={4} marginTop={2}>
          Tags
        </Heading>

        <Flex wrap="wrap" gap={2}>
          {tags.map((tag, i) => (
            <a
              key={i}
              href={`https://www.google.com/search?q=${encodeURIComponent(
                tag,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                px={3}
                py={1}
                fontSize="sm"
                bg="gray.100"
                borderRadius="md"
                _hover={{ bg: "blue.100", color: "blue.700" }}
              >
                {tag}
              </Box>
            </a>
          ))}
        </Flex>
      </Box>
    </VStack>
  );
}
