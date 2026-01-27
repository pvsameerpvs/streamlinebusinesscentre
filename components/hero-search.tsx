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


  return (
    <div className="w-full max-w-4xl rounded-xl bg-[#d4a574] p-8 shadow-2xl">
      {/* Tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-4 md:gap-12">
        {tabs.map((tab) => {
         
          return (
            <button
              key={tab.id}
             
              className={cn(
                "group flex flex-col items-center gap-3 transition-all",
               
              )}
            >
              <div className={cn(
                "flex h-12 w-12 items-center justify-center rounded-lg transition-all",
               
              )}>
                <tab.icon className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className={cn(
                  "text-sm font-medium",
                 
                )}>
                  {tab.label}
                </span>
                {/* Active Indicator Line */}
                <div className={cn(
                  "h-1 w-12 rounded-full bg-[#1a1a1a] transition-all duration-300",
                 
                )} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Search Input */}
     
    </div>
  );
}
