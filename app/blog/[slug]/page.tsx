import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, formatDate, categorySlugMap, type ContentBlock } from "@/lib/blog";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogTOC from "@/components/BlogTOC";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// ── Static generation ──────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://evu-held.de/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      url: `https://evu-held.de/blog/${post.slug}`,
      siteName: "EVU-HELD",
    },
  };
}

// ── Content renderer ───────────────────────────────────────────────────────────

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className="text-neutral-600 leading-relaxed">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2
          key={index}
          id={slugify(block.text)}
          className="text-xl font-bold text-neutral-900 mt-10 mb-3 first:mt-0 scroll-mt-28"
        >
          {block.text}
        </h2>
      );
    case "list":
      return (
        <ul key={index} className="space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <svg
                className="w-4 h-4 text-[#2BB33A] mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-neutral-600 leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return null;
  }
}

// ── Page ───────────────────────────────────────────────────────────────────────

const categoryStyle: Record<string, string> = {
  "PV-Anlage": "bg-neutral-100 text-neutral-600 border-neutral-200",
  Wärmepumpe: "bg-neutral-100 text-neutral-600 border-neutral-200",
  Wallbox: "bg-neutral-100 text-neutral-600 border-neutral-200",
  Ratgeber: "bg-neutral-100 text-neutral-600 border-neutral-200",
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://evu-held.de/blog/${post.slug}#article`,
        "headline": post.title,
        "description": post.metaDescription,
        "datePublished": post.publishedAt,
        "inLanguage": "de-DE",
        "author": { "@id": "https://evu-held.de/#organization" },
        "publisher": { "@id": "https://evu-held.de/#organization" },
        "url": `https://evu-held.de/blog/${post.slug}`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://evu-held.de/blog/${post.slug}`,
        },
        "isPartOf": { "@id": "https://evu-held.de/blog#blog" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://evu-held.de/" },
          { "@type": "ListItem", "position": 2, "name": "Wissen", "item": "https://evu-held.de/blog" },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://evu-held.de/blog/${post.slug}` },
        ],
      },
    ],
  };

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const tocItems = post.content
    .filter((b): b is { type: "h2"; text: string } => b.type === "h2")
    .map((b) => ({ id: slugify(b.text), text: b.text }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-neutral-100/40 to-neutral-50 text-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main>
        {/* ── Article header ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1e38] via-[#1a2f52] to-[#0f1e38] text-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8922A]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B8922A]/7 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-[1300px] mx-auto px-6 sm:px-8 pt-32 pb-16">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center justify-center gap-2 text-sm text-neutral-500">
                <li>
                  <a href="/" className="hover:text-neutral-300 transition-colors">
                    Startseite
                  </a>
                </li>
                <li className="text-neutral-600" aria-hidden="true">/</li>
                <li>
                  <a href="/blog" className="hover:text-neutral-300 transition-colors">
                    Blog
                  </a>
                </li>
                <li className="text-neutral-600" aria-hidden="true">/</li>
                <li className="text-neutral-400 truncate max-w-[180px] sm:max-w-none" aria-current="page">
                  {post.title}
                </li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
              <a
                href={`/blog/kategorie/${categorySlugMap[post.category] ?? ""}`}
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border hover:opacity-80 transition-opacity ${
                  categoryStyle[post.category] ??
                  "bg-neutral-100 text-neutral-700 border-neutral-200"
                }`}
              >
                {post.category}
              </a>
              <time
                dateTime={post.publishedAt}
                className="text-sm text-neutral-400"
              >
                {formatDate(post.publishedAt)}
              </time>
              <span className="text-sm text-neutral-400">
                · {post.readingTimeMinutes} Min. Lesezeit
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-center">
              {post.title}
            </h1>
          </div>
        </section>

        {/* ── Article body ── */}
        <section className="py-16 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 right-8 w-72 h-72 bg-neutral-200/40 rounded-full blur-3xl" />
            <div className="absolute bottom-16 left-8 w-80 h-80 bg-neutral-300/30 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-[1300px] mx-auto px-6 sm:px-8">
            <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-12 xl:gap-16">

              {/* ── Sticky TOC ── */}
              <aside className="hidden lg:block w-[220px] shrink-0 self-start sticky top-28">
                <BlogTOC items={tocItems} />
              </aside>

              {/* ── Main content ── */}
              <div className="w-full lg:w-[740px] lg:shrink-0">
                <article className="backdrop-blur-2xl bg-white/65 border border-white/60 rounded-3xl shadow-2xl shadow-neutral-200/40 p-8 sm:p-12">
                  <div className="space-y-5">
                    {post.content.map((block, i) => renderBlock(block, i))}
                  </div>
                </article>
              </div>

            </div>

            {/* ── CTA ── */}
            <div className="mt-16 relative overflow-hidden bg-gradient-to-br from-[#0f1e38] via-[#1a2f52] to-[#0f1e38] rounded-3xl px-8 py-12 sm:px-12 sm:py-16">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#B8922A]/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#B8922A]/7 rounded-full blur-3xl pointer-events-none" />
              <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div>
                  <p className="text-xs font-bold text-[#D4A843] uppercase tracking-widest mb-2">
                    Professionelle Netzanmeldung
                  </p>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                    Jetzt Anlage anmelden lassen
                  </h2>
                  <p className="text-neutral-400 text-sm leading-relaxed max-w-lg">
                    PV, Wärmepumpe oder Wallbox – wir übernehmen die komplette Anmeldung beim Netzbetreiber. Schnell, korrekt, deutschlandweit.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="shrink-0 inline-flex items-center justify-center rounded-xl bg-[#B8922A] hover:bg-[#9A7820] text-white font-semibold px-8 py-3.5 text-sm shadow-lg shadow-black/30 transition-all hover:shadow-xl"
                >
                  Kontakt aufnehmen
                </a>
              </div>
            </div>

            {/* ── Weitere Artikel ── */}
            {related.length > 0 && (
              <div className="mt-16">
                <h2 className="text-lg font-bold text-neutral-900 mb-6">
                  Weitere Artikel
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {related.map((r) => (
                    <a
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="group bg-white border border-stone-200 rounded-3xl shadow-md shadow-stone-200/70 p-6 flex flex-col hover:shadow-xl hover:border-[#B8922A]/30 hover:-translate-y-1 transition-all duration-200"
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                            categoryStyle[r.category] ??
                            "bg-neutral-100 text-neutral-700 border-neutral-200"
                          }`}
                        >
                          {r.category}
                        </span>
                        <span className="text-xs text-[#A09890]">{formatDate(r.publishedAt)}</span>
                        <span className="text-xs text-[#A09890]">· {r.readingTimeMinutes} Min.</span>
                      </div>
                      <h3 className="text-base font-bold text-[#3D3935] mb-3 group-hover:text-[#B8922A] transition-colors leading-snug">
                        {r.title}
                      </h3>
                      <p className="text-sm text-[#8A8480] leading-relaxed mb-5 flex-1">
                        {r.excerpt}
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
            )}

            {/* ── Back to blog ── */}
            <div className="mt-10 pb-6 text-center">
              <a
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Zurück zum Blog
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
