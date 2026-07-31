import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import projectsData from './src/data/projects.json' with { type: 'json' };

const legacyRoutes = [
  'about',
  'projects',
  'appearances',
  'technologies',
  'cv',
  'resume',
  ...projectsData.projects.map((project) => `projects/${project.id}`),
];

const redirects = Object.fromEntries(
  legacyRoutes.map((path) => [`/${path}`, `/en/${path}`]),
);

export default defineConfig({
  site: 'https://overchernited.github.io',
  base: '/',
  trailingSlash: 'never',
  redirects,
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
