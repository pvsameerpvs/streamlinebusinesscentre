"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  Users, 
  MapPin, 
  Globe, 
  Rocket, 
  Heart,
  ArrowRight,
  PlayCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DiscoverPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Immersive Hero */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/office-tab4.jpg" alt="Discover" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl space-y-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur text-white text-xs font-bold uppercase tracking-[0.2em]">
              <Rocket className="w-4 h-4 text-[#d4a574]" />
              <span>Explore Streamline</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none">
              A World of <br />
              <span className="text-[#d4a574]">Workspace.</span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-2xl font-medium">
              We&apos;re building the infrastructure for the future of work. Discover how Streamline is transforming the global business landscape.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <Link href="/about">
                <Button className="h-20 px-12 bg-[#d4a574] hover:bg-[#b08963] text-white font-black rounded-full text-xl shadow-2xl transition-all hover:scale-105">
                  OUR STORY
                </Button>
              </Link>
              <Link href="/magazine">
                <Button variant="outline" className="rounded-full border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-white h-20 px-12 text-xl font-black shadow-2xl transition-all hover:scale-105">
                  VIEW ALL CATEGORIES
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" className="flex items-center gap-4 text-white font-bold group h-20 px-12 text-xl shadow-2xl transition-all hover:scale-105">
                  <PlayCircle className="w-16 h-16 text-[#d4a574] group-hover:scale-110 transition-transform" />
                  <span className="text-xl tracking-wide uppercase">WATCH VISION</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Portals */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Locations", desc: "Browse our 4,000+ business centres worldwide.", href: "/locations", icon: MapPin },
              { title: "Products", desc: "Find the perfect workspace solution for your team.", href: "/products", icon: Building2 },
              { title: "Magazine", desc: "Read the latest insights from our editorial team.", href: "/magazine", icon: Globe },
              { title: "Hybrid Work", desc: "Learn how we empower distributed workforces.", href: "/hybrid", icon: Users },
              { title: "Download App", desc: "Manage your office life from your smartphone.", href: "/contact", icon: Rocket },
              { title: "Get in Touch", desc: "Speak with a workspace consultant today.", href: "/contact", icon: Heart }
            ].map((portal, i) => (
              <Link key={i} href={portal.href} className="group h-full">
                <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-gray-100 h-full flex flex-col hover:-translate-y-4 transition-all duration-700">
                  <div className="w-16 h-16 bg-[#fbf7f2] rounded-3xl flex items-center justify-center text-[#d4a574] mb-10 group-hover:bg-[#4b3624] group-hover:text-white transition-all duration-500">
                    <portal.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#4b3624] mb-6 tracking-tight">{portal.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed mb-8">{portal.desc}</p>
                  <div className="mt-auto flex items-center gap-2 text-[#d4a574] font-bold group-hover:gap-4 transition-all">
                    <span>Explore Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Overflow */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-4">
          <div className="bg-[#4b3624] rounded-[4rem] p-12 md:p-24 text-white relative">
            <div className="absolute top-0 right-0 w-full h-full opacity-10 blur-3xl bg-gradient-to-br from-[#d4a574] to-transparent" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center text-center lg:text-left">
              <div className="space-y-8">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight">The Network in <br /><span className="text-[#d4a574]">Numbers.</span></h2>
                <p className="text-xl text-gray-300 leading-relaxed">Our scale allows us to provide unmatched flexibility and value to businesses of all sizes, from startups to the Fortune 500.</p>
              </div>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <div className="text-5xl md:text-7xl font-black text-[#d4a574] mb-2">120+</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Countries</div>
                </div>
                <div>
                  <div className="text-5xl md:text-7xl font-black text-[#d4a574] mb-2">8M+</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Customers</div>
                </div>
                <div>
                  <div className="text-5xl md:text-7xl font-black text-[#d4a574] mb-2">4K+</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Locations</div>
                </div>
                <div>
                  <div className="text-5xl md:text-7xl font-black text-[#d4a574] mb-2">24/7</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Live Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
