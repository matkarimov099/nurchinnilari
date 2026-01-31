export const BUSINESS_INFO = {
  name: "Nur Chinnilar Olami",
  tagline: "Premium Uy Buyumlari",
  phone: "+998 97 152 22 23",
  telegram: "@nur_chinnilar_olami",
  instagram: "@nur_chinnilar_olami",
  address: "Urganch shahar, Dehqon bozori 5-blok 2-blok 2-do'kon",
  workingHours: "8:30 - 18:30",
  email: "info@nur-chinnilar.uz",
} as const;

export const NAV_ITEMS = [
  { key: "home", href: "#home" },
  { key: "catalog", href: "#collections" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/nur_chinnilar_olami",
    icon: "instagram",
  },
  {
    name: "Telegram",
    href: "https://t.me/nur_chinnilar_olami",
    icon: "telegram",
  },
] as const;

export const CATEGORIES = [
  {
    id: "chinni",
    icon: "IconToolsKitchen2",
    image: "/images/categories/chinni.webp",
  },
  {
    id: "crystal",
    icon: "IconGlassFull",
    image: "/images/categories/kristall.webp",
  },
  {
    id: "kitchen",
    icon: "IconChefHat",
    image: "/images/categories/oshxona.webp",
  },
  {
    id: "decor",
    icon: "IconSparkles",
    image: "/images/categories/dekor.webp",
  },
  {
    id: "premium",
    icon: "IconCrown",
    image: "/images/categories/premium.webp",
  },
  {
    id: "gift",
    icon: "IconGift",
    image: "/images/categories/sovga.webp",
  },
] as const;

export const STATS = {
  experience: 15,
  clients: 25600,
  products: 500,
} as const;
