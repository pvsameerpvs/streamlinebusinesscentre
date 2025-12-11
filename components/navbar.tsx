import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Globe, Menu, Search, Building2 } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#fbf7f2] py-4 shadow-sm">
      <div className="container flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col items-center justify-center rounded bg-[#dcd3c9] p-2 text-[#4b3624]">
             <Building2 className="h-8 w-8" />
          </div>
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

          <Button
            variant="outline"
            className="hidden h-12 gap-2 rounded-full border-gray-200 bg-white px-4 hover:bg-gray-50 md:flex"
          >
            <Globe className="h-4 w-4" />
            EN
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-md border-gray-200 bg-white hover:bg-gray-50"
          >
            <Menu className="h-5 w-5 text-[#594d46]" />
          </Button>
        </div>
      </div>
    </header>
  );
}
