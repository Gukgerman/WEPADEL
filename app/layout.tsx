import type { Metadata } from "next";
import { Unbounded, TikTok_Sans } from "next/font/google";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const tiktokSans = TikTok_Sans({
  variable: "--font-tiktok-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WE are PADEL — падел-клуб під відкритим небом",
  description:
    "WE are PADEL — відкритий падел-клуб на території глемпінгу «Двері в ліс» у Вінниці. Оренда корту, тарифи, контакти.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk" className={`${unbounded.variable} ${tiktokSans.variable}`}>
      <body>
        <Loader />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
