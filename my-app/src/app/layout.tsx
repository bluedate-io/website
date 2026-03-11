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

export const metadata: Metadata = {
  title: "Bluedate — Real Dates. No Swiping.",
  description:
    "Bluedate uses AI agents to find you a compatible match and send a real-life date invite. No swiping, no algorithms. Just real connections.",
  keywords: [
    "dating app",
    "real dates",
    "AI matchmaking",
    "no swiping",
    "bluedate",
    "date invite",
    "meet in person",
  ],
  metadataBase: new URL("https://bluedate.io"),
  openGraph: {
    title: "Bluedate — Real Dates. No Swiping.",
    description:
      "Tell us your type, interests, and vibe. Our AI agent finds a compatible match and sends you a real-life date invite.",
    url: "https://bluedate.io",
    siteName: "Bluedate",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluedate — Real Dates. No Swiping.",
    description:
      "Tell us your type, interests, and vibe. Our AI agent finds a compatible match and sends you a real-life date invite.",
    site: "@bluedateio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
