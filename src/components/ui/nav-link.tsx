"use client";

import type { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

export function NavLink({ href, children, onClick, className = "" }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative inline-flex items-center py-1.5 text-sm text-text-secondary transition-colors duration-300 hover:text-text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F8BFF]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="cv-gradient-bar pointer-events-none absolute -bottom-0.5 left-0 z-20 h-[2px] w-full origin-left scale-x-0 opacity-0 transition-all duration-300 ease-out group-hover:scale-x-100 group-hover:opacity-100 group-focus-visible:scale-x-100 group-focus-visible:opacity-100"
        aria-hidden="true"
      />
    </a>
  );
}
