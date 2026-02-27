"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Briefcase, 
  Lock, 
  Globe, 
  CheckCircle2, 
  Users, 
  Shield, 
  Mail, 
  Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DedicatedDesksPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/office-tab4.jpg"
          alt="Premium Dedicated Desk"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              A Dedicated Desk in a <br className="hidden md:block" /> Professional Community
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed">
              Enjoy the benefits of a shared workspace with the consistency of your own reserved desk. 
              Perfect for individuals and small teams who want a permanent base.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#d4a574] hover:bg-[#b08963] text-white px-8 py-6 text-lg rounded-full shadow-lg">
                  Enquire now
                </Button>
              </Link>
              <div className="flex flex-col items-center sm:items-start text-sm">
                <span className="text-gray-300">Reserved exclusively for you</span>
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
        <div className="container px-4">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8 leading-tight">Consistency Meets <br /> Professionalism</h2>
                 <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    A dedicated desk gives you a reserved spot in a shared office environment. You get the same desk every day, along with a personal locker and 24/7 access at select locations.
                 </p>
                 <div className="space-y-6">
                    {[
                      { title: "Your Own Reserved Desk", desc: "Never worry about finding a spot—it’s yours every day." },
                      { title: "Secure Storage", icon: Lock, desc: "Personal lockers for your equipment and documents." },
                      { title: "Business Address", icon: Building2, desc: "Use a prime business address for your company registration." },
                      { title: "Global Network", icon: Globe, desc: "Access to our business lounges worldwide." }
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
              </div>
              <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
                 <Image src="/office-tab8.jpeg" alt="Dedicated Space" fill className="object-cover" />
              </div>
           </div>
        </div>
      </section>

      {/* Included Services */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-6">Built-in Success</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">All dedicated desk plans include essential services to help you work better.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Professional Support", icon: Users, desc: "On-site teams to assist with your daily needs." },
              { title: "Mail Handling", icon: Mail, desc: "A professional service for all your correspondence." },
              { title: "Meeting Room Access", icon: Briefcase, desc: "Discounted rates on on-demand meeting space." },
              { title: "High-Speed Wi-Fi", icon: Globe, desc: "Fast, reliable, and secure business-grade network." },
              { title: "Security & Cleaning", icon: Shield, desc: "Fully managed environment so you can focus on work." },
              { title: "Community Events", icon: Users, desc: "Networking opportunities with fellow professionals." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-8 rounded-3xl bg-[#fbf7f2] hover:bg-white border border-transparent hover:border-gray-100 transition-all shadow-sm hover:shadow-xl">
                 <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#d4a574] shadow-sm">
                    <item.icon className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-[#4b3624] mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#4b3624] text-white">
         <div className="container px-4 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Your New Base is Waiting.</h2>
            <p className="text-xl text-gray-300 mb-12">
               Connect with a local expert today to find the perfect dedicated desk in your ideal location.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                   <Button size="lg" className="bg-[#d4a574] text-white hover:bg-[#b58b61] rounded-full px-12 h-16 text-lg">
                      Talk to an expert
                   </Button>
                </Link>
                <Link href="/contact">
                   <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4b3624] rounded-full px-12 h-16 text-lg">
                      View pricing
                   </Button>
                </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
