import useEmblaCarousel from "embla-carousel-react";
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
import { heroImages, services, stats, testimonials } from "../mockData";
import Seo from "../seo/Seo";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import Award from "../assets/lottie/Award.json";
import Cctv from "../assets/lottie/CCTV New.json";
import Cloud from "../assets/lottie/CLOUD SOLUTION AND SERVER SETUP.json";
import ComputerHardware from "../assets/lottie/COMPUTER HARDWARE.json";
import DataRecovery from "../assets/lottie/DATA RECOVERY 2.json";
import ItConsultation from "../assets/lottie/IT CONSULTATION & DIGITAL TRANSFORMATION.json";
import ItTraining from "../assets/lottie/IT TRAINING.json";
import Networking from "../assets/lottie/NETWOKING AND INFRASTRUCTURE.json";
import SoftwareDevelopment from "../assets/lottie/SOFTWARE DEVELOPMENT.json";
import WebDevelopment from "../assets/lottie/WEBSITE DEVELOPMENT.json";
import ServicesCarousel from "../components/ui/servicesCarousel";

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

const useEmblaAutoplay = (emblaApi, delay = 3000) => {
  const timerRef = useRef(null);
  const isPaused = useRef(false);

  const stop = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const play = () => {
    if (!emblaApi || isPaused.current) return;

    stop();
    timerRef.current = setTimeout(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, delay);
  };

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", play);
    play();

    return () => stop();
  }, [emblaApi]);

  return {
    onMouseEnter: () => {
      isPaused.current = true;
      stop();
    },
    onMouseLeave: () => {
      isPaused.current = false;
      play();
    },
  };
};


export default function Home() {
  const heroBgRef = useRef(null);
  const servicesRef = useRef(null);
  const whyRef = useRef(null);
  const testimonialRef = useRef(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: false,
  slidesToScroll: 1,
  });

  const autoplayHandlers = useEmblaAutoplay(emblaApi, 3500);

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
      </Box>

      {/* Service Section Started Here */}
      <ServicesCarousel />

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

      {/* TESTIMONIALS section started here */}
      <Box py={{ base: 14, md: 20 }} bg="gray.50" ref={testimonialRef}>
        <Container maxW="7xl">
          <Heading
            textAlign="center"
            mb={{ base: 8, md: 12 }}
            fontSize={{ base: "2xl", md: "3xl" }}
          >
            What Our Clients Say
          </Heading>

          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }}
            spacing={{ base: 6, md: 10 }}
            alignItems="stretch"
            gap="20px"
          >
            {testimonials.map((t) => (
              <Blockquote.Root
                key={t.id}
                h="100%"
                display="flex"
                flexDirection="column"
                backdropFilter="blur(14px)"
                bg="rgba(255,255,255,0.25)"
                border="1px solid rgba(255,255,255,0.35)"
                borderRadius="xl"
                p={{ base: 6, md: 8 }}
                boxShadow="0 20px 40px rgba(0,0,0,0.1)"
                transition="transform 0.15s ease, box-shadow 0.3s ease"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                _hover={{
                  boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
                }}
              >
                {/* Quote Icon */}
                <Float placement="bottom-end" offset="10">
                  <Blockquote.Icon
                    opacity="0.35"
                    boxSize="10"
                    rotate="180deg"
                  />
                </Float>

                {/* Text */}
                <Blockquote.Content
                  flex="1"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  {t.text}
                </Blockquote.Content>

                {/* Author */}
                <Blockquote.Caption mt={6}>
                  <cite>
                    <HStack spacing={4}>
                      <Avatar.Root size={{ base: "md", md: "lg" }}>
                        <Avatar.Fallback name={t.name} />
                        <Avatar.Image src={t.avatar} />
                      </Avatar.Root>

                      <VStack align="start" spacing={0}>
                        <Span fontWeight="semibold">{t.name}</Span>
                        <Span fontSize="sm" color="gray.600">
                          {t.company}
                        </Span>
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
