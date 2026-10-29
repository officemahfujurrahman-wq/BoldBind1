"use client";

import { Hero } from "./hero";
import { LogoMarquee } from "./logo-marquee";
import { ServicesSection } from "./services-section";
import { WhySection } from "./why-section";
import { ProcessSection } from "./process-section";
import { TestimonialsSection } from "./testimonials-section";
import { CtaSection } from "./cta-section";

export function HomePage({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <main>
      <Hero onNavigate={onNavigate} />
      <LogoMarquee />
      <ServicesSection onNavigate={onNavigate} />
      <WhySection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}
