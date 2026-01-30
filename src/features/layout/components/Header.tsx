"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { BUSINESS_INFO } from "@/shared/config/constants";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";
import { Navigation } from "./Navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"],
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"],
  );

  return (
    <motion.header
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-colors dark:bg-[#0a0a0a]/90"
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-brand-red flex items-center justify-center">
            <span className="text-white font-display font-bold text-lg md:text-xl">
              N
            </span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-heading text-lg md:text-xl font-semibold leading-tight">
              {BUSINESS_INFO.name}
            </h1>
            <p className="text-xs text-muted-foreground">
              {BUSINESS_INFO.tagline}
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <Navigation className="hidden lg:flex" />

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </motion.header>
  );
}
