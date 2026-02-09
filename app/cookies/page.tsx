import Link from "next/link";
import { ArrowLeft, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookiesPage() {
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
              <Cookie className="w-6 h-6 text-[#d4a574]" />
            </div>
            <h1 className="text-4xl font-bold text-[#4b3624]">Cookie Policy</h1>
          </div>
          <p className="text-gray-500">Last updated: February 09, 2026</p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 prose prose-gray max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#4b3624] mb-4">1. What are Cookies?</h2>
            <p className="text-gray-600 leading-relaxed">
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#4b3624] mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use cookies for several reasons including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
              <li><strong>Analytics Cookies:</strong> To understand how visitors interact with our website.</li>
              <li><strong>Preference Cookies:</strong> To remember your settings and choices.</li>
              <li><strong>Marketing Cookies:</strong> To deliver relevant advertisements to you based on your interests.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#4b3624] mb-4">3. Managing Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, as it will no longer be personalized to you.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#4b3624] mb-4">4. Updates to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-[#d4a574] font-bold">More Information</p>
            <p className="text-gray-600">
              For any further questions regarding our use of cookies, please email info@streamline.ae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
