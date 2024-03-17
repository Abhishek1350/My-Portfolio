import type { Metadata } from "next";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Header, Footer, ScrollProgress, ScrollToTop, MainLoader } from "@/components";
import "./globals.css";
import { Libre_Franklin } from "next/font/google";
import { Suspense } from "react";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title:
    "Abhishek Bhardwaj | Expert Software Engineer | Chamba, Himachal Pradesh, India",
  description:
    "Abhishek Bhardwaj, a top Software Engineer from Chamba, Himachal Pradesh, India. Expert in crafting lightning-fast, responsive, and modern websites. Explore now!",
};

const font = Libre_Franklin({
  weight: ["400", "500", "700", "900"] as const,
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={font.className}>
        <MantineProvider defaultColorScheme="auto">
          <Suspense fallback={<MainLoader />}>
            <ScrollProgress />
            <Header />
            {children}
            <ScrollToTop />
            <Footer />
          </Suspense>
        </MantineProvider>
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
