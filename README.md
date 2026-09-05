# Portfolio — Nasandratra Alfa

Site vitrine de **RAMANATENANIAVO Nasandratra Alfa**, ingénieur informatique freelance
spécialisé en développement full-stack et en intelligence artificielle (ML, DL, NLP).

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript** strict
- **Tailwind CSS 4** — thème déclaré en CSS dans `src/app/globals.css`, sans `tailwind.config.ts`
- Polices auto-hébergées via `next/font` (Inter, Fira Code)
- Déployé sur **Vercel**

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm run lint
```

## Structure

Page unique. `src/app/page.tsx` empile les composants de `src/components/` dans cet ordre :

| Section | Rôle |
|---|---|
| `Hero` | Positionnement et appels à l'action |
| `Services` | Prestations, déroulé d'une mission, modalités |
| `About` | Parcours et références |
| `Skills` | Compétences par domaine |
| `Projects` | Réalisations, avec liens de démo quand ils existent |
| `Certifications` | Certificats consultables en PDF |
| `Contact` | Formulaire et canaux directs |

La navigation se fait par ancres (`#services`, `#about`, …) correspondant aux `id`
des `<section>`. Les libellés sont dupliqués dans `Navbar.tsx` et `Footer.tsx`.

## Conventions

Les styles sont écrits en **objets `style` inline**, pas en classes Tailwind — Tailwind
ne sert qu'aux quelques utilitaires responsives que l'inline ne peut pas exprimer.

Chaque composant est un composant client avec une **garde d'hydratation** : un rendu
statique est servi côté serveur, puis remplacé après montage. Les deux branches doivent
rester cohérentes.

Le contenu vit dans des tableaux en tête de fichier (`services`, `projects`,
`skillCategories`, `certifications`) — éditer ces tableaux, pas le JSX.

Voir `CLAUDE.md` pour le détail.

## Projet lié

[**Anonymiseur RGPD**](https://huggingface.co/spaces/alfa2025/demo_anonyme) — démonstration
de détection et masquage de données personnelles dans des documents français, exécutée
entièrement dans le navigateur.

## Contact

📧 alfahashirama@gmail.com
