import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQList from "@/components/FAQList";

export const metadata: Metadata = {
  title: "Leistungen & Preise – Netzanmeldung PV, Wärmepumpe, Wallbox | EVU-HELD",
  description:
    "Alle Leistungen von EVU-HELD im Überblick: PV-Netzanmeldung ab 339 €, Wärmepumpe ab 299 €, Wallbox-Anmeldung ab 239 €. Inklusive §14a EnWG und Marktstammdatenregister.",
  openGraph: {
    title: "Leistungen & Preise – EVU-HELD",
    description: "Alle Leistungen von EVU-HELD – professionelle Netzanmeldung für PV, Wärmepumpe, Wallbox und mehr.",
    type: "website",
  },
};

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconBolt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function IconThermometer({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
    </svg>
  );
}
function IconCar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
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
function IconMessageCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function IconMeter({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 0 1 10 10" />
      <path d="M12 6a6 6 0 0 1 6 6" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2v2M2 12h2M12 22v-2M22 12h-2" />
      <path d="M4.93 4.93l1.41 1.41M17.66 6.34l1.41-1.41" />
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
function IconActivity({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}
function IconCheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    Icon: IconBolt,
    badge: "Solar",
    serviceKey: "pv",
    title: "PV-Netzanmeldung",
    price: "339",
    description: "Vollständige Abwicklung Ihrer Photovoltaik-Anmeldung beim Netzbetreiber.",
    items: [
      "Netzverträglichkeitsprüfung",
      "Anmeldung der Erzeugungsanlage",
      "Anmeldung der Speichereinheit (falls vorhanden)",
      "Anmeldung beim Netzbetreiber",
      "§14a EnWG (steuerbare Verbraucher, falls relevant)",
      "Registrierung im Marktstammdatenregister",
    ],
  },
  {
    Icon: IconThermometer,
    badge: "Heizung",
    serviceKey: "wp",
    title: "Wärmepumpen-Anmeldung",
    price: "299",
    description: "Reibungslose Registrierung Ihrer Wärmepumpe – schnell und rechtssicher.",
    items: [
      "Formularvervollständigung beim Netzbetreiber",
      "Dokumentation Zählermontage/-demontage",
      "§14a EnWG (steuerbare Verbraucher, falls relevant)",
      "Kommunikation mit Energieversorgern und Behörden",
    ],
  },
  {
    Icon: IconCar,
    badge: "E-Mobilität",
    serviceKey: "wallbox",
    title: "Wallbox-Anmeldung",
    price: "239",
    description: "Professionelle Anmeldung Ihrer Ladeinfrastruktur beim zuständigen Netzbetreiber.",
    items: [
      "Anmeldung beim zuständigen Netzbetreiber",
      "Vollständige Dokumentation & Kommunikation",
      "§14a EnWG (steuerbare Verbrauchseinrichtung)",
    ],
  },
  {
    Icon: IconMeter,
    badge: "Zähler",
    serviceKey: "zaehler",
    title: "Zähleranmeldung/-abmeldung",
    price: "239",
    description: "Zählertausch, iMSys-Zähler und vollständige Abwicklung mit dem Netzbetreiber.",
    items: [
      "Zählertausch & iMSys-Zähler",
      "Vollständige Abwicklung mit dem Netzbetreiber",
    ],
  },
  {
    Icon: IconShield,
    badge: "Gesetzlich",
    serviceKey: "14a",
    title: "§14a-Registrierung",
    price: "189",
    description: "Separate §14a-Anmeldung für steuerbare Verbrauchseinrichtungen.",
    items: [
      "Anmeldung beim Netzbetreiber nach §14a EnWG",
      "Nachweis der Steuerbarkeit",
      "Vollständige Dokumentation",
    ],
  },
  {
    Icon: IconZap,
    badge: "Baustrom",
    serviceKey: "baustrom",
    title: "Baustrom-Anmeldung",
    price: "199",
    description: "Anmeldung Ihres Baustromanschlusses – unkompliziert und schnell.",
    items: [
      "Anmeldung des Baustromanschlusses",
      "Kommunikation mit dem Netzbetreiber",
      "Vollständige Dokumentation",
    ],
  },
  {
    Icon: IconActivity,
    badge: "Prüfung",
    serviceKey: "echeck",
    title: "E-Check / VDE-Prüfung",
    price: "499",
    description: "Professioneller elektrischer Sicherheitscheck nach VDE-Norm.",
    items: [
      "Sicherheitsüberprüfung nach VDE",
      "Prüfprotokoll & Zertifikat",
      "Empfehlung für eventuelle Mängel",
    ],
  },
  {
    Icon: IconMessageCircle,
    badge: "Beratung",
    serviceKey: "beratung",
    title: "Technische Beratung",
    price: "289",
    priceNote: "/ Anlage",
    description: "Fachberatung für bestehende Installationen – klar und verständlich.",
    items: [
      "Technische Analyse Ihrer Bestandsanlage",
      "Klärung offener Fragen mit dem Netzbetreiber",
      "Handlungsempfehlungen",
    ],
  },
];

// ── Structured data ───────────────────────────────────────────────────────────

const leistungenJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://evu-held.de/leistungen",
      "url": "https://evu-held.de/leistungen",
      "name": "Leistungen & Preise – Netzanmeldung PV, Wärmepumpe, Wallbox | EVU-HELD",
      "description":
        "Alle Leistungen von EVU-HELD im Überblick: PV-Netzanmeldung ab 339 €, Wärmepumpe ab 299 €, Wallbox-Anmeldung ab 239 €.",
      "inLanguage": "de-DE",
      "isPartOf": { "@id": "https://evu-held.de/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://evu-held.de/" },
          { "@type": "ListItem", "position": 2, "name": "Leistungen", "item": "https://evu-held.de/leistungen" },
        ],
      },
    },
    {
      "@type": "ItemList",
      "name": "Leistungen & Preise",
      "itemListElement": services.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Service",
          "name": s.title,
          "description": s.description,
          "url": `https://evu-held.de/contact?service=${s.serviceKey}`,
          "provider": { "@id": "https://evu-held.de/#organization" },
          "offers": {
            "@type": "Offer",
            "price": s.price,
            "priceCurrency": "EUR",
          },
        },
      })),
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Muss ich meine Wärmepumpe anmelden?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja – Wärmepumpen gelten als steuerbare Verbrauchseinrichtungen nach §14a EnWG und müssen beim zuständigen Netzbetreiber angemeldet werden. Zusätzlich ist eine Eintragung im Marktstammdatenregister (MaStR) der Bundesnetzagentur verpflichtend.",
          },
        },
        {
          "@type": "Question",
          "name": "Was muss ich bei der Anmeldung einer PV-Anlage beachten?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die Anmeldung einer PV-Anlage umfasst mehrere Schritte: Voranmeldung beim Netzbetreiber vor der Installation, Endanmeldung mit Inbetriebnahmeprotokoll sowie die Registrierung im Marktstammdatenregister innerhalb eines Monats nach Inbetriebnahme.",
          },
        },
        {
          "@type": "Question",
          "name": "Gilt §14a EnWG auch für meine Wallbox?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, seit dem 1. Januar 2024 fallen Wallboxen mit einer Leistung über 3,7 kW unter die Anmeldepflicht nach §14a EnWG. Sie müssen als steuerbare Verbrauchseinrichtung beim Netzbetreiber registriert werden.",
          },
        },
        {
          "@type": "Question",
          "name": "Was passiert, wenn ich meine Anlage nicht anmelde?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Der Netzbetreiber kann den Netzanschluss verweigern, die Einspeisevergütung entfällt rückwirkend, und es drohen Bußgelder der Bundesnetzagentur. Darüber hinaus können staatliche Förderungen zurückgefordert werden.",
          },
        },
        {
          "@type": "Question",
          "name": "Kann ich die Anmeldung auch nachträglich durchführen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, eine nachträgliche Anmeldung ist grundsätzlich möglich. Bereits entstandene Bußgelder oder der Verlust der Einspeisevergütung lassen sich jedoch nicht rückgängig machen.",
          },
        },
      ],
    },
  ],
};

// ── Page ─────────────────────────────────────────────────────────────────────

export default function LeistungenPage() {
  return (
    <div className="min-h-screen bg-white text-[#3D3935]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(leistungenJsonLd) }}
      />
      <Header />

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1C1A14] via-[#26211A] to-[#1C1A14] text-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8922A]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B8922A]/7 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 pt-32 pb-16">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-neutral-500">
                <li><a href="/" className="hover:text-neutral-300 transition-colors">Startseite</a></li>
                <li className="text-neutral-600" aria-hidden="true">/</li>
                <li className="text-neutral-300" aria-current="page">Leistungen</li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-[#B8922A]/20 text-[#D4A843] border-[#B8922A]/30">
                Leistungen & Preise
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                Alles zur{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8922A] to-[#D4A843]">
                  Netzanmeldung
                </span>
              </h1>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Acht Leistungen, transparente Festpreise, persönliche Betreuung – deutschlandweit.
              </p>
            </div>
          </div>
        </section>

        {/* ── Services grid ── */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1C1A14] mb-3">Alle Leistungen im Überblick</h2>
              <p className="text-[#6B6560]">Alle Preise netto – zzgl. gesetzlicher MwSt.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.serviceKey}
                  className="bg-white border border-stone-200 rounded-3xl shadow-sm hover:shadow-lg p-6 flex flex-col transition-all duration-300"
                >
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-[#B8922A]/10 border border-[#B8922A]/20 flex items-center justify-center mb-3">
                      <service.Icon className="w-5 h-5 text-[#B8922A]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#3D3935] mb-2">{service.title}</h3>
                    <p className="text-[#8A8480] text-sm mb-4 leading-snug">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <IconCheckCircle className="w-3.5 h-3.5 text-[#B8922A] mt-0.5 shrink-0" />
                          <span className="text-xs text-[#6B6560] leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto pt-4 border-t border-stone-100">
                    <p className="text-2xl font-extrabold text-[#3D3935] mb-3">
                      {service.price} €
                      <span className="text-xs font-normal text-[#A09890] ml-1">
                        {service.priceNote ?? "/ Anmeldung"}
                      </span>
                    </p>
                    <a
                      href={`/contact?service=${service.serviceKey}`}
                      className="flex items-center justify-center w-full rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-semibold py-2.5 text-xs shadow-md transition-all hover:shadow-lg"
                    >
                      Jetzt anfragen
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-[#1C1A14] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-bold text-white mb-2">PV + Wärmepumpe + Wallbox – alles in einem?</h3>
                <p className="text-neutral-400 text-sm">
                  Bei kombinierten Projekten sparen Sie gegenüber den Einzelpreisen. Fordern Sie Ihr individuelles Kombiangebot an.
                </p>
              </div>
              <a
                href="/contact?service=mehrere"
                className="shrink-0 inline-flex items-center justify-center rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-semibold px-7 py-3 text-sm shadow-md transition-all hover:shadow-lg"
              >
                Kombiangebot anfragen
              </a>
            </div>
          </div>
        </section>

        {/* ── PV deep-dive ── */}
        <section className="py-20 bg-stone-50 border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">Solar</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1A14] mb-6">
                  PV-Anlage beim Netzbetreiber anmelden
                </h2>
                <p className="text-[#6B6560] mb-4 text-lg">
                  Jede <strong className="text-[#1C1A14]">PV-Anlage</strong> muss beim Netzbetreiber angemeldet werden – wir übernehmen die komplette Abwicklung.
                </p>
                <p className="text-[#6B6560] mb-8">
                  Auch die Eintragung im <strong className="text-[#1C1A14]">Marktstammdatenregister</strong> wird von uns vollständig durchgeführt.
                </p>
                <a
                  href="/contact?service=pv"
                  className="inline-flex items-center justify-center rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-semibold px-8 py-3 text-base shadow-md transition-all"
                >
                  PV-Anlage jetzt anmelden
                </a>
              </div>
              <div className="bg-white border border-stone-200 rounded-3xl p-8">
                <h3 className="font-bold text-[#1C1A14] mb-5">Was wir für Ihre PV-Anlage übernehmen:</h3>
                <ul className="space-y-3">
                  {[
                    "Anmeldung beim zuständigen Netzbetreiber",
                    "Registrierung im Marktstammdatenregister",
                    "Umsetzung der Vorgaben nach §14a EnWG",
                    "Vollständige Dokumentation & Kommunikation",
                    "Persönliche Begleitung bis zum Abschluss",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <IconCheckCircle className="w-5 h-5 text-[#B8922A] mt-0.5 shrink-0" />
                      <span className="text-[#5A5550]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Wärmepumpe deep-dive ── */}
        <section className="py-20 bg-white border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-stone-50 border border-stone-200 rounded-3xl p-8">
                <h3 className="font-bold text-[#1C1A14] mb-5">Was wir für Ihre Wärmepumpe übernehmen:</h3>
                <ul className="space-y-3">
                  {[
                    "Formularvervollständigung beim Netzbetreiber",
                    "Anmeldung nach §14a EnWG (steuerbare Verbrauchseinrichtung)",
                    "Dokumentation Zählermontage/-demontage",
                    "Kommunikation mit Energieversorgern und Behörden",
                    "Gesetzeskonforme Abwicklung deutschlandweit",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <IconCheckCircle className="w-5 h-5 text-[#B8922A] mt-0.5 shrink-0" />
                      <span className="text-[#5A5550]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">Heizung</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1A14] mb-6">
                  Wärmepumpe anmelden beim Netzbetreiber
                </h2>
                <p className="text-[#6B6560] mb-4 text-lg">
                  Wärmepumpen sind in vielen Fällen als <strong className="text-[#1C1A14]">steuerbare Verbrauchseinrichtung nach §14a EnWG</strong> meldepflichtig.
                </p>
                <p className="text-[#6B6560] mb-8">
                  Wir sorgen dafür, dass Ihre Wärmepumpe korrekt angemeldet wird und alle gesetzlichen Vorgaben erfüllt sind.
                </p>
                <a
                  href="/contact?service=wp"
                  className="inline-flex items-center justify-center rounded-xl bg-[#1C1A14] hover:bg-[#2E2820] text-white font-semibold px-8 py-3 text-base shadow-md transition-all"
                >
                  Wärmepumpe jetzt anmelden
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Wallbox + §14a ── */}
        <section className="py-20 bg-stone-50 border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">E-Mobilität</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1A14] mb-6">
                  Wallbox anmelden nach §14a EnWG
                </h2>
                <p className="text-[#6B6560] mb-4 text-lg">
                  Wallboxen über 3,7 kW müssen seit Januar 2024 als <strong className="text-[#1C1A14]">steuerbare Verbrauchseinrichtung</strong> beim Netzbetreiber registriert werden.
                </p>
                <p className="text-[#6B6560] mb-8">
                  Wir übernehmen die vollständige Anmeldung und stellen sicher, dass alle Anforderungen erfüllt sind.
                </p>
                <a
                  href="/contact?service=wallbox"
                  className="inline-flex items-center justify-center rounded-xl bg-[#1C1A14] hover:bg-[#2E2820] text-white font-semibold px-8 py-3 text-base shadow-md transition-all"
                >
                  Wallbox jetzt anmelden
                </a>
              </div>
              <div className="bg-white border border-stone-200 rounded-3xl p-8">
                <h3 className="font-bold text-[#1C1A14] mb-5">§14a EnWG – das müssen Sie wissen:</h3>
                <ul className="space-y-3">
                  {[
                    "Anmeldung als steuerbare Verbrauchseinrichtung (SteuVE)",
                    "Vollständige Kommunikation mit dem Netzbetreiber",
                    "Gesetzeskonforme Umsetzung aller Anforderungen",
                    "Dokumentation & Nachweis für den Netzbetreiber",
                    "Persönliche Begleitung bis zum Abschluss",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <IconCheckCircle className="w-5 h-5 text-[#B8922A] mt-0.5 shrink-0" />
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
            <div className="relative overflow-hidden bg-gradient-to-br from-[#1C1A14] via-[#26211A] to-[#1C1A14] rounded-3xl py-20 text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8922A]/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B8922A]/7 rounded-full blur-3xl pointer-events-none" />
              <div className="relative px-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-5">
                  Bereit zur Anmeldung?
                </h2>
                <p className="text-neutral-400 text-lg mb-8">
                  Wir übernehmen die komplette Anmeldung für Sie – schnell, korrekt und deutschlandweit.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-bold px-10 py-4 text-base shadow-xl shadow-black/40 transition-all hover:shadow-2xl"
                >
                  Jetzt Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ── FAQ ── */}
        <section className="py-24 bg-stone-50 border-t border-stone-100">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="text-center mb-14">
              <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">FAQ</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#3D3935] mb-4">Häufige Fragen</h2>
              <p className="text-lg text-[#8A8480]">
                Antworten auf die wichtigsten Fragen rund um die Netzanmeldung.
              </p>
            </div>
            <FAQList />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
