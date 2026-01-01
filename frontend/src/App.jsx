import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import MacNavbar from "./components/common/MacNavbar";
import Footer from "./components/common/Footer";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <MacNavbar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
