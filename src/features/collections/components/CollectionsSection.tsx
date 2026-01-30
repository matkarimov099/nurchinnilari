"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { CATEGORIES } from "@/shared/config/constants";
import { CategoryCard } from "./CategoryCard";

export function CollectionsSection() {
  const t = useTranslations("collections");

  return (
    <section id="collections" className="py-20 md:py-32">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("title")}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
