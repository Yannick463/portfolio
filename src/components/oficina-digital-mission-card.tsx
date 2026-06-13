"use client";

import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { MotionInView } from "@/components/motion/motion-in-view";
import { ButtonLink } from "@/components/ui/button-link";
import { useMotionSafe } from "@/lib/use-motion-safe";
import type { Translations } from "@/lib/i18n";
import { statusStyles } from "@/lib/i18n";

type OficinaContent = Translations["missions"]["items"]["oficina-digital"];

type OficinaDigitalMissionCardProps = {
  title: string;
  content: OficinaContent;
  statusLabel: string;
  viewProjectLabel: string;
  viewProjectAria: string;
  projectLink: string;
  cvLine?: "top" | "bottom";
};

function CompactList({ items }: { items: string[] }) {
  return (
    <ul className="mt-1.5 space-y-0.5">
      {items.map((item, index) => (
        <li key={index} className="flex gap-2 text-sm leading-snug text-text-secondary">
          <span className="text-accent-blue" aria-hidden="true">
            •
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function OficinaDigitalMissionCard({
  title,
  content,
  statusLabel,
  viewProjectLabel,
  viewProjectAria,
  projectLink,
  cvLine = "top",
}: OficinaDigitalMissionCardProps) {
  const { prefersReducedMotion } = useMotionSafe();
  const [flipped, setFlipped] = useState(false);
  const flip = content.flip;

  if (!flip?.featuresTitle || !flip.featuresItems) {
    return null;
  }

  const toggleFlip = () => setFlipped((prev) => !prev);
  const lineClass = cvLine === "bottom" ? "bottom-0 origin-right" : "top-0 origin-left";

  return (
    <MotionInView className="h-full">
      <div className="mission-flip-card-shell group relative h-full overflow-hidden rounded-xl border border-border-subtle bg-bg-secondary/60 transition-all duration-300 hover:border-[#1F8BFF]/55 hover:shadow-[0_0_28px_rgba(31,139,255,0.18),0_0_14px_rgba(255,59,59,0.08)]">
        <span
          className={`cv-gradient-bar pointer-events-none absolute left-4 right-4 ${lineClass} z-20 h-[2px] scale-x-0 opacity-0 transition-all duration-300 ease-out group-hover:scale-x-100 group-hover:opacity-100`}
          aria-hidden="true"
        />

        <div
          className={`mission-flip-card h-full ${flipped ? "mission-flip-card--flipped" : ""} ${prefersReducedMotion ? "mission-flip-card--reduced-motion" : ""}`}
          onClick={() => {
            if (typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches) {
              toggleFlip();
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              if (
                event.target instanceof HTMLElement &&
                event.target.closest("a, button")
              ) {
                return;
              }
              event.preventDefault();
              toggleFlip();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={`${title}. ${flip.tapHint}`}
        >
          <div className="mission-flip-card-inner">
            <div className="mission-flip-card-face mission-flip-card-front flex h-full w-full flex-col p-5">
              <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-semibold text-text-primary">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-accent-blue">{content.subtitle}</p>
                </div>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${statusStyles[content.statusKey]}`}
                >
                  {statusLabel}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-text-secondary">
                {content.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {content.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-border-subtle bg-bg-primary/50 px-2 py-0.5 font-mono text-[11px] text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-auto pt-4 font-mono text-[10px] uppercase tracking-wider text-text-secondary/70 lg:opacity-0 lg:transition-opacity lg:duration-300 lg:group-hover:opacity-100">
                {flip.tapHint}
              </p>

              <div
                className="mt-3 flex flex-wrap gap-3"
                onClick={(event) => event.stopPropagation()}
                onKeyDown={(event) => event.stopPropagation()}
              >
                <ButtonLink
                  href={projectLink}
                  variant="primary"
                  external
                  ariaLabel={viewProjectAria}
                >
                  <ExternalLink size={14} />
                  {viewProjectLabel}
                </ButtonLink>
              </div>
            </div>

            <div className="mission-flip-card-face mission-flip-card-back flex h-full w-full flex-col justify-between gap-4 bg-[#080D16]/95 p-5">
              <div className="relative z-10 w-full">
                <h4 className="font-display text-base font-semibold text-text-primary">
                  {flip.participationTitle}
                </h4>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-accent-orange">
                      {flip.builtTitle}
                    </p>
                    <CompactList items={flip.builtItems} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-accent-orange">
                      {flip.featuresTitle}
                    </p>
                    <CompactList items={flip.featuresItems} />
                  </div>
                </div>
              </div>

              <div className="relative z-10 w-full">
                <p className="font-mono text-[10px] uppercase tracking-wider text-accent-orange">
                  {flip.stackTitle}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-text-secondary">
                  {flip.stackSummary}
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {flip.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded border border-border-subtle/80 bg-bg-primary/40 px-2 py-0.5 font-mono text-[10px] text-text-secondary"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionInView>
  );
}
