"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  CheckCircle2,
  Globe,
  Headset,
  CalendarDays
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Phone number must be at least 7 characters"),
  companyName: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      service: "Office Space",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    console.log("Form data:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/office-tab4.jpg"
          alt="Contact Streamline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 px-4 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[#d4a574] text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <Headset className="w-4 h-4" />
            <span>Support 24/7</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Talk to an Expert
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about our workspace solutions? Our dedicated team is here to help you find the perfect fit for your business.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left Column: Form */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#4b3624] mb-4">Send us a message</h2>
                <p className="text-gray-500">Fill out the form below and we'll get back to you within 2 business hours.</p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#4b3624] uppercase tracking-wider">Full Name</label>
                      <Input 
                        {...register("fullName")}
                        placeholder="John Doe" 
                        className={`h-14 rounded-xl border-gray-200 focus-visible:ring-[#d4a574] ${errors.fullName ? "border-red-500" : ""}`} 
                      />
                      {errors.fullName && <p className="text-xs text-red-500">{errors.fullName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#4b3624] uppercase tracking-wider">Email Address</label>
                      <Input 
                        {...register("email")}
                        type="email" 
                        placeholder="john@example.com" 
                        className={`h-14 rounded-xl border-gray-200 focus-visible:ring-[#d4a574] ${errors.email ? "border-red-500" : ""}`} 
                      />
                      {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#4b3624] uppercase tracking-wider">Phone Number</label>
                      <Input 
                        {...register("phone")}
                        placeholder="+971 5X XXX XXXX" 
                        className={`h-14 rounded-xl border-gray-200 focus-visible:ring-[#d4a574] ${errors.phone ? "border-red-500" : ""}`} 
                      />
                      {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#4b3624] uppercase tracking-wider">Company Name</label>
                      <Input 
                        {...register("companyName")}
                        placeholder="Your Company" 
                        className="h-14 rounded-xl border-gray-200 focus-visible:ring-[#d4a574]" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#4b3624] uppercase tracking-wider">Service of Interest</label>
                    <select 
                      {...register("service")}
                      className={`flex h-14 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a574] disabled:cursor-not-allowed disabled:opacity-50 ${errors.service ? "border-red-500" : ""}`}
                    >
                      <option value="Office Space">Office Space</option>
                      <option value="Coworking">Coworking</option>
                      <option value="Virtual Office">Virtual Office</option>
                      <option value="Meeting Rooms">Meeting Rooms</option>
                      <option value="Membership">Membership</option>
                    </select>
                    {errors.service && <p className="text-xs text-red-500">{errors.service.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#4b3624] uppercase tracking-wider">Your Message</label>
                    <Textarea 
                      {...register("message")}
                      placeholder="How can we help you?" 
                      className={`min-h-[150px] rounded-xl border-gray-200 focus-visible:ring-[#d4a574] ${errors.message ? "border-red-500" : ""}`} 
                    />
                    {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-16 bg-[#d4a574] hover:bg-[#b08963] text-white text-lg font-bold rounded-xl shadow-xl transition-all hover:-translate-y-1"
                  >
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send Message <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="bg-[#fbf7f2] p-10 rounded-[2.5rem] text-center space-y-6 border border-[#d4a574]/20 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-[#d4a574] rounded-full flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#4b3624]">Message Sent!</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Thank you for reaching out. One of our experts will contact you shortly to discuss your requirements.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setSubmitted(false)}
                    className="rounded-full px-8 py-6 border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-white"
                  >
                    Send another message
                  </Button>
                </div>
              )}
            </div>

            {/* Right Column: Contact Info */}
            <div className="lg:pl-10 space-y-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-[#4b3624]">Contact Information</h3>
                
                <div className="grid gap-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-[#fbf7f2] rounded-2xl flex items-center justify-center text-[#d4a574] flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#4b3624] mb-1">Call Us</h4>
                      <p className="text-gray-500 text-sm mb-1">Direct support available 24/7</p>
                      <a href="tel:+971505229908" className="text-lg font-bold text-[#4b3624] hover:text-[#d4a574] transition-colors">
                        +971 50 522 9908
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-[#fbf7f2] rounded-2xl flex items-center justify-center text-[#d4a574] flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#4b3624] mb-1">Email Us</h4>
                      <p className="text-gray-500 text-sm mb-1">We respond within 2 hours</p>
                      <a href="mailto:info@streamline.ae" className="text-lg font-bold text-[#4b3624] hover:text-[#d4a574] transition-colors">
                        info@streamline.ae
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-[#fbf7f2] rounded-2xl flex items-center justify-center text-[#d4a574] flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#4b3624] mb-1">Main Office</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Streamline Business Centre,<br />
                        Burjuman Business Tower, Level 10,<br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-[#fbf7f2] rounded-2xl flex items-center justify-center text-[#d4a574] flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#4b3624] mb-1">Business Hours</h4>
                      <div className="text-sm text-gray-500 space-y-1">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendly Booking Card */}
              <div className="bg-[#4b3624] p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4a574]/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-[#d4a574]/20 transition-all duration-500" />
                <h3 className="text-2xl font-bold mb-4 relative z-10">Prefer a Direct Call?</h3>
                <p className="text-gray-300 text-sm mb-8 leading-relaxed relative z-10">
                  Schedule a 30-minute sales meeting directly with our team at your convenience.
                </p>
                <Button 
                  asChild
                  className="w-full h-14 bg-[#d4a574] hover:bg-[#b08963] text-[#4b3624] font-bold rounded-xl shadow-lg relative z-10 transition-transform active:scale-95"
                >
                  <a href="https://calendly.com/streamlinebusinesscenter-sales/30min" target="_blank" rel="noopener noreferrer">
                    Book a Sales Meeting <CalendarDays className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>

              {/* Map Placeholder/CTA */}
              <div className="relative h-[250px] rounded-[2.5rem] overflow-hidden group shadow-2xl">
                <Image src="/office-1.jpeg" alt="Our Location" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[#4b3624]/20 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-2xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-[#d4a574]" />
                      <span className="font-bold text-[#4b3624]">4,000+ Global Locations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof/footer note */}
      <section className="py-20 bg-[#fbf7f2] border-t border-[#d4a574]/10">
        <div className="container px-4 text-center">
          <MessageSquare className="w-12 h-12 text-[#d4a574] mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#4b3624] mb-8 italic">Reliable support, whenever you need it.</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { label: "8M+", sub: "Customers Globally" },
              { label: "24/7", sub: "Support Availability" },
              { label: "100+", sub: "Major Cities" },
              { label: "4.9/5", sub: "Customer Rating" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-black text-[#d4a574] mb-1">{stat.label}</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
