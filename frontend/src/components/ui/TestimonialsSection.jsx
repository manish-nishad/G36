import { useEffect, useRef } from "react";
import {
  Box,
  Heading,
  Container,
  HStack,
  VStack,
  Avatar,
  Blockquote,
  Float,
  Span,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  const swiperRef = useRef(null);

  return (
    <Box py={{ base: 14, md: 20 }} bg="#93b7f1">
      <Container maxW="7xl">
        <Heading
          textAlign="center"
          mb={{ base: 8, md: 12 }}
          fontSize={{ base: "2xl", md: "3xl" }}
          as="h2"
        >
          What Our Clients Say
        </Heading>

        <Box position="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={testimonials.length > 3}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            style={{ paddingBottom: "50px" }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <Blockquote.Root
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
                  minH="280px"
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <Box
            className="swiper-button-prev-custom"
            position="absolute"
            left={{ base: "-10px", md: "-40px" }}
            top="50%"
            transform="translateY(-50%)"
            zIndex="10"
            cursor="pointer"
            bg="white"
            borderRadius="full"
            w={{ base: "35px", md: "45px" }}
            h={{ base: "35px", md: "45px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="0 4px 12px rgba(0,0,0,0.15)"
            transition="all 0.3s ease"
            _hover={{
              bg: "gray.100",
              boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Box>

          <Box
            className="swiper-button-next-custom"
            position="absolute"
            right={{ base: "-10px", md: "-40px" }}
            top="50%"
            transform="translateY(-50%)"
            zIndex="10"
            cursor="pointer"
            bg="white"
            borderRadius="full"
            w={{ base: "35px", md: "45px" }}
            h={{ base: "35px", md: "45px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="0 4px 12px rgba(0,0,0,0.15)"
            transition="all 0.3s ease"
            _hover={{
              bg: "gray.100",
              boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Box>
        </Box>

        {/* Custom Pagination Styles */}
        <style>{`
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 1;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background: white;
    width: 30px;
    border-radius: 5px;
  }

  .swiper-pagination {
    bottom: 10px !important;
  }
`}</style>
      </Container>
    </Box>
  );
}
