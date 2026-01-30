# Nur Chinnilar Olami - To'liq Texnik Topshiriq

**Versiya:** 3.0 (Final)  
**Sana:** 2026-01-30  
**Loyiha turi:** Premium Landing Page  
**Maqsad:** Uy-ro'zg'or buyumlari do'koni uchun kreativ vizitka sayt

---

## 📋 Mundarija

1. [Loyiha Haqida](#loyiha-haqida)
2. [Texnologiya Stack](#texnologiya-stack)
3. [Dizayn Konsepti](#dizayn-konsepti)
4. [Loyiha Strukturasi](#loyiha-strukturasi)
5. [Komponentlar Tafsiloti](#komponentlar-tafsiloti)
6. [Nomlash Konvensiyalari](#nomlash-konvensiyalari)
7. [Setup va Installation](#setup-va-installation)
8. [Development Guidelines](#development-guidelines)
9. [Deployment](#deployment)

---

## 🎯 Loyiha Haqida

### Biznes Ma'lumotlari

| Ma'lumot | Qiymat |
|----------|--------|
| **Nomi** | Nur Chinnilar Olami |
| **Soha** | Uy-ro'zg'or buyumlari va premium chinni idishlar |
| **Maqsad** | Onlayn vizitka - mijozlarni jalb qilish va brendni namoyish qilish |
| **Target Auditoriya** | O'rta va yuqori daromadli oilalar, to'y va bayramlar uchun sovg'a izlovchilar |
| **Instagram** | @nur_chinnilar_olami (25,600+ followers) |
| **Joylashuv** | Yandeks, maxallinski xodja grazan, Toshkent |
| **Ish vaqti** | 8:30 - 18:30 (Dam olishsiz) |

### Loyiha Xususiyatlari

- ✅ **Bir sahifali (Single Page)** - Barcha sections bir sahifada
- ✅ **Ko'p tillilik (i18n)** - 3 til: O'zbek, Rus, Ingliz
- ✅ **Dark/Light Mode** - Tema o'zgartirish
- ✅ **Responsive** - Mobile-first approach
- ✅ **SEO Optimized** - Meta tags, sitemap, robots.txt
- ✅ **Performance** - Lighthouse 95+ score
- ✅ **Animations** - Smooth va professional

---

## 🛠️ Texnologiya Stack

### Core Technologies

| Texnologiya | Versiya | Maqsad |
|-------------|---------|--------|
| **Next.js** | 16 | App Router, SSR/SSG, Server Components |
| **React** | 19 | UI framework, React Compiler |
| **TypeScript** | 5 | Strict mode, type safety |
| **Tailwind CSS** | 4 | Styling (PostCSS orqali) |
| **Biome** | 2.x | Linting + formatting (ESLint/Prettier o'rniga) |
| **next-intl** | latest | i18n — 3 til (uz, ru, en) |
| **motion** | latest | Animatsiyalar (`motion/react`) |
| **@tabler/icons-react** | latest | Ikonkalar (2000+ icon) |
| **clsx** | latest | Conditional class names |
| **tailwind-merge** | latest | Tailwind class conflict resolver |
| **shadcn/ui** | latest | Radix-based UI komponentlar |

---

## 🎨 Dizayn Konsepti

### Estetik Yo'nalish: "Zamonaviy Lux Minimalizm"

**Dizayn Falsafasi:**
- **Premium Feel** - Hashamatli, lekin haddan tashqari emas
- **Elegant Simplicity** - Har bir element o'z o'rnida
- **Subtle Luxury** - Nozik detallarda hashamat
- **Motion-First** - Animatsiyalar tajribani boyitadi
- **Brand-Driven** - Logotip rangidan kelib chiqib

### Brend Ranglari

```css
/* ════════════════════════════════════════════════════════════ */
/*  Asosiy Brend Ranglari (Logotipdan)                          */
/* ════════════════════════════════════════════════════════════ */

--brand-red: #ED1B24;           /* Asosiy qizil - Logo rangi */
--brand-red-dark: #CF0710;      /* To'q qizil - Hover states */
--brand-red-light: #FF434C;     /* Och qizil - Highlights */

/* ════════════════════════════════════════════════════════════ */
/*  Premium Aksent Ranglari                                     */
/* ════════════════════════════════════════════════════════════ */

--gold: #D4AF37;                /* Oltin - Premium accent */
--gold-dark: #B8960F;           /* To'q oltin - Hover states */
--gold-light: #F5E6C3;          /* Och oltin - Backgrounds */

/* ════════════════════════════════════════════════════════════ */
/*  Neytral Ranglar (Light Theme)                               */
/* ════════════════════════════════════════════════════════════ */

--cream: #FAF9F6;               /* Krem - Background */
--ivory: #FFFFF0;               /* Fil suyagi - Cards */
--pearl: #F8F8F8;               /* Marvarid - Sections */
--white: #FFFFFF;               /* Oq - Clean areas */

/* ════════════════════════════════════════════════════════════ */
/*  Matn Ranglari                                               */
/* ════════════════════════════════════════════════════════════ */

--charcoal: #2C2C2C;            /* Qora kulrang - Primary text */
--slate: #475569;               /* Kulrang - Secondary text */
--muted: #94A3B8;               /* Xira - Tertiary text */

/* ════════════════════════════════════════════════════════════ */
/*  Dark Mode Ranglari                                          */
/* ════════════════════════════════════════════════════════════ */

--dark-bg: #0A0A0A;             /* To'q qora - Background */
--dark-surface: #1A1A1A;        /* Qora - Cards/Surfaces */
--dark-border: #2A2A2A;         /* Chegara */
--dark-text: #E5E5E5;           /* Och - Primary text */
--dark-text-muted: #A0A0A0;     /* O'rtacha - Secondary text */

/* ════════════════════════════════════════════════════════════ */
/*  Utility Ranglari                                            */
/* ════════════════════════════════════════════════════════════ */

--success: #059669;             /* Yashil - Success states */
--info: #2563EB;                /* Ko'k - Info/Links */
```

### Rang Strategiyasi

| Rang | Qo'llanish | Misol |
|------|------------|-------|
| **Brand Red** | Logo, Primary CTAs, Important badges | Hero CTA button, Logo, "Yangi" badge |
| **Gold** | Premium elements, Accents, Decorative | Section dividers, Premium badge, Icons |
| **Red + Gold** | Special elements, Gradients | Hero background, Feature cards hover |
| **Cream/Ivory** | Backgrounds, Cards | Section backgrounds, Product cards |
| **Charcoal** | Primary text | Headings, Body text |
| **Slate** | Secondary text | Descriptions, Captions |

### Gradient'lar

```css
/* Brand Gradient - Hero, Headers */
.gradient-brand {
  background: linear-gradient(135deg, #ED1B24 0%, #CF0710 100%);
}

/* Premium Gradient - Cards, Accents */
.gradient-premium {
  background: linear-gradient(135deg, #D4AF37 0%, #B8960F 100%);
}

/* Mixed Gradient - Special Elements */
.gradient-mixed {
  background: linear-gradient(90deg, #ED1B24 0%, #D4AF37 50%, #ED1B24 100%);
}

/* Subtle Gradient - Backgrounds */
.gradient-subtle {
  background: linear-gradient(180deg, #FAF9F6 0%, #FFFFF0 100%);
}
```

### Tipografiya

```typescript
// Font Stack - Google Fonts
const fonts = {
  display: 'Playfair Display',      // Sarlavhalar - Elegant serif
  heading: 'Cormorant Garamond',    // Kichik sarlavhalar - Refined serif
  body: 'Montserrat',               // Asosiy matn - Modern sans-serif
  accent: 'Cinzel',                 // Dekorativ elementlar - Luxury
}

// Font Sizes - Fluid Typography (clamp)
--text-xs: clamp(0.75rem, 1vw, 0.875rem);      // 12px - 14px
--text-sm: clamp(0.875rem, 1.5vw, 1rem);       // 14px - 16px
--text-base: clamp(1rem, 2vw, 1.125rem);       // 16px - 18px
--text-lg: clamp(1.125rem, 2.5vw, 1.25rem);    // 18px - 20px
--text-xl: clamp(1.25rem, 3vw, 1.5rem);        // 20px - 24px
--text-2xl: clamp(1.5rem, 3.5vw, 2rem);        // 24px - 32px
--text-3xl: clamp(2rem, 4vw, 2.5rem);          // 32px - 40px
--text-4xl: clamp(2.5rem, 5vw, 4rem);          // 40px - 64px
--text-5xl: clamp(3rem, 6vw, 5rem);            // 48px - 80px

// Font Weights
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
--font-black: 900;
```

---

## 📁 Loyiha Strukturasi

```
nurchinnilari/
├── public/                                   # Statik fayllar
│   ├── images/
│   │   ├── logo.jpg                         # Brend logo (qizil)
│   │   ├── og-image.png                     # Open Graph image
│   │   ├── hero/
│   │   │   └── background.webp              # Hero background
│   │   ├── products/                        # Mahsulot rasmlari
│   │   │   ├── chinni-1.webp
│   │   │   ├── kristall-1.webp
│   │   │   └── ...
│   │   ├── categories/                      # Kategoriya rasmlari
│   │   │   ├── chinni.webp
│   │   │   ├── kristall.webp
│   │   │   └── ...
│   │   └── decorative/                      # Dekorativ elementlar
│   │       └── pattern.svg
│   └── fonts/                               # Lokal shriftlar (agar kerak bo'lsa)
│
├── src/
│   ├── app/                                 # Next.js App Router
│   │   ├── [locale]/                        # i18n dynamic segment (uz | ru | en)
│   │   │   ├── layout.tsx                   # Locale layout (Header, Footer)
│   │   │   └── page.tsx                     # Bosh sahifa (barcha sections)
│   │   ├── layout.tsx                       # Root layout (fonts, metadata, providers)
│   │   ├── globals.css                      # Global styles + Tailwind
│   │   ├── not-found.tsx                    # 404 sahifa
│   │   └── robots.ts                        # SEO - robots.txt
│   │
│   ├── core/                                # Loyiha yadro sozlamalari
│   │   └── providers/
│   │       ├── index.tsx                    # Barcha providers compose
│   │       └── theme-provider.tsx           # Dark/Light mode provider
│   │
│   ├── features/                            # Feature-based modullar
│   │   │
│   │   ├── hero/                            # ══════════════════════════════
│   │   │   ├── components/                  # Hero Section
│   │   │   │   ├── HeroSection.tsx          # ══════════════════════════════
│   │   │   │   ├── HeroBackground.tsx       # Animated background
│   │   │   │   ├── HeroContent.tsx          # Text content + CTAs
│   │   │   │   └── ScrollIndicator.tsx      # Scroll down arrow
│   │   │   └── index.ts
│   │   │
│   │   ├── about/                           # ══════════════════════════════
│   │   │   ├── components/                  # About Section
│   │   │   │   ├── AboutSection.tsx         # ══════════════════════════════
│   │   │   │   ├── StatsCard.tsx            # Statistika kartochkalari
│   │   │   │   └── AboutContent.tsx         # Matn va rasm
│   │   │   └── index.ts
│   │   │
│   │   ├── collections/                     # ══════════════════════════════
│   │   │   ├── components/                  # Collections Section
│   │   │   │   ├── CollectionsSection.tsx   # ══════════════════════════════
│   │   │   │   ├── CategoryCard.tsx         # Kategoriya kartochka
│   │   │   │   └── CategoryIcon.tsx         # Kategoriya ikoni
│   │   │   ├── types/
│   │   │   │   └── index.ts                 # Category type
│   │   │   └── index.ts
│   │   │
│   │   ├── products/                        # ══════════════════════════════
│   │   │   ├── components/                  # Featured Products Section
│   │   │   │   ├── ProductsSection.tsx      # ══════════════════════════════
│   │   │   │   ├── ProductCard.tsx          # Mahsulot kartochka
│   │   │   │   └── ProductBadge.tsx         # Badge (Yangi, Top, Chegirma)
│   │   │   ├── types/
│   │   │   │   └── index.ts                 # Product type
│   │   │   └── index.ts
│   │   │
│   │   ├── features/                        # ══════════════════════════════
│   │   │   ├── components/                  # Why Us / Features Section
│   │   │   │   ├── FeaturesSection.tsx      # ══════════════════════════════
│   │   │   │   └── FeatureCard.tsx          # Feature kartochka
│   │   │   ├── types/
│   │   │   │   └── index.ts                 # Feature type
│   │   │   └── index.ts
│   │   │
│   │   ├── testimonials/                    # ══════════════════════════════
│   │   │   ├── components/                  # Testimonials Section
│   │   │   │   ├── TestimonialsSection.tsx  # ══════════════════════════════
│   │   │   │   ├── TestimonialCard.tsx      # Sharh kartochka
│   │   │   │   └── TestimonialCarousel.tsx  # Carousel wrapper
│   │   │   ├── types/
│   │   │   │   └── index.ts                 # Testimonial type
│   │   │   └── index.ts
│   │   │
│   │   ├── contact/                         # ══════════════════════════════
│   │   │   ├── components/                  # Contact Section
│   │   │   │   ├── ContactSection.tsx       # ══════════════════════════════
│   │   │   │   ├── ContactForm.tsx          # Bog'lanish forma
│   │   │   │   ├── ContactInfo.tsx          # Ma'lumotlar
│   │   │   │   └── SocialLinks.tsx          # Ijtimoiy tarmoqlar
│   │   │   ├── hooks/
│   │   │   │   └── use-contact-form.ts      # Form logic (React Hook Form)
│   │   │   ├── types/
│   │   │   │   └── index.ts                 # ContactForm type
│   │   │   └── index.ts
│   │   │
│   │   └── layout/                          # ══════════════════════════════
│   │       ├── components/                  # Layout Components
│   │       │   ├── Header.tsx               # ══════════════════════════════
│   │       │   ├── Footer.tsx               # Sticky header + nav
│   │       │   ├── Navigation.tsx           # Footer
│   │       │   ├── LanguageSwitcher.tsx     # Nav linklar (smooth scroll)
│   │       │   ├── ThemeToggle.tsx          # Til almashtirish (uz/ru/en)
│   │       │   ├── MobileMenu.tsx           # Dark/Light toggle
│   │       │   └── WhatsAppButton.tsx       # Mobile hamburger
│   │       └── index.ts                     # Floating WhatsApp button
│   │
│   ├── shared/                              # Umumiy resurslar
│   │   ├── components/
│   │   │   ├── ui/                          # shadcn/ui components
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── badge.tsx
│   │   │   │   ├── dropdown-menu.tsx
│   │   │   │   ├── separator.tsx
│   │   │   │   └── tooltip.tsx
│   │   │   └── animations/                  # Reusable animation wrappers
│   │   │       ├── FadeIn.tsx
│   │   │       ├── SlideIn.tsx
│   │   │       ├── ScaleIn.tsx
│   │   │       └── ScrollReveal.tsx
│   │   ├── config/
│   │   │   ├── site.ts                      # Site metadata
│   │   │   └── constants.ts                 # Business info, categories, etc
│   │   ├── lib/
│   │   │   ├── utils.ts                     # cn() utility
│   │   │   └── motion-variants.ts           # Framer Motion variants
│   │   └── types/
│   │       └── index.ts                     # Common types
│   │
│   ├── i18n/                                # next-intl config
│   │   ├── request.ts                       # Server-side locale detection
│   │   └── routing.ts                       # Locale routing config
│   │
│   ├── messages/                            # Translation JSON files
│   │   ├── uz.json                          # O'zbekcha
│   │   ├── ru.json                          # Русский
│   │   └── en.json                          # English
│   │
│   └── middleware.ts                        # next-intl middleware
│
├── .env.local                               # Environment variables
├── biome.json                               # Biome config
├── components.json                          # shadcn/ui config
├── next.config.ts                           # Next.js config
├── tailwind.config.ts                       # Tailwind config
├── postcss.config.mjs                       # PostCSS config
├── tsconfig.json                            # TypeScript config
├── package.json
└── README.md
```

---

## 🧩 Komponentlar Tafsiloti

### 1. Hero Section

**Path:** `src/features/hero/components/HeroSection.tsx`

**Maqsad:** Birinchi taassurot, diqqatni tortish, brendni ko'rsatish

**Elementlar:**
- Full-screen hero (min-h-screen)
- Animated gradient background
- Logo (centered top)
- Main headline: "Uyingizni Go'zallashtiring Premium Idishlar Bilan"
- Subtitle: "Chinni, kristall va zamonaviy uy buyumlari"
- Stats badges: "25,600+ Mijozlar" | "8:30-18:30 Ish vaqti"
- 2x CTA buttons:
  - Primary: "Katalog Ko'rish" (brand-red)
  - Secondary: "Bog'lanish" (gold outline)
- Scroll indicator (animated arrow)

**Animatsiyalar:**
- Background: Floating gradient animation
- Content: Stagger fade-in (text → buttons → indicator)
- Buttons: Hover scale + shadow
- Scroll indicator: Bounce animation

**Layout:**
```tsx
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  <HeroBackground />
  <div className="relative z-10 container">
    <HeroContent />
  </div>
  <ScrollIndicator />
</section>
```

---

### 2. About Section

**Path:** `src/features/about/components/AboutSection.tsx`

**Layout:** Split 2 columns (text left, stats right)

**Chap tomon - Content:**
- Section title: "Biz Haqimizda"
- Description (2-3 paragraf):
  - Kim ekanimiz
  - Nima bilan shug'ullanishimiz
  - Nima uchun biz bilan ishlash kerak

**O'ng tomon - Stats:**
- 3x Stat cards (grid):
  1. **15+ Yillik** - Tajriba
  2. **25,600+** - Qoniqgan Mijozlar
  3. **500+** - Mahsulot turlari

**Stats Card dizayni:**
- Large number (text-5xl, brand-red)
- Label (text-lg, slate)
- Icon (optional, gold)
- Subtle gradient border

**Animatsiyalar:**
- Text: Fade in from left
- Stats: Stagger fade in from right
- Stats numbers: Counter animation (0 → final value)

---

### 3. Collections Section

**Path:** `src/features/collections/components/CollectionsSection.tsx`

**Kategoriyalar:** 6 ta

| # | Nomi | Icon | Tavsif |
|---|------|------|--------|
| 1 | Chinni To'plamlar | `IconToolsKitchen2` | Yuqori sifatli chinni idish-tovoq to'plamlari |
| 2 | Kristall Idishlar | `IconGlassFull` | Nozik kristall ko'zalar va idishlar |
| 3 | Oshxona Jihozlari | `IconChefHat` | Zamonaviy oshxona anjomlari |
| 4 | Dekorativ Buyumlar | `IconSparkles` | Uyingizni bezash uchun noyob buyumlar |
| 5 | Premium Kolleksiya | `IconCrown` | Oltin va kumush bezakli eksklyuziv mahsulotlar |
| 6 | Sovg'a To'plamlari | `IconGift` | Har qanday bayram uchun mukammal sovg'alar |

**Layout:** Grid 3 columns (desktop), 2 (tablet), 1 (mobile)

**Card dizayni:**
- Image background (overlay)
- Icon at top (gold, large)
- Title (font-heading, text-2xl)
- Description (text-slate)
- "Ko'rish →" on hover
- Height: 400px
- Hover: Scale 1.05, overlay darkens

**Animatsiyalar:**
- Cards: Stagger fade-in on scroll
- Hover: Scale + shadow increase
- Icon: Rotate 360° on hover
- Arrow: Slide in from left on hover

---

### 4. Featured Products Section

**Path:** `src/features/products/components/ProductsSection.tsx`

**Mahsulotlar:** 6-8 ta featured products (hardcoded yoki dynamic)

**Product Card:**
- Image (aspect-ratio 4:3)
- Badge (top-right): "Yangi" | "Ommabop" | "-20%"
- Product name
- Price (optional): "250,000 so'm"
- "Batafsil" button (on hover)

**Badge ranglar:**
- "Yangi": brand-red
- "Ommabop": gold
- "Chegirma": green

**Layout:** Grid 4 columns (desktop), 3 (tablet), 2 (mobile)

**Animatsiyalar:**
- Grid: Stagger fade-in
- Image: Zoom on hover (scale 1.1)
- Card: Lift up (translateY -10px)
- Button: Slide up from bottom on hover

---

### 5. Features Section (Why Us)

**Path:** `src/features/features/components/FeaturesSection.tsx`

**Afzalliklar:** 4 ta

| # | Title | Icon | Description |
|---|-------|------|-------------|
| 1 | Yuqori Sifat | `IconShieldCheck` | Premium materiallar va sifat kafolati |
| 2 | Tez Yetkazish | `IconTruck` | Toshkent bo'ylab 1-2 kun ichida |
| 3 | Eng Yaxshi Narxlar | `IconMoneybag` | To'g'ridan-to'g'ri import, vositachisiz |
| 4 | Kafolat | `IconCertificate` | Barcha mahsulotlarga rasmiy kafolat |

**Layout:** Grid 2x2 (desktop), 2 columns (tablet), 1 column (mobile)

**Card dizayni:**
- Icon at top (large, gold, in circle)
- Title (font-heading, text-xl)
- Description (text-slate, text-center)
- Minimal card (border, no shadow)
- Hover: Border color → brand-red

**Animatsiyalar:**
- Cards: Stagger fade-in on scroll
- Icons: Pulse animation (loop)
- Hover: Border glow effect

---

### 6. Testimonials Section

**Path:** `src/features/testimonials/components/TestimonialsSection.tsx`

**Sharh Strukturasi:**

```typescript
interface Testimonial {
  id: number;
  name: string;
  rating: number;          // 1-5
  text: string;
  date?: string;
  avatar?: string;
}
```

**Layout:** Carousel / Slider
- 3 cards visible on desktop
- 2 cards on tablet
- 1 card on mobile
- Auto-play: 5s interval, pause on hover
- Navigation: Dots below

**Card dizayni:**
- Quote icon (top-left, gold, large)
- Rating stars (gold, 5 stars)
- Review text (italic, text-lg)
- Name (font-medium)
- Date (text-sm, text-slate)
- Avatar (optional, circle, 64x64)
- Card: White background, subtle shadow

**Animatsiyalar:**
- Carousel: Smooth slide transition
- Cards: Fade in/out during transition
- Stars: Stagger fill animation on view

---

### 7. Contact Section

**Path:** `src/features/contact/components/ContactSection.tsx`

**Layout:** Split 50/50 (info left, form right)

#### Chap tomon - Contact Info

**Elementlar:**
- Section title: "Bog'lanish"
- Description: "Savolaringiz bormi? Biz bilan bog'laning!"

**Contact Items:**
| Icon | Label | Value |
|------|-------|-------|
| `IconMapPin` | Manzil | Yandeks, maxallinski xodja grazan, Toshkent |
| `IconPhone` | Telefon | +998 XX XXX XX XX |
| `IconClock` | Ish vaqti | 8:30 - 18:30 (Dam olishsiz) |
| `IconBrandTelegram` | Telegram | @nur_chinnilar_olami |
| `IconBrandInstagram` | Instagram | @nur_chinnilar_olami |

#### O'ng tomon - Contact Form

**Forma Maydonlari:**
```typescript
interface ContactFormData {
  name: string;              // Required, min 2 chars
  phone: string;             // Required, phone format
  message: string;           // Required, min 10 chars
}
```

**Form Validation:** React Hook Form + Zod

**Submit Button:**
- Text: "Yuborish"
- Loading state: Spinner + "Yuborilmoqda..."
- Success: Green check + "Yuborildi!"
- Error: Red X + "Xatolik yuz berdi"

**Form Actions:**
- Submit → Console.log (production'da API call)
- Clear form after success

**Animatsiyalar:**
- Form inputs: Focus border animation (brand-red)
- Submit button: Scale on click
- Success/Error: Fade in notification

---

### 8. Footer

**Path:** `src/features/layout/components/Footer.tsx`

**Layout:** 3 columns (desktop), stack (mobile)

**Column 1 - Brand:**
- Logo (small)
- Tagline: "Premium Uy Buyumlari"
- Copyright: © 2026 Nur Chinnilar Olami

**Column 2 - Quick Links:**
- Bosh sahifa
- Mahsulotlar
- Haqimizda
- Bog'lanish

**Column 3 - Social Links:**
- Instagram
- Telegram
- WhatsApp
- Phone

**Design:**
- Background: dark (charcoal)
- Text: light gray
- Links: Hover → gold
- Divider above (separator)

---

### 9. Header / Navigation

**Path:** `src/features/layout/components/Header.tsx`

**Layout:** Sticky top, backdrop blur

**Elementlar:**
- Logo (left)
- Nav links (center):
  - Bosh sahifa
  - Katalog
  - Haqimizda
  - Bog'lanish
- Actions (right):
  - Language Switcher (uz/ru/en)
  - Theme Toggle (sun/moon icon)
  - Mobile Menu (hamburger)

**Nav Link Behavior:**
- Smooth scroll to section
- Active state: Underline (brand-red)
- Hover: Scale 1.05

**Sticky Behavior:**
- Scrolled: Background blur + shadow
- Top: Transparent

---

### 10. Floating WhatsApp Button

**Path:** `src/features/layout/components/WhatsAppButton.tsx`

**Position:** Fixed bottom-right (1.5rem gap)

**Design:**
- Circle button (64x64)
- Green background (#25D366)
- WhatsApp icon (white)
- Pulse animation (ring effect)
- Shadow: Large, green glow

**Behavior:**
- Click → Open WhatsApp:
  - Desktop: `https://web.whatsapp.com/send?phone=998XXXXXXXXX&text=Assalomu alaykum!`
  - Mobile: `https://wa.me/998XXXXXXXXX?text=Assalomu alaykum!`
- Hover: Scale 1.1
- Always visible (z-50)

---

## 📏 Nomlash Konvensiyalari

### Fayllar

| Turi | Format | Misol |
|------|--------|-------|
| **Papkalar** | `kebab-case/` | `hero/`, `about/`, `collections/` |
| **React komponentlar** | `PascalCase.tsx` | `HeroSection.tsx`, `ProductCard.tsx` |
| **Hooks** | `use-kebab-case.ts` | `use-contact-form.ts`, `use-scroll-spy.ts` |
| **Types** | `index.ts` (papka ichida) | `features/products/types/index.ts` |
| **Config** | `kebab-case.ts` | `site.ts`, `constants.ts` |
| **Utils** | `kebab-case.ts` | `utils.ts`, `motion-variants.ts` |
| **Tarjimalar** | `locale.json` | `uz.json`, `ru.json`, `en.json` |
| **UI (shadcn)** | `kebab-case.tsx` | `button.tsx`, `dropdown-menu.tsx` |

### Kodda

| Turi | Format | Misol |
|------|--------|-------|
| **O'zgaruvchilar** | `camelCase` | `isLoading`, `userName`, `activeTab` |
| **Funksiyalar** | `camelCase` | `handleClick`, `fetchData`, `formatPrice` |
| **React komponentlar** | `PascalCase` | `HeroSection`, `ProductCard`, `Button` |
| **Interface / Type** | `PascalCase` | `Product`, `Category`, `ContactFormData` |
| **Konstantalar** | `UPPER_SNAKE_CASE` | `BUSINESS_INFO`, `MAX_PRODUCTS`, `API_URL` |
| **Enum** | `PascalCase` | `BadgeType`, `ThemeMode`, `Language` |
| **CSS class** | Tailwind utilities | `bg-brand-red`, `hover:scale-105` |

### Barrel Exports

Har bir feature `index.ts` orqali eksport:

```typescript
// src/features/hero/index.ts
export { HeroSection } from './components/HeroSection';
export { HeroBackground } from './components/HeroBackground';
export { HeroContent } from './components/HeroContent';

// Usage
import { HeroSection } from '@/features/hero';
```

---

## ⚙️ Setup va Installation

# Savollar:
# ✔ Preflight? Yes
# ✔ CSS variables? Yes
# ✔ Import alias? @/
# ✔ Config file? components.json

# Kerakli komponentlar
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add badge
pnpm dlx shadcn@latest add dropdown-menu
pnpm dlx shadcn@latest add separator
pnpm dlx shadcn@latest add tooltip
pnpm dlx shadcn@latest add input
pnpm dlx shadcn@latest add textarea
```

### 5. Next-intl Setup

**src/i18n/routing.ts:**

```typescript
import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['uz', 'ru', 'en'],
  defaultLocale: 'uz',
  localePrefix: 'always',
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
```

**src/i18n/request.ts:**

```typescript
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
```

**src/proxy.ts:**

```typescript
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(uz|ru|en)/:path*'],
};
```

### 6. Tailwind Config

**tailwind.config.ts:**

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: {
            DEFAULT: '#ED1B24',
            light: '#FF434C',
            dark: '#CF0710',
          },
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F5E6C3',
          dark: '#B8960F',
        },
        cream: '#FAF9F6',
        ivory: '#FFFFF0',
        pearl: '#F8F8F8',
        charcoal: '#2C2C2C',
        slate: '#475569',
        muted: '#94A3B8',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        heading: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-montserrat)', 'sans-serif'],
        accent: ['var(--font-cinzel)', 'serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        shimmer: 'shimmer 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          to: { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
```

### 7. Fonts Setup

**src/app/layout.tsx:**

```typescript
import { Playfair_Display, Cormorant_Garamond, Montserrat, Cinzel } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${cormorant.variable} ${montserrat.variable} ${cinzel.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

### 8. Constants Setup

**src/shared/config/constants.ts:**

```typescript
export const BUSINESS_INFO = {
  name: 'Nur Chinnilar Olami',
  tagline: 'Premium Uy Buyumlari',
  phone: '+998 XX XXX XX XX',
  whatsapp: '998XXXXXXXXX',
  telegram: '@nur_chinnilar_olami',
  instagram: '@nur_chinnilar_olami',
  address: 'Yandeks, maxallinski xodja grazan, Toshkent',
  workingHours: '8:30 - 18:30 (Dam olishsiz)',
  email: 'info@nur-chinnilar.uz',
} as const;

export const CATEGORIES = [
  {
    id: 1,
    name: "Chinni To'plamlar",
    description: "Yuqori sifatli chinni idish-tovoq to'plamlari",
    icon: 'IconToolsKitchen2',
    image: '/images/categories/chinni.webp',
  },
  // ... boshqa kategoriyalar
] as const;

export const NAV_ITEMS = [
  { href: '#home', label: 'Bosh sahifa' },
  { href: '#collections', label: 'Katalog' },
  { href: '#about', label: 'Haqimizda' },
  { href: '#contact', label: "Bog'lanish" },
] as const;
```

### 9. Translations Setup

**src/messages/uz.json:**

```json
{
  "hero": {
    "title": "Uyingizni Go'zallashtiring Premium Idishlar Bilan",
    "subtitle": "Chinni, kristall va zamonaviy uy buyumlari eng yaxshi narxlarda",
    "cta_primary": "Katalog Ko'rish",
    "cta_secondary": "Bog'lanish"
  },
  "about": {
    "title": "Biz Haqimizda",
    "description": "15 yildan ortiq tajriba bilan..."
  },
  "collections": {
    "title": "Mahsulot Kategoriyalari"
  }
}
```

### 10. Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "biome lint .",
    "lint:fix": "biome lint --write .",
    "format": "biome format --write .",
    "check": "biome check --write .",
    "type-check": "tsc --noEmit"
  }
}
```

---

## 💻 Development Guidelines

### Code Style

1. **TypeScript Strict Mode** - Hamma joyda type safety
2. **No `any` type** - Faqat zarurat bo'lganda
3. **Functional Components** - Hooks bilan
4. **Named Exports** - Default exports emas
5. **Barrel Exports** - Har bir feature index.ts orqali

### Component Structure

```typescript
// Good ✅
import { motion } from 'motion/react';
import { IconCheck } from '@tabler/icons-react';
import { cn } from '@/shared/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export function FeatureCard({ title, description, icon, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      className={cn('rounded-lg border p-6 hover:border-brand-red transition-colors')}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
    >
      <div className="mb-4 text-gold">{icon}</div>
      <h3 className="font-heading text-xl mb-2">{title}</h3>
      <p className="text-slate">{description}</p>
    </motion.div>
  );
}
```

### Animation Best Practices

```typescript
// Motion variants - lib/motion-variants.ts
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// Usage
<motion.div variants={stagger} initial="hidden" whileInView="visible">
  {items.map((item) => (
    <motion.div key={item.id} variants={fadeIn}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Responsive Design

```typescript
// Mobile-first approach
<div className="
  grid 
  grid-cols-1           // Mobile: 1 column
  md:grid-cols-2        // Tablet: 2 columns
  lg:grid-cols-3        // Desktop: 3 columns
  xl:grid-cols-4        // Large: 4 columns
  gap-6
">
  {/* content */}
</div>
```

### Image Optimization

```typescript
import Image from 'next/image';

<Image
  src="/images/products/chinni-1.webp"
  alt="Chinni to'plami"
  width={400}
  height={300}
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  priority={false}  // Hero images uchun true
/>
```

---

### Performance Optimization

**next.config.ts:**

```typescript
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
```

---

## ✅ Development Checklist

### Phase 1: Setup
- [ ] Next.js loyiha yaratish
- [ ] Dependencies o'rnatish
- [ ] Biome.js sozlash
- [ ] Shadcn UI setup
- [ ] next-intl sozlash
- [ ] Tailwind config
- [ ] Fonts import
- [ ] Global styles
- [ ] Constants fayl
- [ ] Translations fayllari

### Phase 2: Layout
- [ ] Root layout
- [ ] Locale layout
- [ ] Header component
- [ ] Footer component
- [ ] Theme provider
- [ ] WhatsApp button
- [ ] Navigation logic

### Phase 3: Sections
- [ ] Hero section
- [ ] About section
- [ ] Collections grid
- [ ] Featured products
- [ ] Features/Why Us
- [ ] Testimonials carousel
- [ ] Contact section + form

### Phase 4: Animations
- [ ] Motion variants library
- [ ] Scroll reveal animations
- [ ] Hover effects
- [ ] Page transitions
- [ ] Micro-interactions

### Phase 5: i18n
- [ ] O'zbek translations
- [ ] Rus translations
- [ ] English translations
- [ ] Language switcher
- [ ] RTL support (optional)

### Phase 6: Polish
- [ ] Responsive testing
- [ ] Dark mode testing
- [ ] Accessibility audit
- [ ] SEO metadata
- [ ] OG images
- [ ] Performance optimization
- [ ] Cross-browser test


## 🎯 Success Criteria

### Design
- ✅ Unique va esda qolarli vizual identifikatsiya
- ✅ Smooth va professional animatsiyalar
- ✅ Mobile-first responsive dizayn
- ✅ Dark/Light mode ishlaydi
- ✅ Brand colors (red + gold) consistency

### Technical
- ✅ TypeScript strict mode, no errors
- ✅ Biome lint pass (no warnings)
- ✅ Lighthouse 95+ score
- ✅ Fast loading (<3s)
- ✅ Optimized images (WebP/AVIF)
- ✅ SEO friendly

### Functionality
- ✅ Barcha sections ishlaydi
- ✅ Smooth scroll navigation
- ✅ Form validation ishlaydi
- ✅ Language switching ishlaydi
- ✅ Theme toggle ishlaydi
- ✅ All CTAs ishlaydi

### Business
- ✅ Clear value proposition
- ✅ Easy navigation
- ✅ Obvious CTA buttons
- ✅ Trust signals (stats, testimonials)
- ✅ Contact information accessible
- ✅ Brand identity strong

---

## 📚 Qo'shimcha Resurslar

### Documentation
- [Next.js 15 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-intl](https://next-intl-docs.vercel.app/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Biome.js](https://biomejs.dev/)
- [Tabler Icons](https://tabler.io/icons)

### Design Tools
- [Coolors](https://coolors.co/) - Color palette
- [Google Fonts](https://fonts.google.com/)
- [TinyPNG](https://tinypng.com/) - Image compression
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization

### Testing Tools
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## 📝 Notes

### Important Reminders

1. **Biome > ESLint/Prettier** - Faqat Biome ishlatamiz
2. **motion from "motion/react"** - Framer Motion emas
3. **@tabler/icons-react** - Icon library
4. **next-intl** - 3 til (uz, ru, en)
5. **Brand colors** - Red (#ED1B24) va Gold (#D4AF37)
6. **Mobile-first** - Har doim mobile dan boshlaymiz
7. **Type safety** - Hamma joyda TypeScript types

### Common Pitfalls

❌ **ESLint/Prettier o'rnatmang** - Biome yetarli  
❌ **framer-motion ishlatmang** - motion ishlatamiz  
❌ **default export ishlatmang** - Named exports  
❌ **any type qo'ymang** - Proper types  
❌ **Inline styles yozmang** - Tailwind classes  

---

## 🎨 Final Notes

Bu texnik topshiriq orqali siz:
- ✅ **Kreativ va zamonaviy** landing page yaratasiz
- ✅ **Production-ready** kod yozasiz
- ✅ **Best practices** ga amal qilasiz
- ✅ **Type-safe** dastur yaratasiz
- ✅ **Performance-optimized** sayt qilasiz
- ✅ **SEO-friendly** struktura yasaysiz
- ✅ **Accessible** interface yaratasiz

---

**Yaratuvchi:** Matkarim (Senior Frontend Developer)  
**Sana:** 2026-01-30  
**Versiya:** 3.0 (Final)  
**Loyiha:** Nur Chinnilar Olami Landing Page

---

## 🚀 Keyingi Qadamlar

1. ✅ Bu texnik topshiriqni o'qing
2. ✅ Loyiha strukturasini tushunib oling
3. ✅ Setup qadamlarini bajaring
4. ✅ Sections'ni ketma-ket implement qiling
5. ✅ Testing va polish qiling
6. ✅ Production'ga deploy qiling

**Omad tilaymiz! 🎉**

---

*Agar savollar bo'lsa yoki yordam kerak bo'lsa - murojaat qiling! 💬*