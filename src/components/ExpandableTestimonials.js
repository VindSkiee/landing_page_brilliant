import React, { useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import { expandableTestimonials } from "../constants/data";

const ExpandableTestimonials = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full">
      {/* Toggle Switch */}
      <div className="flex flex-col items-center mt-20 mb-16 gap-4">
        <span className="text-black font-extrabold text-lg lg:text-3xl mb-10">
          Ayo Lihat Alumni Brilliant Lain!!
        </span>
        <div className="relative flex items-center">
          <input
            type="checkbox"
            id="testimonial-toggle"
            checked={isExpanded}
            onChange={toggleExpand}
            className="hidden"
          />
          <label
            htmlFor="testimonial-toggle"
            className="relative cursor-pointer transition-all duration-300"
            style={{
              width: "80px",
              height: "44px",
              backgroundColor: isExpanded ? "#ff6b35" : "#D9D9D9",
              borderRadius: "44px",
              boxShadow: isExpanded
                ? "0 0 24px rgba(255, 107, 53, 0.6)"
                : "0 0 20px rgba(0, 0, 0, 0.4)",
              transition: "background-color 0.3s, box-shadow 0.3s",
            }}
          >
            <span
              className="absolute transition-all duration-300"
              style={{
                width: "36px",
                height: "36px",
                backgroundColor: "#fff",
                borderRadius: "50%",
                top: "4px",
                left: "4px",
                transform: isExpanded ? "translateX(36px)" : "translateX(0)",
                boxShadow: isExpanded
                  ? "0 0 22px rgba(255, 107, 53, 0.8)"
                  : "0 0 12px rgba(255, 255, 255, 0.6)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
            />
          </label>
        </div>
      </div>

      {/* Expandable Grid Section */}
      <div
        className={`overflow-hidden transition-all ease-out ${
          isExpanded ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          transitionProperty: "max-height, opacity",
          transitionDuration: "400ms",
          transitionTimingFunction: "ease-out",
        }}
      >
        <div
          className={`transform transition-transform ease-out ${
            isExpanded ? "translate-y-0" : "translate-y-3"
          }`}
          style={{
            transitionDuration: "400ms",
          }}
        >
          {/* Grid Container */}
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {expandableTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className="
        group relative overflow-hidden
        bg-white rounded-2xl p-4 flex flex-col py-10 mb-5
        transition-all duration-700 ease-out mt-10
         hover:border-orange-500 hover:translate-y-[-10px] hover:shadow-2xl
      "
      style={{
        minHeight: "260px",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* ORANGE SPREAD OVERLAY */}
      <div
        className="
          absolute inset-0 z-0
          bg-orange-500
          scale-0 opacity-0
          transition-all duration-700 ease-out
          group-hover:scale-100 group-hover:opacity-100
        "
        style={{ borderRadius: "16px" }}
      />

      {/* CONTENT (HARUS DI ATAS OVERLAY) */}
      <div className="relative z-10 flex flex-col">
        {/* Image */}
        <div
          className="
            w-full rounded-xl overflow-hidden flex-shrink-0 mb-3
            bg-gradient-to-br from-gray-100 to-gray-200
            transition-all duration-700 ease-out
            group-hover:shadow-lg
          "
          style={{ height: "200px" }}
        >
          <img
            src={testimonial.image || "/photo/default-avatar.jpg"}
            alt={testimonial.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "flex";
            }}
          />
          <div className="hidden w-full h-full items-center justify-center">
            <ImageIcon className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Name */}
        <h4
          className="
            font-semibold mb-1 text-center
            transition-colors duration-700
            group-hover:text-white
          "
          style={{ fontSize: "14px", lineHeight: "1.4" }}
        >
          {testimonial.name}
        </h4>

        {/* Acceptance */}
        <p
          className="
            text-center text-sm
            transition-colors duration-700
            group-hover:text-orange-100
          "
          style={{
            fontSize: "12px",
            lineHeight: "1.5",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {testimonial.acceptance}
        </p>
      </div>
    </div>
  );
};


export default ExpandableTestimonials;
