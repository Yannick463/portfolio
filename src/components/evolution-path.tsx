"use client";

import { useLanguage } from "@/components/language-provider";
import { MotionFadeItem } from "@/components/motion/motion-in-view";
import { MotionStaggerInView } from "@/components/motion/motion-stagger";
import { CvHoverShell } from "@/components/ui/cv-hover-shell";
import { SectionHeading } from "@/components/ui/section-heading";

const timelineCardHover =
  "motion-safe:hover:-translate-y-1 hover:border-accent-blue/60 hover:shadow-[0_0_28px_rgba(31,139,255,0.18),0_0_14px_rgba(255,59,59,0.08)]";

export function EvolutionPath() {
  const { t } = useLanguage();

  return (
    <section id="evolution-path" className="py-20 md:py-28">
      <div className="section-container with-left-rail-space">
        <SectionHeading
          title={t.evolution.title}
          subtitle={t.evolution.subtitle}
        />

        <MotionStaggerInView className="relative mt-12">
          <div
            className="absolute bottom-[1.125rem] left-4 top-[1.125rem] w-px bg-accent-blue/30 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-6 md:gap-10">
            {t.evolution.items.map((stage, index) => {
              const isLeft = index % 2 === 0;

              return (
                <MotionFadeItem
                  key={stage.stage}
                  as="article"
                  className="group relative md:grid md:grid-cols-2 md:items-center"
                >
                  <div
                    className="absolute left-4 top-1/2 z-10 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent-blue/70 bg-bg-primary shadow-[0_0_8px_rgba(31,139,255,0.2)] transition-all duration-300 ease-out group-hover:border-accent-blue group-hover:bg-accent-blue group-hover:shadow-[0_0_14px_rgba(31,139,255,0.35)] md:left-1/2"
                    aria-hidden="true"
                  />

                  {isLeft ? (
                    <>
                      <div className="md:pr-10">
                        <CvHoverShell cvLine="top" className={timelineCardHover}>
                          <StageContent
                            stage={stage}
                            stageLabel={t.evolution.stageLabel}
                          />
                        </CvHoverShell>
                      </div>
                      <div className="hidden md:block" aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" aria-hidden="true" />
                      <div className="md:pl-10">
                        <CvHoverShell cvLine="top" className={timelineCardHover}>
                          <StageContent
                            stage={stage}
                            stageLabel={t.evolution.stageLabel}
                          />
                        </CvHoverShell>
                      </div>
                    </>
                  )}
                </MotionFadeItem>
              );
            })}
          </div>
        </MotionStaggerInView>
      </div>
    </section>
  );
}

function StageContent({
  stage,
  stageLabel,
}: {
  stage: { stage: string; title: string; items: string[] };
  stageLabel: string;
}) {
  return (
    <div className="p-5">
      <div className="mb-2 flex items-center gap-3">
        <span className="font-mono text-xs text-accent-orange">
          {stageLabel} {stage.stage}
        </span>
        <span className="h-px flex-1 bg-border-subtle" aria-hidden="true" />
      </div>
      <h3 className="font-display text-lg font-semibold text-text-primary">
        {stage.title}
      </h3>
      <ul className="mt-3 space-y-1">
        {stage.items.map((item) => (
          <li key={item} className="text-sm text-text-secondary">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
