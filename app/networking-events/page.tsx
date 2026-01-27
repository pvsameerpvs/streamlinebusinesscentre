"use client";

import Image from "next/image";
import { 
  Wine, 
  Users, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Calendar,
  MessageSquare,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NetworkingEventsPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/co.jpeg"
          alt="Networking Event"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Connect & Grow with <br className="hidden md:block" /> Networking Events
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed">
              Join a vibrant community of over 8 million professionals. Our networking events bring together 
              ambitious minds to share ideas, find opportunities, and build lasting connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#d4a574] hover:bg-[#b08963] text-white px-8 py-6 text-lg rounded-full">
                View Event Calendar
              </Button>
              <div className="flex flex-col items-center sm:items-start text-sm">
                <span className="text-gray-300">Open to all members and guests</span>
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
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8">Events for Every Goal</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            From industry-specific seminars to casual social mixers, explore the range of events hosted regularly across our global centers.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#d4a574] transition-colors">
                <Zap className="w-8 h-8 text-[#d4a574] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Innovation Summits</h3>
              <p className="text-gray-500 text-sm">Tech-focused seminars and masterclasses led by industry pioneers.</p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#d4a574] transition-colors">
                <Wine className="w-8 h-8 text-[#d4a574] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Social Mixers</h3>
              <p className="text-gray-500 text-sm">Casual evening gatherings designed for relaxed networking and fun.</p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#d4a574] transition-colors">
                <Users className="w-8 h-8 text-[#d4a574] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Community Meetups</h3>
              <p className="text-gray-500 text-sm">Recurring local sessions for members to connect and share workspace goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/office-tab7.jpg" alt="Networking Interaction" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8 leading-tight">
                 A Global Network <br /> of Opportunity
              </h2>
              <div className="space-y-6 mb-12">
                {[
                  { title: "8M+ Professionals", desc: "Access a massive global talent and client database." },
                  { title: "Daily Events", desc: "Something happening every day across our locations." },
                  { title: "Expert Speakers", desc: "Learn from the best with hosted talks and tutorials." },
                  { title: "Bespoke Connections", desc: "Receive automated recommendations based on your profile." }
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
                 Join our community <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#4b3624] text-white text-center">
         <div className="container px-4 max-w-4xl mx-auto">
            <Sparkles className="w-12 h-12 text-[#d4a574] mx-auto mb-8 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Better Together.</h2>
            <p className="text-xl text-gray-300 mb-12">
               Experience the power of physical connection. Sign up for our newsletter to stay updated on upcoming events.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Button size="lg" className="bg-[#d4a574] text-white hover:bg-[#b58b61] rounded-full px-12 h-16 text-lg">
                  Get Member App
               </Button>
               <a href="tel:+971505229908" className="bg-white/10 hover:bg-white/20 border border-white/20 px-12 h-16 rounded-full flex items-center justify-center font-bold transition-colors">
                  Contact Events Team
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}
