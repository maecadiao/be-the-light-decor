import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our portfolio of outdoor lighting installations — landscape lighting, holiday displays, events, and commercial projects across Southeast Louisiana.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-[#0b1409] to-[#0a1f08]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-green text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Our Work
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5">
            The Gallery
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Every photo here is a real property we&apos;ve transformed. Browse our work across
            landscape lighting, holiday displays, events, and commercial installations.
          </p>
        </div>
      </section>

      <GalleryGrid />

      {/* CTA */}
      <section className="relative py-28 bg-cover bg-center bg-scroll md:bg-fixed" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/72" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-48 md:w-[500px] md:h-[500px] rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 65%)" }} />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold px-5 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-widest mb-8">
            Free Estimates · No Obligation
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Your Home Could
            <br />
            <span className="italic text-brand-gold">Look Like This</span>
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            Every photo in this gallery is a real property we transformed. You could be next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 font-heading font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full transition-all" style={{ background: "#eeba0b", color: "#1a1a1a", boxShadow: "0 8px 32px rgba(238,186,11,0.45)" }}>
              Get a Free Estimate <ArrowRight size={16} />
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
