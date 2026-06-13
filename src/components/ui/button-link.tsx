"use client";

import type { PropsWithChildren } from "react";

type ButtonLinkProps = PropsWithChildren<{
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}>;

const variants = {
  primary:
    "border-accent-blue/50 bg-accent-blue/10 text-text-primary hover:bg-accent-blue/20",
  secondary:
    "border-border-subtle bg-bg-secondary/80 text-text-primary hover:border-accent-orange/40",
  ghost:
    "border-transparent bg-transparent text-text-secondary hover:border-border-subtle hover:text-text-primary",
};

export function ButtonLink({
  href,
  children,
  variant = "secondary",
  external = false,
  className = "",
  ariaLabel,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={`btn-glow inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors motion-safe:transition-transform motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98] focus-visible:rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
