import type { Metadata } from "next";
import "./globals.css";
import Header from "@/component/Header";
import { Roboto } from "next/font/google";
import Footer from "@/component/Footer";

export const metadata: Metadata = {
  title: "ZULL",
  description: "%s | ZULL",
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700', '900'], 
  style: ['normal', 'italic'],
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
