"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-stone-200/70 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src="/logo.png" alt="EVU-HELD" className="h-12 sm:h-14 w-auto" />
        </a>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="tel:+4945418856891"
            className="inline-flex items-center justify-center rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 shadow-md shadow-[#B8922A]/30 transition-all hover:shadow-lg hover:shadow-[#B8922A]/40"
          >
            Anrufen
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 shadow-md shadow-[#B8922A]/30 transition-all hover:shadow-lg hover:shadow-[#B8922A]/40"
          >
            <span className="sm:hidden">Kontakt</span>
            <span className="hidden sm:inline">Kontakt aufnehmen</span>
          </a>
        </div>
      </div>
    </header>
  );
}
