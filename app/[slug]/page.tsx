import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getServiceBySlug, services } from "@/lib/services";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ServiceGallery } from "@/components/service-gallery";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";

interface ServicePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  // Use the first image as the hero background, fallback to a default if missing
  const heroImage =
    service.images && service.images.length > 0
      ? service.images[0]
      : "/hero.jpg";

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-black text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={service.name}
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        </div>

        {/* Back to Home Button */}
        <div className="absolute top-6 left-4 z-20 md:left-8 md:top-8">
           <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-full border-white/20 bg-black/20 text-white backdrop-blur-md hover:bg-white/10 hover:text-white border-none"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 flex flex-col items-center text-center space-y-6 px-4 py-20">
          <Badge
            variant="outline"
            className="bg-white/10 text-white backdrop-blur-md hover:bg-white/20 px-4 py-1.5 text-sm uppercase tracking-wider"
          >
            {service.name}
          </Badge>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            {service.short}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" className="rounded-full bg-[#594d46] hover:bg-[#4b3624] text-white px-8">
              <Link href="#enquiry">Enquire Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/30 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
            >
              <Link href="/">Explore All Spaces</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container relative z-20 -mt-16 sm:-mt-20">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          {/* Main Content Card */}
          <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/5 sm:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">About this Space</h2>
            <p className="text-lg leading-relaxed text-gray-600 mb-8">
              {service.description}
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
             <ul className="grid gap-4 sm:grid-cols-2">
              {service.highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f6efe6]">
                    <Check className="h-4 w-4 text-[#594d46]" />
                  </div>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sticky Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24 h-fit">
            <div className="rounded-3xl bg-[#1f1f1f] p-8 text-white shadow-xl">
              <h3 className="text-lg font-semibold mb-2">Included Membership</h3>
              <p className="text-sm text-gray-400 mb-6">
                Every Streamline membership comes with premium perks.
              </p>
              <ul className="space-y-4">
                {[
                  "Complimentary tea & coffee",
                  "High-speed secure Wi-Fi",
                  "On-site reception team",
                  "Access to networking events",
                  "IT & Admin support",
                ].map((perk, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                     <span className="h-1.5 w-1.5 rounded-full bg-[#594d46]" />
                    <span className="text-gray-300">{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="rounded-3xl bg-[#f6efe6] p-8">
                <h3 className="font-semibold text-[#594d46] mb-2">Need help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                    Our team is here to answer any questions you might have about this space.
                </p>
                <Button variant="ghost" className="p-0 h-auto text-[#594d46] font-semibold gap-1 hover:no-underline hover:opacity-80">
                     <Link href="/contact" className="flex items-center gap-2">Contact Support <ArrowRight className="h-4 w-4" /></Link>
                </Button>
            </div>
          </div>
        </div>
      </div>

       {/* Gallery Section */}
      {service.images && service.images.length > 0 && (
        <section className="py-20 md:py-28">
           <div className="container">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
               <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Gallery</h2>
                <p className="mt-4 text-gray-600">
                    Take a closer look at the environment we&apos;ve styled for your success.
                </p>
            </div>
            <ServiceGallery images={service.images} />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section id="enquiry" className="bg-[#594d46] py-20 text-white">
        <div className="container max-w-4xl text-center space-y-8">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                Ready to get started?
            </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Please tell us a bit about your requirements and we&apos;ll help you find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <Button size="lg" className="w-full sm:w-auto rounded-full bg-white text-[#594d46] hover:bg-gray-100 font-semibold text-lg px-8 h-14">
                    <Link href="/contact">Request a Quote</Link>
                </Button>
                 <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 font-medium text-lg px-8 h-14">
                    <Link href="tel:+971505229908">Call Expert</Link>
                </Button>
            </div>
        </div>
      </section>

    </div>
  );
}
