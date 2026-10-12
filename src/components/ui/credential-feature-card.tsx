"use client";

import {
  CalendarDays,
  Code2,
  GraduationCap,
  Medal,
  type LucideIcon,
} from "lucide-react";
import type { CredentialAsset, CredentialHighlightId } from "@/lib/credentials";

export type CredentialFeatureCardCopy = {
  metaType: string;
  metaYear: string;
  title: string;
  description: string;
  highlight: string;
  imageAlt: string;
};

type CredentialFeatureCardProps = {
  credentialId: CredentialHighlightId;
  copy: CredentialFeatureCardCopy;
  asset: CredentialAsset;
};

const typeIcons: Record<CredentialHighlightId, LucideIcon> = {
  reinventa: Code2,
  payaig: GraduationCap,
};

function CredentialMeta({
  credentialId,
  metaType,
  metaYear,
}: {
  credentialId: CredentialHighlightId;
  metaType: string;
  metaYear: string;
}) {
  const TypeIcon = typeIcons[credentialId];

  return (
    <div className="credential-meta flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-[1.125rem]">
      <span className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent-blue sm:text-xs">
        <TypeIcon size={16} strokeWidth={2} className="shrink-0 opacity-90" aria-hidden="true" />
        {metaType}
      </span>
      <span className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent-blue sm:text-xs">
        <CalendarDays size={16} strokeWidth={2} className="shrink-0 opacity-90" aria-hidden="true" />
        {metaYear}
      </span>
    </div>
  );
}

export function CredentialFeatureCard({
  credentialId,
  copy,
  asset,
}: CredentialFeatureCardProps) {
  const isAchievement = asset.cardPresentation === "achievement";

  return (
    <article className="group flex h-full cursor-default flex-col overflow-hidden rounded-[22px] border border-border-subtle bg-bg-secondary/60 backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-0.5 hover:border-accent-blue/55 hover:shadow-[0_0_24px_rgba(31,139,255,0.14),0_0_12px_rgba(255,59,59,0.06)]">
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border-subtle bg-bg-primary/70">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset.imageSrc}
          alt={copy.imageAlt}
          style={
            asset.imageObjectPosition
              ? { objectPosition: asset.imageObjectPosition }
              : undefined
          }
          className={`h-full w-full transition-transform duration-[450ms] ease-out motion-safe:group-hover:scale-[1.02] ${
            asset.mediaFit === "contain"
              ? "object-contain object-center p-4 sm:p-5"
              : "object-cover object-center"
          }`}
        />
        {isAchievement ? (
          <>
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/25 to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-blue/[0.08] via-transparent to-accent-orange/[0.06]"
              aria-hidden="true"
            />
            <div className="absolute bottom-3 left-3 z-10 sm:bottom-4 sm:left-4">
              <span
                className="inline-flex w-fit shrink-0 items-center gap-2 whitespace-nowrap rounded-xl border border-accent-orange/35 bg-bg-primary/88 px-3 py-2 shadow-[0_10px_28px_rgba(0,0,0,0.38)] backdrop-blur-md"
                aria-hidden="true"
              >
                <Medal
                  size={16}
                  strokeWidth={2}
                  className="shrink-0 text-accent-orange"
                  aria-hidden="true"
                />
                <span className="font-display text-sm font-semibold leading-none tracking-tight text-text-primary sm:text-[0.9375rem]">
                  {copy.highlight}
                </span>
              </span>
            </div>
          </>
        ) : null}
      </div>

      <div className="flex flex-col p-6 pb-6 sm:p-7 sm:pb-7 md:p-[1.65rem] md:pb-[1.65rem]">
        <CredentialMeta
          credentialId={credentialId}
          metaType={copy.metaType}
          metaYear={copy.metaYear}
        />
        <h3 className="mt-2.5 font-display text-[1.375rem] font-semibold leading-snug text-text-primary sm:mt-3 sm:text-[1.625rem] sm:leading-tight">
          {copy.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-[0.9375rem]">
          {copy.description}
        </p>
      </div>
    </article>
  );
}
