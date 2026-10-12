"use client";

import { useLanguage } from "@/components/language-provider";
import { MotionInView } from "@/components/motion/motion-in-view";
import { SectionHeading } from "@/components/ui/section-heading";

export function OperatingMode() {
  const { t } = useLanguage();
  const steps = t.operatingMode.steps.filter(
    (step) => step.title.trim() && step.description.trim(),
  );
  const intro = [t.operatingMode.textBefore, t.operatingMode.textAfter]
    .join("")
    .trim();

  return (
    <section id="operating-mode" className="relative z-0 pb-16 pt-12 md:pb-20">
      <div className="hero-shell">
        <SectionHeading title={t.operatingMode.title} />

        {intro ? (
          <MotionInView className="mt-6 max-w-3xl">
            <p className="text-base leading-relaxed text-text-secondary md:text-lg">
              {t.operatingMode.textBefore}
              {t.operatingMode.highlight ? (
                <span className="text-accent-blue">{t.operatingMode.highlight}</span>
              ) : null}
              {t.operatingMode.textAfter}
            </p>
          </MotionInView>
        ) : null}

        {steps.length > 0 ? (
          <ol className="mt-8 grid list-none gap-4 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="h-full">
                <article className="flex h-full flex-col rounded-xl border border-border-subtle bg-bg-secondary/75 px-5 py-5 transition duration-300 hover:border-accent-blue/40 hover:bg-bg-secondary hover:shadow-[0_12px_28px_rgba(0,0,0,0.28)] motion-safe:hover:-translate-y-[3px] lg:min-h-[196px]">
                  <p className="font-mono text-xs tracking-[0.16em] text-accent-orange">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        ) : null}
      </div>
    </section>
  );
}
