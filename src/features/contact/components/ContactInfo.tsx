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
import { BUSINESS_INFO } from "@/shared/config/constants";

export function ContactInfo() {
  const t = useTranslations("contact");

  const contactItems = [
    {
      icon: <IconMapPin size={24} />,
      label: t("address"),
      value: t("addressValue"),
      href: null,
    },
    {
      icon: <IconPhone size={24} />,
      label: t("phone"),
      value: BUSINESS_INFO.phone,
      href: `tel:${BUSINESS_INFO.phone.replace(/\s/g, "")}`,
    },
    {
      icon: <IconClock size={24} />,
      label: t("workingHours"),
      value: t("workingHoursValue"),
      href: null,
    },
    {
      icon: <IconBrandTelegram size={24} />,
      label: "Telegram",
      value: BUSINESS_INFO.telegram,
      href: `https://t.me/${BUSINESS_INFO.telegram.replace("@", "")}`,
    },
    {
      icon: <IconBrandInstagram size={24} />,
      label: "Instagram",
      value: BUSINESS_INFO.instagram,
      href: `https://instagram.com/${BUSINESS_INFO.instagram.replace("@", "")}`,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-heading text-2xl font-semibold mb-2">
          {t("title")}
        </h3>
        <p className="text-muted-foreground">{t("description")}</p>
      </div>

      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <motion.div
            key={item.label}
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="font-medium hover:text-primary transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-medium">{item.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
