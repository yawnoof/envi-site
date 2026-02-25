import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Montserrat } from "next/font/google";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

import Preloader from "@/components/Preloader";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "ENVI — Premium Import & Distribution",
    description: "Escape Ordinary. Be The ENVI. Premium import and distribution company located in Tallinn, Estonia.",
    alternates: {
      languages: {
        'en': '/en',
        'et': '/et',
        'ru': '/ru',
      }
    }
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang} className={`${cormorant.variable} ${manrope.variable} ${montserrat.variable}`}>
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
