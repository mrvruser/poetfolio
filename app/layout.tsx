import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { NavigationProvider } from "@/components/NavigationContext";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vijayaregunath T | Poetfolio — The Art of Data Insights and Web Solutions",
  description:
    "Personal portfolio of Vijayaregunath T — Aspiring AI & Data Science Professional, Web Developer, and Creative Technologist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} dark`}>
      <body className="antialiased selection:bg-cyan-400 selection:text-black">
        <NavigationProvider>{children}</NavigationProvider>
      </body>
    </html>
  );
}
