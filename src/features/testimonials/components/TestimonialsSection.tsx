"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Dilnoza Karimova",
    text: "Juda ajoyib sifatli chinni to'plam oldim. Yetkazib berish ham tez bo'ldi. Rahmat!",
    rating: 5,
  },
  {
    id: 2,
    name: "Akmal Toshmatov",
    text: "To'y uchun kristall idishlar sotib oldik. Hammasi zo'r, mehmonlar ham maqtashdi.",
    rating: 5,
  },
  {
    id: 3,
    name: "Nodira Rustamova",
    text: "Narxlar ham yaxshi, sifat ham a'lo. Endi faqat shu do'kondan olaman.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const t = useTranslations("testimonials");

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 aurora-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full glass-card-heavy blur-3xl opacity-10" />

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
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text-gold"
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
            <div className="h-0.5 w-12 gradient-premium rounded-full" />
            <div className="h-1 w-20 gradient-brand rounded-full animate-scale-pulse" />
            <div className="h-0.5 w-12 gradient-premium rounded-full" />
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              text={testimonial.text}
              rating={testimonial.rating}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
