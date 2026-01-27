"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Phone, 
  Menu, 
  Search, 
  ChevronRight, 
  X, 
  ArrowLeft,
  User,
  Building2,
  Monitor,
  Presentation,
  IdCard,
  CalendarDays
} from "lucide-react";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [menuView, setMenuView] = useState<"main" | "get-started">("main");

  const getStartedItems = [
    { label: "Talk to an expert", icon: User, href: "/contact" },
    { label: "Find an Office Space", icon: Building2, href: "/office-space" },
    { label: "Buy a virtual office", icon: Monitor, href: "/virtual-offices" },
    { label: "Book a meeting room", icon: Presentation, href: "/meeting-spaces" },
    { label: "Buy a Membership", icon: IdCard, href: "/membership" },
    { label: "Book a day office", icon: CalendarDays, href: "/day-offices" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fbf7f2] py-2 shadow-sm px-4">
      <div className="flex items-center justify-between gap-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
            priority
            className="h-12 w-12 object-contain md:h-14 md:w-14 lg:h-16 lg:w-16"
          />
        </Link>

        {/* Search Bar (desktop only) */}
        <div className="hidden max-w-md flex-1 md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search For a Location"
              className="h-10 rounded-full border-gray-200 bg-white pl-10 shadow-sm focus-visible:ring-1 focus-visible:ring-[#4b3624]"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="default"
                className="hidden h-10 gap-2 rounded-full bg-[#594d46] px-4 text-sm text-white hover:bg-[#4b3624] lg:flex"
              >
                <Phone className="h-4 w-4" />
                +971 50 522 9908
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <a href="tel:+971505229908" className="flex items-center gap-2 w-full">
                  <Phone className="h-4 w-4" />
                  +971 50 522 9908
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="tel:+97143372857" className="flex items-center gap-2 w-full">
                  <Phone className="h-4 w-4" />
                  +971 4 337 2857
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="default"
            className="hidden h-10 rounded-full bg-[#594d46] px-6 text-sm text-white hover:bg-[#4b3624] md:flex"
            onClick={() => setMenuView("get-started")}
          >
            Contact Us
          </Button>

          {/* Menu + Sidebar */}
          <Sheet onOpenChange={(open: boolean) => !open && setMenuView("main")}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-md border-gray-200 bg-white hover:bg-gray-50"
              >
                <Menu className="h-5 w-5 text-[#594d46]" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[90vw] max-w-[380px] p-0 h-[100dvh] overflow-y-auto bg-white"
            >
              {menuView === "main" ? (
                <>
                  {/* Top (logo + close) */}
                  <div className="relative bg-white px-4 pt-4">
                    <SheetClose asChild>
                      <button
                        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                        aria-label="Close"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </SheetClose>

                    <div className="flex justify-center pb-4">
                      <Image
                        src="/logo.png"
                        alt="Streamline"
                        width={96}
                        height={96}
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* Menu items */}
                  <div className="bg-white px-4">
                    <div className="space-y-1 py-2">
                      <button
                        onClick={() => setMenuView("get-started")}
                        className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-base font-medium text-[#1f1f1f] hover:bg-gray-50 transition-colors"
                      >
                        <span>Get Started</span>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </button>
                      {[
                        { label: "Products", href: "/products" },
                        { label: "Discover Streamline", href: "/discover" },
                        { label: "Help", href: "/help" },
                      ].map((item) => (
                        <SheetClose asChild key={item.href}>
                          <Link
                            href={item.href}
                            className="flex items-center justify-between rounded-lg px-2 py-2 text-base font-medium text-[#1f1f1f] hover:bg-gray-50"
                          >
                            <span>{item.label}</span>
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          </Link>
                        </SheetClose>
                      ))}
                    </div>

                    {/* Contact card */}
                    <div className="mt-3 rounded-xl bg-[#f6efe6] p-4">
                      <h3 className="text-base font-semibold text-[#1f1f1f]">Contact us</h3>
                      <p className="mt-2 text-xs leading-relaxed text-gray-600">
                        We have a team of specialists available 24/7 to help you find the best
                        solution for your business.
                      </p>

                      <SheetClose asChild>
                        <Link href="/contact">
                          <Button className="mt-3 h-10 w-full rounded-full bg-[#594d46] text-xs text-white hover:bg-[#4b3624]">
                            CONTACT US
                          </Button>
                        </Link>
                      </SheetClose>
                    </div>

                    {/* Account section */}
                    <div className="mt-4 pb-6">
                      <h4 className="text-base font-semibold text-[#1f1f1f]">
                        Streamline account
                      </h4>
                      <p className="mt-1 text-xs text-gray-600">
                        Manage all of your workspace and business needs.
                      </p>

                      <div className="mt-2 space-y-1">
                        {[
                          { label: "Register", href: "/register" },
                          { label: "Login", href: "/login" },
                        ].map((item) => (
                          <SheetClose asChild key={item.href}>
                            <Link
                              href={item.href}
                              className="flex items-center justify-between rounded-lg px-2 py-2 text-base font-medium text-[#1f1f1f] hover:bg-gray-50"
                            >
                              <span>{item.label}</span>
                              <ChevronRight className="h-4 w-4 text-gray-400" />
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col h-full bg-white">
                  {/* Header for Get Started */}
                  <div className="flex items-center justify-between px-6 py-6 border-b border-gray-50">
                    <button 
                      onClick={() => setMenuView("main")}
                      className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors group"
                    >
                      <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                      <span className="text-lg font-medium">Go back</span>
                    </button>
                    <SheetClose asChild>
                      <button className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100">
                        <X className="h-6 w-6 text-gray-400" />
                      </button>
                    </SheetClose>
                  </div>

                  <div className="px-6 py-8">
                    <h2 className="text-4xl font-bold text-[#454545] mb-10 tracking-tight">Get started</h2>
                    
                    <div className="space-y-6">
                      {getStartedItems.map((item) => (
                        <SheetClose asChild key={item.label}>
                          <Link 
                            href={item.href}
                            className="flex items-center gap-6 group py-2"
                          >
                            <div className="w-10 h-10 flex items-center justify-center text-[#454545] transition-colors group-hover:text-[#bf9445]">
                              <item.icon className="h-8 w-8" strokeWidth={1.5} />
                            </div>
                            <span className="text-xl font-medium text-[#454545] group-hover:text-black transition-colors">
                              {item.label}
                            </span>
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
