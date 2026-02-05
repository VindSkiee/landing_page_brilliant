import React from "react";
import { Image as ImageIcon } from "lucide-react";

const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="py-12 lg:py-40 bg-gradient-to-b from-[#FF7400] to-[#ffc08c] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20">
          {/* Logo */}
          <div className="flex justify-center mb-4 lg:mb-6">
            <img
              src="/photo/logo.webp"
              alt="Brilliant Indonesia Logo"
              className="w-16 h-16 lg:w-52 lg:h-52 object-contain"
              loading="lazy"
            />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-brilliant-purple mb-3 lg:mb-4" style={{ fontWeight: 900 }}>
            BRILLIANT INDONESIA
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
            Bimbel Terpercaya di Jambi Sejak 2015
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-4 lg:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brilliant-purple leading-tight" style={{ fontWeight: 900 }}>
              Tentang Bimbel Brilliant Jambi
            </h2>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
              <strong>Brilliant Indonesia</strong> adalah lembaga bimbingan belajar (bimbel) terbaik di Jambi yang berdiri sejak 10 Maret 2015. Kami menyediakan layanan <strong>les offline di Jambi</strong> dan <strong>bimbel online</strong> untuk siswa di seluruh Indonesia. Dengan lebih dari 1000+ alumni sukses, kami berkomitmen membantu siswa meraih impian masuk PTN, lolos CPNS, Kedinasan, TNI, dan Polri.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div
              className="glowing-outline aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 shadow-2xl overflow-hidden z-20"
              style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
            >
              <img
                src="/photo/aboutUs.webp"
                alt="Tim Pengajar Bimbel Brilliant Indonesia Jambi - Les Privat SD SMP SMA"
                className="w-full h-full object-cover z-10"
                style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
                loading="lazy"
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
