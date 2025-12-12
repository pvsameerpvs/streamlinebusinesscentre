import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/footer";
import N8nChat from "@/components/N8nChat";

export const metadata: Metadata = {
  title: "Streamline Business Centre | Office space your way",
  description:
    "From a single desk to a whole building. Flexible office space, coworking, meeting rooms and virtual offices in Dubai."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <SiteFooter />

        {/* Bottom-right AI chat widget */}
        <N8nChat />
      </body>
    </html>
  );
}
