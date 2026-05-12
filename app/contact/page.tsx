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

const serviceOptions = [
  { value: "pv", label: "PV-Netzanmeldung (Solar)" },
  { value: "wp", label: "Wärmepumpen-Anmeldung" },
  { value: "wallbox", label: "Wallbox-Anmeldung" },
  { value: "zaehler", label: "Zählertausch" },
  { value: "partner", label: "Partner Werden" },
  { value: "sonstige", label: "Sonstige Anlagen" },
  { value: "mehrere", label: "Mehrere Leistungen" },
];

function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") ?? "";

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [serviceType, setServiceType] = useState(initialService);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone, serviceType, message }),
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
    <div className="text-neutral-900">
      <div className="relative min-h-screen bg-gradient-to-br from-neutral-50 via-neutral-100/40 to-neutral-50 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-neutral-300/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-neutral-200/40 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#2BB33A]/6 rounded-full blur-3xl" />
        </div>

        <Header />

        {/* ── Page content ── */}
        <main className="relative max-w-2xl mx-auto px-4 sm:px-6 py-16">
        {!submitted ? (
          <>
            <div className="mb-10 text-center">
              <span className="inline-block mb-4 text-xs font-bold tracking-widest text-[#2BB33A] uppercase">
                Kontaktformular
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
                Kontakt aufnehmen
              </h1>
              <p className="mt-3 text-neutral-500 text-base max-w-md mx-auto">
                Schildern Sie uns Ihr Projekt – wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen.
              </p>
            </div>

            {/* Glass card */}
            <div className="backdrop-blur-2xl bg-white/65 border border-white/60 rounded-3xl shadow-2xl shadow-neutral-300/30 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700">
                      Vorname <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      placeholder="Max"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full rounded-xl border border-white/60 bg-white/70 backdrop-blur-sm px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2BB33A]/40 focus:border-[#2BB33A]/60 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700">
                      Nachname <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      placeholder="Mustermann"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full rounded-xl border border-white/60 bg-white/70 backdrop-blur-sm px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2BB33A]/40 focus:border-[#2BB33A]/60 transition-all"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
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
                      className="w-full rounded-xl border border-white/60 bg-white/70 backdrop-blur-sm px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2BB33A]/40 focus:border-[#2BB33A]/60 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
                      Telefonnummer
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+49 151 00000000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-white/60 bg-white/70 backdrop-blur-sm px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2BB33A]/40 focus:border-[#2BB33A]/60 transition-all"
                    />
                  </div>
                </div>

                {/* Service type */}
                <div className="space-y-1.5">
                  <label htmlFor="serviceType" className="block text-sm font-medium text-neutral-700">
                    Art der Anfrage <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full rounded-xl border border-white/60 bg-white/70 backdrop-blur-sm px-4 py-2.5 text-sm text-neutral-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2BB33A]/40 focus:border-[#2BB33A]/60 transition-all appearance-none"
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
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
                    Anmerkungen / Fragen
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Haben Sie spezielle Anforderungen oder Fragen?"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-white/60 bg-white/70 backdrop-blur-sm px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2BB33A]/40 focus:border-[#2BB33A]/60 transition-all resize-none"
                  />
                </div>

                {/* Privacy */}
                <div className="flex items-start gap-3">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-neutral-300 accent-[#2BB33A]"
                  />
                  <label htmlFor="privacy" className="text-sm text-neutral-500 leading-snug">
                    Ich habe die{" "}
                    <a href="/datenschutz" className="text-[#2BB33A] hover:underline">
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
                  className="w-full rounded-xl bg-[#2BB33A] hover:bg-[#249930] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 text-base shadow-md shadow-[#2BB33A]/30 transition-all hover:shadow-lg hover:shadow-[#2BB33A]/40"
                >
                  {loading ? "Wird gesendet…" : "Anfrage absenden"}
                </button>
              </form>
            </div>
          </>
        ) : (
          /* ── Success state ── */
          <div className="backdrop-blur-2xl bg-white/65 border border-white/60 rounded-3xl shadow-2xl shadow-neutral-300/30 p-12 text-center flex flex-col items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#2BB33A] flex items-center justify-center shadow-lg shadow-[#2BB33A]/30">
              <IconCheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-neutral-900">Vielen Dank!</h2>
            <p className="text-neutral-500 max-w-sm text-sm leading-relaxed">
              Ihre Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von{" "}
              <strong className="text-neutral-700">24 Stunden</strong> persönlich bei Ihnen.
            </p>
            <a
              href="/"
              className="mt-4 inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white/80 hover:bg-white text-neutral-700 font-medium px-6 py-2.5 text-sm shadow-sm transition-all"
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

export default function ContactPage() {
  return (
    <Suspense>
      <ContactForm />
    </Suspense>
  );
}
