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
       `Transform your digital presence with our expert web and software development services.
        We specialize in custom website design, responsive web applications, e-commerce platforms, 
        and enterprise software solutions tailored to your business needs. Our experienced development
        team leverages cutting-edge technologies including PHP, Laravel, CodeIgniter, React, Angular, 
        and Node.js to deliver scalable, secure, and high-performance applications. From dynamic CMS-based 
        websites to complex business management systems, we provide end-to-end development services covering frontend design, 
        backend architecture, database optimization, and API integration. Whether you need a corporate website, mobile-responsive web app, 
        or custom software solution, we ensure seamless user experience and robust functionality`,
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
      `Boost your online visibility and drive targeted traffic with our comprehensive digital marketing and SEO solutions.
       We offer data-driven strategies encompassing search engine optimization, social media marketing, content marketing, 
       PPC advertising, and email campaigns to maximize your ROI. Our SEO experts specialize in on-page optimization, 
       off-page link building, technical SEO audits, keyword research, and local SEO to improve your search rankings on Google and other search engines. 
       From Google Ads management to social media advertising, we create compelling campaigns that convert visitors into customers.
        Our digital marketing services include brand development,
        online reputation management, and analytics-driven performance tracking for measurable business growth.`,
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
       `Empower your workforce with our comprehensive IT training and skill development 
        programs designed for professionals and beginners alike. We offer hands-on 
        training in web development, programming languages, digital marketing, cybersecurity,
        cloud computing, and emerging technologies through expert-led courses and practical workshops.
        Our curriculum covers popular technologies including PHP, Laravel, Python, Java, React, Angular, Android development, 
        and database management tailored to industry requirements. Whether you're seeking corporate training solutions, 
        certification courses, or individual skill enhancement, our experienced instructors provide personalized learning paths with real-world
         projects and assignments. From bootcamps to advanced masterclasses, we ensure job-ready skills and continuous professional development.`,
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
      "Ensure seamless business operations with our reliable IT support and managed services offering 24/7 technical assistance and proactive system maintenance. We provide comprehensive help desk support, network monitoring, server management, hardware troubleshooting, and software maintenance to minimize downtime and maximize productivity. Our certified technicians deliver remote support, on-site assistance, system upgrades, backup solutions, and disaster recovery planning tailored to your infrastructure needs. From desktop support to enterprise-level managed services, we handle routine maintenance, security patches, performance optimization, and technical consultations. Whether you need break-fix support or complete IT infrastructure management, our service level agreements guarantee rapid response times and expert problem resolution.",
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
        `Streamline operations and boost efficiency with our business automation solutions and custom tools designed to eliminate repetitive tasks and optimize workflows. We develop intelligent automation systems for inventory management, invoice generation, customer relationship management, email marketing, data synchronization, and reporting processes using cutting-edge technologies. Our expertise includes workflow automation, chatbot development, robotic process automation (RPA), document management systems, and integration platforms connecting your existing software ecosystems. From automating sales pipelines to implementing AI-powered customer service tools, we deliver scalable solutions that reduce manual effort, minimize errors, and accelerate business growth. Transform your operations with smart automation tailored to your unique requirements.`,
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
      `Experience reliable, scalable, and secure cloud infrastructure with our comprehensive hosting services powered by industry-leading platforms. We offer shared hosting, VPS hosting, dedicated servers, cloud hosting, and managed WordPress solutions with 99.9% uptime guarantee and lightning-fast performance. Our services include domain registration, SSL certificates, email hosting, website migration, automatic backups, and 24/7 server monitoring to ensure your online presence remains secure and accessible. Whether you need cost-effective shared hosting for small websites or enterprise-grade cloud infrastructure with load balancing and auto-scaling, we provide tailored solutions with cPanel access, one-click installations, and expert technical support for seamless deployment and management.`,
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
      `Stay ahead in the digital transformation journey with our cutting-edge emerging technology solutions incorporating artificial intelligence, machine learning, blockchain, Internet of Things, and augmented reality. We develop intelligent applications featuring AI chatbots, predictive analytics, computer vision, natural language processing, and automation systems that revolutionize business operations. Our expertise spans IoT device integration, smart sensor networks, blockchain-based applications, AR/VR experiences, and voice-enabled assistants using technologies like TensorFlow, OpenAI, IBM Watson, and custom algorithms. From implementing smart automation to creating immersive digital experiences, we help businesses leverage next-generation technologies for competitive advantage, enhanced customer engagement, and operational excellence through innovation-driven solutions.`,
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
      `Safeguard your digital assets with our comprehensive cybersecurity and data protection services designed to defend against evolving threats and ensure regulatory compliance. We provide vulnerability assessment, penetration testing, security audits, firewall configuration, intrusion detection systems, and malware protection using industry-standard tools and frameworks. Our services encompass data encryption, secure backup solutions, access control management, GDPR compliance, ISO 27001 consulting, and incident response planning to protect sensitive information. From implementing multi-factor authentication to developing disaster recovery strategies, we deliver layered security solutions including web application security, network protection, endpoint security, and security awareness training for complete organizational defense.`,
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
                          <Text color="gray.600" mb={4} textAlign="justify">
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
