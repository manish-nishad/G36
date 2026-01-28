import {
  Box,
  Flex,
  Text,
  Image,
  VStack,
  HStack,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaCogs,
  FaBlog,
  FaUserTie,
  FaInfoCircle,
  FaProjectDiagram,
  FaEnvelope,
  FaPhoneAlt,
  FaBookReader,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link as RouterLink } from "react-router-dom";

const MotionBox = motion(Box);

const navItems = [
  { label: "Home", icon: FaHome, path: "/" },
  { label: "Services", icon: FaCogs, path: "/services" },
  { label: "Projects", icon: FaProjectDiagram, path: "/projects" },
  { label: "Blogs", icon: FaBlog, path: "/blogs" },
  { label: "Training", icon: FaBookReader, path: "/training" },
  { label: "Contact", icon: FaEnvelope, path: "/contact" },
  { label: "About", icon: FaInfoCircle, path: "/about" },
  { label: "Career", icon: FaUserTie, path: "/career" },
];

export default function MacNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [hovered, setHovered] = useState(null);

  const breakpoint = useBreakpointValue({
    base: "mobile",
    md: "tablet",
    lg: "desktop",
  });

  if (!breakpoint) return null;

  /* ================= MOBILE ================= */
  if (breakpoint === "mobile") {
    return (
      <>
        {/* TOP BAR */}
        <Flex
          position="fixed"
          top="0"
          left="0"
          right="0"
          bg="rgba(255,255,255,0.95)"
          backdropFilter="blur(14px)"
          px={4}
          py={2}
          align="center"
          justify="space-between"
          boxShadow="md"
          zIndex={1000}
        >
          <RouterLink to="/" prefetch="intent">
            <Image
              src={logo}
              h="36px"
              cursor="pointer"
            />
          </RouterLink>

          <Button
            size="sm"
            bg="#04327b"
            color="white"
            leftIcon={<FaPhoneAlt />}
            onClick={() => (window.location.href = "tel:08200593901")}
          >
            Call
          </Button>
        </Flex>

        {/* BOTTOM DOCK */}
        <Flex
          position="fixed"
          bottom="0"
          left="0"
          right="0"
          bg="rgba(255,255,255,0.95)"
          backdropFilter="blur(16px)"
          justify="space-around"
          py={3}
          boxShadow="0 -6px 20px rgba(0,0,0,0.15)"
          zIndex={1000}
        >
          {navItems.slice(0, 5).map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <MotionBox
                key={index}
                onClick={() => navigate(item.path)}
                animate={{ scale: isActive ? 1.15 : 1 }}
              >
                <VStack spacing={1}>
                  <Box
                    p={2}
                    borderRadius="12px"
                    bg={isActive ? "#04327b" : "#93b7f1"}
                  >
                    <Icon size={20} color={isActive ? "white" : "#04327b"} />
                  </Box>
                  <Text fontSize="10px">{item.label}</Text>
                </VStack>
              </MotionBox>
            );
          })}
        </Flex>
      </>
    );
  }

  /* ================= TABLET ================= */
  if (breakpoint === "tablet") {
    return (
      <Flex
        position="fixed"
        top="0"
        left="0"
        right="0"
        h="70px"
        bg="white"
        align="center"
        justify="space-between"
        px={6}
        boxShadow="md"
        zIndex={1000}
      >
        <RouterLink to="/" prefetch="intent">
          <Image src={logo} h="44px" cursor="pointer" />
        </RouterLink>

        <HStack spacing={4}>
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <MotionBox
                key={index}
                onClick={() => navigate(item.path)}
                whileHover={{ y: -4, scale: 1.05 }}
              >
                <VStack spacing={1}>
                  <Box
                    p={2}
                    borderRadius="14px"
                    bg={isActive ? "#04327b" : "#93b7f1"}
                  >
                    <Icon size={18} color={isActive ? "white" : "#04327b"} />
                  </Box>
                  <Text fontSize="11px" fontWeight="600">
                    {item.label}
                  </Text>
                </VStack>
              </MotionBox>
            );
          })}
        </HStack>

        <Button
          size="sm"
          bg="#04327b"
          color="white"
          leftIcon={<FaPhoneAlt />}
          onClick={() => (window.location.href = "tel:08200593901")}
        >
          Call
        </Button>
      </Flex>
    );
  }

  /* ================= DESKTOP ================= */
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      right="0"
      h="76px"
      bg="white"
      align="center"
      justify="center"
      boxShadow="lg"
      zIndex={1000}
    >
      {/* LOGO */}
      <Box position="absolute" left="220px">
        <RouterLink to="/" prefetch="intent">
          <Image src={logo} h="58px" cursor="pointer" />
        </RouterLink>
      </Box>

      {/* NAV */}
      <HStack spacing={7}>
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <MotionBox
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navigate(item.path)}
              animate={{
                y: hovered === index ? -4 : 0,
                scale: hovered === index ? 1.12 : 1,
              }}
            >
              <VStack spacing={1}>
                <Box
                  p={2}
                  borderRadius="16px"
                  bg={isActive ? "#04327b" : "#93b7f1"}
                  boxShadow={
                    isActive || hovered === index
                      ? "0 0 12px rgba(4,50,123,0.6)"
                      : "none"
                  }
                >
                  <Icon size={22} color={isActive ? "white" : "#04327b"} />
                </Box>
                <Text
                  fontSize="12px"
                  fontWeight="600"
                  color={isActive ? "#04327b" : "gray.600"}
                >
                  {item.label}
                </Text>
              </VStack>
            </MotionBox>
          );
        })}
      </HStack>

      {/* CALL */}
      <Box position="absolute" right="220px">
        <Button
          bg="#04327b"
          color="white"
          leftIcon={<FaPhoneAlt />}
          _hover={{ bg: "#03245a" }}
          onClick={() => (window.location.href = "tel:08200593901")}
        >
          Call Now
        </Button>
      </Box>
    </Flex>
  );
}
