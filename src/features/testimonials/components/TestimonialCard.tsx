"use client";

import { IconQuote, IconStar } from "@tabler/icons-react";
import { motion } from "motion/react";
import { GlassCard } from "@/shared/components/aceternity";
import { cn } from "@/shared/lib/utils";

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
  // Get initials for avatar
  const initials = name
    .split(" ")
    .map((n) => n.charAt(0).toUpperCase())
    .join("")
    .slice(0, 2);

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
      <GlassCard
        variant="heavy"
        className={cn(
          "p-6 md:p-8 cursor-pointer",
          "hover-lift transition-all duration-300",
          "animate-float-gentle",
        )}
        shine
      >
        {/* Quote Icon */}
        <motion.div
          className="mb-4"
          animate={{
            rotate: [0, -5, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <IconQuote size={40} className="text-gold/40 dark:text-gold/30" />
        </motion.div>

        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star, index) => (
            <motion.div
              key={star}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                delay: delay + 0.1 + index * 0.05,
                type: "spring",
                damping: 10,
                stiffness: 200,
              }}
              viewport={{ once: true }}
            >
              <IconStar
                size={20}
                className={cn(
                  star <= rating
                    ? "text-gold fill-gold drop-shadow-lg"
                    : "text-muted-foreground/30",
                  "transition-colors duration-300",
                )}
              />
            </motion.div>
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-foreground/90 italic leading-relaxed mb-6">
          "{text}"
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          {/* Avatar with Glow */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="w-12 h-12 rounded-full gradient-brand flex items-center justify-center animate-pulse-glow">
              <span className="text-white font-semibold text-lg">
                {initials}
              </span>
            </div>
            {/* Decorative Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-gold/30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Name */}
          <div>
            <motion.span className="font-semibold text-foreground block group-hover:text-brand-red transition-colors">
              {name}
            </motion.span>
            <motion.span
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: delay + 0.5 }}
              viewport={{ once: true }}
            >
              Mijoz
            </motion.span>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
