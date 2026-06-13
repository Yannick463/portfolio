"use client";

import { motion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { useMotionSafe } from "@/lib/use-motion-safe";
import { defaultTransition, fadeUp } from "@/lib/motion";

type MotionInViewProps = {
  children: ReactNode;
  className?: string;
  viewportMargin?: string;
  variants?: Variants;
};

export function MotionInView({
  children,
  className = "",
  viewportMargin = "-60px",
  variants = fadeUp,
}: MotionInViewProps) {
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

type MotionFadeItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "p" | "h1" | "article";
};

const motionTags = {
  div: motion.div,
  p: motion.p,
  h1: motion.h1,
  article: motion.article,
} as const;

export function MotionFadeItem({
  children,
  className = "",
  as = "div",
}: MotionFadeItemProps) {
  const { canAnimate } = useMotionSafe();
  const Tag = as as ElementType;

  if (!canAnimate) {
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motionTags[as];
  return (
    <MotionTag
      variants={fadeUp}
      transition={defaultTransition}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
