import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "./Icons";
import { ReactComponent as BlobShape } from "../blob-shape.svg";

const Hero = ({ scrollToSection }) => {
  const [heroAnimated, setHeroAnimated] = useState(false);
  const [displayedHeading, setDisplayedHeading] = useState("");
  const [displayedSubheading, setDisplayedSubheading] = useState("");
  const [headingComplete, setHeadingComplete] = useState(false);
  const [subheadingComplete, setSubheadingComplete] = useState(false);

  const fullHeading =
    "Lulus Tes TKA, SNBT, SKD. Tidak Lulus? Gratis Tahun Depan";
  const fullSubheading =
    "Bimbingan belajar offline & online terbaik. Dibimbing langsung oleh alumni UGM, ITB, & UNDIP dengan metode praktis tanpa ribet.";

  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!heroAnimated) return;

    let currentIndex = 0;
    const typingSpeed = 40;

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
  }, [heroAnimated, fullHeading]);

  useEffect(() => {
    if (!headingComplete) return;

    let currentIndex = 0;
    const typingSpeed = 25;

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
  }, [headingComplete, fullSubheading]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen pt-8 lg:pt-8 pb-0 overflow-hidden bg-white"
    >
      {/* Background Image with Opacity */}
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
          {/* Left Content */}
          <div
            className={`lg:w-[100%] space-y-6 lg:space-y-4 transition-all duration-800 pt-28 sm:pt-32 lg:pt-36 ${
              heroAnimated
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-24"
            }`}
          >
            {/* Main Heading */}
            <h1
              className="text-2xl text-center lg:text-left sm:text-2xl lg:text-4xl xl:text-5xl font-extrabold leading-tight h-[7rem] sm:h-[8rem] lg:h-[9rem] mb-2 lg:mb-4 relative"
              style={{ transitionDelay: "0ms" }}
            >
              <span className="invisible" aria-hidden="true">
                Lulus Tes <span>TKA, SNBT, SKD.</span>
                <br />
                Tidak Lulus? Gratis <span>Tahun Depan</span>
              </span>
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
                      <span className={isHighlight ? "text-brilliant-red" : ""}>
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
              className="text-gray-700 text-center lg:text-left text-sm lg:text-1xl max-w-xl font-medium h-[4.5rem] lg:h-[4rem] relative"
              style={{ transitionDelay: "200ms" }}
            >
              <span className="invisible" aria-hidden="true">
                Bimbingan belajar offline & online berkualitas tinggi, dibimbing
                langsung oleh alumni UGM, ITB, & UNDIP. Metode belajar praktis,
                jelas, dan efisien untuk hasil maksimal tanpa proses yang rumit.
              </span>
              <span className="absolute inset-0">
                {displayedSubheading}
                {headingComplete && (
                  <span
                    className={`inline-block w-0.5 h-4 lg:h-5 bg-gray-500 ml-1 align-middle ${subheadingComplete ? "opacity-0" : "animate-pulse"}`}
                  ></span>
                )}
              </span>
            </p>

            {/* University Logos */}
            <div
  className="
    flex flex-wrap
    justify-center sm:justify-start
    items-center
    gap-4 sm:gap-8 lg:gap-12
  "
>

              {[
                { name: "UGM", fileName: "logo-UGM.webp" },
                { name: "ITB", fileName: "logo-ITB.webp" },
                { name: "UNDIP", fileName: "logo-UNDIP.webp" },
                { name: "UI", fileName: "logo-UI.webp" },
                { name: "UNPAD", fileName: "logo-UNPAD.webp" },
              ].map((uni, idx) => (
                <div
                  key={uni.name}
                  className="
                    w-10 h-10
                    sm:w-14 sm:h-14
                    lg:w-14 lg:h-14
                    flex items-center justify-center
                    overflow-hidden
                  "
                  style={{ transitionDelay: `${300 + idx * 50}ms` }}
                >
                  <img
                    src={`/photo/${uni.fileName}`}
                    alt={`Logo ${uni.name}`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "";
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="
    flex flex-col sm:flex-row  
    gap-3 sm:gap-4
  "
              style={{ transitionDelay: "400ms" }}
            >
              <a
                href="https://wa.me/6281366369621"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group flex items-center justify-center gap-2
                  bg-[#47D029] text-white
                  px-5 py-3
                  sm:px-6
                  rounded-lg sm:rounded-full
                  font-semibold
                  text-sm sm:text-base
                  hover:scale-105 hover:brightness-110 hover:shadow-lg
                  transition-all duration-300
                "
              >
                <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Daftar atau Konsultasi</span>
              </a>

              <button
                onClick={() => scrollToSection("programs")}
                className="
                  group flex items-center justify-center gap-3
                  border-2 sm:border-4 border-brilliant-red
                  text-brilliant-red
                  px-5 py-3
                  sm:px-6
                  rounded-lg sm:rounded-full
                  font-bold
                  text-sm sm:text-base
                  hover:bg-brilliant-red hover:text-white
                  transition-all duration-300
                  liquid-ripple
                "
              >
                <span>Lihat Program</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Content - 3 People with Blob */}
          <div
            className={`lg:w-[60%] lg:ml-auto relative transition-all duration-800 ${
              heroAnimated
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-24"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative z-10 w-full h-[36rem] lg:h-[40rem] pb-8">
              {/* SVG Blob Background */}
              <div className="absolute lg:-right-36 xl:-right-48 top-[65%] -translate-y-1/2 z-0">
                <BlobShape
                  className="w-full h-full object-contain"
                  style={{ width: "580px", height: "595px" }}
                />
              </div>

              {/* 3 People Container */}
              <div className="relative z-10 flex items-end justify-end pr-0 lg:-mr-10 xl:-mr-20 pb-8">
                {/* Person 1 - Siswa SMA */}
                <div className="absolute bottom-0 left-[8rem] lg:left-[10rem] w-64 h-96 sm:w-72 sm:h-[24rem] lg:w-80 lg:h-[36rem] overflow-hidden translate-y-32 filter saturate-200">
                  <img
                    src="/photo/1_orang_sma.webp"
                    alt="Anak SMA"
                    className="w-full h-full object-cover object-top scale-x-[-1]"
                  />
                </div>

                {/* Person 2 - ASN */}
                <div className="absolute bottom-0 left-[8rem] lg:left-[17rem] z-30 w-56 sm:w-64 lg:w-72 h-[28rem] sm:h-[20rem] lg:h-[28rem] overflow-hidden translate-y-40 filter saturate-150">
                  <img
                    src="/photo/1_orang_asn.webp"
                    alt="ASN"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Person 3 - Polisi */}
                <div className="w-64 h-96 sm:w-72 sm:h-[28rem] lg:w-80 lg:h-[32rem] overflow-hidden flex-shrink-0 translate-x-19 lg:translate-x-32 translate-y-40 filter saturate-150">
                  <img
                    src="/photo/1_orang_polisi.webp"
                    alt="Polisi"
                    className="w-full h-full object-cover object-top scale-x-[-1]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
