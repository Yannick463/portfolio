"use client";

import type { ReactNode } from "react";

type ContactLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  ariaLabel?: string;
};

export function ContactLink({
  href,
  children,
  external = false,
  ariaLabel,
}: ContactLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className="group relative inline-flex min-h-10 items-center justify-center overflow-hidden rounded-lg border border-border-subtle bg-bg-secondary/60 px-4 py-2 text-sm font-medium text-text-secondary backdrop-blur-sm transition-all duration-300 hover:border-[#1F8BFF]/70 hover:text-text-primary hover:shadow-[0_0_20px_rgba(31,139,255,0.18),0_0_16px_rgba(255,59,59,0.08)] motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F8BFF]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
    >
      <span
        className="cv-gradient-bar pointer-events-none absolute inset-x-3 top-0 z-20 h-[2px] origin-left scale-x-0 opacity-0 transition-all duration-300 ease-out group-hover:scale-x-100 group-hover:opacity-100 group-focus-visible:scale-x-100 group-focus-visible:opacity-100"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(31,139,255,0.14),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,59,59,0.10),transparent_36%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        aria-hidden="true"
      />
      <span className="relative z-10 inline-flex items-center gap-2 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-text-secondary [&_svg]:transition-colors group-hover:[&_svg]:text-text-primary">
        {children}
      </span>
    </a>
  );
}
