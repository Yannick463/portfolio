"use client";

import type { ReactNode } from "react";
import { FloatingTestimonials } from "@/components/floating-testimonials";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <FloatingTestimonials />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
