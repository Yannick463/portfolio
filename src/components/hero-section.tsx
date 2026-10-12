"use client";

import { MotionFadeItem } from "@/components/motion/motion-in-view";
import { MotionHeroStagger } from "@/components/motion/motion-stagger";
import { HeroPhotoUploadCard } from "@/components/ui/hero-photo-upload-card";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { useLanguage } from "@/components/language-provider";
import { siteConfig } from "@/lib/i18n";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative z-10 min-h-0 pb-[clamp(70px,6vw,72px)] pt-[5.5rem]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary/50 via-bg-primary to-bg-primary" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <ParticlesBackground />
      </div>

      <div className="hero-shell relative z-10">
        <MotionHeroStagger className="hero-grid">
          <div className="hero-copy flex min-w-0 flex-col">
            <MotionFadeItem as="h1" className="hero-title font-display font-bold">
              {siteConfig.name}
            </MotionFadeItem>

            <MotionFadeItem as="p" className="hero-role font-display text-lg text-accent-orange md:text-xl">
              {t.hero.role}
            </MotionFadeItem>

            <MotionFadeItem
              as="p"
              className="hero-description text-base leading-relaxed text-text-secondary md:text-lg"
            >
              {t.hero.subtitle}
            </MotionFadeItem>
          </div>

          <MotionFadeItem>
            <HeroPhotoUploadCard />
          </MotionFadeItem>
        </MotionHeroStagger>
      </div>
    </section>
  );
}
