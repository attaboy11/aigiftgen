import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://codex.solar"),
  title: "Codex Solar — Intelligent Solar Projects",
  description:
    "Codex Solar delivers high-performance photovoltaic systems, analytics, and lifecycle support for modern energy leaders.",
  openGraph: {
    title: "Codex Solar — Intelligent Solar Projects",
    description:
      "Codex Solar delivers high-performance photovoltaic systems, analytics, and lifecycle support for modern energy leaders.",
    url: "https://codex.solar",
    siteName: "Codex Solar",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Codex Solar array at sunset"
      }
    ],
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Codex Solar — Intelligent Solar Projects",
    description:
      "Codex Solar delivers high-performance photovoltaic systems, analytics, and lifecycle support for modern energy leaders.",
    images: ["/og.png"],
    site: "@codexsolar"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.25),transparent_55%)]" />
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
