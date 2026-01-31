"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/shared/lib/utils";

export interface SpotlightEffectProps {
  children: React.ReactNode;
  className?: string;
  spotlightSize?: number;
  color?: string;
}

export function SpotlightEffect({
  children,
  className,
  spotlightSize = 300,
  color = "rgba(237, 27, 36, 0.15)",
}: SpotlightEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(mousePosition.x - rect.left);
    mouseY.set(mousePosition.y - rect.top);
  }, [mousePosition, mouseX, mouseY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={containerRef}
      aria-label="Spotlight effect container"
      className={cn("relative overflow-hidden rounded-2xl", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <motion.div
          className="absolute pointer-events-none rounded-full blur-3xl"
          style={{
            width: spotlightSize,
            height: spotlightSize,
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            left: spotlightX,
            top: spotlightY,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </section>
  );
}
