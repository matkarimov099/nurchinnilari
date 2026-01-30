"use client";

import { IconChevronDown, IconLanguage } from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/shared/lib/utils";

const locales = [
  { code: "uz", label: "O'zbekcha", flag: "🇺🇿" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "en", label: "English", flag: "🇬🇧" },
] as const;

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const _t = useTranslations("language");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = locales.find((l) => l.code === locale) || locales[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-muted transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <IconLanguage size={20} />
        <span className="hidden sm:inline text-sm font-medium">
          {currentLocale.flag} {currentLocale.code.toUpperCase()}
        </span>
        <IconChevronDown
          size={16}
          className={cn("transition-transform", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-40 py-2 bg-card rounded-lg border border-border shadow-lg z-50">
          {locales.map((loc) => (
            <button
              key={loc.code}
              type="button"
              onClick={() => handleLocaleChange(loc.code)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-muted transition-colors",
                locale === loc.code && "text-primary font-medium",
              )}
            >
              <span>{loc.flag}</span>
              <span>{loc.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
