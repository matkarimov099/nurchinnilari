"use client";

import { IconQuote, IconStar } from "@tabler/icons-react";
import { motion } from "motion/react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  delay?: number;
}

export function TestimonialCard({
  name,
  text,
  rating,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="p-6 md:p-8 rounded-2xl bg-card border border-border"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Quote Icon */}
      <IconQuote size={40} className="text-accent/30 mb-4" />

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <IconStar
            key={star}
            size={18}
            className={
              star <= rating ? "text-accent fill-accent" : "text-muted"
            }
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-foreground/90 italic leading-relaxed mb-6">"{text}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-primary font-semibold">
            {name.charAt(0).toUpperCase()}
          </span>
        </div>
        <span className="font-medium">{name}</span>
      </div>
    </motion.div>
  );
}
