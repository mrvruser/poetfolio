import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-cyan-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}
