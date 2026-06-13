"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { useMounted } from "@/lib/use-mounted";

export function TerminalWidget() {
  const { locale, t } = useLanguage();
  const mounted = useMounted();
  const lines = t.terminal.lines;
  const [visibleLines, setVisibleLines] = useState(1);
  const [showCursor, setShowCursor] = useState(true);
  const initialTypingComplete = useRef(false);
  const skipInitialMount = useRef(true);

  useEffect(() => {
    if (!mounted) return;

    if (initialTypingComplete.current) {
      setVisibleLines(lines.length);
      return;
    }

    if (visibleLines >= lines.length) {
      initialTypingComplete.current = true;
      return;
    }

    const timer = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
    }, 600);

    return () => clearTimeout(timer);
  }, [mounted, visibleLines, lines.length]);

  useEffect(() => {
    if (!mounted) return;

    if (skipInitialMount.current) {
      skipInitialMount.current = false;
      return;
    }

    initialTypingComplete.current = true;
    setVisibleLines(lines.length);
  }, [locale, lines.length, mounted]);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <div
      className="rounded-lg border border-border-subtle bg-bg-primary/90 p-4 font-mono text-xs leading-relaxed backdrop-blur-md md:text-sm"
      aria-label={t.terminal.ariaLabel}
      role="log"
    >
      <div className="mb-3 flex items-center gap-2 border-b border-border-subtle pb-2">
        <span className="h-2 w-2 rounded-full bg-[#FF3B3B]/90" />
        <span className="h-2 w-2 rounded-full bg-[#F4F7FB]/85" />
        <span className="h-2 w-2 rounded-full bg-[#1F8BFF]/90" />
        <span className="ml-2 text-text-secondary">{t.terminal.title}</span>
      </div>
      <div className="min-h-[6.75rem] space-y-1 md:min-h-[7.5rem]">
        {lines.slice(0, visibleLines).map((line, index) => (
          <p key={index} className="text-accent-green/90">
            {line}
          </p>
        ))}
        <p className="text-accent-green/90">
          <span className="text-accent-blue">&gt;</span>{" "}
          <span
            className={
              showCursor
                ? "cursor-blink inline-block w-2 bg-accent-green/80"
                : "inline-block w-2"
            }
            aria-hidden="true"
          >
            &nbsp;
          </span>
        </p>
      </div>
    </div>
  );
}
