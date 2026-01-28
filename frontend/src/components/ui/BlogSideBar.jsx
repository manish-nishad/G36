import {
  Box,
  Heading,
  Input,
  Button,
  VStack,
  HStack,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import { SearchIcon } from "@chakra-ui/icons";

const categories = [
  { name: "Cyber Security", count: 8 },
  { name: "Cloud Computing", count: 11 },
  { name: "AI & Technology", count: 12 },
  { name: "Web Development", count: 18 },
  { name: "Networking", count: 7 },
  { name: "Career & Training", count: 3 },
];

const recentPosts = [
  {
    // imgSrc: "/img/news/pp3.jpg",
    date: "18 Dec, 2025",
    title: "Colgate-Palmolive Renews with Morz in Malaysia Soon",
  },
  {
    // imgSrc: "/img/news/pp4.jpg",
    date: "18 Dec, 2025",
    title: "Bill Gates Launches Clean Energy Investment Fund",
  },
  {
    // imgSrc: "/img/news/pp5.jpg",
    date: "18 Dec, 2025",
    title: "Metal Roofing: The Best for Solar Panels",
  },
];

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
  "Digital Transformation"
];

export default function BlogSideBar() {
  return (
    <VStack spacing={10} align="stretch" gap={10} padding={10}>
      {/* 🔍 SEARCH */}
      <Box>
        <Heading size="md" mb={4}>
          Search
        </Heading>

        <Flex gap={2}>
          <Input placeholder="Search here..." />
          <Button colorScheme="blue">
            {/* <SearchIcon /> */}
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
              _hover={{ color: "blue.600" }}
            >
              <Link to="/blogs">{cat.name}</Link>
              <Text color="gray.500">({cat.count})</Text>
            </Flex>
          ))}
        </VStack>
      </Box>

      {/* 📰 RECENT POSTS */}
      <Box>
        <Heading size="md" mb={4}>
          Recent Posts
        </Heading>

        <VStack spacing={4} align="stretch">
          {recentPosts.map((post, i) => (
            <Flex key={i} gap={3}>
              {/* <Image
                src={post.imgSrc}
                alt={post.title}
                boxSize="60px"
                objectFit="cover"
                borderRadius="md"
              /> */}

              <Box>
                <Text fontSize="xs" color="gray.500">
                  {post.date}
                </Text>
                <Link to="/blogs">
                  <Text fontSize="sm" fontWeight="600" noOfLines={2}>
                    {post.title}
                  </Text>
                </Link>
              </Box>
            </Flex>
          ))}
        </VStack>
      </Box>

      {/* 🏷 TAGS */}
      <Box>
        <Heading size="md" mb={4}>
          Tags
        </Heading>

        <Flex wrap="wrap" gap={2}>
          {tags.map((tag, i) => (
            <Link key={i} to="/blogs">
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
            </Link>
          ))}
        </Flex>
      </Box>
    </VStack>
  );
}
