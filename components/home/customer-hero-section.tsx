"use client";

import Image from "next/image";
import { Apple, PlayCircle, MapPin, Globe, CreditCard, Building2, Users, CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CustomerHeroSection() {
  return (
    <section className="relative bg-[#fff8ef] py-20 md:py-32 overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fdf5ea] -skew-x-12 translate-x-1/2 z-0 hidden lg:block" />

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content Block */}
          <div className="space-y-10 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#bf9445]/20 bg-white text-[#bf9445] text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
              <Globe className="w-4 h-4" />
              <span>Global Workspace Network</span>
            </div>

            <h2 className="text-4xl md:text-7xl font-serif leading-[1.1] text-[#1f1a16] tracking-tight">
              Work wherever <br className="hidden md:block" /> business takes you.
            </h2>

            <div className="flex gap-8 items-start">
              <span className="h-24 w-[3px] bg-[#bf9445] flex-shrink-0 mt-2 rounded-full" />
              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-[#3b3b3b] font-medium leading-relaxed">
                  With over 4,000 locations globally we have offices, coworking spaces and meeting rooms in every major town, city, and transport hub.
                </p>
                <p className="text-lg text-[#3b3b3b]/70 leading-relaxed max-w-xl">
                  Whether you work alone, you&apos;re growing a start-up or you&apos;re running the world&apos;s most successful corporation our network makes it possible to work near clients, colleagues or family.
                </p>
              </div>
            </div>

            {/* App Promotion Section */}
            
            
            <div className="flex justify-start">
               <button className="rounded-full bg-[#5d4634] px-12 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-2xl hover:bg-[#463226] transition-all hover:scale-105 active:scale-95">
                Talk To An Expert
              </button>
            </div>
          </div>

          {/* Visual Showcase Block */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/5] md:aspect-square rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-white group">
              <Image
                src="/global_workspace_hero.png"
                alt="Premium Global Office Network"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority
              />
              {/* Floating Overlay Info Card */}
              <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl border border-[#bf9445]/20 transform transition-transform duration-500 hover:translate-y-[-10px]">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-5xl font-black text-[#1f1a16] tracking-tighter">4,000+</div>
                  <div className="w-14 h-14 bg-[#bf9445] rounded-full flex items-center justify-center text-white shadow-xl">
                    <MapPin className="w-7 h-7" />
                  </div>
                </div>
                <h4 className="text-sm font-black text-[#bf9445] uppercase tracking-[0.3em] mb-2">Global Locations</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Every major town, city, and transport hub worldwide. 
                  Experience the ultimate freedom to grow.
                </p>
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#bf9445]/15 rounded-full blur-[80px] -z-10 animate-pulse" />
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[#594d46]/10 rounded-full blur-[100px] -z-10" />
            
            {/* Small floating badges */}
            <div className="absolute -top-5 left-10 bg-white px-6 py-3 rounded-2xl shadow-xl border border-gray-100 hidden md:flex items-center gap-3 animate-bounce shadow-[#d4a574]/10">
               <Building2 className="w-5 h-5 text-[#d4a574]" />
               <span className="font-bold text-xs text-[#4b3624]">Modern Offices</span>
            </div>
            <div className="absolute top-1/2 -right-4 bg-white px-6 py-3 rounded-2xl shadow-xl border border-gray-100 hidden md:flex items-center gap-3 animate-pulse shadow-[#d4a574]/10">
               <Users className="w-5 h-5 text-[#d4a574]" />
               <span className="font-bold text-xs text-[#4b3624]">Global Community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
