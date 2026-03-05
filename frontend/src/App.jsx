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

  useEffect(() => {
    setLoading(true);

    const delay = hasLoadedOnce.current ? 220 : 300;
    const timer = setTimeout(() => {
      setLoading(false);
      hasLoadedOnce.current = true;
    }, delay);

    return () => clearTimeout(timer);
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
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <AppWrapper />
    </BrowserRouter>
  );
}
