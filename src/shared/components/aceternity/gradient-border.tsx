"use client";

import { type HTMLMotionProps, motion } from "motion/react";
import { forwardRef } from "react";
import { cn } from "@/shared/lib/utils";

export interface GradientBorderProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  animate?: boolean;
  speed?: number;
}

export const GradientBorder = forwardRef<HTMLDivElement, GradientBorderProps>(
  ({ children, className, animate = true, speed = 4, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn("gradient-border-wrapper", className)}
        style={
          animate
            ? {
                animationDuration: `${speed}s`,
              }
            : undefined
        }
        {...props}
      >
        <div className="relative z-10 h-full w-full">{children}</div>
      </motion.div>
    );
  },
);

GradientBorder.displayName = "GradientBorder";
