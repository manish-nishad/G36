import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import AppRoutes from "./AppRoutes";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <AppRoutes />
      </motion.div>
    </AnimatePresence>
  );
}
