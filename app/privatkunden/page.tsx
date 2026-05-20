import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQList, { type FAQItem } from "@/components/FAQList";

export const metadata: Metadata = {
  title: "Privatkunden – Netzanmeldung für PV, Wärmepumpe & Wallbox | EVU-HELD",
  description:
    "Wir übernehmen die Netzanmeldung für Privatpersonen – PV-Anlage, Wärmepumpe und Wallbox. Festpreise, persönliche Betreuung, deutschlandweit.",
  alternates: { canonical: "https://evu-held.de/privatkunden" },
  openGraph: {
    title: "Privatkunden – EVU-HELD",
    description:
      "Netzanmeldung für PV, Wärmepumpe & Wallbox – vollständig von uns übernommen. Festpreise, kein Aufwand für Sie.",
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
function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}
function IconAward({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
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
function IconMapPin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function IconTool({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
function IconPlusCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}
function IconPlug({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8H6a2 2 0 0 0-2 2v3a6 6 0 0 0 12 0v-3a2 2 0 0 0-2-2z" />
    </svg>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    Icon: IconBolt,
    serviceKey: "pv",
    title: "PV-Netzanmeldung",
    description: "Vollständige Abwicklung Ihrer Photovoltaik-Anmeldung beim Netzbetreiber inkl. Marktstammdatenregister.",
    price: "339",
  },
  {
    Icon: IconThermometer,
    serviceKey: "wp",
    title: "Wärmepumpen-Anmeldung",
    description: "Rechtssichere Registrierung Ihrer Wärmepumpe nach §14a EnWG – inklusive aller Formulare.",
    price: "299",
  },
  {
    Icon: IconCar,
    serviceKey: "wallbox",
    title: "Wallbox-Anmeldung",
    description: "Professionelle Anmeldung Ihrer Ladeinfrastruktur beim zuständigen Netzbetreiber.",
    price: "239",
  },
  {
    Icon: IconMeter,
    serviceKey: "zaehler",
    title: "Zähleranmeldung/-abmeldung",
    description: "Zählertausch, iMSys-Zähler und vollständige Abwicklung mit dem Netzbetreiber.",
    price: "239",
  },
  {
    Icon: IconShield,
    serviceKey: "14a",
    title: "§14a-Registrierung",
    description: "Separate §14a-Anmeldung für steuerbare Verbrauchseinrichtungen.",
    price: "189",
  },
  {
    Icon: IconZap,
    serviceKey: "baustrom",
    title: "Baustrom-Anmeldung",
    description: "Anmeldung Ihres Baustromanschlusses – unkompliziert und schnell.",
    price: "199",
  },
  {
    Icon: IconActivity,
    serviceKey: "echeck",
    title: "E-Check / VDE-Prüfung",
    description: "Professioneller elektrischer Sicherheitscheck nach VDE-Norm.",
    price: "499",
  },
  {
    Icon: IconMessageCircle,
    serviceKey: "beratung",
    title: "Technische Beratung",
    description: "Fachberatung für bestehende Installationen – klar und verständlich erklärt.",
    price: "289",
    priceNote: "/ Anlage",
  },
  {
    Icon: IconTool,
    serviceKey: "zaehlerkasten",
    title: "Zählerschrank Montage",
    description: "Montage eines Zählerschranks für 1-Familienhaus nach VDE-AR-N 4100. Sie erhalten ein individuelles Angebot.",
    price: "2.490",
    priceNote: "zzgl. Fahrtkosten",
  },
  {
    Icon: IconPlusCircle,
    serviceKey: "pv-erweiterung",
    title: "PV Anlagen Erweiterung",
    description: "Anmeldung und Abwicklung einer Erweiterung Ihrer bestehenden PV-Anlage beim Netzbetreiber.",
    price: "289",
  },
  {
    Icon: IconPlug,
    serviceKey: "hausanschluss",
    title: "Hausanschluss Strom",
    description: "Anmeldung Ihres Hausanschlusses beim zuständigen Netzbetreiber – vollständig von uns übernommen.",
    price: "289",
  },
];

const benefits = [
  {
    Icon: IconClock,
    title: "Bis zu 3 Stunden Zeitersparnis",
    description:
      "Die Anmeldung beim Netzbetreiber ist bürokratisch und zeitaufwendig. Wir erledigen das vollständig für Sie – Sie warten nur auf die Bestätigung.",
  },
  {
    Icon: IconShield,
    title: "Keine Formfehler, keine Nachfragen",
    description:
      "Fehlerhafte Unterlagen führen zu Verzögerungen und Rückfragen. Unser Team kennt die Anforderungen aller deutschen Netzbetreiber und reicht alles korrekt ein.",
  },
  {
    Icon: IconMapPin,
    title: "Deutschlandweit",
    description:
      "Egal wo Ihre Anlage steht – wir arbeiten mit allen Netzbetreibern in Deutschland zusammen und kennen deren individuelle Anforderungen.",
  },
  {
    Icon: IconCheckCircle,
    title: "Festpreise, keine Überraschungen",
    description:
      "Sie wissen vorher genau, was Sie zahlen. Keine versteckten Kosten, kein Stundensatz – ein Pauschalpreis pro Anmeldung, unabhängig vom Aufwand.",
  },
];

const steps = [
  {
    number: "01",
    Icon: IconMail,
    title: "Anfrage stellen",
    description:
      "Kontaktieren Sie uns per Telefon, E-Mail oder über das Formular. Schildern Sie kurz Ihre Anlage – wir melden uns innerhalb eines Werktages.",
  },
  {
    number: "02",
    Icon: IconCheckCircle,
    title: "Unterlagen übermitteln",
    description:
      "Sie erhalten eine genaue Checkliste, welche Dokumente wir benötigen. Meist sind das nur Datenblatt und Installationsadresse.",
  },
  {
    number: "03",
    Icon: IconAward,
    title: "Wir erledigen den Rest",
    description:
      "Wir stellen alle Antragsunterlagen zusammen, kommunizieren mit dem Netzbetreiber und informieren Sie, sobald die Genehmigung vorliegt.",
  },
];

const privateFaqs: FAQItem[] = [
  {
    question: "Muss ich die Anmeldung selbst durchführen?",
    answer:
      "Nein – die Anmeldung darf auch durch einen Dritten erfolgen. Als Anlagenbetreiber sind Sie rechtlich verantwortlich dafür, dass die Anmeldung stattfindet. Die eigentliche Kommunikation mit dem Netzbetreiber können Sie vollständig an EVU-HELD übergeben.",
  },
  {
    question: "Was passiert, wenn ich die Anmeldefrist verpasse?",
    answer:
      "Die Folgen können erheblich sein: Der Netzbetreiber kann den Netzanschluss verweigern, die Einspeisevergütung entfällt rückwirkend, und es drohen Bußgelder der Bundesnetzagentur. Staatliche Förderungen können zurückgefordert werden. Eine nachträgliche Anmeldung ist möglich, hebt bereits entstandene Konsequenzen aber nicht auf.",
  },
  {
    question: "Muss ich meinen Installateur zur Anmeldung einbeziehen?",
    answer:
      "Nicht zwingend. Für die Netzanmeldung benötigen wir in der Regel das Datenblatt Ihrer Anlage und die Installationsadresse. Einige Netzbetreiber verlangen zusätzlich ein Inbetriebnahmeprotokoll – dieses erhalten Sie üblicherweise von Ihrem Installateur. Wir führen Sie durch den gesamten Prozess.",
  },
  {
    question: "Wie lange dauert die Genehmigung?",
    answer:
      "Die Bearbeitungszeit liegt beim jeweiligen Netzbetreiber und variiert zwischen wenigen Tagen und mehreren Wochen. Wir reichen alle Unterlagen sofort vollständig ein, um Verzögerungen zu vermeiden, und halten Sie auf dem Laufenden.",
  },
  {
    question: "Was kostet die Beauftragung?",
    answer:
      "Unsere Festpreise beginnen bei 189 € (§14a-Registrierung) und reichen bis 339 € (PV-Netzanmeldung), jeweils zzgl. MwSt. Der Preis gilt pro Anmeldung, unabhängig davon, wie viele Rückfragen oder Schritte der Netzbetreiber erfordert.",
  },
  {
    question: "Gilt die Anmeldepflicht auch bei kleinen Anlagen?",
    answer:
      "Ja – grundsätzlich müssen alle Erzeugungsanlagen (auch kleine Balkonkraftwerke ab 600 W) im Marktstammdatenregister registriert werden. Für die Netzanmeldung beim Netzbetreiber gelten je nach Anlagengröße und -typ unterschiedliche Schwellenwerte. Sprechen Sie uns an – wir klären, was in Ihrem Fall gilt.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://evu-held.de/privatkunden",
      "url": "https://evu-held.de/privatkunden",
      "name": "Privatkunden – Netzanmeldung für PV, Wärmepumpe & Wallbox | EVU-HELD",
      "description":
        "Wir übernehmen die Netzanmeldung für Privatpersonen – PV-Anlage, Wärmepumpe und Wallbox. Festpreise, persönliche Betreuung, deutschlandweit.",
      "inLanguage": "de-DE",
      "isPartOf": { "@id": "https://evu-held.de/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://evu-held.de/" },
          { "@type": "ListItem", "position": 2, "name": "Privatkunden", "item": "https://evu-held.de/privatkunden" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": privateFaqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer },
      })),
    },
  ],
};

// ── Page ─────────────────────────────────────────────────────────────────────

export default function PrivatkundenPage() {
  return (
    <div className="min-h-screen bg-white text-[#3D3935]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1e38] via-[#1a2f52] to-[#0f1e38] text-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B8922A]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#B8922A]/7 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 pt-32 pb-20">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-neutral-500">
                <li><a href="/" className="hover:text-neutral-300 transition-colors">Startseite</a></li>
                <li className="text-neutral-600" aria-hidden="true">/</li>
                <li className="text-neutral-300" aria-current="page">Privatkunden</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-[#B8922A]/20 text-[#D4A843] border-[#B8922A]/30">
                Für Privatpersonen
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                Netzanmeldung –{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8922A] to-[#D4A843]">
                  wir übernehmen alles
                </span>
              </h1>
              <p className="text-lg text-neutral-300 leading-relaxed mb-10 max-w-2xl">
                PV-Anlage, Wärmepumpe oder Wallbox installiert? Die Anmeldung beim Netzbetreiber ist Pflicht – und komplizierter als sie klingt. Wir erledigen das vollständig für Sie, zu einem festen Preis.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-semibold px-8 py-3.5 text-base shadow-lg shadow-[#B8922A]/30 transition-all"
                >
                  Jetzt Anmeldung starten
                </a>
                <a
                  href="#leistungen"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 text-white hover:bg-white/8 font-semibold px-8 py-3.5 text-base transition-all"
                >
                  Preise ansehen
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section id="leistungen" className="py-20 bg-stone-50 border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">
                Leistungen & Preise
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1e38] mb-3">
                Unsere Leistungen für Privatkunden
              </h2>
              <p className="text-[#6B6560]">Alle Preise netto – zzgl. gesetzlicher MwSt.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {services.map((service) => (
                <a
                  key={service.serviceKey}
                  href={`/contact?service=${service.serviceKey}`}
                  className="group bg-white border border-stone-200 rounded-2xl p-5 flex flex-col items-center text-center shadow-md shadow-stone-200/70 hover:shadow-xl hover:shadow-stone-300/60 hover:border-[#B8922A]/40 hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#B8922A]/10 flex items-center justify-center mb-3">
                    <service.Icon className="w-5 h-5 text-[#B8922A]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#3D3935] mb-1.5 leading-snug">{service.title}</h3>
                  <p className="text-xs text-[#8A8480] leading-snug mb-3">{service.description}</p>
                  <p className="text-2xl font-extrabold text-[#0f1e38] leading-none">{service.price} €</p>
                  {service.priceNote && (
                    <p className="text-xs text-[#A09890] mt-0.5">{service.priceNote}</p>
                  )}
                  <p className="text-[10px] text-[#A09890] mt-0.5 mb-2">zzgl. MwSt.</p>
                  <span className="mt-auto pt-3 text-xs font-semibold text-[#B8922A] group-hover:text-[#9A7820] transition-colors">
                    Anfragen →
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="/leistungen"
                className="text-sm font-semibold text-[#B8922A] hover:text-[#9A7820] transition-colors"
              >
                Vollständiger Leistungsumfang & Details →
              </a>
            </div>
          </div>
        </section>

        {/* ── Why EVU-HELD ── */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="text-center mb-14">
              <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">
                Warum EVU-HELD?
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1e38] mb-4">
                Die Anmeldung ist komplexer als gedacht
              </h2>
              <p className="text-[#6B6560] max-w-2xl mx-auto text-lg leading-relaxed">
                Viele Anlagenbesitzer unterschätzen den bürokratischen Aufwand. Fehlende Dokumente, falsche Formulare oder verpasste Fristen können die Inbetriebnahme verzögern und rechtliche Konsequenzen haben.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-2xl bg-[#B8922A]/10 border border-[#B8922A]/20 flex items-center justify-center mb-4">
                    <b.Icon className="w-5 h-5 text-[#B8922A]" />
                  </div>
                  <h3 className="font-bold text-[#3D3935] mb-2 leading-snug">{b.title}</h3>
                  <p className="text-sm text-[#8A8480] leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What is Netzanmeldung ── */}
        <section className="py-20 bg-white border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">
                  Was ist die Anmeldepflicht?
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1e38] mb-6">
                  Jede Anlage muss angemeldet werden
                </h2>
                <p className="text-[#6B6560] mb-4 text-lg leading-relaxed">
                  Wer eine PV-Anlage, Wärmepumpe oder Wallbox betreibt, ist gesetzlich verpflichtet, diese beim zuständigen Netzbetreiber anzumelden. Das gilt für Neuinstallationen ebenso wie für ältere Anlagen, die noch nicht registriert sind.
                </p>
                <p className="text-[#6B6560] mb-6 leading-relaxed">
                  Seit dem 1. Januar 2024 gilt zusätzlich der <strong className="text-[#0f1e38]">§14a EnWG</strong>: Wallboxen über 3,7 kW und Wärmepumpen müssen als steuerbare Verbrauchseinrichtungen registriert werden. Als Gegenleistung erhalten Betreiber vergünstigte Netzentgelte.
                </p>
                <ul className="space-y-3">
                  {[
                    "Anmeldepflicht gilt deutschlandweit für alle Anlagentypen",
                    "Fristen sind bindend – Versäumnisse haben rechtliche Folgen",
                    "Registrierung im Marktstammdatenregister ist zusätzlich verpflichtend",
                    "§14a EnWG bringt vergünstigte Netzentgelte für Betreiber",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <IconCheckCircle className="w-5 h-5 text-[#B8922A] mt-0.5 shrink-0" />
                      <span className="text-[#5A5550] text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-stone-50 border border-stone-200 rounded-3xl p-8">
                <h3 className="font-bold text-[#0f1e38] text-lg mb-6">Was wir für Sie übernehmen</h3>
                <ul className="space-y-4">
                  {[
                    { label: "Netzanmeldung", desc: "Vollständige Abwicklung beim zuständigen Netzbetreiber" },
                    { label: "Marktstammdatenregister", desc: "Eintragung Ihrer Anlage im MaStR der Bundesnetzagentur" },
                    { label: "§14a EnWG", desc: "Registrierung als steuerbare Verbrauchseinrichtung" },
                    { label: "Dokumentation", desc: "Alle Nachweise und Bestätigungen für Ihre Unterlagen" },
                    { label: "Kommunikation", desc: "Direkter Kontakt mit dem Netzbetreiber – Sie müssen nichts tun" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#B8922A]/15 border border-[#B8922A]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <IconCheckCircle className="w-3 h-3 text-[#B8922A]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#3D3935] text-sm">{item.label}</p>
                        <p className="text-xs text-[#8A8480] mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f1e38] via-[#1a2f52] to-[#0f1e38] pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B8922A]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#B8922A]/7 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-white/10 text-neutral-300 border-white/20">
                So geht&#39;s
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                In drei Schritten zur genehmigten Anlage
              </h2>
              <p className="text-lg text-[#A09890] max-w-2xl mx-auto">
                Unkompliziert, transparent und vollständig von uns betreut.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-white/8 border border-white/15 rounded-3xl p-8 text-center hover:bg-white/12 transition-all duration-300"
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#B8922A] flex items-center justify-center mb-6 mx-auto shadow-lg shadow-black/40">
                    <step.Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs font-bold text-[#B8922A] tracking-widest mb-3 uppercase block">
                    Schritt {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-[#A09890] text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 bg-white border-t border-stone-100">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="text-center mb-14">
              <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">FAQ</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#3D3935] mb-4">Häufige Fragen</h2>
              <p className="text-lg text-[#8A8480]">
                Alles, was Privatpersonen vor der Beauftragung wissen möchten.
              </p>
            </div>
            <FAQList faqs={privateFaqs} />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="relative overflow-hidden bg-gradient-to-br from-[#0f1e38] via-[#1a2f52] to-[#0f1e38] rounded-3xl py-20 text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8922A]/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B8922A]/7 rounded-full blur-3xl pointer-events-none" />
              <div className="relative px-8">
                <Badge className="mb-6 bg-[#B8922A]/20 text-[#D4A843] border-[#B8922A]/30">
                  Jetzt loslegen
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Anlage anmelden lassen – einfach & sicher
                </h2>
                <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                  Nehmen Sie jetzt Kontakt auf. Wir übernehmen die komplette Netzanmeldung für Sie – schnell, korrekt, deutschlandweit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-bold px-10 py-4 text-base shadow-xl shadow-black/30 transition-all"
                  >
                    Jetzt Kontakt aufnehmen
                  </a>
                  <a
                    href="tel:+4915213323256"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 text-white hover:bg-white/8 font-semibold px-8 py-4 text-base transition-all"
                  >
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
