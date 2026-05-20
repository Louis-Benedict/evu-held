"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Privatkunden", href: "/privatkunden" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Für Partner", href: "/partner" },
];

const wissenCategories = [
  { label: "Alle Artikel", href: "/blog", dot: "bg-stone-400" },
  { label: "PV-Anlage", href: "/blog/kategorie/pv-anlage", dot: "bg-yellow-400" },
  { label: "Wärmepumpe", href: "/blog/kategorie/waermepumpe", dot: "bg-blue-400" },
  { label: "Wallbox", href: "/blog/kategorie/wallbox", dot: "bg-purple-400" },
  { label: "Ratgeber", href: "/blog/kategorie/ratgeber", dot: "bg-[#B8922A]" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [wissenOpen, setWissenOpen] = useState(false);
  const [wissenMobileOpen, setWissenMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-stone-200/70 shadow-sm"
          : "bg-transparent border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img
              src={scrolled ? "/logo.png" : "/logo-white.png"}
              alt="EVU-HELD"
              className="h-12 sm:h-14 w-auto transition-opacity duration-300"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors ${scrolled ? "text-[#5A5550] hover:text-[#B8922A]" : "text-white/85 hover:text-white"
                  }`}
              >
                {link.label}
              </a>
            ))}

            {/* Wissen dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setWissenOpen(true)}
              onMouseLeave={() => setWissenOpen(false)}
            >
              <a
                href="/blog"
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${scrolled ? "text-[#5A5550] hover:text-[#B8922A]" : "text-white/85 hover:text-white"
                  }`}
              >
                Wissen
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${wissenOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              {wissenOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden min-w-[192px] py-1.5">
                    {wissenCategories.map((cat) => (
                      <a
                        key={cat.label}
                        href={cat.href}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-[#5A5550] hover:bg-stone-50 hover:text-[#B8922A] transition-colors"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cat.dot}`} />
                        {cat.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/contact"
              className={`inline-flex items-center justify-center rounded-xl text-sm font-semibold px-6 py-2.5 shadow-md transition-all hover:shadow-lg ${scrolled
                ? "bg-[#B8922A] hover:bg-[#9A7820] text-white shadow-[#B8922A]/30"
                : "bg-white hover:bg-white/90 text-[#0f1e38] shadow-black/10"
                }`}
            >
              Kontakt aufnehmen
            </a>
          </div>

          {/* Mobile: Kontakt button + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="/contact"
              className={`inline-flex items-center justify-center rounded-xl text-xs font-semibold px-4 py-2 shadow-md transition-all ${scrolled
                ? "bg-[#B8922A] hover:bg-[#9A7820] text-white shadow-[#B8922A]/30"
                : "bg-white hover:bg-white/90 text-[#0f1e38] shadow-black/10"
                }`}
            >
              Kontakt
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${scrolled ? "text-[#5A5550] hover:bg-[#B8922A]/10" : "text-white/85 hover:bg-white/10"
                }`}
              aria-label="Menü öffnen"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-stone-200 shadow-xl p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-[#3D3935] hover:text-[#B8922A] transition-colors py-2 border-b border-stone-100"
              >
                {link.label}
              </a>
            ))}

            {/* Wissen expandable section */}
            <div className="border-b border-stone-100">
              <button
                onClick={() => setWissenMobileOpen(!wissenMobileOpen)}
                className="w-full flex items-center justify-between text-base font-medium text-[#3D3935] hover:text-[#B8922A] transition-colors py-2"
              >
                Wissen
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${wissenMobileOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {wissenMobileOpen && (
                <div className="pl-3 pb-2 flex flex-col">
                  {wissenCategories.map((cat) => (
                    <a
                      key={cat.label}
                      href={cat.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-2.5 py-2 text-sm text-[#6B6560] hover:text-[#B8922A] transition-colors"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cat.dot}`} />
                      {cat.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-semibold px-6 py-3 text-base shadow-md shadow-[#B8922A]/30 transition-all"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      )}
    </>
  );
}
