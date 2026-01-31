"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { LanguageSwitcher } from "@/features/layout";
import { cn } from "@/shared/lib/utils";
import { Navigation } from "./Navigation";
import { ThemeToggle } from "./ThemeToggle";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative p-3 rounded-full focus-ring",
          "glass-card hover-lift",
        )}
        aria-label="Toggle menu"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IconX size={24} className="text-brand-red" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IconMenu2 size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm glass-card-heavy z-50 overflow-y-auto custom-scrollbar"
            >
              <div className="container py-20 px-6">
                {/* Close Button */}
                <motion.button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 p-2 rounded-full glass-card"
                  aria-label="Close menu"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconX size={24} />
                </motion.button>

                {/* Navigation Items */}
                <Navigation
                  className="flex-col items-stretch gap-2"
                  onItemClick={() => setIsOpen(false)}
                />

                {/* Divider */}
                <motion.div
                  className="my-6 h-px bg-linear-to-r from-transparent via-border to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                />

                {/* Actions */}
                <motion.div
                  className="flex items-center justify-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <LanguageSwitcher />
                  <ThemeToggle />
                </motion.div>
              </div>

              {/* Decorative gradient */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 gradient-mixed"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
