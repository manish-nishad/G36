import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import MacNavbar from "./components/common/MacNavbar";
import Footer from "./components/common/Footer";
import AnimatedRoutes from "./routes/AnimatedRoutes";
import PageLoader from "./components/common/PageLoader";
import ScrollToTop from "./components/ui/scrollToTop";

function AppWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const hasLoadedOnce = useRef(false);

  // Initial load + route change loader
  useEffect(() => {
    // 🔥 Only first time
    if (!hasLoadedOnce.current) {
      const timer = setTimeout(() => {
        setLoading(false);
        hasLoadedOnce.current = true;
      }, 300);

      return () => clearTimeout(timer);
    } else {
      // 🔥 Route changes = NO loader
      setLoading(false);
    }
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}
      {!loading && (
        <>
          <ScrollToTop />
          <MacNavbar />
          <AnimatedRoutes />
          <Footer />
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
