import { Box, HStack, Text, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import logo from "../../assets/images/logo.png"

const textSliderData = [
  "Custom Website Design & Development",
  "Software Development",
  "IT Consulting & Digital Transformation",
  "CCTV Camera Installation & Security",
  "Computer Hardware Sales & Repair",
  "Networking & IT Infrastructure",
  "Cloud Solutions & Server Setup",
  "IT Training & Programming Courses",
  "Data Recovery Services",
  "Tech Support & Maintenance Services",
  "Custom Website Design & Development",
  "Software Development",
  "IT Consulting & Digital Transformation",
  "CCTV Camera Installation & Security",
  "Computer Hardware Sales & Repair",
  "Networking & IT Infrastructure",
  "Cloud Solutions & Server Setup",
  "IT Training & Programming Courses",
  "Data Recovery Services",
  "Tech Support & Maintenance Services",
];

/* 🔁 Left-moving marquee animation */
const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export default function MarqueOne() {
  // Duplicate list for seamless loop
  const items = [...textSliderData, ...textSliderData];

  return (
    <Box
      w="100%"
      overflow="hidden"
      py={4}
      bg="#95b9f1"
      bgColor="#95b9f1"
      border="1px solid red"
    >
      {/* Track */}
      <HStack
        spacing={10}
        minW="max-content"
        animation={`${marquee} 40s linear infinite`}
        _hover={{ animationPlayState: "paused" }} // ⏸ pause on hover
        // bg="#95b9f1"
      >
        {items.map((text, index) => (
          <HStack key={index} spacing={3}>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="600"
              color="white"
              whiteSpace="nowrap"
            >
              {text}
            </Text>

            <Image
              src={logo}
              alt="star"
              boxSize="16px"
              opacity={0.7}
            />
          </HStack>
        ))}
      </HStack>
    </Box>
  );
}
