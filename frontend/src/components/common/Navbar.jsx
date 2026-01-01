import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Flex px={8} py={4} align="center" justify="space-between">
      <Heading size="md">Genius36</Heading>
      <Flex gap={4}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/services">Training</Link>
        <Link to="/services">Blogs</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Button colorScheme="teal">Get Started</Button>
      </Flex>
    </Flex>
  );
}
