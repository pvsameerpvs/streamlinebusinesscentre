"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Package, 
  Lock, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ClipboardList,
  Archive,
  Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StorageSolutionsPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/office-7.jpeg" 
          alt="Secure Storage Solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Professional Storage for <br className="hidden md:block" /> Your Business Assets
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed">
              Clean, secure, and accessible storage options within our global centers. Ideal for office furniture, 
              archive documents, and marketing materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#d4a574] hover:bg-[#b08963] text-white px-8 py-6 text-lg rounded-full">
                  Get a Quote
                </Button>
              </Link>
              <div className="flex flex-col items-center sm:items-start text-sm">
                <span className="text-gray-300">Flexible space as you grow</span>
                <a href="tel:+971505229908" className="font-bold text-white hover:text-[#d4a574] transition-colors">
                  +971 505229908
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-6">Space for Everything</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our storage solutions are designed to fit the unique needs of scaling businesses and remote teams.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Personal Lockers", icon: Lock, desc: "Individual secure storage perfect for coworking members." },
              { title: "Archive Storage", icon: Archive, desc: "Secure environment for physical records and documentation." },
              { title: "Inventory Spaces", icon: Package, desc: "Larger units for stock and marketing material storage." },
              { title: "Tech Storage", icon: ShieldCheck, desc: "Specific secure zones for hardware and IT equipment." },
              { title: "Inventory Management", icon: ClipboardList, desc: "Administrative help with receiving and logging stock." },
              { title: "Flexible Access", icon: Clock, desc: "Access your items during business hours or as scheduled." }
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

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8 leading-tight">
                 Scale Your Space, <br /> Minimize the Cost
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                 Don't let physical assets clutter your productive workspace. Our on-site storage solutions 
                 allow you to keep what you need close by without paying for extra office square footage.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  "Competitive, pay-for-what-you-use pricing",
                  "Climate-controlled, clean environments",
                  "24/7 security monitoring for absolute peace of mind",
                  "Consolidate your storage across multiple locations"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#d4a574]" />
                    <span className="font-semibold text-[#4b3624]">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <Button size="lg" className="bg-[#4b3624] text-white rounded-full px-12 h-16 shadow-xl group">
                   Enquire Details <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/office-tab8.jpeg" alt="Storage Center" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#4b3624] text-white text-center">
         <div className="container px-4 max-w-4xl mx-auto">
            <Truck className="w-12 h-12 text-[#d4a574] mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Your Assets, Protected.</h2>
            <p className="text-xl text-gray-300 mb-12">
               Connect with our on-site team today to discuss your storage requirements and receive a bespoke quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#d4a574] text-white hover:bg-[#b58b61] rounded-full px-12 h-16 text-lg">
                    Get a Quote
                  </Button>
                </Link>
               <a href="tel:+971505229908" className="bg-white/10 hover:bg-white/20 border border-white/20 px-12 h-16 rounded-full flex items-center justify-center font-bold transition-colors">
                  Call Support
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}
