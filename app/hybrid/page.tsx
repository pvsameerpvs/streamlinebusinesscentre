"use client";

import React from "react";
import Image from "next/image";
import { 
  Workflow, 
  Zap, 
  Users2, 
  Laptop2, 
  LineChart,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Monitor
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HybridPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden bg-[#4b3624]">
        <div className="absolute top-0 right-0 w-[60%] h-full opacity-40">
          <Image src="/office-tab9.jpg" alt="Hybrid Work" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4b3624] via-[#4b3624]/80 to-transparent" />
        </div>
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#d4a574]/30 bg-[#d4a574]/10 text-[#d4a574] text-xs font-bold uppercase tracking-[0.2em]">
              <Workflow className="w-4 h-4" />
              <span>Future of Work</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tight leading-tight">
              Transform into a <br />
              <span className="text-[#d4a574]">Hybrid Enterprise.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Enable your workforce to perform at their best with a seamless blend of home, office, and flexible on-demand locations.
            </p>
            <div className="flex gap-6">
              <Link href="/contact">
                <Button className="h-16 px-10 bg-[#d4a574] hover:bg-[#b08963] text-white font-bold rounded-full text-lg shadow-2xl transition-all hover:scale-105">
                  Talk to a Specialist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hybrid? */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4b3624] tracking-tight">Why Move to Hybrid?</h2>
            <p className="text-lg text-gray-500">The world of work has changed. Companies that embrace flexibility attract better talent, reduce costs, and see higher productivity.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Zap, 
                title: "Efficiency", 
                desc: "Reduce office overheads by up to 50% while maintaining a professional presence."
              },
              { 
                icon: Users2, 
                title: "Talent", 
                desc: "Give your team the flexibility they crave to help you retain top-tier professionals."
              },
              { 
                icon: LineChart, 
                title: "Productivity", 
                desc: "Studies show hybrid models lead to higher focus and output across all departments."
              },
              { 
                icon: ShieldCheck, 
                title: "Resilience", 
                desc: "Insulate your business from disruptions with a decentralized workforce strategy."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100/50 hover:-translate-y-2 transition-transform duration-500">
                <div className="w-14 h-14 bg-[#fbf7f2] rounded-2xl flex items-center justify-center text-[#d4a574] mb-8">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#4b3624] mb-4">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blueprint Grid */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#4b3624] tracking-tight leading-tight">
                The Hybrid <br />
                <span className="text-[#d4a574]">Blueprint.</span>
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Empower remote work", text: "Provide your team with membership access to thousands of drop-in locations globally." },
                  { title: "Right-size your HQ", text: "Optimise your central office space for collaboration rather than just occupancy." },
                  { title: "Unified management", text: "Control all your workspace assets through one single, powerful dashboard." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#d4a574] flex items-center justify-center text-white">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#4b3624] mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="h-14 px-8 rounded-full bg-[#4b3624] hover:bg-[#594d46] text-white font-bold group">
                Download Strategy Guide <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#d4a574]/10 rounded-full blur-3xl" />
              <div className="bg-[#fbf7f2] rounded-[4rem] p-4 shadow-2xl relative">
                <div className="relative aspect-square rounded-[3.5rem] overflow-hidden group">
                  <Image src="/global_workspace_hero.png" alt="Collaborative Office" fill className="object-cover group-hover:scale-105 transition-transform duration-[2s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4b3624]/80 to-transparent flex items-end p-12">
                    <div className="text-white">
                      <div className="flex items-center gap-3 mb-4">
                        <Monitor className="w-8 h-8 text-[#d4a574]" />
                        <div className="text-3xl font-bold tracking-tight text-white italic">Streamline <span className="text-[#d4a574]">OS</span></div>
                      </div>
                      <p className="text-gray-300 font-medium">The operating system for the hybrid world.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#4b3624] text-center text-white relative">
        <div className="container relative z-10 px-4">
          <div className="max-w-2xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Ready to modernise?</h2>
            <p className="text-xl text-gray-300">Join over 83% of the world's leading companies who have already switched to a hybrid model.</p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button className="h-20 px-12 bg-white hover:bg-[#fbf7f2] text-[#4b3624] font-black rounded-full text-xl shadow-2xl transition-all hover:scale-105">
                  START YOUR TRANSITION
                </Button>
              </Link>
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Free initial consultation for enterprise teams.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
