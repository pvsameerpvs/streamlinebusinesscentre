import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
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

export function ContactSection() {
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
              <div className="mb-10">
                <h3 className="text-3xl font-bold text-white mb-3">Get in Touch</h3>
                <p className="text-white/60 font-medium">Complete the form below and we&apos;ll get back to you within 24 hours.</p>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#d4a574]">Full Name</label>
                  <Input 
                    placeholder="Enter your name"
                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:bg-white/10 focus:border-[#d4a574]/50 transition-all" 
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#d4a574]">Email Address</label>
                    <Input 
                      type="email"
                      placeholder="email@example.com"
                      className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:bg-white/10" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#d4a574]">Phone Number</label>
                    <Input 
                      placeholder="+971"
                      className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:bg-white/10" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#d4a574]">Service of Interest</label>
                  <Select>
                    <SelectTrigger className="h-14 bg-white/5 border-white/10 text-white rounded-2xl focus:ring-0">
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
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#d4a574]">Message</label>
                  <Textarea 
                    placeholder="Tell us about your requirements"
                    className="min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:bg-white/10 focus:border-[#d4a574]/50 transition-all resize-none" 
                  />
                </div>

                <Button className="w-full h-16 bg-[#d4a574] hover:bg-[#c49564] text-[#4b3624] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-95 flex gap-3">
                  <Send className="w-5 h-5" />
                  Send Enquiry
                </Button>

                <p className="text-center text-[10px] text-white/40 uppercase tracking-widest leading-loose mt-8">
                  By submitting you agree to our terms and privacy policy regarding communications.
                </p>
              </form>
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
