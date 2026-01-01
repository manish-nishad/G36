import {
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  VStack,
  HStack,
  Link,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Box bg="#0B0E13" color="gray.300" pt={{ base: 10, md: 16 }} pb={6} border="1px solid Black">
      {/* ================= MAIN GRID ================= */}
      <Grid
        templateColumns={{
          base: "1fr",
          md: "1fr 1fr",
          lg: "2fr 1fr 1fr 2fr",
        }}
        gap={{ base: 8, md: 10 }}
        px={{ base: 6, md: 12, lg: 20 }}
      >
        {/* ========== COMPANY INFO ========== */}
        <GridItem>
          <VStack
            align={{ base: "center", md: "flex-start" }}
            spacing={4}
            textAlign={{ base: "center", md: "left" }}
          >
            <Image src={logo} alt="Genius36 Technologies" height="48px" />

            <Text fontSize="sm" lineHeight="1.8">
              Your trusted pan-India IT solutions partner
              delivering excellence in technology services and training.
            </Text>

            {/* SOCIAL ICONS */}
            <HStack spacing={4} justify={{ base: "center", md: "flex-start" }}>
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                (Icon, index) => (
                  <Box
                    key={index}
                    p={2}
                    borderRadius="50%"
                    bg="gray.700"
                    cursor="pointer"
                    _hover={{ bg: "#04327b" }}
                    transition="all 0.3s ease"
                  >
                    <Icon size={14} color="white" />
                  </Box>
                )
              )}
            </HStack>
          </VStack>
        </GridItem>

        {/* ========== QUICK LINKS ========== */}
        <GridItem>
          <VStack align={{ base: "center", md: "flex-start" }} spacing={3}>
            <Text fontWeight="600" color="white">
              Quick Links
            </Text>

            {[
              { label: "Home", path: "/" },
              { label: "Services", path: "/services" },
              { label: "Projects", path: "/projects" },
              { label: "Blogs", path: "/blogs" },
              { label: "Career", path: "/career" },
              { label: "Contact", path: "/contact" },
            ].map((item, index) => (
              <Link
                key={index}
                fontSize="sm"
                color="white"
                onClick={() => navigate(item.path)}
                _hover={{ color: "#04327b" }}
              >
                {item.label}
              </Link>
            ))}
          </VStack>
        </GridItem>

        {/* ========== SERVICES ========== */}
        <GridItem>
          <VStack align={{ base: "center", md: "flex-start" }} spacing={3}>
            <Text fontWeight="600" color="white">
              Services
            </Text>

            {[
              "Web Development",
              "Software Solutions",
              "CCTV & Security",
              "Networking",
              "Cloud Solutions",
              "IT Training",
            ].map((service, index) => (
              <Text key={index} fontSize="sm">
                {service}
              </Text>
            ))}
          </VStack>
        </GridItem>

        {/* ========== CONTACT US ========== */}
        <GridItem>
          <VStack
            align={{ base: "center", md: "flex-start" }}
            spacing={4}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text fontWeight="600" color="white">
              Contact Us
            </Text>

            <HStack align="start">
              <FaMapMarkerAlt color="#04327b" />
              <Text fontSize="sm">
                Maroda Tank, Utai Rd, near Police Station, Ajad Nagar, Newai,
                Bhilai, Chhattisgarh 490006
              </Text>
            </HStack>

            <HStack>
              <FaPhoneAlt color="#04327b" />
              <Link href="tel:08200593901" fontSize="sm" color="white">
                082005 93901
              </Link>
            </HStack>

            <HStack>
              <FaEnvelope color="#04327b" />
              <Link href="mailto:info@genius36tech.com" fontSize="sm" color="white">
                info@genius36tech.com
              </Link>
            </HStack>

            <HStack>
              <FaClock color="#04327b" />
              <Text fontSize="sm">
                Monday – Saturday
                <br />
                9:00 AM – 6:30 PM
              </Text>
            </HStack>
          </VStack>
        </GridItem>
      </Grid>

      {/* ========== BOTTOM LINE ========== */}
      <Box mt={10} height="1px" bg="gray.700" />

      <Text textAlign="center" fontSize="sm" color="gray.500" mt={4}>
        © {new Date().getFullYear()} Genius36 Technologies India LLP.
        All rights reserved.
      </Text>
    </Box>
  );
}
