"use client";

import { type HTMLMotionProps, motion } from "motion/react";
import { forwardRef } from "react";
import { cn } from "@/shared/lib/utils";

export interface GlowingButtonProps extends HTMLMotionProps<"a"> {
  variant?: "brand" | "gold" | "mixed";
  glowOnHover?: boolean;
  children: React.ReactNode;
}

export const GlowingButton = forwardRef<HTMLAnchorElement, GlowingButtonProps>(
  (
    { children, className, variant = "brand", glowOnHover = true, ...props },
    ref,
  ) => {
    const variantClasses = {
      brand: "gradient-brand",
      gold: "gradient-premium",
      mixed: "gradient-mixed",
    };

    return (
      <motion.a
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold shadow-lg overflow-hidden",
          variantClasses[variant],
          glowOnHover && "btn-glow",
          "focus-ring",
          className,
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  },
);

GlowingButton.displayName = "GlowingButton";
