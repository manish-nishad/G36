import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Badge,
} from "@chakra-ui/react";
import { Accordion } from "@chakra-ui/react";
import {
  FaLaptopCode,
  FaBullhorn,
  FaChalkboardTeacher,
  FaServer,
  FaCogs,
  FaCloud,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";
import { CheckCircle } from "lucide-react";
import webdevelopment from "../../assets/images/webdevelopment.jpg"
import seo from "../../assets/images/marketer_online_1.jpg"
import ittraining from "../../assets/images/teaching-students-online.jpg"
import itsupport from "../../assets/images/support-team-abstract.jpg"
import business from "../../assets/images/Business Automation & Tools.jpg"
import cloud from "../../assets/images/cloud services isometric icons-06.jpg"
import cyber from "../../assets/images/Cyber Security & Data Protection.jpg"
import emerge from "../../assets/images/Emerging Technology Solutions.jpg"

/* ===================== DATA ===================== */

const offerings = [
  {
    title: "Web & Software Development",
    icon: FaLaptopCode,
    image: webdevelopment,
    description:
      "We create fast, secure, and user-friendly websites and software tailored to your business needs. Our solutions enhance user experience and support long-term scalability.",
    items: [
      "Website Design",
      "Web Apps",
      "CRM",
      "ERP",
      "Mobile Apps",
      "Custom Software",
      "Maintenance",
    ],
  },
  {
    title: "Digital Marketing & SEO Solutions",
    icon: FaBullhorn,
    image: seo,
    description:
      "Boost your online visibility and attract more customers with our data-driven marketing strategies and SEO services.",
    items: [
      "SEO",
      "Social Media Marketing",
      "Google Ads",
      "Branding",
      "Content Marketing",
      "Lead Generation",
    ],
  },
  {
    title: "IT Training & Skill Development",
    icon: FaChalkboardTeacher,
    image: ittraining,
    description:
      "We provide industry-focused training programs for students and professionals to build strong technical skills.",
    items: [
      "Web Development",
      "Digital Marketing",
      "Programming",
      "AI Basics",
      "Software Tools",
      "Career Guidance",
    ],
  },
  {
    title: "IT Support & Managed Services",
    icon: FaServer,
    image: itsupport,
    description:
      "Ensure smooth business operations with reliable IT infrastructure and technical support.",
    items: [
      "System Setup",
      "Network Support",
      "Data Backup",
      "Maintenance",
      "Security Solutions",
    ],
  },
  {
    title: "Business Automation & Tools",
    icon: FaCogs,
    image: business,
    description:
      "Simplify workflows and improve efficiency with smart automation and business systems.",
    items: [
      "Billing Software",
      "Inventory Management",
      "HR Tools",
      "CRM Integration",
      "Process Automation",
    ],
  },
  {
    title: "Cloud & Hosting Services",
    icon: FaCloud,
    image: cloud,
    description:
      "Secure hosting and cloud solutions to keep your data safe and accessible anytime.",
    items: [
      "Web Hosting",
      "Cloud Storage",
      "Email Hosting",
      "Server Management",
      "Backup Solutions",
    ],
  },
  {
    title: "Emerging Technology Solutions",
    icon: FaRobot,
    image: emerge,
    description:
      "Innovative technologies designed for modern businesses and digital growth.",
    items: [
      "AI Tools",
      "Chatbots",
      "Data Analytics",
      "IoT Integration",
      "Smart Applications",
    ],
  },
  {
    title: "Cyber Security & Data Protection",
    icon: FaShieldAlt,
    image: cyber,
    description:
      "Protect your business from digital threats with advanced security solutions.",
    items: [
      "Website Security",
      "Firewall Setup",
      "Data Encryption",
      "Compliance Support",
      "Risk Management",
    ],
  },
];

const handleTiltMove = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 8;   // up-down
  const rotateY = ((x - centerX) / centerX) * -8;  // left-right

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
};

const handleTiltLeave = (e) => {
  const card = e.currentTarget;
  card.style.transform =
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
};


/* ===================== COMPONENT ===================== */

export default function OurOfferings() {
  return (
    <Box py={20} bg="gray.50">
      <Container maxW="6xl">
        {/* Header */}
        <VStack spacing={4} mb={12} textAlign="center">
          <Heading fontSize={{ base: "xl", md: "3xl" }} color="blue.600" letterSpacing="widest" as="h2">
            OUR OFFERINGS
          </Heading>
          <Heading size={{ base: "xl", md: "2xl" }}>
            Smart Digital, IT & Training Solutions
          </Heading>
          <Text color="gray.600" maxW="4xl">
            We combine technology, creativity, and expertise to help businesses
            and students grow in the digital age. From building modern websites
            to delivering advanced IT training, Genius36 provides reliable,
            result-oriented solutions.
          </Text>
        </VStack>


        {/* Accordion */}
        <Accordion.Root collapsible>
          {offerings.map((offer, index) => {
            const IconComp = offer.icon;

            return (
              <Accordion.Item
                key={index}
                value={`offer-${index}`}
                mb={4}
                bg="white"
                borderRadius="lg"
                boxShadow="sm"
                overflow="hidden"
                borderLeft="4px solid"
                borderLeftColor="transparent"
                transition="all 0.3s ease"
                transformStyle="preserve-3d"
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltLeave}
                _hover={{
                  transform:
                    "perspective(1000px) rotateX(2deg) rotateY(-2deg) translateY(-4px)",
                  boxShadow: "0 20px 60px rgba(59,130,246,0.35)",
                  backdropFilter: "blur(6px)",
                }}
                _open={{
                  borderLeftColor: "blue.500",
                  boxShadow: "0 16px 50px rgba(59,130,246,0.35)",
                }}
              >
                <Accordion.ItemTrigger>
                  <HStack
                    w="100%"
                    justify="space-between"
                    px={5}
                    py={4}
                    _hover={{ bg: "gray.50" }}
                  >
                    <HStack spacing={4}>
                      <Box
                        w="44px"
                        h="44px"
                        borderRadius="full"
                        bg="blue.500"
                        color="white"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Icon as={IconComp} boxSize={5} />
                      </Box>
                      <Text fontWeight="600">{offer.title}</Text>
                    </HStack>

                    <Accordion.ItemIndicator />
                  </HStack>
                </Accordion.ItemTrigger>

                <Accordion.ItemContent>
                  <Accordion.ItemBody>
                    <Box px={5} pb={5}>
                      <HStack
                        align="start"
                        spacing={6}
                        flexDir={{ base: "column", md: "row" }} // mobile me stack, desktop me 2 column
                      >
                        {/* LEFT: TEXT CONTENT */}
                        <Box flex="1">
                          <Text color="gray.600" mb={4}>
                            {offer.description}
                          </Text>

                          <VStack align="start" spacing={2}>
                            {offer.items.map((item, i) => (
                              <HStack key={i} spacing={2}>
                                <Icon
                                  as={CheckCircle}
                                  color="blue.500"
                                  boxSize={4}
                                />
                                <Badge colorPalette="blue" fontSize="sm" color="gray.700">
                                  {item}
                                </Badge>
                              </HStack>
                            ))}
                          </VStack>
                        </Box>

                        {/* RIGHT: IMAGE */}
                        {offer.image && (
                          <Box
                            flex="1"
                            maxW={{ base: "100%", md: "300px" }}
                            height={{ base: "200px", md: "300px" }}
                            borderRadius="lg"
                            overflow="hidden"
                          >
                            <img
                              src={offer.image}
                              alt={offer.title}
                              style={{
                                width: "100%",
                                height: "100%",
                                maxHeight: "320px",
                                objectFit: "cover",
                                borderRadius: "8px",
                              }}
                            />
                          </Box>
                        )}
                      </HStack>
                    </Box>
                  </Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            );
          })}
        </Accordion.Root>
      </Container>
    </Box>
  );
}
