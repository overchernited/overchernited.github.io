# Portfolio — Marlon Hernández

> Personal portfolio of a frontend developer from Bogotá. It looks good in the dark, which is where developers live anyway.

Live at [overchernited.github.io](https://overchernited.github.io) · Bilingual (EN/ES)

## Tech Stack

- **Astro 6** — static site generation. Server-side rendering sounds like a full-time job; we politely declined.
- **Tailwind CSS v4** — utility-first styling with zero config file. Yes, we live on the edge and it's fine.
- **GSAP** — animations that make the default scrollbar feel inadequate.
- **Lenis** — buttery smooth scrolling for people who can't stand default scrolling.
- **JavaScript / TypeScript** — responsible for approximately 100% of the interactivity here.

## Features

- Draggable project board with GSAP physics. The projects can be moved; the scrollbar is not invited.
- Print-optimized CV: press print, save as PDF.
- Bilingual i18n (`en` / `es`), full SEO (Open Graph, sitemap, canonical URLs).
- Smooth scrolling, parallax, scroll-triggered reveals — motion with a purpose, not just because we can.

## Commands

```bash
pnpm install   # fetch dependencies
pnpm dev       # local dev server
pnpm build     # production build (also serves as the verification step)
pnpm preview   # preview the production build
```

## Project Structure

```
src/
├── components/       # Navbar, Hero, sections, CV, ProjectCard, Tooltip
├── layouts/          # Layout.astro (navbar, footer, scripts)
├── pages/            # [locale]/ pages: index, about, projects, cv, technologies, appearances
├── styles/           # global.css (scrollbar, keyframes, print rules)
├── i18n/             # en.json / es.json translations
└── data/             # projects.json
```

## Credits

Built with [Astro](https://astro.build) and powered in part by **opencode** and **GitHub Copilot** — AI pair programmers that refactor your code and never steal your fries.
