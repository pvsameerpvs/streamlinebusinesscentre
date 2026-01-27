// components/home/flexible-workspace-section.tsx
"use client";

import { useState, useRef } from "react";
import NextImage from "next/image";
import { 
  ChevronLeft, 
  ChevronRight, 
  CalendarDays, 
  Users2, 
  Clock, 
  MapPin, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const workspaceTabs = [
  { key: "office-space", label: "Office Space" },
  { key: "coworking", label: "Coworking" },
  { key: "virtual-offices", label: "Virtual Offices" },
  { key: "meeting-rooms", label: "Meeting Rooms" }
];

interface WorkspaceItem {
  title: string;
  desc: string;
  image: string;
  features: { icon: any; text: string }[];
  href: string;
}

const workspaceData: Record<string, WorkspaceItem[]> = {
  "office-space": [
    {
      title: "Private offices",
      desc: "A range of ready-to-use, fully equipped offices with everything you need to get started.",
      image: "/office-tab4.jpg",
      features: [
        { icon: CalendarDays, text: "By month or year" },
        { icon: Users2, text: "Teams of any size" }
      ],
      href: "/private-offices"
    },
    {
      title: "Custom Offices",
      desc: "Tailored office space designed to meet the unique needs of your business and culture.",
      image: "/office-tab7.jpg",
      features: [
        { icon: Clock, text: "Long-term flexibility" },
        { icon: MapPin, text: "Any global location" }
      ],
      href: "/custom-offices"
    },
    {
      title: "Day Offices",
      desc: "Professional on-demand office space, perfect for when you need to focus for a day.",
      image: "/office-tab1.jpg",
      features: [
        { icon: Clock, text: "Book by the hour or day" },
        { icon: Users2, text: "1-2 people" }
      ],
      href: "/day-offices"
    }
  ],
  coworking: [
    {
      title: "Fixed Desk",
      desc: "Your own dedicated desk in a shared office, with all the benefits of a community.",
      image: "/virtual-offices1.jpeg",
      features: [
        { icon: Clock, text: "24/7 access" },
        { icon: Users2, text: "Personal workspace" }
      ],
      href: "/dedicated-desks"
    },
    {
      title: "Hot Desking",
      desc: "The ultimate in flexibility. Choose a new desk each day in our vibrant coworking spaces.",
      image: "/co.jpeg",
      features: [
        { icon: Clock, text: "During business hours" },
        { icon: Users2, text: "Network globally" }
      ],
      href: "/hot-desks"
    }
  ],
  "virtual-offices": [
    {
      title: "Business Address",
      desc: "A prestigious address at any of our 4,000 global locations, without a physical office.",
      image: "/virtual-offices3.jpeg",
      features: [
        { icon: MapPin, text: "Global presence" },
        { icon: MapPin, text: "Mail handling available" }
      ],
      href: "/business-address"
    },
    {
      title: "Full Virtual Office",
      desc: "Address, telephone answering, and access to our global network of business lounges.",
      image: "/virtual-offices4.jpeg",
      features: [
        { icon: Clock, text: "Professional support" },
        { icon: Users2, text: "Lounge access included" }
      ],
      href: "/virtual-offices"
    }
  ],
  "meeting-rooms": [
    {
      title: "Meeting Rooms",
      desc: "Professional spaces for interviews, pitches, or workshops, fully equipped with latest tech.",
      image: "/meeting-spaces1.jpeg",
      features: [
        { icon: Clock, text: "Book by the hour" },
        { icon: Users2, text: "Any group size" }
      ],
      href: "/meeting-spaces"
    },
    {
      title: "Event Space",
      desc: "Larger spaces for conferences or seminars, tailored to your event requirements.",
      image: "/meeting-spaces2.jpeg",
      features: [
        { icon: CalendarDays, text: "Custom layouts" },
        { icon: Users2, text: "Up to 100+ people" }
      ],
      href: "/events"
    }
  ]
};

export function FlexibleWorkspaceSection() {
  const [activeTab, setActiveTab] = useState<string>("office-space");
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const items = workspaceData[activeTab] ?? [];

  const handleScroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const amount = container.clientWidth * 0.7;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth"
    });
  };

  return (
    <section className="bg-[#fffbf6] py-32 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#d4a574]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#4b3624]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Heading */}
        <div className="mb-20 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#4b3624] leading-[1.1] mb-8">
            Flexible Workspace Designed <br />
            <span className="text-[#d4a574]">Around Your Needs.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Discover a range of workspace solutions tailored to empower your business at every stage of growth.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-20">
          <div className="no-scrollbar overflow-x-auto pb-6">
            <div className="flex gap-4 md:justify-center px-4 min-w-max">
              {workspaceTabs.map((tab) => {
                const isActive = tab.key === activeTab;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.key);
                      if (sliderRef.current) {
                        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
                      }
                    }}
                    className={`whitespace-nowrap rounded-2xl px-10 py-5 text-sm font-bold tracking-widest uppercase transition-all duration-500 relative group overflow-hidden ${
                      isActive
                        ? "text-white shadow-2xl scale-105"
                        : "bg-white text-[#4b3624] hover:text-[#d4a574] border border-gray-100 shadow-sm hover:shadow-md"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-[#4b3624] transform transition-transform duration-500" />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="relative group">
          {/* Scroll Arrows */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            className="absolute -left-4 lg:-left-12 top-[40%] z-30 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur-md p-6 text-[#4b3624] shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all hover:bg-[#4b3624] hover:text-white opacity-0 group-hover:opacity-100 hidden md:flex active:scale-90"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={() => handleScroll("right")}
            className="absolute -right-4 lg:-right-12 top-[40%] z-30 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur-md p-6 text-[#4b3624] shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all hover:bg-[#4b3624] hover:text-white opacity-0 group-hover:opacity-100 hidden md:flex active:scale-90"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Card Container */}
          <div
            ref={sliderRef}
            className="no-scrollbar flex gap-8 overflow-x-auto pb-12 px-2"
          >
            {items.map((item, index) => (
              <div
                key={`${activeTab}-${index}`}
                className="flex-shrink-0 w-[320px] md:w-[420px] bg-white rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100/50 flex flex-col hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-2 group/card"
              >
                {/* Image */}
                <div className="relative h-64 md:h-72 w-full overflow-hidden">
                  <NextImage
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover/card:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4b3624]/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[#4b3624] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed mb-8 flex-grow font-medium">
                    {item.desc}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 gap-4 mb-10">
                    {item.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-4 bg-[#fffbf6] p-4 rounded-2xl border border-gray-100/50 group/item transition-colors hover:bg-[#f3eadf]">
                        <div className="bg-white p-2 rounded-xl shadow-sm group-hover/item:scale-110 transition-transform">
                          <feature.icon className="w-5 h-5 text-[#d4a574]" />
                        </div>
                        <span className="text-sm font-bold text-[#4b3624]">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <Link href="/contact" className="flex-1">
                      <Button className="w-full h-14 bg-[#4b3624] hover:bg-[#3d2c1d] text-white rounded-2xl font-bold shadow-lg transition-all hover:shadow-xl active:scale-95">
                        Get a quote
                      </Button>
                    </Link>
                    <Link href={item.href} className="flex-1">
                      <Button variant="outline" className="w-full h-14 border-[#4b3624] text-[#4b3624] hover:bg-[#fbf7f2] rounded-2xl font-bold transition-all active:scale-95">
                        Learn more
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
