import React, { useState, useEffect, useRef } from "react";
import { PersonIcon, CalendarIcon } from "./Icons";

const SocialProof = () => {
  const [countersAnimated, setCountersAnimated] = useState(false);
  const [alumniCount, setAlumniCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const socialProofRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersAnimated) {
            setCountersAnimated(true);
            animateCounter(0, 1000, 2000, setAlumniCount);
            animateCounter(0, 10, 2000, setYearsCount);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (socialProofRef.current) {
      observer.observe(socialProofRef.current);
    }

    return () => observer.disconnect();
  }, [countersAnimated]);

  const animateCounter = (start, end, duration, setter) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setter(Math.floor(easeOutQuart * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <section
      ref={socialProofRef}
      className="relative py-16 lg:py-20 bg-gradient-to-r from-brilliant-red via-brilliant-orange to-brilliant-yellow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Stat 1: Alumni */}
          <div className="text-center text-white group p-4 lg:p-6 rounded-2xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center items-center gap-2 lg:gap-3 mb-2">
              <PersonIcon className="w-8 h-8 lg:w-12 lg:h-12" />
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                {alumniCount}+
              </div>
            </div>
            <div className="text-base sm:text-lg lg:text-xl font-medium opacity-90">
              Alumni BRILLIANT
            </div>
          </div>

          {/* Vertical Divider 1 */}
          <div className="hidden md:block absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-32 bg-white"></div>

          {/* Stat 2: Garansi */}
          <div className="text-center text-white group p-4 lg:p-6 rounded-2xl transition-all duration-300 hover:scale-105">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
              Garansi Tahun Depan
            </div>
            <div className="text-base sm:text-lg lg:text-xl font-medium opacity-90">
              jika Tidak Lolos
            </div>
          </div>

          {/* Vertical Divider 2 */}
          <div className="hidden md:block absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-32 bg-white"></div>

          {/* Stat 3: Pengalaman */}
          <div className="text-center text-white group p-4 lg:p-6 rounded-2xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center items-center gap-2 lg:gap-3 mb-2">
              <CalendarIcon className="w-8 h-8 lg:w-12 lg:h-12" />
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                {yearsCount}+
              </div>
            </div>
            <div className="text-base sm:text-lg lg:text-xl font-medium opacity-90">
              Tahun Pengalaman
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
