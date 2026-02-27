"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Clock, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  Wifi,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DayOfficesPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/office-2.jpeg"
          alt="Day Office Space"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Private Offices <br className="hidden md:block" /> by the Day
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed">
              Quiet, professional, and fully equipped private office space available when you need it. 
              Book by the hour or day with no long-term commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#d4a574] hover:bg-[#b08963] text-white px-8 py-6 text-lg rounded-full">
                  Book for Today
                </Button>
              </Link>
              <div className="flex flex-col items-center sm:items-start text-sm">
                <span className="text-gray-300">Instant on-demand booking</span>
                <a href="tel:+971505229908" className="font-bold text-white hover:text-[#d4a574] transition-colors">
                  +971 505229908
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to use section */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8">Professional Privacy, Instantly</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            Whether you&apos;re travelling for business or simply need a quiet space to focus for the afternoon, 
            our day offices provide a fully serviced, professional environment.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "No Committment", icon: Clock, desc: "Only pay for the time you need, by hour or day." },
              { title: "Fully Equipped", icon: Settings, desc: "Ergonomic furniture and all the office essentials." },
              { title: "Business Wi-Fi", icon: Wifi, desc: "Reliable and secure business-grade network." },
              { title: "Global Network", icon: Globe, desc: "Available at thousands of locations worldwide." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-[#d4a574]/30">
                <div className="w-14 h-14 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-8 text-[#d4a574]">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-[#4b3624] mb-4">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/office-3.jpeg" alt="Day Office Interior" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8 leading-tight">
                 A Flexible Base <br /> for Your Projects
              </h2>
              <div className="space-y-6 mb-12">
                {[
                  "Quiet, private space for deep focus work",
                  "Professional environment for client meetings",
                  "Perfect for remote teams needing a physical base",
                  "Include reception and mail support on demand"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#d4a574]" />
                    <span className="font-semibold text-[#4b3624]">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <Button size="lg" className="bg-[#4b3624] text-white rounded-full px-12 h-16 shadow-xl group">
                   Book Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#4b3624] text-white text-center">
         <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Ready When You Are.</h2>
            <p className="text-xl text-gray-300 mb-12">
               Download our app to see real-time availability and book your next day office in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Link href="/contact">
                 <Button size="lg" className="bg-[#d4a574] text-white hover:bg-[#b58b61] rounded-full px-12 h-16 text-lg">
                    Get Started
                 </Button>
               </Link>
               <a href="tel:+971505229908" className="bg-white/10 hover:bg-white/20 border border-white/20 px-12 h-16 rounded-full flex items-center justify-center font-bold transition-colors">
                  Talk to Support
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}
