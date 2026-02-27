"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Mail,
  Phone,
  Search,
  Globe,
  CheckCircle2,
  Monitor,
  MessageSquare,
  Shield,
  CreditCard,
  Target,
  Users,
  Briefcase,
  Smartphone,
  Plane,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VirtualOfficesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/virtual-offices1.jpeg"
          alt="Professional Virtual Office Presence"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Virtual Offices That Give You <br className="hidden md:block" /> a
              Real Business Presence
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-100 leading-relaxed">
              Create a professional presence for your business anywhere in the
              world—without the cost or commitment of a physical office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#d4a574] hover:bg-[#b08963] text-white px-8 py-6 text-lg rounded-full"
                >
                  Enquire now
                </Button>
              </Link>
              <div className="flex flex-col items-center sm:items-start text-sm">
                <span className="text-gray-300">Speak with our team on</span>
                <a
                  href="tel:+971505229908"
                  className="font-bold text-white hover:text-[#d4a574] transition-colors"
                >
                  +971 505229908
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Office, Real Impact */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-[#4b3624] text-sm font-medium mb-8">
            <Target className="w-4 h-4" />
            <span>Virtual Presence</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-6">
            Virtual Office, Real Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Whether you need a simple business address or a more complete
            virtual setup, our flexible packages let you choose the level of
            presence that suits your business.
          </p>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by city or area..."
              className="w-full pl-14 pr-32 py-5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d4a574] shadow-sm text-lg"
            />
            <Button className="absolute right-2 top-2 bottom-2 bg-[#4b3624] rounded-full px-8">
              Explore
            </Button>
          </div>
        </div>
      </section>

      {/* Choose the Right Virtual Office Package */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-4">
              Choose the Right Package
            </h2>
            <div className="h-1.5 w-24 bg-[#d4a574] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Business Address */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#d4a574] transition-colors duration-300">
                <Building2 className="w-7 h-7 text-[#4b3624] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">
                Business Address
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Establish your business with a professional address in a prime
                location.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-8 border-t border-gray-50 pt-6">
                <li className="flex items-center gap-2">
                  • Prime business address
                </li>
                <li className="flex items-center gap-2">
                  • Use on websites & stationery
                </li>
                <li className="flex items-center gap-2">
                  • 4,000+ locations worldwide
                </li>
              </ul>
              <div className="flex flex-col gap-3">
                <Button className="w-full bg-[#4b3624] text-white rounded-xl">
                  Enquire now
                </Button>
                <Link
                  href="/business-address"
                  className="text-center text-[#d4a574] font-medium text-sm hover:underline"
                >
                  Learn more
                </Link>
              </div>
            </div>

            {/* Virtual Office */}
            <div className="bg-white p-8 rounded-[2rem] shadow-lg border-2 border-[#d4a574]/20 flex flex-col h-full relative group hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#d4a574] text-white text-[10px] uppercase tracking-widest px-4 py-1 rounded-full font-bold">
                Most Popular
              </div>
              <div className="w-14 h-14 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#d4a574] transition-colors duration-300">
                <Monitor className="w-7 h-7 text-[#4b3624] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">
                Virtual Office
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Our most popular option for growing businesses needing
                receptionist support.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-8 border-t border-gray-50 pt-6">
                <li className="flex items-center gap-2">
                  • Prestigious business address
                </li>
                <li className="flex items-center gap-2">
                  • Professional call answering
                </li>
                <li className="flex items-center gap-2">
                  • Access to global network
                </li>
              </ul>
              <div className="flex flex-col gap-3">
                <Button className="w-full bg-[#d4a574] text-white rounded-xl">
                  Enquire now
                </Button>
                <Link
                  href="/virtual-offices"
                  className="text-center text-[#d4a574] font-medium text-sm hover:underline"
                >
                  Learn more
                </Link>
              </div>
            </div>

            {/* Virtual Office Plus */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-[#fbf7f2] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#d4a574] transition-colors duration-300">
                <Plus className="w-7 h-7 text-[#4b3624] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#4b3624] mb-4">
                Virtual Office Plus
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                The most comprehensive virtual solution with physical workspace
                access.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-8 border-t border-gray-50 pt-6">
                <li className="flex items-center gap-2">
                  • All Virtual Office benefits
                </li>
                <li className="flex items-center gap-2">
                  • Access to meeting rooms
                </li>
                <li className="flex items-center gap-2">
                  • 5 days private office space/mo
                </li>
              </ul>
              <div className="flex flex-col gap-3">
                <Button className="w-full bg-[#4b3624] text-white rounded-xl">
                  Enquire now
                </Button>
                <Link
                  href="/virtual-offices"
                  className="text-center text-[#d4a574] font-medium text-sm hover:underline"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Advice CTA */}
      <section className="py-20">
        <div className="container px-4">
          <div className="bg-[#4b3624] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4a574]/10 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Need Some Expert Advice?
                </h2>
                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                  Arrange a one-to-one call with a virtual office specialist.
                  Our advisors are available worldwide to help you find the
                  right fit.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 mb-10">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-[#d4a574]" />
                    <span className="text-sm">Global Advisors</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-[#d4a574]" />
                    <span className="text-sm">Tailored Support</span>
                  </div>
                </div>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-[#d4a574] hover:bg-[#c39665] text-white px-10 py-7 text-lg rounded-full"
                  >
                    Talk to an expert
                  </Button>
                </Link>
              </div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl skew-y-2 group-hover:skew-y-0 transition-transform duration-700">
                <Image
                  src="/virtual-offices2.jpeg"
                  alt="Specialist Support"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengthen Presence (Values) */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8 leading-tight">
                Strengthen Your Business <br /> Presence Anywhere
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                A virtual office allows you to establish a presence in any city,
                while working from home or remotely. You gain the benefits of a
                professional address without the overheads.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Prestigious locations",
                    desc: "Build credibility with an address in key business districts.",
                  },
                  {
                    title: "Lower costs",
                    desc: "Avoid rent, utilities, and expensive staffing expenses.",
                  },
                  {
                    title: "Company registration",
                    desc: "Use your virtual address to register your business legally.",
                  },
                  {
                    title: "Global expansion",
                    desc: "Enter new markets instantly with a local presence.",
                  },
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
            </div>
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="/virtual-offices3.jpeg"
                alt="Global Presence"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="py-24 bg-[#4b3624] text-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Who Can Benefit?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Virtual offices support businesses and professionals at every
              stage of their growth journey.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Startups",
                desc: "Launch with a credible, professional image from day one.",
                icon: Target,
              },
              {
                title: "Small Businesses",
                desc: "Expand internationally without major investment.",
                icon: Briefcase,
              },
              {
                title: "Large Enterprises",
                desc: "Establish satellite locations quickly and easily.",
                icon: Building2,
              },
              {
                title: "Freelancers",
                desc: "Work remotely while protecting privacy and managing mail.",
                icon: User,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#d4a574] flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What’s Included */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-6">
              What’s Included
            </h2>
            <p className="text-lg text-gray-600">
              Every plan includes essential business support to keep you
              connected.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Professional address",
                icon: MapPin,
                desc: "A recognised address for official and marketing use.",
              },
              {
                title: "Mail handling",
                icon: Mail,
                desc: "Secure handling and forwarding options for your correspondence.",
              },
              {
                title: "Reception support",
                icon: Users,
                desc: "Experienced receptionists to greet your calls and guests.",
              },
              {
                title: "Business discounts",
                icon: CreditCard,
                desc: "Exclusive invitations to networking and professional events.",
              },
              {
                title: "Airport lounge access",
                icon: Plane,
                desc: "Discounted access for professionals on the move.",
              },
              {
                title: "Workspace credits",
                icon: Briefcase,
                desc: "On-demand access to meeting rooms and physical office space.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#fbf7f2] flex items-center justify-center text-[#d4a574]">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#4b3624] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Telephone Answering Services */}
      <section className="py-24 bg-[#fbf7f2]">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden order-2 md:order-1 shadow-xl">
              <Image
                src="/virtual-offices4.jpeg"
                alt="Call Handling"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#4b3624] mb-8 leading-tight">
                Professional Telephone <br /> Answering Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Need help managing calls? Add a local phone number with
                professional call handling. Never miss an important opportunity
                again.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#d4a574]" />
                  <span className="font-medium text-[#4b3624]">
                    Calls answered in your company name
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#d4a574]" />
                  <span className="font-medium text-[#4b3624]">
                    Messages taken or forwarded to you
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#d4a574]" />
                  <span className="font-medium text-[#4b3624]">
                    Local business number included
                  </span>
                </div>
              </div>
              <Button className="bg-[#4b3624] text-white rounded-full px-8 py-6">
                Explore Telephone Answering
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA / Growth */}
      <section className="py-24 bg-white text-center">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#4b3624] mb-8">
            Virtual Offices That Move With Your Business
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            As your business grows, your virtual office can grow with it. Speak
            with our team to create a bespoke package that fits your expansion
            plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#d4a574] text-white hover:bg-[#b58b61] rounded-full px-12 py-7 text-lg shadow-xl"
              >
                Enquire now
              </Button>
            </Link>
            <Link href="/locations">
              <Button
                size="lg"
                variant="outline"
                className="border-[#4b3624] text-[#4b3624] rounded-full px-12 py-7 text-lg"
              >
                View All Locations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// User icon missing from standard lucide sometimes in older versions
const User = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MapPin = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
