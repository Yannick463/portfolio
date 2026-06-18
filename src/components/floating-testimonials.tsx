"use client";

/**
 * Replace these placeholder comments with real testimonials when available.
 * Do not present fake quotes as verified client testimonials.
 */

import { useSyncExternalStore } from "react";
import { useLanguage } from "@/components/language-provider";

const indentClasses = ["ml-0", "ml-5", "ml-2", "ml-8", "ml-0", "ml-6"] as const;

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function FloatingTestimonials() {
  const isClient = useIsClient();
  const { t } = useLanguage();
  const items = t.floatingTestimonials.items;
  const loopItems = [...items, ...items];

  if (!isClient) {
    return null;
  }

  return (
    <div
      className="pointer-events-auto fixed bottom-[88px] left-6 top-[88px] z-20 hidden w-[250px] xl:block 2xl:w-[260px]"
      aria-hidden="true"
      translate="no"
    >
      <div className="floating-comments-rail relative h-full overflow-hidden">
        <div className="floating-comments-track flex flex-col items-start gap-3 px-2">
          {loopItems.map((item, index) => (
            <div
              key={`${item.initials}-${index}`}
              className={`floating-comment-item group/comment relative inline-flex max-w-[220px] items-center gap-2 rounded-full bg-black/25 px-3 py-1.5 text-[12px] text-text-secondary backdrop-blur-[2px] ${indentClasses[index % indentClasses.length]}`}
            >
              <span
                className="floating-comment-accent cv-gradient-bar pointer-events-none absolute inset-x-2 top-0 h-px opacity-0"
                aria-hidden="true"
              />
              <span className="floating-comment-initials flex h-7 min-w-7 shrink-0 items-center justify-center rounded-full border border-accent-blue/25 bg-accent-blue/15 px-1 text-[9px] font-bold tracking-tight text-accent-blue">
                {item.initials}
              </span>
              <span className="floating-comment-text relative z-[1] leading-snug text-[#CBD5E1]/85">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
