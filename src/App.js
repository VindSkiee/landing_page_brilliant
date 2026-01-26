import React, {useEffect} from "react";

// Import Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import AboutUs from "./components/AboutUs";
import Mission from "./components/Mission";
import Footer from "./components/Footer";

// ============================================
// BRILLIANT INDONESIA LANDING PAGE
// Modern & Interactive Landing Page
// Tech Stack: React + Tailwind CSS + Lucide React
// ============================================

const App = () => {
  useEffect(() => {
    // Cek jika sedang di mode development (Vite menggunakan import.meta.env.DEV)
    const isDev = import.meta.env.DEV; 

    if (isDev) {
      const script = document.createElement('script');
      script.src = "//cdn.jsdelivr.net/npm/eruda";
      document.body.appendChild(script);
      script.onload = () => {
        if (window.eruda) {
          window.eruda.init();
        }
      };
    }
  }, []); // Berjalan sekali saat app di-load

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <SocialProof />
      <Programs />
      <Testimonials />
      <CTABanner />
      <AboutUs />
      <Mission />
      <Footer />
    </div>
  );
};

export default App;
