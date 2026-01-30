"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface StatsCardProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

export function StatsCard({
  value,
  label,
  suffix = "+",
  delay = 0,
}: StatsCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </motion.div>
  );
}
