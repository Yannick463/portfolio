import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TechnicalNotePage } from "@/components/technical-notes/technical-note-page";
import { siteConfig } from "@/lib/i18n";
import {
  isTechnicalNoteSlug,
  technicalNoteSlugs,
  technicalNotes,
  type TechnicalNoteSlug,
} from "@/lib/technical-notes";

type NoteRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return technicalNoteSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: NoteRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const note = technicalNotes.pt.items.find((item) => item.slug === slug);

  if (!note) {
    return {};
  }

  const title = `${note.title} | ${siteConfig.name}`;

  return {
    title,
    description: note.lead,
    openGraph: {
      title,
      description: note.lead,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: note.lead,
    },
  };
}

export default async function NoteRoute({ params }: NoteRouteProps) {
  const { slug } = await params;

  if (!isTechnicalNoteSlug(slug)) {
    notFound();
  }

  return <TechnicalNotePage slug={slug as TechnicalNoteSlug} />;
}
