import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import ServicePageExtras from "@/components/sections/ServicePageExtras";

export const metadata: Metadata = {
  title: "Event Lighting",
  description:
    "Professional event and wedding lighting in Southeast Louisiana. We create stunning lighting setups for weddings, parties, corporate events, and special occasions.",
};

const eventTypes = [
  { name: "Weddings", desc: "Romantic string lights, ceremony uplighting, and reception ambiance that makes your wedding unforgettable.", icon: "💍" },
  { name: "Outdoor Parties", desc: "Transform your backyard or venue into a stunning space for birthdays, anniversaries, and celebrations.", icon: "🎉" },
  { name: "Corporate Events", desc: "Professional lighting that sets the right tone for outdoor corporate gatherings and company events.", icon: "🏢" },
  { name: "Special Occasions", desc: "Graduations, reunions, and milestone events deserve extraordinary lighting.", icon: "🌟" },
];

const included = [
  "Event design consultation",
  "Custom lighting plan",
  "Day-of professional setup",
  "On-call support during event",
  "Efficient post-event teardown",
  "Generator options available",
];

export default function EventLightingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/service-event.jpg')" }}>
        <div className="absolute inset-0 bg-surface-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-green text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Services
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Event
            <br />
            <span className="italic text-brand-gold">Lighting</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-8">
            Your event only happens once. The right lighting makes it look — and feel — extraordinary.
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

      {/* Event types */}
      <section className="py-20" style={{ background: "linear-gradient(160deg, #fef9ee 0%, #fdf0c0 50%, #fef6e0 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3">
              Every Event, Beautifully Lit
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Whether it&apos;s an intimate backyard wedding or a large outdoor celebration, we bring the vision to life.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {eventTypes.map((e) => (
              <div
                key={e.name}
                className="border-t-4 border-t-brand-gold rounded-2xl p-7 text-center hover:shadow-lg transition-shadow"
                style={{ background: "linear-gradient(135deg, #fff8e1 0%, #fef3c7 100%)", border: "1px solid rgba(238,186,11,0.3)", borderTop: "4px solid #eeba0b" }}
              >
                <div className="text-4xl mb-4">{e.icon}</div>
                <h3 className="font-heading text-lg font-semibold text-[#1a1a1a] mb-2">{e.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail section */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d1f0a 0%, #162b10 50%, #0f1a0c 100%)" }}>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-5">
                From consultation to cleanup, we handle it all
              </h2>
              <p className="text-white/65 leading-relaxed mb-5">
                Our event lighting team works with your venue, your layout, and your vision to design
                a setup that looks stunning in photos and feels magical in person.
              </p>
              <p className="text-white/65 leading-relaxed mb-8">
                We show up early, set up carefully, and disappear after — leaving you with nothing but
                compliments from your guests.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-white/75 text-sm">
                    <CheckCircle2 size={15} className="text-brand-gold mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/service-event.jpg')" }} />
            </div>
          </div>
        </div>
      </section>

      <ServicePageExtras bgImage="/images/service-event.jpg" />

      {/* CTA */}
      <section className="relative py-28 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/service-event.jpg')" }}>
        <div className="absolute inset-0 bg-black/72" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 65%)" }} />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold px-5 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-widest mb-8">
            Custom Designs · Day-Of Setup
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Make Your Event
            <br />
            <span className="italic text-brand-gold">Unforgettable</span>
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            Reach out with your event date and details — we&apos;ll handle everything from design to teardown.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 font-heading font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full transition-all" style={{ background: "#eeba0b", color: "#1a1a1a", boxShadow: "0 8px 32px rgba(238,186,11,0.45)" }}>
              Start Planning <ArrowRight size={16} />
            </Link>
            <a href="tel:5043896555" className="inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all">
              <Phone size={16} />
              (504) 389-6555
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
