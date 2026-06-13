"use client";

import { useLanguage } from "@/components/language-provider";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-40 border-t border-border-subtle bg-bg-primary py-8">
      <div className="section-container text-center">
        <p className="text-xs text-text-secondary/80 md:text-sm">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
