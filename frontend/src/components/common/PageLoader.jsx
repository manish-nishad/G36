import { Box } from "@chakra-ui/react";
import Lottie from "lottie-react";
import sandyLoading from "../../assets/lottie/Sandy-Loading.json";

export default function PageLoader() {
  return (
    <Box
      position="fixed"
      inset="0"
      zIndex={9999}
      bg="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box w={{ base: "180px", md: "240px" }}>
        <Lottie
          animationData={sandyLoading}
          loop
          autoplay
        />
      </Box>
    </Box>
  );
}
