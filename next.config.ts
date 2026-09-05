import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // `images.domains` est déprécié depuis Next 14 ; utiliser `images.remotePatterns`
  // si des images distantes sont ajoutées un jour. Toutes les images sont locales
  // (public/) pour l'instant, donc aucune configuration n'est nécessaire.
};

export default nextConfig;
