import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "EVU-HELD – Netzanmeldung leicht gemacht",
  description:
    "Ihr professioneller Partner für alle Arten der Netzanmeldung – PV, Wärmepumpe & Wallbox. Persönlich, zuverlässig, ohne Aufwand für Sie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
