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
    <section id="testimonials" className="py-20 md:py-32">
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              text={testimonial.text}
              rating={testimonial.rating}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
