"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Muss ich meine Wärmepumpe anmelden?",
    answer:
      "Ja – Wärmepumpen gelten als steuerbare Verbrauchseinrichtungen nach §14a EnWG und müssen beim zuständigen Netzbetreiber angemeldet werden. Zusätzlich ist eine Eintragung im Marktstammdatenregister (MaStR) der Bundesnetzagentur verpflichtend. Wer die Anmeldung versäumt, riskiert die Verweigerung des Netzanschlusses und mögliche Bußgelder.",
  },
  {
    question: "Was muss ich bei der Anmeldung einer PV-Anlage beachten?",
    answer:
      "Die Anmeldung einer PV-Anlage umfasst mehrere Schritte: Voranmeldung beim Netzbetreiber vor der Installation, Endanmeldung mit Inbetriebnahmeprotokoll sowie die Registrierung im Marktstammdatenregister innerhalb eines Monats nach Inbetriebnahme. Viele Betreiber unterschätzen den Aufwand – häufige Fehler sind falsche technische Angaben oder fehlende Dokumente.",
  },
  {
    question: "Gilt §14a EnWG auch für meine Wallbox?",
    answer:
      "Ja, seit dem 1. Januar 2024 fallen Wallboxen mit einer Leistung über 3,7 kW unter die Anmeldepflicht nach §14a EnWG. Sie müssen als steuerbare Verbrauchseinrichtung beim Netzbetreiber registriert werden. Als Gegenleistung profitieren Betreiber von vergünstigten Netzentgelten, was langfristig mehrere hundert Euro Ersparnis bedeuten kann.",
  },
  {
    question: "Was passiert, wenn ich meine Anlage nicht anmelde?",
    answer:
      "Die Konsequenzen sind erheblich: Der Netzbetreiber kann den Netzanschluss verweigern, die Einspeisevergütung entfällt rückwirkend, und es drohen Bußgelder der Bundesnetzagentur. Darüber hinaus können staatliche Förderungen zurückgefordert werden und der Versicherungsschutz bei Schäden erlischt. Eine nachträgliche Anmeldung ist möglich, hebt bereits entstandene Folgen aber nicht auf.",
  },
  {
    question: "Kann ich die Anmeldung auch nachträglich durchführen?",
    answer:
      "Ja, eine nachträgliche Anmeldung ist grundsätzlich möglich. Bereits entstandene Bußgelder oder der Verlust der Einspeisevergütung lassen sich jedoch nicht rückgängig machen. Je schneller Sie handeln, desto geringer sind die finanziellen Auswirkungen. Wir unterstützen Sie auch bei der nachträglichen Anmeldung – deutschlandweit und unkompliziert.",
  },
];

export default function FAQList() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="backdrop-blur-2xl bg-white/65 border border-white/60 rounded-2xl shadow-sm shadow-neutral-200/40 overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="font-semibold text-neutral-900 text-sm sm:text-base leading-snug">
              {faq.question}
            </span>
            <svg
              className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <p className="text-sm text-neutral-600 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
