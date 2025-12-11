// components/home/customer-hero-section.tsx
"use client";

import {
  CalendarDays,
  Users,
  Laptop,
  IdCard,
  Building2,
  Briefcase,
  Handshake,
  SlidersHorizontal,
} from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    label: "Event Space",
    description: "Host professional events and presentations",
  },
  {
    icon: Users,
    label: "Coworking",
    description: "Including some of the most successful entrepreneurs.",
  },
  {
    icon: Laptop,
    label: "Virtual Offices",
    description: "Professional address and business support",
  },
  {
    icon: IdCard,
    label: "Membership",
    description: "Flexible access to premium workspaces",
  },
  {
    icon: Building2,
    label: "Private Offices",
    description: "Secure dedicated workspace solutions",
  },
  {
    icon: Briefcase,
    label: "Office Space",
    description: "Customizable professional environments",
  },
  {
    icon: Handshake,
    label: "Meeting Room",
    description: "Modern conference and collaboration spaces",
  },
  {
    icon: SlidersHorizontal,
    label: "Custom Office",
    description: "Tailored workspace design and solutions",
  },
];

export function CustomerHeroSection() {
  return (
    <section className="bg-[#fff8ef] py-24">
      <div className="container">
        {/* Top heading + description */}
        <div className="mb-12 flex flex-col gap-10 md:flex-row md:items-start">
          <div className="md:w-1/2">
            <h2 className="text-xl font-serif leading-tight text-[#1f1a16] md:text-6xl">
              Make the customer the hero
              <br />
              of your story.
            </h2>
          </div>

          <div className="md:w-1/2">
            <div className="flex items-start gap-6">
              {/* Vertical accent line */}
              <span className="mt-1 h-16 w-[2px] bg-[#bf9445]" />
              <p className="text-base leading-relaxed text-[#3b3b3b]">
                We&apos;re the world&apos;s largest provider of flexible workplace
                solutions, with customers including some of the most successful
                entrepreneurs.
              </p>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="overflow-hidden rounded-sm border border-[#e4d7c6] bg-[#fff8ef]">
          <div className="grid grid-cols-1 divide-y divide-[#e4d7c6] md:grid-cols-4 md:divide-y-0">
            {/* first row (0–3) */}
            {features.slice(0, 4).map((item, index) => (
              <div
                key={item.label}
                className={`group flex h-64 flex-col items-center justify-center bg-[#fdf5ea] transition-colors duration-300 hover:bg-[#594d46] ${
                  index !== 3
                    ? "border-b border-[#e4d7c6] md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <item.icon
                    className="h-16 w-16 text-[#222222] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.6}
                  />
                  <p className="text-lg font-medium text-[#222222] transition-colors duration-300 group-hover:text-white">
                    {item.label}
                  </p>
                  {/* sub text only visible on hover */}
                  <p
                    className="
                      max-w-xs text-sm leading-snug text-white
                      opacity-0 translate-y-1
                      transition-all duration-300
                      group-hover:opacity-100 group-hover:translate-y-0
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* second row (4–7) */}
            {features.slice(4).map((item, index) => (
              <div
                key={item.label}
                className={`group flex h-64 flex-col items-center justify-center bg-[#fdf5ea] transition-colors duration-300 hover:bg-[#594d46] ${
                  index !== 3 ? "md:border-r border-[#e4d7c6]" : ""
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <item.icon
                    className="h-16 w-16 text-[#222222] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.6}
                  />
                  <p className="text-lg font-medium text-[#222222] transition-colors duration-300 group-hover:text-white">
                    {item.label}
                  </p>
                  {/* sub text only visible on hover */}
                  <p
                    className="
                      max-w-xs text-sm leading-snug text-white
                      opacity-0 translate-y-1
                      transition-all duration-300
                      group-hover:opacity-100 group-hover:translate-y-0
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA button */}
        <div className="mt-10 flex justify-end">
          <button className="rounded-full bg-[#5d4634] px-10 py-3 text-sm font-medium text-white shadow-[0_10px_25px_rgba(0,0,0,0.25)] hover:bg-[#463226]">
            Talk To An Expert
          </button>
        </div>
      </div>
    </section>
  );
}
