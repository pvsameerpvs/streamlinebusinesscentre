"use client";

import React from "react";
import { 
  Search, 
  HelpCircle, 
  Book, 
  MessageCircle, 
  Phone, 
  Mail,
  ChevronRight,
  LifeBuoy,
  FileText,
  UserCheck
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const categories = [
  {
    icon: UserCheck,
    title: "Account & Billing",
    desc: "Manage your membership, updates, and payments.",
    count: 24
  },
  {
    icon: Book,
    title: "Booking Guide",
    desc: "How to book offices, meeting rooms, and lounges.",
    count: 18
  },
  {
    icon: FileText,
    title: "Policies & Terms",
    desc: "Information about our community rules and policies.",
    count: 12
  }
];

const faqs = [
  {
    q: "How do I book a meeting room?",
    a: "You can book directly through our mobile app or the client portal. Simply select your location, date, and preferred time."
  },
  {
    q: "What is included in my membership?",
    a: "Inclusions vary by plan, but typically include high-speed WiFi, coffee & tea, reception services, and global lounge access."
  },
  {
    q: "Can I upgrade my office space anytime?",
    a: "Yes! Streamline is built for scale. Contact your local centre manager to discuss expanding your current setup."
  }
];

export default function HelpPage() {
  return (
    <div className="bg-[#fbf7f2] min-h-screen">
      {/* Help Hero */}
      <section className="bg-[#4b3624] pt-32 pb-24 text-center text-white">
        <div className="container px-4">
          <div className="inline-flex items-center gap-2 mb-8 text-[#d4a574] font-bold uppercase tracking-widest text-xs">
            <LifeBuoy className="w-4 h-4" />
            <span>Support Centre</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-12">How can we <span className="text-[#d4a574]">help you?</span></h1>
          <div className="max-w-2xl mx-auto relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#d4a574] transition-colors" />
            <Input 
              placeholder="Search for articles, guides, and more..." 
              className="h-16 pl-16 rounded-full border-none bg-white/10 backdrop-blur-xl text-white text-lg placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#d4a574] focus-visible:bg-white focus-visible:text-black transition-all"
            />
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] shadow-xl hover:-translate-y-2 transition-all duration-500 group border border-gray-100">
                <div className="w-14 h-14 bg-[#fbf7f2] rounded-2xl flex items-center justify-center text-[#d4a574] mb-8 group-hover:bg-[#d4a574] group-hover:text-white transition-colors">
                  <cat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#4b3624] mb-4">{cat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{cat.desc}</p>
                <button className="flex items-center gap-2 text-xs font-bold text-[#d4a574] uppercase tracking-widest group-hover:gap-4 transition-all">
                  See {cat.count} articles <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#4b3624] mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#fbf7f2] p-8 rounded-[2rem] border border-gray-100">
                <h4 className="text-lg font-bold text-[#4b3624] mb-3">{faq.q}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-24">
        <div className="container px-4">
          <div className="bg-[#594d46] rounded-[4rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4a574]/10 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Still need help?</h2>
              <p className="text-gray-300 max-w-xl mx-auto">Our support team is available 24/7. Connect with us through any of these channels.</p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/contact">
                  <Button className="h-16 px-10 bg-[#d4a574] hover:bg-[#b08963] text-white font-bold rounded-full flex gap-3 shadow-2xl">
                    <MessageCircle className="w-5 h-5" /> Live Chat
                  </Button>
                </Link>
                <a href="tel:+971505229908">
                  <Button variant="outline" className="h-16 px-10 border-white text-white hover:bg-white hover:text-[#594d46] font-bold rounded-full flex gap-3">
                    <Phone className="w-5 h-5" /> +971 50 522 9908
                  </Button>
                </a>
                <a href="mailto:support@streamline.ae">
                  <Button variant="outline" className="h-16 px-10 border-white text-white hover:bg-white hover:text-[#594d46] font-bold rounded-full flex gap-3">
                    <Mail className="w-5 h-5" /> Email Support
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
