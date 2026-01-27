"use client";

import Image from "next/image";
import { 
  Coffee, 
  Wifi, 
  Users, 
  Globe, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Armchair,
  Zap,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BusinessLoungePage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/office-tab3.jpeg" 
          alt="Premium Business Lounge"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              A Professional Space <br className="hidden md:block" /> for Drop-In Work
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed">
              Step into a calm, professional business lounge designed for efficiency and casual collaboration. 
              The perfect place to work between meetings or while travelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#d4a574] hover:bg-[#b08963] text-white px-8 py-6 text-lg rounded-full">
                Learn more
              </Button>
              <div className="flex flex-col items-center sm:items-start text-sm">
                <span className="text-gray-300">Open globally for members</span>
                <a href="tel:+971505229908" className="font-bold text-white hover:text-[#d4a574] transition-colors">
                  +971 505229908
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-6">Designed for Productivity</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our lounges offer a high-quality alternative to working in a coffee shop or hotel—professional, secure, and fully equipped.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Business Wi-Fi", icon: Wifi, desc: "Fast, reliable, and secure connectivity." },
              { title: "Barista Coffee", icon: Coffee, desc: "Complimentary premium coffee and tea." },
              { title: "Global Access", icon: Globe, desc: "Entry to thousands of lounges worldwide." },
              { title: "On-site Support", icon: Users, desc: "Professional teams to assist you." }
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

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8 leading-tight">
                 A Flexible Base <br /> for Your Day
              </h2>
              <div className="space-y-6 mb-12">
                {[
                  { title: "Comfortable Seating", icon: Armchair, desc: "Ergonomic armchairs and quiet breakout zones." },
                  { title: "Quiet Environments", icon: Zap, desc: "A calm atmosphere away from the hustle of public spaces." },
                  { title: "Bookable Day Offices", icon: Briefcase, desc: "Private space available on-demand if you need it." },
                  { title: "Secure Surroundings", icon: Users, desc: "Professionally managed and monitored environments." }
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
              <Button size="lg" className="bg-[#4b3624] text-white rounded-full px-12 h-16 shadow-xl group">
                 Explore Membership <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/office-tab1.jpg" alt="Lounge Interior" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#4b3624] text-white text-center">
         <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Work From Anywhere.</h2>
            <p className="text-xl text-gray-300 mb-12">
               Access our global network of business lounges and start working efficiently on the move.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Button size="lg" className="bg-[#d4a574] text-white hover:bg-[#b58b61] rounded-full px-12 h-16 text-lg">
                  Get Started
               </Button>
               <a href="tel:+971505229908" className="bg-white/10 hover:bg-white/20 border border-white/20 px-12 h-16 rounded-full flex items-center justify-center font-bold transition-colors">
                  Contact Support
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}
