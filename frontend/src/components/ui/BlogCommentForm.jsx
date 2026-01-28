import {
  Box,
  Heading,
  Input,
  Textarea,
  Button,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";

export default function BlogCommentForm() {
  return (
    <Box pt={10}>
      {/* Heading */}
      <Heading
        as="h3"
        fontSize={{ base: "lg", md: "2xl" }}
        mb={6}
        color="gray.800"
      >
        Leave a Comment
      </Heading>

      {/* Form */}
      <Box as="form">
        <VStack spacing={5}>
          {/* Name + Email */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="100%" gap={4}>
            <Input
              placeholder="Your Name"
              name="name"
              size="lg"
              bg="white"
              borderColor="gray.300"
              _focus={{
                borderColor: "blue.500",
                boxShadow: "none",
              }}
            />

            <Input
              placeholder="Your Email"
              name="email"
              type="email"
              size="lg"
              bg="white"
              borderColor="gray.300"
              _focus={{
                borderColor: "blue.500",
                boxShadow: "none",
              }}
            />
          </SimpleGrid>

          {/* Message */}
          <Textarea
            placeholder="Write Message"
            name="message"
            size="lg"
            minH="160px"
            bg="white"
            borderColor="gray.300"
            resize="vertical"
            _focus={{
              borderColor: "blue.500",
              boxShadow: "none",
            }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            alignSelf="flex-start"
            bg="#04327b"
            color="white"
            size="lg"
            px={8}
            rightIcon={<ArrowRight size={18} />}
            _hover={{
              bg: "#03245a",
              transform: "translateY(-2px)",
            }}
            transition="all 0.2s ease"
          >
            Post Comment
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
