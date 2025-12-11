import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4a574]">
                Streamline Business Centre
              </h3>
              <p className="text-xs leading-relaxed text-gray-400">
                Premium office spaces designed for success. Join our community of innovators and entrepreneurs.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-[#d4a574]">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#d4a574]">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#d4a574]">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#d4a574]">
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#d4a574]">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/locations" className="hover:text-white">Locations</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#d4a574]">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/office-space" className="hover:text-white">Office Space</Link></li>
              <li><Link href="/coworking" className="hover:text-white">Coworking</Link></li>
              <li><Link href="/virtual-offices" className="hover:text-white">Virtual Offices</Link></li>
              <li><Link href="/meeting-spaces" className="hover:text-white">Meeting Spaces</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#d4a574]">
              Newsletter
            </h3>
            <p className="mb-4 text-xs text-gray-400">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter your email" 
                className="border-gray-700 bg-white/5 text-white placeholder:text-gray-500 focus-visible:ring-[#d4a574]"
              />
              <Button className="bg-[#d4a574] text-[#4b3624] hover:bg-[#c29463]">
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-gray-500">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>© 2024 Streamline Business Centre. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-white">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
