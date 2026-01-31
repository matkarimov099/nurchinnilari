"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "@/shared/lib/utils";

export interface ParallaxFloatProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  offset?: [number, number];
  rotate?: boolean;
}

export function ParallaxFloat({
  children,
  className,
  speed = 0.5,
  offset = [0, 1],
  rotate = false,
}: ParallaxFloatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  const rotateValue = useTransform(scrollYProgress, [0, 1], [0, speed * 20]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate: rotate ? rotateValue : 0 }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
