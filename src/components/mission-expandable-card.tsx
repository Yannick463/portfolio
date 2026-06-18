"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useId, useState, type ReactNode } from "react";
import { MotionInView } from "@/components/motion/motion-in-view";
import { CvHoverShell } from "@/components/ui/cv-hover-shell";
import { statusStyles } from "@/lib/i18n";

type MissionExpandableCardProps = {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  statusLabel: string;
  statusKey: keyof typeof statusStyles;
  showDetailsLabel: string;
  hideDetailsLabel: string;
  detailsContent: ReactNode;
  actions?: ReactNode;
  cvLine?: "top" | "bottom";
};

export function CompactList({ items }: { items: string[] }) {
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

export function MissionExpandableCard({
  title,
  subtitle,
  description,
  stack,
  statusLabel,
  statusKey,
  showDetailsLabel,
  hideDetailsLabel,
  detailsContent,
  actions,
  cvLine = "top",
}: MissionExpandableCardProps) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = useId();

  useEffect(() => {
    if (!expanded) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExpanded(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [expanded]);

  return (
    <MotionInView className="w-full self-start">
      <CvHoverShell
        cvLine={cvLine}
        intensity="subtle"
        className="mission-card-shell flex min-h-84 w-full flex-col p-5"
      >
        <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-text-primary">
              {title}
            </h3>
            <p className="mt-1 text-sm text-accent-blue">{subtitle}</p>
          </div>
          <span
            className={`rounded-full border px-3 py-1 text-xs font-medium ${statusStyles[statusKey]}`}
          >
            {statusLabel}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-text-secondary">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border-subtle bg-bg-primary/50 px-2 py-0.5 font-mono text-[11px] text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div
          id={detailsId}
          role="region"
          aria-label={showDetailsLabel}
          {...(expanded
            ? { "aria-hidden": "false" as const }
            : { "aria-hidden": "true" as const })}
          className={`mission-card-details ${expanded ? "mission-card-details--expanded" : ""}`}
        >
          <div className="mission-card-details-inner">
            <div className="mt-4 border-t border-border-subtle/80 pt-4">
              {detailsContent}
            </div>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-4">
          {actions}
          <button
            type="button"
            className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-primary/40 px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-[#1F8BFF]/55 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F8BFF]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
            {...(expanded
              ? { "aria-expanded": "true" as const }
              : { "aria-expanded": "false" as const })}
            aria-controls={detailsId}
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? hideDetailsLabel : showDetailsLabel}
            <ChevronDown
              size={14}
              aria-hidden="true"
              className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </CvHoverShell>
    </MotionInView>
  );
}
