"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

const IMAGE_WIDTH = 1086;
const IMAGE_HEIGHT = 1448;

export function PortfolioAvatar() {
  const { t } = useLanguage();

  return (
    <div className="relative flex h-full min-h-[260px] w-full items-end justify-center md:min-h-[340px]">
      <div className="relative mx-auto flex w-full max-w-[320px] items-end justify-center">
        <div
          className="pointer-events-none absolute bottom-0 h-6 w-28 rounded-full bg-accent-blue/15 blur-lg"
          aria-hidden="true"
        />

        <Image
          src="/avatar-yannick-cutout.png"
          alt={t.common.avatarAlt}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          priority
          className="relative z-10 mx-auto h-auto w-full max-w-[220px] object-contain object-bottom drop-shadow-[0_0_28px_rgba(31,139,255,0.20)] sm:max-w-[240px] lg:max-w-[300px] xl:max-w-[340px] 2xl:max-w-[380px]"
        />
      </div>
    </div>
  );
}
