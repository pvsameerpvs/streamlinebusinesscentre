"use client";

import Image from "next/image";
import { 
  Phone, 
  ShieldCheck, 
  Volume2, 
  Zap, 
  Briefcase, 
  MessageSquare,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceNav } from "@/components/service-nav";

export default function PhoneBoothsPage() {
  return (
    <div className="bg-white min-h-screen">
      <ServiceNav />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/office-5.jpeg" 
          alt="Modern Phone Booths"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Privacy When You <br className="hidden md:block" /> Need It Most
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed">
              Step into our acoustic-protected phone booths for private calls, video meetings, and high-focus tasks. 
              Engineered for silence and comfort in the heart of our vibrant workspaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#d4a574] hover:bg-[#b08963] text-white px-8 py-6 text-lg rounded-full">
                Learn more
              </Button>
              <div className="flex flex-col items-center sm:items-start text-sm">
                <span className="text-gray-300">Available at all global centers</span>
                <a href="tel:+971505229908" className="font-bold text-white hover:text-[#d4a574] transition-colors">
                  +971 505229908
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Content */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8">Crystal Clear Conversations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            Our phone booths provide a quiet sanctuary in a bustling coworking environment. Designed with advanced 
            sound-absorbing materials and integrated technology.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#d4a574] transition-colors">
                <Volume2 className="w-8 h-8 text-[#d4a574] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Acoustic Guard</h3>
              <p className="text-gray-500 text-sm">Superior soundproofing keeps your conversations private and external noise out.</p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#d4a574] transition-colors">
                <Zap className="w-8 h-8 text-[#d4a574] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Integrated Tech</h3>
              <p className="text-gray-500 text-sm">Equipped with power outlets, ventilation, and ergonomic seating.</p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#d4a574] transition-colors">
                <ShieldCheck className="w-8 h-8 text-[#d4a574] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Secure & Private</h3>
              <p className="text-gray-500 text-sm">The perfect space for confidential client calls and high-focus tasks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/office-6.jpeg" alt="Phone Booth Detail" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8 leading-tight">
                 Work Better With <br /> Dedicated Privacy
              </h2>
              <div className="space-y-6 mb-10">
                {[
                  { title: "On-demand usage", desc: "Available for quick calls or scheduled sessions." },
                  { title: "Ventilation systems", desc: "Keep fresh and focused with integrated air circulation." },
                  { title: "Ergonomic furniture", desc: "Designed for comfort during longer video calls." },
                  { title: "Easy access", desc: "Strategically placed throughout our coworking areas." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#d4a574]/10 flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4 text-[#d4a574]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#4b3624]">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-[#4b3624] text-white rounded-full px-10 h-16 shadow-xl group">
                 Book a Center <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#4b3624] text-white text-center">
         <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Silence in the City.</h2>
            <p className="text-xl text-gray-300 mb-12">
               Find your quiet space at any of our global locations. Available to all members and day-pass holders.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Button size="lg" className="bg-[#d4a574] text-white hover:bg-[#b58b61] rounded-full px-12 h-16 text-lg">
                  Join Membership
               </Button>
               <a href="tel:+971505229908" className="bg-white/10 hover:bg-white/20 border border-white/20 px-12 h-16 rounded-full flex items-center justify-center font-bold transition-colors">
                  Enquire now
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}
