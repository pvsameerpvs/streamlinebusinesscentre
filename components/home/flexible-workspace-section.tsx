// components/home/flexible-workspace-section.tsx
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const workspaceTabs = [
  { key: "office-space", label: "Office Space" },
  { key: "coworking", label: "Coworking" },
  { key: "virtual-offices", label: "Virtual Offices" },
  { key: "meeting-rooms", label: "Meeting Rooms" }
];

// TODO: replace these image paths with your actual images
const workspaceImages: Record<string, string[]> = {
  "office-space": [
    "/office-1.jpeg",
    "/office-2.jpeg",
    "/office-3.jpeg",
    "/office-4.jpeg",
    "/office-5.jpeg",
    "/office-6.jpeg"
  ],
  coworking: [
    "/images/coworking/coworking-1.jpg",
    "/images/coworking/coworking-2.jpg",
    "/images/coworking/coworking-3.jpg",
    "/images/coworking/coworking-4.jpg",
    "/images/coworking/coworking-5.jpg"
  ],
  "virtual-offices": [
    "/images/virtual-offices/virtual-1.jpg",
    "/images/virtual-offices/virtual-2.jpg",
    "/images/virtual-offices/virtual-3.jpg",
    "/images/virtual-offices/virtual-4.jpg"
  ],
  "meeting-rooms": [
    "/images/meeting-rooms/meeting-1.jpg",
    "/images/meeting-rooms/meeting-2.jpg",
    "/images/meeting-rooms/meeting-3.jpg",
    "/images/meeting-rooms/meeting-4.jpg",
    "/images/meeting-rooms/meeting-5.jpg"
  ]
};

export function FlexibleWorkspaceSection() {
  const [activeTab, setActiveTab] = useState<string>("office-space");
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const images = workspaceImages[activeTab] ?? [];

  const handleScroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const amount = container.clientWidth * 0.7; // how far to scroll each click

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth"
    });
  };

  return (
    <section className="bg-[#fff8ef] py-24">
      <div className="container">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-xl font-serif leading-tight text-[#1f1a16] md:text-6xl">
            Flexible Workspace Designed Around Your
            <br />
            Needs
          </h2>
        </div>

        {/* Tabs */}
        {/* Tabs */}
<div className="mb-12">
  {/* Mobile: allow horizontal scroll */}
  <div className="no-scrollbar overflow-x-auto">
    <div className="mx-auto w-max">
      <div className="inline-flex rounded-full bg-[#c99652] px-2 py-1 shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
        {workspaceTabs.map((tab) => {
          const isActive = tab.key === activeTab;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => {
                setActiveTab(tab.key);
                if (sliderRef.current) {
                  sliderRef.current.scrollTo({
                    left: 0,
                    behavior: "instant" as ScrollBehavior,
                  });
                }
              }}
              className={`whitespace-nowrap rounded-full px-4 py-3 text-sm font-medium transition sm:px-6 md:px-10 ${
                isActive
                  ? "bg-[#3b3028] text-white shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
                  : "text-[#3b3028] hover:bg-[#3b3028]/10"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  </div>
</div>


        {/* Slider */}
        <div className="relative">
          {/* Left arrow */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#6b5544] p-3 text-white shadow-lg hover:bg-[#4b3624]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right arrow */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#6b5544] p-3 text-white shadow-lg hover:bg-[#4b3624]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Scrollable image strip */}
         <div
  ref={sliderRef}
  className="no-scrollbar flex gap-6 overflow-x-auto px-12"
>
  {images.map((src, index) => (
    <div
      key={`${activeTab}-${index}`}
      className="relative h-[420px] w-[260px] flex-shrink-0 overflow-hidden bg-[#e5ded4]"
    >
      <Image
        src={src}
        alt={`${activeTab} image ${index + 1}`}
        fill
        className="object-cover"
      />
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
}
