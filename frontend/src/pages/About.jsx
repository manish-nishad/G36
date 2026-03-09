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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { aboutImages } from "../mockData";
import Seo from "../seo/Seo";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import Flaticons
import Lottie from "lottie-react";
import Welcome from "../assets/lottie/Welcome.json";
import OurMisson from "../assets/flaticons/mission.png";
import OurVision from "../assets/flaticons/vision.png";
import Excellence from "../assets/flaticons/excellence.png";
import Innovation from "../assets/flaticons/innovation.png";
import Integrity from "../assets/flaticons/integrity.png";
import CustomerFocus from "../assets/flaticons/customer-focus.png";
import ExperiencedTeam from "../assets/flaticons/experienced-team.png";
import Solutions from "../assets/flaticons/com-solutions.png";
import CostEffect from "../assets/flaticons/cost-effective.png";
import QualityAssurance from "../assets/flaticons/quality-assurance.png";
import TimelyDelivery from "../assets/flaticons/time-deliver.png";
import Year from "../assets/flaticons/fireworks.png";
import Client from "../assets/flaticons/best-customer-experience.png";
import India from "../assets/flaticons/india.png";
import Support from "../assets/flaticons/customer-service.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const heroBgRef = useRef(null);
  const overviewRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const whyChooseRef = useRef(null);
  const statsRef = useRef(null);

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
  //   // HERO PARALLAX
  //   gsap.to(heroBgRef.current, {
  //     yPercent: 15,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: heroBgRef.current,
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //   });

  //   // COMPANY OVERVIEW
  //   gsap.from(".overview-content", {
  //     scrollTrigger: {
  //       trigger: overviewRef.current,
  //       start: "top 80%",
  //     },
  //     opacity: 0,
  //     y: 40,
  //     duration: 0.8,
  //     stagger: 0.2,
  //   });

  //   // MISSION & VISION CARDS
  //   gsap.from(".mission-card", {
  //     scrollTrigger: {
  //       trigger: missionRef.current,
  //       start: "top 80%",
  //     },
  //     opacity: 0,
  //     y: 40,
  //     stagger: 0.2,
  //     duration: 0.6,
  //   });

  //   // VALUES SECTION
  //   gsap.from(".value-item", {
  //     scrollTrigger: {
  //       trigger: valuesRef.current,
  //       start: "top 80%",
  //     },
  //     opacity: 0,
  //     scale: 0.9,
  //     stagger: 0.15,
  //     duration: 0.5,
  //   });

  //   // WHY CHOOSE US
  //   gsap.from(".why-item", {
  //     scrollTrigger: {
  //       trigger: whyChooseRef.current,
  //       start: "top 80%",
  //     },
  //     opacity: 0,
  //     y: 30,
  //     stagger: 0.1,
  //     duration: 0.6,
  //   });

  //   // STATS SECTION
  //   gsap.from(".stat-item", {
  //     scrollTrigger: {
  //       trigger: statsRef.current,
  //       start: "top 80%",
  //     },
  //     opacity: 0,
  //     scale: 0.95,
  //     stagger: 0.1,
  //     duration: 0.5,
  //   });

  //   // Hover animations for cards
  //   const cards = document.querySelectorAll(".animated-card");
  //   cards.forEach((card) => {
  //     card.addEventListener("mouseenter", () => {
  //       gsap.to(card, {
  //         scale: 1.03,
  //         y: -6,
  //         boxShadow: "0 0 25px rgba(9, 81, 216, 0.6)", // 🔥 blue glow
  //         duration: 0.3,
  //         ease: "power2.out",
  //       });
  //     });

  //     card.addEventListener("mouseleave", () => {
  //       gsap.to(card, {
  //         scale: 1,
  //         y: 0,
  //         boxShadow: "0 0 0 rgba(0,0,0,0)", // ❌ glow remove
  //         duration: 0.3,
  //         ease: "power2.out",
  //       });
  //     });
  //   });

  //   // Cleanup
  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  const values = [
    {
      title: "Excellence",
      description:
        "We strive for excellence in every project, delivering quality solutions that exceed expectations and set industry standards.",
      icon: Excellence,
    },
    {
      title: "Innovation",
      description:
        "Embracing cutting-edge technologies and innovative approaches to solve complex business challenges with creative solutions.",
      icon: Innovation,
    },
    {
      title: "Integrity",
      description:
        "Building trust through transparency, honesty, and ethical business practices in all our dealings and partnerships.",
      icon: Integrity,
    },
    {
      title: "Customer Focus",
      description:
        "Putting our clients at the center of everything we do, ensuring their success is our success and their growth is our priority.",
      icon: ExperiencedTeam,
    },
  ];

  const whyChooseUs = [
    {
      title: "Experienced Team",
      description:
        "Our team of certified professionals brings years of industry experience and technical expertise to every project, ensuring top-quality results.",
      icon: CustomerFocus,
    },
    {
      title: "Comprehensive Solutions",
      description:
        "From web development to IT infrastructure, we offer end-to-end solutions under one roof, simplifying your technology needs.",
      icon: Solutions,
    },
    {
      title: "Quality Assurance",
      description:
        "Rigorous testing and quality control processes ensure that every solution meets the highest standards of performance and reliability.",
      icon: QualityAssurance,
    },
    {
      title: "Timely Delivery",
      description:
        "We understand the importance of deadlines and consistently deliver projects on time and within budget, without compromising quality.",
      icon: TimelyDelivery,
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock technical support ensures that your systems are always running smoothly, with immediate response to any issues.",
      icon: Support,
    },
    {
      title: "Cost-Effective",
      description:
        "Competitive pricing without compromising on quality, ensuring maximum value for your investment and long-term cost savings.",
      icon: CostEffect,
    },
  ];

  return (
    <>
      <Seo
        title="About Us | Genius36 Technologies"
        description="Learn about Genius36 Technologies - Your trusted Pan-India IT solutions partner with 10+ years of experience delivering excellence."
      />

      {/* HERO SECTION */}
      <Box bg="gray.900" color="white">
        <Container maxW="7xl" py={{ base: 14, md: 20 }}>
          <VStack spacing={8} textAlign="center">
            {/* LOTTIE TOP */}
            <Box maxW="420px" mx="auto">
              <Lottie animationData={Welcome} loop autoplay />
            </Box>

            {/* CONTENT BELOW */}
            <VStack spacing={4}>
              <Heading
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                as="h1"
              >
                About{" "}
                <Box as="span" color="#0951d8">
                  Genius36 Technologies
                </Box>
              </Heading>

              <Text
                fontSize={{ base: "md", md: "lg" }}
                maxW="3xl"
                color="whiteAlpha.900"
              >
                Your trusted Pan-India IT solutions partner delivering
                excellence in software development, IT infrastructure, digital
                transformation, and professional training.
              </Text>

              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="whiteAlpha.700"
                maxW="2xl"
              >
                Empowering businesses and institutions with cutting-edge
                technology solutions since 2014.
              </Text>
            </VStack>

            {/* BUTTONS FULL WIDTH */}
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={4}
              w="100%"
              maxW="420px"
              justifyContent="center"
            >
              <Link to="/services">
                <Button
                  w="100%"
                  size="lg"
                  bg="#0951d8"
                  color="white"
                  _hover={{ bg: "#073fa6" }}
                >
                  Explore Services <ArrowRight size={18} />
                </Button>
              </Link>

              <Link to="/contact">
                <Button
                  w="100%"
                  size="lg"
                  variant="outline"
                  color="white"
                  borderColor="whiteAlpha.500"
                  _hover={{ bg: "whiteAlpha.200" }}
                >
                  Contact Us
                </Button>
              </Link>
            </Stack>
          </VStack>
        </Container>
      </Box>

      {/* COMPANY OVERVIEW */}
      <Box py={{ base: 12, md: 20 }} bg="white" ref={overviewRef}>
        <Container maxW="7xl">
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, lg: 12 }}
            alignItems="center"
          >
            <VStack spacing={6} align="start" className="overview-content">
              <Heading
                size="2xl"
                color="gray.900"
                fontSize={{ base: "2xl", md: "3xl" }}
              >
                Who We Are
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.900"
                lineHeight="1.5"
                textAlign="justify"
              >
                Genius36 Technologies India LLP is a leading IT solutions
                provider with over 10 years of experience in delivering
                comprehensive technology services across India. Based in Bhilai,
                Chhattisgarh, we have established ourselves as a trusted partner
                for businesses, educational institutions, and organizations
                seeking innovative IT solutions.
              </Text>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.900"
                lineHeight="1.5"
                textAlign="justify"
              >
                Our team of skilled professionals combines technical expertise
                with business acumen to deliver solutions that drive growth,
                improve efficiency, and transform digital landscapes. From
                custom software development to IT infrastructure management, we
                provide end-to-end services tailored to your unique needs.
              </Text>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.900"
                lineHeight="1.5"
                textAlign="justify"
              >
                We pride ourselves on our commitment to quality, customer
                satisfaction, and continuous innovation. Our pan-India presence
                ensures that we can serve clients across the country with the
                same level of excellence and dedication.
              </Text>
            </VStack>
            <Box className="overview-content">
              <Box
                borderRadius="2xl"
                overflow="hidden"
                position="relative"
                paddingLeft={5}
              >
                <Image
                  src={aboutImages.itProfessionals}
                  alt="Genius36 Technologies Team"
                  w="100%"
                  h="auto"
                  objectFit="cover"
                />
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* VISION & MISSION */}
      <Box py={{ base: 12, md: 20 }} bg="gray.50" ref={missionRef}>
        <Container maxW="7xl">
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading
                size="2xl"
                mb={4}
                color="gray.900"
                fontSize={{ base: "xl", md: "2xl" }}
              >
                Our Mission & Vision
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.800"
                maxW="3xl"
                mx="auto"
              >
                Driving digital transformation through innovation and excellence
              </Text>
            </Box>

            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={8}
              w="full"
              gap={10}
            >
              <Card.Root
                className="mission-card animated-card"
                bg="white"
                p={{ base: 6, md: 8 }}
                borderRadius="xl"
                boxShadow="md"
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
                <Card.Body>
                  <VStack spacing={4} align="start">
                    <Box
                      w={{ base: 16, md: 20 }}
                      h={{ base: 16, md: 20 }}
                      bgGradient="linear(to-br, blue.500, blue.700)"
                      borderRadius="xl"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      p={2}
                    >
                      <Image
                        src={OurMisson}
                        alt="Mission"
                        w="100%"
                        h="100%"
                        objectFit="contain"
                      />
                    </Box>
                    <Heading
                      size="lg"
                      color="gray.900"
                      fontSize={{ base: "md", md: "lg" }}
                    >
                      Our Mission
                    </Heading>
                    <Text
                      fontSize={{ base: "sm", md: "md" }}
                      color="gray.800"
                      lineHeight="1.8"
                    >
                      To empower businesses and institutions across India with
                      cutting-edge IT solutions that drive growth, enhance
                      efficiency, and enable digital transformation. We are
                      committed to delivering excellence, fostering innovation,
                      and building lasting partnerships with our clients.
                    </Text>
                  </VStack>
                </Card.Body>
              </Card.Root>

              <Card.Root
                className="mission-card animated-card"
                bg="white"
                p={{ base: 6, md: 8 }}
                borderRadius="xl"
                boxShadow="md"
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
                <Card.Body>
                  <VStack spacing={4} align="start">
                    <Box
                      w={{ base: 16, md: 20 }}
                      h={{ base: 16, md: 20 }}
                      bgGradient="linear(to-br, blue.500, blue.700)"
                      borderRadius="xl"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      p={2}
                    >
                      <Image
                        src={OurVision}
                        alt="Vision"
                        w="100%"
                        h="100%"
                        objectFit="contain"
                      />
                    </Box>
                    <Heading
                      size="lg"
                      color="gray.900"
                      fontSize={{ base: "md", md: "lg" }}
                    >
                      Our Vision
                    </Heading>
                    <Text
                      fontSize={{ base: "sm", md: "md" }}
                      color="gray.800"
                      lineHeight="1.8"
                    >
                      To become India's most trusted and innovative IT solutions
                      provider, recognized for our technical excellence,
                      customer-centric approach, and transformative impact on
                      businesses. We envision a future where technology empowers
                      every organization to achieve its full potential.
                    </Text>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CORE VALUES */}
      <Box py={{ base: 12, md: 20 }} bg="white" ref={valuesRef}>
        <Container maxW="7xl">
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading
                size="2xl"
                mb={4}
                color="gray.900"
                fontSize={{ base: "xl", md: "2xl" }}
              >
                Our Core Values
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.800"
                maxW="3xl"
                mx="auto"
              >
                The principles that guide everything we do
              </Text>
            </Box>

            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 4 }}
              spacing={{ base: 6, md: 8 }}
              gap={10}
            >
              {values.map((value, i) => (
                <Card.Root
                  key={i}
                  className="value-item animated-card"
                  bg="gray.50"
                  p={6}
                  borderRadius="xl"
                  h="full"
                  boxShadow="sm"
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
                  <Card.Body>
                    <VStack spacing={4} align="start">
                      <Box
                        w={{ base: 16, md: 20 }}
                        h={{ base: 16, md: 20 }}
                        bgGradient="linear(to-br, blue.500, blue.700)"
                        borderRadius="xl"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        p={2}
                      >
                        <Image
                          src={value.icon}
                          alt={value.title}
                          w="100%"
                          h="100%"
                          objectFit="contain"
                        />
                      </Box>
                      <Heading
                        size="md"
                        color="gray.900"
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        {value.title}
                      </Heading>
                      <Text
                        fontSize={{ base: "xs", md: "sm" }}
                        color="gray.800"
                        lineHeight="1.7"
                      >
                        {value.description}
                      </Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* WHY CHOOSE US */}
      <Box py={{ base: 12, md: 20 }} bg="gray.50" ref={whyChooseRef}>
        <Container maxW="7xl">
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading
                size="2xl"
                mb={4}
                color="gray.900"
                fontSize={{ base: "xl", md: "2xl" }}
              >
                Why Choose Genius36 Technologies?
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.800"
                maxW="3xl"
                mx="auto"
              >
                What sets us apart in the IT industry
              </Text>
            </Box>

            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={{ base: 6, md: 8 }}
              gap={10}
            >
              {whyChooseUs.map((item, i) => (
                <Card.Root
                  key={i}
                  className="why-item animated-card"
                  bg="white"
                  p={6}
                  borderRadius="xl"
                  h="full"
                  boxShadow="md"
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
                  <Card.Body>
                    <VStack spacing={4} align="start">
                      <Box
                        w={{ base: 16, md: 20 }}
                        h={{ base: 16, md: 20 }}
                        bgGradient="linear(to-br, blue.500, blue.700)"
                        borderRadius="lg"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        p={2}
                      >
                        <Image
                          src={item.icon}
                          alt={item.title}
                          w="100%"
                          h="100%"
                          objectFit="contain"
                        />
                      </Box>
                      <Heading
                        size="md"
                        color="gray.900"
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        {item.title}
                      </Heading>
                      <Text
                        fontSize={{ base: "xs", md: "sm" }}
                        color="gray.800"
                        lineHeight="1.7"
                      >
                        {item.description}
                      </Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* STATS SECTION */}
      <Box py={{ base: 12, md: 20 }} bg="white" ref={statsRef}>
        <Container maxW="7xl">
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading
                size="2xl"
                mb={4}
                color="gray.900"
                fontSize={{ base: "xl", md: "2xl" }}
              >
                Our Achievements
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.800"
                maxW="3xl"
                mx="auto"
              >
                Numbers that speak for our commitment and excellence
              </Text>
            </Box>

            <SimpleGrid
              columns={{ base: 2, md: 4 }}
              spacing={{ base: 4, md: 8 }}
              w="full"
              gap={5}
            >
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
                    borderRadius="2xl"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      boxSize="48px"
                      objectFit="contain"
                    />
                  </Box>

                  <Heading size="lg">{item.title}</Heading>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA SECTION */}
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
              Ready to Transform Your Business?
            </Heading>
            <Text
              color="gray.900"
              fontSize={{ base: "md", md: "lg" }}
              maxW="2xl"
            >
              Let's discuss how Genius36 Technologies can help you achieve your
              technology goals. Get in touch with us today for a free
              consultation.
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
                  Explore Services
                </Button>
              </Link>
            </Stack>
          </VStack>
        </Container>
      </Box>
    </>
  );
}
