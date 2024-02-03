import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Abhishek Bhardwaj | Expert Software Engineer | Chamba, Himachal Pradesh, India",
  description: "Abhishek Bhardwaj, a top Software Engineer from Chamba, Himachal Pradesh, India. Expert in crafting lightning-fast, responsive, and modern websites. Explore now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
