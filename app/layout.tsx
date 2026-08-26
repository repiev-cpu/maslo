import type { Metadata } from "next";
import { Manrope, Russo_One } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic", "latin"],
});

const russoOne = Russo_One({
  variable: "--font-display",
  weight: "400",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "Автомаслоф — замена масла в Кстово",
  description: "Замена масла в двигателе, АКПП, CVT и DSG в Кстово. Собственный магазин масел и фильтров, опытные мастера и предварительная запись.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${russoOne.variable}`}>{children}</body>
    </html>
  );
}
