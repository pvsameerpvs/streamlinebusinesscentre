"use client";

import Image from "next/image";
import { 
  Bell, 
  Users, 
  Heart, 
  ShieldCheck, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight,
  Globe,
  Settings,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ReceptionServicesPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/reception-services1.jpeg"
          alt="Professional Reception Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              A Warm Welcome <br className="hidden md:block" /> for Your Business
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed">
              Make a great first impression. Our professional reception teams are here to greet your guests, 
              handle your calls, and provide administrative support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#d4a574] hover:bg-[#b08963] text-white px-8 py-6 text-lg rounded-full">
                Learn more
              </Button>
              <div className="flex flex-col items-center sm:items-start text-sm">
                <span className="text-gray-300">Dedicated on-site teams</span>
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
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-6">Expert Admin Support</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our hospitality-trained teams act as a seamless extension of your business, ensuring every interaction 
              is handled with absolute professionalism.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Guest Greetings", icon: Users, desc: "Professional welcoming and check-in for all your visitors." },
              { title: "Call Handling", icon: Smartphone, desc: "Calls answered professionally in your company name." },
              { title: "Mail & Courier", icon: Globe, desc: "Secure receipt and management of all your packages." },
              { title: "Admin Support", icon: Settings, desc: "Assistance with document preparation, printing, and more." },
              { title: "Meeting Support", icon: Briefcase, desc: "Help with setting up rooms and serving refreshments." },
              { title: "Concierge Services", icon: Heart, desc: "Local recommendations and travel booking assistance." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-[#d4a574]/30">
                <div className="w-14 h-14 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-8 text-[#d4a574]">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-[#4b3624] mb-4">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Image Section */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/reception-services2.jpeg" alt="Receptionist" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8 leading-tight">
                 Enhance Your <br /> Professional Image
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                 A professional reception service does more than just greet guests—it tells your clients that your business is established and focused on excellence.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  "Hospitality-trained on-site support",
                  "Consistent branding across all touchpoints",
                  "Reduced overhead compared to hiring full-time staff",
                  "Available globally at every one of our locations"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#d4a574]" />
                    <span className="font-semibold text-[#4b3624]">{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-[#4b3624] text-white rounded-full px-12 h-16 shadow-xl group">
                 Enquire now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#4b3624] text-white text-center">
         <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">World-Class Support.</h2>
            <p className="text-xl text-gray-300 mb-12">
               Discover how our reception services can help your business grow. Talk to an advisor today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Button size="lg" className="bg-[#d4a574] text-white hover:bg-[#b58b61] rounded-full px-12 h-16 text-lg">
                  View plans
               </Button>
               <a href="tel:+971505229908" className="bg-white/10 hover:bg-white/20 border border-white/20 px-12 h-16 rounded-full flex items-center justify-center font-bold transition-colors">
                  Call our team
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}
