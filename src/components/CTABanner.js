import React from "react";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <>
      {/* CTA Banner Section */}
      <section className="py-12 lg:py-40 bg-gradient-to-b from-[#F5F5F5] to-[#ffc08c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-28 lg:px-20 xl:px-48">
          <div
            className="relative bg-gradient-to-r from-[#FF7400] to-[#FFC100] rounded-[29px] overflow-visible shadow-2xl py-6 lg:py-8"
            style={{ minHeight: "180px" }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="p-4 lg:p-8 space-y-4 lg:space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-white leading-tight">
                  Sudah siap untuk{" "}
                  <span className="text-brilliant-purple font-extrabold font-poppins">
                    Daftar Bimbel?
                  </span>
                </h2>
                <p className="text-gray-100 text-[12px] lg:text-[14px] xl:text-1xl font-medium leading-relaxed">
                  Bergabung dengan 1000+ alumni sukses! Les privat & bimbel online terbaik di Jambi dan seluruh Indonesia.
                </p>
                <div className="flex flex-wrap gap-3 pt-2 py-2 lg:py-2 xl:py-4 justify-center lg:justify-start xl:justify-start">
                  <a
                    href="https://wa.me/6281366369621"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-brilliant-orange px-3 py-2.5 lg:py-3 rounded-[10px] text-sm lg:text-base font-bold hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    Hubungi Kami
                  </a>
                  <a
                    href="https://wa.me/6281366369621"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 bg-brilliant-purple text-white px-4 py-2.5 lg:py-3 rounded-[10px] text-sm lg:text-base font-bold hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    <span>Daftar Sekarang</span>
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative h-[221px] hidden lg:block">
                <img
                  src="/photo/sma_cta_section.webp"
                  alt="Daftar Bimbel Brilliant Indonesia Jambi - Les Privat SD SMP SMA Online"
                  className="
                    absolute
                    right-28
                    h-[400px]
                    w-auto
                    object-contain
                    -scale-x-100

                    bottom-[12px]        /* iPad Pro (lg) */
                    xl:bottom-[4px]      /* Desktop besar */

                    translate-y-20
                  "
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Separator */}
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
    </>
  );
};

export default CTABanner;
