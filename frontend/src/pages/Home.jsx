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
import { heroImages, services, stats, testimonials } from "../mockData";
import Seo from "../seo/Seo";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import WebsiteDesign from "../assets/lottie/Website Design Lottie Animation.json";
import Laptop from "../assets/lottie/Laptop.json";
import Award from "../assets/lottie/Award.json";

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
          <SimpleGrid columns={[2, null, 4]} gap="40px">
            {services.map((s) => {
              const IconComp = LucideIcons[s.icon];
              return (
                // <Box
                //   key={s.id}
                //   className="service-card"
                //   bg="white"
                //   p={6}
                //   borderRadius="xl"
                //   boxShadow="md"
                // >
                //   <Box
                //     w="56px"
                //     h="56px"
                //     bgGradient="linear(to-br, blue.500, blue.700)"
                //     borderRadius="xl"
                //     display="flex"
                //     alignItems="center"
                //     justifyContent="center"
                //     mb={4}
                //   >
                //     <Icon as={IconComp} color="white" />
                //   </Box>

                //   <Heading size="md">{s.title}</Heading>
                //   <Text fontSize="sm" color="gray.600" mb={3}>
                //     {s.description}
                //   </Text>

                //   <VStack align="start">
                //     {s.features.slice(0, 3).map((f, i) => (
                //       <HStack key={i}>
                //         <Icon as={CheckCircle} color="blue.500" />
                //         <Text fontSize="sm">{f}</Text>
                //       </HStack>
                //     ))}
                //   </VStack>
                // </Box>
                <Link to="/services" style={{ textDecoration: "none" }}>
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
                    <Lottie animationData={Laptop} />

                    <Card.Body gap="2">
                      <Card.Title>Lab Setup</Card.Title>
                      <Card.Description>
                        Professional computer lab setup, networking, and
                        maintenance services for schools and institutions.
                      </Card.Description>
                    </Card.Body>

                    <Card.Footer>
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
