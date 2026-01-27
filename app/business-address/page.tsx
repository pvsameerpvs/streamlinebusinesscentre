"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle2, 
  Target, 
  Users, 
  Shield, 
  Search,
  ArrowRight,
  Monitor,
  Plus,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceNav } from "@/components/service-nav";

export default function BusinessAddressPage() {
  return (
    <div className="bg-white min-h-screen">
      <ServiceNav />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/office-tab6.jpg"
          alt="Prestigious Business Address"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Business Address Solutions <br className="hidden md:block" /> That Build Credibility
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-100 leading-relaxed">
              Establish your business in a recognised, prestigious location—without the cost of renting a physical office. 
              Enhance your brand image, protect your privacy, and register your company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <div className="flex gap-4">
                  <Button size="lg" className="bg-[#d4a574] hover:bg-[#b08963] text-white px-8 py-6 rounded-full">
                    Find a location
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white text-white hover:bg-white/20 px-8 py-6 rounded-full">
                    Buy now
                  </Button>
               </div>
              <div className="flex flex-col items-center sm:items-start text-sm mt-4 sm:mt-0 sm:ml-6">
                <span className="text-gray-300">Speak with our team on</span>
                <a href="tel:+971505229908" className="font-bold text-white hover:text-[#d4a574] transition-colors">
                  +971 505229908
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Than Just an Address (Virtual Solutions Introduction) */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-[#d4a574] text-sm font-bold mb-6">
              <Globe className="w-4 h-4" />
              <span>Global Virtual Presence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#4b3624] mb-6">More Than Just an Address</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our Business Address is part of a wider range of virtual office solutions. Explore our packages to find the level of support that's right for your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Business Address */}
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 flex flex-col h-full group hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#fbf7f2] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#d4a574] transition-colors">
                <MapPin className="w-6 h-6 text-[#d4a574] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Business Address</h3>
              <p className="text-sm text-gray-500 mb-6 flex-grow">
                Prime office address for marketing and correspondence. Ideal for remote businesses.
              </p>
              <ul className="text-xs text-gray-400 space-y-2 mb-8">
                 <li>• Use on websites & stationery</li>
                 <li>• Thousands of locations</li>
              </ul>
              <Button variant="ghost" className="text-[#d4a574] font-bold p-0 justify-start hover:bg-transparent hover:text-[#4b3624]">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </div>

            {/* Telephone Answering */}
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 flex flex-col h-full group hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#fbf7f2] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#d4a574] transition-colors">
                <Phone className="w-6 h-6 text-[#d4a574] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Telephone Answering</h3>
              <p className="text-sm text-gray-500 mb-6 flex-grow">
                Professional call handling in your company name. Local phone number included.
              </p>
              <ul className="text-xs text-gray-400 space-y-2 mb-8">
                 <li>• Messages taken & forwarded</li>
                 <li>• Professional receptionists</li>
              </ul>
              <Button variant="ghost" className="text-[#d4a574] font-bold p-0 justify-start hover:bg-transparent hover:text-[#4b3624]">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </div>

            {/* Virtual Office */}
            <div className="bg-white p-8 rounded-[2rem] border-2 border-[#d4a574]/20 flex flex-col h-full group hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-3 left-6 bg-[#d4a574] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Popular
              </div>
              <div className="w-12 h-12 bg-[#fbf7f2] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#d4a574] transition-colors">
                <Monitor className="w-6 h-6 text-[#d4a574] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Virtual Office</h3>
              <p className="text-sm text-gray-500 mb-6 flex-grow">
                Prestigious address plus virtual receptionist and global lounge network access.
              </p>
              <ul className="text-xs text-gray-400 space-y-2 mb-8">
                 <li>• Full virtual support</li>
                 <li>• Business lounge access</li>
              </ul>
              <Button variant="ghost" className="text-[#d4a574] font-bold p-0 justify-start hover:bg-transparent hover:text-[#4b3624]">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </div>

            {/* Virtual Office Plus */}
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 flex flex-col h-full group hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#fbf7f2] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#d4a574] transition-colors">
                <Plus className="w-6 h-6 text-[#d4a574] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Virtual Office Plus</h3>
              <p className="text-sm text-gray-500 mb-6 flex-grow">
                Our most comprehensive package. Includes meeting rooms and private office access.
              </p>
              <ul className="text-xs text-gray-400 space-y-2 mb-8">
                 <li>• All benefits included</li>
                 <li>• 5 days office access</li>
              </ul>
              <Button variant="ghost" className="text-[#d4a574] font-bold p-0 justify-start hover:bg-transparent hover:text-[#4b3624]">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Prime Address Benefits */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
                <Image src="/virtual-offices3.jpeg" alt="Establish Presence" fill className="object-cover" />
                <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-[#d4a574]/20 hidden md:block">
                   <div className="text-3xl font-bold text-[#4b3624] mb-1">4,000+</div>
                   <div className="text-xs font-bold text-[#d4a574] uppercase tracking-widest">Global Locations</div>
                </div>
             </div>
             <div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8 leading-tight">
                  A Prime Address to <br /> Grow Your Business
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Establish a local or international presence without the burden of leasing office space. Ideal for home-based businesses, startups, and companies expanding into new markets.
                </p>
                <div className="space-y-6 mb-10">
                   {[
                     "Address for use on websites, stationery, and registration†",
                     "Protects your personal home address privacy",
                     "Instant credibility in prestigious districts",
                     "Establish satellite locations quickly and easily"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#d4a574] flex items-center justify-center">
                           <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="font-semibold text-[#4b3624]">{item}</span>
                     </div>
                   ))}
                </div>
                <Button size="lg" className="bg-[#4b3624] text-white rounded-full px-12 h-16 shadow-xl">
                   Explore Business Addresses
                </Button>
             </div>
          </div>
        </div>
      </section>

      {/* What’s Included Grid */}
      <section className="py-24 bg-[#4b3624] text-white">
        <div className="container px-4">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">A Professional Foundation</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">Your Business Address plan opens the door to a full range of support services.</p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Prestigious Address", icon: MapPin, desc: "Prime address for your official and marketing materials." },
                { title: "On-site Support", icon: Users, desc: "Dedicated support from our experienced local teams." },
                { title: "Reception Staff", icon: Users, desc: "Front-of-house staff to welcome any visitors to the centre." },
                { title: "Mail Handling", icon: Mail, desc: "Secure mail handling and forwarding options (additional fees may apply)." },
                { title: "Community Events", icon: Globe, desc: "Invitations to professional networking and community sessions." },
                { title: "Lounge Access", icon: Target, desc: "Discounted access to airport lounges worldwide via our network." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-sm group hover:bg-white/10 transition-colors">
                   <div className="w-12 h-12 bg-[#d4a574] rounded-xl flex items-center justify-center mb-6">
                      <item.icon className="w-6 h-6 text-white" />
                   </div>
                   <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                   <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Upgrade Call-to-Action */}
      <section className="py-24 bg-white">
         <div className="container px-4">
            <div className="bg-[#fbf7f2] rounded-[4rem] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 group">
               <div className="max-w-xl text-center lg:text-left">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-6">Need More Than Just an Address?</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Upgrade to a Virtual Office for receptionist services, professional call handling, and on-demand access to meeting rooms and private offices.
                  </p>
                  <Button size="lg" className="bg-[#d4a574] hover:bg-[#c39665] text-white rounded-full px-10 h-16 shadow-xl">
                    Explore Virtual Office Options
                  </Button>
               </div>
               <div className="relative w-full max-w-sm aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group-hover:translate-x-2 transition-transform duration-500">
                  <Image src="/reception-services3.jpeg" alt="Virtual Receptionist" fill className="object-cover" />
               </div>
            </div>
         </div>
      </section>

      {/* Telephone Answering Detail */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container px-4">
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                 <h2 className="text-3xl md:text-4xl font-bold text-[#4b3624] mb-8 leading-tight">
                    Professional Telephone <br /> Answering Service
                 </h2>
                 <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    If managing calls is your main priority, our service ensures you never miss an important conversation. 
                    Professional, personalized, and efficient.
                 </p>
                 <div className="space-y-6 mb-10 text-[#4b3624] font-medium">
                    <div className="flex items-center gap-4">
                       <CheckCircle2 className="w-5 h-5 text-[#d4a574]" />
                       <span>Calls answered professionally using your company name</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <CheckCircle2 className="w-5 h-5 text-[#d4a574]" />
                       <span>Messages taken and delivered promptly</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <CheckCircle2 className="w-5 h-5 text-[#d4a574]" />
                       <span>Calls transferred directly to you when needed</span>
                    </div>
                 </div>
                 <Button variant="outline" className="border-[#4b3624] text-[#4b3624] rounded-full px-8 py-6 h-14 font-bold">
                    Talk to an expert
                 </Button>
              </div>
              <div className="relative h-[450px] rounded-[3rem] overflow-hidden order-1 md:order-2 shadow-xl">
                 <Image src="/virtual-offices4.jpeg" alt="Call Handling" fill className="object-cover" />
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#4b3624] text-white text-center">
         <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Build Your Professional Presence?</h2>
            <p className="text-xl text-gray-400 mb-12">
               Establish your brand today with a prestigious business address. Join thousands of location-independent businesses.
            </p>
            <div className="flex flex-col gap-3 mb-12">
               <p className="text-xs font-bold text-[#d4a574] uppercase tracking-[0.3em]">Call directly to find the best rate</p>
               <a href="tel:+971505229908" className="text-4xl md:text-6xl font-black hover:text-[#d4a574] transition-colors">
                  +971 505229908
               </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Button size="lg" className="bg-[#d4a574] hover:bg-[#c39665] text-white rounded-full px-12 py-7 text-lg shadow-xl">
                  Enquire now
               </Button>
               <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4b3624] rounded-full px-12 py-7 text-lg">
                  View All Locations
               </Button>
            </div>
         </div>
      </section>
    </div>
  );
}
