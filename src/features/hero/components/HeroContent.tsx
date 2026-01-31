"use client";

import { IconClock, IconUsers } from "@tabler/icons-react";
import { motion, type Variants } from "motion/react";
import { useTranslations } from "next-intl";
import { GlassCard, GlowingButton } from "@/shared/components/aceternity";
import { cn } from "@/shared/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function HeroContent() {
  const t = useTranslations("hero");

  return (
    <motion.div
      className="text-center max-w-4xl mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Glass Card Content Wrapper */}
      <GlassCard
        variant="heavy"
        className="p-8 md:p-12 backdrop-blur-xl mx-auto"
        shine
      >
        {/* Stats Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          variants={itemVariants}
        >
          <motion.div
            className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full glass-card hover-lift"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <IconUsers
              size={16}
              className="text-brand-red animate-pulse-glow"
            />
            <span className="text-xs sm:text-sm font-medium">
              25,600+ {t("statsClients")}
            </span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full glass-card hover-lift"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <IconClock
              size={16}
              className="text-gold animate-pulse-glow-gold"
            />
            <span className="text-xs sm:text-sm font-medium">
              8:30 - 18:30 {t("statsWorkingHours")}
            </span>
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className={cn(
            "font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
            "font-bold tracking-tight mb-6",
            "gradient-text-mixed",
          )}
          variants={itemVariants}
        >
          {t("title")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-sans text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          variants={itemVariants}
        >
          {t("subtitle")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <GlowingButton
            href="#collections"
            variant="brand"
            className="text-base px-8 py-4 shadow-xl shadow-brand-red/30 hover:shadow-2xl hover:shadow-brand-red/40"
          >
            {t("ctaPrimary")}
          </GlowingButton>
          <GlowingButton
            href="#contact"
            variant="gold"
            className="text-base px-8 py-4 shadow-xl shadow-gold/30 hover:shadow-2xl hover:shadow-gold/40"
          >
            {t("ctaSecondary")}
          </GlowingButton>
        </motion.div>
      </GlassCard>
    </motion.div>
  );
}
