import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import ServicePageExtras from "@/components/sections/ServicePageExtras";

export const metadata: Metadata = {
  title: "Commercial Lighting",
  description:
    "Professional commercial outdoor lighting installations for businesses in Southeast Louisiana. Enhance your property's curb appeal, visibility, and atmosphere.",
};

const commercialTypes = [
  { name: "Storefronts", desc: "Make your business visible and inviting from the street, day and night.", icon: "🏪" },
  { name: "Restaurants & Venues", desc: "Create ambiance that sets your dining or event space apart from the competition.", icon: "🍽️" },
  { name: "Office Buildings", desc: "Professional exterior lighting that conveys quality and attention to detail.", icon: "🏢" },
  { name: "Parking & Safety", desc: "Functional lighting that protects customers, staff, and property after dark.", icon: "🔦" },
];

const benefits = [
  "Increase visibility and foot traffic",
  "Enhance brand perception and professionalism",
  "Improve safety and reduce liability",
  "Energy-efficient LED systems",
  "Minimal disruption to business operations",
  "Maintenance plans available",
];

export default function CommercialPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/service-commercial.jpg')" }}>
        <div className="absolute inset-0 bg-surface-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-green text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Services
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Commercial
            <br />
            <span className="italic text-brand-gold">Lighting</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-8">
            Your business&apos;s first impression starts from the curb. Strategic commercial lighting
            enhances visibility, builds trust, and drives foot traffic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red/85 text-white font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all"
            >
              Get a Business Quote <ArrowRight size={16} />
            </Link>
            <a
              href="tel:5043896555"
              className="inline-flex items-center justify-center gap-2 border border-brand-green/50 text-brand-green hover:bg-brand-green hover:text-white font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all"
            >
              <Phone size={16} />
              (504) 389-6555
            </a>
          </div>
        </div>
      </section>

      {/* Commercial types */}
      <section className="py-20" style={{ background: "linear-gradient(160deg, #fef9ee 0%, #fdf0c0 50%, #fef6e0 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3">
              We Work With All Property Types
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              From small storefronts to large commercial properties, we design lighting systems that
              meet your operational and aesthetic needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {commercialTypes.map((t) => (
              <div
                key={t.name}
                className="border-t-4 border-t-brand-green-bright rounded-2xl p-7 text-center hover:shadow-lg transition-shadow"
                style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)", border: "1px solid rgba(0,179,64,0.2)", borderTop: "4px solid #00b340" }}
              >
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="font-heading text-lg font-semibold text-[#1a1a1a] mb-2">{t.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d1f0a 0%, #162b10 50%, #0f1a0c 100%)" }}>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-5">
                Good lighting is good business
              </h2>
              <p className="text-white/65 leading-relaxed mb-8">
                Studies show that well-lit businesses see higher foot traffic and are perceived as more
                trustworthy by customers. Our commercial lighting solutions are designed to work as
                hard as your business does.
              </p>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white/75 text-sm">
                    <CheckCircle2 size={15} className="text-brand-gold mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/service-commercial.jpg')" }} />
            </div>
          </div>
        </div>
      </section>

      <ServicePageExtras bgImage="/images/service-commercial.jpg" />

      {/* CTA */}
      <section className="py-20 bg-brand-green">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s talk about your property
          </h2>
          <p className="text-white/80 mb-8">
            We offer free on-site consultations for commercial properties. No obligation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-brand-green font-heading font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full transition-all shadow-lg"
          >
            Schedule a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
