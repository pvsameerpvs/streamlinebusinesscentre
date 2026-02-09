import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
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
              <FileText className="w-6 h-6 text-[#d4a574]" />
            </div>
            <h1 className="text-4xl font-bold text-[#4b3624]">Terms & Conditions</h1>
          </div>
          <p className="text-gray-500">Last updated: February 09, 2026</p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 prose prose-gray max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#4b3624] mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms & Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Streamline Business Centre ("we," "us" or "our"), concerning your access to and use of our physical premises and digital services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#4b3624] mb-4">2. Workspace Usage</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our workspaces (Office Space, Coworking, Meeting Rooms) must be used in accordance with the following principles:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Adherence to office etiquette and professional conduct.</li>
              <li>Compliance with local laws and regulations within the UAE.</li>
              <li>Respect for shared facilities and equipment.</li>
              <li>Prohibition of any illegal or disruptive activities.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#4b3624] mb-4">3. Fees and Payments</h2>
            <p className="text-gray-600 leading-relaxed">
              All fees for services are payable in accordance with the billing terms in effect at the time the fee or charge becomes payable. We reserve the right to change prices at any time with appropriate notice to active members.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#4b3624] mb-4">4. Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#4b3624] mb-4">5. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to terminate or suspend your access to our facilities and services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-[#d4a574] font-bold">Inquiries</p>
            <p className="text-gray-600">
              For any questions regarding these Terms, please reach out to our legal department at info@streamline.ae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
