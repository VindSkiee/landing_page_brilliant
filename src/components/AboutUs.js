import React from "react";
import { Image as ImageIcon } from "lucide-react";

const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="py-16 lg:py-40 bg-gradient-to-b from-[#FF7400] to-[#ffc08c] relative overflow-hidden"
    >
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
              pengalaman belajar yang menyenangkan dan efektif. Kami berkomitmen
              membantu siswa meraih impian mereka dengan metode yang terbukti
              berhasil.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div
              className="glowing-outline aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 shadow-2xl overflow-hidden"
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
  );
};

export default AboutUs;
