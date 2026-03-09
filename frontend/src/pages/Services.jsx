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
  Badge,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle ,Sparkles, Check, MoveRight,CheckCircle2 } from "lucide-react";
import { services, servicesImages, aboutImages, serviceDetailsData } from "../mockData";
import { servicePages } from "../data/servicePagesContent";
import Seo from "../seo/Seo";
import Lottie from "lottie-react";
import ServicesLottie from "../assets/lottie/Services.json";
import { motion } from "framer-motion";
// Import Lottie animations matching Index page
import WebDevelopment from "../assets/lottie/WEBSITE DEVELOPMENT.json";
import SoftwareDevelopment from "../assets/lottie/SOFTWARE DEVELOPMENT.json";
import ItConsultation from "../assets/lottie/IT CONSULTATION & DIGITAL TRANSFORMATION.json";
import Cloud from "../assets/lottie/CLOUD SOLUTION AND SERVER SETUP.json";
import ItTraining from "../assets/lottie/IT TRAINING.json";
import ComputerHardware from "../assets/lottie/COMPUTER HARDWARE.json";
import AIML from "../assets/lottie/Artificial Intelligence Chatbot.json"
import Datarecovery from "../assets/lottie/DATA RECOVERY 2.json";
import DigitalSEO from "../assets/lottie/Digital marketing strategy stickers.json"
import Ecommerce from "../assets/lottie/Ecommerce.json"
import UIUXDesign from "../assets/lottie/UI UX designer.json"

// Import Flaticons
import consultation from "../assets/flaticons/consultation.png";
import planning from "../assets/flaticons/planning.png";
import implementation from "../assets/flaticons/implementation.png";
import support from "../assets/flaticons/customer-service.png";

const handleTiltMove = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 8; // up-down
  const rotateY = ((x - centerX) / centerX) * -8; // left-right

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
};

const handleTiltLeave = (e) => {
  const card = e.currentTarget;
  card.style.transform =
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
};

const Services = () => {
  // Lottie animations mapping - matching Index page
  const serviceLotties = {
    WebDevelopment: WebDevelopment,
    SoftwareDevelopment: SoftwareDevelopment,
    ItConsultation: ItConsultation,
    ItTraining: ItTraining,
    Cloud: Cloud,
    ComputerHardware: ComputerHardware,
    AIML: AIML,
    Datarecovery: Datarecovery,
    DigitalSEO: DigitalSEO,
    Ecommerce: Ecommerce,
    UIUXDesign: UIUXDesign,
  };

  // Process steps for "How We Work" section
  const processSteps = [
    {
      step: 1,
      title: "Consultation",
      description:
        "We begin with a detailed consultation to understand your business needs, goals, and challenges.",
      icon: consultation,
    },
    {
      step: 2,
      title: "Planning",
      description:
        "Our team creates a comprehensive plan tailored to your requirements with clear timelines and milestones.",
      icon: planning,
    },
    {
      step: 3,
      title: "Implementation",
      description:
        "We execute the plan with precision, keeping you informed at every step of the development process.",
      icon: implementation,
    },
    {
      step: 4,
      title: "Support",
      description:
        "Ongoing support and maintenance ensure your solutions continue to perform optimally over time.",
      icon: support,
    },
  ];


   const gradients = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
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
          <VStack spacing={8} textAlign="center" alignItems="center">
            {/* LOTTIE TOP */}
            <Box maxW="450px" mx="auto">
              <Lottie animationData={ServicesLottie} loop autoplay />
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
              justifyContent="center"
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
          <VStack spacing={12} textAlign="center">
            <Box textAlign="center">
              <Heading
                size="2xl"
                mb={4}
                color="gray.900"
                fontSize={{ base: "xl", md: "4xl" }}
              >
                Our Services
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.800"
                maxW="3xl"
                mx="auto"
              >
                Your trusted technology partner across India, delivering world-class IT solutions, bespoke software development, and skill-enhancing training programs designed to accelerate your business growth and digital transformation journey.
              </Text>
            </Box>
            
           <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spacing={{ base: 6, md: 8 }}
      gap={{ base: 6, md: 10 }}
      w="100%"
      padding={5}
    >
      {servicePages.map((sp, index) => {
        const desc = sp.hero.description;
        const shortDesc =
          desc.length > 140 ? desc.slice(0, 137) + "..." : desc;
        const lottieAnimation =
          serviceLotties[sp.lottieKey] || WebDevelopment;
        const gradient = gradients[index % gradients.length];

        return (
          <Link
            key={sp.slug}
            to={`/services/${sp.slug}`}
            _hover={{ textDecoration: "none" }}
            style={{ height: "100%", textDecoration: "none" }}
          >
            <Card.Root
              position="relative"
              bg="white"
              borderRadius="3xl"
              overflow="hidden"
              h="full"
              border="1px solid "
              borderColor="gray.100"
              boxShadow="lg"
              transition="all 0.4s ease"
              cursor="pointer"
              _hover={{
                transform: "translateY(-12px) scale(1.02)",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
              }}
            >
              {/* Gradient Header with Lottie */}
              <Box
                position="relative"
                h="220px"
                bg={gradient}
                display="flex"
                alignItems="center"
                justifyContent="center"
                overflow="hidden"
              >
                {/* Animated Background Elements */}
                <Box
                  position="absolute"
                  top="10%"
                  left="10%"
                  w="60px"
                  h="60px"
                  borderRadius="full"
                  bg="whiteAlpha.200"
                  animation="float 6s ease-in-out infinite"
                />
                <Box
                  position="absolute"
                  bottom="15%"
                  right="15%"
                  w="40px"
                  h="40px"
                  borderRadius="full"
                  bg="whiteAlpha.300"
                  animation="float 4s ease-in-out infinite reverse"
                />

                {/* Service Icon Badge
                <Box
                  position="absolute"
                  top={4}
                  left={4}
                  bg="whiteAlpha.300"
                  backdropFilter="blur(10px)"
                  borderRadius="full"
                  p={2}
                  border="1px solid"
                  borderColor="whiteAlpha.400"
                >
                  <Icon as={Sparkles} color="white" boxSize={5} />
                </Box> */}

                {/* Lottie Animation */}
                <Box
                  bg="whiteAlpha.200"
                  backdropFilter="blur(10px)"
                  borderRadius="2xl"
                  p={4}
                  border="1px solid"
                  borderColor="whiteAlpha.300"
                >
                  <Lottie
                    animationData={lottieAnimation}
                    loop
                    style={{ width: "140px", height: "140px" }}
                  />
                </Box>
              </Box>

              <Card.Body p={{ base: 6, md: 7 }}>
                <VStack spacing={4} align="stretch">
                  {/* Service Title */}
                  <Heading
                    size="lg"
                    color="gray.900"
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="800"
                    letterSpacing="-0.5px"
                    as="h3"
                  >
                    {sp.name}
                  </Heading>

                  {/* Description */}
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    color="gray.600"
                    lineHeight="1.8"
                    as="p"
                  >
                    {shortDesc}
                  </Text>

                  {/* Features with Enhanced Styling */}
                  <Stack spacing={3} pt={2}>
                    {(sp.services || [])
                      .slice(0, 3)
                      .map((feature, idx) => (
                        <HStack
                          key={idx}
                          spacing={2}
                          align="start"
                          bg="gray.50"
                          p={1}
                          borderRadius="lg"
                          transition="all 0.3s ease"
                          _hover={{
                            bg: "blue.50",
                            transform: "translateX(4px)",
                          }}
                        >
                          <Box
                            bg="blue.500"
                            borderRadius="full"
                            p={1}
                            width={8}
                            textAlign="center"
                            flexShrink={0}
                          >
                            <Icon
                              as={CheckCircle}
                              color="white"
                              boxSize={4}
                            />
                          </Box>
                          <Text
                            fontSize={{ base: "sm", md: "sm" }}
                            color="gray.700"
                            fontWeight="500"
                            lineHeight="1.6"
                          >
                            {feature.title}
                          </Text>
                        </HStack>
                      ))}
                  </Stack>

                  {/* Call to Action Button */}
                  <Box
                    mt={4}
                    py={3}
                    px={5}
                    bg={gradient}
                    color="white"
                    textAlign="center"
                    borderRadius="xl"
                    fontWeight="600"
                    fontSize="sm"
                    letterSpacing="0.5px"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: "scale(1.05)",
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    EXPLORE NOW →
                  </Box>
                </VStack>
              </Card.Body>

              {/* Floating Animation CSS */}
              <style jsx>{`
                @keyframes float {
                  0%, 100% {
                    transform: translateY(0);
                  }
                  50% {
                    transform: translateY(-20px);
                  }
                }
              `}</style>
            </Card.Root>
          </Link>
        );
      })}
    </SimpleGrid>
      
          </VStack>
        </Container>
      </Box>
      
      {serviceDetailsData.map((service, index) => (
        <Box
          key={service.id}
          py={{ base: 16, md: 24 }}
          bg={service.bgColor}
          position="relative"
          overflow="hidden"
        >
          {/* Decorative Background Elements */}
          <Box
            position="absolute"
            top="-100px"
            right="-100px"
            w="400px"
            h="400px"
            borderRadius="full"
            bg="blue.50"
            opacity={0.3}
            filter="blur(80px)"
          />

          <Container maxW="7xl">
            <SimpleGrid
              columns={{ base: 1, lg: 2 }}
              spacing={{ base: 10, lg: 16 }}
              alignItems="center"
              direction={service.reversed ? "row-reverse" : "row"}
            >
              {/* Content Section */}
              <VStack
                spacing={6}
                align="start"
                p={4}
                w="100%"
                order={{ base: 1, lg: service.reversed ? 2 : 1 }}
              >
                {/* Service Number Badge */}
                <Badge
                  bg="blue.500"
                  color="white"
                  px={4}
                  py={2}
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="bold"
                >
                  Service {String(index + 1).padStart(2, "0")}
                </Badge>

                {/* Title */}
                <Heading
                  size="2xl"
                  color="gray.900"
                  fontSize={{ base: "2xl", md: "4xl" }}
                  fontWeight="800"
                  lineHeight="1.2"
                  letterSpacing="-0.5px"
                >
                  {service.title}
                </Heading>

                {/* Description */}
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="gray.600"
                  lineHeight="1.8"
                  textAlign="left"
                >
                  {service.description}
                </Text>

                {/* Features Grid */}
                <SimpleGrid
                  columns={{ base: 1, md: 1 }}
                  spacing={4}
                  w="100%"
                  pt={4}
                >
                  {service.features.map((feature, idx) => (
                    <HStack
                      key={idx}
                      spacing={3}
                      align="start"
                      bg="white"
                      p={4}
                      marginBottom={2}
                      borderRadius="lg"
                      boxShadow="sm"
                      transition="all 0.3s ease"
                      _hover={{
                        boxShadow: "md",
                        transform: "translateY(-2px)",
                      }}
                    >
                      <Icon
                        as={CheckCircle2}
                        color="blue.500"
                        boxSize={5}
                        mt="2px"
                        flexShrink={0}
                      />
                      <Text
                        fontSize={{ base: "sm", md: "md" }}
                        color="gray.700"
                        fontWeight="500"
                        lineHeight="1.6"
                      >
                        {feature}
                      </Text>
                    </HStack>
                  ))}
                </SimpleGrid>

                {/* CTA Button */}
                <Button
                  as="a"
                  href={service.ctaLink}
                  size="lg"
                  bg="blue.500"
                  color="white"
                  px={8}
                  py={6}
                  fontSize="md"
                  fontWeight="600"
                  borderRadius="xl"
                  rightIcon={<Icon as={ArrowRight} boxSize={5} />}
                  _hover={{
                    bg: "blue.600",
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 25px rgba(9, 81, 216, 0.3)",
                  }}
                  transition="all 0.3s ease"
                >
                  {service.ctaText}
                </Button>
              </VStack>

              {/* Image Section */}
              <Box
                w="100%"
                order={{ base: 2, lg: service.reversed ? 1 : 2 }}
              >
                <Box
                  borderRadius="3xl"
                  overflow="hidden"
                  boxShadow="2xl"
                  position="relative"
                  w="100%"
                  h={{ base: "350px", md: "500px" }}
                  border="1px solid"
                  borderColor="gray.200"
                  transition="all 0.4s ease"
                  _hover={{
                    transform: "scale(1.02)",
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  {/* Gradient Overlay */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="linear-gradient(135deg, rgba(9, 81, 216, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%)"
                    zIndex={1}
                  />

                  <Image
                    src={service.image}
                    alt={service.imageAlt}
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
   
   

      {/* CALL-TO-ACTION SECTION - Matching About page CTA */}
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
              Ready to Transform Your Business?
            </Heading>
            <Text
              color="gray.900"
              fontSize={{ base: "md", md: "lg" }}
              maxW="2xl"
            >
              Let's discuss how Genius36 Technologies can help you achieve your
              technology goals. Get in touch with us today for a free
              consultation.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
              <Link to="/contact">
                <Button
                  bg="#0951d8"
                  color="white"
                  size={{ base: "md", md: "lg" }}
                >
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
