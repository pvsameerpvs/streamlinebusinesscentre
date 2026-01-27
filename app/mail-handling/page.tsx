"use client";

import Image from "next/image";
import { 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  Send,
  Smartphone,
  ScanText
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MailHandlingPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/virtual-offices1.jpeg"
          alt="Secure Mail Handling"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Secure Mail Handling <br className="hidden md:block" /> Solutions
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed">
              Never miss an important delivery. Our professional teams manage your mail and packages with 
              absolute security, providing forwarding and digital scanning options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#d4a574] hover:bg-[#b08963] text-white px-8 py-6 text-lg rounded-full">
                Get Started
              </Button>
              <div className="flex flex-col items-center sm:items-start text-sm">
                <span className="text-gray-300">Managed in 4,000+ locations</span>
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
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-6">Complete Mail Management</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From business-address only to full digital mailrooms, choose the level of service that fits your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Secure Receipt", icon: ShieldCheck, desc: "All mail and packages received and signed for securely." },
              { title: "Collection", icon: MapPin, desc: "Collect your mail from your chosen business center." },
              { title: "Forwarding", icon: Send, desc: "We can forward your mail anywhere in the world daily or weekly." },
              { title: "Scan to Email", icon: ScanText, desc: "Receive digital copies of your mail instantly via our scan service." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-[#d4a574]/30">
                <div className="w-12 h-12 bg-[#fbf7f2] rounded-xl flex items-center justify-center mb-6 text-[#d4a574]">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[#4b3624] mb-4">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Address Section */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8 leading-tight">
                 Your Business <br /> Always Connected
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                 Use a prestigious business address for all your official correspondence. Our teams provide a 
                 consistent, professional foundation for your brand.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  "Prestigious global business address options",
                  "Protect your home address and privacy",
                  "Manage all your mail via our mobile app",
                  "Flexible plans starting from a single location"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#d4a574]" />
                    <span className="font-semibold text-[#4b3624]">{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-[#4b3624] text-white rounded-full px-12 h-16 shadow-xl group">
                 View Address Options <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/reception-services3.jpeg" alt="Mail Center" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#4b3624] text-white text-center">
         <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Reliable. Secure. Global.</h2>
            <p className="text-xl text-gray-300 mb-12">
               Connect with an expert to set up your professional business address and mail handling service today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Button size="lg" className="bg-[#d4a574] text-white hover:bg-[#b58b61] rounded-full px-12 h-16 text-lg">
                  Browse Locations
               </Button>
               <a href="tel:+971505229908" className="bg-white/10 hover:bg-white/20 border border-white/20 px-12 h-16 rounded-full flex items-center justify-center font-bold transition-colors">
                  Call to Enquire
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}
