import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import ServicePageExtras from "@/components/sections/ServicePageExtras";

export const metadata: Metadata = {
  title: "Landscape Lighting",
  description:
    "Permanent outdoor landscape lighting installations for homes and businesses in Southeast Louisiana. Architectural lighting that enhances beauty, security, and curb appeal.",
};

const lightingTypes = [
  { name: "Tree & Uplighting", desc: "Dramatic uplights that highlight your trees, columns, and architectural focal points.", icon: "🌳" },
  { name: "Pathway & Walkway", desc: "Low-voltage path lights that guide guests safely and beautifully through your property.", icon: "🏡" },
  { name: "Facade & Wash", desc: "Wide-angle wash lighting that frames your home's structure and adds curb appeal after dark.", icon: "🏠" },
  { name: "Garden & Accent", desc: "Spotlights and accents for flowerbeds, statues, water features, and landscape details.", icon: "🌿" },
];

const benefits = [
  "Dramatically improve curb appeal and home value",
  "Enhance safety and security after dark",
  "Highlight your home's best architectural features",
  "LED technology — energy efficient and long-lasting",
  "Custom-designed for your specific property",
  "Professional design consultation included",
];

export default function LandscapeLightingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/service-landscape.jpg')" }}>
        <div className="absolute inset-0 bg-surface-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-green text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Services
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Landscape
            <br />
            <span className="italic text-brand-gold">Lighting</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-8">
            Permanent outdoor lighting that transforms your property after dark — making it more
            beautiful, more secure, and more you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red/85 text-white font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all"
            >
              Get a Free Estimate <ArrowRight size={16} />
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

      {/* Lighting types */}
      <section className="py-20" style={{ background: "linear-gradient(160deg, #fef9ee 0%, #fdf0c0 50%, #fef6e0 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3">
              Every Corner of Your Property, Illuminated
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              We design custom lighting systems that work together — no single fixture does everything,
              but the right combination transforms how your home looks and feels after dark.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {lightingTypes.map((t) => (
              <div
                key={t.name}
                className="border-t-4 border-t-brand-green-bright rounded-2xl p-7 text-center hover:shadow-lg transition-shadow"
                style={{ background: "linear-gradient(135deg, #fff8e1 0%, #fef3c7 100%)", borderColor: "rgba(238,186,11,0.3)" }}
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
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-5">
                Built for Louisiana. Built to last.
              </h2>
              <p className="text-white/65 leading-relaxed mb-8">
                We use commercial-grade LED fixtures designed for Louisiana&apos;s climate — humid
                summers, heavy rain, and everything in between. Every system is custom-designed for
                your property. No cookie-cutter packages, no shortcuts.
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
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/service-landscape.jpg')" }} />
            </div>
          </div>
        </div>
      </section>

      <ServicePageExtras bgImage="/images/service-landscape.jpg" />

      {/* CTA */}
      <section className="py-20 bg-brand-green">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to light up your property?
          </h2>
          <p className="text-white/80 mb-8">
            Get a free, no-pressure estimate. We&apos;ll come out, walk the property, and design
            something you&apos;ll love.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-brand-green font-heading font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full transition-all shadow-lg"
          >
            Get Your Free Estimate <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
