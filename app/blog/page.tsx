import type { Metadata } from "next";
import { blogPosts, formatDate } from "@/lib/blog";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Ratgeber & Blog – Netzanmeldung für PV, Wärmepumpe & Wallbox | EVU-HELD",
  description:
    "Nützliche Artikel rund um die Anmeldung von PV-Anlagen, Wärmepumpen und Wallboxen. Alles über §14a EnWG, das Marktstammdatenregister und die Netzanmeldung.",
  openGraph: {
    title: "Ratgeber & Blog – EVU-HELD",
    description:
      "Nützliche Artikel rund um die Anmeldung von PV-Anlagen, Wärmepumpen und Wallboxen.",
    type: "website",
  },
};

const categoryStyle: Record<string, string> = {
  "PV-Anlage": "bg-yellow-100/80 text-yellow-800 border-yellow-200/80",
  Wärmepumpe: "bg-blue-100/80 text-blue-800 border-blue-200/80",
  Wallbox: "bg-purple-100/80 text-purple-800 border-purple-200/80",
  Ratgeber: "bg-[#2BB33A]/10 text-[#1e7a27] border-[#2BB33A]/30",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-neutral-100/40 to-neutral-50 text-neutral-900">
      <Header />

      <main>
        {/* ── Hero ── */}
        <section className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-neutral-500">
                <li><a href="/" className="hover:text-neutral-300 transition-colors">Startseite</a></li>
                <li className="text-neutral-600" aria-hidden="true">/</li>
                <li className="text-neutral-300" aria-current="page">Blog</li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-white/10 text-neutral-300 border-white/20">
                Ratgeber
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                Wissen rund um die{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BB33A] to-[#6ddc79]">
                  Netzanmeldung
                </span>
              </h1>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Alles, was Sie über die Anmeldung von PV-Anlagen, Wärmepumpen und Wallboxen
                wissen müssen – klar und verständlich erklärt.
              </p>
            </div>
          </div>
        </section>

        {/* ── Grid ── */}
        <section className="py-20 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 left-8 w-80 h-80 bg-neutral-300/30 rounded-full blur-3xl" />
            <div className="absolute bottom-16 right-8 w-96 h-96 bg-neutral-200/40 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group backdrop-blur-2xl bg-white/65 border border-white/60 rounded-3xl shadow-xl shadow-neutral-200/40 p-8 flex flex-col hover:bg-white/80 hover:shadow-neutral-300/50 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                        categoryStyle[post.category] ??
                        "bg-neutral-100 text-neutral-700 border-neutral-200"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {formatDate(post.publishedAt)}
                    </span>
                    <span className="text-xs text-neutral-400">
                      · {post.readingTimeMinutes} Min. Lesezeit
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#2BB33A] transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-sm text-neutral-500 leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-sm font-semibold text-[#2BB33A] gap-1.5">
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
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-neutral-200">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-neutral-900 mb-4">
              Bereit zur Anmeldung?
            </h2>
            <p className="text-neutral-500 text-lg mb-8 leading-relaxed">
              Wir übernehmen die komplette Anmeldung für Sie – schnell, korrekt und
              deutschlandweit.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-neutral-900 hover:bg-neutral-700 text-white font-bold px-10 py-4 text-base shadow-xl shadow-black/20 transition-all hover:shadow-2xl hover:shadow-black/30"
            >
              Jetzt Kontakt aufnehmen
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
