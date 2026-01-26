import {
  Box,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  HStack,
  Container,
  Icon,
  Stack,
  Image,
  Card,
  CardBody,
  Avatar,
  Strong,
  Blockquote,
  Float,
  Span,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Globe,
  Headphones,
} from "lucide-react";
import * as LucideIcons from "lucide-react";
import { heroImages, services, stats, testimonials, servicesImages, trainingImages } from "../mockData";
import Seo from "../seo/Seo";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import WebsiteDesign from "../assets/lottie/Website Design Lottie Animation.json";
import Laptop from "../assets/lottie/Laptop.json";
import Award from "../assets/lottie/Award.json";
import GradientDots from "../assets/lottie/Gradient Dots Background.json";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroBgRef = useRef(null);
  const servicesRef = useRef(null);
  const whyRef = useRef(null);
  const testimonialRef = useRef(null);

  useEffect(() => {
    // HERO PARALLAX (BACKGROUND ONLY)
    gsap.to(heroBgRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: heroBgRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // SERVICES
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 0.6,
    });

    // WHY CHOOSE US
    // gsap.from(".why-item", {
    //   scrollTrigger: {
    //     trigger: whyRef.current,
    //     start: "top 80%",
    //   },
    //   scale: 0.85,
    //   opacity: 0,
    //   stagger: 0.15,
    //   duration: 0.5,
    // });

    // TESTIMONIALS
    gsap.from(".testimonial-card", {
      scrollTrigger: {
        trigger: testimonialRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.5,
    });
  }, []);

  return (
    <>
      <Seo
        title="Genius36 Technologies | Pan-India IT Solutions"
        description="Web development, software solutions, IT infrastructure and professional training across India."
      />

      {/* HERO */}
      <Box minH="100vh" position="relative" overflow="hidden">
        <Box
          ref={heroBgRef}
          position="absolute"
          inset="0"
          bgImage={`url(${heroImages.primary})`}
          bgColor="seashell"
          bgSize="cover"
          bgPosition="center"
          willChange="transform"
        >
          <Box
            position="absolute"
            inset="0"
            bgGradient="linear(to-br, blue.900, blue.800, gray.900)"
            opacity={0.95}
          />
        </Box>

        <Container maxW="7xl" position="relative" zIndex={1} py={24}>
          <VStack spacing={6} textAlign="center" padding={20}>
            <Heading color="white" fontSize={{ base: "3xl", md: "6xl" }}>
              Transform Your Business
            </Heading>
            <Text color="white" maxW="4xl" padding={4} textStyle="xl">
              Delivering cutting-edge IT solutions, software development, and
              training across India. We provide comprehensive technology
              solutions tailored to empower your business and educational needs.
            </Text>

            <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
              <Link to="/services">
                <Button bg="#0951d8" color="white">
                  Explore Services <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  colorScheme="whiteAlpha"
                  color="white"
                >
                  Free Consultation
                </Button>
              </Link>
            </Stack>

            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} pt={10}>
              {stats.map((s, i) => (
                <Box key={i}>
                  <Heading color="white">{s.value}</Heading>
                  <Text color="white">{s.label}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* SERVICES */}

      <Box py={10} bg="gray.50" ref={servicesRef}>
        <Heading
          color="black"
          textAlign="center"
          fontSize={{ base: "1xl", md: "3x2" }}
          padding={5}
        >
          Services
        </Heading>
        <Text
          color="#0951d8"
          maxW="4xl"
          padding={4}
          textStyle="md"
          textAlign="center"
          margin="0 auto"
          pb={10}
        >
          Explore our comprehensive range of IT services designed to meet
          your business needs. From web development to IT infrastructure, we
          deliver innovative, scalable, and cost-effective technology solutions
          across India, helping businesses and institutions improve efficiency,
          growth, and digital transformation through reliable IT expertise.
        </Text>

        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="40px" alignItems="stretch">
            {services.map((s) => {
              const IconComp = LucideIcons[s.icon];
              // Truncate description to show "Read More" if needed
              const maxLength = 80;
              const isLongDescription = s.description.length > maxLength;
              const truncatedDescription = isLongDescription 
                ? s.description.substring(0, maxLength) + "..."
                : s.description;
              
              // Map each service to appropriate image
              const getServiceImage = (serviceId) => {
                const imageMap = {
                  1: servicesImages.development, // Web Development
                  2: servicesImages.workspace, // Software Development
                  3: servicesImages.team, // IT Consulting
                  4: servicesImages.general, // CCTV & Security
                  5: servicesImages.general, // Hardware Sales & Repair
                  6: servicesImages.networking, // Networking & IT Infrastructure
                  7: servicesImages.workspace, // Cloud Solutions
                  8: trainingImages.classroom, // IT Training
                  9: servicesImages.general, // Data Recovery
                };
                return imageMap[serviceId] || servicesImages.general;
              };
              
              return (
                <Link to="/services" key={s.id} style={{ textDecoration: "none", height: "100%" }}>
                  <Card.Root
                    maxW="sm"
                    overflow="hidden"
                    cursor="pointer"
                    transition="all 0.3s ease"
                    h="100%"
                    display="flex"
                    flexDirection="column"
                    _hover={{
                      transform: "translateY(-6px)",
                      boxShadow: "xl",
                    }}
                    _active={{
                      transform: "scale(0.98)",
                    }}
                  >
                    {/* Service Image */}
                    <Box 
                      flexShrink={0}
                      w="100%"
                      h={{ base: "200px", md: "240px" }}
                      overflow="hidden"
                      bg="gray.200"
                    >
                      <Image
                        src={getServiceImage(s.id)}
                        alt={s.title}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        transition="transform 0.3s ease"
                        _hover={{
                          transform: "scale(1.05)",
                        }}
                      />
                    </Box>

                    <Card.Body gap="2" flex="1" display="flex" flexDirection="column">
                      <Card.Title>{s.title}</Card.Title>
                      <Box flex="1">
                        <Card.Description noOfLines={3}>
                          {truncatedDescription}
                        </Card.Description>
                        {isLongDescription && (
                          <Text
                            fontSize="xs"
                            color="#0951d8"
                            fontWeight="500"
                            mt={2}
                            _hover={{ textDecoration: "underline" }}
                          >
                            Read More
                          </Text>
                        )}
                      </Box>
                    </Card.Body>

                    <Card.Footer flexShrink={0}>
                      <Button variant="solid" width="100%" pointerEvents="none">
                        Get Details
                      </Button>
                    </Card.Footer>
                  </Card.Root>
                </Link>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>

      {/* WHY CHOOSE US */}
      <Box py={20} ref={whyRef}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {[
              { icon: Award, title: "10+ Years" },
              { icon: Users, title: "300+ Clients" },
              { icon: Globe, title: "Pan-India" },
              { icon: Headphones, title: "24/7 Support" },
            ].map((item, i) => (
              <VStack key={i} className="why-item">
                <Box
                  w={20}
                  h={20}
                  bgGradient="linear(to-br, blue.500, blue.700)"
                  borderRadius="2xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {/* <Icon as={item.icon} color="white" boxSize={10} /> */}
                  <Lottie animationData={Award} />
                </Box>
                <Heading size="lg">{item.title}</Heading>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* TESTIMONIALS */}
      <Box py={20} bg="gray.50" ref={testimonialRef}>
        <Container maxW="7xl">
          <SimpleGrid columns={[2, null, 3]} gap="40px">
            {testimonials.map((t) => (
              // <Box
              //   key={t.id}
              //   className="testimonial-card"
              //   bg="white"
              //   p={8}
              //   borderRadius="xl"
              //   boxShadow="lg"
              // >
              //   <Text mb={4} fontStyle="italic">
              //     "{t.text}"
              //   </Text>
              //   <Heading size="sm">{t.name}</Heading>
              //   <Text fontSize="sm" color="gray.500">
              //     {t.company}
              //   </Text>
              // </Box>
              <Blockquote.Root key={t.id} bg="bg.subtle" padding="8">
                <Float placement="bottom-end" offset="10">
                  <Blockquote.Icon opacity="0.4" boxSize="10" rotate="180deg" />
                </Float>
                <Blockquote.Content cite="Uzumaki Naruto">
                  {t.text}
                </Blockquote.Content>
                <Blockquote.Caption>
                  <cite>
                    <HStack mt="2" gap="13px">
                      <Avatar.Root size="lg">
                        <Avatar.Fallback name="Emily Jones" />
                        <Avatar.Image src="https://i.pravatar.cc/150?u=re" />
                      </Avatar.Root>
                      <VStack>
                        <Span fontWeight="medium">{t.name}</Span>
                        <Span fontWeight="medium">{t.company}</Span>
                      </VStack>
                    </HStack>
                  </cite>
                </Blockquote.Caption>
              </Blockquote.Root>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
