import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 lg:py-32">
      <div className="container max-w-4xl">
        <div className="mb-12">
          <Button asChild variant="ghost" className="mb-8 hover:bg-gray-100">
            <Link href="/" className="flex items-center gap-2 text-gray-600">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-[#d4a574]/10 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#d4a574]" />
            </div>
            <h1 className="text-4xl font-bold text-[#4b3624]">Privacy Policy</h1>
          </div>
          <p className="text-gray-500">Last updated: February 09, 2026</p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 prose prose-gray max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#4b3624] mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Streamline Business Centre. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at info@streamline.ae.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#4b3624] mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the services or otherwise contacting us.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Personal identifiers (name, email address, phone number).</li>
              <li>Business information (company name, role, registration details).</li>
              <li>Usage data and cookies (IP address, browser type, pages visited).</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#4b3624] mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed">
              We use the information we collect or receive to provide and facilitate delivery of services to the user, to respond to user inquiries/offer support, and to send marketing and promotional communications (where permitted by law).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#4b3624] mb-4">4. Sharing Your Information</h2>
            <p className="text-gray-600 leading-relaxed">
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell your personal data to third parties.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#4b3624] mb-4">5. Your Privacy Rights</h2>
            <p className="text-gray-600 leading-relaxed uppercase font-bold text-sm tracking-widest mb-4">In accordance with UAE law and international standards:</p>
            <p className="text-gray-600 leading-relaxed">
              You have the right to request access to your personal information, request that we correct or delete it, and object to our processing of your data. To exercise these rights, please contact us.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-[#d4a574] font-bold">Contact Us</p>
            <p className="text-gray-600">
              Burjuman Business Tower, Level 10, Dubai, UAE<br />
              Email: info@streamline.ae<br />
              Phone: +971 50 522 9908
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
