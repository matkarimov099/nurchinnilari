"use client";

import { HeroBackground, ScrollIndicator } from "@/features/hero";
import { HeroContent } from "./HeroContent";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <HeroBackground />
      <div className="relative z-10 container pt-28 pb-32">
        <HeroContent />
      </div>
      <ScrollIndicator />
    </section>
  );
}
