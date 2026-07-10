import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oleksandr Kazan - Frontend Developer",
  description: "Frontend Developer based in Lviv, Ukraine. Building applications with React, Next.js, and TypeScript.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Lviv", "Ukraine"],
  authors: [{ name: "Oleksandr Kazan" }],
  openGraph: {
    title: "Oleksandr Kazan - Frontend Developer",
    description: "Frontend Developer based in Lviv, Ukraine. Building applications with React, Next.js, and TypeScript.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Oleksandr Kazan - Frontend Developer",
    description: "Frontend Developer based in Lviv, Ukraine. Building applications with React, Next.js, and TypeScript.",
  },
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
