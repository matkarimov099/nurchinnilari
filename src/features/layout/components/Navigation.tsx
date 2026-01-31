"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { NAV_ITEMS } from "@/shared/config/constants";
import { cn } from "@/shared/lib/utils";

interface NavigationProps {
  className?: string;
  onItemClick?: () => void;
}

export function Navigation({ className, onItemClick }: NavigationProps) {
  const t = useTranslations("nav");

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onItemClick?.();
  };

  return (
    <nav className={cn("flex items-center gap-2", className)}>
      {NAV_ITEMS.map((item, index) => (
        <motion.a
          key={item.key}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className={cn(
            "relative px-5 py-2.5 text-sm font-medium",
            "text-muted-foreground hover:text-foreground",
            "rounded-full transition-colors duration-300",
            "overflow-hidden group",
          )}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Glass pill background on hover */}
          <motion.div
            className="absolute inset-0 rounded-full glass-card opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          />
          {/* Text */}
          <span className="relative z-10">{t(item.key)}</span>
          {/* Active indicator on hover */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full"
            style={{
              background: "linear-gradient(90deg, #ed1b24, #d4af37)",
            }}
            initial={{ width: 0 }}
            whileHover={{ width: "60%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
      ))}
    </nav>
  );
}
