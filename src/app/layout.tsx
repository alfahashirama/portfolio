import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alfa Nasandratra — AI & Cybersecurity Portfolio",
  description:
    "Portfolio de RAMANATENANIAVO Nasandratra Alfa — Étudiant Master 2 Informatique, spécialisé en Intelligence Artificielle et Cybersécurité.",
  keywords: ["AI", "Machine Learning", "Cybersecurity", "NLP", "Madagascar"],
  authors: [{ name: "RAMANATENANIAVO Nasandratra Alfa" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-navy-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}