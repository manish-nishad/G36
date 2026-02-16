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
  Badge,
  Icon,
  Flex
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowRight,Layers,Clock ,ArrowUpRight , ExternalLink, Calendar, User } from "lucide-react";
import { projects } from "../mockData";
import Seo from "../seo/Seo";
import Lottie from "lottie-react";
import ProjectsLottie from "../assets/lottie/Projects.json";
import { techIcons } from "../data/techIcons";

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

const Projects = () => {
  return (
    <>
      <Seo
        title="Projects | Genius36 Technologies"
        description="Explore our portfolio of successful projects including web development, software solutions, IT infrastructure, and more. See how we've helped businesses transform."
      />

      {/* HERO SECTION - Matching About/Career/Services page style */}
      <Box bg="gray.900" color="white">
        <Container maxW="7xl" py={{ base: 14, md: 20 }}>
          <VStack spacing={8} textAlign="center" alignItems="center">
            {/* LOTTIE TOP */}
            <Box maxW="300px" mx="auto">
              <Lottie animationData={ProjectsLottie} loop autoplay />
            </Box>

            {/* CONTENT BELOW */}
            <VStack spacing={4}>
              <Heading
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                as="h1"
              >
                Our{" "}
                <Box as="span" color="#0951d8">
                  Projects
                </Box>
              </Heading>

              <Text
                fontSize={{ base: "md", md: "lg" }}
                maxW="3xl"
                color="whiteAlpha.900"
              >
                Explore our portfolio of successful projects. We've delivered
                innovative solutions across various industries, helping
                businesses achieve their technology goals.
              </Text>

              {/* <Text
                fontSize={{ base: "sm", md: "md" }}
                color="whiteAlpha.700"
                maxW="2xl"
              >
                From web development to IT infrastructure, see how we've
                transformed businesses with cutting-edge technology.
              </Text> */}
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
                  Start Your Project <ArrowRight size={18} />
                </Button>
              </Link>

              <Link to="/services">
                <Button
                  w="100%"
                  size="lg"
                  variant="outline"
                  color="white"
                  borderColor="whiteAlpha.500"
                  _hover={{ bg: "whiteAlpha.200" }}
                >
                  View Services
                </Button>
              </Link>
            </Stack>
          </VStack>
        </Container>
      </Box>

      {/* PROJECTS GRID SECTION */}
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
                Featured Projects
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.800"
                maxW="3xl"
                mx="auto"
              >
                Discover our successful implementations across various
                industries and technology domains
              </Text>
            </Box>
  <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spacing={{ base: 6, md: 8 }}
      gap={{ base: 6, md: 8 }}
      w="100%"
    >
      {projects.map((project) => (
        <Card.Root
          key={project.id}
          bg="white"
          borderRadius="2xl"
          overflow="hidden"
          boxShadow="lg"
          h="full"
          border="1px solid"
          borderColor="gray.100"
          transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
          cursor="pointer"
          position="relative"
          onMouseMove={handleTiltMove}
          onMouseLeave={handleTiltLeave}
          _hover={{
            transform: "translateY(-8px)",
            boxShadow: "0 20px 40px rgba(9, 81, 216, 0.2)",
            borderColor: "blue.400",
          }}
        >
          {/* Project Image with Gradient Overlay */}
          <Box
            w="100%"
            h={{ base: "220px", md: "260px" }}
            overflow="hidden"
            position="relative"
          >
            {/* Gradient Overlay */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%)"
              zIndex={1}
              opacity={0}
              transition="opacity 0.3s ease"
              _groupHover={{ opacity: 1 }}
            />

            {/* Category Badge - Floating */}
            <Badge
              position="absolute"
              top={4}
              left={4}
              zIndex={2}
              bg="white"
              color="blue.600"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="xs"
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="wider"
              boxShadow="0 4px 12px rgba(0,0,0,0.1)"
            >
              {project.category}
            </Badge>

            {/* Year Badge */}
            {project.year && (
              <Badge
                position="absolute"
                top={4}
                right={4}
                zIndex={2}
                bg="blackAlpha.600"
                color="white"
                px={3}
                py={1.5}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
                backdropFilter="blur(10px)"
              >
                <HStack spacing={1.5}>
                  <Icon as={Calendar} boxSize={3} />
                  <Text>{project.year}</Text>
                </HStack>
              </Badge>
            )}

            <Image
              src={project.image}
              alt={project.title}
              w="100%"
              h="100%"
              objectFit="cover"
              transition="transform 0.4s ease"
              _groupHover={{
                transform: "scale(1.08)",
              }}
            />
          </Box>

          <Card.Body p={6}>
            <VStack spacing={4} align="stretch" w="100%">
              {/* Project Title */}
              <Heading
                size="lg"
                color="gray.900"
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="700"
                lineHeight="1.3"
                noOfLines={2}
              >
                {project.title}
              </Heading>

              {/* Project Description */}
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.600"
                lineHeight="1.7"
                noOfLines={3}
                textAlign="justify"
              >
                {project.description}
              </Text>

              {/* Client Info */}
              {project.client && (
                <HStack
                  spacing={2}
                  pt={2}
                  pb={2}
                  borderTop="1px solid"
                  borderColor="gray.100"
                >
                  <Icon as={User} boxSize={4} color="gray.500" />
                  <Text fontSize="sm" color="gray.600" fontWeight="500">
                    {project.client}
                  </Text>
                </HStack>
              )}

              {/* Technologies - Improved Layout */}
              {project.technologies && project.technologies.length > 0 && (
                <Box>
                  <Text
                    fontSize="xs"
                    color="gray.500"
                    fontWeight="600"
                    textTransform="uppercase"
                    letterSpacing="wider"
                    mb={3}
                  >
                    Tech Stack
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    {project.technologies.slice(0, 4).map((tech, idx) => {
                      const TechIcon = techIcons[tech];
                      return (
                        <Box
                          key={idx}
                          px={3}
                          py={2}
                          borderRadius="lg"
                          bg="blue.50"
                          border="1px solid"
                          borderColor="blue.100"
                          transition="all 0.3s ease"
                          _hover={{
                            bg: "blue.100",
                            borderColor: "blue.300",
                            transform: "translateY(-2px)",
                          }}
                        >
                          {TechIcon ? (
                            <Icon as={TechIcon} boxSize={5} color="blue.600" />
                          ) : (
                            <Text fontSize="xs" fontWeight="600" color="blue.700">
                              {tech}
                            </Text>
                          )}
                        </Box>
                      );
                    })}
                    {project.technologies.length > 4 && (
                      <Badge
                        bg="gray.100"
                        color="gray.600"
                        px={3}
                        py={1}
                        borderRadius="lg"
                        fontSize="xs"
                        fontWeight="600"
                      >
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </HStack>
                </Box>
              )}

              {/* View Project Link */}
              {/* <Button
                variant="ghost"
                color="blue.600"
                size="sm"
                justifyContent="start"
                px={0}
                fontWeight="600"
                rightIcon={<Icon as={ExternalLink} boxSize={4} />}
                _hover={{
                  color: "blue.700",
                  bg: "transparent",
                  transform: "translateX(4px)",
                }}
                transition="all 0.3s ease"
              >
              
              </Button> */}
            </VStack>
          </Card.Body>

          {/* Bottom Accent Line */}
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            h="4px"
            bg="linear-gradient(90deg, #0951d8 0%, #4299e1 100%)"
            transform="scaleX(0)"
            transformOrigin="left"
            transition="transform 0.4s ease"
            _groupHover={{
              transform: "scaleX(1)",
            }}
          />
        </Card.Root>
      ))}
    </SimpleGrid>
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
            <Heading
              color="black"
              size="2xl"
              fontSize={{ base: "xl", md: "2xl" }}
            >
              Ready to Start Your Project?
            </Heading>
            <Text
              color="gray.900"
              fontSize={{ base: "md", md: "lg" }}
              maxW="2xl"
            >
              Let's discuss how we can bring your vision to life. Get in touch
              with us today for a free consultation and project estimate.
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

export default Projects;
