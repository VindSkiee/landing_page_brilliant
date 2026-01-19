import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Youtube,
  Image as ImageIcon,
} from "lucide-react";
import { ReactComponent as BlobShape } from "./blob-shape.svg";

// Custom SVG Icons
const WhatsAppIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
    />
  </svg>
);

const PersonIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"
    />
  </svg>
);

const CalendarIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
  >
    <g fill="none">
      <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
      <path
        fill="currentColor"
        d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7zm-5-9a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v3H3V7a2 2 0 0 1 2-2h2V4a1 1 0 0 1 2 0v1h6V4a1 1 0 0 1 1-1"
      />
    </g>
  </svg>
);

const ChevronLeftIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="24"
    viewBox="0 0 12 24"
    className={className}
    style={{ transform: "rotate(180deg)" }}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
    />
  </svg>
);

const ChevronRightIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="24"
    viewBox="0 0 12 24"
    className={className}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
    />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
    />
  </svg>
);

const TikTokIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="22"
    viewBox="0 0 256 290"
    className={className}
  >
    <path
      fill="currentColor"
      d="M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67 67 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898M69.673 225.607a40 40 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.3 40.3 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.3 40.3 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857z"
    />
  </svg>
);

// ============================================
// BRILLIANT INDONESIA LANDING PAGE
// Modern & Interactive Landing Page
// Tech Stack: React + Tailwind CSS + Lucide React
// ============================================

const App = () => {
  // ==========================================
  // STATE MANAGEMENT
  // ==========================================

  // Navbar state
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hero animation state
  const [heroAnimated, setHeroAnimated] = useState(false);

  // Counter animation state
  const [countersAnimated, setCountersAnimated] = useState(false);
  const [alumniCount, setAlumniCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);

  // Testimonial carousel state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedTestimonials, setExpandedTestimonials] = useState({});

  // Typing animation state
  const [displayedHeading, setDisplayedHeading] = useState("");
  const [displayedSubheading, setDisplayedSubheading] = useState("");
  const [headingComplete, setHeadingComplete] = useState(false);
  const [subheadingComplete, setSubheadingComplete] = useState(false);

  // Full text for typing animation
  const fullHeading =
    "Lolos Tes TKA, SNBT, SKD. Tidak Lolos? Garansi Tahun Depan";
  const fullSubheading =
    "Bimbingan belajar offline & online terbaik. Dibimbing langsung oleh alumni UGM, ITB, & UNDIP dengan metode praktis tanpa ribet.";

  // Refs
  const socialProofRef = useRef(null);
  const heroRef = useRef(null);

  // ==========================================
  // DATA
  // ==========================================

  const programs = [
    {
      id: 1,
      title: "Program bimbel TKA",
      subtitle: "SD, SMP & SMA",
      description:
        "Berbagai macam pilihan program bimbel yang dapat dipilih sesuai kebutuhanmu",
      image: "tka.webp",
    },
    {
      id: 2,
      title: "Program bimbel",
      subtitle: "SNBT & UM PTN",
      description:
        "Berbagai macam pilihan program bimbel yang dapat dipilih sesuai kebutuhanmu",
      image: "snbt.webp",
    },
    {
      id: 3,
      title: "Program bimbel",
      subtitle: "Tes CPNS & CPPPK",
      description:
        "Berbagai macam pilihan program bimbel yang dapat dipilih sesuai kebutuhanmu",
      image: "cpns.webp",
    },
    {
      id: 4,
      title: "Program bimbel",
      subtitle: "Tes Polisi & TNI",
      description:
        "Berbagai macam pilihan program bimbel yang dapat dipilih sesuai kebutuhanmu",
      image: "polisi_tni.webp",
    },
    {
      id: 5,
      title: "Program bimbel",
      subtitle: "Tes Kedinasan",
      description:
        "Berbagai macam pilihan program bimbel yang dapat dipilih sesuai kebutuhanmu",
      image: "kedinasan.webp",
    },
    {
      id: 6,
      title: "Program bimbel",
      subtitle: "Tes BUMN & BUMS",
      description:
        "Berbagai macam pilihan program bimbel yang dapat dipilih sesuai kebutuhanmu",
      image: "bumn.webp",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Kiagus Muhammad Zaky",
      university: "Universitas Gadjah Mada",
      quote:
        "Berkat Brilliant Indonesia, saya berhasil lolos SNBT dan diterima di PTN impian. Metode belajarnya sangat efektif dan mudah dipahami!",
    },
    {
      id: 2,
      name: "Rafit Zufar",
      university: "Institut Teknologi Bandung",
      quote:
        "Mentor-mentornya sangat berpengalaman dan sabar dalam mengajar. Materi yang diberikan lengkap dan up-to-date sesuai kurikulum terbaru.",
    },
    {
      id: 3,
      name: "Kenzie Muhammad Rizieq",
      university: "Universitas Diponegoro",
      quote:
        "Program garansi tahun depan membuat saya lebih tenang dalam belajar. Alhamdulillah lolos di percobaan pertama!",
    },
    {
      id: 4,
      name: "Anisa Putri Ramadhani",
      university: "Universitas Indonesia",
      quote:
        "Bimbel terbaik yang pernah saya ikuti! Sistem belajarnya fleksibel, bisa online maupun offline sesuai kebutuhan.",
    },
    {
      id: 5,
      name: "Muhammad Faisal Akbar",
      university: "Universitas Padjadjaran",
      quote:
        "Lolos CPNS berkat bimbingan dari Brilliant Indonesia. Tryout-nya sangat membantu untuk persiapan ujian sesungguhnya.",
    },
    {
      id: 6,
      name: "Siti Nurhaliza",
      university: "Politeknik Negeri Jakarta",
      quote:
        "Dari awal tidak percaya diri, sekarang sudah diterima di Kedinasan. Terima kasih Brilliant Indonesia!",
    },
  ];

  // ==========================================
  // EFFECTS & HANDLERS
  // ==========================================

  // Scroll listener untuk navbar
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

  // Hero entry animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Typing animation for heading
  useEffect(() => {
    if (!heroAnimated) return;

    let currentIndex = 0;
    const typingSpeed = 40; // milliseconds per character

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullHeading.length) {
        setDisplayedHeading(fullHeading.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setHeadingComplete(true);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [heroAnimated]);

  // Typing animation for subheading (starts after heading is complete)
  useEffect(() => {
    if (!headingComplete) return;

    let currentIndex = 0;
    const typingSpeed = 25; // milliseconds per character

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullSubheading.length) {
        setDisplayedSubheading(fullSubheading.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setSubheadingComplete(true);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [headingComplete]);

  // Intersection Observer untuk counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersAnimated) {
            setCountersAnimated(true);
            animateCounter(0, 1000, 2000, setAlumniCount);
            animateCounter(0, 5, 2000, setYearsCount);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (socialProofRef.current) {
      observer.observe(socialProofRef.current);
    }

    return () => observer.disconnect();
  }, [countersAnimated]);

  // Get visible cards based on screen size
  const getVisibleCards = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
      return 1;
    }
    return 3;
  }, []);

  // Testimonial carousel auto-play - pauses when any card is expanded
  useEffect(() => {
    // Check if any testimonial is expanded
    const hasExpandedCards = Object.values(expandedTestimonials).some(
      (val) => val === true,
    );

    // Don't start interval if any card is expanded
    if (hasExpandedCards) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentTestimonial(
        (prev) =>
          (prev + 1) % Math.ceil(testimonials.length / getVisibleCards()),
      );
    }, 15000);
    return () => clearInterval(interval);
  }, [testimonials.length, getVisibleCards, expandedTestimonials]);

  // Counter animation function
  const animateCounter = (start, end, duration, setter) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setter(Math.floor(easeOutQuart * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false);
  };

  // Testimonial navigation
  const nextTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev + 1) % Math.ceil(testimonials.length / getVisibleCards()),
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0
        ? Math.ceil(testimonials.length / getVisibleCards()) - 1
        : prev - 1,
    );
  };

  // Toggle testimonial expansion
  const toggleTestimonial = (id) => {
    setExpandedTestimonials((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ========================================== */}
      {/* NAVBAR */}
      {/* ========================================== */}
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
                onClick={() => scrollToSection("programs")}
                className={`font-medium text-left text-sm py-2 transition-colors duration-500 ${
                  isScrolled
                    ? "text-gray-900 hover:text-brilliant-red"
                    : "text-white hover:text-brilliant-yellow"
                }`}
              >
                Produk Kami
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className={`font-medium text-left text-sm py-2 transition-colors duration-500 ${
                  isScrolled
                    ? "text-gray-900 hover:text-brilliant-red"
                    : "text-white hover:text-brilliant-yellow"
                }`}
              >
                Testimoni
              </button>
              <button
                onClick={() => scrollToSection("footer")}
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

      {/* ========================================== */}
      {/* HERO SECTION */}
      {/* ========================================== */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen pt-8 lg:pt-8 pb-0 overflow-hidden bg-white"
      >
        {/* Background Image with Opacity - Sharp Quality */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/photo/kelas.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.08,
            imageRendering: "high-quality",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
            {/* Left Content - Takes 55% on desktop */}
            <div
              className={`lg:w-[100%] space-y-6 lg:space-y-4 transition-all duration-800 pt-28 sm:pt-32 lg:pt-36 ${
                heroAnimated
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-24"
              }`}
            >
              {/* Main Heading */}
              <h1
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight h-[7rem] sm:h-[8rem] lg:h-[9rem] mb-2 lg:mb-4 relative"
                style={{ transitionDelay: "0ms" }}
              >
                {/* Invisible full text to establish layout */}
                <span className="invisible" aria-hidden="true">
                  Lolos Tes <span>TKA, SNBT, SKD.</span>
                  <br />
                  Tidak Lolos? Garansi <span>Tahun Depan</span>
                </span>
                {/* Visible typing animation overlay */}
                <span className="absolute inset-0">
                  {displayedHeading.split(" ").map((word, index, arr) => {
                    const highlightWords = [
                      "TKA,",
                      "SNBT,",
                      "SKD.",
                      "Tahun",
                      "Depan",
                    ];
                    const isHighlight = highlightWords.includes(word);
                    const isLineBreak = word === "Tidak";
                    return (
                      <span key={index}>
                        {isLineBreak && <br />}
                        <span
                          className={isHighlight ? "text-brilliant-red" : ""}
                        >
                          {word}
                        </span>
                        {index < arr.length - 1 ? " " : ""}
                      </span>
                    );
                  })}
                  <span
                    className={`inline-block w-0.5 h-6 sm:h-8 lg:h-10 bg-brilliant-red ml-1 align-middle ${headingComplete ? "opacity-0" : "animate-pulse"}`}
                  ></span>
                </span>
              </h1>

              {/* Subheading */}
              <p
                className="text-gray-700 text-base lg:text-1xl max-w-xl font-medium h-[4.5rem] lg:h-[4rem] relative"
                style={{ transitionDelay: "200ms" }}
              >
                {/* Invisible full text to establish layout */}
                <span className="invisible" aria-hidden="true">
                  Bimbingan belajar offline & online berkualitas tinggi,
                  dibimbing langsung oleh alumni UGM, ITB, & UNDIP. Metode
                  belajar praktis, jelas, dan efisien untuk hasil maksimal tanpa
                  proses yang rumit.
                </span>
                {/* Visible typing animation overlay */}
                <span className="absolute inset-0">
                  {displayedSubheading}
                  {headingComplete && (
                    <span
                      className={`inline-block w-0.5 h-4 lg:h-5 bg-gray-500 ml-1 align-middle ${subheadingComplete ? "opacity-0" : "animate-pulse"}`}
                    ></span>
                  )}
                </span>
              </p>

              {/* University Logos Placeholder */}
              <div className="flex items-center gap-12 flex-wrap">
                {[
                  { name: "UGM", fileName: "logo-UGM.webp" },
                  { name: "ITB", fileName: "logo-ITB.webp" },
                  { name: "UNDIP", fileName: "logo-UNDIP.webp" },
                  { name: "UI", fileName: "logo-UI.webp" },
                  { name: "UNPAD", fileName: "logo-UNPAD.webp" },
                ].map((uni, idx) => (
                  <div
                    key={uni.name}
                    className="w-16 h-16 flex items-center justify-center overflow-hidden"
                    style={{ transitionDelay: `${300 + idx * 50}ms` }}
                  >
                    <img
                      src={`/photo/${uni.fileName}`}
                      alt={`Logo ${uni.name}`}
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextSibling.style.display = "block";
                      }}
                    />
                    <span className="text-[10px] font-bold text-gray-500 hidden">
                      {uni.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-wrap gap-4"
                style={{ transitionDelay: "400ms" }}
              >
                <a
                  href="https://wa.me/6281366369621"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 bg-[#47D029] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 hover:brightness-110 hover:shadow-lg transition-all duration-300"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Daftar atau Konsultasi</span>
                </a>
                <button
                  onClick={() => scrollToSection("programs")}
                  className="group flex items-center gap-4 border-4 border-brilliant-red text-brilliant-red px-6 py-3 rounded-full font-bold hover:bg-brilliant-red hover:text-white transition-all duration-300 liquid-ripple"
                >
                  <span>Lihat Program</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Content - 3 People with Blob - Positioned at right edge */}
            <div
              className={`lg:w-[60%] lg:ml-auto relative transition-all duration-800 ${
                heroAnimated
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-24"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {/* 3 People Container */}
              <div className="relative z-10 w-full h-[36rem] lg:h-[40rem] pb-8">
                {/* SVG Blob Background - Extends far to right edge */}
                <div className="absolute lg:-right-36 xl:-right-48 top-[65%] -translate-y-1/2 z-0">
                  <BlobShape
                    className="w-full h-full object-contain"
                    style={{ width: "580px", height: "595px" }}
                  />
                </div>

                {/* 3 People Container - Overlapping, pushed further right */}
                <div className="relative z-10 flex items-end justify-end pr-0 lg:-mr-10 xl:-mr-20 pb-8">
                  {/* Person 1 - Left (Siswa SMA) - Behind */}
                  <div
                    className="
    absolute bottom-0
    left-[8rem] lg:left-[10rem]
    w-64 h-96
    sm:w-72 sm:h-[24rem]
    lg:w-80 lg:h-[36rem]
    overflow-hidden translate-y-32 filter saturate-200
  "
                  >
                    <img
                      src="/photo/1_orang_sma.webp"
                      alt="Anak SMA"
                      className="
      w-full h-full
      object-cover object-top
      scale-x-[-1]
    "
                    />
                  </div>

                  {/* Person 2 - Center (ASN) - Front and Largest */}
                  <div
                    className="
    absolute bottom-0
    left-[8rem] lg:left-[17rem]
    z-30

    w-56 sm:w-64 lg:w-72
    h-[28rem] sm:h-[20rem] lg:h-[28rem]

    overflow-hidden translate-y-40 filter saturate-150
  "
                  >
                    <img
                      src="/photo/1_orang_asn.webp"
                      alt="ASN"
                      className="
      w-full h-full
      object-cover object-top
    "
                    />
                  </div>

                  {/* Person 3 - Right (Polisi) - Same size as SMA */}
                  <div
                    className="
    w-64 h-96
    sm:w-72 sm:h-[28rem]
    lg:w-80 lg:h-[32rem]
    overflow-hidden
    flex-shrink-0
    translate-x-19 lg:translate-x-32 translate-y-40 filter saturate-150
  "
                  >
                    <img
                      src="/photo/1_orang_polisi.webp"
                      alt="Polisi"
                      className="
      w-full h-full
      object-cover object-top
      scale-x-[-1]
    "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SOCIAL PROOF / TRUST INDICATORS */}
      {/* ========================================== */}
      <section
        ref={socialProofRef}
        className="relative py-16 lg:py-20 bg-gradient-to-r from-brilliant-red via-brilliant-orange to-brilliant-yellow"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Stat 1: Alumni */}
            <div className="text-center text-white group p-6 rounded-2xl transition-all duration-300 hover:scale-105">
              <div className="flex justify-center items-center gap-3 mb-2">
                <PersonIcon className="w-10 h-10 lg:w-12 lg:h-12" />
                <div className="text-4xl lg:text-5xl font-bold">
                  {alumniCount}+
                </div>
              </div>
              <div className="text-lg lg:text-xl font-medium opacity-90">
                Alumni BRILLIANT
              </div>
            </div>

            {/* Vertical Divider 1 */}
            <div className="hidden md:block absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-32 bg-white"></div>

            {/* Stat 2: Garansi */}
            <div className="text-center text-white group p-6 rounded-2xl transition-all duration-300 hover:scale-105">
              <div className="text-xl lg:text-2xl font-bold mb-2">
                Garansi Tahun Depan
              </div>
              <div className="text-lg lg:text-xl font-medium opacity-90">
                jika Tidak Lolos
              </div>
            </div>

            {/* Vertical Divider 2 */}
            <div className="hidden md:block absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-32 bg-white"></div>

            {/* Stat 3: Pengalaman */}
            <div className="text-center text-white group p-6 rounded-2xl transition-all duration-300 hover:scale-105">
              <div className="flex justify-center items-center gap-3 mb-2">
                <CalendarIcon className="w-10 h-10 lg:w-12 lg:h-12" />
                <div className="text-4xl lg:text-5xl font-bold">
                  {yearsCount}+
                </div>
              </div>
              <div className="text-lg lg:text-xl font-medium opacity-90">
                Tahun Pengalaman
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* PROGRAM SHOWCASE SECTION */}
      {/* ========================================== */}
      <section
        id="programs"
        className="py-16 lg:py-56 bg-white relative overflow-hidden"
      >
        {/* Decorative Background Vectors */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left - Terpotong (menyentuh atas & kiri) */}
          <img
            src="/vector/vector_program.svg"
            alt=""
            className="absolute -top-24 -left-32 w-[275px] h-[265px] opacity-[0.9] transform rotate-200"
          />

          {/* Top Right - Terpotong (menyentuh atas & kanan) */}
          <img
            src="/vector/vector_program.svg"
            alt=""
            className="absolute -top-40 -right-10 w-[275px] h-[265px] opacity-[0.9] transform -rotate-45"
          />

          {/* Middle Left - Terpotong (menyentuh kiri) */}
          <img
            src="/vector/vector_program.svg"
            alt=""
            className="absolute top-1/3 -left-52 w-[275px] h-[265px] opacity-[0.7] transform rotate-90"
          />

          {/* Middle Right - Terpotong (menyentuh kanan) */}
          <img
            src="/vector/vector_program.svg"
            alt=""
            className="absolute top-1/2 -right-32 w-[275px] h-[265px] opacity-[0.7] transform -rotate-25"
          />

          {/* Center Top - Full visible (tidak menyentuh sisi) */}
          <img
            src="/vector/vector_program.svg"
            alt=""
            className="absolute top-16 left-1/2 -translate-x-1/2 w-[275px] h-[265px] opacity-[0.07] transform rotate-30"
          />

          {/* Center - Full visible (tidak menyentuh sisi)
          <img
            src="/vector/vector_program.svg"
            alt=""
            className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[275px] h-[265px] opacity-[0.07] transform rotate-45"
          /> */}

          {/* Center Right Inner - Full visible (tidak menyentuh sisi) */}
          <img
            src="/vector/vector_program.svg"
            alt=""
            className="absolute top-2/3 right-1/3 w-[275px] h-[265px] opacity-[0.07] transform -rotate-15"
          />

          {/* Custom Vector 1 - vector_program.svg */}
          <img
            src="/vector/vector_circle.svg"
            alt=""
            className="absolute w-[245px] h-[265px] opacity-[0.9]"
            style={{ right: "450px", top: "200px" }}
          />

          {/* Custom Vector 1 - vector_program.svg */}
          <img
            src="/vector/vector_circle.svg"
            alt=""
            className="absolute w-[245px] h-[265px] opacity-[0.9]"
            style={{ left: "457px", top: "650px" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-extrabold leading-[1.15] mb-4">
              <span className="bg-gradient-to-r from-[#FF0000] to-[#FF7400] bg-clip-text text-transparent">
                Program Bimbel{" "}
              </span>
              <span className="text-brilliant-purple">BRILLIANT</span>
              <span className="bg-gradient-to-r from-[#FF7400] to-[#FFC100] bg-clip-text text-transparent">
                {" "}
                yang Tersedia
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Berbagai macam pilihan program bimbel yang dapat dipilih sesuai
              kebutuhanmu!
            </p>
          </div>

          {/* Programs Grid */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12 py-20">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className="
                  group
                  bg-white
                  shadow-lg hover:shadow-2xl
                  transition-all duration-500
                  overflow-visible
                  card-hover
                  w-[330px]
                  min-h-[400px]   /* ⬅️ PENTING */
                  flex flex-col
                  relative
                  hover:z-10
                "
                style={{
                  animationDelay: `${index * 100}ms`,
                  borderRadius: "37px",
                }}
              >
                {/* Image Container */}
                <div
                  className="
    relative 
    min-h-[180px]
    group-hover:min-h-[198px]
    overflow-visible
    flex-shrink-0
    transition-[min-height]
    duration-500
    ease-[cubic-bezier(0.34,1.56,0.64,1)]
  "
                  style={{
                    borderRadius: "37px 37px 0 0",
                    backgroundImage: "url('/vector/program_bg.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    src={`/photo/${program.image}`}
                    alt={program.title}
                    className="
    w-full
    h-[180px]
    object-cover translate-x-[-4px]
    transition-transform
    duration-300
    ease-out
    group-hover:scale-[1.2]
    
  "
                  />

                  <div className="hidden absolute inset-0 items-center justify-center bg-gradient-to-b from-transparent to-black/10">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                        <ImageIcon className="w-12 h-12 text-white/80" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="h-[4.5rem] mb-4 flex flex-col justify-center items-center">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:font-black group-hover:text-brilliant-purple leading-[1.15] transition-colors text-center">
                        {program.title}
                      </h3>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:font-black group-hover:text-brilliant-red leading-[1.15] transition-colors text-center">
                        {program.subtitle}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm text-center leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* TESTIMONIAL / SUCCESS STORIES SECTION */}
      {/* ========================================== */}
      <section
        id="testimonials"
        className="py-16 lg:py-24 bg-gradient-to-b from-[#FFFFFF] to-[#F5F5F5] relative overflow-hidden"
      >
        {/* Decorative Circle SVGs */}
        <div className="relative inset-0 pointer-events-none">
          {/* Orange Circle - Left */}
          <img
            src="/vector/orange_circle.svg"
            alt=""
            className="absolute w-[275px] h-[262px] opacity-100"
            style={{ left: "41px", top: "90px", transform: "translateY(-50%)" }}
          />

          {/* Yellow Circle - Right */}
          <img
            src="/vector/orange_circle.svg"
            alt=""
            className="absolute w-[275px] h-[262px] opacity-100"
            style={{
              left: "740px",
              top: "35px",
              transform: "translateY(-50%)",
            }}
          />

          {/* Red Circle - Far Right */}
          <img
            src="/vector/orange_circle.svg"
            alt=""
            className="absolute w-[275px] h-[262px] opacity-100"
            style={{
              left: "1200px",
              top: "280px",
              transform: "translateY(-50%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-extrabold leading-[1.15] mb-4">
              Mari Dengarkan Mereka yang Sudah Lulus
            </h2>
            <p className="text-gray-600 text-lg">
              Simak alumni-alumni terbaik kami
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows - Fixed Position, No Background */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 lg:left-0 z-20 text-gray-700 hover:text-black hover:scale-125 transition-all duration-1000"
              style={{ top: "280px" }}
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="w-10 h-10 lg:w-12 lg:h-12 drop-shadow-lg" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 lg:right-0 z-20 text-gray-700 hover:text-black hover:scale-125 transition-all duration-1000"
              style={{ top: "280px" }}
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="w-10 h-10 lg:w-12 lg:h-12 drop-shadow-lg" />
            </button>

            {/* Cards Container */}
            <div
              className="relative overflow-hidden mx-8 lg:mx-16"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              }}
            >
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {/* Group testimonials by visible cards */}
                {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
                  (_, groupIndex) => (
                    <div
                      key={groupIndex}
                      className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
                    >
                      {testimonials
                        .slice(groupIndex * 3, groupIndex * 3 + 3)
                        .map((testimonial) => (
                          <div
                            key={testimonial.id}
                            className="flex flex-col items-center pt-8"
                          >
                            {/* Card Container with overflow visible for badge */}
                            <div className="relative">
                              {/* University Badge - Positioned outside card */}
                              <div
                                className="absolute left-1/2 -translate-x-1/2 bg-white text-white flex items-center justify-center z-10 shadow-lg"
                                style={{
                                  width: "275px",
                                  height: "67px",
                                  borderRadius: "14px",
                                  top: "-33px",
                                }}
                              >
                                <p className="font-bold text-sm px-4 text-center truncate">
                                  {testimonial.university}
                                </p>
                              </div>

                              {/* Main Card */}
                              <div
                                className="bg-white transition-all duration-500 ease-in-out w-[300px] flex flex-col overflow-visible"
                                style={{
                                  borderRadius: "59px",
                                  minHeight: expandedTestimonials[
                                    testimonial.id
                                  ]
                                    ? "auto"
                                    : "447px",
                                }}
                              >
                                {/* Image Container */}
                                <div
                                  className="bg-gradient-to-br from-gray-200 to-gray-300 flex items-center shadow-lg justify-center overflow-hidden flex-shrink-0"
                                  style={{
                                    width: "300px",
                                    height: "371px",
                                    borderRadius: "59px 59px 40px 40px",
                                  }}
                                >
                                  <img
                                    src="/photo/default-avatar.jpg"
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      e.currentTarget.style.display = "none";
                                      e.currentTarget.nextSibling.style.display =
                                        "flex";
                                    }}
                                  />
                                  <div className="hidden w-full h-full items-center justify-center">
                                    <ImageIcon className="w-16 h-16 text-gray-400" />
                                  </div>
                                </div>

                                {/* Name Section - Inside Card */}
                                <div className="px-6 pt-5 pb-3 text-center">
                                  <h3 className="text-lg font-bold text-gray-900">
                                    {testimonial.name}
                                  </h3>
                                </div>

                                {/* Quote Section - Collapsible */}
                                <div
                                  className="overflow-hidden transition-all duration-500 ease-in-out"
                                  style={{
                                    maxHeight: expandedTestimonials[testimonial.id] ? "500px" : "0px",
                                    opacity: expandedTestimonials[testimonial.id] ? 1 : 0,
                                  }}
                                >
                                  <div className="px-6 pb-5 pt-2">
                                    <p className="text-gray-600 text-sm text-center italic leading-relaxed">
                                      "{testimonial.quote}"
                                    </p>
                                  </div>
                                </div>

                                {/* Toggle Button */}
                                <div className="px-6 pb-5">
                                  <button
                                    onClick={() =>
                                      toggleTestimonial(testimonial.id)
                                    }
                                    className="w-full text-orange-500 text-sm font-semibold hover:underline"
                                  >
                                    {expandedTestimonials[testimonial.id]
                                      ? "Sembunyikan"
                                      : "Baca Selengkapnya"}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* CTA BANNER SECTION */}
      {/* ========================================== */}
      <section className="py-16 lg:py-40 bg-gradient-to-b from-[#F5F5F5] to-[#ffc08c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-48">
          <div
            className="relative bg-gradient-to-r from-[#FF7400] to-[#FFC100] rounded-[29px] overflow-visible shadow-2xl py-8"
            style={{ minHeight: "221px" }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="p-8 lg:p-8 space-y-6">
                <h2 className="text-3xl lg:text-2xl font-bold font-poppins text-white leading-tight">
                  Sudah siap untuk{" "}
                  <span className="text-brilliant-purple font-extrabold font-poppins">Mendaftar?</span>
                </h2>
                <p className="text-white lg:text-1xl font-medium leading-relaxed">
                  Mari bergabung bersama Brilliant Indonesia untuk meraih
                  sekolah/perguruan tinggi Impianmu!
                </p>
                <div className="flex flex-wrap gap-3 pt-2 py-4">
                  <a
                    href="https://wa.me/6281366369621"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-brilliant-orange px-4 py-3 rounded-[10px] font-bold hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    Hubungi Kami
                  </a>
                  <a
                    href="https://wa.me/6281366369621"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 bg-brilliant-purple text-white px-4 py-3 rounded-[10px] font-bold hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    <span>Daftar Sekarang</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative h-[221px] hidden lg:block">
                <img
                  src="/photo/sma_cta_section.webp"
                  alt="Daftar Sekarang"
                  className="
        absolute 
        bottom-6 
        right-28 
        h-[400px]
        w-auto
        object-contain
        translate-y-20 -scale-x-100
      "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* WAVE SEPARATOR */}
      {/* ========================================== */}
      <div className="relative w-full bg-gradient-to-b from-[#ffc08c] to-[#FF7400]">
        <svg
          className="editorial"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax1">
            <use xlinkHref="#gentle-wave" x="50" y="3" fill="#FF9A56" />
          </g>
          <g className="parallax2">
            <use xlinkHref="#gentle-wave" x="50" y="0" fill="#FF8547" />
          </g>
          <g className="parallax3">
            <use xlinkHref="#gentle-wave" x="50" y="9" fill="#FF7A38" />
          </g>
          <g className="parallax4">
            <use xlinkHref="#gentle-wave" x="50" y="6" fill="#FF7400" />
          </g>
        </svg>
      </div>

      {/* ========================================== */}
      {/* ABOUT US SECTION */}
      {/* ========================================== */}
      <section id="aboutus" className="py-16 lg:py-40 bg-gradient-to-b from-[#FF7400] to-[#ffc08c] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img
                src="/photo/logo.webp"
                alt="Brilliant Indonesia Logo"
                className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
              />
            </div>

            {/* Heading */}
            <h2 className="text-3xl lg:text-5xl font-extrabold text-brilliant-purple mb-4">
              BRILLIANT INDONESIA
            </h2>
            <p className="text-2xl lg:text-3xl font-semibold text-white">
              MITRA MERAIH SUKSES BERNILAI
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                About Us
              </h2>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                Brilliant Indonesia adalah lembaga bimbingan belajar yang
                dirancang dengan teliti, bukan asal-asalan, untuk memberikan
                pengalaman belajar yang menyenangkan dan efektif. Kami
                berkomitmen membantu siswa meraih impian mereka dengan metode
                yang terbukti berhasil.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div
                className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 shadow-2xl overflow-hidden"
                style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
              >
                <img
                  src="/photo/team-photo.jpg"
                  alt="Brilliant Indonesia Team"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center flex-col p-8 text-center">
                  <ImageIcon className="w-16 h-16 text-gray-400 mb-4" />
                  <p className="text-gray-500 font-medium">
                    Foto Keluarga Besar Brilliant Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* OUR MISSION SECTION */}
      {/* ========================================== */}
      <section className="py-16 lg:py-24 bg-[#ffc08c] ] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="relative order-2 lg:order-1">
              <div
                className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 shadow-2xl overflow-hidden"
                style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
              >
                <img
                  src="/photo/mission-photo.jpg"
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center flex-col p-8 text-center">
                  <ImageIcon className="w-16 h-16 text-gray-400 mb-4" />
                  <p className="text-gray-500 font-medium">Our Mission</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Our Mission: Helping Millions of Organizations Grow Better
              </h2>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                Kami percaya tidak hanya pada pertumbuhan yang lebih besar,
                tetapi juga pertumbuhan yang lebih baik. Dan pertumbuhan yang
                lebih baik berarti menyelaraskan kesuksesan bisnis Anda dengan
                kesuksesan siswa Anda. Win-win!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* FOOTER SECTION */}
      {/* ========================================== */}
      <footer id="footer" className="bg-brilliant-purple py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Column 1: Branding */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/photo/logo.webp"
                  alt="Brilliant Indonesia Logo"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-brilliant-yellow font-semibold text-lg">
                    BRILLIANT INDONESIA
                  </h3>
                </div>
              </div>
              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                Bimbingan belajar offline & online terpercaya untuk persiapan
                PTN, CPNS, Kedinasan, dan Polri. Didirikan sejak tahun 2018.
              </p>
              {/* Social Media */}
              <div>
                <p className="text-brilliant-yellow font-medium mb-3">
                  Ikuti Kami
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/brilliantindonesia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-brilliant-yellow hover:text-brilliant-purple transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://tiktok.com/@brilliantindonesia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-brilliant-yellow hover:text-brilliant-purple transition-all duration-300"
                    aria-label="TikTok"
                  >
                    <TikTokIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://youtube.com/brilliantindonesia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-brilliant-yellow hover:text-brilliant-purple transition-all duration-300"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Contact */}
            <div>
              <h3 className="text-brilliant-yellow font-bold text-lg mb-6">
                Kontak
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+6281234567890"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-brilliant-yellow group-hover:text-brilliant-purple transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+62 812-7429-2390</span>
                </a>
                <a
                  href="mailto:info@brilliantindonesia.com"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-brilliant-yellow group-hover:text-brilliant-purple transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>info@brilliantindonesia.com</span>
                </a>
              </div>
            </div>

            {/* Column 3: Location */}
            <div>
              <h3 className="text-brilliant-yellow font-bold text-lg mb-6">
                Lokasi
              </h3>
              <div className="flex items-start gap-3 text-white/80">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="leading-relaxed">
                  Jl. Eka Jaya RT 20, Kel. Talang Bakung Kec.Paal Merah, Kota
                  Jambi
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm text-center">
              © 2026 Brilliant Indonesia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
