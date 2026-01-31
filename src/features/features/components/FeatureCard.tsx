"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { GlassCard, SpotlightEffect } from "@/shared/components/aceternity";
import { cn } from "@/shared/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
  variant?: "brand" | "gold";
}

export function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
  variant = "brand",
}: FeatureCardProps) {
  const iconBg = {
    brand: "bg-brand-red/10",
    gold: "bg-gold/10",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay,
        type: "spring",
        damping: 15,
        stiffness: 200,
      }}
      viewport={{ once: true }}
    >
      <SpotlightEffect className="rounded-2xl" spotlightSize={200}>
        <GlassCard
          variant="default"
          className={cn(
            "group text-center p-8 cursor-pointer",
            "hover-lift transition-all duration-300",
          )}
          shine
        >
          {/* Icon Container with Glow */}
          <motion.div
            className={cn(
              "inline-flex items-center justify-center",
              "w-20 h-20 rounded-2xl",
              iconBg[variant],
              "mb-6 relative overflow-hidden",
            )}
            whileHover={{
              rotate: [0, -5, 5, -5, 0],
              scale: 1.1,
            }}
            transition={{
              rotate: { duration: 0.5, ease: "easeInOut" },
              scale: { type: "spring", stiffness: 400, damping: 17 },
            }}
          >
            {/* Animated Glow Background */}
            <motion.div
              className="absolute inset-0 opacity-50"
              animate={{
                background: [
                  `radial-gradient(circle, ${variant === "brand" ? "rgba(237,27,36,0.4)" : "rgba(212,175,55,0.4)"} 0%, transparent 70%)`,
                  `radial-gradient(circle, ${variant === "brand" ? "rgba(212,175,55,0.4)" : "rgba(237,27,36,0.4)"} 0%, transparent 70%)`,
                  `radial-gradient(circle, ${variant === "brand" ? "rgba(237,27,36,0.4)" : "rgba(212,175,55,0.4)"} 0%, transparent 70%)`,
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <span className="relative z-10">{icon}</span>
          </motion.div>

          {/* Title */}
          <motion.h3
            className={cn(
              "font-heading text-xl font-semibold mb-3",
              "group-hover:text-primary transition-colors",
            )}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">{description}</p>

          {/* Hover Effect Line */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 rounded-full"
            style={{
              background:
                variant === "brand"
                  ? "linear-gradient(90deg, #ed1b24, #d4af37)"
                  : "linear-gradient(90deg, #d4af37, #ed1b24)",
            }}
            whileHover={{ width: "60%" }}
            transition={{ duration: 0.3 }}
          />
        </GlassCard>
      </SpotlightEffect>
    </motion.div>
  );
}
