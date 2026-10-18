# Pasaraya Desa Segar Official Website

Static corporate website for Pasaraya Desa Segar built with React, TypeScript, Vite, Tailwind CSS, React Router, and Lucide icons.

## Overview

The site is designed to reflect Desa Segar's approved visual style with a modern and neighbourhood-friendly experience.

Key features:

- Responsive multi-page experience
- BM/EN bilingual switch with Bahasa Malaysia as default
- Reusable component architecture
- Centralized content/data files
- SEO baseline (`robots.txt`, `sitemap.xml`, metadata)
- Accessibility-first interaction patterns

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Run lint checks

```bash
npm run lint
```

### Build production bundle

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

- `public/images/`: static brand assets
- `references/`: visual references and mockups
- `src/components/`: UI components by domain
- `src/pages/`: route-level pages
- `src/data/`: categories/outlets/company/navigation data
- `src/i18n/`: translation dictionary and provider
- `src/hooks/`: shared hooks
- `src/styles/`: global styles

## Bilingual Content

Default language is Bahasa Malaysia (`bm`).

Language flow:

- language state is managed by `I18nProvider`
- preference is saved to localStorage key `desa-segar-language`
- all user-facing text is in `src/i18n/translations.ts`

## Content Maintenance

### Update category content

Edit `src/data/categories.ts`.

### Update outlet details

Edit `src/data/outlets.ts`.

Note:
- current outlet location/hours are placeholders pending verification
- add `directionsUrl` when official Google Maps links are available

### Update company contact details

Edit `src/data/company.ts`.

### Update page copy and bilingual text

Edit `src/i18n/translations.ts`.

## Deployment

This project is fully static and can be deployed to:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

Ensure final production deployment updates `public/sitemap.xml` domain if needed.
