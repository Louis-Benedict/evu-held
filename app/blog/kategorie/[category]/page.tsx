import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, slugCategoryMap, formatDate } from "@/lib/blog";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";

const categoryMeta: Record<string, { description: string }> = {
  "PV-Anlage": {
    description: "Alles zur Anmeldung und Registrierung von Photovoltaikanlagen beim Netzbetreiber und im Marktstammdatenregister.",
  },
  "Wärmepumpe": {
    description: "Anmeldepflichten, §14a EnWG und alles rund um die Registrierung von Wärmepumpen beim Netzbetreiber.",
  },
  "Wallbox": {
    description: "Pflichten, Kosten und Ablauf der Wallbox-Anmeldung nach §14a EnWG beim Netzbetreiber.",
  },
  "Ratgeber": {
    description: "Allgemeine Ratgeber rund um Netzanmeldungen, Energieanlagen und rechtliche Grundlagen.",
  },
};

export async function generateStaticParams() {
  return Object.keys(slugCategoryMap).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const name = slugCategoryMap[category];
  if (!name) return {};
  return {
    title: `${name} – Ratgeber & Wissen | EVU-HELD`,
    description: categoryMeta[name]?.description,
    alternates: { canonical: `https://evu-held.de/blog/kategorie/${category}` },
    openGraph: {
      title: `${name} – EVU-HELD`,
      description: categoryMeta[name]?.description,
      type: "website",
    },
  };
}

const categoryStyle: Record<string, string> = {
  "PV-Anlage": "bg-neutral-100 text-neutral-600 border-neutral-200",
  Wärmepumpe: "bg-neutral-100 text-neutral-600 border-neutral-200",
  Wallbox: "bg-neutral-100 text-neutral-600 border-neutral-200",
  Ratgeber: "bg-neutral-100 text-neutral-600 border-neutral-200",
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const name = slugCategoryMap[category];
  if (!name) notFound();

  const posts = blogPosts.filter((p) => p.category === name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-neutral-100/40 to-neutral-50 text-[#3D3935]">
      <Header />

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1C1A14] via-[#26211A] to-[#1C1A14] text-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8922A]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B8922A]/7 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 pt-32 pb-16">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-neutral-500">
                <li><a href="/" className="hover:text-neutral-300 transition-colors">Startseite</a></li>
                <li className="text-neutral-600" aria-hidden="true">/</li>
                <li><a href="/blog" className="hover:text-neutral-300 transition-colors">Wissen</a></li>
                <li className="text-neutral-600" aria-hidden="true">/</li>
                <li className="text-neutral-300" aria-current="page">{name}</li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-[#B8922A]/20 text-[#D4A843] border-[#B8922A]/30">
                {name}
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                {name}
              </h1>
              <p className="text-lg text-neutral-400 leading-relaxed">
                {categoryMeta[name]?.description}
              </p>
            </div>
          </div>
        </section>

        {/* ── Posts ── */}
        <section className="py-16 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 left-8 w-80 h-80 bg-[#D4B483]/12 rounded-full blur-3xl" />
            <div className="absolute bottom-16 right-8 w-96 h-96 bg-[#D4B483]/15 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <a
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group backdrop-blur-2xl bg-white/65 border border-white/60 rounded-3xl shadow-xl shadow-neutral-200/40 p-6 flex flex-col hover:bg-white/80 hover:shadow-neutral-300/50 transition-all duration-300"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                          categoryStyle[post.category] ?? "bg-neutral-100 text-neutral-700 border-neutral-200"
                        }`}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-[#A09890]">{formatDate(post.publishedAt)}</span>
                      <span className="text-xs text-[#A09890]">· {post.readingTimeMinutes} Min.</span>
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
            ) : (
              <p className="text-center text-[#8A8480] py-12">Noch keine Artikel in dieser Kategorie.</p>
            )}

            <div className="mt-10 text-center">
              <a href="/blog" className="text-sm font-semibold text-[#B8922A] hover:text-[#9A7820] transition-colors">
                ← Alle Artikel
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
