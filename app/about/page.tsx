"use client";

import React from "react";
import Image from "next/image";
import { 
  Globe, 
  Award, 
  Target,
  ShieldCheck,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { StreamGallery } from "@/components/stream-gallery";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/office-tab4.jpg"
          alt="About Streamline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 px-4 text-center">
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Our Story
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Redefining the way the world works by providing world-class workspace solutions in the heart of Dubai.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-[#fbf7f2] text-[#d4a574] rounded-full text-xs font-bold uppercase tracking-widest">
                Our Philosophy
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#4b3624] tracking-tight">
                Empowering businesses to reach their full potential.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Streamline Business Centre was founded on a simple principle: that every business, regardless of size, deserves access to a premium, professional environment that inspires growth.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-[#fbf7f2] rounded-xl flex items-center justify-center text-[#d4a574]">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-[#4b3624]">Our Mission</h3>
                  <p className="text-sm text-gray-500">To provide flexible, efficient, and luxurious workspace solutions that adapt to your business needs.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-[#fbf7f2] rounded-xl flex items-center justify-center text-[#d4a574]">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-[#4b3624]">Our Values</h3>
                  <p className="text-sm text-gray-500">Excellence, Integrity, and Innovation are at the core of everything we do for our clients.</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/office-tab7.jpg" alt="Philosophy" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#4b3624]">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-black text-[#d4a574] mb-2">15+</div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-[#d4a574] mb-2">10k+</div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Clients Served</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-[#d4a574] mb-2">4,000+</div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Global Locations</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-[#d4a574] mb-2">24/7</div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4 text-center mb-20">
          <h2 className="text-4xl font-bold text-[#4b3624] mb-6">Why Choose Streamline?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We combine world-class facilities with a dedicated service team to ensure your business operations are seamless.</p>
        </div>
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-transform duration-500 border border-gray-100">
              <ShieldCheck className="w-12 h-12 text-[#d4a574] mb-6" />
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Total Security</h3>
              <p className="text-gray-500 leading-relaxed text-sm">State-of-the-art security systems and 24/7 monitoring for your peace of mind.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-transform duration-500 border border-gray-100">
              <Award className="w-12 h-12 text-[#d4a574] mb-6" />
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Award Winning</h3>
              <p className="text-gray-500 leading-relaxed text-sm">Recognized globally for our commitment to quality and service excellence.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-transform duration-500 border border-gray-100">
              <Globe className="w-12 h-12 text-[#d4a574] mb-6" />
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Prime Locations</h3>
              <p className="text-gray-500 leading-relaxed text-sm">Strategically located in the world&apos;s leading business hubs and city centres.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <StreamGallery />

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="bg-[#594d46] rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4a574]/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Ready to elevate your business?</h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">Join thousands of successful companies who trust Streamline for their workspace needs.</p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/contact">
                  <Button className="h-16 px-10 bg-[#d4a574] hover:bg-[#b08963] text-white font-bold rounded-full text-lg shadow-2xl">
                    Get Started Now
                  </Button>
                </Link>
                <Link href="/locations">
                  <Button variant="outline" className="h-16 px-10 border-white text-white hover:bg-white hover:text-[#594d46] font-bold rounded-full text-lg">
                    View Locations
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
