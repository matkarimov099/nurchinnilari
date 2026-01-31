"use client";

import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

export function HeroBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate particles only once with deterministic values
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => {
      // Use index-based deterministic values instead of random
      const angle = (i / 20) * Math.PI * 2;
      const radius = 30 + (i % 3) * 20;
      const left = 50 + Math.cos(angle) * radius;
      const top = 50 + Math.sin(angle) * radius;

      return {
        id: i,
        left: Math.max(5, Math.min(95, left)),
        top: Math.max(5, Math.min(95, top)),
        duration: 3 + (i % 5),
        delay: (i % 3) * 0.5,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Mesh Gradient Base */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Aurora Effect */}
      <motion.div
        className="absolute inset-0 aurora-bg opacity-80"
        animate={
          mounted
            ? {
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }
            : undefined
        }
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Large Glass Orbs */}
      <motion.div
        className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full glass-card-heavy animate-float-gentle"
        animate={
          mounted
            ? {
                scale: [1, 1.15, 1],
                x: [0, 30, 0],
                y: [0, -20, 0],
              }
            : undefined
        }
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full glass-gold animate-float-gentle stagger-2"
        animate={
          mounted
            ? {
                scale: [1.15, 1, 1.15],
                x: [0, -30, 0],
                y: [0, 20, 0],
              }
            : undefined
        }
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full glass-brand animate-float-gentle stagger-3"
        animate={
          mounted
            ? {
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }
            : undefined
        }
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Smaller Floating Orbs */}
      <motion.div
        className="absolute top-[20%] left-[15%] w-32 h-32 rounded-full glass-card animate-float-delayed"
        animate={mounted ? { y: [0, -30, 0] } : undefined}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[60%] right-[20%] w-24 h-24 rounded-full glass-gold animate-float-delayed stagger-2"
        animate={mounted ? { y: [0, -25, 0] } : undefined}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[30%] left-[25%] w-20 h-20 rounded-full glass-brand animate-float-delayed stagger-4"
        animate={mounted ? { y: [0, -20, 0] } : undefined}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Particles - only render after mount */}
      {mounted && (
        <div className="particles-container">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute w-1 h-1 rounded-full bg-brand-red/30 dark:bg-brand-red/50"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: p.duration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: p.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="hero-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>

      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
    </div>
  );
}
