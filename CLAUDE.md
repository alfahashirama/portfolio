# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # dev server on :3000 (Next 16 — Turbopack is the default bundler)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (flat config, eslint-config-next core-web-vitals + typescript)
```

There is no test suite and no test runner installed.

`npm run lint` currently reports ~10 `react-hooks/set-state-in-effect` errors. They all come
from the deliberate hydration-guard pattern described below and are pre-existing; `next build`
does not run lint, so they do not block a deploy. Don't "fix" them by deleting the guard.

## What this is

A single-page French-language site positioning RAMANATENANIAVO Nasandratra Alfa as a
**freelance software engineer (ingénieur informatique) specialising in full-stack development
and AI — ML, DL, NLP — for French-speaking clients**. The studies/Master framing was
deliberately removed: don't reintroduce "Master 2" or "étudiant" anywhere in the copy. Next.js 16 App Router,
React 19, TypeScript strict, `@/*` → `./src/*`.

[src/app/page.tsx](src/app/page.tsx) is the only route: it stacks eight components from
[src/components/](src/components/) in fixed order. Navigation is anchor-based — Navbar and
Footer link to `#services`, `#about`, `#skills`, `#projects`, `#certifications`, `#contact`,
which are the `id`s on each component's root `<section>`. Adding a section means adding the
component to `page.tsx`, giving it a matching `id`, and adding the link in **both**
`Navbar.tsx` and `Footer.tsx` (each keeps its own copy of the link list).

Ordering is deliberate: `Services` sits directly after `Hero`, so a prospect sees the offer
before the biography.

## Conventions that are non-obvious

**Styling is inline `style={}` objects, not Tailwind.** Every component builds
`React.CSSProperties` with hardcoded hex colors. Tailwind is installed and *does* work
(v4, see below), but it is used only for the handful of responsive utilities that inline
styles cannot express — `hidden md:flex`, `md:hidden`, `hidden sm:inline-block` in
`Navbar.tsx`. Follow the inline-style convention; reach for a utility class only when you
need a media query. The palette: background `#060d18` / `#070e1f`, cards `#112652`,
borders `#1e3a70`, accent cyan `#22d3ee` / `#06b6d4`, success green `#4ade80`,
body text `#f1f5f9`, muted `#94a3b8`.

**Tailwind is v4 and configured in CSS — there is no `tailwind.config.ts`.** The theme
(the `navy-*` scale, font tokens, keyframes) lives in the `@theme` block of
[globals.css](src/app/globals.css). Do not re-add a v3-style `tailwind.config.ts`: the
`@tailwindcss/postcss` plugin bundles its own Tailwind and never reads that file, which
previously meant no `@media` rules were emitted at all and the desktop nav was invisible at
every width. Your editor may warn "Unknown at rule @theme" — that is VS Code's CSS service,
not a real error.

**`--font-inter` and `--font-fira` come from `next/font/google`** in
[layout.tsx](src/app/layout.tsx) and are applied as classes on `<html>`. Components read them
via `var(--font-mono)` / `var(--font-inter)`; `--font-mono` is remapped onto Fira Code in the
`@theme` block. Adding a font means wiring it the same way, not a bare `font-family`.

**Every component is `"use client"` with a two-render hydration guard.** The pattern is:

```tsx
const [mounted, setMounted] = useState(false);
useEffect(() => { setMounted(true); }, []);
if (!mounted) return <section id="…">{/* static, non-animated fallback */}</section>;
```

The pre-mount branch is what gets server-rendered, so it must be markup that can't drift from
the client (no dates, no random values, no measured layout). `Footer.tsx` uses this to keep
`new Date().getFullYear()` out of SSR. When editing a component, **keep both branches in
sync** — the fallback duplicates the section's heading and `id`, so a headline change has to
be made twice.

**Scroll reveal is hand-rolled `IntersectionObserver`,** not a library, in Services, About,
Skills, Projects, Certifications, and Contact: a `ref` on the section flips a `visible` state
that drives `opacity` / `transform` transitions in the inline styles.

**Page content lives in module-level const arrays** at the top of each component
(`services`, `process`, `modalities`, `projects`, `skillCategories`, `certifications`,
`infos`, `navLinks`). Content edits mean editing those arrays, not JSX.

**French copy uses the typographic apostrophe `’` (U+2019), never `'` or `&apos;`.** This is
both a quality signal for the target audience and lint-safe — a straight `'` in JSX text trips
`react/no-unescaped-entities`. Decorative `// section` labels in JSX must be wrapped as
`{"// section"}` or they trip `react/jsx-no-comment-textnodes`.

**Project cards carry optional `demoUrl` / `repoUrl` / `confidential` fields.** They are
`null` / `false` by default and the link row renders only when at least one is set, so an
undeployed project simply shows no buttons rather than a dead link. `confidential: true`
(the Armée de l'Air project) prints "démonstration sur demande" instead.

**Certification categories are a closed set.** The `filters` array in `Certifications.tsx`
(`Tous`, `Data & IA`, `Cloud & DevOps`, `Cybersécurité`) must exactly match the `category`
strings on the cert objects, or a filter silently shows nothing. Same contract between
`filters` and `category` in `Projects.tsx`.

**The contact form has no backend by design.** `handleSubmit` in
[Contact.tsx](src/components/Contact.tsx) builds a `mailto:` URL and opens the visitor's mail
client, so no lead can be lost silently. If a real backend is ever added, remove the
"votre logiciel de messagerie vient de s'ouvrir" success copy along with it.

`framer-motion` and `lucide-react` are in `package.json` but unused — animations are CSS
transitions and icons are emoji string literals.

## Known gaps

- `NEXT_PUBLIC_SITE_URL` is unset, so `metadataBase` and the JSON-LD fall back to
  `https://portfolio-alfa.vercel.app`. Set it once the real domain exists.
- GitHub and LinkedIn links are placeholders (`https://github.com/`, `https://linkedin.com/`)
  in `Hero.tsx`, `Contact.tsx`.
- The OG image points at `/photo-alfa.jpg`, which is a square portrait, not a 1200×630 card.
- No project has a `demoUrl` or `repoUrl` yet — the link row is therefore invisible on every
  card. Filling these in is the highest-value remaining change for converting prospects.
