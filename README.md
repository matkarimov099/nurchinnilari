# Nur Chinnilar Olami

Premium uy buyumlari do'koni uchun zamonaviy landing page.

## Tech Stack

- **Next.js 16** - App Router
- **React 19** - React Compiler bilan
- **TypeScript** - Strict mode
- **Tailwind CSS 4** - PostCSS plugin
- **motion/react** - Animatsiyalar
- **next-intl** - Ko'p tilli qo'llab-quvvatlash (uz, ru, en)
- **next-themes** - Dark/Light mode
- **Biome** - Linting va formatting

## Ishga tushirish

```bash
# Dependencylarni o'rnatish
pnpm install

# Development server
pnpm dev

# Production build
pnpm build

# Production server
pnpm start
```

## Skriptlar

```bash
pnpm dev      # Dev server (http://localhost:3000)
pnpm build    # Production build
pnpm start    # Production server
pnpm lint     # Linter tekshiruvi
pnpm format   # Kod formatlash
pnpm fix      # To'liq tuzatish (format + lint + unsafe)
```

## Loyiha tuzilishi

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/           # Dinamik til yo'nalishlari (uz|ru|en)
│   └── globals.css         # Global stillar
├── core/providers/         # Provider komponentlari
├── features/               # Feature modullari
│   ├── hero/               # Bosh qism
│   ├── about/              # Biz haqimizda
│   ├── collections/        # Mahsulot kategoriyalari
│   ├── features/           # Afzalliklar
│   ├── testimonials/       # Mijozlar fikri
│   ├── contact/            # Aloqa
│   └── layout/             # Header, Footer, Navigation
├── shared/
│   ├── components/         # UI komponentlari
│   ├── config/             # Konfiguratsiya
│   └── lib/                # Yordamchi funksiyalar
├── i18n/                   # Internationalization
└── messages/               # Tarjima fayllari (uz, ru, en)
```

## Tillar

- **O'zbek** (default) - `/uz`
- **Rus** - `/ru`
- **Ingliz** - `/en`

## Brand ranglari

- **Primary (Qizil)**: `#ED1B24`
- **Accent (Oltin)**: `#D4AF37`

## Aloqa

- **Telefon**: +998 97 152 22 23
- **Telegram**: [@nur_chinnilar_olami](https://t.me/nur_chinnilar_olami)
- **Instagram**: [@nur_chinnilar_olami](https://www.instagram.com/nur_chinnilar_olami)
- **Manzil**: Urganch shahar, Dehqon bozori 5-blok 2-blok 2-do'kon
