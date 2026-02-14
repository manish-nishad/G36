import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaRupeeSign,
  FaPeopleCarry,
  FaCheckCircle,
  FaLightbulb,
  FaHeadset,
} from "react-icons/fa";

/* ===================== DATA ===================== */

const reasons = [
  {
    title: "Client-Centric Approach",
    description:
      "Your success is our priority. We listen carefully to your requirements and work closely with you to deliver solutions that match your business goals.",
    icon: FaUsers,
  },
  {
    title: "Affordable & Transparent Pricing",
    description:
      "We offer high-quality IT and digital services at competitive prices with complete transparency—no hidden costs, no surprises.",
    icon: FaRupeeSign,
  },
  {
    title: "Strong Team Collaboration",
    description:
      "Our skilled team of developers, designers, and marketers works together to ensure smooth project execution and outstanding results.",
    icon: FaPeopleCarry,
  },
  {
    title: "Commitment to Quality",
    description:
      "We follow strict quality standards in every project, ensuring reliable, secure, and high-performance solutions for your business.",
    icon: FaCheckCircle,
  },
  {
    title: "Innovative Thinking",
    description:
      "We stay updated with the latest technologies and trends to provide modern, future-ready solutions that give you a competitive edge.",
    icon: FaLightbulb,
  },
  {
    title: "Reliable Support & Maintenance",
    description:
      "Our dedicated support team is always available to assist you with updates, maintenance, and technical issues whenever needed.",
    icon: FaHeadset,
  },
];

const MotionBox = motion.create(Box);

/* ===================== TILT HANDLERS ===================== */

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

/* ===================== COMPONENT ===================== */

export default function WorkWithG36() {
  return (
    <Box py={{ base: 12, md: 20 }} bg="gray.50">
      <Container maxW="7xl">
        {/* Section Header */}
        <VStack spacing={4} mb={12} textAlign="center">
          <Heading textAlign="center" color="blue.600" fontSize={{ base: "xl", md: "3xl" }} mb={4} as="h2">
            Why Work With Genius36
          </Heading>
          <Text color="gray.600" maxW="3xl">
            We combine expertise, innovation, and dedication to deliver reliable
            digital and IT solutions that help your business grow with
            confidence.
          </Text>
        </VStack>

        {/* Cards Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} gap={6}>
          {reasons.map((item, index) => {
            const IconComp = item.icon;

            return (
              <MotionBox
                key={index}
                position="relative"
                borderRadius="xl"
                h="100%"
                p="1px"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                sx={{
                  // Gradient glow border
                  background:
                    "linear-gradient(135deg, #3b82f6, #9333ea, #06b6d4)",
                }}
              >
                {/* Inner Card */}
                <Box
                  borderRadius="xl"
                  backdropFilter="blur(14px)"
                  bg="rgba(255,255,255,0.85)"
                  p={{ base: 6, md: 8 }}
                  minH={{ base: "200px", md: "250px" }}   // ✅ SAME HEIGHT
                  h="100%"
                  boxShadow="0 20px 40px rgba(0,0,0,0.1)"
                  transition="box-shadow 0.3s ease"
                  _hover={{
                    boxShadow: "0 30px 60px rgba(59,130,246,0.35)",
                  }}
                >
                  <VStack align="start" spacing={4} h="100%">
                    {/* Icon */}
                    <Box
                      w="56px"
                      h="56px"
                      borderRadius="full"
                      bg="blue.500"
                      color="white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      transition="all 0.3s ease"
                      _hover={{
                        transform: "rotate(12deg) scale(1.15)",
                        bg: "blue.600",
                      }}
                    >
                      <Icon as={IconComp} boxSize={6} />
                    </Box>

                    {/* H3 Title */}
                    <Heading as="h3" size="md">
                      {item.title}
                    </Heading>

                    {/* Description */}
                    <Text color="gray.600" fontSize="sm" lineHeight="1.7">
                      {item.description}
                    </Text>
                  </VStack>
                </Box>
              </MotionBox>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
