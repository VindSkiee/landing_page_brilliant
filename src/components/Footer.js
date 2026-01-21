import React from "react";
import { Phone, Mail, MapPin, Youtube } from "lucide-react";
import { InstagramIcon, TikTokIcon } from "./Icons";

const Footer = () => {
  return (
    <footer id="footer" className="bg-brilliant-purple py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1: Branding */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/photo/logo.webp"
                alt="Brilliant Indonesia Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-brilliant-yellow font-semibold text-lg">
                  BRILLIANT INDONESIA
                </h3>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              Bimbingan belajar offline & online terpercaya untuk persiapan PTN,
              CPNS, Kedinasan, dan Polri. Didirikan sejak tahun 2018.
            </p>
            {/* Social Media */}
            <div>
              <p className="text-brilliant-yellow font-medium mb-3">
                Ikuti Kami
              </p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/bbrilliantindonesia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-brilliant-yellow hover:text-brilliant-purple transition-all duration-300"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://tiktok.com/@bbrilliantindonesia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-brilliant-yellow hover:text-brilliant-purple transition-all duration-300"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
                {/* <a
                  href="https://youtube.com/brilliantindonesia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-brilliant-yellow hover:text-brilliant-purple transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a> */}
              </div>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="text-brilliant-yellow font-bold text-lg mb-6">
              Kontak
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+6281234567890"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-brilliant-yellow group-hover:text-brilliant-purple transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+62 812-7429-2390</span>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bbrilliantindonesia@gmail.com&su=Kerja Sama&body=Halo%20Brilliant%20Indonesia,%0A%0ASaya%20ingin%20bertanya..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-brilliant-yellow group-hover:text-brilliant-purple transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span>bbrilliantindonesia@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Column 3: Location */}
          <div>
            <h3 className="text-brilliant-yellow font-bold text-lg mb-6">
              Lokasi
            </h3>
            <div className="flex items-start gap-3 text-white/80">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="leading-relaxed">
                Jl. Eka Jaya RT 20, Kel. Talang Bakung Kec.Paal Merah, Kota
                Jambi
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm text-center">
            © 2026 Brilliant Indonesia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
