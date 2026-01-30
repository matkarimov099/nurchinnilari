"use client";

import { IconClock, IconUsers } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function HeroContent() {
  const t = useTranslations("hero");

  return (
    <div className="text-center max-w-4xl mx-auto px-4">
      {/* Stats Badges */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-sm">
          <IconUsers size={18} className="text-brand-red" />
          <span className="text-sm font-medium">
            25,600+ {t("statsClients")}
          </span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-sm">
          <IconClock size={18} className="text-gold" />
          <span className="text-sm font-medium">
            8:30 - 18:30 {t("statsWorkingHours")}
          </span>
        </div>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <span className="bg-gradient-to-r from-brand-red via-brand-red-dark to-brand-red bg-clip-text text-transparent">
          {t("title")}
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        {t("subtitle")}
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Link
          href="#collections"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full gradient-brand text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          {t("ctaPrimary")}
        </Link>
        <Link
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gold text-gold hover:bg-gold hover:text-charcoal font-semibold transition-all duration-300"
        >
          {t("ctaSecondary")}
        </Link>
      </motion.div>
    </div>
  );
}
