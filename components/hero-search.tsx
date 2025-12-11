"use client";

import { useState } from "react";
import { Building2, Users, Monitor, CalendarDays, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "office-space", label: "Office Space", icon: Building2 },
  { id: "coworking", label: "Coworking", icon: Users },
  { id: "virtual-offices", label: "Virtual Offices", icon: Monitor },
  { id: "meeting-rooms", label: "Meeting rooms", icon: CalendarDays },
];

export function HeroSearch() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="w-full max-w-4xl rounded-xl bg-[#d4a574] p-8 shadow-2xl">
      {/* Tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-4 md:gap-12">
        {tabs.map((tab) => {
          const isActive = activeTab.id === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "group flex flex-col items-center gap-3 transition-all",
                isActive ? "text-[#1a1a1a]" : "text-[#4b3624] hover:text-[#1a1a1a]"
              )}
            >
              <div className={cn(
                "flex h-12 w-12 items-center justify-center rounded-lg transition-all",
                isActive ? "scale-110" : "group-hover:scale-105"
              )}>
                <tab.icon className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className={cn(
                  "text-sm font-medium",
                  isActive ? "font-bold" : "font-normal"
                )}>
                  {tab.label}
                </span>
                {/* Active Indicator Line */}
                <div className={cn(
                  "h-1 w-12 rounded-full bg-[#1a1a1a] transition-all duration-300",
                  isActive ? "opacity-100" : "opacity-0"
                )} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Search Input */}
      <div className="relative flex flex-col gap-2 rounded-lg bg-white p-1 shadow-sm md:flex-row md:items-center">
        <Input
          type="text"
          placeholder={`Find ${activeTab.label} locations`}
          className="h-12 border-none bg-transparent pl-4 text-base placeholder:text-gray-400 focus-visible:ring-0 md:h-14 md:text-lg"
        />
        
        <div className="flex items-center gap-4 pr-1">
          <button className="hidden whitespace-nowrap text-sm font-medium text-[#d4a574] underline decoration-1 underline-offset-4 hover:text-[#b08558] md:block">
            Search Nearby
          </button>
          <Button className="h-12 w-full rounded bg-[#1a1a1a] px-8 text-white hover:bg-[#333] md:w-auto">
            <Search className="mr-2 h-4 w-4" />
            SEARCH
          </Button>
        </div>
      </div>
    </div>
  );
}
