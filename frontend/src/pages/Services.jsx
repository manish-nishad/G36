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
import { services, servicesImages, aboutImages } from "../mockData";
import { servicePages } from "../data/servicePagesContent";
import Seo from "../seo/Seo";
import Lottie from "lottie-react";
import Welcome from "../assets/lottie/Welcome.json";
// Import Lottie animations matching Index page
import WebDevelopment from "../assets/lottie/WEBSITE DEVELOPMENT.json";
import SoftwareDevelopment from "../assets/lottie/SOFTWARE DEVELOPMENT.json";
import ItConsultation from "../assets/lottie/IT CONSULTATION & DIGITAL TRANSFORMATION.json";
import Cloud from "../assets/lottie/CLOUD SOLUTION AND SERVER SETUP.json";
import ItTraining from "../assets/lottie/IT TRAINING.json";
import ComputerHardware from "../assets/lottie/COMPUTER HARDWARE.json";

// Import Flaticons
import locationIcon from "../assets/flaticons/location.gif";
import phoneIcon from "../assets/flaticons/phone-contact.gif";
import emailIcon from "../assets/flaticons/email.gif";
import clockIcon from "../assets/flaticons/clock.gif";

const Services = () => {
  // Lottie animations mapping - matching Index page
  const serviceLotties = {
    WebDevelopment: WebDevelopment,
    SoftwareDevelopment: SoftwareDevelopment,
    ItConsultation: ItConsultation,
    ItTraining: ItTraining,
    Cloud: Cloud,
    ComputerHardware: ComputerHardware,
  };

  // Process steps for "How We Work" section
  const processSteps = [
    {
      step: 1,
      title: "Consultation",
      description:
        "We begin with a detailed consultation to understand your business needs, goals, and challenges.",
      icon: phoneIcon,
    },
    {
      step: 2,
      title: "Planning",
      description:
        "Our team creates a comprehensive plan tailored to your requirements with clear timelines and milestones.",
      icon: emailIcon,
    },
    {
      step: 3,
      title: "Implementation",
      description:
        "We execute the plan with precision, keeping you informed at every step of the development process.",
      icon: clockIcon,
    },
    {
      step: 4,
      title: "Support",
      description:
        "Ongoing support and maintenance ensure your solutions continue to perform optimally over time.",
      icon: locationIcon,
    },
  ];

  return (
    <>
      <Seo
        title="Services | Genius36 Technologies"
        description="Comprehensive IT services including web development, software solutions, IT infrastructure, training, and more. Expert technology solutions across India."
      />

      {/* HERO SECTION - Matching About/Career page style */}
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
                Our{" "}
                <Box as="span" color="#0951d8">
                  Services
                </Box>
              </Heading>

              <Text
                fontSize={{ base: "md", md: "lg" }}
                maxW="3xl"
                color="whiteAlpha.900"
              >
                Comprehensive IT solutions tailored to your business needs. From
                web development to IT infrastructure, we deliver excellence
                across all technology domains.
              </Text>

              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="whiteAlpha.700"
                maxW="2xl"
              >
                Empowering businesses with innovative technology solutions since
                2014.
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
                  Get Started <ArrowRight size={18} />
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

      {/* OUR SERVICES — each card links to its individual service page */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="7xl">
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading
                size="2xl"
                mb={4}
                color="gray.900"
                fontSize={{ base: "xl", md: "2xl" }}
              >
                Our Services
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.800"
                maxW="3xl"
                mx="auto"
              >
                Explore our comprehensive range of IT services. Click any card to
                view details and get started.
              </Text>
            </Box>

            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={{ base: 6, md: 8 }}
              gap={10}
              w="100%"
            >
              {servicePages.map((sp) => {
                const desc = sp.description.overview;
                const shortDesc = desc.length > 140 ? desc.slice(0, 137) + "..." : desc;
                const lottieAnimation = serviceLotties[sp.lottieKey] || WebDevelopment;
                return (
                  <Link
                    key={sp.slug}
                    to={`/services/${sp.slug}`}
                    _hover={{ textDecoration: "none" }}
                    style={{ height: "100%", textDecoration: "none" }}
                  >
                    <Card.Root
                      bg="gray.50"
                      borderRadius="xl"
                      overflow="hidden"
                      h="full"
                      boxShadow="md"
                      transition="all 0.3s ease"
                      cursor="pointer"
                      _hover={{
                        transform: "translateY(-4px)",
                        boxShadow: "xl",
                        borderColor: "blue.200",
                        borderWidth: "1px",
                      }}
                    >
                      {/* Lottie Animation - Matching Index page */}
                      <Box
                        h="180px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bg="white"
                      >
                        <Lottie
                          animationData={lottieAnimation}
                          loop
                          style={{ width: "100%", height: "100%" }}
                        />
                      </Box>

                      <Card.Body p={6}>
                        <VStack spacing={4} align="start">
                          <Heading
                            size="md"
                            color="gray.900"
                            fontSize={{ base: "sm", md: "md" }}
                          >
                            {sp.name}
                          </Heading>
                          <Text
                            fontSize={{ base: "xs", md: "sm" }}
                            color="gray.800"
                            lineHeight="1.7"
                          >
                            {shortDesc}
                          </Text>
                          <VStack align="start" spacing={2} w="100%" pt={2}>
                            {(sp.keyFeatures || []).slice(0, 3).map((feature, idx) => (
                              <HStack key={idx} spacing={2}>
                                <Icon as={CheckCircle} color="blue.500" boxSize={4} />
                                <Text fontSize={{ base: "xs", md: "sm" }} color="gray.700">
                                  {feature}
                                </Text>
                              </HStack>
                            ))}
                          </VStack>
                          <Text fontSize="sm" color="#0951d8" fontWeight="500" pt={2}>
                            View details →
                          </Text>
                        </VStack>
                      </Card.Body>
                    </Card.Root>
                  </Link>
                );
              })}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* DETAILED SERVICE SECTIONS - Alternating text/image layout */}
      {/* Service 1: Web Development */}
      <Box py={{ base: 12, md: 20 }} bg="gray.50">
        <Container maxW="7xl">
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, lg: 12 }}
            alignItems="center"
          >
            <VStack spacing={6} align="start" w="100%">
              <Heading
                size="2xl"
                color="gray.900"
                fontSize={{ base: "2xl", md: "3xl" }}
              >
                Custom Website Design & Development
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.900"
                lineHeight="1.8"
                textAlign="left"
              >
                We create stunning, responsive websites tailored to your business
                needs using modern technologies and best practices. Our web
                development services ensure your online presence is both
                visually appealing and functionally robust.
              </Text>
              <VStack align="start" spacing={3} w="100%">
                {services[0].features.map((feature, idx) => (
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
                      {feature}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </VStack>
            <Box w="100%" display="flex" alignItems="center">
              <Box
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="2xl"
                position="relative"
                w="100%"
                h={{ base: "300px", md: "400px" }}
              >
                <Image
                  src={servicesImages.development}
                  alt="Web Development"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Service 2: Software Development */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="7xl">
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, lg: 12 }}
            alignItems="center"
          >
            <Box w="100%" order={{ base: 2, lg: 1 }} display="flex" alignItems="center">
              <Box
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="2xl"
                position="relative"
                w="100%"
                h={{ base: "300px", md: "400px" }}
              >
                <Image
                  src={servicesImages.workspace}
                  alt="Software Development"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              </Box>
            </Box>
            <VStack spacing={6} align="start" w="100%" order={{ base: 1, lg: 2 }} p={5}>
              <Heading
                size="2xl"
                color="gray.900"
                fontSize={{ base: "2xl", md: "3xl" }}
              >
                Software Development
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.900"
                lineHeight="1.8"
                textAlign="left"
              >
                Enterprise-grade software solutions for web and mobile platforms
                with scalable architecture. We build custom applications that
                streamline your business processes and drive growth.
              </Text>
              <VStack align="start" spacing={3} w="100%">
                {services[1].features.map((feature, idx) => (
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
                      {feature}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Service 3: IT Infrastructure */}
      <Box py={{ base: 12, md: 20 }} bg="gray.50">
        <Container maxW="7xl">
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, lg: 12 }}
            alignItems="center"
          >
            <VStack spacing={6} align="start" w="100%">
              <Heading
                size="2xl"
                color="gray.900"
                fontSize={{ base: "2xl", md: "3xl" }}
              >
                Networking & IT Infrastructure
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.900"
                lineHeight="1.8"
                textAlign="left"
              >
                Complete networking solutions including LAN/WAN setup, server
                configuration, and infrastructure management. We ensure your IT
                infrastructure is secure, reliable, and optimized for
                performance.
              </Text>
              <VStack align="start" spacing={3} w="100%">
                {services[5].features.map((feature, idx) => (
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
                      {feature}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </VStack>
            <Box w="100%" display="flex" alignItems="center">
              <Box
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="2xl"
                position="relative"
                w="100%"
                h={{ base: "300px", md: "400px" }}
              >
                <Image
                  src={servicesImages.networking}
                  alt="IT Infrastructure"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* PROCESS / HOW WE WORK SECTION */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="7xl">
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading
                size="2xl"
                mb={4}
                color="gray.900"
                fontSize={{ base: "xl", md: "2xl" }}
              >
                How We Work
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.800"
                maxW="3xl"
                mx="auto"
              >
                Our proven process ensures successful project delivery from
                start to finish
              </Text>
            </Box>

            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 4 }}
              spacing={{ base: 6, md: 8 }}
              gap={10}
              w="100%"
            >
              {processSteps.map((step, i) => (
                <VStack
                  key={i}
                  spacing={4}
                  align="start"
                  p={{ base: 4, md: 6 }}
                  bg="gray.50"
                  borderRadius="xl"
                  boxShadow="sm"
                  h="full"
                >
                  <HStack spacing={4} w="100%">
                    <Box
                      w={{ base: 12, md: 14 }}
                      h={{ base: 12, md: 14 }}
                      bgGradient="linear(to-br, blue.500, blue.700)"
                      borderRadius="xl"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                    >
                      <Text
                        color="white"
                        fontWeight="bold"
                        fontSize={{ base: "lg", md: "xl" }}
                      >
                        {step.step}
                      </Text>
                    </Box>
                    <Box
                      w={{ base: 12, md: 14 }}
                      h={{ base: 12, md: 14 }}
                      bgGradient="linear(to-br, blue.500, blue.700)"
                      borderRadius="lg"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      p={2}
                      flexShrink={0}
                    >
                      <Image
                        src={step.icon}
                        alt={step.title}
                        w="100%"
                        h="100%"
                        objectFit="contain"
                      />
                    </Box>
                  </HStack>
                  <Heading
                    size="md"
                    color="gray.900"
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    {step.title}
                  </Heading>
                  <Text
                    fontSize={{ base: "xs", md: "sm" }}
                    color="gray.800"
                    lineHeight="1.7"
                  >
                    {step.description}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
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
              Ready to Transform Your Business?
            </Heading>
            <Text color="gray.900" fontSize={{ base: "md", md: "lg" }} maxW="2xl">
              Let's discuss how Genius36 Technologies can help you achieve your
              technology goals. Get in touch with us today for a free
              consultation.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
              <Link to="/contact">
                <Button bg="#0951d8" color="white" size={{ base: "md", md: "lg" }}>
                  Contact Us <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  colorScheme="whiteAlpha"
                  color="Black"
                  size={{ base: "md", md: "lg" }}
                >
                  Learn More
                </Button>
              </Link>
            </Stack>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default Services;
