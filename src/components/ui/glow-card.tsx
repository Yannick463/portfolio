"use client";

import { type ReactNode } from "react";
import { MotionInView } from "@/components/motion/motion-in-view";
import { CvHoverShell } from "@/components/ui/cv-hover-shell";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
  cvLine?: "top" | "bottom";
  intensity?: "default" | "subtle";
};

export function GlowCard({
  children,
  className = "",
  wrapperClassName = "",
  cvLine = "top",
  intensity = "default",
}: GlowCardProps) {
  return (
    <MotionInView className={`h-full ${wrapperClassName}`.trim()}>
      <CvHoverShell cvLine={cvLine} intensity={intensity} className="h-full">
        <div className={`p-5 md:p-6 ${className}`.trim()}>{children}</div>
      </CvHoverShell>
    </MotionInView>
  );
}
