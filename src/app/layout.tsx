import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Bethesda Hope Church | Tbilisi, Georgia",
  description:
    "A Christ-centered community raising up disciples among the nations in Tbilisi, Georgia. Sundays at 3 PM, Fridays at 7 PM.",
  openGraph: {
    title: "Bethesda Hope Church",
    description:
      "Walking as God's Beloved — A Christ-centered community in Tbilisi, Georgia.",
    locale: "en_US",
    type: "website",
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
      className={`${dmSans.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
