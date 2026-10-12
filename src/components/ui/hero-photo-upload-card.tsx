"use client";

import Image from "next/image";
import profileImage from "@/assets/imagem.jpeg";
import { siteConfig } from "@/lib/i18n";

export function HeroPhotoUploadCard() {
  return (
    <div className="hero-photo-upload-card">
      <Image
        src={profileImage}
        alt={siteConfig.name}
        fill
        priority
        sizes="(max-width: 767px) 300px, (max-width: 1199px) 380px, 430px"
        className="object-cover object-[center_20%]"
      />
    </div>
  );
}
