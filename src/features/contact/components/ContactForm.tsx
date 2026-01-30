"use client";

import { IconSend } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

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
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Name */}
      <div>
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
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          {t("phone")}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder={t("phonePlaceholder")}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>

      {/* Message */}
      <div>
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
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg gradient-brand text-white font-semibold hover:opacity-90 disabled:opacity-70 transition-all"
      >
        {isSubmitting ? (
          <>
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            {t("submitting")}
          </>
        ) : isSuccess ? (
          t("success")
        ) : (
          <>
            <IconSend size={20} />
            {t("submit")}
          </>
        )}
      </button>
    </motion.form>
  );
}
