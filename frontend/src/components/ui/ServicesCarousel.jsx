import {
  Box,
  Heading,
  Text,
  Container,
  HStack,
  Card,
  Button,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Lottie from "lottie-react";
import useEmblaAutoplay from "../../hooks/useEmblaAutoplay";
import { services } from "../../mockData";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Lottie imports
import Cctv from "../../assets/lottie/CCTV New.json";
import Cloud from "../../assets/lottie/CLOUD SOLUTION AND SERVER SETUP.json";
import ComputerHardware from "../../assets/lottie/COMPUTER HARDWARE.json";
import DataRecovery from "../../assets/lottie/DATA RECOVERY 2.json";
import ItConsultation from "../../assets/lottie/IT CONSULTATION & DIGITAL TRANSFORMATION.json";
import ItTraining from "../../assets/lottie/IT TRAINING.json";
import Networking from "../../assets/lottie/NETWOKING AND INFRASTRUCTURE.json";
import SoftwareDevelopment from "../../assets/lottie/SOFTWARE DEVELOPMENT.json";
import WebDevelopment from "../../assets/lottie/WEBSITE DEVELOPMENT.json";

gsap.registerPlugin(ScrollTrigger);

/* LOTTIE MAP */
const serviceLotties = {
  WebDevelopment,
  SoftwareDevelopment,
  ItConsultation,
  ItTraining,
  Networking,
  Cloud,
  Cctv,
  DataRecovery,
  ComputerHardware,
};

export default function ServicesCarousel() {
  const servicesRef = useRef(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  const autoplayHandlers = useEmblaAutoplay(emblaApi);

  // ✅ GSAP animation (CORRECT PLACE)
  useEffect(() => {
    if (!servicesRef.current) return;

    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <Box py={12} bg="gray.50" ref={servicesRef}>
      <Heading textAlign="center" fontSize={{ base: "xl", md: "3xl" }} mb={4}>
        Services
      </Heading>

      <Text
        color="blue.600"
        maxW="4xl"
        px={4}
        mb={10}
        mx="auto"
        textAlign="center"
      >
        Genius36 Technologies offers comprehensive IT services including custom
        software development, web solutions, digital marketing, SEO, computer
        services, and professional training. We deliver innovative, scalable,
        and cost-effective technology solutions across India.
      </Text>

      <Container maxW="7xl">
        {/* Embla viewport */}
        <Box ref={emblaRef} overflow="hidden" {...autoplayHandlers}>
          {/* Embla track */}
          <Box display="flex">
            {services.map((s) => (
              <Box
                key={s.id}
                className="service-card"
                flex="0 0 100%"
                pr={6} // ✅ GAP HERE (IMPORTANT)
                maxW={{
                  base: "100%",
                  md: "50%",
                  lg: "33.333%",
                }}
              >
                <Link to="/services" style={{ textDecoration: "none" }}>
                  <Card.Root
                    h="100%"
                    display="flex"
                    flexDirection="column"
                    bg="white"
                    borderRadius="xl"
                    boxShadow="lg"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: "translateY(-6px)",
                      boxShadow: "2xl",
                    }}
                  >
                    {/* LOTTIE */}
                    <Box h="180px" display="flex" alignItems="center">
                      <Lottie
                        animationData={serviceLotties[s.lottieKey]}
                        loop
                        autoplay
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>

                    <Card.Body flex="1">
                      <Card.Title mb={2}>{s.title}</Card.Title>

                      <Card.Description noOfLines={3}>
                        {s.description}
                      </Card.Description>

                      <VStack align="start" spacing={2} mt={4}>
                        {s.features.slice(0, 3).map((f, i) => (
                          <HStack key={i}>
                            <Icon as={CheckCircle} color="blue.500" />
                            <Text fontSize="sm">{f}</Text>
                          </HStack>
                        ))}
                      </VStack>
                    </Card.Body>

                    <Card.Footer mt="auto">
                      <Button w="100%" pointerEvents="none">
                        Learn More
                      </Button>
                    </Card.Footer>
                  </Card.Root>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
