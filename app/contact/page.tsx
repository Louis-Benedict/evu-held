"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function IconCheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

const b2cServiceOptions = [
  { value: "pv", label: "PV-Netzanmeldung (Solar) – 339 €" },
  { value: "wp", label: "Wärmepumpen-Anmeldung – 299 €" },
  { value: "wallbox", label: "Wallbox-Anmeldung – 239 €" },
  { value: "zaehler", label: "Zähleranmeldung/-abmeldung – 239 €" },
  { value: "14a", label: "§14a-Registrierung – 189 €" },
  { value: "baustrom", label: "Baustrom-Anmeldung – 199 €" },
  { value: "echeck", label: "E-Check / VDE-Prüfung – 499 €" },
  { value: "beratung", label: "Technische Beratung – 289 €/Anlage" },
  { value: "mehrere", label: "Mehrere Leistungen – Kombiangebot anfragen" },
];

const b2bServiceOptions = [
  { value: "partner-5", label: "Paket 5 Kunden/Monat – 750 €" },
  { value: "partner-10", label: "Paket 10 Kunden/Monat – 1.000 €" },
  { value: "partner-20", label: "Paket 20 Kunden/Monat – 1.500 €" },
  { value: "partner", label: "20+ Kunden – Individuelles Angebot" },
  { value: "beratung-abo", label: "Beratungs-Abo – 500 €/Monat" },
];

type CustomerType = "privat" | "gewerbe";

function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") ?? "";
  const initialVolumen = searchParams.get("volumen") ?? "";

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [customerType, setCustomerType] = useState<CustomerType>(
    initialService.startsWith("partner") || initialService === "beratung-abo" ? "gewerbe" : "privat"
  );
  const [serviceType, setServiceType] = useState(() => {
    if (initialService && initialVolumen) return `partner-${initialVolumen}`;
    return initialService;
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const serviceOptions = customerType === "privat" ? b2cServiceOptions : b2bServiceOptions;

  function handleCustomerTypeChange(type: CustomerType) {
    setCustomerType(type);
    setServiceType("");
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, company, email, phone, customerType, serviceType, message }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="text-[#3D3935]">
      {/* Dark hero */}
      <div className="relative bg-gradient-to-br from-[#0f1e38] via-[#1a2f52] to-[#0f1e38] text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B8922A]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B8922A]/7 rounded-full blur-3xl" />
        </div>
        <Header />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 pt-32 pb-16 text-center">
          <span className="inline-block mb-4 text-xs font-bold tracking-widest text-[#D4A843] uppercase">
            Kontaktformular
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Kontakt aufnehmen
          </h1>
          <p className="mt-3 text-neutral-400 text-base max-w-md mx-auto">
            Schildern Sie uns Ihr Projekt – wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen.
          </p>
        </div>
      </div>

      {/* Form body */}
      <div className="bg-stone-50">
        <main className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
          {!submitted ? (
            <>
              {/* Customer type toggle */}
              <div className="flex rounded-2xl border border-[#D4B483]/40 bg-white/50 p-1 mb-6">
                <button
                  type="button"
                  onClick={() => handleCustomerTypeChange("privat")}
                  className={`flex-1 rounded-xl py-2.5 text-sm font-semibold transition-all ${
                    customerType === "privat"
                      ? "bg-[#B8922A] text-white shadow-md shadow-[#B8922A]/30"
                      : "text-[#5A5550] hover:text-[#3D3935]"
                  }`}
                >
                  Privatkunde
                </button>
                <button
                  type="button"
                  onClick={() => handleCustomerTypeChange("gewerbe")}
                  className={`flex-1 rounded-xl py-2.5 text-sm font-semibold transition-all ${
                    customerType === "gewerbe"
                      ? "bg-[#B8922A] text-white shadow-md shadow-[#B8922A]/30"
                      : "text-[#5A5550] hover:text-[#3D3935]"
                  }`}
                >
                  Gewerbepartner
                </button>
              </div>

              {customerType === "gewerbe" && (
                <div className="mb-6 bg-[#0f1e38]/5 border border-[#B8922A]/20 rounded-2xl px-5 py-4 text-sm text-[#5A5550]">
                  Als Gewerbepartner profitieren Sie von unseren Pauschalpreisen – abgerechnet pro Kunde, unabhängig von der Anzahl der Anmeldungen.{" "}
                  <a href="/partner" className="text-[#B8922A] font-semibold hover:underline">
                    Mehr zum Partnermodell →
                  </a>
                </div>
              )}

              <div className="backdrop-blur-2xl bg-white/65 border border-white/60 rounded-3xl shadow-2xl shadow-neutral-300/30 p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="firstName" className="block text-sm font-medium text-[#5A5550]">
                        Vorname <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        placeholder="Max"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full rounded-xl border border-[#D4B483]/40 bg-white/70 backdrop-blur-sm px-4 py-2.5 text-sm text-[#3D3935] placeholder-[#A09890] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B8922A]/40 focus:border-[#B8922A]/60 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="lastName" className="block text-sm font-medium text-[#5A5550]">
                        Nachname <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        placeholder="Mustermann"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full rounded-xl border border-[#D4B483]/40 bg-white/70 backdrop-blur-sm px-4 py-2.5 text-sm text-[#3D3935] placeholder-[#A09890] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B8922A]/40 focus:border-[#B8922A]/60 transition-all"
                      />
                    </div>
                  </div>

                  {/* Company (B2B only) */}
                  {customerType === "gewerbe" && (
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="block text-sm font-medium text-[#5A5550]">
                        Firmenname <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        placeholder="Elektro Mustermann GmbH"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full rounded-xl border border-[#D4B483]/40 bg-white/70 backdrop-blur-sm px-4 py-2.5 text-sm text-[#3D3935] placeholder-[#A09890] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B8922A]/40 focus:border-[#B8922A]/60 transition-all"
                      />
                    </div>
                  )}

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-sm font-medium text-[#5A5550]">
                        E-Mail-Adresse <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="max@firma.de"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-[#D4B483]/40 bg-white/70 backdrop-blur-sm px-4 py-2.5 text-sm text-[#3D3935] placeholder-[#A09890] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B8922A]/40 focus:border-[#B8922A]/60 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-sm font-medium text-[#5A5550]">
                        Telefonnummer <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+49 176 00000000"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-xl border border-[#D4B483]/40 bg-white/70 backdrop-blur-sm px-4 py-2.5 text-sm text-[#3D3935] placeholder-[#A09890] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B8922A]/40 focus:border-[#B8922A]/60 transition-all"
                      />
                    </div>
                  </div>

                  {/* Service type */}
                  <div className="space-y-1.5">
                    <label htmlFor="serviceType" className="block text-sm font-medium text-[#5A5550]">
                      Art der Anfrage <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full rounded-xl border border-[#D4B483]/40 bg-white/70 backdrop-blur-sm px-4 py-2.5 text-sm text-[#3D3935] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B8922A]/40 focus:border-[#B8922A]/60 transition-all appearance-none"
                    >
                      <option value="" disabled>Bitte wählen…</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-sm font-medium text-[#5A5550]">
                      Anmerkungen / Fragen
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder={
                        customerType === "gewerbe"
                          ? "Beschreiben Sie Ihr Volumen, Anforderungen oder spezielle Wünsche…"
                          : "Haben Sie spezielle Anforderungen oder Fragen?"
                      }
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-xl border border-[#D4B483]/40 bg-white/70 backdrop-blur-sm px-4 py-2.5 text-sm text-[#3D3935] placeholder-[#A09890] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B8922A]/40 focus:border-[#B8922A]/60 transition-all resize-none"
                    />
                  </div>

                  {/* Privacy */}
                  <div className="flex items-start gap-3">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 rounded border-[#D4B483] accent-[#B8922A]"
                    />
                    <label htmlFor="privacy" className="text-sm text-[#8A8480] leading-snug">
                      Ich habe die{" "}
                      <a href="/datenschutz" className="text-[#B8922A] hover:underline">
                        Datenschutzerklärung
                      </a>{" "}
                      gelesen und stimme der Verarbeitung meiner Daten zu.{" "}
                      <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {error && (
                    <p className="text-sm text-red-500 text-center">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-[#B8922A] hover:bg-[#9A7820] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 text-base shadow-md shadow-[#B8922A]/30 transition-all hover:shadow-lg hover:shadow-[#B8922A]/40"
                  >
                    {loading ? "Wird gesendet…" : "Anfrage absenden"}
                  </button>
                </form>
              </div>

              {/* Direct contact */}
              <div className="mt-6 text-center text-sm text-[#8A8480]">
                Oder rufen Sie uns direkt an:{" "}
                <a href="tel:+4915213323256" className="text-[#B8922A] font-semibold hover:underline">
                  +49 1521 3323256
                </a>
              </div>
            </>
          ) : (
            <div className="bg-white border border-stone-200 rounded-3xl shadow-lg p-12 text-center flex flex-col items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-[#B8922A] flex items-center justify-center shadow-lg shadow-[#B8922A]/30">
                <IconCheckCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#3D3935]">Vielen Dank!</h2>
              <p className="text-[#8A8480] max-w-sm text-sm leading-relaxed">
                Ihre Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von{" "}
                <strong className="text-[#3D3935]">24 Stunden</strong> persönlich bei Ihnen.
              </p>
              <a
                href="/"
                className="mt-4 inline-flex items-center justify-center rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-[#3D3935] font-medium px-6 py-2.5 text-sm shadow-sm transition-all"
              >
                Zurück zur Startseite
              </a>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://evu-held.de/contact",
  "url": "https://evu-held.de/contact",
  "name": "Kontakt aufnehmen – EVU-HELD",
  "description":
    "Kontaktformular für Netzanmeldungen – PV, Wärmepumpe, Wallbox. Wir melden uns innerhalb von 24 Stunden.",
  "inLanguage": "de-DE",
  "isPartOf": { "@id": "https://evu-held.de/#website" },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Suspense>
        <ContactForm />
      </Suspense>
    </>
  );
}
