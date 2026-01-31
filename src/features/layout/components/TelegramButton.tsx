"use client";

import { IconBrandTelegram } from "@tabler/icons-react";
import { motion } from "motion/react";
import { BUSINESS_INFO } from "@/shared/config/constants";

export function TelegramButton() {
  const telegramUsername = BUSINESS_INFO.telegram.replace("@", "");
  const telegramUrl = `https://t.me/${telegramUsername}`;

  return (
    <motion.a
      href={telegramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#0088cc] text-white shadow-lg hover:scale-110 transition-transform"
      initial={false}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact us on Telegram"
    >
      <IconBrandTelegram size={10} className="md:size-8" />

      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[#0088cc] animate-ping opacity-30" />
    </motion.a>
  );
}
