"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "@/i18n/routing";
import { NAV_ITEMS } from "@/shared/config/constants";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("nav");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  if (!mounted) return null;

  // Render menu button in place, but menu panel via portal
  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative p-2 sm:p-3 rounded-full glass-card focus-ring lg:hidden"
        aria-label="Open menu"
      >
        <IconMenu2 size={20} />
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
                  onClick={() => setIsOpen(false)}
                />

                {/* Menu Panel */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 200,
                  }}
                  className="fixed top-0 right-0 bottom-0 left-0 sm:left-auto sm:w-[400px] bg-background dark:bg-[#0a0a0a] z-[300] shadow-2xl overflow-y-auto"
                >
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
                      <h2 className="text-lg font-semibold">{t("menu")}</h2>
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="p-2 rounded-full glass-card focus-ring"
                        aria-label="Close menu"
                      >
                        <IconX size={20} />
                      </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 sm:p-6">
                      <ul className="space-y-2">
                        {NAV_ITEMS.map((item, index) => (
                          <motion.li
                            key={item.key}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                          >
                            <Link
                              href={item.href}
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(item.href);
                              }}
                              className="block px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                            >
                              {t(item.key)}
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
