"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { STATS } from "@/shared/config/constants";
import { StatsCard } from "./StatsCard";

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t("title")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              {t("description1")}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("description2")}
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatsCard
              value={STATS.experience}
              label={t("statsExperience")}
              delay={0.1}
            />
            <StatsCard
              value={STATS.clients}
              label={t("statsClients")}
              delay={0.2}
            />
            <StatsCard
              value={STATS.products}
              label={t("statsProducts")}
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
