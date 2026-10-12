"use client";

import { useEffect } from "react";
import { useLanguage } from "@/components/language-provider";
import { MotionFadeItem, MotionInView } from "@/components/motion/motion-in-view";
import { MotionStaggerInView } from "@/components/motion/motion-stagger";
import { ArchitectureFlow } from "@/components/technical-notes/architecture-flow";
import { DecisionCard } from "@/components/technical-notes/decision-card";
import { ProjectMark } from "@/components/technical-notes/project-mark";
import { TechnicalCallout } from "@/components/technical-notes/technical-callout";
import { TechnicalBrandVisual } from "@/components/technical-notes/technical-brand-visual";
import { CvHoverShell } from "@/components/ui/cv-hover-shell";
import { siteConfig } from "@/lib/i18n";
import { noteIdentity, type BrandNoteSlug, type TechnicalNoteSlug } from "@/lib/technical-notes";

const noteEnter = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const noteStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const groupStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const noteTransition = { duration: 0.34, ease: [0.22, 1, 0.36, 1] as const };

const brandEnter = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

type TechnicalNotePageProps = {
  slug: TechnicalNoteSlug;
};

export function TechnicalNotePage({ slug }: TechnicalNotePageProps) {
  const { t } = useLanguage();
  const note = t.labNotes.items.find((item) => item.slug === slug);
  const identity = noteIdentity[slug];

  useEffect(() => {
    if (!note) return;
    const title = `${note.title} | ${siteConfig.name}`;
    document.title = title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", note.lead);
    }
  }, [note]);

  if (!note) {
    return null;
  }

  return (
    <article className="technical-note-shell">
      <div>
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base font-medium text-text-primary">
          <span className="inline-flex items-center gap-3">
            <ProjectMark
              slug={slug}
              size="marker"
              alt={identity.allowBrandMedia ? t.labNotes.logoAlt[slug as BrandNoteSlug] : ""}
            />
            <span>{identity.displayName}</span>
          </span>
          <span className="font-normal text-text-secondary" aria-hidden="true">
            ·
          </span>
          <span className="font-normal text-text-secondary">{note.category}</span>
        </p>

        <div
          className={
            identity.allowBrandMedia
              ? "note-hero-grid mt-6 grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,1fr)] lg:gap-[clamp(56px,6vw,88px)]"
              : "note-hero-grid mt-6 grid max-w-[820px]"
          }
        >
          <MotionStaggerInView className="min-w-0" variants={noteStagger}>
            <MotionFadeItem
              as="h1"
              variants={noteEnter}
              transition={noteTransition}
              className="technical-note-title font-display font-semibold text-balance text-text-primary"
            >
              {note.title}
            </MotionFadeItem>
            <MotionFadeItem
              as="p"
              variants={noteEnter}
              transition={noteTransition}
              className="technical-note-lead mt-5 text-text-secondary"
            >
              {note.lead}
            </MotionFadeItem>
          </MotionStaggerInView>
          {identity.allowBrandMedia ? (
            <MotionInView
              className="note-brand-visual"
              variants={brandEnter}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <TechnicalBrandVisual slug={slug} />
            </MotionInView>
          ) : null}
        </div>
      </div>

      <div className="technical-note-column mt-16 space-y-16 md:mt-20">
        {note.sections.map((section) => (
          <MotionInView key={section.index} variants={noteEnter} transition={noteTransition}>
            <section aria-labelledby={`${slug}-${section.index}`}>
              <div className="mb-3 h-px w-8 bg-accent-blue/80" aria-hidden="true" />
              <h2
                id={`${slug}-${section.index}`}
                className="font-display text-2xl font-semibold text-text-primary md:text-[1.75rem]"
              >
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="technical-note-body mt-4 max-w-[760px] text-text-secondary">
                  {paragraph}
                </p>
              ))}
              {section.flow && (
                <ArchitectureFlow nodes={section.flow.nodes} caption={section.flow.caption} />
              )}
              {section.groups && (
                <MotionStaggerInView
                  className="mt-5 grid gap-3 sm:grid-cols-2"
                  variants={groupStagger}
                >
                  {section.groups.map((group, groupIndex) => (
                    <MotionFadeItem
                      key={group.title}
                      variants={noteEnter}
                      transition={noteTransition}
                      className="h-full"
                    >
                      <CvHoverShell
                        intensity="subtle"
                        cvLine={groupIndex % 2 === 0 ? "top" : "bottom"}
                        stretchContent
                        className="h-full cursor-default p-4"
                      >
                        <h3 className="text-sm font-semibold text-text-primary">{group.title}</h3>
                        <ul className="mt-2 space-y-1">
                          {group.items.map((item) => (
                            <li key={item} className="text-sm leading-relaxed text-text-secondary">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CvHoverShell>
                    </MotionFadeItem>
                  ))}
                </MotionStaggerInView>
              )}
              {section.phases && <ArchitectureFlow nodes={section.phases} />}
              {section.decision && <DecisionCard text={section.decision} />}
              {section.callout && <TechnicalCallout text={section.callout} />}
              {section.points && (
                <ul className="mt-5 max-w-[760px]">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 border-b border-border-subtle/80 py-3 text-[17px] leading-relaxed text-text-secondary last:border-b-0"
                    >
                      <span
                        className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </MotionInView>
        ))}
      </div>
    </article>
  );
}
