"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Mail, 
  Lock, 
  User, 
  Building2, 
  ArrowRight, 
  CheckCircle2,
  ShieldCheck,
  Globe
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fbf7f2] p-4">
      <div className="max-w-[1000px] w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[700px]">
        {/* Left Side - Visual */}
        <div className="md:w-1/2 bg-[#594d46] relative p-12 text-white flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4a574]/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 mb-12">
              <div className="w-10 h-10 bg-[#d4a574] rounded-xl flex items-center justify-center text-white">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black italic tracking-tighter">Streamline</span>
            </Link>
            <h2 className="text-4xl font-bold tracking-tight mb-8">Join the <br /><span className="text-[#d4a574]">Global Community.</span></h2>
            
            <div className="space-y-6">
              {[
                { icon: Globe, text: "Access over 4,000+ locations" },
                { icon: CheckCircle2, text: "Instant booking of meeting rooms" },
                { icon: ShieldCheck, text: "Secure enterprise management" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#d4a574]">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative z-10 pt-12">
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <p className="text-xs italic text-gray-400 leading-relaxed">
                "Switching our headquarters to Streamline was the best decision for our scaling tech team."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#d4a574] overflow-hidden">
                  <Image src="/office-tab2.jpg" alt="User" width={32} height={32} className="object-cover" />
                </div>
                <div>
                  <div className="text-[10px] font-bold">Alex Rivera</div>
                  <div className="text-[8px] text-[#d4a574] uppercase font-bold tracking-widest">Founder, TechScale</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center bg-white">
          <div className="mb-10 text-center md:text-left">
            <h3 className="text-3xl font-bold text-[#4b3624] mb-2">Create Account</h3>
            <p className="text-gray-500 text-sm">Start your journey with Streamline today</p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#4b3624] uppercase tracking-widest pl-1">First Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input 
                    placeholder="John" 
                    className="h-12 pl-12 rounded-xl border-gray-100 bg-gray-50 focus-visible:ring-[#d4a574]" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#4b3624] uppercase tracking-widest pl-1">Last Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input 
                    placeholder="Doe" 
                    className="h-12 pl-12 rounded-xl border-gray-100 bg-gray-50 focus-visible:ring-[#d4a574]" 
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#4b3624] uppercase tracking-widest pl-1">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  type="email" 
                  placeholder="john@company.com" 
                  className="h-12 pl-12 rounded-xl border-gray-100 bg-gray-50 focus-visible:ring-[#d4a574]" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#4b3624] uppercase tracking-widest pl-1">Company Name</label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Your Agency Ltd" 
                  className="h-12 pl-12 rounded-xl border-gray-100 bg-gray-50 focus-visible:ring-[#d4a574]" 
                />
              </div>
            </div>

            <div className="space-y-2 pb-2">
              <label className="text-xs font-bold text-[#4b3624] uppercase tracking-widest pl-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  type="password" 
                  placeholder="Min. 8 characters" 
                  className="h-12 pl-12 rounded-xl border-gray-100 bg-gray-50 focus-visible:ring-[#d4a574]" 
                />
              </div>
            </div>

            <div className="flex items-start gap-3 py-2">
              <input type="checkbox" className="mt-1 accent-[#d4a574]" id="terms" />
              <label htmlFor="terms" className="text-[10px] text-gray-500 leading-normal">
                I agree to Streamline's <Link href="/help" className="text-[#d4a574] font-bold hover:underline">Terms of Service</Link> and <Link href="/help" className="text-[#d4a574] font-bold hover:underline">Privacy Policy</Link>.
              </label>
            </div>

            <Button className="w-full h-14 bg-[#4b3624] hover:bg-[#594d46] text-white font-bold rounded-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-95">
              Create My Account <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Already have an account? <Link href="/login" className="text-[#d4a574] font-bold hover:underline">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
