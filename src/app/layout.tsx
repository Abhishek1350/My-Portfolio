import "./globals.css";
import { inter, jetbrainsMono } from "@/config/fonts";
import { metaData } from "@/config/metadata";
import { Header } from "@/components";

export const metadata = metaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
