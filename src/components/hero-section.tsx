"use client";

import { MotionFadeItem } from "@/components/motion/motion-in-view";
import { MotionHeroStagger } from "@/components/motion/motion-stagger";
import { PortfolioAvatar } from "@/components/portfolio-avatar";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { TerminalWidget } from "@/components/ui/terminal-widget";
import { useLanguage } from "@/components/language-provider";
import { siteConfig } from "@/lib/i18n";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden pb-[clamp(3rem,7vh,5.5rem)] pt-[clamp(5.5rem,11vh,6.75rem)] md:pb-[clamp(3.5rem,8vh,6rem)] md:pt-[clamp(6rem,12vh,7.5rem)]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary/50 via-bg-primary to-bg-primary" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <ParticlesBackground />

      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-blue/5 blur-3xl md:h-96 md:w-96" />
      <div className="absolute right-0 top-1/4 h-48 w-48 rounded-full bg-accent-orange/5 blur-3xl" />

      {/* Hero content shell — no vertical centering; copy starts below header with controlled offset */}
      <div className="section-container with-left-rail-space relative z-10">
        <MotionHeroStagger className="hero-grid grid w-full gap-10 lg:items-start lg:gap-12 xl:grid-cols-[minmax(420px,560px)_minmax(420px,520px)] xl:items-start xl:gap-16 xl:pt-[clamp(0.25rem,2.5vh,1.75rem)]">
          {/* Hero copy column — name, role, description */}
          <div className="hero-copy-column flex min-w-0 flex-col self-start xl:pt-[clamp(0.5rem,2vh,1.25rem)]">
            <MotionFadeItem
              as="h1"
              className="font-display text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl xl:whitespace-nowrap"
            >
              {siteConfig.name}
            </MotionFadeItem>

            <MotionFadeItem
              as="p"
              className="mt-3 font-display text-lg text-accent-orange md:text-xl lg:mt-4"
            >
              {t.hero.role}
            </MotionFadeItem>

            <MotionFadeItem
              as="p"
              className="mt-8 max-w-xl text-base leading-relaxed text-text-secondary md:mt-10 md:text-lg md:leading-8"
            >
              {t.hero.subtitle}
            </MotionFadeItem>
          </div>

          {/* Hero visual column — avatar + terminal */}
          <MotionFadeItem className="hero-visual-column flex flex-col gap-6 self-start lg:gap-8 xl:pt-[clamp(0rem,1.5vh,1rem)]">
            <PortfolioAvatar />
            <TerminalWidget />
          </MotionFadeItem>
        </MotionHeroStagger>
      </div>
    </section>
  );
}
