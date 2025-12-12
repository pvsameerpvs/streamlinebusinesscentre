import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Menu, Search, ChevronRight, X } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#fbf7f2] py-4 shadow-sm px-5">
      <div className="flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
  <Image
    src="/logo.png"
    alt="Logo"
    width={140}          // bigger image source size for desktop
    height={140}
    priority
    className="h-14 w-14 object-contain md:h-20 md:w-20 lg:h-24 lg:w-24"
  />
</Link>


        {/* Search Bar */}
        <div className="hidden max-w-md flex-1 md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search For a Location"
              className="h-12 rounded-full border-gray-200 bg-white pl-10 shadow-sm focus-visible:ring-1 focus-visible:ring-[#4b3624]"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            variant="default"
            className="hidden h-12 gap-2 rounded-full bg-[#594d46] px-6 text-white hover:bg-[#4b3624] lg:flex"
          >
            <Phone className="h-4 w-4" />
            +971 52 617 7052
          </Button>

          <Button
            variant="default"
            className="hidden h-12 rounded-full bg-[#594d46] px-8 text-white hover:bg-[#4b3624] md:flex"
          >
            Contact Us
          </Button>

          {/* ✅ ONLY Menu button becomes sidebar trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-md border-gray-200 bg-white hover:bg-gray-50"
              >
                <Menu className="h-5 w-5 text-[#594d46]" />
              </Button>
            </SheetTrigger>

            <SheetContent
  side="right"
  className="w-screen max-w-[520px] p-0 h-[100dvh] overflow-y-auto"
>
              {/* Top (logo + close) */}
              <div className="relative bg-white px-6 pt-6">
                <SheetClose asChild>
                  <button
                    className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                    aria-label="Close"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </SheetClose>

                <div className="flex justify-center pb-6">
                  <Image
                    src="/logo.png"
                    alt="Streamline"
                    width={140}
                    height={140}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Menu items */}
              <div className="bg-white px-6">
                <div className="space-y-2 py-2">
                  {[
                    { label: "Get Started", href: "/get-started" },
                    { label: "Products", href: "/products" },
                    { label: "Discover Streamline", href: "/discover" },
                    { label: "Help", href: "/help" },
                  ].map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between rounded-xl px-2 py-4 text-2xl font-medium text-[#1f1f1f] hover:bg-gray-50"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="h-6 w-6 text-gray-400" />
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                {/* Contact card */}
                <div className="mt-6 rounded-2xl bg-[#f6efe6] p-6">
                  <h3 className="text-xl font-semibold text-[#1f1f1f]">
                    Contact us
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">
                    We have a team of specialists available 24/7 to help you find
                    the best solution for your business.
                  </p>

                  <SheetClose asChild>
                    <Link href="/contact">
                      <Button className="mt-6 h-14 w-[220px] rounded-full bg-[#594d46] text-lg text-white hover:bg-[#4b3624]">
                        CONTACT US
                      </Button>
                    </Link>
                  </SheetClose>
                </div>

                {/* Account section */}
                <div className="mt-10 pb-10">
                  <h4 className="text-xl font-semibold text-[#1f1f1f]">
                    Streamline account
                  </h4>
                  <p className="mt-2 text-base text-gray-600">
                    Manage all of your workspace and business needs.
                  </p>

                  <div className="mt-6 space-y-2">
                    {[
                      { label: "Register", href: "/register" },
                      { label: "Login", href: "/login" },
                    ].map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-center justify-between rounded-xl px-2 py-4 text-2xl font-medium text-[#1f1f1f] hover:bg-gray-50"
                        >
                          <span>{item.label}</span>
                          <ChevronRight className="h-6 w-6 text-gray-400" />
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
