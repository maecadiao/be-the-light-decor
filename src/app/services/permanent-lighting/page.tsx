import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import ServicePageExtras from "@/components/sections/ServicePageExtras";

export const metadata: Metadata = {
  title: "Permanent Lighting",
  description:
    "Permanent programmable LED lighting installed once and controlled from your phone. Change colors and effects for every season, holiday, or event — no reinstalling needed.",
};

const occasions = [
  { name: "Christmas", color: "text-brand-red", bg: "bg-red-50", desc: "Classic red, green, and white — full holiday magic without the yearly setup hassle.", icon: "🎄" },
  { name: "Mardi Gras", color: "text-brand-gold", bg: "bg-yellow-50", desc: "Purple, gold, and green — celebrate Louisiana's biggest party in style.", icon: "🎭" },
  { name: "Saints Game Day", color: "text-[#1a1a1a]", bg: "bg-gray-50", desc: "Black and gold on game day. Show the whole neighborhood where you stand.", icon: "🏈" },
  { name: "Fourth of July", color: "text-brand-red", bg: "bg-red-50", desc: "Red, white, and blue — bring the patriotic spirit to your roofline.", icon: "🇺🇸" },
  { name: "Valentine's Day", color: "text-pink-600", bg: "bg-pink-50", desc: "Soft pinks and reds to set the mood for the most romantic night of the year.", icon: "❤️" },
  { name: "Any Occasion", color: "text-brand-green", bg: "bg-surface-light", desc: "Birthday, anniversary, LSU game, or just your mood — millions of color options.", icon: "✨" },
];

const features = [
  "Installed once — no seasonal reinstalls",
  "App-controlled from your phone",
  "Millions of color combinations",
  "Energy-efficient LED technology",
  "Weatherproof for Louisiana climate",
  "Syncs to music for special events",
  "Scheduling & timer controls",
  "Lifetime warranty on fixtures",
];

export default function PermanentLightingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-cover bg-center bg-scroll md:bg-fixed" style={{ backgroundImage: "url('/images/service-permanent.jpg')" }}>
        <div className="absolute inset-0 bg-surface-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-green text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Services
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Permanent
            <br />
            <span className="italic text-brand-gold">Lighting</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-8">
            Installed once. Programmed forever. Change your home&apos;s colors for any season,
            holiday, or mood — all from your phone with zero reinstalling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red/85 text-white font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all"
            >
              Get a Free Quote <ArrowRight size={16} />
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

      {/* How it works */}
      <section className="py-20" style={{ background: "linear-gradient(160deg, #fef9ee 0%, #fdf0c0 50%, #fef6e0 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3">
              One Install. Infinite Possibilities.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Unlike seasonal lighting, permanent LED systems are built into your roofline and trim
              once — then you control everything from a simple app. Christmas one week, Saints colors
              the next, or just your favorite vibe year-round.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {occasions.map((o) => (
              <div
                key={o.name}
                className={`${o.bg} border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow`}
              >
                <div className="text-3xl mb-3">{o.icon}</div>
                <h3 className={`font-heading text-lg font-semibold mb-2 ${o.color}`}>{o.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-surface-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-5">
                Built for Louisiana. Built to last.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Our permanent lighting systems are installed flush with your roofline so they look
                clean and intentional — not like temporary strings stapled up every December.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Weatherproof LEDs stand up to Louisiana heat, humidity, and storm season. Once
                they&apos;re up, all you do is open the app and pick your colors.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                    <CheckCircle2 size={15} className="text-brand-green mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="aspect-[4/3] bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/images/service-permanent.jpg')" }}
              />
            </div>
          </div>
        </div>
      </section>

      <ServicePageExtras bgImage="/images/service-permanent.jpg" />

      {/* CTA */}
      <section className="relative py-28 bg-cover bg-center bg-scroll md:bg-fixed" style={{ backgroundImage: "url('/images/service-permanent.jpg')" }}>
        <div className="absolute inset-0 bg-black/72" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-48 md:w-[500px] md:h-[500px] rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 65%)" }} />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold px-5 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-widest mb-8">
            Install Once · Use Every Month
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Install Once.
            <br />
            <span className="italic text-brand-gold">Celebrate Forever.</span>
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            Free estimates, professional installation, and a system you&apos;ll use every single month of the year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 font-heading font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full transition-all" style={{ background: "#eeba0b", color: "#1a1a1a", boxShadow: "0 8px 32px rgba(238,186,11,0.45)" }}>
              Get a Free Quote <ArrowRight size={16} />
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
