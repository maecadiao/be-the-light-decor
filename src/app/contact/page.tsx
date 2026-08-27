import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free outdoor lighting estimate from Be The Light Decor. Serving Covington, Mandeville, New Orleans, and all of Southeast Louisiana.",
  alternates: { canonical: "/contact" },
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(504) 389-6555",
    href: "tel:5043896555",
  },
  {
    icon: Mail,
    label: "Email",
    value: "admin@bethelightdecor.com",
    href: "mailto:admin@bethelightdecor.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "389 Aspen Ln, Covington, LA 70433",
    href: "https://maps.google.com/?q=389+Aspen+Ln+Covington+LA+70433",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri: 8AM – 5PM",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-[#0b1409] to-[#0a1f08]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-green text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white leading-tight mb-5">
            Let&apos;s Light Up
            <br />
            <span className="italic text-brand-gold">Your Home</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Free estimates, no pressure, no obligation. Fill out the form or give us a call — we&apos;d love to chat.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-16" style={{ background: "linear-gradient(160deg, #fef9ee 0%, #fdf0c0 50%, #fef6e0 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <h2 className="font-heading text-2xl font-bold text-[#1a1a1a] mb-8">
                Other ways to reach us
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-green flex items-center justify-center shrink-0 shadow-sm">
                      <item.icon size={17} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[#1a1a1a] hover:text-brand-green text-sm transition-colors"
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#1a1a1a] text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Service area note */}
              <div className="mt-10 p-5 bg-surface-light border border-gray-100 rounded-xl">
                <p className="text-brand-green text-xs font-semibold tracking-widest uppercase mb-2">
                  Service Area
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We serve Covington, Mandeville, New Orleans, Metairie, Baton Rouge, Slidell, and
                  the Mississippi Gulf Coast.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md">
              <div className="px-8 py-5" style={{ background: "linear-gradient(135deg, #0d1f0a 0%, #162b10 100%)" }}>
                <h2 className="font-heading text-xl font-bold text-white">
                  Request a Free Estimate
                </h2>
                <p className="text-white/55 text-sm mt-1">
                  We&apos;ll follow up within one business day to schedule your consultation.
                </p>
              </div>
              <div className="p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
