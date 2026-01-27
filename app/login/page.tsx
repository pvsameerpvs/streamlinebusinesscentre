"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Mail, 
  Lock, 
  ArrowRight, 
  Github, 
  Chrome,
  ShieldCheck,
  Building2
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fbf7f2] p-4">
      <div className="max-w-[1000px] w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        {/* Left Side - Visual */}
        <div className="md:w-1/2 bg-[#4b3624] relative p-12 text-white flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4a574]/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 mb-12">
              <div className="w-10 h-10 bg-[#d4a574] rounded-xl flex items-center justify-center text-white">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black italic tracking-tighter">Streamline</span>
            </Link>
            <h2 className="text-4xl font-bold tracking-tight mb-6">Welcome back to the <br /><span className="text-[#d4a574]">Network.</span></h2>
            <p className="text-gray-300 leading-relaxed text-sm">Access your global workspace, book meeting rooms instantly, and manage your account with ease.</p>
          </div>
          <div className="relative z-10 flex items-center gap-4 text-xs font-bold text-[#d4a574] uppercase tracking-widest">
            <ShieldCheck className="w-5 h-5 text-[#d4a574]" />
            <span>Secure Enterprise Login</span>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center bg-white">
          <div className="mb-10 text-center md:text-left">
            <h3 className="text-3xl font-bold text-[#4b3624] mb-2">Login</h3>
            <p className="text-gray-500 text-sm">Enter your credentials to access your account</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#4b3624] uppercase tracking-widest pl-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="h-14 pl-12 rounded-2xl border-gray-100 bg-gray-50 focus-visible:ring-[#d4a574] focus-visible:bg-white" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-end pl-1">
                <label className="text-xs font-bold text-[#4b3624] uppercase tracking-widest">Password</label>
                <Link href="#" className="text-[10px] font-bold text-[#d4a574] uppercase hover:underline">Forgot Password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  type="password" 
                  placeholder="••••••••" 
                  className="h-14 pl-12 rounded-2xl border-gray-100 bg-gray-50 focus-visible:ring-[#d4a574] focus-visible:bg-white" 
                />
              </div>
            </div>

            <Button className="w-full h-14 bg-[#4b3624] hover:bg-[#594d46] text-white font-bold rounded-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-95">
              Login to Account <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>

          <div className="mt-8 flex items-center gap-4 grayscale opacity-40">
            <div className="h-[1px] flex-1 bg-gray-200" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Or continue with</span>
            <div className="h-[1px] flex-1 bg-gray-200" />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-14 rounded-2xl border-gray-100 gap-2 font-bold text-[#4b3624]">
              <Chrome className="w-5 h-5" /> Google
            </Button>
            <Button variant="outline" className="h-14 rounded-2xl border-gray-100 gap-2 font-bold text-[#4b3624]">
              <Github className="w-5 h-5" /> GitHub
            </Button>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account? <Link href="/register" className="text-[#d4a574] font-bold hover:underline">Register now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
