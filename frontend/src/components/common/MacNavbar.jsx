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
import { motion, AnimatePresence } from "framer-motion";
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
import logo from "../../assets/images/logo.png"; // ✅ Vite safe import

const MotionBox = motion(Box);

const navItems = [
  { label: "Home", icon: FaHome, path: "/" },
  { label: "Services", icon: FaCogs, path: "/services" },
  { label: "Projects", icon: FaProjectDiagram, path: "/projects" },
  { label: "Blogs", icon: FaBlog, path: "/blogs" },
  { label: "Training", icon: FaChalkboardTeacher, path: "/training" },
  { label: "Career", icon: FaUserTie, path: "/career" },
  { label: "About", icon: FaInfoCircle, path: "/about" },
  { label: "Contact", icon: FaEnvelope, path: "/contact" },
  { label: "Admin", icon: FaUserShield, path: "/admin" },
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
          bg="rgba(255,255,255,0.85)"
          backdropFilter="blur(14px)"
          px={4}
          py={2}
          align="center"
          justify="space-between"
          boxShadow="0 6px 20px rgba(0,0,0,0.12)"
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
            _hover={{ bg: "#03245a" }}
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
          bg="rgba(255,255,255,0.9)"
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
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
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
      bg="rgba(255,255,255,0.75)"
      backdropFilter="blur(18px)"
      borderBottom="1px solid rgba(255,255,255,0.4)"
      boxShadow="0 10px 30px rgba(0,0,0,0.12)"
      zIndex={1000}
    >
      {/* LEFT LOGO */}
      <Box position="absolute" left="24px">
        <Image
          src={logo}
          height={breakpoint === "tablet" ? "36px" : "42px"}
          cursor="pointer"
          onClick={() => navigate("/")}
        />
      </Box>

      {/* CENTER ICON BAR */}
      <HStack spacing={breakpoint === "tablet" ? 4 : 6}>
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <MotionBox
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navigate(item.path)}
              style={{ perspective: 800 }}
              animate={{
                scale: hovered === index ? 1.15 : 1,
                rotateX: hovered === index ? -8 : 0,
                rotateY: hovered === index ? 8 : 0,
                y: hovered === index ? -4 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 20,
                mass: 0.6,
              }}
            >
              <VStack spacing={1}>
                <Box
                  p={2}
                  borderRadius="16px"
                  bg={isActive ? "#04327b" : "#93b7f1"}
                  boxShadow={
                    isActive
                      ? "0 0 14px rgba(4,50,123,0.9)"
                      : hovered === index
                      ? "0 0 10px rgba(4,50,123,0.6)"
                      : "none"
                  }
                  transition="all 0.3s ease"
                >
                  <Icon
                    size={breakpoint === "tablet" ? 20 : 22}
                    color={isActive ? "white" : "#04327b"}
                  />
                </Box>

                <AnimatePresence>
                  {hovered === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Text fontSize="12px" color="#04327b" fontWeight="600">
                        {item.label}
                      </Text>
                    </motion.div>
                  )}
                </AnimatePresence>
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
