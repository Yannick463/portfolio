import type { StaticImageData } from "next/image";
import reinventaHackathonPhoto from "@/assets/Espaço de coworking com jovem programador.png";
import { publicPath } from "@/lib/public-path";

export type CredentialHighlightId = "reinventa" | "payaig";

export type CredentialCardPresentation = "achievement" | "certificate";

export const credentialHighlightOrder: CredentialHighlightId[] = [
  "reinventa",
  "payaig",
];

export type CredentialAsset = {
  imageSrc: string;
  mediaFit: "cover" | "contain";
  cardPresentation: CredentialCardPresentation;
  imageObjectPosition?: string;
};

function resolveImageSrc(source: string | StaticImageData): string {
  return typeof source === "string" ? source : source.src;
}

export const credentialAssets: Record<CredentialHighlightId, CredentialAsset> = {
  reinventa: {
    imageSrc: resolveImageSrc(reinventaHackathonPhoto),
    mediaFit: "cover",
    cardPresentation: "achievement",
    imageObjectPosition: "center 32%",
  },
  payaig: {
    imageSrc: publicPath("/payaig.jpeg"),
    mediaFit: "contain",
    cardPresentation: "certificate",
  },
};
