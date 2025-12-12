"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const statBlocks = [
  { label: "Square feet delivered", value: "3B+" },
  { label: "Square feet in development", value: "25M" },
  { label: "Cities", value: "20" },
  { label: "Happy clients", value: "980" }
];

function parseValue(input: string) {
  const raw = input.replace("+", "").trim();
  const suffix = raw.slice(-1).toUpperCase();
  const numPart = suffix === "B" || suffix === "M" ? raw.slice(0, -1) : raw;

  const base = Number(numPart.replace(/,/g, ""));
  const mult = suffix === "B" ? 1_000_000_000 : suffix === "M" ? 1_000_000 : 1;

  return {
    target: isNaN(base) ? 0 : base * mult,
    suffix: input.includes("+") ? "+" : "",
    unit: suffix === "B" || suffix === "M" ? suffix : ""
  };
}

function formatValue(n: number, unit: string, plus: string) {
  if (unit === "B") return `${Math.round(n / 1_000_000_000)}B${plus}`;
  if (unit === "M") return `${Math.round(n / 1_000_000)}M${plus}`;
  // normal number
  return `${Math.round(n).toLocaleString()}${plus}`;
}

export function WhatSetsUsApartSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [start, setStart] = useState(false);

  const parsed = useMemo(() => statBlocks.map((s) => ({ ...s, ...parseValue(s.value) })), []);

  const [counts, setCounts] = useState<number[]>(() => parsed.map(() => 0));

  useEffect(() => {
    if (!sectionRef.current) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          obs.disconnect(); // run once
        }
      },
      { threshold: 0.25 }
    );

    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    const duration = 2500; // 2.5s (change time here)
    const startTime = performance.now();
    const targets = parsed.map((p) => p.target);

    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic

      setCounts(targets.map((target) => target * eased));

      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, parsed]);

  return (
    <section ref={sectionRef} className="bg-[#1a1a1a] py-20 text-white">
      <div className="container">
        <h2 className="mb-16 text-center text-4xl font-serif text-[#d4a574]">
          What sets us Apart
        </h2>

       <div className="grid gap-8 text-center md:grid-cols-4">
  {parsed.map((stat, idx) => (
    <div key={stat.label} className="space-y-3">
      <div className="text-5xl font-bold md:text-6xl">
        {formatValue(counts[idx], stat.unit, stat.suffix)}
      </div>

      <div className="text-xs font-bold uppercase tracking-widest text-white/60">
        {stat.label}
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
