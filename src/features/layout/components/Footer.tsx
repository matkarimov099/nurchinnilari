"use client";

import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconPhone,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import {
  BUSINESS_INFO,
  NAV_ITEMS,
  SOCIAL_LINKS,
} from "@/shared/config/constants";

const socialIcons = {
  instagram: IconBrandInstagram,
  telegram: IconBrandTelegram,
  whatsapp: IconBrandWhatsapp,
};

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-gray-300 dark:bg-[#0a0a0a]">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">
                  N
                </span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-white">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-sm text-gray-400">{t("tagline")}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {BUSINESS_INFO.address}
            </p>
            <p className="text-sm text-gray-400 mt-2">
              {BUSINESS_INFO.workingHours}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              {t("quickLinks")}
            </h4>
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-gold transition-colors"
                >
                  {tNav(item.key)}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              {t("social")}
            </h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon =
                  socialIcons[link.icon as keyof typeof socialIcons] ||
                  IconPhone;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gold hover:text-charcoal flex items-center justify-center transition-colors"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <div className="mt-6">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-gold transition-colors"
              >
                <IconPhone size={18} />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-500">
            {t("copyright", { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
}
