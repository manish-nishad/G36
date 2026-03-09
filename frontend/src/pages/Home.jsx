import {
  Box,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  Container,
  Stack,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { heroImages, stats, testimonials } from "../mockData";
import Seo from "../seo/Seo";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lottie from "lottie-react";
// import Award from "../assets/lottie/Award.json";
import Year from "../assets/flaticons/fireworks.png";
import Client from "../assets/flaticons/best-customer-experience.png";
import India from "../assets/flaticons/india.png";
import Support from "../assets/flaticons/customer-service.png";
import ServicesCarousel from "../components/ui/servicesCarousel";
import TestimonialsSection from "../components/ui/TestimonialsSection";
import OurOfferings from "../components/ui/OurOfferings";
import WorkWithG36 from "../components/ui/WorkWithG36";
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
  const whyRef = useRef(null);

  return (
    <>
      <Seo
        title="Genius36 | Trusted IT, Digital Marketing & Software Solutions."
        description="Genius36 offers the best IT solutions, website design, software development, and digital marketing services in Raipur, Bhilai, and Bilaspur in 2026."
      />

      {/* HERO */}
      <Box minH="70vh" position="relative" overflow="hidden">
        <Box
          ref={heroBgRef}
          position="absolute"
          inset="0"
          bgImage={`url(${heroImages.primary})`}
          bgColor="seashell"
          bgSize="cover"
          bgPosition="center"
          willChange="transform"
          alt="Hero Image"
        >
          <Box
            position="absolute"
            inset="0"
            bg="#1d3ca8"
            opacity={0.8} //  adjust transparency here
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
          <VStack spacing={8} textAlign="center" padding={10}>
            <Heading
              as="h1"
              color="white"
              fontSize={{ base: "3xl", md: "6xl" }}
              mb={4}
              lineHeight={{ base: "1", md: "1" }}
            >
              Next-Generation IT Solution for Your Business
            </Heading>
            <Heading color="white" fontSize={{ base: "2xl", md: "4xl" }} as="h2" mb={2}>
              Designed to accelerate growth and efficiency.
            </Heading>
            <Text color="white" maxW="4xl" padding={4} textStyle="xl">
             Your trusted technology partner across India, delivering world-class IT solutions, bespoke software development, 
             and skill-enhancing training programs designed to accelerate your business growth and digital transformation journey.
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

      {/* Service Section Started Here */}
      <ServicesCarousel />

      {/* Our Offerings */}
      <OurOfferings />

      {/* Why Work with Genius36 */}
      <WorkWithG36 />

      {/* WHY CHOOSE US */}
      <Box py={20} ref={whyRef}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {[
              { icon: Year, title: "5+ Years" },
              { icon: Client, title: "150+ Clients" },
              { icon: India, title: "Pan-India" },
              { icon: Support, title: "24/7 Support" },
            ].map((item, i) => (
              <VStack key={i} className="why-item" spacing={4}>
                <Box
                  w={20}
                  h={20}
                  bgGradient="linear(to-br, blue.500, blue.700)"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transition="all 0.3s ease" // ✅ smooth animation
                  _hover={{
                    transform: "scale(1.5)", // ✅ zoom effect
                  }}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    boxSize="48px"
                    objectFit="contain"
                    loading="lazy"
                    decoding="async"
                  />
                  
                </Box>

                <Heading size="lg">{item.title}</Heading>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* TRUSTED BY BRANDS section started here */}
        <MarqueOne />

      {/* TESTIMONIALS section started here */}
      <TestimonialsSection
        testimonials={testimonials}
        handleMouseMove={handleMouseMove}
        handleMouseLeave={handleMouseLeave}
      />
    </>
  );
}
