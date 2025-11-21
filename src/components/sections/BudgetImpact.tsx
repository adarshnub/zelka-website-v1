"use client";

import { useMemo, useState } from "react";

const sliderMarks = [
  { label: "Pilot", value: 20 },
  { label: "Campaign", value: 55 },
  { label: "Global", value: 90 },
];

export function BudgetImpact() {
  const [scope, setScope] = useState(55);

  const { aiCost, tradCost, aiTimeline, tradTimeline, savings } = useMemo(() => {
    const scopeFactor = scope / 100;
    const tradCost = Math.round(160000 * scopeFactor + 20000);
    const aiCost = Math.round(tradCost * (0.42 + 0.1 * (1 - scopeFactor)));
    const tradTimeline = Math.round(14 + scopeFactor * 10);
    const aiTimeline = Math.round(tradTimeline * 0.4 + 3);
    const savings = Math.round(((tradCost - aiCost) / tradCost) * 100);
    return { aiCost, tradCost, aiTimeline, tradTimeline, savings };
  }, [scope]);

  return (
    <div className="rounded-[32px] border border-white/10 bg-white/4 p-8 backdrop-blur-xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/80">
            Impact Visualizer
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white/90">
            Dial in your launch scope
          </h3>
          <p className="mt-2 max-w-xl text-sm text-white/70">
            Slide to see how an AI-native workflow slashes production cost and
            lead time without compromising craft.
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-white/60">Projected savings</p>
          <p className="text-4xl font-semibold text-emerald-300">{savings}%</p>
        </div>
      </div>

      <div className="mt-10">
        <input
          type="range"
          min={10}
          max={100}
          value={scope}
          onChange={(e) => setScope(Number(e.target.value))}
          className="w-full accent-cyan-300"
        />
        <div className="mt-3 flex justify-between text-xs uppercase tracking-wide text-white/60">
          {sliderMarks.map((mark) => (
            <button
              key={mark.value}
              type="button"
              onClick={() => setScope(mark.value)}
              className={`transition-colors ${
                scope >= mark.value - 5 && scope <= mark.value + 5
                  ? "text-cyan-200"
                  : "text-white/40"
              }`}
            >
              {mark.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">AI</p>
          <p className="mt-4 text-sm text-white/60">Budget</p>
          <p className="text-3xl font-semibold text-white">
            ${aiCost.toLocaleString()}
          </p>
          <p className="mt-4 text-sm text-white/60">Timeline</p>
          <p className="text-2xl font-semibold text-white">{aiTimeline} days</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Traditional
          </p>
          <p className="mt-4 text-sm text-white/60">Budget</p>
          <p className="text-3xl font-semibold text-white">
            ${tradCost.toLocaleString()}
          </p>
          <p className="mt-4 text-sm text-white/60">Timeline</p>
          <p className="text-2xl font-semibold text-white">
            {tradTimeline} days
          </p>
        </div>
      </div>
    </div>
  );
}

