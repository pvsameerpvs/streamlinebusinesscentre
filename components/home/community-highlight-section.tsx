// components/home/community-highlight-section.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CommunityHighlightSection() {
  return (
    <section className="flex flex-col md:h-[600px] md:flex-row">
      {/* Left Content */}
      <div className="flex flex-1 flex-col justify-center bg-[#fffbf6] p-12 text-center md:p-24">
        <div className="mx-auto max-w-lg space-y-8">
          <h2 className="text-xl font-serif leading-tight text-[#1a1a1a] md:text-6xl">
            Join a
            <br />
            community of
            <br />
            early stage
            <br />
            startups.
          </h2>
          <p className="text-lg text-[#4b3624]/80">
            Premium office rental space with fully furnished facilities
          </p>
          <Button className="h-14 rounded-full bg-[#594d46] px-10 text-lg text-white hover:bg-[#4b3624]">
            Book a tour
          </Button>
        </div>
      </div>

      {/* Right Image & Cards */}
      <div className="relative flex-1 bg-[#f4f4f4]">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative flex h-full flex-col justify-center gap-6 p-12 md:pl-0">
          <Card className="w-64 border-none p-6 shadow-xl md:-ml-12">
            <div className="mb-2 text-4xl font-bold text-[#594d46]">880</div>
            <div className="text-sm leading-snug text-gray-600">
              Creative people space is available.
            </div>
          </Card>

          <Card className="w-64 border-none p-6 shadow-xl md:-ml-12">
            <div className="mb-2 text-4xl font-bold text-[#594d46]">912</div>
            <div className="text-sm leading-snug text-gray-600">
              Conference &amp; meeting rooms available.
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
