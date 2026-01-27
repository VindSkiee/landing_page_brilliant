import React, { useState, useEffect, useRef } from "react";
import { Image as ImageIcon } from "lucide-react";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";
import { testimonials } from "../constants/data";
import ExpandableTestimonials from "./ExpandableTestimonials";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedTestimonials, setExpandedTestimonials] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const getVisibleCards = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 1024) return 3;
      if (window.innerWidth >= 640) return 2;
      return 1;
    }
    return 3;
  };

  // Intersection Observer untuk pause/resume auto-scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hasExpandedCards = Object.values(expandedTestimonials).some(
      (val) => val === true,
    );

    // Hanya auto-scroll jika section terlihat dan tidak ada card yang expanded
    if (hasExpandedCards || !isVisible) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentTestimonial(
        (prev) =>
          (prev + 1) % Math.ceil(testimonials.length / getVisibleCards()),
      );
    }, 15000);
    return () => clearInterval(interval);
  }, [expandedTestimonials, isVisible]);

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

  const toggleTestimonial = (id) => {
    setExpandedTestimonials((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-12 lg:py-24 pb-8 lg:pb-16 bg-gradient-to-b from-[#FFFFFF] to-[#F5F5F5] relative overflow-hidden"
    >
      {/* Decorative Circle SVGs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Circle 1 */}
        <img
          src="/vector/orange_circle.svg"
          alt=""
          className="
      absolute opacity-80

      /* MOBILE */
      w-24 h-24
      top-16 left-4

      /* TABLET */
      sm:w-32 sm:h-32
      sm:top-20 sm:left-8

      /* DESKTOP */
      lg:w-[275px] lg:h-[262px]
      lg:top-[90px] lg:left-[41px]
    "
          loading="lazy"
          aria-hidden="true"
        />

        {/* Circle 2 */}
        <img
          src="/vector/orange_circle.svg"
          alt=""
          className="
      absolute opacity-80

      /* MOBILE */
      w-20 h-20
      top-8 right-6

      /* TABLET */
      sm:w-28 sm:h-28
      sm:top-12 sm:right-16

      /* DESKTOP */
      lg:w-[275px] lg:h-[262px]
      lg:top-[35px] lg:left-[740px]
    "
          loading="lazy"
          aria-hidden="true"
        />

        {/* Circle 3 */}
        <img
          src="/vector/orange_circle.svg"
          alt=""
          className="
      absolute opacity-80

      /* MOBILE */
      w-12 h-12
      top-[-50] right-40

      /* TABLET */
      sm:w-36 sm:h-36
      sm:bottom-20

      /* DESKTOP */
      lg:w-[275px] lg:h-[262px]
      lg:top-[280px] lg:left-[1200px]
      lg:translate-x-0
    "
          loading="lazy"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black leading-[1.15] mb-3 lg:mb-4" style={{ fontWeight: 900 }}>
            Mari Dengarkan Mereka yang Sudah Lulus
          </h2>
          <p className="text-gray-600 text-base lg:text-2xl xl:text-lg">
            Simak alumni-alumni terbaik kami
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-[-5px] sm:left-4 lg:left-0 z-20 text-gray-700 hover:text-black hover:scale-110 transition-all duration-300"
            style={{ top: "240px" }}
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 drop-shadow-lg" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-[-5px] sm:right-4 lg:right-0 z-20 text-gray-700 hover:text-black hover:scale-110 transition-all duration-300"
            style={{ top: "240px" }}
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 drop-shadow-lg" />
          </button>

          {/* Cards Container */}
          <div
            className="relative overflow-hidden mx-6 sm:mx-12 lg:mx-24 md:mx-6 xl:mx-16"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
            }}
          >
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentTestimonial * 100}%)`,
              }}
            >
              {Array.from({
                length: Math.ceil(testimonials.length / getVisibleCards()),
              }).map((_, groupIndex) => {
                const visibleCards = getVisibleCards();
                return (
                  <div
                    key={groupIndex}
                    className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 justify-items-center"
                  >
                    {testimonials
                      .slice(
                        groupIndex * visibleCards,
                        groupIndex * visibleCards + visibleCards,
                      )
                      .map((testimonial) => (
                        <div
                          key={testimonial.id}
                          className="flex flex-col items-center pt-6 sm:pt-8 mb-10"
                        >
                          <div className="relative">
                            {/* University Badge */}
                            {/* University Badge - Auto Height Version */}
                            <div
                              className="absolute left-1/2 -translate-x-1/2 
                                bg-gradient-to-b from-white to-gray-50 border border-gray-100
                                flex items-center justify-center z-10 
                                shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                                mt-8 sm:mt-10
                                transition-all duration-500 ease-out
                                group-hover:shadow-[0_20px_35px_rgba(0,0,0,0.15)]
                                group-hover:border-orange-100 group-hover:-translate-y-1 group-hover:scale-105"
                              style={{
                                width: "260px",
                                minHeight: "60px", // Ganti height jadi minHeight
                                height: "auto", // Biarkan tinggi otomatis
                                borderRadius: "20px",
                                top: "-30px",
                              }}
                            >
                              {/* Tambahkan py-2 agar teks tidak nempel pinggir saat 2 baris */}
                              <div className="flex items-center gap-2.5 px-3 sm:px-4 py-2 w-full justify-center">
                                {/* Icon Tetap Sama */}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-5 h-5 flex-shrink-0 text-orange-500 drop-shadow-sm transition-colors duration-300 group-hover:text-orange-600"
                                >
                                  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.949 49.949 0 0 0-9.902 3.912l-.003.002-.34.18a.75.75 0 0 1-.707 0A50.009 50.009 0 0 0 7.5 12.174v-.224c0-.131.067-.248.182-.311a48.654 48.654 0 0 1 4.018-2.092c.57-.255 1.12-.52 1.667-.788.075-.037.075-.146 0-.183a67.87 67.87 0 0 0-2.029-1.011 64.903 64.903 0 0 0-4.634-2.144c-.722-.303-1.428-.62-2.122-.953a.75.75 0 0 1-.295-1.013c.198-.328.406-.653.626-.976l.046-.07c.075-.115.174-.189.31-.223a.75.75 0 0 1 .387.037c.548.2 1.107.41 1.674.633.376.15.757.298 1.139.444.606.233 1.218.461 1.836.684.348.125.698.25 1.05.372ZM9 15.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v.233c0 1.296-.77 2.446-1.928 2.887a4.673 4.673 0 0 1-2.144 0 3.08 3.08 0 0 1-1.928-2.887V15.75Z" />
                                </svg>

                                {/* Hapus 'truncate', ganti dengan text-wrap & leading-tight */}
                                <p
                                  className="font-bold text-xs sm:text-sm text-center text-gray-800 tracking-wide 
                                  group-hover:text-black transition-colors duration-300
                                  leading-tight line-clamp-2"
                                >
                                  {testimonial.university}
                                </p>
                              </div>
                            </div>

                            {/* Main Card */}
                            <div
                              className="group bg-white w-[280px] sm:w-[300px] flex flex-col overflow-visible shadow-lg mb-8 sm:mb-10 mt-8 sm:mt-10
                                  transition-all duration-700 ease-out
                                  hover:-translate-y-2 hover:shadow-2xl"
                              style={{
                                borderRadius: "59px",
                                minHeight: expandedTestimonials[testimonial.id]
                                  ? "auto"
                                  : "420px",
                              }}
                            >
                              {/* Image Container */}
                              <div
                                className="bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center
                                  overflow-hidden flex-shrink-0 shadow-lg
                                  transition-transform duration-700 ease-out
                                  group-hover:scale-[1.03]"
                                style={{
                                  width: "100%",
                                  height: "350px",
                                  borderRadius: "59px 59px 40px 40px",
                                }}
                              >
                                <img
                                  src={testimonial.image}
                                  alt={testimonial.name}
                                  className="w-full h-full object-cover"
                                  loading="lazy"
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

                              {/* Name Section */}
                              <div className="px-6 pt-5 pb-3 text-center">
                                <h3 className="text-lg font-bold text-gray-900">
                                  {testimonial.name}
                                </h3>
                              </div>

                              {/* Quote Section - Collapsible */}
                              <div
                                className="overflow-hidden transition-all duration-500 ease-in-out"
                                style={{
                                  maxHeight: expandedTestimonials[
                                    testimonial.id
                                  ]
                                    ? "500px"
                                    : "0px",
                                  opacity: expandedTestimonials[testimonial.id]
                                    ? 1
                                    : 0,
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
                                  className="w-full text-orange-500 text-[10px] lg:text-sm font-semibold
                                    transition-all duration-500 ease-out
                                    hover:text-orange-600 hover:tracking-wide"
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
                );
              })}
            </div>
          </div>
        </div>

        {/* Expandable Testimonials Section */}
        <ExpandableTestimonials />
      </div>
    </section>
  );
};

export default Testimonials;
