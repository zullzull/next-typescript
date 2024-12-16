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
      <head>
        <script
          dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5GM3W66V')`}}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5GM3W66V"
            height="0"
            width="0"
            style={{
              display:"none",
              visibility:"hidden"
            }}
          />
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
      </body>
    </html>
  );
}
