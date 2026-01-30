"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      className="group text-center p-8 rounded-2xl border border-border hover:border-primary/50 bg-card transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-heading text-xl font-semibold mb-3">{title}</h3>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
