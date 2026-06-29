import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "Be The Light Decor serves Southeast Louisiana and the Mississippi Gulf Coast. See if we cover your city — Covington, Mandeville, New Orleans, Baton Rouge, and more.",
};

const primaryAreas = [
  {
    city: "Covington",
    state: "LA",
    desc: "Our home base. We know Covington's neighborhoods, streets, and character — and we love lighting them up.",
    bg: "linear-gradient(135deg, #fff8e1 0%, #fde68a 100%)",
    border: "#f59e0b",
    icon: "text-amber-600",
  },
  {
    city: "Mandeville",
    state: "LA",
    desc: "From lakefront properties to suburban homes, we've installed beautiful lighting throughout Mandeville.",
    bg: "linear-gradient(135deg, #f0fdf4 0%, #86efac 100%)",
    border: "#22c55e",
    icon: "text-green-600",
  },
  {
    city: "New Orleans",
    state: "LA",
    desc: "The city that knows how to celebrate. We bring holiday and landscape lighting to homes and businesses across NOLA.",
    bg: "linear-gradient(135deg, #fffde7 0%, #fcd34d 100%)",
    border: "#eeba0b",
    icon: "text-yellow-600",
  },
  {
    city: "Metairie",
    state: "LA",
    desc: "One of our most active service areas — we've completed dozens of residential and commercial projects in Metairie.",
    bg: "linear-gradient(135deg, #ecfdf5 0%, #6ee7b7 100%)",
    border: "#10b981",
    icon: "text-emerald-600",
  },
  {
    city: "Baton Rouge",
    state: "LA",
    desc: "Serving the Capital City with the same attention to detail we bring to every project.",
    bg: "linear-gradient(135deg, #fefce8 0%, #fde047 100%)",
    border: "#eab308",
    icon: "text-yellow-500",
  },
  {
    city: "Slidell",
    state: "LA",
    desc: "Across the lake and into the Northshore — Slidell is fully within our service range.",
    bg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    border: "#14b8a6",
    icon: "text-teal-600",
  },
];

const additionalAreas = [
  "Kenner, LA",
  "Harahan, LA",
  "River Ridge, LA",
  "Gretna, LA",
  "Madisonville, LA",
  "Abita Springs, LA",
  "Lacombe, LA",
  "Folsom, LA",
  "Franklinton, LA",
  "Mississippi Gulf Coast",
  "Bay St. Louis, MS",
  "Waveland, MS",
];

export default function ServiceAreaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/service-area-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Where We Work
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Southeast Louisiana
            <br />
            <span className="italic text-brand-gold">Is Our Home</span>
          </h1>
          <p className="text-white/80 text-lg max-w-xl leading-relaxed">
            Based in Covington, we serve communities across Southeast Louisiana and the Mississippi
            Gulf Coast. If you&apos;re in our area, we can light up your home or business.
          </p>
        </div>
      </section>

      {/* Primary cities */}
      <section className="py-24" style={{ background: "linear-gradient(160deg, #fef9ee 0%, #fdf0c0 45%, #fef6e0 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-amber-600 font-body font-semibold text-sm uppercase tracking-widest mb-3">Coverage</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3">
              Primary Service Areas
            </h2>
            <p className="text-amber-900/60 max-w-lg mx-auto">
              These are the cities where we work most frequently. Same-week availability is often
              possible in these areas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {primaryAreas.map((area) => (
              <div
                key={area.city}
                className="rounded-2xl p-7 hover:shadow-xl transition-shadow border"
                style={{ background: area.bg, borderColor: area.border + "66" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className={area.icon} />
                  <h3 className="font-heading text-lg font-bold text-[#1a1a1a]">
                    {area.city}, {area.state}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + additional areas */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d1f0a 0%, #162b10 50%, #0f1a0c 100%)" }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-2xl sticky top-28 border-2 border-brand-gold/30" style={{ height: "420px" }}>
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-92.0%2C28.8%2C-88.0%2C31.8&layer=mapnik&marker=30.4735%2C-90.1013"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Be The Light Decor Service Area — Southeast Louisiana"
              />
            </div>

            <div>
              <p className="text-brand-gold font-body font-semibold text-xs uppercase tracking-widest mb-3">Extended Coverage</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                We also serve
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Our coverage extends across a wide region. Don&apos;t see your city? Give us a call —
                we may still be able to help.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {additionalAreas.map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-full font-body font-semibold"
                    style={{ background: "rgba(238,186,11,0.18)", border: "1px solid rgba(238,186,11,0.35)", color: "#fde68a" }}
                  >
                    <MapPin size={11} className="text-brand-gold shrink-0" />
                    {city}
                  </span>
                ))}
              </div>
              <p className="text-white/35 text-sm italic">
                Not sure if we cover your area? Just ask — we often travel further than expected for
                the right project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/service-area-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black/72" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 65%)" }} />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold px-5 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-widest mb-8">
            Free Estimates · No Pressure
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            In Our Area?
            <br />
            <span className="italic text-brand-gold">Let&apos;s Talk.</span>
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            We&apos;ll come out, see your property, and show you what&apos;s possible — at no cost and no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 font-heading font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full transition-all" style={{ background: "#eeba0b", color: "#1a1a1a", boxShadow: "0 8px 32px rgba(238,186,11,0.45)" }}>
              Request an Estimate <ArrowRight size={16} />
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
