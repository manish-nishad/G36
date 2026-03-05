import { Box, Spinner } from "@chakra-ui/react";

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
      <Box textAlign="center">
        <Spinner size="xl" thickness="4px" speed="0.7s" color="#04327b" />
      </Box>
    </Box>
  );
}
