import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FloatingWhatsAppButton from "./components/ui/FloatingWhatsAppButton";
import ScrollToTop from "./components/ui/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <AppRoutes />
      <Footer />
      <FloatingWhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
