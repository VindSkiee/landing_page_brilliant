import React from "react";

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
  // Smooth scroll function
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
