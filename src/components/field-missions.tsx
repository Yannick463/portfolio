"use client";

import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { GlowCard } from "@/components/ui/glow-card";
import { LabMissionCard } from "@/components/lab-mission-card";
import { OficinaDigitalMissionCard } from "@/components/oficina-digital-mission-card";
import { VektraMissionCard } from "@/components/vektra-mission-card";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { missionMeta, statusStyles } from "@/lib/i18n";

export function FieldMissions() {
  const { t } = useLanguage();

  return (
    <section id="field-missions" className="py-20 md:py-28">
      <div className="section-container with-left-rail-space">
        <SectionHeading
          title={t.missions.title}
          subtitle={t.missions.subtitle}
        />

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
          {missionMeta.map((mission, index) => {
            const content = t.missions.items[mission.id];
            const statusLabel = t.missions.status[content.statusKey];

            if (mission.id === "oficina-digital" && content.flip?.featuresTitle) {
              return (
                <OficinaDigitalMissionCard
                  key={mission.id}
                  title={mission.title}
                  content={content}
                  statusLabel={statusLabel}
                  viewProjectLabel={t.missions.viewProject}
                  viewProjectAria={`${t.common.viewProjectAria}: ${mission.title}`}
                  showDetailsLabel={t.missions.showDetails}
                  hideDetailsLabel={t.missions.hideDetails}
                  projectLink={mission.link ?? ""}
                  cvLine={index % 2 === 0 ? "top" : "bottom"}
                />
              );
            }

            if (mission.id === "vektra" && content.flip) {
              return (
                <VektraMissionCard
                  key={mission.id}
                  title={mission.title}
                  content={content}
                  statusLabel={statusLabel}
                  showDetailsLabel={t.missions.showDetails}
                  hideDetailsLabel={t.missions.hideDetails}
                  cvLine={index % 2 === 0 ? "top" : "bottom"}
                />
              );
            }

            if (
              (mission.id === "ai-automation-lab" || mission.id === "security-lab") &&
              content.flip
            ) {
              return (
                <LabMissionCard
                  key={mission.id}
                  title={mission.title}
                  content={content}
                  statusLabel={statusLabel}
                  showDetailsLabel={t.missions.showDetails}
                  hideDetailsLabel={t.missions.hideDetails}
                  cvLine={index % 2 === 0 ? "top" : "bottom"}
                />
              );
            }

            return (
              <GlowCard
                key={mission.id}
                cvLine={index % 2 === 0 ? "top" : "bottom"}
                className="flex flex-col"
              >
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-text-primary">
                      {mission.title}
                    </h3>
                    <p className="mt-1 text-sm text-accent-blue">
                      {content.subtitle}
                    </p>
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

                {content.problem && (
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <span className="font-mono text-xs uppercase tracking-wider text-accent-orange">
                        {t.missions.problemLabel}
                      </span>
                      <span className="mt-1 block text-text-secondary">
                        {content.problem}
                      </span>
                    </p>
                    {content.solution && (
                      <p>
                        <span className="font-mono text-xs uppercase tracking-wider text-accent-green">
                          {t.missions.solutionLabel}
                        </span>
                        <span className="mt-1 block text-text-secondary">
                          {content.solution}
                        </span>
                      </p>
                    )}
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {content.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-border-subtle bg-bg-primary/50 px-2 py-0.5 font-mono text-[11px] text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {mission.link ? (
                  <div className="mt-6 flex flex-wrap gap-3">
                    <ButtonLink
                      href={mission.link}
                      variant="primary"
                      external
                      ariaLabel={`${t.common.viewProjectAria}: ${mission.title}`}
                    >
                      <ExternalLink size={14} />
                      {t.missions.viewProject}
                    </ButtonLink>
                  </div>
                ) : null}
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
