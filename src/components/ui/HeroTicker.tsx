"use client";

type HeroTickerProps = {
  items: string[];
  durationMs?: number;
};

export function HeroTicker({ items, durationMs = 22000 }: HeroTickerProps) {
  const loopItems = [...items, ...items];

  return (
    <div className="relative mt-10 w-full max-w-4xl overflow-hidden rounded-full border border-white/15 bg-white/5 py-3 text-sm text-white/70 backdrop-blur">
      <div
        className="flex gap-8 whitespace-nowrap px-4"
        style={{ animation: `ticker ${durationMs}ms linear infinite` }}
      >
        {loopItems.map((item, idx) => (
          <span key={`${item}-${idx}`} className="tracking-[0.35em] uppercase">
            {item}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
