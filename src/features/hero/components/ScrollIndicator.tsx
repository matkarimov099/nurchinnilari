"use client";

import { IconChevronDown } from "@tabler/icons-react";
import { motion } from "motion/react";

export function ScrollIndicator() {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleScroll}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer focus-ring rounded-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
    >
      {/* Glassmorphic Circle */}
      <motion.div
        className="relative w-14 h-14 rounded-full glass-card-heavy flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Pulsing Ring Effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-brand-red/30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-gold/30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Chevron Icon */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="text-brand-red group-hover:text-gold transition-colors"
        >
          <IconChevronDown size={28} stroke={2} />
        </motion.div>
      </motion.div>

      {/* Scroll Text */}
      <motion.span
        className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        Scroll
      </motion.span>
    </motion.button>
  );
}
