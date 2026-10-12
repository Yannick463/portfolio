"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { MotionFadeItem } from "@/components/motion/motion-in-view";
import { MotionStaggerInView } from "@/components/motion/motion-stagger";
import { ProjectMark } from "@/components/technical-notes/project-mark";
import { CvHoverShell } from "@/components/ui/cv-hover-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { noteIdentity, type BrandNoteSlug } from "@/lib/technical-notes";

export function LabNotes() {
  const { t } = useLanguage();

  return (
    <section id="lab-notes" className="scroll-mt-24 py-20 md:py-28">
      <div className="section-container">
        <SectionHeading title={t.labNotes.title} subtitle={t.labNotes.subtitle} />

        <MotionStaggerInView className="mt-12 grid gap-6 lg:grid-cols-2">
          {t.labNotes.items.map((note, index) => {
            return (
              <MotionFadeItem key={note.slug} className="h-full">
                <Link
                  href={`/notas/${note.slug}`}
                  className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
                >
                  <CvHoverShell
                    cvLine={index % 2 === 0 ? "top" : "bottom"}
                    intensity="subtle"
                    stretchContent
                    className="flex h-full flex-col p-5"
                  >
                    <p className="inline-flex items-center gap-3 text-sm text-accent-blue">
                      <ProjectMark
                        slug={note.slug}
                        size="card"
                        alt={
                          noteIdentity[note.slug].allowBrandMedia
                            ? t.labNotes.logoAlt[note.slug as BrandNoteSlug]
                            : ""
                        }
                      />
                      {noteIdentity[note.slug].displayName}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-text-primary">
                      {note.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {note.category}
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="inline-flex min-h-10 w-fit items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-primary/40 px-3 py-2 text-sm font-medium text-text-secondary transition-colors duration-300 group-hover:border-accent-blue/55 group-hover:text-text-primary">
                        {t.labNotes.readNote}
                        <ChevronRight
                          size={14}
                          aria-hidden="true"
                          className="transition-transform duration-300 motion-safe:group-hover:translate-x-[3px]"
                        />
                      </span>
                    </div>
                  </CvHoverShell>
                </Link>
              </MotionFadeItem>
            );
          })}
        </MotionStaggerInView>
      </div>
    </section>
  );
}
