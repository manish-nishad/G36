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
import { heroImages, services, stats, testimonials, brands } from "../mockData";
import Seo from "../seo/Seo";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import Award from "../assets/lottie/Award.json";
import ServicesCarousel from "../components/ui/servicesCarousel";
import TestimonialsSection from "../components/ui/TestimonialsSection";
import TrustedByBrands from "../components/ui/TrustedByBrands";
import MarqueOne from "../components/sections/marqueOne";

gsap.registerPlugin(ScrollTrigger);

const handleMouseMove = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 8;
  const rotateY = ((x - centerX) / centerX) * -8;

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
};

const handleMouseLeave = (e) => {
  const card = e.currentTarget;
  card.style.transform =
    "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
};


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
          <VStack spacing={8} textAlign="center" padding={20}>
            <Heading as="h1" color="white" fontSize={{ base: "3xl", md: "6xl" }} mb={4}>
              Next-Generation IT Solution
            </Heading>

            <Heading color="white" fontSize={{ base: "3xl", md: "6xl" }} mb={2}>
              for Your Business
            </Heading>
            <Heading color="white" fontSize={{ base: "2xl", md: "4xl" }}>
              Designed to accelerate growth and efficiency.
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
        <MarqueOne />
      </Box>
      

      {/* Service Section Started Here */}
      <ServicesCarousel />

      {/* WHY CHOOSE US */}
      <Box py={20} ref={whyRef}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {[
              { icon: Award, title: "5+ Years" },
              { icon: Users, title: "150+ Clients" },
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
      {/* TRUSTED BY BRANDS section started here */}
      {/* <TrustedByBrands brands={brands} /> */}

      {/* TESTIMONIALS section started here */}
      <TestimonialsSection
        testimonials={testimonials}
        handleMouseMove={handleMouseMove}
        handleMouseLeave={handleMouseLeave}
      />
    </>
  );
}
