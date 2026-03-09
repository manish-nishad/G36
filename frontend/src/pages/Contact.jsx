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
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Seo from "../seo/Seo";
import Lottie from "lottie-react";
import Facebook from "../assets/lottie/Facebook.json";
import Instagram from "../assets/lottie/Instagram.json";
import Youtube from "../assets/lottie/Youtube.json";
import LinkedIn from "../assets/lottie/Linkdin.json";
import Whatsapp from "../assets/lottie/Whatsapp.json";
import ContactUs from "../assets/lottie/Contact Us.json";
import locationIcon from "../assets/flaticons/location.png";
import phoneIcon from "../assets/flaticons/phone-contact.png";
import emailIcon from "../assets/flaticons/email.png";
import clockIcon from "../assets/flaticons/clock.png";

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

  // Get keys from environment variables
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_PHONE_NUMBER;
  const WHATSAPP_API_KEY = import.meta.env.VITE_CALLMEBOT_API_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    // Import the env variable at the top of the component
  const TEXTMEBOT_API_KEY = import.meta.env.VITE_TEXTMEBOT_API_KEY;

  // Replace the function
    const sendWhatsAppMessage = async (data) => {
    // Check if API key exists to prevent errors
    if (!TEXTMEBOT_API_KEY) {
      console.warn("TextMeBot API Key is missing in .env file");
      return;
    }

    // Construct the message text
    // Note: New lines must be %0A for URLs
    const text = `*New Contact Form Submission*%0A%0A*Name:* ${data.fullName}%0A*Email:* ${data.email}%0A*Phone:* ${data.phone}%0A*Subject:* ${data.subject}%0A*Message:* ${data.message}`;
    
    // TextMeBot API Endpoint
    const url = `https://textmebot.com/api/send?p=${WHATSAPP_NUMBER}&t=${encodeURIComponent(text)}&apikey=${TEXTMEBOT_API_KEY}`;
    
    try {
      await fetch(url);
      console.log("TextMeBot trigger sent successfully");
    } catch (error) {
      console.error("TextMeBot API error:", error);
      // We don't show an alert to the user if WhatsApp fails, as the email likely succeeded.
    }
  };



    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ show: false, type: "", message: "" });

    // 1. Validate Keys
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("Missing API Keys. Check .env file");
      setAlert({
        show: true,
        type: "error",
        message: "Configuration error: API Keys are missing.",
      });
      setLoading(false); // Stop loading
      return;
    }

    try {
      // 2. Prepare Email Data
      const templateParams = {
        from_name: formData.fullName,
        to_name: "Admin",
        reply_to: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      // 3. Send Email via EmailJS
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      // 4. If Email is successful
      if (response.status === 200) {
        
        // Send WhatsApp notification (Fire and Forget)
        await sendWhatsAppMessage(formData);

        // Show Success Alert
        setAlert({
          show: true,
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });

        // Reset Form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        // Hide Alert after 5 seconds
        setTimeout(() => {
          setAlert({ show: false, type: "", message: "" });
        }, 5000);
      }
    } catch (error) {
      console.error("Full Error Object:", error);
      
      // Show Error Alert
      setAlert({
        show: true,
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
      
      // Hide Error Alert after 5 seconds
      setTimeout(() => {
        setAlert({ show: false, type: "", message: "" });
      }, 5000);
    } finally {
      // 5. ALWAYS stop loading, whether success or fail
      setLoading(false);
    }
  };



  return (
    <>
      <Seo
        title="Contact Us | Genius36 Technologies"
        description="Get in touch with Genius36 Technologies for IT solutions, training programs, and consultation services."
      />

      <Box bg="gray.900" color="white">
        <Container maxW="7xl" py={{ base: 14, md: 20 }}>
          <VStack textAlign="center">
            {/* LOTTIE TOP */}
            <Box maxW="420px" mx="auto">
              <Lottie animationData={ContactUs} loop autoplay />
            </Box>

            {/* CONTENT BELOW */}
            <VStack>
              <Heading
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                padding=""
                as="h1"
              >
                Get In Touch
              </Heading>

              <Text fontSize="lg" color="white" maxW="2xl" mx="auto">
                Get in touch with our team to discuss innovative, reliable, and
                scalable IT solutions tailored to your business goals.
              </Text>
            </VStack>
          </VStack>
        </Container>
      </Box>
      
      <Box py={20} bg="gray.50" minH="100vh">
        <Container maxW="7xl">
          <VStack spacing={12} align="stretch">
            
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
                      size="sm"
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
                      size="sm"
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
                      size="sm"
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
                      h="35px"
                      px={4}
                      bg="white"
                      borderWidth="1px"
                      borderColor="gray.300"
                      borderRadius="sm"
                      fontSize="sm"
                      _hover={{ borderColor: "gray.400" }}
                      _focus={{
                        borderColor: "brand.500",
                        boxShadow: "0 0 0 1px #04327b",
                        outline: "none",
                      }}
                    >
                      <option value="">Select a subject</option>
                      <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                      <option value="Lab Setup">Lab Setup & AMC</option>
                      <option value="Security Systems">Security Systems</option>
                      <option value="Training Programs">Training Programs</option>
                      <option value="WebSite Development">Website Development</option>
                      <option value="Software Development">Software Development</option>
                      <option value="Cloud">Cloud Solutions</option>
                      <option value="Data Recovery">Data Recovery</option>
                      <option value="Hardware & Networking">Hardware & Networking</option>
                      <option value="Other">Other</option>
                    </Box>

                    <Textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      size="xs"
                      rows={5}
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
                {/* --- NEW CODE (FIXED) --- */}
<Box borderRadius="xl" boxShadow="md" mt={4} p={4} bg="white">
  {/* 1. Keep the Label inside Text */}
  <Text fontSize="sm" color="gray.800" mt={2} fontWeight="800" mb={2}>
    Find Us on the Map:
  </Text>

  {/* 2. Move the Map Box OUTSIDE the Text component (sibling) */}
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
                        src={locationIcon}
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
                        src={phoneIcon}
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
                        src={emailIcon}
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
                        src={clockIcon}
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
                        >
                          <Lottie
                            animationData={social.animation}
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
