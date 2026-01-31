"use client";

import { AnimatePresence, motion } from "motion/react";
import { type ReactElement, useRef, useState } from "react";
import { cn } from "@/shared/lib/utils";

export interface RippleEffectProps {
  children: ReactElement;
  className?: string;
  color?: string;
  duration?: number;
}

export function RippleEffect({
  children,
  className,
  color = "rgba(255, 255, 255, 0.5)",
  duration = 600,
}: RippleEffectProps) {
  const [ripples, setRipples] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const addRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      id: Date.now(),
      x,
      y,
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, duration);
  };

  return (
    <div
      ref={containerRef}
      role="button"
      aria-label="Ripple effect button"
      className={cn("relative overflow-hidden", className)}
      onMouseDown={addRipple}
    >
      {children}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              background: color,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration / 1000, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
