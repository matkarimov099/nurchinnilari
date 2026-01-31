"use client";

import {
  IconChefHat,
  IconCrown,
  IconGift,
  IconGlass,
  IconSparkles,
  IconToolsKitchen2,
} from "@tabler/icons-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useTranslations } from "next-intl";
import { GlassCard, SpotlightEffect } from "@/shared/components/aceternity";
import { cn } from "@/shared/lib/utils";

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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [5, -5]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-5, 5]),
    springConfig,
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;

    mouseX.set((e.clientX - centerX) / width);
    mouseY.set((e.clientY - centerY) / height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay,
        type: "spring",
        damping: 15,
        stiffness: 200,
      }}
      viewport={{ once: true }}
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <SpotlightEffect
        className="rounded-2xl"
        spotlightSize={200}
        color="rgba(237, 27, 36, 0.1)"
      >
        <GlassCard
          variant="brand"
          className={cn(
            "p-8 text-center cursor-pointer",
            "hover-lift hover-glow",
          )}
          shine
        >
          {/* Animated Gradient Border on Hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(135deg, rgba(237, 27, 36, 0.2), rgba(212, 175, 55, 0.2))",
            }}
          />

          {/* Icon Container */}
          <motion.div
            className={cn(
              "inline-flex items-center justify-center w-20 h-20",
              "rounded-2xl glass-card-heavy",
              "mb-6 relative overflow-hidden",
            )}
            whileHover={{
              rotate: [0, -10, 10, -10, 10, 0],
              scale: 1.1,
            }}
            transition={{
              rotate: { duration: 0.6, ease: "easeInOut" },
              scale: { type: "spring", stiffness: 400, damping: 17 },
            }}
          >
            {/* Icon Glow Background */}
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  "radial-gradient(circle, rgba(237,27,36,0.3) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(237,27,36,0.3) 0%, transparent 70%)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <Icon
              size={36}
              stroke={1.5}
              className="relative z-10 text-brand-red group-hover:text-gold transition-colors duration-300"
            />
          </motion.div>

          {/* Title */}
          <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-brand-red transition-colors">
            {t(`${id}.name`)}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {t(`${id}.description`)}
          </p>

          {/* View More Link */}
          <motion.span
            className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:text-gold transition-colors"
            initial={{ opacity: 0.8 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {t("viewMore")}
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              →
            </motion.span>
          </motion.span>
        </GlassCard>
      </SpotlightEffect>
    </motion.div>
  );
}
