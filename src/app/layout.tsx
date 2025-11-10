import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KayDahBlaq | International Fashion & Brand Model Portfolio",
  description: "Explore KayDahBlaq, international model and influencer featured in top fashion brands like GO CRZY, NARC, and TRANCE. Discover runway, editorial, commercial, and video modeling work.",
  keywords: [
    "KayDahBlaq",
    "professional model",
    "international model",
    "fashion model",
    "runway model",
    "editorial photography",
    "commercial campaigns",
    "fashion photoshoot",
    "model portfolio",
    "top fashion brands",
    "luxury brand campaigns",
    "social media influencer"
  ],
  authors: [{ name: "KayDahBlaq" }],
  creator: "KayDahBlaq",
  openGraph: {
    title: "KayDahBlaq | International Fashion & Brand Model Portfolio",
    description: "Discover KayDahBlaq's modeling work across fashion, commercial, editorial, and video projects with top global brands.",
    url: "https://kay-dah-blaq-portfolio.vercel.app/",
    siteName: "KayDahBlaq Portfolio",
    images: [
      {
        url: "https://kay-dah-blaq-portfolio.vercel.app/hero-pic-8.jpg",
        width: 1200,
        height: 630,
        alt: "KayDahBlaq Model Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KayDahBlaq | International Fashion & Brand Model Portfolio",
    description: "Explore the portfolio of KayDahBlaq, featured in top fashion campaigns, runway shows, editorial spreads, and more.",
    images: ["https://kay-dah-blaq-portfolio.vercel.app/hero-pic-8.jpg"],
    creator: "@KayDahBlaq",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
