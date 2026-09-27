import type { MetadataRoute } from "next";

import { SITE_URL as siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const maj = new Date();

  return [
    {
      url: siteUrl,
      lastModified: maj,
      changeFrequency: "monthly",
      priority: 1,
    },
    // Les pages légales sont utiles au visiteur mais n'ont pas vocation à
    // remonter dans les résultats de recherche : priorité basse, et elles
    // portent déjà `robots: { index: false }` dans leurs métadonnées.
    {
      url: `${siteUrl}/mentions-legales`,
      lastModified: maj,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${siteUrl}/confidentialite`,
      lastModified: maj,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
