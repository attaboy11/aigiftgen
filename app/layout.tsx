import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Gift Generator – Find the perfect gift (with AI Santa)",
  description: "Type who you're shopping for. AI Santa suggests witty, spot-on gifts with direct links.",
  openGraph: {
    title: "AI Gift Generator – Find the perfect gift (with AI Santa)",
    description: "Type who you're shopping for. AI Santa suggests witty, spot-on gifts with direct links.",
    url: "https://aigiftgen.co.uk",
    siteName: "AI Gift Generator",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Gift Generator – Find the perfect gift (with AI Santa)",
    description: "Type who you're shopping for. AI Santa suggests witty, spot-on gifts with direct links.",
    images: ["/og.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
