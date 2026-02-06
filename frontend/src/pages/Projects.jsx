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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
              gap={6}
              w="100%"
            >
              {projects.map((project) => (
                <Card.Root
                  key={project.id}
                  bg="white"
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="md"
                  h="full"
                  borderLeftColor="transparent"
                  transition="all 0.3s ease"
                  transformStyle="preserve-3d"
                  onMouseMove={handleTiltMove}
                  onMouseLeave={handleTiltLeave}
                  _hover={{
                    transform:
                      "perspective(1000px) rotateX(2deg) rotateY(-2deg) translateY(-4px)",
                    boxShadow: "0 20px 60px rgba(59,130,246,0.35)",
                    backdropFilter: "blur(6px)",
                  }}
                  _open={{
                    borderLeftColor: "blue.500",
                    boxShadow: "0 16px 50px rgba(59,130,246,0.35)",
                  }}
                >
                  {/* Project Image */}
                  <Box
                    w="100%"
                    h={{ base: "200px", md: "240px" }}
                    overflow="hidden"
                    bg="gray.200"
                    position="relative"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      transition="transform 0.3s ease"
                      _hover={{
                        transform: "scale(1.05)",
                      }}
                    />
                  </Box>

                  <Card.Body p={6}>
                    <VStack spacing={4} align="start" w="100%">
                      {/* Category Badge */}
                      <HStack spacing={2} flexWrap="wrap">
                        <Badge
                          colorScheme="blue"
                          px={3}
                          py={1}
                          borderRadius="full"
                          fontSize="xs"
                          variant="outline"
                          colorPalette="blue"
                        >
                          {project.category}
                        </Badge>
                        {project.year && (
                          <Badge
                            fontSize="xs"
                            color="gray.500"
                            fontWeight="500"
                            colorPalette="blue"
                          >
                            {project.year}
                          </Badge>
                        )}
                      </HStack>

                      {/* Project Title */}
                      <Heading
                        size="md"
                        color="gray.900"
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        {project.title}
                      </Heading>

                      {/* Project Description */}
                      <Text
                        fontSize={{ base: "xs", md: "sm" }}
                        color="gray.800"
                        lineHeight="1.7"
                        noOfLines={3}
                      >
                        {project.description}
                      </Text>

                      {/* Client Info */}
                      {project.client && (
                        <Text
                          fontSize="xs"
                          color="gray.600"
                          fontWeight="500"
                          pt={2}
                        >
                          Client: {project.client}
                        </Text>
                      )}

                      {/* Technologies */}
                      {project.technologies &&
                        project.technologies.length > 0 && (
                          <HStack spacing={3} flexWrap="wrap" pt={2}>
                            {project.technologies
                              .slice(0, 4)
                              .map((tech, idx) => {
                                const TechIcon = techIcons[tech];

                                return (
                                  <Box
                                    key={idx}
                                    p={2}
                                    borderRadius="md"
                                    border="1px solid"
                                    borderColor="gray.200"
                                    bg="gray.50"
                                    title={tech}
                                    cursor="pointer"
                                  >
                                    {TechIcon ? (
                                      <Icon
                                        as={TechIcon}
                                        boxSize={5}
                                        color="gray.700"
                                        _hover={{
                                          color: "#0951d8",
                                          transform: "scale(1.15)",
                                        }}
                                      />
                                    ) : (
                                      <Text fontSize="xs">{tech}</Text>
                                    )}
                                  </Box>
                                );
                              })}

                            {project.technologies.length > 4 && (
                              <Text fontSize="xs" color="gray.500">
                                +{project.technologies.length - 4} more
                              </Text>
                            )}
                          </HStack>
                        )}
                    </VStack>
                  </Card.Body>
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
