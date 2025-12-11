import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/footer";

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
      </body>
    </html>
  );
}
