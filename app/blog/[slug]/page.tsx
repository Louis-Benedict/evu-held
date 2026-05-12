import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, formatDate, type ContentBlock } from "@/lib/blog";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
          className="text-xl font-bold text-neutral-900 mt-10 mb-3 first:mt-0"
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
      return (
        <div
          key={index}
          className="mt-10 rounded-2xl bg-[#2BB33A]/8 border border-[#2BB33A]/25 p-6"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#2BB33A] flex items-center justify-center shrink-0 mt-0.5">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-neutral-900 mb-1">Unser Service</p>
              <p className="text-sm text-neutral-700 leading-relaxed">{block.text}</p>
              <a
                href="/contact"
                className="inline-flex items-center mt-4 rounded-xl bg-neutral-900 hover:bg-neutral-700 text-white text-sm font-semibold px-5 py-2.5 shadow-md transition-all"
              >
                Jetzt Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
      );
  }
}

// ── Page ───────────────────────────────────────────────────────────────────────

const categoryStyle: Record<string, string> = {
  "PV-Anlage": "bg-yellow-100/80 text-yellow-800 border-yellow-200/80",
  Wärmepumpe: "bg-blue-100/80 text-blue-800 border-blue-200/80",
  Wallbox: "bg-purple-100/80 text-purple-800 border-purple-200/80",
  Ratgeber: "bg-[#2BB33A]/10 text-[#1e7a27] border-[#2BB33A]/30",
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "EVU-HELD",
      url: "https://evu-held.de",
    },
    publisher: {
      "@type": "Organization",
      name: "EVU-HELD",
      url: "https://evu-held.de",
    },
    url: `https://evu-held.de/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://evu-held.de/blog/${post.slug}`,
    },
  };

  // Related posts (other posts, up to 3)
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-neutral-100/40 to-neutral-50 text-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main>
        {/* ── Article header ── */}
        <section className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white py-16">
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
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

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                  categoryStyle[post.category] ??
                  "bg-neutral-100 text-neutral-700 border-neutral-200"
                }`}
              >
                {post.category}
              </span>
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

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
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
          <div className="relative max-w-3xl mx-auto px-6 sm:px-8">
            <article className="backdrop-blur-2xl bg-white/65 border border-white/60 rounded-3xl shadow-2xl shadow-neutral-200/40 p-8 sm:p-12">
              <div className="space-y-5">
                {post.content.map((block, i) => renderBlock(block, i))}
              </div>
            </article>

            {/* ── Related posts ── */}
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
                      className="group backdrop-blur-2xl bg-white/65 border border-white/60 rounded-2xl shadow-md p-5 flex flex-col hover:bg-white/80 transition-all duration-300"
                    >
                      <span
                        className={`inline-flex self-start items-center px-2 py-0.5 rounded-full text-xs font-medium border mb-3 ${
                          categoryStyle[r.category] ??
                          "bg-neutral-100 text-neutral-700 border-neutral-200"
                        }`}
                      >
                        {r.category}
                      </span>
                      <p className="text-sm font-semibold text-neutral-900 group-hover:text-[#2BB33A] transition-colors leading-snug">
                        {r.title}
                      </p>
                      <p className="text-xs text-neutral-400 mt-2">
                        {r.readingTimeMinutes} Min. Lesezeit
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Back to blog */}
            <div className="mt-10 text-center">
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
