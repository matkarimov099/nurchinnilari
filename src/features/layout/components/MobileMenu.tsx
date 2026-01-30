"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Navigation } from "./Navigation";
import { ThemeToggle } from "./ThemeToggle";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-muted transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg"
          >
            <div className="container py-6">
              <Navigation
                className="flex-col items-stretch gap-2"
                onItemClick={() => setIsOpen(false)}
              />
              <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-border">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
