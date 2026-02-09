"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, Users, Monitor, CalendarDays, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "office-space", label: "Office Space", icon: Building2, href: "/office-space" },
  { id: "coworking", label: "Coworking", icon: Users, href: "/coworking" },
  { id: "virtual-offices", label: "Virtual Offices", icon: Monitor, href: "/virtual-offices" },
  { id: "meeting-rooms", label: "Meeting rooms", icon: CalendarDays, href: "/meeting-spaces" },
];

export function HeroSearch() {
  return (
    <div className="w-full max-w-4xl rounded-2xl bg-[#d4a574] p-8 shadow-2xl">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-16">
        {tabs.map((tab) => {
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={cn(
                "group flex flex-col items-center gap-4 transition-all hover:-translate-y-1"
              )}
            >
              <div className={cn(
                "flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-[#1a1a1a] transition-all group-hover:bg-white/40 group-hover:scale-110"
              )}>
                <tab.icon className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <span className={cn(
                  "text-sm font-bold uppercase tracking-widest text-[#1a1a1a]"
                )}>
                  {tab.label}
                </span>
                {/* Decoration Line */}
                <div className={cn(
                  "h-1 w-0 rounded-full bg-[#1a1a1a] transition-all duration-300 group-hover:w-12"
                )} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

