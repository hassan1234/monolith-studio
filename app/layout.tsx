import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.monolithstudio.co"),
  title: "Monolith — Design · Build · Surfaces",
  description:
    "Monolith. One studio across three disciplines — Design, Build and Surfaces. Considered, tactile, made to last.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
        {/* GoHighLevel chat widget — "A2P Compliance Chat Widget Mixed" */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6b05f1d829fc2dc00f3c8416"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
