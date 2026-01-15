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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { aboutImages, jobOpenings } from "../mockData";
import Seo from "../seo/Seo";

// Import Flaticons
import locationIcon from "../assets/flaticons/location.gif";
import phoneIcon from "../assets/flaticons/phone-contact.gif";
import emailIcon from "../assets/flaticons/email.gif";
import clockIcon from "../assets/flaticons/clock.gif";
import Lottie from "lottie-react";
import Welcome from "../assets/lottie/Welcome.json";

const Career = () => {
  // Why Work With Us - matching About page structure
  const whyWorkWithUs = [
    {
      title: "Growth Opportunities",
      description:
        "Continuous learning and professional development opportunities with access to latest technologies and training programs.",
      icon: clockIcon,
    },
    {
      title: "Innovative Projects",
      description:
        "Work on cutting-edge projects across diverse industries, from web development to cloud infrastructure and AI solutions.",
      icon: emailIcon,
    },
    {
      title: "Collaborative Culture",
      description:
        "Join a supportive team environment where your ideas matter and collaboration drives innovation and success.",
      icon: locationIcon,
    },
    {
      title: "Work-Life Balance",
      description:
        "We believe in maintaining a healthy work-life balance with flexible schedules and employee wellness programs.",
      icon: phoneIcon,
    },
  ];

  // Culture & Values - matching About page values structure
  const cultureValues = [
    {
      title: "Innovation",
      description:
        "We encourage creative thinking and embrace new technologies to solve complex challenges.",
      icon: emailIcon,
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, setting high standards and delivering quality results.",
      icon: clockIcon,
    },
    {
      title: "Teamwork",
      description:
        "Collaboration is at the heart of our success. We work together to achieve common goals.",
      icon: locationIcon,
    },
    {
      title: "Growth",
      description:
        "We invest in our employees' growth through training, mentorship, and career development opportunities.",
      icon: phoneIcon,
    },
  ];

  // Benefits list
  const benefits = [
    "Competitive salary packages",
    "Health insurance coverage",
    "Flexible working hours",
    "Professional development and training",
    "Performance-based bonuses",
    "Paid time off and holidays",
    "Modern work environment",
    "Career advancement opportunities",
    "Team building activities",
    "Employee recognition programs",
  ];

  return (
    <>
      <Seo
        title="Careers | Genius36 Technologies"
        description="Join Genius36 Technologies and build your career with us. Explore exciting job opportunities in IT, development, design, and more."
      />

      {/* HERO SECTION - Matching About page style */}
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
                Join Our{" "}
                <Box as="span" color="#0951d8">
                  Team
                </Box>
              </Heading>

              <Text
                fontSize={{ base: "md", md: "lg" }}
                maxW="3xl"
                color="whiteAlpha.900"
              >
                Build your career with Genius36 Technologies. We're looking for
                talented individuals who are passionate about technology and
                innovation.
              </Text>

              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="whiteAlpha.700"
                maxW="2xl"
              >
                Explore exciting opportunities in software development, IT
                infrastructure, design, and training.
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
                  Apply Now <ArrowRight size={18} />
                </Button>
              </Link>

              <Link to="#openings">
                <Button
                  w="100%"
                  size="lg"
                  variant="outline"
                  color="white"
                  borderColor="whiteAlpha.500"
                  _hover={{ bg: "whiteAlpha.200" }}
                >
                  View Openings
                </Button>
              </Link>
            </Stack>
          </VStack>
        </Container>
      </Box>

      {/* WHY WORK WITH US SECTION - Matching About page "Why Choose Us" structure */}
      <Box py={{ base: 12, md: 20 }} bg="gray.50">
        <Container maxW="7xl">
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading
                size="2xl"
                mb={4}
                color="gray.900"
                fontSize={{ base: "xl", md: "2xl" }}
              >
                Why Work With Us?
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.800"
                maxW="3xl"
                mx="auto"
              >
                What makes Genius36 Technologies a great place to work
              </Text>
            </Box>

            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 4 }}
              spacing={{ base: 6, md: 8 }}
              gap={10}
            >
              {whyWorkWithUs.map((item, i) => (
                <Card.Root
                  key={i}
                  bg="white"
                  p={6}
                  borderRadius="xl"
                  h="full"
                  boxShadow="md"
                >
                  <Card.Body>
                    <VStack spacing={4} align="start">
                      <Box
                        w={{ base: 16, md: 20 }}
                        h={{ base: 16, md: 20 }}
                        bgGradient="linear(to-br, blue.500, blue.700)"
                        borderRadius="lg"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        p={2}
                      >
                        <Image
                          src={item.icon}
                          alt={item.title}
                          w="100%"
                          h="100%"
                          objectFit="contain"
                        />
                      </Box>
                      <Heading
                        size="md"
                        color="gray.900"
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        {item.title}
                      </Heading>
                      <Text
                        fontSize={{ base: "xs", md: "sm" }}
                        color="gray.800"
                        lineHeight="1.7"
                      >
                        {item.description}
                      </Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CAREER OPPORTUNITIES / OPEN ROLES SECTION */}
      <Box py={{ base: 12, md: 20 }} bg="white" id="openings">
        <Container maxW="7xl">
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading
                size="2xl"
                mb={4}
                color="gray.900"
                fontSize={{ base: "xl", md: "2xl" }}
              >
                Open Positions
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.800"
                maxW="3xl"
                mx="auto"
              >
                Explore current job openings and find the perfect role for you
              </Text>
            </Box>

            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={{ base: 6, md: 8 }}
              w="full"
              gap={6}
            >
              {jobOpenings.map((job) => (
                <Card.Root
                  key={job.id}
                  bg="gray.50"
                  p={{ base: 6, md: 8 }}
                  borderRadius="xl"
                  boxShadow="sm"
                  h="full"
                >
                  <Card.Body>
                    <VStack spacing={4} align="start">
                      <VStack spacing={2} align="start" w="100%">
                        <Heading
                          size="lg"
                          color="gray.900"
                          fontSize={{ base: "md", md: "lg" }}
                        >
                          {job.title}
                        </Heading>
                        <HStack spacing={4} flexWrap="wrap">
                          <Text
                            fontSize={{ base: "xs", md: "sm" }}
                            color="gray.600"
                          >
                            {job.department}
                          </Text>
                          <Text
                            fontSize={{ base: "xs", md: "sm" }}
                            color="gray.600"
                          >
                            {job.location}
                          </Text>
                          <Text
                            fontSize={{ base: "xs", md: "sm" }}
                            color="gray.600"
                          >
                            {job.type}
                          </Text>
                        </HStack>
                        <Text
                          fontSize={{ base: "xs", md: "sm" }}
                          color="gray.500"
                        >
                          Experience: {job.experience}
                        </Text>
                      </VStack>

                      <Text
                        fontSize={{ base: "sm", md: "md" }}
                        color="gray.800"
                        lineHeight="1.7"
                      >
                        {job.description}
                      </Text>

                      <Box w="100%">
                        <Text
                          fontSize={{ base: "xs", md: "sm" }}
                          color="gray.700"
                          fontWeight="600"
                          mb={2}
                        >
                          Key Requirements:
                        </Text>
                        <VStack align="start" spacing={1}>
                          {job.requirements.slice(0, 3).map((req, idx) => (
                            <HStack key={idx} spacing={2}>
                              <Box
                                w="4px"
                                h="4px"
                                borderRadius="full"
                                bg="blue.500"
                              />
                              <Text
                                fontSize={{ base: "xs", md: "sm" }}
                                color="gray.700"
                              >
                                {req}
                              </Text>
                            </HStack>
                          ))}
                        </VStack>
                      </Box>

                      <Link to="/contact" style={{ width: "100%" }}>
                        <Button
                          w="100%"
                          size={{ base: "sm", md: "md" }}
                          bg="#0951d8"
                          color="white"
                          _hover={{ bg: "#073fa6" }}
                        >
                          Apply Now <ArrowRight size={16} />
                        </Button>
                      </Link>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CULTURE & VALUES SECTION - Matching About page structure */}
      <Box py={{ base: 12, md: 20 }} bg="gray.50">
        <Container maxW="7xl">
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, lg: 12 }}
            alignItems="start"
          >
            <VStack spacing={6} align="start" w="100%">
              <Heading
                size="2xl"
                color="gray.900"
                fontSize={{ base: "2xl", md: "3xl" }}
              >
                Our Culture & Values
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.900"
                lineHeight="1.8"
                textAlign="justify"
                padding={4}
              >
                At Genius36 Technologies, we foster a culture of innovation,
                collaboration, and continuous learning. Our values guide
                everything we do, from how we work with clients to how we
                support our team members.
              </Text>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.900"
                lineHeight="1.8"
                textAlign="left"
                padding={2}
              >
                We believe in empowering our employees to grow professionally
                and personally. Our inclusive environment encourages diverse
                perspectives and creative problem-solving, making Genius36 a
                place where you can thrive and make a real impact.
              </Text>
            </VStack>
            <Box w="100%">
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="100%">
                {cultureValues.map((value, i) => (
                  <Card.Root
                    key={i}
                    bg="white"
                    p={6}
                    borderRadius="xl"
                    boxShadow="sm"
                    h="full"
                  >
                    <Card.Body>
                      <VStack spacing={3} align="start">
                        <Box
                          w={{ base: 14, md: 16 }}
                          h={{ base: 14, md: 16 }}
                          bgGradient="linear(to-br, blue.500, blue.700)"
                          borderRadius="xl"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          p={2}
                        >
                          <Image
                            src={value.icon}
                            alt={value.title}
                            w="100%"
                            h="100%"
                            objectFit="contain"
                          />
                        </Box>
                        <Heading
                          size="md"
                          color="gray.900"
                          fontSize={{ base: "sm", md: "md" }}
                        >
                          {value.title}
                        </Heading>
                        <Text
                          fontSize={{ base: "xs", md: "sm" }}
                          color="gray.800"
                          lineHeight="1.7"
                        >
                          {value.description}
                        </Text>
                      </VStack>
                    </Card.Body>
                  </Card.Root>
                ))}
              </SimpleGrid>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* GROWTH & BENEFITS SECTION */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="7xl">
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, lg: 12 }}
            alignItems="start"
          >
            <Box w="100%">
              <Box
                borderTopLeftRadius="2xl"
                borderBottomLeftRadius="2xl"
                overflow="hidden"
                boxShadow="2xl"
                position="relative"
              >
                <Image
                  src={aboutImages.teamCollaboration}
                  alt="Team Benefits"
                  w="100%"
                  h="auto"
                  // objectFit="cover"
                />
              </Box>
            </Box>
            <VStack spacing={6} align="start" w="100%" padding={4}>
              <Heading
                size="2xl"
                color="gray.900"
                fontSize={{ base: "2xl", md: "3xl" }}
              >
                Growth & Benefits
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.900"
                lineHeight="1.8"
              >
                We offer comprehensive benefits and growth opportunities to help
                you succeed in your career:
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} w="100%">
                {benefits.map((benefit, idx) => (
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
                      {benefit}
                    </Text>
                  </HStack>
                ))}
              </SimpleGrid>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CALL-TO-ACTION SECTION - Matching About page CTA */}
      <Box
        py={{ base: 12, md: 20 }}
        bgGradient="linear(to-br, blue.900, blue.800, gray.900)"
      >
        <Container maxW="7xl">
          <VStack spacing={8} textAlign="center">
            <Heading color="black" size="2xl" fontSize={{ base: "xl", md: "2xl" }}>
              Ready to Start Your Career Journey?
            </Heading>
            <Text color="gray.900" fontSize={{ base: "md", md: "lg" }} maxW="2xl">
              Join Genius36 Technologies and be part of a team that's shaping
              the future of technology. Explore our open positions or reach out to
              learn more about career opportunities.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
              <Link to="/contact">
                <Button bg="#0951d8" color="white" size={{ base: "md", md: "lg" }}>
                  Apply Now <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="#openings">
                <Button
                  variant="outline"
                  colorScheme="whiteAlpha"
                  color="Black"
                  size={{ base: "md", md: "lg" }}
                >
                  View All Openings
                </Button>
              </Link>
            </Stack>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default Career;
