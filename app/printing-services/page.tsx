"use client";

import Image from "next/image";
import { 
  Printer, 
  Scan, 
  Copy, 
  Settings, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  FileText,
  MousePointer2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceNav } from "@/components/service-nav";

export default function PrintingServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      <ServiceNav />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/reception-services1.jpeg" 
          alt="High-Quality Printing Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Professional Printing & <br className="hidden md:block" /> Document Solutions
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed">
              High-quality printing, scanning, and copying at your fingertips. Every one of our 4,000 centers 
              is equipped with business-grade tech to keep your workflows moving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#d4a574] hover:bg-[#b08963] text-white px-8 py-6 text-lg rounded-full">
                Learn more
              </Button>
              <div className="flex flex-col items-center sm:items-start text-sm">
                <span className="text-gray-300">Available instantly for members</span>
                <a href="tel:+971505229908" className="font-bold text-white hover:text-[#d4a574] transition-colors">
                  +971 505229908
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8">Full Document Care</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            Our centers are equipped with the latest multi-function hardware, managed by our professional on-site 
            teams to ensure your documents look their best.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#d4a574] transition-colors">
                <Printer className="w-8 h-8 text-[#d4a574] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">High-Res Printing</h3>
              <p className="text-gray-500 text-sm">Vibrant color and crisp monochrome printing on weighted professional paper stocks.</p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#d4a574] transition-colors">
                <Scan className="w-8 h-8 text-[#d4a574] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Digital Scanning</h3>
              <p className="text-gray-500 text-sm">High-speed scanning to email or cloud storage with full OCR capabilities.</p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#d4a574] transition-colors">
                <Copy className="w-8 h-8 text-[#d4a574] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Bulk Copying</h3>
              <p className="text-gray-500 text-sm">Fast, automated duplication for reports, brochures, and training materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/office-tab9.jpg" alt="Printing Tech" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8 leading-tight">
                 Reliable Hardware <br /> Without the Maintenance
              </h2>
              <div className="space-y-6 mb-12">
                {[
                  { title: "App-Integrated Printing", desc: "Send documents to print from your phone or laptop instantly." },
                  { title: "Secure Release", desc: "Print with confidence—your documents only release when you're present." },
                  { title: "On-site Tech Support", desc: "Our teams are on hand to help with any complex document tasks." },
                  { title: "Eco-Friendly Practices", desc: "Sustainable paper options and energy-efficient hardware." }
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
                 Browse Center Locations <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#4b3624] text-white text-center">
         <div className="container px-4 max-w-4xl mx-auto">
            <FileText className="w-12 h-12 text-[#d4a574] mx-auto mb-8 animate-bounce" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Focus on Content, Not Cables.</h2>
            <p className="text-xl text-gray-300 mb-12">
               Access high-end printing and scanning facilities globally. Join our membership for seamless credits.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Button size="lg" className="bg-[#d4a574] text-white hover:bg-[#b58b61] rounded-full px-12 h-16 text-lg">
                  Join Membership
               </Button>
               <a href="tel:+971505229908" className="bg-white/10 hover:bg-white/20 border border-white/20 px-12 h-16 rounded-full flex items-center justify-center font-bold transition-colors">
                  Contact Us
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}
