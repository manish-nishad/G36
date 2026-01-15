import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  SimpleGrid,
  Icon,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import Seo from "../seo/Seo";
import Lottie from "lottie-react";
import Facebook from "../assets/lottie/Facebook.json";
import Instagram from "../assets/lottie/Instagram.json";
import Youtube from "../assets/lottie/Youtube.json";
import LinkedIn from "../assets/lottie/Linkdin.json";
import Whatsapp from "../assets/lottie/Whatsapp.json";
// import Twitter from "../assets/lottie/Twitter.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ show: false, type: "", message: "" });

    try {
      const response = await axios.post(`${API_URL}/api/contact`, formData);

      if (response.data.success) {
        setAlert({
          show: true,
          type: "success",
          message:
            response.data.message ||
            "Thank you for contacting us! We'll get back to you soon.",
        });

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        // Hide alert after 5 seconds
        setTimeout(() => {
          setAlert({ show: false, type: "", message: "" });
        }, 5000);
      }
    } catch (error) {
      setAlert({
        show: true,
        type: "error",
        message:
          error.response?.data?.message ||
          "Failed to send message. Please try again later.",
      });

      // Hide alert after 5 seconds
      setTimeout(() => {
        setAlert({ show: false, type: "", message: "" });
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Seo
        title="Contact Us | Genius36 Technologies"
        description="Get in touch with Genius36 Technologies for IT solutions, training programs, and consultation services."
      />
      <Box py={20} bg="gray.50" minH="100vh">
        <Container maxW="7xl">
          <VStack spacing={12} align="stretch">
            {/* Heading */}
            <Box textAlign="center">
              <Heading size="2xl" mb={4} color="gray.800">
                Get In Touch
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
                Have questions or ready to transform your technology
                infrastructure? Contact us today.
              </Text>
            </Box>

            {/* Alert Messages */}
            {alert.show && (
              <Box
                p={4}
                borderRadius="md"
                mb={4}
                bg={alert.type === "success" ? "green.50" : "red.50"}
                borderLeft="4px solid"
                borderColor={alert.type === "success" ? "green.500" : "red.500"}
              >
                <Text
                  fontWeight="600"
                  color={alert.type === "success" ? "green.800" : "red.800"}
                  mb={1}
                >
                  {alert.type === "success" ? "Success!" : "Error"}
                </Text>
                <Text
                  color={alert.type === "success" ? "green.700" : "red.700"}
                >
                  {alert.message}
                </Text>
              </Box>
            )}

            {/* Main Content Grid */}
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} gap={20}>
              {/* Contact Form */}
              <Box>
                <Heading size="lg" mb={6} color="gray.800">
                  Send Us a Message
                </Heading>
                <Box
                  as="form"
                  onSubmit={handleSubmit}
                  bg="white"
                  p={8}
                  borderRadius="xl"
                  boxShadow="md"
                >
                  <VStack spacing={5}>
                    <Input
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      size="md"
                      required
                      bg="white"
                      borderColor="gray.300"
                      _hover={{ borderColor: "gray.400" }}
                      _focus={{
                        borderColor: "brand.500",
                        boxShadow: "0 0 0 1px #04327b",
                      }}
                    />

                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      size="md"
                      required
                      bg="white"
                      borderColor="gray.300"
                      _hover={{ borderColor: "gray.400" }}
                      _focus={{
                        borderColor: "brand.500",
                        boxShadow: "0 0 0 1px #04327b",
                      }}
                    />

                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      size="md"
                      required
                      bg="white"
                      borderColor="gray.300"
                      _hover={{ borderColor: "gray.400" }}
                      _focus={{
                        borderColor: "brand.500",
                        boxShadow: "0 0 0 1px #04327b",
                      }}
                    />

                    <Box
                      as="select"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      w="full"
                      h="48px"
                      px={4}
                      bg="white"
                      borderWidth="1px"
                      borderColor="gray.300"
                      borderRadius="md"
                      fontSize="md"
                      _hover={{ borderColor: "gray.400" }}
                      _focus={{
                        borderColor: "brand.500",
                        boxShadow: "0 0 0 1px #04327b",
                        outline: "none",
                      }}
                    >
                      <option value="">Select a subject</option>
                      <option value="Lab Setup">Lab Setup & AMC</option>
                      <option value="Security Systems">Security Systems</option>
                      <option value="Training Programs">
                        Training Programs
                      </option>
                      <option value="Other">Other</option>
                    </Box>

                    <Textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      size="xs"
                      rows={6}
                      required
                      bg="white"
                      borderColor="gray.300"
                      _hover={{ borderColor: "gray.400" }}
                      _focus={{
                        borderColor: "brand.500",
                        boxShadow: "0 0 0 1px #04327b",
                      }}
                    />

                    <Button
                      type="submit"
                      size="md"
                      w="full"
                      bg="brand.500"
                      color="white"
                      _hover={{ bg: "#03255a" }}
                      transition="all 0.3s"
                      isLoading={loading}
                      loadingText="Sending..."
                      disabled={loading}
                    >
                      Send Message
                    </Button>
                  </VStack>
                </Box>
                <Box borderRadius="xl" boxShadow="md" mt={4} p={4} bg="white">
                  <Text fontSize="sm" color="gray.800" mt={2} fontWeight="800">
                    Find Us on the Map:{" "}
                    <Box
                      borderRadius="lg"
                      overflow="hidden"
                      w="100%"
                      h={{ base: "300px", md: "220px" }}
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25923.979038964844!2d81.32175730489945!3d21.157357643339893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfcc82501b9f%3A0xeb84b5c363036f34!2sGenius36%20Technolgies%20India%20LLP!5e0!3m2!1sen!2sin!4v1768401597073!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Genius36 Technologies Location"
                      />
                    </Box>
                  </Text>
                </Box>
              </Box>

              {/* Contact Information */}
              <Box>
                <Heading size="lg" mb={6} color="gray.800">
                  Contact Information
                </Heading>
                <VStack spacing={6} align="stretch">
                  {/* Address */}
                  <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
                    <HStack align="start" spacing={4}>
                      <img
                        src="public/location.gif"
                        alt="location"
                        width={50}
                        height={50}
                        style={{ objectFit: "contain" }}
                      />
                      <VStack align="start" spacing={1}>
                        <Text fontWeight="600" color="gray.800">
                          Address
                        </Text>
                        <Text fontSize="sm" color="gray.600" lineHeight="1.6">
                          Satya Narayan Sadan, Beside Shiv Temple <br />
                          Near by Police Station Newai
                          <br />
                          Maroda Tank, Bhilai
                          <br />
                          Chhattisgarh 490006
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>

                  {/* Phone */}
                  <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
                    <HStack align="start" spacing={4}>
                      <img
                        src="public/phone-contact.gif"
                        alt="phone"
                        width={50}
                        height={50}
                        style={{ objectFit: "contain" }}
                      />
                      <VStack align="start" spacing={1}>
                        <Text fontWeight="600" color="gray.800">
                          Phone
                        </Text>
                        <Link
                          href="tel:+918200593901"
                          fontSize="sm"
                          color="gray.600"
                          _hover={{ color: "brand.500" }}
                        >
                          +91 8200593901
                        </Link>
                      </VStack>
                    </HStack>
                  </Box>

                  {/* Email */}
                  <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
                    <HStack align="start" spacing={4}>
                      <img
                        src="public/email.gif"
                        alt="Email"
                        width={50}
                        height={50}
                        style={{ objectFit: "contain" }}
                      />
                      <VStack align="start" spacing={1}>
                        <Text fontWeight="600" color="gray.800">
                          Email
                        </Text>
                        <VStack align="start" spacing={1}>
                          <Link
                            href="mailto:info@genius36.com"
                            fontSize="sm"
                            color="gray.600"
                            _hover={{ color: "brand.500" }}
                          >
                            info@genius36.com
                          </Link>
                          <Link
                            href="mailto:support@genius36.com"
                            fontSize="sm"
                            color="gray.600"
                            _hover={{ color: "brand.500" }}
                          >
                            support@genius36.com
                          </Link>
                        </VStack>
                      </VStack>
                    </HStack>
                  </Box>

                  {/* Business Hours */}
                  <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
                    <HStack align="start" spacing={4}>
                      <img
                        src="public/clock.gif"
                        alt="clock"
                        width={50}
                        height={50}
                        style={{ objectFit: "contain" }}
                      />
                      <VStack align="start" spacing={1}>
                        <Text fontWeight="600" color="gray.800">
                          Business Hours
                        </Text>
                        <Text fontSize="sm" color="gray.600" lineHeight="1.6">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 2:00 PM
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>


                  {/* Social Media */}
                  <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
                    <Text fontWeight="600" color="gray.800">
                      Connect With Us
                    </Text>

                    <HStack spacing={2}>
                      {[
                        {
                          animation: Facebook,
                          href: "https://www.facebook.com/profile.php?id=61582465814810",
                          label: "Facebook",
                        },
                        {
                          animation: Instagram,
                          href: "https://www.instagram.com/genius36.in/",
                          label: "Instagram",
                        },
                        {
                          animation: Youtube,
                          href: "https://www.youtube.com/@Geniusindia36",
                          label: "Youtube",
                        },
                        {
                          animation: LinkedIn,
                          href: "linkedin.com/company/genius36",
                          label: "LinkedIn",
                        },
                        // {
                        //   animation: Twitter,
                        //   href: "https://Twitter.com",
                        //   label: "Twitter",
                        // },
                        {
                          animation: Whatsapp,
                          href: "https://Whatsapp.com",
                          label: "Whatsapp",
                        },
                      ].map((social, index) => (
                        <Box
                          key={index}
                          as={Link}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          w="50px"
                          h="50px"
                          borderRadius="full"
                          bg="gray.100"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          cursor="pointer"
                          _hover={{ bg: "#93b7f1" }}
                          // transition="all 0.3s ease"
                        >
                          <Lottie
                            animationData={social.animation}
                            // loop={false}
                            autoplay={true}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </Box>
                      ))}
                    </HStack>
                  </Box>
                </VStack>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
