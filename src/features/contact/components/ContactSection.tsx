"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 aurora-bg opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full glass-gold blur-3xl opacity-10 animate-float-gentle" />
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full glass-brand blur-3xl opacity-10 animate-float-gentle stagger-2" />

      <div className="container relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 gradient-text-mixed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("title")}
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t("description")}
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-0.5 w-8 sm:w-12 gradient-brand rounded-full" />
            <div className="h-1 w-12 sm:w-16 md:w-20 gradient-premium rounded-full animate-scale-pulse" />
            <div className="h-0.5 w-8 sm:w-12 gradient-brand rounded-full" />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Left - Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <ContactInfo />
          </motion.div>

          {/* Right - Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
