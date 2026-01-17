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
  Avatar,
  Blockquote,
  Float,
  Span,
  Icon,
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
import { heroImages, services, stats, testimonials } from "../mockData";
import Seo from "../seo/Seo";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import WebsiteDesign from "../assets/lottie/Website Design Lottie Animation.json";
import Laptop from "../assets/lottie/Laptop.json";
import Award from "../assets/lottie/Award.json";
import GradientDots from "../assets/lottie/Gradient Dots Background.json";
import Cctv from "../assets/lottie/CCTV SETUP & SECURITY.json";
import Cloud from "../assets/lottie/CLOUD SOLUTION AND SERVER SETUP.json";
import ComputerHardware from "../assets/lottie/COMPUTER HARDWARE.json";
import DataRecovery from "../assets/lottie/DATA RECOVERY 2.json";
import ItConsultation from "../assets/lottie/IT CONSULTATION & DIGITAL TRANSFORMATION.json";
import ItTraining from "../assets/lottie/IT TRAINING.json";
import Networking from "../assets/lottie/NETWOKING AND INFRASTRUCTURE.json";
import SoftwareDevelopment from "../assets/lottie/SOFTWARE DEVELOPMENT.json";
import WebDevelopment from "../assets/lottie/WEBSITE DEVELOPMENT.json";
import iconsBg from "../assets/lottie/icons-bg.json";

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

  const serviceLotties = {
    WebDevelopment: WebDevelopment,
    SoftwareDevelopment: SoftwareDevelopment,
    ItConsultation: ItConsultation,
    ItTraining: ItTraining,
    Networking: Networking,
    Cloud: Cloud,
    Cctv: Cctv,
    DataRecovery: DataRecovery,
    ComputerHardware: ComputerHardware,
  };

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
            bg="#1d3ca8"
            opacity={0.8} // 👈 adjust transparency here
            zIndex={0}
          />
        </Box>

        <Container
          maxW="7xl"
          position="relative"
          zIndex={1}
          py={24}
          textAlign="center"
        >
          <Box
            display="inline-block"
            px={6}
            py={2}
            mb={6}
            bg="whiteAlpha.200"
            borderRadius="full"
            border="1px solid"
            borderColor="whiteAlpha.300"
          >
            <Text color="blue.300" fontWeight="medium" fontSize="sm">
              Pan-India IT Solutions Partner
            </Text>
          </Box>
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
          fontSize={{ base: "1xl", md: "3xl" }}
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
          Genius36 Technologies offers comprehensive IT services including
          custom software development, web solutions, digital marketing, SEO,
          computer services, and professional training. We deliver innovative,
          scalable, and cost-effective technology solutions across India,
          helping businesses and institutions improve efficiency, growth, and
          digital transformation through reliable IT expertise.
        </Text>

        <Container maxW="7xl">
          <Box
            position="absolute"
            inset={0}
            zIndex={0}
            // opacity={0.15}
            pointerEvents="none"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Lottie
              animationData={iconsBg}
              loop
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 2, lg: 4 }}
            spacing={{ base: 6, md: 8 }}
            gap="20px"
          >
            {services.map((s) => {
              return (
                <Link
                  key={s.id}
                  to="/services"
                  style={{ textDecoration: "none" }}
                >
                  <Card.Root
                    maxW="sm"
                    overflow="hidden"
                    cursor="pointer"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: "translateY(-6px)",
                      boxShadow: "xl",
                    }}
                    _active={{
                      transform: "scale(0.98)",
                    }}
                  >
                    {/* LOTTIE */}
                    <Box
                      h="180px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Lottie
                        animationData={serviceLotties[s.lottieKey]}
                        loop
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </Box>

                    <Card.Body gap="2">
                      <Card.Title>{s.title}</Card.Title>
                      <Card.Description textAlign="justify">
                        {s.description}
                      </Card.Description>
                      <VStack spacing={2} mt={3} align="start">
                        {s.features.slice(0, 3).map((feature, idx) => (
                          <HStack key={idx} spacing={2}>
                            <Icon
                              as={CheckCircle}
                              boxSize={4}
                              color="blue.500"
                              flexShrink={0}
                            />
                            <Text fontSize="sm" color="gray.600">
                              {feature}
                            </Text>
                          </HStack>
                        ))}
                      </VStack>
                    </Card.Body>

                    <Card.Footer>
                      <Button variant="solid" width="100%" pointerEvents="none">
                        Learn More
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
