import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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

function IconMessageCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconWrench({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
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

function IconHandshake({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
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

      <div className="backdrop-blur-xl bg-white/70 border border-[#D4B483]/30 rounded-3xl shadow-lg p-5 w-full max-w-xs mx-auto lg:mx-0">
        <svg viewBox="0 0 220 375" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="ef-glow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* ── Node 1 – PV-Anlage ── */}
          <g className="ef-n1">
            <rect x="4" y="8" width="212" height="58" rx="12" fill="#B8922A" fillOpacity="0.06" stroke="#B8922A" strokeOpacity="0.20" />
            <circle cx="34" cy="37" r="17" fill="#B8922A" fillOpacity="0.18" />
            {/* sun */}
            <circle cx="34" cy="37" r="5.5" stroke="#B8922A" strokeWidth="1.6" />
            <line x1="34" y1="24" x2="34" y2="22" stroke="#B8922A" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="34" y1="50" x2="34" y2="52" stroke="#B8922A" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="21" y1="37" x2="19" y2="37" stroke="#B8922A" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="47" y1="37" x2="49" y2="37" stroke="#B8922A" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="25.5" y1="28.5" x2="24.1" y2="27.1" stroke="#B8922A" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="42.5" y1="45.5" x2="43.9" y2="46.9" stroke="#B8922A" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="42.5" y1="28.5" x2="43.9" y2="27.1" stroke="#B8922A" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="25.5" y1="45.5" x2="24.1" y2="46.9" stroke="#B8922A" strokeWidth="1.4" strokeLinecap="round" />
            <text x="62" y="31" fill="#3D3935" fontSize="10.5" fontWeight="600">PV-Anlage</text>
            <text x="62" y="47" fill="#8A8480" fontSize="9">Photovoltaik-System</text>
            <circle cx="208" cy="37" r="6" fill="#B8922A" fillOpacity="0.2" className="ef-r1" />
            <circle cx="208" cy="37" r="3" fill="#B8922A" />
          </g>

          {/* ── Line 1 ── */}
          <line className="ef-l1" x1="110" y1="66" x2="110" y2="96" stroke="#B8922A" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
          <circle r="3.5" fill="#B8922A" filter="url(#ef-glow)">
            <animateMotion dur="1.1s" repeatCount="indefinite" begin="0.72s" path="M 110 66 L 110 96" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1" dur="1.1s" repeatCount="indefinite" begin="0.72s" />
          </circle>

          {/* ── Node 2 – Wärmepumpe ── */}
          <g className="ef-n2">
            <rect x="4" y="96" width="212" height="58" rx="12" fill="#B8922A" fillOpacity="0.06" stroke="#B8922A" strokeOpacity="0.20" />
            <circle cx="34" cy="125" r="17" fill="#B8922A" fillOpacity="0.18" />
            {/* thermometer */}
            <rect x="31.5" y="113" width="5" height="13" rx="2.5" fill="none" stroke="#B8922A" strokeWidth="1.5" />
            <rect x="32.5" y="120" width="3" height="6" rx="1.5" fill="#B8922A" fillOpacity="0.6" />
            <circle cx="34" cy="130" r="5" fill="#B8922A" fillOpacity="0.3" stroke="#B8922A" strokeWidth="1.5" />
            <circle cx="34" cy="130" r="2" fill="#B8922A" />
            <text x="62" y="119" fill="#3D3935" fontSize="10.5" fontWeight="600">Wärmepumpe</text>
            <text x="62" y="135" fill="#8A8480" fontSize="9">Heizung &amp; Warmwasser</text>
            <circle cx="208" cy="125" r="6" fill="#B8922A" fillOpacity="0.2" className="ef-r2" />
            <circle cx="208" cy="125" r="3" fill="#B8922A" />
          </g>

          {/* ── Line 2 ── */}
          <line className="ef-l2" x1="110" y1="154" x2="110" y2="184" stroke="#B8922A" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
          <circle r="3.5" fill="#B8922A" filter="url(#ef-glow)">
            <animateMotion dur="1.1s" repeatCount="indefinite" begin="1.42s" path="M 110 154 L 110 184" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1" dur="1.1s" repeatCount="indefinite" begin="1.42s" />
          </circle>

          {/* ── Node 3 – Wallbox ── */}
          <g className="ef-n3">
            <rect x="4" y="184" width="212" height="58" rx="12" fill="#B8922A" fillOpacity="0.06" stroke="#B8922A" strokeOpacity="0.20" />
            <circle cx="34" cy="213" r="17" fill="#B8922A" fillOpacity="0.18" />
            {/* EV charging station */}
            <rect x="26" y="201" width="16" height="21" rx="2" fill="none" stroke="#B8922A" strokeWidth="1.5" />
            <path d="M35 205 L31 212 L33.5 212 L33 218 L37.5 210 L35 210 Z" stroke="#B8922A" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            <line x1="26" y1="222" x2="42" y2="222" stroke="#B8922A" strokeWidth="1.5" strokeLinecap="round" />
            <text x="62" y="207" fill="#3D3935" fontSize="10.5" fontWeight="600">Wallbox</text>
            <text x="62" y="223" fill="#8A8480" fontSize="9">E-Mobilität &amp; Laden</text>
            <circle cx="208" cy="213" r="6" fill="#B8922A" fillOpacity="0.2" className="ef-r3" />
            <circle cx="208" cy="213" r="3" fill="#B8922A" />
          </g>

          {/* ── Line 3 ── */}
          <line className="ef-l3" x1="110" y1="242" x2="110" y2="272" stroke="#B8922A" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
          <circle r="3.5" fill="#B8922A" filter="url(#ef-glow)">
            <animateMotion dur="1.1s" repeatCount="indefinite" begin="2.12s" path="M 110 242 L 110 272" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1" dur="1.1s" repeatCount="indefinite" begin="2.12s" />
          </circle>

          {/* ── Node 4 – Zählerwechsel ── */}
          <g className="ef-n4">
            <rect x="4" y="272" width="212" height="58" rx="12" fill="#B8922A" fillOpacity="0.06" stroke="#B8922A" strokeOpacity="0.20" />
            <circle cx="34" cy="301" r="17" fill="#B8922A" fillOpacity="0.18" />
            {/* meter with swap arrows */}
            <path d="M22 306 a12 12 0 0 1 24 0" stroke="#B8922A" strokeWidth="1.7" strokeLinecap="round" />
            <circle cx="34" cy="306" r="2.5" fill="#B8922A" />
            <line x1="34" y1="303.5" x2="28" y2="297" stroke="#B8922A" strokeWidth="1.7" strokeLinecap="round" />
            <path d="M23 294 L26 290 L26 292.5" stroke="#B8922A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M45 294 L42 290 L42 292.5" stroke="#B8922A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <text x="62" y="295" fill="#3D3935" fontSize="10.5" fontWeight="600">Zählerwechsel</text>
            <text x="62" y="311" fill="#8A8480" fontSize="9">Zählerinstallation</text>
            <circle cx="208" cy="301" r="6" fill="#B8922A" fillOpacity="0.2" className="ef-r4" />
            <circle cx="208" cy="301" r="3" fill="#B8922A" />
          </g>

          {/* ── Status badge ── */}
          <g className="ef-badge">
            <rect x="14" y="346" width="192" height="24" rx="12" fill="#B8922A" fillOpacity="0.18" stroke="#B8922A" strokeOpacity="0.45" strokeWidth="1" />
            <polyline points="36,358 43,365 56,350" stroke="#B8922A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <text x="64" y="362" fill="#B8922A" fontSize="10" fontWeight="600">Wir melden alles an</text>
          </g>
        </svg>
      </div>
    </>
  );
}

// ── Static data ────────────────────────────────────────────────────────────────

const features = [
  {
    Icon: IconBolt,
    badge: "Solar",
    serviceKey: "pv",
    title: "PV-Netzanmeldung",
    price: "349 €",
    description:
      "Vollständige Abwicklung Ihrer Photovoltaik-Anmeldung beim Netzbetreiber.",
    items: [
      "Netzverträglichkeitsprüfung",
      "Anmeldung der Erzeugungsanlage",
      "Anmeldung der Speichereinheit (falls vorhanden)",
      "Anmeldung der Gesamtanlage beim Netzbetreiber",
      "Anmeldung nach §14a EnWG (steuerbare Verbraucher, falls relevant)",
      "Registrierung im Marktstammdatenregister",
      "Marktstammdatenregister-Anmeldung",
    ],
  },
  {
    Icon: IconThermometer,
    badge: "Heizung",
    serviceKey: "wp",
    title: "Wärmepumpen-Anmeldung",
    price: "349 €",
    description:
      "Reibungslose Registrierung Ihrer Wärmepumpe – schnell und rechtssicher.",
    items: [
      "Formularvervollständigung beim Netzbetreiber",
      "Dokumentation Zählermontage/-demontage",
      "Anmeldung nach §14a EnWG (steuerbare Verbraucher, falls relevant)"
    ],
  },
  {
    Icon: IconCar,
    badge: "E-Mobilität",
    serviceKey: "wallbox",
    title: "Wallbox-Anmeldung",
    price: "249 €",
    description:
      "Professionelle Anmeldung Ihrer Ladeinfrastruktur beim zuständigen Netzbetreiber.",
    items: [
      "Anmeldung beim zuständigen Netzbetreiber",
      "Vollständige Dokumentation & Kommunikation",
      "Persönliche Begleitung bis zum Abschluss",
      "Anmeldung nach §14a EnWG (steuerbare Verbraucher, falls relevant)"
    ],
  },
  {
    Icon: IconMeter,
    badge: "Zähler",
    serviceKey: "zaehler",
    title: "Zählertausch",
    price: "249 €",
    hideUnit: true,
    description:
      "",
    items: [
      "Zählertausch & iMSys-Zähler",
      "Vollständige Abwicklung mit dem Netzbetreiber",
    ],
  },
  {
    Icon: IconWrench,
    badge: "Sonstiges",
    serviceKey: "sonstige",
    title: "Sonstige Anlagen",
    price: "Preis auf Anfrage",
    hideUnit: true,
    description:
      "Netzanmeldung für weitere Anlagentypen – sprechen Sie uns einfach an.",
    items: [
      "Individuelle Beratung & Bearbeitung",
      "Vollständige Dokumentation",
      "Persönliche Begleitung bis zum Abschluss",
    ],
  },
  {
    Icon: IconHandshake,
    badge: "Partner",
    serviceKey: "partner",
    title: "Partner Werden",
    price: "",
    hideUnit: true,
    description:
      "Werde Partner und sichere dir einen Preisvorteil.",
    items: [
      "Exklusive Partnerkonditionen",
      "Kundenkonto für Partnerportal",
      "Persönlicher Ansprechpartner",
    ],
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

const benefits = [
  {
    Icon: IconClock,
    title: "Zeitersparnis",
    description:
      "Bis zu 3 Stunden Zeitersparnis pro Projekt. Konzentrieren Sie sich auf Ihr Kerngeschäft.",
  },
  {
    Icon: IconShield,
    title: "Fehlervermeidung",
    description:
      "Unsere Experten kennen alle Anforderungen der Netzbetreiber und vermeiden teure Fehler.",
  },
  {
    Icon: IconMessageCircle,
    title: "Direktkommunikation",
    description:
      "Direkter Kontakt zum Netzbetreiber – keine Missverständnisse, kürzere Bearbeitungszeiten.",
  },
  {
    Icon: IconStar,
    title: "Persönlicher Service",
    description:
      "Ein fester Ansprechpartner begleitet Sie vom ersten Kontakt bis zur abgeschlossenen Anmeldung.",
  },
];

// ── Page component ─────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#3D3935]">
      <Header />

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#FDF8EE] via-[#FAF3E0] to-[#FDF8EE] text-[#3D3935]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#B8922A]/8 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#B8922A]/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#B8922A]/6 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 pt-32 pb-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <Badge className="mb-6 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">
                  Professionelle Netzanmeldung
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 tracking-tight">
                  Anmeldung beim Netzbetreiber –{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8922A] to-[#D4A843]">
                    PV Anlage, Wärmepumpe & Wallbox
                  </span>{" "}
                  deutschlandweit anmelden
                </h1>
                <p className="text-xl text-[#6B6560] mb-10 leading-relaxed">
                  Professionelle <strong className="text-[#3D3935]">Anmeldung beim Netzbetreiber</strong> für PV Anlage, Wärmepumpe & Wallbox – inklusive §14a EnWG und Marktstammdatenregister. Bundesweit, schnell und ohne Aufwand für Sie.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-semibold px-8 py-3 text-base shadow-lg shadow-[#B8922A]/30 transition-all hover:shadow-xl hover:shadow-[#B8922A]/40"
                  >
                    Jetzt anmelden
                  </a>
                  <a
                    href="tel:+4945418856891"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#B8922A]/35 text-[#3D3935] hover:bg-[#B8922A]/8 hover:border-[#B8922A]/55 font-semibold px-8 py-3 text-base transition-all"
                  >
                    <IconPhone className="w-4 h-4" />
                    +49 4541 8856891
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <EnergyFlowDiagram />
              </div>
            </div>
          </div>

          {/* Stats card */}
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 pb-8">
            <div className="bg-white/70 backdrop-blur-xl border border-[#D4B483]/30 rounded-2xl px-6 py-5 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#D4B483]/30">
              {[
                { value: "Bis zu 3 Std.", label: "Zeitersparnis pro Projekt" },
                { value: "Persönliche Betreuung", label: "Für jeden Kunden" },
                { value: "Direkter Kontakt", label: "Zu Ihren Projekten" },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="flex flex-col items-center text-center py-2 sm:py-0 sm:px-8 first:pl-0 last:pr-0"
                >
                  <span className="text-xl font-bold text-[#3D3935]">{stat.value}</span>
                  <span className="text-[#8A8480] text-sm mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Problem ── */}
        <section className="py-20 relative overflow-hidden bg-amber-50">
          <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="text-center mb-10">
              <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">
                Wichtig zu wissen
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#3D3935] mb-6">
                Ist die Anmeldung Ihrer Anlage beim Netzbetreiber Pflicht?
              </h2>
            </div>
            <div className="backdrop-blur-xl bg-white/80 border border-white/60 rounded-3xl shadow-xl p-8 sm:p-10">
              <p className="text-[#5A5550] mb-6 text-lg">Viele Betreiber stellen sich die gleichen Fragen:</p>
              <ul className="space-y-3 mb-8">
                {[
                  { text: "Ist meine Wärmepumpe meldepflichtig?", bold: "Wärmepumpe meldepflichtig?" },
                  { text: "Muss ich meine Wallbox beim Netzbetreiber anmelden?", bold: "Wallbox beim Netzbetreiber anmelden?" },
                  { text: "Ist die PV Anlage in Deutschland anzumelden?", bold: "PV Anlage in Deutschland anzumelden?" },
                ].map((q) => (
                  <li key={q.text} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-[#F5E8D4] border border-[#D4B483] flex items-center justify-center shrink-0 text-[#8A8480] text-xs font-bold">?</span>
                    <span className="text-[#5A5550] font-medium">{q.text}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-neutral-100 pt-6 space-y-4">
                <p className="text-[#3D3935] font-semibold text-lg">
                  Die Antwort: In den meisten Fällen besteht eine gesetzliche Pflicht zur Anmeldung beim Netzbetreiber und im Marktstammdatenregister.
                </p>
                <p className="text-[#6B6560]">
                  Ohne korrekte Anmeldung kann es zu Verzögerungen, Problemen mit dem Netzanschluss oder rechtlichen Konsequenzen kommen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features / Services ── */}
        <section id="leistungen" className="py-24 relative overflow-hidden bg-white">
          {/* Background blobs for glass effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 left-8 w-80 h-80 bg-[#D4B483]/12 rounded-full blur-3xl" />
            <div className="absolute bottom-16 right-8 w-96 h-96 bg-[#D4B483]/15 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#B8922A]/6 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30 backdrop-blur-sm">
                Unsere Leistungen
              </Badge>
              <h2 className="text-4xl font-bold text-[#3D3935] mb-4">
                Wir übernehmen die komplette Netzbetreiber Anmeldung für Sie
              </h2>
              <p className="text-lg text-[#6B6560] max-w-2xl mx-auto">
                Als deutschlandweiter Spezialist übernehmen wir die vollständige Anmeldung Ihrer Anlage beim Netzbetreiber – unabhängig vom Standort.
              </p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-6">
                {[
                  "Anmeldung beim zuständigen Netzbetreiber",
                  "Registrierung im Marktstammdatenregister",
                  "Umsetzung der Vorgaben nach §14a EnWG",
                  "Anmeldung von Stromzählern und Hausanschlüssen",
                  "Kommunikation mit Energieversorgern und Behörden",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-sm text-[#6B6560]">
                    <IconCheckCircle className="w-4 h-4 text-[#B8922A] shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="backdrop-blur-2xl bg-white/65 border border-white/60 rounded-3xl shadow-2xl shadow-neutral-300/30 p-8 flex flex-col hover:bg-white/80 hover:shadow-neutral-300/50 transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#B8922A]/12 border border-[#B8922A]/25 flex items-center justify-center mb-4">
                      <feature.Icon className="w-6 h-6 text-[#B8922A]" />
                    </div>
                    <Badge className="mb-3 bg-[#F5E8D4]/80 text-[#7A5E18] border-[#D4B483]/60 text-xs">
                      {feature.badge}
                    </Badge>
                    <h3 className="text-xl font-bold text-[#3D3935] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#8A8480] text-sm mb-5">
                      {feature.description}
                    </p>
                    <ul className="space-y-2.5 mb-6">
                      {feature.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <IconCheckCircle className="w-4 h-4 text-[#B8922A] mt-0.5 shrink-0" />
                          <span className="text-sm text-[#6B6560] leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price + CTA pushed to bottom */}
                  <div className="mt-auto pt-5 border-t border-neutral-100/80">
                    <p className="text-3xl font-extrabold text-[#3D3935] mb-4">
                      {feature.price}
                      {!feature.hideUnit && (
                        <span className="text-sm font-normal text-[#A09890] ml-1">/ Anmeldung</span>
                      )}
                    </p>
                    <a
                      href={`/contact?service=${feature.serviceKey}`}
                      className="flex items-center justify-center w-full rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-semibold py-3 text-sm shadow-md shadow-black/20 transition-all hover:shadow-lg hover:shadow-black/30"
                    >
                      Kontakt aufnehmen
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PV Anlage ── */}
        <section id="pv-anlage" className="py-20 relative overflow-hidden bg-amber-50">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 right-20 w-72 h-72 bg-[#B8922A]/8 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#D4B483]/20 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">Solar</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#3D3935] mb-6">
                  PV Anlage beim Netzbetreiber anmelden
                </h2>
                <p className="text-[#6B6560] mb-4 text-lg">
                  Jede <strong className="text-[#3D3935]">PV Anlage (Solaranlage)</strong> muss beim Netzbetreiber angemeldet werden.
                </p>
                <p className="text-[#6B6560] mb-4">
                  Wir übernehmen die komplette <strong className="text-[#3D3935]">PV Anmeldung beim Netzbetreiber</strong>, inklusive aller erforderlichen Unterlagen und Abstimmungen.
                </p>
                <p className="text-[#6B6560] mb-8">
                  Auch die Eintragung im <strong className="text-[#3D3935]">Marktstammdatenregister</strong> wird von uns vollständig durchgeführt.
                </p>
                <a
                  href="/contact?service=pv"
                  className="inline-flex items-center justify-center rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-semibold px-8 py-3 text-base shadow-md transition-all"
                >
                  PV Anlage jetzt anmelden
                </a>
              </div>
              <div className="backdrop-blur-2xl bg-white/65 border border-white/60 rounded-3xl shadow-xl shadow-neutral-200/40 p-8">
                <h3 className="font-bold text-[#3D3935] mb-5">Was wir für Ihre PV-Anlage übernehmen:</h3>
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

        {/* ── Wärmepumpe ── */}
        <section id="waermepumpe" className="py-20 relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-10 left-20 w-72 h-72 bg-[#B8922A]/6 rounded-full blur-3xl" />
            <div className="absolute top-10 right-10 w-64 h-64 bg-[#D4B483]/12 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 backdrop-blur-2xl bg-white/65 border border-white/60 rounded-3xl shadow-xl shadow-neutral-200/40 p-8">
                <h3 className="font-bold text-[#3D3935] mb-5">Was wir für Ihre Wärmepumpe übernehmen:</h3>
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
                <h2 className="text-3xl sm:text-4xl font-bold text-[#3D3935] mb-6">
                  Wärmepumpe anmelden beim Netzbetreiber
                </h2>
                <p className="text-[#6B6560] mb-4 text-lg">
                  Wenn Sie eine Wärmepumpe installieren, ist in vielen Fällen eine <strong className="text-[#3D3935]">Anmeldung beim Netzbetreiber verpflichtend</strong>.
                </p>
                <p className="text-[#6B6560] mb-8">
                  Wir sorgen dafür, dass Ihre <strong className="text-[#3D3935]">Wärmepumpe korrekt angemeldet</strong> wird und alle gesetzlichen Vorgaben erfüllt sind.
                </p>
                <a
                  href="/contact?service=wp"
                  className="inline-flex items-center justify-center rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-semibold px-8 py-3 text-base shadow-md transition-all"
                >
                  Wärmepumpe jetzt anmelden
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Wallbox + §14a ── */}
        <section id="wallbox" className="py-20 relative overflow-hidden bg-amber-50">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 right-20 w-72 h-72 bg-[#B8922A]/8 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#D4B483]/20 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">E-Mobilität</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#3D3935] mb-6">
                  Wallbox anmelden nach §14a EnWG
                </h2>
                <p className="text-[#6B6560] mb-4 text-lg">
                  Durch die neue Regelung nach §14a EnWG müssen viele <strong className="text-[#3D3935]">Wallboxen als steuerbare Verbrauchseinrichtung angemeldet werden</strong>.
                </p>
                <p className="text-[#6B6560] mb-8">
                  Wir übernehmen die vollständige <strong className="text-[#3D3935]">Wallbox Anmeldung beim Netzbetreiber</strong> und stellen sicher, dass alle Anforderungen erfüllt sind.
                </p>
                <a
                  href="/contact?service=wallbox"
                  className="inline-flex items-center justify-center rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-semibold px-8 py-3 text-base shadow-md transition-all"
                >
                  Wallbox jetzt anmelden
                </a>
              </div>
              <div className="backdrop-blur-2xl bg-white/65 border border-white/60 rounded-3xl shadow-xl shadow-neutral-200/40 p-8">
                <h3 className="font-bold text-[#3D3935] mb-5">§14a EnWG – das müssen Sie wissen:</h3>
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

        {/* ── §14a USP ── */}
        <section className="py-20 relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B8922A]/6 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#D4B483]/15 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
            <Badge className="mb-6 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">
              Gesetzliche Anforderungen
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3D3935] mb-6">
              §14a EnWG – gesetzeskonforme Anmeldung Ihrer Anlage
            </h2>
            <p className="text-[#8A8480] text-lg mb-4">
              Die Anforderungen nach §14a EnWG sind komplex und unterscheiden sich je nach Netzbetreiber.
            </p>
            <p className="text-[#6B6560] text-lg mb-10">
              Wir übernehmen die komplette Umsetzung und sorgen dafür, dass Ihre Anlage korrekt und gesetzeskonform angemeldet wird.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-bold px-10 py-4 text-base shadow-xl transition-all"
            >
              Jetzt §14a-konforme Anmeldung starten
            </a>
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
              <Badge className="mb-4 bg-white/10 text-neutral-300 border-white/20 backdrop-blur-sm">
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
                  className="backdrop-blur-xl bg-white/8 border border-white/15 rounded-3xl p-8 text-center hover:bg-white/12 transition-all duration-300"
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#B8922A] flex items-center justify-center mb-6 mx-auto shadow-lg shadow-black/40">
                    <step.Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs font-bold text-[#B8922A] tracking-widest mb-3 uppercase block">
                    Schritt {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#A09890] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="py-24 relative overflow-hidden bg-amber-50">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 right-16 w-72 h-72 bg-[#D4B483]/15 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-16 w-80 h-80 bg-[#D4B483]/12 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30 backdrop-blur-sm">
                Ihre Vorteile
              </Badge>
              <h2 className="text-4xl font-bold text-[#3D3935] mb-4">Warum EVU-HELD?</h2>
              <p className="text-lg text-[#6B6560] max-w-2xl mx-auto">
                Mehr Zeit für Ihr Kerngeschäft – weniger Aufwand für Bürokratie.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="backdrop-blur-2xl bg-white/60 border border-white/55 rounded-3xl p-6 shadow-xl shadow-neutral-200/40 hover:bg-white/75 hover:shadow-neutral-300/40 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#B8922A]/12 border border-[#B8922A]/25 flex items-center justify-center mb-4">
                    <benefit.Icon className="w-5 h-5 text-[#B8922A]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#3D3935] mb-2">{benefit.title}</h3>
                  <p className="text-[#8A8480] text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Deutschlandweit ── */}
        <section className="py-20 relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-16 w-80 h-80 bg-[#D4B483]/15 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-16 w-72 h-72 bg-[#B8922A]/6 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
            <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">
              Bundesweit verfügbar
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3D3935] mb-6">
              Anmeldung beim Netzbetreiber deutschlandweit
            </h2>
            <p className="text-[#6B6560] text-lg mb-4">
              Wir bieten unseren Service <strong className="text-[#3D3935]">bundesweit in ganz Deutschland</strong> an.
            </p>
            <p className="text-[#6B6560] text-lg">
              Egal ob Bayern, NRW, Niedersachsen oder Schleswig-Holstein – wir übernehmen die Anmeldung bei Ihrem zuständigen Netzbetreiber vollständig digital.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 relative overflow-hidden bg-amber-100">
          <div className="relative max-w-3xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
            <Badge className="mb-6 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">
              Jetzt starten
            </Badge>
            <h2 className="text-4xl font-extrabold text-[#3D3935] mb-4">
              Jetzt Anlage beim Netzbetreiber anmelden lassen
            </h2>
            <p className="text-[#8A8480] text-lg mb-10 leading-relaxed">
              Lassen Sie Ihre <strong className="text-[#3D3935]">PV Anlage, Wärmepumpe oder Wallbox professionell anmelden</strong> – schnell, sicher und ohne Aufwand. Starten Sie jetzt Ihre Anfrage und wir übernehmen die komplette Netzbetreiber Anmeldung für Sie.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-bold px-10 py-4 text-base shadow-xl shadow-black/20 transition-all hover:shadow-2xl hover:shadow-black/30"
            >
              Jetzt Anmeldung starten
            </a>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 relative overflow-hidden bg-amber-50">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 left-8 w-80 h-80 bg-[#D4B483]/12 rounded-full blur-3xl" />
            <div className="absolute bottom-16 right-8 w-96 h-96 bg-[#D4B483]/15 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-3xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="text-center mb-14">
              <Badge className="mb-4 bg-[#B8922A]/10 text-[#7A5E18] border-[#B8922A]/30">
                FAQ
              </Badge>
              <h2 className="text-4xl font-bold text-[#3D3935] mb-4">
                Häufige Fragen
              </h2>
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
