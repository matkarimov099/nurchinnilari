"use client";

import {
  IconChefHat,
  IconCrown,
  IconGift,
  IconGlass,
  IconSparkles,
  IconToolsKitchen2,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const icons = {
  IconToolsKitchen2,
  IconGlassFull: IconGlass,
  IconChefHat,
  IconSparkles,
  IconCrown,
  IconGift,
};

interface CategoryCardProps {
  id: string;
  icon: string;
  delay?: number;
}

export function CategoryCard({ id, icon, delay = 0 }: CategoryCardProps) {
  const t = useTranslations("collections");
  const Icon = icons[icon as keyof typeof icons] || IconSparkles;

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <div className="p-8 text-center">
        {/* Icon */}
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon size={32} stroke={1.5} />
        </motion.div>

        {/* Title */}
        <h3 className="font-heading text-xl font-semibold mb-3">
          {t(`${id}.name`)}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {t(`${id}.description`)}
        </p>

        {/* View More Link */}
        <motion.span
          className="inline-flex items-center gap-1 text-primary font-medium text-sm"
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ x: 5 }}
        >
          {t("viewMore")} →
        </motion.span>
      </div>

      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}
