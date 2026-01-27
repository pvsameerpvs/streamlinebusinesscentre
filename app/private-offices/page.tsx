"use client";

import Image from "next/image";
import { 
  Shield, 
  Settings, 
  Maximize, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Phone,
  MessageSquare,
  Building2,
  Lock,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceNav } from "@/components/service-nav";

export default function PrivateOfficesPage() {
  return (
    <div className="bg-white min-h-screen">
      <ServiceNav />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/office-1.jpeg"
          alt="Premium Private Office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Your Own Private Office, <br className="hidden md:block" /> Built for Focus
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed">
              Experience the perfect balance of privacy and community. Our private offices are fully furnished, 
              customisable, and ready for you to move in today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#d4a574] hover:bg-[#b08963] text-white px-8 py-6 text-lg rounded-full">
                Get a Quote
              </Button>
              <div className="flex flex-col items-center sm:items-start text-sm">
                <span className="text-gray-300">Talk to our office experts</span>
                <a href="tel:+971505229908" className="font-bold text-white hover:text-[#d4a574] transition-colors">
                  +971 505229908
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Private Office? */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8">Why Choose a Private Office?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            Move into a space that reflects your brand. Our private offices provide a secure, professional environment 
            where you can focus on growing your business while we handle the rest.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#d4a574] transition-colors">
                <Lock className="w-8 h-8 text-[#d4a574] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Total Privacy</h3>
              <p className="text-gray-500 text-sm">Quiet, secure workspace for you and your team to work without distractions.</p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#d4a574] transition-colors">
                <Settings className="w-8 h-8 text-[#d4a574] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Customisable</h3>
              <p className="text-gray-500 text-sm">Add your own branding and choose a layout that fits your workflow perfectly.</p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#d4a574] transition-colors">
                <Maximize className="w-8 h-8 text-[#d4a574] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Flexible Terms</h3>
              <p className="text-gray-500 text-sm">Scale your space up or down as your team grows, with easy monthly contracts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8 leading-tight">
                Everything Included <br /> in One Monthly Price
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Fully Furnished", desc: "Ergonomic furniture ready from day one." },
                  { title: "Business-Grade Wi-Fi", icon: Globe, desc: "Fast, secure, and reliable connectivity." },
                  { title: "On-site Support", icon: Users, desc: "Friendly reception and administrative teams." },
                  { title: "Global Access", icon: Globe, desc: "Use our lounges and coworking spaces worldwide." }
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
              <Button size="lg" className="mt-12 bg-[#4b3624] text-white rounded-full px-10 h-16 shadow-xl">
                 Enquire today
              </Button>
            </div>
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/office-2.jpeg" alt="Private Office Interior" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Guidance CTA */}
      <section className="py-24 bg-[#4b3624] text-white">
        <div className="container px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Find Your New Office?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Our workspace advisors are available to help you find the right private office space at the best possible price.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
               <a href="tel:+971505229908" className="text-3xl md:text-4xl font-bold text-[#d4a574] hover:text-white transition-colors">
                  +971 505229908
               </a>
               <Button size="lg" className="bg-[#d4a574] text-white hover:bg-[#b58b61] rounded-full px-12 h-16 text-lg">
                  Talk to an expert
               </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
