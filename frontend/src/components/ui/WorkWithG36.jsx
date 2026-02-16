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
      `Your success is our priority. We listen carefully to your requirements and work closely with you to deliver solutions that match your business goals. Our dedicated team maintains transparent communication throughout the project lifecycle, ensuring your vision is perfectly translated into reality with personalized attention and continuous collaboration.`,

      icon: FaUsers,
  },
  {
    title: "End-to-End Solutions",
    description:`From initial consultation to post-deployment support, we provide comprehensive services under one roof. Whether you need web development, digital marketing, cybersecurity, or IT training, our integrated approach ensures seamless coordination, consistent quality, and faster project completion without the hassle of managing multiple vendors.`,
    icon: FaRupeeSign,
  },
  {
    title: "Cutting-Edge Technology Stack",
    description:`We leverage the latest technologies and industry best practices to build future-proof solutions. Our expertise spans modern frameworks like Laravel, React, Flutter, cloud platforms (AWS, Azure), AI/ML integration, and automation tools. We continuously upgrade our skills to deliver innovative solutions that keep you ahead of the competition.`,
    icon: FaPeopleCarry,
  },
  {
    title: "Proven Expertise & Experience",
    description:
      "we bring deep technical knowledge across web development, digital marketing, cloud solutions, and emerging technologies. Our portfolio demonstrates successful project delivery for diverse industries, combining innovation with proven methodologies to deliver reliable, high-quality results every time.",
    icon: FaCheckCircle,
  },
  {
    title: "Cost-Effective & Transparent Pricing",
    description:`We offer competitive pricing without compromising on quality. Our transparent quotation process ensures no hidden costs, and flexible engagement models (fixed-price, hourly, or retainer) fit various budgets. We maximize your ROI by delivering efficient solutions that reduce operational costs and drive measurable business growth.`,
    icon: FaLightbulb,
  },
  {
    title: "Timely Delivery & Ongoing Support",
    description:`We respect deadlines and deliver projects on time through agile methodologies and efficient project management. Our commitment extends beyond launch with comprehensive maintenance, 24/7 technical support, regular updates, and scalability options. We build long-term partnerships, ensuring your technology infrastructure evolves with your growing business needs.`,
    icon: FaHeadset,
  },
];

const MotionBox = motion(Box);

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
                    <Text color="gray.600" fontSize="sm" lineHeight="1.7" textAlign="justify">
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
