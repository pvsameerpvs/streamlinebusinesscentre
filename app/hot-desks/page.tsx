"use client";

import Image from "next/image";
import { 
  Zap, 
  Users, 
  Globe, 
  CheckCircle2, 
  Coffee, 
  Wifi,
  Clock,
  Layout,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceNav } from "@/components/service-nav";

export default function HotDesksPage() {
  return (
    <div className="bg-white min-h-screen">
      <ServiceNav />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/co.jpeg"
          alt="Vibrant Hot Desking Space"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Hot Desking: Flexible <br className="hidden md:block" /> Workspace On Demand
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed">
              Drop in and work from any of our inspiring coworking spaces. Ideal for entrepreneurs, remote workers, 
              and anyone who needs a professional place to focus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#d4a574] hover:bg-[#b08963] text-white px-8 py-6 text-lg rounded-full">
                Book a Desk
              </Button>
              <div className="flex flex-col items-center sm:items-start text-sm">
                <span className="text-gray-300">Available 24/7 at select locations</span>
                <a href="tel:+971505229908" className="font-bold text-white hover:text-[#d4a574] transition-colors">
                  +971 505229908
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-6">Work Your Way</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our hot desking options are designed to give you total freedom. Simply walk in, pick a desk, and get to work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Business-Grade Wi-Fi", icon: Wifi, desc: "Reliable, high-speed connection in every centre." },
              { title: "Inspiring Community", icon: Users, desc: "Connect with like-minded professionals every day." },
              { title: "Global Access", icon: Globe, desc: "Work from thousands of locations across the globe." },
              { title: "Unlimited Coffee", icon: Coffee, desc: "Stay fueled with barista-style coffee and tea." },
              { title: "Easy Booking", icon: Clock, desc: "Reserve your spot instantly via our mobile app." },
              { title: "Flexible Layouts", icon: Layout, desc: "Choose a space that fits your workflow for the day." }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-gray-50 hover:bg-[#fbf7f2] transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#fbf7f2] group-hover:bg-[#d4a574] flex items-center justify-center text-[#d4a574] group-hover:text-white mb-6 transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#4b3624] mb-3">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / CTA Section */}
      <section className="py-24 bg-[#4b3624] text-white">
        <div className="container px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Stay Flexible. <br /> Pay as You Go.</h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              No long-term commitments required. Choose between daily passes or flexible monthly memberships that 
              give you access to our entire global network.
            </p>
            <div className="space-y-4 mb-10">
               {[
                 "Choose from 5, 10 or unlimited days",
                 "Monthly and annual options available",
                 "Access to business lounges included",
                 "Professional mailing address options"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#d4a574]" />
                    <span className="font-medium">{item}</span>
                 </div>
               ))}
            </div>
            <Button size="lg" className="bg-[#d4a574] text-white hover:bg-[#b58b61] rounded-full px-12 h-16 text-lg">
               Browse Plans
            </Button>
          </div>
          <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
             <Image src="/office-tab2.png" alt="Coworking Life" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
         <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8">Ready to Start Working?</h2>
            <p className="text-xl text-gray-600 mb-12">
               Download our app or browse locations to find your nearest coworking space today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Button size="lg" className="bg-[#4b3624] text-white hover:bg-[#3d2c1d] rounded-full px-12 h-16 text-lg shadow-xl">
                  Find a Center
               </Button>
               <Button size="lg" variant="outline" className="border-[#4b3624] text-[#4b3624] rounded-full px-12 h-16 text-lg">
                  Talk to Us
               </Button>
            </div>
         </div>
      </section>
    </div>
  );
}
