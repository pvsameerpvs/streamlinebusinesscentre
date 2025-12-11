import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceBySlug, services } from "@/lib/services";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

  return (
    <div className="bg-background">
      <section className="border-b border-border/70 bg-[#151110] py-12 text-white md:py-16">
        <div className="container grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <Badge variant="dark" className="bg-white/10 text-[11px]">
              {service?.name}
            </Badge>
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {service?.short}
              </h1>
              <p className="max-w-xl text-sm text-white/80">
                {service?.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs">
              <Button asChild size="sm" variant="secondary">
                <Link href="#enquiry">Talk to an expert</Link>
              </Button>
              <Button asChild size="sm" variant="ghost">
                <Link href="/">Back to all workspaces</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl bg-gradient-to-tr from-[#423129] via-[#2a201c] to-[#151110] p-6 shadow-soft">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              Highlights
            </h2>
            <ul className="space-y-3 text-sm text-white/80">
              {service?.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Card className="mt-4 border-none bg-black/25 text-xs text-white/80">
              <CardContent className="space-y-1 px-4 py-3">
                <p className="font-medium text-white">
                  Included with every membership
                </p>
                <p>
                  Complimentary tea &amp; coffee · High-speed internet · On-site
                  reception · IT support · Access to networking events.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="enquiry"
        className="border-b border-border/70 bg-background py-10 md:py-14"
      >
        <div className="container space-y-6">
          <div className="max-w-xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Enquire about {service?.name}
            </p>
            <h2 className="text-2xl font-semibold">
              Share your requirements and our team will follow up shortly.
            </h2>
            <p className="text-sm text-muted-foreground">
              Tell us how many people you&apos;re planning for, your preferred
              move-in date and any special requirements such as dedicated
              meeting rooms, storage or branding.
            </p>
          </div>
          <Button asChild>
            <Link href="/#contact">Open full enquiry form</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
