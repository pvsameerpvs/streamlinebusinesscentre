"use client";

import React from "react";
import Image from "next/image";
import { 
  MapPin, 
  Globe, 
  Navigation, 
  Search, 
  Building2,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { StreamGallery } from "@/components/stream-gallery";

const locations = [
  {
    name: "Burjuman Business Tower",
    area: "Level 10, Burjuman, Dubai",
    type: "Premium Business Centre",
    image: "/office-tab4.jpg",
    features: ["Subway Access", "Secure Parking", "High Speed WiFi"]
  },
  {
    name: "Downtown Dubai",
    area: "Sheikh Mohammed bin Rashid Blvd",
    type: "Corporate Headquarters",
    image: "/office-tab7.jpg",
    features: ["Burj Khalifa View", "Meeting Rooms", "Concierge"]
  },
  {
    name: "Dubai Media City",
    area: "Shatha Tower, DMC",
    type: "Creative Workspace",
    image: "/office-tab3.jpeg",
    features: ["Networking Events", "Media Support", "Creative Lounge"]
  }
];

export default function LocationsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Search Hero */}
      <section className="bg-[#4b3624] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full">
          <Image src="/global_workspace_hero.png" alt="Map" fill className="object-cover opacity-20 contrast-125" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4b3624] to-transparent" />
        </div>
        <div className="container relative z-10 px-4">
          <div className="max-w-2xl text-white space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Work wherever <br />
              <span className="text-[#d4a574]">you need to be.</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Find your next office in over 4,000 locations globally. From Dubai to New York, Streamline keeps you connected.
            </p>
            <div className="relative max-w-lg shadow-2xl">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Search city, area or building..." 
                className="h-16 pl-16 rounded-full border-none bg-white text-black text-lg focus-visible:ring-2 focus-visible:ring-[#d4a574]"
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 h-12 px-6 bg-[#d4a574] hover:bg-[#b08963] text-white font-bold rounded-full">
                Find Office
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Spotlight */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#d4a574] font-bold uppercase tracking-widest text-xs">
                <Navigation className="w-4 h-4" />
                <span>Dubai Centres</span>
              </div>
              <h2 className="text-4xl font-bold text-[#4b3624]">Prime Dubai Locations</h2>
              <p className="text-gray-500 max-w-xl">Explore our network of luxury business centres strategically placed in Dubai&apos;s most prestigious commercial districts.</p>
            </div>
            <Link href="/contact">
              <Button variant="ghost" className="text-[#d4a574] font-bold group">
                Request all lists <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {locations.map((loc, i) => (
              <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <Image src={loc.image} alt={loc.name} fill className="object-cover group-hover:scale-110 transition-transform [transition-duration:1.5s]" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#d4a574]" />
                      <span className="text-xs font-bold text-[#4b3624]">{loc.area.split(',')[loc.area.split(',').length - 1].trim()}</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="text-[10px] font-bold text-[#d4a574] uppercase tracking-[0.2em] mb-3">{loc.type}</div>
                  <h3 className="text-2xl font-bold text-[#4b3624] mb-4 group-hover:text-[#d4a574] transition-colors">{loc.name}</h3>
                  <p className="text-gray-500 text-sm mb-6 flex items-start gap-2">
                    <Navigation className="w-4 h-4 text-gray-300 mt-0.5 flex-shrink-0" />
                    {loc.area}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {loc.features.map((f, fi) => (
                      <span key={fi} className="bg-[#fbf7f2] text-[#4b3624]/60 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">{f}</span>
                    ))}
                  </div>
                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <Link href="/contact">
                      <Button className="bg-[#594d46] hover:bg-[#4b3624] text-white rounded-full px-6 text-xs h-10">
                        BOOK TOUR
                      </Button>
                    </Link>
                    <button className="text-gray-300 hover:text-[#d4a574] transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <StreamGallery />

      {/* Global Network */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="bg-[#594d46] rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-fixed opacity-10 mix-blend-overlay" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-[#d4a574] text-xs font-bold uppercase tracking-widest border border-white/10">
                  <Globe className="w-4 h-4" />
                  <span>Global Presence</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                  Seamless access <br />
                  <span className="text-[#d4a574]">wherever you lead.</span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our network spans over 100 countries, 4,000 cities, and every major business hub on the planet. One membership gives you the keys to world-class offices worldwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <div className="bg-white/5 backdrop-blur p-6 rounded-3xl border border-white/10 flex-1">
                    <div className="text-3xl font-bold text-[#d4a574] mb-1">100+</div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Countries</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur p-6 rounded-3xl border border-white/10 flex-1">
                    <div className="text-3xl font-bold text-[#d4a574] mb-1">4.5M+</div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active Users</div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-[#d4a574]/20 rounded-full blur-3xl animate-pulse" />
                <div className="relative h-full w-full bg-white/5 backdrop-blur-sm rounded-full border border-white/10 flex items-center justify-center p-8 overflow-hidden">
                  <Globe className="w-full h-full text-[#d4a574]/30 animate-[spin_60s_linear_infinite]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Building2 className="w-16 h-16 text-[#d4a574] mx-auto mb-4" />
                      <div className="text-2xl font-bold text-white uppercase tracking-widest">World Network</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
