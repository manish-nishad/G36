import {
  Box,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import useEmblaAutoplay from "../../hooks/useEmblaAutoplay";
import { useRef } from "react";
import cctv from "../../assets/flaticons/cctv.gif";
import hardware from "../../assets/flaticons/hardware.gif";
import cloud from "../../assets/flaticons/cloudcom.gif";
import training from "../../assets/flaticons/training.gif";
import recovery from "../../assets/flaticons/recovery.gif";
import itdigital from "../../assets/flaticons/itdigital.gif";
import softwareservice from "../../assets/flaticons/software-service.gif";
import website from "../../assets/flaticons/website.gif";
import network from "../../assets/flaticons/network.gif";
import techsupport from "../../assets/flaticons/techsupport.gif";

const services = [
  { text: "Custom Website Design & Development", icon: website },
  { text: "Software Development", icon: softwareservice },
  { text: "IT Consulting & Digital Transformation", icon: itdigital },
  { text: "CCTV Camera Installation & Security", icon: cctv },
  { text: "Computer Hardware Sales & Repair", icon: hardware },
  { text: "Networking & IT Infrastructure", icon: network },
  { text: "Cloud Solutions & Server Setup", icon: cloud },
  { text: "IT Training & Programming Courses", icon: training },
  { text: "Data Recovery Services", icon: recovery },
  { text: "Tech Support & Maintenance Services", icon: techsupport },
];

export default function ServicesCarousel() {
  const servicesRef = useRef(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  const autoplayHandlers = useEmblaAutoplay(emblaApi);

  return (
    <Box py={12} bg="gray.50" ref={servicesRef}>
      <Heading textAlign="center" color="blue.600" fontSize={{ base: "xl", md: "3xl" }} mb={4} as="h2">
        Services
      </Heading>

      <Text
        color="black"
        maxW="4xl"
        px={4}
        mb={10}
        mx="auto"
        textAlign="center"
      >
        At <b>Genius36 Technologies</b>, we specialize in delivering end-to-end IT services tailored to your unique business needs.
        Our expertise spans custom software development, cutting-edge web solutions, result-driven digital marketing, strategic SEO optimization,
         comprehensive computer services, and professional skill development training. Partner with us for innovative,
          scalable, and cost-effective technology solutions that empower your business across India.
    
      </Text>

      <Container maxW="7xl">
        {/* Embla viewport */}
        <Box ref={emblaRef} overflow="hidden" {...autoplayHandlers}>
          {/* Embla track */}
          <Box display="flex">
            {services.map((s, index) => (
              <Box
                key={index}
                className="service-card"
                py={6}
                px={3}
                flex={{
                  base: "0 0 100%",
                  md: "0 0 50%",
                  lg: "0 0 20%", // ✅ 5 cards on desktop
                }}
                maxW={{
                  base: "100%",
                  md: "50%",
                  lg: "20%", // ✅ 5 cards on desktop
                }}
                display="flex"
                justifyContent="center"
                overflow="visible"
              >
                <Link to="/services" style={{ textDecoration: "none" }}>
                  {/* OUTER CIRCLE CARD */}
                  <Box
                    role="group"
                    w="220px"
                    h="220px"
                    borderRadius="full"
                    bg="white"
                    boxShadow="lg"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    position="relative"
                    transition="all 0.3s ease"
                    _before={{
                      content: '""',
                      position: "absolute",
                      inset: "-6px",
                      borderRadius: "full",
                      border: "2px solid #0951d8",
                      opacity: 0,
                      transition: "all 0.3s ease",
                    }}
                    _hover={{
                      boxShadow: "0 0 30px rgba(9,81,216,0.8)",
                    }}
                    _groupHover={{
                      _before: { opacity: 1 },
                    }}
                  >
                    {/* INNER ICON CIRCLE */}
                    <Box
                      w="90px"
                      h="90px"
                      borderRadius="full"
                      // bg="gray.100"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mb={3}
                    >
                      <Box
                        as="img"
                        src={s.icon}
                        alt={s.text}
                        boxSize={{ base: "60px", md: "70px", lg: "80px" }}
                        objectFit="contain"
                      />
                    </Box>

                    {/* TEXT */}
                    <Text
                      fontSize={{ base: "sm", md: "sm" }}
                      fontWeight="600"
                      color="gray.700"
                      px={3}
                    >
                      {s.text}
                    </Text>
                  </Box>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
