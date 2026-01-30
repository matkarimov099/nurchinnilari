# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
pnpm dev              # Start Next.js dev server

# Build & Production
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality (Biome)
pnpm lint             # Run linter
pnpm format           # Format code
pnpm fix              # Full fix (format + lint + unsafe checks)
```

## Tech Stack

- **Next.js 16** with App Router and React 19 (with React Compiler)
- **TypeScript** in strict mode with `@/*` path alias to `./src/*`
- **Biome** for linting and formatting (not ESLint/Prettier)
- **Tailwind CSS 4** with PostCSS plugin
- **motion/react** for animations (not framer-motion)
- **next-intl** for i18n (uz, ru, en locales - default: uz)
- **next-themes** for dark/light mode
- **@tabler/icons-react** for icons

## Architecture

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/           # Dynamic locale routes (uz|ru|en)
│   │   ├── layout.tsx      # Locale layout with providers
│   │   └── page.tsx        # Main landing page (all sections)
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   └── globals.css         # Global styles + brand colors
├── core/providers/         # App providers (ThemeProvider)
├── features/               # Feature-based modules
│   ├── hero/               # Hero section
│   ├── about/              # About section with stats
│   ├── collections/        # Product categories
│   ├── features/           # Why Us section
│   ├── testimonials/       # Customer reviews
│   ├── contact/            # Contact form and info
│   └── layout/             # Header, Footer, Navigation, WhatsApp button
├── shared/
│   ├── components/
│   │   ├── aceternity/     # Animated UI components
│   │   └── ui/             # shadcn/ui components
│   ├── config/             # Site config, constants, business info
│   └── lib/                # Utilities (cn)
├── i18n/                   # next-intl config
│   ├── routing.ts          # Locale routing + navigation exports
│   └── request.ts          # Server-side locale detection
└── messages/               # Translation JSON files (en.json, ru.json, uz.json)
```

## Key Patterns

**Server vs Client Components**: Server components by default. Use `"use client"` directive only when needed.

**Translations**: Use `useTranslations` hook:
```typescript
const t = useTranslations("section");
return <h1>{t("title")}</h1>;
```

**Styling utility**: Use `cn()` from `@/shared/lib/utils`:
```typescript
cn("base-class", condition && "conditional-class", className)
```

**Feature exports**: Each feature has barrel exports via `index.ts`:
```typescript
import { HeroSection } from "@/features/hero";
```

**Navigation**: Use `Link` from `@/i18n/routing` for locale-aware links.

## Brand Colors

- **Primary (Brand Red)**: `#ED1B24` - used for CTAs, accents
- **Accent (Gold)**: `#D4AF37` - used for premium elements
- Light theme: cream/ivory backgrounds
- Dark theme: `#0A0A0A` backgrounds

## Business Info

Located in `src/shared/config/constants.ts` - contains BUSINESS_INFO, NAV_ITEMS, CATEGORIES, STATS.
