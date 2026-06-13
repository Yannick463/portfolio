"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useMotionSafe } from "@/lib/use-motion-safe";
import { defaultTransition, staggerContainer } from "@/lib/motion";

type MotionHeroStaggerProps = {
  children: ReactNode;
  className?: string;
};

export function MotionHeroStagger({ children, className = "" }: MotionHeroStaggerProps) {
  const { canAnimate } = useMotionSafe();

  if (!canAnimate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type MotionStaggerInViewProps = {
  children: ReactNode;
  className?: string;
  viewportMargin?: string;
  variants?: Variants;
};

export function MotionStaggerInView({
  children,
  className = "",
  viewportMargin = "-60px",
  variants = staggerContainer,
}: MotionStaggerInViewProps) {
  const { canAnimate } = useMotionSafe();

  if (!canAnimate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      variants={variants}
      transition={defaultTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
