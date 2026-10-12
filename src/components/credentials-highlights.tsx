"use client";

import { useLanguage } from "@/components/language-provider";
import { MotionFadeItem } from "@/components/motion/motion-in-view";
import { MotionStaggerInView } from "@/components/motion/motion-stagger";
import { CredentialFeatureCard } from "@/components/ui/credential-feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { credentialAssets, credentialHighlightOrder } from "@/lib/credentials";
import type { Variants } from "framer-motion";

const credentialsStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.05,
    },
  },
};

const credentialsFadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

export function CredentialsHighlights() {
  const { t } = useLanguage();

  return (
    <section id="credentials-highlights" className="scroll-mt-24 py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          title={t.credentials.title}
          subtitle={t.credentials.subtitle}
        />

        <MotionStaggerInView
          className="mt-12 grid gap-6 md:gap-7 lg:grid-cols-2 lg:items-stretch lg:gap-8"
          variants={credentialsStagger}
        >
          {credentialHighlightOrder.map((id) => {
            const item = t.credentials.items[id];
            const asset = credentialAssets[id];

            return (
              <MotionFadeItem key={id} className="h-full" variants={credentialsFadeUp}>
                <CredentialFeatureCard
                  credentialId={id}
                  copy={{
                    metaType: item.metaType,
                    metaYear: item.metaYear,
                    title: item.title,
                    description: item.description,
                    highlight: item.highlight,
                    imageAlt: item.imageAlt,
                  }}
                  asset={asset}
                />
              </MotionFadeItem>
            );
          })}
        </MotionStaggerInView>
      </div>
    </section>
  );
}
