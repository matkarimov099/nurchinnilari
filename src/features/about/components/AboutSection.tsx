"use client";

import { IconAward, IconShoppingBag, IconUsers } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { GlassCard } from "@/shared/components/aceternity";
import { STATS } from "@/shared/config/constants";
import { StatsCard } from "./StatsCard";

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 aurora-bg opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full glass-brand blur-3xl opacity-20 animate-float-gentle" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full glass-gold blur-3xl opacity-20 animate-float-gentle stagger-2" />

      <div className="container relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <GlassCard variant="heavy" className="p-8 md:p-10" shine>
              {/* Section Title */}
              <motion.h2
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text-mixed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                {t("title")}
              </motion.h2>

              {/* Description */}
              <motion.div
                className="space-y-4 text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p>{t("description1")}</p>
                <p>{t("description2")}</p>
              </motion.div>

              {/* Decorative Element */}
              <motion.div
                className="mt-8 flex items-center gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="h-1 w-16 gradient-brand rounded-full" />
                <div className="h-1 w-8 gradient-premium rounded-full" />
              </motion.div>
            </GlassCard>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <StatsCard
              value={STATS.experience}
              label={t("statsExperience")}
              suffix=""
              delay={0.1}
              icon={<IconAward size={32} />}
              variant="brand"
            />
            <StatsCard
              value={STATS.clients}
              label={t("statsClients")}
              delay={0.2}
              icon={<IconUsers size={32} />}
              variant="gold"
            />
            <StatsCard
              value={STATS.products}
              label={t("statsProducts")}
              delay={0.3}
              icon={<IconShoppingBag size={32} />}
              variant="brand"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
