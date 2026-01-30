import { setRequestLocale } from "next-intl/server";
import { AboutSection } from "@/features/about";
import { CollectionsSection } from "@/features/collections";
import { ContactSection } from "@/features/contact";
import { FeaturesSection } from "@/features/features";
import { HeroSection } from "@/features/hero";
import { TestimonialsSection } from "@/features/testimonials";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <CollectionsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
