import {
  Box,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  HStack,
  Container,
  Stack,
  Card,
  Image,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { trainingImages, servicesImages } from "../mockData";
import Seo from "../seo/Seo";
import Lottie from "lottie-react";
import Welcome from "../assets/lottie/Welcome.json";

const Training = () => {
  // Training programs data
  const trainingPrograms = [
    {
      id: 1,
      title: "Website Development with JAVA",
      description:
        "Master Java web development with Spring Boot, REST APIs, and database integration. Build enterprise-grade applications with industry best practices.",
      topics: [
        "Java Fundamentals",
        "Spring Boot",
        "REST APIs",
        "MySQL / PostgreSQL",
        "Live Project",
      ],
      image: servicesImages.development,
    },
    {
      id: 2,
      title: "Website Development with PHP",
      description:
        "Learn PHP web development from basics to advanced MVC frameworks. Build dynamic websites and APIs with MySQL database integration.",
      topics: [
        "PHP Basics",
        "MySQL",
        "MVC Framework",
        "API Development",
        "Live Project",
      ],
      image: servicesImages.workspace,
    },
    {
      id: 3,
      title: "Website Development with REACT",
      description:
        "Modern frontend development with React. Learn component-based architecture, state management, and API integration to build interactive web applications.",
      topics: [
        "HTML, CSS, JavaScript",
        "React Components",
        "Hooks & State Management",
        "REST API Integration",
        "Mini Projects",
      ],
      image: servicesImages.development,
    },
    {
      id: 4,
      title: "DevOps Training",
      description:
        "Comprehensive DevOps training covering Linux, containerization, CI/CD pipelines, and cloud infrastructure. Master modern deployment practices.",
      topics: [
        "Linux Basics",
        "Git & GitHub",
        "Docker",
        "CI/CD Pipelines",
        "AWS / Cloud Basics",
      ],
      image: servicesImages.networking,
    },
    {
      id: 5,
      title: "AI Automation Training",
      description:
        "Learn to automate business processes using AI tools. Master prompt engineering, workflow automation, RPA integration, and AI agent development for real-world applications.",
      topics: [
        "Prompt Engineering",
        "Automation with AI tools",
        "Workflow Automation",
        "RPA + AI integration",
        "API Automation",
        "Chatbot & AI Agent Development",
        "Real-world automation project",
      ],
      image: trainingImages.classroom,
    },
    {
      id: 6,
      title: "AI & Machine Learning Course",
      description:
        "Comprehensive AI and Machine Learning course covering Python, data analysis, deep learning, and NLP. Build real-world AI projects from scratch.",
      topics: [
        "Python for AI",
        "Data Analysis",
        "Machine Learning Basics",
        "Deep Learning Introduction",
        "NLP Basics",
        "AI Model Training",
        "Real-world AI project",
      ],
      image: trainingImages.programming,
    },
  ];

  // Training overview points
  const overviewPoints = [
    "Job-oriented training",
    "Live projects",
    "Industry mentors",
    "Interview preparation",
  ];

  return (
    <>
      <Seo
        title="Training Programs | Genius36 Technologies"
        description="Professional IT & AI training programs including Java, PHP, React, DevOps, AI Automation, and Machine Learning. Industry-ready training with hands-on projects."
      />

      {/* HERO SECTION - Matching About/Career/Services page style */}
      <Box bg="gray.900" color="white">
        <Container maxW="7xl" py={{ base: 14, md: 20 }}>
          <VStack spacing={8} textAlign="center">
            {/* LOTTIE TOP */}
            <Box maxW="420px" mx="auto">
              <Lottie animationData={Welcome} loop autoplay />
            </Box>

            {/* CONTENT BELOW */}
            <VStack spacing={4}>
              <Heading
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
              >
                Professional{" "}
                <Box as="span" color="#0951d8">
                  IT & AI Training Programs
                </Box>
              </Heading>

              <Text
                fontSize={{ base: "md", md: "lg" }}
                maxW="3xl"
                color="whiteAlpha.900"
              >
                Industry-ready training with hands-on projects, real-world
                automation, and AI applications.
              </Text>

              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="whiteAlpha.700"
                maxW="2xl"
              >
                Master in-demand technologies and advance your career with our
                comprehensive training programs.
              </Text>
            </VStack>

            {/* BUTTONS FULL WIDTH */}
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={4}
              w="100%"
              maxW="420px"
            >
              <Link to="/contact">
                <Button
                  w="100%"
                  size="lg"
                  bg="#0951d8"
                  color="white"
                  _hover={{ bg: "#073fa6" }}
                >
                  Enroll Now <ArrowRight size={18} />
                </Button>
              </Link>

              <Link to="/about">
                <Button
                  w="100%"
                  size="lg"
                  variant="outline"
                  color="white"
                  borderColor="whiteAlpha.500"
                  _hover={{ bg: "whiteAlpha.200" }}
                >
                  Learn More
                </Button>
              </Link>
            </Stack>
          </VStack>
        </Container>
      </Box>

      {/* TRAINING OVERVIEW SECTION */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="7xl">
          <VStack spacing={8}>
            <Box textAlign="center">
              <Heading
                size="2xl"
                mb={4}
                color="gray.900"
                fontSize={{ base: "xl", md: "2xl" }}
              >
                Why Choose Our Training Programs?
              </Heading>
            </Box>

            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 4 }}
              spacing={{ base: 6, md: 8 }}
              gap={10}
              w="100%"
            >
              {overviewPoints.map((point, i) => (
                <Card.Root
                  key={i}
                  bg="white"
                  p={6}
                  borderRadius="xl"
                  boxShadow="md"
                  h="full"
                >
                  <Card.Body>
                    <VStack spacing={3} align="start">
                      <Box
                        w={{ base: 12, md: 14 }}
                        h={{ base: 12, md: 14 }}
                        bgGradient="linear(to-br, blue.500, blue.700)"
                        borderRadius="lg"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        p={2}
                      >
                        <Icon as={CheckCircle} color="white" boxSize={6} />
                      </Box>
                      <Heading
                        size="md"
                        color="gray.900"
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        {point}
                      </Heading>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* TRAINING PROGRAMS SECTIONS */}
      {trainingPrograms.map((program, index) => (
        <Box
          key={program.id}
          py={{ base: 12, md: 20 }}
          bg={index % 2 === 0 ? "gray.50" : "white"}
        >
          <Container maxW="7xl">
            <SimpleGrid
              columns={{ base: 1, lg: 2 }}
              spacing={{ base: 8, lg: 12 }}
              alignItems="start"
            >
              <VStack
                spacing={4}
                align="start"
                w="100%"
                order={{ base: 1, lg: index % 2 === 1 ? 2 : 1 }}
              >
                <Heading
                  size="2xl"
                  color="gray.900"
                  fontSize={{ base: "2xl", md: "3xl" }}
                >
                  {program.title}
                </Heading>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color="gray.900"
                  lineHeight="1.8"
                  textAlign="left"
                >
                  {program.description}
                </Text>
                <VStack align="start" spacing={2} w="100%" pt={2}>
                  {program.topics.map((topic, idx) => (
                    <HStack key={idx} spacing={3} align="start">
                      <Box
                        w="6px"
                        h="6px"
                        borderRadius="full"
                        bg="blue.500"
                        mt={2}
                        flexShrink={0}
                      />
                      <Text
                        fontSize={{ base: "sm", md: "md" }}
                        color="gray.800"
                        lineHeight="1.6"
                      >
                        {topic}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
              <Box
                w="100%"
                display="flex"
                alignItems="start"
                order={{ base: 2, lg: index % 2 === 1 ? 1 : 2 }}
              >
                <Box
                  borderRadius="2xl"
                  overflow="hidden"
                  boxShadow="2xl"
                  position="relative"
                  w="100%"
                  h={{ base: "300px", md: "400px" }}
                >
                  <Image
                    src={program.image}
                    alt={program.title}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />
                </Box>
              </Box>
            </SimpleGrid>
          </Container>
        </Box>
      ))}

      {/* CALL-TO-ACTION SECTION - Matching About/Services page CTA */}
      <Box
        py={{ base: 12, md: 20 }}
        bgGradient="linear(to-br, blue.900, blue.800, gray.900)"
      >
        <Container maxW="7xl">
          <VStack spacing={8} textAlign="center">
            <Heading color="black" size="2xl" fontSize={{ base: "xl", md: "2xl" }}>
              Ready to Start Your Training Journey?
            </Heading>
            <Text color="gray.900" fontSize={{ base: "md", md: "lg" }} maxW="2xl">
              Enroll in our professional training programs and advance your
              career with industry-relevant skills. Contact us today to learn
              more about course schedules and enrollment.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
              <Link to="/contact">
                <Button bg="#0951d8" color="white" size={{ base: "md", md: "lg" }}>
                  Enroll Now <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  colorScheme="whiteAlpha"
                  color="Black"
                  size={{ base: "md", md: "lg" }}
                >
                  View Services
                </Button>
              </Link>
            </Stack>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default Training;