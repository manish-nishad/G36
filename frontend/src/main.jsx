import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import system from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </HelmetProvider>
);
