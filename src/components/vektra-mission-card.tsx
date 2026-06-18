"use client";

import type { Translations } from "@/lib/i18n";
import {
  CompactList,
  MissionExpandableCard,
} from "@/components/mission-expandable-card";

type VektraContent = Translations["missions"]["items"]["vektra"];

type VektraMissionCardProps = {
  title: string;
  content: VektraContent;
  statusLabel: string;
  showDetailsLabel: string;
  hideDetailsLabel: string;
  cvLine?: "top" | "bottom";
};

export function VektraMissionCard({
  title,
  content,
  statusLabel,
  showDetailsLabel,
  hideDetailsLabel,
  cvLine = "top",
}: VektraMissionCardProps) {
  const flip = content.flip;

  if (!flip) {
    return null;
  }

  return (
    <MissionExpandableCard
      title={title}
      subtitle={content.subtitle}
      description={content.description}
      stack={content.stack}
      statusLabel={statusLabel}
      statusKey={content.statusKey}
      showDetailsLabel={showDetailsLabel}
      hideDetailsLabel={hideDetailsLabel}
      cvLine={cvLine}
      detailsContent={
        <>
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
                {flip.contributedTitle ?? ""}
              </p>
              <CompactList items={flip.contributedItems ?? []} />
            </div>
          </div>

          <div className="mt-4">
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
        </>
      }
    />
  );
}
