import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components";
import { Libre_Franklin } from "next/font/google";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
