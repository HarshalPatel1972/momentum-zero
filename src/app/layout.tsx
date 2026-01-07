import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Momentum | Remote Control for AI Agents",
  description:
    "Take full control of your autonomous AI agents from anywhere. Monitor, debug, and manage in real-time with enterprise-grade security.",
  keywords: [
    "AI agents",
    "remote control",
    "AI management",
    "autonomous agents",
    "AI monitoring",
    "AI debugging",
  ],
  authors: [{ name: "Momentum Team" }],
  creator: "Momentum",
  publisher: "Momentum",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://momentum.dev",
    siteName: "Momentum",
    title: "Momentum | Remote Control for AI Agents",
    description:
      "Take full control of your autonomous AI agents from anywhere. Monitor, debug, and manage in real-time with enterprise-grade security.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Momentum - Remote Control for AI Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Momentum | Remote Control for AI Agents",
    description:
      "Take full control of your autonomous AI agents from anywhere. Monitor, debug, and manage in real-time with enterprise-grade security.",
    images: ["/og-image.png"],
    creator: "@momentum",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {/* Noise Overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        
        {children}
      </body>
    </html>
  );
}
