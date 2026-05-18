"use client";

import { useState } from "react";

const tiers = [
  {
    clients: 5,
    total: 750,
    perClient: 150,
    individualEstimate: 1370,
    savingsPct: 45,
    label: "5 Kunden",
    tag: "Einstieg",
  },
  {
    clients: 10,
    total: 1000,
    perClient: 100,
    individualEstimate: 2740,
    savingsPct: 63,
    label: "10 Kunden",
    tag: "Beliebt",
    highlight: true,
  },
  {
    clients: 20,
    total: 1500,
    perClient: 75,
    individualEstimate: 5480,
    savingsPct: 73,
    label: "20 Kunden",
    tag: "Bestes Preis-Leistungs-Verhältnis",
  },
  {
    clients: 999,
    total: 0,
    perClient: 0,
    individualEstimate: 0,
    savingsPct: 0,
    label: "20+ Kunden",
    tag: "Enterprise",
  },
];

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function B2BSlider() {
  const [selected, setSelected] = useState(1);

  const tier = tiers[selected];

  return (
    <div className="space-y-6">
      {/* Tier selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {tiers.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setSelected(i)}
            className={`relative rounded-2xl border-2 p-4 text-left transition-all duration-200 ${
              selected === i
                ? "border-[#B8922A] bg-[#B8922A]/8 shadow-lg shadow-[#B8922A]/20"
                : "border-[#D4B483]/40 bg-white/60 hover:border-[#B8922A]/50 hover:bg-[#B8922A]/4"
            }`}
          >
            {t.highlight && (
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#B8922A] text-white text-xs font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap">
                Beliebt
              </span>
            )}
            <p className="text-xs text-[#8A8480] mb-1">{t.tag}</p>
            <p className="font-bold text-[#3D3935] text-sm">{t.label}</p>
            {t.perClient > 0 ? (
              <p className="text-[#B8922A] font-semibold text-xs mt-1">
                {t.perClient} €/Kunde
              </p>
            ) : (
              <p className="text-[#B8922A] font-semibold text-xs mt-1">Auf Anfrage</p>
            )}
          </button>
        ))}
      </div>

      {/* Result card */}
      <div className="backdrop-blur-2xl bg-white/70 border border-[#D4B483]/40 rounded-3xl p-6 sm:p-8 shadow-xl">
        {tier.clients < 999 ? (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="text-sm text-[#8A8480] mb-1">Pauschalpreis für {tier.clients} Kunden/Monat</p>
              <p className="text-5xl font-extrabold text-[#3D3935]">
                {tier.total.toLocaleString("de-DE")} €
              </p>
              <p className="text-[#B8922A] font-semibold mt-1">
                = {tier.perClient} € pro Kunde
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-xs text-[#8A8480]">statt ca.</span>
                <span className="text-sm line-through text-[#A09890]">{tier.individualEstimate.toLocaleString("de-DE")} €</span>
                <span className="inline-flex items-center rounded-full bg-[#B8922A]/15 px-2.5 py-0.5 text-xs font-bold text-[#B8922A]">
                  – {tier.savingsPct} %
                </span>
              </div>
              <p className="text-sm text-[#6B6560] mt-3 max-w-xs">
                Egal wie viele Einzelanmeldungen ein Kunde benötigt – abgerechnet wird pro Kunde, nicht pro Service.
              </p>
            </div>
            <div className="space-y-3 sm:min-w-[220px]">
              {[
                "Unbegrenzte Anmeldungen je Kunde",
                "Persönlicher Ansprechpartner",
                "Prioritätsbearbeitung",
                "Monatliche Abrechnung",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#B8922A]/15 border border-[#B8922A]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <IconCheck className="w-3 h-3 text-[#B8922A]" />
                  </div>
                  <span className="text-sm text-[#5A5550]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="text-2xl font-bold text-[#3D3935] mb-2">
              Individuelles Angebot für Sie
            </p>
            <p className="text-[#6B6560] mb-6 max-w-sm mx-auto">
              Bei mehr als 20 Kunden pro Monat erstellen wir ein maßgeschneidertes Angebot mit maximalen Konditionen.
            </p>
          </div>
        )}
        <div className="mt-6 pt-5 border-t border-[#D4B483]/30">
          <a
            href={tier.clients < 999 ? `/contact?service=partner&volumen=${tier.clients}` : "/contact?service=partner"}
            className="inline-flex items-center justify-center w-full sm:w-auto rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-semibold px-8 py-3.5 text-sm shadow-md shadow-[#B8922A]/30 transition-all hover:shadow-lg"
          >
            {tier.clients < 999 ? "Jetzt Partner werden" : "Angebot anfragen"}
          </a>
        </div>
      </div>

      {/* Consultation subscription */}
      <div className="backdrop-blur-xl bg-[#1C1A14]/95 border border-[#B8922A]/25 rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <div className="flex-1">
            <span className="inline-block text-xs font-bold text-[#B8922A] tracking-widest uppercase mb-2">
              Beratungs-Abo
            </span>
            <h3 className="text-xl font-bold text-white mb-2">
              Laufende Fachberatung für Ihr Team
            </h3>
            <p className="text-[#A09890] text-sm leading-relaxed">
              Technische Beratung für bis zu 10 Gewerbekunden pro Monat – ideal für Elektriker und Solarinstallateure.
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-3xl font-extrabold text-white">500 €</p>
            <p className="text-[#A09890] text-sm">/Monat</p>
            <a
              href="/contact?service=beratung-abo"
              className="mt-4 inline-flex items-center justify-center rounded-xl border border-[#B8922A]/50 text-[#B8922A] hover:bg-[#B8922A]/15 font-semibold px-5 py-2.5 text-sm transition-all"
            >
              Mehr erfahren
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
