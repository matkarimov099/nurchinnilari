"use client";

import { motion, useInView, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { GlassCard } from "@/shared/components/aceternity";
import { cn } from "@/shared/lib/utils";

interface StatsCardProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
  icon?: React.ReactNode;
  variant?: "brand" | "gold" | "default";
}

export function StatsCard({
  value,
  label,
  suffix = "+",
  delay = 0,
  icon,
  variant = "default",
}: StatsCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [_count, _setCount] = useState(0);

  // Spring animation for the number
  const spring = useSpring(value, {
    bounce: 0,
    duration: 2000,
  });

  const displayValue = useTransform(spring, (latest) => {
    return Math.floor(latest).toLocaleString();
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  const variantStyles = {
    brand: "glass-brand hover:shadow-brand-red/30",
    gold: "glass-gold hover:shadow-gold/30",
    default: "glass-card hover-lift",
  };

  const iconColor = {
    brand: "text-brand-red",
    gold: "text-gold",
    default: "text-primary",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay,
        type: "spring",
        damping: 15,
        stiffness: 200,
      }}
      viewport={{ once: true }}
    >
      <GlassCard
        variant="default"
        className={cn(
          "p-5 sm:p-6 md:p-8 text-center relative overflow-hidden group min-w-0",
          variantStyles[variant],
        )}
        shine
      >
        {/* Animated Gradient Border on Hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className={cn(
              "absolute inset-0 rounded-2xl",
              variant === "brand" && "animate-pulse-glow",
              variant === "gold" && "animate-pulse-glow-gold",
            )}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          {icon && (
            <motion.div
              className={cn("flex justify-center mb-4", iconColor[variant])}
              animate={
                isInView
                  ? {
                      rotate: [0, -10, 10, -10, 10, 0],
                      scale: [1, 1.1, 1],
                    }
                  : {}
              }
              transition={{
                duration: 1,
                delay: delay + 0.5,
                ease: "easeInOut",
              }}
            >
              {icon}
            </motion.div>
          )}

          {/* Animated Number */}
          <motion.div
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold gradient-text-brand mb-2 break-words"
            style={{ color: variant === "gold" ? "#d4af37" : undefined }}
          >
            <motion.span>{displayValue}</motion.span>
            {suffix && (
              <motion.span
                className="inline-block"
                animate={
                  isInView
                    ? {
                        scale: [1, 1.3, 1],
                        rotate: [0, -10, 10, -10, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 1,
                  delay: delay + 0.8,
                  ease: "easeInOut",
                }}
              >
                {suffix}
              </motion.span>
            )}
          </motion.div>

          {/* Label */}
          <div className="text-muted-foreground font-medium text-sm md:text-base">
            {label}
          </div>
        </div>

        {/* Shine Effect */}
        <motion.div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </GlassCard>
    </motion.div>
  );
}
