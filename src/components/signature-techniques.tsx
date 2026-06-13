"use client";

import { useLanguage } from "@/components/language-provider";
import { GlowCard } from "@/components/ui/glow-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function SignatureTechniques() {
  const { t } = useLanguage();

  return (
    <section id="signature-techniques" className="py-20 md:py-28">
      <div className="section-container with-left-rail-space">
        <SectionHeading
          title={t.techniques.title}
          subtitle={t.techniques.subtitle}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.techniques.items.map((technique, index) => (
            <GlowCard
              key={index}
              cvLine={index % 2 === 0 ? "top" : "bottom"}
            >
              <h3 className="font-display text-base font-semibold text-text-primary md:text-lg">
                {technique.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {technique.description}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
