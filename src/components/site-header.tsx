"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/components/language-provider";
import { NavLink } from "@/components/ui/nav-link";
import { navHrefs } from "@/lib/i18n";

export function SiteHeader() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const showNoteBack = pathname === "/notas" || pathname.startsWith("/notas/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/92 backdrop-blur-md shadow-[inset_0_-1px_0_0_rgba(29,42,58,0.7)]"
          : "bg-transparent"
      }`}
    >
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-bg-secondary focus:px-3 focus:py-2 focus:outline-none focus:ring-2 focus:ring-accent-blue/40"
      >
        {t.common.homeAria}
      </a>

      <div
        className={`section-container flex h-16 items-center gap-3 md:h-18 ${
          showNoteBack ? "justify-between" : "justify-end"
        }`}
      >
        {showNoteBack ? (
          <Link
            href="/#lab-notes"
            aria-label={t.labNotes.returnLabel}
            title={t.labNotes.returnLabel}
            onClick={closeMobile}
            className="group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-transparent bg-transparent text-text-secondary transition-[color,background-color,border-color] duration-[300ms] hover:border-border-subtle/80 hover:bg-bg-secondary/50 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
          >
            <ChevronLeft
              size={22}
              aria-hidden="true"
              className="transition-transform duration-[300ms] motion-safe:group-hover:-translate-x-[2px]"
            />
          </Link>
        ) : null}
        <nav
          className="hidden items-center gap-6 md:flex lg:gap-7"
          aria-label={t.common.mainNav}
        >
          {navHrefs.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {t.nav[link.key]}
            </NavLink>
          ))}
          <LanguageSwitcher />
        </nav>

        <button
          type="button"
          className="rounded-lg border border-border-subtle p-2 text-text-secondary transition-colors hover:border-accent-blue/30 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/40 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? t.common.closeMenu : t.common.openMenu}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-border-subtle bg-bg-primary/95 px-5 py-4 backdrop-blur-md md:hidden"
          aria-label={t.common.mobileNav}
        >
          <ul className="flex flex-col gap-1">
            {navHrefs.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  className="block w-full py-2.5"
                  onClick={closeMobile}
                >
                  {t.nav[link.key]}
                </NavLink>
              </li>
            ))}
            <li className="mt-3 border-t border-border-subtle/70 pt-3">
              <LanguageSwitcher
                menuId="language-menu-mobile"
                onSelect={closeMobile}
              />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
