"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import NextImage from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/lib/services";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Phone number must be at least 7 characters"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactValues) => {
    setIsSubmitting(true);
    console.log("Contact form data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#d4a574]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-[#4b3624]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Content & Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-[#4b3624] leading-[1.1] tracking-tight">
                Let&apos;s Design Your <br />
                <span className="text-[#d4a574]">Future Workspace.</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-500 max-w-xl font-medium leading-relaxed">
                Our experts are ready to help you find the perfect solution for your business. Reach out today for a personalized consultation.
              </p>
              <div className="pt-4">
                <Button 
                  asChild
                  className="h-14 px-8 bg-[#d4a574] hover:bg-[#b08963] text-[#4b3624] font-bold rounded-2xl shadow-lg transition-transform hover:scale-[1.02] active:scale-95 flex items-center gap-3 w-fit"
                >
                  <a href="https://calendly.com/streamlinebusinesscenter-sales/30min" target="_blank" rel="noopener noreferrer">
                    Book a Sales Meeting <Send className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Details Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="group space-y-4 p-6 rounded-3xl bg-[#fffbf6] border border-gray-100 hover:border-[#d4a574]/30 transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-[#d4a574]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#4b3624] text-sm uppercase tracking-wider mb-1">Call Us</h4>
                  <p className="text-lg font-bold text-[#4b3624]">+971 52 491 2024</p>
                </div>
              </div>

              <div className="group space-y-4 p-6 rounded-3xl bg-[#fffbf6] border border-gray-100 hover:border-[#d4a574]/30 transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-[#d4a574]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#4b3624] text-sm uppercase tracking-wider mb-1">Email Us</h4>
                  <p className="text-lg font-bold text-[#4b3624]">hello@streamline.ae</p>
                </div>
              </div>

              <div className="sm:col-span-2 group flex gap-6 p-6 rounded-3xl bg-[#fffbf6] border border-gray-100 hover:border-[#d4a574]/30 transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-2xl flex-shrink-0 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-[#d4a574]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#4b3624] text-sm uppercase tracking-wider mb-1">Our Location</h4>
                  <p className="text-lg font-bold text-[#4b3624]">The Regal Tower, 18th Floor, Business Bay, Dubai</p>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl group">
              <NextImage
                src="/contact_hero.png"
                alt="Professional Contact"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4b3624]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="relative">
            <div className="bg-[#4b3624] p-8 md:p-12 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(75,54,36,0.3)] border border-[#5d4634]">
              {submitted ? (
                <div className="text-center space-y-6 py-12 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-[#d4a574] rounded-full flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-10 h-10 text-[#4b3624]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Enquiry Sent!</h3>
                  <p className="text-white/60 font-medium">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <Button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 bg-[#d4a574] text-[#4b3624] hover:bg-[#c49564] font-bold rounded-2xl"
                  >
                    Send another enquiry
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <h3 className="text-3xl font-bold text-white mb-3">Get in Touch</h3>
                    <p className="text-white/60 font-medium">Complete the form below and we&apos;ll get back to you within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#d4a574]">Full Name</label>
                      <Input 
                        {...register("fullName")}
                        placeholder="Enter your name"
                        className={`h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:bg-white/10 focus:border-[#d4a574]/50 transition-all ${errors.fullName ? "border-red-500" : ""}`} 
                      />
                      {errors.fullName && <p className="text-xs text-red-400">{errors.fullName.message}</p>}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-[#d4a574]">Email Address</label>
                        <Input 
                          {...register("email")}
                          type="email"
                          placeholder="email@example.com"
                          className={`h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:bg-white/10 focus:border-[#d4a574]/50 ${errors.email ? "border-red-500" : ""}`} 
                        />
                        {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-[#d4a574]">Phone Number</label>
                        <Input 
                          {...register("phone")}
                          placeholder="+971"
                          className={`h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:bg-white/10 focus:border-[#d4a574]/50 ${errors.phone ? "border-red-500" : ""}`} 
                        />
                        {errors.phone && <p className="text-xs text-red-400">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#d4a574]">Service of Interest</label>
                      <Controller
                        name="service"
                        control={control}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger className={`h-14 bg-white/5 border-white/10 text-white rounded-2xl focus:ring-0 ${errors.service ? "border-red-500" : ""}`}>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#4b3624] border-[#5d4634] text-white">
                              {services.map((service) => (
                                <SelectItem key={service.slug} value={service.slug} className="focus:bg-[#d4a574] focus:text-white">
                                  {service.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.service && <p className="text-xs text-red-400">{errors.service.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#d4a574]">Message</label>
                      <Textarea 
                        {...register("message")}
                        placeholder="Tell us about your requirements"
                        className={`min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:bg-white/10 focus:border-[#d4a574]/50 transition-all resize-none ${errors.message ? "border-red-500" : ""}`} 
                      />
                      {errors.message && <p className="text-xs text-red-400">{errors.message.message}</p>}
                    </div>

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-16 bg-[#d4a574] hover:bg-[#c49564] text-[#4b3624] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-95 flex gap-3"
                    >
                      {isSubmitting ? "Sending..." : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Enquiry
                        </>
                      )}
                    </Button>

                    <p className="text-center text-[10px] text-white/40 uppercase tracking-widest leading-loose mt-8">
                      By submitting you agree to our terms and privacy policy regarding communications.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Floating Decorative Card */}
            <div className="absolute -bottom-10 -right-10 bg-[#d4a574] p-8 rounded-3xl shadow-2xl transform rotate-3 hidden xl:block">
              <div className="flex items-center gap-4 text-[#4b3624]">
                <Clock className="w-10 h-10" />
                <div>
                  <p className="text-sm font-black uppercase tracking-widest">Available 24/7</p>
                  <p className="text-xs opacity-80 uppercase tracking-widest">Fast Response Time</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

