"use client";

import {
  IconCertificate,
  IconPigMoney,
  IconShieldCheck,
  IconTruck,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { FeatureCard } from "./FeatureCard";

export function FeaturesSection() {
  const t = useTranslations("features");

  const features = [
    {
      id: "quality",
      icon: (
        <IconShieldCheck size={36} stroke={1.5} className="text-brand-red" />
      ),
      variant: "brand" as const,
    },
    {
      id: "delivery",
      icon: <IconTruck size={36} stroke={1.5} className="text-gold" />,
      variant: "gold" as const,
    },
    {
      id: "price",
      icon: <IconPigMoney size={36} stroke={1.5} className="text-gold" />,
      variant: "gold" as const,
    },
    {
      id: "warranty",
      icon: (
        <IconCertificate size={36} stroke={1.5} className="text-brand-red" />
      ),
      variant: "brand" as const,
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 aurora-bg opacity-20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full glass-gold blur-3xl opacity-10 animate-float-gentle" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full glass-brand blur-3xl opacity-10 animate-float-gentle stagger-2" />

      <div className="container relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text-mixed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("title")}
          </motion.h2>
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-0.5 w-12 gradient-brand rounded-full" />
            <div className="h-1 w-20 gradient-premium rounded-full animate-scale-pulse" />
            <div className="h-0.5 w-12 gradient-brand rounded-full" />
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={t(`${feature.id}.title`)}
              description={t(`${feature.id}.description`)}
              delay={index * 0.1}
              variant={feature.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
