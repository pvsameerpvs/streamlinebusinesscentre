"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  Users, 
  Monitor, 
  Presentation, 
  IdCard, 
  MapPin, 
  Phone, 
  CalendarDays,
  ArrowRight,
  ShieldCheck,
  Zap,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "Office Space",
    desc: "Private, fully-equipped offices for teams of all sizes.",
    icon: Building2,
    href: "/office-space",
    image: "/office-tab4.jpg"
  },
  {
    title: "Coworking",
    desc: "Flexible desking in a shared, professional environment.",
    icon: Users,
    href: "/coworking",
    image: "/office-tab7.jpg"
  },
  {
    title: "Virtual Offices",
    desc: "A prestigious business address and communication services.",
    icon: Monitor,
    href: "/virtual-offices",
    image: "/office-tab3.jpeg"
  },
  {
    title: "Meeting Rooms",
    desc: "Professional spaces for interviews, pitches, and workshops.",
    icon: Presentation,
    href: "/meeting-spaces",
    image: "/office-2.jpeg"
  },
  {
    title: "Membership",
    desc: "On-demand access to our global network of lounges.",
    icon: IdCard,
    href: "/membership",
    image: "/office-5.jpeg"
  },
  {
    title: "Custom Offices",
    desc: "A workspace built entirely around your brand and vision.",
    icon: Building2,
    href: "/custom-offices",
    image: "/office-tab9.jpg"
  }
];

export default function ProductsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#4b3624] py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <Image src="/global_workspace_hero.png" alt="Products" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4b3624] to-transparent" />
        </div>
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-tight">
              Solutions for <br />
              <span className="text-[#d4a574]">every ambition.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              From a single desk to a whole building. Explore our range of premium workspace products designed for the modern business.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, i) => (
              <div key={i} className="group bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <Image src={product.image} alt={product.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#d4a574] shadow-xl">
                    <product.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-[#4b3624] mb-4 group-hover:text-[#d4a574] transition-colors">{product.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">{product.desc}</p>
                  <Link href={product.href} className="mt-auto">
                    <Button variant="ghost" className="p-0 text-[#d4a574] font-bold text-sm tracking-widest uppercase flex items-center gap-2 group/btn">
                      Explore {product.title} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-bold text-[#4b3624] tracking-tight">The Streamline <span className="text-[#d4a574]">Standard.</span></h2>
              <p className="text-lg text-gray-500 leading-relaxed">Regardless of which product you choose, you receive consistent world-class service and amenities across our entire network.</p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: Zap, title: "High-Speed WiFi", desc: "Enterprise-grade connectivity everywhere." },
                  { icon: ShieldCheck, title: "Global Security", desc: "24/7 monitoring and secure access." },
                  { icon: Star, title: "Premium Perks", desc: "Access to lounges and partner rewards." },
                  { icon: Phone, title: "Support Team", desc: "Dedicated on-site assistance daily." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-[#fbf7f2] rounded-xl flex items-center justify-center text-[#d4a574] flex-shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#4b3624] mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
              <Image src="/office-1.jpeg" alt="Standard" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#4b3624] text-center text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Need a tailored plan?</h2>
            <p className="text-xl text-gray-300">Our workspace consultants are ready to help you build the perfect package for your business.</p>
            <Link href="/contact" className="inline-block">
              <Button className="h-20 px-12 bg-[#d4a574] hover:bg-[#b08963] text-white font-black rounded-full text-xl shadow-2xl transition-all hover:scale-105">
                TALK TO AN EXPERT
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
