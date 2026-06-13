"use client";

import {
  Brain,
  Cpu,
  Database,
  Layout,
  Rocket,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { GlowCard } from "@/components/ui/glow-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { moduleIcons, moduleOrder } from "@/lib/i18n";

const iconMap: Record<string, LucideIcon> = {
  layout: Layout,
  cpu: Cpu,
  database: Database,
  brain: Brain,
  shield: Shield,
  rocket: Rocket,
};

export function SystemModules() {
  const { t } = useLanguage();

  return (
    <section id="system-modules" className="py-20 md:py-28">
      <div className="section-container with-left-rail-space">
        <SectionHeading
          title={t.modules.title}
          subtitle={t.modules.subtitle}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moduleOrder.map((moduleId, index) => {
            const layer = t.modules.items[moduleId];
            const Icon = iconMap[moduleIcons[moduleId]];

            return (
              <GlowCard
                key={moduleId}
                cvLine={index % 2 === 0 ? "top" : "bottom"}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg border border-border-subtle bg-bg-primary/60 p-2">
                    <Icon size={18} className="text-[#1F8BFF]" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-text-primary md:text-lg">
                    {layer.title}
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {layer.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <span
                        className="h-1 w-1 rounded-full bg-[#1F8BFF]/80"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
