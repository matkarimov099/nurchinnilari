import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import {
  Cinzel,
  Cormorant_Garamond,
  Montserrat,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nur Chinnilar Olami | Premium Uy Buyumlari",
  description:
    "Premium chinni, kristall va zamonaviy uy-ro'zg'or buyumlari. Yuqori sifat, eng yaxshi narxlar va tez yetkazish.",
  keywords: [
    "chinni",
    "kristall",
    "uy buyumlari",
    "idish-tovoq",
    "premium",
    "Toshkent",
    "sovg'a",
  ],
  authors: [{ name: "Nur Chinnilar Olami" }],
  openGraph: {
    title: "Nur Chinnilar Olami | Premium Uy Buyumlari",
    description:
      "Premium chinni, kristall va zamonaviy uy-ro'zg'or buyumlari. Yuqori sifat, eng yaxshi narxlar va tez yetkazish.",
    type: "website",
    locale: "uz_UZ",
    alternateLocale: ["ru_RU", "en_US"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${cormorant.variable} ${montserrat.variable} ${cinzel.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
