import React, { useState, useEffect, useCallback } from "react";
import { Image as ImageIcon } from "lucide-react";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";
import { testimonials } from "../constants/data";
import ExpandableTestimonials from "./ExpandableTestimonials";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedTestimonials, setExpandedTestimonials] = useState({});

  const getVisibleCards = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
      return 1;
    }
    return 3;
  }, []);

  useEffect(() => {
    const hasExpandedCards = Object.values(expandedTestimonials).some(
      (val) => val === true,
    );

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
  }, [getVisibleCards, expandedTestimonials]);

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
      className="py-12 lg:py-24 pb-8 lg:pb-16 bg-gradient-to-b from-[#FFFFFF] to-[#F5F5F5] relative overflow-hidden"
    >
      {/* Decorative Circle SVGs */}
      <div className="relative inset-0 pointer-events-none">
        <img
          src="/vector/orange_circle.svg"
          alt=""
          className="hidden lg:block absolute w-[275px] h-[262px] opacity-100"
          style={{ left: "41px", top: "90px", transform: "translateY(-50%)" }}
        />
        <img
          src="/vector/orange_circle.svg"
          alt=""
          className="hidden lg:block absolute w-[275px] h-[262px] opacity-100"
          style={{
            left: "740px",
            top: "35px",
            transform: "translateY(-50%)",
          }}
        />
        <img
          src="/vector/orange_circle.svg"
          alt=""
          className="hidden lg:block absolute w-[275px] h-[262px] opacity-100"
          style={{
            left: "1200px",
            top: "280px",
            transform: "translateY(-50%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-[1.15] mb-3 lg:mb-4">
            Mari Dengarkan Mereka yang Sudah Lulus
          </h2>
          <p className="text-gray-600 text-base lg:text-lg">
            Simak alumni-alumni terbaik kami
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 sm:left-4 lg:left-0 z-20 text-gray-700 hover:text-black hover:scale-110 transition-all duration-300"
            style={{ top: "50%", transform: "translateY(-50%)" }}
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 drop-shadow-lg" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-2 sm:right-4 lg:right-0 z-20 text-gray-700 hover:text-black hover:scale-110 transition-all duration-300"
            style={{ top: "50%", transform: "translateY(-50%)" }}
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 drop-shadow-lg" />
          </button>

          {/* Cards Container */}
          <div
            className="relative overflow-hidden mx-10 sm:mx-12 lg:mx-16"
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
              {Array.from({ length: Math.ceil(testimonials.length / getVisibleCards()) }).map(
                (_, groupIndex) => {
                  const visibleCards = getVisibleCards();
                  return (
                  <div
                    key={groupIndex}
                    className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center"
                  >
                    {testimonials
                      .slice(groupIndex * visibleCards, groupIndex * visibleCards + visibleCards)
                      .map((testimonial) => (
                        <div
                          key={testimonial.id}
                          className="flex flex-col items-center pt-6 sm:pt-8"
                        >
                          <div className="relative">
                            {/* University Badge */}
                            <div
                              className="absolute left-1/2 -translate-x-1/2 bg-white text-white
             flex items-center justify-center z-10 shadow-lg mt-8 sm:mt-10
             transition-all duration-700 ease-out
             group-hover:shadow-2xl"
                              style={{
                                width: "260px",
                                height: "60px",
                                borderRadius: "14px",
                                top: "-30px",
                              }}
                            >
                              <p className="font-bold text-xs sm:text-sm px-3 sm:px-4 text-center truncate">
                                {testimonial.university}
                              </p>
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
                                  className="w-full text-orange-500 text-sm font-semibold
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
                },
              )}
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
