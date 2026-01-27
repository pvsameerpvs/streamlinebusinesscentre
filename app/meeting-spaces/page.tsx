"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  CalendarDays, 
  Search, 
  Globe, 
  CheckCircle2, 
  Video, 
  Monitor, 
  Presentation, 
  Coffee, 
  Wifi, 
  Clock, 
  ChevronRight,
  Phone,
  MessageSquare,
  Shield,
  Briefcase,
  Layout,
  Tv,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MeetingSpacesPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/meeting-spaces1.jpeg"
          alt="Professional Meeting Room boardrooms"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Meeting Rooms Made <br className="hidden md:block" /> for Every Moment
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-100 leading-relaxed">
              Find the right space for any reason. Choose from over 10,000 professional meeting rooms worldwide, 
              from quiet interview rooms to impressive boardrooms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#d4a574] hover:bg-[#b08963] text-white px-8 py-6 text-lg rounded-full shadow-lg">
                Book a Meeting Room
              </Button>
              <div className="flex flex-col items-center sm:items-start text-sm">
                <span className="text-gray-300">Speak with our team at</span>
                <a href="tel:+971505229908" className="font-bold text-white hover:text-[#d4a574] transition-colors">
                  +971 505229908
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find a Meeting Room Near You */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-[#4b3624] text-sm font-medium mb-8">
            <Globe className="w-4 h-4" />
            <span>10,000+ Locations</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-6">Find a Meeting Room Near You</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Search by date, number of attendees, and location to discover available meeting rooms in cities, towns, and transport hubs around the world.
          </p>
          <div className="bg-white p-2 rounded-[2rem] shadow-xl border border-gray-100 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
             <div className="flex items-center gap-3 px-6 py-4 border-b md:border-b-0 md:border-r border-gray-100">
                <Search className="w-5 h-5 text-[#d4a574]" />
                <input type="text" placeholder="Location" className="w-full focus:outline-none text-sm font-medium" />
             </div>
             <div className="flex items-center gap-3 px-6 py-4 border-b md:border-b-0 md:border-r border-gray-100">
                <CalendarDays className="w-5 h-5 text-[#d4a574]" />
                <input type="text" placeholder="Date" className="w-full focus:outline-none text-sm font-medium" />
             </div>
             <div className="flex items-center gap-3 px-6 py-4">
                <Users className="w-5 h-5 text-[#d4a574]" />
                <input type="text" placeholder="Attendees" className="w-full focus:outline-none text-sm font-medium" />
             </div>
             <Button className="bg-[#4b3624] text-white rounded-full h-full py-4 text-sm font-bold hover:bg-[#3d2c1d]">
                Search Rooms
             </Button>
          </div>
        </div>
      </section>

      {/* Options Grid */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-4">Our Meeting Room Options</h2>
            <div className="h-1.5 w-24 bg-[#d4a574] mx-auto rounded-full" />
            <p className="mt-6 text-gray-600 text-lg">Designed to support every type of meeting, available by the hour, day, or longer.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Meeting Rooms */}
            <div className="bg-[#fbf7f2] p-8 rounded-[2rem] flex flex-col h-full group hover:bg-white hover:shadow-xl hover:border-gray-100 border border-transparent transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#d4a574] transition-colors duration-300">
                <Users className="w-7 h-7 text-[#4b3624] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Meeting Rooms</h3>
              <p className="text-gray-600 mb-6 flex-grow text-sm">
                Flexible, professional spaces ideal for collaboration, client meetings, and interviews.
              </p>
              <ul className="text-xs text-gray-500 space-y-2 mb-8 border-t border-gray-100 pt-6">
                <li className="flex items-center gap-2"><Clock className="w-3 h-3 text-[#d4a574]" /> Available by the hour</li>
                <li className="flex items-center gap-2"><Users className="w-3 h-3 text-[#d4a574]" /> On-site support teams</li>
                <li className="flex items-center gap-2"><Globe className="w-3 h-3 text-[#d4a574]" /> 10,000+ locations</li>
              </ul>
              <div className="flex flex-col gap-3">
                <Button className="w-full bg-[#4b3624] text-white rounded-xl">Book now</Button>
                <Link href="#" className="text-center text-[#d4a574] font-medium text-sm hover:underline">Enquire now</Link>
              </div>
            </div>

            {/* Interview Rooms */}
            <div className="bg-[#fbf7f2] p-8 rounded-[2rem] flex flex-col h-full group hover:bg-white hover:shadow-xl hover:border-gray-100 border border-transparent transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#d4a574] transition-colors duration-300">
                <Shield className="w-7 h-7 text-[#4b3624] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Interview Rooms</h3>
              <p className="text-gray-600 mb-6 flex-grow text-sm">
                Private, comfortable spaces designed to help you make the right impression on candidates.
              </p>
              <ul className="text-xs text-gray-500 space-y-2 mb-8 border-t border-gray-100 pt-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-[#d4a574]" /> Quiet, professional environment</li>
                <li className="flex items-center gap-2"><Layout className="w-3 h-3 text-[#d4a574]" /> Private appraisals/research</li>
              </ul>
              <div className="flex flex-col gap-3 mt-auto">
                <Button className="w-full bg-[#4b3624] text-white rounded-xl">Book now</Button>
              </div>
            </div>

            {/* Training Rooms */}
            <div className="bg-[#fbf7f2] p-8 rounded-[2rem] flex flex-col h-full group hover:bg-white hover:shadow-xl hover:border-gray-100 border border-transparent transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#d4a574] transition-colors duration-300">
                <Presentation className="w-7 h-7 text-[#4b3624] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Training Rooms</h3>
              <p className="text-gray-600 mb-6 flex-grow text-sm">
                Purpose-built rooms designed for learning and development with full tech setup.
              </p>
              <ul className="text-xs text-gray-500 space-y-2 mb-8 border-t border-gray-100 pt-6">
                <li className="flex items-center gap-2"><Tv className="w-3 h-3 text-[#d4a574]" /> Equipped with screens/whiteboards</li>
                <li className="flex items-center gap-2"><Briefcase className="w-3 h-3 text-[#d4a574]" /> No setup or capital investment</li>
              </ul>
              <div className="flex flex-col gap-3 mt-auto">
                <Button className="w-full bg-[#4b3624] text-white rounded-xl">Book now</Button>
              </div>
            </div>

            {/* Boardrooms */}
            <div className="bg-[#fbf7f2] p-8 rounded-[2rem] flex flex-col h-full group hover:bg-white hover:shadow-xl hover:border-gray-100 border border-transparent transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#d4a574] transition-colors duration-300">
                <Briefcase className="w-7 h-7 text-[#4b3624] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">Boardrooms</h3>
              <p className="text-gray-600 mb-6 flex-grow text-sm">
                High-quality spaces for leadership meetings, pitching, and professional presentations.
              </p>
              <ul className="text-xs text-gray-500 space-y-2 mb-8 border-t border-gray-100 pt-6">
                <li className="flex items-center gap-2"><Monitor className="w-3 h-3 text-[#d4a574]" /> Designed to impress stakeholders</li>
                <li className="flex items-center gap-2"><Layout className="w-3 h-3 text-[#d4a574]" /> Premium furniture & layouts</li>
              </ul>
              <div className="flex flex-col gap-3">
                <Button className="w-full bg-[#d4a574] text-white rounded-xl">Book now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Help CTA */}
      <section className="py-20">
        <div className="container px-4">
          <div className="bg-[#4b3624] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Expert Help?</h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Speak with a professional advisor to find the ideal meeting space for your objective. Our specialists are available worldwide.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 text-sm mb-10">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-[#d4a574]" />
                    <span>One-to-one consultations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-[#d4a574]" />
                    <span>Global recommendations</span>
                  </div>
                </div>
                <Button size="lg" className="bg-[#d4a574] hover:bg-[#c39665] text-white px-10 py-7 text-lg rounded-full">
                  Talk to an expert
                </Button>
              </div>
              <div className="relative w-full max-w-sm aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 group-hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/meeting-spaces2.jpeg"
                  alt="Boardroom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire? */}
      <section className="py-24 bg-white">
        <div className="container px-4">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
                 <Image src="/meeting-spaces3.jpeg" alt="Meeting Setup" fill className="object-cover" />
              </div>
              <div>
                 <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8 leading-tight">
                    Everything is Taken <br /> Care of
                 </h2>
                 <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    When you book a meeting room with us, we ensure everything is ready for your success. No setup hassle, no technical delays.
                 </p>
                 <div className="space-y-6">
                    {[
                      "Rooms prepared and ready before you arrive",
                      "Reception teams to welcome your guests",
                      "On-site support throughout your meeting",
                      "Additional equipment arranged on request",
                      "Book instantly via our app or online",
                      "Comfortable, customisable layouts"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                         <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#d4a574] flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                         </div>
                         <span className="font-semibold text-[#4b3624]">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Included Grid */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-6">What’s Included</h2>
            <p className="text-lg text-gray-600">Premium amenities to ensure your meeting runs smoothly.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Business Tech", icon: Monitor, desc: "Flat-screen TVs, projectors, and reliable AV tools." },
              { title: "Professional Wi-Fi", icon: Wifi, desc: "Business-grade connection with on-site tech support." },
              { title: "Breakout Spaces", icon: Layout, desc: "Access to comfortable areas for quick breaks and networking." },
              { title: "Flexible Layouts", icon: Presentation, desc: "Room configurations tailored to your specific meeting type." },
              { title: "Barista Coffee", icon: Coffee, desc: "Premium coffee available on a pay-as-you-go basis." },
              { title: "Optional Catering", icon: Users, desc: "Full catering services available for breakfast or lunch." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-6 bg-white rounded-3xl shadow-sm">
                 <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#fbf7f2] flex items-center justify-center text-[#d4a574]">
                    <item.icon className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-[#4b3624] mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Succeed Benefits */}
      <section className="py-24 bg-white">
        <div className="container px-4 text-center max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8">Designed to Help You Succeed</h2>
           <p className="text-xl text-gray-600 mb-12">
             Whether you’re pitching, training, interviewing, or planning, our meeting rooms help you deliver with absolute confidence.
           </p>
           <div className="grid sm:grid-cols-2 gap-6 text-left mb-16">
              {[
                "Meet closer to your clients or team",
                "Present professionally with high-end AV tools",
                "Run productive team collaboration sessions",
                "Create a strong impression with candidates",
                "Host off-site leadership and board meetings"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 group hover:border-[#d4a574] transition-colors">
                   <div className="w-2 h-2 rounded-full bg-[#d4a574] group-hover:scale-150 transition-transform" />
                   <span className="font-semibold text-[#4b3624]">{item}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Trust Marks */}
      <section className="py-24 bg-[#4b3624] text-white overflow-hidden">
        <div className="container px-4 text-center">
           <h2 className="text-2xl md:text-3xl font-bold mb-12 opacity-80 uppercase tracking-[0.2em]">Trusted by Leading Global Brands</h2>
           <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale invert opacity-60">
              {["Microsoft", "Google", "HSBC", "PayPal", "Samsung", "Spotify", "Uber", "FedEx", "BlackRock", "Slack", "McAfee"].map(brand => (
                <span key={brand} className="text-xl font-bold tracking-tighter">{brand}</span>
              ))}
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
         <div className="container px-4 max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
                  <Image src="/meeting-spaces4.jpeg" alt="Meeting Space" fill className="object-cover" />
               </div>
               <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8 leading-tight">Ready When You Are</h2>
                  <p className="text-lg text-gray-600 mb-10">
                    Our meeting rooms are fully prepared. Book in advance or on the day, and we'll ensure everything is set up for your arrival.
                  </p>
                  <div className="space-y-6">
                    <Button size="lg" className="bg-[#4b3624] text-white hover:bg-[#3d2c1d] rounded-full px-12 py-7 text-xl w-full sm:w-auto shadow-xl">
                      Book a Room
                    </Button>
                    <div className="flex flex-col gap-2">
                       <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Have Questions?</p>
                       <a href="tel:+971505229908" className="text-3xl font-bold text-[#4b3624] hover:text-[#d4a574] transition-colors">
                         +971 505229908
                       </a>
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
