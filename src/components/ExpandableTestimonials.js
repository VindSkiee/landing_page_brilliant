import React, { useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import { expandableTestimonials } from "../constants/data";

const ExpandableTestimonials = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full relative">
      {/* Background Decorative Elements - Only visible when expanded */}
      {isExpanded && (
        <>
          {/* Circle Elements */}
          <div className="absolute top-20 left-5 w-16 h-16 bg-orange-100 rounded-full opacity-100 z-0" />
          <div className="absolute top-40 right-10 w-24 h-24 bg-amber-50 rounded-full opacity-100 z-0" />
          <div className="absolute bottom-40 left-10 w-20 h-20 bg-orange-50 rounded-full opacity-100 z-0" />
          <div className="absolute top-10 right-1/3 w-10 h-10 bg-orange-100 rounded-full opacity-70 z-0" />
          <div className="absolute top-24 left-1/2 w-6 h-6 bg-amber-100 rounded-full opacity-60 z-0" />
          <div className="absolute bottom-20 right-5 w-14 h-14 bg-orange-50 rounded-full opacity-80 z-0" />
          <div className="absolute bottom-32 left-1/4 w-9 h-9 bg-amber-50 rounded-full opacity-70 z-0" />
          <div className="absolute top-96 left-12 w-12 h-12 bg-orange-100 rounded-full opacity-50 z-0" />

          {/* Square/Rectangle Elements */}
          <div className="absolute top-60 right-20 w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 opacity-20 rotate-12 z-0" />
          <div className="absolute bottom-60 left-20 w-16 h-16 bg-gradient-to-tr from-orange-100 to-amber-50 opacity-15 -rotate-12 z-0" />
          <div className="absolute top-32 left-1/4 w-8 h-32 bg-gradient-to-r from-amber-100 to-transparent opacity-10 z-0" />
          <div className="absolute top-16 right-32 w-10 h-10 bg-gradient-to-br from-orange-100 to-amber-100 opacity-20 rotate-6 z-0" />
          <div className="absolute bottom-24 right-1/4 w-14 h-14 bg-gradient-to-tr from-amber-100 to-orange-50 opacity-15 -rotate-6 z-0" />
          <div className="absolute top-72 left-28 w-8 h-20 bg-gradient-to-b from-orange-100 to-transparent opacity-10 z-0" />
          <div className="absolute bottom-96 right-20 w-6 h-24 bg-gradient-to-t from-amber-100 to-transparent opacity-10 z-0" />

          {/* Geometric Pattern */}
          <div className="absolute top-80 right-1/4 w-10 h-10 border-2 border-orange-200 opacity-100 rotate-45 z-0" />
          <div className="absolute bottom-80 left-1/3 w-14 h-14 border-2 border-amber-200 opacity-100 z-0" />
          <div className="absolute top-48 left-1/5 w-12 h-12 border border-orange-200 opacity-80 rotate-12 z-0" />
          <div className="absolute top-64 right-1/5 w-16 h-16 border-2 border-amber-200 opacity-70 -rotate-12 z-0" />
          <div className="absolute bottom-48 left-16 w-10 h-10 border border-orange-300 opacity-60 rotate-45 z-0" />
          <div className="absolute bottom-72 right-1/3 w-14 h-14 border-2 border-amber-300 opacity-60 rotate-30 z-0" />

          <div className="absolute top-20 left-1/3 w-32 h-[2px] bg-gradient-to-r from-orange-200 to-transparent opacity-30 z-0" />
          <div className="absolute bottom-40 right-1/4 w-24 h-[2px] bg-gradient-to-l from-amber-200 to-transparent opacity-25 z-0" />
          <div className="absolute top-1/2 right-10 w-[2px] h-28 bg-gradient-to-b from-orange-200 to-transparent opacity-20 z-0" />

          {/* Gradient Blobs */}
          <div
            className="absolute top-1/4 right-5 w-32 h-32 z-0 opacity-10"
            style={{
              background:
                "radial-gradient(circle, rgba(255,165,0,0.3) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-1/4 left-5 w-40 h-40 z-0 opacity-10"
            style={{
              background:
                "radial-gradient(circle, rgba(255,140,0,0.2) 0%, transparent 70%)",
            }}
          />

          {/* Diagonal Lines Pattern */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px bg-orange-300"
                  style={{
                    top: `${i * 60}px`,
                    left: "0",
                    width: "100%",
                    transform: `rotate(${i % 2 === 0 ? "3deg" : "-3deg"})`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-orange-200 opacity-100 z-0 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-amber-200 opacity-100 z-0 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-orange-200 opacity-100 z-0 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-amber-200 opacity-100 z-0 rounded-br-2xl" />
        </>
      )}

      {/* Toggle Switch */}
      <div className="flex flex-col items-center mt-12 lg:mt-20 mb-12 lg:mb-16 gap-4 relative z-10">
        <svg viewBox="0 0 500 120" className="w-full max-w-2xl mx-auto mb-6 lg:mb-10">
          <path id="curve" d="M 50 80 Q 250 10 450 80" fill="transparent" />
          <text className="fill-orange-400 font-extrabold">
            <textPath
              href="#curve"
              startOffset="50%"
              textAnchor="middle"
              className="text-2xl font-extrabold sm:text-lg lg:text-2xl"
            >
              Ayo Lihat Alumni Brilliant Lain!!
            </textPath>
          </text>
        </svg>

        <div className="relative flex items-center z-10">
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
              width: "70px",
              height: "38px",
              backgroundColor: isExpanded ? "#ff6b35" : "#D9D9D9",
              borderRadius: "38px",
              boxShadow: isExpanded
                ? "0 0 24px rgba(255, 107, 53, 0.6)"
                : "0 0 20px rgba(0, 0, 0, 0.4)",
              transition: "background-color 0.3s, box-shadow 0.3s",
            }}
          >
            <span
              className="absolute transition-all duration-300"
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "#fff",
                borderRadius: "50%",
                top: "4px",
                left: "4px",
                transform: isExpanded ? "translateX(32px)" : "translateX(0)",
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
        className={`overflow-hidden transition-all ease-out relative z-10 ${
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
          <div className="max-w-[1200px] mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-10">
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

const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className="
        group relative overflow-hidden
        bg-white rounded-2xl p-4 flex flex-col py-10
        transition-all duration-700 ease-out
        hover:border-orange-500 hover:-translate-y-2 hover:shadow-2xl
        h-full mt-5
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
          transition-all duration-1000 ease-out
          group-hover:scale-125 group-hover:opacity-100
        "
        style={{ borderRadius: "16px", transformOrigin: "center" }}
      />

      {/* CONTENT (HARUS DI ATAS OVERLAY) */}
      <div className="relative z-10 flex flex-col h-full items-center">
        {/* Image */}
        <div
          className="
            w-full rounded-xl overflow-hidden flex-shrink-0 mb-4
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
            loading="lazy"
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
            font-bold mb-1 text-center mt-auto
            transition-colors duration-700
            text-gray-900 group-hover:text-white
          "
          style={{ fontSize: "16px", lineHeight: "1.4" }}
        >
          {testimonial.name}
        </h4>

        {/* University / Lulusan (Updated Key) */}
        <p
          className="
            text-center text-sm font-medium
            transition-colors duration-700
            text-gray-500 group-hover:text-orange-100
          "
          style={{
            fontSize: "13px",
            lineHeight: "1.5",
          }}
        >
          {testimonial.acceptance}
        </p>
      </div>
    </div>
  );
};

export default ExpandableTestimonials;

