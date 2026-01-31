"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { CATEGORIES } from "@/shared/config/constants";
import { CategoryCard } from "./CategoryCard";

export function CollectionsSection() {
  const t = useTranslations("collections");

  return (
    <section id="collections" className="py-20 md:py-32 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 aurora-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full glass-card-heavy blur-3xl opacity-10" />

      <div className="container relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Animated Title */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold gradient-text-mixed">
              {t("title")}
            </h2>
          </motion.div>

          {/* Animated Divider */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-0.5 w-12 gradient-brand rounded-full" />
            <div className="h-1 w-20 gradient-premium rounded-full animate-scale-pulse" />
            <div className="h-0.5 w-12 gradient-brand rounded-full" />
          </motion.div>
        </motion.div>

        {/* Categories Grid - Bento Grid Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CATEGORIES.map((category, index) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              icon={category.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
