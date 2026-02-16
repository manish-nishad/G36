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
  Dialog,
  Portal,
  Badge,
  CloseButton,
  Flex,
  Grid,
  Field,
  Fieldset,
  Input,
  Select,
  createListCollection,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import {
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Award,
  BookOpen,
  Code,
  Briefcase,
  TrendingUp,
  Star,
  Calendar,
  Target,
} from "lucide-react";
import { trainingImages, servicesImages } from "../mockData";
import Seo from "../seo/Seo";
import Lottie from "lottie-react";
import TrainingLottie from "../assets/lottie/Training.json";
import { px } from "framer-motion";

const Training = () => {
  const [open, setOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

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

  // Training benefits with icons
  const benefits = [
    {
      icon: Award,
      title: "Industry Certification",
      description: "Earn recognized certificates upon completion",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals with 10+ years experience",
    },
    {
      icon: Code,
      title: "Hands-on Projects",
      description: "Build real-world projects for your portfolio",
    },
    {
      icon: Briefcase,
      title: "Job Assistance",
      description: "Resume building, interview prep & placement support",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Weekend & evening batches available",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Average 40% salary hike for our graduates",
    },
  ];

  // Stats section
  const stats = [
    { number: "2000+", label: "Students Trained", icon: Users },
    { number: "95%", label: "Placement Rate", icon: TrendingUp },
    { number: "15+", label: "Training Programs", icon: BookOpen },
    { number: "4.8/5", label: "Average Rating", icon: Star },
  ];

  return (
    <>
      <Seo
        title="Professional IT & AI Training Programs | Genius36 Technologies"
        description="Industry-ready training in Java, PHP, React, DevOps, AI Automation, and Machine Learning. Hands-on projects, expert instructors, and job placement assistance."
      />

      {/* HERO SECTION - Matching About/Career/Services page style */}
      <Box bg="gray.900" color="white">
        <Container maxW="7xl" py={{ base: 14, md: 20 }}>
          <VStack spacing={8} textAlign="center">
            {/* LOTTIE TOP */}
            <Box maxW="420px" mx="auto">
              <Lottie animationData={TrainingLottie} loop autoplay />
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
              justifyContent="center"
            >
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Button
                    size="lg"
                    bg="#0951d8"
                    color="white"
                    _hover={{ bg: "#073fa6" }}
                  >
                    Enroll Now <ArrowRight size={18} />
                  </Button>
                </Dialog.Trigger>
                <Portal>
                  <Dialog.Backdrop />
                  <Dialog.Positioner>
                    <Dialog.Content>
                      <Dialog.CloseTrigger asChild>
                        <CloseButton />
                      </Dialog.CloseTrigger>
                      <Dialog.Header>
                        <Dialog.Title>Training Form</Dialog.Title>
                      </Dialog.Header>
                      <Dialog.Body>
                        <TrainingForm />
                      </Dialog.Body>
                      <Dialog.Footer />
                    </Dialog.Content>
                  </Dialog.Positioner>
                </Portal>
              </Dialog.Root>

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
    <Box py={{ base: 16, md: 24 }} bg="gray.50">
        <Container maxW="7xl">
          <VStack spacing={12}>
            {/* Section Header */}
            <VStack spacing={4} textAlign="center">
              <Badge
                bg="blue.100"
                color="blue.700"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
                fontWeight="bold"
              >
                Why Choose Us
              </Badge>
              <Heading
                size="2xl"
                color="gray.900"
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="800"
              >
                Training That Transforms Careers
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="2xl">
                Join thousands of successful graduates who advanced their careers
                through our comprehensive training programs
              </Text>
            </VStack>

            {/* Benefits Grid */}
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={{ base: 6, md: 8 }}
              w="100%"
            >
              {benefits.map((benefit, idx) => (
                <Card.Root
                  key={idx}
                  bg="white"
                  margin="10px"
                  borderRadius="2xl"
                  boxShadow="md"
                  border="1px solid"
                  borderColor="gray.200"
                  overflow="hidden"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-6px)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                    borderColor: "blue.400",
                  }}
                >
                  <Card.Body p={8}>
                    <VStack spacing={4} align="start">
                      <Flex
                        w="60px"
                        
                        h="60px"
                        bg="blue.50"
                        borderRadius="xl"
                        align="center"
                        justify="center"
                      >
                        <Icon as={benefit.icon} boxSize={7} color="blue.500" />
                      </Flex>
                      <Heading
                        size="md"
                        color="gray.900"
                        fontSize={{ base: "lg", md: "xl" }}
                      >
                        {benefit.title}
                      </Heading>
                      <Text fontSize="md" color="gray.600" lineHeight="1.7">
                        {benefit.description}
                      </Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
       <Box py={{ base: 12, md: 16 }} bg="white">
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 6, md: 10 }}>
            {stats.map((stat, idx) => (
              <VStack
                key={idx}
                spacing={3}
                margin="10px"
                p={6}
                borderRadius="xl"
                bg="gray.50"
                border="1px solid"
                borderColor="gray.100"
                transition="all 0.3s ease"
                _hover={{
                  bg: "blue.50",
                  borderColor: "blue.200",
                  transform: "translateY(-4px)",
                }}
              >
                <Icon as={stat.icon} boxSize={8} color="blue.500" />
                <Heading size="2xl" color="gray.900" fontSize={{ base: "2xl", md: "3xl" }}>
                  {stat.number}
                </Heading>
                <Text fontSize="sm" color="gray.600" textAlign="center">
                  {stat.label}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

<Box py={{ base: 16, md: 24 }} bg="white">
  <Container maxW="7xl">
    <VStack spacing={16}>
      {/* Section Header */}
      <VStack spacing={4} textAlign="center">
        <Badge
          bg="blue.100"
          color="blue.700"
          px={4}
          py={2}
          borderRadius="full"
          fontSize="sm"
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          Our Programs
        </Badge>
        <Heading
          size="2xl"
          color="gray.900"
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="800"
          letterSpacing="-0.5px"
        >
          Explore Our Training Programs
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="2xl">
          Industry-relevant courses designed to make you job-ready
        </Text>
      </VStack>

      {/* Programs - Alternating Layout */}
      <VStack spacing={20} w="100%">
        {trainingPrograms.map((program, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <Grid
              key={program.id}
              templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
              gap={{ base: 10, lg: 16 }}
              alignItems="center"
              w="100%"
            >
              {/* Content Section */}
              <VStack
                spacing={6}
                paddingTop={10}
                align="start"
                  
                order={{ base: 1, lg: isEven ? 1 : 2 }}
              >
                {/* Category Badge */}
              

                {/* Title */}
                <Heading
                  size="2xl"
                  color="gray.900"
                  fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                  fontWeight="800"
                  lineHeight="1.2"
                  letterSpacing="-0.5px"
                >
                  {program.title}
                </Heading>

                {/* Description */}
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="gray.600"
                  lineHeight="1.8"
                >
                  {program.description}
                </Text>

                {/* Meta Info Cards */}
                <SimpleGrid columns={3} spacing={4} w="100%" >
                  <Box
                    bg="gray.50"
                    p={4}
                    mr={2}
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="gray.200"
                    textAlign="center"
                  >
                    <Icon as={Clock} boxSize={6} color={`${program.color}.500`} mb={2} />
                    <Text fontSize="xs" color="gray.500" mb={1}>
                      Duration
                    </Text>
                    <Text fontSize="sm" fontWeight="700" color="gray.900">
                      {program.duration}
                    </Text>
                  </Box>

                  <Box
                    bg="gray.50"
                    p={4}
                     mr={2}
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="gray.200"
                    textAlign="center"
                  >
                    <Icon as={Users} boxSize={6} color={`${program.color}.500`} mb={2} />
                    <Text fontSize="xs" color="gray.500" mb={1}>
                      Enrolled
                    </Text>
                    <Text fontSize="sm" fontWeight="700" color="gray.900">
                      {program.students}
                    </Text>
                  </Box>

                  <Box
                    bg="gray.50"
                    p={4}
                    mr={2}
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="gray.200"
                    textAlign="center"
                  >
                    <Icon as={Target} boxSize={6} color={`${program.color}.500`} mb={2} />
                    <Text fontSize="xs" color="gray.500" mb={1}>
                      Level
                    </Text>
                    <Text fontSize="sm" fontWeight="700" color="gray.900" noOfLines={1}>
                      {program.level}
                    </Text>
                  </Box>
                </SimpleGrid>

                {/* Topics Section */}
                <Box w="100%">
                  <Flex align="center" justify="space-between" mb={4}>
                    <Text
                      fontSize="sm"
                      color="gray.900"
                      fontWeight="700"
                      textTransform="uppercase"
                      letterSpacing="wide"
                    >
                      What You'll Learn
                    </Text>
                    <Badge
                      bg={`${program.color}.100`}
                      color={`${program.color}.700`}
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                      fontWeight="700"
                    >
                      {program.topics.length} Topics
                    </Badge>
                  </Flex>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
                    {program.topics.map((topic, idx) => (
                      <HStack
                        key={idx}
                        spacing={3}
                        bg="white"
                        p={3}
                        borderRadius="lg"
                        border="1px solid"
                        borderColor="gray.200"
                        transition="all 0.3s ease"
                        _hover={{
                          borderColor: `${program.color}.300`,
                          bg: `${program.color}.50`,
                          transform: "translateX(4px)",
                        }}
                      >
                        <Flex
                          w="24px"
                          h="24px"
                          bg={`${program.color}.100`}
                          borderRadius="md"
                          align="center"
                          justify="center"
                          flexShrink={0}
                        >
                          <Icon
                            as={CheckCircle}
                            color={`${program.color}.600`}
                            boxSize={4}
                          />
                        </Flex>
                        <Text fontSize="sm" color="gray.700" fontWeight="500" lineHeight="1.5">
                          {topic}
                        </Text>
                      </HStack>
                    ))}
                  </SimpleGrid>
                </Box>

                {/* CTA Buttons */}
                <Stack direction={{ base: "column", sm: "row" }} spacing={4} pt={2} w="100%">
                 <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Button
                      size="lg"
                      bg={`${program.color}.500`}
                      color="white"
                      px={8}
                      py={6}
                      fontSize="md"
                      fontWeight="700"
                      rightIcon={<Icon as={ArrowRight} boxSize={5} />}
                      _hover={{
                        bg: `${program.color}.600`,
                        transform: "translateY(-2px)",
                        boxShadow: `0 10px 25px rgba(0, 0, 0, 0.15)`,
                      }}
                      transition="all 0.3s ease"
                  >
                    Enroll Now <ArrowRight size={18} />
                  </Button>
                </Dialog.Trigger>
                <Portal>
                  <Dialog.Backdrop />
                  <Dialog.Positioner>
                    <Dialog.Content>
                      <Dialog.CloseTrigger asChild>
                        <CloseButton />
                      </Dialog.CloseTrigger>
                      <Dialog.Header>
                        <Dialog.Title>Training Form</Dialog.Title>
                      </Dialog.Header>
                      <Dialog.Body>
                        <TrainingForm />
                      </Dialog.Body>
                      <Dialog.Footer />
                    </Dialog.Content>
                  </Dialog.Positioner>
                </Portal>
              </Dialog.Root>

                  <Link to="/contact" style={{ flex: 1 }}>
                    <Button
                      w="100%"
                      size="lg"
                      variant="outline"
                      color={`${program.color}.600`}
                      borderColor={`${program.color}.300`}
                      px={8}
                      py={6}
                      fontSize="md"
                      fontWeight="700"
                      rightIcon={<Icon as={Calendar} boxSize={5} />}
                      _hover={{
                        bg: `${program.color}.50`,
                        borderColor: `${program.color}.500`,
                      }}
                    >
                      View Schedule
                    </Button>
                  </Link>
                </Stack>
              </VStack>

              {/* Image Section */}
              <Box
                order={{ base: 2, lg: isEven ? 2 : 1 }}
                position="relative"
              >
                {/* Main Image Card */}
                <Box
                  borderRadius="3xl"
                  overflow="hidden"
                  boxShadow="2xl"
                  position="relative"
                  transition="all 0.4s ease"
                  _hover={{
                    transform: "scale(1.02)",
                    boxShadow: "0 30px 60px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Image
                    src={program.image}
                    alt={program.title}
                    w="100%"
                    h={{ base: "350px", md: "450px", lg: "500px" }}
                    objectFit="cover"
                  />

                  {/* Gradient Overlay */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bgGradient={`linear(to-br, ${program.color}.500, transparent, ${program.color}.600)`}
                    opacity={0.15}
                    mixBlendMode="multiply"
                  />

                  {/* Decorative Element - Top Corner */}
                  <Box
                    position="absolute"
                    top={-20}
                    right={-20}
                    w="150px"
                    h="150px"
                    borderRadius="full"
                    bg={`${program.color}.400`}
                    opacity={0.2}
                    filter="blur(40px)"
                  />
                </Box>

                {/* Floating Stats Card */}
                <Box
                  position="absolute"
                  bottom={{ base: -8, md: -12 }}
                  left={{ base: 4, md: 8 }}
                  right={{ base: 4, md: 8 }}
                  bg="white"
                  borderRadius="2xl"
                  boxShadow="2xl"
                  p={{ base: 4, md: 6 }}
                  border="1px solid"
                  borderColor="gray.200"
                  backdropFilter="blur(10px)"
                >
                  <SimpleGrid columns={3} spacing={4}>
                    <VStack spacing={1}>
                      <Flex
                        w="40px"
                        h="40px"
                        bg={`${program.color}.100`}
                        borderRadius="lg"
                        align="center"
                        justify="center"
                      >
                        <Icon as={BookOpen} color={`${program.color}.600`} boxSize={5} />
                      </Flex>
                      <Text fontSize="xs" color="gray.500" textAlign="center">
                        Live Projects
                      </Text>
                    </VStack>

                    <VStack spacing={1}>
                      <Flex
                        w="40px"
                        h="40px"
                        bg={`${program.color}.100`}
                        borderRadius="lg"
                        align="center"
                        justify="center"
                      >
                        <Icon as={Award} color={`${program.color}.600`} boxSize={5} />
                      </Flex>
                      <Text fontSize="xs" color="gray.500" textAlign="center">
                        Certificate
                      </Text>
                    </VStack>

                    <VStack spacing={1}>
                      <Flex
                        w="40px"
                        h="40px"
                        bg={`${program.color}.100`}
                        borderRadius="lg"
                        align="center"
                        justify="center"
                      >
                        <Icon as={Briefcase} color={`${program.color}.600`} boxSize={5} />
                      </Flex>
                      <Text fontSize="xs" color="gray.500" textAlign="center">
                        Placement
                      </Text>
                    </VStack>
                  </SimpleGrid>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </VStack>
    </VStack>
  </Container>
</Box>

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
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Button
                    size="lg"
                    bg="#0951d8"
                    color="white"
                    _hover={{ bg: "#073fa6" }}
                  >
                    Enroll Now <ArrowRight size={18} />
                  </Button>
                </Dialog.Trigger>
                <Portal>
                  <Dialog.Backdrop />
                  <Dialog.Positioner>
                    <Dialog.Content>
                      <Dialog.CloseTrigger asChild>
                        <CloseButton />
                      </Dialog.CloseTrigger>
                      <Dialog.Header>
                        <Dialog.Title>Training Form</Dialog.Title>
                      </Dialog.Header>
                      <Dialog.Body>
                        <TrainingForm />
                      </Dialog.Body>
                      <Dialog.Footer />
                    </Dialog.Content>
                  </Dialog.Positioner>
                </Portal>
              </Dialog.Root>
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

function TrainingForm() {
  const courses = createListCollection({
    items: [
      { label: "Java Development", value: "javadevelopment" },
      { label: "PHP Development", value: "phpdevelopment" },
      { label: "React Development", value: "reactdevelopment" },
      { label: "DevOps", value: "devops" },
      { label: "AI Automation", value: "aiautomation" },
      { label: "AI & ML", value: "aiml" },
    ],
  });

  const cities = createListCollection({
    items: [
      { label: "Agra", value: "agra" },
      { label: "Ahmedabad", value: "ahmedabad" },
      { label: "Ajmer", value: "ajmer" },
      { label: "Akola", value: "akola" },
      { label: "Aligarh", value: "aligarh" },
      { label: "Amravati", value: "amravati" },
      { label: "Amritsar", value: "amritsar" },
      { label: "Ankola", value: "ankola" },
      { label: "Aurangabad", value: "aurangabad" },

      { label: "Bagalkot", value: "bagalkot" },
      { label: "Ballari", value: "ballari" },
      { label: "Bareilly", value: "bareilly" },
      { label: "Belagavi", value: "belagavi" },
      { label: "Beed", value: "beed" },
      { label: "Bengaluru", value: "bengaluru" },
      { label: "Bhandara", value: "bhandara" },
      { label: "Bhilai", value: "bhilai" },
      { label: "Bhopal", value: "bhopal" },
      { label: "Bhubaneswar", value: "bhubaneswar" },
      { label: "Bidar", value: "bidar" },
      { label: "Bilaspur", value: "bilaspur" },
      { label: "Buldhana", value: "buldhana" },

      { label: "Chamarajanagar", value: "chamarajanagar" },
      { label: "Chandigarh", value: "chandigarh" },
      { label: "Chandrapur", value: "chandrapur" },
      { label: "Chennai", value: "chennai" },
      { label: "Chikkamagaluru", value: "chikkamagaluru" },
      { label: "Chitradurga", value: "chitradurga" },
      { label: "Coimbatore", value: "coimbatore" },
      { label: "Cuttack", value: "cuttack" },

      { label: "Davangere", value: "davangere" },
      { label: "Dehradun", value: "dehradun" },
      { label: "Delhi", value: "delhi" },
      { label: "Dharwad", value: "dharwad" },
      { label: "Durg", value: "durg" },

      { label: "Faridabad", value: "faridabad" },

      { label: "Ghaziabad", value: "ghaziabad" },
      { label: "Gondia", value: "gondia" },
      { label: "Gurgaon", value: "gurgaon" },
      { label: "Guwahati", value: "guwahati" },
      { label: "Gwalior", value: "gwalior" },

      { label: "Haridwar", value: "haridwar" },
      { label: "Hassan", value: "hassan" },
      { label: "Hingoli", value: "hingoli" },
      { label: "Hubballi", value: "hubballi" },
      { label: "Hyderabad", value: "hyderabad" },

      { label: "Indore", value: "indore" },

      { label: "Jabalpur", value: "jabalpur" },
      { label: "Jaipur", value: "jaipur" },
      { label: "Jalandhar", value: "jalandhar" },
      { label: "Jalgaon", value: "jalgaon" },
      { label: "Jodhpur", value: "jodhpur" },

      { label: "Kalaburagi", value: "kalaburagi" },
      { label: "Kanpur", value: "kanpur" },
      { label: "Karwar", value: "karwar" },
      { label: "Kochi", value: "kochi" },
      { label: "Kolar", value: "kolar" },
      { label: "Kolkata", value: "kolkata" },
      { label: "Kolhapur", value: "kolhapur" },
      { label: "Koppal", value: "koppal" },
      { label: "Kota", value: "kota" },

      { label: "Latur", value: "latur" },
      { label: "Lucknow", value: "lucknow" },
      { label: "Ludhiana", value: "ludhiana" },

      { label: "Madurai", value: "madurai" },
      { label: "Mangaluru", value: "mangaluru" },
      { label: "Margao", value: "margao" },
      { label: "Meerut", value: "meerut" },
      { label: "Moradabad", value: "moradabad" },
      { label: "Mumbai", value: "mumbai" },
      { label: "Mysuru", value: "mysuru" },

      { label: "Nagpur", value: "nagpur" },
      { label: "Nanded", value: "nanded" },
      { label: "Nashik", value: "nashik" },
      { label: "Noida", value: "noida" },

      { label: "Osmanabad", value: "osmanabad" },

      { label: "Panaji", value: "panaji" },
      { label: "Parbhani", value: "parbhani" },
      { label: "Patna", value: "patna" },
      { label: "Prayagraj", value: "prayagraj" },
      { label: "Pune", value: "pune" },

      { label: "Raichur", value: "raichur" },
      { label: "Raipur", value: "raipur" },
      { label: "Ramanagara", value: "ramanagara" },
      { label: "Ranchi", value: "ranchi" },
      { label: "Ratnagiri", value: "ratnagiri" },
      { label: "Rishikesh", value: "rishikesh" },
      { label: "Roorkee", value: "roorkee" },

      { label: "Saharanpur", value: "saharanpur" },
      { label: "Sangli", value: "sangli" },
      { label: "Satara", value: "satara" },
      { label: "Shimla", value: "shimla" },
      { label: "Shivamogga", value: "shivamogga" },
      { label: "Sirsi", value: "sirsi" },
      { label: "Solapur", value: "solapur" },
      { label: "Sindhudurg", value: "sindhudurg" },

      { label: "Trivandrum", value: "trivandrum" },
      { label: "Tumakuru", value: "tumakuru" },

      { label: "Udaipur", value: "udaipur" },
      { label: "Udupi", value: "udupi" },

      { label: "Varanasi", value: "varanasi" },
      { label: "Vasco da Gama", value: "vascodagama" },
      { label: "Vijayawada", value: "vijayawada" },
      { label: "Visakhapatnam", value: "visakhapatnam" },

      { label: "Wardha", value: "wardha" },
      { label: "Washim", value: "washim" },
      { label: "Yadgir", value: "yadgir" },
      { label: "Yavatmal", value: "yavatmal" },
    ],
  });

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    course: [],
    city: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Data:", formData);

    setFormData({
      fullname: "",
      email: "",
      mobile: "",
      course: [],
      city: [],
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Fieldset.Root as="form" size="lg" maxW="md">
          <Fieldset.Content>
            <Field.Root>
              <Field.Label>Full Name</Field.Label>
              <Input
                name="fullname"
                type="name"
                value={formData.fullname}
                onChange={handleChange}
              />
            </Field.Root>

            <Field.Root>
              <Field.Label>Email address</Field.Label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Field.Root>

            <Field.Root>
              <Field.Label>Mobile No.</Field.Label>
              <Input
                name="mobile"
                type="number"
                value={formData.mobile}
                onChange={handleChange}
              />
            </Field.Root>

            <Field.Root>
              <Select.Root
                collection={courses}
                value={formData.course}
                onValueChange={(val) =>
                  setFormData((prev) => ({ ...prev, course: val.value }))
                }
              >
                <Select.HiddenSelect />
                <Select.Label>Select Course</Select.Label>
                <Select.Control>
                  <Select.Trigger
                    borderColor="colorPalette.muted"
                    bg="colorPalette.subtle"
                    color="colorPalette.fg"
                  >
                    <Select.ValueText placeholder="Select framework" />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator color="colorPalette.fg" />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                  <Select.Positioner>
                    <Select.Content>
                      {courses.items.map((course) => (
                        <Select.Item item={course} key={course.value}>
                          {course.label}
                          <Select.ItemIndicator />
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select.Root>
            </Field.Root>

            <Field.Root>
              <Select.Root
                collection={cities}
                value={formData.city}
                onValueChange={(val) =>
                  setFormData((prev) => ({ ...prev, city: val.value }))
                }
              >
                <Select.HiddenSelect />
                <Select.Label>Select City</Select.Label>
                <Select.Control>
                  <Select.Trigger
                    borderColor="colorPalette.muted"
                    bg="colorPalette.subtle"
                    color="colorPalette.fg"
                  >
                    <Select.ValueText placeholder="Select City" />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator color="colorPalette.fg" />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                  <Select.Positioner>
                    <Select.Content>
                      {cities.items.map((city) => (
                        <Select.Item item={city} key={city.value}>
                          {city.label}
                          <Select.ItemIndicator />
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select.Root>
            </Field.Root>
          </Fieldset.Content>

          <Button type="submit" alignSelf="flex-start">
            Submit
          </Button>
        </Fieldset.Root>
      </form>
    </>
  );
}


export default Training;