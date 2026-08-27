import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import ServicePageExtras from "@/components/sections/ServicePageExtras";

export const metadata: Metadata = {
  title: "Christmas Lights Installer — Holiday Lighting in Southeast Louisiana",
  description:
    "Professional Christmas lights installer serving Southeast Louisiana. We hang, maintain, and take down holiday lighting for homes and businesses — no ladders, no hassle. Covington, Mandeville, New Orleans, and beyond.",
  alternates: { canonical: "/services/holiday-lighting" },
};

const holidays = [
  { name: "Christmas", desc: "Roofline lighting, tree wrapping, garlands, and full property displays.", icon: "🎄" },
  { name: "Mardi Gras", desc: "Purple, gold, and green — celebratory displays that capture the Louisiana spirit.", icon: "🎭" },
  { name: "Halloween", desc: "Spooky orange and purple lighting to set the scene for the season.", icon: "🎃" },
  { name: "Patriotic", desc: "Red, white, and blue displays for Fourth of July and patriotic holidays.", icon: "🇺🇸" },
];

const included = [
  "Custom design consultation",
  "Professional installation",
  "Mid-season maintenance check",
  "Post-season removal",
  "Safe off-site storage",
  "Next-year reinstall ready",
];

export default function HolidayLightingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src="/images/service-holiday.jpg"
          alt="Professional holiday lighting installation for Southeast Louisiana homes and businesses"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-surface-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-green text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Services
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Christmas Lights
            <br />
            <span className="italic text-brand-gold">Installer</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-8">
            Southeast Louisiana&apos;s professional holiday lighting team. We design, install, maintain,
            remove, and store everything — all you do is enjoy the season.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red/85 text-white font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all"
            >
              Book This Season <ArrowRight size={16} />
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

      {/* Holidays we cover */}
      <section className="py-20" style={{ background: "linear-gradient(160deg, #fef9ee 0%, #fdf0c0 50%, #fef6e0 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3">
              Every Season, Every Celebration
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              We don&apos;t just do Christmas. We bring the joy of Louisiana&apos;s full holiday calendar to your property.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {holidays.map((h) => (
              <div
                key={h.name}
                className={`rounded-2xl p-7 text-center border-t-4 hover:shadow-lg transition-shadow ${
                  h.name === "Christmas" ? "bg-red-50 border-red-400" :
                  h.name === "Mardi Gras" ? "bg-yellow-50 border-brand-gold" :
                  h.name === "Halloween" ? "bg-orange-50 border-orange-400" :
                  "bg-blue-50 border-blue-400"
                }`}
              >
                <div className="text-4xl mb-4">{h.icon}</div>
                <h3 className="font-heading text-lg font-semibold text-[#1a1a1a] mb-2">{h.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full service section */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d1f0a 0%, #162b10 50%, #0f1a0c 100%)" }}>
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-5">
                Full-service means full peace of mind
              </h2>
              <p className="text-white/65 leading-relaxed mb-5">
                Holiday lighting should bring joy — not ladder accidents and tangled strings. We take
                care of every step so you can focus on your family, your guests, and your celebration.
              </p>
              <p className="text-white/65 leading-relaxed mb-8">
                From custom roofline lighting to illuminated landscaping, every display is designed
                specifically for your property. No generic package. No shortcuts.
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

            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <Image
                src="/images/service-holiday.jpg"
                alt="Holiday lighting display installed on a Southeast Louisiana home by Be The Light Decor"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ServicePageExtras bgImage="/images/service-holiday.jpg" />

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <Image src="/images/service-holiday.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/72" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-48 md:w-[500px] md:h-[500px] rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 65%)" }} />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold px-5 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-widest mb-8">
            Slots Fill Up Fast · Book Early
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Don&apos;t Miss
            <br />
            <span className="italic text-brand-gold">This Season</span>
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            Holiday install slots book quickly. Reach out now to secure your spot before we fill up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 font-heading font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full transition-all" style={{ background: "#eeba0b", color: "#1a1a1a", boxShadow: "0 8px 32px rgba(238,186,11,0.45)" }}>
              Reserve Your Spot <ArrowRight size={16} />
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
