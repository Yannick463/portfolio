"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import {
  getLocaleShort,
  localeOptions,
  type Locale,
} from "@/lib/i18n";

type LanguageSwitcherProps = {
  className?: string;
  onSelect?: () => void;
  menuId?: string;
};

export function LanguageSwitcher({
  className = "",
  onSelect,
  menuId: menuIdProp,
}: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const reactId = useId();
  const menuId = menuIdProp ?? `language-menu${reactId.replace(/:/g, "")}`;
  const buttonId = `${menuId}-trigger`;

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const handleSelect = (code: Locale) => {
    setLocale(code);
    setOpen(false);
    onSelect?.();
  };

  const ariaExpandedProps = open
    ? ({ "aria-expanded": "true" } as const)
    : ({ "aria-expanded": "false" } as const);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="lang-trigger inline-flex items-center px-0.5 py-1 font-mono text-xs uppercase tracking-wider text-text-secondary transition-colors duration-200 hover:text-text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/35 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
        aria-label={t.common.selectLanguage}
        aria-haspopup="menu"
        {...ariaExpandedProps}
        aria-controls={open ? menuId : undefined}
        id={buttonId}
      >
        {getLocaleShort(locale)}
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-labelledby={buttonId}
          aria-label={t.common.languageMenu}
          className="absolute right-0 top-full z-50 mt-2 min-w-44 overflow-hidden rounded-lg border border-border-subtle bg-bg-primary/95 py-1 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md"
        >
          {localeOptions.map((option) => {
            const isActive = option.code === locale;
            return (
              <button
                key={option.code}
                type="button"
                role="menuitem"
                aria-current={isActive ? "true" : undefined}
                onClick={() => handleSelect(option.code)}
                className={`flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm transition-colors focus-visible:bg-bg-secondary/80 focus-visible:outline-none ${
                  isActive
                    ? "bg-accent-blue/10 text-text-primary"
                    : "text-text-secondary hover:bg-bg-secondary/60 hover:text-text-primary"
                }`}
              >
                <span
                  className={`min-w-7 font-mono text-xs uppercase tracking-wider ${
                    isActive ? "text-accent-blue" : "text-text-secondary/70"
                  }`}
                >
                  {option.short}
                </span>
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
