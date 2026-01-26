import {
  Box,
  Heading,
  Container,
  SimpleGrid,
  HStack,
  VStack,
  Avatar,
  Blockquote,
  Float,
  Span,
} from "@chakra-ui/react";
// import { testimonials } from "../mockData";

/**
 * @param {Array} testimonials - testimonials data array
 * @param {Function} handleMouseMove - optional hover tilt handler
 * @param {Function} handleMouseLeave - optional hover reset handler
 */
export default function TestimonialsSection({
  testimonials = [],
  handleMouseMove,
  handleMouseLeave,
}) {
  return (
    <Box py={{ base: 14, md: 20 }} bg="#93b7f1">
      <Container maxW="7xl">
        <Heading
          textAlign="center"
          mb={{ base: 8, md: 12 }}
          fontSize={{ base: "2xl", md: "3xl" }}
          as="h1"
        >
          What Our Clients Say
        </Heading>

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={{ base: 6, md: 10 }}
          alignItems="stretch"
          gap="20px"
        >
          {testimonials.map((t) => (
            <Blockquote.Root
              key={t.id}
              h="100%"
              display="flex"
              flexDirection="column"
              backdropFilter="blur(14px)"
              bg="rgba(255,255,255,0.25)"
              border="1px solid rgba(255,255,255,0.35)"
              borderRadius="xl"
              p={{ base: 6, md: 8 }}
              boxShadow="0 20px 40px rgba(0,0,0,0.1)"
              transition="transform 0.15s ease, box-shadow 0.3s ease"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              _hover={{
                boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
              }}
            >
              {/* Quote Icon */}
              <Float placement="bottom-end" offset="10">
                <Blockquote.Icon
                  opacity="0.35"
                  boxSize="10"
                  rotate="180deg"
                />
              </Float>

              {/* Testimonial Text */}
              <Blockquote.Content
                flex="1"
                fontSize={{ base: "sm", md: "md" }}
              >
                {t.text}
              </Blockquote.Content>

              {/* Author */}
              <Blockquote.Caption mt={6}>
                <cite>
                  <HStack spacing={4}>
                    <Avatar.Root size={{ base: "md", md: "lg" }}>
                      <Avatar.Fallback name={t.name} />
                      <Avatar.Image src={t.avatar} />
                    </Avatar.Root>

                    <VStack align="start" spacing={0}>
                      <Span fontWeight="semibold">{t.name}</Span>
                      <Span fontSize="sm" color="gray.600">
                        {t.company}
                      </Span>
                    </VStack>
                  </HStack>
                </cite>
              </Blockquote.Caption>
            </Blockquote.Root>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
