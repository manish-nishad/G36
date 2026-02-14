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
  CloseButton,
  Field,
  Fieldset,
  Input,
  Select,
  createListCollection,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { trainingImages, servicesImages } from "../mockData";
import Seo from "../seo/Seo";
import Lottie from "lottie-react";
import TrainingLottie from "../assets/lottie/Training.json";

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
        title="Training | Genius36 Technologies"
        description="Professional IT & AI training programs including Java, PHP, React, DevOps, AI Automation, and Machine Learning. Industry-ready training with hands-on projects."
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

      {/* TRAINING OVERVIEW SECTION */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="7xl">
          <VStack spacing={8} textAlign="center">
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
              gap={5}
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
            <Heading
              color="black"
              size="2xl"
              fontSize={{ base: "xl", md: "2xl" }}
            >
              Ready to Start Your Training Journey?
            </Heading>
            <Text
              color="gray.900"
              fontSize={{ base: "md", md: "lg" }}
              maxW="2xl"
            >
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
