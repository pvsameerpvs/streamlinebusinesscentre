"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  Clock, 
  Settings, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  Phone,
  MessageSquare,
  Users,
  Shield,
  Wifi,
  Coffee,
  Calendar,
  Layout,
  Maximize2,
  MapPin,
  DoorOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceNav } from "@/components/service-nav";

export default function OfficeSpacePage() {
  return (
    <div className="bg-white min-h-screen">
      <ServiceNav />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/office-1.jpeg"
          alt="Premium Office Space"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Office Space Built <br /> Around Your Business
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-100">
              Discover thoughtfully designed, fully serviced offices that work for teams of every size. 
              With flexible rental terms and hassle-free setup, you can stay focused on what matters most—building and growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#d4a574] hover:bg-[#b08963] text-white px-8 py-6 text-lg rounded-full">
                Get started today
              </Button>
              <div className="flex flex-col items-center sm:items-start text-sm">
                <span className="text-gray-300">Speak with our team at</span>
                <a href="tel:+97143132503" className="font-bold text-white hover:text-[#d4a574] transition-colors">
                  +971 4 313 2503
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Where You Want */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-[#4b3624] text-sm font-medium mb-8">
            <Globe className="w-4 h-4" />
            <span>Global Network</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-6">Work Where You Want</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access office spaces across our international network. Simply choose your preferred city or area to explore available options and pricing.
          </p>
        </div>
      </section>

      {/* Solutions That Fit Your Schedule */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/office-2.jpeg"
              alt="Flexible Office Solutions"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4b3624] mb-6">
              Office Solutions That <br /> Fit Your Schedule
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From short stays to long-term commitments, our customisable office spaces can be rented by the hour, day, month, or year—giving you freedom as your business evolves.
            </p>
            <div className="space-y-6">
              {[
                "Flexible monthly or yearly terms",
                "Solves space requirements instantly",
                "Fully furnished and professionally managed",
                "Scale up or down as needed"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#d4a574]/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-[#d4a574]" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Button className="mt-10 bg-[#4b3624] text-white hover:bg-[#3d2c1d] px-8 py-6 rounded-full">
              Explore Available Options
            </Button>
          </div>
        </div>
      </section>

      {/* Choose the Right Office */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-4">Choose the Right Office for You</h2>
            <div className="h-1.5 w-24 bg-[#d4a574] mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Private Offices */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#d4a574] transition-colors duration-300">
                <Building2 className="w-7 h-7 text-[#4b3624] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Private Offices</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Move-in-ready offices designed for productivity and privacy.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-8 border-t border-gray-50 pt-6">
                <li className="flex items-center gap-2">• Flexible monthly or yearly terms</li>
                <li className="flex items-center gap-2">• Solo professionals to large teams</li>
                <li className="flex items-center gap-2">• Fully furnished and managed</li>
              </ul>
              <div className="flex flex-col gap-3">
                <Button className="w-full bg-[#4b3624] text-white rounded-xl">Request a quote</Button>
                <Link href="#" className="text-center text-[#d4a574] font-medium text-sm hover:underline">Learn more</Link>
              </div>
            </div>

            {/* Custom-Built Offices */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#d4a574] transition-colors duration-300">
                <Settings className="w-7 h-7 text-[#4b3624] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Custom-Built Offices</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                For businesses that need more than a standard setup.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-8 border-t border-gray-50 pt-6">
                <li className="flex items-center gap-2">• Tailored layouts and branding</li>
                <li className="flex items-center gap-2">• Adaptable lease options</li>
                <li className="flex items-center gap-2">• Perfect for scaling teams</li>
              </ul>
              <div className="flex flex-col gap-3">
                <Button className="w-full bg-[#4b3624] text-white rounded-xl">Request a quote</Button>
                <Link href="#" className="text-center text-[#d4a574] font-medium text-sm hover:underline">Learn more</Link>
              </div>
            </div>

            {/* Day Offices */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#d4a574] transition-colors duration-300">
                <Clock className="w-7 h-7 text-[#4b3624] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Day Offices</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                On-demand workspace whenever you need a professional environment.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-8 border-t border-gray-50 pt-6">
                <li className="flex items-center gap-2">• Book by the hour or day</li>
                <li className="flex items-center gap-2">• 24/7 secure access</li>
                <li className="flex items-center gap-2">• Ideal for short projects</li>
              </ul>
              <div className="flex flex-col gap-3">
                <Button className="w-full bg-[#d4a574] text-white rounded-xl">Book now</Button>
                <Link href="#" className="text-center text-[#d4a574] font-medium text-sm hover:underline">Learn more</Link>
              </div>
            </div>

            {/* Office Memberships */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#d4a574] transition-colors duration-300">
                <Globe className="w-7 h-7 text-[#4b3624] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Memberships</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Work flexibly across thousands of locations worldwide.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-8 border-t border-gray-50 pt-6">
                <li className="flex items-center gap-2">• 5, 10, or unlimited days</li>
                <li className="flex items-center gap-2">• Straightforward pricing</li>
                <li className="flex items-center gap-2">• Global network access</li>
              </ul>
              <div className="flex flex-col gap-3">
                <Button className="w-full bg-[#4b3624] text-white rounded-xl">Buy now</Button>
                <Link href="#" className="text-center text-[#d4a574] font-medium text-sm hover:underline">Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Guidance CTA */}
      <section className="py-20">
        <div className="container px-4">
          <div className="bg-[#4b3624] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/10 transition-all duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Expert Guidance?</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Schedule a one-to-one consultation with our workspace specialists. Our advisors are available globally to help you find the perfect fit.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm mb-10">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-[#d4a574]" />
                    <span>Advisors available globally</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-[#d4a574]" />
                    <span>Tailored recommendations</span>
                  </div>
                </div>
                <Button size="lg" className="bg-[#d4a574] hover:bg-[#c39665] text-white px-10 py-7 text-lg rounded-full">
                  Speak to an expert
                </Button>
              </div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white/10 shadow-2xl">
                <Image
                  src="/reception-services1.jpeg"
                  alt="Specialist"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Everything’s Included */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-6">Everything’s Included</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your office comes fully supported, so you can get to work immediately. No hidden costs, no surprises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {[
              { title: "Friendly on-site support", icon: Users },
              { title: "Business-grade IT", icon: Wifi },
              { title: "Worldwide office network", icon: Globe },
              { title: "Bookable meeting rooms", icon: Calendar },
              { title: "24/7 security and CCTV", icon: Shield },
              { title: "Cleaning and maintenance", icon: CheckCircle2 },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#fbf7f2] flex items-center justify-center text-[#d4a574]">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#4b3624] mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Everything from basic utilities to high-end connectivity is included in your simple pricing.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adapts as You Grow */}
      <section className="py-24 bg-[#4b3624] text-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Office Space That <br /> Adapts as You Grow</h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Your workspace should change as your business does. We offer flexible terms with minimal risk.
              </p>
              <div className="space-y-6">
                {[
                  "Easily increase or reduce space",
                  "Relocate or open additional offices",
                  "Add desks as your team expands",
                  "Reconfigure layouts whenever needed"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#d4a574]" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 relative rounded-3xl overflow-hidden mt-12">
                  <Image src="/office-3.jpeg" alt="Scale" fill className="object-cover" />
                </div>
                <div className="h-48 relative rounded-3xl overflow-hidden">
                  <Image src="/office-4.jpeg" alt="Scale" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-48 relative rounded-3xl overflow-hidden">
                  <Image src="/office-5.jpeg" alt="Scale" fill className="object-cover" />
                </div>
                <div className="h-64 relative rounded-3xl overflow-hidden">
                  <Image src="/office-6.jpeg" alt="Scale" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Make It Yours */}
      <section className="py-24 bg-white text-center">
        <div className="container px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8">Make It Yours</h2>
          <p className="text-xl text-gray-600 mb-12">
            Create a workspace that reflects your brand and culture. From floor plans to finishes and signage, every detail can be customised.
          </p>
          <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden group mb-12 shadow-2xl">
            <Image
              src="/office-7.jpeg"
              alt="Custom Office"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-bottom p-12">
               <div className="text-left mt-auto">
                 <h3 className="text-white text-3xl font-bold mb-4">Your Brand, Your Way</h3>
                 <Button className="bg-white text-[#4b3624] hover:bg-gray-100 rounded-full px-8 py-4">
                   Explore Custom Office Options
                 </Button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Simple Steps */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-4">Get Started in 3 Simple Steps</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10" />
            
            {[
              { title: "Select Your Space", desc: "Choose your location, office size, and preferred layout.", icon: MapPin },
              { title: "Personalise", desc: "Work with our design team—or let us handle everything for you.", icon: Layout },
              { title: "Move In", desc: "Once your agreement is complete, your office is ready.", icon: DoorOpen },
            ].map((step, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#4b3624] text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-8 shadow-lg">
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold text-[#4b3624] mb-4">{step.title}</h4>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container px-4 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4b3624] mb-8">Serviced Offices for Every Business Size</h2>
          <div className="grid sm:grid-cols-3 gap-8 mb-12">
             <div className="p-6">
                <div className="text-3xl font-bold text-[#d4a574] mb-2">1-10</div>
                <div className="text-sm font-medium text-gray-500">Startup Teams</div>
             </div>
             <div className="p-6 border-x border-gray-100">
                <div className="text-3xl font-bold text-[#d4a574] mb-2">10-50</div>
                <div className="text-sm font-medium text-gray-500">Scaling Businesses</div>
             </div>
             <div className="p-6">
                <div className="text-3xl font-bold text-[#d4a574] mb-2">50+</div>
                <div className="text-sm font-medium text-gray-500">Global Enterprises</div>
             </div>
          </div>
          <p className="text-lg text-gray-600 mb-10">
            From ambitious startups to global enterprises, our serviced offices support businesses at every stage. 
            Reception services, cleaning, and maintenance included.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-[#4b3624] text-white hover:bg-[#3d2c1d] px-10 py-7 text-lg rounded-full shadow-xl">
              Find Your Office
            </Button>
            <Button size="lg" variant="outline" className="border-[#4b3624] text-[#4b3624] px-10 py-7 text-lg rounded-full">
              View All Locations
            </Button>
          </div>
          <p className="mt-12 text-[#d4a574] font-medium tracking-wide uppercase text-sm">
            You focus on your business. We’ll handle the workspace.
          </p>
        </div>
      </section>
    </div>
  );
}

// End of file
