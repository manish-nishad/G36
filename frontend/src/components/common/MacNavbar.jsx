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
  FaChalkboardTeacher,
  FaEnvelope,
  FaUserShield,
  FaPhoneAlt,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import Lottie from "lottie-react";
// import CompanyLogo from "../../assets/lottie/company logo.json";

const MotionBox = motion(Box);

const navItems = [
  { label: "Home", icon: FaHome, path: "/" },
  { label: "Services", icon: FaCogs, path: "/services" },
  { label: "Projects", icon: FaProjectDiagram, path: "/projects" },
  { label: "Blogs", icon: FaBlog, path: "/blogs" },
  // { label: "Training", icon: FaChalkboardTeacher, path: "/training" },
  { label: "Career", icon: FaUserTie, path: "/career" },
  { label: "About", icon: FaInfoCircle, path: "/about" },
  { label: "Contact", icon: FaEnvelope, path: "/contact" },
  // { label: "Admin", icon: FaUserShield, path: "/admin" },
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
          bg="rgba(255,255,255,0.9)"
          backdropFilter="blur(14px)"
          px={4}
          py={2}
          align="center"
          justify="space-between"
          boxShadow="md"
          zIndex={1000}
        >
          <Image
            src={logo}
            height="36px"
            cursor="pointer"
            onClick={() => navigate("/")}
          />

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
                transition={{ type: "spring", stiffness: 220 }}
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

  /* ================= TABLET + DESKTOP ================= */
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      right="0"
      height="72px"
      align="center"
      justify="center"
      bg="white"
      backdropFilter="blur(18px)"
      borderBottom="1px solid rgba(0,0,0,0.05)"
      boxShadow="lg"
      zIndex={1000}
    >
      {/* LEFT LOGO */}
      <Box position="absolute" left="24px">
        <Image
          src={logo}
          height={breakpoint === "tablet" ? "52px" : "58px"}
          cursor="pointer"
          onClick={() => navigate("/")}
        />

      </Box>

      {/* CENTER ICON + TEXT */}
      <HStack spacing={breakpoint === "tablet" ? 4 : 6}>
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          const isHovered = hovered === index;

          return (
            <MotionBox
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navigate(item.path)}
              cursor="pointer"
              animate={{
                scale: isHovered ? 1.12 : 1,
                y: isHovered ? -4 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 18,
              }}
            >
              <VStack spacing={1}>
                {/* ICON */}
                <Box
                  p={2}
                  borderRadius="16px"
                  bg={isActive ? "#04327b" : "#93b7f1"}
                  boxShadow={
                    isActive || isHovered
                      ? "0 0 12px rgba(4,50,123,0.7)"
                      : "none"
                  }
                  transition="all 0.3s ease"
                >
                  <Icon
                    size={breakpoint === "tablet" ? 20 : 22}
                    color={isActive ? "white" : "#04327b"}
                  />
                </Box>

                {/* TEXT — ALWAYS VISIBLE */}
                <Text
                  fontSize="12px"
                  fontWeight="600"
                  color={isActive || isHovered ? "#04327b" : "gray.600"}
                  opacity={isActive || isHovered ? 1 : 0.85}
                  transition="all 0.25s ease"
                >
                  {item.label}
                </Text>
              </VStack>
            </MotionBox>
          );
        })}
      </HStack>

      {/* RIGHT CALL BUTTON */}
      <Box position="absolute" right="24px">
        <Button
          size={breakpoint === "tablet" ? "sm" : "md"}
          leftIcon={<FaPhoneAlt />}
          bg="#04327b"
          color="white"
          _hover={{
            bg: "#03245a",
            boxShadow: "0 0 14px rgba(4,50,123,0.8)",
          }}
          onClick={() => (window.location.href = "tel:08200593901")}
        >
          Call Now
        </Button>
      </Box>
    </Flex>
  );
}
