"use client";

import clsx from "clsx";
import { useMemo, useState } from "react";

const OPTIONS = [
  {
    id: "video",
    label: "AI Product Videos",
    payoff: "Prototype-to-premiere storytelling in days.",
    bullets: [
      "Photoreal sets & talent direction",
      "Dynamic macro + orbit camera passes",
      "Product close-ups synced to feature drops",
    ],
  },
  {
    id: "ads",
    label: "AI Ad Shoots",
    payoff: "Channel-ready variations without reshoots.",
    bullets: [
      "Platform specific framing & pacing",
      "Localized avatars and voice kits",
      "Batch render for performance testing",
    ],
  },
  {
    id: "web",
    label: "Website Development",
    payoff: "Marketing sites and launchpads wired to your stack.",
    bullets: [
      "Next.js + Edge deployments",
      "CMS + analytics integration",
      "Conversion experiments baked in",
    ],
  },
  {
    id: "software",
    label: "Software Products",
    payoff: "Dedicated pods building SaaS, tools, and copilots.",
    bullets: [
      "Product + design + engineering trio",
      "Data + AI workflow automation",
      "Launch, instrumentation, and care",
    ],
  },
];

export function ServiceSelector() {
  const [activeId, setActiveId] = useState<string>("video");
  const active = useMemo(
    () => OPTIONS.find((o) => o.id === activeId) ?? OPTIONS[0],
    [activeId]
  );

  return (
    <div className="rounded-[28px] border border-white/10 bg-white/4 p-6 backdrop-blur">
      <div className="flex flex-wrap gap-3">
        {OPTIONS.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => setActiveId(opt.id)}
            className={clsx(
              "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition",
              activeId === opt.id
                ? "border-white bg-white/90 text-black"
                : "border-white/30 text-white/70 hover:border-white/60 hover:text-white"
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-black/40 p-6 text-left shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <p className="text-sm uppercase tracking-[0.4em] text-white/40">
          {active.label}
        </p>
        <h4 className="mt-3 text-2xl font-semibold text-white">{active.payoff}</h4>
        <ul className="mt-5 space-y-3 text-sm text-white/70">
          {active.bullets.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

