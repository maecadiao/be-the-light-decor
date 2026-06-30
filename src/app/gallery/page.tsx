import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our portfolio of outdoor lighting installations — landscape lighting, holiday displays, events, and commercial projects across Southeast Louisiana.",
};

const categories = ["All", "Landscape", "Holiday", "Events", "Commercial"];

const galleryItems = [
  { label: "Landscape Lighting", category: "Landscape", img: "/images/service-landscape.jpg" },
  { label: "Christmas Lighting", category: "Holiday", img: "/images/service-holiday.jpg" },
  { label: "Holiday Display", category: "Holiday", img: "/images/hero-bg.jpg" },
  { label: "Permanent LED Lighting", category: "Landscape", img: "/images/service-permanent.jpg" },
  { label: "Event Lighting", category: "Events", img: "/images/service-event.jpg" },
  { label: "Commercial Lighting", category: "Commercial", img: "/images/service-commercial.jpg" },
  { label: "Gulf Coast Installation", category: "Landscape", img: "/images/service-area-hero.jpg" },
  { label: "Residential Lighting", category: "Landscape", img: "/images/about-preview.jpg" },
  { label: "Pathway Lighting", category: "Landscape", img: "/images/service-landscape.jpg" },
  { label: "Holiday Roofline", category: "Holiday", img: "/images/service-holiday.jpg" },
  { label: "Corporate Event", category: "Commercial", img: "/images/service-commercial.jpg" },
  { label: "Outdoor Uplighting", category: "Landscape", img: "/images/service-area-hero.jpg" },
];

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

      {/* Filter bar */}
      <section className="sticky top-[calc(2.25rem+5rem)] z-40 shadow-sm" style={{ background: "linear-gradient(160deg, #fef9ee 0%, #fdf0c0 100%)", borderBottom: "1px solid rgba(238,186,11,0.25)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  cat === "All"
                    ? "bg-brand-green text-white"
                    : "text-gray-600 hover:text-brand-green border border-gray-200 hover:border-brand-green/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d1f0a 0%, #162b10 50%, #0f1a0c 100%)" }}>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden relative group cursor-pointer border border-white/10 ${
                  i % 7 === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${item.img}')` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs font-medium">{item.label}</span>
                  <span className="ml-2 text-brand-gold text-xs">{item.category}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

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
