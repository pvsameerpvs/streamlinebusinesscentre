"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Music, 
  Users, 
  Mic2, 
  Presentation, 
  Coffee, 
  Wine, 
  Globe, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare,
  CalendarDays,
  Tv,
  Layout,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EventsPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/office-tab7.jpg"
          alt="Premium Event Space"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Event Spaces Designed <br className="hidden md:block" /> for Real Impact
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed">
              From high-stakes conferences to vibrant networking mixers, our premium event venues provide the perfect backdrop for your most important moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#d4a574] hover:bg-[#b08963] text-white px-8 py-6 text-lg rounded-full shadow-lg">
                Enquire Now
              </Button>
              <div className="flex flex-col items-center sm:items-start text-sm">
                <span className="text-gray-300">Speak with an event specialist</span>
                <a href="tel:+971505229908" className="font-bold text-white hover:text-[#d4a574] transition-colors">
                  +971 505229908
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-[#d4a574] text-sm font-bold mb-8">
              <Star className="w-4 h-4" />
              <span>Tailored Experiences</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-6">Versatile Spaces for Every Event</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from a curated selection of professional environments, each designed to inspire and facilitate connection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Conferences & Seminars */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm group hover:shadow-2xl transition-all duration-500">
              <div className="h-64 relative">
                 <Image src="/meeting-spaces1.jpeg" alt="Conference Room" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-10">
                 <h3 className="text-2xl font-bold text-[#4b3624] mb-4">Conferences & Seminars</h3>
                 <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Host large-scale presentations and leadership summits in spaces equipped with theatre-style seating and premium AV.
                 </p>
                 <ul className="space-y-3 mb-8">
                    {["Theatre & Classroom layouts", "Live streaming capabilities", "Bespoke stage setups"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                         <CheckCircle2 className="w-4 h-4 text-[#d4a574]" /> {item}
                      </li>
                    ))}
                 </ul>
                 <Button variant="outline" className="w-full border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-white rounded-xl">View Details</Button>
              </div>
            </div>

            {/* Networking Mixers */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm group hover:shadow-2xl transition-all duration-500">
              <div className="h-64 relative">
                 <Image src="/co.jpeg" alt="Networking Event" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-10">
                 <h3 className="text-2xl font-bold text-[#4b3624] mb-4">Networking Mixers</h3>
                 <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Modern, open-plan environments perfect for evening social events, product launches, and professional community gatherings.
                 </p>
                 <ul className="space-y-3 mb-8">
                    {["Business lounge access", "Bar & catering zones", "Ambient lighting & audio"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                         <CheckCircle2 className="w-4 h-4 text-[#d4a574]" /> {item}
                      </li>
                    ))}
                 </ul>
                 <Button variant="outline" className="w-full border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-white rounded-xl">View Details</Button>
              </div>
            </div>

            {/* Workshops & Training */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm group hover:shadow-2xl transition-all duration-500">
              <div className="h-64 relative">
                 <Image src="/office-4.jpeg" alt="Workshops" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-10">
                 <h3 className="text-2xl font-bold text-[#4b3624] mb-4">Workshops & Training</h3>
                 <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Productive breakout rooms and training suites designed to foster collaboration and interactive learning experiences.
                 </p>
                 <ul className="space-y-3 mb-8">
                    {["Write-able walls/Whiteboards", "High-speed tech support", "Flexible furniture"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                         <CheckCircle2 className="w-4 h-4 text-[#d4a574]" /> {item}
                      </li>
                    ))}
                 </ul>
                 <Button variant="outline" className="w-full border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-white rounded-xl">View Details</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8 leading-tight">
                Everything You Need <br /> To Run a Seamless Event
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                We take care of the details so you can focus on your guests. Our venues come with a comprehensive suite of professional event services.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Bespoke Catering", icon: Coffee, desc: "From coffee breaks to full banquet services." },
                  { title: "Advanced AV", icon: Mic2, desc: "Professional sound, lighting, and visual tech." },
                  { title: "Event Specialist", icon: Users, desc: "On-site support to manage your event flow." },
                  { title: "Global Network", icon: Globe, desc: "Access centres in 4,000+ prime locations." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#fbf7f2] flex items-center justify-center text-[#d4a574]">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#4b3624] text-base mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-12 bg-[#4b3624] text-white rounded-full px-10 h-16 shadow-xl group">
                Ask about our facilities <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative">
               <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
                  <Image src="/reception-services1.jpeg" alt="Event Support" fill className="object-cover" />
               </div>
               <div className="absolute -top-10 -right-10 bg-[#d4a574] p-8 rounded-3xl text-white shadow-2xl hidden md:block max-w-xs">
                  <Heart className="w-8 h-8 mb-4 text-white" />
                  <p className="font-bold text-lg leading-tight">World-class hospitality at the heart of every event.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Inclusions */}
      <section className="py-24 bg-[#4b3624] text-white">
        <div className="container px-4">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Built-in Professionalism</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Every event booking includes the essentials to ensure your day runs with absolute precision.</p>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { title: "High-Speed Wi-Fi", icon: Globe, desc: "Business-grade connection for presenters and guests." },
                { title: "Digital Signage", icon: Tv, desc: "Branded welcome screens and directional signage for your event." },
                { title: "Registration Desk", icon: Layout, desc: "Professional welcome area for guest check-in and badges." },
                { title: "Breakout Zones", icon: Coffee, desc: "Dedicated comfortable spaces for pauses and networking." },
                { title: "Tech Support", icon: CheckCircle2, desc: "On-call IT and AV specialists to troubleshoot instantly." },
                { title: "Prime Transport", icon: CalendarDays, desc: "Locations close to major hubs for easy guest accessibility." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                   <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4a574]">
                      <item.icon className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Expert Advice CTA */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="bg-[#fbf7f2] rounded-[4rem] p-12 md:p-24 flex flex-col items-center text-center">
             <div className="w-20 h-20 bg-[#d4a574] rounded-full flex items-center justify-center mb-8 shadow-xl">
                <MessageSquare className="w-10 h-10 text-white" />
             </div>
             <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8 leading-tight max-w-3xl">
                Ready to Plan Your Next Masterpiece?
             </h2>
             <p className="text-xl text-gray-600 mb-12 max-w-2xl">
                Speak directly with an event specialist to discuss your goals, receive a tailored quote, and tour our premium venues.
             </p>
             <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Button size="lg" className="bg-[#4b3624] hover:bg-[#3d2c1d] text-white rounded-full px-12 h-16 text-lg font-bold shadow-2xl">
                   Start Planning
                </Button>
                <Button size="lg" variant="outline" className="border-[#4b3624] text-[#4b3624] rounded-full px-12 h-16 text-lg font-bold">
                   Request a Quote
                </Button>
             </div>
             <div className="flex flex-col gap-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">Call directly for faster response</p>
                <a href="tel:+971505229908" className="text-4xl md:text-5xl font-black text-[#4b3624] hover:text-[#d4a574] transition-colors">
                   +971 505229908
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* Trust Marks */}
      <section className="py-20 border-t border-gray-100 bg-white">
        <div className="container px-4 text-center">
           <h2 className="text-sm font-bold opacity-30 uppercase tracking-[0.4em] mb-12">Hosting Global Innovation</h2>
           <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 opacity-20 grayscale grayscale-100">
              {["Microsoft", "Google", "HSBC", "PayPal", "Samsung", "Spotify", "Uber", "FedEx", "BlackRock", "Slack", "McAfee"].map(brand => (
                <span key={brand} className="text-2xl md:text-3xl font-black tracking-tighter">{brand}</span>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
