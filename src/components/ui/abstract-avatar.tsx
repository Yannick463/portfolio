"use client";

import { useLanguage } from "@/components/language-provider";

export function AbstractAvatar() {
  const { t } = useLanguage();

  return (
    <div className="relative flex h-full min-h-[280px] w-full items-center justify-center md:min-h-[360px]">
      <div
        className="aura-pulse absolute h-48 w-48 rounded-full bg-accent-blue/10 blur-3xl md:h-64 md:w-64"
        aria-hidden="true"
      />
      <div
        className="aura-pulse absolute h-32 w-32 rounded-full bg-accent-orange/10 blur-2xl md:h-40 md:w-40"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 200 280"
        className="relative h-auto w-48 md:w-56"
        aria-hidden="true"
        role="img"
      >
        <defs>
          <linearGradient id="silhouetteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1F8BFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#0B1120" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FF7A00" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="coreGlow" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#36FBA1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1F8BFF" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse cx="100" cy="260" rx="45" ry="8" fill="#1F8BFF" opacity="0.15" />

        <path
          d="M100 40 C130 40 145 70 145 100 C145 130 130 155 100 160 C70 155 55 130 55 100 C55 70 70 40 100 40 Z"
          fill="url(#silhouetteGrad)"
          stroke="#1D2A3A"
          strokeWidth="1"
        />

        <path
          d="M100 160 L115 240 L100 250 L85 240 Z"
          fill="#0B1120"
          stroke="#1F8BFF"
          strokeWidth="0.5"
          opacity="0.9"
        />

        <path
          d="M100 160 L70 200 L75 210 L100 180 Z M100 160 L130 200 L125 210 L100 180 Z"
          fill="#05070D"
          stroke="#1D2A3A"
          strokeWidth="0.5"
        />

        <circle cx="100" cy="95" r="18" fill="url(#coreGlow)" filter="url(#glow)" opacity="0.6" />

        <path
          d="M88 92 L100 85 L112 92 L100 105 Z"
          fill="none"
          stroke="#36FBA1"
          strokeWidth="1.5"
          opacity="0.8"
        />

        <line x1="100" y1="40" x2="100" y2="20" stroke="#FF7A00" strokeWidth="1" opacity="0.5" />
        <circle cx="100" cy="18" r="3" fill="#FF7A00" opacity="0.7" />

        <path
          d="M60 120 Q40 140 35 170 M140 120 Q160 140 165 170"
          fill="none"
          stroke="#1F8BFF"
          strokeWidth="0.8"
          opacity="0.4"
        />
      </svg>

      <div className="absolute bottom-4 right-4 rounded border border-border-subtle bg-bg-secondary/80 px-2 py-1 font-mono text-[10px] text-accent-green md:text-xs">
        {t.common.coreActive}
      </div>
    </div>
  );
}
