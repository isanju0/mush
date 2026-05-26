import { Box } from "@mui/material";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection";
import ProductsSection from "./sections/ProductsSection";
import StorySection from "./sections/StorySection";
import TestimonialsSection from "./sections/TestimonialsSection";
import FounderNote from "./sections/FounderNote";
import FounderNote2 from "./sections/FounderNote2";

function App() {
  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      <Header />
      <HeroSection />
      {/* <FounderNote /> */}
      <FounderNote2 />
      <ProductsSection />
      <StorySection />
      <TestimonialsSection />
      <AboutSection />
      <Footer />
      <FloatingWhatsApp />
    </Box>
  );
}

export default App;
