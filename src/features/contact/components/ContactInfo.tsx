"use client";

import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconClock,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { GlassCard } from "@/shared/components/aceternity";
import { BUSINESS_INFO } from "@/shared/config/constants";
import { cn } from "@/shared/lib/utils";

export function ContactInfo() {
  const t = useTranslations("contact");

  const contactItems = [
    {
      icon: <IconMapPin size={20} />,
      label: t("address"),
      value: t("addressValue"),
      href: null,
      variant: "brand" as const,
    },
    {
      icon: <IconPhone size={20} />,
      label: t("phone"),
      value: BUSINESS_INFO.phone,
      href: `tel:${BUSINESS_INFO.phone.replace(/\s/g, "")}`,
      variant: "gold" as const,
    },
    {
      icon: <IconClock size={20} />,
      label: t("workingHours"),
      value: t("workingHoursValue"),
      href: null,
      variant: "brand" as const,
    },
    {
      icon: <IconBrandTelegram size={20} />,
      label: "Telegram",
      value: BUSINESS_INFO.telegram,
      href: `https://t.me/${BUSINESS_INFO.telegram.replace("@", "")}`,
      variant: "gold" as const,
    },
    {
      icon: <IconBrandInstagram size={20} />,
      label: "Instagram",
      value: BUSINESS_INFO.instagram,
      href: `https://instagram.com/${BUSINESS_INFO.instagram.replace("@", "")}`,
      variant: "brand" as const,
    },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <GlassCard variant="heavy" className="p-5 sm:p-6 md:p-8" shine>
          <h3 className="font-heading text-xl sm:text-2xl font-semibold mb-2 gradient-text-brand">
            {t("title")}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            {t("description")}
          </p>
        </GlassCard>
      </motion.div>

      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href || undefined}
            target={item.href?.startsWith("http") ? "_blank" : undefined}
            rel={
              item.href?.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="block"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
          >
            <GlassCard
              variant={item.variant === "brand" ? "brand" : "gold"}
              className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 cursor-pointer hover-lift"
            >
              {/* Icon with Glow */}
              <motion.div
                className={cn(
                  "flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl",
                  item.variant === "brand"
                    ? "bg-brand-red/10 text-brand-red"
                    : "bg-gold/10 text-gold",
                  "flex items-center justify-center",
                )}
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{
                  rotate: { duration: 0.5, ease: "easeInOut" },
                  scale: { type: "spring", stiffness: 400, damping: 17 },
                }}
              >
                {item.icon}
              </motion.div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground mb-0.5 sm:mb-1">
                  {item.label}
                </p>
                <p className="font-medium text-sm sm:text-base truncate line-clamp-2">
                  {item.value}
                </p>
              </div>

              {/* Arrow on hover */}
              <motion.span
                className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ x: 3 }}
              >
                →
              </motion.span>
            </GlassCard>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
