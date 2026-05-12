import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-[#1C1A14] text-[#A09890] py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/nb1.svg" alt="EVU-HELD" className="h-7 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed text-[#8A8480]">
              Ihr professioneller Partner für alle Arten der Netzanmeldung in Deutschland.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Leistungen</h4>
            <ul className="space-y-2.5 text-sm">
              {["PV-Netzanmeldung", "Wärmepumpen-Anmeldung", "Wallbox-Anmeldung"].map((item) => (
                <li key={item}>
                  <a href="/#leistungen" className="hover:text-[#B8922A] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Kontakt</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Anfrage stellen", href: "/contact" },
                { label: "So geht's", href: "/#funktionsweise" },
                { label: "Blog & Ratgeber", href: "/blog" },
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
          <p>&copy; {new Date().getFullYear()} EVU-HELD. Alle Rechte vorbehalten.</p>
          <p>Made with &#9825; in Deutschland</p>
        </div>
      </div>
    </footer>
  );
}
