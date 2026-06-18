"use client";

import { ExternalLink } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import type { Translations } from "@/lib/i18n";
import {
  CompactList,
  MissionExpandableCard,
} from "@/components/mission-expandable-card";

type OficinaContent = Translations["missions"]["items"]["oficina-digital"];

type OficinaDigitalMissionCardProps = {
  title: string;
  content: OficinaContent;
  statusLabel: string;
  viewProjectLabel: string;
  viewProjectAria: string;
  showDetailsLabel: string;
  hideDetailsLabel: string;
  projectLink: string;
  cvLine?: "top" | "bottom";
};

export function OficinaDigitalMissionCard({
  title,
  content,
  statusLabel,
  viewProjectLabel,
  viewProjectAria,
  showDetailsLabel,
  hideDetailsLabel,
  projectLink,
  cvLine = "top",
}: OficinaDigitalMissionCardProps) {
  const flip = content.flip;

  if (!flip?.featuresTitle || !flip.featuresItems) {
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
      actions={
        <ButtonLink
          href={projectLink}
          variant="primary"
          external
          ariaLabel={viewProjectAria}
        >
          <ExternalLink size={14} />
          {viewProjectLabel}
        </ButtonLink>
      }
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
                {flip.featuresTitle}
              </p>
              <CompactList items={flip.featuresItems} />
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
