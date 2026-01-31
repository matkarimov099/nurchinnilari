"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/shared/lib/utils";

export interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

const container: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
  }),
};

const child: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
};

export function TextReveal({
  text,
  className,
  delay = 0,
  stagger = 0.03,
  once = true,
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={cn(className)}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "0.25em", display: "inline-block" }}
          key={`${index}-${word}`}
          transition={{
            type: "spring",
            damping: 12,
            stiffness: 200,
            delay: delay + index * stagger,
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

export function LetterReveal({
  text,
  className,
  delay = 0,
  stagger = 0.03,
  once = true,
}: TextRevealProps) {
  const letters = text.split("");

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={cn(className)}
    >
      {letters.map((letter, index) => (
        <motion.span
          variants={child}
          style={{ display: "inline-block" }}
          key={`${index}-${letter}`}
          transition={{
            type: "spring",
            damping: 12,
            stiffness: 200,
            delay: delay + index * stagger,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
