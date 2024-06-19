import type { Metadata } from "next";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import {
  Header,
  Footer,
  ScrollProgress,
  ScrollToTop,
  MainLoader,
} from "@/components";
import "./globals.css";
import { Libre_Franklin } from "next/font/google";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_CURRENT_SITE_URL as string),
  openGraph: {
    type: "website",
    locale: "en_US",
    title:
      "Abhishek Bhardwaj | React/Next.js Developer based in Himachal Pradesh, India",
    description:
      "Explore the portfolio of Abhishek Bhardwaj based in Himachal Pradesh, a skilled React/Next.js Developer. Discover expertise in ReactJS, NextJS, Redux, Material UI, and TailwindCSS showcased through innovative web development projects.",
    images: [
      {
        url: "/og-image.png",
        alt: "Abhishek Bhardwaj | React/Next.js Developer based in Himachal Pradesh, India",
      },
    ],
  },
  title:
    "Abhishek Bhardwaj | React/Next.js Developer based in Himachal Pradesh, India",
  description:
    "Explore the portfolio of Abhishek Bhardwaj based in Himachal Pradesh, a skilled React/Next.js Developer. Discover expertise in ReactJS, NextJS, Redux, Material UI, and TailwindCSS showcased through innovative web development projects.",
  keywords:
    "Abhishek Bhardwaj, ReactJS Developer, NextJS Developer, ReactJS, NextJS, Redux, Material UI, TailwindCSS, Web Development, Portfolio, React developer, Next js developer, Himachal Pradesh, India",
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
        {/* <Analytics />
        <SpeedInsights /> */}
      </body>
    </html>
  );
}
