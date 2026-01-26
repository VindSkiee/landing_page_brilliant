import React from "react";
import { programs } from "../constants/data";

const Programs = () => {
  return (
    <section
      id="programs"
      className="py-12 lg:py-56 bg-white relative overflow-hidden"
    >
      {/* Decorative Background Vectors */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/vector/vector_program.svg"
          alt=""
          className="absolute -top-24 -left-32 w-[275px] h-[265px] opacity-[0.9] transform rotate-200"
          loading="lazy"
          aria-hidden="true"
        />
        <img
          src="/vector/vector_program.svg"
          alt=""
          className="absolute -top-40 -right-10 w-[275px] h-[265px] opacity-[0.9] transform -rotate-45"
          loading="lazy"
          aria-hidden="true"
        />
        <img
          src="/vector/vector_program.svg"
          alt=""
          className="absolute top-1/3 -left-52 w-[275px] h-[265px] opacity-[0.7] transform rotate-90"
          loading="lazy"
          aria-hidden="true"
        />
        <img
          src="/vector/vector_program.svg"
          alt=""
          className="absolute top-1/2 -right-32 w-[275px] h-[265px] opacity-[0.7] transform -rotate-25"
          loading="lazy"
          aria-hidden="true"
        />
        <img
          src="/vector/vector_program.svg"
          alt=""
          className="absolute top-16 left-1/2 -translate-x-1/2 w-[275px] h-[265px] opacity-[0.07] transform rotate-30"
          loading="lazy"
          aria-hidden="true"
        />
        <img
          src="/vector/vector_program.svg"
          alt=""
          className="absolute top-2/3 right-1/3 w-[275px] h-[265px] opacity-[0.07] transform -rotate-15"
          loading="lazy"
          aria-hidden="true"
        />
        <img
          src="/vector/vector_circle.svg"
          alt=""
          className="absolute w-[245px] h-[265px] opacity-[0.9]"
          style={{ right: "450px", top: "200px" }}
          loading="lazy"
          aria-hidden="true"
        />
        <img
          src="/vector/vector_circle.svg"
          alt=""
          className="absolute w-[245px] h-[265px] opacity-[0.9]"
          style={{ left: "457px", top: "650px" }}
          loading="lazy"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black leading-[1.15] mb-3 lg:mb-4">
            <span className="bg-gradient-to-r from-[#FF0000] to-[#FF7400] bg-clip-text text-transparent">
              Program Bimbel{" "}
            </span>
            <span className="text-brilliant-purple">BRILLIANT</span>
            <span className="bg-gradient-to-r from-[#FF7400] to-[#FFC100] bg-clip-text text-transparent">
              {" "}
              yang Tersedia
            </span>
          </h2>
          <p className="text-gray-600 text-[0.9rem] lg:text-lg max-w-2xl mx-auto">
            Berbagai macam pilihan program bimbel yang dapat dipilih sesuai
            kebutuhanmu!
          </p>
        </div>

        {/* Programs Grid */}
        <div className="flex flex-wrap justify-center gap-10 sm:gap-6 lg:gap-9 py-12 lg:py-24">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="
                  group relative w-full max-w-[320px] sm:max-w-[360px] lg:w-[380px]
                  min-h-[440px] sm:min-h-[460px]
                  bg-white flex flex-col overflow-visible
                  shadow-xl
                  transition-all duration-500
                  glowing-outline-yellow
                  will-change-transform transform-gpu

                  /* Desktop only */
                  xl:hover:shadow-2xl
                  xl:hover:z-10
                "
              style={{
                animationDelay: `${index * 100}ms`,
                borderRadius: "42px",
              }}
            >
              {/* Image Container */}
              <div
                className="relative min-h-[200px] lg:group-hover:min-h-[220px]
                   overflow-visible flex-shrink-0
                   transition-[min-height] duration-500
                   ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                style={{
                  borderRadius: "42px 42px 0 0",
                  backgroundImage: "url('/vector/program_bg.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <img
                  src={`/photo/${program.image}`}
                  alt={program.title}
                  className="
                      w-[330px] h-[205px] object-cover
                      translate-x-[10px]
                      transition-transform duration-300 ease-out
                      lg:group-hover:scale-[1.15]
                      transform-gpu
                    "
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-5 flex flex-col items-center text-center">
                    <h3
                      className="text-xl font-black text-brilliant-purple
                           transition-colors leading-tight"
                      style={{ fontWeight: 900 }}
                    >
                      {program.title}
                    </h3>
                    <h4
                      className="text-xl font-black text-brilliant-red
                           transition-colors leading-tight"
                      style={{ fontWeight: 900 }}
                    >
                      {program.subtitle}
                    </h4>
                  </div>

                  <p className="text-gray-600 text-[0.9rem] leading-relaxed text-center">
                    {program.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
