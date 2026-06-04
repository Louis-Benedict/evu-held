import type { Metadata } from "next";
import { blogPosts, formatDate, categorySlugMap } from "@/lib/blog";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Ratgeber & Wissen – Netzanmeldung für PV, Wärmepumpe & Wallbox | EVU-HELD",
  description:
    "Nützliche Artikel rund um die Anmeldung von PV-Anlagen, Wärmepumpen und Wallboxen. Alles über §14a EnWG, das Marktstammdatenregister und die Netzanmeldung.",
  openGraph: {
    title: "Ratgeber & Wissen – EVU-HELD",
    description:
      "Nützliche Artikel rund um die Anmeldung von PV-Anlagen, Wärmepumpen und Wallboxen.",
    type: "website",
  },
};

const categoryStyle: Record<string, string> = {
  "PV-Anlage": "bg-neutral-100 text-neutral-600 border-neutral-200",
  Wärmepumpe: "bg-neutral-100 text-neutral-600 border-neutral-200",
  Wallbox: "bg-neutral-100 text-neutral-600 border-neutral-200",
  Ratgeber: "bg-neutral-100 text-neutral-600 border-neutral-200",
};

const categories = ["Alle", "PV-Anlage", "Wärmepumpe", "Wallbox", "Ratgeber"];

const blogIndexJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://evu-held.de/blog",
      "url": "https://evu-held.de/blog",
      "name": "Ratgeber & Wissen – Netzanmeldung für PV, Wärmepumpe & Wallbox | EVU-HELD",
      "description":
        "Nützliche Artikel rund um die Anmeldung von PV-Anlagen, Wärmepumpen und Wallboxen. Alles über §14a EnWG, das Marktstammdatenregister und die Netzanmeldung.",
      "inLanguage": "de-DE",
      "isPartOf": { "@id": "https://evu-held.de/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://evu-held.de/" },
          { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://evu-held.de/blog" },
        ],
      },
    },
    {
      "@type": "Blog",
      "@id": "https://evu-held.de/blog#blog",
      "name": "EVU-HELD Ratgeber",
      "url": "https://evu-held.de/blog",
      "inLanguage": "de-DE",
      "publisher": { "@id": "https://evu-held.de/#organization" },
      "blogPost": blogPosts.map((post) => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "url": `https://evu-held.de/blog/${post.slug}`,
        "datePublished": post.publishedAt,
        "author": { "@id": "https://evu-held.de/#organization" },
      })),
    },
  ],
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-neutral-100/40 to-neutral-50 text-[#3D3935]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexJsonLd) }}
      />
      <Header />

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#4A2200] via-[#7A3E08] to-[#4A2200] text-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8922A]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B8922A]/7 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 pt-32 pb-16">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-neutral-500">
                <li><a href="/" className="hover:text-neutral-300 transition-colors">Startseite</a></li>
                <li className="text-neutral-600" aria-hidden="true">/</li>
                <li className="text-neutral-300" aria-current="page">Wissen</li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-[#B8922A]/20 text-[#D4A843] border-[#B8922A]/30">
                Ratgeber & Wissen
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                Alles zur{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8922A] to-[#D4A843]">
                  Netzanmeldung
                </span>
              </h1>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Klar und verständlich erklärt: §14a EnWG, Marktstammdatenregister, PV-Anlage, Wärmepumpe, Wallbox und mehr.
              </p>
            </div>
          </div>
        </section>

        {/* ── Category chips ── */}
        <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/70 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <a
                key={cat}
                href={cat === "Alle" ? "/blog" : `/blog/kategorie/${categorySlugMap[cat]}`}
                className="shrink-0 inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border border-[#D4B483]/40 text-[#5A5550] bg-white/60 hover:border-[#B8922A]/40 hover:text-[#B8922A] transition-colors"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>

        {/* ── Grid ── */}
        <section className="py-16 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 left-8 w-80 h-80 bg-stone-200/40 rounded-full blur-3xl" />
            <div className="absolute bottom-16 right-8 w-96 h-96 bg-stone-200/40 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white border border-stone-200 rounded-3xl shadow-md shadow-stone-200/70 p-6 flex flex-col hover:shadow-xl hover:border-[#B8922A]/30 hover:-translate-y-1 transition-all duration-200"
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
                    <span className="text-xs text-[#A09890]">
                      {formatDate(post.publishedAt)}
                    </span>
                    <span className="text-xs text-[#A09890]">
                      · {post.readingTimeMinutes} Min.
                    </span>
                  </div>

                  <h2 className="text-base font-bold text-[#3D3935] mb-3 group-hover:text-[#B8922A] transition-colors leading-snug">
                    {post.title}
                  </h2>

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
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="relative overflow-hidden bg-gradient-to-br from-[#4A2200] via-[#7A3E08] to-[#4A2200] rounded-3xl py-20 text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8922A]/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B8922A]/7 rounded-full blur-3xl pointer-events-none" />
              <div className="relative px-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Bereit zur Anmeldung?
                </h2>
                <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                  Wir übernehmen die komplette Anmeldung für Sie – schnell, korrekt und deutschlandweit.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-bold px-10 py-4 text-base shadow-xl shadow-black/40 transition-all"
                >
                  Jetzt Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
