"use client";

import { MotionInView } from "@/components/motion/motion-in-view";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <MotionInView
      viewportMargin="-80px"
      className={align === "center" ? "text-center" : "text-left"}
    >
      <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`cv-gradient-bar mt-4 h-[2px] w-20 ${
          align === "center" ? "mx-auto" : ""
        }`}
        aria-hidden="true"
      />
    </MotionInView>
  );
}
