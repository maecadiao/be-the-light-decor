import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCallButton from "@/components/layout/FloatingCallButton";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Be The Light Decor | Outdoor Lighting in Southeast Louisiana",
    template: "%s | Be The Light Decor",
  },
  description:
    "Professional landscape lighting, holiday displays, and event lighting serving Southeast Louisiana. Local. Trusted. Family Owned.",
  keywords: [
    "outdoor lighting",
    "landscape lighting",
    "holiday lighting",
    "event lighting",
    "Louisiana",
    "Covington",
    "Mandeville",
    "New Orleans",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="bg-white text-[#1a1a1a] font-body antialiased min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCallButton />
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="67fd69739b7e540175575d33"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
