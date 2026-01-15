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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { aboutImages, jobOpenings } from "../mockData";
import Seo from "../seo/Seo";

// Import Flaticons
import locationIcon from "../assets/flaticons/location.gif";
import phoneIcon from "../assets/flaticons/phone-contact.gif";
import emailIcon from "../assets/flaticons/email.gif";
import clockIcon from "../assets/flaticons/clock.gif";
import Lottie from "lottie-react";
import Welcome from "../assets/lottie/Welcome.json";

const Career = () => {
  // Why Work With Us - matching About page structure
  const whyWorkWithUs = [
    {
      title: "Growth Opportunities",
      description:
        "Continuous learning and professional development opportunities with access to latest technologies and training programs.",
      icon: clockIcon,
    },
    {
      title: "Innovative Projects",
      description:
        "Work on cutting-edge projects across diverse industries, from web development to cloud infrastructure and AI solutions.",
      icon: emailIcon,
    },
    {
      title: "Collaborative Culture",
      description:
        "Join a supportive team environment where your ideas matter and collaboration drives innovation and success.",
      icon: locationIcon,
    },
    {
      title: "Work-Life Balance",
      description:
        "We believe in maintaining a healthy work-life balance with flexible schedules and employee wellness programs.",
      icon: phoneIcon,
    },
  ];

  // Culture & Values - matching About page values structure
  const cultureValues = [
    {
      title: "Innovation",
      description:
        "We encourage creative thinking and embrace new technologies to solve complex challenges.",
      icon: emailIcon,
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, setting high standards and delivering quality results.",
      icon: clockIcon,
    },
    {
      title: "Teamwork",
      description:
        "Collaboration is at the heart of our success. We work together to achieve common goals.",
      icon: locationIcon,
    },
    {
      title: "Growth",
      description:
        "We invest in our employees' growth through training, mentorship, and career development opportunities.",
      icon: phoneIcon,
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

  return (
    <div>Career</div>
  )
}

export default Career