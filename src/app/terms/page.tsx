import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Be The Light Decor terms of service — conditions for using our website and services.",
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-[#0b1409] to-[#0a1f08]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-green text-xs font-semibold tracking-[0.3em] uppercase mb-4">Legal</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-white/55 text-sm">Last updated: June 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">

            <p className="text-gray-600 leading-relaxed mb-8">
              By accessing this website or using any services provided by Be The Light Decor ("we,"
              "us," or "our"), you agree to be bound by the following terms and conditions. Please read
              them carefully.
            </p>

            <h2 className="font-heading text-2xl font-bold text-[#1a1a1a] mb-4 mt-10">Use of Website</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              This website is provided for general informational purposes about our services. You agree
              not to use this website for any unlawful purpose or in any way that could damage, disable,
              or impair the site or interfere with any other party's use of it.
            </p>

            <h2 className="font-heading text-2xl font-bold text-[#1a1a1a] mb-4 mt-10">Services</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              All estimates provided by Be The Light Decor are non-binding until a written proposal is
              accepted by both parties. Final pricing may vary based on on-site assessment and project
              scope. We reserve the right to decline any project at our discretion.
            </p>

            <h2 className="font-heading text-2xl font-bold text-[#1a1a1a] mb-4 mt-10">Text Message Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              By providing your phone number and opting in to text communications, you consent to
              receive SMS messages from Be The Light Decor via automatic dialing systems. These may
              include appointment confirmations, service updates, and responses to your inquiries.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Supported carriers:</strong> AT&amp;T, Boost Mobile, Sprint, T-Mobile, U.S.
              Cellular, and Verizon Wireless (carriers may be added or removed without notice).
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Message frequency:</strong> Varies based on your interactions with us.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Message &amp; data rates</strong> may apply depending on your carrier and plan.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>To opt out:</strong> Reply <strong>STOP</strong> to any text message at any
              time. For help, contact us at (504) 920-5321. You are responsible for providing an
              accurate phone number and ensuring you have the authority to consent to messages at
              that number. Please opt out before changing or deactivating your phone number.
            </p>

            <h2 className="font-heading text-2xl font-bold text-[#1a1a1a] mb-4 mt-10">Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              All content on this website — including text, photos, logos, and graphics — is the
              property of Be The Light Decor and may not be reproduced, distributed, or used without
              our express written permission.
            </p>

            <h2 className="font-heading text-2xl font-bold text-[#1a1a1a] mb-4 mt-10">Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Be The Light Decor shall not be liable for any indirect, incidental, or consequential
              damages arising from your use of this website or our services. Our total liability in
              any matter shall not exceed the amount paid by you for the specific service in question.
            </p>

            <h2 className="font-heading text-2xl font-bold text-[#1a1a1a] mb-4 mt-10">Changes to These Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Be The Light Decor may update these Terms of Service at any time by posting the revised
              version on this page. Continued use of our website or services following any changes
              constitutes your acceptance of the updated terms.
            </p>

            <h2 className="font-heading text-2xl font-bold text-[#1a1a1a] mb-4 mt-10">Governing Law</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              These terms are governed by the laws of the State of Louisiana. Any disputes shall be
              resolved in the courts of St. Tammany Parish, Louisiana.
            </p>

            <h2 className="font-heading text-2xl font-bold text-[#1a1a1a] mb-4 mt-10">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              Questions about these terms? Reach out:
            </p>
            <ul className="list-none text-gray-600 space-y-1">
              <li>Email: <a href="mailto:admin@bethelightdecor.com" className="text-brand-green hover:underline">admin@bethelightdecor.com</a></li>
              <li>Phone: <a href="tel:5043896555" className="text-brand-green hover:underline">(504) 389-6555</a></li>
              <li>Address: 389 Aspen Ln, Covington, LA 70433</li>
            </ul>

          </div>
        </div>
      </section>
    </>
  );
}
