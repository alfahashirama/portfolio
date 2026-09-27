/**
 * Adresse publique du site, source unique pour les métadonnées, le plan du site,
 * robots.txt et les données structurées.
 *
 * Attention : une valeur de repli mal choisie est pire que pas de valeur du tout.
 * `portfolio-alfa.vercel.app` avait été retenu au jugé et appartient en réalité à
 * quelqu'un d'autre : la balise canonique, le sitemap et les balises Open Graph
 * désignaient donc le site d'un tiers.
 *
 * Pour utiliser un domaine personnalisé, renseignez NEXT_PUBLIC_SITE_URL dans les
 * variables d'environnement Vercel plutôt que de modifier ce fichier.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-sable-omega-73.vercel.app";

export const AUTEUR = "RAMANATENANIAVO Nasandratra Alfa";
export const EMAIL = "alfahashirama@gmail.com";
