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
      icon: <IconShieldCheck size={32} stroke={1.5} />,
    },
    {
      id: "delivery",
      icon: <IconTruck size={32} stroke={1.5} />,
    },
    {
      id: "price",
      icon: <IconPigMoney size={32} stroke={1.5} />,
    },
    {
      id: "warranty",
      icon: <IconCertificate size={32} stroke={1.5} />,
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("title")}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
