import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Über uns – EVU-HELD",
  description:
    "EVU-HELD ist Ihr zuverlässiger Partner für Netzanmeldungen, Elektroinstallationen, Photovoltaik, Wärmepumpen und Wallboxen – professionell, effizient und aus einer Hand.",
  alternates: { canonical: "https://evu-held.de/uber-uns" },
  openGraph: {
    title: "Über uns – EVU-HELD",
    description:
      "Erfahrung, Zuverlässigkeit und technische Präzision – das ist EVU-HELD.",
    type: "website",
  },
};

function IconCheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
function IconZap({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function IconTarget({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
function IconUsers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const values = [
  {
    Icon: IconTarget,
    title: "Qualität & Präzision",
    description:
      "Technische Genauigkeit steht bei jedem Projekt an erster Stelle – von der Antragsstellung bis zur vollständigen Dokumentation.",
  },
  {
    Icon: IconZap,
    title: "Effizienz",
    description:
      "Schnelle Bearbeitung, klare Prozesse und direkter Kontakt zum Netzbetreiber – damit Ihre Anlage ohne unnötige Verzögerungen in Betrieb geht.",
  },
  {
    Icon: IconShield,
    title: "Zuverlässigkeit",
    description:
      "Als langjähriger Partner für Privatkunden, Handwerksbetriebe und Bauträger stehen wir für verbindliche Zusagen und konsequente Umsetzung.",
  },
  {
    Icon: IconUsers,
    title: "Persönliche Betreuung",
    description:
      "Wir begleiten jedes Projekt von der Anfrage bis zum Abschluss – mit einem festen Ansprechpartner und transparenter Kommunikation.",
  },
];

const expertise = [
  "Elektroinstallation",
  "Netzbetreiberanmeldungen",
  "Photovoltaikanlagen",
  "Wärmepumpen",
  "Wallboxen & Ladeinfrastruktur",
  "Technische Abnahmen & E-Checks",
];

const customerTypes = [
  { label: "Privatkunden", description: "Eigenheimbesitzer mit PV, Wärmepumpe oder Wallbox" },
  { label: "Handwerksbetriebe", description: "Installateure und Elektriker, die die Anmeldung auslagern" },
  { label: "Bauträger", description: "Projektentwickler mit mehreren Einheiten" },
  { label: "Kooperationspartner", description: "Unternehmen, die EVU-HELD als verlängerte Werkbank nutzen" },
];

const services = [
  "Zähleranträge",
  "Netzbetreiberanmeldungen",
  "Inbetriebnahmen",
  "E-Checks nach VDE-Norm",
  "Technische Abnahmen",
  "Technische Begutachtungen",
];

export default function UberUnsPage() {
  return (
    <div className="min-h-screen bg-white text-[#3D3935]">
      <Header />

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#4A2200] via-[#7A3E08] to-[#4A2200] text-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B8922A]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#B8922A]/7 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 pt-32 pb-20">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-neutral-500">
                <li><a href="/" className="hover:text-neutral-300 transition-colors">Startseite</a></li>
                <li className="text-neutral-600" aria-hidden="true">/</li>
                <li className="text-neutral-300" aria-current="page">Über uns</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-[#B8922A]/20 text-[#D4A843] border-[#B8922A]/30">
                Über EVU-HELD
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                Wir gestalten{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8922A] to-[#D4A843]">
                  die Energie von morgen
                </span>
              </h1>
              <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
                EVU-HELD hat die technische Entwicklung moderner Energie- und Gebäudetechnik nicht nur begleitet – wir haben sie aktiv mitgestaltet. Durch zahlreiche erfolgreich abgeschlossene Projekte haben wir uns als zuverlässiger Partner im Elektrobereich etabliert.
              </p>
            </div>
          </div>
        </section>

        {/* ── Story ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">Wer wir sind</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1e38] mb-6">
                  Breite Expertise – aus einer Hand
                </h2>
                <p className="text-[#6B6560] text-lg leading-relaxed mb-6">
                  Unsere Erfahrung reicht von klassischen Elektroinstallationen bis hin zur technischen Abwicklung moderner Energiekonzepte und intelligenter Versorgungslösungen. Dieses Spektrum erlaubt es uns, komplexe Projekte vollständig zu begleiten – ohne Schnittstellen, ohne Reibungsverluste.
                </p>
                <p className="text-[#6B6560] leading-relaxed">
                  Mit einem starken Fokus auf Qualität, Effizienz und technische Präzision leisten wir täglich einen wichtigen Beitrag zur sicheren und nachhaltigen Energieversorgung.
                </p>
              </div>
              <div className="bg-stone-50 border border-stone-200 rounded-3xl p-8">
                <h3 className="font-bold text-[#0f1e38] text-lg mb-6">Unsere Fachbereiche</h3>
                <ul className="space-y-3">
                  {expertise.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <IconCheckCircle className="w-5 h-5 text-[#B8922A] shrink-0" />
                      <span className="text-[#5A5550]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="py-20 bg-stone-50 border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="text-center mb-14">
              <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">Unsere Werte</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1e38] mb-4">
                Was uns auszeichnet
              </h2>
              <p className="text-[#6B6560] max-w-2xl mx-auto text-lg">
                Kontinuierliche Betreuung und fachgerechte Umsetzung stehen für Erfahrung, Zuverlässigkeit und ein hohes Maß an Engagement.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-2xl bg-[#B8922A]/10 border border-[#B8922A]/20 flex items-center justify-center mb-4">
                    <v.Icon className="w-5 h-5 text-[#B8922A]" />
                  </div>
                  <h3 className="font-bold text-[#3D3935] mb-2">{v.title}</h3>
                  <p className="text-sm text-[#8A8480] leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── For whom + Services ── */}
        <section className="py-20 bg-white border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">Für wen wir arbeiten</Badge>
                <h2 className="text-3xl font-bold text-[#0f1e38] mb-8">
                  Verlässlicher Ansprechpartner für alle
                </h2>
                <div className="space-y-4">
                  {customerTypes.map((c) => (
                    <div key={c.label} className="flex items-start gap-4 bg-stone-50 border border-stone-200 rounded-2xl p-5">
                      <IconCheckCircle className="w-5 h-5 text-[#B8922A] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#3D3935]">{c.label}</p>
                        <p className="text-sm text-[#8A8480] mt-0.5">{c.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">Antrags- & Dokumentationsprozesse</Badge>
                <h2 className="text-3xl font-bold text-[#0f1e38] mb-4">
                  Professionell. Effizient. Aus einer Hand.
                </h2>
                <p className="text-[#6B6560] leading-relaxed mb-8">
                  Im Bereich der technischen Antrags- und Dokumentationsprozesse unterstützen wir Kunden vollständig – von der ersten Anfrage bis zur abschließenden Bestätigung.
                </p>
                <ul className="space-y-3">
                  {services.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#B8922A]/15 border border-[#B8922A]/30 flex items-center justify-center shrink-0">
                        <IconCheckCircle className="w-3 h-3 text-[#B8922A]" />
                      </div>
                      <span className="text-[#5A5550]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="relative overflow-hidden bg-gradient-to-br from-[#4A2200] via-[#7A3E08] to-[#4A2200] rounded-3xl py-20 text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8922A]/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B8922A]/7 rounded-full blur-3xl pointer-events-none" />
              <div className="relative px-8">
                <Badge className="mb-6 bg-[#B8922A]/20 text-[#D4A843] border-[#B8922A]/30">
                  Jetzt loslegen
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Bereit für Ihr nächstes Projekt?
                </h2>
                <p className="text-neutral-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
                  Sprechen Sie uns an – wir begleiten Ihr Projekt von der Anfrage bis zum Abschluss.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-bold px-10 py-4 text-base shadow-xl shadow-black/30 transition-all"
                  >
                    Jetzt Kontakt aufnehmen
                  </a>
                  <a
                    href="/leistungen"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 text-white hover:bg-white/8 font-semibold px-8 py-4 text-base transition-all"
                  >
                    Alle Leistungen ansehen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
