"use client";

import { IconCheck, IconSend } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { GlassCard } from "@/shared/components/aceternity";
import { cn } from "@/shared/lib/utils";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form
    (e.target as HTMLFormElement).reset();

    // Reset success message after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <GlassCard variant="heavy" className="p-8 md:p-10" shine>
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            {t("name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength={2}
            placeholder={t("namePlaceholder")}
            className={cn(
              "w-full px-4 py-3 rounded-xl",
              "glass-card border border-border",
              "focus:border-brand-red focus:ring-2 focus:ring-brand-red/20",
              "outline-none transition-all duration-300",
              "placeholder:text-muted-foreground/50",
            )}
          />
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            {t("phone")}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder={t("phonePlaceholder")}
            className={cn(
              "w-full px-4 py-3 rounded-xl",
              "glass-card border border-border",
              "focus:border-brand-red focus:ring-2 focus:ring-brand-red/20",
              "outline-none transition-all duration-300",
              "placeholder:text-muted-foreground/50",
            )}
          />
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            {t("message")}
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            rows={4}
            placeholder={t("messagePlaceholder")}
            className={cn(
              "w-full px-4 py-3 rounded-xl",
              "glass-card border border-border",
              "focus:border-brand-red focus:ring-2 focus:ring-brand-red/20",
              "outline-none transition-all duration-300 resize-none",
              "placeholder:text-muted-foreground/50",
            )}
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className={cn(
              "w-full flex items-center justify-center gap-2",
              "px-6 py-4 rounded-xl gradient-brand",
              "text-white font-semibold",
              "shadow-lg shadow-brand-red/30",
              "disabled:opacity-70 transition-all duration-300",
              "hover:shadow-xl hover:shadow-brand-red/40 hover:-translate-y-0.5",
              "active:translate-y-0",
            )}
            whileHover={{ scale: isSubmitting || isSuccess ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting || isSuccess ? 1 : 0.98 }}
          >
            <AnimatePresence mode="wait">
              {isSubmitting ? (
                <motion.div
                  key="submitting"
                  className="flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {t("submitting")}
                </motion.div>
              ) : isSuccess ? (
                <motion.div
                  key="success"
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <IconCheck size={20} className="animate-bounce" />
                  {t("success")}
                </motion.div>
              ) : (
                <motion.div
                  key="submit"
                  className="flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <IconSend size={20} />
                  {t("submit")}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </motion.form>
    </GlassCard>
  );
}
