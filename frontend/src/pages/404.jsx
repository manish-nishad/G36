import { Box, Container, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Error404 from "../assets/lottie/Error 404.json";
import Seo from "../seo/Seo";

export default function PageNotFound() {
  return (
    <>
      <Seo
        title="404 | Page Not Found - Genius36 Technologies"
        description="The page you are looking for is under construction or does not exist."
      />

      <Box
        minH="100vh"
        bg="gray.50"
        display="flex"
        alignItems="center"
        justifyContent="center"
        pt={{ base: "90px", md: "100px" }} // navbar offset
      >
        <Container maxW="6xl">
          <VStack spacing={8} textAlign="center">
            {/* LOTTIE */}
            <Box maxW={{ base: "280px", md: "420px" }}>
              <Lottie
                animationData={Error404}
                loop
                autoplay
                rendererSettings={{
                  preserveAspectRatio: "xMidYMid meet",
                }}
              />
            </Box>

            {/* TEXT */}
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "4xl" }}
              color="gray.800"
            >
              Page Under Construction
            </Heading>

            <Text
              maxW="600px"
              fontSize={{ base: "sm", md: "lg" }}
              color="gray.600"
            >
              Oops! The page you are trying to access is currently under
              construction or does not exist. We’re working hard to bring it
              live soon.
            </Text>

            {/* CTA */}
            <Link to="/">
              <Button
                size="lg"
                bg="#04327b"
                color="white"
                px={8}
                _hover={{
                  bg: "#03245a",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.2s ease"
              >
                Back to Home
              </Button>
            </Link>
          </VStack>
        </Container>
      </Box>
    </>
  );
}
