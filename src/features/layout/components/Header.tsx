"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/features/layout";
import { BUSINESS_INFO } from "@/shared/config/constants";
import { MobileMenu } from "./MobileMenu";
import { Navigation } from "./Navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  // Glassmorphism effect on scroll
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.15)"],
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"],
  );
  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(237, 27, 36, 0)", "rgba(237, 27, 36, 0.15)"],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.header
      style={
        mounted
          ? {
              backgroundColor,
              backdropFilter: backdropBlur,
              WebkitBackdropFilter: backdropBlur,
              borderColor,
            }
          : undefined
      }
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent glass-card"
    >
      <div className="container max-w-6xl mx-auto flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="relative w-10 h-10 md:w-12 md:h-12 rounded-full gradient-brand flex items-center justify-center shrink-0"
            animate={{
              boxShadow: [
                "0 0 15px rgba(237, 27, 36, 0.2)",
                "0 0 25px rgba(237, 27, 36, 0.4)",
                "0 0 15px rgba(237, 27, 36, 0.2)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <span className="text-white font-display font-bold text-lg md:text-xl">
              N
            </span>
          </motion.div>
          <div className="hidden sm:block">
            <h1 className="font-heading text-base md:text-lg font-semibold leading-tight">
              {BUSINESS_INFO.name}
            </h1>
            <p className="text-xs text-muted-foreground">
              {BUSINESS_INFO.tagline}
            </p>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <Navigation className="hidden lg:flex" />

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </motion.header>
  );
}
