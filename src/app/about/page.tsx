import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Heart, MapPin, MessageCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Be The Light Decor is a family-owned outdoor lighting company based in Covington, Louisiana. Learn our story, our values, and our Pink Lights for Hope initiative.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    num: "01",
    icon: Heart,
    iconColor: "text-brand-gold",
    iconBg: "bg-brand-gold/15 border-brand-gold/25",
    accent: "#eeba0b",
    title: "Family First",
    desc: "We're a family business. That means we treat your home — and you — the way we'd want our own family treated.",
  },
  {
    num: "02",
    icon: MapPin,
    iconColor: "text-brand-green-bright",
    iconBg: "bg-brand-green-bright/15 border-brand-green-bright/25",
    accent: "#00b340",
    title: "Local Expertise",
    desc: "We know Southeast Louisiana. The climate, the oak trees, the culture. That knowledge shows in every installation.",
  },
  {
    num: "03",
    icon: MessageCircle,
    iconColor: "text-brand-gold",
    iconBg: "bg-brand-gold/15 border-brand-gold/25",
    accent: "#eeba0b",
    title: "No-Pressure Process",
    desc: "We don't push. We listen, design, and let our work speak for itself.",
  },
  {
    num: "04",
    icon: ShieldCheck,
    iconColor: "text-brand-green-bright",
    iconBg: "bg-brand-green-bright/15 border-brand-green-bright/25",
    accent: "#00b340",
    title: "Full Accountability",
    desc: "Licensed, insured, and standing behind every project we complete.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-[#0b1409] to-[#0a1f08]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_20%_50%,rgba(0,179,64,0.06),transparent)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-green text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Our Story
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Local. Trusted.
            <br />
            <span className="italic text-brand-gold">Family Owned.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            We started Be The Light Decor because we believe every home and business in Southeast
            Louisiana deserves to shine — not just during the day.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20" style={{ background: "linear-gradient(160deg, #fef9ee 0%, #fdf0c0 50%, #fef6e0 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-5">
                We&apos;re your neighbors, not a national chain
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Based in Covington, Louisiana, Be The Light Decor is a family-owned business that
                serves the communities we live in. We&apos;re proud members of Southeast Louisiana —
                the oak trees, the bayous, the Mardi Gras spirit, and everything in between is part
                of who we are.
              </p>
              <p className="text-gray-500 leading-relaxed mb-5">
                When you hire us, you&apos;re not getting a franchise employee following a script.
                You&apos;re getting a team that genuinely cares about your property, your vision, and
                your experience from the first phone call to the final light installed.
              </p>
              <p className="text-gray-500 leading-relaxed">
                We handle everything — from permanent landscape lighting to seasonal holiday displays —
                so you never have to climb a ladder or untangle a single light string again.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative">
              <Image
                src="/images/about-preview.jpg"
                alt="Be The Light Decor — family-owned outdoor lighting company based in Covington, Louisiana"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d1f0a 0%, #162b10 50%, #0f1a0c 100%)" }}>
        <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-gold font-body font-semibold text-xs uppercase tracking-widest mb-3">Our Values</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-3">
              What We Stand For
            </h2>
            <p className="text-white/50 max-w-lg mx-auto">
              These aren&apos;t just words on a page — they&apos;re how we actually operate.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="relative border border-white/10 rounded-2xl p-7 overflow-hidden group hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
              >
                {/* Bottom accent bar on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: v.accent }}
                />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${v.iconBg}`}>
                  <v.icon size={22} className={v.iconColor} />
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-2">{v.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pink Lights for Hope — kept intentionally dark/pink themed */}
      <section id="pink-lights" className="py-24 bg-[#110510] border-y border-[#e8477a]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#e8477a]/10 border border-[#e8477a]/25 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e8477a]" />
                <span className="text-[#e8477a] text-xs font-semibold tracking-[0.2em] uppercase">
                  Community Initiative
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-5">
                Pink Lights for Hope
              </h2>
              <p className="text-white/65 leading-relaxed mb-5">
                Every October, we participate in Pink Lights for Hope — a breast cancer awareness
                initiative where we light homes and businesses in pink to honor survivors and spread
                awareness across our community.
              </p>
              <p className="text-white/65 leading-relaxed mb-8">
                In 2023, we were honored to select Stacey Buras Culotta as a survivor honoree —
                illuminating her home in pink as a tribute to her strength and resilience.
              </p>
              <p className="text-white/65 leading-relaxed font-medium">
                Being a good business means being a good neighbor. Pink Lights for Hope is one way
                we live that out.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#e8477a]/20 shadow-2xl relative">
              <Image
                src="/images/pink-lights-hope.jpg.png"
                alt="Pink Lights for Hope — Be The Light Decor breast cancer awareness initiative honoring Stacey Buras Culotta"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <Image src="/images/about-preview.jpg" alt="Be The Light Decor team outdoor lighting installation in Southeast Louisiana" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/72" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-48 md:w-[500px] md:h-[500px] rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 65%)" }} />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold px-5 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-widest mb-8">
            Free Estimates · No Obligation
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            We&apos;d Love to
            <br />
            <span className="italic text-brand-gold">Work With You</span>
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            Reach out for a free estimate — no pressure, no obligation. Just a conversation about what&apos;s possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 font-heading font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full transition-all" style={{ background: "#eeba0b", color: "#1a1a1a", boxShadow: "0 8px 32px rgba(238,186,11,0.45)" }}>
              Get in Touch <ArrowRight size={16} />
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
