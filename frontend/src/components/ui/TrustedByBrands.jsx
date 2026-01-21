import { Box, Container, Heading, Image, HStack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

export default function TrustedByBrands({ brands = [] }) {
  const trackRef = useRef(null);
  const isPaused = useRef(false);
  const position = useRef(0);

  /* =============================
     PURE AUTO SCROLL ENGINE
  ============================= */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId;

    const speed = 0.8; // 👈 scroll speed (0.2 slow | 0.6 fast)

    const animate = () => {
      if (!isPaused.current) {
        position.current -= speed;
        track.style.transform = `translateX(${position.current}px)`;

        // Reset when half scrolled (seamless loop)
        if (Math.abs(position.current) >= track.scrollWidth / 2) {
          position.current = 0;
        }
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  /* Duplicate logos for infinite loop */
  const slides = [...brands, ...brands];

  return (
    <Box py={{ base: 12, md: 20 }} bg="white">
      <Container maxW="7xl">
        <Heading
          textAlign="center"
          mb={{ base: 8, md: 12 }}
          fontSize={{ base: "2xl", md: "3xl" }}
          as="h1"
        >
          Trusted by Leading Brands
        </Heading>

        {/* VIEWPORT */}
        <Box
          overflow="hidden"
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
        >
          {/* TRACK */}
          <HStack
            ref={trackRef}
            spacing={12}
            minW="max-content"
            willChange="transform"
          >
            {slides.map((brand, index) => (
              <Box
                key={`${brand.id}-${index}`}
                flex="0 0 auto"
                minW={{ base: "120px", md: "160px", lg: "200px" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                filter="grayscale(100%)"
                opacity={0.7}
                transition="all 0.3s ease"
                _hover={{
                  filter: "grayscale(0%)",
                  opacity: 1,
                  transform: "scale(1.05)",
                }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  maxH={{ base: "40px", md: "50px" }}
                  objectFit="contain"
                  loading="lazy"
                />
              </Box>
            ))}
          </HStack>
        </Box>
      </Container>
    </Box>
  );
}
