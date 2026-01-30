"use client";

import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { ScrollIndicator } from "./ScrollIndicator";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <HeroBackground />
      <div className="relative z-10 container py-20">
        <HeroContent />
      </div>
      <ScrollIndicator />
    </section>
  );
}
