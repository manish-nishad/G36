import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import MacNavbar from "./components/common/MacNavbar";
import Footer from "./components/common/Footer";
import AnimatedRoutes from "./routes/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <MacNavbar />
        <AnimatedRoutes /> 
      <Footer />
    </BrowserRouter>
  );
}

export default App;
