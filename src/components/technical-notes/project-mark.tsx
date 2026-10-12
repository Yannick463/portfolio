import Image from "next/image";
import { Network } from "lucide-react";
import { publicPath } from "@/lib/public-path";
import { noteIdentity, type TechnicalNoteSlug } from "@/lib/technical-notes";

type ProjectMarkProps = {
  slug: TechnicalNoteSlug;
  size: "card" | "marker";
  alt?: string;
};

export function ProjectMark({ slug, size, alt = "" }: ProjectMarkProps) {
  const identity = noteIdentity[slug];

  if (identity.allowBrandMedia) {
    const { compact } = identity.visual;
    const unit = "var(--brand-compact, 1)";

    return (
      <span
        data-brand-mark={size}
        className="inline-flex shrink-0 items-center justify-center bg-transparent motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:-translate-y-px"
        style={{
          maxWidth: `calc(${compact.maxWidth}px * ${unit})`,
          maxHeight: `calc(${compact.maxHeight}px * ${unit})`,
        }}
      >
        <Image
          src={publicPath(identity.logo.src)}
          alt={alt}
          width={identity.logo.width}
          height={identity.logo.height}
          className="h-auto w-auto object-contain opacity-100"
          style={{
            width: "auto",
            height: "auto",
            maxWidth: `calc(${compact.maxWidth}px * ${unit})`,
            maxHeight: `calc(${compact.maxHeight}px * ${unit})`,
          }}
        />
      </span>
    );
  }

  return (
    <Network
      size={16}
      aria-hidden="true"
      className="shrink-0 text-accent-blue motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:-translate-y-px"
    />
  );
}
