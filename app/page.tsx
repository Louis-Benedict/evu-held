import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { blogPosts, formatDate } from "@/lib/blog";
import FAQList from "@/components/FAQList";

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconCheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}


// ── Energy Flow Diagram ────────────────────────────────────────────────────────

// ── Static data ────────────────────────────────────────────────────────────────

// ── FAQ data ───────────────────────────────────────────────────────────────────

const homeFaqs = [
  {
    question: "Wie läuft die Zusammenarbeit mit EVU-HELD ab?",
    answer:
      "Einfach: Sie nehmen Kontakt auf und schildern uns Ihr Projekt. Wir erstellen ein Angebot, Sie beauftragen uns, und wir übernehmen ab diesem Moment die gesamte Kommunikation mit dem Netzbetreiber – bis zur fertigen Genehmigung. Sie müssen sich um nichts weiter kümmern.",
  },
  {
    question: "Wie lange dauert eine Netzanmeldung?",
    answer:
      "Die Bearbeitungszeit hängt vom jeweiligen Netzbetreiber ab und variiert zwischen wenigen Tagen und mehreren Wochen. Wir bereiten alle Unterlagen vollständig vor und reichen sie sofort ein, um Verzögerungen zu minimieren. Sie werden während des gesamten Prozesses auf dem Laufenden gehalten.",
  },
  {
    question: "Arbeiten Sie deutschlandweit?",
    answer:
      "Ja – wir übernehmen Netzanmeldungen bei allen Netzbetreibern in Deutschland, unabhängig von Region oder Bundesland. Ob München, Berlin, Hamburg oder ländliche Gebiete: Wir kennen die lokalen Anforderungen und kommunizieren direkt mit dem zuständigen Netzbetreiber.",
  },
  {
    question: "Was kostet die Beauftragung?",
    answer:
      "Unsere Festpreise beginnen bei 189 € (§14a-Registrierung) und reichen bis 339 € (PV-Netzanmeldung), jeweils zzgl. MwSt. Es gibt keine versteckten Kosten – Sie zahlen den vereinbarten Pauschalpreis, unabhängig vom Aufwand im Einzelfall. Eine vollständige Preisübersicht finden Sie auf unserer Leistungsseite.",
  },
  {
    question: "Welche Unterlagen benötige ich für die Anmeldung?",
    answer:
      "Das hängt von der Anlage ab – in der Regel benötigen wir das Datenblatt des Geräts, die Installationsadresse sowie Angaben zur Anlage (Leistung, Typ, Installateur). Wir senden Ihnen nach der Beauftragung eine genaue Checkliste zu, damit nichts vergessen wird.",
  },
  {
    question: "Kann ich mehrere Anlagen gleichzeitig anmelden lassen?",
    answer:
      "Ja. Wenn Sie PV-Anlage, Wallbox und Wärmepumpe kombinieren, erstellen wir Ihnen ein Kombiangebot, das günstiger ist als die Summe der Einzelpreise. Für Elektriker und Solarinstallateure mit regelmäßigem Volumen bieten wir außerdem ein Partnermodell mit Pauschalpreisen pro Kunde an.",
  },
];

// ── Structured data ────────────────────────────────────────────────────────────

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://evu-held.de/",
      "url": "https://evu-held.de/",
      "name": "EVU-HELD – Netzanmeldung leicht gemacht",
      "description":
        "Ihr professioneller Partner für alle Arten der Netzanmeldung – PV, Wärmepumpe & Wallbox. Persönlich, zuverlässig, ohne Aufwand für Sie.",
      "inLanguage": "de-DE",
      "isPartOf": { "@id": "https://evu-held.de/#website" },
      "publisher": { "@id": "https://evu-held.de/#organization" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://evu-held.de/#service",
      "name": "EVU Held Netzanmeldung",
      "url": "https://evu-held.de",
      "telephone": "+4915213323256",
      "areaServed": { "@type": "Country", "name": "Germany" },
      "provider": { "@id": "https://evu-held.de/#organization" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Netzanmeldungen",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "PV-Netzanmeldung" },
            "price": "339",
            "priceCurrency": "EUR",
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Wärmepumpen-Anmeldung" },
            "price": "299",
            "priceCurrency": "EUR",
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Wallbox-Anmeldung" },
            "price": "239",
            "priceCurrency": "EUR",
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Zähleranmeldung/-abmeldung" },
            "price": "239",
            "priceCurrency": "EUR",
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "§14a-Registrierung" },
            "price": "189",
            "priceCurrency": "EUR",
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Baustrom-Anmeldung" },
            "price": "199",
            "priceCurrency": "EUR",
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "E-Check / VDE-Prüfung" },
            "price": "499",
            "priceCurrency": "EUR",
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Technische Beratung" },
            "price": "289",
            "priceCurrency": "EUR",
          },
        ],
      },
    },
  ],
};

// ── Page component ─────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#3D3935]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Header />

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-[#4A2200] text-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B8922A]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B8922A]/7 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 pt-32 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[#B8922A]/30 bg-[#B8922A]/20 text-xs font-semibold text-[#D4A843] tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8922A] animate-pulse" />
                  Faire Festpreise · Deutschlandweit
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4 tracking-tight text-white">
                  Kompetenz rund um Energieversorgung
                </h1>
                <p className="text-base text-neutral-300 mb-6 leading-relaxed max-w-lg">
                  Wir unterstützen Privatkunden, Installationsbetriebe und Kooperationspartner bei Anträgen, Abnahmen von elektrischen Anlagen und Netzbetreiberprozessen jeglicher Art - schnell, zuverlässig und transparent.
                </p>

                {/* Mobile price chips */}
                <div className="flex flex-wrap gap-3 mb-8 lg:hidden">
                  <div className="flex items-baseline gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20">
                    <span className="text-2xl font-extrabold text-white">75 €</span>
                    <span className="text-white/60 text-sm">/Kunde (Gewerbe)</span>
                  </div>
                  <div className="flex items-baseline gap-1.5 px-4 py-2.5 rounded-xl bg-[#B8922A]/20 border border-[#B8922A]/40">
                    <span className="text-2xl font-extrabold text-white">189 €</span>
                    <span className="text-white/60 text-sm">(Privat)</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-semibold px-8 py-3.5 text-base shadow-lg shadow-[#B8922A]/30 transition-all hover:shadow-xl"
                  >
                    Jetzt anmelden
                  </a>
                  <a
                    href="/leistungen"
                    className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3.5 text-base transition-all"
                  >
                    Preise ansehen
                  </a>
                </div>
              </div>

              {/* Pricing card — desktop right column */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-full max-w-sm  p-8">

                  {/* Business tier */}
                  <div className="mb-4 p-5 rounded-2xl bg-white/20 border border-white/15 hover:border-[#B8922A]/60 transition-colors">
                    <p className="text-[#D4A843] text-xs font-semibold uppercase tracking-wide mb-2">Gewerbepartner</p>
                    <div className="flex items-baseline gap-1.5 mb-1">
                      <span className="text-4xl font-extrabold text-white">ab 75 €</span>
                      <span className="text-white/50 text-sm">/Kunde</span>
                    </div>
                    <p className="text-white/40 text-xs mb-4">Pauschal pro Anmeldebündel</p>
                    <ul className="space-y-1.5">
                      {["Alle Anmeldungen eines Kunden", "Prioritätsbearbeitung", "Persönlicher Ansprechpartner"].map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-white/60">
                          <svg className="w-3.5 h-3.5 text-[#B8922A] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Private tier */}
                  <div className="p-5 rounded-2xl bg-[#B8922A]/30 border border-[#B8922A]/35 hover:border-[#B8922A]/60 transition-colors">
                    <p className="text-[#D4A843] text-xs font-semibold uppercase tracking-wide mb-2">Privatkunden</p>
                    <div className="flex items-baseline gap-1.5 mb-1">
                      <span className="text-4xl font-extrabold text-white">ab 189 €</span>
                    </div>
                    <p className="text-white/40 text-xs mb-4">Pauschalpreis, alles inklusive</p>
                    <ul className="space-y-1.5">
                      {["PV, Wärmepumpe & Wallbox", "§14a EnWG & Marktstammdaten", "Persönliche Betreuung"].map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-white/60">
                          <svg className="w-3.5 h-3.5 text-[#B8922A] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-5 text-center text-white/50 text-xs">Keine versteckten Kosten · Marktführend günstig</p>
                </div>
              </div>
            </div>
          </div>

        </section>
        {/* ── Audience segue ── */}
        <section className="py-20 bg-stone-50 border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">
                Für wen sind wir da?
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1e38]">
                Wählen Sie Ihren Bereich
              </h2>
              <p className="mt-3 text-[#6B6560] max-w-xl mx-auto">
                Ob Privatperson mit einer neuen Anlage oder Fachbetrieb mit regelmäßigen Aufträgen – wir haben das passende Angebot.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Privatkunden card */}
              <a
                href="/privatkunden"
                className="group relative overflow-hidden bg-white border border-stone-200 rounded-3xl p-8 shadow-md shadow-stone-200/70 hover:shadow-xl hover:border-[#B8922A]/30 hover:-translate-y-1 transition-all duration-200 flex flex-col"
              >
                <img src="/icons/icon-privatkunden.svg" alt="" className="h-16 w-auto mb-5 self-start" />
                <span className="inline-flex self-start items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-neutral-100 text-neutral-600 border-neutral-200 mb-5">
                  Privatpersonen
                </span>
                <h3 className="text-2xl font-extrabold text-[#0f1e38] mb-3 group-hover:text-[#B8922A] transition-colors">
                  Privatkunden
                </h3>
                <p className="text-[#6B6560] leading-relaxed mb-6 flex-1">
                  Benötigen hilfe mit Anträgen beim Netzbetreiber?<br />
                  Ob E-check, Zähler, Photovoltaik, Wärmepumpe, Wallbox Baustrom - wir unterstützen Sie schnell und professionell mit den An- und Abmeldungen.
                  Ideal, wenn Ihnen ein Elektroinstallateur fehlt, der kurzfristig beim
                  Netzbetreiber alles einreichen kann.
                </p>
                <ul className="space-y-2 mb-8">
                  {["Anträge jeglicher Art beim EVU", "Festpreise ab 189 €", "Persönliche Betreuung", "Deutschlandweit"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#5A5550]">
                      <IconCheckCircle className="w-4 h-4 text-[#B8922A] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8922A] group-hover:gap-2.5 transition-all">
                  Mehr erfahren
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>

              {/* Partner card */}
              <a
                href="/partner"
                className="group relative overflow-hidden bg-[#4A2200] border border-[#B8922A]/20 rounded-3xl p-8 shadow-md hover:shadow-xl hover:border-[#B8922A]/50 hover:-translate-y-1 transition-all duration-200 flex flex-col"
              >
                <img src="/icons/icon-elektriker.svg" alt="" className="h-16 w-auto mb-5 self-start invert opacity-90" />
                <span className="inline-flex self-start items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-[#B8922A]/20 text-[#D4A843] border-[#B8922A]/30 mb-5">
                  Kooperationspartner
                </span>
                <h3 className="text-2xl font-extrabold text-white mb-3">
                  Für PV-, Wärmepumpen- und Kabelverleginstallateure
                </h3>
                <p className="text-neutral-400 leading-relaxed mb-6 flex-1">
                  Anträge, E-Checks, Abnahmen und Begutachtungen aus einer Hand.
                  Kooperationspartner profitieren von einer fairen Pauschalabrechnung pro Kunde - unabhängig vom Aufwand einzelner Meldungen.
                </p>
                <ul className="space-y-2 mb-8">
                  {["Pauschalpreis pro Kunde", "Ab 75 €/Kunde", "Prioritätsbearbeitung", "Persönlicher Ansprechpartner"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-neutral-300">
                      <IconCheckCircle className="w-4 h-4 text-[#B8922A] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D4A843] group-hover:gap-2.5 transition-all">
                  Partner werden
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ── Netzbetreiber marquee ── */}
        <section className="py-10 bg-white  overflow-hidden">
          <style>{`
            @keyframes marquee {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              width: max-content;
              animation: marquee 160s linear infinite;
            }
            .marquee-track:hover { animation-play-state: paused; }
          `}</style>
          <p className="text-center text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-7">
            Wir melden bei allen Netzbetreibern an
          </p>
          <div className="marquee-track">
            {((): ({ type: "img"; src: string; alt: string } | { type: "text"; name: string })[] => {
              const items: ({ type: "img"; src: string; alt: string } | { type: "text"; name: string })[] = [
                { type: "img", src: "/logos/vnb.png", alt: "VNBdigital" },
                { type: "text", name: "Agger Energie" },
                { type: "text", name: "Albwerk" },
                { type: "text", name: "Avacon Netz" },
                { type: "text", name: "Bayernwerk Netz" },
                { type: "text", name: "EDIS Netz GmbH" },
                { type: "text", name: "Celle Uelzen Netz GmbH" },
                { type: "text", name: "e-netz Südhessen AG" },
                { type: "text", name: "EAM NETZ GMBH" },
                { type: "text", name: "Enercity-Netz" },
                { type: "text", name: "Mitnetz Strom" },
                { type: "text", name: "EWE NETZ" },
                { type: "text", name: "LEW Verteilernetze" },
                { type: "text", name: "LSW Netz GmbH & Co. KG" },
                { type: "text", name: "Mainzer Netze" },
                { type: "text", name: "MVV Netze GmbH" },
                { type: "text", name: "N-Ergie Netz" },
                { type: "text", name: "Netze BW" },
                { type: "text", name: "Netze Leipzig" },
                { type: "text", name: "Pfalzwerke Netz AG" },
                { type: "text", name: "Regionetz GmbH" },
                { type: "text", name: "Rheinenergie" },
                { type: "text", name: "Schleswig Holstein Netz" },
                { type: "text", name: "Stromnetz Berlin" },
                { type: "text", name: "Stromnetz Hamburg" },
                { type: "text", name: "SWM Infrastruktur München" },
                { type: "text", name: "SYNA" },
                { type: "text", name: "TraveNetz GmbH" },
                { type: "text", name: "VWeW Energy" },
                { type: "text", name: "Wemag Netz" },
                { type: "text", name: "Westnetz" },
                { type: "text", name: "Osthessen Netz" },
                { type: "text", name: "DO NETZ" },
                { type: "text", name: "NEW Netz" },
                { type: "text", name: "eneRegio" },
                { type: "text", name: "Bonn Netz" },
                { type: "text", name: "TEN Teutoburger Energie Netzwerk eG" },
                { type: "text", name: "OVAG Netz" },
                { type: "text", name: "Duisburg Netze" },
                { type: "text", name: "Stadtwerke Bochum" },
                { type: "text", name: "Stuttgart Netze" },
                { type: "text", name: "EWR Netze" },
                { type: "text", name: "Wesernetz" },
                { type: "text", name: "Allgäu Netz" },
                { type: "text", name: "E Regio" },
              ];
              return [...items, ...items];
            })().map((item, i) => (
              <div key={i} className="flex items-center justify-center shrink-0 px-16 border-r border-stone-100 last:border-r-0 h-24">
                {item.type === "img" ? (
                  <img src={item.src} alt={item.alt} className="h-14 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                ) : (
                  <span className="text-lg font-semibold text-neutral-300 whitespace-nowrap hover:text-neutral-600 transition-colors cursor-default">
                    {item.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>


        {/* ── Process ── */}
        <section className="py-20 bg-white border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="text-center mb-14">
              <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">
                Ablauf der Anmeldung
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1e38]">
                In 5 Schritten zur genehmigten Anlage
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 border border-stone-200 rounded-3xl overflow-hidden">
              {[
                { n: "01", title: "Dienstleistung auswählen", desc: "Wählen Sie die gewünschte Leistung aus unserem Angebot – PV, Wärmepumpe, Wallbox oder weitere Anmeldungen." },
                { n: "02", title: "Anlagendaten übermitteln", desc: "Laden Sie die erforderlichen Unterlagen direkt online hoch oder senden Sie sie uns als PDF zu." },
                { n: "03", title: "Prüfung durch EVU Held", desc: "Unser Team prüft Ihre Angaben vollständig und bereitet alle Unterlagen für die Einreichung vor." },
                { n: "04", title: "Einreichung beim Netzbetreiber", desc: "Wir reichen alles beim zuständigen Netzbetreiber und im Marktstammdatenregister ein." },
                { n: "05", title: "Rückmeldung & Abschluss", desc: "Sie erhalten eine Bestätigung sobald die Anmeldung abgeschlossen ist – inklusive aller Nachweise." },
                , { n: "" }
              ].map((step) => (
                <div key={step?.n} className="bg-white p-7 flex gap-4">
                  <span className="text-3xl font-extrabold text-[#B8922A]/20 leading-none shrink-0 select-none">
                    {step?.n}
                  </span>
                  <div>
                    <p className="font-semibold text-[#0f1e38] mb-1.5">{step?.title}</p>
                    <p className="text-sm text-[#8A8480] leading-relaxed">{step?.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Blog ── */}
        <section className="py-20 bg-gradient-to-br from-neutral-50 via-neutral-100/40 to-neutral-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <Badge className="mb-3 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">
                  Ratgeber & Wissen
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1e38]">
                  Aktuelle Artikel
                </h2>
              </div>
              <a
                href="/blog"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8922A] hover:text-[#9A7820] transition-colors shrink-0"
              >
                Alle Artikel
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.slice(0, 3).map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white border border-stone-200 rounded-3xl shadow-md shadow-stone-200/70 p-6 flex flex-col hover:shadow-xl hover:border-[#B8922A]/30 hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-neutral-100 text-neutral-600 border-neutral-200">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#A09890]">{formatDate(post.publishedAt)}</span>
                    <span className="text-xs text-[#A09890]">· {post.readingTimeMinutes} Min.</span>
                  </div>
                  <h3 className="text-base font-bold text-[#3D3935] mb-3 group-hover:text-[#B8922A] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#8A8480] leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm font-semibold text-[#B8922A] gap-1.5">
                    Weiterlesen
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 sm:hidden text-center">
              <a href="/blog" className="text-sm font-semibold text-[#B8922A] hover:text-[#9A7820] transition-colors">
                Alle Artikel →
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="relative overflow-hidden bg-[#4A2200] rounded-3xl py-20 text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8922A]/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B8922A]/7 rounded-full blur-3xl pointer-events-none" />
              <div className="relative px-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-5 leading-tight">
                  Jetzt Anlage anmelden lassen
                </h2>
                <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                  PV, Wärmepumpe oder Wallbox – wir übernehmen die komplette Anmeldung. Schnell, korrekt, deutschlandweit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-bold px-10 py-4 text-base shadow-xl shadow-black/40 transition-all hover:shadow-2xl"
                  >
                    Anmeldung starten
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ── Netzbetreiber finder ── */}
        <section className="py-20 bg-white border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="relative overflow-hidden bg-stone-50 border border-stone-200 rounded-3xl p-10 sm:p-14 flex flex-col sm:flex-row items-center gap-10">
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#B8922A]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
              <div className="relative flex-1 text-center sm:text-left">
                <Badge className="mb-3 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">
                  Netzbetreiber herausfinden
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f1e38] mb-3">
                  Wer ist Ihr zuständiger Netzbetreiber?
                </h2>
                <p className="text-[#6B6560] leading-relaxed max-w-xl">
                  Bevor wir die Anmeldung einreichen, ermitteln wir den für Ihre Adresse zuständigen Netzbetreiber. Mit dem kostenlosen VNB-Digital-Tool können Sie diesen auch selbst in Sekunden herausfinden.
                </p>
              </div>
              <a
                href="https://www.vnbdigital.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative shrink-0 inline-flex items-center gap-2 rounded-xl bg-[#0f1e38] hover:bg-[#1a2f52] text-white font-semibold px-7 py-3.5 text-sm shadow-md transition-all hover:shadow-lg whitespace-nowrap"
              >
                Netzbetreiber suchen
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── FAQ ── */}
      <section className="py-24 bg-stone-50 border-t border-stone-100">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">FAQ</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3D3935] mb-4">Häufige Fragen</h2>
            <p className="text-lg text-[#8A8480]">
              Alles, was Sie vor der Beauftragung wissen möchten.
            </p>
          </div>
          <FAQList faqs={homeFaqs} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
