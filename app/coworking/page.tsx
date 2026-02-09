"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  Clock, 
  MapPin, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  Phone,
  MessageSquare,
  Shield,
  Wifi,
  Coffee,
  Calendar,
  Layout,
  Briefcase,
  Smartphone,
  Zap,
  Printer,
  Headset,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CoworkingPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/co.jpeg"
          alt="Inspiring Coworking Space"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Coworking Spaces Designed <br /> For How You Work
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed">
              Step into inspiring, open-plan coworking environments created to help you work better and connect more. 
              Our thoughtfully designed shared workspaces bring together ambitious professionals, startups, and established businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#d4a574] hover:bg-[#b08963] text-white px-8 py-6 text-lg rounded-full shadow-lg">
                Get started today
              </Button>
              <div className="flex flex-col items-center sm:items-start text-sm">
                <span className="text-gray-300">Speak with our team on</span>
                <a href="tel:+971505229908" className="font-bold text-white hover:text-[#d4a574] transition-colors">     
+971 505229908
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find a Coworking Space Near You */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-[#4b3624] text-sm font-medium mb-8">
            <MapPin className="w-4 h-4" />
            <span>Locations Worldwide</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-6">Find a Coworking Space Near You</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            With access to a global coworking network, you can work from locations that suit your schedule and lifestyle. 
            Search by city or area to explore availability and pricing.
          </p>
          <div className="relative max-w-2xl mx-auto">
             <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
             </div>
             <input 
                type="text" 
                placeholder="Search city or area..." 
                className="w-full pl-14 pr-32 py-5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d4a574] shadow-sm text-lg"
             />
             <Button className="absolute right-2 top-2 bottom-2 bg-[#4b3624] rounded-full px-8">
                Search
             </Button>
          </div>
        </div>
      </section>

      {/* Flexible, Affordable Coworking */}
      <section className="py-24 bg-white">
        <div className="container px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/office-tab2.png"
              alt="Flexible Desk Options"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4b3624] mb-6">
              Flexible, Affordable <br /> Coworking
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you need a desk for a few hours or a regular place to work, our coworking options are built for flexibility. 
              Choose from hot desks or dedicated desks across thousands of locations worldwide.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Hot Desks", desc: "Work whenever you need" },
                { title: "Dedicated Desks", desc: "Your own reserved space" },
                { title: "Daily Access", desc: "Book by the hour or day" },
                { title: "Global Access", desc: "Work from any location" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#d4a574]/10 flex items-center justify-center mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4a574]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#4b3624]">{item.title}</h4>
                    <span className="text-sm text-gray-500">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <Button className="mt-10 bg-[#4b3624] text-white hover:bg-[#3d2c1d] px-8 py-6 rounded-full">
              Explore Our Options
            </Button>
          </div>
        </div>
      </section>

      {/* Our Coworking Options */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-4">Our Coworking Options</h2>
            <div className="h-1.5 w-24 bg-[#d4a574] mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Dedicated Desk */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#d4a574] transition-colors duration-300">
                <Briefcase className="w-7 h-7 text-[#4b3624] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Dedicated Desk</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Your own permanent desk in a shared, professional workspace.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-8 border-t border-gray-50 pt-6">
                <li className="flex items-center gap-2">• Reserved workspace just for you</li>
                <li className="flex items-center gap-2">• Business address and storage</li>
                <li className="flex items-center gap-2">• Consistency for individuals/teams</li>
              </ul>
              <div className="flex flex-col gap-3">
                <Button className="w-full bg-[#4b3624] text-white rounded-xl">Get a quote</Button>
                <Link href="/dedicated-desks" className="text-center text-[#d4a574] font-medium text-sm hover:underline">Learn more</Link>
              </div>
            </div>

            {/* Day Coworking */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#d4a574] transition-colors duration-300">
                <Clock className="w-7 h-7 text-[#4b3624] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Day Coworking</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Drop in and work whenever you need to in a professional environment.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-8 border-t border-gray-50 pt-6">
                <li className="flex items-center gap-2">• Hot desk access by hour/day</li>
                <li className="flex items-center gap-2">• 24/7 access (selected locations)</li>
                <li className="flex items-center gap-2">• Perfect for remote workers</li>
              </ul>
              <div className="flex flex-col gap-3">
                <Button className="w-full bg-[#d4a574] text-white rounded-xl">Book now</Button>
                <Link href="/hot-desks" className="text-center text-[#d4a574] font-medium text-sm hover:underline">Learn more</Link>
              </div>
            </div>

            {/* Coworking Membership */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#d4a574] transition-colors duration-300">
                <Globe className="w-7 h-7 text-[#4b3624] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Coworking Membership</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Work more regularly with flexible monthly access to any location.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-8 border-t border-gray-50 pt-6">
                <li className="flex items-center gap-2">• 5, 10, or unlimited days</li>
                <li className="flex items-center gap-2">• Simple, flexible payment options</li>
                <li className="flex items-center gap-2">• Hot desk as often as you need</li>
              </ul>
              <div className="flex flex-col gap-3">
                <Button className="w-full bg-[#4b3624] text-white rounded-xl">Enquire now</Button>
                <Link href="/membership" className="text-center text-[#d4a574] font-medium text-sm hover:underline">Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidance CTA */}
      <section className="py-20">
        <div className="container px-4">
          <div className="bg-[#4b3624] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden group">
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#d4a574]/10 rounded-full blur-3xl group-hover:bg-[#d4a574]/20 transition-all duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Some Guidance?</h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Speak directly with a coworking specialist to find the right solution for your business. Our advisors are available worldwide.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm mb-10">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[#d4a574]" />
                    <span>One-to-one consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-[#d4a574]" />
                    <span>Personalised recommendations</span>
                  </div>
                </div>
                <Button size="lg" className="bg-[#d4a574] hover:bg-[#c39665] text-white px-10 py-7 text-lg rounded-full">
                  Talk to an expert
                </Button>
              </div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/reception-services2.jpeg"
                  alt="Coworking Specialist"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Take Care of Everything */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-6">We Take Care of Everything</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              When you choose coworking with us, your workspace comes fully supported—so you can focus on productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Friendly reception teams", icon: Heart, desc: "A warm welcome for you and your guests every day." },
              { title: "Meeting rooms on-demand", icon: Calendar, desc: "Book private spaces whenever you need to hold a session." },
              { title: "Business-grade Wi-Fi", icon: Wifi, desc: "Reliable connectivity, shared printers, and IT support." },
              { title: "Comfortable lounges", icon: Coffee, desc: "Breakout spaces designed for relaxation and casual chat." },
              { title: "Easy app bookings", icon: Smartphone, desc: "Manage your bookings and account smoothly via our app." },
              { title: "4,000+ Locations", icon: Globe, desc: "Access our extensive global network whenever you travel." },
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-gray-50 hover:bg-[#fbf7f2] transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#fbf7f2] group-hover:bg-white flex items-center justify-center text-[#d4a574] mb-6 transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#4b3624] mb-3">{feature.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network Focus */}
      <section className="py-24 bg-[#4b3624] text-white">
        <div className="container px-4 text-center">
           <h2 className="text-3xl md:text-5xl font-bold mb-8">Coworking Where You Need It</h2>
           <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
             Our extensive global network means there’s always a workspace nearby—whether you’re at home, travelling, or meeting clients.
           </p>
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                "Book by the hour, day, or month",
                "Open-plan or shared environments",
                "Use any global centre",
                "Discounted airport lounge access"
              ].map((benefit, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                   <Zap className="w-8 h-8 text-[#d4a574] mx-auto mb-4" />
                   <span className="font-medium">{benefit}</span>
                </div>
              ))}
           </div>
           <Button size="lg" className="bg-[#d4a574] hover:bg-[#c49665] text-white rounded-full px-12">
              View Global Locations
           </Button>
        </div>
      </section>

      {/* Business Sizes Split */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8">Coworking for Every Business Size</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Coworking works for everyone—from solo founders to global enterprises. All backed by professional on-site support, security, and cleaning services.
              </p>
              <div className="space-y-8">
                {[
                  { title: "Startups", text: "Benefit from affordable space and networking opportunities to kickstart your journey." },
                  { title: "Growing Companies", text: "Reserve dedicated desks across locations as your team expands." },
                  { title: "Multinational Teams", text: "Enjoy seamless access worldwide, ensuring consistency for your global workforce." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#d4a574] flex items-center justify-center text-[#d4a574] font-bold">
                       {i + 1}
                    </div>
                    <div>
                       <h4 className="font-bold text-[#4b3624] text-xl mb-1">{item.title}</h4>
                       <p className="text-gray-500">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
               <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden">
                  <Image src="/office-tab8.jpeg" alt="Teams Coworking" fill className="object-cover" />
               </div>
               <div className="absolute -top-6 -left-6 bg-[#d4a574] p-8 rounded-3xl text-white shadow-xl hidden md:block">
                  <div className="text-4xl font-bold mb-1">8M+</div>
                  <div className="text-sm opacity-90 uppercase tracking-wider">Professionals Globally</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Detail Cards: Hot Desk vs Dedicated */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-8">
             {/* Hot Desk */}
             <div className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                <div className="h-64 relative">
                   <Image src="/office-tab9.jpg" alt="Hot Desk" fill className="object-cover" />
                   <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[#4b3624] font-bold text-sm">
                      Flexible
                   </div>
                </div>
                <div className="p-10">
                   <h3 className="text-3xl font-bold text-[#4b3624] mb-4">Hot Desk Anytime</h3>
                   <p className="text-gray-600 mb-8 leading-relaxed">
                      For total freedom, drop into a coworking space and hot desk whenever it suits you. It’s a flexible, cost-effective way to work.
                   </p>
                   <Link href="/hot-desks" className="block w-full">
                     <Button variant="outline" className="border-[#4b3624] text-[#4b3624] w-full py-6 rounded-2xl group">
                        Explore Hot Desking <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </Button>
                   </Link>
                </div>
             </div>

             {/* Dedicated Desk */}
             <div className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                <div className="h-64 relative">
                   <Image src="/office-tab4.jpg" alt="Dedicated Desk" fill className="object-cover" />
                   <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[#4b3624] font-bold text-sm">
                      Consistent
                   </div>
                </div>
                <div className="p-10">
                   <h3 className="text-3xl font-bold text-[#4b3624] mb-4">Dedicated Desk</h3>
                   <p className="text-gray-600 mb-8 leading-relaxed">
                      Prefer consistency? Choose a dedicated desk in a shared workspace. Secure locker for personal items and all the benefits of coworking.
                   </p>
                   <Link href="/dedicated-desks" className="block w-full">
                     <Button variant="outline" className="border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-white w-full py-6 rounded-2xl group">
                        Explore Dedicated Desks <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </Button>
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 text-center max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8">Coworking That Helps Your Business Grow</h2>
           <p className="text-lg text-gray-600 mb-12">
             Our coworking spaces are home to a diverse community of professionals and businesses. 
             By joining, you gain access to more than just a desk—you become part of a global ecosystem.
           </p>
           <div className="grid sm:grid-cols-2 gap-8 text-left mb-16">
              {[
                "Build connections in sociable shared spaces",
                "Attend networking and development events",
                "Work near key industry hubs",
                "Collaborate in shared breakout areas"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-[#fbf7f2]">
                   <Users className="w-6 h-6 text-[#d4a574]" />
                   <span className="font-medium text-[#4b3624]">{item}</span>
                </div>
              ))}
           </div>
           <div className="p-12 bg-[#4b3624] rounded-[3rem] text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Join a worldwide community of over 8 million professionals.</h3>
              <Button size="lg" className="bg-[#d4a574] hover:bg-[#c49665] text-white px-12 py-7 text-xl rounded-full">
                 Enquire now
              </Button>
           </div>
        </div>
      </section>
    </div>
  );
}

// End of file
