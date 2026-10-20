import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { EVENT_CONFIG } from "@/config/event";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#0B1628",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${EVENT_CONFIG.name} · ${EVENT_CONFIG.edition} | Ekiti State University`,
  description: `${EVENT_CONFIG.dates.display} at ${EVENT_CONFIG.institution.name}, ${EVENT_CONFIG.institution.city}. Three days of hackathons, workshops, mentorship, and tech entrepreneurship for students and creators.`,
  keywords: [
    "Interswitch",
    "Discovery Series 2026",
    "EKSU",
    "Ekiti State University",
    "Hackathon",
    "African Tech",
    "Nigeria Tech Students",
    "Software Engineering",
    "Ado-Ekiti Innovation",
  ],
  authors: [{ name: "Discovery Series Community Concept" }],
  openGraph: {
    title: `${EVENT_CONFIG.name} — ${EVENT_CONFIG.edition}`,
    description: `Bringing together student developers, designers, data enthusiasts, and entrepreneurs at EKSU from ${EVENT_CONFIG.dates.display}. Register via the official portal.`,
    url: "https://discoveryseries-eksu.org",
    siteName: "Discovery Series 2026 · EKSU Concept",
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: `${EVENT_CONFIG.name} — ${EVENT_CONFIG.edition}`,
    description: `Three days of technology, hackathons, and innovation at Ekiti State University. ${EVENT_CONFIG.dates.display}.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${mono.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-[#002D5B] text-white selection:bg-[#00A3E0]/40 selection:text-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#F97316] focus:text-white focus:font-semibold focus:rounded-md focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
