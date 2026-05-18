import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import B2BSlider from "@/components/B2BSlider";

export const metadata: Metadata = {
  title: "Für Partner – Volumenmodell für Elektriker & Installateure | EVU-HELD",
  description:
    "Als Elektrobetrieb oder Solarinstallateur profitieren Sie von unseren Pauschalpreisen. Abgerechnet pro Kunde – egal wie viele Einzelanmeldungen. Jetzt Partner werden.",
};

function IconHandshake({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
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

function IconStar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

const benefits = [
  {
    Icon: IconHandshake,
    title: "Pro Kunde – nicht pro Service",
    description:
      "Ein Kunde benötigt PV, Wallbox und Wärmepumpe? Für Sie trotzdem nur ein Preis. Das Risiko der Komplexität liegt bei uns.",
  },
  {
    Icon: IconClock,
    title: "Prioritätsbearbeitung",
    description:
      "Als Partner werden Ihre Aufträge bevorzugt bearbeitet. Kürzere Wartezeiten, zufriedene Kunden.",
  },
  {
    Icon: IconShield,
    title: "Rechtssicherheit",
    description:
      "Alle Anmeldungen erfolgen gesetzeskonform. Sie bleiben aus der Haftung für Formalfehler – das übernehmen wir.",
  },
  {
    Icon: IconStar,
    title: "Persönlicher Ansprechpartner",
    description:
      "Sie erhalten einen dedizierten Ansprechpartner, der Ihre Kunden und Projekte kennt.",
  },
];

const volumeComparison = [
  {
    clients: 5,
    partnerPrice: 750,
    individualEstimate: 1370,
    perClient: 150,
    tag: "Einstieg",
  },
  {
    clients: 10,
    partnerPrice: 1000,
    individualEstimate: 2740,
    perClient: 100,
    tag: "Beliebt",
    highlight: true,
  },
  {
    clients: 20,
    partnerPrice: 1500,
    individualEstimate: 5480,
    perClient: 75,
    tag: "Pro",
  },
];

const steps = [
  {
    num: "01",
    title: "Anfrage stellen",
    desc: "Füllen Sie das Kontaktformular aus oder rufen Sie uns an. Wir besprechen Ihr monatliches Volumen.",
  },
  {
    num: "02",
    title: "Partnervertrag abschließen",
    desc: "Sie erhalten ein maßgeschneidertes Angebot mit klaren Konditionen und einem persönlichen Ansprechpartner.",
  },
  {
    num: "03",
    title: "Aufträge weiterleiten",
    desc: "Sie übermitteln uns die Kundendaten – wir übernehmen die gesamte Kommunikation mit dem Netzbetreiber.",
  },
  {
    num: "04",
    title: "Monatliche Abrechnung",
    desc: "Am Ende des Monats erhalten Sie eine übersichtliche Sammelrechnung für alle bearbeiteten Kunden.",
  },
];

const partnerJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://evu-held.de/partner",
      "url": "https://evu-held.de/partner",
      "name": "Für Partner – Volumenmodell für Elektriker & Installateure | EVU-HELD",
      "description":
        "Als Elektrobetrieb oder Solarinstallateur profitieren Sie von unseren Pauschalpreisen. Abgerechnet pro Kunde – egal wie viele Einzelanmeldungen.",
      "inLanguage": "de-DE",
      "isPartOf": { "@id": "https://evu-held.de/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://evu-held.de/" },
          { "@type": "ListItem", "position": 2, "name": "Für Partner", "item": "https://evu-held.de/partner" },
        ],
      },
    },
    {
      "@type": "Service",
      "name": "EVU-HELD Partnermodell",
      "description":
        "Volumenmodell für Elektriker & Solarinstallateure – Pauschalpreise pro Kunde, abgerechnet monatlich. Alle Netzanmeldungen aus einer Hand.",
      "url": "https://evu-held.de/partner",
      "provider": { "@id": "https://evu-held.de/#organization" },
      "audience": {
        "@type": "BusinessAudience",
        "name": "Elektrobetriebe und Solarinstallateure",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "B2B Volumenpakete",
        "itemListElement": volumeComparison.map((tier) => ({
          "@type": "Offer",
          "name": `${tier.tag} – ${tier.clients} Kunden/Monat`,
          "price": tier.partnerPrice,
          "priceCurrency": "EUR",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "value": tier.clients,
            "unitText": "Kunden pro Monat",
          },
        })),
      },
    },
  ],
};

export default function PartnerPage() {
  return (
    <div className="min-h-screen bg-white text-[#3D3935]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerJsonLd) }}
      />
      <Header />

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1C1A14] via-[#26211A] to-[#1C1A14] text-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B8922A]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#B8922A]/7 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 pt-32 pb-16">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-neutral-500">
                <li><a href="/" className="hover:text-neutral-300 transition-colors">Startseite</a></li>
                <li className="text-neutral-600" aria-hidden="true">/</li>
                <li className="text-neutral-300" aria-current="page">Für Partner</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <Badge className="mb-6 bg-[#B8922A]/20 text-[#D4A843] border-[#B8922A]/30">
                Für Elektriker & Solarinstallateure
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                Das Volumenmodell –{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8922A] to-[#D4A843]">
                  weniger Aufwand, mehr Marge
                </span>
              </h1>
              <p className="text-lg text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                Als Kooperationspartner profitieren Sie von unseren Pauschalpreisen. Wir übernehmen alle Netzanmeldungen für Ihre Kunden – abgerechnet pro Kunde, unabhängig von der Anzahl der einzelnen Anmeldungen.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact?service=partner"
                  className="inline-flex items-center justify-center rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-semibold px-8 py-3.5 text-base shadow-lg shadow-[#B8922A]/30 transition-all"
                >
                  Jetzt Partner werden
                </a>
                <a
                  href="tel:+4915213323256"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 text-white hover:bg-white/8 font-semibold px-8 py-3.5 text-base transition-all"
                >
                  <IconPhone className="w-4 h-4" />
                  +49 1521 3323256
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Pricing Slider ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">
                Pauschalangebote
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#3D3935] mb-4">
                Wählen Sie Ihr Volumenpaket
              </h2>
              <p className="text-[#6B6560] max-w-xl mx-auto">
                Alle Preise sind Nettopreise – zzgl. gesetzlicher MwSt. Abgerechnet wird monatlich.
              </p>
            </div>
            <B2BSlider />
          </div>
        </section>

        {/* ── How it works for B2B ── */}
        <section className="py-20 bg-amber-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">
                Partnerschaft in 4 Schritten
              </Badge>
              <h2 className="text-3xl font-bold text-[#3D3935]">So einfach wird Ihr Büroaufwand weniger</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="backdrop-blur-xl bg-white/65 border border-white/60 rounded-3xl p-6 shadow-lg"
                >
                  <span className="text-3xl font-extrabold text-[#B8922A]/30 block mb-3">{step.num}</span>
                  <h3 className="font-bold text-[#3D3935] mb-2">{step.title}</h3>
                  <p className="text-[#8A8480] text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="relative overflow-hidden bg-gradient-to-br from-[#1C1A14] via-[#26211A] to-[#1C1A14] rounded-3xl py-20 text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8922A]/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B8922A]/7 rounded-full blur-3xl pointer-events-none" />
              <div className="relative px-8">
                <Badge className="mb-6 bg-[#B8922A]/20 text-[#D4A843] border-[#B8922A]/30">
                  Jetzt Partner werden
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Bereit, Ihren Büroaufwand deutlich zu senken?
                </h2>
                <p className="text-neutral-400 text-lg mb-10">
                  Werden Sie jetzt Kooperationspartner von EVU-HELD und konzentrieren Sie sich auf Ihr Kerngeschäft.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact?service=partner"
                    className="inline-flex items-center justify-center rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-bold px-10 py-4 text-base shadow-xl shadow-black/30 transition-all"
                  >
                    Jetzt Partner werden
                  </a>
                  <a
                    href="tel:+4915213323256"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 text-white hover:bg-white/8 font-semibold px-8 py-4 text-base transition-all"
                  >
                    <IconPhone className="w-4 h-4" />
                    +49 1521 3323256
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
