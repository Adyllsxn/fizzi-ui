import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const alpino = localFont({
  src: "../../public/fonts/Alpino-Variable.woff2",
  variable: "--font-alpino",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fizzi - 3D Experience",
  description: "Experiência interativa 3D com latinhas de refrigerante",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn(
        inter.variable,
        alpino.variable,
        "antialiased font-sans"
      )}>
        {children}
      </body>
    </html>
  );
}