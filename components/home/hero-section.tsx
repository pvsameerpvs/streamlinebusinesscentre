// components/home/hero-section.tsx
import { HeroSearch } from "@/components/hero-search";

export function HeroSection() {
  return (
    <section className="relative bg-[#fffbf6]">
      {/* Hero */}
      <div className="relative h-[800px] w-full bg-[#151110] overflow-hidden">
        {/* Background VIDEO */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero-vid.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero content */}
       <div className="container relative z-10 flex h-full flex-col items-center justify-start pt-20 pb-32 text-center">
  <h1 className="max-w-4xl text-4xl font-extrabold tracking-[-0.02em] leading-tight text-white md:text-5xl lg:text-7xl">
  From a single desk to a whole
  <br />
  building. The choice is yours.
</h1>

  <p className="mt-6 font-serif text-4xl italic text-[#d4a574] md:text-5xl">
    Office space your way.
  </p>
</div>

      </div>

      {/* Cream strip below hero */}
      <div className="h-60 bg-[#fffbf6]" />

      {/* Floating Search Card */}
      <div className="pointer-events-auto absolute left-1/2 bottom-20 z-30 w-full max-w-4xl -translate-x-1/2 px-4">
        <HeroSearch />
      </div>
    </section>
  );
}
