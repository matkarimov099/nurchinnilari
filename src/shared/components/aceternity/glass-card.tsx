"use client";

import { type HTMLMotionProps, motion } from "motion/react";
import { forwardRef } from "react";
import { cn } from "@/shared/lib/utils";

export interface GlassCardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "heavy" | "brand" | "gold";
  shine?: boolean;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  (
    { children, className, variant = "default", shine = false, ...props },
    ref,
  ) => {
    const variantClasses = {
      default: "glass-card",
      heavy: "glass-card-heavy",
      brand: "glass-brand",
      gold: "glass-gold",
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          variantClasses[variant],
          shine && "glass-shine",
          "rounded-2xl",
          className,
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

GlassCard.displayName = "GlassCard";
