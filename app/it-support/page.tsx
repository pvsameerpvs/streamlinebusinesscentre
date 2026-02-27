"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Headset, 
  Wifi, 
  ShieldCheck, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  Monitor,
  Cpu,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ITSupportPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/office-tab9.jpg" 
          alt="IT Support Systems"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Enterprise-Grade IT <br className="hidden md:block" /> Every Step of the Way
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed">
              Stay connected and secure with our professional IT support teams. From high-speed connectivity 
              to on-site troubleshooting, we provide the tech foundation you need to thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#d4a574] hover:bg-[#b08963] text-white px-8 py-6 text-lg rounded-full">
                  Get Support
                </Button>
              </Link>
              <div className="flex flex-col items-center sm:items-start text-sm">
                <span className="text-gray-300">Available 24/7 globally</span>
                <a href="tel:+971505229908" className="font-bold text-white hover:text-[#d4a574] transition-colors">
                  +971 505229908
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8">Comprehensive Tech Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            Our centers are built on a high-performance infrastructure, backed by expert support to ensure 
            your business never skips a beat.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Business Wi-Fi", icon: Wifi, desc: "Symmetrical, high-speed connectivity with failover redundancy." },
              { title: "Cyber Security", icon: ShieldCheck, desc: "Secure networks and firewall protection for every member." },
              { title: "On-site Tech Help", icon: Headset, desc: "Direct access to tech specialists for hardware & software issues." },
              { title: "Virtual IT Teams", icon: Globe, desc: "Remote management and setup for scaling teams." },
              { title: "Network Monitoring", icon: Zap, desc: "Proactive 24/7 monitoring to prevent downtime." },
              { title: "Hardware Rentals", icon: Monitor, desc: "Access to laptops, monitors, and peripherals when needed." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-8 text-[#d4a574] group-hover:bg-[#d4a574] group-hover:text-white transition-colors">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-[#4b3624] mb-4">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Setup Content */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/virtual-offices4.jpeg" alt="Server Room" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8 leading-tight">
                 Customized Tech <br /> Infrastructure
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                 Every business has unique requirements. We provide bespoke IT setups for private office clients, 
                 ensuring your team has the exact tools and security protocols it needs.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  "Dedicated VLAN and private bandwidth options",
                  "Static IP addresses and custom VOIP setups",
                  "Secure hardware storage in data racks",
                  "Compliant data handling and infrastructure"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#d4a574]" />
                    <span className="font-semibold text-[#4b3624]">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <Button size="lg" className="bg-[#4b3624] text-white rounded-full px-12 h-16 shadow-xl group">
                   Discuss Tech Setup <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#4b3624] text-white text-center">
         <div className="container px-4 max-w-4xl mx-auto">
            <Cpu className="w-12 h-12 text-[#d4a574] mx-auto mb-8 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Stay Online. Stay Ahead.</h2>
            <p className="text-xl text-gray-300 mb-12">
               Trust your business to our world-class infrastructure. Connected, secure, and ready for work.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#d4a574] text-white hover:bg-[#b58b61] rounded-full px-12 h-16 text-lg">
                    View IT Packages
                  </Button>
                </Link>
               <a href="tel:+971505229908" className="bg-white/10 hover:bg-white/20 border border-white/20 px-12 h-16 rounded-full flex items-center justify-center font-bold transition-colors">
                  Contact Support
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}
