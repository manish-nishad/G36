import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Link as ChakraLink,
  Icon,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";

/* SAMPLE COMMENTS DATA */
const commentsData = [
  {
    id: 1,
    author: "Albert Flores",
    date: "March 20, 2025 at 2:37 pm",
    // image: "/img/news/comment.png",
    text: "Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy",
  },
  {
    id: 2,
    author: "Alex Flores",
    date: "March 20, 2025 at 2:37 pm",
    // image: "/img/news/comment-2.png",
    text: "Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy",
  },
];

export default function BlogComments() {
  return (
    <Box mt={10}>
      {/* COMMENTS HEADING */}
      <Heading size="md" mb={6}>
        {commentsData.length} Comments
      </Heading>

      {/* COMMENTS LIST */}
      <VStack spacing={8} align="stretch">
        {commentsData.map((comment, index) => (
          <HStack
            key={comment.id}
            align="flex-start"
            spacing={5}
            pt={index === 0 ? 4 : 6}
            borderTop={index !== 0 ? "1px solid" : "none"}
            borderColor="gray.200"
          >
            {/* AVATAR */}
            {/* <Image
              src={comment.image}
              alt={comment.author}
              boxSize="60px"
              borderRadius="full"
              objectFit="cover"
            /> */}

            {/* CONTENT */}
            <Box flex="1">
              {/* HEADER */}
              <HStack
                justify="space-between"
                align="flex-start"
                flexWrap="wrap"
                mb={2}
              >
                <Box>
                  <ChakraLink
                    as={RouterLink}
                    to="/news-details"
                    fontWeight="bold"
                    color="gray.800"
                    _hover={{ color: "blue.600" }}
                  >
                    {comment.author}
                  </ChakraLink>
                  <Text fontSize="sm" color="gray.500">
                    {comment.date}
                  </Text>
                </Box>

                {/* STARS */}
                <HStack spacing={1}>
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      as={FaStar}
                      key={i}
                      color="yellow.400"
                      boxSize={4}
                    />
                  ))}
                </HStack>
              </HStack>

              {/* COMMENT TEXT */}
              <Text fontSize="md" color="gray.700" mb={3}>
                {comment.text}
              </Text>

              {/* REPLY LINK */}
              <ChakraLink
                as={RouterLink}
                to="/news-details"
                fontSize="sm"
                fontWeight="semibold"
                color="blue.600"
                _hover={{ textDecoration: "underline" }}
              >
                Reply
              </ChakraLink>
            </Box>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
}
