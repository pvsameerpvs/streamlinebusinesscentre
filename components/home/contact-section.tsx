// components/home/contact-section.tsx
import { MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { services } from "@/lib/services";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#fffbf6] pb-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold font-serif  text-[#4b3624]">
            Ready to Transform Your Workspace?
          </h2>
          <p className="text-[#4b3624]/70">
            Talk to our team about your next office.
          </p>

          <div className="mt-8 flex justify-center gap-12 text-[#4b3624]">
            <div className="flex flex-col items-center gap-2">
              <Phone className="h-6 w-6" />
              <span className="text-sm">+971 52 491 2024</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="h-6 w-6" />
              <span className="text-sm">
                The Regal Tower, Business Bay, Dubai, UAE
              </span>
            </div>
          </div>
        </div>

        <Card className="mx-auto max-w-3xl border-none bg-white p-8 shadow-xl">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-semibold text-[#4b3624]">Get in touch</h3>
            <p className="text-sm text-muted-foreground">
              We&apos;ll get back to you within 24 hours
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-[#4b3624]">
                  Full Name *
                </label>
                <Input className="border-gray-200 bg-gray-50" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-[#4b3624]">
                  Email Address *
                </label>
                <Input type="email" className="border-gray-200 bg-gray-50" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-[#4b3624]">
                  Phone Number *
                </label>
                <Input className="border-gray-200 bg-gray-50" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-[#4b3624]">
                  Company Name
                </label>
                <Input className="border-gray-200 bg-gray-50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-[#4b3624]">
                Service of interest *
              </label>
              <Select>
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {service.name}
                  </option>
                ))}
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-[#4b3624]">
                Message *
              </label>
              <Textarea
                className="min-h-[100px] border-gray-200 bg-gray-50"
                placeholder="Tell us about your workspace requirements..."
              />
            </div>

            <div className="text-center">
              <p className="mb-4 text-xs text-muted-foreground">
                By submitting this form you agree to receive updates about
                Streamline Business Centre spaces and services.
              </p>
              <Button className="w-full rounded bg-[#594d46] py-6 text-white hover:bg-[#4b3624]">
                Send Enquiry
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
