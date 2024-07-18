import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { FloatingNav } from "@/components/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhishek Portfolio",
  description: "Abhishek Bhardwaj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <FloatingNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
