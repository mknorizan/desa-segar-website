# DESIGN SYSTEM - PASARAYA DESA SEGAR

## Brand Direction

The interface blends a premium modern supermarket feel with a neighbourhood-friendly personality.

- 60% modern premium: spacious layouts, clean cards, restrained accents
- 40% warm local: family-oriented photography, soft rounded corners, welcoming copy

## Primary Palette

- Brand Green: `#8CC51F`
- Brand Blue: `#35A8DC`
- Dark Leaf Green: `#087A47`
- Soft Mint: `#F4FAF7`
- Charcoal Text: `#263B35`
- White: `#FFFFFF`

## Typography

- Primary display/body: Manrope with modern sans fallbacks
- Hero/title style: high-weight, large line-height control
- Supporting text: moderate contrast for readability

## Spacing and Layout

- Mobile-first with progressive expansion to desktop
- Max content width: 7xl container
- Consistent section rhythm: 56px-80px vertical spacing
- Card radius: rounded-xl and rounded-2xl

## Core Components

- Header with sticky behavior and language switcher
- Pill CTA buttons (`primary`, `outline`)
- Section heading module with label, title pair, and action slot
- Reusable category cards
- Reusable outlet cards
- Structured footer groups

## Homepage Decisions

- Hero uses split composition and organic corner treatment to match mockup intent
- Product category section uses mint background and equal-height cards
- Why choose section uses simple icon-first trust blocks
- Outlet section uses clean cards with placeholder-safe states
- Community section uses dark overlay for text legibility

## Bilingual Architecture

- Language options: `bm`, `en`
- Default language: `bm`
- Translation source: `src/i18n/translations.ts`
- Persistent language preference in localStorage
- All visible page copy centralized for future localization expansion

## Accessibility Considerations

- Semantic landmarks (`header`, `main`, `footer`)
- Keyboard accessible navigation and language buttons
- Visible focus styles
- Reduced-motion support
- Sufficient color contrast in interactive elements

## Known Content Placeholders

Official verification is still required for:

- Outlet addresses
- Outlet opening hours
- Maps URLs
- Company contact and social links
- Privacy and terms page URLs
