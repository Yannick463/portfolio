import type { ReactNode } from "react";

type CvHoverShellProps = {
  children: ReactNode;
  className?: string;
  cvLine?: "top" | "bottom";
  intensity?: "default" | "subtle";
};

export function CvHoverShell({
  children,
  className = "",
  cvLine = "top",
  intensity = "default",
}: CvHoverShellProps) {
  const lineClass =
    cvLine === "bottom"
      ? "bottom-0 origin-right"
      : "top-0 origin-left";

  const hoverShadow =
    intensity === "subtle"
      ? "hover:shadow-[0_0_18px_rgba(31,139,255,0.14),0_0_14px_rgba(255,59,59,0.07)] hover:border-[#1F8BFF]/55"
      : "hover:shadow-[0_0_28px_rgba(31,139,255,0.22),0_0_22px_rgba(255,59,59,0.12)] hover:border-[#1F8BFF]/75";

  const hoverLift = "motion-safe:hover:-translate-y-0.5";

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-border-subtle bg-bg-secondary/60 backdrop-blur-sm transition-all duration-300 ${hoverShadow} ${hoverLift} ${className}`}
    >
      <span
        className={`cv-gradient-bar pointer-events-none absolute left-4 right-4 ${lineClass} z-20 h-[2px] scale-x-0 opacity-0 transition-all duration-300 ease-out group-hover:scale-x-100 group-hover:opacity-100`}
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(31,139,255,0.16),transparent_42%),radial-gradient(circle_at_top_right,rgba(244,247,251,0.06),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(255,59,59,0.12),transparent_42%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
