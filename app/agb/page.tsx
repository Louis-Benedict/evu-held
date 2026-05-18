import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30 text-slate-900">
      <Header />

      <main className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="backdrop-blur-2xl bg-white/65 border border-white/60 rounded-3xl shadow-2xl shadow-indigo-100/40 p-10">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>

          <div className="space-y-8 text-sm text-slate-700 leading-relaxed">

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">1. Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen{" "}
                <strong>EVU Held</strong> (nachfolgend „Anbieter") und seinen Kunden (nachfolgend „Kunde") über Dienstleistungen im Bereich der Anmeldung von Energieanlagen.
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">2. Vertragsgegenstand</h2>
              <p className="mb-2">Der Anbieter erbringt Dienstleistungen zur Anmeldung von:</p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>Photovoltaikanlagen (PV-Anlagen / Solaranlagen)</li>
                <li>Wärmepumpen</li>
                <li>Wallboxen</li>
                <li>Stromzählern und Hausanschlüssen</li>
              </ul>
              <p className="mb-2">Dies umfasst insbesondere:</p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>Anmeldung beim zuständigen Netzbetreiber</li>
                <li>Registrierung im Marktstammdatenregister</li>
                <li>Unterstützung bei Anforderungen gemäß §14a EnWG</li>
              </ul>
              <p>
                Der Anbieter schuldet die <strong>ordnungsgemäße Durchführung der Anmeldung</strong>, jedoch <strong>keinen Erfolg in Form einer Genehmigung durch den Netzbetreiber</strong>.
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">3. Vertragsschluss</h2>
              <p className="mb-2">Ein Vertrag kommt zustande durch:</p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>Absenden einer Anfrage über die Website</li>
                <li>oder Annahme eines Angebots durch den Kunden</li>
              </ul>
              <p>Der Anbieter bestätigt den Auftrag schriftlich (z. B. per E-Mail).</p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">4. Mitwirkungspflichten des Kunden</h2>
              <p className="mb-2">Der Kunde ist verpflichtet:</p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>alle erforderlichen Daten vollständig und korrekt bereitzustellen</li>
                <li>notwendige Unterlagen rechtzeitig zu übermitteln</li>
                <li>auf Rückfragen zeitnah zu reagieren</li>
              </ul>
              <p>Verzögerungen durch fehlende Mitwirkung gehen nicht zulasten des Anbieters.</p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">5. Preise und Zahlung</h2>
              <p className="mb-2">
                Alle Preise verstehen sich in Euro zzgl. gesetzlicher Mehrwertsteuer, sofern nicht anders angegeben.
              </p>
              <p className="mb-2">Die Zahlung erfolgt:</p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>per Vorkasse</li>
                <li>oder nach Rechnungsstellung</li>
              </ul>
              <p>Der Anbieter ist berechtigt, die Leistung erst nach Zahlungseingang zu beginnen.</p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">6. Leistungsdauer</h2>
              <p className="mb-2">Die Bearbeitungszeit hängt insbesondere ab von:</p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>dem zuständigen Netzbetreiber</li>
                <li>der Vollständigkeit der Unterlagen</li>
                <li>externen Bearbeitungszeiten</li>
              </ul>
              <p>Der Anbieter hat keinen Einfluss auf die Bearbeitungsdauer Dritter.</p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">7. Haftung</h2>
              <p className="mb-2">
                Der Anbieter haftet nur für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen.
              </p>
              <p className="mb-2">Keine Haftung besteht für:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Verzögerungen durch Netzbetreiber</li>
                <li>Ablehnungen oder Rückfragen durch Behörden</li>
                <li>falsche oder unvollständige Angaben des Kunden</li>
              </ul>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">8. Widerrufsrecht (für Verbraucher)</h2>
              <p className="mb-3">Verbraucher haben das gesetzliche Widerrufsrecht.</p>
              <p className="mb-2">
                <span className="font-semibold">Hinweis:</span> Mit Beginn der Dienstleistung vor Ablauf der Widerrufsfrist stimmt der Kunde ausdrücklich zu, dass:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>die Leistung sofort beginnt</li>
                <li>das Widerrufsrecht bei vollständiger Leistungserbringung erlischt</li>
              </ul>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">9. Datenschutz</h2>
              <p>
                Die Verarbeitung personenbezogener Daten erfolgt gemäß der{" "}
                <a href="/datenschutz" className="text-indigo-600 hover:underline">Datenschutzerklärung</a>{" "}
                auf der Website.
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">10. Schlussbestimmungen</h2>
              <p className="mb-2">Es gilt das Recht der Bundesrepublik Deutschland.</p>
              <p>Sollten einzelne Bestimmungen unwirksam sein, bleibt der Vertrag im Übrigen wirksam.</p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <p className="font-semibold text-slate-900">EVU Held</p>
              <p>Görlitzer Ring 31A</p>
              <p>23879 Grambek</p>
              <p>Deutschland</p>
              <p className="mt-2">
                E-Mail:{" "}
                <a href="mailto:info@evu-held.de" className="text-indigo-600 hover:underline">
                  info@evu-held.de
                </a>
              </p>
              <p>
                Telefon:{" "}
                <a href="tel:+4915213323256" className="text-indigo-600 hover:underline">
                  +49 1521 3323256
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
