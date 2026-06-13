"use client";

import { useLanguage } from "@/components/language-provider";
import { MotionInView } from "@/components/motion/motion-in-view";
import { SectionHeading } from "@/components/ui/section-heading";

export function OperatingMode() {
  const { t } = useLanguage();

  return (
    <section id="operating-mode" className="py-20 md:py-28">
      <div className="section-container with-left-rail-space">
        <SectionHeading title={t.operatingMode.title} />

        <MotionInView className="mt-10 max-w-3xl">
          <p className="text-base leading-relaxed text-text-secondary md:text-lg">
            {t.operatingMode.textBefore}
            {t.operatingMode.highlight ? (
              <span className="text-accent-blue">{t.operatingMode.highlight}</span>
            ) : null}
            {t.operatingMode.textAfter}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {t.operatingMode.highlights.map((word, index) => (
              <span
                key={index}
                className="rounded-full border border-border-subtle bg-bg-secondary/60 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-accent-green md:text-sm"
              >
                {word}
              </span>
            ))}
          </div>
        </MotionInView>
      </div>
    </section>
  );
}
