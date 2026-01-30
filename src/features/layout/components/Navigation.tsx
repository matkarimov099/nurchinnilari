"use client";

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
    <nav className={cn("flex items-center gap-1", className)}>
      {NAV_ITEMS.map((item) => (
        <a
          key={item.key}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
        >
          {t(item.key)}
        </a>
      ))}
    </nav>
  );
}
