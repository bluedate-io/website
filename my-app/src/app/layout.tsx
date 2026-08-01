import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    "Tryren uses AI to match you with one compatible person on campus every week for a real-life coffee meet — no swiping, no ghosting. Dating designed for college students in India.",
  keywords: [
    "college dating app India",
    "AI dating app",
    "campus dating",
    "real life meets college",
    "coffee meets college students",
    "no swipe dating",
    "tryren",
    "IIT dating app",
    "NIT dating app",
    "college matchmaking India",
    "AI matchmaking app",
    "student dating app India",
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
      "AI-powered campus dating. One curated match per week. Meet for a real coffee date — no random swipes, no wasted time.",
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
      "AI-powered campus dating. One curated match per week. Meet for a real coffee date — no swipes needed.",
    images: ["/og-image.png"],
    creator: "@tryren_io",
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  category: "dating",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
