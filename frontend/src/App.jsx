import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MacNavbar from "./components/common/MacNavbar";
import Footer from "./components/common/Footer";
import AnimatedRoutes from "./routes/AnimatedRoutes";
import PageLoader from "./components/common/PageLoader";

function AppWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Initial load + route change loader
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // 👈 smooth UX (adjust if needed)

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}
      <MacNavbar />
      <AnimatedRoutes />
      <Footer />
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
