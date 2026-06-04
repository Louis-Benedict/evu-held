import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-[#4A2200] text-[#C8B8A8] md:py-16 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="sm:col-span-2 md:col-span-1">

            <a href="/" className="flex items-center shrink-0">
              <img
                src="/logo-white.png"
                alt="EVU-HELD"
                className="h-16 sm:h-16 w-auto transition-opacity duration-300"
              />
            </a>
            <p className="text-sm leading-relaxed text-[#C8B8A8]">
              Ihr professioneller Partner für alle Arten von elektrischen Abnahmen oder Netzanmeldung in Deutschland – für Privatkunden und Gewerbebetriebe.
            </p>
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
                { label: "Für Privatkunden", href: "/privatkunden" },
                { label: "Für Partner", href: "/partner" },
                { label: "Wissen & Ratgeber", href: "/blog" },
                { label: "Über uns", href: "/uber-uns" },
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

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Anschrift</h4>
            <address className="not-italic text-sm leading-relaxed text-[#C8B8A8] space-y-1">
              <p>Görlitzer Ring 31A</p>
              <p>23879 Grambek</p>
              <p className="pt-1">
                <a href="tel:+4915213323256" className="hover:text-[#B8922A] transition-colors">
                  Tel.: +49 1521 3323256
                </a>
              </p>
              <p>
                <a href="mailto:info@evu-held.de" className="hover:text-[#B8922A] transition-colors">
                  info@evu-held.de
                </a>
              </p>
            </address>
          </div>
        </div>

        <Separator className="bg-[#6B3A10] mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#A89888]">
          <p>&copy; {new Date().getFullYear()} EVU Held. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
