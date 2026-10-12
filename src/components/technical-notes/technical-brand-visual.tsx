"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { publicPath } from "@/lib/public-path";
import { noteIdentity, type BrandNoteSlug, type TechnicalNoteSlug } from "@/lib/technical-notes";

type TechnicalBrandVisualProps = {
  slug: TechnicalNoteSlug;
};

export function TechnicalBrandVisual({ slug }: TechnicalBrandVisualProps) {
  const { t } = useLanguage();
  const identity = noteIdentity[slug];

  if (!identity.allowBrandMedia) {
    return null;
  }

  const brand = slug as BrandNoteSlug;
  const { media } = identity.visual;

  return (
    <Image
      src={publicPath(identity.logo.src)}
      alt={t.labNotes.logoAlt[brand]}
      width={identity.logo.width}
      height={identity.logo.height}
      sizes="(min-width: 1024px) 430px, 300px"
      className="pointer-events-none h-auto w-auto bg-transparent object-contain opacity-100"
      style={{
        width: media.width,
        height: "auto",
        maxHeight: media.maxHeight,
        ["--brand-mobile" as string]: `${media.mobileMaxWidth}px`,
      }}
    />
  );
}
