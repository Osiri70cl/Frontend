import "@/styles/globals.scss";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SportSee - Analysez votre activité physique et votre alimentation",
  description: "Analysez votre activité physique et votre alimentation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
