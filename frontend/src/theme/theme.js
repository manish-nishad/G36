import { createSystem, defaultConfig } from "@chakra-ui/react";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          500: { value: "#04327b" },
        },
      },
      fonts: {
        heading: { value: "Poppins, sans-serif" },
        body: { value: "Inter, sans-serif" },
      },
    },
  },
});

export default system;
