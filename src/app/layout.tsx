import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
});

// Renseignez NEXT_PUBLIC_SITE_URL dans .env.local (ou dans les variables Vercel)
// avec l'URL réelle du site une fois le domaine choisi.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-alfa.vercel.app";

const description =
  "Ingénieur informatique freelance, spécialisé en développement full-stack et en IA (ML, DL, NLP). " +
  "Je conçois des applications web sur mesure " +
  "(React, Next.js, Spring Boot) et des solutions d’intelligence artificielle : chatbots, agents IA, " +
  "RAG et automatisation. Disponible en télétravail pour vos projets.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alfa Nasandratra - Ingénieur Informatique Freelance | Full-Stack & IA",
    template: "%s | Alfa Nasandratra",
  },
  description,
  keywords: [
    "ingénieur informatique freelance",
    "ingénieur IA freelance",
    "développeur freelance",
    "freelance full-stack",
    "développeur React freelance",
    "développeur Next.js",
    "freelance intelligence artificielle",
    "consultant IA",
    "développeur Python",
    "chatbot IA sur mesure",
    "agents IA",
    "RAG",
    "automatisation n8n",
    "Spring Boot",
    "développeur web à distance",
  ],
  authors: [{ name: "RAMANATENANIAVO Nasandratra Alfa" }],
  creator: "RAMANATENANIAVO Nasandratra Alfa",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Alfa Nasandratra - Ingénieur Informatique Freelance",
    title: "Ingénieur Informatique Freelance - Full-Stack & IA",
    description,
    images: [
      {
        url: "/photo-alfa.jpg",
        width: 1200,
        height: 630,
        alt: "RAMANATENANIAVO Nasandratra Alfa, ingénieur informatique freelance full-stack et IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ingénieur Informatique Freelance - Full-Stack & IA",
    description,
    images: ["/photo-alfa.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Données structurées : aide Google à afficher le profil comme un prestataire de services.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Alfa Nasandratra - Ingénieur Informatique Freelance",
  description,
  url: siteUrl,
  image: `${siteUrl}/photo-alfa.jpg`,
  email: "alfahashirama@gmail.com",
  telephone: "+261347828405",
  priceRange: "Sur devis",
  areaServed: [
    { "@type": "Country", name: "France" },
    { "@type": "Country", name: "Belgique" },
    { "@type": "Country", name: "Suisse" },
    { "@type": "Country", name: "Canada" },
  ],
  availableLanguage: ["fr", "en", "mg"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fianarantsoa",
    addressCountry: "MG",
  },
  founder: {
    "@type": "Person",
    name: "RAMANATENANIAVO Nasandratra Alfa",
    jobTitle: "Ingénieur informatique - Développement full-stack & IA",
  },
  knowsAbout: [
    "Développement web full-stack",
    "React",
    "Next.js",
    "Spring Boot",
    "Intelligence artificielle",
    "Traitement automatique du langage",
    "Agents IA",
    "MLOps",
    "Cybersécurité",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${firaCode.variable} scroll-smooth`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
