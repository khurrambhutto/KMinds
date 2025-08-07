import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
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
  title: "KMinds solutions — Flutter, Python, Agentic AI, RAG, ML/DL, Full‑Stack",
  description:
    "KMinds solutions delivers Flutter apps, Python engineering, agentic AI and RAG automations, machine learning & deep learning, and full‑stack web development.",
  metadataBase: new URL("https://kminds.solutions"),
  openGraph: {
    title: "KMinds solutions",
    description:
      "Flutter apps, Python, agentic AI & RAG automations, ML/DL, and full‑stack web development.",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
