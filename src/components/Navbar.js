import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "./Icons";

const Navbar = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsScrolled(window.scrollY > heroBottom - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] pt-4 px-4">
      <div
        className={`max-w-6xl mx-auto rounded-full shadow-2xl transition-all duration-500 ${
          isScrolled
            ? "liquid-glass-navbar liquid-glass-effect liquid-shimmer liquid-shadow"
            : "bg-gradient-to-r from-[#FF2E2E] to-[#DF2222] liquid-ripple"
        }`}
      >
        {/* Floating particles for liquid glass effect */}
        {isScrolled && (
          <>
            <div
              className="liquid-particle"
              style={{
                width: "4px",
                height: "4px",
                top: "20%",
                left: "15%",
                animationDelay: "0s",
              }}
            />
            <div
              className="liquid-particle"
              style={{
                width: "6px",
                height: "6px",
                top: "60%",
                left: "80%",
                animationDelay: "2s",
              }}
            />
            <div
              className="liquid-particle"
              style={{
                width: "3px",
                height: "3px",
                top: "40%",
                left: "50%",
                animationDelay: "4s",
              }}
            />
            <div
              className="liquid-particle"
              style={{
                width: "5px",
                height: "5px",
                top: "70%",
                left: "25%",
                animationDelay: "6s",
              }}
            />
            <div
              className="liquid-particle"
              style={{
                width: "4px",
                height: "4px",
                top: "30%",
                left: "70%",
                animationDelay: "8s",
              }}
            />
          </>
        )}
        <div className="px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/photo/logo.webp"
                alt="Brilliant Indonesia Logo"
                className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
              />
              <div className="hidden sm:block">
                <div
                  className={`font-extrabold text-sm lg:text-base leading-tight transition-colors duration-500 ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  BRILLIANT INDONESIA
                </div>
                <div
                  className={`text-[10px] lg:text-xs font-medium leading-tight transition-colors duration-500 ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                >
                  MITRA MERAIH SUKSES BERNILAI
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              <button
                onClick={() => scrollToSection("programs")}
                className={`font-bold text-sm transition-colors duration-500 ${
                  isScrolled
                    ? "text-gray-900 hover:text-brilliant-red"
                    : "text-white hover:text-brilliant-yellow"
                }`}
              >
                Produk Kami
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className={`font-bold text-sm transition-colors duration-500 ${
                  isScrolled
                    ? "text-gray-900 hover:text-brilliant-red"
                    : "text-white hover:text-brilliant-yellow"
                }`}
              >
                Testimoni
              </button>
              <button
                onClick={() => scrollToSection("aboutus")}
                className={`font-bold text-sm transition-colors duration-500 ${
                  isScrolled
                    ? "text-gray-900 hover:text-brilliant-red"
                    : "text-white hover:text-brilliant-yellow"
                }`}
              >
                Tentang Kami
              </button>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/6281366369621"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-[#47D029] to-[#2FA91D] text-white px-5 py-2.5 lg:px-6 lg:py-3 rounded-full font-medium text-sm hover:scale-105 hover:brightness-110 transition-all duration-300 shadow-lg"
              >
                <WhatsAppIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                <span className="hidden sm:inline font-bold">Chat WA</span>
                <span className="sm:hidden">WA</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 transition-colors duration-500 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-64" : "max-h-0"
          }`}
        >
          <div className="px-6 pb-4 pt-2 flex flex-col gap-3 border-t border-white/10">
            <button
              onClick={() => {
                scrollToSection("programs");
                setIsMobileMenuOpen(false);
              }}
              className={`font-medium text-left text-sm py-2 transition-colors duration-500 ${
                isScrolled
                  ? "text-gray-900 hover:text-brilliant-red"
                  : "text-white hover:text-brilliant-yellow"
              }`}
            >
              Produk Kami
            </button>
            <button
              onClick={() => {
                scrollToSection("testimonials");
                setIsMobileMenuOpen(false);
              }}
              className={`font-medium text-left text-sm py-2 transition-colors duration-500 ${
                isScrolled
                  ? "text-gray-900 hover:text-brilliant-red"
                  : "text-white hover:text-brilliant-yellow"
              }`}
            >
              Testimoni
            </button>
            <button
              onClick={() => {
                scrollToSection("footer");
                setIsMobileMenuOpen(false);
              }}
              className={`font-medium text-left text-sm py-2 transition-colors duration-500 ${
                isScrolled
                  ? "text-gray-900 hover:text-brilliant-red"
                  : "text-white hover:text-brilliant-yellow"
              }`}
            >
              Tentang Kami
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
