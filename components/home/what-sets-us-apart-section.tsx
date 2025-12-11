// components/home/what-sets-us-apart-section.tsx
const statBlocks = [
  { label: "Square feet delivered", value: "3B+" },
  { label: "Square feet in development", value: "25M" },
  { label: "Cities", value: "20" },
  { label: "Happy clients", value: "980" }
];

export function WhatSetsUsApartSection() {
  return (
    <section className="bg-[#1a1a1a] py-20 text-white">
      <div className="container">
        <h2 className="mb-16 text-center text-4xl font-serif text-[#d4a574]">
          What sets us Apart
        </h2>
        <div className="grid gap-8 text-center md:grid-cols-4">
          {statBlocks.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-5xl font-light">{stat.value}</div>
              <div className="text-xs font-medium uppercase tracking-widest text-white/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
