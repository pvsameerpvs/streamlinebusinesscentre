"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  CreditCard, 
  Globe, 
  Users, 
  Building2, 
  Coffee, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare,
  Zap,
  Layout,
  Star,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MembershipPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/office-tab1.jpg"
          alt="Premium Membership Workspace"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container px-4 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                Memberships That <br /> Work Around You
              </h1>
              <p className="text-lg md:text-xl mb-10 text-gray-200 leading-relaxed max-w-2xl">
                Our membership plans are designed for total flexibility, giving you access to workspaces whenever and wherever you need them. 
                Book coworking desks, private offices, or business lounges at centres around the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#d4a574] hover:bg-[#b08963] text-white px-8 py-6 text-lg rounded-full shadow-lg">
                    Enquire now
                  </Button>
                </Link>
                <div className="flex flex-col items-center sm:items-start text-sm">
                  <span className="text-gray-300">Speak with our team at</span>
                  <a href="tel:+971505229908" className="font-bold text-white hover:text-[#d4a574] transition-colors">
                    +971 505229908
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Selection Section */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-[#4b3624] text-sm font-medium mb-8">
            <Star className="w-4 h-4 text-[#d4a574]" />
            <span>One Membership. Endless Possibilities.</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-6">Choose Your Package</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 underline decoration-[#d4a574] decoration-2 underline-offset-8">
            Access lounges, coworking spaces, and private offices by the day, or choose a monthly plan with 5, 10, or unlimited days.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Lounge Access */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-2xl transition-all duration-500">
              <div className="w-14 h-14 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#d4a574] transition-colors duration-300">
                <Coffee className="w-7 h-7 text-[#4b3624] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Lounge Access</h3>
              <p className="text-gray-600 mb-6 flex-grow text-sm">
                Drop in and work whenever you need a professional place to focus. World&apos;s largest network.
              </p>
                <Link href="/business-lounge">
                  <Button variant="outline" className="w-full border-[#d4a574] text-[#d4a574] rounded-xl hover:bg-[#d4a574] hover:text-white">
                    Explore Lounge Packages
                  </Button>
                </Link>
            </div>

            {/* Coworking Access */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-2xl transition-all duration-500">
              <div className="w-14 h-14 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#d4a574] transition-colors duration-300">
                <Users className="w-7 h-7 text-[#4b3624] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Coworking Access</h3>
              <p className="text-gray-600 mb-6 flex-grow text-sm">
                Work alongside a vibrant community. Entry to thousands of inspiring coworking spaces.
              </p>
                <Link href="/coworking">
                  <Button variant="outline" className="w-full border-[#d4a574] text-[#d4a574] rounded-xl hover:bg-[#d4a574] hover:text-white">
                    Explore Coworking Packages
                  </Button>
                </Link>
            </div>

            {/* Office Access */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-2xl transition-all duration-500">
              <div className="w-14 h-14 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#d4a574] transition-colors duration-300">
                <Building2 className="w-7 h-7 text-[#4b3624] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Office Access</h3>
              <p className="text-gray-600 mb-6 flex-grow text-sm">
                Private workspace on demand. Fully equipped offices available when you need privacy.
              </p>
                <Link href="/office-space">
                  <Button variant="outline" className="w-full border-[#d4a574] text-[#d4a574] rounded-xl hover:bg-[#d4a574] hover:text-white">
                    Explore Office Packages
                  </Button>
                </Link>
            </div>

            {/* Enterprise Solutions */}
            <div className="bg-[#4b3624] p-8 rounded-[2rem] shadow-lg flex flex-col h-full text-white group hover:scale-[1.02] transition-all duration-500">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Layout className="w-7 h-7 text-[#d4a574]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Enterprise Solutions</h3>
              <p className="text-gray-300 mb-6 flex-grow text-sm">
                Custom-built packages for organizations. Cost-effective access to global workspace network.
              </p>
                <Link href="/contact">
                  <Button className="w-full bg-[#d4a574] text-white rounded-xl hover:bg-[#c39665]">
                    Talk to an expert
                  </Button>
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-4">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8 leading-tight">
                Workspace, Wherever <br /> Your Day Takes You
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                With a single membership, you can work from thousands of locations worldwide. Reserve a private day office or hot-desk in open-plan spaces whenever needed.
              </p>
              <div className="flex flex-col gap-6 mb-12">
                {[
                  "Pay-as-you-go for absolute freedom",
                  "Discounted monthly plans (5, 10, or unlimited days)",
                  "Access to premium business lounges globally",
                  "Consistent professional environment everywhere"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#d4a574]" />
                    <span className="font-semibold text-[#4b3624]">{item}</span>
                  </div>
                ))}
              </div>
               <Link href="/contact">
                 <Button size="lg" className="bg-[#4b3624] text-white rounded-full px-12 h-16 shadow-xl">
                   Enquire now
                 </Button>
               </Link>
            </div>
            <div className="lg:col-span-7 relative">
              <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl skew-y-1">
                <Image src="/office-tab3.jpeg" alt="Global Workspace" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#d4a574] p-10 rounded-[2.5rem] text-white shadow-2xl hidden md:block">
                <div className="text-5xl font-bold mb-2">4,000+</div>
                <div className="text-sm font-medium uppercase tracking-[0.2em]">Global Full Centres</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-6">Everything You Need — And More</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Membership gives you more than just workspace access. Enjoy exclusive benefits designed to support your growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Global Network", icon: Globe, desc: "Seamless entry to centres across our worldwide network." },
              { title: "Preferred Rates", icon: Zap, desc: "Exclusive rates with leading health and lifestyle partners." },
              { title: "Business Discounts", icon: CreditCard, desc: "Discounts on essential services from international providers." },
              { title: "Regus Express", icon: Clock, desc: "Access hubs in major airports and transport stations." },
              { title: "Community Events", icon: Users, desc: "Invitations to professional networking and local events." },
              { title: "Expert Support", icon: MessageSquare, desc: "Dedicated on-site teams to assist with your daily needs." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#d4a574]/20">
                 <div className="w-14 h-14 rounded-2xl bg-[#fbf7f2] flex items-center justify-center text-[#d4a574] mb-8">
                    <item.icon className="w-7 h-7" />
                 </div>
                 <h4 className="text-xl font-bold text-[#4b3624] mb-4">{item.title}</h4>
                 <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="bg-[#4b3624] rounded-[4rem] px-10 py-20 md:p-24 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
             <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                <div>
                   <h2 className="text-3xl md:text-5xl font-bold mb-8">Manage Your Workspace <br className="hidden md:block" /> on the Go</h2>
                   <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                     Book desks, offices, and lounges instantly using our app. Manage your business presence with just a few taps.
                   </p>
                   <div className="space-y-8 mb-12">
                      {[
                        { title: "Real-time Availability", desc: "View instantly what's open near you." },
                        { title: "On-the-day Reservations", desc: "Last-minute booking? No problem." },
                        { title: "Full Account Management", desc: "Payments, bookings, and more in one place." }
                      ].map((benefit, i) => (
                        <div key={i} className="flex gap-5">
                           <div className="w-10 h-10 rounded-full bg-[#d4a574] flex-shrink-0 flex items-center justify-center text-xl font-bold">
                              {i + 1}
                           </div>
                           <div>
                              <h4 className="text-xl font-bold mb-1">{benefit.title}</h4>
                              <p className="text-gray-400 text-sm">{benefit.desc}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                    <Link href="/contact">
                      <Button size="lg" className="bg-white text-[#4b3624] hover:bg-gray-100 rounded-2xl px-10 h-16 font-bold shadow-2xl flex gap-3">
                        <Download className="w-5 h-5" /> Download the app
                      </Button>
                    </Link>
                </div>
                <div className="relative">
                   <div className="relative h-[600px] w-full rounded-t-[3rem] overflow-hidden border-x-[12px] border-t-[12px] border-white/10 shadow-3xl">
                      <Image src="/office-tab4.jpg" alt="App interface" fill className="object-cover" />
                   </div>
                   <Smartphone className="absolute -bottom-10 -right-10 w-40 h-40 text-[#d4a574] opacity-20 rotate-12" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Enterprise / Hybrid Section */}
      <section className="py-24 bg-white">
        <div className="container px-4">
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                 <Image src="/office-tab5.jpg" alt="Hybrid teams" fill className="object-cover" />
              </div>
              <div>
                 <h2 className="text-3xl md:text-4xl font-bold text-[#4b3624] mb-8 leading-tight">
                    Flexible Working With <br /> Real Results
                 </h2>
                 <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Giving teams the freedom to choose where they work leads to better focus, engagement, and performance. 
                    Our Enterprise Packages support hybrid working strategies with expert advice.
                 </p>
                  <Link href="/contact">
                    <Button className="bg-[#4b3624] text-white rounded-full px-8 py-6 h-14 flex gap-2 group">
                      Talk to an expert <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
              </div>
           </div>
        </div>
      </section>

      {/* Trust Marks */}
      <section className="py-20 border-y border-gray-100">
        <div className="container px-4 text-center">
           <h2 className="text-sm font-bold opacity-50 uppercase tracking-[0.3em] mb-12">Trusted by Leading Global Brands</h2>
           <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 opacity-30 grayscale contrast-125">
              {["Microsoft", "Google", "HSBC", "PayPal", "Samsung", "Spotify", "Uber", "FedEx", "BlackRock", "Slack", "McAfee"].map(brand => (
                <span key={brand} className="text-xl md:text-2xl font-black tracking-tighter">{brand}</span>
              ))}
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
         <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8">Have Questions About Membership?</h2>
            <p className="text-xl text-gray-600 mb-12">
               Our team is here to help you find the best plan for your business needs. 
               Tailored recommendations and pricing available instantly.
            </p>
            <div className="flex flex-col gap-3 mb-12">
               <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Call our specialists directly</p>
               <a href="tel:+971505229908" className="text-4xl md:text-6xl font-black text-[#4b3624] hover:text-[#d4a574] transition-colors">
                  +971 505229908
               </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                   <Button size="lg" className="bg-[#4b3624] text-white hover:bg-[#3d2c1d] rounded-full px-12 py-7 text-lg shadow-xl">
                      Enquire now
                   </Button>
                </Link>
                <Link href="/contact">
                   <Button size="lg" variant="outline" className="border-[#4b3624] text-[#4b3624] rounded-full px-12 py-7 text-lg">
                      View All Packages
                   </Button>
                </Link>
            </div>
         </div>
      </section>
    </div>
  );
}

// Clock icon check if version differs
const Clock = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
