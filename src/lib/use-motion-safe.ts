"use client";

import { useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

/**
 * SSR-safe motion gate.
 * Server + first client paint: canAnimate is false (static, visible markup).
 * After language hydration (localStorage read): enables Framer Motion once,
 * so locale sync on mount does not retrigger entrance animations.
 */
export function useMotionSafe() {
  const { mounted: languageReady } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const canAnimate = languageReady && !prefersReducedMotion;

  return {
    mounted: languageReady,
    canAnimate,
    prefersReducedMotion: languageReady && Boolean(prefersReducedMotion),
  };
}
