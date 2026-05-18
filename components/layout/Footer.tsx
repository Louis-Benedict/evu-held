import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-[#1C1A14] text-[#A09890] md:py-16 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 md:col-span-1">

            <a href="/" className="flex items-center shrink-0">
              <img
                src="/logo-white.png"
                alt="EVU-HELD"
                className="h-16 sm:h-16 w-auto transition-opacity duration-300"
              />
            </a>
            <p className="text-sm leading-relaxed text-[#8A8480] mb-4">
              Ihr professioneller Partner für alle Arten der Netzanmeldung in Deutschland – für Privatkunden und Gewerbebetriebe.
            </p>
            <a
              href="tel:+4915213323256"
              className="inline-flex items-center gap-2 text-sm text-[#B8922A] hover:text-[#D4A843] transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006 6l.91-.91a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              +49 1521 3323256
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Leistungen</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "PV-Netzanmeldung", href: "/leistungen" },
                { label: "Wärmepumpen-Anmeldung", href: "/leistungen" },
                { label: "Wallbox-Anmeldung", href: "/leistungen" },
                { label: "§14a-Registrierung", href: "/leistungen" },
                { label: "E-Check / VDE-Prüfung", href: "/leistungen" },
                { label: "Für Partner", href: "/partner" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#B8922A] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Anfrage stellen", href: "/contact" },
                { label: "Leistungen", href: "/leistungen" },
                { label: "Für Partner", href: "/partner" },
                { label: "Wissen & Ratgeber", href: "/blog" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#B8922A] transition-colors inline-flex items-center gap-1"
                    target="_blank" rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Rechtliches</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Datenschutz", href: "/datenschutz" },
                { label: "Impressum", href: "/impressum" },
                { label: "AGB", href: "/agb" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#B8922A] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-[#2E2820] mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#6B6560]">
          <p>&copy; {new Date().getFullYear()} EVU Held. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
