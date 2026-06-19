import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Be The Light Decor privacy policy — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-[#0b1409] to-[#0a1f08]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-green text-xs font-semibold tracking-[0.3em] uppercase mb-4">Legal</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/55 text-sm">Last updated: June 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">

            <p className="text-gray-600 leading-relaxed mb-8">
              Be The Light Decor ("we," "us," or "our") is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, and safeguard your information when you visit
              our website or contact us for services.
            </p>

            <h2 className="font-heading text-2xl font-bold text-[#1a1a1a] mb-4 mt-10">Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We collect personal information you voluntarily provide through our website forms, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Name</li>
              <li>Address</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>How you heard about us</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-6">
              We also automatically collect non-personal information such as browser type, device details,
              and general connection data when you visit our website.
            </p>

            <h2 className="font-heading text-2xl font-bold text-[#1a1a1a] mb-4 mt-10">Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We use cookies to compile data about site traffic and interactions so we can improve the
              experience we offer. You can choose to disable cookies through your browser settings. Doing
              so may affect some features of our website.
            </p>

            <h2 className="font-heading text-2xl font-bold text-[#1a1a1a] mb-4 mt-10">How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use the information we collect to respond to your inquiries, schedule estimates, and
              provide our services. We will <strong>not sell, trade, transfer, or otherwise share your
              personal information</strong> with outside parties, except:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Trusted third parties and affiliates who assist us in delivering services to you</li>
              <li>When required by law or to protect our rights</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-[#1a1a1a] mb-4 mt-10">Text Message Authorization</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              By opting in to text communications on our website, you authorize Be The Light Decor to
              contact you via SMS. Message and data rates may apply.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              To unsubscribe at any time, reply <strong>STOP</strong> to any text message you receive,
              or text <strong>DND STOP</strong> to (504) 920-5321.
            </p>

            <h2 className="font-heading text-2xl font-bold text-[#1a1a1a] mb-4 mt-10">Security</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We implement appropriate security measures to protect against unauthorized access to and
              disclosure of your information. Access is limited to employees, contractors, and authorized
              partners who need it to provide services to you.
            </p>

            <h2 className="font-heading text-2xl font-bold text-[#1a1a1a] mb-4 mt-10">Policy Updates</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Be The Light Decor reserves the right to update this Privacy Policy at any time. Continued
              use of our website following any changes constitutes your acceptance of the updated policy.
              We encourage you to review this page periodically.
            </p>

            <h2 className="font-heading text-2xl font-bold text-[#1a1a1a] mb-4 mt-10">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              If you have questions about this Privacy Policy, please contact us:
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
