# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** Recruiters and hiring managers evaluating Marlon Hernandez for frontend developer roles.
**Secondary:** Clients and freelance leads assessing capability and craft for potential engagements.
**Tertiary:** Fellow developers exploring the work.

Visitors arrive from a link on a resume, GitHub profile, LinkedIn, or referral. They are scanning for signal: can this person build, design, and ship?

## Product Purpose

Marlon Hernandez's portfolio exists to turn a visit into a conversation — a job interview, a freelance lead, or a meaningful connection. It demonstrates frontend development capability through the quality of its own construction.

## Positioning

The portfolio proves its author's skill through the experience of using it. Where other portfolios list skills, this one embodies them: animation-rich, craft-obsessed, with personality encoded in every interaction. The medium is the message.

Three pillars:
- **Animation & craft** — GSAP, Lenis, pixel art, and parallax make browsing feel deliberate and polished
- **Personality** — terminal CLI motif, pixel self-portrait, and candid copy communicate who Marlon is
- **Problem-solving focus** — "Building ideas. Solving problems. Creating impact." grounds every project in real need

## Operating Context

- Web-based, visited on desktop and mobile browsers
- Bilingual: English (default) and Spanish (native language)
- Hosted on GitHub Pages at `overchernited.github.io`
- Typically visited in a dark environment (developer's natural browsing context)
- Shared via resume, LinkedIn, GitHub profile, and direct link

## Capabilities and Constraints

**Confirmed capabilities:**
- Bilingual EN/ES with full i18n across all pages
- Home / About / Projects / Technologies / Appearances pages
- Draggable project board (desktop) with physics-based interaction
- GSAP scroll-triggered animations (title gradients, card sequences, parallax)
- Lenis smooth scrolling
- Technology proficiency display with ratings and levels
- Project detail pages with content sections
- SEO: Open Graph, Twitter Cards, sitemap, canonical/alternate URLs
- Responsive layout (Tailwind breakpoints)
- Static site generation via Astro

**Confirmed constraints:**
- Static site (no backend, no database)
- GitHub Pages deployment
- Tailwind CSS v4 (zero-config, no tailwind.config.* file)
- JetBrains Mono as sole typeface

**Undecided:**
- Blog or writing section (not currently present)
- Case study depth per project
- Contact form (currently links to Gmail)

## Brand Commitments

- **Name:** Marlon Hernandez / overchernited
- **Terminal/CLI motif:** `whoami` command, cursor, command-line aesthetic in Hero
- **Dark theme:** Background `#0f0925` — locked
- **Gradient accents:** Blue (`#3b82f6`) to purple (`#a855f7`) for titles and buttons — locked
- **Typeface:** JetBrains Mono, monospace — locked
- **Logo:** "MaHe" in navbar
- **Profile asset:** Pixel-art self-portrait (`/images/self.png`)
- **Social:** GitHub, LinkedIn, Gmail (no other platforms confirmed)
- **Tone:** Direct, playful, technically literate; Spanglish where natural

## Evidence on Hand

- Real project data: `src/data/projects.json` (helpit, liftio, kat)
- Real i18n content: `src/i18n/en.json`, `src/i18n/es.json`
- Real profile image: `public/images/self.png`
- Real appearance link: ILO article
- Real technology ratings (Solid.js, React, Next.js, Astro, Tailwind, Supabase, Godot)
- No fabricated testimonials, metrics, case study numbers, or client logos

## Product Principles

1. **The portfolio IS the proof** — every interaction, animation, and pixel demonstrates the capability it describes.
2. **Personality over polish** — the terminal motif, pixel art, and candid voice reflect real interests, not trend-following.
3. **Bilingual by default** — English and Spanish are equal citizens, not an afterthought.
4. **Motion with purpose** — GSAP and Lenis serve comprehension, narrative rhythm, and delight — never decoration alone.
5. **Content drives structure** — each project, skill rating, and appearance is factual and current; the design serves the content, not the reverse.

## Accessibility & Inclusion

- Bilingual interface (EN/ES) as a baseline inclusion feature
- JetBrains Mono at adequate size for readability
- High-contrast dark theme (light text on dark background)
- Semantic HTML via Astro components
- No confirmed screen-reader testing or WCAG audit yet
