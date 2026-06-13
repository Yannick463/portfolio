"use client";

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 5) % 95}%`,
  top: `${(i * 23 + 10) % 85}%`,
  size: i % 3 === 0 ? 3 : 2,
  delay: `${(i * 0.4) % 5}s`,
  duration: `${5 + (i % 4)}s`,
}));

export function ParticlesBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle absolute rounded-full bg-accent-blue/30"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
