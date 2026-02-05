import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "./Icons";
import BlobShape from "../blob-shape.svg";

const Hero = ({ scrollToSection }) => {
  const [heroAnimated, setHeroAnimated] = useState(false);
  const [displayedHeading, setDisplayedHeading] = useState("");
  const [displayedSubheading, setDisplayedSubheading] = useState("");
  const [headingComplete, setHeadingComplete] = useState(false);
  const [subheadingComplete, setSubheadingComplete] = useState(false);

  const fullHeading = "Bimbel Terbaik di Jambi.|Garansi Lulus! Tidak Lulus?|Gratis Tahun Depan";
  const fullSubheading =
    "Bimbingan belajar offline & online untuk TKA, SNBT, CPNS, Kedinasan, Polisi, TNI. Dibimbing langsung oleh alumni UGM, ITB, & UNDIP.";

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
      className="
        relative
        overflow-hidden
        bg-white

        /* MOBILE */
        h-[67rem]

        md:h-[65rem]

        sm:h-[50rem]

        lg:h-[46rem]

        xl:min-h-screen
        xl:h-auto

        pt-8
        lg:pt-8
        pb-0
      "
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
            className={`lg:w-[100%] space-y-6 lg:space-y-4 transition-all duration-800 pt-28 sm:pt-32 lg:pt-36 relative z-20 ${
              heroAnimated
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-24"
            }`}
          >
            {/* Main Heading */}
            <h1
              className="
                  text-[1.40rem] text-center lg:text-left
                  sm:text-2xl 
                  md:text-3xl 
                  lg:text-4xl 
                  xl:text-5xl
                  font-black leading-tight
                  max-w-[30rem] sm:max-w-none
                  mx-auto lg:mx-0
                  h-[7.5rem] sm:h-[9rem] md:h-[7rem] lg:h-[10rem] 
                  mb-2 lg:mb-4
                  relative antialiased
                "
              style={{ transitionDelay: "0ms", fontWeight: 900 }}
            >
              {/* 1. Span Invisible: Untuk menjaga layout agar tidak melompat */}
              <span className="invisible" aria-hidden="true">
                Bimbel Terbaik di <span className="text-brilliant-red">Jambi.</span>
                <br />
                Garansi Lulus! Tidak Lulus?
                <br />
                Gratis <span className="text-brilliant-red">Tahun Depan</span>
              </span>

              {/* 2. Span Absolute: Teks yang sedang diketik */}
              <span className="absolute inset-0 whitespace-pre-wrap">
                {(() => {
                  const lines = fullHeading.split("|");
                  const highlightWords = ["Jambi.", "Tahun", "Depan"];
                  let charCount = 0;
                  
                  return lines.map((line, lineIndex) => {
                    const lineStart = charCount;
                    const lineEnd = charCount + line.length;
                    charCount = lineEnd + 1; // +1 for the | delimiter
                    
                    if (displayedHeading.length <= lineStart) return null;
                    
                    const words = line.split(" ");
                    let wordCharCount = lineStart;
                    
                    return (
                      <React.Fragment key={lineIndex}>
                        {lineIndex > 0 && <br />}
                        {words.map((word, wordIndex) => {
                          const wordStart = wordCharCount;
                          const wordEnd = wordCharCount + word.length;
                          wordCharCount = wordEnd + 1; // +1 for space
                          
                          if (displayedHeading.length <= wordStart) return null;
                          
                          const visibleWord = displayedHeading.slice(wordStart, Math.min(displayedHeading.length, wordEnd));
                          const isHighlight = highlightWords.includes(word);
                          
                          return (
                            <span key={`${lineIndex}-${wordIndex}`}>
                              <span
                                className={`transition-colors duration-500 ease-in-out ${
                                  isHighlight && subheadingComplete
                                    ? "text-brilliant-red"
                                    : "text-gray-900"
                                }`}
                              >
                                {visibleWord}
                              </span>
                              {wordIndex < words.length - 1 && visibleWord === word ? " " : ""}
                            </span>
                          );
                        })}
                      </React.Fragment>
                    );
                  });
                })()}

                {/* Kursor Pengetikan */}
                <span
                  className={`inline-block w-0.5 h-6 sm:h-8 lg:h-10 bg-brilliant-red ml-1 align-middle transition-opacity duration-300 ${
                    headingComplete ? "opacity-0" : "animate-pulse"
                  }`}
                ></span>
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="text-gray-700 text-center lg:text-left text-[0.80rem] lg:text-[1rem] max-w-xl font-medium h-[5rem] lg:h-[4.5rem] relative"
              style={{ transitionDelay: "200ms" }}
            >
              {/* 1. Span Invisible untuk menjaga layout */}
              <span className="invisible" aria-hidden="true">
                Bimbingan belajar <strong>offline & online</strong> untuk TKA, SNBT, CPNS, Kedinasan, Polisi, TNI. Dibimbing langsung oleh alumni UGM, ITB, & UNDIP.
              </span>

              {/* 2. Teks yang sedang diketik */}
              <span className="absolute inset-0">
                {displayedSubheading.split(/(offline & online)/gi).map((part, index) =>
                  part.toLowerCase() === "offline & online" ? (
                    <strong
                      key={index}
                      style={{
                        textShadow: subheadingComplete
                          ? "0 0 0.8px currentColor"
                          : "0 0 0 transparent",
                      }}
                      className={`font-semibold transition-all duration-700 ease-in-out ${
                        subheadingComplete
                          ? "text-[#FF0000]"
                          : "text-gray-700"
                      }`}
                    >
                      {part}
                    </strong>
                  ) : (
                    <span key={index}>{part}</span>
                  )
                )}

                {/* Kursor Subheading */}
                {headingComplete && (
                  <span
                    className={`inline-block w-0.5 h-4 lg:h-5 bg-gray-500 ml-1 align-middle transition-opacity duration-300 ${
                      subheadingComplete ? "opacity-0" : "animate-pulse"
                    }`}
                  ></span>
                )}
              </span>
            </p>

            {/* University Logos */}
            <div
              className="
                flex flex-wrap
                justify-center sm:justify-start
                items-center md:justify-center lg:justify-start xl:justify-start
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
                    loading="lazy"
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
                  gap-3 sm:gap-4 justify-start md:justify-center lg:justify-start xl:justify-start
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
            <div className="relative z-10 w-full h-[40rem] lg:h-[40rem] pb-8">
              {/* SVG Blob Background */}
              <div className="absolute 
              lg:-right-48 
              xl:-right-48 
              lg:top-28 
              top-[-18%] right-[-30rem] z-0">
                <img
                  src={BlobShape}
                  alt=""
                  className="w-full h-full object-contain"
                  style={{ width: "580px", height: "595px" }}
                  loading="eager"
                  aria-hidden="true"
                />
              </div>

              {/* 3 People Container */}
              <div className="relative z-10 pr-0 lg:-mr-10 xl:-mr-20 pb-8">
                {/* Person 1 - Siswa SMA */}
                <div
                  className="
                    absolute
                    filter saturate-200

                    /* MOBILE */
                    bottom-[-27rem]
                    left-[-5rem]
                    -translate-x-1/2
                    w-64
                    h-[28rem]

                    /* SMALL (sm) */
                    sm:left-[-3rem]
                    sm:translate-x-0
                    sm:w-72
                    sm:h-[28rem]

                    /* LARGE (lg) */
                    lg:w-full
                    lg:bottom-[-40rem]
                    lg:h-[36rem]
                    lg:left-[-3rem]

                    /* EXTRA LARGE (xl) */
                    xl:left-[2rem]
                    xl:bottom-[-40rem]
                    xl:w-84
                  "
                >
                  <img
                    src="/photo/1_orang_sma.webp"
                    alt="Anak SMA"
                    className="w-full h-full object-cover object-top scale-x-[-1]"
                    loading="lazy"
                  />
                </div>

                {/* Person 2 - ASN (MUNCUL DI MOBILE & iPad) */}
                <div
                  className="
                    absolute

                    /* MOBILE */
                    bottom-[-27rem]
                    left-[-7rem]
                    w-60
                    h-[22rem]

                    /* iPad */
                    md:bottom-[-28rem]
                    md:left-[6rem]
                    md:w-80
                    md:h-[26rem]

                    /* LARGE (lg) */
                    lg:w-full
                    lg:bottom-[-44rem]
                    lg:h-[30rem]
                    lg:left-[2rem]

                    /* Desktop */
                    xl:bottom-[-40rem]
                    xl:left-[8rem]
                    xl:w-76
                    xl:h-[28rem]

                    z-30
                    filter saturate-150
                  "
                >
                  <img
                    src="/photo/1_orang_asn.webp"
                    alt="ASN"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                {/* Person 3 - Polisi (MUNCUL DI MOBILE & iPad) */}
                <div
                className="
                  absolute
                  z-20
                  filter saturate-150

                  /* MOBILE */
                  bottom-[-24rem]
                  right-[-14rem]
                  w-56
                  h-[24rem]

                  /* iPad */
                  md:bottom-[-27rem]
                  md:right-[-30rem]
                  md:w-64
                  md:h-[28rem]

                  /* LARGE (lg) */
                  lg:bottom-[-40rem]
                  lg:left-[8rem]
                  lg:right-auto
                  lg:w-full
                  lg:h-[35rem]

                  /* DESKTOP (xl) */
                  xl:left-auto
                  xl:right-[-8rem]
                  xl:w-80
                  xl:h-[34rem]
                "
              >

                  <img
                    src="/photo/1_orang_polisi.webp"
                    alt="Polisi"
                    className="w-full h-full object-cover object-top scale-x-[-1]"
                    loading="lazy"
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
