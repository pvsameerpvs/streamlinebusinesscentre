// app/page.tsx
import { HeroSection } from "@/components/home/hero-section";
import { WhatSetsUsApartSection } from "@/components/home/what-sets-us-apart-section";
import { CommunityHighlightSection } from "@/components/home/community-highlight-section";
import { FlexibleWorkspaceSection } from "@/components/home/flexible-workspace-section";
import { ContactSection } from "@/components/home/contact-section";
import { AmenitiesMarquee } from "@/components/home/amenities-marquee";
import { CustomerHeroSection } from "@/components/home/customer-hero-section";

export default function HomePage() {
  return (
   <div className="bg-background w-full max-w-full overflow-x-hidden">
      {/* Service Navigation */}

      {/* Hero + floating search */}
      <HeroSection />

      {/* What sets us apart */}
      <WhatSetsUsApartSection />

      {/* Community highlight */}
      <CommunityHighlightSection />
      {/* New marquee strip (full width) */}
      <AmenitiesMarquee />


      {/* Flexible workspace */}
      <FlexibleWorkspaceSection />

      <CustomerHeroSection />

      {/* Contact / form */}
      <ContactSection />
    </div>
  );
}
