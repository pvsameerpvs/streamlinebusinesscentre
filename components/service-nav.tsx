// components/service-nav.tsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  Building2,
  Users,
  Monitor,
  CalendarDays,
  CreditCard,
  MapPin,
  DoorOpen,
  Armchair,
  Laptop,
  Presentation,
  ChevronRight,
  ChevronLeft,
  Briefcase,
  Phone,
  Bell,
  Mail,
  Wine,
  Coffee,
  Clock,
  Package,
  Printer,
  Headset,
} from "lucide-react";

const services = [
  { label: "Office Space", icon: Building2, href: "/office-space", active: true },
  { label: "Coworking", icon: Users, href: "/coworking" },
  { label: "Virtual Offices", icon: Monitor, href: "/virtual-offices" },
  { label: "Meeting Spaces", icon: CalendarDays, href: "/meeting-spaces" },
  { label: "Membership", icon: CreditCard, href: "/membership" },
  { label: "Business Address", icon: MapPin, href: "/business-address" },
  { label: "Events", icon: DoorOpen, href: "/events" },
  { label: "Private Offices", icon: Armchair, href: "/private-offices" },
  { label: "Hot Desks", icon: Laptop, href: "/hot-desks" },
  { label: "Conference Rooms", icon: Presentation, href: "/conference-rooms" },
  { label: "Dedicated Desks", icon: Briefcase, href: "/dedicated-desks" },
  { label: "Phone Booths", icon: Phone, href: "/phone-booths" },
  { label: "Reception Services", icon: Bell, href: "/reception-services" },
  { label: "Mail Handling", icon: Mail, href: "/mail-handling" },
  { label: "Networking Events", icon: Wine, href: "/networking-events" },
  { label: "Business Lounge", icon: Coffee, href: "/business-lounge" },
  { label: "Day Offices", icon: Clock, href: "/day-offices" },
  { label: "Storage Solutions", icon: Package, href: "/storage-solutions" },
  { label: "Printing Services", icon: Printer, href: "/printing-services" },
  { label: "IT Support", icon: Headset, href: "/it-support" },
];

export function ServiceNav() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const amount = container.clientWidth * 0.7;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="border-b border-gray-100 bg-[#fffbf6] py-4">
      <div className="container relative">
        {/* Scrollable strip */}
        <div
          ref={scrollRef}
          className="flex items-center gap-6 overflow-x-auto pb-2 scrollbar-hide"
        >
          {services.map((service) => (
            <Link
              key={service.label}
              href={service.href}
              className="group flex min-w-[84px] flex-col items-center gap-2 text-center"
            >
              <div className="flex h-9 w-9 items-center justify-center text-[#4b3624] transition-transform duration-300 group-hover:-translate-y-0.5">
  <service.icon className="h-6 w-6" strokeWidth={2.5} />
</div>

              <div className="flex flex-col items-center gap-1">
                <span className="text-[11px] font-medium leading-tight text-[#4b3624]">
                  {service.label}
                </span>
                {service.active && <div className="h-[2px] w-8 bg-[#d4a574]" />}
              </div>
            </Link>
          ))}
        </div>

        {/* Left arrow */}
        <button
          type="button"
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-1.5 shadow-md"
        >
          <ChevronLeft className="h-4 w-4 text-[#4b3624]" />
        </button>

        {/* Right arrow */}
        <button
          type="button"
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-1.5 shadow-md"
        >
          <ChevronRight className="h-4 w-4 text-[#4b3624]" />
        </button>
      </div>
    </div>
  );
}
