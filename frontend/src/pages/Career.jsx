import {
  Box,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  HStack,
  Container,
  Stack,
  Card,
  Image,
  Dialog,
  Portal,
  CloseButton,
  Field,
  Fieldset,
  Input,
  Select,
  createListCollection,
  FileUpload,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { aboutImages, jobOpenings } from "../mockData";
import Seo from "../seo/Seo";

// Import Flaticons
import worklifebalance from "../assets/flaticons/work-life-balance.png";
import corporateculture from "../assets/flaticons/corporate-culture.png";
import growthopp from "../assets/flaticons/growth-opp.png";
import innoprojects from "../assets/flaticons/inno-projects.png";
import innovation from "../assets/flaticons/innovation.png";
import excellence from "../assets/flaticons/excellence.png";
import growth from "../assets/flaticons/growth.png";
import teamwork from "../assets/flaticons/teamwork.png";

import Lottie from "lottie-react";
import CareerImg from "../assets/lottie/Colleagues Working Together.json";

import { FaUpload } from "react-icons/fa";

const handleTiltMove = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 8; // up-down
  const rotateY = ((x - centerX) / centerX) * -8; // left-right

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
};

const handleTiltLeave = (e) => {
  const card = e.currentTarget;
  card.style.transform =
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
};

const Career = () => {
  // Why Work With Us - matching About page structure
  const whyWorkWithUs = [
    {
      title: "Growth Opportunities",
      description:
        "Continuous learning and professional development opportunities with access to latest technologies and training programs.",
      icon: growthopp,
    },
    {
      title: "Innovative Projects",
      description:
        "Work on cutting-edge projects across diverse industries, from web development to cloud infrastructure and AI solutions.",
      icon: innoprojects,
    },
    {
      title: "Collaborative Culture",
      description:
        "Join a supportive team environment where your ideas matter and collaboration drives innovation and success.",
      icon: corporateculture,
    },
    {
      title: "Work-Life Balance",
      description:
        "We believe in maintaining a healthy work-life balance with flexible schedules and employee wellness programs.",
      icon: worklifebalance,
    },
  ];

  // Culture & Values - matching About page values structure
  const cultureValues = [
    {
      title: "Innovation",
      description:
        "We encourage creative thinking and embrace new technologies to solve complex challenges.",
      icon: innovation,
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, setting high standards and delivering quality results.",
      icon: excellence,
    },
    {
      title: "Teamwork",
      description:
        "Collaboration is at the heart of our success. We work together to achieve common goals.",
      icon: teamwork,
    },
    {
      title: "Growth",
      description:
        "We invest in our employees' growth through training, mentorship, and career development opportunities.",
      icon: growth,
    },
  ];

  // Benefits list
  const benefits = [
    "Competitive salary packages",
    "Health insurance coverage",
    "Flexible working hours",
    "Professional development and training",
    "Performance-based bonuses",
    "Paid time off and holidays",
    "Modern work environment",
    "Career advancement opportunities",
    "Team building activities",
    "Employee recognition programs",
  ];

  const [selectedJob, setSelectedJob] = useState([]); // Select expects array
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Seo
        title="Careers | Genius36 Technologies"
        description="Join Genius36 Technologies and build your career with us. Explore exciting job opportunities in IT, development, design, and more."
      />

      {/* HERO SECTION - Matching About page style */}
      <Box bg="gray.900" color="white">
        <Container py={{ base: 14, md: 20 }}>
          <VStack spacing={8} textAlign="center">
            {/* LOTTIE TOP */}
            <Box maxW="420px" mx="auto">
              <Lottie animationData={CareerImg} loop autoplay />
            </Box>

            {/* CONTENT BELOW */}
            <VStack spacing={4}>
              <Heading
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                as="h1"
                marginTop={-20}
              >
                Join Our{" "}
                <Box as="span" color="#0951d8">
                  Team
                </Box>
              </Heading>

              <Text
                fontSize={{ base: "md", md: "lg" }}
                maxW="3xl"
                color="whiteAlpha.900"
              >
                Build your career with Genius36 Technologies. We're looking for
                talented individuals who are passionate about technology and
                innovation.
              </Text>

              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="whiteAlpha.700"
                maxW="2xl"
              >
                Explore exciting opportunities in software development, IT
                infrastructure, design, and training.
              </Text>
            </VStack>

            {/* BUTTONS FULL WIDTH */}
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={4}
              w="100%"
              maxW="420px"
              justifyContent="center"
            >
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Button
                    size="lg"
                    bg="#0951d8"
                    color="white"
                    _hover={{ bg: "#073fa6" }}
                  >
                    Apply Now <ArrowRight size={18} />
                  </Button>
                </Dialog.Trigger>
                <Portal>
                  <Dialog.Backdrop />
                  <Dialog.Positioner>
                    <Dialog.Content>
                      <Dialog.CloseTrigger asChild>
                        <CloseButton />
                      </Dialog.CloseTrigger>
                      <Dialog.Header>
                        <Dialog.Title>Career Form</Dialog.Title>
                      </Dialog.Header>
                      <Dialog.Body>
                        <CareerForm />
                      </Dialog.Body>
                      <Dialog.Footer />
                    </Dialog.Content>
                  </Dialog.Positioner>
                </Portal>
              </Dialog.Root>

              <Link to="#openings">
                <Button
                  w="100%"
                  size="lg"
                  variant="outline"
                  color="white"
                  borderColor="whiteAlpha.500"
                  _hover={{ bg: "whiteAlpha.200" }}
                >
                  View Openings
                </Button>
              </Link>
            </Stack>
          </VStack>
        </Container>
      </Box>

      {/* WHY WORK WITH US SECTION - Matching About page "Why Choose Us" structure */}
      <Box py={{ base: 12, md: 20 }} bg="gray.50">
        <Container maxW="7xl">
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading
                size="2xl"
                mb={4}
                color="gray.900"
                fontSize={{ base: "xl", md: "2xl" }}
              >
                Why Work With Us?
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.800"
                maxW="3xl"
                mx="auto"
              >
                What makes Genius36 Technologies a great place to work
              </Text>
            </Box>

            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 4 }}
              spacing={{ base: 6, md: 8 }}
              gap={10}
            >
              {whyWorkWithUs.map((item, i) => (
                <Card.Root
                  key={i}
                  bg="white"
                  p={6}
                  borderRadius="xl"
                  h="full"
                  boxShadow="md"
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
                  <Card.Body>
                    <VStack spacing={4} align="start">
                      <Box
                        w={{ base: 16, md: 20 }}
                        h={{ base: 16, md: 20 }}
                        bgGradient="linear(to-br, blue.500, blue.700)"
                        borderRadius="lg"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        p={2}
                      >
                        <Image
                          src={item.icon}
                          alt={item.title}
                          w="100%"
                          h="100%"
                          objectFit="contain"
                        />
                      </Box>
                      <Heading
                        size="md"
                        color="gray.900"
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        {item.title}
                      </Heading>
                      <Text
                        fontSize={{ base: "xs", md: "sm" }}
                        color="gray.800"
                        lineHeight="1.7"
                      >
                        {item.description}
                      </Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CAREER OPPORTUNITIES / OPEN ROLES SECTION */}
      <Box py={{ base: 12, md: 20 }} bg="white" id="openings">
        <Container maxW="7xl">
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading
                size="2xl"
                mb={4}
                color="gray.900"
                fontSize={{ base: "xl", md: "2xl" }}
              >
                Open Positions
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.800"
                maxW="3xl"
                mx="auto"
              >
                Explore current job openings and find the perfect role for you
              </Text>
            </Box>

            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={{ base: 6, md: 8 }}
              w="full"
              gap={6}
            >
              {jobOpenings.map((job) => (
                <Card.Root
                  key={job.id}
                  bg="gray.50"
                  p={{ base: 6, md: 8 }}
                  borderRadius="xl"
                  boxShadow="sm"
                  h="full"
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
                  <Card.Body>
                    <VStack spacing={4} align="start">
                      <VStack spacing={2} align="start" w="100%">
                        <Heading
                          size="lg"
                          color="gray.900"
                          fontSize={{ base: "md", md: "lg" }}
                        >
                          {job.title}
                        </Heading>
                        <HStack spacing={4} flexWrap="wrap">
                          <Text
                            fontSize={{ base: "xs", md: "sm" }}
                            color="gray.600"
                          >
                            {job.department}
                          </Text>
                          <Text
                            fontSize={{ base: "xs", md: "sm" }}
                            color="gray.600"
                          >
                            {job.location}
                          </Text>
                          <Text
                            fontSize={{ base: "xs", md: "sm" }}
                            color="gray.600"
                          >
                            {job.type}
                          </Text>
                        </HStack>
                        <Text
                          fontSize={{ base: "xs", md: "sm" }}
                          color="gray.500"
                        >
                          Experience: {job.experience}
                        </Text>
                      </VStack>

                      <Text
                        fontSize={{ base: "sm", md: "md" }}
                        color="gray.800"
                        lineHeight="1.7"
                      >
                        {job.description}
                      </Text>

                      <Box w="100%">
                        <Text
                          fontSize={{ base: "xs", md: "sm" }}
                          color="gray.700"
                          fontWeight="600"
                          mb={2}
                        >
                          Key Requirements:
                        </Text>
                        <VStack align="start" spacing={1}>
                          {job.requirements.slice(0, 3).map((req, idx) => (
                            <HStack key={idx} spacing={2}>
                              <Box
                                w="4px"
                                h="4px"
                                borderRadius="full"
                                bg="blue.500"
                              />
                              <Text
                                fontSize={{ base: "xs", md: "sm" }}
                                color="gray.700"
                              >
                                {req}
                              </Text>
                            </HStack>
                          ))}
                        </VStack>
                      </Box>

                      {/* <Link to="/contact" style={{ width: "100%" }}>
                        <Button
                          w="100%"
                          size={{ base: "sm", md: "md" }}
                          bg="#0951d8"
                          color="white"
                          _hover={{ bg: "#073fa6" }}
                        >
                          Apply Now <ArrowRight size={16} />
                        </Button>
                      </Link> */}
                    </VStack>
                  </Card.Body>
                </Card.Root>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CULTURE & VALUES SECTION - Matching About page structure */}
      <Box py={{ base: 12, md: 20 }} bg="gray.50">
        <Container maxW="7xl">
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, lg: 12 }}
            alignItems="start"
          >
            <VStack spacing={6} align="start" w="100%">
              <Heading
                size="2xl"
                color="gray.900"
                fontSize={{ base: "2xl", md: "3xl" }}
              >
                Our Culture & Values
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.900"
                lineHeight="1.8"
                textAlign="justify"
                padding={4}
              >
                At Genius36 Technologies, we foster a culture of innovation,
                collaboration, and continuous learning. Our values guide
                everything we do, from how we work with clients to how we
                support our team members.
              </Text>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.900"
                lineHeight="1.8"
                textAlign="left"
                padding={2}
              >
                We believe in empowering our employees to grow professionally
                and personally. Our inclusive environment encourages diverse
                perspectives and creative problem-solving, making Genius36 a
                place where you can thrive and make a real impact.
              </Text>
            </VStack>
            <Box w="100%">
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacing={6}
                w="100%"
                gap={10}
              >
                {cultureValues.map((value, i) => (
                  <Card.Root
                    key={i}
                    bg="white"
                    p={6}
                    borderRadius="xl"
                    boxShadow="sm"
                    h="full"
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
                    <Card.Body>
                      <VStack spacing={3} align="start">
                        <Box
                          w={{ base: 14, md: 16 }}
                          h={{ base: 14, md: 16 }}
                          bgGradient="linear(to-br, blue.500, blue.700)"
                          borderRadius="xl"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          p={2}
                        >
                          <Image
                            src={value.icon}
                            alt={value.title}
                            w="100%"
                            h="100%"
                            objectFit="contain"
                          />
                        </Box>
                        <Heading
                          size="md"
                          color="gray.900"
                          fontSize={{ base: "sm", md: "md" }}
                        >
                          {value.title}
                        </Heading>
                        <Text
                          fontSize={{ base: "xs", md: "sm" }}
                          color="gray.800"
                          lineHeight="1.7"
                        >
                          {value.description}
                        </Text>
                      </VStack>
                    </Card.Body>
                  </Card.Root>
                ))}
              </SimpleGrid>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* GROWTH & BENEFITS SECTION */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="7xl">
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, lg: 12 }}
            alignItems="start"
          >
            <Box w="100%">
              <Box
                borderTopLeftRadius="2xl"
                borderBottomLeftRadius="2xl"
                overflow="hidden"
                boxShadow="2xl"
                position="relative"
              >
                <Image
                  src={aboutImages.teamCollaboration}
                  alt="Team Benefits"
                  w="100%"
                  h="auto"
                  // objectFit="cover"
                />
              </Box>
            </Box>
            <VStack spacing={6} align="start" w="100%" padding={4}>
              <Heading
                size="2xl"
                color="gray.900"
                fontSize={{ base: "2xl", md: "3xl" }}
              >
                Growth & Benefits
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.900"
                lineHeight="1.8"
              >
                We offer comprehensive benefits and growth opportunities to help
                you succeed in your career:
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} w="100%">
                {benefits.map((benefit, idx) => (
                  <HStack key={idx} spacing={3} align="start">
                    <Box
                      w="6px"
                      h="6px"
                      borderRadius="full"
                      bg="blue.500"
                      mt={2}
                      flexShrink={0}
                    />
                    <Text
                      fontSize={{ base: "sm", md: "md" }}
                      color="gray.800"
                      lineHeight="1.6"
                    >
                      {benefit}
                    </Text>
                  </HStack>
                ))}
              </SimpleGrid>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CALL-TO-ACTION SECTION - Matching About page CTA */}
      <Box
        py={{ base: 12, md: 20 }}
        bgGradient="linear(to-br, blue.900, blue.800, gray.900)"
      >
        <Container maxW="7xl">
          <VStack spacing={8} textAlign="center">
            <Heading
              color="black"
              size="2xl"
              fontSize={{ base: "xl", md: "2xl" }}
            >
              Ready to Start Your Career Journey?
            </Heading>
            <Text
              color="gray.900"
              fontSize={{ base: "md", md: "lg" }}
              maxW="2xl"
            >
              Join Genius36 Technologies and be part of a team that's shaping
              the future of technology. Explore our open positions or reach out
              to learn more about career opportunities.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Button
                    size="lg"
                    bg="#0951d8"
                    color="white"
                    _hover={{ bg: "#073fa6" }}
                  >
                    Apply Now <ArrowRight size={18} />
                  </Button>
                </Dialog.Trigger>
                <Portal>
                  <Dialog.Backdrop />
                  <Dialog.Positioner>
                    <Dialog.Content>
                      <Dialog.CloseTrigger asChild>
                        <CloseButton />
                      </Dialog.CloseTrigger>
                      <Dialog.Header>
                        <Dialog.Title>Career Form</Dialog.Title>
                      </Dialog.Header>
                      <Dialog.Body>
                        <CareerForm />
                      </Dialog.Body>
                      <Dialog.Footer />
                    </Dialog.Content>
                  </Dialog.Positioner>
                </Portal>
              </Dialog.Root>
              <Link to="#openings">
                <Button
                  variant="outline"
                  colorScheme="whiteAlpha"
                  color="Black"
                  size={{ base: "md", md: "lg" }}
                >
                  View All Openings
                </Button>
              </Link>
            </Stack>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

function CareerForm() {
  const [fileKey, setFileKey] = useState(0);

  const jobOpenings = createListCollection({
    items: [
      { label: "Full Stack Web Developer", value: "fswd" },
      { label: "UI/UX Designer", value: "uiux" },
      { label: "Network Engineer", value: "networkeng" },
      { label: "IT Trainer", value: "ittrainer" },
      { label: "Sales Executive", value: "salesexe" },
      { label: "DevOps Engineer", value: "devopseng" },
    ],
  });

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    job: [],
    cctc: "",
    ectc: "",
    lpl: "",
    resume: null, // ✅ extra field
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // File input handle
    if (name === "resume") {
      setFormData((prev) => ({
        ...prev,
        resume: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Career Form Data:", formData);
    console.log("Resume file:", formData.resume);

    // Reset form
    setFormData({
      fullname: "",
      email: "",
      mobile: "",
      job: [],
      cctc: "",
      ectc: "",
      lpl: "",
      resume: null,
    });
    setFileKey((prev) => prev + 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Fieldset.Root size="lg" maxW="md">
        <Fieldset.Content>
          <Field.Root>
            <Field.Label>Full Name</Field.Label>
            <Input
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Email address</Field.Label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Mobile No.</Field.Label>
            <Input
              name="mobile"
              type="number"
              value={formData.mobile}
              onChange={handleChange}
            />
          </Field.Root>

          {/* ✅ Course Select */}
          <Field.Root>
            <Select.Root
              collection={jobOpenings}
              value={formData.job}
              onValueChange={(val) =>
                setFormData((prev) => ({ ...prev, job: val.value }))
              }
            >
              <Select.HiddenSelect />
              <Select.Label>Select Job Position</Select.Label>
              <Select.Control>
                <Select.Trigger>
                  <Select.ValueText placeholder="Select Job Position" />
                </Select.Trigger>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content>
                    {jobOpenings.items.map((job) => (
                      <Select.Item item={job} key={job.value}>
                        {job.label}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>
          </Field.Root>

          <Field.Root>
            <Field.Label>Current CTC</Field.Label>
            <Input
              name="cctc"
              type="number"
              value={formData.cctc}
              onChange={handleChange}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Expected CTC</Field.Label>
            <Input
              name="ectc"
              type="number"
              value={formData.ectc}
              onChange={handleChange}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Linkedin Profile Link</Field.Label>
            <Input
              name="lpl"
              type="text"
              value={formData.lpl}
              onChange={handleChange}
            />
          </Field.Root>

          <FileUpload.Root
            key={fileKey} // ✅ this will reset FileUpload UI
            onChange={(e) => {
              const file = e.target.files[0];
              setFormData((prev) => ({ ...prev, resume: file }));
            }}
          >
            <FileUpload.HiddenInput />
            <FileUpload.Trigger asChild>
              <Button variant="outline" size="sm">
                <FaUpload /> Upload Resume
              </Button>
            </FileUpload.Trigger>
            <FileUpload.List />
          </FileUpload.Root>
        </Fieldset.Content>

        <Button type="submit" alignSelf="flex-start">
          Apply Now
        </Button>
      </Fieldset.Root>
    </form>
  );
}

export default Career;
