import React from "react";
import { Image as ImageIcon } from "lucide-react";
import { programs } from "../constants/data";

const Programs = () => {
  return (
    <section
      id="programs"
      className="py-16 lg:py-56 bg-white relative overflow-hidden"
    >
      {/* Decorative Background Vectors */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/vector/vector_program.svg"
          alt=""
          className="absolute -top-24 -left-32 w-[275px] h-[265px] opacity-[0.9] transform rotate-200"
        />
        <img
          src="/vector/vector_program.svg"
          alt=""
          className="absolute -top-40 -right-10 w-[275px] h-[265px] opacity-[0.9] transform -rotate-45"
        />
        <img
          src="/vector/vector_program.svg"
          alt=""
          className="absolute top-1/3 -left-52 w-[275px] h-[265px] opacity-[0.7] transform rotate-90"
        />
        <img
          src="/vector/vector_program.svg"
          alt=""
          className="absolute top-1/2 -right-32 w-[275px] h-[265px] opacity-[0.7] transform -rotate-25"
        />
        <img
          src="/vector/vector_program.svg"
          alt=""
          className="absolute top-16 left-1/2 -translate-x-1/2 w-[275px] h-[265px] opacity-[0.07] transform rotate-30"
        />
        <img
          src="/vector/vector_program.svg"
          alt=""
          className="absolute top-2/3 right-1/3 w-[275px] h-[265px] opacity-[0.07] transform -rotate-15"
        />
        <img
          src="/vector/vector_circle.svg"
          alt=""
          className="absolute w-[245px] h-[265px] opacity-[0.9]"
          style={{ right: "450px", top: "200px" }}
        />
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
              className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-visible card-hover w-[330px] min-h-[400px] flex flex-col relative hover:z-10 glowing-outline-yellow"
              style={{
                animationDelay: `${index * 100}ms`,
                borderRadius: "37px",
              }}
            >
              {/* Image Container */}
              <div
                className="relative min-h-[180px] group-hover:min-h-[198px] overflow-visible flex-shrink-0 transition-[min-height] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
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
                  className="w-full h-[180px] object-cover translate-x-[-4px] transition-transform duration-300 ease-out group-hover:scale-[1.2]"
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
  );
};

export default Programs;
