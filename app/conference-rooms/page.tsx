"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  Monitor, 
  Wifi, 
  Coffee, 
  Presentation, 
  ArrowRight,
  Tv,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ConferenceRoomsPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/meeting-spaces1.jpeg"
          alt="Professional Conference Room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Conference Rooms for <br className="hidden md:block" /> Every Professional Event
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed">
              Book professional conference and training rooms designed to impress. Available by the hour or day, 
              with full on-site support and premium technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#d4a574] hover:bg-[#b08963] text-white px-8 py-6 text-lg rounded-full shadow-lg">
                  Book a Room
                </Button>
              </Link>
              <div className="flex flex-col items-center sm:items-start text-sm">
                <span className="text-gray-300">Available in 4,000+ locations</span>
                <a href="tel:+971505229908" className="font-bold text-white hover:text-[#d4a574] transition-colors">
                  +971 505229908
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8 leading-tight">
                Fully Equipped for <br /> Your Success
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Our conference rooms come with everything you need for a productive session. From high-speed Wi-Fi 
                to presentation technology, we take care of all the details.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Business Wi-Fi", icon: Wifi, desc: "Reliable and secure connectivity." },
                  { title: "Presentation Tech", icon: Monitor, desc: "AV tools and screen sharing." },
                  { title: "On-site Support", icon: Users, desc: "Help with setup and greeting guests." },
                  { title: "Catering Options", icon: Coffee, desc: "Refreshments and lunch organized." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#d4a574] shadow-sm">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#4b3624] text-base mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <Button size="lg" className="mt-12 bg-[#4b3624] text-white rounded-full px-10 h-16 shadow-xl group">
                   Enquire now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/meeting-spaces3.jpeg" alt="Meeting Setup" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Rooms Grid */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-4">Space for Every Moment</h2>
            <div className="h-1 bg-[#d4a574] w-24 mx-auto mb-8" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Large Conferences", desc: "Perfect for presentations and town halls with high guest counts.", icon: Presentation },
              { title: "Training Suites", desc: "Purpose-built environments for learning and workshop sessions.", icon: Tv },
              { title: "Boardrooms", icon: Users, desc: "Prestigious spaces designed for executive leadership meetings." }
            ].map((room, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-[#fbf7f2] border border-transparent hover:border-[#d4a574]/30 hover:bg-white transition-all group">
                 <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#d4a574] transition-colors">
                    <room.icon className="w-7 h-7 text-[#4b3624] group-hover:text-white" />
                 </div>
                 <h4 className="text-xl font-bold text-[#4b3624] mb-4">{room.title}</h4>
                 <p className="text-gray-500 text-sm leading-relaxed mb-6">{room.desc}</p>
                 <Link href="/contact" className="font-bold text-[#d4a574] hover:underline flex items-center gap-2">
                    Book this room <ArrowRight className="w-4 h-4" />
                 </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#4b3624] text-white text-center">
         <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Host Your Next Meeting?</h2>
            <p className="text-xl text-gray-300 mb-12">
               Download the app to browse availability and book instantly, or talk to our team for a bespoke event quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Button size="lg" className="bg-[#d4a574] text-white hover:bg-[#b58b61] rounded-full px-12 h-16 text-lg">
                  Book Online
               </Button>
               <a href="tel:+971505229908" className="bg-white/10 hover:bg-white/20 border border-white/20 px-12 h-16 rounded-full flex items-center justify-center font-bold transition-colors">
                  Call Specialist
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}
