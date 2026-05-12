import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30 text-slate-900">
      <Header />

      <main className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="backdrop-blur-2xl bg-white/65 border border-white/60 rounded-3xl shadow-2xl shadow-indigo-100/40 p-10">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Impressum</h1>

          <p className="text-sm text-slate-500 mb-6">Angaben gemäß § 5 TMG</p>

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
            <div>
              <p className="font-semibold text-slate-900">Awatt Electronic GmbH</p>
              <p>Weberplatz 6</p>
              <p>23909 Ratzeburg</p>
              <p>Deutschland</p>
            </div>

            <div>
              <p className="font-semibold text-slate-900 mb-1">Vertreten durch den Geschäftsführer:</p>
              <p>Ahmad Awat Ahmad</p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <p className="font-semibold text-slate-900 mb-1">Kontakt:</p>
              <p>E-Mail: <a href="mailto:info@evu-held.de" className="text-indigo-600 hover:underline">info@evu-held.de</a></p>
              <p>Telefonnummer: <a href="tel:+45418856891" className="text-indigo-600 hover:underline">+49 4541 8856891</a></p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <p className="font-semibold text-slate-900 mb-1">Handelsregister:</p>
              <p>Eingetragen im Handelsregister des Amtsgericht Lübeck</p>
              <p>Handelsregisternummer: HRB 27167 HL</p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <p className="font-semibold text-slate-900 mb-1">Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</p>
              <p>DE449951011</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
