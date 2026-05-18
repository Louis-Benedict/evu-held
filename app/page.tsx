import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { blogPosts, formatDate } from "@/lib/blog";
import FAQList from "@/components/FAQList";

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

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
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

function IconAward({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
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

// ── Energy Flow Diagram ────────────────────────────────────────────────────────

function EnergyFlowDiagram() {
  return (
    <>
      <style>{`
        @keyframes ef-appear {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ef-draw {
          from { stroke-dashoffset: 32; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes ef-ring {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50%       { opacity: 0.6;  transform: scale(1.6); }
        }
        @keyframes ef-done {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        .ef-n1 { opacity:0; animation: ef-appear .5s ease forwards .2s; }
        .ef-n2 { opacity:0; animation: ef-appear .5s ease forwards .9s; }
        .ef-n3 { opacity:0; animation: ef-appear .5s ease forwards 1.6s; }
        .ef-n4 { opacity:0; animation: ef-appear .5s ease forwards 2.3s; }
        .ef-l1 { stroke-dasharray:32; stroke-dashoffset:32; animation: ef-draw .35s ease forwards .72s; }
        .ef-l2 { stroke-dasharray:32; stroke-dashoffset:32; animation: ef-draw .35s ease forwards 1.42s; }
        .ef-l3 { stroke-dasharray:32; stroke-dashoffset:32; animation: ef-draw .35s ease forwards 2.12s; }
        .ef-badge { opacity:0; animation: ef-done .6s ease forwards 2.8s; }
        .ef-r1 { animation: ef-ring 2.6s ease-in-out infinite  .2s; transform-origin: 208px 37px; }
        .ef-r2 { animation: ef-ring 2.6s ease-in-out infinite  .9s; transform-origin: 208px 125px; }
        .ef-r3 { animation: ef-ring 2.6s ease-in-out infinite 1.6s; transform-origin: 208px 213px; }
        .ef-r4 { animation: ef-ring 2.6s ease-in-out infinite 2.3s; transform-origin: 208px 301px; }
      `}</style>

      <div className="w-full max-w-xs mx-auto lg:mx-0">
        <svg viewBox="0 0 220 375" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="ef-glow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <g className="ef-n1">
            <rect x="4" y="8" width="212" height="58" rx="12" fill="#B8922A" fillOpacity="0.15" stroke="#B8922A" strokeOpacity="0.40" />
            <circle cx="34" cy="37" r="17" fill="#B8922A" fillOpacity="0.25" />
            <circle cx="34" cy="37" r="5.5" stroke="#B8922A" strokeWidth="1.6" />
            <line x1="34" y1="24" x2="34" y2="22" stroke="#B8922A" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="34" y1="50" x2="34" y2="52" stroke="#B8922A" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="21" y1="37" x2="19" y2="37" stroke="#B8922A" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="47" y1="37" x2="49" y2="37" stroke="#B8922A" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="25.5" y1="28.5" x2="24.1" y2="27.1" stroke="#B8922A" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="42.5" y1="45.5" x2="43.9" y2="46.9" stroke="#B8922A" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="42.5" y1="28.5" x2="43.9" y2="27.1" stroke="#B8922A" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="25.5" y1="45.5" x2="24.1" y2="46.9" stroke="#B8922A" strokeWidth="1.4" strokeLinecap="round" />
            <text x="62" y="31" fill="white" fontSize="10.5" fontWeight="600">PV-Anlage</text>
            <text x="62" y="47" fill="rgba(255,255,255,0.5)" fontSize="9">Photovoltaik-System</text>
            <circle cx="208" cy="37" r="6" fill="#B8922A" fillOpacity="0.2" className="ef-r1" />
            <circle cx="208" cy="37" r="3" fill="#B8922A" />
          </g>

          <line className="ef-l1" x1="110" y1="66" x2="110" y2="96" stroke="#B8922A" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
          <circle r="3.5" fill="#B8922A" filter="url(#ef-glow)">
            <animateMotion dur="1.1s" repeatCount="indefinite" begin="0.72s" path="M 110 66 L 110 96" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1" dur="1.1s" repeatCount="indefinite" begin="0.72s" />
          </circle>

          <g className="ef-n2">
            <rect x="4" y="96" width="212" height="58" rx="12" fill="#B8922A" fillOpacity="0.15" stroke="#B8922A" strokeOpacity="0.40" />
            <circle cx="34" cy="125" r="17" fill="#B8922A" fillOpacity="0.25" />
            <rect x="31.5" y="113" width="5" height="13" rx="2.5" fill="none" stroke="#B8922A" strokeWidth="1.5" />
            <rect x="32.5" y="120" width="3" height="6" rx="1.5" fill="#B8922A" fillOpacity="0.6" />
            <circle cx="34" cy="130" r="5" fill="#B8922A" fillOpacity="0.3" stroke="#B8922A" strokeWidth="1.5" />
            <circle cx="34" cy="130" r="2" fill="#B8922A" />
            <text x="62" y="119" fill="white" fontSize="10.5" fontWeight="600">Wärmepumpe</text>
            <text x="62" y="135" fill="rgba(255,255,255,0.5)" fontSize="9">Heizung &amp; Warmwasser</text>
            <circle cx="208" cy="125" r="6" fill="#B8922A" fillOpacity="0.2" className="ef-r2" />
            <circle cx="208" cy="125" r="3" fill="#B8922A" />
          </g>

          <line className="ef-l2" x1="110" y1="154" x2="110" y2="184" stroke="#B8922A" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
          <circle r="3.5" fill="#B8922A" filter="url(#ef-glow)">
            <animateMotion dur="1.1s" repeatCount="indefinite" begin="1.42s" path="M 110 154 L 110 184" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1" dur="1.1s" repeatCount="indefinite" begin="1.42s" />
          </circle>

          <g className="ef-n3">
            <rect x="4" y="184" width="212" height="58" rx="12" fill="#B8922A" fillOpacity="0.15" stroke="#B8922A" strokeOpacity="0.40" />
            <circle cx="34" cy="213" r="17" fill="#B8922A" fillOpacity="0.25" />
            <rect x="26" y="201" width="16" height="21" rx="2" fill="none" stroke="#B8922A" strokeWidth="1.5" />
            <path d="M35 205 L31 212 L33.5 212 L33 218 L37.5 210 L35 210 Z" stroke="#B8922A" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            <line x1="26" y1="222" x2="42" y2="222" stroke="#B8922A" strokeWidth="1.5" strokeLinecap="round" />
            <text x="62" y="207" fill="white" fontSize="10.5" fontWeight="600">Wallbox</text>
            <text x="62" y="223" fill="rgba(255,255,255,0.5)" fontSize="9">E-Mobilität &amp; Laden</text>
            <circle cx="208" cy="213" r="6" fill="#B8922A" fillOpacity="0.2" className="ef-r3" />
            <circle cx="208" cy="213" r="3" fill="#B8922A" />
          </g>

          <line className="ef-l3" x1="110" y1="242" x2="110" y2="272" stroke="#B8922A" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
          <circle r="3.5" fill="#B8922A" filter="url(#ef-glow)">
            <animateMotion dur="1.1s" repeatCount="indefinite" begin="2.12s" path="M 110 242 L 110 272" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1" dur="1.1s" repeatCount="indefinite" begin="2.12s" />
          </circle>

          <g className="ef-n4">
            <rect x="4" y="272" width="212" height="58" rx="12" fill="#B8922A" fillOpacity="0.15" stroke="#B8922A" strokeOpacity="0.40" />
            <circle cx="34" cy="301" r="17" fill="#B8922A" fillOpacity="0.25" />
            <path d="M22 306 a12 12 0 0 1 24 0" stroke="#B8922A" strokeWidth="1.7" strokeLinecap="round" />
            <circle cx="34" cy="306" r="2.5" fill="#B8922A" />
            <line x1="34" y1="303.5" x2="28" y2="297" stroke="#B8922A" strokeWidth="1.7" strokeLinecap="round" />
            <path d="M23 294 L26 290 L26 292.5" stroke="#B8922A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M45 294 L42 290 L42 292.5" stroke="#B8922A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <text x="62" y="295" fill="white" fontSize="10.5" fontWeight="600">Zählerwechsel</text>
            <text x="62" y="311" fill="rgba(255,255,255,0.5)" fontSize="9">Zählerinstallation</text>
            <circle cx="208" cy="301" r="6" fill="#B8922A" fillOpacity="0.2" className="ef-r4" />
            <circle cx="208" cy="301" r="3" fill="#B8922A" />
          </g>

          <g className="ef-badge">
            <rect x="14" y="346" width="192" height="24" rx="12" fill="#B8922A" fillOpacity="0.25" stroke="#B8922A" strokeOpacity="0.55" strokeWidth="1" />
            <polyline points="36,358 43,365 56,350" stroke="#B8922A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <text x="64" y="362" fill="#D4A843" fontSize="10" fontWeight="600">Wir melden alles an</text>
          </g>
        </svg>
      </div>
    </>
  );
}

// ── Static data ────────────────────────────────────────────────────────────────

const b2cServices = [
  {
    Icon: IconBolt,
    serviceKey: "pv",
    title: "PV-Netzanmeldung",
    description: "Vollständige Abwicklung Ihrer Photovoltaik-Anmeldung beim Netzbetreiber.",
    price: "339",
  },
  {
    Icon: IconThermometer,
    serviceKey: "wp",
    title: "Wärmepumpen-Anmeldung",
    description: "Reibungslose Registrierung Ihrer Wärmepumpe – schnell und rechtssicher.",
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
    description: "Fachberatung für bestehende Installationen – klar und verständlich.",
    price: "289",
    priceNote: "/ Anlage",
  },
];

const steps = [
  {
    number: "01",
    Icon: IconMail,
    title: "Kontakt aufnehmen",
    description:
      "Schildern Sie uns Ihr Projekt per Telefon, E-Mail oder über unser Kontaktformular – unkompliziert und ohne Verpflichtung.",
  },
  {
    number: "02",
    Icon: IconCheckCircle,
    title: "Wir übernehmen alles",
    description:
      "Unser erfahrenes Team erledigt alle Formulare, Nachweise und kommuniziert direkt mit dem Netzbetreiber.",
  },
  {
    number: "03",
    Icon: IconAward,
    title: "Genehmigung & Abschluss",
    description:
      "Sie erhalten die vollständige Dokumentation und Bestätigung Ihrer genehmigten Netzanmeldung.",
  },
];

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
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1C1A14] via-[#26211A] to-[#1C1A14] text-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B8922A]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B8922A]/7 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 pt-32 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[#B8922A]/30 bg-[#B8922A]/20 text-xs font-semibold text-[#D4A843] tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8922A] animate-pulse" />
                  Professionelle Netzanmeldung · Deutschlandweit
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4 tracking-tight text-white">
                  Anmeldung beim{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8922A] to-[#D4A843]">
                    Netzbetreiber
                  </span>{" "}
                  – PV, Wärmepumpe & Wallbox
                </h1>
                <p className="text-base text-neutral-300 mb-8 leading-relaxed max-w-lg">
                  Vollständige Abwicklung beim Netzbetreiber – inklusive §14a&nbsp;EnWG und Marktstammdatenregister. Schnell, korrekt, ohne Aufwand für Sie.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-semibold px-8 py-3.5 text-base shadow-lg shadow-[#B8922A]/30 transition-all hover:shadow-xl"
                  >
                    Jetzt anmelden
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <EnergyFlowDiagram />
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                {[
                  { value: "Bis zu 3 Std.", label: "Zeitersparnis pro Projekt" },
                  { value: "Persönliche Betreuung", label: "Für jeden Kunden" },
                  { value: "Direkter Kontakt", label: "Zum Netzbetreiber" },
                ].map((stat) => (
                  <div key={stat.value} className="flex flex-col items-center text-center py-5 sm:py-6 px-8">
                    <span className="text-xl font-bold text-white">{stat.value}</span>
                    <span className="text-white/50 text-sm mt-0.5">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section id="leistungen" className="py-20 bg-stone-50 border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">
                Leistungen & Preise
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1A14]">
                Unsere Leistungen
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {b2cServices.map((service) => (
                <a
                  key={service.serviceKey}
                  href={`/contact?service=${service.serviceKey}`}
                  className="group bg-white border border-stone-200 rounded-2xl p-5 flex flex-col items-center text-center shadow-md shadow-stone-200/70 hover:shadow-xl hover:shadow-stone-300/60 hover:border-[#B8922A]/40 hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#B8922A]/10 flex items-center justify-center mb-3">
                    <service.Icon className="w-5 h-5 text-[#B8922A]" />
                  </div>
                  <h3 className="md:text-lg text-md font-semibold text-[#3D3935] mb-1.5 leading-snug">{service.title}</h3>
                  <p className="text-xs text-[#8A8480] leading-snug mb-3">{service.description}</p>
                  <p className="text-2xl font-extrabold text-[#1C1A14] leading-none">{service.price} €</p>
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

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="/leistungen"
                className="text-sm font-semibold text-[#B8922A] hover:text-[#9A7820] transition-colors"
              >
                Alle Details & Leistungsumfang →
              </a>
              <span className="hidden sm:block text-stone-300">|</span>
              <a
                href="/contact?service=mehrere"
                className="text-sm font-semibold text-[#6B6560] hover:text-[#3D3935] transition-colors"
              >
                Mehrere Leistungen kombinieren? Kombiangebot anfragen →
              </a>
            </div>

            {/* B2B teaser */}
            <div className="mt-8 bg-[#1C1A14] rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-white font-semibold text-lg">Gewerbepartner?</h3>
                <p className="text-neutral-400 text-xs mt-0.5">
                  Volumenmodell ab 750 €/Monat – abgerechnet pro Kunde, unabhängig von der Anzahl der Anmeldungen.
                </p>
              </div>
              <a
                href="/partner"
                className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#D4A843] hover:text-[#B8922A] transition-colors"
              >
                Partner werden
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section id="funktionsweise" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1C1A14] via-[#26211A] to-[#1C1A14] pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B8922A]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#B8922A]/7 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-white/10 text-neutral-300 border-white/20">
                So geht&#39;s
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-4">
                In drei Schritten zur genehmigten Anlage
              </h2>
              <p className="text-lg text-[#A09890] max-w-2xl mx-auto">
                Unser Prozess ist einfach, transparent und vollständig von uns betreut.
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

        {/* ── Blog ── */}
        <section className="py-20 bg-gradient-to-br from-neutral-50 via-neutral-100/40 to-neutral-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <Badge className="mb-3 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">
                  Ratgeber & Wissen
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1A14]">
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
            <div className="relative overflow-hidden bg-gradient-to-br from-[#1C1A14] via-[#26211A] to-[#1C1A14] rounded-3xl py-20 text-center">
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
