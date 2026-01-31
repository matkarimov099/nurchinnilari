"use client";

import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconPhone,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import {
  BUSINESS_INFO,
  NAV_ITEMS,
  SOCIAL_LINKS,
} from "@/shared/config/constants";
import { cn } from "@/shared/lib/utils";

const socialIcons = {
  instagram: IconBrandInstagram,
  telegram: IconBrandTelegram,
};

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal text-gray-300 dark:bg-[#0a0a0a] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 aurora-bg opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full glass-card-heavy blur-3xl opacity-5" />

      <div className="container max-w-6xl mx-auto py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="relative w-12 h-12 rounded-full gradient-brand flex items-center justify-center shadow-lg shadow-brand-red/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className="text-white font-display font-bold text-xl">
                  N
                </span>
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full animate-pulse-glow pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(237,27,36,0.4) 0%, transparent 70%)",
                  }}
                />
              </motion.div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-white">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-sm text-gray-400">{t("tagline")}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-2">
              {BUSINESS_INFO.address}
            </p>
            <p className="text-sm text-gray-400">
              {BUSINESS_INFO.workingHours}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              {t("quickLinks")}
            </h4>
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-gold transition-colors inline-block"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  {tNav(item.key)}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              {t("social")}
            </h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link, index) => {
                const Icon =
                  socialIcons[link.icon as keyof typeof socialIcons] ||
                  IconPhone;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-12 h-12 rounded-xl",
                      "glass-card border border-gray-700/50",
                      "hover:bg-gold hover:text-charcoal",
                      "flex items-center justify-center",
                      "transition-colors duration-300",
                    )}
                    aria-label={link.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.1 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, -5, 0],
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-gold transition-colors"
              >
                <IconPhone size={18} />
                {BUSINESS_INFO.phone}
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-700 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500">
            {t("copyright", { year: currentYear })}
          </p>
        </motion.div>
      </div>

      {/* Gradient Border Top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 gradient-mixed"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ transformOrigin: "center" }}
      />
    </footer>
  );
}
