import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TawkMessenger from "./components/tawk/TawkMessenger";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://tryren.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Tryren — Real Coffee Meets at Your College, No Swiping",
    template: "%s | Tryren",
  },
  description:
    "Tryren uses AI to match you with one compatible person on campus every week for a real-life coffee meet — no swiping, no ghosting. Built for college students in India.",
  keywords: [
    "college matchmaking app India",
    "AI matchmaking app",
    "campus matchmaking",
    "real life meets college",
    "coffee meets college students",
    "no swipe matchmaking",
    "tryren",
    "IIT matchmaking app",
    "NIT matchmaking app",
    "college matchmaking India",
    "student matchmaking app India",
  ],

  authors: [{ name: "Tryren" }],
  creator: "Tryren",
  publisher: "Tryren",

  alternates: {
    canonical: BASE_URL,
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

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Tryren",
    title: "Tryren — Real Coffee Meets at Your College, No Swiping",
    description:
      "AI-powered campus matchmaking. One curated match per week. Meet for a real coffee — no random swipes, no wasted time.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tryren — Real meets. Real connections.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tryren — Real Coffee Meets at Your College, No Swiping",
    description:
      "AI-powered campus matchmaking. One curated match per week. Meet for a real coffee — no swipes needed.",
    images: ["/og-image.png"],
    creator: "@tryren_in",
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  category: "lifestyle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <TawkMessenger />
      </body>
    </html>
  );
}
