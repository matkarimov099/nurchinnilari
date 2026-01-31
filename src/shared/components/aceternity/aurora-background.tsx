"use client";

import { motion } from "motion/react";
import { cn } from "@/shared/lib/utils";

export interface AuroraBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
  speed?: "slow" | "medium" | "fast";
}

const intensityConfig = {
  subtle: {
    red: 0.08,
    gold: 0.05,
  },
  medium: {
    red: 0.12,
    gold: 0.08,
  },
  strong: {
    red: 0.18,
    gold: 0.12,
  },
};

const speedConfig = {
  slow: 20,
  medium: 12,
  fast: 8,
};

export function AuroraBackground({
  children,
  className,
  intensity = "medium",
  speed = "medium",
}: AuroraBackgroundProps) {
  const config = intensityConfig[intensity];
  const duration = speedConfig[speed];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />

      {/* Aurora layers */}
      <motion.div
        className="absolute inset-0 opacity-60 dark:opacity-40"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(237, 27, 36, ${config.red}) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(212, 175, 55, ${config.gold}) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(237, 27, 36, ${config.red * 0.7}) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 70%, rgba(212, 175, 55, ${config.gold * 0.8}) 0%, transparent 50%)
          `,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Animated wave overlay */}
      <motion.div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: duration / 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(237, 27, 36, ${config.red * 1.5}) 0%, transparent 60%),
            radial-gradient(ellipse at 30% 60%, rgba(212, 175, 55, ${config.gold * 1.5}) 0%, transparent 60%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
