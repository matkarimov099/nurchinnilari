"use client";

import {
  type HTMLMotionProps,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { forwardRef, useRef, useState } from "react";
import { cn } from "@/shared/lib/utils";

export interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  strength?: number;
  children: React.ReactNode;
}

export const MagneticButton = forwardRef<
  HTMLButtonElement,
  MagneticButtonProps
>(({ children, className, strength = 20, ...props }, _ref) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [_isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / strength;
    const deltaY = (e.clientY - centerY) / strength;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={buttonRef}
      className={cn("relative focus-ring", className)}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  );
});

MagneticButton.displayName = "MagneticButton";
