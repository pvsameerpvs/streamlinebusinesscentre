"use client";

import React from "react";
import Image from "next/image";
import { 
  SlidersHorizontal, 
  Palette, 
  Layout, 
  Lightbulb, 
  Building2,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  Brush
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CustomOfficesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/office-tab7.jpg" alt="Custom Office Design" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4b3624] via-[#4b3624]/80 to-transparent" />
        </div>
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#d4a574]/30 bg-[#d4a574]/10 text-[#d4a574] text-xs font-bold uppercase tracking-[0.2em]">
              <SlidersHorizontal className="w-4 h-4" />
              <span>Tailored Solutions</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
              Your vision, <br />
              <span className="text-[#d4a574]">our canvas.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              From layout and branding to furniture and IT, we design and build a workspace that perfectly reflects your company culture.
            </p>
            <div className="flex gap-6">
              <Link href="/contact">
                <Button className="h-20 px-12 bg-[#d4a574] hover:bg-[#b08963] text-white font-black rounded-full text-xl shadow-2xl transition-all hover:scale-105">
                  START DESIGNING
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Design Pillars */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { 
                icon: Layout, 
                title: "Bespoke Layouts", 
                desc: "Design the perfect flow for your team, from open-plan collaboration zones to private focus pods."
              },
              { 
                icon: Palette, 
                title: "Brand Integration", 
                desc: "We incorporate your brand colours, logos, and mission statements into the very fabric of the office."
              },
              { 
                icon: Lightbulb, 
                title: "Smart Technology", 
                desc: "Custom IT infrastructure, AV solutions, and smart office systems built to your exact specs."
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-gray-100 group hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 bg-[#fbf7f2] rounded-3xl flex items-center justify-center text-[#d4a574] mb-8 group-hover:bg-[#d4a574] group-hover:text-white transition-colors">
                  <pillar.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#4b3624] mb-6">{pillar.title}</h3>
                <p className="text-gray-500 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#d4a574]/10 rounded-full blur-3xl" />
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl">
                <Image src="/office-tab4.jpg" alt="Design Process" fill className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-12">
                  <div className="text-white">
                    <div className="text-sm font-bold text-[#d4a574] uppercase tracking-widest mb-2">Phase 01</div>
                    <div className="text-3xl font-bold">The Consultation</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-12 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-[#4b3624] tracking-tight">The Path to <span className="text-[#d4a574]">Excellence.</span></h2>
              <div className="space-y-10">
                {[
                  { step: "01", title: "Consultation & Vision", desc: "We sit down with your leadership to understand your scaling needs, culture, and operational requirements." },
                  { step: "02", title: "Design & Prototyping", desc: "Our in-house designers create 3D mockups and floor plans for your review and iterative feedback." },
                  { step: "03", title: "Construction & Fit-out", desc: "Our expert project managers handle everything from contractors to IT installation and finishing." },
                  { step: "04", title: "Move-in & Management", desc: "We handle the logistics of your move and then manage the day-to-day operations so you can focus on work." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="text-4xl font-black text-[#d4a574]/20 group-hover:text-[#d4a574]/40 transition-colors">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-bold text-[#4b3624] mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-24 bg-[#4b3624] overflow-hidden">
        <div className="container px-4">
          <div className="bg-[#594d46] rounded-[4rem] p-12 md:p-20 relative border border-white/5">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">Think <span className="text-[#d4a574]">Big.</span> <br /> No boundaries.</h2>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Maximize2, label: "Up to 500 desks" },
                    { icon: Brush, label: "Custom finishings" },
                    { icon: ShieldCheck, label: "Private network" },
                    { icon: Building2, label: "Full building options" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                      <stat.icon className="w-5 h-5 text-[#d4a574]" />
                      <span className="text-sm font-bold text-gray-200">{stat.label}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300">Whether you need a dedicated floor for your tech team or a standalone building for your corporate headquarters, we scale with you.</p>
                <Link href="/contact" className="inline-block">
                  <Button className="h-14 px-10 bg-[#fbf7f2] hover:bg-white text-[#4b3624] font-black rounded-full">
                    GET A QUOTE
                  </Button>
                </Link>
              </div>
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl skew-y-1">
                <Image src="/office-tab9.jpg" alt="Scale" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
