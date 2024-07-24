import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/ui/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jnjuruguay-website",
  description: "Powered by Roy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4 font-sans antialiased ${inter.className}`}>
        <header className="text-xl font-bold leading-[3rem] p-4">
          <Navbar />
        </header>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[2.5rem] bg-secondary text-secondary-foreground p-2">
          © {new Date().getFullYear()} 45° JNJ Canelones-Pando
        </footer>
      </body>
    </html>
  );
}
