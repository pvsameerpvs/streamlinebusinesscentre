export type ServiceSlug =
  | "office-space"
  | "coworking"
  | "virtual-offices"
  | "meeting-spaces"
  | "membership"
  | "business-address"
  | "events"
  | "private-offices"
  | "hot-desks"
  | "conference-rooms"
  | "dedicated-desks"
  | "phone-booths"
  | "reception-services"
  | "mail-handling"
  | "networking-events"
  | "business-lounge"
  | "day-offices"
  | "storage-solutions"
  | "printing-services"
  | "it-support";

export interface Service {
  slug: ServiceSlug;
  name: string;
  short: string;
  description: string;
  highlights: string[];
}

export const services: Service[] = [
  {
    slug: "office-space",
    name: "Office Space",
    short: "From a single desk to a whole building.",
    description:
      "Private, secure and fully-serviced offices designed for teams that need a dedicated space to focus and grow.",
    highlights: [
      "Move-in ready suites with premium furniture",
      "Front-desk reception and guest greeting",
      "On-site IT, cleaning and maintenance included"
    ]
  },
  {
    slug: "coworking",
    name: "Coworking",
    short: "Flexible desks for modern teams.",
    description:
      "Drop into a vibrant coworking lounge with focus zones, collaboration areas and everything you need to get work done.",
    highlights: [
      "Hot and dedicated desks available",
      "Complimentary tea, coffee and filtered water",
      "Secure high-speed Wi‑Fi and printing"
    ]
  },
  {
    slug: "virtual-offices",
    name: "Virtual Offices",
    short: "A prestigious business address, without the commute.",
    description:
      "Use our prime business address on your website, stationery and legal documents while we handle your mail and calls.",
    highlights: [
      "Mail handling and forwarding",
      "Local phone number and call answering options",
      "On-demand meeting room access"
    ]
  },
  {
    slug: "meeting-spaces",
    name: "Meeting Spaces",
    short: "Rooms for pitches, workshops and board meetings.",
    description:
      "Beautifully designed meeting rooms with integrated screens, whiteboards and secure connectivity.",
    highlights: [
      "Book by the hour or the day",
      "HD display, video conferencing and whiteboards",
      "Catering and concierge support on request"
    ]
  },
  {
    slug: "membership",
    name: "Membership",
    short: "One membership, every workspace.",
    description:
      "Enjoy roaming access to lounges, desks and meeting areas with a membership that flexes as fast as you do.",
    highlights: [
      "Drop in to any participating Streamline location",
      "Exclusive community events and partner perks",
      "Ideal for hybrid and remote-first teams"
    ]
  },
  {
    slug: "business-address",
    name: "Business Address",
    short: "Anchor your brand in a recognised location.",
    description:
      "Establish credibility with a recognised address in Dubai while keeping your home details private.",
    highlights: [
      "Use on trade licences, invoices and marketing",
      "Mail handling by our front-of-house team",
      "Optional virtual office and call answering"
    ]
  },
  {
    slug: "events",
    name: "Events",
    short: "Host product launches, panels and more.",
    description:
      "Transformable event spaces with AV, staging and catering options for memorable gatherings.",
    highlights: [
      "Configurable layouts for 10–150 guests",
      "Professional AV and recording support",
      "On-site event coordination"
    ]
  },
  {
    slug: "private-offices",
    name: "Private Offices",
    short: "Enclosed, lockable offices for full focus.",
    description:
      "Give your team a secure base with fully-equipped private offices tailored around your headcount.",
    highlights: [
      "24/7 access with secure entry",
      "Ergonomic furniture and storage",
      "Custom branding options"
    ]
  },
  {
    slug: "hot-desks",
    name: "Hot Desks",
    short: "Choose a new desk, every day.",
    description:
      "Grab a seat in our shared workspace, plug in and get to work — perfect for freelancers and hybrid teams.",
    highlights: [
      "First-come, first-served desk access",
      "Community kitchen and lounge",
      "Business-grade Wi‑Fi"
    ]
  },
  {
    slug: "conference-rooms",
    name: "Conference Rooms",
    short: "Board-ready spaces for big decisions.",
    description:
      "Executive boardrooms with statement design, presentation tech and support staff.",
    highlights: [
      "Large screens and video conferencing",
      "Premium furnishings and finishes",
      "On-site support team"
    ]
  },
  {
    slug: "dedicated-desks",
    name: "Dedicated Desks",
    short: "Your own desk in a shared office.",
    description:
      "Leave your monitor, notes and personal setup in a dedicated spot that’s always yours.",
    highlights: [
      "Lockable pedestal storage",
      "24/7 access to your desk",
      "Access to meeting rooms and phone booths"
    ]
  },
  {
    slug: "phone-booths",
    name: "Phone Booths",
    short: "Quiet calls, crystal-clear audio.",
    description:
      "Sound-treated phone booths designed for focus, privacy and perfect video calls.",
    highlights: [
      "Acoustic insulation and ventilation",
      "Built-in power and lighting",
      "Ideal for video calls and interviews"
    ]
  },
  {
    slug: "reception-services",
    name: "Reception Services",
    short: "A trained front-of-house team, for you.",
    description:
      "Professional receptionists to greet guests, handle deliveries and support your team.",
    highlights: [
      "Branded welcome experience",
      "Mail and courier coordination",
      "Visitor registration and assistance"
    ]
  },
  {
    slug: "mail-handling",
    name: "Mail Handling",
    short: "We’ll sign, sort and store your mail.",
    description:
      "Let us handle inbound mail and parcels with secure storage and optional forwarding.",
    highlights: [
      "Daily sorting and notifications",
      "Optional scanning and forwarding",
      "Secure package storage"
    ]
  },
  {
    slug: "networking-events",
    name: "Networking Events",
    short: "Connect with founders and operators.",
    description:
      "Curated events that bring together early-stage founders, investors and operators.",
    highlights: [
      "Workshops, panels and office-hours",
      "Partner offers from local ecosystem builders",
      "Showcase opportunities for members"
    ]
  },
  {
    slug: "business-lounge",
    name: "Business Lounge",
    short: "A calm lounge, built for laptop life.",
    description:
      "Soft seating, café tables and quiet corners for relaxed work and informal meetings.",
    highlights: [
      "Complimentary tea, coffee and water",
      "Power outlets at every seat",
      "Drop-in friendly access"
    ]
  },
  {
    slug: "day-offices",
    name: "Day Offices",
    short: "A private office, just for the day.",
    description:
      "Book a fully furnished office by the day when you need more privacy than a coworking desk.",
    highlights: [
      "Includes Wi‑Fi, utilities and cleaning",
      "Access to shared amenities and kitchen",
      "Perfect for interviews and workshops"
    ]
  },
  {
    slug: "storage-solutions",
    name: "Storage Solutions",
    short: "Lockable storage for stock and files.",
    description:
      "Add extra lockers and storage rooms to keep hardware, documents and inventory secure.",
    highlights: [
      "On-floor and basement storage options",
      "Flexible terms aligned to your office",
      "24/7 monitored access"
    ]
  },
  {
    slug: "printing-services",
    name: "Printing Services",
    short: "Business-grade printing on demand.",
    description:
      "Centralised print, copy and scan facilities with simple, usage-based pricing.",
    highlights: [
      "Secure print release",
      "Colour and large-format options",
      "Help from our community team"
    ]
  },
  {
    slug: "it-support",
    name: "IT Support",
    short: "Tech that just works, every day.",
    description:
      "On-site IT experts to keep your team online, secure and supported.",
    highlights: [
      "Network setup and monitoring",
      "Help with devices and conference tools",
      "Enterprise-ready security standards"
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
