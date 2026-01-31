"use client";

import { motion } from "motion/react";
import { cn } from "@/shared/lib/utils";

export interface ShimmerEffectProps {
  children: React.ReactNode;
  className?: string;
  shimmerColor?: string;
  speed?: number;
  direction?: "left" | "right" | "top" | "bottom";
}

export function ShimmerEffect({
  children,
  className,
  shimmerColor = "rgba(255, 255, 255, 0.3)",
  speed = 2.5,
  direction = "right",
}: ShimmerEffectProps) {
  const directionStyles = {
    left: { from: "100%", to: "-100%", transform: "translateX" },
    right: { from: "-100%", to: "100%", transform: "translateX" },
    top: { from: "100%", to: "-100%", transform: "translateY" },
    bottom: { from: "-100%", to: "100%", transform: "translateY" },
  };

  const { from, to } = directionStyles[direction];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {children}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            ${direction === "left" || direction === "right" ? "90deg" : "180deg"},
            transparent 0%,
            ${shimmerColor} 50%,
            transparent 100%
          )`,
        }}
        initial={{ [directionStyles[direction].transform]: from }}
        animate={{ [directionStyles[direction].transform]: to }}
        transition={{
          duration: speed,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
