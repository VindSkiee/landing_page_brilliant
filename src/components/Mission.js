import React from "react";
import { Image as ImageIcon } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-12 lg:py-24 bg-[#ffc08c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <div
              className="glowing-outline aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 shadow-2xl overflow-hidden"
              style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
            >
              <img
                src="/photo/misi.jpeg"
                alt="Our Mission"
                className="w-full h-full object-cover"
                style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextSibling.style.display = "flex";
                }}
              />
              <div className="hidden w-full h-full items-center justify-center flex-col p-8 text-center">
                <ImageIcon className="w-16 h-16 text-gray-400 mb-4" />
                <p className="text-gray-500 font-medium">Our Mission</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-4 lg:space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Our Mission: Helping Millions of Organizations Grow Better
            </h2>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
              Kami percaya tidak hanya pada pertumbuhan yang lebih besar, tetapi
              juga pertumbuhan yang lebih baik. Dan pertumbuhan yang lebih baik
              berarti menyelaraskan kesuksesan bisnis kami dengan kesuksesan
              anda. Win-win!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
