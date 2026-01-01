import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      {/* ================= HERO SECTION ================= */}
      <Flex
        minH="100vh"
        px={{ base: 6, md: 20 }}
        align="center"
        justify="center"
        flexDir="column"
        bg="gray.50"
        textAlign="center"
      >
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          color="#04327b"
          mb={4}
        >
          Genius36 Technologies India LLP
        </Heading>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.600"
          maxW="700px"
          mb={6}
        >
          Your trusted pan-India IT solutions partner delivering excellence
          in web development, software solutions, digital growth and IT
          training.
        </Text>

        <Flex gap={4} flexWrap="wrap" justify="center">
          <Button bg="#04327b" color="white" _hover={{ bg: "#03245a" }}>
            Get Started
          </Button>
          <Button
            variant="outline"
            borderColor="#04327b"
            color="#04327b"
          >
            Contact Us
          </Button>
        </Flex>
      </Flex>

      {/* ================= SERVICES ================= */}
      <Box py={20} px={{ base: 6, md: 20 }}>
        <VStack spacing={4} mb={10}>
          <Heading color="#04327b">Our Services</Heading>
          <Text color="gray.600">
            Technology solutions designed for business growth
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={8}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              p={6}
              bg="white"
              borderRadius="12px"
              boxShadow="md"
              textAlign="center"
            >
              <Text fontWeight="600" mb={2}>
                {service.title}
              </Text>
              <Text fontSize="sm" color="gray.600">
                {service.desc}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* ================= ABOUT ================= */}
      <Box py={20} px={{ base: 6, md: 20 }} bg="gray.50">
        <VStack spacing={4} maxW="800px" mx="auto" textAlign="center">
          <Heading color="#04327b">
            Building Digital Success with Innovation & Technology
          </Heading>

          <Text color="gray.600">
            At Genius36 Technologies, we focus on innovation, scalability
            and reliability. Our mission is to help businesses adopt
            modern technology and grow digitally with confidence.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}

/* ================= DATA ================= */

const services = [
  {
    title: "Web Development",
    desc: "Modern, responsive and scalable websites and web apps.",
  },
  {
    title: "Software Solutions",
    desc: "Custom software tailored to business requirements.",
  },
  {
    title: "Digital Growth",
    desc: "SEO, marketing and growth-focused digital strategies.",
  },
  {
    title: "IT Training",
    desc: "Professional training programs for students and teams.",
  },
];
