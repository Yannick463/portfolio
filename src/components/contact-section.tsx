"use client";

import { Download, Mail } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { MotionInView } from "@/components/motion/motion-in-view";
import { ContactLink } from "@/components/ui/contact-link";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/i18n";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-container flex flex-col items-center">
        <div className="mx-auto w-full max-w-3xl">
          <SectionHeading
            title={t.contact.title}
            subtitle={t.contact.subtitle}
            align="center"
          />
        </div>

        <MotionInView className="mt-10 flex w-full flex-col items-center md:mt-12">
          <div className="flex max-w-2xl flex-wrap items-center justify-center gap-3">
            <ContactLink href={`mailto:${siteConfig.email}`} ariaLabel={t.contact.emailAria}>
              <Mail aria-hidden="true" />
              {t.contact.emailMe}
            </ContactLink>
            <ContactLink
              href={siteConfig.linkedin}
              external
              ariaLabel={t.contact.linkedinAria}
            >
              <LinkedInIcon />
              {t.contact.linkedin}
            </ContactLink>
            <ContactLink
              href={siteConfig.github}
              external
              ariaLabel={t.contact.githubAria}
            >
              <GitHubIcon />
              {t.contact.github}
            </ContactLink>
            <ContactLink
              href={siteConfig.cvPath}
              external
              ariaLabel={t.contact.cvAria}
            >
              <Download aria-hidden="true" />
              {t.contact.downloadCv}
            </ContactLink>
          </div>
        </MotionInView>
      </div>
    </section>
  );
}
