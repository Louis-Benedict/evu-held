import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "EVU-HELD – Netzanmeldung leicht gemacht",
  description:
    "Ihr professioneller Partner für alle Arten der Netzanmeldung – PV, Wärmepumpe & Wallbox. Persönlich, zuverlässig, ohne Aufwand für Sie.",
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://evu-held.de/#organization",
      "name": "EVU Held",
      "url": "https://evu-held.de",
      "logo": {
        "@type": "ImageObject",
        "url": "https://evu-held.de/logo.png",
      },
      "telephone": "+4915213323256",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Görlitzer Ring 31A",
        "postalCode": "23879",
        "addressLocality": "Grambek",
        "addressCountry": "DE",
      },
      "vatID": "DE306834438",
      "areaServed": { "@type": "Country", "name": "Germany" },
      "description":
        "Professionelle Netzanmeldung für PV-Anlagen, Wärmepumpen und Wallboxen – deutschlandweit.",
    },
    {
      "@type": "WebSite",
      "@id": "https://evu-held.de/#website",
      "url": "https://evu-held.de",
      "name": "EVU Held",
      "inLanguage": "de-DE",
      "publisher": { "@id": "https://evu-held.de/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
