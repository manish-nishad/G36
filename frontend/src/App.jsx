import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import MacNavbar from "./components/common/MacNavbar";
import Footer from "./components/common/Footer";
import AnimatedRoutes from "./routes/AnimatedRoutes";
import PageLoader from "./components/common/PageLoader";

function AppWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(false); // Start with false to show content immediately
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Initial load + route change loader
  useEffect(() => {
    // Skip loader on very first load
    if (isInitialLoad) {
      setIsInitialLoad(false);
      return;
    }

    // Show loader only on route changes (not initial load)
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname, isInitialLoad]);

  return (
    <>
      {/* {loading && <PageLoader />} */}
      <MacNavbar />
      <AnimatedRoutes />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
      }}
    >
      <AppWrapper />
    </BrowserRouter>
  );
}
