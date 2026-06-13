"use client";

import { FileCode } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { GlowCard } from "@/components/ui/glow-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { labStatusStyles } from "@/lib/i18n";

export function LabNotes() {
  const { t } = useLanguage();

  return (
    <section id="lab-notes" className="py-20 md:py-28">
      <div className="section-container with-left-rail-space">
        <SectionHeading
          title={t.labNotes.title}
          subtitle={t.labNotes.subtitle}
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {t.labNotes.items.map((note, index) => (
            <GlowCard
              key={index}
              intensity="subtle"
              cvLine={index % 2 === 0 ? "top" : "bottom"}
            >
              <div className="flex items-start gap-3">
                <div className="rounded-lg border border-border-subtle bg-bg-primary/60 p-2">
                  <FileCode size={16} className="text-accent-green" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-base font-semibold leading-snug text-text-primary">
                    {note.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-text-secondary">
                    <span className="rounded border border-border-subtle px-2 py-0.5 font-mono">
                      {note.category}
                    </span>
                    <span
                      className={`rounded border border-border-subtle/60 px-2 py-0.5 font-mono uppercase tracking-wider ${labStatusStyles[note.statusKey]}`}
                    >
                      {t.labNotes.status[note.statusKey]}
                    </span>
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
